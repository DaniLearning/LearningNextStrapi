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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getStaticProps\": function() { return /* binding */ getStaticProps; },\n/* harmony export */   \"getStaticPaths\": function() { return /* binding */ getStaticPaths; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../config */ \"./config/index.js\");\n/* harmony import */ var _components_topic_subtopic_SubtopicList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/topic/subtopic/SubtopicList */ \"./components/topic/subtopic/SubtopicList.js\");\n/* harmony import */ var _components_topic_TopicTitle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/topic/TopicTitle */ \"./components/topic/TopicTitle.js\");\n\n\nvar _jsxFileName = \"/Users/Dani/Documents/nextStrapi/LearningNextStrapi/pages/topic/[id]/index.js\";\n\n\n\n\n\n\nconst topic = ({\n  subtopics,\n  topic\n}) => {\n  //   const router = useRouter();\n  //   const { id } = router.query;\n  console.log(topic.id);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_topic_TopicTitle__WEBPACK_IMPORTED_MODULE_5__.default, {\n      main_title: topic.main_title,\n      second_title: topic.second_title,\n      description: topic.description\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_topic_subtopic_SubtopicList__WEBPACK_IMPORTED_MODULE_4__.default, {\n      topics: subtopics\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true);\n};\n\nconst getStaticProps = async context => {\n  const id = context.params.id;\n  const res = await fetch(`${_config__WEBPACK_IMPORTED_MODULE_3__.apiServer}/topics/${id}`);\n  const topic = await res.json();\n  const res2 = await fetch(`${_config__WEBPACK_IMPORTED_MODULE_3__.apiServer}/subtopics?topic.id=${id}`);\n  const subtopics = await res2.json();\n  return {\n    props: {\n      topic,\n      subtopics\n    }\n  };\n};\nconst getStaticPaths = async () => {\n  const res = await fetch(`${_config__WEBPACK_IMPORTED_MODULE_3__.apiServer}/topics`);\n  const topics = await res.json();\n  const ids = topics.map(topic => topic.id);\n  const paths = ids.map(id => ({\n    params: {\n      id: id.toString()\n    }\n  })); //   const paths = articles.map((article) => {\n  //     params: {\n  //       id: article.id.toString();\n  //     }\n  //   });\n  // const paths = [{ params: { id: \"1\" } }, { params: { id: \"2\" } }];\n  // console.log(paths);\n\n  return {\n    paths,\n    fallback: false\n  };\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (topic);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZWFybmluZy1uZXh0Ly4vcGFnZXMvdG9waWMvW2lkXS9pbmRleC5qcz80NDc2Il0sIm5hbWVzIjpbInRvcGljIiwic3VidG9waWNzIiwiY29uc29sZSIsImxvZyIsImlkIiwibWFpbl90aXRsZSIsInNlY29uZF90aXRsZSIsImRlc2NyaXB0aW9uIiwiZ2V0U3RhdGljUHJvcHMiLCJjb250ZXh0IiwicGFyYW1zIiwicmVzIiwiZmV0Y2giLCJhcGlTZXJ2ZXIiLCJqc29uIiwicmVzMiIsInByb3BzIiwiZ2V0U3RhdGljUGF0aHMiLCJ0b3BpY3MiLCJpZHMiLCJtYXAiLCJwYXRocyIsInRvU3RyaW5nIiwiZmFsbGJhY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxNQUFNQSxLQUFLLEdBQUcsQ0FBQztBQUFFQyxXQUFGO0FBQWFEO0FBQWIsQ0FBRCxLQUEwQjtBQUN0QztBQUNBO0FBQ0FFLFNBQU8sQ0FBQ0MsR0FBUixDQUFZSCxLQUFLLENBQUNJLEVBQWxCO0FBQ0Esc0JBQ0U7QUFBQSw0QkFDRSw4REFBQyxpRUFBRDtBQUNFLGdCQUFVLEVBQUVKLEtBQUssQ0FBQ0ssVUFEcEI7QUFFRSxrQkFBWSxFQUFFTCxLQUFLLENBQUNNLFlBRnRCO0FBR0UsaUJBQVcsRUFBRU4sS0FBSyxDQUFDTztBQUhyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBTUUsOERBQUMsNEVBQUQ7QUFBYyxZQUFNLEVBQUVOO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTkYsZUFRRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVJGO0FBQUEsa0JBREY7QUFZRCxDQWhCRDs7QUFpQk8sTUFBTU8sY0FBYyxHQUFHLE1BQU9DLE9BQVAsSUFBbUI7QUFDL0MsUUFBTUwsRUFBRSxHQUFHSyxPQUFPLENBQUNDLE1BQVIsQ0FBZU4sRUFBMUI7QUFDQSxRQUFNTyxHQUFHLEdBQUcsTUFBTUMsS0FBSyxDQUFFLEdBQUVDLDhDQUFVLFdBQVVULEVBQUcsRUFBM0IsQ0FBdkI7QUFDQSxRQUFNSixLQUFLLEdBQUcsTUFBTVcsR0FBRyxDQUFDRyxJQUFKLEVBQXBCO0FBRUEsUUFBTUMsSUFBSSxHQUFHLE1BQU1ILEtBQUssQ0FBRSxHQUFFQyw4Q0FBVSx1QkFBc0JULEVBQUcsRUFBdkMsQ0FBeEI7QUFDQSxRQUFNSCxTQUFTLEdBQUcsTUFBTWMsSUFBSSxDQUFDRCxJQUFMLEVBQXhCO0FBRUEsU0FBTztBQUNMRSxTQUFLLEVBQUU7QUFDTGhCLFdBREs7QUFFTEM7QUFGSztBQURGLEdBQVA7QUFNRCxDQWRNO0FBZ0JBLE1BQU1nQixjQUFjLEdBQUcsWUFBWTtBQUN4QyxRQUFNTixHQUFHLEdBQUcsTUFBTUMsS0FBSyxDQUFFLEdBQUVDLDhDQUFVLFNBQWQsQ0FBdkI7QUFDQSxRQUFNSyxNQUFNLEdBQUcsTUFBTVAsR0FBRyxDQUFDRyxJQUFKLEVBQXJCO0FBQ0EsUUFBTUssR0FBRyxHQUFHRCxNQUFNLENBQUNFLEdBQVAsQ0FBWXBCLEtBQUQsSUFBV0EsS0FBSyxDQUFDSSxFQUE1QixDQUFaO0FBQ0EsUUFBTWlCLEtBQUssR0FBR0YsR0FBRyxDQUFDQyxHQUFKLENBQVNoQixFQUFELEtBQVM7QUFBRU0sVUFBTSxFQUFFO0FBQUVOLFFBQUUsRUFBRUEsRUFBRSxDQUFDa0IsUUFBSDtBQUFOO0FBQVYsR0FBVCxDQUFSLENBQWQsQ0FKd0MsQ0FLeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBTztBQUNMRCxTQURLO0FBRUxFLFlBQVEsRUFBRTtBQUZMLEdBQVA7QUFJRCxDQWpCTTtBQWtCUCwrREFBZXZCLEtBQWYiLCJmaWxlIjoiLi9wYWdlcy90b3BpYy9baWRdL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyBhcGlTZXJ2ZXIgfSBmcm9tIFwiLi4vLi4vLi4vY29uZmlnXCI7XG5pbXBvcnQgU3VidG9waWNMaXN0IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL3RvcGljL3N1YnRvcGljL1N1YnRvcGljTGlzdFwiO1xuaW1wb3J0IFRvcGljVGl0bGUgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvdG9waWMvVG9waWNUaXRsZVwiO1xuY29uc3QgdG9waWMgPSAoeyBzdWJ0b3BpY3MsIHRvcGljIH0pID0+IHtcbiAgLy8gICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgLy8gICBjb25zdCB7IGlkIH0gPSByb3V0ZXIucXVlcnk7XG4gIGNvbnNvbGUubG9nKHRvcGljLmlkKTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFRvcGljVGl0bGVcbiAgICAgICAgbWFpbl90aXRsZT17dG9waWMubWFpbl90aXRsZX1cbiAgICAgICAgc2Vjb25kX3RpdGxlPXt0b3BpYy5zZWNvbmRfdGl0bGV9XG4gICAgICAgIGRlc2NyaXB0aW9uPXt0b3BpYy5kZXNjcmlwdGlvbn1cbiAgICAgIC8+XG4gICAgICA8U3VidG9waWNMaXN0IHRvcGljcz17c3VidG9waWNzfSAvPlxuXG4gICAgICA8YnIgLz5cbiAgICA8Lz5cbiAgKTtcbn07XG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAoY29udGV4dCkgPT4ge1xuICBjb25zdCBpZCA9IGNvbnRleHQucGFyYW1zLmlkO1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHthcGlTZXJ2ZXJ9L3RvcGljcy8ke2lkfWApO1xuICBjb25zdCB0b3BpYyA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiAgY29uc3QgcmVzMiA9IGF3YWl0IGZldGNoKGAke2FwaVNlcnZlcn0vc3VidG9waWNzP3RvcGljLmlkPSR7aWR9YCk7XG4gIGNvbnN0IHN1YnRvcGljcyA9IGF3YWl0IHJlczIuanNvbigpO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHRvcGljLFxuICAgICAgc3VidG9waWNzLFxuICAgIH0sXG4gIH07XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUGF0aHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke2FwaVNlcnZlcn0vdG9waWNzYCk7XG4gIGNvbnN0IHRvcGljcyA9IGF3YWl0IHJlcy5qc29uKCk7XG4gIGNvbnN0IGlkcyA9IHRvcGljcy5tYXAoKHRvcGljKSA9PiB0b3BpYy5pZCk7XG4gIGNvbnN0IHBhdGhzID0gaWRzLm1hcCgoaWQpID0+ICh7IHBhcmFtczogeyBpZDogaWQudG9TdHJpbmcoKSB9IH0pKTtcbiAgLy8gICBjb25zdCBwYXRocyA9IGFydGljbGVzLm1hcCgoYXJ0aWNsZSkgPT4ge1xuICAvLyAgICAgcGFyYW1zOiB7XG4gIC8vICAgICAgIGlkOiBhcnRpY2xlLmlkLnRvU3RyaW5nKCk7XG4gIC8vICAgICB9XG4gIC8vICAgfSk7XG4gIC8vIGNvbnN0IHBhdGhzID0gW3sgcGFyYW1zOiB7IGlkOiBcIjFcIiB9IH0sIHsgcGFyYW1zOiB7IGlkOiBcIjJcIiB9IH1dO1xuICAvLyBjb25zb2xlLmxvZyhwYXRocyk7XG5cbiAgcmV0dXJuIHtcbiAgICBwYXRocyxcbiAgICBmYWxsYmFjazogZmFsc2UsXG4gIH07XG59O1xuZXhwb3J0IGRlZmF1bHQgdG9waWM7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/topic/[id]/index.js\n");

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