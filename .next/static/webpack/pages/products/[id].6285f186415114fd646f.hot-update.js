webpackHotUpdate_N_E("pages/products/[id]",{

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Layout; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_thetn_OneDrive_Desktop_ecommpj_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_thetn_OneDrive_Desktop_ecommpj_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_thetn_OneDrive_Desktop_ecommpj_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_thetn_OneDrive_Desktop_ecommpj_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/AppBar */ "./node_modules/@material-ui/core/esm/AppBar/index.js");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "./node_modules/@material-ui/core/esm/CssBaseline/index.js");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "./node_modules/@material-ui/core/esm/Toolbar/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Link */ "./node_modules/@material-ui/core/esm/Link/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/esm/Box/index.js");
/* harmony import */ var _utils_styles__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../utils/styles */ "./utils/styles.js");
/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../utils/config */ "./utils/config.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _Store__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Store */ "./components/Store.js");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../utils/constants */ "./utils/constants.js");
/* harmony import */ var _utils_commerce__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../utils/commerce */ "./utils/commerce.js");




var _jsxFileName = "C:\\Users\\thetn\\OneDrive\\Desktop\\ecommpj\\components\\Layout.js",
    _s = $RefreshSig$();

/* next.js head */


















function Layout(_ref) {
  _s();

  var children = _ref.children,
      commercePublicKey = _ref.commercePublicKey,
      _ref$title = _ref.title,
      title = _ref$title === void 0 ? 'SHANMALL' : _ref$title;
  var classes = Object(_utils_styles__WEBPACK_IMPORTED_MODULE_14__["useStyles"])();

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_4__["useContext"])(_Store__WEBPACK_IMPORTED_MODULE_17__["Store"]),
      state = _useContext.state,
      dispatch = _useContext.dispatch;

  var cart = state.cart;
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    var fetchCart = /*#__PURE__*/function () {
      var _ref2 = Object(C_Users_thetn_OneDrive_Desktop_ecommpj_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_thetn_OneDrive_Desktop_ecommpj_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
        var commerce, cartData;
        return C_Users_thetn_OneDrive_Desktop_ecommpj_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                commerce = Object(_utils_commerce__WEBPACK_IMPORTED_MODULE_19__["default"])(commercePublicKey);
                dispatch({
                  type: _utils_constants__WEBPACK_IMPORTED_MODULE_18__["CART_RETRIEVE_REQUEST"]
                });
                _context.next = 4;
                return commerce.cart.retrieve();

              case 4:
                cartData = _context.sent;
                dispatch({
                  type: _utils_constants__WEBPACK_IMPORTED_MODULE_18__["CART_RETRIEVE_SUCCESS"],
                  payload: cartData
                });

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function fetchCart() {
        return _ref2.apply(this, arguments);
      };
    }();

    fetchCart();
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        charSet: "utf-8"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "".concat(title, " - ").concat(_utils_config__WEBPACK_IMPORTED_MODULE_15__["siteName"])
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1, shrink-to-fit=no"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_11__["ThemeProvider"], {
      theme: _utils_styles__WEBPACK_IMPORTED_MODULE_14__["theme"],
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_5__["default"], {
        position: "static",
        color: "default",
        elevation: 0,
        className: classes.appBar,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_7__["default"], {
          className: classes.toolbar,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
            href: "/",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_9__["default"], {
              variant: "h6",
              color: "inherit",
              noWrap: true,
              href: "/",
              className: classes.toolbarTitle,
              children: _utils_config__WEBPACK_IMPORTED_MODULE_15__["siteName"]
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 51,
              columnNumber: 8
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 7
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("nav", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
              href: "/cart",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_9__["default"], {
                variant: "button",
                color: "textPrimary",
                href: "/cart",
                className: classes.link,
                children: cart.loading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__["CircularProgress"], {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 60,
                  columnNumber: 11
                }, this) : cart.data.total_items > 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__["Badge"], {
                  badgeContent: cart.data.total_items,
                  color: "primary",
                  children: "Cart"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 62,
                  columnNumber: 11
                }, this) : 'Cart'
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 58,
                columnNumber: 9
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 8
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 6
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_12__["default"], {
        component: "main",
        className: classes.main,
        children: children
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_12__["default"], {
        maxWidth: "md",
        component: "footer",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_13__["default"], {
          mt: 5,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
            variant: "body2",
            color: "textSecondary",
            align: "center",
            children: ['© ', _utils_config__WEBPACK_IMPORTED_MODULE_15__["siteName"], " 2021", '.']
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 7
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 6
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 3
  }, this);
}

_s(Layout, "4ykUCZ+xprbfC/CLqNFyN7oxwKA=", false, function () {
  return [_utils_styles__WEBPACK_IMPORTED_MODULE_14__["useStyles"]];
});

_c = Layout;

var _c;

$RefreshReg$(_c, "Layout");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
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
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXlvdXQuanMiXSwibmFtZXMiOlsiTGF5b3V0IiwiY2hpbGRyZW4iLCJjb21tZXJjZVB1YmxpY0tleSIsInRpdGxlIiwiY2xhc3NlcyIsInVzZVN0eWxlcyIsInVzZUNvbnRleHQiLCJTdG9yZSIsInN0YXRlIiwiZGlzcGF0Y2giLCJjYXJ0IiwidXNlRWZmZWN0IiwiZmV0Y2hDYXJ0IiwiY29tbWVyY2UiLCJnZXRDb21tZXJjZSIsInR5cGUiLCJDQVJUX1JFVFJJRVZFX1JFUVVFU1QiLCJyZXRyaWV2ZSIsImNhcnREYXRhIiwiQ0FSVF9SRVRSSUVWRV9TVUNDRVNTIiwicGF5bG9hZCIsInNpdGVOYW1lIiwidGhlbWUiLCJhcHBCYXIiLCJ0b29sYmFyIiwidG9vbGJhclRpdGxlIiwibGluayIsImxvYWRpbmciLCJkYXRhIiwidG90YWxfaXRlbXMiLCJtYWluIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsTUFBVCxPQUFxRTtBQUFBOztBQUFBLE1BQW5EQyxRQUFtRCxRQUFuREEsUUFBbUQ7QUFBQSxNQUF6Q0MsaUJBQXlDLFFBQXpDQSxpQkFBeUM7QUFBQSx3QkFBdEJDLEtBQXNCO0FBQUEsTUFBdEJBLEtBQXNCLDJCQUFkLFVBQWM7QUFDbkYsTUFBTUMsT0FBTyxHQUFHQyxnRUFBUyxFQUF6Qjs7QUFEbUYsb0JBR3ZEQyx3REFBVSxDQUFDQyw2Q0FBRCxDQUg2QztBQUFBLE1BRzNFQyxLQUgyRSxlQUczRUEsS0FIMkU7QUFBQSxNQUdwRUMsUUFIb0UsZUFHcEVBLFFBSG9FOztBQUFBLE1BSTNFQyxJQUoyRSxHQUlsRUYsS0FKa0UsQ0FJM0VFLElBSjJFO0FB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QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVBEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FIRCxlQTZCQyxxRUFBQyxvRUFBRDtBQUFXLGlCQUFTLEVBQUMsTUFBckI7QUFBNEIsaUJBQVMsRUFBRXpCLE9BQU8sQ0FBQzBCLElBQS9DO0FBQUEsa0JBQ0U3QjtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0E3QkQsZUFpQ0MscUVBQUMsb0VBQUQ7QUFBVyxnQkFBUSxFQUFDLElBQXBCO0FBQXlCLGlCQUFTLEVBQUMsUUFBbkM7QUFBQSwrQkFDQyxxRUFBQyw4REFBRDtBQUFLLFlBQUUsRUFBRSxDQUFUO0FBQUEsaUNBQ0MscUVBQUMsb0VBQUQ7QUFBWSxtQkFBTyxFQUFDLE9BQXBCO0FBQTRCLGlCQUFLLEVBQUMsZUFBbEM7QUFBa0QsaUJBQUssRUFBQyxRQUF4RDtBQUFBLHVCQUNFLElBREYsRUFFRW9CLHVEQUZGLFdBR0UsR0FIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWpDRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFQRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERDtBQXNEQTs7R0F0RXVCckIsTTtVQUNQSyx3RDs7O0tBRE9MLE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZHVjdHMvW2lkXS42Mjg1ZjE4NjQxNTExNGZkNjQ2Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogbmV4dC5qcyBoZWFkICovXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBBcHBCYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQXBwQmFyJztcbmltcG9ydCBDc3NCYXNlbGluZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Dc3NCYXNlbGluZSc7XG5pbXBvcnQgVG9vbGJhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Ub29sYmFyJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xuaW1wb3J0IExpbmsgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGluayc7XG5pbXBvcnQgTmV4dExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Db250YWluZXInO1xuaW1wb3J0IEJveCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Cb3gnO1xuaW1wb3J0IHsgdGhlbWUgfSBmcm9tICcuLi91dGlscy9zdHlsZXMnO1xuaW1wb3J0IHsgc2l0ZU5hbWUgfSBmcm9tICcuLi91dGlscy9jb25maWcnO1xuaW1wb3J0IHsgQmFkZ2UsIENpcmN1bGFyUHJvZ3Jlc3MgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XG5pbXBvcnQgeyB1c2VTdHlsZXMgfSBmcm9tICcuLi91dGlscy9zdHlsZXMnO1xuaW1wb3J0IHsgU3RvcmUgfSBmcm9tICcuL1N0b3JlJztcbmltcG9ydCB7IENBUlRfUkVUUklFVkVfUkVRVUVTVCwgQ0FSVF9SRVRSSUVWRV9TVUNDRVNTIH0gZnJvbSAnLi4vdXRpbHMvY29uc3RhbnRzJztcbmltcG9ydCBnZXRDb21tZXJjZSBmcm9tICcuLi91dGlscy9jb21tZXJjZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExheW91dCh7IGNoaWxkcmVuLCBjb21tZXJjZVB1YmxpY0tleSwgdGl0bGUgPSAnU0hBTk1BTEwnIH0pIHtcblx0Y29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuXG5cdGNvbnN0IHsgc3RhdGUsIGRpc3BhdGNoIH0gPSB1c2VDb250ZXh0KFN0b3JlKTtcblx0Y29uc3QgeyBjYXJ0IH0gPSBzdGF0ZTtcblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGNvbnN0IGZldGNoQ2FydCA9IGFzeW5jICgpID0+IHtcblx0XHRcdGNvbnN0IGNvbW1lcmNlID0gZ2V0Q29tbWVyY2UoY29tbWVyY2VQdWJsaWNLZXkpO1xuXHRcdFx0ZGlzcGF0Y2goeyB0eXBlOiBDQVJUX1JFVFJJRVZFX1JFUVVFU1QgfSk7XG5cdFx0XHRjb25zdCBjYXJ0RGF0YSA9IGF3YWl0IGNvbW1lcmNlLmNhcnQucmV0cmlldmUoKTtcblx0XHRcdGRpc3BhdGNoKHsgdHlwZTogQ0FSVF9SRVRSSUVWRV9TVUNDRVNTLCBwYXlsb2FkOiBjYXJ0RGF0YSB9KTtcblx0XHR9O1xuXHRcdGZldGNoQ2FydCgpO1xuXHR9LCBbXSk7XG5cblx0cmV0dXJuIChcblx0XHQ8UmVhY3QuRnJhZ21lbnQ+XG5cdFx0XHQ8SGVhZD5cblx0XHRcdFx0PG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cblx0XHRcdFx0PHRpdGxlPntgJHt0aXRsZX0gLSAke3NpdGVOYW1lfWB9PC90aXRsZT5cblx0XHRcdFx0PGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuXHRcdFx0XHQ8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEsIHNocmluay10by1maXQ9bm9cIiAvPlxuXHRcdFx0PC9IZWFkPlxuXHRcdFx0PFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cblx0XHRcdFx0PENzc0Jhc2VsaW5lIC8+XG5cblx0XHRcdFx0PEFwcEJhciBwb3NpdGlvbj1cInN0YXRpY1wiIGNvbG9yPVwiZGVmYXVsdFwiIGVsZXZhdGlvbj17MH0gY2xhc3NOYW1lPXtjbGFzc2VzLmFwcEJhcn0+XG5cdFx0XHRcdFx0PFRvb2xiYXIgY2xhc3NOYW1lPXtjbGFzc2VzLnRvb2xiYXJ9PlxuXHRcdFx0XHRcdFx0PE5leHRMaW5rIGhyZWY9XCIvXCI+XG5cdFx0XHRcdFx0XHRcdDxMaW5rIHZhcmlhbnQ9XCJoNlwiIGNvbG9yPVwiaW5oZXJpdFwiIG5vV3JhcCBocmVmPVwiL1wiIGNsYXNzTmFtZT17Y2xhc3Nlcy50b29sYmFyVGl0bGV9PlxuXHRcdFx0XHRcdFx0XHRcdHtzaXRlTmFtZX1cblx0XHRcdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdFx0PC9OZXh0TGluaz5cblxuXHRcdFx0XHRcdFx0PG5hdj5cblx0XHRcdFx0XHRcdFx0PE5leHRMaW5rIGhyZWY9XCIvY2FydFwiPlxuXHRcdFx0XHRcdFx0XHRcdDxMaW5rIHZhcmlhbnQ9XCJidXR0b25cIiBjb2xvcj1cInRleHRQcmltYXJ5XCIgaHJlZj1cIi9jYXJ0XCIgY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmt9PlxuXHRcdFx0XHRcdFx0XHRcdFx0e2NhcnQubG9hZGluZyA/IChcblx0XHRcdFx0XHRcdFx0XHRcdFx0PENpcmN1bGFyUHJvZ3Jlc3MgLz5cblx0XHRcdFx0XHRcdFx0XHRcdCkgOiBjYXJ0LmRhdGEudG90YWxfaXRlbXMgPiAwID8gKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8QmFkZ2UgYmFkZ2VDb250ZW50PXtjYXJ0LmRhdGEudG90YWxfaXRlbXN9IGNvbG9yPVwicHJpbWFyeVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdENhcnRcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9CYWRnZT5cblx0XHRcdFx0XHRcdFx0XHRcdCkgOiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCdDYXJ0J1xuXHRcdFx0XHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdFx0XHRcdDwvTmV4dExpbms+XG5cdFx0XHRcdFx0XHQ8L25hdj5cblx0XHRcdFx0XHQ8L1Rvb2xiYXI+XG5cdFx0XHRcdDwvQXBwQmFyPlxuXHRcdFx0XHR7LyogSGVybyB1bml0ICovfVxuXHRcdFx0XHQ8Q29udGFpbmVyIGNvbXBvbmVudD1cIm1haW5cIiBjbGFzc05hbWU9e2NsYXNzZXMubWFpbn0+XG5cdFx0XHRcdFx0e2NoaWxkcmVufVxuXHRcdFx0XHQ8L0NvbnRhaW5lcj5cblx0XHRcdFx0ey8qIEVuZCBoZXJvIHVuaXQgKi99XG5cdFx0XHRcdDxDb250YWluZXIgbWF4V2lkdGg9XCJtZFwiIGNvbXBvbmVudD1cImZvb3RlclwiPlxuXHRcdFx0XHRcdDxCb3ggbXQ9ezV9PlxuXHRcdFx0XHRcdFx0PFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCIgYWxpZ249XCJjZW50ZXJcIj5cblx0XHRcdFx0XHRcdFx0eyfCqSAnfVxuXHRcdFx0XHRcdFx0XHR7c2l0ZU5hbWV9IDIwMjFcblx0XHRcdFx0XHRcdFx0eycuJ31cblx0XHRcdFx0XHRcdDwvVHlwb2dyYXBoeT5cblx0XHRcdFx0XHQ8L0JveD5cblx0XHRcdFx0PC9Db250YWluZXI+XG5cdFx0XHRcdHsvKiBFbmQgZm9vdGVyICovfVxuXHRcdFx0PC9UaGVtZVByb3ZpZGVyPlxuXHRcdDwvUmVhY3QuRnJhZ21lbnQ+XG5cdCk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9