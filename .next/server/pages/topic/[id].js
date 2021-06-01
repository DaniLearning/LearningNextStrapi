(function() {
var exports = {};
exports.id = 844;
exports.ids = [844];
exports.modules = {

/***/ 6808:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": function() { return /* binding */ getStaticProps; },
/* harmony export */   "getStaticPaths": function() { return /* binding */ getStaticPaths; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7527);
/* harmony import */ var _components_topic_subtopic_SubtopicList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5862);
/* harmony import */ var _components_topic_TopicTitle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2596);









const topic = ({
  subtopics,
  topic
}) => {
  //   const router = useRouter();
  //   const { id } = router.query;
  console.log(topic.id);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_topic_TopicTitle__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
      main_title: topic.main_title,
      second_title: topic.second_title,
      description: topic.description
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_topic_subtopic_SubtopicList__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
      topics: subtopics
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {})]
  });
};

const getStaticProps = async context => {
  const id = context.params.id;
  const res = await fetch(`${_config__WEBPACK_IMPORTED_MODULE_5__/* .apiServer */ .p}/topics/${id}`);
  const topic = await res.json();
  const res2 = await fetch(`${_config__WEBPACK_IMPORTED_MODULE_5__/* .apiServer */ .p}/subtopics?topic.id=${id}`);
  const subtopics = await res2.json();
  return {
    props: {
      topic,
      subtopics
    }
  };
};
const getStaticPaths = async () => {
  const res = await fetch(`${_config__WEBPACK_IMPORTED_MODULE_5__/* .apiServer */ .p}/topics`);
  const subtopics = await res.json();
  const ids = subtopics.map(subtopic => subtopic.id);
  const paths2 = ids.map(id => ({
    params: {
      id: id.toString()
    }
  })); //   const paths = articles.map((article) => {
  //     params: {
  //       id: article.id.toString();
  //     }
  //   });

  const paths = [{
    params: {
      id: "1"
    }
  }, {
    params: {
      id: "2"
    }
  }];
  console.log(paths);
  return {
    paths,
    fallback: false
  };
};
/* harmony default export */ __webpack_exports__["default"] = (topic);

/***/ }),

/***/ 8417:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ 2238:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ 6731:
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [664,770], function() { return __webpack_exec__(6808); });
module.exports = __webpack_exports__;

})();