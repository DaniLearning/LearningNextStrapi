(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6071:function(e,n,r){"use strict";var t=r(3038),o=r(862);n.default=void 0;var a=o(r(7294)),c=r(1689),i=r(2441),u=r(5749),l={};function f(e,n,r,t){if(e&&(0,c.isLocalURL)(n)){e.prefetch(n,r,t).catch((function(e){0}));var o=t&&"undefined"!==typeof t.locale?t.locale:e&&e.locale;l[n+"%"+r+(o?"%"+o:"")]=!0}}var s=function(e){var n=!1!==e.prefetch,r=(0,i.useRouter)(),o=r&&r.asPath||"/",s=a.default.useMemo((function(){var n=(0,c.resolveHref)(o,e.href,!0),r=t(n,2),a=r[0],i=r[1];return{href:a,as:e.as?(0,c.resolveHref)(o,e.as):i||a}}),[o,e.href,e.as]),p=s.href,d=s.as,v=e.children,h=e.replace,b=e.shallow,y=e.scroll,_=e.locale;"string"===typeof v&&(v=a.default.createElement("a",null,v));var j=a.Children.only(v),m=j&&"object"===typeof j&&j.ref,g=(0,u.useIntersection)({rootMargin:"200px"}),O=t(g,2),w=O[0],L=O[1],x=a.default.useCallback((function(e){w(e),m&&("function"===typeof m?m(e):"object"===typeof m&&(m.current=e))}),[m,w]);(0,a.useEffect)((function(){var e=L&&n&&(0,c.isLocalURL)(p),t="undefined"!==typeof _?_:r&&r.locale,o=l[p+"%"+d+(t?"%"+t:"")];e&&!o&&f(r,p,d,{locale:t})}),[d,p,L,_,n,r]);var E={ref:x,onClick:function(e){j.props&&"function"===typeof j.props.onClick&&j.props.onClick(e),e.defaultPrevented||function(e,n,r,t,o,a,i,u){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,c.isLocalURL)(r))&&(e.preventDefault(),null==i&&(i=t.indexOf("#")<0),n[o?"replace":"push"](r,t,{shallow:a,locale:u,scroll:i}))}(e,r,p,d,h,b,y,_)},onMouseEnter:function(e){(0,c.isLocalURL)(p)&&(j.props&&"function"===typeof j.props.onMouseEnter&&j.props.onMouseEnter(e),f(r,p,d,{priority:!0}))}};if(e.passHref||"a"===j.type&&!("href"in j.props)){var P="undefined"!==typeof _?_:r&&r.locale,k=r&&r.isLocaleDomain&&(0,c.getDomainLocale)(d,P,r&&r.locales,r&&r.domainLocales);E.href=k||(0,c.addBasePath)((0,c.addLocale)(d,P,r&&r.defaultLocale))}return a.default.cloneElement(j,E)};n.default=s},5749:function(e,n,r){"use strict";var t=r(3038);n.__esModule=!0,n.useIntersection=function(e){var n=e.rootMargin,r=e.disabled||!c,u=(0,o.useRef)(),l=(0,o.useState)(!1),f=t(l,2),s=f[0],p=f[1],d=(0,o.useCallback)((function(e){u.current&&(u.current(),u.current=void 0),r||s||e&&e.tagName&&(u.current=function(e,n,r){var t=function(e){var n=e.rootMargin||"",r=i.get(n);if(r)return r;var t=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=t.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;n&&r&&n(r)}))}),e);return i.set(n,r={id:n,observer:o,elements:t}),r}(r),o=t.id,a=t.observer,c=t.elements;return c.set(e,n),a.observe(e),function(){c.delete(e),a.unobserve(e),0===c.size&&(a.disconnect(),i.delete(o))}}(e,(function(e){return e&&p(e)}),{rootMargin:n}))}),[r,n,s]);return(0,o.useEffect)((function(){if(!c&&!s){var e=(0,a.requestIdleCallback)((function(){return p(!0)}));return function(){return(0,a.cancelIdleCallback)(e)}}}),[s]),[d,s]};var o=r(7294),a=r(8391),c="undefined"!==typeof IntersectionObserver;var i=new Map},7183:function(e,n,r){"use strict";function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}r.r(n),r.d(n,{default:function(){return v}});var o=r(5893),a=r(1664),c=r(3711),i=r.n(c),u=function(){return(0,o.jsx)("nav",{className:i().nav,children:(0,o.jsxs)("ul",{children:[(0,o.jsx)("li",{children:(0,o.jsx)(a.default,{href:"/",children:"Home"})}),(0,o.jsx)("li",{children:(0,o.jsx)(a.default,{href:"/about",children:"About"})})]})})},l=r(6276),f=r.n(l),s=function(e){var n=e.children;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(u,{}),(0,o.jsx)("div",{className:f().container,children:(0,o.jsx)("main",{className:f().main,children:n})})]})};r(2702);function p(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function d(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?p(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}var v=function(e){var n=e.Component,r=e.pageProps;return(0,o.jsx)(s,{children:(0,o.jsx)(n,d({},r))})}},1780:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(7183)}])},6276:function(e){e.exports={container:"Layout_container__1SPwL",main:"Layout_main__cgm7e",footer:"Layout_footer__3-iLi"}},3711:function(e){e.exports={nav:"Nav_nav__3Zjf-"}},2702:function(){},1664:function(e,n,r){e.exports=r(6071)}},function(e){var n=function(n){return e(e.s=n)};e.O(0,[774,179],(function(){return n(1780),n(2441)}));var r=e.O();_N_E=r}]);