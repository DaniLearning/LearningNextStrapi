/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/topic/[id]";
exports.ids = ["pages/topic/[id]"];
exports.modules = {

/***/ "./pages/topic/[id]/index.js":
/*!***********************************!*\
  !*** ./pages/topic/[id]/index.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getStaticProps\": function() { return /* binding */ getStaticProps; },\n/* harmony export */   \"getStaticPaths\": function() { return /* binding */ getStaticPaths; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../config */ \"./config/index.js\");\n/* harmony import */ var _components_topic_subtopic_SubtopicList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/topic/subtopic/SubtopicList */ \"./components/topic/subtopic/SubtopicList.js\");\n/* harmony import */ var _components_topic_TopicTitle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/topic/TopicTitle */ \"./components/topic/TopicTitle.js\");\n\n\nvar _jsxFileName = \"/Users/Dani/Documents/nextStrapi/LearningNextStrapi/pages/topic/[id]/index.js\";\n\n\n\n\n\n\nconst topic = ({\n  subtopics,\n  topic\n}) => {\n  //   const router = useRouter();\n  //   const { id } = router.query;\n  console.log(topic.id);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n        href: \"/\",\n        children: \"go back\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_topic_TopicTitle__WEBPACK_IMPORTED_MODULE_5__.default, {\n      main_title: topic.main_title,\n      second_title: topic.second_title,\n      description: topic.description\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_topic_subtopic_SubtopicList__WEBPACK_IMPORTED_MODULE_4__.default, {\n      topics: subtopics\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true);\n};\n\nconst getStaticProps = async context => {\n  const id = context.params.id;\n  const res = await fetch(`${_config__WEBPACK_IMPORTED_MODULE_3__.apiServer}/topics/${id}`);\n  const topic = await res.json();\n  const res2 = await fetch(`${_config__WEBPACK_IMPORTED_MODULE_3__.apiServer}/subtopics?topic.id=${id}`);\n  const subtopics = await res2.json();\n  return {\n    props: {\n      topic,\n      subtopics\n    }\n  };\n};\nconst getStaticPaths = async () => {\n  const res = await fetch(`${_config__WEBPACK_IMPORTED_MODULE_3__.apiServer}/topics`);\n  const topics = await res.json();\n  const ids = topics.map(topic => topic.id);\n  const paths = ids.map(id => ({\n    params: {\n      id: id.toString()\n    }\n  })); //   const paths = articles.map((article) => {\n  //     params: {\n  //       id: article.id.toString();\n  //     }\n  //   });\n  // const paths = [{ params: { id: \"1\" } }, { params: { id: \"2\" } }];\n  // console.log(paths);\n\n  return {\n    paths,\n    fallback: false\n  };\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (topic);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZWFybmluZy1uZXh0Ly4vcGFnZXMvdG9waWMvW2lkXS9pbmRleC5qcz80NDc2Il0sIm5hbWVzIjpbInRvcGljIiwic3VidG9waWNzIiwiY29uc29sZSIsImxvZyIsImlkIiwibWFpbl90aXRsZSIsInNlY29uZF90aXRsZSIsImRlc2NyaXB0aW9uIiwiZ2V0U3RhdGljUHJvcHMiLCJjb250ZXh0IiwicGFyYW1zIiwicmVzIiwiZmV0Y2giLCJhcGlTZXJ2ZXIiLCJqc29uIiwicmVzMiIsInByb3BzIiwiZ2V0U3RhdGljUGF0aHMiLCJ0b3BpY3MiLCJpZHMiLCJtYXAiLCJwYXRocyIsInRvU3RyaW5nIiwiZmFsbGJhY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxNQUFNQSxLQUFLLEdBQUcsQ0FBQztBQUFFQyxXQUFGO0FBQWFEO0FBQWIsQ0FBRCxLQUEwQjtBQUN0QztBQUNBO0FBQ0FFLFNBQU8sQ0FBQ0MsR0FBUixDQUFZSCxLQUFLLENBQUNJLEVBQWxCO0FBQ0Esc0JBQ0U7QUFBQSw0QkFDRTtBQUFBLDZCQUNFLDhEQUFDLGtEQUFEO0FBQU0sWUFBSSxFQUFDLEdBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBSUUsOERBQUMsaUVBQUQ7QUFDRSxnQkFBVSxFQUFFSixLQUFLLENBQUNLLFVBRHBCO0FBRUUsa0JBQVksRUFBRUwsS0FBSyxDQUFDTSxZQUZ0QjtBQUdFLGlCQUFXLEVBQUVOLEtBQUssQ0FBQ087QUFIckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKRixlQVNFLDhEQUFDLDRFQUFEO0FBQWMsWUFBTSxFQUFFTjtBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVRGLGVBV0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFYRjtBQUFBLGtCQURGO0FBZUQsQ0FuQkQ7O0FBb0JPLE1BQU1PLGNBQWMsR0FBRyxNQUFPQyxPQUFQLElBQW1CO0FBQy9DLFFBQU1MLEVBQUUsR0FBR0ssT0FBTyxDQUFDQyxNQUFSLENBQWVOLEVBQTFCO0FBQ0EsUUFBTU8sR0FBRyxHQUFHLE1BQU1DLEtBQUssQ0FBRSxHQUFFQyw4Q0FBVSxXQUFVVCxFQUFHLEVBQTNCLENBQXZCO0FBQ0EsUUFBTUosS0FBSyxHQUFHLE1BQU1XLEdBQUcsQ0FBQ0csSUFBSixFQUFwQjtBQUVBLFFBQU1DLElBQUksR0FBRyxNQUFNSCxLQUFLLENBQUUsR0FBRUMsOENBQVUsdUJBQXNCVCxFQUFHLEVBQXZDLENBQXhCO0FBQ0EsUUFBTUgsU0FBUyxHQUFHLE1BQU1jLElBQUksQ0FBQ0QsSUFBTCxFQUF4QjtBQUVBLFNBQU87QUFDTEUsU0FBSyxFQUFFO0FBQ0xoQixXQURLO0FBRUxDO0FBRks7QUFERixHQUFQO0FBTUQsQ0FkTTtBQWdCQSxNQUFNZ0IsY0FBYyxHQUFHLFlBQVk7QUFDeEMsUUFBTU4sR0FBRyxHQUFHLE1BQU1DLEtBQUssQ0FBRSxHQUFFQyw4Q0FBVSxTQUFkLENBQXZCO0FBQ0EsUUFBTUssTUFBTSxHQUFHLE1BQU1QLEdBQUcsQ0FBQ0csSUFBSixFQUFyQjtBQUNBLFFBQU1LLEdBQUcsR0FBR0QsTUFBTSxDQUFDRSxHQUFQLENBQVlwQixLQUFELElBQVdBLEtBQUssQ0FBQ0ksRUFBNUIsQ0FBWjtBQUNBLFFBQU1pQixLQUFLLEdBQUdGLEdBQUcsQ0FBQ0MsR0FBSixDQUFTaEIsRUFBRCxLQUFTO0FBQUVNLFVBQU0sRUFBRTtBQUFFTixRQUFFLEVBQUVBLEVBQUUsQ0FBQ2tCLFFBQUg7QUFBTjtBQUFWLEdBQVQsQ0FBUixDQUFkLENBSndDLENBS3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQU87QUFDTEQsU0FESztBQUVMRSxZQUFRLEVBQUU7QUFGTCxHQUFQO0FBSUQsQ0FqQk07QUFrQlAsK0RBQWV2QixLQUFmIiwiZmlsZSI6Ii4vcGFnZXMvdG9waWMvW2lkXS9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgYXBpU2VydmVyIH0gZnJvbSBcIi4uLy4uLy4uL2NvbmZpZ1wiO1xuaW1wb3J0IFN1YnRvcGljTGlzdCBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy90b3BpYy9zdWJ0b3BpYy9TdWJ0b3BpY0xpc3RcIjtcbmltcG9ydCBUb3BpY1RpdGxlIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL3RvcGljL1RvcGljVGl0bGVcIjtcbmNvbnN0IHRvcGljID0gKHsgc3VidG9waWNzLCB0b3BpYyB9KSA9PiB7XG4gIC8vICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIC8vICAgY29uc3QgeyBpZCB9ID0gcm91dGVyLnF1ZXJ5O1xuICBjb25zb2xlLmxvZyh0b3BpYy5pZCk7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxidXR0b24+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+Z28gYmFjazwvTGluaz5cbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPFRvcGljVGl0bGVcbiAgICAgICAgbWFpbl90aXRsZT17dG9waWMubWFpbl90aXRsZX1cbiAgICAgICAgc2Vjb25kX3RpdGxlPXt0b3BpYy5zZWNvbmRfdGl0bGV9XG4gICAgICAgIGRlc2NyaXB0aW9uPXt0b3BpYy5kZXNjcmlwdGlvbn1cbiAgICAgIC8+XG4gICAgICA8U3VidG9waWNMaXN0IHRvcGljcz17c3VidG9waWNzfSAvPlxuXG4gICAgICA8YnIgLz5cbiAgICA8Lz5cbiAgKTtcbn07XG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAoY29udGV4dCkgPT4ge1xuICBjb25zdCBpZCA9IGNvbnRleHQucGFyYW1zLmlkO1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHthcGlTZXJ2ZXJ9L3RvcGljcy8ke2lkfWApO1xuICBjb25zdCB0b3BpYyA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiAgY29uc3QgcmVzMiA9IGF3YWl0IGZldGNoKGAke2FwaVNlcnZlcn0vc3VidG9waWNzP3RvcGljLmlkPSR7aWR9YCk7XG4gIGNvbnN0IHN1YnRvcGljcyA9IGF3YWl0IHJlczIuanNvbigpO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHRvcGljLFxuICAgICAgc3VidG9waWNzLFxuICAgIH0sXG4gIH07XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUGF0aHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke2FwaVNlcnZlcn0vdG9waWNzYCk7XG4gIGNvbnN0IHRvcGljcyA9IGF3YWl0IHJlcy5qc29uKCk7XG4gIGNvbnN0IGlkcyA9IHRvcGljcy5tYXAoKHRvcGljKSA9PiB0b3BpYy5pZCk7XG4gIGNvbnN0IHBhdGhzID0gaWRzLm1hcCgoaWQpID0+ICh7IHBhcmFtczogeyBpZDogaWQudG9TdHJpbmcoKSB9IH0pKTtcbiAgLy8gICBjb25zdCBwYXRocyA9IGFydGljbGVzLm1hcCgoYXJ0aWNsZSkgPT4ge1xuICAvLyAgICAgcGFyYW1zOiB7XG4gIC8vICAgICAgIGlkOiBhcnRpY2xlLmlkLnRvU3RyaW5nKCk7XG4gIC8vICAgICB9XG4gIC8vICAgfSk7XG4gIC8vIGNvbnN0IHBhdGhzID0gW3sgcGFyYW1zOiB7IGlkOiBcIjFcIiB9IH0sIHsgcGFyYW1zOiB7IGlkOiBcIjJcIiB9IH1dO1xuICAvLyBjb25zb2xlLmxvZyhwYXRocyk7XG5cbiAgcmV0dXJuIHtcbiAgICBwYXRocyxcbiAgICBmYWxsYmFjazogZmFsc2UsXG4gIH07XG59O1xuZXhwb3J0IGRlZmF1bHQgdG9waWM7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/topic/[id]/index.js\n");

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js","components_topic_TopicTitle_js-components_topic_subtopic_SubtopicList_js-config_index_js"], function() { return __webpack_exec__("./pages/topic/[id]/index.js"); });
module.exports = __webpack_exports__;

})();