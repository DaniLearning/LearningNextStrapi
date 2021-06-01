(function() {
var exports = {};
exports.id = 470;
exports.ids = [470];
exports.modules = {

/***/ 6022:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _id_; },
  "getStaticPaths": function() { return /* binding */ getStaticPaths; },
  "getStaticProps": function() { return /* binding */ getStaticProps; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./config/index.js
var config = __webpack_require__(7527);
// EXTERNAL MODULE: ./components/topic/subtopic/SubtopicList.js + 1 modules
var SubtopicList = __webpack_require__(5862);
// EXTERNAL MODULE: ./components/topic/TopicTitle.js
var TopicTitle = __webpack_require__(2596);
// EXTERNAL MODULE: ./styles/Article.module.css
var Article_module = __webpack_require__(6452);
var Article_module_default = /*#__PURE__*/__webpack_require__.n(Article_module);
// EXTERNAL MODULE: ./styles/Header.module.css
var Header_module = __webpack_require__(6514);
var Header_module_default = /*#__PURE__*/__webpack_require__.n(Header_module);
;// CONCATENATED MODULE: ./components/details/Detail.js






const Topic = ({
  id,
  title,
  description
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
      className: (Article_module_default()).cardDetail,
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("h1", {
        className: (Header_module_default()).title,
        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {}), " ", title]
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: description
      })]
    })
  }, "id");
};

/* harmony default export */ var Detail = (Topic);
;// CONCATENATED MODULE: ./components/details/DetailsList.js




const TopicList = ({
  details
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: (Article_module_default()).grid,
    children: details.map(detail => /*#__PURE__*/jsx_runtime_.jsx(Detail, {
      title: detail.title,
      description: detail.content
    }))
  });
};

/* harmony default export */ var DetailsList = (TopicList);
;// CONCATENATED MODULE: ./pages/subtopic/[id]/index.js










const topic = ({
  subtopics,
  topic,
  details
}) => {
  //   const router = useRouter();
  //   const { id } = router.query;
  const topicId = details[0].subtopic.topic;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      href: "/topic/[id]",
      as: topicId ? `/topic/${topicId}` : "/",
      children: "go back"
    }), /*#__PURE__*/jsx_runtime_.jsx(DetailsList, {
      details: details
    })]
  });
};

const getStaticProps = async context => {
  const id = context.params.id;
  const res = await fetch(`${config/* apiServer */.p}/details?subtopic.id=${id}`);
  const details = await res.json(); // // const subtopic = details.subtopic;
  // const res3 = await fetch(`${apiServer}/topics/${id}`);
  // const topic = await res3.json();

  return {
    props: {
      // topic,
      // subtopic,
      details
    }
  };
};
const getStaticPaths = async () => {
  const res = await fetch(`${config/* apiServer */.p}/subtopics`);
  const subtopics = await res.json();
  const ids = subtopics.map(subtopic => subtopic.id);
  const paths = ids.map(id => ({
    params: {
      id: id.toString()
    }
  })); //   const paths = articles.map((article) => {
  //     params: {
  //       id: article.id.toString();
  //     }
  //   });

  console.log(paths);
  return {
    paths,
    fallback: false
  };
};
/* harmony default export */ var _id_ = (topic);

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
var __webpack_exports__ = __webpack_require__.X(0, [664,770], function() { return __webpack_exec__(6022); });
module.exports = __webpack_exports__;

})();