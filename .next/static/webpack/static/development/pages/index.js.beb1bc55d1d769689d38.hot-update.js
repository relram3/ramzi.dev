webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/Skills.js":
/*!*************************!*\
  !*** ./pages/Skills.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Skills; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _content_home_md__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../content/home.md */ "./content/home.md");
/* harmony import */ var _content_home_md__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_content_home_md__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Ramzi\\Desktop\\DEV\\Personal Projects\\ramzi.dev\\pages\\Skills.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Skills() {
  _s();

  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("all"),
      filter = _useState[0],
      setFilter = _useState[1];

  var skills = _content_home_md__WEBPACK_IMPORTED_MODULE_1__["attributes"].skills; // let filteredSkills = skills.filter((skill) => {
  //   console.log(skill.description, filter, skill.description === filter);
  //   if (filter === "all") {
  //     return true;
  //   } else if (skill.description === filter) {
  //     return true;
  //   }
  //   return false;
  // });

  return __jsx("div", {
    className: "skills",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }
  }, __jsx("h1", {
    className: "skills_header",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, "Skills"), __jsx("div", {
    className: "skills_filter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "skills_filter-tab active",
    onClick: function onClick() {
      return setFilter("all");
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, "All"), __jsx("div", {
    className: "skills_filter-tab",
    onClick: function onClick() {
      return setFilter("front");
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, "Front-End"), __jsx("div", {
    className: "skills_filter-tab",
    onClick: function onClick() {
      return setFilter("back");
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, "Back-End"), __jsx("div", {
    className: "skills_filter-tab",
    onClick: function onClick() {
      return setFilter("other");
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, "Other")), __jsx("div", {
    className: "skills_section",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }, skills.map(function (skill, key) {
    var filteredClass = skill.description === filter ? "" : " filtered";
    var classname = "skills_pill" + filteredClass;
    return __jsx("div", {
      className: "skills_pill" + filter === "all" ? "" : filteredClass,
      key: key,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 13
      }
    }, skill.name);
  })));
}

_s(Skills, "boPJerHaELAyf+PNkR+Y8+JetQg=");

_c = Skills;

var _c;

$RefreshReg$(_c, "Skills");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9Ta2lsbHMuanMiXSwibmFtZXMiOlsiU2tpbGxzIiwidXNlU3RhdGUiLCJmaWx0ZXIiLCJzZXRGaWx0ZXIiLCJza2lsbHMiLCJhdHRyaWJ1dGVzIiwibWFwIiwic2tpbGwiLCJrZXkiLCJmaWx0ZXJlZENsYXNzIiwiZGVzY3JpcHRpb24iLCJjbGFzc25hbWUiLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFZSxTQUFTQSxNQUFULEdBQWtCO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ0hDLHNEQUFRLENBQUMsS0FBRCxDQURMO0FBQUEsTUFDeEJDLE1BRHdCO0FBQUEsTUFDaEJDLFNBRGdCOztBQUFBLE1BRXpCQyxNQUZ5QixHQUVkQywyREFGYyxDQUV6QkQsTUFGeUIsRUFHL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUNBLFNBQ0U7QUFBSyxhQUFTLEVBQUMsUUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxhQUFTLEVBQUMsZUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsRUFFRTtBQUFLLGFBQVMsRUFBQyxlQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLGFBQVMsRUFBQywwQkFEWjtBQUVFLFdBQU8sRUFBRTtBQUFBLGFBQU1ELFNBQVMsQ0FBQyxLQUFELENBQWY7QUFBQSxLQUZYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERixFQU9FO0FBQUssYUFBUyxFQUFDLG1CQUFmO0FBQW1DLFdBQU8sRUFBRTtBQUFBLGFBQU1BLFNBQVMsQ0FBQyxPQUFELENBQWY7QUFBQSxLQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVBGLEVBVUU7QUFBSyxhQUFTLEVBQUMsbUJBQWY7QUFBbUMsV0FBTyxFQUFFO0FBQUEsYUFBTUEsU0FBUyxDQUFDLE1BQUQsQ0FBZjtBQUFBLEtBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBVkYsRUFhRTtBQUFLLGFBQVMsRUFBQyxtQkFBZjtBQUFtQyxXQUFPLEVBQUU7QUFBQSxhQUFNQSxTQUFTLENBQUMsT0FBRCxDQUFmO0FBQUEsS0FBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWJGLENBRkYsRUFtQkU7QUFBSyxhQUFTLEVBQUMsZ0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHQyxNQUFNLENBQUNFLEdBQVAsQ0FBVyxVQUFDQyxLQUFELEVBQVFDLEdBQVIsRUFBZ0I7QUFDMUIsUUFBSUMsYUFBYSxHQUFHRixLQUFLLENBQUNHLFdBQU4sS0FBc0JSLE1BQXRCLEdBQStCLEVBQS9CLEdBQW9DLFdBQXhEO0FBQ0EsUUFBSVMsU0FBUyxHQUFHLGdCQUFnQkYsYUFBaEM7QUFDQSxXQUNFO0FBQ0UsZUFBUyxFQUFFLGdCQUFnQlAsTUFBaEIsS0FBMkIsS0FBM0IsR0FBbUMsRUFBbkMsR0FBd0NPLGFBRHJEO0FBRUUsU0FBRyxFQUFFRCxHQUZQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FJR0QsS0FBSyxDQUFDSyxJQUpULENBREY7QUFRRCxHQVhBLENBREgsQ0FuQkYsQ0FERjtBQW9DRDs7R0FqRHVCWixNOztLQUFBQSxNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy5iZWIxYmM1NWQxZDc2OTY4OWQzOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGF0dHJpYnV0ZXMgfSBmcm9tIFwiLi4vY29udGVudC9ob21lLm1kXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTa2lsbHMoKSB7XHJcbiAgY29uc3QgW2ZpbHRlciwgc2V0RmlsdGVyXSA9IHVzZVN0YXRlKFwiYWxsXCIpO1xyXG4gIGxldCB7IHNraWxscyB9ID0gYXR0cmlidXRlcztcclxuICAvLyBsZXQgZmlsdGVyZWRTa2lsbHMgPSBza2lsbHMuZmlsdGVyKChza2lsbCkgPT4ge1xyXG4gIC8vICAgY29uc29sZS5sb2coc2tpbGwuZGVzY3JpcHRpb24sIGZpbHRlciwgc2tpbGwuZGVzY3JpcHRpb24gPT09IGZpbHRlcik7XHJcbiAgLy8gICBpZiAoZmlsdGVyID09PSBcImFsbFwiKSB7XHJcbiAgLy8gICAgIHJldHVybiB0cnVlO1xyXG4gIC8vICAgfSBlbHNlIGlmIChza2lsbC5kZXNjcmlwdGlvbiA9PT0gZmlsdGVyKSB7XHJcbiAgLy8gICAgIHJldHVybiB0cnVlO1xyXG4gIC8vICAgfVxyXG5cclxuICAvLyAgIHJldHVybiBmYWxzZTtcclxuICAvLyB9KTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJza2lsbHNcIj5cclxuICAgICAgPGgxIGNsYXNzTmFtZT1cInNraWxsc19oZWFkZXJcIj5Ta2lsbHM8L2gxPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNraWxsc19maWx0ZXJcIj5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJza2lsbHNfZmlsdGVyLXRhYiBhY3RpdmVcIlxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0RmlsdGVyKFwiYWxsXCIpfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIEFsbFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2tpbGxzX2ZpbHRlci10YWJcIiBvbkNsaWNrPXsoKSA9PiBzZXRGaWx0ZXIoXCJmcm9udFwiKX0+XHJcbiAgICAgICAgICBGcm9udC1FbmRcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNraWxsc19maWx0ZXItdGFiXCIgb25DbGljaz17KCkgPT4gc2V0RmlsdGVyKFwiYmFja1wiKX0+XHJcbiAgICAgICAgICBCYWNrLUVuZFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2tpbGxzX2ZpbHRlci10YWJcIiBvbkNsaWNrPXsoKSA9PiBzZXRGaWx0ZXIoXCJvdGhlclwiKX0+XHJcbiAgICAgICAgICBPdGhlclxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJza2lsbHNfc2VjdGlvblwiPlxyXG4gICAgICAgIHtza2lsbHMubWFwKChza2lsbCwga2V5KSA9PiB7XHJcbiAgICAgICAgICBsZXQgZmlsdGVyZWRDbGFzcyA9IHNraWxsLmRlc2NyaXB0aW9uID09PSBmaWx0ZXIgPyBcIlwiIDogXCIgZmlsdGVyZWRcIjtcclxuICAgICAgICAgIGxldCBjbGFzc25hbWUgPSBcInNraWxsc19waWxsXCIgKyBmaWx0ZXJlZENsYXNzO1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17XCJza2lsbHNfcGlsbFwiICsgZmlsdGVyID09PSBcImFsbFwiID8gXCJcIiA6IGZpbHRlcmVkQ2xhc3N9XHJcbiAgICAgICAgICAgICAga2V5PXtrZXl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7c2tpbGwubmFtZX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==