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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/css/main.css":
/*!**************************!*\
  !*** ./src/css/main.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/css/main.css?");

/***/ }),

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<!DOCTYPE html>\\n<html lang=\\\"en\\\">\\n<head>\\n  <meta charset=\\\"UTF-8\\\">\\n  <title>Survey Form</title>\\n</head>\\n<body>\\n  <h1 id=\\\"title\\\">Survey Form</h1>\\n  <div id=\\\"form-outer\\\">\\n    <p id=\\\"description\\\">Let us know how we can improve freeCodeCamp</p>\\n    <form id=\\\"survey-form\\\" action=\\\"\\\">\\n      <div class=\\\"rowTab\\\">\\n        <div class=\\\"labels\\\">\\n          <label id=\\\"name-label\\\" for=\\\"name\\\"><sup>*</sup>Name:</label>\\n        </div>\\n        <div class=\\\"rightTab\\\">\\n          <input type=\\\"text\\\" name=\\\"name\\\" id=\\\"name\\\" class=\\\"input-field\\\" placeholder=\\\"Enter your name\\\" required autofocus>\\n        </div>\\n      </div>\\n      <div class=\\\"rowTab\\\">\\n        <div class=\\\"labels\\\">\\n          <label id=\\\"email-label\\\" for=\\\"email\\\"><sup>*</sup>Email:</label>\\n        </div>\\n        <div class=\\\"rightTab\\\">\\n          <input type=\\\"email\\\" name=\\\"email\\\" id=\\\"email\\\" class=\\\"input-field\\\" placeholder=\\\"Enter your email\\\" pattern=\\\"/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\\\.[a-zA-Z0-9-]+)*$/\\\" required>\\n        </div>\\n      </div>\\n      <div class=\\\"rowTab\\\">\\n        <div class=\\\"labels\\\">\\n          <label id=\\\"number-label\\\" for=\\\"age\\\"><sup>*</sup>Age:</label>\\n        </div>\\n        <div class=\\\"rightTab\\\">\\n          <input type=\\\"number\\\" name=\\\"age\\\" id=\\\"number\\\" class=\\\"input-field\\\" placeholder=\\\"Age\\\" min=\\\"10\\\" max=\\\"130\\\" required>\\n        </div>\\n      </div>\\n      <div class=\\\"rowTab\\\">\\n        <div class=\\\"labels\\\">\\n          <label for=\\\"currentPos\\\">Which option best describes your current role?</label>\\n        </div>\\n        <div class=\\\"rightTab\\\">\\n          <select name=\\\"currentPos\\\" id=\\\"dropdown\\\" class=\\\"dropdown\\\">\\n            <option disabled selected value>Select an option</option>\\n            <option value=\\\"student\\\">Student</option>\\n            <option value=\\\"job\\\">Full time job</option>\\n            <option value=\\\"learner\\\">Full time learner</option>\\n            <option value=\\\"preferNot\\\">Prefer not to say</option>\\n            <option value=\\\"other\\\">Other</option>\\n          </select>\\n        </div>\\n      </div>\\n      <div class=\\\"rowTab\\\">\\n        <div class=\\\"labels\\\">\\n          <label for=\\\"userRating\\\"><sup>*</sup>How likely is that you would recommend freeCodeCamp to a friend?</label>\\n        </div>\\n        <div class=\\\"rightTab\\\">\\n          <ul>\\n            <li class=\\\"radio\\\">\\n              <label>\\n                Definitely\\n                <input type=\\\"radio\\\" name=\\\"radio-buttons\\\" class=\\\"userRatings\\\" value=\\\"1\\\">\\n              </label>\\n            </li>\\n            <li class=\\\"radio\\\">\\n              <label>\\n                Maybe\\n                <input type=\\\"radio\\\" name=\\\"radio-buttons\\\" class=\\\"userRatings\\\" value=\\\"2\\\">\\n              </label>\\n            </li>\\n            <li class=\\\"radio\\\">\\n              <label>\\n                Not sure\\n                <input type=\\\"radio\\\" name=\\\"radio-buttons\\\" class=\\\"userRatings\\\" value=\\\"3\\\">\\n              </label>\\n            </li>\\n          </ul>\\n        </div>\\n      </div>\\n      <div class=\\\"rowTab\\\">\\n        <div class=\\\"labels\\\">\\n          <label for=\\\"most-like\\\">What do you like most in FCC:</label>\\n        </div>\\n        <div class=\\\"rightTab\\\">\\n          <select name=\\\"mostLike\\\" id=\\\"most-like\\\" class=\\\"dropdown\\\">\\n            <option disabled selected value>Select an option</option>\\n            <option value=\\\"challenges\\\">Challenges</option>\\n            <option value=\\\"projects\\\">Projects</option>\\n            <option value=\\\"community\\\">Community</option>\\n            <option value=\\\"openSource\\\">Open Source</option>\\n          </select>\\n        </div>\\n      </div>\\n      <div class=\\\"rowTab\\\">\\n        <div class=\\\"labels\\\">\\n          <label for=\\\"preferences\\\">\\n            Things that should be improved in the future<br>\\n            (Check all that apply):\\n          </label>\\n        </div>\\n        <div class=\\\"rightTab\\\">\\n          <ul id=\\\"preferences\\\">\\n            <li class=\\\"checkbox\\\">\\n              <label>\\n                <input type=\\\"checkbox\\\" name=\\\"prefer\\\" class=\\\"userRatings\\\" value=\\\"1\\\">\\n                Front-end Projects\\n              </label>\\n            </li>\\n            <li class=\\\"checkbox\\\">\\n              <label>\\n                <input type=\\\"checkbox\\\" name=\\\"prefer\\\" class=\\\"userRatings\\\" value=\\\"2\\\">\\n                Back-end Projects\\n              </label>\\n            </li>\\n            <li class=\\\"checkbox\\\">\\n              <label>\\n                <input type=\\\"checkbox\\\" name=\\\"prefer\\\" class=\\\"userRatings\\\" value=\\\"3\\\">\\n                Data Visualizatoin\\n              </label>\\n            </li>\\n            <li class=\\\"checkbox\\\">\\n              <label>\\n                <input type=\\\"checkbox\\\" name=\\\"prefer\\\" class=\\\"userRatings\\\" value=\\\"4\\\">\\n                Challenges\\n              </label>\\n            </li>\\n            <li class=\\\"checkbox\\\">\\n              <label>\\n                <input type=\\\"checkbox\\\" name=\\\"prefer\\\" class=\\\"userRatings\\\" value=\\\"5\\\">\\n                Open Source Community\\n              </label>\\n            </li>\\n            <li class=\\\"checkbox\\\">\\n              <label>\\n                <input type=\\\"checkbox\\\" name=\\\"prefer\\\" class=\\\"userRatings\\\" value=\\\"6\\\">\\n                Gitter help rooms\\n              </label>\\n            </li>\\n            <li class=\\\"checkbox\\\">\\n              <label>\\n                <input type=\\\"checkbox\\\" name=\\\"prefer\\\" class=\\\"userRatings\\\" value=\\\"7\\\">\\n                Videos\\n              </label>\\n            </li>\\n            <li class=\\\"checkbox\\\">\\n              <label>\\n                <input type=\\\"checkbox\\\" name=\\\"prefer\\\" class=\\\"userRatings\\\" value=\\\"8\\\">\\n                City Meetups\\n              </label>\\n            </li>\\n            <li class=\\\"checkbox\\\">\\n              <label>\\n                <input type=\\\"checkbox\\\" name=\\\"prefer\\\" class=\\\"userRatings\\\" value=\\\"9\\\">\\n                Wiki\\n              </label>\\n            </li>\\n            <li class=\\\"checkbox\\\">\\n              <label>\\n                <input type=\\\"checkbox\\\" name=\\\"prefer\\\" class=\\\"userRatings\\\" value=\\\"10\\\">\\n                Forum\\n              </label>\\n            </li>\\n            <li class=\\\"checkbox\\\">\\n              <label>\\n                <input type=\\\"checkbox\\\" name=\\\"prefer\\\" class=\\\"userRatings\\\" value=\\\"11\\\">\\n                Additional Courses\\n              </label>\\n            </li>\\n          </ul>\\n        </div>\\n      </div>\\n      <div class=\\\"rowTab\\\">\\n        <div class=\\\"labels\\\">\\n          <label for=\\\"comments\\\">Any Comments or Suggestions?</label>\\n        </div>\\n        <div class=\\\"rightTab\\\">\\n          <textarea name=\\\"comment\\\" id=\\\"comments\\\" class=\\\"input-field\\\" placeholder=\\\"Enter your comment here...\\\"></textarea>\\n        </div>\\n      </div>\\n      <button id=\\\"submit\\\" type=\\\"submit\\\">Submit</button>\\n    </form>\\n  </div>\\n</body>\\n</html>\";\n\n//# sourceURL=webpack:///./src/index.html?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/main.css */ \"./src/css/main.css\");\n/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_main_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index.html */ \"./src/index.html\");\n/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_html__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n// console.log('El archivo index.js es requerido por Webpack')\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ })

/******/ });