import {auth, currentUser} from "@clerk/nextjs";
import { NextResponse } from "next/server";

import prismadb from "@/lib/prismadb";
import {stripe} from "@/lib/stripe";
import {absoluteUrl} from "@/lib/utils";

//const settingsUrl = absoluteUrl("settings");
const settingsUrl = "localhost:3000/settings";
export async function GET() {
    try {
        const {userId} = auth()
        const user = await currentUser();

        if(!userId || !user) {
            return new NextResponse("Unauthorized", {status: 401});
        }

        console.log("STRIPE API GET PRISMA");
        const userSubscription = await prismadb.userSubscription.findUnique({
            where: {
                userId
            }
        });
        console.log("STRIPE API GET SESSION STRIPE")

        if (userSubscription && userSubscription.stripeCustomerId) {
            const stripeSession = await stripe.billingPortal.sessions.create({
                customer: userSubscription.stripeCustomerId,
                return_url: settingsUrl
            });

            return new NextResponse(JSON.stringify({url: stripeSession.url}));
        }
        console.log("STRIPE API GET CHECKOUT ")

        const stripeSession = await stripe.checkout.sessions.create({
            success_url: settingsUrl,
            cancel_url: settingsUrl,
            payment_method_types: ["card"],
            mode: "subscription",
            billing_address_collection: "auto",
            customer_email: user.emailAddresses[0].emailAddress,
            line_items: [
                {
                    price_data: {
                        currency: "EUR",
                        product_data: {
                            name: "Genix Pro",
                            description: "Unlimited AI Generations",
                        },
                        unit_amount: 2000,
                        recurring: {
                            interval: "month"
                        }
                    },
                    quantity: 1,
                }
            ],
            metadata: {
                userId,
            },
        });

        console.log("TEST ", stripeSession);
        return new NextResponse(JSON.stringify({url: stripeSession.url }))
    } catch(error) {
        console.log("[STRIPE_ERROR]", error)
        return new NextResponse("Internal error", {status: 500});
    }
}