exports.id = 770;
exports.ids = [770];
exports.modules = {

/***/ 2596:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_Header_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6514);
/* harmony import */ var _styles_Header_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);







const TopicTitle = ({
  main_title,
  second_title,
  description
}) => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
      className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_2___default().title),
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
        children: main_title
      }), " ", second_title]
    })
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (TopicTitle);

/***/ }),

/***/ 5862:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ SubtopicList; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: ./styles/Article.module.css
var Article_module = __webpack_require__(6452);
var Article_module_default = /*#__PURE__*/__webpack_require__.n(Article_module);
// EXTERNAL MODULE: ./styles/Header.module.css
var Header_module = __webpack_require__(6514);
var Header_module_default = /*#__PURE__*/__webpack_require__.n(Header_module);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./components/topic/subtopic/Subtopic.js






const Topic = ({
  id,
  main_title,
  second_title,
  description
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
    href: "/subtopic/[id]",
    as: `/subtopic/${id}`,
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
  });
};

/* harmony default export */ var Subtopic = (Topic);
;// CONCATENATED MODULE: ./components/topic/subtopic/SubtopicList.js




const TopicList = ({
  topics,
  topicId
}) => {
  console.log("id", topicId);
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: (Article_module_default()).grid,
    children: topics.map(topic => /*#__PURE__*/jsx_runtime_.jsx(Subtopic, {
      topicId: topicId,
      id: topic.id,
      main_title: topic.main_title || topic.title,
      second_title: topic.second_title || topic.subtitle,
      description: topic.description
    }))
  });
};

/* harmony default export */ var SubtopicList = (TopicList);

/***/ }),

/***/ 7527:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": function() { return /* binding */ apiServer; }
/* harmony export */ });
const dev = false;
const apiServer = dev ? "https://polar-sands-85300.herokuapp.com" : "https://polar-sands-85300.herokuapp.com";

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

/***/ 4453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;