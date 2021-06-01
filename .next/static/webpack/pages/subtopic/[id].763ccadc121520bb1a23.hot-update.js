/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/subtopic/[id]",{

/***/ "./components/details/DetailsList.js":
/*!*******************************************!*\
  !*** ./components/details/DetailsList.js ***!
  \*******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);


;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./pages/subtopic/[id]/index.js":
/*!**************************************!*\
  !*** ./pages/subtopic/[id]/index.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_topic_subtopic_SubtopicList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/topic/subtopic/SubtopicList */ \"./components/topic/subtopic/SubtopicList.js\");\n/* harmony import */ var _components_topic_TopicTitle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/topic/TopicTitle */ \"./components/topic/TopicTitle.js\");\n/* harmony import */ var _components_details_DetailsList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/details/DetailsList */ \"./components/details/DetailsList.js\");\n/* harmony import */ var _components_details_DetailsList__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_components_details_DetailsList__WEBPACK_IMPORTED_MODULE_5__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/Dani/Documents/nextStrapi/LearningNextStrapi/pages/subtopic/[id]/index.js\",\n    _this = undefined;\n\n\n\n\n\n\n\nvar topic = function topic(_ref) {\n  var subtopics = _ref.subtopics,\n      topic = _ref.topic,\n      details = _ref.details;\n  //   const router = useRouter();\n  //   const { id } = router.query;\n  var topicId = details[0].subtopic.topic;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n        href: \"/topic/[id]\",\n        as: topicId ? \"/topic/\".concat(topicId) : \"/\",\n        children: \"go back\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_components_details_DetailsList__WEBPACK_IMPORTED_MODULE_5___default()), {\n      details: details\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true);\n};\n\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (topic);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc3VidG9waWMvW2lkXS9pbmRleC5qcz85YjY5Il0sIm5hbWVzIjpbInRvcGljIiwic3VidG9waWNzIiwiZGV0YWlscyIsInRvcGljSWQiLCJzdWJ0b3BpYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQSxLQUFLLEdBQUcscUJBQW1DO0FBQUEsTUFBaENDLFNBQWdDLFFBQWhDQSxTQUFnQztBQUFBLE1BQXJCRCxLQUFxQixRQUFyQkEsS0FBcUI7QUFBQSxNQUFkRSxPQUFjLFFBQWRBLE9BQWM7QUFDL0M7QUFDQTtBQUNBLE1BQU1DLE9BQU8sR0FBR0QsT0FBTyxDQUFDLENBQUQsQ0FBUCxDQUFXRSxRQUFYLENBQW9CSixLQUFwQztBQUNBLHNCQUNFO0FBQUEsNEJBQ0U7QUFBQSw2QkFDRSw4REFBQyxrREFBRDtBQUFNLFlBQUksRUFBQyxhQUFYO0FBQXlCLFVBQUUsRUFBRUcsT0FBTyxvQkFBYUEsT0FBYixJQUF5QixHQUE3RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQU1FLDhEQUFDLHdFQUFEO0FBQVksYUFBTyxFQUFFRDtBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTkY7QUFBQSxrQkFERjtBQVVELENBZEQ7OztBQWdEQSwrREFBZUYsS0FBZiIsImZpbGUiOiIuL3BhZ2VzL3N1YnRvcGljL1tpZF0vaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IGFwaVNlcnZlciB9IGZyb20gXCIuLi8uLi8uLi9jb25maWdcIjtcbmltcG9ydCBTdWJ0b3BpY0xpc3QgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvdG9waWMvc3VidG9waWMvU3VidG9waWNMaXN0XCI7XG5pbXBvcnQgVG9waWNUaXRsZSBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy90b3BpYy9Ub3BpY1RpdGxlXCI7XG5pbXBvcnQgRGV0YWlsTGlzdCBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9kZXRhaWxzL0RldGFpbHNMaXN0XCI7XG5jb25zdCB0b3BpYyA9ICh7IHN1YnRvcGljcywgdG9waWMsIGRldGFpbHMgfSkgPT4ge1xuICAvLyAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICAvLyAgIGNvbnN0IHsgaWQgfSA9IHJvdXRlci5xdWVyeTtcbiAgY29uc3QgdG9waWNJZCA9IGRldGFpbHNbMF0uc3VidG9waWMudG9waWM7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxidXR0b24+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvdG9waWMvW2lkXVwiIGFzPXt0b3BpY0lkID8gYC90b3BpYy8ke3RvcGljSWR9YCA6IFwiL1wifT5cbiAgICAgICAgICBnbyBiYWNrXG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPERldGFpbExpc3QgZGV0YWlscz17ZGV0YWlsc30gLz5cbiAgICA8Lz5cbiAgKTtcbn07XG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAoY29udGV4dCkgPT4ge1xuICBjb25zdCBpZCA9IGNvbnRleHQucGFyYW1zLmlkO1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHthcGlTZXJ2ZXJ9L2RldGFpbHM/c3VidG9waWMuaWQ9JHtpZH1gKTtcbiAgY29uc3QgZGV0YWlscyA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiAgLy8gLy8gY29uc3Qgc3VidG9waWMgPSBkZXRhaWxzLnN1YnRvcGljO1xuICAvLyBjb25zdCByZXMzID0gYXdhaXQgZmV0Y2goYCR7YXBpU2VydmVyfS90b3BpY3MvJHtpZH1gKTtcbiAgLy8gY29uc3QgdG9waWMgPSBhd2FpdCByZXMzLmpzb24oKTtcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgLy8gdG9waWMsXG4gICAgICAvLyBzdWJ0b3BpYyxcbiAgICAgIGRldGFpbHMsXG4gICAgfSxcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQYXRocyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7YXBpU2VydmVyfS9zdWJ0b3BpY3NgKTtcbiAgY29uc3Qgc3VidG9waWNzID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgY29uc3QgaWRzID0gc3VidG9waWNzLm1hcCgoc3VidG9waWMpID0+IHN1YnRvcGljLmlkKTtcbiAgY29uc3QgcGF0aHMgPSBpZHMubWFwKChpZCkgPT4gKHsgcGFyYW1zOiB7IGlkOiBpZC50b1N0cmluZygpIH0gfSkpO1xuICAvLyAgIGNvbnN0IHBhdGhzID0gYXJ0aWNsZXMubWFwKChhcnRpY2xlKSA9PiB7XG4gIC8vICAgICBwYXJhbXM6IHtcbiAgLy8gICAgICAgaWQ6IGFydGljbGUuaWQudG9TdHJpbmcoKTtcbiAgLy8gICAgIH1cbiAgLy8gICB9KTtcbiAgY29uc29sZS5sb2cocGF0aHMpO1xuICByZXR1cm4ge1xuICAgIHBhdGhzLFxuICAgIGZhbGxiYWNrOiBmYWxzZSxcbiAgfTtcbn07XG5leHBvcnQgZGVmYXVsdCB0b3BpYztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/subtopic/[id]/index.js\n");

/***/ })

});