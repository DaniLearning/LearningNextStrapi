/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/topic/[id]",{

/***/ "./pages/topic/[id]/index.js":
/*!***********************************!*\
  !*** ./pages/topic/[id]/index.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_topic_subtopic_SubtopicList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/topic/subtopic/SubtopicList */ \"./components/topic/subtopic/SubtopicList.js\");\n/* harmony import */ var _components_topic_TopicTitle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/topic/TopicTitle */ \"./components/topic/TopicTitle.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/Dani/Documents/nextStrapi/LearningNextStrapi/pages/topic/[id]/index.js\",\n    _this = undefined;\n\n\n\n\n\n\nvar topic = function topic(_ref) {\n  var subtopics = _ref.subtopics,\n      topic = _ref.topic;\n  //   const router = useRouter();\n  //   const { id } = router.query;\n  console.log(topic.id);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n      onclick: \"location.href = '/';\",\n      children: \"Back\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_topic_TopicTitle__WEBPACK_IMPORTED_MODULE_4__.default, {\n      main_title: topic.main_title,\n      second_title: topic.second_title,\n      description: topic.description\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_topic_subtopic_SubtopicList__WEBPACK_IMPORTED_MODULE_3__.default, {\n      topics: subtopics\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true);\n};\n\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (topic);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdG9waWMvW2lkXS9pbmRleC5qcz80NDc2Il0sIm5hbWVzIjpbInRvcGljIiwic3VidG9waWNzIiwiY29uc29sZSIsImxvZyIsImlkIiwibWFpbl90aXRsZSIsInNlY29uZF90aXRsZSIsImRlc2NyaXB0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7O0FBQ0EsSUFBTUEsS0FBSyxHQUFHLHFCQUEwQjtBQUFBLE1BQXZCQyxTQUF1QixRQUF2QkEsU0FBdUI7QUFBQSxNQUFaRCxLQUFZLFFBQVpBLEtBQVk7QUFDdEM7QUFDQTtBQUNBRSxTQUFPLENBQUNDLEdBQVIsQ0FBWUgsS0FBSyxDQUFDSSxFQUFsQjtBQUNBLHNCQUNFO0FBQUEsNEJBQ0U7QUFBUSxhQUFPLEVBQUMsc0JBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRSw4REFBQyxpRUFBRDtBQUNFLGdCQUFVLEVBQUVKLEtBQUssQ0FBQ0ssVUFEcEI7QUFFRSxrQkFBWSxFQUFFTCxLQUFLLENBQUNNLFlBRnRCO0FBR0UsaUJBQVcsRUFBRU4sS0FBSyxDQUFDTztBQUhyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkYsZUFPRSw4REFBQyw0RUFBRDtBQUFjLFlBQU0sRUFBRU47QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVBGLGVBU0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVRGO0FBQUEsa0JBREY7QUFhRCxDQWpCRDs7O0FBb0RBLCtEQUFlRCxLQUFmIiwiZmlsZSI6Ii4vcGFnZXMvdG9waWMvW2lkXS9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgYXBpU2VydmVyIH0gZnJvbSBcIi4uLy4uLy4uL2NvbmZpZ1wiO1xuaW1wb3J0IFN1YnRvcGljTGlzdCBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy90b3BpYy9zdWJ0b3BpYy9TdWJ0b3BpY0xpc3RcIjtcbmltcG9ydCBUb3BpY1RpdGxlIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL3RvcGljL1RvcGljVGl0bGVcIjtcbmNvbnN0IHRvcGljID0gKHsgc3VidG9waWNzLCB0b3BpYyB9KSA9PiB7XG4gIC8vICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIC8vICAgY29uc3QgeyBpZCB9ID0gcm91dGVyLnF1ZXJ5O1xuICBjb25zb2xlLmxvZyh0b3BpYy5pZCk7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxidXR0b24gb25jbGljaz1cImxvY2F0aW9uLmhyZWYgPSAnLyc7XCI+QmFjazwvYnV0dG9uPlxuICAgICAgPFRvcGljVGl0bGVcbiAgICAgICAgbWFpbl90aXRsZT17dG9waWMubWFpbl90aXRsZX1cbiAgICAgICAgc2Vjb25kX3RpdGxlPXt0b3BpYy5zZWNvbmRfdGl0bGV9XG4gICAgICAgIGRlc2NyaXB0aW9uPXt0b3BpYy5kZXNjcmlwdGlvbn1cbiAgICAgIC8+XG4gICAgICA8U3VidG9waWNMaXN0IHRvcGljcz17c3VidG9waWNzfSAvPlxuXG4gICAgICA8YnIgLz5cbiAgICA8Lz5cbiAgKTtcbn07XG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAoY29udGV4dCkgPT4ge1xuICBjb25zdCBpZCA9IGNvbnRleHQucGFyYW1zLmlkO1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHthcGlTZXJ2ZXJ9L3RvcGljcy8ke2lkfWApO1xuICBjb25zdCB0b3BpYyA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiAgY29uc3QgcmVzMiA9IGF3YWl0IGZldGNoKGAke2FwaVNlcnZlcn0vc3VidG9waWNzP3RvcGljLmlkPSR7aWR9YCk7XG4gIGNvbnN0IHN1YnRvcGljcyA9IGF3YWl0IHJlczIuanNvbigpO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHRvcGljLFxuICAgICAgc3VidG9waWNzLFxuICAgIH0sXG4gIH07XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUGF0aHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke2FwaVNlcnZlcn0vdG9waWNzYCk7XG4gIGNvbnN0IHRvcGljcyA9IGF3YWl0IHJlcy5qc29uKCk7XG4gIGNvbnN0IGlkcyA9IHRvcGljcy5tYXAoKHRvcGljKSA9PiB0b3BpYy5pZCk7XG4gIGNvbnN0IHBhdGhzID0gaWRzLm1hcCgoaWQpID0+ICh7IHBhcmFtczogeyBpZDogaWQudG9TdHJpbmcoKSB9IH0pKTtcbiAgLy8gICBjb25zdCBwYXRocyA9IGFydGljbGVzLm1hcCgoYXJ0aWNsZSkgPT4ge1xuICAvLyAgICAgcGFyYW1zOiB7XG4gIC8vICAgICAgIGlkOiBhcnRpY2xlLmlkLnRvU3RyaW5nKCk7XG4gIC8vICAgICB9XG4gIC8vICAgfSk7XG4gIC8vIGNvbnN0IHBhdGhzID0gW3sgcGFyYW1zOiB7IGlkOiBcIjFcIiB9IH0sIHsgcGFyYW1zOiB7IGlkOiBcIjJcIiB9IH1dO1xuICAvLyBjb25zb2xlLmxvZyhwYXRocyk7XG5cbiAgcmV0dXJuIHtcbiAgICBwYXRocyxcbiAgICBmYWxsYmFjazogZmFsc2UsXG4gIH07XG59O1xuZXhwb3J0IGRlZmF1bHQgdG9waWM7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/topic/[id]/index.js\n");

/***/ })

});