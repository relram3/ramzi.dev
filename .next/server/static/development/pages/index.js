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

/***/ "./content/home.md":
/*!*************************!*\
  !*** ./content/home.md ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const React = __webpack_require__(/*! react */ "react")

module.exports = { 
      attributes: {"title":"Ramzi Portfolio","date":"2019-03-17T19:31:20.591Z","skills":[{"name":"React","description":"front"},{"name":"Vue","description":"front"},{"name":"Angular 6+","description":"front"},{"name":"AngularJS","description":"front"},{"name":"NextJS","description":"front"},{"name":"Javascript","description":"front"},{"name":"Typescript","description":"front"},{"name":"Node","description":"back"},{"name":"Express","description":"back"},{"name":"GraphQL","description":"back"},{"name":"C#","description":"back"},{"name":"Redux-Thunk","description":"front"},{"name":"Redux-Sagas","description":"front"},{"name":"Flux","description":"front"},{"name":"SQL","description":"back"},{"name":"MongoDB","description":"back"},{"name":"Webpack","description":"front"},{"name":"Babel","description":"front"},{"name":"Docker","description":"other"},{"name":"Kubernetes","description":"other"},{"name":"Segment","description":"other"},{"name":"Bamboo","description":"other"},{"name":"NetlifyCMS","description":"other"}]},
    
      react: 
      function (props) {
        Object.keys(props).forEach(function (key) {
          this[key] = props[key]
        })
        const markdown = /*#__PURE__*/React.createElement("div", {
  className: "frontmatter-markdown"
}, /*#__PURE__*/React.createElement("p", null, "Welcome to my portfolio page about my work."), /*#__PURE__*/React.createElement("p", null, "This page is built with NextJS, and content is managed in Netlify CMS"));
        return markdown
      }
    ,
     }

/***/ }),

/***/ "./pages/Landing.js":
/*!**************************!*\
  !*** ./pages/Landing.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Landing; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\Ramzi\\Desktop\\DEV\\Personal Projects\\ramzi.dev\\pages\\Landing.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

class Landing extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx("div", {
      className: "landing overlay",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6,
        columnNumber: 7
      }
    }, __jsx("div", {
      className: "header",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 9
      }
    }, __jsx("h1", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 11
      }
    }, "Hello, I'm ", __jsx("span", {
      className: "name",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 24
      }
    }, "Ramzi El-Ramahi"), ". ", __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 71
      }
    }), "I'm a full-stack web developer.")));
  }

}

/***/ }),

/***/ "./pages/Projects.js":
/*!***************************!*\
  !*** ./pages/Projects.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Projects; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\Ramzi\\Desktop\\DEV\\Personal Projects\\ramzi.dev\\pages\\Projects.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function Projects() {
  return __jsx("div", {
    className: "projects",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx("h1", {
    className: "projects_header",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }, "Projects"));
}

/***/ }),

/***/ "./pages/Skills.js":
/*!*************************!*\
  !*** ./pages/Skills.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Skills; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _content_home_md__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../content/home.md */ "./content/home.md");
/* harmony import */ var _content_home_md__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_content_home_md__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Ramzi\\Desktop\\DEV\\Personal Projects\\ramzi.dev\\pages\\Skills.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Skills() {
  const {
    0: filter,
    1: setFilter
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("all");
  let {
    skills
  } = _content_home_md__WEBPACK_IMPORTED_MODULE_1__["attributes"];
  return __jsx("div", {
    className: "skills",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, __jsx("h1", {
    className: "skills_header",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, "Skills"), __jsx("div", {
    className: "skills_filter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: filter === "all" ? "skills_filter-tab active" : "skills_filter-tab",
    onClick: () => setFilter("all"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, "All"), __jsx("div", {
    className: filter === "front" ? "skills_filter-tab active" : "skills_filter-tab",
    onClick: () => setFilter("front"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, "Front-End"), __jsx("div", {
    className: filter === "back" ? "skills_filter-tab active" : "skills_filter-tab",
    onClick: () => setFilter("back"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, "Back-End"), __jsx("div", {
    className: filter === "other" ? "skills_filter-tab active" : "skills_filter-tab",
    onClick: () => setFilter("other"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }, "Other")), __jsx("div", {
    className: "skills_section",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }
  }, skills.map((skill, key) => {
    console.log(filter, skill.description, skill.name);
    let filteredClass = skill.description === filter ? " activePill" : "";
    let classname = filter === "all" ? "skills_pill" : "skills_pill" + filteredClass;
    return __jsx("div", {
      className: classname,
      key: key,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 13
      }
    }, skill.name);
  })));
}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Landing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Landing */ "./pages/Landing.js");
/* harmony import */ var _Projects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Projects */ "./pages/Projects.js");
/* harmony import */ var _Skills__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Skills */ "./pages/Skills.js");
var _jsxFileName = "C:\\Users\\Ramzi\\Desktop\\DEV\\Personal Projects\\ramzi.dev\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

 // import { attributes, react as HomeContent } from '../content/home.md';




function Home() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, __jsx("script", {
    src: "https://identity.netlify.com/v1/netlify-identity-widget.js",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }), __jsx("link", {
    href: "https://fonts.googleapis.com/css2?family=Raleway:wght@400;600&display=swap",
    rel: "stylesheet",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  })), __jsx(_Landing__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }), __jsx(_Skills__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }), __jsx(_Projects__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }));
}

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Ramzi\Desktop\DEV\Personal Projects\ramzi.dev\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9ob21lLm1kIiwid2VicGFjazovLy8uL3BhZ2VzL0xhbmRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvUHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvU2tpbGxzLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiXSwibmFtZXMiOlsiTGFuZGluZyIsIkNvbXBvbmVudCIsInJlbmRlciIsIlByb2plY3RzIiwiU2tpbGxzIiwiZmlsdGVyIiwic2V0RmlsdGVyIiwidXNlU3RhdGUiLCJza2lsbHMiLCJhdHRyaWJ1dGVzIiwibWFwIiwic2tpbGwiLCJrZXkiLCJjb25zb2xlIiwibG9nIiwiZGVzY3JpcHRpb24iLCJuYW1lIiwiZmlsdGVyZWRDbGFzcyIsImNsYXNzbmFtZSIsIkhvbWUiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFD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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFDRSxRQUFJLEVBQUMsNEVBRFA7QUFFRSxPQUFHLEVBQUMsWUFGTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FERixFQVFFLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVJGLEVBU0UsTUFBQywrQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVEYsRUFVRSxNQUFDLGlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFWRixDQURGO0FBY0QsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QkQsc0M7Ozs7Ozs7Ozs7O0FDQUEsa0MiLCJmaWxlIjoic3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDMpO1xuIiwiY29uc3QgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpXG5cbm1vZHVsZS5leHBvcnRzID0geyBcbiAgICAgIGF0dHJpYnV0ZXM6IHtcInRpdGxlXCI6XCJSYW16aSBQb3J0Zm9saW9cIixcImRhdGVcIjpcIjIwMTktMDMtMTdUMTk6MzE6MjAuNTkxWlwiLFwic2tpbGxzXCI6W3tcIm5hbWVcIjpcIlJlYWN0XCIsXCJkZXNjcmlwdGlvblwiOlwiZnJvbnRcIn0se1wibmFtZVwiOlwiVnVlXCIsXCJkZXNjcmlwdGlvblwiOlwiZnJvbnRcIn0se1wibmFtZVwiOlwiQW5ndWxhciA2K1wiLFwiZGVzY3JpcHRpb25cIjpcImZyb250XCJ9LHtcIm5hbWVcIjpcIkFuZ3VsYXJKU1wiLFwiZGVzY3JpcHRpb25cIjpcImZyb250XCJ9LHtcIm5hbWVcIjpcIk5leHRKU1wiLFwiZGVzY3JpcHRpb25cIjpcImZyb250XCJ9LHtcIm5hbWVcIjpcIkphdmFzY3JpcHRcIixcImRlc2NyaXB0aW9uXCI6XCJmcm9udFwifSx7XCJuYW1lXCI6XCJUeXBlc2NyaXB0XCIsXCJkZXNjcmlwdGlvblwiOlwiZnJvbnRcIn0se1wibmFtZVwiOlwiTm9kZVwiLFwiZGVzY3JpcHRpb25cIjpcImJhY2tcIn0se1wibmFtZVwiOlwiRXhwcmVzc1wiLFwiZGVzY3JpcHRpb25cIjpcImJhY2tcIn0se1wibmFtZVwiOlwiR3JhcGhRTFwiLFwiZGVzY3JpcHRpb25cIjpcImJhY2tcIn0se1wibmFtZVwiOlwiQyNcIixcImRlc2NyaXB0aW9uXCI6XCJiYWNrXCJ9LHtcIm5hbWVcIjpcIlJlZHV4LVRodW5rXCIsXCJkZXNjcmlwdGlvblwiOlwiZnJvbnRcIn0se1wibmFtZVwiOlwiUmVkdXgtU2FnYXNcIixcImRlc2NyaXB0aW9uXCI6XCJmcm9udFwifSx7XCJuYW1lXCI6XCJGbHV4XCIsXCJkZXNjcmlwdGlvblwiOlwiZnJvbnRcIn0se1wibmFtZVwiOlwiU1FMXCIsXCJkZXNjcmlwdGlvblwiOlwiYmFja1wifSx7XCJuYW1lXCI6XCJNb25nb0RCXCIsXCJkZXNjcmlwdGlvblwiOlwiYmFja1wifSx7XCJuYW1lXCI6XCJXZWJwYWNrXCIsXCJkZXNjcmlwdGlvblwiOlwiZnJvbnRcIn0se1wibmFtZVwiOlwiQmFiZWxcIixcImRlc2NyaXB0aW9uXCI6XCJmcm9udFwifSx7XCJuYW1lXCI6XCJEb2NrZXJcIixcImRlc2NyaXB0aW9uXCI6XCJvdGhlclwifSx7XCJuYW1lXCI6XCJLdWJlcm5ldGVzXCIsXCJkZXNjcmlwdGlvblwiOlwib3RoZXJcIn0se1wibmFtZVwiOlwiU2VnbWVudFwiLFwiZGVzY3JpcHRpb25cIjpcIm90aGVyXCJ9LHtcIm5hbWVcIjpcIkJhbWJvb1wiLFwiZGVzY3JpcHRpb25cIjpcIm90aGVyXCJ9LHtcIm5hbWVcIjpcIk5ldGxpZnlDTVNcIixcImRlc2NyaXB0aW9uXCI6XCJvdGhlclwifV19LFxuICAgIFxuICAgICAgcmVhY3Q6IFxuICAgICAgZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgICAgIE9iamVjdC5rZXlzKHByb3BzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICB0aGlzW2tleV0gPSBwcm9wc1trZXldXG4gICAgICAgIH0pXG4gICAgICAgIGNvbnN0IG1hcmtkb3duID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICBjbGFzc05hbWU6IFwiZnJvbnRtYXR0ZXItbWFya2Rvd25cIlxufSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIG51bGwsIFwiV2VsY29tZSB0byBteSBwb3J0Zm9saW8gcGFnZSBhYm91dCBteSB3b3JrLlwiKSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIG51bGwsIFwiVGhpcyBwYWdlIGlzIGJ1aWx0IHdpdGggTmV4dEpTLCBhbmQgY29udGVudCBpcyBtYW5hZ2VkIGluIE5ldGxpZnkgQ01TXCIpKTtcbiAgICAgICAgcmV0dXJuIG1hcmtkb3duXG4gICAgICB9XG4gICAgLFxuICAgICB9IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExhbmRpbmcgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGFuZGluZyBvdmVybGF5XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cclxuICAgICAgICAgIDxoMT5cclxuICAgICAgICAgICAgSGVsbG8sIEknbSA8c3BhbiBjbGFzc05hbWU9XCJuYW1lXCI+UmFtemkgRWwtUmFtYWhpPC9zcGFuPi4gPGJyIC8+SSdtIGEgZnVsbC1zdGFjayB3ZWIgZGV2ZWxvcGVyLlxyXG4gICAgICAgICAgPC9oMT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3RzKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2plY3RzXCI+XHJcbiAgICAgIDxoMSBjbGFzc05hbWU9XCJwcm9qZWN0c19oZWFkZXJcIj5Qcm9qZWN0czwvaDE+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBhdHRyaWJ1dGVzIH0gZnJvbSBcIi4uL2NvbnRlbnQvaG9tZS5tZFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2tpbGxzKCkge1xyXG4gIGNvbnN0IFtmaWx0ZXIsIHNldEZpbHRlcl0gPSB1c2VTdGF0ZShcImFsbFwiKTtcclxuICBsZXQgeyBza2lsbHMgfSA9IGF0dHJpYnV0ZXM7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNraWxsc1wiPlxyXG4gICAgICA8aDEgY2xhc3NOYW1lPVwic2tpbGxzX2hlYWRlclwiPlNraWxsczwvaDE+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2tpbGxzX2ZpbHRlclwiPlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgIGZpbHRlciA9PT0gXCJhbGxcIiA/IFwic2tpbGxzX2ZpbHRlci10YWIgYWN0aXZlXCIgOiBcInNraWxsc19maWx0ZXItdGFiXCJcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEZpbHRlcihcImFsbFwiKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBBbGxcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICBmaWx0ZXIgPT09IFwiZnJvbnRcIlxyXG4gICAgICAgICAgICAgID8gXCJza2lsbHNfZmlsdGVyLXRhYiBhY3RpdmVcIlxyXG4gICAgICAgICAgICAgIDogXCJza2lsbHNfZmlsdGVyLXRhYlwiXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRGaWx0ZXIoXCJmcm9udFwiKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBGcm9udC1FbmRcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICBmaWx0ZXIgPT09IFwiYmFja1wiID8gXCJza2lsbHNfZmlsdGVyLXRhYiBhY3RpdmVcIiA6IFwic2tpbGxzX2ZpbHRlci10YWJcIlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0RmlsdGVyKFwiYmFja1wiKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBCYWNrLUVuZFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgIGZpbHRlciA9PT0gXCJvdGhlclwiXHJcbiAgICAgICAgICAgICAgPyBcInNraWxsc19maWx0ZXItdGFiIGFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgOiBcInNraWxsc19maWx0ZXItdGFiXCJcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEZpbHRlcihcIm90aGVyXCIpfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIE90aGVyXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNraWxsc19zZWN0aW9uXCI+XHJcbiAgICAgICAge3NraWxscy5tYXAoKHNraWxsLCBrZXkpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGZpbHRlciwgc2tpbGwuZGVzY3JpcHRpb24sIHNraWxsLm5hbWUpO1xyXG5cclxuICAgICAgICAgIGxldCBmaWx0ZXJlZENsYXNzID0gc2tpbGwuZGVzY3JpcHRpb24gPT09IGZpbHRlciA/IFwiIGFjdGl2ZVBpbGxcIiA6IFwiXCI7XHJcbiAgICAgICAgICBsZXQgY2xhc3NuYW1lID1cclxuICAgICAgICAgICAgZmlsdGVyID09PSBcImFsbFwiID8gXCJza2lsbHNfcGlsbFwiIDogXCJza2lsbHNfcGlsbFwiICsgZmlsdGVyZWRDbGFzcztcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc25hbWV9IGtleT17a2V5fT5cclxuICAgICAgICAgICAgICB7c2tpbGwubmFtZX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuLy8gaW1wb3J0IHsgYXR0cmlidXRlcywgcmVhY3QgYXMgSG9tZUNvbnRlbnQgfSBmcm9tICcuLi9jb250ZW50L2hvbWUubWQnO1xyXG5cclxuaW1wb3J0IExhbmRpbmcgZnJvbSBcIi4vTGFuZGluZ1wiO1xyXG5pbXBvcnQgUHJvamVjdHMgZnJvbSBcIi4vUHJvamVjdHNcIjtcclxuaW1wb3J0IFNraWxscyBmcm9tIFwiLi9Ta2lsbHNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9pZGVudGl0eS5uZXRsaWZ5LmNvbS92MS9uZXRsaWZ5LWlkZW50aXR5LXdpZGdldC5qc1wiPjwvc2NyaXB0PlxyXG4gICAgICAgIDxsaW5rXHJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1SYWxld2F5OndnaHRANDAwOzYwMCZkaXNwbGF5PXN3YXBcIlxyXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgPjwvbGluaz5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8TGFuZGluZyAvPlxyXG4gICAgICA8U2tpbGxzIC8+XHJcbiAgICAgIDxQcm9qZWN0cyAvPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==