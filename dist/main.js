!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";r.r(t);const n={get(e){if(e)return"string"!=typeof e?new Error("get:key必须为string类型"):function(e){if("string"==typeof e)try{return JSON.parse(e)}catch(t){return e||void 0}}(this.target.getItem(e))},set(e,t){return e?"string"!=typeof e?new Error("set:key必须为string类型"):void 0===t?this.remove(e):(this.target.setItem(e,function(e){return JSON.stringify(e)}(t)),!0):new Error("set:请输入key")},has(e){return"string"!=typeof e?new Error("has:key必须为string类型"):void 0!==this.get(e)},remove(e){return"string"!=typeof e?new Error("remove:key必须为string类型"):this.target.remove(e)},clear(){return this.target.clear()}};var o=function(e){Object.assign(e,n)};o({target:window.localStorage||null}),o({target:window.sessionStorage||null}),console.log("hello")}]);