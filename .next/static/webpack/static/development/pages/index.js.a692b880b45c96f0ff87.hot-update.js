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
    className: "skills_filter-tab active",
    onClick: function onClick() {
      return setFilter("all");
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
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
      lineNumber: 18,
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
      lineNumber: 21,
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
      lineNumber: 24,
      columnNumber: 9
    }
  }, "Other")), __jsx("div", {
    className: "skills_section",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, skills.map(function (skill, key) {
    console.log(filter, skill.description, skill.name);
    var filteredClass = skill.description === filter ? " activePill" : "";
    var classname = filter === "all" ? "skills_pill" : "skills_pill" + filteredClass;
    return __jsx("div", {
      className: classname,
      key: key,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9Ta2lsbHMuanMiXSwibmFtZXMiOlsiU2tpbGxzIiwidXNlU3RhdGUiLCJmaWx0ZXIiLCJzZXRGaWx0ZXIiLCJza2lsbHMiLCJhdHRyaWJ1dGVzIiwibWFwIiwic2tpbGwiLCJrZXkiLCJjb25zb2xlIiwibG9nIiwiZGVzY3JpcHRpb24iLCJuYW1lIiwiZmlsdGVyZWRDbGFzcyIsImNsYXNzbmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRWUsU0FBU0EsTUFBVCxHQUFrQjtBQUFBOztBQUFBOztBQUFBLGtCQUNIQyxzREFBUSxDQUFDLEtBQUQsQ0FETDtBQUFBLE1BQ3hCQyxNQUR3QjtBQUFBLE1BQ2hCQyxTQURnQjs7QUFBQSxNQUV6QkMsTUFGeUIsR0FFZEMsMkRBRmMsQ0FFekJELE1BRnlCO0FBSS9CLFNBQ0U7QUFBSyxhQUFTLEVBQUMsUUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxhQUFTLEVBQUMsZUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsRUFFRTtBQUFLLGFBQVMsRUFBQyxlQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLGFBQVMsRUFBQywwQkFEWjtBQUVFLFdBQU8sRUFBRTtBQUFBLGFBQU1ELFNBQVMsQ0FBQyxLQUFELENBQWY7QUFBQSxLQUZYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERixFQU9FO0FBQUssYUFBUyxFQUFDLG1CQUFmO0FBQW1DLFdBQU8sRUFBRTtBQUFBLGFBQU1BLFNBQVMsQ0FBQyxPQUFELENBQWY7QUFBQSxLQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVBGLEVBVUU7QUFBSyxhQUFTLEVBQUMsbUJBQWY7QUFBbUMsV0FBTyxFQUFFO0FBQUEsYUFBTUEsU0FBUyxDQUFDLE1BQUQsQ0FBZjtBQUFBLEtBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBVkYsRUFhRTtBQUFLLGFBQVMsRUFBQyxtQkFBZjtBQUFtQyxXQUFPLEVBQUU7QUFBQSxhQUFNQSxTQUFTLENBQUMsT0FBRCxDQUFmO0FBQUEsS0FBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWJGLENBRkYsRUFtQkU7QUFBSyxhQUFTLEVBQUMsZ0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHQyxNQUFNLENBQUNFLEdBQVAsQ0FBVyxVQUFDQyxLQUFELEVBQVFDLEdBQVIsRUFBZ0I7QUFDMUJDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZUixNQUFaLEVBQW9CSyxLQUFLLENBQUNJLFdBQTFCLEVBQXVDSixLQUFLLENBQUNLLElBQTdDO0FBRUEsUUFBSUMsYUFBYSxHQUFHTixLQUFLLENBQUNJLFdBQU4sS0FBc0JULE1BQXRCLEdBQStCLGFBQS9CLEdBQStDLEVBQW5FO0FBQ0EsUUFBSVksU0FBUyxHQUNYWixNQUFNLEtBQUssS0FBWCxHQUFtQixhQUFuQixHQUFtQyxnQkFBZ0JXLGFBRHJEO0FBRUEsV0FDRTtBQUFLLGVBQVMsRUFBRUMsU0FBaEI7QUFBMkIsU0FBRyxFQUFFTixHQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0dELEtBQUssQ0FBQ0ssSUFEVCxDQURGO0FBS0QsR0FYQSxDQURILENBbkJGLENBREY7QUFvQ0Q7O0dBeEN1QlosTTs7S0FBQUEsTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuYTY5MmI4ODBiNDVjOTZmMGZmODcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBhdHRyaWJ1dGVzIH0gZnJvbSBcIi4uL2NvbnRlbnQvaG9tZS5tZFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2tpbGxzKCkge1xyXG4gIGNvbnN0IFtmaWx0ZXIsIHNldEZpbHRlcl0gPSB1c2VTdGF0ZShcImFsbFwiKTtcclxuICBsZXQgeyBza2lsbHMgfSA9IGF0dHJpYnV0ZXM7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNraWxsc1wiPlxyXG4gICAgICA8aDEgY2xhc3NOYW1lPVwic2tpbGxzX2hlYWRlclwiPlNraWxsczwvaDE+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2tpbGxzX2ZpbHRlclwiPlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT1cInNraWxsc19maWx0ZXItdGFiIGFjdGl2ZVwiXHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRGaWx0ZXIoXCJhbGxcIil9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgQWxsXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJza2lsbHNfZmlsdGVyLXRhYlwiIG9uQ2xpY2s9eygpID0+IHNldEZpbHRlcihcImZyb250XCIpfT5cclxuICAgICAgICAgIEZyb250LUVuZFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2tpbGxzX2ZpbHRlci10YWJcIiBvbkNsaWNrPXsoKSA9PiBzZXRGaWx0ZXIoXCJiYWNrXCIpfT5cclxuICAgICAgICAgIEJhY2stRW5kXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJza2lsbHNfZmlsdGVyLXRhYlwiIG9uQ2xpY2s9eygpID0+IHNldEZpbHRlcihcIm90aGVyXCIpfT5cclxuICAgICAgICAgIE90aGVyXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNraWxsc19zZWN0aW9uXCI+XHJcbiAgICAgICAge3NraWxscy5tYXAoKHNraWxsLCBrZXkpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGZpbHRlciwgc2tpbGwuZGVzY3JpcHRpb24sIHNraWxsLm5hbWUpO1xyXG5cclxuICAgICAgICAgIGxldCBmaWx0ZXJlZENsYXNzID0gc2tpbGwuZGVzY3JpcHRpb24gPT09IGZpbHRlciA/IFwiIGFjdGl2ZVBpbGxcIiA6IFwiXCI7XHJcbiAgICAgICAgICBsZXQgY2xhc3NuYW1lID1cclxuICAgICAgICAgICAgZmlsdGVyID09PSBcImFsbFwiID8gXCJza2lsbHNfcGlsbFwiIDogXCJza2lsbHNfcGlsbFwiICsgZmlsdGVyZWRDbGFzcztcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc25hbWV9IGtleT17a2V5fT5cclxuICAgICAgICAgICAgICB7c2tpbGwubmFtZX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==