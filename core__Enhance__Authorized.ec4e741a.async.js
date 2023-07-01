"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[798],{22058:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _umijs_max__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(41997);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(96974);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(14890);
/* harmony import */ var _withRoutePage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28790);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85893);






var Authorized = function Authorized(props) {
  var token = props.token,
    children = props.children,
    dispatch = props.dispatch,
    location = props.location;
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    // dispatch({ type: 'login/login', payload: { props } });
  }, [dispatch, props]);
  if (!token && (location === null || location === void 0 ? void 0 : location.pathname) !== '/login') {
    var path = "/login?redirect=".concat(location === null || location === void 0 ? void 0 : location.pathname).concat(location === null || location === void 0 ? void 0 : location.search);
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__/* .Navigate */ .Fg, {
      to: path
    });
  }

  // \u5982\u679C\u8DEF\u7531\u6CA1\u6709\u8DF3\u8F6C\u5230404
  // if (location?.pathname !== '/404') {
  //   return <Navigate to="/404" />;

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_umijs_max__WEBPACK_IMPORTED_MODULE_0__.Outlet, {});
};
/* harmony default export */ __webpack_exports__["default"] = ((0,redux__WEBPACK_IMPORTED_MODULE_5__/* .compose */ .qC)(_withRoutePage__WEBPACK_IMPORTED_MODULE_2__/* .withRoutePage */ .A, _umijs_max__WEBPACK_IMPORTED_MODULE_0__.withRouter, (0,_umijs_max__WEBPACK_IMPORTED_MODULE_0__.connect)(function (_ref) {
  var global = _ref.global,
    login = _ref.login;
  return {
    token: login.token,
    userInfo: global.userInfo
  };
}))(Authorized));

//# sourceURL=webpack:///./src/core/Enhance/Authorized.tsx?`)},28790:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval(`/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": function() { return /* binding */ withRoutePage; }
/* harmony export */ });
/* unused harmony export shouldRoutePageUpdate */
/* harmony import */ var _Users_eternallycyf_Documents_GitHub_case_Antd_CustomComponent_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(97857);
/* harmony import */ var _Users_eternallycyf_Documents_GitHub_case_Antd_CustomComponent_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_eternallycyf_Documents_GitHub_case_Antd_CustomComponent_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_eternallycyf_Documents_GitHub_case_Antd_CustomComponent_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13769);
/* harmony import */ var _Users_eternallycyf_Documents_GitHub_case_Antd_CustomComponent_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_eternallycyf_Documents_GitHub_case_Antd_CustomComponent_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(96486);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(67294);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85893);


var _excluded = ["children", "computedMatch", "history", "location", "match", "route", "staticContext"],
  _excluded2 = ["children", "computedMatch", "history", "location", "match", "route", "staticContext"];



var shouldRoutePageUpdate = function shouldRoutePageUpdate(nextProps, thisProps) {
  var nextChildren = nextProps.children,
    nextComputedMatch = nextProps.computedMatch,
    nextHistory = nextProps.history,
    nextLocation = nextProps.location,
    nextMatch = nextProps.match,
    nextRoute = nextProps.route,
    nextStaticContext = nextProps.staticContext,
    nextRest = _Users_eternallycyf_Documents_GitHub_case_Antd_CustomComponent_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1___default()(nextProps, _excluded);
  var thisChildren = thisProps.children,
    thisComputedMatch = thisProps.computedMatch,
    thisHistory = thisProps.history,
    thisLocation = thisProps.location,
    thisMatch = thisProps.match,
    thisRoute = thisProps.route,
    thisStaticContext = thisProps.staticContext,
    thisRest = _Users_eternallycyf_Documents_GitHub_case_Antd_CustomComponent_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1___default()(thisProps, _excluded2);
  if (!lodash__WEBPACK_IMPORTED_MODULE_2___default().isEqual(nextRest, thisRest)) return false;
  var _ref = nextLocation || {},
    nextPathname = _ref.pathname,
    nextSearch = _ref.search,
    nextState = _ref.state;
  var _ref2 = thisLocation || {},
    thisPathname = _ref2.pathname,
    thisSearch = _ref2.search,
    thisState = _ref2.state;
  var isLocationChange = nextPathname !== thisPathname || nextSearch !== thisSearch || !lodash__WEBPACK_IMPORTED_MODULE_2___default().isEqual(nextState, thisState);
  if (isLocationChange) return false;
  return true;
};
function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}
function withRoutePage(WrappedComponent) {
  var WithRoutePage = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.memo(function (props) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(WrappedComponent, _Users_eternallycyf_Documents_GitHub_case_Antd_CustomComponent_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0___default()({}, props));
  }, shouldRoutePageUpdate);
  WithRoutePage.displayName = "WithRoutePage(".concat(getDisplayName(WrappedComponent), ")");
  return WithRoutePage;
}

//# sourceURL=webpack:///./src/core/Enhance/withRoutePage.tsx?`)}}]);
