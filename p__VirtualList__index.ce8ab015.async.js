"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[687],{12690:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval(`
// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ CommonCard_Page; }
});

// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/objectSpread2.js
var objectSpread2 = __webpack_require__(97857);
var objectSpread2_default = /*#__PURE__*/__webpack_require__.n(objectSpread2);
// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(13769);
var objectWithoutProperties_default = /*#__PURE__*/__webpack_require__.n(objectWithoutProperties);
// EXTERNAL MODULE: ./node_modules/antd/es/spin/index.js + 2 modules
var spin = __webpack_require__(46572);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
;// CONCATENATED MODULE: ./src/components/CommonCard/Page/index.less?modules
// extracted by mini-css-extract-plugin
/* harmony default export */ var Pagemodules = ({"container":"container____ubNY","content":"content___W1c7E","loading":"loading___oQ9_b"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./src/components/CommonCard/Page/index.tsx


var _excluded = ["loading", "className", "children", "title"];




var Page = function Page(props) {
  var loading = props.loading,
    className = props.className,
    children = props.children,
    title = props.title,
    restProps = objectWithoutProperties_default()(props, _excluded);
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", objectSpread2_default()(objectSpread2_default()({
    id: "container",
    className: "".concat(Pagemodules.container, " ").concat(className)
  }, restProps), {}, {
    children: loading ? /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: Pagemodules.loading,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(spin/* default */.Z, {
        tip: "\\u52A0\\u8F7D\\u4E2D..."
      })
    }) : /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: Pagemodules.content,
      children: children
    })
  }));
};
Page.defaultProps = {
  loading: false
};
/* harmony default export */ var CommonCard_Page = (/*#__PURE__*/react.memo(Page));

//# sourceURL=webpack:///./src/components/CommonCard/Page/index.tsx_+_1_modules?`)},57638:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval(`// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ VirtualList_VirtualList; }
});

// EXTERNAL MODULE: ./src/components/Widget/VirtualList/index.tsx + 2 modules
var VirtualList = __webpack_require__(1830);
// EXTERNAL MODULE: ./node_modules/antd/es/row/index.js
var row = __webpack_require__(71230);
// EXTERNAL MODULE: ./node_modules/antd/es/col/index.js
var col = __webpack_require__(15746);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./src/components/Widget/VirtualList/demo.tsx





var App = function App() {
  var Arr = Array.from({
    length: 1000
  }, function (_, i) {
    return i;
  });
  var renderItem = function renderItem(_ref) {
    var style = _ref.style,
      index = _ref.index;
    var isOdd = index % 2 === 1;
    var IIII = isOdd ? Arr[index + 1] : Arr[index];
    return /*#__PURE__*/(0,jsx_runtime.jsxs)(row/* default */.Z, {
      style: style,
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(col/* default */.Z, {
        span: 12,
        children: [" ", Arr[index]]
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
        span: 12,
        children: Arr[index + 1]
      })]
    }, index);
  };
  return /*#__PURE__*/(0,jsx_runtime.jsx)(VirtualList/* default */.Z, {
    height: 400,
    itemCount: 1000,
    renderItem: renderItem,
    itemSize: 50
  });
};
/* harmony default export */ var demo = (App);
// EXTERNAL MODULE: ./src/components/CommonCard/Page/index.tsx + 1 modules
var Page = __webpack_require__(12690);
;// CONCATENATED MODULE: ./src/pages/VirtualList/index.tsx




function VirtualList_VirtualList() {
  return /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(Page/* default */.Z, {
      children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        style: {
          height: 500
        },
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(demo, {})
      })
    })
  });
}

//# sourceURL=webpack:///./src/pages/VirtualList/index.tsx_+_1_modules?`)},98082:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval(`/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _styleChecker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31808);


/* harmony default export */ __webpack_exports__["Z"] = (() => {
  const [flexible, setFlexible] = react__WEBPACK_IMPORTED_MODULE_0__.useState(false);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    setFlexible((0,_styleChecker__WEBPACK_IMPORTED_MODULE_1__/* .detectFlexGapSupported */ .fk)());
  }, []);
  return flexible;
});

//# sourceURL=webpack:///./node_modules/antd/es/_util/hooks/useFlexGapSupport.js?`)},74443:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval(`/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ useResponsiveObserver; },
/* harmony export */   "c": function() { return /* binding */ responsiveArray; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _theme_internal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64049);


const responsiveArray = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'];
const getResponsiveMap = token => ({
  xs: \`(max-width: \${token.screenXSMax}px)\`,
  sm: \`(min-width: \${token.screenSM}px)\`,
  md: \`(min-width: \${token.screenMD}px)\`,
  lg: \`(min-width: \${token.screenLG}px)\`,
  xl: \`(min-width: \${token.screenXL}px)\`,
  xxl: \`(min-width: \${token.screenXXL}px)\`
});
/**
 * Ensures that the breakpoints token are valid, in good order
 * For each breakpoint : screenMin <= screen <= screenMax and screenMax <= nextScreenMin
 */
const validateBreakpoints = token => {
  const indexableToken = token;
  const revBreakpoints = [].concat(responsiveArray).reverse();
  revBreakpoints.forEach((breakpoint, i) => {
    const breakpointUpper = breakpoint.toUpperCase();
    const screenMin = \`screen\${breakpointUpper}Min\`;
    const screen = \`screen\${breakpointUpper}\`;
    if (!(indexableToken[screenMin] <= indexableToken[screen])) {
      throw new Error(\`\${screenMin}<=\${screen} fails : !(\${indexableToken[screenMin]}<=\${indexableToken[screen]})\`);
    }
    if (i < revBreakpoints.length - 1) {
      const screenMax = \`screen\${breakpointUpper}Max\`;
      if (!(indexableToken[screen] <= indexableToken[screenMax])) {
        throw new Error(\`\${screen}<=\${screenMax} fails : !(\${indexableToken[screen]}<=\${indexableToken[screenMax]})\`);
      }
      const nextBreakpointUpperMin = revBreakpoints[i + 1].toUpperCase();
      const nextScreenMin = \`screen\${nextBreakpointUpperMin}Min\`;
      if (!(indexableToken[screenMax] <= indexableToken[nextScreenMin])) {
        throw new Error(\`\${screenMax}<=\${nextScreenMin} fails : !(\${indexableToken[screenMax]}<=\${indexableToken[nextScreenMin]})\`);
      }
    }
  });
  return token;
};
function useResponsiveObserver() {
  const [, token] = (0,_theme_internal__WEBPACK_IMPORTED_MODULE_1__/* .useToken */ .dQ)();
  const responsiveMap = getResponsiveMap(validateBreakpoints(token));
  // To avoid repeat create instance, we add \`useMemo\` here.
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
    const subscribers = new Map();
    let subUid = -1;
    let screens = {};
    return {
      matchHandlers: {},
      dispatch(pointMap) {
        screens = pointMap;
        subscribers.forEach(func => func(screens));
        return subscribers.size >= 1;
      },
      subscribe(func) {
        if (!subscribers.size) this.register();
        subUid += 1;
        subscribers.set(subUid, func);
        func(screens);
        return subUid;
      },
      unsubscribe(paramToken) {
        subscribers.delete(paramToken);
        if (!subscribers.size) this.unregister();
      },
      unregister() {
        Object.keys(responsiveMap).forEach(screen => {
          const matchMediaQuery = responsiveMap[screen];
          const handler = this.matchHandlers[matchMediaQuery];
          handler === null || handler === void 0 ? void 0 : handler.mql.removeListener(handler === null || handler === void 0 ? void 0 : handler.listener);
        });
        subscribers.clear();
      },
      register() {
        Object.keys(responsiveMap).forEach(screen => {
          const matchMediaQuery = responsiveMap[screen];
          const listener = _ref => {
            let {
              matches
            } = _ref;
            this.dispatch(Object.assign(Object.assign({}, screens), {
              [screen]: matches
            }));
          };
          const mql = window.matchMedia(matchMediaQuery);
          mql.addListener(listener);
          this.matchHandlers[matchMediaQuery] = {
            mql,
            listener
          };
          listener(mql);
        });
      },
      responsiveMap
    };
  }, [token]);
}

//# sourceURL=webpack:///./node_modules/antd/es/_util/responsiveObserver.js?`)},99134:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval(`/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);

const RowContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
/* harmony default export */ __webpack_exports__["Z"] = (RowContext);

//# sourceURL=webpack:///./node_modules/antd/es/grid/RowContext.js?`)},21584:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval(`/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94184);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var _config_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(53124);
/* harmony import */ var _RowContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(99134);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6999);
var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};





function parseFlex(flex) {
  if (typeof flex === 'number') {
    return \`\${flex} \${flex} auto\`;
  }
  if (/^\\d+(\\.\\d+)?(px|em|rem|%)$/.test(flex)) {
    return \`0 0 \${flex}\`;
  }
  return flex;
}
const sizes = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'];
const Col = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((props, ref) => {
  const {
    getPrefixCls,
    direction
  } = react__WEBPACK_IMPORTED_MODULE_1__.useContext(_config_provider__WEBPACK_IMPORTED_MODULE_2__/* .ConfigContext */ .E_);
  const {
    gutter,
    wrap,
    supportFlexGap
  } = react__WEBPACK_IMPORTED_MODULE_1__.useContext(_RowContext__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z);
  const {
      prefixCls: customizePrefixCls,
      span,
      order,
      offset,
      push,
      pull,
      className,
      children,
      flex,
      style
    } = props,
    others = __rest(props, ["prefixCls", "span", "order", "offset", "push", "pull", "className", "children", "flex", "style"]);
  const prefixCls = getPrefixCls('col', customizePrefixCls);
  const [wrapSSR, hashId] = (0,_style__WEBPACK_IMPORTED_MODULE_4__/* .useColStyle */ .c)(prefixCls);
  let sizeClassObj = {};
  sizes.forEach(size => {
    let sizeProps = {};
    const propSize = props[size];
    if (typeof propSize === 'number') {
      sizeProps.span = propSize;
    } else if (typeof propSize === 'object') {
      sizeProps = propSize || {};
    }
    delete others[size];
    sizeClassObj = Object.assign(Object.assign({}, sizeClassObj), {
      [\`\${prefixCls}-\${size}-\${sizeProps.span}\`]: sizeProps.span !== undefined,
      [\`\${prefixCls}-\${size}-order-\${sizeProps.order}\`]: sizeProps.order || sizeProps.order === 0,
      [\`\${prefixCls}-\${size}-offset-\${sizeProps.offset}\`]: sizeProps.offset || sizeProps.offset === 0,
      [\`\${prefixCls}-\${size}-push-\${sizeProps.push}\`]: sizeProps.push || sizeProps.push === 0,
      [\`\${prefixCls}-\${size}-pull-\${sizeProps.pull}\`]: sizeProps.pull || sizeProps.pull === 0,
      [\`\${prefixCls}-\${size}-flex-\${sizeProps.flex}\`]: sizeProps.flex || sizeProps.flex === 'auto',
      [\`\${prefixCls}-rtl\`]: direction === 'rtl'
    });
  });
  const classes = classnames__WEBPACK_IMPORTED_MODULE_0___default()(prefixCls, {
    [\`\${prefixCls}-\${span}\`]: span !== undefined,
    [\`\${prefixCls}-order-\${order}\`]: order,
    [\`\${prefixCls}-offset-\${offset}\`]: offset,
    [\`\${prefixCls}-push-\${push}\`]: push,
    [\`\${prefixCls}-pull-\${pull}\`]: pull
  }, className, sizeClassObj, hashId);
  const mergedStyle = {};
  // Horizontal gutter use padding
  if (gutter && gutter[0] > 0) {
    const horizontalGutter = gutter[0] / 2;
    mergedStyle.paddingLeft = horizontalGutter;
    mergedStyle.paddingRight = horizontalGutter;
  }
  // Vertical gutter use padding when gap not support
  if (gutter && gutter[1] > 0 && !supportFlexGap) {
    const verticalGutter = gutter[1] / 2;
    mergedStyle.paddingTop = verticalGutter;
    mergedStyle.paddingBottom = verticalGutter;
  }
  if (flex) {
    mergedStyle.flex = parseFlex(flex);
    // Hack for Firefox to avoid size issue
    // https://github.com/ant-design/ant-design/pull/20023#issuecomment-564389553
    if (wrap === false && !mergedStyle.minWidth) {
      mergedStyle.minWidth = 0;
    }
  }
  return wrapSSR( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", Object.assign({}, others, {
    style: Object.assign(Object.assign({}, mergedStyle), style),
    className: classes,
    ref: ref
  }), children));
});
if (false) {}
/* harmony default export */ __webpack_exports__["Z"] = (Col);

//# sourceURL=webpack:///./node_modules/antd/es/grid/col.js?`)},92820:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval(`/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94184);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var _config_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(53124);
/* harmony import */ var _util_hooks_useFlexGapSupport__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(98082);
/* harmony import */ var _util_responsiveObserver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74443);
/* harmony import */ var _RowContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(99134);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6999);
var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};







const RowAligns = (/* unused pure expression or super */ null && (['top', 'middle', 'bottom', 'stretch']));
const RowJustify = (/* unused pure expression or super */ null && (['start', 'end', 'center', 'space-around', 'space-between', 'space-evenly']));
function useMergePropByScreen(oriProp, screen) {
  const [prop, setProp] = react__WEBPACK_IMPORTED_MODULE_1__.useState(typeof oriProp === 'string' ? oriProp : '');
  const calcMergeAlignOrJustify = () => {
    if (typeof oriProp === 'string') {
      setProp(oriProp);
    }
    if (typeof oriProp !== 'object') {
      return;
    }
    for (let i = 0; i < _util_responsiveObserver__WEBPACK_IMPORTED_MODULE_2__/* .responsiveArray.length */ .c.length; i++) {
      const breakpoint = _util_responsiveObserver__WEBPACK_IMPORTED_MODULE_2__/* .responsiveArray */ .c[i];
      // if do not match, do nothing
      if (!screen[breakpoint]) continue;
      const curVal = oriProp[breakpoint];
      if (curVal !== undefined) {
        setProp(curVal);
        return;
      }
    }
  };
  react__WEBPACK_IMPORTED_MODULE_1__.useEffect(() => {
    calcMergeAlignOrJustify();
  }, [JSON.stringify(oriProp), screen]);
  return prop;
}
const Row = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((props, ref) => {
  const {
      prefixCls: customizePrefixCls,
      justify,
      align,
      className,
      style,
      children,
      gutter = 0,
      wrap
    } = props,
    others = __rest(props, ["prefixCls", "justify", "align", "className", "style", "children", "gutter", "wrap"]);
  const {
    getPrefixCls,
    direction
  } = react__WEBPACK_IMPORTED_MODULE_1__.useContext(_config_provider__WEBPACK_IMPORTED_MODULE_3__/* .ConfigContext */ .E_);
  const [screens, setScreens] = react__WEBPACK_IMPORTED_MODULE_1__.useState({
    xs: true,
    sm: true,
    md: true,
    lg: true,
    xl: true,
    xxl: true
  });
  // to save screens info when responsiveObserve callback had been call
  const [curScreens, setCurScreens] = react__WEBPACK_IMPORTED_MODULE_1__.useState({
    xs: false,
    sm: false,
    md: false,
    lg: false,
    xl: false,
    xxl: false
  });
  // ================================== calc responsive data ==================================
  const mergeAlign = useMergePropByScreen(align, curScreens);
  const mergeJustify = useMergePropByScreen(justify, curScreens);
  const supportFlexGap = (0,_util_hooks_useFlexGapSupport__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();
  const gutterRef = react__WEBPACK_IMPORTED_MODULE_1__.useRef(gutter);
  const responsiveObserver = (0,_util_responsiveObserver__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
  // ================================== Effect ==================================
  react__WEBPACK_IMPORTED_MODULE_1__.useEffect(() => {
    const token = responsiveObserver.subscribe(screen => {
      setCurScreens(screen);
      const currentGutter = gutterRef.current || 0;
      if (!Array.isArray(currentGutter) && typeof currentGutter === 'object' || Array.isArray(currentGutter) && (typeof currentGutter[0] === 'object' || typeof currentGutter[1] === 'object')) {
        setScreens(screen);
      }
    });
    return () => responsiveObserver.unsubscribe(token);
  }, []);
  // ================================== Render ==================================
  const getGutter = () => {
    const results = [undefined, undefined];
    const normalizedGutter = Array.isArray(gutter) ? gutter : [gutter, undefined];
    normalizedGutter.forEach((g, index) => {
      if (typeof g === 'object') {
        for (let i = 0; i < _util_responsiveObserver__WEBPACK_IMPORTED_MODULE_2__/* .responsiveArray.length */ .c.length; i++) {
          const breakpoint = _util_responsiveObserver__WEBPACK_IMPORTED_MODULE_2__/* .responsiveArray */ .c[i];
          if (screens[breakpoint] && g[breakpoint] !== undefined) {
            results[index] = g[breakpoint];
            break;
          }
        }
      } else {
        results[index] = g;
      }
    });
    return results;
  };
  const prefixCls = getPrefixCls('row', customizePrefixCls);
  const [wrapSSR, hashId] = (0,_style__WEBPACK_IMPORTED_MODULE_5__/* .useRowStyle */ .V)(prefixCls);
  const gutters = getGutter();
  const classes = classnames__WEBPACK_IMPORTED_MODULE_0___default()(prefixCls, {
    [\`\${prefixCls}-no-wrap\`]: wrap === false,
    [\`\${prefixCls}-\${mergeJustify}\`]: mergeJustify,
    [\`\${prefixCls}-\${mergeAlign}\`]: mergeAlign,
    [\`\${prefixCls}-rtl\`]: direction === 'rtl'
  }, className, hashId);
  // Add gutter related style
  const rowStyle = {};
  const horizontalGutter = gutters[0] != null && gutters[0] > 0 ? gutters[0] / -2 : undefined;
  const verticalGutter = gutters[1] != null && gutters[1] > 0 ? gutters[1] / -2 : undefined;
  if (horizontalGutter) {
    rowStyle.marginLeft = horizontalGutter;
    rowStyle.marginRight = horizontalGutter;
  }
  if (supportFlexGap) {
    // Set gap direct if flex gap support
    [, rowStyle.rowGap] = gutters;
  } else if (verticalGutter) {
    rowStyle.marginTop = verticalGutter;
    rowStyle.marginBottom = verticalGutter;
  }
  // "gutters" is a new array in each rendering phase, it'll make 'React.useMemo' effectless.
  // So we deconstruct "gutters" variable here.
  const [gutterH, gutterV] = gutters;
  const rowContext = react__WEBPACK_IMPORTED_MODULE_1__.useMemo(() => ({
    gutter: [gutterH, gutterV],
    wrap,
    supportFlexGap
  }), [gutterH, gutterV, wrap, supportFlexGap]);
  return wrapSSR( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_RowContext__WEBPACK_IMPORTED_MODULE_6__/* ["default"].Provider */ .Z.Provider, {
    value: rowContext
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", Object.assign({}, others, {
    className: classes,
    style: Object.assign(Object.assign({}, rowStyle), style),
    ref: ref
  }), children)));
});
if (false) {}
/* harmony default export */ __webpack_exports__["Z"] = (Row);

//# sourceURL=webpack:///./node_modules/antd/es/grid/row.js?`)},6999:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval(`/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": function() { return /* binding */ useRowStyle; },
/* harmony export */   "c": function() { return /* binding */ useColStyle; }
/* harmony export */ });
/* harmony import */ var _theme_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67968);
/* harmony import */ var _theme_internal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45503);

// ============================== Row-Shared ==============================
const genGridRowStyle = token => {
  const {
    componentCls
  } = token;
  return {
    // Grid system
    [componentCls]: {
      display: 'flex',
      flexFlow: 'row wrap',
      minWidth: 0,
      '&::before, &::after': {
        display: 'flex'
      },
      '&-no-wrap': {
        flexWrap: 'nowrap'
      },
      // The origin of the X-axis
      '&-start': {
        justifyContent: 'flex-start'
      },
      // The center of the X-axis
      '&-center': {
        justifyContent: 'center'
      },
      // The opposite of the X-axis
      '&-end': {
        justifyContent: 'flex-end'
      },
      '&-space-between': {
        justifyContent: 'space-between'
      },
      '&-space-around': {
        justifyContent: 'space-around'
      },
      '&-space-evenly': {
        justifyContent: 'space-evenly'
      },
      // Align at the top
      '&-top': {
        alignItems: 'flex-start'
      },
      // Align at the center
      '&-middle': {
        alignItems: 'center'
      },
      '&-bottom': {
        alignItems: 'flex-end'
      }
    }
  };
};
// ============================== Col-Shared ==============================
const genGridColStyle = token => {
  const {
    componentCls
  } = token;
  return {
    // Grid system
    [componentCls]: {
      position: 'relative',
      maxWidth: '100%',
      // Prevent columns from collapsing when empty
      minHeight: 1
    }
  };
};
const genLoopGridColumnsStyle = (token, sizeCls) => {
  const {
    componentCls,
    gridColumns
  } = token;
  const gridColumnsStyle = {};
  for (let i = gridColumns; i >= 0; i--) {
    if (i === 0) {
      gridColumnsStyle[\`\${componentCls}\${sizeCls}-\${i}\`] = {
        display: 'none'
      };
      gridColumnsStyle[\`\${componentCls}-push-\${i}\`] = {
        insetInlineStart: 'auto'
      };
      gridColumnsStyle[\`\${componentCls}-pull-\${i}\`] = {
        insetInlineEnd: 'auto'
      };
      gridColumnsStyle[\`\${componentCls}\${sizeCls}-push-\${i}\`] = {
        insetInlineStart: 'auto'
      };
      gridColumnsStyle[\`\${componentCls}\${sizeCls}-pull-\${i}\`] = {
        insetInlineEnd: 'auto'
      };
      gridColumnsStyle[\`\${componentCls}\${sizeCls}-offset-\${i}\`] = {
        marginInlineStart: 0
      };
      gridColumnsStyle[\`\${componentCls}\${sizeCls}-order-\${i}\`] = {
        order: 0
      };
    } else {
      gridColumnsStyle[\`\${componentCls}\${sizeCls}-\${i}\`] = {
        display: 'block',
        flex: \`0 0 \${i / gridColumns * 100}%\`,
        maxWidth: \`\${i / gridColumns * 100}%\`
      };
      gridColumnsStyle[\`\${componentCls}\${sizeCls}-push-\${i}\`] = {
        insetInlineStart: \`\${i / gridColumns * 100}%\`
      };
      gridColumnsStyle[\`\${componentCls}\${sizeCls}-pull-\${i}\`] = {
        insetInlineEnd: \`\${i / gridColumns * 100}%\`
      };
      gridColumnsStyle[\`\${componentCls}\${sizeCls}-offset-\${i}\`] = {
        marginInlineStart: \`\${i / gridColumns * 100}%\`
      };
      gridColumnsStyle[\`\${componentCls}\${sizeCls}-order-\${i}\`] = {
        order: i
      };
    }
  }
  return gridColumnsStyle;
};
const genGridStyle = (token, sizeCls) => genLoopGridColumnsStyle(token, sizeCls);
const genGridMediaStyle = (token, screenSize, sizeCls) => ({
  [\`@media (min-width: \${screenSize}px)\`]: Object.assign({}, genGridStyle(token, sizeCls))
});
// ============================== Export ==============================
const useRowStyle = (0,_theme_internal__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)('Grid', token => [genGridRowStyle(token)]);
const useColStyle = (0,_theme_internal__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)('Grid', token => {
  const gridToken = (0,_theme_internal__WEBPACK_IMPORTED_MODULE_1__/* .merge */ .TS)(token, {
    gridColumns: 24 // Row is divided into 24 parts in Grid
  });

  const gridMediaSizesMap = {
    '-sm': gridToken.screenSMMin,
    '-md': gridToken.screenMDMin,
    '-lg': gridToken.screenLGMin,
    '-xl': gridToken.screenXLMin,
    '-xxl': gridToken.screenXXLMin
  };
  return [genGridColStyle(gridToken), genGridStyle(gridToken, ''), genGridStyle(gridToken, '-xs'), Object.keys(gridMediaSizesMap).map(key => genGridMediaStyle(gridToken, gridMediaSizesMap[key], key)).reduce((pre, cur) => Object.assign(Object.assign({}, pre), cur), {})];
});

//# sourceURL=webpack:///./node_modules/antd/es/grid/style/index.js?`)},46572:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval(`
// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ spin; }
});

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(94184);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/rc-util/es/omit.js
var omit = __webpack_require__(98423);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
;// CONCATENATED MODULE: ./node_modules/antd/node_modules/throttle-debounce/esm/index.js
/* eslint-disable no-undefined,no-param-reassign,no-shadow */

/**
 * Throttle execution of a function. Especially useful for rate limiting
 * execution of handlers on events like resize and scroll.
 *
 * @param {number} delay -                  A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher)
 *                                            are most useful.
 * @param {Function} callback -               A function to be executed after delay milliseconds. The \`this\` context and all arguments are passed through,
 *                                            as-is, to \`callback\` when the throttled-function is executed.
 * @param {object} [options] -              An object to configure options.
 * @param {boolean} [options.noTrailing] -   Optional, defaults to false. If noTrailing is true, callback will only execute every \`delay\` milliseconds
 *                                            while the throttled-function is being called. If noTrailing is false or unspecified, callback will be executed
 *                                            one final time after the last throttled-function call. (After the throttled-function has not been called for
 *                                            \`delay\` milliseconds, the internal counter is reset).
 * @param {boolean} [options.noLeading] -   Optional, defaults to false. If noLeading is false, the first throttled-function call will execute callback
 *                                            immediately. If noLeading is true, the first the callback execution will be skipped. It should be noted that
 *                                            callback will never executed if both noLeading = true and noTrailing = true.
 * @param {boolean} [options.debounceMode] - If \`debounceMode\` is true (at begin), schedule \`clear\` to execute after \`delay\` ms. If \`debounceMode\` is
 *                                            false (at end), schedule \`callback\` to execute after \`delay\` ms.
 *
 * @returns {Function} A new, throttled, function.
 */
function throttle (delay, callback, options) {
  var _ref = options || {},
      _ref$noTrailing = _ref.noTrailing,
      noTrailing = _ref$noTrailing === void 0 ? false : _ref$noTrailing,
      _ref$noLeading = _ref.noLeading,
      noLeading = _ref$noLeading === void 0 ? false : _ref$noLeading,
      _ref$debounceMode = _ref.debounceMode,
      debounceMode = _ref$debounceMode === void 0 ? undefined : _ref$debounceMode;
  /*
   * After wrapper has stopped being called, this timeout ensures that
   * \`callback\` is executed at the proper times in \`throttle\` and \`end\`
   * debounce modes.
   */


  var timeoutID;
  var cancelled = false; // Keep track of the last time \`callback\` was executed.

  var lastExec = 0; // Function to clear existing timeout

  function clearExistingTimeout() {
    if (timeoutID) {
      clearTimeout(timeoutID);
    }
  } // Function to cancel next exec


  function cancel(options) {
    var _ref2 = options || {},
        _ref2$upcomingOnly = _ref2.upcomingOnly,
        upcomingOnly = _ref2$upcomingOnly === void 0 ? false : _ref2$upcomingOnly;

    clearExistingTimeout();
    cancelled = !upcomingOnly;
  }
  /*
   * The \`wrapper\` function encapsulates all of the throttling / debouncing
   * functionality and when executed will limit the rate at which \`callback\`
   * is executed.
   */


  function wrapper() {
    for (var _len = arguments.length, arguments_ = new Array(_len), _key = 0; _key < _len; _key++) {
      arguments_[_key] = arguments[_key];
    }

    var self = this;
    var elapsed = Date.now() - lastExec;

    if (cancelled) {
      return;
    } // Execute \`callback\` and update the \`lastExec\` timestamp.


    function exec() {
      lastExec = Date.now();
      callback.apply(self, arguments_);
    }
    /*
     * If \`debounceMode\` is true (at begin) this is used to clear the flag
     * to allow future \`callback\` executions.
     */


    function clear() {
      timeoutID = undefined;
    }

    if (!noLeading && debounceMode && !timeoutID) {
      /*
       * Since \`wrapper\` is being called for the first time and
       * \`debounceMode\` is true (at begin), execute \`callback\`
       * and noLeading != true.
       */
      exec();
    }

    clearExistingTimeout();

    if (debounceMode === undefined && elapsed > delay) {
      if (noLeading) {
        /*
         * In throttle mode with noLeading, if \`delay\` time has
         * been exceeded, update \`lastExec\` and schedule \`callback\`
         * to execute after \`delay\` ms.
         */
        lastExec = Date.now();

        if (!noTrailing) {
          timeoutID = setTimeout(debounceMode ? clear : exec, delay);
        }
      } else {
        /*
         * In throttle mode without noLeading, if \`delay\` time has been exceeded, execute
         * \`callback\`.
         */
        exec();
      }
    } else if (noTrailing !== true) {
      /*
       * In trailing throttle mode, since \`delay\` time has not been
       * exceeded, schedule \`callback\` to execute \`delay\` ms after most
       * recent execution.
       *
       * If \`debounceMode\` is true (at begin), schedule \`clear\` to execute
       * after \`delay\` ms.
       *
       * If \`debounceMode\` is false (at end), schedule \`callback\` to
       * execute after \`delay\` ms.
       */
      timeoutID = setTimeout(debounceMode ? clear : exec, debounceMode === undefined ? delay - elapsed : delay);
    }
  }

  wrapper.cancel = cancel; // Return the wrapper function.

  return wrapper;
}

/* eslint-disable no-undefined */
/**
 * Debounce execution of a function. Debouncing, unlike throttling,
 * guarantees that a function is only executed a single time, either at the
 * very beginning of a series of calls, or at the very end.
 *
 * @param {number} delay -               A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.
 * @param {Function} callback -          A function to be executed after delay milliseconds. The \`this\` context and all arguments are passed through, as-is,
 *                                        to \`callback\` when the debounced-function is executed.
 * @param {object} [options] -           An object to configure options.
 * @param {boolean} [options.atBegin] -  Optional, defaults to false. If atBegin is false or unspecified, callback will only be executed \`delay\` milliseconds
 *                                        after the last debounced-function call. If atBegin is true, callback will be executed only at the first debounced-function call.
 *                                        (After the throttled-function has not been called for \`delay\` milliseconds, the internal counter is reset).
 *
 * @returns {Function} A new, debounced function.
 */

function debounce (delay, callback, options) {
  var _ref = options || {},
      _ref$atBegin = _ref.atBegin,
      atBegin = _ref$atBegin === void 0 ? false : _ref$atBegin;

  return throttle(delay, callback, {
    debounceMode: atBegin !== false
  });
}


//# sourceMappingURL=index.js.map

// EXTERNAL MODULE: ./node_modules/antd/es/_util/reactNode.js
var reactNode = __webpack_require__(96159);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/context.js
var context = __webpack_require__(53124);
// EXTERNAL MODULE: ./node_modules/@ant-design/cssinjs/es/index.js + 28 modules
var es = __webpack_require__(27431);
// EXTERNAL MODULE: ./node_modules/antd/es/theme/util/genComponentStyleHook.js
var genComponentStyleHook = __webpack_require__(67968);
// EXTERNAL MODULE: ./node_modules/antd/es/theme/util/statistic.js
var statistic = __webpack_require__(45503);
// EXTERNAL MODULE: ./node_modules/antd/es/style/index.js
var style = __webpack_require__(14747);
;// CONCATENATED MODULE: ./node_modules/antd/es/spin/style/index.js



const antSpinMove = new es/* Keyframes */.E4('antSpinMove', {
  to: {
    opacity: 1
  }
});
const antRotate = new es/* Keyframes */.E4('antRotate', {
  to: {
    transform: 'rotate(405deg)'
  }
});
const genSpinStyle = token => ({
  [\`\${token.componentCls}\`]: Object.assign(Object.assign({}, (0,style/* resetComponent */.Wf)(token)), {
    position: 'absolute',
    display: 'none',
    color: token.colorPrimary,
    fontSize: 0,
    textAlign: 'center',
    verticalAlign: 'middle',
    opacity: 0,
    transition: \`transform \${token.motionDurationSlow} \${token.motionEaseInOutCirc}\`,
    '&-spinning': {
      position: 'static',
      display: 'inline-block',
      opacity: 1
    },
    '&-nested-loading': {
      position: 'relative',
      [\`> div > \${token.componentCls}\`]: {
        position: 'absolute',
        top: 0,
        insetInlineStart: 0,
        zIndex: 4,
        display: 'block',
        width: '100%',
        height: '100%',
        maxHeight: token.contentHeight,
        [\`\${token.componentCls}-dot\`]: {
          position: 'absolute',
          top: '50%',
          insetInlineStart: '50%',
          margin: -token.spinDotSize / 2
        },
        [\`\${token.componentCls}-text\`]: {
          position: 'absolute',
          top: '50%',
          width: '100%',
          paddingTop: (token.spinDotSize - token.fontSize) / 2 + 2,
          textShadow: \`0 1px 2px \${token.colorBgContainer}\`,
          fontSize: token.fontSize
        },
        [\`&\${token.componentCls}-show-text \${token.componentCls}-dot\`]: {
          marginTop: -(token.spinDotSize / 2) - 10
        },
        '&-sm': {
          [\`\${token.componentCls}-dot\`]: {
            margin: -token.spinDotSizeSM / 2
          },
          [\`\${token.componentCls}-text\`]: {
            paddingTop: (token.spinDotSizeSM - token.fontSize) / 2 + 2
          },
          [\`&\${token.componentCls}-show-text \${token.componentCls}-dot\`]: {
            marginTop: -(token.spinDotSizeSM / 2) - 10
          }
        },
        '&-lg': {
          [\`\${token.componentCls}-dot\`]: {
            margin: -(token.spinDotSizeLG / 2)
          },
          [\`\${token.componentCls}-text\`]: {
            paddingTop: (token.spinDotSizeLG - token.fontSize) / 2 + 2
          },
          [\`&\${token.componentCls}-show-text \${token.componentCls}-dot\`]: {
            marginTop: -(token.spinDotSizeLG / 2) - 10
          }
        }
      },
      [\`\${token.componentCls}-container\`]: {
        position: 'relative',
        transition: \`opacity \${token.motionDurationSlow}\`,
        '&::after': {
          position: 'absolute',
          top: 0,
          insetInlineEnd: 0,
          bottom: 0,
          insetInlineStart: 0,
          zIndex: 10,
          width: '100%',
          height: '100%',
          background: token.colorBgContainer,
          opacity: 0,
          transition: \`all \${token.motionDurationSlow}\`,
          content: '""',
          pointerEvents: 'none'
        }
      },
      [\`\${token.componentCls}-blur\`]: {
        clear: 'both',
        opacity: 0.5,
        userSelect: 'none',
        pointerEvents: 'none',
        [\`&::after\`]: {
          opacity: 0.4,
          pointerEvents: 'auto'
        }
      }
    },
    // tip
    // ------------------------------
    [\`&-tip\`]: {
      color: token.spinDotDefault
    },
    // dots
    // ------------------------------
    [\`\${token.componentCls}-dot\`]: {
      position: 'relative',
      display: 'inline-block',
      fontSize: token.spinDotSize,
      width: '1em',
      height: '1em',
      '&-item': {
        position: 'absolute',
        display: 'block',
        width: (token.spinDotSize - token.marginXXS / 2) / 2,
        height: (token.spinDotSize - token.marginXXS / 2) / 2,
        backgroundColor: token.colorPrimary,
        borderRadius: '100%',
        transform: 'scale(0.75)',
        transformOrigin: '50% 50%',
        opacity: 0.3,
        animationName: antSpinMove,
        animationDuration: '1s',
        animationIterationCount: 'infinite',
        animationTimingFunction: 'linear',
        animationDirection: 'alternate',
        '&:nth-child(1)': {
          top: 0,
          insetInlineStart: 0
        },
        '&:nth-child(2)': {
          top: 0,
          insetInlineEnd: 0,
          animationDelay: '0.4s'
        },
        '&:nth-child(3)': {
          insetInlineEnd: 0,
          bottom: 0,
          animationDelay: '0.8s'
        },
        '&:nth-child(4)': {
          bottom: 0,
          insetInlineStart: 0,
          animationDelay: '1.2s'
        }
      },
      '&-spin': {
        transform: 'rotate(45deg)',
        animationName: antRotate,
        animationDuration: '1.2s',
        animationIterationCount: 'infinite',
        animationTimingFunction: 'linear'
      }
    },
    // Sizes
    // ------------------------------
    // small
    [\`&-sm \${token.componentCls}-dot\`]: {
      fontSize: token.spinDotSizeSM,
      i: {
        width: (token.spinDotSizeSM - token.marginXXS / 2) / 2,
        height: (token.spinDotSizeSM - token.marginXXS / 2) / 2
      }
    },
    // large
    [\`&-lg \${token.componentCls}-dot\`]: {
      fontSize: token.spinDotSizeLG,
      i: {
        width: (token.spinDotSizeLG - token.marginXXS) / 2,
        height: (token.spinDotSizeLG - token.marginXXS) / 2
      }
    },
    [\`&\${token.componentCls}-show-text \${token.componentCls}-text\`]: {
      display: 'block'
    }
  })
});
// ============================== Export ==============================
/* harmony default export */ var spin_style = ((0,genComponentStyleHook/* default */.Z)('Spin', token => {
  const spinToken = (0,statistic/* merge */.TS)(token, {
    spinDotDefault: token.colorTextDescription,
    spinDotSize: token.controlHeightLG / 2,
    spinDotSizeSM: token.controlHeightLG * 0.35,
    spinDotSizeLG: token.controlHeight
  });
  return [genSpinStyle(spinToken)];
}, {
  contentHeight: 400
}));
;// CONCATENATED MODULE: ./node_modules/antd/es/spin/index.js
var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};








const SpinSizes = (/* unused pure expression or super */ null && (['small', 'default', 'large']));
// Render indicator
let defaultIndicator = null;
function renderIndicator(prefixCls, props) {
  const {
    indicator
  } = props;
  const dotClassName = \`\${prefixCls}-dot\`;
  // should not be render default indicator when indicator value is null
  if (indicator === null) {
    return null;
  }
  if ((0,reactNode/* isValidElement */.l$)(indicator)) {
    return (0,reactNode/* cloneElement */.Tm)(indicator, {
      className: classnames_default()(indicator.props.className, dotClassName)
    });
  }
  if ((0,reactNode/* isValidElement */.l$)(defaultIndicator)) {
    return (0,reactNode/* cloneElement */.Tm)(defaultIndicator, {
      className: classnames_default()(defaultIndicator.props.className, dotClassName)
    });
  }
  return /*#__PURE__*/react.createElement("span", {
    className: classnames_default()(dotClassName, \`\${prefixCls}-dot-spin\`)
  }, /*#__PURE__*/react.createElement("i", {
    className: \`\${prefixCls}-dot-item\`
  }), /*#__PURE__*/react.createElement("i", {
    className: \`\${prefixCls}-dot-item\`
  }), /*#__PURE__*/react.createElement("i", {
    className: \`\${prefixCls}-dot-item\`
  }), /*#__PURE__*/react.createElement("i", {
    className: \`\${prefixCls}-dot-item\`
  }));
}
function shouldDelay(spinning, delay) {
  return !!spinning && !!delay && !isNaN(Number(delay));
}
const Spin = props => {
  const {
      spinPrefixCls: prefixCls,
      spinning: customSpinning = true,
      delay = 0,
      className,
      rootClassName,
      size = 'default',
      tip,
      wrapperClassName,
      style,
      children,
      hashId
    } = props,
    restProps = __rest(props, ["spinPrefixCls", "spinning", "delay", "className", "rootClassName", "size", "tip", "wrapperClassName", "style", "children", "hashId"]);
  const [spinning, setSpinning] = react.useState(() => customSpinning && !shouldDelay(customSpinning, delay));
  react.useEffect(() => {
    if (customSpinning) {
      const showSpinning = debounce(delay, () => {
        setSpinning(true);
      });
      showSpinning();
      return () => {
        var _a;
        (_a = showSpinning === null || showSpinning === void 0 ? void 0 : showSpinning.cancel) === null || _a === void 0 ? void 0 : _a.call(showSpinning);
      };
    }
    setSpinning(false);
  }, [delay, customSpinning]);
  const isNestedPattern = react.useMemo(() => typeof children !== 'undefined', [children]);
  if (false) {}
  const {
    direction
  } = react.useContext(context/* ConfigContext */.E_);
  const spinClassName = classnames_default()(prefixCls, {
    [\`\${prefixCls}-sm\`]: size === 'small',
    [\`\${prefixCls}-lg\`]: size === 'large',
    [\`\${prefixCls}-spinning\`]: spinning,
    [\`\${prefixCls}-show-text\`]: !!tip,
    [\`\${prefixCls}-rtl\`]: direction === 'rtl'
  }, className, rootClassName, hashId);
  const containerClassName = classnames_default()(\`\${prefixCls}-container\`, {
    [\`\${prefixCls}-blur\`]: spinning
  });
  // fix https://fb.me/react-unknown-prop
  const divProps = (0,omit/* default */.Z)(restProps, ['indicator', 'prefixCls']);
  const spinElement = /*#__PURE__*/react.createElement("div", Object.assign({}, divProps, {
    style: style,
    className: spinClassName,
    "aria-live": "polite",
    "aria-busy": spinning
  }), renderIndicator(prefixCls, props), tip && isNestedPattern ? /*#__PURE__*/react.createElement("div", {
    className: \`\${prefixCls}-text\`
  }, tip) : null);
  if (isNestedPattern) {
    return /*#__PURE__*/react.createElement("div", Object.assign({}, divProps, {
      className: classnames_default()(\`\${prefixCls}-nested-loading\`, wrapperClassName, hashId)
    }), spinning && /*#__PURE__*/react.createElement("div", {
      key: "loading"
    }, spinElement), /*#__PURE__*/react.createElement("div", {
      className: containerClassName,
      key: "container"
    }, children));
  }
  return spinElement;
};
const SpinFC = props => {
  const {
    prefixCls: customizePrefixCls
  } = props;
  const {
    getPrefixCls
  } = react.useContext(context/* ConfigContext */.E_);
  const spinPrefixCls = getPrefixCls('spin', customizePrefixCls);
  const [wrapSSR, hashId] = spin_style(spinPrefixCls);
  const spinClassProps = Object.assign(Object.assign({}, props), {
    spinPrefixCls,
    hashId
  });
  return wrapSSR( /*#__PURE__*/react.createElement(Spin, Object.assign({}, spinClassProps)));
};
SpinFC.setDefaultIndicator = indicator => {
  defaultIndicator = indicator;
};
if (false) {}
/* harmony default export */ var spin = (SpinFC);

//# sourceURL=webpack:///./node_modules/antd/es/spin/index.js_+_2_modules?`)}}]);
