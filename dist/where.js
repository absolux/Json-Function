"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _typeCheck=require("./type-check"),_getObjDeepProp=require("./utils/get-obj-deep-prop"),_getObjDeepProp2=_interopRequireDefault(_getObjDeepProp);function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}var where=function(a,b,c){if(!(0,_typeCheck.isArray)(a))return[];var d;if((0,_typeCheck.isObject)(b))d=[b];else if((0,_typeCheck.isArrayOfObject)(b))d=b;else return a;var e=[],f=[];return d.forEach(function(b){Object.keys(b).forEach(function(d){e=a.filter(function(a){var e=a[d];return c&&c.deep&&(e=(0,_getObjDeepProp2.default)(a,d)),e===b[d]})}),f=f.concat(e),e=[]}),f};exports.default=where;