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
  console.log("filter: ", filter);
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
    return __jsx("div", {
      className: "skills_pill",
      key: key,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9Ta2lsbHMuanMiXSwibmFtZXMiOlsiU2tpbGxzIiwidXNlU3RhdGUiLCJmaWx0ZXIiLCJzZXRGaWx0ZXIiLCJza2lsbHMiLCJhdHRyaWJ1dGVzIiwiY29uc29sZSIsImxvZyIsIm1hcCIsInNraWxsIiwia2V5IiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRWUsU0FBU0EsTUFBVCxHQUFrQjtBQUFBOztBQUFBOztBQUFBLGtCQUNIQyxzREFBUSxDQUFDLEtBQUQsQ0FETDtBQUFBLE1BQ3hCQyxNQUR3QjtBQUFBLE1BQ2hCQyxTQURnQjs7QUFBQSxNQUV6QkMsTUFGeUIsR0FFZEMsMkRBRmMsQ0FFekJELE1BRnlCO0FBRy9CRSxTQUFPLENBQUNDLEdBQVIsQ0FBWSxVQUFaLEVBQXdCTCxNQUF4QjtBQUNBLFNBQ0U7QUFBSyxhQUFTLEVBQUMsUUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxhQUFTLEVBQUMsZUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsRUFFRTtBQUFLLGFBQVMsRUFBQyxlQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLGFBQVMsRUFBQywwQkFEWjtBQUVFLFdBQU8sRUFBRTtBQUFBLGFBQU1DLFNBQVMsQ0FBQyxLQUFELENBQWY7QUFBQSxLQUZYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERixFQU9FO0FBQUssYUFBUyxFQUFDLG1CQUFmO0FBQW1DLFdBQU8sRUFBRTtBQUFBLGFBQU1BLFNBQVMsQ0FBQyxPQUFELENBQWY7QUFBQSxLQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVBGLEVBVUU7QUFBSyxhQUFTLEVBQUMsbUJBQWY7QUFBbUMsV0FBTyxFQUFFO0FBQUEsYUFBTUEsU0FBUyxDQUFDLE1BQUQsQ0FBZjtBQUFBLEtBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBVkYsRUFhRTtBQUFLLGFBQVMsRUFBQyxtQkFBZjtBQUFtQyxXQUFPLEVBQUU7QUFBQSxhQUFNQSxTQUFTLENBQUMsT0FBRCxDQUFmO0FBQUEsS0FBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWJGLENBRkYsRUFtQkU7QUFBSyxhQUFTLEVBQUMsZ0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHQyxNQUFNLENBQUNJLEdBQVAsQ0FBVyxVQUFDQyxLQUFELEVBQVFDLEdBQVIsRUFBZ0I7QUFDMUIsV0FDRTtBQUFLLGVBQVMsRUFBQyxhQUFmO0FBQTZCLFNBQUcsRUFBRUEsR0FBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNHRCxLQUFLLENBQUNFLElBRFQsQ0FERjtBQUtELEdBTkEsQ0FESCxDQW5CRixDQURGO0FBK0JEOztHQW5DdUJYLE07O0tBQUFBLE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLmJiYzgzYTAwZDFjMmNlYmY2NWU0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgYXR0cmlidXRlcyB9IGZyb20gXCIuLi9jb250ZW50L2hvbWUubWRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNraWxscygpIHtcclxuICBjb25zdCBbZmlsdGVyLCBzZXRGaWx0ZXJdID0gdXNlU3RhdGUoXCJhbGxcIik7XHJcbiAgbGV0IHsgc2tpbGxzIH0gPSBhdHRyaWJ1dGVzO1xyXG4gIGNvbnNvbGUubG9nKFwiZmlsdGVyOiBcIiwgZmlsdGVyKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJza2lsbHNcIj5cclxuICAgICAgPGgxIGNsYXNzTmFtZT1cInNraWxsc19oZWFkZXJcIj5Ta2lsbHM8L2gxPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNraWxsc19maWx0ZXJcIj5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJza2lsbHNfZmlsdGVyLXRhYiBhY3RpdmVcIlxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0RmlsdGVyKFwiYWxsXCIpfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIEFsbFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2tpbGxzX2ZpbHRlci10YWJcIiBvbkNsaWNrPXsoKSA9PiBzZXRGaWx0ZXIoXCJmcm9udFwiKX0+XHJcbiAgICAgICAgICBGcm9udC1FbmRcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNraWxsc19maWx0ZXItdGFiXCIgb25DbGljaz17KCkgPT4gc2V0RmlsdGVyKFwiYmFja1wiKX0+XHJcbiAgICAgICAgICBCYWNrLUVuZFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2tpbGxzX2ZpbHRlci10YWJcIiBvbkNsaWNrPXsoKSA9PiBzZXRGaWx0ZXIoXCJvdGhlclwiKX0+XHJcbiAgICAgICAgICBPdGhlclxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJza2lsbHNfc2VjdGlvblwiPlxyXG4gICAgICAgIHtza2lsbHMubWFwKChza2lsbCwga2V5KSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNraWxsc19waWxsXCIga2V5PXtrZXl9PlxyXG4gICAgICAgICAgICAgIHtza2lsbC5uYW1lfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9