"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(dashboard)/layout",{

/***/ "(app-pages-browser)/./components/sidebar.tsx":
/*!********************************!*\
  !*** ./components/sidebar.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_font_google_target_css_path_components_sidebar_tsx_import_Montserrat_arguments_weight_600_subsets_latin_variableName_montserrat___WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/font/google/target.css?{\"path\":\"components/sidebar.tsx\",\"import\":\"Montserrat\",\"arguments\":[{\"weight\":\"600\",\"subsets\":[\"latin\"]}],\"variableName\":\"montserrat\"} */ \"(app-pages-browser)/./node_modules/next/font/google/target.css?{\\\"path\\\":\\\"components/sidebar.tsx\\\",\\\"import\\\":\\\"Montserrat\\\",\\\"arguments\\\":[{\\\"weight\\\":\\\"600\\\",\\\"subsets\\\":[\\\"latin\\\"]}],\\\"variableName\\\":\\\"montserrat\\\"}\");\n/* harmony import */ var next_font_google_target_css_path_components_sidebar_tsx_import_Montserrat_arguments_weight_600_subsets_latin_variableName_montserrat___WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_font_google_target_css_path_components_sidebar_tsx_import_Montserrat_arguments_weight_600_subsets_latin_variableName_montserrat___WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/utils */ \"(app-pages-browser)/./lib/utils.ts\");\n/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/layout-dashboard.mjs\");\n/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/message-square.mjs\");\n/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/image.mjs\");\n/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/video.mjs\");\n/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/music.mjs\");\n/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/code.mjs\");\n/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/settings.mjs\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst routes = [\n    {\n        label: \"Dashboard\",\n        icon: lucide_react__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n        href: \"/dashboard\",\n        color: \"text-sky-500\"\n    },\n    {\n        label: \"Conversion\",\n        icon: lucide_react__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n        href: \"/conversation\",\n        color: \"text-violet-500\"\n    },\n    {\n        label: \"Image Generation\",\n        icon: lucide_react__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n        href: \"/image\",\n        color: \"text-pink-700\"\n    },\n    {\n        label: \"Video Generation\",\n        icon: lucide_react__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n        href: \"/video\",\n        color: \"text-orange-700\"\n    },\n    {\n        label: \"Music Generation\",\n        icon: lucide_react__WEBPACK_IMPORTED_MODULE_9__[\"default\"],\n        href: \"/music\",\n        color: \"text-emerald-500\"\n    },\n    {\n        label: \"Code Generation\",\n        icon: lucide_react__WEBPACK_IMPORTED_MODULE_10__[\"default\"],\n        href: \"/code\",\n        color: \"text-green-700\"\n    },\n    {\n        label: \"Settings\",\n        icon: lucide_react__WEBPACK_IMPORTED_MODULE_11__[\"default\"],\n        href: \"/settings\"\n    }\n];\nconst Sidebar = ()=>{\n    _s();\n    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_4__.usePathname)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"px-3 py-2 flex-1\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    href: \"/dashboard\",\n                    className: \"flex items-center pl-3 mb-14\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"relative w-8 h-8 mr-4\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                fill: true,\n                                alt: \"Logo\",\n                                src: \"/logo.png\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ayasouk/Workspace/fullstack/ai-saas/components/sidebar.tsx\",\n                                lineNumber: 63,\n                                columnNumber: 25\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/ayasouk/Workspace/fullstack/ai-saas/components/sidebar.tsx\",\n                            lineNumber: 62,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)(\"text-2xl font-bold\", (next_font_google_target_css_path_components_sidebar_tsx_import_Montserrat_arguments_weight_600_subsets_latin_variableName_montserrat___WEBPACK_IMPORTED_MODULE_12___default().className)),\n                            children: \"AI-SAAS\"\n                        }, void 0, false, {\n                            fileName: \"/Users/ayasouk/Workspace/fullstack/ai-saas/components/sidebar.tsx\",\n                            lineNumber: 69,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/ayasouk/Workspace/fullstack/ai-saas/components/sidebar.tsx\",\n                    lineNumber: 61,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"space-y-1\",\n                    children: routes.map((route)=>{\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: route.href,\n                            className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)(\"text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition\", pathname == route.href ? \"text-white bg-white/10\" : \"text-zinc-400\"),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center flex-1\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(route.icon, {\n                                        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)(\"h-5 w-5 mr-3\", route.color)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ayasouk/Workspace/fullstack/ai-saas/components/sidebar.tsx\",\n                                        lineNumber: 77,\n                                        columnNumber: 29\n                                    }, undefined),\n                                    route.label\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/ayasouk/Workspace/fullstack/ai-saas/components/sidebar.tsx\",\n                                lineNumber: 76,\n                                columnNumber: 25\n                            }, undefined)\n                        }, route.href, false, {\n                            fileName: \"/Users/ayasouk/Workspace/fullstack/ai-saas/components/sidebar.tsx\",\n                            lineNumber: 75,\n                            columnNumber: 32\n                        }, undefined);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/ayasouk/Workspace/fullstack/ai-saas/components/sidebar.tsx\",\n                    lineNumber: 73,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/ayasouk/Workspace/fullstack/ai-saas/components/sidebar.tsx\",\n            lineNumber: 60,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/ayasouk/Workspace/fullstack/ai-saas/components/sidebar.tsx\",\n        lineNumber: 59,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Sidebar, \"xbyQPtUVMO7MNj7WjJlpdWqRcTo=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_4__.usePathname\n    ];\n});\n_c = Sidebar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sidebar);\nvar _c;\n$RefreshReg$(_c, \"Sidebar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvc2lkZWJhci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTTUE7QUFQd0I7QUFDQztBQUVFO0FBQzBFO0FBQy9EO0FBSTVDLE1BQU1ZLFNBQVM7SUFDWDtRQUNJQyxPQUFPO1FBQ1BDLE1BQU1SLG9EQUFlQTtRQUNyQlMsTUFBTTtRQUNOQyxPQUFPO0lBQ1g7SUFDQTtRQUNJSCxPQUFPO1FBQ1BDLE1BQU1QLG9EQUFhQTtRQUNuQlEsTUFBTTtRQUNOQyxPQUFPO0lBQ1g7SUFDQTtRQUNJSCxPQUFPO1FBQ1BDLE1BQU1ULG9EQUFTQTtRQUNmVSxNQUFNO1FBQ05DLE9BQU87SUFDWDtJQUNBO1FBQ0lILE9BQU87UUFDUEMsTUFBTUosb0RBQVNBO1FBQ2ZLLE1BQU07UUFDTkMsT0FBTztJQUNYO0lBQ0E7UUFDSUgsT0FBTztRQUNQQyxNQUFNTixvREFBS0E7UUFDWE8sTUFBTTtRQUNOQyxPQUFPO0lBQ1g7SUFDQTtRQUNJSCxPQUFPO1FBQ1BDLE1BQU1WLHFEQUFJQTtRQUNWVyxNQUFNO1FBQ05DLE9BQU87SUFDWDtJQUNBO1FBQ0lILE9BQU87UUFDUEMsTUFBTUwscURBQVFBO1FBQ2RNLE1BQU07SUFDVjtDQUNIO0FBRUQsTUFBTUUsVUFBVTs7SUFDWixNQUFNQyxXQUFXUCw0REFBV0E7SUFDNUIscUJBQ0ksOERBQUNRO1FBQUlDLFdBQVU7a0JBQ1gsNEVBQUNEO1lBQUlDLFdBQVU7OzhCQUNYLDhEQUFDbkIsa0RBQUlBO29CQUFDYyxNQUFLO29CQUFhSyxXQUFVOztzQ0FDOUIsOERBQUNEOzRCQUFJQyxXQUFVO3NDQUNYLDRFQUFDbEIsbURBQUtBO2dDQUNGbUIsSUFBSTtnQ0FDSkMsS0FBSTtnQ0FDSkMsS0FBSTs7Ozs7Ozs7Ozs7c0NBR1osOERBQUNDOzRCQUFHSixXQUFXakIsOENBQUVBLENBQUMsc0JBQXNCSCx5TEFBb0I7c0NBQUc7Ozs7Ozs7Ozs7Ozs4QkFJbkUsOERBQUNtQjtvQkFBSUMsV0FBVTs4QkFDVFIsT0FBT2EsR0FBRyxDQUFDLENBQUNDO3dCQUNWLHFCQUFPLDhEQUFDekIsa0RBQUlBOzRCQUFDYyxNQUFNVyxNQUFNWCxJQUFJOzRCQUFtQkssV0FBV2pCLDhDQUFFQSxDQUFDLG1JQUFtSWUsWUFBVVEsTUFBTVgsSUFBSSxHQUFHLDJCQUEyQjtzQ0FDblAsNEVBQUNJO2dDQUFJQyxXQUFVOztrREFDWCw4REFBQ00sTUFBTVosSUFBSTt3Q0FBQ00sV0FBV2pCLDhDQUFFQSxDQUFDLGdCQUFnQnVCLE1BQU1WLEtBQUs7Ozs7OztvQ0FDcERVLE1BQU1iLEtBQUs7Ozs7Ozs7MkJBSG9CYSxNQUFNWCxJQUFJOzs7OztvQkFNbEQ7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3BCO0dBOUJNRTs7UUFDZU4sd0RBQVdBOzs7S0FEMUJNO0FBZ0NOLCtEQUFlQSxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvc2lkZWJhci50c3g/N2E4NyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0ICBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHsgTW9udHNlcnJhdCB9IGZyb20gXCJuZXh0L2ZvbnQvZ29vZ2xlXCI7XG5pbXBvcnQgeyBjbiB9IGZyb20gXCJAL2xpYi91dGlsc1wiO1xuaW1wb3J0IHsgQ29kZSwgSW1hZ2VJY29uLCBMYXlvdXREYXNoYm9hcmQsIE1lc3NhZ2VTcXVhcmUsIE11c2ljLCBTZXR0aW5ncywgVmlkZW9JY29uIH0gZnJvbSBcImx1Y2lkZS1yZWFjdFwiO1xuaW1wb3J0IHt1c2VQYXRobmFtZX0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xuXG5jb25zdCBtb250c2VycmF0ID0gTW9udHNlcnJhdCh7d2VpZ2h0Oic2MDAnLCBzdWJzZXRzOiBbXCJsYXRpblwiXX0pO1xuXG5jb25zdCByb3V0ZXMgPSBbXG4gICAge1xuICAgICAgICBsYWJlbDogXCJEYXNoYm9hcmRcIixcbiAgICAgICAgaWNvbjogTGF5b3V0RGFzaGJvYXJkLFxuICAgICAgICBocmVmOiBcIi9kYXNoYm9hcmRcIixcbiAgICAgICAgY29sb3I6IFwidGV4dC1za3ktNTAwXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGxhYmVsOiBcIkNvbnZlcnNpb25cIixcbiAgICAgICAgaWNvbjogTWVzc2FnZVNxdWFyZSxcbiAgICAgICAgaHJlZjogXCIvY29udmVyc2F0aW9uXCIsXG4gICAgICAgIGNvbG9yOiBcInRleHQtdmlvbGV0LTUwMFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBsYWJlbDogXCJJbWFnZSBHZW5lcmF0aW9uXCIsXG4gICAgICAgIGljb246IEltYWdlSWNvbixcbiAgICAgICAgaHJlZjogXCIvaW1hZ2VcIixcbiAgICAgICAgY29sb3I6IFwidGV4dC1waW5rLTcwMFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBsYWJlbDogXCJWaWRlbyBHZW5lcmF0aW9uXCIsXG4gICAgICAgIGljb246IFZpZGVvSWNvbixcbiAgICAgICAgaHJlZjogXCIvdmlkZW9cIixcbiAgICAgICAgY29sb3I6IFwidGV4dC1vcmFuZ2UtNzAwXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGxhYmVsOiBcIk11c2ljIEdlbmVyYXRpb25cIixcbiAgICAgICAgaWNvbjogTXVzaWMsXG4gICAgICAgIGhyZWY6IFwiL211c2ljXCIsXG4gICAgICAgIGNvbG9yOiBcInRleHQtZW1lcmFsZC01MDBcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbGFiZWw6IFwiQ29kZSBHZW5lcmF0aW9uXCIsXG4gICAgICAgIGljb246IENvZGUsXG4gICAgICAgIGhyZWY6IFwiL2NvZGVcIixcbiAgICAgICAgY29sb3I6IFwidGV4dC1ncmVlbi03MDBcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbGFiZWw6IFwiU2V0dGluZ3NcIixcbiAgICAgICAgaWNvbjogU2V0dGluZ3MsXG4gICAgICAgIGhyZWY6IFwiL3NldHRpbmdzXCIsXG4gICAgfSxcbl07XG5cbmNvbnN0IFNpZGViYXIgPSAoKSA9PiB7XG4gICAgY29uc3QgcGF0aG5hbWUgPSB1c2VQYXRobmFtZSgpO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS00IHB5LTQgZmxleCBmbGV4LWNvbCBoLWZ1bGwgYmctWyMxMTE4MjddIHRleHQtd2hpdGVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtMyBweS0yIGZsZXgtMVwiPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZGFzaGJvYXJkXCIgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgcGwtMyBtYi0xNFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHctOCBoLTggbXItNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIkxvZ29cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9sb2dvLnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT17Y24oXCJ0ZXh0LTJ4bCBmb250LWJvbGRcIiwgbW9udHNlcnJhdC5jbGFzc05hbWUpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIEFJLVNBQVNcbiAgICAgICAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTFcIj5cbiAgICAgICAgICAgICAgICAgICAgeyByb3V0ZXMubWFwKChyb3V0ZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxMaW5rIGhyZWY9e3JvdXRlLmhyZWZ9IGtleT17cm91dGUuaHJlZn0gY2xhc3NOYW1lPXtjbihcInRleHQtc20gZ3JvdXAgZmxleCBwLTMgdy1mdWxsIGp1c3RpZnktc3RhcnQgZm9udC1tZWRpdW0gY3Vyc29yLXBvaW50ZXIgaG92ZXI6dGV4dC13aGl0ZSBob3ZlcjpiZy13aGl0ZS8xMCByb3VuZGVkLWxnIHRyYW5zaXRpb25cIiwgcGF0aG5hbWU9PXJvdXRlLmhyZWYgPyBcInRleHQtd2hpdGUgYmctd2hpdGUvMTBcIiA6IFwidGV4dC16aW5jLTQwMFwiICl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBmbGV4LTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cm91dGUuaWNvbiBjbGFzc05hbWU9e2NuKFwiaC01IHctNSBtci0zXCIsIHJvdXRlLmNvbG9yKX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyb3V0ZS5sYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTaWRlYmFyOyJdLCJuYW1lcyI6WyJtb250c2VycmF0IiwiTGluayIsIkltYWdlIiwiY24iLCJDb2RlIiwiSW1hZ2VJY29uIiwiTGF5b3V0RGFzaGJvYXJkIiwiTWVzc2FnZVNxdWFyZSIsIk11c2ljIiwiU2V0dGluZ3MiLCJWaWRlb0ljb24iLCJ1c2VQYXRobmFtZSIsInJvdXRlcyIsImxhYmVsIiwiaWNvbiIsImhyZWYiLCJjb2xvciIsIlNpZGViYXIiLCJwYXRobmFtZSIsImRpdiIsImNsYXNzTmFtZSIsImZpbGwiLCJhbHQiLCJzcmMiLCJoMSIsIm1hcCIsInJvdXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/sidebar.tsx\n"));

/***/ })

});