"use strict";var _typeof3="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof2="function"==typeof Symbol&&"symbol"==_typeof3(Symbol.iterator)?function(b){return"undefined"==typeof b?"undefined":_typeof3(b)}:function(b){return b&&"function"==typeof Symbol&&b.constructor===Symbol&&b!==Symbol.prototype?"symbol":"undefined"==typeof b?"undefined":_typeof3(b)};Object.defineProperty(exports,"__esModule",{value:!0});var _typeof="function"==typeof Symbol&&"symbol"==_typeof2(Symbol.iterator)?function(a){return"undefined"==typeof a?"undefined":_typeof2(a)}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":"undefined"==typeof a?"undefined":_typeof2(a)},getObjDeepProp=function(e,f,a){if(!e)return!1;if("object"!==("undefined"==typeof e?"undefined":_typeof(e)))return!1;if(!f)return e;if("string"!=typeof f)return!1;var b=f.split("."),c=e;return b.forEach(function(a){return c?"undefined"==typeof c[a]&&null===c[a]&&isNaN(c[a])?void(c=!1):void(c=c[a]):void(c=!1)}),!1===c?a||!1:c};exports.default=getObjDeepProp;