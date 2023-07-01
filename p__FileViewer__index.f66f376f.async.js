"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[201],{12690:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval(`
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

//# sourceURL=webpack:///./src/components/CommonCard/Page/index.tsx_+_1_modules?`)},34832:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval(`/* harmony import */ var _Users_eternallycyf_Documents_GitHub_case_Antd_CustomComponent_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12444);
/* harmony import */ var _Users_eternallycyf_Documents_GitHub_case_Antd_CustomComponent_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_eternallycyf_Documents_GitHub_case_Antd_CustomComponent_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_eternallycyf_Documents_GitHub_case_Antd_CustomComponent_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(72004);
/* harmony import */ var _Users_eternallycyf_Documents_GitHub_case_Antd_CustomComponent_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_eternallycyf_Documents_GitHub_case_Antd_CustomComponent_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_eternallycyf_Documents_GitHub_case_Antd_CustomComponent_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25098);
/* harmony import */ var _Users_eternallycyf_Documents_GitHub_case_Antd_CustomComponent_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_eternallycyf_Documents_GitHub_case_Antd_CustomComponent_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Users_eternallycyf_Documents_GitHub_case_Antd_CustomComponent_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_inherits_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(31996);
/* harmony import */ var _Users_eternallycyf_Documents_GitHub_case_Antd_CustomComponent_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_inherits_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Users_eternallycyf_Documents_GitHub_case_Antd_CustomComponent_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_inherits_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Users_eternallycyf_Documents_GitHub_case_Antd_CustomComponent_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_createSuper_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(26037);
/* harmony import */ var _Users_eternallycyf_Documents_GitHub_case_Antd_CustomComponent_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_createSuper_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Users_eternallycyf_Documents_GitHub_case_Antd_CustomComponent_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_createSuper_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Users_eternallycyf_Documents_GitHub_case_Antd_CustomComponent_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9783);
/* harmony import */ var _Users_eternallycyf_Documents_GitHub_case_Antd_CustomComponent_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Users_eternallycyf_Documents_GitHub_case_Antd_CustomComponent_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2453);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(12767);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(67294);
/* harmony import */ var react_excel_renderer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(24756);
/* harmony import */ var react_excel_renderer__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_excel_renderer__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _FileView__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(55529);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(85893);











var txtFileTypes = ['txt', 'json', 'js', 'css', 'java', 'py', 'html', 'jsx', 'ts', 'tsx', 'xml', 'md', 'log'];
var fileAllTypes = ['docx', 'xlsx', 'png', 'jpg', 'pdf'].concat(txtFileTypes);
var FilePreView = /*#__PURE__*/function (_PureComponent) {
  _Users_eternallycyf_Documents_GitHub_case_Antd_CustomComponent_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_inherits_js__WEBPACK_IMPORTED_MODULE_3___default()(FilePreView, _PureComponent);
  var _super = _Users_eternallycyf_Documents_GitHub_case_Antd_CustomComponent_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_createSuper_js__WEBPACK_IMPORTED_MODULE_4___default()(FilePreView);
  function FilePreView(props) {
    var _this;
    _Users_eternallycyf_Documents_GitHub_case_Antd_CustomComponent_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default()(this, FilePreView);
    _this = _super.call(this, props);
    _Users_eternallycyf_Documents_GitHub_case_Antd_CustomComponent_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_5___default()(_Users_eternallycyf_Documents_GitHub_case_Antd_CustomComponent_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_2___default()(_this), "pdfViewRef", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createRef());
    _Users_eternallycyf_Documents_GitHub_case_Antd_CustomComponent_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_5___default()(_Users_eternallycyf_Documents_GitHub_case_Antd_CustomComponent_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_2___default()(_this), "previewWrapperRef", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createRef());
    _Users_eternallycyf_Documents_GitHub_case_Antd_CustomComponent_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_5___default()(_Users_eternallycyf_Documents_GitHub_case_Antd_CustomComponent_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_2___default()(_this), "controlIsShow", function (params) {
      var modalVisible = _this.state.modalVisible;
      var src = params.src,
        base64 = params.base64,
        originFileObj = params.originFileObj;
      var name = originFileObj.name;
      var fileType = name.slice(name.lastIndexOf('.') + 1).toLowerCase();
      if (!fileAllTypes.includes(fileType)) {
        return antd__WEBPACK_IMPORTED_MODULE_10__/* ["default"].error */ .ZP.error('\u8BE5\u6587\u4EF6\u4E0D\u652F\u6301\u9884\u89C8');
      }
      if (fileType == 'xlsx') {
        (0,react_excel_renderer__WEBPACK_IMPORTED_MODULE_7__.ExcelRenderer)(originFileObj, function (err, resp) {
          _this.setState({
            excelData: {
              cols: resp.cols,
              rows: resp.rows
            }
          });
        });
      }
      _this.setState({
        modalVisible: !modalVisible,
        src: src,
        base64: base64,
        fileType: fileType
      });
    });
    _this.state = {
      modalVisible: false,
      fileType: '',
      excelData: {
        cols: [],
        rows: []
      }
    };
    return _this;
  }
  //\u663E\u9690\u72B6\u6001\u7684\u6539\u53D8
  _Users_eternallycyf_Documents_GitHub_case_Antd_CustomComponent_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default()(FilePreView, [{
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$state = this.state,
        modalVisible = _this$state.modalVisible,
        src = _this$state.src,
        base64 = _this$state.base64,
        fileType = _this$state.fileType,
        excelData = _this$state.excelData;
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(antd__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
        open: modalVisible,
        title: fileType + ' \u9884\u89C8',
        onCancel: function onCancel() {
          _this2.setState({
            modalVisible: false
          });
        },
        width: 1200,
        bodyStyle: {
          overflow: 'scroll',
          height: '70vh'
        },
        footer: null,
        destroyOnClose: true,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_FileView__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
          id: "file-preview-modal",
          ref: this.pdfViewRef,
          src: src,
          base64: base64,
          fileType: fileType,
          excelData: excelData,
          txtFileTypes: txtFileTypes,
          styles: {
            height: '600px'
          }
        })
      });
    }
  }]);
  return FilePreView;
}(react__WEBPACK_IMPORTED_MODULE_6__.PureComponent);
/* harmony default export */ __webpack_exports__["Z"] = (FilePreView);

//# sourceURL=webpack:///./src/components/File/FileViewerV1/FilePreView.tsx?`)},27600:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval(`
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




//# sourceURL=webpack:///./src/core/base/KeepAlive/index.tsx_+_5_modules?`)},27884:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval(`// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ FileViewer; }
});

// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(5574);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);
// EXTERNAL MODULE: ./src/components/CommonCard/Page/index.tsx + 1 modules
var Page = __webpack_require__(12690);
// EXTERNAL MODULE: ./node_modules/antd/es/form/index.js + 20 modules
var es_form = __webpack_require__(12029);
// EXTERNAL MODULE: ./node_modules/antd/es/upload/index.js + 27 modules
var upload = __webpack_require__(66476);
// EXTERNAL MODULE: ./node_modules/antd/es/button/index.js
var es_button = __webpack_require__(71577);
// EXTERNAL MODULE: ./node_modules/antd/es/table/index.js + 91 modules
var table = __webpack_require__(50168);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./src/components/File/FileViewerV1/FilePreView.tsx
var FilePreView = __webpack_require__(34832);
;// CONCATENATED MODULE: ./src/components/File/FileViewerV1/demo/constant.ts
var dataSource = [{
  key: '1',
  type: 'docx'
}, {
  key: '2',
  type: 'xlsx'
}, {
  key: '3',
  type: 'png'
}, {
  key: '4',
  type: 'jpg'
}, {
  key: '5',
  type: 'pdf'
}, {
  key: '6',
  type: 'txt'
}, {
  key: '7',
  type: 'json'
}, {
  key: '8',
  type: 'js'
}, {
  key: '9',
  type: 'css'
}, {
  key: '10',
  type: 'java'
}, {
  key: '11',
  type: 'py'
}, {
  key: '12',
  type: 'html'
}, {
  key: '13',
  type: 'jsx'
}, {
  key: '14',
  type: 'ts'
}, {
  key: '15',
  type: 'tsx'
}, {
  key: '16',
  type: 'xml'
}, {
  key: '17',
  type: 'md'
}, {
  key: '18',
  type: 'log'
}];
var columns = [{
  title: '\u7C7B\u578B',
  dataIndex: '\u7C7B\u578B',
  key: 'key',
  render: function render() {
    return '\u652F\u6301\u7C7B\u578B';
  }
}, {
  title: '\u63CF\u8FF0',
  dataIndex: 'type',
  key: 'type'
}];
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./src/components/File/FileViewerV1/demo/demo.tsx








var normFile = function normFile(e) {
  if (Array.isArray(e)) return e;
  return e === null || e === void 0 ? void 0 : e.fileList;
};
var getBase64 = function getBase64(file, cb) {
  var reader = new FileReader();
  reader.addEventListener('load', function () {
    return cb(reader.result);
  });
  reader.readAsDataURL(file);
};
var PdfPage = function PdfPage() {
  var pdfRef = (0,react.useRef)(null);
  var _Form$useForm = es_form/* default.useForm */.Z.useForm(),
    _Form$useForm2 = slicedToArray_default()(_Form$useForm, 1),
    form = _Form$useForm2[0];
  var handlePreviewPdf = function handlePreviewPdf(_ref) {
    var originFileObj = _ref.originFileObj;
    // 1.base64\u65B9\u5F0F\u9884\u89C8
    getBase64(originFileObj, function (fileURL) {
      pdfRef.current.controlIsShow({
        base64: fileURL,
        originFileObj: originFileObj
      });
    });
    // 2.src\u65B9\u5F0F\u9884\u89C8 \u901A\u8FC7\u540E\u7AEF\u63A5\u53E3\u83B7\u53D6src\u8DEF\u5F84
    // pdfRef.current.controlIsShow({
    //   src: "http://marsgis.cn/doc/study-gis.pdf",
    // });
  };

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(Page/* default */.Z, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(es_form/* default */.Z, {
      form: form,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("h2", {
        children: "\\u70B9\\u51FB\\u6587\\u4EF6\\u540D\\u5373\\u53EF\\u9884\\u89C8"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default.Item */.Z.Item, {
        valuePropName: "fileList",
        getValueFromEvent: normFile,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(upload/* default */.Z, {
          onPreview: function onPreview(file) {
            return handlePreviewPdf(file);
          },
          beforeUpload: function beforeUpload() {
            return false;
          },
          name: "file",
          maxCount: 10,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
            children: "\\u4E0A\\u4F20word excel pdf \\u56FE\\u7247\\u7B49\\u683C\\u5F0F"
          })
        })
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(FilePreView/* default */.Z, {
      ref: pdfRef
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(table/* default */.Z, {
      pagination: false,
      dataSource: dataSource,
      columns: columns
    })]
  });
};
/* harmony default export */ var demo = (PdfPage);
// EXTERNAL MODULE: ./src/core/base/KeepAlive/index.tsx + 5 modules
var KeepAlive = __webpack_require__(27600);
// EXTERNAL MODULE: ./src/core/Enhance/withRoutePage.tsx
var withRoutePage = __webpack_require__(28790);
// EXTERNAL MODULE: ./src/.umi-production/exports.ts + 39 modules
var _umi_production_exports = __webpack_require__(41997);
// EXTERNAL MODULE: ./node_modules/redux/es/redux.js
var redux = __webpack_require__(14890);
;// CONCATENATED MODULE: ./src/pages/FileViewer/index.tsx






var IndexPage = function IndexPage() {
  return /*#__PURE__*/(0,jsx_runtime.jsx)(demo, {});
};
/* harmony default export */ var FileViewer = ((0,redux/* compose */.qC)(withRoutePage/* withRoutePage */.A, _umi_production_exports.withRouter, KeepAlive/* KeepAliveTransfer */.G)(IndexPage));

//# sourceURL=webpack:///./src/pages/FileViewer/index.tsx_+_2_modules?`)}}]);
