/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = bTest;
function bTest() {
    console.log('bTest function works121212');
}

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const storage = {
    clicks: 0
};

/* harmony default export */ __webpack_exports__["a"] = (storage);

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__styles_index_less__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__styles_index_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__styles_index_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__source_c_less__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__source_c_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__source_c_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__source_d_less__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__source_d_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__source_d_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__source_a_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__source_b_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__storage__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_js__ = __webpack_require__(7);








function component() {
    const button = document.createElement('button'),
          div = document.createElement('div'),
          h1 = document.createElement('h1');

    h1.innerHTML = __WEBPACK_IMPORTED_MODULE_5__storage__["a" /* default */].clicks;
    h1.id = 'count';
    button.innerHTML = 'Click';

    div.appendChild(button);
    button.onclick = __WEBPACK_IMPORTED_MODULE_6__app_js__["a" /* default */];
    div.appendChild(h1);

    return div;
};

let comp = component();
document.body.appendChild(comp);

console.log('c');
if (false) {
    module.hot.accept('./app.js', () => {
        document.body.removeChild(comp);
        comp = component();
        document.body.appendChild(comp);
    });
}

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 4 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 5 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__b_js__ = __webpack_require__(0);


console.log('dsgsdg');
Object(__WEBPACK_IMPORTED_MODULE_0__b_js__["a" /* default */])();
Object(__WEBPACK_IMPORTED_MODULE_0__b_js__["a" /* default */])();

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = increment;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__storage__ = __webpack_require__(1);


function increment() {
	console.log('increment');
	const h1 = document.getElementById('count');
	h1.innerHTML = ++__WEBPACK_IMPORTED_MODULE_0__storage__["a" /* default */].clicks;
}

/***/ })
/******/ ]);