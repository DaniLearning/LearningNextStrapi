(function() {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 7527:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": function() { return /* binding */ apiServer; }
/* harmony export */ });
const dev = false;
const apiServer = dev ? "https://polar-sands-85300.herokuapp.com" : "https://polar-sands-85300.herokuapp.com";

/***/ }),

/***/ 9737:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ Home; },
  "getStaticProps": function() { return /* binding */ getStaticProps; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./components/ArticleItem.js





const ArticleItem_ArticleItem = ({
  article
}) => {
  return /*#__PURE__*/_jsx(Link, {
    href: "/article/[id]",
    as: `/article/${article.id}`,
    children: /*#__PURE__*/_jsxs("a", {
      className: ArticleStyles.card,
      children: [/*#__PURE__*/_jsxs("h3", {
        children: [article.title, " \u2192"]
      }), /*#__PURE__*/_jsx("p", {
        children: article.content
      })]
    })
  });
};

/* harmony default export */ var components_ArticleItem = ((/* unused pure expression or super */ null && (ArticleItem_ArticleItem)));
;// CONCATENATED MODULE: ./components/ArticleList.js




const ArticleList = ({
  articles
}) => {
  return /*#__PURE__*/_jsx("div", {
    className: articleStyles.grid,
    children: articles.map(article => /*#__PURE__*/_jsx(ArticleItem, {
      article: article
    }))
  });
};

/* harmony default export */ var components_ArticleList = ((/* unused pure expression or super */ null && (ArticleList)));
// EXTERNAL MODULE: ./styles/Article.module.css
var Article_module = __webpack_require__(6452);
var Article_module_default = /*#__PURE__*/__webpack_require__.n(Article_module);
// EXTERNAL MODULE: ./styles/Header.module.css
var Header_module = __webpack_require__(6514);
var Header_module_default = /*#__PURE__*/__webpack_require__.n(Header_module);
;// CONCATENATED MODULE: ./components/topic/Topic.js






const Topic = ({
  id,
  main_title,
  second_title,
  description
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
    href: "/topic/[id]",
    as: `/topic/${id}`,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
      className: (Article_module_default()).card,
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("h1", {
        className: (Header_module_default()).title,
        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
          children: main_title
        }), " ", second_title]
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: description
      })]
    })
  }, id);
};

/* harmony default export */ var topic_Topic = (Topic);
;// CONCATENATED MODULE: ./components/topic/TopicList.js




const TopicList = ({
  topics
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: (Article_module_default()).grid,
    children: topics.map(topic => /*#__PURE__*/jsx_runtime_.jsx(topic_Topic, {
      id: topic.id,
      main_title: topic.main_title || topic.title,
      second_title: topic.second_title || topic.subtitle,
      description: topic.description
    }))
  });
};

/* harmony default export */ var topic_TopicList = (TopicList);
;// CONCATENATED MODULE: external "next/head"
var head_namespaceObject = require("next/head");;
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./config/index.js
var config = __webpack_require__(7527);
;// CONCATENATED MODULE: ./pages/index.js






 // import styles from "../styles/Home.module.css";

function Home({
  topics
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "Cork"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "keywords",
        content: "city, Cork "
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(topic_TopicList, {
      topics: topics
    })]
  });
}
const getStaticProps = async () => {
  console.log(`${config/* apiServer */.p}/topics`);
  const res = await fetch(`${config/* apiServer */.p}/topics`);
  const topics = await res.json(); // const topics = [
  //   {
  //     id: 1,
  //     main_title: "Pure-Cork",
  //     second_title: "english speaking city",
  //     description:
  //       "Welcome, we are going to learn about Cork (Ireland) special initiatives and their environment friendly options",
  //     published_at: "2021-06-01T03:04:27.616Z",
  //     created_at: "2021-06-01T03:02:43.321Z",
  //     updated_at: "2021-06-01T03:04:27.639Z",
  //   },
  // ];

  return {
    props: {
      topics
    }
  };
};

/***/ }),

/***/ 6452:
/***/ (function(module) {

// Exports
module.exports = {
	"grid": "Article_grid__2WPYc",
	"card": "Article_card__2DgoW",
	"cardDetail": "Article_cardDetail__2mA7T",
	"logo": "Article_logo__p8cMG"
};


/***/ }),

/***/ 6514:
/***/ (function(module) {

// Exports
module.exports = {
	"title": "Header_title__1vi4d",
	"description": "Header_description__1lhe1"
};


/***/ }),

/***/ 5273:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/head.js");;

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

/***/ 5519:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/to-base-64.js");;

/***/ }),

/***/ 444:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/image-config.js");;

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

/***/ }),

/***/ 4453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [664,675], function() { return __webpack_exec__(9737); });
module.exports = __webpack_exports__;

})();