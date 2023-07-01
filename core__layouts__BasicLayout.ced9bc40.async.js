"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[788],{27600:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval(`
// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "O": function() { return /* reexport */ KeepAlive_KeepAlive; },
  "G": function() { return /* reexport */ KeepAlive_KeepAliveTransfer; }
});

// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(5574);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
;// CONCATENATED MODULE: ./src/core/base/KeepAlive/actionTypes.ts
var CREATING = 'CREATING';
var CREATED = 'CREATED';
;// CONCATENATED MODULE: ./src/core/base/KeepAlive/KeepAliveContext.tsx

var KeepAliveContext = /*#__PURE__*/(0,react.createContext)({});
// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(9783);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);
// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/objectSpread2.js
var objectSpread2 = __webpack_require__(97857);
var objectSpread2_default = /*#__PURE__*/__webpack_require__.n(objectSpread2);
;// CONCATENATED MODULE: ./src/core/base/KeepAlive/KeepAliveReducer.ts



var initialState = {};
function keepAliveReducer(state, action) {
  var type = action.type,
    payload = action.payload;
  var keepAliveId = payload.keepAliveId,
    reactElement = payload.reactElement,
    nodes = payload.nodes;
  switch (action.type) {
    case CREATING:
      {
        return objectSpread2_default()(objectSpread2_default()({}, state), {}, defineProperty_default()({}, keepAliveId, {
          keepAliveId: keepAliveId,
          reactElement: reactElement,
          status: type,
          nodes: null
        }));
      }
    case CREATED:
      {
        return objectSpread2_default()(objectSpread2_default()({}, state), {}, defineProperty_default()({}, keepAliveId, objectSpread2_default()(objectSpread2_default()({}, state[keepAliveId]), {}, {
          status: type,
          nodes: nodes
        })));
      }
    default:
      {
        return state;
      }
  }
}
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./src/core/base/KeepAlive/KeepAlive.tsx







/**
 * {
 *  keepAliveId: 'class'
 *  reactElement: ReactElement
 *  nodes: Node[]
 *  status: 'CREATING' | 'CREATED'
 * }
 */

var KeepAlive = function KeepAlive(props) {
  var _useReducer = (0,react.useReducer)(keepAliveReducer, {}),
    _useReducer2 = slicedToArray_default()(_useReducer, 2),
    keepAliveStates = _useReducer2[0],
    dispatch = _useReducer2[1];
  var setKeepAliveState = (0,react.useCallback)(function (_ref) {
    var reactElement = _ref.reactElement,
      keepAliveId = _ref.keepAliveId;
    if (!keepAliveStates[keepAliveId]) {
      dispatch({
        type: CREATING,
        payload: {
          keepAliveId: keepAliveId,
          reactElement: reactElement
        }
      });
    }
  }, [keepAliveStates]);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(KeepAliveContext.Provider, {
    value: {
      keepAliveStates: keepAliveStates,
      setKeepAliveState: setKeepAliveState,
      dispatch: dispatch
    },
    children: [props.children, Object === null || Object === void 0 ? void 0 : Object.values(keepAliveStates).map(function (state) {
      var keepAliveId = state.keepAliveId,
        reactElement = state.reactElement;
      return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        ref: function ref(node) {
          var _keepAliveStates$keep;
          if (node && !((_keepAliveStates$keep = keepAliveStates[keepAliveId]) !== null && _keepAliveStates$keep !== void 0 && _keepAliveStates$keep.nodes)) {
            dispatch({
              type: CREATED,
              payload: {
                keepAliveId: keepAliveId,
                nodes: Array.from(node.childNodes)
              }
            });
          }
        },
        children: reactElement
      }, keepAliveId);
    })]
  });
};
/* harmony default export */ var KeepAlive_KeepAlive = (KeepAlive);
;// CONCATENATED MODULE: ./src/core/base/KeepAlive/KeepAliveTransfer.tsx




var KeepAliveTransfer = function KeepAliveTransfer(KeepAliveComponent, keepAliveId) {
  var displayName = KeepAliveComponent.displayName || KeepAliveComponent.name || keepAliveId;
  return function (props) {
    var _ref = react.useRef(null);
    var _useContext = (0,react.useContext)(KeepAliveContext),
      keepAliveStates = _useContext.keepAliveStates,
      setKeepAliveState = _useContext.setKeepAliveState;
    (0,react.useEffect)(function () {
      var state = keepAliveStates[displayName];
      if (state && state !== null && state !== void 0 && state.nodes) {
        state.nodes.forEach(function (node) {
          return _ref.current.appendChild(node);
        });
      } else {
        setKeepAliveState({
          keepAliveId: displayName,
          reactElement: /*#__PURE__*/(0,jsx_runtime.jsx)(KeepAliveComponent, objectSpread2_default()({}, props))
        });
      }
    }, [keepAliveStates, setKeepAliveState, props]);
    return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      ref: _ref
    });
  };
};
/* harmony default export */ var KeepAlive_KeepAliveTransfer = (KeepAliveTransfer);
;// CONCATENATED MODULE: ./src/core/base/KeepAlive/index.tsx




//# sourceURL=webpack:///./src/core/base/KeepAlive/index.tsx_+_5_modules?`)},89351:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval(`// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ layouts_BasicLayout; }
});

// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/objectSpread2.js
var objectSpread2 = __webpack_require__(97857);
var objectSpread2_default = /*#__PURE__*/__webpack_require__.n(objectSpread2);
// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/regeneratorRuntime.js
var regeneratorRuntime = __webpack_require__(15009);
var regeneratorRuntime_default = /*#__PURE__*/__webpack_require__.n(regeneratorRuntime);
// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(99289);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);
// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(5574);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);
// EXTERNAL MODULE: ./src/components/Widget/index.tsx + 8 modules
var Widget = __webpack_require__(59021);
// EXTERNAL MODULE: ./src/config/projectConfig.tsx
var projectConfig = __webpack_require__(69365);
// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(9783);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);
// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(13769);
var objectWithoutProperties_default = /*#__PURE__*/__webpack_require__.n(objectWithoutProperties);
// EXTERNAL MODULE: ./src/.umi-production/exports.ts + 39 modules
var _umi_production_exports = __webpack_require__(41997);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./src/core/helpers/utils.tsx

// \u53BB\u9664\u591A\u4F59\u659C\u6760


var conversionPath = function conversionPath(path) {
  if (path && path.indexOf('http') === 0) {
    return path;
  }
  return "/".concat(path || '').replace(/\\/+/g, '/');
};

// \u4E00\u7EA7\u83DC\u5355\u524D\u7F00icon
var getImage = function getImage() {
  var code = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var icon = '';
  try {
    var path = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'undefined'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
    icon = /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
      src: path,
      style: {
        width: 24,
        height: 24,
        marginRight: 8
      },
      alt: code
    });
  } catch (error) {}
  return icon;
};

/**
 * \u5224\u65AD\u662F\u5426\u662Fhttp\u94FE\u63A5.\u8FD4\u56DE Link \u6216 a
 * @param {MenuItem} item
 */
var getMenuItemPath = function getMenuItemPath(item, pathname) {
  var name = item.name,
    code = item.code;
  var itemPath = conversionPath(item.path);
  // const icon = getIcon(item.icon!);
  var target = item.target;
  // Is it a http link
  if (/^https?:\\/\\//.test(itemPath)) {
    return /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
      href: itemPath,
      target: target,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
        children: name
      })
    });
  }
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(_umi_production_exports.Link, {
    to: itemPath,
    target: target,
    replace: itemPath === pathname,
    children: [getImage(code), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
      children: name
    })]
  });
};
var getSubMenuOrItem = function getSubMenuOrItem(item, pathname) {
  if (item.children && item.children.some(function (child) {
    return child.name;
  })) {
    var name = item.name,
      code = item.code;
    return {
      key: item.code,
      className: 'sider-base-menu',
      label: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        style: {
          display: 'flex',
          alignItems: 'center'
        },
        children: [getImage(code), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
          children: name
        })]
      }),
      children: getNavMenuItems(item.children, pathname)
    };
  }
  return {
    key: item.code,
    label: getMenuItemPath(item, pathname)
  };
};
var getNavMenuItems = function getNavMenuItems(list, pathname) {
  if (!list) return [];
  var menu = list.filter(function (item) {
    return item.name && !item.hideInMenu;
  }).map(function (item) {
    return getSubMenuOrItem(item, pathname);
  }).filter(function (item) {
    return item;
  });
  return menu;
};
// EXTERNAL MODULE: ./node_modules/antd/es/menu/index.js + 11 modules
var menu = __webpack_require__(68508);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
;// CONCATENATED MODULE: ./src/core/base/SliderMenu/BaseMenu.tsx


var _excluded = ["collapsed", "flatMenuKeys", "menuList", "location", "openKeys", "onOpenChange"];




var BaseMenu = function BaseMenu(props) {
  var collapsed = props.collapsed,
    flatMenuKeys = props.flatMenuKeys,
    _props$menuList = props.menuList,
    menuList = _props$menuList === void 0 ? [] : _props$menuList,
    pathname = props.location.pathname,
    openKeys = props.openKeys,
    onOpenChange = props.onOpenChange,
    restProps = objectWithoutProperties_default()(props, _excluded);
  var getNavMenuItems = (0,react.useCallback)(function (list) {
    if (!list) return [];
    return list.filter(function (item) {
      return item.path !== '/404';
    }).filter(function (item) {
      return item.upperId === '1';
    }).filter(function (item) {
      return item.name && !item.hideInMenu;
    }).map(function (item) {
      return getSubMenuOrItem(item, pathname);
    }).filter(function (item) {
      return item;
    });
  }, [getSubMenuOrItem]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(menu/* default */.Z, objectSpread2_default()(objectSpread2_default()({
    inlineIndent: 8,
    selectedKeys: openKeys,
    onOpenChange: onOpenChange
  }, restProps), {}, {
    openKeys: openKeys,
    items: getNavMenuItems(menuList)
  }), "Menu");
};
/* harmony default export */ var SliderMenu_BaseMenu = (BaseMenu);
// EXTERNAL MODULE: ./src/utils/menu.tsx
var utils_menu = __webpack_require__(42215);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var esm_objectSpread2 = __webpack_require__(1413);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons-svg/es/asn/SwapOutlined.js
var asn_SwapOutlined = __webpack_require__(39055);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/components/AntdIcon.js + 5 modules
var AntdIcon = __webpack_require__(91146);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/icons/SwapOutlined.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY



var SwapOutlined = function SwapOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.Z, (0,esm_objectSpread2/* default */.Z)((0,esm_objectSpread2/* default */.Z)({}, props), {}, {
    ref: ref,
    icon: asn_SwapOutlined/* default */.Z
  }));
};
SwapOutlined.displayName = 'SwapOutlined';
/* harmony default export */ var icons_SwapOutlined = (/*#__PURE__*/react.forwardRef(SwapOutlined));
// EXTERNAL MODULE: ./node_modules/antd/es/layout/layout.js + 2 modules
var layout = __webpack_require__(84321);
// EXTERNAL MODULE: ./node_modules/antd/es/layout/Sider.js + 3 modules
var Sider = __webpack_require__(10130);
;// CONCATENATED MODULE: ./node_modules/antd/es/layout/index.js


const Layout = layout/* default */.ZP;
Layout.Header = layout/* Header */.h4;
Layout.Footer = layout/* Footer */.$_;
Layout.Content = layout/* Content */.VY;
Layout.Sider = Sider/* default */.Z;
/* harmony default export */ var es_layout = (Layout);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(94184);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/antd/es/list/index.js + 2 modules
var list = __webpack_require__(51158);
// EXTERNAL MODULE: ./node_modules/antd/es/popover/index.js
var popover = __webpack_require__(55241);
;// CONCATENATED MODULE: ./src/core/base/CustomMenu/index.less?modules
// extracted by mini-css-extract-plugin
/* harmony default export */ var CustomMenumodules = ({"background-hover":"background-hover___hYZEd","text-gradient":"text-gradient___dBAcl","text-overflow":"text-overflow___r9UUh","flex":"flex___KAPyU","row":"row___icPy_","column":"column___kKyAb","row-reverse":"row-reverse___opvy9","row-center":"row-center___sLTaR","row-between":"row-between___djs77","row-around":"row-around___WXLXo","row-end":"row-end___JPTFY","column-reverse":"column-reverse___OT_Fd","column-center":"column-center___jcPr8","column-end":"column-end___wtpGh","BaseTable":"BaseTable___VFozm","BaseTable_header":"BaseTable_header___Np_uo","BaseTable_header-row":"BaseTable_header-row___vc7sT","BaseTable_header-cell":"BaseTable_header-cell___qdMsh","noShadom":"noShadom___F8Ngm","ant-legacy-form":"ant-legacy-form___PxiJH","ant-legacy-form-item-label":"ant-legacy-form-item-label___FjVVv","detailFundTable":"detailFundTable___djprH","ant-table":"ant-table___zbhUf","ant-table-placeholder":"ant-table-placeholder___CItJh","fundProductModal":"fundProductModal___oikhn","fundProductDetail":"fundProductDetail____cEPP","ant-table-body":"ant-table-body___ljdxV","monthSumTable":"monthSumTable___nCmou","fundModalTable":"fundModalTable___kWzoP","ant-tooltip-inner":"ant-tooltip-inner___JBKPJ","link":"link___xRczJ","sider":"sider___ZucXI","swap":"swap___G2kID","toggle":"toggle___CbuUn","overview":"overview___rhXHr","subMenu":"subMenu___eUmhl","title":"title___bycMh","divider":"divider___a6ikh","menuItem":"menuItem___iQXNq","thirdMenu":"thirdMenu___E5r0_","selected":"selected___UtWYF","unselected":"unselected___ddocY"});
;// CONCATENATED MODULE: ./src/core/base/CustomMenu/components/MenuItem.tsx


function MenuItem(props) {
  var children = props.children,
    className = props.className,
    onClick = props.onClick;
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    className: className,
    onClick: onClick,
    children: children
  });
}
;// CONCATENATED MODULE: ./src/core/base/CustomMenu/components/SubMenu.tsx





var SubMenu = function SubMenu(props) {
  var title = props.title,
    className = props.className,
    children = props.children,
    path = props.path,
    history = props.history,
    type = props.type;
  var handleClick = (0,react.useCallback)(function () {
    if (path) {
      history.push(path);
    }
  }, []);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: className,
    style: {
      marginTop: type === '1' ? 0 : 32
    },
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: CustomMenumodules.title,
      onClick: handleClick,
      style: {
        cursor: 'pointer'
      },
      children: [title, /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: CustomMenumodules.divider
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: CustomMenumodules.content,
      children: children
    })]
  });
};
/* harmony default export */ var components_SubMenu = ((0,_umi_production_exports.withRouter)(SubMenu));
;// CONCATENATED MODULE: ./src/core/base/CustomMenu/components/BaseMenu.tsx



var BaseMenu_excluded = ["collapsed", "flatMenuKeys", "menuList", "location", "openKeys"];










var modifyClassForElement = function modifyClassForElement() {
  var selectors = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var curClass = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var method = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'add';
  var dom = document.querySelector(selectors);
  var className = dom.className || '';
  var classList = className.split(' ');
  if (method === 'add' && !classList.includes(curClass)) {
    classList.push(curClass);
  } else {
    classList = classList.filter(function (item) {
      return item !== curClass;
    });
  }
  var finalClass = classList.reduce(function (total, next) {
    return total + ' ' + next;
  });
  dom.className = finalClass;
};
var getSelectedMenuKeys = function getSelectedMenuKeys(_ref) {
  var pathname = _ref.pathname,
    flatMenuKeys = _ref.flatMenuKeys,
    openKeys = _ref.openKeys;
  var keys = (0,utils_menu/* urlToList */.Wh)(pathname).map(function (itemPath) {
    return (0,utils_menu/* getMenuMatches */.N0)(flatMenuKeys, itemPath).pop();
  });

  // if pathname can't match, use the nearest parent's key
  var selectedKeys = keys.filter(function (key) {
    return key;
  });
  if (!selectedKeys.length && openKeys) {
    selectedKeys = [openKeys[openKeys.length - 1]];
  }
  return selectedKeys;
};
var showContentMask = function showContentMask(e) {
  e.stopPropagation();
  e.preventDefault();
  modifyClassForElement('.core-base-tags-nav-index-tabs', '.core-base-tags-nav-index-showMask', 'add');
};
var hideContentMask = function hideContentMask(e) {
  e.stopPropagation();
  e.preventDefault();
  modifyClassForElement('.core-base-tags-nav-index-tabs', '.core-base-tags-nav-index-showMask', 'remove');
};
var getSelectedClass = function getSelectedClass() {
  var curPath = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var selectedPaths = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var theme = (0,_umi_production_exports.getDvaApp)()._store.getState().global.theme;
  var unselectedStyles = theme === 'light' ? CustomMenumodules.unselected : '';
  var selectedStyles = theme === 'light' ? CustomMenumodules.selected : '';
  var _selectedPaths = slicedToArray_default()(selectedPaths, 1),
    firstPath = _selectedPaths[0];
  if (!curPath === !firstPath) {
    return selectedStyles;
  }
  if (curPath instanceof Array) {
    var flag = selectedPaths.some(function (path) {
      return curPath.some(function (otherPath) {
        return path === otherPath.path;
      });
    });
    return flag ? selectedStyles : unselectedStyles;
  }
  return '';
};
var BaseMenu_BaseMenu = function BaseMenu(props) {
  var collapsed = props.collapsed,
    flatMenuKeys = props.flatMenuKeys,
    _props$menuList = props.menuList,
    menuList = _props$menuList === void 0 ? [] : _props$menuList,
    pathname = props.location.pathname,
    _props$openKeys = props.openKeys,
    openKeys = _props$openKeys === void 0 ? [] : _props$openKeys,
    restProps = objectWithoutProperties_default()(props, BaseMenu_excluded);
  var selectedKeys = getSelectedMenuKeys({
    pathname: pathname,
    flatMenuKeys: flatMenuKeys,
    openKeys: openKeys
  });
  var getListItem = function getListItem(infos, className) {
    var hasLink = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    return /*#__PURE__*/(0,jsx_runtime.jsxs)(list/* default.Item */.ZP.Item, {
      className: className,
      children: [getImage((infos === null || infos === void 0 ? void 0 : infos.code) || ''), hasLink ? getMenuItemPath(infos, pathname) : infos === null || infos === void 0 ? void 0 : infos.name]
    }, "list-item-".concat(infos === null || infos === void 0 ? void 0 : infos.path));
  };
  var getMenuItem = function getMenuItem(item) {
    var selectedClass = getSelectedClass(item === null || item === void 0 ? void 0 : item.path, selectedKeys);
    return getListItem(item, selectedClass, true);
  };

  // \u83B7\u53D6 subMenu || menuItem
  var getSubMenu = function getSubMenu(infos) {
    var theme = (0,_umi_production_exports.getDvaApp)()._store.getState().global.theme;
    var unselectedStyles = theme === 'light' ? CustomMenumodules.unselected : '';
    var selectedStyles = theme === 'light' ? CustomMenumodules.selected : '';
    var children = infos.children;
    var flMenuClass = ''; // \u4E00\u7EA7\u83DC\u5355\u6837\u5F0F

    var content = children === null || children === void 0 ? void 0 : children.map(function (item) {
      if (item.children && children.some(function (child) {
        return child === null || child === void 0 ? void 0 : child.name;
      })) {
        var _item$children;
        return /*#__PURE__*/(0,jsx_runtime.jsx)(components_SubMenu, {
          className: CustomMenumodules.subMenu,
          path: item.path,
          title: item.name,
          children: item === null || item === void 0 ? void 0 : (_item$children = item.children) === null || _item$children === void 0 ? void 0 : _item$children.map(function (itemChild) {
            var subMenuClass = getSelectedClass(itemChild === null || itemChild === void 0 ? void 0 : itemChild.path, selectedKeys);
            if (!subMenuClass.includes(selectedStyles)) {
              flMenuClass = unselectedStyles;
            }
            return /*#__PURE__*/(0,jsx_runtime.jsx)(MenuItem, {
              className: "".concat(CustomMenumodules.menuItem, " ").concat(CustomMenumodules.subMenuClass, " ").concat(CustomMenumodules.thirdMenu),
              children: getMenuItemPath(itemChild, pathname)
            }, itemChild.path || itemChild.name);
          })
        }, item.path || item.name);
      }
      //  \u4E8C\u7EA7\u83DC\u5355
      return /*#__PURE__*/(0,jsx_runtime.jsx)(components_SubMenu, {
        className: CustomMenumodules.subMenu,
        path: item.path,
        title: item.name
      }, item.path || item.name);
    });
    var arr = new Array(3).fill(1);
    var contentWrapper = /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      onMouseOver: showContentMask,
      onMouseOut: hideContentMask,
      className: CustomMenumodules.overview,
      children: arr.map(function (_, ind) {
        return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          children: handleSubMenu(content, ind + 1 === 3 ? 0 : ind + 1).map(function (item, index) {
            if (index === 0) {
              return /*#__PURE__*/react.cloneElement(item, {
                type: '1'
              });
            }
            return item;
          })
        }, ind);
      })
    });
    // \u4E00\u7EA7\u83DC\u5355
    var subMenu = /*#__PURE__*/(0,jsx_runtime.jsx)(popover/* default */.Z, {
      arrow: false,
      placement: "right",
      getPopupContainer: function getPopupContainer() {
        return document.getElementsByClassName('core-base-tags-nav-index-tabs')[0];
      },
      content: contentWrapper,
      children: getListItem(infos, unselectedStyles)
    }, infos.path || infos.name);
    return subMenu;
  };
  var handleSubMenu = function handleSubMenu(content, count) {
    return content.filter(function (_item, ind) {
      return (ind + 1) % 3 === count;
    });
  };
  var getSubMenuOrItem = function getSubMenuOrItem(item) {
    var children = item.children;
    return children ? getSubMenu(item) : getMenuItem(item);
  };
  var getNavMenuItems = (0,react.useCallback)(function (list) {
    if (!list) return [];
    var menu = list.filter(function (item) {
      return item.path !== '/404';
    }).filter(function (item) {
      return item.upperId === '1';
    }).filter(function (item) {
      return item.name && !item.hideInMenu;
    }).map(function (item) {
      return getSubMenuOrItem(item);
    }).filter(function (item) {
      return item;
    });
    var contentWrapper = /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      onMouseOver: showContentMask,
      onMouseOut: hideContentMask,
      children: menu
    });
    return contentWrapper;
  }, [getSubMenuOrItem]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(list/* default */.ZP, objectSpread2_default()(objectSpread2_default()({
    className: CustomMenumodules.menuList
  }, restProps), {}, {
    children: getNavMenuItems(menuList)
  }), "Menu");
};
/* harmony default export */ var components_BaseMenu = (BaseMenu_BaseMenu);
;// CONCATENATED MODULE: ./src/core/base/CustomMenu/index.tsx













var CustomMenu_Sider = es_layout.Sider;
var SiderMenuWrapper = function SiderMenuWrapper(props) {
  var theme = props.theme,
    menuList = props.menuList,
    collapsed = props.collapsed,
    pathname = props.location.pathname,
    sliderMenuState = props.sliderMenuState,
    dispatch = props.dispatch,
    ref0 = props.ref0,
    color = props.color;
  var _useState = (0,react.useState)((0,utils_menu/* getSubMenus */.Xc)(pathname, menuList)),
    _useState2 = slicedToArray_default()(_useState, 2),
    openKeys = _useState2[0],
    setOpenKeys = _useState2[1];
  (0,react.useEffect)(function () {
    setOpenKeys((0,utils_menu/* getSubMenus */.Xc)(pathname, menuList));
  }, [menuList, pathname]);
  var isMainMenu = function isMainMenu(key) {
    return !!(menuList !== null && menuList !== void 0 && menuList.some(function (item) {
      return item.code === key;
    }));
  };
  var handleOpenChange = function handleOpenChange(openKeys) {
    // const moreThanOne = openKeys.filter((openKey) => isMainMenu(openKey)).length > 1;
    setOpenKeys(openKeys);
  };
  var flatMenuKeys = (0,react.useMemo)(function () {
    return (0,utils_menu/* getFlatMenuKeys */.R3)(menuList);
  }, [menuList]);
  var defaultProps = collapsed ? {} : {
    openKeys: openKeys
  };
  var siderClassName = classnames_default()(CustomMenumodules.sider, defineProperty_default()({}, CustomMenumodules.light, theme === 'light'));
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    ref: ref0,
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)(CustomMenu_Sider, {
      theme: theme,
      trigger: null,
      collapsible: true,
      collapsed: collapsed,
      collapsedWidth: 0,
      width: 180,
      className: siderClassName,
      children: [sliderMenuState === '2' ? /*#__PURE__*/(0,jsx_runtime.jsx)(SliderMenu_BaseMenu, objectSpread2_default()(objectSpread2_default()({}, defaultProps), {}, {
        mode: "inline",
        location: props.location,
        menuList: menuList,
        collapsed: collapsed,
        flatMenuKeys: flatMenuKeys,
        openKeys: openKeys,
        onOpenChange: handleOpenChange
      })) : /*#__PURE__*/(0,jsx_runtime.jsx)(components_BaseMenu, objectSpread2_default()(objectSpread2_default()({}, defaultProps), {}, {
        mode: "inline",
        location: props.location,
        menuList: menuList,
        collapsed: collapsed,
        flatMenuKeys: flatMenuKeys
      })), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: CustomMenumodules.swap,
        style: {
          background: "rgba(".concat(color.r, ",").concat(color.g, ",").concat(color.b, ",").concat(color.a, ")")
        },
        onClick: function onClick() {
          dispatch({
            type: 'global/changeSliderMenuState',
            sliderMenuState: sliderMenuState === '1' ? '2' : '1'
          });
        },
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(icons_SwapOutlined, {})
      })]
    })
  });
};
/* harmony default export */ var CustomMenu = (SiderMenuWrapper);
// EXTERNAL MODULE: ./node_modules/antd/es/row/index.js
var row = __webpack_require__(71230);
// EXTERNAL MODULE: ./node_modules/antd/es/col/index.js
var col = __webpack_require__(15746);
// EXTERNAL MODULE: ./node_modules/antd/es/input/index.js + 5 modules
var input = __webpack_require__(75008);
// EXTERNAL MODULE: ./node_modules/antd/es/switch/index.js + 2 modules
var es_switch = __webpack_require__(72269);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/FullscreenExitOutlined.js
// This icon file is generated automatically.
var FullscreenExitOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M391 240.9c-.8-6.6-8.9-9.4-13.6-4.7l-43.7 43.7L200 146.3a8.03 8.03 0 00-11.3 0l-42.4 42.3a8.03 8.03 0 000 11.3L280 333.6l-43.9 43.9a8.01 8.01 0 004.7 13.6L401 410c5.1.6 9.5-3.7 8.9-8.9L391 240.9zm10.1 373.2L240.8 633c-6.6.8-9.4 8.9-4.7 13.6l43.9 43.9L146.3 824a8.03 8.03 0 000 11.3l42.4 42.3c3.1 3.1 8.2 3.1 11.3 0L333.7 744l43.7 43.7A8.01 8.01 0 00391 783l18.9-160.1c.6-5.1-3.7-9.4-8.8-8.8zm221.8-204.2L783.2 391c6.6-.8 9.4-8.9 4.7-13.6L744 333.6 877.7 200c3.1-3.1 3.1-8.2 0-11.3l-42.4-42.3a8.03 8.03 0 00-11.3 0L690.3 279.9l-43.7-43.7a8.01 8.01 0 00-13.6 4.7L614.1 401c-.6 5.2 3.7 9.5 8.8 8.9zM744 690.4l43.9-43.9a8.01 8.01 0 00-4.7-13.6L623 614c-5.1-.6-9.5 3.7-8.9 8.9L633 783.1c.8 6.6 8.9 9.4 13.6 4.7l43.7-43.7L824 877.7c3.1 3.1 8.2 3.1 11.3 0l42.4-42.3c3.1-3.1 3.1-8.2 0-11.3L744 690.4z" } }] }, "name": "fullscreen-exit", "theme": "outlined" };
/* harmony default export */ var asn_FullscreenExitOutlined = (FullscreenExitOutlined);

;// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/icons/FullscreenExitOutlined.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY



var FullscreenExitOutlined_FullscreenExitOutlined = function FullscreenExitOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.Z, (0,esm_objectSpread2/* default */.Z)((0,esm_objectSpread2/* default */.Z)({}, props), {}, {
    ref: ref,
    icon: asn_FullscreenExitOutlined
  }));
};
FullscreenExitOutlined_FullscreenExitOutlined.displayName = 'FullscreenExitOutlined';
/* harmony default export */ var icons_FullscreenExitOutlined = (/*#__PURE__*/react.forwardRef(FullscreenExitOutlined_FullscreenExitOutlined));
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/FullscreenOutlined.js
// This icon file is generated automatically.
var FullscreenOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M290 236.4l43.9-43.9a8.01 8.01 0 00-4.7-13.6L169 160c-5.1-.6-9.5 3.7-8.9 8.9L179 329.1c.8 6.6 8.9 9.4 13.6 4.7l43.7-43.7L370 423.7c3.1 3.1 8.2 3.1 11.3 0l42.4-42.3c3.1-3.1 3.1-8.2 0-11.3L290 236.4zm352.7 187.3c3.1 3.1 8.2 3.1 11.3 0l133.7-133.6 43.7 43.7a8.01 8.01 0 0013.6-4.7L863.9 169c.6-5.1-3.7-9.5-8.9-8.9L694.8 179c-6.6.8-9.4 8.9-4.7 13.6l43.9 43.9L600.3 370a8.03 8.03 0 000 11.3l42.4 42.4zM845 694.9c-.8-6.6-8.9-9.4-13.6-4.7l-43.7 43.7L654 600.3a8.03 8.03 0 00-11.3 0l-42.4 42.3a8.03 8.03 0 000 11.3L734 787.6l-43.9 43.9a8.01 8.01 0 004.7 13.6L855 864c5.1.6 9.5-3.7 8.9-8.9L845 694.9zm-463.7-94.6a8.03 8.03 0 00-11.3 0L236.3 733.9l-43.7-43.7a8.01 8.01 0 00-13.6 4.7L160.1 855c-.6 5.1 3.7 9.5 8.9 8.9L329.2 845c6.6-.8 9.4-8.9 4.7-13.6L290 787.6 423.7 654c3.1-3.1 3.1-8.2 0-11.3l-42.4-42.4z" } }] }, "name": "fullscreen", "theme": "outlined" };
/* harmony default export */ var asn_FullscreenOutlined = (FullscreenOutlined);

;// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/icons/FullscreenOutlined.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY



var FullscreenOutlined_FullscreenOutlined = function FullscreenOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.Z, (0,esm_objectSpread2/* default */.Z)((0,esm_objectSpread2/* default */.Z)({}, props), {}, {
    ref: ref,
    icon: asn_FullscreenOutlined
  }));
};
FullscreenOutlined_FullscreenOutlined.displayName = 'FullscreenOutlined';
/* harmony default export */ var icons_FullscreenOutlined = (/*#__PURE__*/react.forwardRef(FullscreenOutlined_FullscreenOutlined));
// EXTERNAL MODULE: ./node_modules/antd/es/tooltip/index.js + 3 modules
var es_tooltip = __webpack_require__(83062);
// EXTERNAL MODULE: ./src/core/helpers/index.tsx
var helpers = __webpack_require__(91694);
;// CONCATENATED MODULE: ./src/core/base/FullScreen/index.tsx






var FullScreen = function FullScreen() {
  var showFullScreenBtn = window.navigator.userAgent.indexOf('MSIE') < 0;
  var _useState = (0,react.useState)(false),
    _useState2 = slicedToArray_default()(_useState, 2),
    fullScreen = _useState2[0],
    setFullScreen = _useState2[1];
  var main = document.body;
  (0,react.useEffect)(function () {
    var callback = function callback() {
      var isFullScreen = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.fullScreen || document.mozFullScreen || document.webkitIsFullScreen;
      setFullScreen(!!isFullScreen);
    };
    (0,helpers/* addEvent */.vP)(document, 'fullscreenchange', callback);
    (0,helpers/* addEvent */.vP)(document, 'mozfullscreenchange', callback);
    (0,helpers/* addEvent */.vP)(document, 'webkitfullscreenchange', callback);
    (0,helpers/* addEvent */.vP)(document, 'msfullscreenchange', callback);
  }, []);
  var handleFullScreen = function handleFullScreen() {
    if (fullScreen) {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    } else {
      if (main.requestFullscreen) {
        main.requestFullscreen();
      } else if (main.mozRequestFullScreen) {
        main.mozRequestFullScreen();
      } else if (main.webkitRequestFullScreen) {
        main.webkitRequestFullScreen();
      } else if (main.msRequestFullscreen) {
        main.msRequestFullscreen();
      }
    }
  };
  var fullScreenStyle = {
    fontSize: 16,
    margin: '0 12px',
    cursor: 'pointer'
  };
  if (!showFullScreenBtn) return null;
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    style: fullScreenStyle,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(es_tooltip/* default */.Z, {
      placement: "bottom",
      title: fullScreen ? '\u9000\u51FA\u5168\u5C4F' : '\u5168\u5C4F',
      children: fullScreen ? /*#__PURE__*/(0,jsx_runtime.jsx)(icons_FullscreenExitOutlined, {
        onClick: handleFullScreen
      }) : /*#__PURE__*/(0,jsx_runtime.jsx)(icons_FullscreenOutlined, {
        onClick: handleFullScreen
      })
    })
  });
};
/* harmony default export */ var base_FullScreen = (FullScreen);
;// CONCATENATED MODULE: ./src/core/base/GlobalHeader/index.less?modules
// extracted by mini-css-extract-plugin
/* harmony default export */ var GlobalHeadermodules = ({"index":"index___CTI2b","container":"container___v6rQJ","menu":"menu___WwK63","right":"right___t8s0u","action":"action___vUILh","search":"search___J0OYl","account":"account___Qc8Wi","avatar":"avatar___Vk0vh","dark":"dark___vkr9C","name":"name___JU7UD","core-base-logo":"core-base-logo___GKkY9","core-base-title":"core-base-title___mXdnY"});
// EXTERNAL MODULE: ./node_modules/antd/es/space/index.js + 1 modules
var space = __webpack_require__(26713);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/LogoutOutlined.js
// This icon file is generated automatically.
var LogoutOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M868 732h-70.3c-4.8 0-9.3 2.1-12.3 5.8-7 8.5-14.5 16.7-22.4 24.5a353.84 353.84 0 01-112.7 75.9A352.8 352.8 0 01512.4 866c-47.9 0-94.3-9.4-137.9-27.8a353.84 353.84 0 01-112.7-75.9 353.28 353.28 0 01-76-112.5C167.3 606.2 158 559.9 158 512s9.4-94.2 27.8-137.8c17.8-42.1 43.4-80 76-112.5s70.5-58.1 112.7-75.9c43.6-18.4 90-27.8 137.9-27.8 47.9 0 94.3 9.3 137.9 27.8 42.2 17.8 80.1 43.4 112.7 75.9 7.9 7.9 15.3 16.1 22.4 24.5 3 3.7 7.6 5.8 12.3 5.8H868c6.3 0 10.2-7 6.7-12.3C798 160.5 663.8 81.6 511.3 82 271.7 82.6 79.6 277.1 82 516.4 84.4 751.9 276.2 942 512.4 942c152.1 0 285.7-78.8 362.3-197.7 3.4-5.3-.4-12.3-6.7-12.3zm88.9-226.3L815 393.7c-5.3-4.2-13-.4-13 6.3v76H488c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h314v76c0 6.7 7.8 10.5 13 6.3l141.9-112a8 8 0 000-12.6z" } }] }, "name": "logout", "theme": "outlined" };
/* harmony default export */ var asn_LogoutOutlined = (LogoutOutlined);

;// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/icons/LogoutOutlined.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY



var LogoutOutlined_LogoutOutlined = function LogoutOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.Z, (0,esm_objectSpread2/* default */.Z)((0,esm_objectSpread2/* default */.Z)({}, props), {}, {
    ref: ref,
    icon: asn_LogoutOutlined
  }));
};
LogoutOutlined_LogoutOutlined.displayName = 'LogoutOutlined';
/* harmony default export */ var icons_LogoutOutlined = (/*#__PURE__*/react.forwardRef(LogoutOutlined_LogoutOutlined));
// EXTERNAL MODULE: ./node_modules/antd/es/avatar/index.js + 4 modules
var avatar = __webpack_require__(98293);
// EXTERNAL MODULE: ./node_modules/antd/es/dropdown/index.js + 9 modules
var dropdown = __webpack_require__(18108);
;// CONCATENATED MODULE: ./src/core/base/GlobalHeader/RightContent/HeaderDropdown.tsx


var HeaderDropdown_excluded = ["overlayClassName"];





var HeaderDropdown = function HeaderDropdown(_ref) {
  var cls = _ref.overlayClassName,
    restProps = objectWithoutProperties_default()(_ref, HeaderDropdown_excluded);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(dropdown/* default */.Z, objectSpread2_default()({
      overlayClassName: classnames_default()(GlobalHeadermodules.container, cls)
    }, restProps))
  });
};
/* harmony default export */ var RightContent_HeaderDropdown = (HeaderDropdown);
;// CONCATENATED MODULE: ./src/core/base/GlobalHeader/RightContent/AvatarDropdown.tsx







var AvatarDropdown = function AvatarDropdown(props) {
  var userInfo = props.userInfo,
    dispatch = props.dispatch;
  var handleLogout = function handleLogout() {
    dispatch({
      type: 'login/logout'
    });
  };
  var items = [{
    key: 'logout',
    label: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      onClick: handleLogout,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(icons_LogoutOutlined, {}), "\\u9000\\u51FA\\u767B\\u5F55"]
    }),
    className: GlobalHeadermodules.menu
  }];
  return /*#__PURE__*/(0,jsx_runtime.jsx)(RightContent_HeaderDropdown, {
    menu: {
      items: items,
      selectedKeys: ['logout']
    },
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
      className: "".concat(GlobalHeadermodules.action, " ").concat(GlobalHeadermodules.account),
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(avatar/* default */.C, {
        size: "small",
        className: GlobalHeadermodules.avatar,
        alt: "avatar"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
        className: "".concat(GlobalHeadermodules.name, " anticon"),
        children: userInfo === null || userInfo === void 0 ? void 0 : userInfo.username
      })]
    })
  });
};
/* harmony default export */ var RightContent_AvatarDropdown = ((0,_umi_production_exports.connect)(function (_ref) {
  var login = _ref.login,
    global = _ref.global;
  return {
    token: login.token,
    userInfo: global.userInfo
  };
})((0,_umi_production_exports.withRouter)(AvatarDropdown)));
;// CONCATENATED MODULE: ./src/core/base/GlobalHeader/RightContent/index.tsx





var GlobalHeaderRight = function GlobalHeaderRight(props) {
  var userInfo = props.userInfo;
  if (!Object.keys(userInfo)) return null;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(space/* default */.Z, {
    className: "".concat(GlobalHeadermodules.right, " ").concat(GlobalHeadermodules.dark),
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(RightContent_AvatarDropdown, {})
  });
};
/* harmony default export */ var RightContent = ((0,_umi_production_exports.connect)(function (_ref) {
  var global = _ref.global,
    login = _ref.login;
  return {
    token: login.token,
    userInfo: global.userInfo
  };
})(GlobalHeaderRight));
;// CONCATENATED MODULE: ./src/core/base/GlobalHeader/index.tsx






var Header = es_layout.Header;
var GlobalHeader = function GlobalHeader(props) {
  var children = props.children,
    ColorPicker = props.ColorPicker,
    dispatch = props.dispatch,
    theme = props.theme,
    ref1 = props.ref1,
    ref2 = props.ref2,
    ref3 = props.ref3;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Header, {
    style: {
      background: 'transparent',
      paddingInline: 0,
      position: 'relative',
      zIndex: 99,
      backgroundColor: theme == 'dark' ? 'black' : '#fff',
      marginBottom: 10
    },
    className: "core-base-tags-nav-index-tabs",
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(row/* default */.Z, {
      style: {
        width: '100%',
        height: '100%'
      },
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)(col/* default */.Z, {
        span: 24,
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(row/* default */.Z, {
          justify: "center",
          align: "middle",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
            span: 2,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
              className: GlobalHeadermodules["core-base-title"],
              children: "\\u540E\\u53F0\\u7BA1\\u7406"
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
            span: 13,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              ref: ref1,
              children: children
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
            span: 2,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(input/* default */.Z, {
              type: "search",
              placeholder: "\\u641C\\u7D22....",
              style: {
                width: '90%'
              }
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
            ref: ref2,
            span: 1,
            style: {
              display: 'grid',
              placeContent: 'center'
            },
            children: ColorPicker
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
            ref: ref3,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(es_switch/* default */.Z, {
              unCheckedChildren: /*#__PURE__*/(0,jsx_runtime.jsx)("svg", {
                viewBox: "0 0 1024 1024",
                xmlns: "http://www.w3.org/2000/svg",
                "data-v-ea893728": "",
                children: /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
                  fill: "currentColor",
                  d: "M512 704a192 192 0 1 0 0-384 192 192 0 0 0 0 384zm0 64a256 256 0 1 1 0-512 256 256 0 0 1 0 512zm0-704a32 32 0 0 1 32 32v64a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32zm0 768a32 32 0 0 1 32 32v64a32 32 0 1 1-64 0v-64a32 32 0 0 1 32-32zM195.2 195.2a32 32 0 0 1 45.248 0l45.248 45.248a32 32 0 1 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm543.104 543.104a32 32 0 0 1 45.248 0l45.248 45.248a32 32 0 0 1-45.248 45.248l-45.248-45.248a32 32 0 0 1 0-45.248zM64 512a32 32 0 0 1 32-32h64a32 32 0 0 1 0 64H96a32 32 0 0 1-32-32zm768 0a32 32 0 0 1 32-32h64a32 32 0 1 1 0 64h-64a32 32 0 0 1-32-32zM195.2 828.8a32 32 0 0 1 0-45.248l45.248-45.248a32 32 0 0 1 45.248 45.248L240.448 828.8a32 32 0 0 1-45.248 0zm543.104-543.104a32 32 0 0 1 0-45.248l45.248-45.248a32 32 0 0 1 45.248 45.248l-45.248 45.248a32 32 0 0 1-45.248 0z"
                })
              }),
              checkedChildren: /*#__PURE__*/(0,jsx_runtime.jsx)("svg", {
                viewBox: "0 0 1024 1024",
                xmlns: "http://www.w3.org/2000/svg",
                "data-v-ea893728": "",
                children: /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
                  fill: "currentColor",
                  d: "M240.448 240.448a384 384 0 1 0 559.424 525.696 448 448 0 0 1-542.016-542.08 390.592 390.592 0 0 0-17.408 16.384zm181.056 362.048a384 384 0 0 0 525.632 16.384A448 448 0 1 1 405.056 76.8a384 384 0 0 0 16.448 525.696z"
                })
              }),
              checked: theme === 'dark' ? true : false,
              onChange: function onChange(checked) {
                dispatch({
                  type: 'global/changeTheme',
                  theme: checked ? 'dark' : 'light'
                });
              }
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
            span: 1,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(base_FullScreen, {})
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
            span: 2,
            style: {
              display: 'grid'
            },
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(RightContent, {})
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(row/* default */.Z, {})]
      })
    })
  });
};
/* harmony default export */ var base_GlobalHeader = (GlobalHeader);
// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__(19632);
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);
// EXTERNAL MODULE: ./src/utils/storage.ts + 1 modules
var storage = __webpack_require__(57204);
// EXTERNAL MODULE: ./node_modules/lodash/lodash.js
var lodash = __webpack_require__(96486);
var lodash_default = /*#__PURE__*/__webpack_require__.n(lodash);
// EXTERNAL MODULE: ./node_modules/path-to-regexp/index.js
var path_to_regexp = __webpack_require__(14779);
var path_to_regexp_default = /*#__PURE__*/__webpack_require__.n(path_to_regexp);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/HomeOutlined.js
// This icon file is generated automatically.
var HomeOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 00-44.4 0L77.5 505a63.9 63.9 0 00-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0018.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z" } }] }, "name": "home", "theme": "outlined" };
/* harmony default export */ var asn_HomeOutlined = (HomeOutlined);

;// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/icons/HomeOutlined.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY



var HomeOutlined_HomeOutlined = function HomeOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.Z, (0,esm_objectSpread2/* default */.Z)((0,esm_objectSpread2/* default */.Z)({}, props), {}, {
    ref: ref,
    icon: asn_HomeOutlined
  }));
};
HomeOutlined_HomeOutlined.displayName = 'HomeOutlined';
/* harmony default export */ var icons_HomeOutlined = (/*#__PURE__*/react.forwardRef(HomeOutlined_HomeOutlined));
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/MenuUnfoldOutlined.js
// This icon file is generated automatically.
var MenuUnfoldOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM142.4 642.1L298.7 519a8.84 8.84 0 000-13.9L142.4 381.9c-5.8-4.6-14.4-.5-14.4 6.9v246.3a8.9 8.9 0 0014.4 7z" } }] }, "name": "menu-unfold", "theme": "outlined" };
/* harmony default export */ var asn_MenuUnfoldOutlined = (MenuUnfoldOutlined);

;// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/icons/MenuUnfoldOutlined.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY



var MenuUnfoldOutlined_MenuUnfoldOutlined = function MenuUnfoldOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.Z, (0,esm_objectSpread2/* default */.Z)((0,esm_objectSpread2/* default */.Z)({}, props), {}, {
    ref: ref,
    icon: asn_MenuUnfoldOutlined
  }));
};
MenuUnfoldOutlined_MenuUnfoldOutlined.displayName = 'MenuUnfoldOutlined';
/* harmony default export */ var icons_MenuUnfoldOutlined = (/*#__PURE__*/react.forwardRef(MenuUnfoldOutlined_MenuUnfoldOutlined));
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/MenuFoldOutlined.js
// This icon file is generated automatically.
var MenuFoldOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM115.4 518.9L271.7 642c5.8 4.6 14.4.5 14.4-6.9V388.9c0-7.4-8.5-11.5-14.4-6.9L115.4 505.1a8.74 8.74 0 000 13.8z" } }] }, "name": "menu-fold", "theme": "outlined" };
/* harmony default export */ var asn_MenuFoldOutlined = (MenuFoldOutlined);

;// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/icons/MenuFoldOutlined.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY



var MenuFoldOutlined_MenuFoldOutlined = function MenuFoldOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.Z, (0,esm_objectSpread2/* default */.Z)((0,esm_objectSpread2/* default */.Z)({}, props), {}, {
    ref: ref,
    icon: asn_MenuFoldOutlined
  }));
};
MenuFoldOutlined_MenuFoldOutlined.displayName = 'MenuFoldOutlined';
/* harmony default export */ var icons_MenuFoldOutlined = (/*#__PURE__*/react.forwardRef(MenuFoldOutlined_MenuFoldOutlined));
// EXTERNAL MODULE: ./node_modules/antd/es/tabs/index.js + 29 modules
var es_tabs = __webpack_require__(68024);
// EXTERNAL MODULE: ./node_modules/@umijs/plugins/libs/dva.tsx + 41 modules
var dva = __webpack_require__(31384);
;// CONCATENATED MODULE: ./src/core/base/TagsNav/index.less?modules
// extracted by mini-css-extract-plugin
/* harmony default export */ var TagsNavmodules = ({"background-hover":"background-hover___VMSRd","text-gradient":"text-gradient___ewg7I","text-overflow":"text-overflow___NhXvP","flex":"flex___cejDQ","row":"row___jegul","column":"column___U4kGG","row-reverse":"row-reverse___qjTpQ","row-center":"row-center___zLxfZ","row-between":"row-between___uDhNl","row-around":"row-around___CIyd5","row-end":"row-end___ONnpI","column-reverse":"column-reverse___bEF68","column-center":"column-center___ijHrB","column-end":"column-end___K9pni","BaseTable":"BaseTable___Et_Ja","BaseTable_header":"BaseTable_header___lsjqb","BaseTable_header-row":"BaseTable_header-row___aLdo_","BaseTable_header-cell":"BaseTable_header-cell___UFL_h","noShadom":"noShadom___h6HmB","ant-legacy-form":"ant-legacy-form___y7sTZ","ant-legacy-form-item-label":"ant-legacy-form-item-label___DKIm5","detailFundTable":"detailFundTable___idiFk","ant-table":"ant-table___V2C_9","ant-table-placeholder":"ant-table-placeholder___vLKz7","fundProductModal":"fundProductModal___WwnLg","fundProductDetail":"fundProductDetail___SPFUb","ant-table-body":"ant-table-body___JE6lj","monthSumTable":"monthSumTable___H8Fvl","fundModalTable":"fundModalTable___SEIPf","ant-tooltip-inner":"ant-tooltip-inner___qYmtn","icon-home":"icon-home___TYJL5","tabs":"tabs___VyiGM","showMask":"showMask___m22HC"});
;// CONCATENATED MODULE: ./src/core/base/TagsNav/MenuTabs.tsx









var homePagePath = projectConfig/* default.homePage */.Z.homePage;
var closeType;
(function (closeType) {
  closeType["refresh"] = "refresh";
  closeType["closeOne"] = "closeOne";
  closeType["closeALl"] = "closeALl";
  closeType["closeOthers"] = "closeOthers";
})(closeType || (closeType = {}));
var MenuTabs = function MenuTabs(props) {
  var tabs = props.tabs,
    activeKey = props.activeKey,
    tabChildren = props.tabChildren,
    tabsProps = props.tabsProps,
    onRefresh = props.onRefresh,
    onSwitch = props.onSwitch,
    onRemove = props.onRemove,
    onRemoveAll = props.onRemoveAll,
    onRemoveOthers = props.onRemoveOthers,
    dispatch = props.dispatch,
    collapsed = props.collapsed;
  var handleTabEdit = function handleTabEdit(targetKey, action) {
    if (action === 'remove' && typeof targetKey === 'string') {
      onRemove(targetKey);
    }
  };
  var handleTabsMenuClick = function handleTabsMenuClick(tabKey, event) {
    var key = event.key;
    if (key === closeType.refresh) {
      onRefresh(tabKey);
    } else if (key === closeType.closeOne) {
      onRemove(tabKey);
    } else if (key === closeType.closeALl) {
      onRemoveAll(tabKey);
    } else if (key === closeType.closeOthers) {
      onRemoveOthers(tabKey);
    }
  };
  var getMenu = function getMenu(key, index) {
    return [{
      label: '\u5237\u65B0',
      disabled: key !== activeKey,
      key: closeType.refresh
    }, {
      label: '\u5173\u95ED\u5F53\u524D',
      disabled: index === 0,
      key: closeType.closeOne
    }, {
      label: '\u5173\u95ED\u6240\u6709',
      key: closeType.closeALl
    }, {
      label: '\u5173\u95ED\u5176\u4ED6',
      disabled: tabs.length === 1,
      key: closeType.closeOthers
    }];
  };
  var setTab = function setTab(tab, key, index) {
    return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      onContextMenu: function onContextMenu(event) {
        return event.preventDefault();
      },
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(dropdown/* default */.Z, {
        menu: {
          items: getMenu(key, index),
          onClick: function onClick(e) {
            return handleTabsMenuClick(key, e);
          }
        },
        trigger: ['contextMenu'],
        children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: classnames_default()(TagsNavmodules.tabTitle),
          children: key === homePagePath ? /*#__PURE__*/(0,jsx_runtime.jsx)(icons_HomeOutlined, {
            className: TagsNavmodules["icon-home"]
          }) : tab
        })
      })
    });
  };
  var handleMenuCollapse = function handleMenuCollapse() {
    dispatch({
      type: 'global/changeCollapsed',
      collapsed: !collapsed
    });
  };
  return /*#__PURE__*/(0,jsx_runtime.jsx)(es_tabs/* default */.Z, objectSpread2_default()({
    hideAdd: true,
    animated: false,
    type: "editable-card",
    className: TagsNavmodules.tabs,
    tabBarStyle: {
      margin: 0,
      height: 30,
      display: 'flex'
    },
    tabBarGutter: 0,
    activeKey: activeKey,
    onChange: onSwitch,
    onEdit: handleTabEdit,
    tabBarExtraContent: {
      left: collapsed ? /*#__PURE__*/(0,jsx_runtime.jsx)(icons_MenuUnfoldOutlined, {
        className: TagsNavmodules.icon,
        onClick: handleMenuCollapse,
        style: {
          padding: '0 10px'
        }
      }) : /*#__PURE__*/(0,jsx_runtime.jsx)(icons_MenuFoldOutlined, {
        className: TagsNavmodules.icon,
        onClick: handleMenuCollapse,
        style: {
          padding: '0 10px'
        }
      })
    },
    items: (tabs || []).map(function (item, index) {
      return objectSpread2_default()(objectSpread2_default()({}, item), {}, {
        tab: setTab(item.tab, item.key, index),
        label: setTab(item.tab, item.key, index),
        closable: index !== 0,
        className: item.key === activeKey && 'tab-tabpane-active' || '',
        children: tabChildren[item.key]
      });
    })
  }, tabsProps));
};
/* harmony default export */ var TagsNav_MenuTabs = ((0,dva/* connect */.$j)(function (_ref) {
  var global = _ref.global;
  return objectSpread2_default()({}, global);
})(MenuTabs));
;// CONCATENATED MODULE: ./src/core/base/TagsNav/index.tsx











function getMetaDataOfTab(pathname, breadcrumbNameMap) {
  return Object.values(breadcrumbNameMap).find(function (item) {
    return item.path && path_to_regexp_default()(item.path).test(pathname);
  });
}

/**
 * \u5982\u679C\u662F\u6839\u636E\u8DEF\u5F84\u6765\u663E\u793A\u6807\u7B7E\u9875 \u53EF\u52A8\u6001\u914D\u7F6E\u6807\u7B7E\u9875\u6807\u9898
 * @param metaData
 * @param location
 */
function setPathName(metaData, location) {
  if (!metaData) return 'Error';
  if (metaData.multiple) {
    var title = lodash_default().get(location, 'query.title') || lodash_default().get(location, 'state.title');
    return "".concat(metaData.name).concat(title ? "-".concat(title) : '');
  }
  return metaData.name;
}
function routeTo(targetTab) {
  var _targetTab$location;
  if (targetTab) _umi_production_exports.history.push((_targetTab$location = targetTab === null || targetTab === void 0 ? void 0 : targetTab.location) !== null && _targetTab$location !== void 0 ? _targetTab$location : '/');
}
function addTab(newTab, activeTabs) {
  // filter \u8FC7\u6EE4\u8DEF\u7531 \u4E3A '/' \u7684children, map \u6DFB\u52A0\u7B2C\u4E00\u4E2A tab\u4E0D\u53EF\u5220\u9664
  return [].concat(toConsumableArray_default()(activeTabs), [newTab]).map(function (item, index) {
    if (activeTabs.length === 0 && index === 0) {
      return objectSpread2_default()(objectSpread2_default()({}, item), {}, {
        closeable: false
      });
    }
    return objectSpread2_default()(objectSpread2_default()({}, item), {}, {
      closeable: true
    });
  });
}
var PageTabs = function PageTabs(props) {
  var _useState = (0,react.useState)({}),
    _useState2 = slicedToArray_default()(_useState, 2),
    tabChildren = _useState2[0],
    setTabChildren = _useState2[1];
  var _useState3 = (0,react.useState)(storage/* localStore.get */.WL.get('tabs') || []),
    _useState4 = slicedToArray_default()(_useState3, 2),
    tabs = _useState4[0],
    setTabs = _useState4[1];
  var location = (0,_umi_production_exports.useLocation)();
  var _activeKey = location.pathname;
  var _useState5 = (0,react.useState)(location.pathname),
    _useState6 = slicedToArray_default()(_useState5, 2),
    activeKey = _useState6[0],
    setActiveKey = _useState6[1];
  var children = props.children,
    breadcrumbNameMap = props.breadcrumbNameMap;
  (0,react.useEffect)(function () {
    window.closeTab = handleRemove;
    window.refreshTab = handleRefresh;
    window.tabChildren = tabChildren;
  });
  (0,react.useEffect)(function () {
    var metaData = getMetaDataOfTab(location.pathname, breadcrumbNameMap);
    var activeTitle = setPathName(metaData, location);
    if (!metaData) {
      var activeTab = tabs.find(function (tab) {
        return path_to_regexp_default()(tab.key).test(_activeKey);
      });
      if (!tabChildren[_activeKey]) {
        tabChildren[_activeKey] = children;
        setTabChildren(objectSpread2_default()({}, tabChildren));
      }
      if (!activeTab) {
        var newTag = {
          tab: activeTitle,
          key: _activeKey,
          location: location
        };
        var addedTabs = addTab(newTag, tabs);
        setTabs(addedTabs);
      }
      return;
    }

    // \u591A\u5F00
    if (metaData.multiple) {
      var activeTabIndex = lodash_default().findIndex(tabs, {
        key: _activeKey
      });
      if (!tabChildren[_activeKey]) {
        tabChildren[_activeKey] = children;
        setTabChildren(objectSpread2_default()({}, tabChildren));
      }
      if (activeTabIndex < 0) {
        var _newTag = {
          tab: activeTitle,
          key: _activeKey,
          location: location
        };
        var _addedTabs = addTab(_newTag, tabs);
        setTabs(_addedTabs);
        storage/* localStore.set */.WL.set('tabs', _addedTabs);
      }
    } else {
      var _activeTab = tabs.find(function (tab) {
        return path_to_regexp_default()(tab.key).test(_activeKey);
      });
      if (!tabChildren[metaData.path]) {
        tabChildren[metaData.path] = children;
        setTabChildren(objectSpread2_default()({}, tabChildren));
      }
      if (!_activeTab) {
        // \u65B0\u589E
        var _newTag2 = {
          tab: activeTitle,
          key: metaData.path,
          location: location
        };
        var _addedTabs2 = addTab(_newTag2, tabs);
        setTabs(_addedTabs2);
        storage/* localStore.set */.WL.set('tabs', _addedTabs2);
      }
    }
    setActiveKey(_activeKey);
  }, [_activeKey]);
  var handleRefresh = function handleRefresh(refreshKey) {
    tabChildren[refreshKey] = /*#__PURE__*/react.cloneElement(tabChildren[refreshKey], {
      key: Math.random()
    });
    setTabChildren(objectSpread2_default()({}, tabChildren));
  };
  var handleSwitch = function handleSwitch(switchKey) {
    var targetTab = lodash_default().find(tabs, {
      key: switchKey
    });
    routeTo(targetTab);
  };

  // \u5173\u95ED\u5F53\u524D
  var handleRemove = function handleRemove(removeKey, tabKey) {
    var nextTabKey;
    if (removeKey !== _activeKey) {
      nextTabKey = _activeKey;
    } else {
      var targetIndex = lodash_default().findIndex(tabs, {
        key: removeKey
      });
      var nextIndex = targetIndex > 0 ? targetIndex - 1 : 0;
      nextTabKey = tabs[nextIndex].key;
    }
    if (tabKey) nextTabKey = tabKey;
    var filteredTabs = tabs.filter(function (item) {
      return item.key != removeKey;
    });
    setTabs(filteredTabs);
    setTabChildren(lodash_default().omit(tabChildren, removeKey));
    storage/* localStore.set */.WL.set('tabs', filteredTabs);
    var targetTab = lodash_default().find(filteredTabs, {
      key: nextTabKey
    });
    routeTo(targetTab);
  };
  var handleRemoveAll = function handleRemoveAll() {
    var newTab = tabs.slice(0, 1);
    setTabs(newTab);
    setTabChildren(lodash_default().pick(tabChildren, [projectConfig/* homePage */.u]));
    storage/* localStore.set */.WL.set('tabs', newTab);
    routeTo(newTab[0]);
  };
  var handleRemoveOthers = function handleRemoveOthers(currentKeys) {
    var filteredTabs = tabs.filter(function (item, index) {
      return index === 0 || item.key === currentKeys;
    });
    setTabChildren(lodash_default().pick(tabChildren, [projectConfig/* homePage */.u, currentKeys]));
    setTabs(filteredTabs);
    storage/* localStore.set */.WL.set('tabs', filteredTabs);
  };
  return /*#__PURE__*/(0,jsx_runtime.jsx)(TagsNav_MenuTabs, {
    tabs: tabs,
    activeKey: activeKey,
    tabChildren: tabChildren,
    onSwitch: handleSwitch,
    onRemove: handleRemove,
    onRefresh: handleRefresh,
    onRemoveAll: handleRemoveAll,
    onRemoveOthers: handleRemoveOthers
  });
};
/* harmony default export */ var TagsNav = (PageTabs);
// EXTERNAL MODULE: ./node_modules/@ant-design/cssinjs/es/index.js + 28 modules
var es = __webpack_require__(27431);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/BellOutlined.js
// This icon file is generated automatically.
var BellOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M816 768h-24V428c0-141.1-104.3-257.7-240-277.1V112c0-22.1-17.9-40-40-40s-40 17.9-40 40v38.9c-135.7 19.4-240 136-240 277.1v340h-24c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h216c0 61.8 50.2 112 112 112s112-50.2 112-112h216c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM512 888c-26.5 0-48-21.5-48-48h96c0 26.5-21.5 48-48 48zM304 768V428c0-55.6 21.6-107.8 60.9-147.1S456.4 220 512 220c55.6 0 107.8 21.6 147.1 60.9S720 372.4 720 428v340H304z" } }] }, "name": "bell", "theme": "outlined" };
/* harmony default export */ var asn_BellOutlined = (BellOutlined);

;// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/icons/BellOutlined.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY



var BellOutlined_BellOutlined = function BellOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.Z, (0,esm_objectSpread2/* default */.Z)((0,esm_objectSpread2/* default */.Z)({}, props), {}, {
    ref: ref,
    icon: asn_BellOutlined
  }));
};
BellOutlined_BellOutlined.displayName = 'BellOutlined';
/* harmony default export */ var icons_BellOutlined = (/*#__PURE__*/react.forwardRef(BellOutlined_BellOutlined));
// EXTERNAL MODULE: ./node_modules/@umijs/renderer-react/dist/appContext.js
var appContext = __webpack_require__(34162);
// EXTERNAL MODULE: ./node_modules/antd/es/theme/index.js + 5 modules
var es_theme = __webpack_require__(92195);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/index.js + 6 modules
var config_provider = __webpack_require__(17093);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(87462);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(71002);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var esm_slicedToArray = __webpack_require__(97685);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var esm_objectWithoutProperties = __webpack_require__(45987);
// EXTERNAL MODULE: ./node_modules/@rc-component/trigger/es/index.js + 11 modules
var trigger_es = __webpack_require__(40228);
// EXTERNAL MODULE: ./node_modules/@rc-component/portal/es/index.js + 6 modules
var portal_es = __webpack_require__(2788);
// EXTERNAL MODULE: ./node_modules/rc-util/es/hooks/useMergedState.js
var useMergedState = __webpack_require__(21770);
// EXTERNAL MODULE: ./node_modules/rc-util/es/hooks/useLayoutEffect.js
var useLayoutEffect = __webpack_require__(8410);
;// CONCATENATED MODULE: ./node_modules/@rc-component/tour/es/util.js
function isInViewPort(element) {
  var viewWidth = window.innerWidth || document.documentElement.clientWidth;
  var viewHeight = window.innerHeight || document.documentElement.clientHeight;

  var _element$getBoundingC = element.getBoundingClientRect(),
      top = _element$getBoundingC.top,
      right = _element$getBoundingC.right,
      bottom = _element$getBoundingC.bottom,
      left = _element$getBoundingC.left;

  return top >= 0 && left >= 0 && right <= viewWidth && bottom <= viewHeight;
}
// EXTERNAL MODULE: ./node_modules/rc-util/es/hooks/useEvent.js
var useEvent = __webpack_require__(66680);
;// CONCATENATED MODULE: ./node_modules/@rc-component/tour/es/hooks/useTarget.js





function useTarget(target, open, gap, scrollIntoViewOptions) {
  // ========================= Target =========================
  // We trade \`undefined\` as not get target by function yet.
  // \`null\` as empty target.
  var _useState = (0,react.useState)(undefined),
      _useState2 = (0,esm_slicedToArray/* default */.Z)(_useState, 2),
      targetElement = _useState2[0],
      setTargetElement = _useState2[1];

  (0,useLayoutEffect/* default */.Z)(function () {
    var nextElement = typeof target === 'function' ? target() : target;
    setTargetElement(nextElement || null);
  }); // ========================= Align ==========================

  var _useState3 = (0,react.useState)(null),
      _useState4 = (0,esm_slicedToArray/* default */.Z)(_useState3, 2),
      posInfo = _useState4[0],
      setPosInfo = _useState4[1];

  var updatePos = (0,useEvent/* default */.Z)(function () {
    if (targetElement) {
      // Exist target element. We should scroll and get target position
      if (!isInViewPort(targetElement) && open) {
        targetElement.scrollIntoView(scrollIntoViewOptions);
      }

      var _targetElement$getBou = targetElement.getBoundingClientRect(),
          left = _targetElement$getBou.left,
          top = _targetElement$getBou.top,
          width = _targetElement$getBou.width,
          height = _targetElement$getBou.height;

      var nextPosInfo = {
        left: left,
        top: top,
        width: width,
        height: height,
        radius: 0
      };
      setPosInfo(function (origin) {
        if (JSON.stringify(origin) !== JSON.stringify(nextPosInfo)) {
          return nextPosInfo;
        }

        return origin;
      });
    } else {
      // Not exist target which means we just show in center
      setPosInfo(null);
    }
  });
  (0,useLayoutEffect/* default */.Z)(function () {
    updatePos(); // update when window resize

    window.addEventListener('resize', updatePos);
    return function () {
      window.removeEventListener('resize', updatePos);
    };
  }, [targetElement, open, updatePos]); // ======================== PosInfo =========================

  var mergedPosInfo = (0,react.useMemo)(function () {
    if (!posInfo) {
      return posInfo;
    }

    var gapOffset = (gap === null || gap === void 0 ? void 0 : gap.offset) || 6;
    var gapRadius = (gap === null || gap === void 0 ? void 0 : gap.radius) || 2;
    return {
      left: posInfo.left - gapOffset,
      top: posInfo.top - gapOffset,
      width: posInfo.width + gapOffset * 2,
      height: posInfo.height + gapOffset * 2,
      radius: gapRadius
    };
  }, [posInfo, gap]);
  return [mergedPosInfo, targetElement];
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var esm_toConsumableArray = __webpack_require__(74902);
;// CONCATENATED MODULE: ./node_modules/@rc-component/tour/es/TourStep/DefaultPanel.js



function DefaultPanel(props) {
  var prefixCls = props.prefixCls,
      current = props.current,
      total = props.total,
      title = props.title,
      description = props.description,
      onClose = props.onClose,
      onPrev = props.onPrev,
      onNext = props.onNext,
      onFinish = props.onFinish,
      className = props.className;
  return /*#__PURE__*/react.createElement("div", {
    className: classnames_default()("".concat(prefixCls, "-content"), className)
  }, /*#__PURE__*/react.createElement("div", {
    className: "".concat(prefixCls, "-inner")
  }, /*#__PURE__*/react.createElement("button", {
    type: "button",
    onClick: onClose,
    "aria-label": "Close",
    className: "".concat(prefixCls, "-close")
  }, /*#__PURE__*/react.createElement("span", {
    className: "".concat(prefixCls, "-close-x")
  }, "\\xD7")), /*#__PURE__*/react.createElement("div", {
    className: "".concat(prefixCls, "-header")
  }, /*#__PURE__*/react.createElement("div", {
    className: "".concat(prefixCls, "-title")
  }, title)), /*#__PURE__*/react.createElement("div", {
    className: "".concat(prefixCls, "-description")
  }, description), /*#__PURE__*/react.createElement("div", {
    className: "".concat(prefixCls, "-footer")
  }, /*#__PURE__*/react.createElement("div", {
    className: "".concat(prefixCls, "-sliders")
  }, total > 1 ? (0,esm_toConsumableArray/* default */.Z)(Array.from({
    length: total
  }).keys()).map(function (item, index) {
    return /*#__PURE__*/react.createElement("span", {
      key: item,
      className: index === current ? 'active' : ''
    });
  }) : null), /*#__PURE__*/react.createElement("div", {
    className: "".concat(prefixCls, "-buttons")
  }, current !== 0 ? /*#__PURE__*/react.createElement("button", {
    className: "".concat(prefixCls, "-prev-btn"),
    onClick: onPrev
  }, "Prev") : null, current === total - 1 ? /*#__PURE__*/react.createElement("button", {
    className: "".concat(prefixCls, "-finish-btn"),
    onClick: onFinish
  }, "Finish") : /*#__PURE__*/react.createElement("button", {
    className: "".concat(prefixCls, "-next-btn"),
    onClick: onNext
  }, "Next")))));
}
;// CONCATENATED MODULE: ./node_modules/@rc-component/tour/es/TourStep/index.js



var TourStep = function TourStep(props) {
  var current = props.current,
      renderPanel = props.renderPanel;
  return /*#__PURE__*/react.createElement(react.Fragment, null, typeof renderPanel === 'function' ? renderPanel(props, current) : /*#__PURE__*/react.createElement(DefaultPanel, props));
};

/* harmony default export */ var es_TourStep = (TourStep);
// EXTERNAL MODULE: ./node_modules/rc-util/es/hooks/useId.js
var useId = __webpack_require__(7028);
;// CONCATENATED MODULE: ./node_modules/@rc-component/tour/es/Mask.js







var COVER_PROPS = {
  fill: 'transparent',
  pointerEvents: 'auto'
};

var Mask = function Mask(props) {
  var prefixCls = props.prefixCls,
      rootClassName = props.rootClassName,
      pos = props.pos,
      showMask = props.showMask,
      _props$style = props.style,
      style = _props$style === void 0 ? {} : _props$style,
      _props$fill = props.fill,
      fill = _props$fill === void 0 ? "rgba(0,0,0,0.5)" : _props$fill,
      open = props.open,
      animated = props.animated,
      zIndex = props.zIndex;
  var id = (0,useId/* default */.Z)();
  var maskId = "".concat(prefixCls, "-mask-").concat(id);
  var mergedAnimated = (0,esm_typeof/* default */.Z)(animated) === 'object' ? animated === null || animated === void 0 ? void 0 : animated.placeholder : animated;
  return /*#__PURE__*/react.createElement(portal_es/* default */.Z, {
    open: open,
    autoLock: true
  }, /*#__PURE__*/react.createElement("div", {
    className: classnames_default()("".concat(prefixCls, "-mask"), rootClassName),
    style: (0,esm_objectSpread2/* default */.Z)({
      position: 'fixed',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      zIndex: zIndex,
      pointerEvents: 'none'
    }, style)
  }, showMask ? /*#__PURE__*/react.createElement("svg", {
    style: {
      width: '100%',
      height: '100%'
    }
  }, /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("mask", {
    id: maskId
  }, /*#__PURE__*/react.createElement("rect", {
    x: "0",
    y: "0",
    width: "100vw",
    height: "100vh",
    fill: "white"
  }), pos && /*#__PURE__*/react.createElement("rect", {
    x: pos.left,
    y: pos.top,
    rx: pos.radius,
    width: pos.width,
    height: pos.height,
    fill: "black",
    className: mergedAnimated ? "".concat(prefixCls, "-placeholder-animated") : ''
  }))), /*#__PURE__*/react.createElement("rect", {
    x: "0",
    y: "0",
    width: "100%",
    height: "100%",
    fill: fill,
    mask: "url(#".concat(maskId, ")")
  }), pos && /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("rect", (0,esm_extends/* default */.Z)({}, COVER_PROPS, {
    x: "0",
    y: "0",
    width: "100%",
    height: pos.top
  })), /*#__PURE__*/react.createElement("rect", (0,esm_extends/* default */.Z)({}, COVER_PROPS, {
    x: "0",
    y: "0",
    width: pos.left,
    height: "100%"
  })), /*#__PURE__*/react.createElement("rect", (0,esm_extends/* default */.Z)({}, COVER_PROPS, {
    x: "0",
    y: pos.top + pos.height,
    width: "100%",
    height: "calc(100vh - ".concat(pos.top + pos.height, "px)")
  })), /*#__PURE__*/react.createElement("rect", (0,esm_extends/* default */.Z)({}, COVER_PROPS, {
    x: pos.left + pos.width,
    y: "0",
    width: "calc(100vw - ".concat(pos.left + pos.width, "px)"),
    height: "100%"
  })))) : null));
};

/* harmony default export */ var es_Mask = (Mask);
;// CONCATENATED MODULE: ./node_modules/@rc-component/tour/es/placements.js

var autoAdjustOverflow = {
  adjustX: 1,
  adjustY: 1
};
var targetOffset = [0, 0];
var basePlacements = {
  left: {
    points: ['cr', 'cl'],
    offset: [-8, 0]
  },
  right: {
    points: ['cl', 'cr'],
    offset: [8, 0]
  },
  top: {
    points: ['bc', 'tc'],
    offset: [0, -8]
  },
  bottom: {
    points: ['tc', 'bc'],
    offset: [0, 8]
  },
  topLeft: {
    points: ['bl', 'tl'],
    offset: [0, -8]
  },
  leftTop: {
    points: ['tr', 'tl'],
    offset: [-8, 0]
  },
  topRight: {
    points: ['br', 'tr'],
    offset: [0, -8]
  },
  rightTop: {
    points: ['tl', 'tr'],
    offset: [8, 0]
  },
  bottomRight: {
    points: ['tr', 'br'],
    offset: [0, 8]
  },
  rightBottom: {
    points: ['bl', 'br'],
    offset: [8, 0]
  },
  bottomLeft: {
    points: ['tl', 'bl'],
    offset: [0, 8]
  },
  leftBottom: {
    points: ['br', 'bl'],
    offset: [-8, 0]
  }
};
function getPlacements() {
  var arrowPointAtCenter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var placements = {};
  Object.keys(basePlacements).forEach(function (key) {
    placements[key] = (0,esm_objectSpread2/* default */.Z)((0,esm_objectSpread2/* default */.Z)({}, basePlacements[key]), {}, {
      autoArrow: arrowPointAtCenter,
      targetOffset: targetOffset
    });
  });
  return placements;
}
var placements = getPlacements();
;// CONCATENATED MODULE: ./node_modules/@rc-component/tour/es/Tour.js





var Tour_excluded = ["prefixCls", "steps", "defaultCurrent", "current", "onChange", "onClose", "onFinish", "open", "mask", "arrow", "rootClassName", "placement", "renderPanel", "gap", "animated", "scrollIntoViewOptions", "zIndex"];










var CENTER_PLACEHOLDER = {
  left: '50%',
  top: '50%',
  width: 1,
  height: 1
};

var Tour = function Tour(props) {
  var _props$prefixCls = props.prefixCls,
      prefixCls = _props$prefixCls === void 0 ? 'rc-tour' : _props$prefixCls,
      _props$steps = props.steps,
      steps = _props$steps === void 0 ? [] : _props$steps,
      defaultCurrent = props.defaultCurrent,
      current = props.current,
      onChange = props.onChange,
      onClose = props.onClose,
      _onFinish = props.onFinish,
      open = props.open,
      _props$mask = props.mask,
      mask = _props$mask === void 0 ? true : _props$mask,
      _props$arrow = props.arrow,
      arrow = _props$arrow === void 0 ? true : _props$arrow,
      rootClassName = props.rootClassName,
      _props$placement = props.placement,
      placement = _props$placement === void 0 ? 'bottom' : _props$placement,
      renderPanel = props.renderPanel,
      gap = props.gap,
      animated = props.animated,
      _props$scrollIntoView = props.scrollIntoViewOptions,
      scrollIntoViewOptions = _props$scrollIntoView === void 0 ? true : _props$scrollIntoView,
      _props$zIndex = props.zIndex,
      zIndex = _props$zIndex === void 0 ? 1001 : _props$zIndex,
      restProps = (0,esm_objectWithoutProperties/* default */.Z)(props, Tour_excluded);

  var triggerRef = react.useRef();

  var _useMergedState = (0,useMergedState/* default */.Z)(0, {
    value: current,
    defaultValue: defaultCurrent
  }),
      _useMergedState2 = (0,esm_slicedToArray/* default */.Z)(_useMergedState, 2),
      mergedCurrent = _useMergedState2[0],
      setMergedCurrent = _useMergedState2[1];

  var _useMergedState3 = (0,useMergedState/* default */.Z)(undefined, {
    value: open,
    postState: function postState(origin) {
      return mergedCurrent < 0 || mergedCurrent >= steps.length ? false : origin !== null && origin !== void 0 ? origin : true;
    }
  }),
      _useMergedState4 = (0,esm_slicedToArray/* default */.Z)(_useMergedState3, 2),
      mergedOpen = _useMergedState4[0],
      setMergedOpen = _useMergedState4[1];

  var openRef = react.useRef(mergedOpen);
  (0,useLayoutEffect/* default */.Z)(function () {
    if (mergedOpen && !openRef.current) {
      setMergedCurrent(0);
    }

    openRef.current = mergedOpen;
  }, [mergedOpen]);

  var _ref = steps[mergedCurrent] || {},
      target = _ref.target,
      stepPlacement = _ref.placement,
      stepStyle = _ref.style,
      stepArrow = _ref.arrow,
      stepClassName = _ref.className,
      stepMask = _ref.mask,
      stepScrollIntoViewOptions = _ref.scrollIntoViewOptions;

  var mergedPlacement = stepPlacement !== null && stepPlacement !== void 0 ? stepPlacement : placement;
  var mergedMask = mergedOpen && (stepMask !== null && stepMask !== void 0 ? stepMask : mask);
  var mergedScrollIntoViewOptions = stepScrollIntoViewOptions !== null && stepScrollIntoViewOptions !== void 0 ? stepScrollIntoViewOptions : scrollIntoViewOptions;

  var _useTarget = useTarget(target, open, gap, mergedScrollIntoViewOptions),
      _useTarget2 = (0,esm_slicedToArray/* default */.Z)(_useTarget, 2),
      posInfo = _useTarget2[0],
      targetElement = _useTarget2[1]; // ========================= arrow =========================


  var mergedArrow = targetElement ? typeof stepArrow === 'undefined' ? arrow : stepArrow : false;
  var arrowPointAtCenter = (0,esm_typeof/* default */.Z)(mergedArrow) === 'object' ? mergedArrow.pointAtCenter : false;
  (0,useLayoutEffect/* default */.Z)(function () {
    var _triggerRef$current;

    (_triggerRef$current = triggerRef.current) === null || _triggerRef$current === void 0 ? void 0 : _triggerRef$current.forceAlign();
  }, [arrowPointAtCenter, mergedCurrent]); // ========================= Change =========================

  var onInternalChange = function onInternalChange(nextCurrent) {
    setMergedCurrent(nextCurrent);
    onChange === null || onChange === void 0 ? void 0 : onChange(nextCurrent);
  }; // ========================= Render =========================
  // Skip if not init yet


  if (targetElement === undefined) {
    return null;
  }

  var handleClose = function handleClose() {
    setMergedOpen(false);
    onClose === null || onClose === void 0 ? void 0 : onClose(mergedCurrent);
  };

  var getPopupElement = function getPopupElement() {
    return /*#__PURE__*/react.createElement(es_TourStep, (0,esm_extends/* default */.Z)({
      arrow: mergedArrow,
      key: "content",
      prefixCls: prefixCls,
      total: steps.length,
      renderPanel: renderPanel,
      onPrev: function onPrev() {
        onInternalChange(mergedCurrent - 1);
      },
      onNext: function onNext() {
        onInternalChange(mergedCurrent + 1);
      },
      onClose: handleClose,
      current: mergedCurrent,
      onFinish: function onFinish() {
        handleClose();
        _onFinish === null || _onFinish === void 0 ? void 0 : _onFinish();
      }
    }, steps[mergedCurrent]));
  };

  var mergedShowMask = typeof mergedMask === 'boolean' ? mergedMask : !!mergedMask;
  var mergedMaskStyle = typeof mergedMask === 'boolean' ? undefined : mergedMask; // when targetElement is not exist, use body as triggerDOMNode

  var getTriggerDOMNode = function getTriggerDOMNode(node) {
    return node || targetElement || document.body;
  };

  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(es_Mask, {
    zIndex: zIndex,
    prefixCls: prefixCls,
    pos: posInfo,
    showMask: mergedShowMask,
    style: mergedMaskStyle === null || mergedMaskStyle === void 0 ? void 0 : mergedMaskStyle.style,
    fill: mergedMaskStyle === null || mergedMaskStyle === void 0 ? void 0 : mergedMaskStyle.color,
    open: mergedOpen,
    animated: animated,
    rootClassName: rootClassName
  }), /*#__PURE__*/react.createElement(trigger_es/* default */.Z, (0,esm_extends/* default */.Z)({
    builtinPlacements: getPlacements(arrowPointAtCenter)
  }, restProps, {
    ref: triggerRef,
    popupStyle: stepStyle,
    popupPlacement: mergedPlacement,
    popupVisible: mergedOpen,
    popupClassName: classnames_default()(rootClassName, stepClassName),
    prefixCls: prefixCls,
    popup: getPopupElement,
    forceRender: false,
    destroyPopupOnHide: true,
    zIndex: zIndex,
    getTriggerDOMNode: getTriggerDOMNode,
    arrow: !!mergedArrow
  }), /*#__PURE__*/react.createElement(portal_es/* default */.Z, {
    open: mergedOpen,
    autoLock: true
  }, /*#__PURE__*/react.createElement("div", {
    className: classnames_default()(rootClassName, "".concat(prefixCls, "-target-placeholder")),
    style: (0,esm_objectSpread2/* default */.Z)((0,esm_objectSpread2/* default */.Z)({}, posInfo || CENTER_PLACEHOLDER), {}, {
      position: 'fixed',
      pointerEvents: 'none'
    })
  }))));
};

/* harmony default export */ var es_Tour = (Tour);
;// CONCATENATED MODULE: ./node_modules/@rc-component/tour/es/index.js

/* harmony default export */ var tour_es = (es_Tour);
// EXTERNAL MODULE: ./node_modules/antd/es/_util/placements.js
var _util_placements = __webpack_require__(80636);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/context.js
var context = __webpack_require__(53124);
// EXTERNAL MODULE: ./node_modules/antd/es/popover/PurePanel.js
var PurePanel = __webpack_require__(60590);
// EXTERNAL MODULE: ./node_modules/antd/node_modules/@ant-design/icons/es/icons/CloseOutlined.js
var CloseOutlined = __webpack_require__(62208);
// EXTERNAL MODULE: ./node_modules/antd/es/button/index.js
var es_button = __webpack_require__(71577);
// EXTERNAL MODULE: ./node_modules/antd/es/locale/useLocale.js
var useLocale = __webpack_require__(10110);
// EXTERNAL MODULE: ./node_modules/antd/es/locale/en_US.js + 1 modules
var en_US = __webpack_require__(24457);
;// CONCATENATED MODULE: ./node_modules/antd/es/tour/panelRender.js







function isValidNode(node) {
  return node !== undefined && node !== null;
}
const TourPanel = _ref => {
  let {
    stepProps,
    current,
    type,
    indicatorsRender
  } = _ref;
  var _a, _b;
  const {
    prefixCls,
    total = 1,
    title,
    onClose,
    onPrev,
    onNext,
    onFinish,
    cover,
    description,
    nextButtonProps,
    prevButtonProps,
    type: stepType,
    className
  } = stepProps;
  const mergedType = stepType !== null && stepType !== void 0 ? stepType : type;
  const isLastStep = current === total - 1;
  const prevBtnClick = () => {
    var _a;
    onPrev === null || onPrev === void 0 ? void 0 : onPrev();
    (_a = prevButtonProps === null || prevButtonProps === void 0 ? void 0 : prevButtonProps.onClick) === null || _a === void 0 ? void 0 : _a.call(prevButtonProps);
  };
  const nextBtnClick = () => {
    var _a;
    if (isLastStep) {
      onFinish === null || onFinish === void 0 ? void 0 : onFinish();
    } else {
      onNext === null || onNext === void 0 ? void 0 : onNext();
    }
    (_a = nextButtonProps === null || nextButtonProps === void 0 ? void 0 : nextButtonProps.onClick) === null || _a === void 0 ? void 0 : _a.call(nextButtonProps);
  };
  const headerNode = isValidNode(title) ? /*#__PURE__*/react.createElement("div", {
    className: \`\${prefixCls}-header\`
  }, /*#__PURE__*/react.createElement("div", {
    className: \`\${prefixCls}-title\`
  }, title)) : null;
  const descriptionNode = isValidNode(description) ? /*#__PURE__*/react.createElement("div", {
    className: \`\${prefixCls}-description\`
  }, description) : null;
  const coverNode = isValidNode(cover) ? /*#__PURE__*/react.createElement("div", {
    className: \`\${prefixCls}-cover\`
  }, cover) : null;
  let mergeIndicatorNode;
  if (indicatorsRender) {
    mergeIndicatorNode = indicatorsRender(current, total);
  } else {
    mergeIndicatorNode = (0,esm_toConsumableArray/* default */.Z)(Array.from({
      length: total
    }).keys()).map((stepItem, index) => /*#__PURE__*/react.createElement("span", {
      key: stepItem,
      className: classnames_default()(index === current && \`\${prefixCls}-indicator-active\`, \`\${prefixCls}-indicator\`)
    }));
  }
  const mainBtnType = mergedType === 'primary' ? 'default' : 'primary';
  const secondaryBtnProps = {
    type: 'default',
    ghost: mergedType === 'primary'
  };
  const [contextLocale] = (0,useLocale/* default */.Z)('Tour', en_US/* default.Tour */.Z.Tour);
  return /*#__PURE__*/react.createElement("div", {
    className: classnames_default()(className, \`\${prefixCls}-content\`)
  }, /*#__PURE__*/react.createElement("div", {
    className: \`\${prefixCls}-inner\`
  }, /*#__PURE__*/react.createElement(CloseOutlined/* default */.Z, {
    className: \`\${prefixCls}-close\`,
    onClick: onClose
  }), coverNode, headerNode, descriptionNode, /*#__PURE__*/react.createElement("div", {
    className: \`\${prefixCls}-footer\`
  }, total > 1 && /*#__PURE__*/react.createElement("div", {
    className: \`\${prefixCls}-indicators\`
  }, mergeIndicatorNode), /*#__PURE__*/react.createElement("div", {
    className: \`\${prefixCls}-buttons\`
  }, current !== 0 ? /*#__PURE__*/react.createElement(es_button/* default */.ZP, Object.assign({}, secondaryBtnProps, prevButtonProps, {
    onClick: prevBtnClick,
    size: "small",
    className: classnames_default()(\`\${prefixCls}-prev-btn\`, prevButtonProps === null || prevButtonProps === void 0 ? void 0 : prevButtonProps.className)
  }), (_a = prevButtonProps === null || prevButtonProps === void 0 ? void 0 : prevButtonProps.children) !== null && _a !== void 0 ? _a : contextLocale === null || contextLocale === void 0 ? void 0 : contextLocale.Previous) : null, /*#__PURE__*/react.createElement(es_button/* default */.ZP, Object.assign({
    type: mainBtnType
  }, nextButtonProps, {
    onClick: nextBtnClick,
    size: "small",
    className: classnames_default()(\`\${prefixCls}-next-btn\`, nextButtonProps === null || nextButtonProps === void 0 ? void 0 : nextButtonProps.className)
  }), (_b = nextButtonProps === null || nextButtonProps === void 0 ? void 0 : nextButtonProps.children) !== null && _b !== void 0 ? _b : isLastStep ? contextLocale === null || contextLocale === void 0 ? void 0 : contextLocale.Finish : contextLocale === null || contextLocale === void 0 ? void 0 : contextLocale.Next)))));
};
/* harmony default export */ var panelRender = (TourPanel);
// EXTERNAL MODULE: ./node_modules/@ctrl/tinycolor/dist/module/index.js
var dist_module = __webpack_require__(10274);
// EXTERNAL MODULE: ./node_modules/antd/es/style/index.js
var style = __webpack_require__(14747);
// EXTERNAL MODULE: ./node_modules/antd/es/style/placementArrow.js
var placementArrow = __webpack_require__(97414);
// EXTERNAL MODULE: ./node_modules/antd/es/theme/util/genComponentStyleHook.js
var genComponentStyleHook = __webpack_require__(67968);
// EXTERNAL MODULE: ./node_modules/antd/es/theme/util/statistic.js
var statistic = __webpack_require__(45503);
;// CONCATENATED MODULE: ./node_modules/antd/es/tour/style/index.js




// =============================== Base ===============================
const genBaseStyle = token => {
  const {
    componentCls,
    lineHeight,
    padding,
    paddingXS,
    borderRadius,
    borderRadiusXS,
    colorPrimary,
    colorText,
    colorFill,
    indicatorHeight,
    indicatorWidth,
    boxShadowTertiary,
    tourZIndexPopup,
    fontSize,
    colorBgContainer,
    fontWeightStrong,
    marginXS,
    colorTextLightSolid,
    tourBorderRadius,
    colorWhite,
    colorBgTextHover,
    tourCloseSize,
    motionDurationSlow,
    antCls
  } = token;
  return [{
    [componentCls]: Object.assign(Object.assign({}, (0,style/* resetComponent */.Wf)(token)), {
      color: colorText,
      position: 'absolute',
      zIndex: tourZIndexPopup,
      display: 'block',
      visibility: 'visible',
      fontSize,
      lineHeight,
      width: 520,
      '--antd-arrow-background-color': colorBgContainer,
      '&-pure': {
        maxWidth: '100%',
        position: 'relative'
      },
      [\`&\${componentCls}-hidden\`]: {
        display: 'none'
      },
      // ============================= panel content ============================
      [\`\${componentCls}-content\`]: {
        position: 'relative'
      },
      [\`\${componentCls}-inner\`]: {
        textAlign: 'start',
        textDecoration: 'none',
        borderRadius: tourBorderRadius,
        boxShadow: boxShadowTertiary,
        position: 'relative',
        backgroundColor: colorBgContainer,
        border: 'none',
        backgroundClip: 'padding-box',
        [\`\${componentCls}-close\`]: {
          position: 'absolute',
          top: padding,
          insetInlineEnd: padding,
          color: token.colorIcon,
          outline: 'none',
          width: tourCloseSize,
          height: tourCloseSize,
          borderRadius: token.borderRadiusSM,
          transition: \`background-color \${token.motionDurationMid}, color \${token.motionDurationMid}\`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          '&:hover': {
            color: token.colorIconHover,
            backgroundColor: token.wireframe ? 'transparent' : token.colorFillContent
          }
        },
        [\`\${componentCls}-cover\`]: {
          textAlign: 'center',
          padding: \`\${padding + tourCloseSize + paddingXS}px \${padding}px 0\`,
          img: {
            width: '100%'
          }
        },
        [\`\${componentCls}-header\`]: {
          padding: \`\${padding}px \${padding}px \${paddingXS}px\`,
          [\`\${componentCls}-title\`]: {
            lineHeight,
            fontSize,
            fontWeight: fontWeightStrong
          }
        },
        [\`\${componentCls}-description\`]: {
          padding: \`0 \${padding}px\`,
          lineHeight,
          wordWrap: 'break-word'
        },
        [\`\${componentCls}-footer\`]: {
          padding: \`\${paddingXS}px \${padding}px \${padding}px\`,
          textAlign: 'end',
          borderRadius: \`0 0 \${borderRadiusXS}px \${borderRadiusXS}px\`,
          display: 'flex',
          [\`\${componentCls}-indicators\`]: {
            display: 'inline-block',
            [\`\${componentCls}-indicator\`]: {
              width: indicatorWidth,
              height: indicatorHeight,
              display: 'inline-block',
              borderRadius: '50%',
              background: colorFill,
              '&:not(:last-child)': {
                marginInlineEnd: indicatorHeight
              },
              '&-active': {
                background: colorPrimary
              }
            }
          },
          [\`\${componentCls}-buttons\`]: {
            marginInlineStart: 'auto',
            [\`\${antCls}-btn\`]: {
              marginInlineStart: marginXS
            }
          }
        }
      },
      // =============================  primary type  ===========================
      // \`$\` for panel, \`&$\` for pure panel
      [\`\${componentCls}-primary, &\${componentCls}-primary\`]: {
        '--antd-arrow-background-color': colorPrimary,
        [\`\${componentCls}-inner\`]: {
          color: colorTextLightSolid,
          textAlign: 'start',
          textDecoration: 'none',
          backgroundColor: colorPrimary,
          borderRadius,
          boxShadow: boxShadowTertiary,
          [\`\${componentCls}-close\`]: {
            color: colorTextLightSolid
          },
          [\`\${componentCls}-indicators\`]: {
            [\`\${componentCls}-indicator\`]: {
              background: new dist_module/* TinyColor */.C(colorTextLightSolid).setAlpha(0.15).toRgbString(),
              '&-active': {
                background: colorTextLightSolid
              }
            }
          },
          [\`\${componentCls}-prev-btn\`]: {
            color: colorTextLightSolid,
            borderColor: new dist_module/* TinyColor */.C(colorTextLightSolid).setAlpha(0.15).toRgbString(),
            backgroundColor: colorPrimary,
            '&:hover': {
              backgroundColor: new dist_module/* TinyColor */.C(colorTextLightSolid).setAlpha(0.15).toRgbString(),
              borderColor: 'transparent'
            }
          },
          [\`\${componentCls}-next-btn\`]: {
            color: colorPrimary,
            borderColor: 'transparent',
            background: colorWhite,
            '&:hover': {
              background: new dist_module/* TinyColor */.C(colorBgTextHover).onBackground(colorWhite).toRgbString()
            }
          }
        }
      }
    }),
    // ============================= mask ===========================
    [\`\${componentCls}-mask\`]: {
      [\`\${componentCls}-placeholder-animated\`]: {
        transition: \`all \${motionDurationSlow}\`
      }
    },
    // =========== Limit left and right placement radius ==============
    [['&-placement-left', '&-placement-leftTop', '&-placement-leftBottom', '&-placement-right', '&-placement-rightTop', '&-placement-rightBottom'].join(',')]: {
      [\`\${componentCls}-inner\`]: {
        borderRadius: Math.min(tourBorderRadius, placementArrow/* MAX_VERTICAL_CONTENT_RADIUS */.qN)
      }
    }
  },
  // ============================= Arrow ===========================
  (0,placementArrow/* default */.ZP)(token, {
    colorBg: 'var(--antd-arrow-background-color)',
    contentRadius: tourBorderRadius,
    limitVerticalRadius: true
  })];
};
// ============================== Export ==============================
/* harmony default export */ var tour_style = ((0,genComponentStyleHook/* default */.Z)('Tour', token => {
  const {
    borderRadiusLG,
    fontSize,
    lineHeight
  } = token;
  const TourToken = (0,statistic/* merge */.TS)(token, {
    tourZIndexPopup: token.zIndexPopupBase + 70,
    indicatorWidth: 6,
    indicatorHeight: 6,
    tourBorderRadius: borderRadiusLG,
    tourCloseSize: fontSize * lineHeight
  });
  return [genBaseStyle(TourToken)];
}));
;// CONCATENATED MODULE: ./node_modules/antd/es/tour/PurePanel.js
var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};






const PurePanel_PurePanel = props => {
  const {
      prefixCls: customizePrefixCls,
      current = 0,
      total = 6,
      className,
      style,
      type
    } = props,
    restProps = __rest(props, ["prefixCls", "current", "total", "className", "style", "type"]);
  const {
    getPrefixCls
  } = react.useContext(context/* ConfigContext */.E_);
  const prefixCls = getPrefixCls('tour', customizePrefixCls);
  const [wrapSSR, hashId] = tour_style(prefixCls);
  return wrapSSR( /*#__PURE__*/react.createElement(PurePanel/* RawPurePanel */.t5, {
    prefixCls: prefixCls,
    hashId: hashId,
    className: classnames_default()(className, \`\${prefixCls}-pure\`, type && \`\${prefixCls}-\${type}\`),
    style: style
  }, /*#__PURE__*/react.createElement(panelRender, {
    stepProps: Object.assign(Object.assign({}, restProps), {
      prefixCls,
      total
    }),
    current: current,
    type: type
  })));
};
/* harmony default export */ var tour_PurePanel = (PurePanel_PurePanel);
;// CONCATENATED MODULE: ./node_modules/antd/es/tour/useMergedType.js


/**
 * returns the merged type of a step or the default type.
 */
const useMergedType = _ref => {
  let {
    defaultType,
    steps = [],
    current,
    defaultCurrent
  } = _ref;
  var _a;
  const [innerCurrent, updateInnerCurrent] = (0,useMergedState/* default */.Z)(defaultCurrent, {
    value: current
  });
  (0,react.useLayoutEffect)(() => {
    if (current === undefined) return;
    updateInnerCurrent(current);
  }, [current]);
  const innerType = typeof innerCurrent === 'number' ? (_a = steps[innerCurrent]) === null || _a === void 0 ? void 0 : _a.type : defaultType;
  const currentMergedType = innerType !== null && innerType !== void 0 ? innerType : defaultType;
  return {
    currentMergedType,
    updateInnerCurrent
  };
};
/* harmony default export */ var tour_useMergedType = (useMergedType);
;// CONCATENATED MODULE: ./node_modules/antd/es/tour/index.js
var tour_rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};










const tour_Tour = props => {
  const {
      prefixCls: customizePrefixCls,
      current,
      defaultCurrent,
      type,
      rootClassName,
      indicatorsRender,
      steps
    } = props,
    restProps = tour_rest(props, ["prefixCls", "current", "defaultCurrent", "type", "rootClassName", "indicatorsRender", "steps"]);
  const {
    getPrefixCls,
    direction
  } = (0,react.useContext)(context/* ConfigContext */.E_);
  const prefixCls = getPrefixCls('tour', customizePrefixCls);
  const [wrapSSR, hashId] = tour_style(prefixCls);
  const {
    token
  } = es_theme/* default.useToken */.Z.useToken();
  const {
    currentMergedType,
    updateInnerCurrent
  } = tour_useMergedType({
    defaultType: type,
    steps,
    current,
    defaultCurrent
  });
  const builtinPlacements = (0,_util_placements/* default */.Z)({
    arrowPointAtCenter: true,
    autoAdjustOverflow: true,
    offset: token.marginXXS,
    arrowWidth: token.sizePopupArrow,
    borderRadius: token.borderRadius
  });
  const customClassName = classnames_default()({
    [\`\${prefixCls}-primary\`]: currentMergedType === 'primary',
    [\`\${prefixCls}-rtl\`]: direction === 'rtl'
  }, hashId, rootClassName);
  const mergedRenderPanel = (stepProps, stepCurrent) => /*#__PURE__*/react.createElement(panelRender, {
    type: type,
    stepProps: stepProps,
    current: stepCurrent,
    indicatorsRender: indicatorsRender
  });
  const onStepChange = stepCurrent => {
    var _a;
    updateInnerCurrent(stepCurrent);
    (_a = props.onChange) === null || _a === void 0 ? void 0 : _a.call(props, stepCurrent);
  };
  return wrapSSR( /*#__PURE__*/react.createElement(tour_es, Object.assign({}, restProps, {
    rootClassName: customClassName,
    prefixCls: prefixCls,
    current: current,
    defaultCurrent: defaultCurrent,
    animated: true,
    renderPanel: mergedRenderPanel,
    builtinPlacements: builtinPlacements,
    onChange: onStepChange,
    steps: steps
  })));
};
if (false) {}
tour_Tour._InternalPanelDoNotUseOrYouWillBeFired = tour_PurePanel;
/* harmony default export */ var tour = (tour_Tour);
// EXTERNAL MODULE: ./node_modules/antd/es/spin/index.js + 2 modules
var spin = __webpack_require__(46572);
// EXTERNAL MODULE: ./node_modules/rc-util/es/omit.js
var omit = __webpack_require__(98423);
// EXTERNAL MODULE: ./node_modules/antd/es/badge/index.js + 4 modules
var es_badge = __webpack_require__(53575);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/FileTextOutlined.js
// This icon file is generated automatically.
var FileTextOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0042 42h216v494zM504 618H320c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM312 490v48c0 4.4 3.6 8 8 8h384c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H320c-4.4 0-8 3.6-8 8z" } }] }, "name": "file-text", "theme": "outlined" };
/* harmony default export */ var asn_FileTextOutlined = (FileTextOutlined);

// EXTERNAL MODULE: ./node_modules/antd/node_modules/@ant-design/icons/es/components/AntdIcon.js + 3 modules
var components_AntdIcon = __webpack_require__(93771);
;// CONCATENATED MODULE: ./node_modules/antd/node_modules/@ant-design/icons/es/icons/FileTextOutlined.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var FileTextOutlined_FileTextOutlined = function FileTextOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(components_AntdIcon/* default */.Z, (0,esm_extends/* default */.Z)({}, props, {
    ref: ref,
    icon: asn_FileTextOutlined
  }));
};
if (false) {}
/* harmony default export */ var icons_FileTextOutlined = (/*#__PURE__*/react.forwardRef(FileTextOutlined_FileTextOutlined));
;// CONCATENATED MODULE: ./node_modules/antd/es/float-button/FloatButtonContent.js



const FloatButtonContent = props => {
  const {
    icon,
    description,
    prefixCls,
    className
  } = props;
  const defaultElement = /*#__PURE__*/react.createElement("div", {
    className: \`\${prefixCls}-icon\`
  }, /*#__PURE__*/react.createElement(icons_FileTextOutlined, null));
  return /*#__PURE__*/react.createElement("div", {
    onClick: props.onClick,
    onFocus: props.onFocus,
    onMouseEnter: props.onMouseEnter,
    onMouseLeave: props.onMouseLeave,
    className: classnames_default()(className, \`\${prefixCls}-content\`)
  }, icon || description ? /*#__PURE__*/react.createElement(react.Fragment, null, icon && /*#__PURE__*/react.createElement("div", {
    className: \`\${prefixCls}-icon\`
  }, icon), description && /*#__PURE__*/react.createElement("div", {
    className: \`\${prefixCls}-description\`
  }, description)) : defaultElement);
};
/* harmony default export */ var float_button_FloatButtonContent = (/*#__PURE__*/(0,react.memo)(FloatButtonContent));
;// CONCATENATED MODULE: ./node_modules/antd/es/float-button/context.js

const FloatButtonGroupContext = /*#__PURE__*/react.createContext(undefined);
const {
  Provider: FloatButtonGroupProvider
} = FloatButtonGroupContext;
/* harmony default export */ var float_button_context = (FloatButtonGroupContext);
// EXTERNAL MODULE: ./node_modules/antd/es/style/motion/fade.js
var fade = __webpack_require__(16932);
// EXTERNAL MODULE: ./node_modules/antd/es/style/motion/motion.js
var motion = __webpack_require__(93590);
;// CONCATENATED MODULE: ./node_modules/antd/es/float-button/util.js
const getOffset = radius => {
  if (radius === 0) {
    return 0;
  }
  // \u5982\u679C\u8981\u8003\u8651\u901A\u7528\u6027\uFF0C\u8FD9\u91CC\u5E94\u8BE5\u7528\u4E09\u89D2\u51FD\u6570 Math.sin(45)
  // \u4F46\u662F\u8FD9\u4E2A\u573A\u666F\u6BD4\u8F83\u7279\u6B8A\uFF0C\u59CB\u7EC8\u662F\u7B49\u8170\u76F4\u89D2\u4E09\u89D2\u5F62\uFF0C\u6240\u4EE5\u76F4\u63A5\u7528 Math.sqrt() \u5F00\u65B9\u5373\u53EF
  return radius - Math.sqrt(Math.pow(radius, 2) / 2);
};
/* harmony default export */ var util = (getOffset);
;// CONCATENATED MODULE: ./node_modules/antd/es/float-button/style/index.js






const initFloatButtonGroupMotion = token => {
  const {
    componentCls,
    floatButtonSize,
    motionDurationSlow,
    motionEaseInOutCirc
  } = token;
  const groupPrefixCls = \`\${componentCls}-group\`;
  const moveDownIn = new es/* Keyframes */.E4('antFloatButtonMoveDownIn', {
    '0%': {
      transform: \`translate3d(0, \${floatButtonSize}px, 0)\`,
      transformOrigin: '0 0',
      opacity: 0
    },
    '100%': {
      transform: 'translate3d(0, 0, 0)',
      transformOrigin: '0 0',
      opacity: 1
    }
  });
  const moveDownOut = new es/* Keyframes */.E4('antFloatButtonMoveDownOut', {
    '0%': {
      transform: 'translate3d(0, 0, 0)',
      transformOrigin: '0 0',
      opacity: 1
    },
    '100%': {
      transform: \`translate3d(0, \${floatButtonSize}px, 0)\`,
      transformOrigin: '0 0',
      opacity: 0
    }
  });
  return [{
    [\`\${groupPrefixCls}-wrap\`]: Object.assign({}, (0,motion/* initMotion */.R)(\`\${groupPrefixCls}-wrap\`, moveDownIn, moveDownOut, motionDurationSlow, true))
  }, {
    [\`\${groupPrefixCls}-wrap\`]: {
      [\`
          &\${groupPrefixCls}-wrap-enter,
          &\${groupPrefixCls}-wrap-appear
        \`]: {
        opacity: 0,
        animationTimingFunction: motionEaseInOutCirc
      },
      [\`&\${groupPrefixCls}-wrap-leave\`]: {
        animationTimingFunction: motionEaseInOutCirc
      }
    }
  }];
};
// ============================== Group ==============================
const floatButtonGroupStyle = token => {
  const {
    antCls,
    componentCls,
    floatButtonSize,
    margin,
    borderRadiusLG,
    borderRadiusSM,
    badgeOffset,
    floatButtonBodyPadding
  } = token;
  const groupPrefixCls = \`\${componentCls}-group\`;
  return {
    [groupPrefixCls]: Object.assign(Object.assign({}, (0,style/* resetComponent */.Wf)(token)), {
      zIndex: 99,
      display: 'block',
      border: 'none',
      position: 'fixed',
      width: floatButtonSize,
      height: 'auto',
      boxShadow: 'none',
      minHeight: floatButtonSize,
      insetInlineEnd: token.floatButtonInsetInlineEnd,
      insetBlockEnd: token.floatButtonInsetBlockEnd,
      borderRadius: borderRadiusLG,
      [\`\${groupPrefixCls}-wrap\`]: {
        zIndex: -1,
        display: 'block',
        position: 'relative',
        marginBottom: margin
      },
      [\`&\${groupPrefixCls}-rtl\`]: {
        direction: 'rtl'
      },
      [componentCls]: {
        position: 'static'
      }
    }),
    [\`\${groupPrefixCls}-circle\`]: {
      [\`\${componentCls}-circle:not(:last-child)\`]: {
        marginBottom: token.margin,
        [\`\${componentCls}-body\`]: {
          width: floatButtonSize,
          height: floatButtonSize,
          borderRadius: '50%'
        }
      }
    },
    [\`\${groupPrefixCls}-square\`]: {
      [\`\${componentCls}-square\`]: {
        borderRadius: 0,
        padding: 0,
        '&:first-child': {
          borderStartStartRadius: borderRadiusLG,
          borderStartEndRadius: borderRadiusLG
        },
        '&:last-child': {
          borderEndStartRadius: borderRadiusLG,
          borderEndEndRadius: borderRadiusLG
        },
        '&:not(:last-child)': {
          borderBottom: \`\${token.lineWidth}px \${token.lineType} \${token.colorSplit}\`
        },
        [\`\${antCls}-badge\`]: {
          [\`\${antCls}-badge-count\`]: {
            top: -(floatButtonBodyPadding + badgeOffset),
            insetInlineEnd: -(floatButtonBodyPadding + badgeOffset)
          }
        }
      },
      [\`\${groupPrefixCls}-wrap\`]: {
        display: 'block',
        borderRadius: borderRadiusLG,
        boxShadow: token.boxShadowSecondary,
        [\`\${componentCls}-square\`]: {
          boxShadow: 'none',
          marginTop: 0,
          borderRadius: 0,
          padding: floatButtonBodyPadding,
          '&:first-child': {
            borderStartStartRadius: borderRadiusLG,
            borderStartEndRadius: borderRadiusLG
          },
          '&:last-child': {
            borderEndStartRadius: borderRadiusLG,
            borderEndEndRadius: borderRadiusLG
          },
          '&:not(:last-child)': {
            borderBottom: \`\${token.lineWidth}px \${token.lineType} \${token.colorSplit}\`
          },
          [\`\${componentCls}-body\`]: {
            width: token.floatButtonBodySize,
            height: token.floatButtonBodySize
          }
        }
      }
    },
    [\`\${groupPrefixCls}-circle-shadow\`]: {
      boxShadow: 'none'
    },
    [\`\${groupPrefixCls}-square-shadow\`]: {
      boxShadow: token.boxShadowSecondary,
      [\`\${componentCls}-square\`]: {
        boxShadow: 'none',
        padding: floatButtonBodyPadding,
        [\`\${componentCls}-body\`]: {
          width: token.floatButtonBodySize,
          height: token.floatButtonBodySize,
          borderRadius: borderRadiusSM
        }
      }
    }
  };
};
// ============================== Shared ==============================
const sharedFloatButtonStyle = token => {
  const {
    antCls,
    componentCls,
    floatButtonBodyPadding,
    floatButtonIconSize,
    floatButtonSize,
    borderRadiusLG,
    badgeOffset,
    dotOffsetInSquare,
    dotOffsetInCircle
  } = token;
  return {
    [componentCls]: Object.assign(Object.assign({}, (0,style/* resetComponent */.Wf)(token)), {
      border: 'none',
      position: 'fixed',
      cursor: 'pointer',
      zIndex: 99,
      display: 'block',
      justifyContent: 'center',
      alignItems: 'center',
      width: floatButtonSize,
      height: floatButtonSize,
      insetInlineEnd: token.floatButtonInsetInlineEnd,
      insetBlockEnd: token.floatButtonInsetBlockEnd,
      boxShadow: token.boxShadowSecondary,
      // Pure Panel
      '&-pure': {
        position: 'relative',
        inset: 'auto'
      },
      '&:empty': {
        display: 'none'
      },
      [\`\${antCls}-badge\`]: {
        width: '100%',
        height: '100%',
        [\`\${antCls}-badge-count\`]: {
          transform: 'translate(0, 0)',
          transformOrigin: 'center',
          top: -badgeOffset,
          insetInlineEnd: -badgeOffset
        }
      },
      [\`\${componentCls}-body\`]: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        transition: \`all \${token.motionDurationMid}\`,
        [\`\${componentCls}-content\`]: {
          overflow: 'hidden',
          textAlign: 'center',
          minHeight: floatButtonSize,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: \`\${floatButtonBodyPadding / 2}px \${floatButtonBodyPadding}px\`,
          [\`\${componentCls}-icon\`]: {
            textAlign: 'center',
            margin: 'auto',
            width: floatButtonIconSize,
            fontSize: floatButtonIconSize,
            lineHeight: 1
          }
        }
      }
    }),
    [\`\${componentCls}-rtl\`]: {
      direction: 'rtl'
    },
    [\`\${componentCls}-circle\`]: {
      height: floatButtonSize,
      borderRadius: '50%',
      [\`\${antCls}-badge\`]: {
        [\`\${antCls}-badge-dot\`]: {
          top: dotOffsetInCircle,
          insetInlineEnd: dotOffsetInCircle
        }
      },
      [\`\${componentCls}-body\`]: {
        borderRadius: '50%'
      }
    },
    [\`\${componentCls}-square\`]: {
      height: 'auto',
      minHeight: floatButtonSize,
      borderRadius: borderRadiusLG,
      [\`\${antCls}-badge\`]: {
        [\`\${antCls}-badge-dot\`]: {
          top: dotOffsetInSquare,
          insetInlineEnd: dotOffsetInSquare
        }
      },
      [\`\${componentCls}-body\`]: {
        height: 'auto',
        borderRadius: borderRadiusLG
      }
    },
    [\`\${componentCls}-default\`]: {
      backgroundColor: token.floatButtonBackgroundColor,
      transition: \`background-color \${token.motionDurationMid}\`,
      [\`\${componentCls}-body\`]: {
        backgroundColor: token.floatButtonBackgroundColor,
        transition: \`background-color \${token.motionDurationMid}\`,
        '&:hover': {
          backgroundColor: token.colorFillContent
        },
        [\`\${componentCls}-content\`]: {
          [\`\${componentCls}-icon\`]: {
            color: token.colorText
          },
          [\`\${componentCls}-description\`]: {
            display: 'flex',
            alignItems: 'center',
            lineHeight: \`\${token.fontSizeLG}px\`,
            color: token.colorText,
            fontSize: token.fontSizeSM
          }
        }
      }
    },
    [\`\${componentCls}-primary\`]: {
      backgroundColor: token.colorPrimary,
      [\`\${componentCls}-body\`]: {
        backgroundColor: token.colorPrimary,
        transition: \`background-color \${token.motionDurationMid}\`,
        '&:hover': {
          backgroundColor: token.colorPrimaryHover
        },
        [\`\${componentCls}-content\`]: {
          [\`\${componentCls}-icon\`]: {
            color: token.colorTextLightSolid
          },
          [\`\${componentCls}-description\`]: {
            display: 'flex',
            alignItems: 'center',
            lineHeight: \`\${token.fontSizeLG}px\`,
            color: token.colorTextLightSolid,
            fontSize: token.fontSizeSM
          }
        }
      }
    }
  };
};
// ============================== Export ==============================
/* harmony default export */ var float_button_style = ((0,genComponentStyleHook/* default */.Z)('FloatButton', token => {
  const {
    colorTextLightSolid,
    colorBgElevated,
    controlHeightLG,
    marginXXL,
    marginLG,
    fontSize,
    fontSizeIcon,
    controlItemBgHover,
    paddingXXS,
    borderRadiusLG
  } = token;
  const floatButtonToken = (0,statistic/* merge */.TS)(token, {
    floatButtonBackgroundColor: colorBgElevated,
    floatButtonColor: colorTextLightSolid,
    floatButtonHoverBackgroundColor: controlItemBgHover,
    floatButtonFontSize: fontSize,
    floatButtonIconSize: fontSizeIcon * 1.5,
    floatButtonSize: controlHeightLG,
    floatButtonInsetBlockEnd: marginXXL,
    floatButtonInsetInlineEnd: marginLG,
    floatButtonBodySize: controlHeightLG - paddingXXS * 2,
    // \u8FD9\u91CC\u7684 paddingXXS \u662F\u7B80\u5199\uFF0C\u5B8C\u6574\u903B\u8F91\u662F (controlHeightLG - (controlHeightLG - paddingXXS * 2)) / 2,
    floatButtonBodyPadding: paddingXXS,
    badgeOffset: paddingXXS * 1.5,
    dotOffsetInCircle: util(controlHeightLG / 2),
    dotOffsetInSquare: util(borderRadiusLG)
  });
  return [floatButtonGroupStyle(floatButtonToken), sharedFloatButtonStyle(floatButtonToken), (0,fade/* initFadeMotion */.J$)(token), initFloatButtonGroupMotion(floatButtonToken)];
}));
;// CONCATENATED MODULE: ./node_modules/antd/es/float-button/FloatButton.js
var FloatButton_rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};










const floatButtonPrefixCls = 'float-btn';
const FloatButton = (props, ref) => {
  const {
      prefixCls: customizePrefixCls,
      className,
      rootClassName,
      type = 'default',
      shape = 'circle',
      icon,
      description,
      tooltip,
      badge = {}
    } = props,
    restProps = FloatButton_rest(props, ["prefixCls", "className", "rootClassName", "type", "shape", "icon", "description", "tooltip", "badge"]);
  const {
    getPrefixCls,
    direction
  } = (0,react.useContext)(context/* ConfigContext */.E_);
  const groupShape = (0,react.useContext)(float_button_context);
  const prefixCls = getPrefixCls(floatButtonPrefixCls, customizePrefixCls);
  const [wrapSSR, hashId] = float_button_style(prefixCls);
  const mergeShape = groupShape || shape;
  const classString = classnames_default()(hashId, prefixCls, className, rootClassName, \`\${prefixCls}-\${type}\`, \`\${prefixCls}-\${mergeShape}\`, {
    [\`\${prefixCls}-rtl\`]: direction === 'rtl'
  });
  // \u867D\u7136\u5728 ts \u4E2D\u5DF2\u7ECF omit \u8FC7\u4E86\uFF0C\u4F46\u662F\u4E3A\u4E86\u9632\u6B62\u591A\u4F59\u7684\u5C5E\u6027\u88AB\u900F\u4F20\u8FDB\u6765\uFF0C\u8FD9\u91CC\u518D omit \u4E00\u904D\uFF0C\u4EE5\u9632\u4E07\u4E00
  const badgeProps = (0,react.useMemo)(() => (0,omit/* default */.Z)(badge, ['title', 'children', 'status', 'text']), [badge]);
  const contentProps = (0,react.useMemo)(() => ({
    prefixCls,
    description,
    icon,
    type
  }), [prefixCls, description, icon, type]);
  const buttonNode = /*#__PURE__*/react.createElement(es_tooltip/* default */.Z, {
    title: tooltip,
    placement: direction === 'rtl' ? 'right' : 'left'
  }, /*#__PURE__*/react.createElement(es_badge/* default */.Z, Object.assign({}, badgeProps), /*#__PURE__*/react.createElement("div", {
    className: \`\${prefixCls}-body\`
  }, /*#__PURE__*/react.createElement(float_button_FloatButtonContent, Object.assign({}, contentProps)))));
  if (false) {}
  return wrapSSR(props.href ? /*#__PURE__*/react.createElement("a", Object.assign({
    ref: ref
  }, restProps, {
    className: classString
  }), buttonNode) : /*#__PURE__*/react.createElement("button", Object.assign({
    ref: ref
  }, restProps, {
    className: classString,
    type: "button"
  }), buttonNode));
};
if (false) {}
const ForwardFloatButton = /*#__PURE__*/react.forwardRef(FloatButton);
/* harmony default export */ var float_button_FloatButton = (ForwardFloatButton);
// EXTERNAL MODULE: ./node_modules/rc-motion/es/index.js + 12 modules
var rc_motion_es = __webpack_require__(82225);
;// CONCATENATED MODULE: ./node_modules/antd/es/float-button/FloatButtonGroup.js










const FloatButtonGroup = props => {
  const {
    prefixCls: customizePrefixCls,
    className,
    style,
    shape = 'circle',
    type = 'default',
    icon = /*#__PURE__*/react.createElement(icons_FileTextOutlined, null),
    closeIcon = /*#__PURE__*/react.createElement(CloseOutlined/* default */.Z, null),
    description,
    trigger,
    children,
    onOpenChange
  } = props;
  const {
    direction,
    getPrefixCls
  } = (0,react.useContext)(context/* ConfigContext */.E_);
  const prefixCls = getPrefixCls(floatButtonPrefixCls, customizePrefixCls);
  const [wrapSSR, hashId] = float_button_style(prefixCls);
  const groupPrefixCls = \`\${prefixCls}-group\`;
  const groupCls = classnames_default()(groupPrefixCls, hashId, className, {
    [\`\${groupPrefixCls}-rtl\`]: direction === 'rtl',
    [\`\${groupPrefixCls}-\${shape}\`]: shape,
    [\`\${groupPrefixCls}-\${shape}-shadow\`]: !trigger
  });
  const wrapperCls = classnames_default()(hashId, \`\${groupPrefixCls}-wrap\`);
  const [open, setOpen] = (0,useMergedState/* default */.Z)(false, {
    value: props.open
  });
  const floatButtonGroupRef = (0,react.useRef)(null);
  const floatButtonRef = (0,react.useRef)(null);
  const hoverAction = (0,react.useMemo)(() => {
    const hoverTypeAction = {
      onMouseEnter() {
        setOpen(true);
        onOpenChange === null || onOpenChange === void 0 ? void 0 : onOpenChange(true);
      },
      onMouseLeave() {
        setOpen(false);
        onOpenChange === null || onOpenChange === void 0 ? void 0 : onOpenChange(false);
      }
    };
    return trigger === 'hover' ? hoverTypeAction : {};
  }, [trigger]);
  const handleOpenChange = () => {
    setOpen(prevState => {
      onOpenChange === null || onOpenChange === void 0 ? void 0 : onOpenChange(!prevState);
      return !prevState;
    });
  };
  const onClick = (0,react.useCallback)(e => {
    var _a, _b;
    if ((_a = floatButtonGroupRef.current) === null || _a === void 0 ? void 0 : _a.contains(e.target)) {
      if ((_b = floatButtonRef.current) === null || _b === void 0 ? void 0 : _b.contains(e.target)) {
        handleOpenChange();
      }
      return;
    }
    setOpen(false);
    onOpenChange === null || onOpenChange === void 0 ? void 0 : onOpenChange(false);
  }, [trigger]);
  (0,react.useEffect)(() => {
    if (trigger === 'click') {
      document.addEventListener('click', onClick);
      return () => {
        document.removeEventListener('click', onClick);
      };
    }
  }, [trigger]);
  return wrapSSR( /*#__PURE__*/react.createElement(FloatButtonGroupProvider, {
    value: shape
  }, /*#__PURE__*/react.createElement("div", Object.assign({
    ref: floatButtonGroupRef,
    className: groupCls,
    style: style
  }, hoverAction), trigger && ['click', 'hover'].includes(trigger) ? /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(rc_motion_es/* default */.ZP, {
    visible: open,
    motionName: \`\${groupPrefixCls}-wrap\`
  }, _ref => {
    let {
      className: motionClassName
    } = _ref;
    return /*#__PURE__*/react.createElement("div", {
      className: classnames_default()(motionClassName, wrapperCls)
    }, children);
  }), /*#__PURE__*/react.createElement(float_button_FloatButton, {
    ref: floatButtonRef,
    type: type,
    shape: shape,
    icon: open ? closeIcon : icon,
    description: description
  })) : children)));
};
/* harmony default export */ var float_button_FloatButtonGroup = (/*#__PURE__*/(0,react.memo)(FloatButtonGroup));
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/VerticalAlignTopOutlined.js
// This icon file is generated automatically.
var VerticalAlignTopOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M859.9 168H164.1c-4.5 0-8.1 3.6-8.1 8v60c0 4.4 3.6 8 8.1 8h695.8c4.5 0 8.1-3.6 8.1-8v-60c0-4.4-3.6-8-8.1-8zM518.3 355a8 8 0 00-12.6 0l-112 141.7a7.98 7.98 0 006.3 12.9h73.9V848c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V509.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 355z" } }] }, "name": "vertical-align-top", "theme": "outlined" };
/* harmony default export */ var asn_VerticalAlignTopOutlined = (VerticalAlignTopOutlined);

;// CONCATENATED MODULE: ./node_modules/antd/node_modules/@ant-design/icons/es/icons/VerticalAlignTopOutlined.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var VerticalAlignTopOutlined_VerticalAlignTopOutlined = function VerticalAlignTopOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(components_AntdIcon/* default */.Z, (0,esm_extends/* default */.Z)({}, props, {
    ref: ref,
    icon: asn_VerticalAlignTopOutlined
  }));
};
if (false) {}
/* harmony default export */ var icons_VerticalAlignTopOutlined = (/*#__PURE__*/react.forwardRef(VerticalAlignTopOutlined_VerticalAlignTopOutlined));
// EXTERNAL MODULE: ./node_modules/antd/es/_util/getScroll.js
var getScroll = __webpack_require__(66367);
// EXTERNAL MODULE: ./node_modules/antd/es/_util/scrollTo.js + 1 modules
var scrollTo = __webpack_require__(58375);
// EXTERNAL MODULE: ./node_modules/rc-util/es/raf.js
var raf = __webpack_require__(75164);
;// CONCATENATED MODULE: ./node_modules/antd/es/_util/throttleByAnimationFrame.js


function throttleByAnimationFrame(fn) {
  let requestId;
  const later = args => () => {
    requestId = null;
    fn.apply(void 0, (0,esm_toConsumableArray/* default */.Z)(args));
  };
  const throttled = function () {
    if (requestId == null) {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      requestId = (0,raf/* default */.Z)(later(args));
    }
  };
  throttled.cancel = () => {
    raf/* default.cancel */.Z.cancel(requestId);
    requestId = null;
  };
  return throttled;
}
/* harmony default export */ var _util_throttleByAnimationFrame = (throttleByAnimationFrame);
;// CONCATENATED MODULE: ./node_modules/antd/es/float-button/BackTop.js
var BackTop_rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};











const BackTop = props => {
  const {
      prefixCls: customizePrefixCls,
      className,
      type = 'default',
      shape = 'circle',
      visibilityHeight = 400,
      icon = /*#__PURE__*/react.createElement(icons_VerticalAlignTopOutlined, null),
      target,
      onClick,
      duration = 450
    } = props,
    restProps = BackTop_rest(props, ["prefixCls", "className", "type", "shape", "visibilityHeight", "icon", "target", "onClick", "duration"]);
  const [visible, setVisible] = (0,react.useState)(visibilityHeight === 0);
  const ref = (0,react.useRef)(null);
  const getDefaultTarget = () => ref.current && ref.current.ownerDocument ? ref.current.ownerDocument : window;
  const handleScroll = _util_throttleByAnimationFrame(e => {
    const scrollTop = (0,getScroll/* default */.Z)(e.target, true);
    setVisible(scrollTop >= visibilityHeight);
  });
  (0,react.useEffect)(() => {
    const getTarget = target || getDefaultTarget;
    const container = getTarget();
    handleScroll({
      target: container
    });
    container === null || container === void 0 ? void 0 : container.addEventListener('scroll', handleScroll);
    return () => {
      handleScroll.cancel();
      container === null || container === void 0 ? void 0 : container.removeEventListener('scroll', handleScroll);
    };
  }, [target]);
  const scrollToTop = e => {
    (0,scrollTo/* default */.Z)(0, {
      getContainer: target || getDefaultTarget,
      duration
    });
    onClick === null || onClick === void 0 ? void 0 : onClick(e);
  };
  const {
    getPrefixCls
  } = (0,react.useContext)(context/* ConfigContext */.E_);
  const prefixCls = getPrefixCls(floatButtonPrefixCls, customizePrefixCls);
  const rootPrefixCls = getPrefixCls();
  const [wrapSSR] = float_button_style(prefixCls);
  const groupShape = (0,react.useContext)(float_button_context);
  const mergeShape = groupShape || shape;
  const contentProps = Object.assign({
    prefixCls,
    icon,
    type,
    shape: mergeShape
  }, restProps);
  return wrapSSR( /*#__PURE__*/react.createElement(rc_motion_es/* default */.ZP, {
    visible: visible,
    motionName: \`\${rootPrefixCls}-fade\`
  }, _ref => {
    let {
      className: motionClassName
    } = _ref;
    return /*#__PURE__*/react.createElement(float_button_FloatButton, Object.assign({
      ref: ref
    }, contentProps, {
      onClick: scrollToTop,
      className: classnames_default()(className, motionClassName)
    }));
  }));
};
if (false) {}
/* harmony default export */ var float_button_BackTop = (/*#__PURE__*/(0,react.memo)(BackTop));
;// CONCATENATED MODULE: ./node_modules/antd/es/float-button/PurePanel.js
var PurePanel_rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
/* eslint-disable react/no-array-index-key */






const PureFloatButton = _a => {
  var {
      backTop
    } = _a,
    props = PurePanel_rest(_a, ["backTop"]);
  return backTop ? /*#__PURE__*/react.createElement(float_button_BackTop, Object.assign({}, props, {
    visibilityHeight: 0
  })) : /*#__PURE__*/react.createElement(float_button_FloatButton, Object.assign({}, props));
};
function float_button_PurePanel_PurePanel(_a) {
  var {
      className,
      items
    } = _a,
    props = PurePanel_rest(_a, ["className", "items"]);
  const {
    prefixCls: customizePrefixCls
  } = props;
  const {
    getPrefixCls
  } = react.useContext(context/* ConfigContext */.E_);
  const prefixCls = getPrefixCls(floatButtonPrefixCls, customizePrefixCls);
  const pureCls = \`\${prefixCls}-pure\`;
  if (items) {
    return /*#__PURE__*/react.createElement(float_button_FloatButtonGroup, Object.assign({
      className: classnames_default()(className, pureCls)
    }, props), items.map((item, index) => /*#__PURE__*/react.createElement(PureFloatButton, Object.assign({
      key: index
    }, item))));
  }
  return /*#__PURE__*/react.createElement(PureFloatButton, Object.assign({
    className: classnames_default()(className, pureCls)
  }, props));
}
/* harmony default export */ var float_button_PurePanel = (/*#__PURE__*/react.memo(float_button_PurePanel_PurePanel));
;// CONCATENATED MODULE: ./node_modules/antd/es/float-button/index.js




float_button_FloatButton.BackTop = float_button_BackTop;
float_button_FloatButton.Group = float_button_FloatButtonGroup;
float_button_FloatButton._InternalPanelDoNotUseOrYouWillBeFired = float_button_PurePanel;
/* harmony default export */ var float_button = (float_button_FloatButton);
// EXTERNAL MODULE: ./node_modules/antd/es/_util/PurePanel.js
var _util_PurePanel = __webpack_require__(8745);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var esm_defineProperty = __webpack_require__(4942);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(15671);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(43144);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__(32531);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createSuper.js + 3 modules
var createSuper = __webpack_require__(73568);
;// CONCATENATED MODULE: ./node_modules/@rc-component/color-picker/es/color.js







var color_excluded = ["v"];


var Color = /*#__PURE__*/function (_TinyColor) {
  (0,inherits/* default */.Z)(Color, _TinyColor);
  var _super = (0,createSuper/* default */.Z)(Color);
  function Color(color) {
    (0,classCallCheck/* default */.Z)(this, Color);
    return _super.call(this, convertHsb2Hsv(color));
  }
  (0,createClass/* default */.Z)(Color, [{
    key: "toHsbString",
    value: function toHsbString() {
      var hsb = this.toHsb();
      var saturation = getRoundNumber(hsb.s * 100);
      var lightness = getRoundNumber(hsb.b * 100);
      var hue = getRoundNumber(hsb.h);
      var alpha = hsb.a;
      var hsbString = "hsb(".concat(hue, ", ").concat(saturation, "%, ").concat(lightness, "%)");
      var hsbaString = "hsba(".concat(hue, ", ").concat(saturation, "%, ").concat(lightness, "%, ").concat(alpha.toFixed(alpha === 0 ? 0 : 2), ")");
      return alpha === 1 ? hsbString : hsbaString;
    }
  }, {
    key: "toHsb",
    value: function toHsb() {
      var hsv = this.toHsv();
      if ((0,esm_typeof/* default */.Z)(this.originalInput) === 'object' && this.originalInput) {
        if ('h' in this.originalInput) {
          hsv = this.originalInput;
        }
      }
      var _hsv = hsv,
        v = _hsv.v,
        resets = (0,esm_objectWithoutProperties/* default */.Z)(_hsv, color_excluded);
      return (0,esm_objectSpread2/* default */.Z)((0,esm_objectSpread2/* default */.Z)({}, resets), {}, {
        b: hsv.v
      });
    }
  }]);
  return Color;
}(dist_module/* TinyColor */.C);
;// CONCATENATED MODULE: ./node_modules/@rc-component/color-picker/es/util.js



var util_excluded = ["b"];

var ColorPickerPrefixCls = 'rc-color-picker';
var getRoundNumber = function getRoundNumber(value) {
  return Math.round(Number(value || 0));
};
var convertHsb2Hsv = function convertHsb2Hsv(color) {
  if (color && (0,esm_typeof/* default */.Z)(color) === 'object' && 'h' in color && 'b' in color) {
    var _ref = color,
      b = _ref.b,
      resets = (0,esm_objectWithoutProperties/* default */.Z)(_ref, util_excluded);
    return (0,esm_objectSpread2/* default */.Z)((0,esm_objectSpread2/* default */.Z)({}, resets), {}, {
      v: b
    });
  }
  if (typeof color === 'string' && /hsb/.test(color)) {
    return color.replace(/hsb/, 'hsv');
  }
  return color;
};
var generateColor = function generateColor(color) {
  if (color instanceof Color) {
    return color;
  }
  return new Color(color);
};
var defaultColor = generateColor('#1677ff');
var calculateColor = function calculateColor(props) {
  var offset = props.offset,
    targetRef = props.targetRef,
    containerRef = props.containerRef,
    color = props.color,
    type = props.type;
  var _containerRef$current = containerRef.current.getBoundingClientRect(),
    width = _containerRef$current.width,
    height = _containerRef$current.height;
  var _targetRef$current$ge = targetRef.current.getBoundingClientRect(),
    targetWidth = _targetRef$current$ge.width,
    targetHeight = _targetRef$current$ge.height;
  var centerOffsetX = targetWidth / 2;
  var centerOffsetY = targetHeight / 2;
  var saturation = (offset.x + centerOffsetX) / width;
  var bright = 1 - (offset.y + centerOffsetY) / height;
  var hsb = color.toHsb();
  var alphaOffset = saturation;
  var hueOffset = (offset.x + centerOffsetX) / width * 360;
  if (type) {
    switch (type) {
      case 'hue':
        return generateColor((0,esm_objectSpread2/* default */.Z)((0,esm_objectSpread2/* default */.Z)({}, hsb), {}, {
          h: hueOffset <= 0 ? 0 : hueOffset
        }));
      case 'alpha':
        return generateColor((0,esm_objectSpread2/* default */.Z)((0,esm_objectSpread2/* default */.Z)({}, hsb), {}, {
          a: alphaOffset <= 0 ? 0 : alphaOffset
        }));
    }
  }
  return generateColor({
    h: hsb.h,
    s: saturation <= 0 ? 0 : saturation,
    b: bright >= 1 ? 1 : bright,
    a: hsb.a
  });
};
var calculateOffset = function calculateOffset(containerRef, targetRef, color, type) {
  var _containerRef$current2 = containerRef.current.getBoundingClientRect(),
    width = _containerRef$current2.width,
    height = _containerRef$current2.height;
  var _targetRef$current$ge2 = targetRef.current.getBoundingClientRect(),
    targetWidth = _targetRef$current$ge2.width,
    targetHeight = _targetRef$current$ge2.height;
  var centerOffsetX = targetWidth / 2;
  var centerOffsetY = targetHeight / 2;
  var hsb = color.toHsb();

  // Exclusion of boundary cases
  if (targetWidth === 0 && targetHeight === 0 || targetWidth !== targetHeight) {
    return;
  }
  if (type) {
    switch (type) {
      case 'hue':
        return {
          x: hsb.h / 360 * width - centerOffsetX,
          y: -centerOffsetY / 3
        };
      case 'alpha':
        return {
          x: hsb.a / 1 * width - centerOffsetX,
          y: -centerOffsetY / 3
        };
    }
  }
  return {
    x: hsb.s * width - centerOffsetX,
    y: (1 - hsb.b) * height - centerOffsetY
  };
};
;// CONCATENATED MODULE: ./node_modules/@rc-component/color-picker/es/components/ColorBlock.js


var ColorBlock = function ColorBlock(_ref) {
  var color = _ref.color,
    prefixCls = _ref.prefixCls,
    className = _ref.className,
    style = _ref.style,
    onClick = _ref.onClick;
  var colorBlockCls = "".concat(prefixCls, "-color-block");
  return /*#__PURE__*/react.createElement("div", {
    className: classnames_default()(colorBlockCls, className),
    style: style,
    onClick: onClick
  }, /*#__PURE__*/react.createElement("div", {
    className: "".concat(colorBlockCls, "-inner"),
    style: {
      background: color
    }
  }));
};
/* harmony default export */ var components_ColorBlock = (ColorBlock);
;// CONCATENATED MODULE: ./node_modules/@rc-component/color-picker/es/hooks/useColorDrag.js


function getPosition(e) {
  var obj = 'touches' in e ? e.touches[0] : e;
  var scrollXOffset = document.documentElement.scrollLeft || document.body.scrollLeft || window.pageXOffset;
  var scrollYOffset = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset;
  return {
    pageX: obj.pageX - scrollXOffset,
    pageY: obj.pageY - scrollYOffset
  };
}
function useColorDrag(props) {
  var offset = props.offset,
    targetRef = props.targetRef,
    containerRef = props.containerRef,
    direction = props.direction,
    onDragChange = props.onDragChange,
    onDragChangeComplete = props.onDragChangeComplete,
    calculate = props.calculate,
    color = props.color,
    disabledDrag = props.disabledDrag;
  var _useState = (0,react.useState)(offset || {
      x: 0,
      y: 0
    }),
    _useState2 = (0,esm_slicedToArray/* default */.Z)(_useState, 2),
    offsetValue = _useState2[0],
    setOffsetValue = _useState2[1];
  var mouseMoveRef = (0,react.useRef)(null);
  var mouseUpRef = (0,react.useRef)(null);
  var dragRef = (0,react.useRef)({
    flag: false
  });
  (0,react.useEffect)(function () {
    if (dragRef.current.flag === false) {
      var calcOffset = calculate === null || calculate === void 0 ? void 0 : calculate(containerRef);
      if (calcOffset) {
        setOffsetValue(calcOffset);
      }
    }
  }, [color, containerRef]);
  (0,react.useEffect)(function () {
    return function () {
      document.removeEventListener('mousemove', mouseMoveRef.current);
      document.removeEventListener('mouseup', mouseUpRef.current);
      document.removeEventListener('touchmove', mouseMoveRef.current);
      document.removeEventListener('touchend', mouseUpRef.current);
      mouseMoveRef.current = null;
      mouseUpRef.current = null;
    };
  }, []);
  var updateOffset = function updateOffset(e) {
    var _getPosition = getPosition(e),
      pageX = _getPosition.pageX,
      pageY = _getPosition.pageY;
    var _containerRef$current = containerRef.current.getBoundingClientRect(),
      rectX = _containerRef$current.x,
      rectY = _containerRef$current.y,
      width = _containerRef$current.width,
      height = _containerRef$current.height;
    var _targetRef$current$ge = targetRef.current.getBoundingClientRect(),
      targetWidth = _targetRef$current$ge.width,
      targetHeight = _targetRef$current$ge.height;
    var centerOffsetX = targetWidth / 2;
    var centerOffsetY = targetHeight / 2;
    var offsetX = Math.max(0, Math.min(pageX - rectX, width)) - centerOffsetX;
    var offsetY = Math.max(0, Math.min(pageY - rectY, height)) - centerOffsetY;
    var calcOffset = {
      x: offsetX,
      y: direction === 'x' ? offsetValue.y : offsetY
    };

    // Exclusion of boundary cases
    if (targetWidth === 0 && targetHeight === 0 || targetWidth !== targetHeight) {
      return false;
    }
    setOffsetValue(calcOffset);
    onDragChange === null || onDragChange === void 0 ? void 0 : onDragChange(calcOffset);
  };
  var onDragMove = function onDragMove(e) {
    e.preventDefault();
    updateOffset(e);
  };
  var onDragStop = function onDragStop(e) {
    e.preventDefault();
    dragRef.current.flag = false;
    document.removeEventListener('mousemove', mouseMoveRef.current);
    document.removeEventListener('mouseup', mouseUpRef.current);
    document.removeEventListener('touchmove', mouseMoveRef.current);
    document.removeEventListener('touchend', mouseUpRef.current);
    mouseMoveRef.current = null;
    mouseUpRef.current = null;
    onDragChangeComplete === null || onDragChangeComplete === void 0 ? void 0 : onDragChangeComplete();
  };
  var onDragStart = function onDragStart(e) {
    if (disabledDrag) {
      return;
    }
    updateOffset(e);
    dragRef.current.flag = true;
    document.addEventListener('mousemove', onDragMove);
    document.addEventListener('mouseup', onDragStop);
    document.addEventListener('touchmove', onDragMove);
    document.addEventListener('touchend', onDragStop);
    mouseMoveRef.current = onDragMove;
    mouseUpRef.current = onDragStop;
  };
  return [offsetValue, onDragStart];
}
/* harmony default export */ var hooks_useColorDrag = (useColorDrag);
;// CONCATENATED MODULE: ./node_modules/@rc-component/color-picker/es/components/Handler.js



var Handler = function Handler(_ref) {
  var _ref$size = _ref.size,
    size = _ref$size === void 0 ? 'default' : _ref$size,
    color = _ref.color,
    prefixCls = _ref.prefixCls;
  return /*#__PURE__*/react.createElement("div", {
    className: classnames_default()("".concat(prefixCls, "-handler"), (0,esm_defineProperty/* default */.Z)({}, "".concat(prefixCls, "-handler-sm"), size === 'small')),
    style: {
      backgroundColor: color
    }
  });
};
/* harmony default export */ var components_Handler = (Handler);
;// CONCATENATED MODULE: ./node_modules/@rc-component/color-picker/es/components/Palette.js


var Palette = function Palette(_ref) {
  var children = _ref.children,
    style = _ref.style,
    prefixCls = _ref.prefixCls;
  return /*#__PURE__*/react.createElement("div", {
    className: "".concat(prefixCls, "-palette"),
    style: (0,esm_objectSpread2/* default */.Z)({
      position: 'relative'
    }, style)
  }, children);
};
/* harmony default export */ var components_Palette = (Palette);
;// CONCATENATED MODULE: ./node_modules/@rc-component/color-picker/es/components/Transform.js

var Transform = /*#__PURE__*/(0,react.forwardRef)(function (props, ref) {
  var children = props.children,
    offset = props.offset;
  return /*#__PURE__*/react.createElement("div", {
    ref: ref,
    style: {
      position: 'absolute',
      left: offset.x,
      top: offset.y,
      zIndex: 1
    }
  }, children);
});
/* harmony default export */ var components_Transform = (Transform);
;// CONCATENATED MODULE: ./node_modules/@rc-component/color-picker/es/components/Picker.js







var Picker = function Picker(_ref) {
  var color = _ref.color,
    onChange = _ref.onChange,
    prefixCls = _ref.prefixCls,
    onChangeComplete = _ref.onChangeComplete,
    disabled = _ref.disabled;
  var pickerRef = (0,react.useRef)();
  var transformRef = (0,react.useRef)();
  var _useColorDrag = hooks_useColorDrag({
      color: color,
      containerRef: pickerRef,
      targetRef: transformRef,
      calculate: function calculate(containerRef) {
        return calculateOffset(containerRef, transformRef, color);
      },
      onDragChange: function onDragChange(offsetValue) {
        return onChange(calculateColor({
          offset: offsetValue,
          targetRef: transformRef,
          containerRef: pickerRef,
          color: color
        }));
      },
      onDragChangeComplete: onChangeComplete,
      disabledDrag: disabled
    }),
    _useColorDrag2 = (0,esm_slicedToArray/* default */.Z)(_useColorDrag, 2),
    offset = _useColorDrag2[0],
    dragStartHandle = _useColorDrag2[1];
  return /*#__PURE__*/react.createElement("div", {
    ref: pickerRef,
    className: "".concat(prefixCls, "-select"),
    onMouseDown: dragStartHandle,
    onTouchStart: dragStartHandle
  }, /*#__PURE__*/react.createElement(components_Palette, {
    prefixCls: prefixCls
  }, /*#__PURE__*/react.createElement(components_Transform, {
    offset: offset,
    ref: transformRef
  }, /*#__PURE__*/react.createElement(components_Handler, {
    color: color.toRgbString(),
    prefixCls: prefixCls
  })), /*#__PURE__*/react.createElement("div", {
    className: "".concat(prefixCls, "-saturation"),
    style: {
      backgroundColor: "hsl(".concat(color.toHsb().h, ",100%, 50%)"),
      backgroundImage: 'linear-gradient(0deg, #000, transparent),linear-gradient(90deg, #fff, hsla(0, 0%, 100%, 0))'
    }
  })));
};
/* harmony default export */ var components_Picker = (Picker);
;// CONCATENATED MODULE: ./node_modules/@rc-component/color-picker/es/components/Gradient.js


var Gradient = function Gradient(_ref) {
  var colors = _ref.colors,
    children = _ref.children,
    _ref$direction = _ref.direction,
    direction = _ref$direction === void 0 ? 'to right' : _ref$direction,
    type = _ref.type,
    prefixCls = _ref.prefixCls;
  var gradientColors = (0,react.useMemo)(function () {
    return colors.map(function (color, idx) {
      var result = generateColor(color);
      if (type === 'alpha' && idx === colors.length - 1) {
        result.setAlpha(1);
      }
      return result.toRgbString();
    }).join(',');
  }, [colors, type]);
  return /*#__PURE__*/react.createElement("div", {
    className: "".concat(prefixCls, "-gradient"),
    style: {
      position: 'absolute',
      inset: 0,
      background: "linear-gradient(".concat(direction, ", ").concat(gradientColors, ")")
    }
  }, children);
};
/* harmony default export */ var components_Gradient = (Gradient);
;// CONCATENATED MODULE: ./node_modules/@rc-component/color-picker/es/components/Slider.js









var Slider = function Slider(_ref) {
  var gradientColors = _ref.gradientColors,
    direction = _ref.direction,
    _ref$type = _ref.type,
    type = _ref$type === void 0 ? 'hue' : _ref$type,
    color = _ref.color,
    value = _ref.value,
    onChange = _ref.onChange,
    onChangeComplete = _ref.onChangeComplete,
    disabled = _ref.disabled,
    prefixCls = _ref.prefixCls;
  var sliderRef = (0,react.useRef)();
  var transformRef = (0,react.useRef)();
  var _useColorDrag = hooks_useColorDrag({
      color: color,
      targetRef: transformRef,
      containerRef: sliderRef,
      calculate: function calculate(containerRef) {
        return calculateOffset(containerRef, transformRef, color, type);
      },
      onDragChange: function onDragChange(offsetValue) {
        onChange(calculateColor({
          offset: offsetValue,
          targetRef: transformRef,
          containerRef: sliderRef,
          color: color,
          type: type
        }));
      },
      onDragChangeComplete: function onDragChangeComplete() {
        onChangeComplete === null || onChangeComplete === void 0 ? void 0 : onChangeComplete(type);
      },
      direction: 'x',
      disabledDrag: disabled
    }),
    _useColorDrag2 = (0,esm_slicedToArray/* default */.Z)(_useColorDrag, 2),
    offset = _useColorDrag2[0],
    dragStartHandle = _useColorDrag2[1];
  return /*#__PURE__*/react.createElement("div", {
    ref: sliderRef,
    className: classnames_default()("".concat(prefixCls, "-slider"), "".concat(prefixCls, "-slider-").concat(type)),
    onMouseDown: dragStartHandle,
    onTouchStart: dragStartHandle
  }, /*#__PURE__*/react.createElement(components_Palette, {
    prefixCls: prefixCls
  }, /*#__PURE__*/react.createElement(components_Transform, {
    offset: offset,
    ref: transformRef
  }, /*#__PURE__*/react.createElement(components_Handler, {
    size: "small",
    color: value,
    prefixCls: prefixCls
  })), /*#__PURE__*/react.createElement(components_Gradient, {
    colors: gradientColors,
    direction: direction,
    type: type,
    prefixCls: prefixCls
  })));
};
/* harmony default export */ var components_Slider = (Slider);
;// CONCATENATED MODULE: ./node_modules/@rc-component/color-picker/es/hooks/useColorState.js



function hasValue(value) {
  return value !== undefined;
}
var useColorState = function useColorState(defaultStateValue, option) {
  var defaultValue = option.defaultValue,
    value = option.value;
  var _useState = (0,react.useState)(function () {
      var mergeState;
      if (hasValue(value)) {
        mergeState = value;
      } else if (hasValue(defaultValue)) {
        mergeState = defaultValue;
      } else {
        mergeState = defaultStateValue;
      }
      return generateColor(mergeState);
    }),
    _useState2 = (0,esm_slicedToArray/* default */.Z)(_useState, 2),
    colorValue = _useState2[0],
    setColorValue = _useState2[1];
  (0,react.useEffect)(function () {
    if (value) {
      setColorValue(generateColor(value));
    }
  }, [value]);
  return [colorValue, setColorValue];
};
/* harmony default export */ var hooks_useColorState = (useColorState);
;// CONCATENATED MODULE: ./node_modules/@rc-component/color-picker/es/ColorPicker.js










var hueColor = ['rgb(255, 0, 0) 0%', 'rgb(255, 255, 0) 17%', 'rgb(0, 255, 0) 33%', 'rgb(0, 255, 255) 50%', 'rgb(0, 0, 255) 67%', 'rgb(255, 0, 255) 83%', 'rgb(255, 0, 0) 100%'];
/* harmony default export */ var ColorPicker = (/*#__PURE__*/(0,react.forwardRef)(function (props, ref) {
  var value = props.value,
    defaultValue = props.defaultValue,
    _props$prefixCls = props.prefixCls,
    prefixCls = _props$prefixCls === void 0 ? ColorPickerPrefixCls : _props$prefixCls,
    onChange = props.onChange,
    onChangeComplete = props.onChangeComplete,
    className = props.className,
    style = props.style,
    panelRender = props.panelRender,
    _props$disabledAlpha = props.disabledAlpha,
    disabledAlpha = _props$disabledAlpha === void 0 ? false : _props$disabledAlpha,
    _props$disabled = props.disabled,
    disabled = _props$disabled === void 0 ? false : _props$disabled;
  var _useColorState = hooks_useColorState(defaultColor, {
      value: value,
      defaultValue: defaultValue
    }),
    _useColorState2 = (0,esm_slicedToArray/* default */.Z)(_useColorState, 2),
    colorValue = _useColorState2[0],
    setColorValue = _useColorState2[1];
  var alphaColor = (0,react.useMemo)(function () {
    var rgb = generateColor(colorValue.toRgbString());
    // alpha color need equal 1 for base color
    rgb.setAlpha(1);
    return rgb.toRgbString();
  }, [colorValue]);
  var mergeCls = classnames_default()("".concat(prefixCls, "-panel"), className, (0,esm_defineProperty/* default */.Z)({}, "".concat(prefixCls, "-panel-disabled"), disabled));
  var basicProps = {
    prefixCls: prefixCls,
    onChangeComplete: onChangeComplete,
    disabled: disabled
  };
  var handleChange = function handleChange(data, type) {
    if (!value) {
      setColorValue(data);
    }
    onChange === null || onChange === void 0 ? void 0 : onChange(data, type);
  };
  var defaultPanel = /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(components_Picker, (0,esm_extends/* default */.Z)({
    color: colorValue,
    onChange: handleChange
  }, basicProps)), /*#__PURE__*/react.createElement("div", {
    className: "".concat(prefixCls, "-slider-container")
  }, /*#__PURE__*/react.createElement("div", {
    className: classnames_default()("".concat(prefixCls, "-slider-group"), (0,esm_defineProperty/* default */.Z)({}, "".concat(prefixCls, "-slider-group-disabled-alpha"), disabledAlpha))
  }, /*#__PURE__*/react.createElement(components_Slider, (0,esm_extends/* default */.Z)({
    gradientColors: hueColor,
    color: colorValue,
    value: "hsl(".concat(colorValue.toHsb().h, ",100%, 50%)"),
    onChange: function onChange(color) {
      return handleChange(color, 'hue');
    }
  }, basicProps)), !disabledAlpha && /*#__PURE__*/react.createElement(components_Slider, (0,esm_extends/* default */.Z)({
    type: "alpha",
    gradientColors: ['rgba(255, 0, 4, 0) 0%', alphaColor],
    color: colorValue,
    value: colorValue.toRgbString(),
    onChange: function onChange(color) {
      return handleChange(color, 'alpha');
    }
  }, basicProps))), /*#__PURE__*/react.createElement(components_ColorBlock, {
    color: colorValue.toRgbString(),
    prefixCls: prefixCls
  })));
  return /*#__PURE__*/react.createElement("div", {
    className: mergeCls,
    style: style,
    ref: ref
  }, typeof panelRender === 'function' ? panelRender(defaultPanel) : defaultPanel);
}));
;// CONCATENATED MODULE: ./node_modules/@rc-component/color-picker/es/index.js




/* harmony default export */ var color_picker_es = (ColorPicker);
// EXTERNAL MODULE: ./node_modules/antd/es/divider/index.js + 1 modules
var divider = __webpack_require__(96074);
;// CONCATENATED MODULE: ./node_modules/antd/es/color-picker/color.js




let ColorFactory = /*#__PURE__*/function () {
  function ColorFactory(color) {
    (0,classCallCheck/* default */.Z)(this, ColorFactory);
    this.metaColor = new Color(color);
  }
  (0,createClass/* default */.Z)(ColorFactory, [{
    key: "toHsb",
    value: function toHsb() {
      return this.metaColor.toHsb();
    }
  }, {
    key: "toHsbString",
    value: function toHsbString() {
      return this.metaColor.toHsbString();
    }
  }, {
    key: "toHex",
    value: function toHex() {
      return getHex(this.toHexString(), this.metaColor.getAlpha() < 1);
    }
  }, {
    key: "toHexString",
    value: function toHexString() {
      return this.metaColor.getAlpha() === 1 ? this.metaColor.toHexString() : this.metaColor.toHex8String();
    }
  }, {
    key: "toRgb",
    value: function toRgb() {
      return this.metaColor.toRgb();
    }
  }, {
    key: "toRgbString",
    value: function toRgbString() {
      return this.metaColor.toRgbString();
    }
  }]);
  return ColorFactory;
}();
;// CONCATENATED MODULE: ./node_modules/antd/es/color-picker/util.js


const customizePrefixCls = 'ant-color-picker';
const util_generateColor = color => {
  if (color instanceof ColorFactory) {
    return color;
  }
  return new ColorFactory(color);
};
const getAlphaColor = color => getRoundNumber(color.toHsb().a * 100);
const toHexFormat = (value, alpha) => (value === null || value === void 0 ? void 0 : value.replace(/[^\\w/]/gi, '').slice(0, alpha ? 8 : 6)) || '';
const getHex = (value, alpha) => value ? toHexFormat(value, alpha) : '';
;// CONCATENATED MODULE: ./node_modules/antd/es/color-picker/components/ColorClear.js


const ColorClear = _ref => {
  let {
    prefixCls,
    value,
    onChange
  } = _ref;
  const handleClick = () => {
    if (value) {
      const hsba = value.toHsb();
      hsba.a = 0;
      const genColor = util_generateColor(hsba);
      onChange === null || onChange === void 0 ? void 0 : onChange(genColor);
    }
  };
  return /*#__PURE__*/react.createElement("div", {
    className: \`\${prefixCls}-clear\`,
    onClick: handleClick
  });
};
/* harmony default export */ var components_ColorClear = (ColorClear);
// EXTERNAL MODULE: ./node_modules/antd/es/select/index.js + 29 modules
var es_select = __webpack_require__(40038);
;// CONCATENATED MODULE: ./node_modules/antd/es/color-picker/interface.js
var ColorFormat;
(function (ColorFormat) {
  ColorFormat["hex"] = "hex";
  ColorFormat["rgb"] = "rgb";
  ColorFormat["hsb"] = "hsb";
})(ColorFormat || (ColorFormat = {}));
// EXTERNAL MODULE: ./node_modules/antd/es/input-number/index.js + 13 modules
var input_number = __webpack_require__(77547);
;// CONCATENATED MODULE: ./node_modules/antd/es/color-picker/components/ColorSteppers.js



const ColorSteppers = _ref => {
  let {
    prefixCls,
    min = 0,
    max = 100,
    value,
    onChange,
    className,
    formatter
  } = _ref;
  const colorSteppersPrefixCls = \`\${prefixCls}-steppers\`;
  const [stepValue, setStepValue] = (0,react.useState)(value);
  // Update step value
  (0,react.useEffect)(() => {
    if (!Number.isNaN(value)) {
      setStepValue(value);
    }
  }, [value]);
  return /*#__PURE__*/react.createElement(input_number/* default */.Z, {
    className: classnames_default()(colorSteppersPrefixCls, className),
    min: min,
    max: max,
    value: stepValue,
    formatter: formatter,
    size: "small",
    onChange: step => {
      if (!value) {
        setStepValue(step || 0);
      }
      onChange === null || onChange === void 0 ? void 0 : onChange(step);
    }
  });
};
/* harmony default export */ var components_ColorSteppers = (ColorSteppers);
;// CONCATENATED MODULE: ./node_modules/antd/es/color-picker/components/ColorAlphaInput.js



const ColorAlphaInput = _ref => {
  let {
    prefixCls,
    value,
    onChange
  } = _ref;
  const colorAlphaInputPrefixCls = \`\${prefixCls}-alpha-input\`;
  const [alphaValue, setAlphaValue] = (0,react.useState)(util_generateColor(value || '#000'));
  // Update step value
  (0,react.useEffect)(() => {
    if (value) {
      setAlphaValue(value);
    }
  }, [value]);
  const handleAlphaChange = step => {
    const hsba = alphaValue.toHsb();
    hsba.a = (step || 0) / 100;
    const genColor = util_generateColor(hsba);
    if (!value) {
      setAlphaValue(genColor);
    }
    onChange === null || onChange === void 0 ? void 0 : onChange(genColor);
  };
  return /*#__PURE__*/react.createElement(components_ColorSteppers, {
    value: getAlphaColor(alphaValue),
    prefixCls: prefixCls,
    formatter: step => \`\${step}%\`,
    className: colorAlphaInputPrefixCls,
    onChange: handleAlphaChange
  });
};
/* harmony default export */ var components_ColorAlphaInput = (ColorAlphaInput);
;// CONCATENATED MODULE: ./node_modules/antd/es/color-picker/components/ColorHexInput.js



const hexReg = /(^#[\\da-f]{6}$)|(^#[\\da-f]{8}$)/i;
const isHexString = hex => hexReg.test(\`#\${hex}\`);
const ColorHexInput = _ref => {
  let {
    prefixCls,
    value,
    onChange
  } = _ref;
  const colorHexInputPrefixCls = \`\${prefixCls}-hex-input\`;
  const [hexValue, setHexValue] = (0,react.useState)(value === null || value === void 0 ? void 0 : value.toHex());
  // Update step value
  (0,react.useEffect)(() => {
    const hex = value === null || value === void 0 ? void 0 : value.toHex();
    if (isHexString(hex) && value) {
      setHexValue(toHexFormat(hex));
    }
  }, [value]);
  const handleHexChange = e => {
    const originValue = e.target.value;
    setHexValue(toHexFormat(originValue));
    if (isHexString(toHexFormat(originValue, true))) {
      onChange === null || onChange === void 0 ? void 0 : onChange(util_generateColor(originValue));
    }
  };
  return /*#__PURE__*/react.createElement(input/* default */.Z, {
    className: colorHexInputPrefixCls,
    value: hexValue === null || hexValue === void 0 ? void 0 : hexValue.toUpperCase(),
    prefix: "#",
    onChange: handleHexChange,
    size: "small"
  });
};
/* harmony default export */ var components_ColorHexInput = (ColorHexInput);
;// CONCATENATED MODULE: ./node_modules/antd/es/color-picker/components/ColorHsbInput.js




const ColorHsbInput = _ref => {
  let {
    prefixCls,
    value,
    onChange
  } = _ref;
  const colorHsbInputPrefixCls = \`\${prefixCls}-hsb-input\`;
  const [hsbValue, setHsbValue] = (0,react.useState)(util_generateColor(value || '#000'));
  // Update step value
  (0,react.useEffect)(() => {
    if (value) {
      setHsbValue(value);
    }
  }, [value]);
  const handleHsbChange = (step, type) => {
    const hsb = hsbValue.toHsb();
    hsb[type] = type === 'h' ? step : (step || 0) / 100;
    const genColor = util_generateColor(hsb);
    if (!value) {
      setHsbValue(genColor);
    }
    onChange === null || onChange === void 0 ? void 0 : onChange(genColor);
  };
  return /*#__PURE__*/react.createElement("div", {
    className: colorHsbInputPrefixCls
  }, /*#__PURE__*/react.createElement(components_ColorSteppers, {
    max: 360,
    min: 0,
    value: Number(hsbValue.toHsb().h),
    prefixCls: prefixCls,
    className: colorHsbInputPrefixCls,
    formatter: step => getRoundNumber(step || 0).toString(),
    onChange: step => handleHsbChange(Number(step), 'h')
  }), /*#__PURE__*/react.createElement(components_ColorSteppers, {
    max: 100,
    min: 0,
    value: Number(hsbValue.toHsb().s) * 100,
    prefixCls: prefixCls,
    className: colorHsbInputPrefixCls,
    formatter: step => \`\${getRoundNumber(step || 0)}%\`,
    onChange: step => handleHsbChange(Number(step), 's')
  }), /*#__PURE__*/react.createElement(components_ColorSteppers, {
    max: 100,
    min: 0,
    value: Number(hsbValue.toHsb().b) * 100,
    prefixCls: prefixCls,
    className: colorHsbInputPrefixCls,
    formatter: step => \`\${getRoundNumber(step || 0)}%\`,
    onChange: step => handleHsbChange(Number(step), 'b')
  }));
};
/* harmony default export */ var components_ColorHsbInput = (ColorHsbInput);
;// CONCATENATED MODULE: ./node_modules/antd/es/color-picker/components/ColorRgbInput.js



const ColorRgbInput = _ref => {
  let {
    prefixCls,
    value,
    onChange
  } = _ref;
  const colorRgbInputPrefixCls = \`\${prefixCls}-rgb-input\`;
  const [rgbValue, setRgbValue] = (0,react.useState)(util_generateColor(value || '#000'));
  // Update step value
  (0,react.useEffect)(() => {
    if (value) {
      setRgbValue(value);
    }
  }, [value]);
  const handleRgbChange = (step, type) => {
    const rgb = rgbValue.toRgb();
    rgb[type] = step || 0;
    const genColor = util_generateColor(rgb);
    if (!value) {
      setRgbValue(genColor);
    }
    onChange === null || onChange === void 0 ? void 0 : onChange(genColor);
  };
  return /*#__PURE__*/react.createElement("div", {
    className: colorRgbInputPrefixCls
  }, /*#__PURE__*/react.createElement(components_ColorSteppers, {
    max: 255,
    min: 0,
    value: Number(rgbValue.toRgb().r),
    prefixCls: prefixCls,
    className: colorRgbInputPrefixCls,
    onChange: step => handleRgbChange(Number(step), 'r')
  }), /*#__PURE__*/react.createElement(components_ColorSteppers, {
    max: 255,
    min: 0,
    value: Number(rgbValue.toRgb().g),
    prefixCls: prefixCls,
    className: colorRgbInputPrefixCls,
    onChange: step => handleRgbChange(Number(step), 'g')
  }), /*#__PURE__*/react.createElement(components_ColorSteppers, {
    max: 255,
    min: 0,
    value: Number(rgbValue.toRgb().b),
    prefixCls: prefixCls,
    className: colorRgbInputPrefixCls,
    onChange: step => handleRgbChange(Number(step), 'b')
  }));
};
/* harmony default export */ var components_ColorRgbInput = (ColorRgbInput);
;// CONCATENATED MODULE: ./node_modules/antd/es/color-picker/components/ColorInput.js








const selectOptions = [ColorFormat.hex, ColorFormat.hsb, ColorFormat.rgb].map(format => ({
  value: format,
  label: format.toLocaleUpperCase()
}));
const ColorInput = props => {
  const {
    prefixCls,
    format,
    value,
    onFormatChange,
    onChange
  } = props;
  const [colorFormat, setColorFormat] = (0,useMergedState/* default */.Z)(ColorFormat.hex, {
    value: format,
    onChange: onFormatChange
  });
  const colorInputPrefixCls = \`\${prefixCls}-input\`;
  const handleFormatChange = newFormat => {
    setColorFormat(newFormat);
  };
  const steppersNode = (0,react.useMemo)(() => {
    const inputProps = {
      value,
      prefixCls,
      onChange
    };
    switch (colorFormat) {
      case ColorFormat.hsb:
        return /*#__PURE__*/react.createElement(components_ColorHsbInput, Object.assign({}, inputProps));
      case ColorFormat.rgb:
        return /*#__PURE__*/react.createElement(components_ColorRgbInput, Object.assign({}, inputProps));
      case ColorFormat.hex:
      default:
        return /*#__PURE__*/react.createElement(components_ColorHexInput, Object.assign({}, inputProps));
    }
  }, [colorFormat, prefixCls, value, onChange]);
  return /*#__PURE__*/react.createElement("div", {
    className: \`\${colorInputPrefixCls}-container\`
  }, /*#__PURE__*/react.createElement(es_select/* default */.Z, {
    value: colorFormat,
    bordered: false,
    getPopupContainer: current => current,
    popupMatchSelectWidth: 68,
    placement: "bottomRight",
    onChange: handleFormatChange,
    className: \`\${prefixCls}-format-select\`,
    size: "small",
    options: selectOptions
  }), /*#__PURE__*/react.createElement("div", {
    className: colorInputPrefixCls
  }, steppersNode), /*#__PURE__*/react.createElement(components_ColorAlphaInput, {
    prefixCls: prefixCls,
    value: value,
    onChange: onChange
  }));
};
/* harmony default export */ var components_ColorInput = (ColorInput);
// EXTERNAL MODULE: ./node_modules/antd/es/collapse/index.js + 7 modules
var collapse = __webpack_require__(15045);
;// CONCATENATED MODULE: ./node_modules/antd/es/color-picker/components/ColorPresets.js







const {
  Panel
} = collapse/* default */.Z;
const genPresetColor = list => list.map(value => {
  value.colors = value.colors.map(util_generateColor);
  return value;
});
const isBright = value => {
  const {
    r,
    g,
    b,
    a
  } = value.toRgb();
  if (a <= 0.5) {
    return true;
  }
  return r * 0.299 + g * 0.587 + b * 0.114 > 192;
};
const ColorPresets = _ref => {
  let {
    prefixCls,
    presets,
    value: color,
    onChange
  } = _ref;
  const [locale] = (0,useLocale/* default */.Z)('ColorPicker');
  const [presetsValue] = (0,useMergedState/* default */.Z)(genPresetColor(presets), {
    value: genPresetColor(presets),
    postState: genPresetColor
  });
  const colorPresetsPrefixCls = \`\${prefixCls}-presets\`;
  const activeKeys = (0,react.useMemo)(() => presetsValue.map(preset => \`panel-\${preset.label}\`), [presetsValue]);
  const handleClick = colorValue => {
    onChange === null || onChange === void 0 ? void 0 : onChange(colorValue);
  };
  return /*#__PURE__*/react.createElement("div", {
    className: colorPresetsPrefixCls
  }, /*#__PURE__*/react.createElement(collapse/* default */.Z, {
    defaultActiveKey: activeKeys,
    ghost: true
  }, presetsValue.map(preset => {
    var _a;
    return /*#__PURE__*/react.createElement(Panel, {
      header: /*#__PURE__*/react.createElement("div", {
        className: \`\${colorPresetsPrefixCls}-label\`
      }, preset === null || preset === void 0 ? void 0 : preset.label),
      key: \`panel-\${preset === null || preset === void 0 ? void 0 : preset.label}\`
    }, /*#__PURE__*/react.createElement("div", {
      className: \`\${colorPresetsPrefixCls}-items\`
    }, Array.isArray(preset === null || preset === void 0 ? void 0 : preset.colors) && ((_a = preset.colors) === null || _a === void 0 ? void 0 : _a.length) > 0 ? preset.colors.map(presetColor => /*#__PURE__*/react.createElement(components_ColorBlock, {
      key: \`preset-\${presetColor.toHexString()}\`,
      color: util_generateColor(presetColor).toRgbString(),
      prefixCls: prefixCls,
      className: classnames_default()(\`\${colorPresetsPrefixCls}-color\`, {
        [\`\${colorPresetsPrefixCls}-color-checked\`]: presetColor.toHexString() === (color === null || color === void 0 ? void 0 : color.toHexString()),
        [\`\${colorPresetsPrefixCls}-color-bright\`]: isBright(presetColor)
      }),
      onClick: () => handleClick(presetColor)
    })) : /*#__PURE__*/react.createElement("span", {
      className: \`\${colorPresetsPrefixCls}-empty\`
    }, locale.presetEmpty)));
  })));
};
/* harmony default export */ var components_ColorPresets = (ColorPresets);
;// CONCATENATED MODULE: ./node_modules/antd/es/color-picker/ColorPickerPanel.js
var ColorPickerPanel_rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};






const ColorPickerPanel = props => {
  const {
      prefixCls,
      allowClear,
      presets,
      onChange,
      onClear,
      onChangeComplete,
      color
    } = props,
    injectProps = ColorPickerPanel_rest(props, ["prefixCls", "allowClear", "presets", "onChange", "onClear", "onChangeComplete", "color"]);
  const colorPickerPanelPrefixCls = \`\${prefixCls}-inner-panel\`;
  const extraPanelRender = panel => /*#__PURE__*/react.createElement("div", {
    className: colorPickerPanelPrefixCls
  }, allowClear && /*#__PURE__*/react.createElement(components_ColorClear, Object.assign({
    prefixCls: prefixCls,
    value: color,
    onChange: clearColor => {
      onChange === null || onChange === void 0 ? void 0 : onChange(clearColor);
      onClear === null || onClear === void 0 ? void 0 : onClear(true);
    }
  }, injectProps)), panel, /*#__PURE__*/react.createElement(components_ColorInput, Object.assign({
    value: color,
    onChange: onChange,
    prefixCls: prefixCls
  }, injectProps)), Array.isArray(presets) && /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(divider/* default */.Z, {
    className: \`\${colorPickerPanelPrefixCls}-divider\`
  }), /*#__PURE__*/react.createElement(components_ColorPresets, {
    value: color,
    presets: presets,
    prefixCls: prefixCls,
    onChange: onChange
  })));
  return /*#__PURE__*/react.createElement(color_picker_es, {
    prefixCls: prefixCls,
    value: color === null || color === void 0 ? void 0 : color.toHsb(),
    onChange: (colorValue, type) => onChange === null || onChange === void 0 ? void 0 : onChange(colorValue, type, true),
    panelRender: extraPanelRender,
    onChangeComplete: onChangeComplete
  });
};
if (false) {}
/* harmony default export */ var color_picker_ColorPickerPanel = (ColorPickerPanel);
;// CONCATENATED MODULE: ./node_modules/antd/es/color-picker/components/ColorTrigger.js
var ColorTrigger_rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};




const ColorTrigger = /*#__PURE__*/(0,react.forwardRef)((props, ref) => {
  const {
      color,
      prefixCls,
      open,
      colorCleared,
      disabled,
      className
    } = props,
    rest = ColorTrigger_rest(props, ["color", "prefixCls", "open", "colorCleared", "disabled", "className"]);
  const colorTriggerPrefixCls = \`\${prefixCls}-trigger\`;
  const containerNode = (0,react.useMemo)(() => colorCleared ? /*#__PURE__*/react.createElement(components_ColorClear, {
    prefixCls: prefixCls
  }) : /*#__PURE__*/react.createElement(components_ColorBlock, {
    prefixCls: prefixCls,
    color: color.toRgbString()
  }), [color, colorCleared, prefixCls]);
  return /*#__PURE__*/react.createElement("div", Object.assign({
    ref: ref,
    className: classnames_default()(colorTriggerPrefixCls, className, {
      [\`\${colorTriggerPrefixCls}-active\`]: open,
      [\`\${colorTriggerPrefixCls}-disabled\`]: disabled
    })
  }, rest), containerNode);
});
/* harmony default export */ var components_ColorTrigger = (ColorTrigger);
;// CONCATENATED MODULE: ./node_modules/antd/es/color-picker/hooks/useColorState.js


function useColorState_hasValue(value) {
  return value !== undefined;
}
const useColorState_useColorState = (defaultStateValue, option) => {
  const {
    defaultValue,
    value
  } = option;
  const [colorValue, setColorValue] = (0,react.useState)(() => {
    let mergeState;
    if (useColorState_hasValue(value)) {
      mergeState = value;
    } else if (useColorState_hasValue(defaultValue)) {
      mergeState = defaultValue;
    } else {
      mergeState = defaultStateValue;
    }
    return util_generateColor(mergeState || '');
  });
  (0,react.useEffect)(() => {
    if (value) {
      setColorValue(util_generateColor(value));
    }
  }, [value]);
  return [colorValue, setColorValue];
};
/* harmony default export */ var color_picker_hooks_useColorState = (useColorState_useColorState);
;// CONCATENATED MODULE: ./node_modules/antd/es/color-picker/style/color-block.js
const TRANSPARENT_DOT_COLOR = '#EEE';
/**
 * @private Internal usage only
 */
const getTransBg = size => ({
  backgroundImage: \`conic-gradient(\${TRANSPARENT_DOT_COLOR} 0 25%, transparent 0 50%, \${TRANSPARENT_DOT_COLOR} 0 75%, transparent 0)\`,
  backgroundSize: \`\${size} \${size}\`
});
const genColorBlockStyle = (token, size) => {
  const {
    componentCls,
    borderRadiusSM,
    colorPickerInsetShadow,
    lineWidth,
    colorFillSecondary
  } = token;
  return {
    [\`\${componentCls}-color-block\`]: Object.assign(Object.assign({
      position: 'relative',
      borderRadius: borderRadiusSM,
      width: size,
      height: size,
      boxShadow: colorPickerInsetShadow
    }, getTransBg('50%')), {
      [\`\${componentCls}-color-block-inner\`]: {
        width: '100%',
        height: '100%',
        border: \`\${lineWidth}px solid \${colorFillSecondary}\`,
        borderRadius: 'inherit'
      }
    })
  };
};
/* harmony default export */ var color_block = (genColorBlockStyle);
;// CONCATENATED MODULE: ./node_modules/antd/es/color-picker/style/input.js
const genInputStyle = token => {
  const {
    componentCls,
    antCls,
    fontSizeSM,
    lineHeightSM,
    colorPickerAlphaInputWidth,
    marginXXS,
    paddingXXS,
    controlHeightSM,
    marginXS,
    fontSizeIcon,
    paddingXS,
    colorTextPlaceholder,
    colorPickerInputNumberHandleWidth,
    lineWidth
  } = token;
  return {
    [\`\${componentCls}-input-container\`]: {
      display: 'flex',
      [\`\${componentCls}-steppers\${antCls}-input-number\`]: {
        fontSize: fontSizeSM,
        lineHeight: lineHeightSM,
        [\`\${antCls}-input-number-input\`]: {
          paddingInlineStart: paddingXXS,
          paddingInlineEnd: 0
        },
        [\`\${antCls}-input-number-handler-wrap\`]: {
          width: colorPickerInputNumberHandleWidth
        }
      },
      [\`\${componentCls}-steppers\${componentCls}-alpha-input\`]: {
        flex: \`0 0 \${colorPickerAlphaInputWidth}px\`,
        marginInlineStart: marginXXS
      },
      [\`\${componentCls}-format-select\${antCls}-select\`]: {
        marginInlineEnd: marginXS,
        width: 'auto',
        '&-single': {
          [\`\${antCls}-select-selector\`]: {
            padding: 0,
            border: 0
          },
          [\`\${antCls}-select-arrow\`]: {
            insetInlineEnd: 0
          },
          [\`\${antCls}-select-selection-item\`]: {
            paddingInlineEnd: fontSizeIcon + marginXXS,
            fontSize: fontSizeSM,
            lineHeight: \`\${controlHeightSM}px\`
          },
          [\`\${antCls}-select-item-option-content\`]: {
            fontSize: fontSizeSM,
            lineHeight: lineHeightSM
          },
          [\`\${antCls}-select-dropdown\`]: {
            [\`\${antCls}-select-item\`]: {
              minHeight: 'auto'
            }
          }
        }
      },
      [\`\${componentCls}-input\`]: {
        gap: marginXXS,
        alignItems: 'center',
        flex: 1,
        width: 0,
        [\`\${componentCls}-hsb-input,\${componentCls}-rgb-input\`]: {
          display: 'flex',
          gap: marginXXS,
          alignItems: 'center'
        },
        [\`\${componentCls}-steppers\`]: {
          flex: 1
        },
        [\`\${componentCls}-hex-input\${antCls}-input-affix-wrapper\`]: {
          flex: 1,
          padding: \`0 \${paddingXS}px\`,
          [\`\${antCls}-input\`]: {
            fontSize: fontSizeSM,
            lineHeight: \`\${controlHeightSM - 2 * lineWidth}px\`
          },
          [\`\${antCls}-input-prefix\`]: {
            color: colorTextPlaceholder
          }
        }
      }
    }
  };
};
/* harmony default export */ var style_input = (genInputStyle);
;// CONCATENATED MODULE: ./node_modules/antd/es/color-picker/style/picker.js

const genPickerStyle = token => {
  const {
    componentCls,
    controlHeightLG,
    borderRadiusSM,
    colorPickerInsetShadow,
    marginSM,
    colorBgElevated,
    colorFillSecondary,
    lineWidthBold,
    colorPickerHandlerSize,
    colorPickerHandlerSizeSM,
    colorPickerSliderHeight,
    colorPickerPreviewSize
  } = token;
  return Object.assign({
    [\`\${componentCls}-select\`]: {
      [\`\${componentCls}-palette\`]: {
        minHeight: controlHeightLG * 4,
        overflow: 'hidden',
        borderRadius: borderRadiusSM
      },
      [\`\${componentCls}-saturation\`]: {
        position: 'absolute',
        borderRadius: 'inherit',
        boxShadow: colorPickerInsetShadow,
        inset: 0
      },
      marginBottom: marginSM
    },
    [\`\${componentCls}-handler\`]: {
      width: colorPickerHandlerSize,
      height: colorPickerHandlerSize,
      border: \`\${lineWidthBold}px solid \${colorBgElevated}\`,
      position: 'relative',
      borderRadius: '50%',
      cursor: 'pointer',
      boxShadow: \`\${colorPickerInsetShadow}, 0 0 0 1px \${colorFillSecondary}\`,
      '&-sm': {
        width: colorPickerHandlerSizeSM,
        height: colorPickerHandlerSizeSM
      }
    },
    [\`\${componentCls}-slider\`]: {
      borderRadius: colorPickerSliderHeight / 2,
      [\`\${componentCls}-palette\`]: {
        height: colorPickerSliderHeight
      },
      [\`\${componentCls}-gradient\`]: {
        borderRadius: colorPickerSliderHeight / 2,
        boxShadow: colorPickerInsetShadow
      },
      '&-alpha': getTransBg(\`\${colorPickerSliderHeight}px\`),
      marginBottom: marginSM
    },
    [\`\${componentCls}-slider-container\`]: {
      display: 'flex',
      gap: marginSM,
      [\`\${componentCls}-slider-group\`]: {
        flex: 1
      }
    }
  }, color_block(token, colorPickerPreviewSize));
};
/* harmony default export */ var picker = (genPickerStyle);
;// CONCATENATED MODULE: ./node_modules/antd/es/color-picker/style/presets.js
const genPresetsStyle = token => {
  const {
    componentCls,
    antCls,
    colorTextQuaternary,
    paddingXXS,
    colorPickerPresetColorSize,
    fontSizeSM,
    colorText,
    lineHeightSM,
    lineWidth,
    borderRadius,
    colorFill,
    colorWhite,
    colorTextTertiary,
    marginXXS,
    paddingXS
  } = token;
  return {
    [\`\${componentCls}-presets\`]: {
      [\`\${antCls}-collapse-item > \${antCls}-collapse-header\`]: {
        padding: 0,
        [\`\${antCls}-collapse-expand-icon\`]: {
          height: fontSizeSM * lineHeightSM,
          color: colorTextQuaternary,
          paddingInlineEnd: paddingXXS
        }
      },
      [\`\${antCls}-collapse\`]: {
        display: 'flex',
        flexDirection: 'column',
        gap: marginXXS
      },
      [\`\${antCls}-collapse-item > \${antCls}-collapse-content > \${antCls}-collapse-content-box\`]: {
        padding: \`\${paddingXS}px 0\`
      },
      '&-label': {
        fontSize: fontSizeSM,
        color: colorText,
        lineHeight: lineHeightSM
      },
      '&-items': {
        display: 'flex',
        flexWrap: 'wrap',
        gap: marginXXS * 1.5,
        [\`\${componentCls}-presets-color\`]: {
          position: 'relative',
          cursor: 'pointer',
          width: colorPickerPresetColorSize,
          height: colorPickerPresetColorSize,
          '&::before': {
            content: '""',
            pointerEvents: 'none',
            width: colorPickerPresetColorSize + 4 * lineWidth,
            height: colorPickerPresetColorSize + 4 * lineWidth,
            position: 'absolute',
            top: -2 * lineWidth,
            insetInlineStart: -2 * lineWidth,
            borderRadius,
            border: \`\${lineWidth}px solid transparent\`,
            transition: \`border-color \${token.motionDurationMid} \${token.motionEaseInBack}\`
          },
          '&:hover::before': {
            borderColor: colorFill
          },
          '&::after': {
            boxSizing: 'border-box',
            position: 'absolute',
            top: '50%',
            insetInlineStart: '21.5%',
            display: 'table',
            width: colorPickerPresetColorSize / 13 * 5,
            height: colorPickerPresetColorSize / 13 * 8,
            border: \`\${token.lineWidthBold}px solid \${token.colorWhite}\`,
            borderTop: 0,
            borderInlineStart: 0,
            transform: 'rotate(45deg) scale(0) translate(-50%,-50%)',
            opacity: 0,
            content: '""',
            transition: \`all \${token.motionDurationFast} \${token.motionEaseInBack}, opacity \${token.motionDurationFast}\`
          },
          [\`&\${componentCls}-presets-color-checked\`]: {
            '&::after': {
              opacity: 1,
              borderColor: colorWhite,
              transform: 'rotate(45deg) scale(1) translate(-50%,-50%)',
              transition: \`transform \${token.motionDurationMid} \${token.motionEaseOutBack} \${token.motionDurationFast}\`
            },
            [\`&\${componentCls}-presets-color-bright\`]: {
              '&::after': {
                borderColor: colorTextTertiary
              }
            }
          }
        }
      },
      '&-empty': {
        fontSize: fontSizeSM,
        color: colorTextQuaternary
      }
    }
  };
};
/* harmony default export */ var presets = (genPresetsStyle);
;// CONCATENATED MODULE: ./node_modules/antd/es/color-picker/style/index.js





const genActiveStyle = token => ({
  boxShadow: \`0 0 0 \${token.controlOutlineWidth}px \${token.controlOutline}\`,
  borderInlineEndWidth: token.lineWidth,
  outline: 0
});
const genRtlStyle = token => {
  const {
    componentCls
  } = token;
  return {
    '&-rtl': {
      [\`\${componentCls}-presets-color\`]: {
        '&::after': {
          direction: 'ltr'
        }
      },
      [\`\${componentCls}-clear\`]: {
        '&::after': {
          direction: 'ltr'
        }
      }
    }
  };
};
const genClearStyle = (token, size) => {
  const {
    componentCls,
    borderRadiusSM,
    lineWidth,
    colorSplit,
    red6
  } = token;
  return {
    [\`\${componentCls}-clear\`]: {
      width: size,
      height: size,
      borderRadius: borderRadiusSM,
      border: \`\${lineWidth}px solid \${colorSplit}\`,
      position: 'relative',
      cursor: 'pointer',
      overflow: 'hidden',
      '&::after': {
        content: '""',
        position: 'absolute',
        insetInlineEnd: lineWidth,
        top: 0,
        display: 'block',
        width: 40,
        height: 2,
        transformOrigin: 'right',
        transform: 'rotate(-45deg)',
        backgroundColor: red6
      }
    }
  };
};
const genColorPickerStyle = token => {
  const {
    componentCls,
    colorPickerWidth,
    colorPrimary,
    motionDurationMid,
    colorBgElevated,
    colorTextDisabled,
    colorBgContainerDisabled,
    borderRadius,
    marginXS,
    marginSM,
    controlHeight,
    controlHeightSM,
    colorBgTextActive,
    colorPickerPresetColorSize,
    lineWidth,
    colorBorder
  } = token;
  return [{
    [componentCls]: Object.assign({
      [\`\${componentCls}-panel\`]: Object.assign(Object.assign(Object.assign(Object.assign({
        display: 'flex',
        flexDirection: 'column',
        width: colorPickerWidth,
        [\`\${componentCls}-inner-panel\`]: {
          [\`\${componentCls}-clear\`]: {
            marginInlineStart: 'auto',
            marginBottom: marginXS
          },
          '&-divider': {
            margin: \`\${marginSM}px 0 \${marginXS}px\`
          }
        }
      }, picker(token)), style_input(token)), presets(token)), genClearStyle(token, colorPickerPresetColorSize)),
      '&-trigger': Object.assign(Object.assign({
        width: controlHeight,
        height: controlHeight,
        borderRadius,
        border: \`\${lineWidth}px solid \${colorBorder}\`,
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: \`all \${motionDurationMid}\`,
        background: colorBgElevated,
        '&-active': Object.assign(Object.assign({}, genActiveStyle(token)), {
          borderColor: colorPrimary
        }),
        '&:hover': {
          borderColor: colorPrimary
        },
        '&-disabled': {
          color: colorTextDisabled,
          background: colorBgContainerDisabled,
          cursor: 'not-allowed',
          '&:hover': {
            borderColor: colorBgTextActive
          }
        }
      }, genClearStyle(token, controlHeightSM)), color_block(token, controlHeightSM))
    }, genRtlStyle(token))
  }];
};
/* harmony default export */ var color_picker_style = ((0,genComponentStyleHook/* default */.Z)('ColorPicker', token => {
  const {
    colorTextQuaternary,
    marginSM
  } = token;
  const colorPickerSliderHeight = 8;
  const colorPickerToken = (0,statistic/* merge */.TS)(token, {
    colorPickerWidth: 234,
    colorPickerHandlerSize: 16,
    colorPickerHandlerSizeSM: 12,
    colorPickerAlphaInputWidth: 44,
    colorPickerInputNumberHandleWidth: 16,
    colorPickerPresetColorSize: 18,
    colorPickerInsetShadow: \`inset 0 0 1px 0 \${colorTextQuaternary}\`,
    colorPickerSliderHeight,
    colorPickerPreviewSize: colorPickerSliderHeight * 2 + marginSM
  });
  return [genColorPickerStyle(colorPickerToken)];
}));
;// CONCATENATED MODULE: ./node_modules/antd/es/color-picker/ColorPicker.js












const ColorPicker_ColorPicker = props => {
  const {
    value,
    defaultValue,
    format,
    allowClear = false,
    presets,
    children,
    trigger = 'click',
    open,
    disabled,
    placement = 'bottomLeft',
    arrow = true,
    style,
    className,
    rootClassName,
    styles,
    onFormatChange,
    onChange,
    onOpenChange,
    getPopupContainer,
    autoAdjustOverflow = true
  } = props;
  const {
    getPrefixCls,
    direction
  } = (0,react.useContext)(context/* ConfigContext */.E_);
  const {
    token
  } = es_theme/* default.useToken */.Z.useToken();
  const [colorValue, setColorValue] = color_picker_hooks_useColorState(token.colorPrimary, {
    value,
    defaultValue
  });
  const [popupOpen, setPopupOpen] = (0,useMergedState/* default */.Z)(false, {
    value: open,
    postState: openData => !disabled && openData,
    onChange: onOpenChange
  });
  const [colorCleared, setColorCleared] = (0,react.useState)(false);
  const prefixCls = getPrefixCls('color-picker', customizePrefixCls);
  const [wrapSSR, hashId] = color_picker_style(prefixCls);
  const rtlCls = {
    [\`\${prefixCls}-rtl\`]: direction
  };
  const mergeRootCls = classnames_default()(rootClassName, rtlCls);
  const mergeCls = classnames_default()(mergeRootCls, className, hashId);
  const mergePopupCls = classnames_default()(prefixCls, rtlCls);
  const popupAllowCloseRef = (0,react.useRef)(true);
  const handleChange = (data, type, pickColor) => {
    let color = util_generateColor(data);
    if (colorCleared) {
      setColorCleared(false);
      const hsba = color.toHsb();
      // ignore alpha slider
      if (colorValue.toHsb().a === 0 && type !== 'alpha') {
        hsba.a = 1;
        color = util_generateColor(hsba);
      }
    }
    if (!value) {
      setColorValue(color);
    }
    // Only for drag-and-drop color picking
    if (pickColor) {
      popupAllowCloseRef.current = false;
    }
    onChange === null || onChange === void 0 ? void 0 : onChange(color, color.toHexString());
  };
  const handleClear = clear => {
    setColorCleared(clear);
  };
  const handleChangeComplete = () => {
    popupAllowCloseRef.current = true;
  };
  const popoverProps = {
    open: popupOpen,
    trigger,
    placement,
    arrow,
    rootClassName,
    getPopupContainer,
    autoAdjustOverflow
  };
  const colorBaseProps = {
    prefixCls,
    color: colorValue,
    allowClear,
    colorCleared,
    disabled,
    presets,
    format,
    onFormatChange
  };
  (0,react.useEffect)(() => {
    if (colorCleared) {
      setPopupOpen(false);
    }
  }, [colorCleared]);
  return wrapSSR( /*#__PURE__*/react.createElement(popover/* default */.Z, Object.assign({
    style: styles === null || styles === void 0 ? void 0 : styles.popup,
    onOpenChange: visible => {
      if (popupAllowCloseRef.current) {
        setPopupOpen(visible);
      }
    },
    content: /*#__PURE__*/react.createElement(color_picker_ColorPickerPanel, Object.assign({}, colorBaseProps, {
      onChange: handleChange,
      onChangeComplete: handleChangeComplete,
      onClear: handleClear
    })),
    overlayClassName: mergePopupCls
  }, popoverProps), children || /*#__PURE__*/react.createElement(components_ColorTrigger, {
    open: popupOpen,
    className: mergeCls,
    style: style,
    color: colorValue,
    prefixCls: prefixCls,
    disabled: disabled,
    colorCleared: colorCleared
  })));
};
if (false) {}
const ColorPicker_PurePanel = (0,_util_PurePanel/* default */.Z)(ColorPicker_ColorPicker, 'color-picker', /* istanbul ignore next */
prefixCls => prefixCls, props => Object.assign(Object.assign({}, props), {
  placement: 'bottom',
  autoAdjustOverflow: false
}));
ColorPicker_ColorPicker._InternalPanelDoNotUseOrYouWillBeFired = ColorPicker_PurePanel;
/* harmony default export */ var color_picker_ColorPicker = (ColorPicker_ColorPicker);
;// CONCATENATED MODULE: ./node_modules/antd/es/color-picker/index.js

/* harmony default export */ var color_picker = (color_picker_ColorPicker);
;// CONCATENATED MODULE: ./src/core/base/GlobalHeader/ColorPicker/index.tsx



var ThemeColorPicker = function ThemeColorPicker(props) {
  var value = props.value,
    style = props.style,
    color = props.color,
    onChange = props.onChange,
    dispatch = props.dispatch;
  var handleColorOnChange = function handleColorOnChange(colorValues) {
    var color = colorValues.toRgb();
    dispatch({
      type: 'global/changeColor',
      color: color
    });
    if (onChange) {
      onChange(color);
    }
  };
  return /*#__PURE__*/(0,jsx_runtime.jsx)(color_picker, {
    format: "rgb",
    value: color,
    onChange: handleColorOnChange
  });
};
/* harmony default export */ var GlobalHeader_ColorPicker = (ThemeColorPicker);
// EXTERNAL MODULE: ./src/core/base/KeepAlive/index.tsx + 5 modules
var KeepAlive = __webpack_require__(27600);
;// CONCATENATED MODULE: ./src/core/layouts/index.less?modules
// extracted by mini-css-extract-plugin
/* harmony default export */ var layoutsmodules = ({});
;// CONCATENATED MODULE: ./src/core/layouts/IndexPage.tsx


var IndexPage = function IndexPage() {
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    style: {
      textAlign: 'center'
    },
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("h1", {
      children: "\\u8FD9\\u662F\\u9996\\u9875"
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
      style: {
        width: '100%',
        height: '90vh'
      },
      src: __webpack_require__(68381)
    })]
  });
};
/* harmony default export */ var layouts_IndexPage = (IndexPage);
;// CONCATENATED MODULE: ./src/core/layouts/BasicLayout.tsx























var BasicLayout_Sider = es_layout.Sider,
  Content = es_layout.Content,
  BasicLayout_Header = es_layout.Header;
var title = projectConfig/* default.title */.Z.title;
var BasicLayout = function BasicLayout(props) {
  var _Object$values$filter;
  var _useAppData = (0,appContext/* useAppData */.Ov)(),
    routes = _useAppData.routes;
  var _useState = (0,react.useState)(storage/* localStore.get */.WL.get('hasTour') || '1'),
    _useState2 = slicedToArray_default()(_useState, 2),
    open = _useState2[0],
    setOpen = _useState2[1];
  var ref0 = (0,react.useRef)(null);
  var ref1 = (0,react.useRef)(null);
  var ref2 = (0,react.useRef)(null);
  var ref3 = (0,react.useRef)(null);
  var menuList = props.menuList,
    color = props.color,
    breadcrumbNameMap = props.breadcrumbNameMap,
    children = props.children,
    collapsed = props.collapsed,
    location = props.location,
    sliderMenuState = props.sliderMenuState,
    dispatch = props.dispatch,
    userInfo = props.userInfo,
    theme = props.theme;
  var currentRoutesObj = (_Object$values$filter = Object.values(routes).filter(function (item) {
    return (item === null || item === void 0 ? void 0 : item.path) == location.pathname;
  })) === null || _Object$values$filter === void 0 ? void 0 : _Object$values$filter[0];
  // TODO: routes \u6DFB\u52A0keepAlive\u914D\u7F6E
  // const hasKeepAlive = currentRoutesObj?.keepAlive;

  var steps = [{
    title: '\u81EA\u5B9A\u4E49\u7684menu',
    description: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        children: "\\u9F20\\u6807\\u60AC\\u6D6E\\u65F6\\u5C55\\u5F00-\\u800C\\u4E0D\\u662F\\u70B9\\u51FB\\u4E0B\\u62C9\\u56FE\\u6807-\\u66F4\\u52A0\\u6E05\\u6670-\\u66F4\\u6613\\u4F7F\\u7528"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        style: {
          color: "rgba(".concat(color === null || color === void 0 ? void 0 : color.r, ", ").concat(color === null || color === void 0 ? void 0 : color.g, ", ").concat(color === null || color === void 0 ? void 0 : color.b, ", ").concat(color === null || color === void 0 ? void 0 : color.a, ")")
        },
        children: "\\u53EF\\u4EE5\\u9F20\\u6807\\u60AC\\u6D6E\\u4E00\\u4E0B \\u6743\\u9650\\u7BA1\\u7406"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        children: "\\u516C\\u4F17\\u7EC4\\u4EF6\\u8DEF\\u7531\\uFF1Ahome-class"
      })]
    }),
    target: function target() {
      return ref0.current;
    },
    placement: 'right'
  }, {
    title: '\u591Atabs\u9875\u7B7E\u5207\u6362',
    description: '\u589E\u52A0\u4E86\u7F13\u5B58\u529F\u80FD',
    target: function target() {
      return ref1.current;
    }
  }, {
    title: '\u4E3B\u9898\u8272\u5207\u6362',
    description: '\u52A8\u6001\u6539\u53D8',
    target: function target() {
      return ref2.current;
    }
  }, {
    title: '\u6697\u9ED1\u8272\u8C03\u5207\u6362',
    description: '\u70B9\u51FB\u5373\u53EF\u5207\u6362',
    target: function target() {
      return ref3.current;
    }
  }];
  var handleRouterChange = /*#__PURE__*/function () {
    var _ref = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee() {
      return regeneratorRuntime_default()().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return dispatch({
              type: 'global/fetch',
              payload: {}
            });
          case 2:
            _context.next = 4;
            return dispatch({
              type: 'global/fetchUserInfo'
            });
          case 4:
            _context.next = 6;
            return dispatch({
              type: 'global/fetchMenu'
            });
          case 6:
            _context.next = 8;
            return dispatch({
              type: 'global/fetchAccessCollection'
            });
          case 8:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function handleRouterChange() {
      return _ref.apply(this, arguments);
    };
  }();
  (0,react.useEffect)(function () {
    window.scrollTo(0, 0);
  }, [props.location]);
  (0,react.useEffect)(function () {
    handleRouterChange();
  }, [dispatch]);
  var _getDvaApp$_store$get = (0,_umi_production_exports.getDvaApp)()._store.getState().global,
    _getDvaApp$_store$get2 = _getDvaApp$_store$get.breadcrumbNameMap,
    localBreadcrumbNameMap = _getDvaApp$_store$get2 === void 0 ? {} : _getDvaApp$_store$get2,
    _getDvaApp$_store$get3 = _getDvaApp$_store$get.menuList,
    localMenuList = _getDvaApp$_store$get3 === void 0 ? [] : _getDvaApp$_store$get3;
  var siderMenuProps = {
    theme: theme,
    menuList: menuList || localMenuList,
    location: location,
    collapsed: collapsed,
    sliderMenuState: sliderMenuState,
    dispatch: dispatch,
    color: color
  };
  var TagsNavProps = {
    breadcrumbNameMap: breadcrumbNameMap || localBreadcrumbNameMap,
    menuList: menuList || localMenuList,
    location: location
  };
  var algorithmObj = theme == 'dark' ? {
    algorithm: es_theme/* default.darkAlgorithm */.Z.darkAlgorithm
  } : {
    algorithm: es_theme/* default.defaultAlgorithm */.Z.defaultAlgorithm
  };
  return /*#__PURE__*/(0,jsx_runtime.jsx)(react.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)(config_provider/* default */.ZP, {
      theme: objectSpread2_default()(objectSpread2_default()({}, algorithmObj), {}, {
        token: {
          colorPrimary: color ? "rgba(".concat(color === null || color === void 0 ? void 0 : color.r, ", ").concat(color === null || color === void 0 ? void 0 : color.g, ", ").concat(color === null || color === void 0 ? void 0 : color.b, ", ").concat(color === null || color === void 0 ? void 0 : color.a, ")") : 'rgba(51,9,215)'
        }
      }),
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(_umi_production_exports.Helmet, {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("title", {
          children: title
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("meta", {
          httpEquiv: "X-UA-Compatible",
          content: "IE=edge,chrome=1"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("meta", {
          name: "viewport",
          content: "width=device-width, initial-scale=1.0"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("meta", {
          name: "keyword",
          content: "react, umi, antd"
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(tour, {
        open: Boolean(Number(open)),
        onClose: function onClose() {
          setOpen('0');
          storage/* localStore.set */.WL.set('hasTour', '0');
        },
        steps: steps
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(es/* StyleProvider */.V9, {
        hashPriority: "high",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(es_layout, {
          className: layoutsmodules.container,
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Widget/* WaterMark */.DV, {
            content: (userInfo === null || userInfo === void 0 ? void 0 : userInfo.username) || '\u672A\u767B\u5F55',
            fillStyle: "rgba(123,139,167,0.2)",
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(base_GlobalHeader, {
              ref1: ref1,
              ref2: ref2,
              ref3: ref3,
              dispatch: dispatch,
              theme: theme,
              ColorPicker: /*#__PURE__*/(0,jsx_runtime.jsx)(GlobalHeader_ColorPicker, {
                dispatch: dispatch,
                color: color
              }),
              children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                children: !lodash_default().isEmpty(breadcrumbNameMap) && !lodash_default().isEmpty(userInfo) ? /*#__PURE__*/(0,jsx_runtime.jsx)(TagsNav, objectSpread2_default()(objectSpread2_default()({}, TagsNavProps), {}, {
                  children: children
                })) : /*#__PURE__*/(0,jsx_runtime.jsx)(spin/* default */.Z, {
                  spinning: true,
                  size: "large",
                  className: layoutsmodules.spinning,
                  tip: "\\u52A0\\u8F7D\\u4E2D..."
                })
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)(es_layout, {
              className: layoutsmodules.content,
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)(BasicLayout_Sider, {
                theme: theme,
                style: {
                  background: 'transparent',
                  display: collapsed ? 'none' : ''
                },
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(CustomMenu, objectSpread2_default()(objectSpread2_default()({}, siderMenuProps), {}, {
                  ref0: ref0
                }))
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(Content, {
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(KeepAlive/* KeepAlive */.O, {
                  children: location.pathname !== '/' ? /*#__PURE__*/(0,jsx_runtime.jsx)(_umi_production_exports.Outlet, {}) : /*#__PURE__*/(0,jsx_runtime.jsx)(layouts_IndexPage, {})
                })
              })]
            })]
          })
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(float_button, {
        type: "primary",
        icon: /*#__PURE__*/(0,jsx_runtime.jsx)(icons_BellOutlined, {}),
        tooltip: '\u91CD\u65B0\u6253\u5F00\u64CD\u4F5C\u6307\u5F15',
        onClick: function onClick() {
          setOpen('1');
          storage/* localStore.set */.WL.set('hasTour', '1');
        }
      })]
    })
  });
};
/* harmony default export */ var layouts_BasicLayout = ((0,_umi_production_exports.connect)(function (_ref2) {
  var global = _ref2.global,
    login = _ref2.login;
  return objectSpread2_default()(objectSpread2_default()({}, login), global);
})((0,_umi_production_exports.withRouter)(BasicLayout)));

//# sourceURL=webpack:///./src/core/layouts/BasicLayout.tsx_+_96_modules?`)},68381:function(module,__unused_webpack_exports,__webpack_require__){eval(`module.exports = __webpack_require__.p + "static/indexPage.43c19844.png";

//# sourceURL=webpack:///./src/assets/indexPage.png?`)}}]);
