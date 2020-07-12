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
    className: filter === "all" ? "skills_filter-tab active" : "skills_filter-tab",
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
    className: filter === "front" ? "skills_filter-tab active" : "skills_filter-tab",
    onClick: function onClick() {
      return setFilter("front");
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, "Front-End"), __jsx("div", {
    className: filter === "back" ? "skills_filter-tab active" : "skills_filter-tab",
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
    className: filter === "other" ? "skills_filter-tab active" : "skills_filter-tab",
    onClick: function onClick() {
      return setFilter("other");
    },
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
        lineNumber: 57,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9Ta2lsbHMuanMiXSwibmFtZXMiOlsiU2tpbGxzIiwidXNlU3RhdGUiLCJmaWx0ZXIiLCJzZXRGaWx0ZXIiLCJza2lsbHMiLCJhdHRyaWJ1dGVzIiwibWFwIiwic2tpbGwiLCJrZXkiLCJjb25zb2xlIiwibG9nIiwiZGVzY3JpcHRpb24iLCJuYW1lIiwiZmlsdGVyZWRDbGFzcyIsImNsYXNzbmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRWUsU0FBU0EsTUFBVCxHQUFrQjtBQUFBOztBQUFBOztBQUFBLGtCQUNIQyxzREFBUSxDQUFDLEtBQUQsQ0FETDtBQUFBLE1BQ3hCQyxNQUR3QjtBQUFBLE1BQ2hCQyxTQURnQjs7QUFBQSxNQUV6QkMsTUFGeUIsR0FFZEMsMkRBRmMsQ0FFekJELE1BRnlCO0FBSS9CLFNBQ0U7QUFBSyxhQUFTLEVBQUMsUUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxhQUFTLEVBQUMsZUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsRUFFRTtBQUFLLGFBQVMsRUFBQyxlQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLGFBQVMsRUFDUEYsTUFBTSxLQUFLLEtBQVgsR0FBbUIsMEJBQW5CLEdBQWdELG1CQUZwRDtBQUlFLFdBQU8sRUFBRTtBQUFBLGFBQU1DLFNBQVMsQ0FBQyxLQUFELENBQWY7QUFBQSxLQUpYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERixFQVNFO0FBQ0UsYUFBUyxFQUNQRCxNQUFNLEtBQUssT0FBWCxHQUNJLDBCQURKLEdBRUksbUJBSlI7QUFNRSxXQUFPLEVBQUU7QUFBQSxhQUFNQyxTQUFTLENBQUMsT0FBRCxDQUFmO0FBQUEsS0FOWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVRGLEVBbUJFO0FBQ0UsYUFBUyxFQUNQRCxNQUFNLEtBQUssTUFBWCxHQUFvQiwwQkFBcEIsR0FBaUQsbUJBRnJEO0FBSUUsV0FBTyxFQUFFO0FBQUEsYUFBTUMsU0FBUyxDQUFDLE1BQUQsQ0FBZjtBQUFBLEtBSlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFuQkYsRUEyQkU7QUFDRSxhQUFTLEVBQ1BELE1BQU0sS0FBSyxPQUFYLEdBQ0ksMEJBREosR0FFSSxtQkFKUjtBQU1FLFdBQU8sRUFBRTtBQUFBLGFBQU1DLFNBQVMsQ0FBQyxPQUFELENBQWY7QUFBQSxLQU5YO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUEzQkYsQ0FGRixFQXdDRTtBQUFLLGFBQVMsRUFBQyxnQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dDLE1BQU0sQ0FBQ0UsR0FBUCxDQUFXLFVBQUNDLEtBQUQsRUFBUUMsR0FBUixFQUFnQjtBQUMxQkMsV0FBTyxDQUFDQyxHQUFSLENBQVlSLE1BQVosRUFBb0JLLEtBQUssQ0FBQ0ksV0FBMUIsRUFBdUNKLEtBQUssQ0FBQ0ssSUFBN0M7QUFFQSxRQUFJQyxhQUFhLEdBQUdOLEtBQUssQ0FBQ0ksV0FBTixLQUFzQlQsTUFBdEIsR0FBK0IsYUFBL0IsR0FBK0MsRUFBbkU7QUFDQSxRQUFJWSxTQUFTLEdBQ1haLE1BQU0sS0FBSyxLQUFYLEdBQW1CLGFBQW5CLEdBQW1DLGdCQUFnQlcsYUFEckQ7QUFFQSxXQUNFO0FBQUssZUFBUyxFQUFFQyxTQUFoQjtBQUEyQixTQUFHLEVBQUVOLEdBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDR0QsS0FBSyxDQUFDSyxJQURULENBREY7QUFLRCxHQVhBLENBREgsQ0F4Q0YsQ0FERjtBQXlERDs7R0E3RHVCWixNOztLQUFBQSxNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy40MTg4NGNlNWViODczZDllNmY5NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGF0dHJpYnV0ZXMgfSBmcm9tIFwiLi4vY29udGVudC9ob21lLm1kXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTa2lsbHMoKSB7XHJcbiAgY29uc3QgW2ZpbHRlciwgc2V0RmlsdGVyXSA9IHVzZVN0YXRlKFwiYWxsXCIpO1xyXG4gIGxldCB7IHNraWxscyB9ID0gYXR0cmlidXRlcztcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwic2tpbGxzXCI+XHJcbiAgICAgIDxoMSBjbGFzc05hbWU9XCJza2lsbHNfaGVhZGVyXCI+U2tpbGxzPC9oMT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJza2lsbHNfZmlsdGVyXCI+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgZmlsdGVyID09PSBcImFsbFwiID8gXCJza2lsbHNfZmlsdGVyLXRhYiBhY3RpdmVcIiA6IFwic2tpbGxzX2ZpbHRlci10YWJcIlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0RmlsdGVyKFwiYWxsXCIpfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIEFsbFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgIGZpbHRlciA9PT0gXCJmcm9udFwiXHJcbiAgICAgICAgICAgICAgPyBcInNraWxsc19maWx0ZXItdGFiIGFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgOiBcInNraWxsc19maWx0ZXItdGFiXCJcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEZpbHRlcihcImZyb250XCIpfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIEZyb250LUVuZFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgIGZpbHRlciA9PT0gXCJiYWNrXCIgPyBcInNraWxsc19maWx0ZXItdGFiIGFjdGl2ZVwiIDogXCJza2lsbHNfZmlsdGVyLXRhYlwiXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRGaWx0ZXIoXCJiYWNrXCIpfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIEJhY2stRW5kXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgZmlsdGVyID09PSBcIm90aGVyXCJcclxuICAgICAgICAgICAgICA/IFwic2tpbGxzX2ZpbHRlci10YWIgYWN0aXZlXCJcclxuICAgICAgICAgICAgICA6IFwic2tpbGxzX2ZpbHRlci10YWJcIlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0RmlsdGVyKFwib3RoZXJcIil9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgT3RoZXJcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2tpbGxzX3NlY3Rpb25cIj5cclxuICAgICAgICB7c2tpbGxzLm1hcCgoc2tpbGwsIGtleSkgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZmlsdGVyLCBza2lsbC5kZXNjcmlwdGlvbiwgc2tpbGwubmFtZSk7XHJcblxyXG4gICAgICAgICAgbGV0IGZpbHRlcmVkQ2xhc3MgPSBza2lsbC5kZXNjcmlwdGlvbiA9PT0gZmlsdGVyID8gXCIgYWN0aXZlUGlsbFwiIDogXCJcIjtcclxuICAgICAgICAgIGxldCBjbGFzc25hbWUgPVxyXG4gICAgICAgICAgICBmaWx0ZXIgPT09IFwiYWxsXCIgPyBcInNraWxsc19waWxsXCIgOiBcInNraWxsc19waWxsXCIgKyBmaWx0ZXJlZENsYXNzO1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzbmFtZX0ga2V5PXtrZXl9PlxyXG4gICAgICAgICAgICAgIHtza2lsbC5uYW1lfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9