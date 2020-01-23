webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");
var _jsxFileName = "C:\\Users\\ReecePaterson\\Desktop\\Playground\\RunescapeQuote\\pages\\index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



function fetcher(url) {
  return fetch(url).then(function (r) {
    return r.json();
  });
}

function Index() {
  var _useRouter = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])(),
      query = _useRouter.query;

  var _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_3__["default"])("/api/randomQuote".concat(query.author ? '?author=' + query.author : ''), fetcher),
      data = _useSWR.data,
      error = _useSWR.error; // The following line has optional chaining, added in Next.js v9.1.5,
  // is the same as `data && data.author`


  var author = data === null || data === void 0 ? void 0 : data.author;
  var quote = data === null || data === void 0 ? void 0 : data.quote;
  if (!data) quote = 'Loading...';
  if (error) quote = 'Failed to fetch the quote.';
  return __jsx("main", {
    className: "jsx-3109823107" + " " + "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3109823107" + " " + "quote",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, quote), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1067715915",
    __self: this
  }, "main.jsx-3109823107{width:90%;max-width:900px;margin:400px auto;text-align:center;background:rgb(255,255,255,0.1);border-radius:25px;overflow:hidden;}.quote.jsx-3109823107{font-family:Tohoma;color:#ffe000;font-size:45px;padding-bottom:10px;border-radius:10px;background:rgba(255,255,255,0.5);-webkit-text-stroke:1px black;}.author.jsx-3109823107{font-family:Tohoma;color:#559834;font-size:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcUmVlY2VQYXRlcnNvblxcRGVza3RvcFxcUGxheWdyb3VuZFxcUnVuZXNjYXBlUXVvdGVcXHBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5QmtCLEFBR3FCLEFBU1UsQUFTQSxVQWpCSixTQVNGLEFBU0EsT0FqQkksT0FTSCxBQVNBLFdBakJHLElBU0UsQUFTdEIsY0FqQnFDLE1BU2hCLG1CQUNpQixPQVRqQixtQkFDSCxPQVNjLFNBUmhDLHFCQVNBIiwiZmlsZSI6IkM6XFxVc2Vyc1xcUmVlY2VQYXRlcnNvblxcRGVza3RvcFxcUGxheWdyb3VuZFxcUnVuZXNjYXBlUXVvdGVcXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InO1xyXG5cclxuZnVuY3Rpb24gZmV0Y2hlcih1cmwpIHtcclxuICByZXR1cm4gZmV0Y2godXJsKS50aGVuKHIgPT4gci5qc29uKCkpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcclxuICBjb25zdCB7IHF1ZXJ5IH0gPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTV1IoXHJcbiAgICBgL2FwaS9yYW5kb21RdW90ZSR7cXVlcnkuYXV0aG9yID8gJz9hdXRob3I9JyArIHF1ZXJ5LmF1dGhvciA6ICcnfWAsXHJcbiAgICBmZXRjaGVyXHJcbiAgKTtcclxuICAvLyBUaGUgZm9sbG93aW5nIGxpbmUgaGFzIG9wdGlvbmFsIGNoYWluaW5nLCBhZGRlZCBpbiBOZXh0LmpzIHY5LjEuNSxcclxuICAvLyBpcyB0aGUgc2FtZSBhcyBgZGF0YSAmJiBkYXRhLmF1dGhvcmBcclxuICBjb25zdCBhdXRob3IgPSBkYXRhPy5hdXRob3I7XHJcbiAgbGV0IHF1b3RlID0gZGF0YT8ucXVvdGU7XHJcblxyXG4gIGlmICghZGF0YSkgcXVvdGUgPSAnTG9hZGluZy4uLic7XHJcbiAgaWYgKGVycm9yKSBxdW90ZSA9ICdGYWlsZWQgdG8gZmV0Y2ggdGhlIHF1b3RlLic7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8bWFpbiBjbGFzc05hbWU9XCJjZW50ZXJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJxdW90ZVwiPntxdW90ZX08L2Rpdj5cclxuXHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICBtYWluIHtcclxuICAgICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgICBtYXgtd2lkdGg6IDkwMHB4O1xyXG4gICAgICAgICAgbWFyZ2luOiA0MDBweCBhdXRvO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyAgICBcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYigyNTUsIDI1NSwgMjU1LCAwLjEpOyAgICBcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7ICAgXHJcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAucXVvdGUge1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IFRvaG9tYSA7XHJcbiAgICAgICAgICBjb2xvcjogI2ZmZTAwMDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogNDVweDtcclxuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDsgICBcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTsgXHJcbiAgICAgICAgICAtd2Via2l0LXRleHQtc3Ryb2tlOiAxcHggYmxhY2s7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5hdXRob3Ige1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IFRvaG9tYSA7XHJcbiAgICAgICAgICBjb2xvcjogIzU1OTgzNDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT4gICAgICBcclxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgYm9keSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9iYWNrZ3JvdW5kLnBuZycpO1xyXG4gICAgICB9XHJcbiAgICBgfTwvc3R5bGU+XHJcbiAgICA8L21haW4+XHJcbiAgKTtcclxufSJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\ReecePaterson\\\\Desktop\\\\Playground\\\\RunescapeQuote\\\\pages\\\\index.js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1064072769",
    __self: this
  }, "body{background-image:url('../background.png');}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcUmVlY2VQYXRlcnNvblxcRGVza3RvcFxcUGxheWdyb3VuZFxcUnVuZXNjYXBlUXVvdGVcXHBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrRHlCLEFBR21ELDBDQUM1QyIsImZpbGUiOiJDOlxcVXNlcnNcXFJlZWNlUGF0ZXJzb25cXERlc2t0b3BcXFBsYXlncm91bmRcXFJ1bmVzY2FwZVF1b3RlXFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB1c2VTV1IgZnJvbSAnc3dyJztcclxuXHJcbmZ1bmN0aW9uIGZldGNoZXIodXJsKSB7XHJcbiAgcmV0dXJuIGZldGNoKHVybCkudGhlbihyID0+IHIuanNvbigpKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XHJcbiAgY29uc3QgeyBxdWVyeSB9ID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSKFxyXG4gICAgYC9hcGkvcmFuZG9tUXVvdGUke3F1ZXJ5LmF1dGhvciA/ICc/YXV0aG9yPScgKyBxdWVyeS5hdXRob3IgOiAnJ31gLFxyXG4gICAgZmV0Y2hlclxyXG4gICk7XHJcbiAgLy8gVGhlIGZvbGxvd2luZyBsaW5lIGhhcyBvcHRpb25hbCBjaGFpbmluZywgYWRkZWQgaW4gTmV4dC5qcyB2OS4xLjUsXHJcbiAgLy8gaXMgdGhlIHNhbWUgYXMgYGRhdGEgJiYgZGF0YS5hdXRob3JgXHJcbiAgY29uc3QgYXV0aG9yID0gZGF0YT8uYXV0aG9yO1xyXG4gIGxldCBxdW90ZSA9IGRhdGE/LnF1b3RlO1xyXG5cclxuICBpZiAoIWRhdGEpIHF1b3RlID0gJ0xvYWRpbmcuLi4nO1xyXG4gIGlmIChlcnJvcikgcXVvdGUgPSAnRmFpbGVkIHRvIGZldGNoIHRoZSBxdW90ZS4nO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPG1haW4gY2xhc3NOYW1lPVwiY2VudGVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicXVvdGVcIj57cXVvdGV9PC9kaXY+XHJcblxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgbWFpbiB7XHJcbiAgICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgICAgbWF4LXdpZHRoOiA5MDBweDtcclxuICAgICAgICAgIG1hcmdpbjogNDAwcHggYXV0bztcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgICAgXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMjU1LCAyNTUsIDI1NSwgMC4xKTsgICAgXHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAyNXB4OyAgIFxyXG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnF1b3RlIHtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiBUb2hvbWEgO1xyXG4gICAgICAgICAgY29sb3I6ICNmZmUwMDA7XHJcbiAgICAgICAgICBmb250LXNpemU6IDQ1cHg7XHJcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7ICAgXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7IFxyXG4gICAgICAgICAgLXdlYmtpdC10ZXh0LXN0cm9rZTogMXB4IGJsYWNrO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYXV0aG9yIHtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiBUb2hvbWEgO1xyXG4gICAgICAgICAgY29sb3I6ICM1NTk4MzQ7XHJcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+ICAgICAgXHJcbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgIGJvZHkge1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vYmFja2dyb3VuZC5wbmcnKTtcclxuICAgICAgfVxyXG4gICAgYH08L3N0eWxlPlxyXG4gICAgPC9tYWluPlxyXG4gICk7XHJcbn0iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\ReecePaterson\\\\Desktop\\\\Playground\\\\RunescapeQuote\\\\pages\\\\index.js */"));
}

/***/ })

})
//# sourceMappingURL=index.js.a6ffe0d15951ed0a54be.hot-update.js.map