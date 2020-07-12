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

  var skills = _content_home_md__WEBPACK_IMPORTED_MODULE_1__["attributes"].skills;
  return __jsx("div", {
    className: "skills",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, __jsx("h1", {
    className: "skills_header",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, "Skills"), __jsx("div", {
    className: "skills_filter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "skills_filter-tab active",
    onClick: setFilter("all"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, "All"), __jsx("div", {
    className: "skills_filter-tab",
    onClick: setFilter("front"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, "Front-End"), __jsx("div", {
    className: "skills_filter-tab",
    onClick: setFilter("back"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, "Back-End"), __jsx("div", {
    className: "skills_filter-tab",
    onClick: setFilter("other"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, "Other")), __jsx("div", {
    className: "skills_section",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, skills.map(function (skill, key) {
    return __jsx("div", {
      className: "skills_pill",
      key: key,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9Ta2lsbHMuanMiXSwibmFtZXMiOlsiU2tpbGxzIiwidXNlU3RhdGUiLCJmaWx0ZXIiLCJzZXRGaWx0ZXIiLCJza2lsbHMiLCJhdHRyaWJ1dGVzIiwibWFwIiwic2tpbGwiLCJrZXkiLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFZSxTQUFTQSxNQUFULEdBQWtCO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ0hDLHNEQUFRLENBQUMsS0FBRCxDQURMO0FBQUEsTUFDeEJDLE1BRHdCO0FBQUEsTUFDaEJDLFNBRGdCOztBQUFBLE1BRXpCQyxNQUZ5QixHQUVkQywyREFGYyxDQUV6QkQsTUFGeUI7QUFHL0IsU0FDRTtBQUFLLGFBQVMsRUFBQyxRQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFJLGFBQVMsRUFBQyxlQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixFQUVFO0FBQUssYUFBUyxFQUFDLGVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLDBCQUFmO0FBQTBDLFdBQU8sRUFBRUQsU0FBUyxDQUFDLEtBQUQsQ0FBNUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGLEVBSUU7QUFBSyxhQUFTLEVBQUMsbUJBQWY7QUFBbUMsV0FBTyxFQUFFQSxTQUFTLENBQUMsT0FBRCxDQUFyRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpGLEVBT0U7QUFBSyxhQUFTLEVBQUMsbUJBQWY7QUFBbUMsV0FBTyxFQUFFQSxTQUFTLENBQUMsTUFBRCxDQUFyRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVBGLEVBVUU7QUFBSyxhQUFTLEVBQUMsbUJBQWY7QUFBbUMsV0FBTyxFQUFFQSxTQUFTLENBQUMsT0FBRCxDQUFyRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBVkYsQ0FGRixFQWdCRTtBQUFLLGFBQVMsRUFBQyxnQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dDLE1BQU0sQ0FBQ0UsR0FBUCxDQUFXLFVBQUNDLEtBQUQsRUFBUUMsR0FBUixFQUFnQjtBQUMxQixXQUNFO0FBQUssZUFBUyxFQUFDLGFBQWY7QUFBNkIsU0FBRyxFQUFFQSxHQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0dELEtBQUssQ0FBQ0UsSUFEVCxDQURGO0FBS0QsR0FOQSxDQURILENBaEJGLENBREY7QUE0QkQ7O0dBL0J1QlQsTTs7S0FBQUEsTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuYTI5NTJkNmU2MTdhN2E3YWE4OGEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBhdHRyaWJ1dGVzIH0gZnJvbSBcIi4uL2NvbnRlbnQvaG9tZS5tZFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2tpbGxzKCkge1xyXG4gIGNvbnN0IFtmaWx0ZXIsIHNldEZpbHRlcl0gPSB1c2VTdGF0ZShcImFsbFwiKTtcclxuICBsZXQgeyBza2lsbHMgfSA9IGF0dHJpYnV0ZXM7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwic2tpbGxzXCI+XHJcbiAgICAgIDxoMSBjbGFzc05hbWU9XCJza2lsbHNfaGVhZGVyXCI+U2tpbGxzPC9oMT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJza2lsbHNfZmlsdGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJza2lsbHNfZmlsdGVyLXRhYiBhY3RpdmVcIiBvbkNsaWNrPXtzZXRGaWx0ZXIoXCJhbGxcIil9PlxyXG4gICAgICAgICAgQWxsXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJza2lsbHNfZmlsdGVyLXRhYlwiIG9uQ2xpY2s9e3NldEZpbHRlcihcImZyb250XCIpfT5cclxuICAgICAgICAgIEZyb250LUVuZFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2tpbGxzX2ZpbHRlci10YWJcIiBvbkNsaWNrPXtzZXRGaWx0ZXIoXCJiYWNrXCIpfT5cclxuICAgICAgICAgIEJhY2stRW5kXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJza2lsbHNfZmlsdGVyLXRhYlwiIG9uQ2xpY2s9e3NldEZpbHRlcihcIm90aGVyXCIpfT5cclxuICAgICAgICAgIE90aGVyXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNraWxsc19zZWN0aW9uXCI+XHJcbiAgICAgICAge3NraWxscy5tYXAoKHNraWxsLCBrZXkpID0+IHtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2tpbGxzX3BpbGxcIiBrZXk9e2tleX0+XHJcbiAgICAgICAgICAgICAge3NraWxsLm5hbWV9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=