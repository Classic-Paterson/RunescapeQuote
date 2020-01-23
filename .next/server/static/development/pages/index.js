module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swr */ "swr");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\ReecePaterson\\Desktop\\Playground\\RunescapeQuote\\pages\\index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



function fetcher(url) {
  return fetch(url).then(r => r.json());
}

function Index() {
  const {
    query
  } = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  const {
    data,
    error
  } = swr__WEBPACK_IMPORTED_MODULE_3___default()(`/api/randomQuote${query.author ? '?author=' + query.author : ''}`, fetcher); // The following line has optional chaining, added in Next.js v9.1.5,
  // is the same as `data && data.author`

  const author = data === null || data === void 0 ? void 0 : data.author;
  let quote = data === null || data === void 0 ? void 0 : data.quote;
  if (!data) quote = 'Loading...';
  if (error) quote = 'Failed to fetch the quote.';
  return __jsx("main", {
    className: "jsx-4035807099" + " " + "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-4035807099" + " " + "quote",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, quote), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3614180035",
    __self: this
  }, "main.jsx-4035807099{width:90%;max-width:900px;margin:350px auto;text-align:center;background:rgb(255,255,255,0.1);border-radius:25px;}.quote.jsx-4035807099{font-family:Tohoma;color:#ffe000;font-size:45px;padding-bottom:10px;border-radius:10px;background:rgba(255,255,255,0.5);-webkit-text-stroke:1px black;}.author.jsx-4035807099{font-family:Tohoma;color:#559834;font-size:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcUmVlY2VQYXRlcnNvblxcRGVza3RvcFxcUGxheWdyb3VuZFxcUnVuZXNjYXBlUXVvdGVcXHBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5QmtCLEFBR3FCLEFBU1UsQUFTQSxVQWpCSixTQVNGLEFBU0EsT0FqQkksT0FTSCxBQVNBLFdBakJHLElBU0UsQUFTdEIsY0FqQnFDLE1BU2hCLG1CQUNpQixPQVRqQixtQkFFckIsT0FRZ0MsOEJBQ2hDIiwiZmlsZSI6IkM6XFxVc2Vyc1xcUmVlY2VQYXRlcnNvblxcRGVza3RvcFxcUGxheWdyb3VuZFxcUnVuZXNjYXBlUXVvdGVcXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InO1xyXG5cclxuZnVuY3Rpb24gZmV0Y2hlcih1cmwpIHtcclxuICByZXR1cm4gZmV0Y2godXJsKS50aGVuKHIgPT4gci5qc29uKCkpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcclxuICBjb25zdCB7IHF1ZXJ5IH0gPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTV1IoXHJcbiAgICBgL2FwaS9yYW5kb21RdW90ZSR7cXVlcnkuYXV0aG9yID8gJz9hdXRob3I9JyArIHF1ZXJ5LmF1dGhvciA6ICcnfWAsXHJcbiAgICBmZXRjaGVyXHJcbiAgKTtcclxuICAvLyBUaGUgZm9sbG93aW5nIGxpbmUgaGFzIG9wdGlvbmFsIGNoYWluaW5nLCBhZGRlZCBpbiBOZXh0LmpzIHY5LjEuNSxcclxuICAvLyBpcyB0aGUgc2FtZSBhcyBgZGF0YSAmJiBkYXRhLmF1dGhvcmBcclxuICBjb25zdCBhdXRob3IgPSBkYXRhPy5hdXRob3I7XHJcbiAgbGV0IHF1b3RlID0gZGF0YT8ucXVvdGU7XHJcblxyXG4gIGlmICghZGF0YSkgcXVvdGUgPSAnTG9hZGluZy4uLic7XHJcbiAgaWYgKGVycm9yKSBxdW90ZSA9ICdGYWlsZWQgdG8gZmV0Y2ggdGhlIHF1b3RlLic7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8bWFpbiBjbGFzc05hbWU9XCJjZW50ZXJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJxdW90ZVwiPntxdW90ZX08L2Rpdj5cclxuXHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICBtYWluIHtcclxuICAgICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgICBtYXgtd2lkdGg6IDkwMHB4O1xyXG4gICAgICAgICAgbWFyZ2luOiAzNTBweCBhdXRvO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyAgICBcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYigyNTUsIDI1NSwgMjU1LCAwLjEpOyAgICBcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7ICAgXHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICAucXVvdGUge1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IFRvaG9tYSA7XHJcbiAgICAgICAgICBjb2xvcjogI2ZmZTAwMDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogNDVweDtcclxuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDsgICBcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTsgXHJcbiAgICAgICAgICAtd2Via2l0LXRleHQtc3Ryb2tlOiAxcHggYmxhY2s7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5hdXRob3Ige1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IFRvaG9tYSA7XHJcbiAgICAgICAgICBjb2xvcjogIzU1OTgzNDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT4gICAgICBcclxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgYm9keSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9iYWNrZ3JvdW5kLnBuZycpO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgIH1cclxuICAgIGB9PC9zdHlsZT5cclxuICAgIDwvbWFpbj5cclxuICApO1xyXG59Il19 */\n/*@ sourceURL=C:\\\\Users\\\\ReecePaterson\\\\Desktop\\\\Playground\\\\RunescapeQuote\\\\pages\\\\index.js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1901808241",
    __self: this
  }, "body{background-image:url('../background.png');overflow:hidden;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcUmVlY2VQYXRlcnNvblxcRGVza3RvcFxcUGxheWdyb3VuZFxcUnVuZXNjYXBlUXVvdGVcXHBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrRHlCLEFBR21ELDBDQUMxQixnQkFDbEIiLCJmaWxlIjoiQzpcXFVzZXJzXFxSZWVjZVBhdGVyc29uXFxEZXNrdG9wXFxQbGF5Z3JvdW5kXFxSdW5lc2NhcGVRdW90ZVxccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgdXNlU1dSIGZyb20gJ3N3cic7XHJcblxyXG5mdW5jdGlvbiBmZXRjaGVyKHVybCkge1xyXG4gIHJldHVybiBmZXRjaCh1cmwpLnRoZW4ociA9PiByLmpzb24oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xyXG4gIGNvbnN0IHsgcXVlcnkgfSA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVNXUihcclxuICAgIGAvYXBpL3JhbmRvbVF1b3RlJHtxdWVyeS5hdXRob3IgPyAnP2F1dGhvcj0nICsgcXVlcnkuYXV0aG9yIDogJyd9YCxcclxuICAgIGZldGNoZXJcclxuICApO1xyXG4gIC8vIFRoZSBmb2xsb3dpbmcgbGluZSBoYXMgb3B0aW9uYWwgY2hhaW5pbmcsIGFkZGVkIGluIE5leHQuanMgdjkuMS41LFxyXG4gIC8vIGlzIHRoZSBzYW1lIGFzIGBkYXRhICYmIGRhdGEuYXV0aG9yYFxyXG4gIGNvbnN0IGF1dGhvciA9IGRhdGE/LmF1dGhvcjtcclxuICBsZXQgcXVvdGUgPSBkYXRhPy5xdW90ZTtcclxuXHJcbiAgaWYgKCFkYXRhKSBxdW90ZSA9ICdMb2FkaW5nLi4uJztcclxuICBpZiAoZXJyb3IpIHF1b3RlID0gJ0ZhaWxlZCB0byBmZXRjaCB0aGUgcXVvdGUuJztcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxtYWluIGNsYXNzTmFtZT1cImNlbnRlclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInF1b3RlXCI+e3F1b3RlfTwvZGl2PlxyXG5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIG1haW4ge1xyXG4gICAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICAgIG1heC13aWR0aDogOTAwcHg7XHJcbiAgICAgICAgICBtYXJnaW46IDM1MHB4IGF1dG87XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7ICAgIFxyXG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiKDI1NSwgMjU1LCAyNTUsIDAuMSk7ICAgIFxyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMjVweDsgICBcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5xdW90ZSB7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogVG9ob21hIDtcclxuICAgICAgICAgIGNvbG9yOiAjZmZlMDAwO1xyXG4gICAgICAgICAgZm9udC1zaXplOiA0NXB4O1xyXG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4OyAgIFxyXG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpOyBcclxuICAgICAgICAgIC13ZWJraXQtdGV4dC1zdHJva2U6IDFweCBibGFjaztcclxuICAgICAgICB9XHJcbiAgICAgICAgLmF1dGhvciB7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogVG9ob21hIDtcclxuICAgICAgICAgIGNvbG9yOiAjNTU5ODM0O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPiAgICAgIFxyXG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICBib2R5IHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2JhY2tncm91bmQucG5nJyk7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgfVxyXG4gICAgYH08L3N0eWxlPlxyXG4gICAgPC9tYWluPlxyXG4gICk7XHJcbn0iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\ReecePaterson\\\\Desktop\\\\Playground\\\\RunescapeQuote\\\\pages\\\\index.js */"));
}

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\ReecePaterson\Desktop\Playground\RunescapeQuote\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "swr":
/*!**********************!*\
  !*** external "swr" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("swr");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map