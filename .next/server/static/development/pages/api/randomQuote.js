module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/randomQuote.js":
/*!**********************************!*\
  !*** ./pages/api/randomQuote.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _quotes_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../quotes.json */ "./quotes.json");
var _quotes_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../quotes.json */ "./quotes.json", 1);

/* harmony default export */ __webpack_exports__["default"] = ((req, res) => {
  const {
    author
  } = req.query;
  let quotes = _quotes_json__WEBPACK_IMPORTED_MODULE_0__;

  if (author) {
    quotes = quotes.filter(quote => quote.author.toLowerCase().includes(author.toLowerCase()));
  }

  if (!quotes.length) {
    quotes = _quotes_json__WEBPACK_IMPORTED_MODULE_0__.filter(quote => quote.author.toLowerCase() === 'unknown');
  }

  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  res.status(200).json(quote);
});

/***/ }),

/***/ "./quotes.json":
/*!*********************!*\
  !*** ./quotes.json ***!
  \*********************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"quote\":\"Protect your self, protect your friends. Mine is the glory that never ends. This is Saradomin's wisdom.\",\"author\":\"Saradomin\"},{\"quote\":\"The darkness in life may be avoided, by the light of wisdom shining. This is Saradomin's wisdom.\",\"author\":\"Saradomin\"},{\"quote\":\"Show love to your friends, and mercy to your enemies, and know that the wisdom of Saradomin will follow. This is Saradomin's wisdom.\",\"author\":\"Saradomin\"},{\"quote\":\"A fight begun, when the cause is just, will prevail over all others. This is Saradomin's wisdom.\",\"author\":\"Saradomin\"},{\"quote\":\"The currency of goodness is honour; It retains its value through scarcity. This is Saradomin's wisdom.\",\"author\":\"Saradomin\"},{\"quote\":\"Go in peace in the name of Saradomin; may his glory shine upon you like the sun.\",\"author\":\"Saradomin\"},{\"quote\":\"The trees, the earth, the sky, the waters: All play their part upon this land. May Guthix bring thee balance.\",\"author\":\"Guthix\"},{\"quote\":\"All things must end, as all begin; Only Guthix knows the role thou must play. May Guthix bring you balance.\",\"author\":\"Guthix\"},{\"quote\":\"In life, in death, in joy, in sorrow: May thine experience show thee balance. May Guthix bring you balance.\",\"author\":\"Guthix\"},{\"quote\":\"Thou must do as thou must, no matter what. Thine actions bring balance to this world. May Guthix bring you balance.\",\"author\":\"Guthix\"},{\"quote\":\"The river flows, the sun ignites, May you stand with Guthix in thy fights. May Guthix bring you balance.\",\"author\":\"Guthix\"},{\"quote\":\"A journey of a single step, May take thee over a thousand miles. May Guthix bring you balance.\",\"author\":\"Guthix\"},{\"quote\":\"Mayest thou walk the path, and never fall, For Guthix walks beside thee on thy journey. May Guthix bring thee peace.\",\"author\":\"Guthix\"},{\"quote\":\"Battles are not lost and won; They simply remove the weak from the equation. Zamorak give me strength!\",\"author\":\"Zamorak\"},{\"quote\":\"Those who fight, then run away, shame Zamorak with their cowardice. Zamorak give me strength!\",\"author\":\"Zamorak\"},{\"quote\":\"Battle is my those who choose to disagree with it. Zamorak give me strength!\",\"author\":\"Zamorak\"},{\"quote\":\"Strike fast, strike hard, strike true: The strength of Zamorak will be with you. Zamorak give me strength!\",\"author\":\"Zamorak\"},{\"quote\":\"May your bloodthirst never be sated, and may all your battles be glorious. Zamorak bring you strength.\",\"author\":\"Zamorak\"}]");

/***/ }),

/***/ 4:
/*!****************************************!*\
  !*** multi ./pages/api/randomQuote.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\ReecePaterson\Desktop\Playground\RunescapeQuote\pages\api\randomQuote.js */"./pages/api/randomQuote.js");


/***/ })

/******/ });
//# sourceMappingURL=randomQuote.js.map