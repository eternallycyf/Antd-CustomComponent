"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[176],{44858:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval(`// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ hook; }
});

// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/regeneratorRuntime.js
var regeneratorRuntime = __webpack_require__(15009);
var regeneratorRuntime_default = /*#__PURE__*/__webpack_require__.n(regeneratorRuntime);
// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(99289);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);
// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/objectSpread2.js
var objectSpread2 = __webpack_require__(97857);
var objectSpread2_default = /*#__PURE__*/__webpack_require__.n(objectSpread2);
// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(13769);
var objectWithoutProperties_default = /*#__PURE__*/__webpack_require__.n(objectWithoutProperties);
// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(5574);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);
// EXTERNAL MODULE: ./src/components/index.tsx + 50 modules
var components = __webpack_require__(41599);
// EXTERNAL MODULE: ./src/config/projectConfig.tsx
var projectConfig = __webpack_require__(69365);
// EXTERNAL MODULE: ./src/components/File/FileExportExcel/index.ts
var FileExportExcel = __webpack_require__(94174);
// EXTERNAL MODULE: ./src/services/global.ts
var global = __webpack_require__(21733);
// EXTERNAL MODULE: ./node_modules/antd/es/message/index.js + 4 modules
var message = __webpack_require__(2453);
// EXTERNAL MODULE: ./node_modules/antd/es/modal/index.js + 16 modules
var modal = __webpack_require__(12767);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
;// CONCATENATED MODULE: ./src/hook/useBaseComponent.tsx







var useBaseComponent = function useBaseComponent(props) {
  var tableRef = (0,react.useRef)(null);
  var searchRef = (0,react.useRef)(null);
  var formRef = (0,react.useRef)(null);
  var propsSearchParams = props.searchParams,
    _props$expandedKey = props.expandedKey,
    propsExpandedKey = _props$expandedKey === void 0 ? '' : _props$expandedKey,
    _props$selectedRows = props.selectedRows,
    propsSelectedRows = _props$selectedRows === void 0 ? [] : _props$selectedRows,
    _props$selectedRowKey = props.selectedRowKeys,
    propsSelectedRowKeys = _props$selectedRowKey === void 0 ? [] : _props$selectedRowKey,
    _props$expandedRowKey = props.expandedRowKeys,
    propsExpandedRowKeys = _props$expandedRowKey === void 0 ? [] : _props$expandedRowKey,
    onSelect = props.onSelect;
  var _useState = (0,react.useState)(false),
    _useState2 = slicedToArray_default()(_useState, 2),
    loading = _useState2[0],
    setLoading = _useState2[1];
  var _useState3 = (0,react.useState)(propsSearchParams !== null && propsSearchParams !== void 0 ? propsSearchParams : {}),
    _useState4 = slicedToArray_default()(_useState3, 2),
    searchParams = _useState4[0],
    setSearchParams = _useState4[1];
  var _useState5 = (0,react.useState)(propsSelectedRows),
    _useState6 = slicedToArray_default()(_useState5, 2),
    selectedRows = _useState6[0],
    setSelectedRows = _useState6[1];
  var _useState7 = (0,react.useState)(propsSelectedRowKeys),
    _useState8 = slicedToArray_default()(_useState7, 2),
    selectedRowKeys = _useState8[0],
    setSelectedRowKeys = _useState8[1];
  var _useState9 = (0,react.useState)(propsExpandedRowKeys),
    _useState10 = slicedToArray_default()(_useState9, 2),
    expandedRowKeys = _useState10[0],
    setExpandedRowKeys = _useState10[1];
  var _useState11 = (0,react.useState)(propsExpandedKey !== null && propsExpandedKey !== void 0 ? propsExpandedKey : ''),
    _useState12 = slicedToArray_default()(_useState11, 2),
    expandedKey = _useState12[0],
    setExpandedKey = _useState12[1];
  (0,react.useEffect)(function () {
    var _tableRef$current;
    (_tableRef$current = tableRef.current) === null || _tableRef$current === void 0 ? void 0 : _tableRef$current.handleRefreshPage();
  }, [searchParams]);

  // \u83B7\u53D6\u5217\u8868dataSource
  var getDataSource = function getDataSource() {
    var _ref = tableRef.current || {},
      getTableData = _ref.getTableData;
    return getTableData === null || getTableData === void 0 ? void 0 : getTableData();
  };
  var handleRefreshPage = function handleRefreshPage() {
    var _ref2 = tableRef.current || {},
      handleRefreshPage = _ref2.handleRefreshPage;
    setSelectedRows([]);
    setSelectedRowKeys([]);
    setExpandedRowKeys([]);
    handleRefreshPage();
  };
  var handleSearch = /*#__PURE__*/function () {
    var _ref3 = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee(values) {
      var _ref4, handleFirstPage;
      return regeneratorRuntime_default()().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _ref4 = tableRef.current || {}, handleFirstPage = _ref4.handleFirstPage;
            setSearchParams(values);
            _context.next = 4;
            return handleFirstPage();
          case 4:
            setExpandedRowKeys([]);
            handleSelect([], []);
          case 6:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function handleSearch(_x) {
      return _ref3.apply(this, arguments);
    };
  }();
  var handleDynamicParam = function handleDynamicParam(values) {
    var _ref5 = tableRef.current || {},
      handleDynamicParam = _ref5.handleDynamicParam;
    handleDynamicParam(values);
  };
  var handleExport = function handleExport(title) {
    if (tableRef.current) {
      var _tableRef$current2;
      (0,FileExportExcel/* downloadExcel */.r8)({
        filename: title,
        sheets: [{
          sheetName: title,
          columns: tableRef.current.state.columns.filter(function (item) {
            return item.dataIndex !== 'operate';
          }),
          dataSource: (_tableRef$current2 = tableRef.current) === null || _tableRef$current2 === void 0 ? void 0 : _tableRef$current2.getTableData(),
          header: title
        }]
      });
    }
  };
  var handleSelect = function handleSelect(selectedRowKeys, selectedRows) {
    setSelectedRowKeys(selectedRowKeys);
    setSelectedRows(selectedRows);
  };
  var handleExpand = function handleExpand(expanded, record) {
    if (!expanded) return setExpandedRowKeys([]);
    setExpandedRowKeys([record === null || record === void 0 ? void 0 : record[expandedKey]]);
  };
  var handleAdd = function handleAdd(defaultProps) {
    var _ref6 = formRef.current || {},
      handleAdd = _ref6.handleAdd;
    if (handleAdd) handleAdd(defaultProps);
  };
  var handleEdit = function handleEdit(record) {
    var _ref7 = formRef.current || {},
      handleEdit = _ref7.handleEdit;
    if (handleEdit) handleEdit(record);
  };
  var handleDelete = /*#__PURE__*/function () {
    var _ref8 = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee2(params, deleteUrl) {
      var _ref9, handleRefreshPage, res;
      return regeneratorRuntime_default()().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _ref9 = tableRef.current || {}, handleRefreshPage = _ref9.handleRefreshPage;
            if (deleteUrl) {
              _context2.next = 3;
              break;
            }
            return _context2.abrupt("return", message/* default.error */.ZP.error('\u8BF7\u8BBE\u7F6E deleteUrl \u5C5E\u6027'));
          case 3:
            setLoading(true);
            _context2.next = 6;
            return (0,global/* postAction */.SI)(deleteUrl, params);
          case 6:
            res = _context2.sent;
            setLoading(false);
            if (res.code === 200) {
              message/* default.success */.ZP.success(res.msg);
              if (handleRefreshPage) handleRefreshPage();
            } else {
              message/* default.error */.ZP.error(res.msg);
            }
          case 9:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function handleDelete(_x2, _x3) {
      return _ref8.apply(this, arguments);
    };
  }();
  var handleClearSelected = function handleClearSelected() {
    setSelectedRows([]);
    setSelectedRowKeys([]);
    if (onSelect) onSelect([], []);
  };
  var handleBatchDelete = function handleBatchDelete(deleteBatchUrl) {
    var _ref10 = tableRef.current || {},
      handleRefreshPage = _ref10.handleRefreshPage;
    if (!deleteBatchUrl) {
      return message/* default.error */.ZP.error('\u8BF7\u8BBE\u7F6E deleteBatchUrl \u5C5E\u6027');
    }
    if (selectedRowKeys && selectedRowKeys.length <= 0) {
      return message/* default.error */.ZP.error('\u8BF7\u9009\u62E9\u4E00\u6761\u8BB0\u5F55');
    }
    if (selectedRowKeys) {
      var ids = selectedRowKeys.join(',');
      modal/* default.confirm */.Z.confirm({
        title: '\u786E\u8BA4\u5220\u9664',
        content: '\u786E\u8BA4\u5220\u9664\u9009\u4E2D\u7684\u8BB0\u5F55\u5417\uFF1F',
        onOk: function () {
          var _onOk = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee3() {
            var res;
            return regeneratorRuntime_default()().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  setLoading(true);
                  _context3.next = 3;
                  return (0,global/* deleteAction */.mn)(deleteBatchUrl, {
                    ids: ids
                  });
                case 3:
                  res = _context3.sent;
                  setLoading(false);
                  if (res.code === 200) {
                    message/* default.success */.ZP.success(res.msg);
                    if (handleRefreshPage) handleRefreshPage();
                    if (handleClearSelected) handleClearSelected();
                  } else {
                    message/* default.error */.ZP.error(res.msg);
                  }
                case 6:
                case "end":
                  return _context3.stop();
              }
            }, _callee3);
          }));
          function onOk() {
            return _onOk.apply(this, arguments);
          }
          return onOk;
        }()
      });
    }
  };
  return {
    tableRef: tableRef,
    searchRef: searchRef,
    formRef: formRef,
    loading: loading,
    setLoading: setLoading,
    searchParams: searchParams,
    setSearchParams: setSearchParams,
    selectedRows: selectedRows,
    setSelectedRows: setSelectedRows,
    selectedRowKeys: selectedRowKeys,
    setSelectedRowKeys: setSelectedRowKeys,
    expandedRowKeys: expandedRowKeys,
    setExpandedRowKeys: setExpandedRowKeys,
    expandedKey: expandedKey,
    setExpandedKey: setExpandedKey,
    getDataSource: getDataSource,
    handleRefreshPage: handleRefreshPage,
    handleSearch: handleSearch,
    handleSelect: handleSelect,
    handleDynamicParam: handleDynamicParam,
    handleExport: handleExport,
    handleExpand: handleExpand,
    handleAdd: handleAdd,
    handleEdit: handleEdit,
    handleDelete: handleDelete,
    handleBatchDelete: handleBatchDelete
  };
};
/* harmony default export */ var hook_useBaseComponent = (useBaseComponent);
// EXTERNAL MODULE: ./src/typings/index.ts
var typings = __webpack_require__(63718);
// EXTERNAL MODULE: ./src/utils/util.tsx
var util = __webpack_require__(10618);
// EXTERNAL MODULE: ./src/.umi-production/exports.ts + 39 modules
var _umi_production_exports = __webpack_require__(41997);
// EXTERNAL MODULE: ./node_modules/antd/es/form/index.js + 20 modules
var es_form = __webpack_require__(12029);
// EXTERNAL MODULE: ./node_modules/antd/es/input/index.js + 5 modules
var input = __webpack_require__(75008);
// EXTERNAL MODULE: ./node_modules/antd/es/row/index.js
var row = __webpack_require__(71230);
// EXTERNAL MODULE: ./node_modules/antd/es/col/index.js
var col = __webpack_require__(15746);
// EXTERNAL MODULE: ./src/pages/Component/service.ts
var service = __webpack_require__(58955);
;// CONCATENATED MODULE: ./src/pages/Component/hook/config/columns.tsx
var ACTIVE_TYPE = {
  '0': '\u6EE1\u6298',
  '1': '\u6EE1\u51CF',
  '2': '\u7ACB\u51CF'
};
var getColumns = function getColumns(self) {
  return [{
    dataIndex: 'activityName',
    title: '\u6D3B\u52A8\u540D\u79F0',
    tooltip: function tooltip() {
      return 'tooltip';
    },
    formatNumber: true,
    width: 300,
    sorter: true,
    align: 'center',
    fixed: 'left',
    ellipsis: true,
    initCheckedDisabled: true
  }, {
    dataIndex: 'activityStartTime',
    title: '\u6D3B\u52A8\u5F00\u59CB\u65F6\u95F4',
    width: 112,
    sorter: true,
    formatTime: true,
    align: 'center',
    fixed: 'left',
    // ellipsis: true,
    initChecked: false
  }, {
    dataIndex: 'activityPrice',
    title: 'activityPrice',
    width: 112,
    sorter: true,
    formatNumber: 2,
    align: 'center',
    fixed: 'left'
    // ellipsis: true,
  }, {
    dataIndex: 'activityType',
    title: '\u6D3B\u52A8\u7C7B\u578B',
    width: 112,
    render: function render(text) {
      return ACTIVE_TYPE[text] || '--';
    },
    // sorter: true,
    align: 'center',
    fixed: 'left',
    ellipsis: true,
    // sorter: (a, b) => (a.area || '').localeCompare(b.area || ''),
    sorter: true
    // TODO: add types
    //     {
    //   sorterFn?: (
    //     dataIndex: string,
    //     sorter: string,
    //   ) => { order: 'ascend' | 'descend'; sort: string };
    //   isRefresh?: boolean;
    // }
    // sorterFn: (dataIndex, sorter, self) => ({
    //   order: sorter,
    //   sort: 'xxxxxx',
    // }),
  }];
};
// EXTERNAL MODULE: ./src/utils/validate.tsx
var validate = __webpack_require__(40297);
// EXTERNAL MODULE: ./node_modules/dayjs/dayjs.min.js
var dayjs_min = __webpack_require__(27484);
var dayjs_min_default = /*#__PURE__*/__webpack_require__.n(dayjs_min);
// EXTERNAL MODULE: ./node_modules/antd/es/tag/index.js + 3 modules
var tag = __webpack_require__(51904);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./src/pages/Component/hook/config/form.tsx









var apiPrefix = projectConfig/* default.apiPrefix */.Z.apiPrefix;
var layout = {
  labelCol: {
    span: 4
  },
  wrapperCol: {
    span: 20
  }
};
var ITEM_PROPS = {
  style: {
    marginBottom: 0
  }
};
var getFormList = function getFormList(self) {
  return [{
    name: 'custom',
    label: '\u81EA\u5B9A\u4E49',
    type: 'custom',
    Component: function Component() {
      var COLOR_DICT = {
        1: 'magenta',
        2: 'red',
        3: 'volcano',
        4: 'orange',
        5: 'gold',
        6: 'lime',
        7: 'green',
        8: 'cyan',
        9: 'blue',
        10: 'purple'
      };
      var tagS = Array.from({
        length: 20
      }).map(function (_, i) {
        return /*#__PURE__*/(0,jsx_runtime.jsx)(tag/* default */.Z, {
          color: COLOR_DICT[~~(Math.random() * 10)],
          children: COLOR_DICT[~~(Math.random() * 10)]
        }, Math.random());
      });
      return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(components/* CustomTooltip.FileName */.WH.FileName, {
          name: 'xxasdasdasdx.png',
          prefixLength: 5,
          hasPreview: true,
          previewLinkType: "default",
          fileId: "11xxx"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(components/* CustomTooltip */.WH, {
          text: Array.from({
            length: 300
          }, function (v, i) {
            return /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
              children: "=="
            });
          }),
          row: {
            rows: 1,
            expend: true,
            EllipsisSymbol: false,
            isRight: true
          }
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(components/* CustomTooltip */.WH, {
          text: tagS,
          row: {
            rows: 1,
            expend: true,
            EllipsisSymbol: true,
            isRight: true,
            isTag: true
          }
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(components/* CustomTooltip.Paragraph */.WH.Paragraph, {
          text: Array.from({
            length: 300
          }, function (v, i) {
            return '--';
          }),
          rows: 2
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(components/* CustomTooltip.Paragraph */.WH.Paragraph, {
          text: Array.from({
            length: 10
          }, function (v, i) {
            return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              children: "asdasds"
            }, i);
          }),
          rows: 2
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(components/* CustomTooltip */.WH, {
          text: tagS,
          row: {
            rows: 1,
            expend: true,
            EllipsisSymbol: true,
            isTag: true
          }
        })]
      });
    }
  }, {
    name: 'activityCode',
    label: '\u6D3B\u52A8\u7F16\u7801',
    type: 'input',
    allowClear: true,
    formFieldProps: {
      rules: validate/* default.withName */.Z.withName('\u6D3B\u52A8\u7F16\u7801').isRequired().create()
    },
    // dictConfig: { textKey: 'name', valueKey: 'code' },
    itemProps: objectSpread2_default()({}, ITEM_PROPS)
  }, {
    name: 'activityName',
    label: '\u6D3B\u52A8\u540D\u79F0',
    type: 'input',
    formFieldProps: {
      rules: validate/* default.withName */.Z.withName('\u6D3B\u52A8\u540D\u79F0').isRequired().create()
    },
    allowClear: true,
    itemProps: objectSpread2_default()({}, ITEM_PROPS),
    condition: [{
      action: 'disabled',
      regex: {
        textarea: '\u7981\u7528'
      }
    }]
  }, {
    name: 'textarea',
    label: 'textarea',
    type: 'textarea',
    disabled: false,
    // formFieldProps: {
    //   rules: FormRules.withName('\u6D3B\u52A8\u540D\u79F0').isRequired().create(),
    // },
    initialValue: '\u7981\u7528',
    formFieldProps: {
      rules: [{
        required: true,
        message: '\u8BF7\u8F93\u5165'
      }, {
        max: 100,
        message: '\u6700\u591A100\u4E2A\u5B57\u7B26'
      }]
    },
    controlProps: {
      maxLength: 100,
      showCount: true,
      autoSize: {
        minRows: 5
      },
      onChange: function onChange(e) {
        // console.log(e)
      }
    },
    itemProps: {
      style: {
        marginBottom: 0
      }
    }
  }, {
    name: 'type',
    label: 'type',
    type: 'select',
    dict: [{
      text: '\u6EE1\u6298',
      value: '0'
    }, {
      text: '\u6EE1\u51CF',
      value: '1'
    }, {
      text: '\u7ACB\u51CF',
      value: '2'
    }],
    renderItem: function renderItem(item) {
      return "".concat(item.value, " - ").concat(item.text);
    },
    hide: function hide(config) {
      // console.log(config);
      return false;
    }
  }, {
    name: 'custom',
    label: 'custom',
    type: 'custom',
    Component: function Component(props) {
      return '--';
    }
  }, {
    name: 'week',
    label: 'week',
    type: 'date',
    format: 'YYYY-w',
    picker: 'week',
    controlProps: {}
  }, {
    name: 'startMonth,endMonth',
    label: 'monthRange',
    type: 'monthRange',
    format: 'YYYYMM',
    initialValue: [dayjs_min_default()('2020-01'), dayjs_min_default()('2020-02')]
  }, {
    name: 'otherButtonClick',
    label: 'otherButtonClick',
    type: 'select',
    otherType: 'button',
    otherText: '\u81EA\u52A8\u751F\u6210'
  }, {
    name: 'EditCol',
    label: '\u5B9E\u65F6\u7F16\u8F91\u7684\u8868\u683C',
    type: 'editCol',
    initialValue: [{
      tableFormCode: '111',
      tableFormName: '111',
      tableFormTime: [dayjs_min_default()(), dayjs_min_default()()]
    }, {
      tableFormCode: '222',
      tableFormName: '222',
      tableFormTime: [dayjs_min_default()(), dayjs_min_default()()]
    }, {
      tableFormCode: '333',
      tableFormName: '333',
      tableFormTime: [dayjs_min_default()(), dayjs_min_default()()]
    }],
    tableProps: {
      columns: [{
        title: '\u6D3B\u52A8\u7F16\u7801',
        dataIndex: 'tableFormCode',
        // width: 200,
        editable: true,
        formItemProps: {
          name: 'tableFormCode',
          label: '\u6D3B\u52A8\u7F16\u7801',
          type: 'input',
          col: 12,
          allowClear: true,
          formFieldProps: {
            rules: validate/* default.withName */.Z.withName('\u6D3B\u52A8\u7F16\u7801').isRequired().create()
          },
          // dictConfig: { textKey: 'name', valueKey: 'code' },
          itemProps: objectSpread2_default()({}, ITEM_PROPS)
        }
      }, {
        title: '\u6D3B\u52A8\u540D\u79F0',
        dataIndex: 'tableFormName',
        // width: 200,
        editable: true,
        formItemProps: {
          name: 'tableFormName',
          label: '\u6D3B\u52A8\u540D\u79F0',
          type: 'input',
          col: 12,
          formFieldProps: {
            rules: validate/* default.withName */.Z.withName('\u6D3B\u52A8\u540D\u79F0').isRequired().create()
          },
          allowClear: true,
          itemProps: objectSpread2_default()({}, ITEM_PROPS),
          condition: [{
            action: 'disabled',
            regex: {
              textarea: '\u7981\u7528'
            }
          }]
        }
      }, {
        title: 'time',
        dataIndex: 'tableFormTime',
        width: 200,
        editable: true,
        formItemProps: {
          name: 'tableFormTime',
          label: 'time',
          type: 'dateRange',
          disabled: false,
          // formFieldProps: {
          //   rules: FormRules.withName('\u6D3B\u52A8\u540D\u79F0').isRequired().create(),
          // },
          controlProps: {},
          itemProps: {}
        }
      }]
    }
  }, {
    name: 'editRow',
    label: '\u53EF\u4FDD\u5B58\u7684table',
    type: 'editRow',
    initialValue: [{
      editCode: '1',
      editName: '1',
      editTime: [dayjs_min_default()(), dayjs_min_default()()]
    }],
    tableProps: {
      rowKey: 'editCode',
      columns: [{
        title: '\u6D3B\u52A8\u7F16\u7801',
        dataIndex: 'editCode',
        // width: 200,
        editable: true,
        formItemProps: {
          name: 'editCode',
          label: '\u6D3B\u52A8\u7F16\u7801',
          type: 'input',
          col: 12,
          allowClear: true,
          formFieldProps: {
            rules: validate/* default.withName */.Z.withName('\u6D3B\u52A8\u7F16\u7801').isRequired().create()
          },
          // dictConfig: { textKey: 'name', valueKey: 'code' },
          itemProps: objectSpread2_default()({}, ITEM_PROPS)
        }
      }, {
        title: '\u6D3B\u52A8\u540D\u79F0',
        dataIndex: 'editName',
        // width: 200,
        editable: true,
        formItemProps: {
          name: 'editName',
          label: '\u6D3B\u52A8\u540D\u79F0',
          type: 'input',
          col: 12,
          formFieldProps: {
            rules: validate/* default.withName */.Z.withName('\u6D3B\u52A8\u540D\u79F0').isRequired().create()
          },
          allowClear: true,
          itemProps: objectSpread2_default()({}, ITEM_PROPS),
          condition: [{
            action: 'disabled',
            regex: {
              textarea: '\u7981\u7528'
            }
          }]
        }
      }, {
        title: 'time',
        dataIndex: 'editTime',
        width: 200,
        editable: true,
        formItemProps: {
          name: 'editTime',
          label: 'time',
          type: 'dateRange',
          disabled: false,
          // formFieldProps: {
          //   rules: FormRules.withName('\u6D3B\u52A8\u540D\u79F0').isRequired().create(),
          // },
          controlProps: {},
          itemProps: {}
        }
      }]
    }
  }];
};
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/QuestionCircleOutlined.js
var QuestionCircleOutlined = __webpack_require__(63783);
// EXTERNAL MODULE: ./node_modules/antd/es/tooltip/index.js + 3 modules
var tooltip = __webpack_require__(83062);
;// CONCATENATED MODULE: ./src/pages/Component/hook/index.less?modules
// extracted by mini-css-extract-plugin
/* harmony default export */ var hookmodules = ({"noColon":"noColon___pCPmI"});
;// CONCATENATED MODULE: ./src/pages/Component/hook/config/search.tsx






var STATUS_DICT = [{
  text: '\u6EE1\u6298',
  value: '0'
}, {
  text: '\u6EE1\u51CF',
  value: '1'
}, {
  text: '\u7ACB\u51CF',
  value: '2'
}];
var getSearches = function getSearches(self) {
  return [{
    name: 'activityNameSearch',
    label: 'search',
    type: 'search'
  }, {
    name: 'activityName',
    label: '\u7535\u8BDD',
    disabled: true,
    type: 'input',
    formFieldProps: {
      // rules: FormRules.withName('\u7535\u8BDD').phone().isRequired().create()
      // rules: FormRules.withName('\u7535\u8BDD').email().isRequired().create()
    },
    controlProps: {},
    layout: {
      labelCol: {
        span: 4
      },
      wrapperCol: {
        span: 20
      }
    }
    // children: [{}]
  }, {
    name: 'switch',
    label: 'switch',
    type: 'switch',
    initialValue: true,
    transform: function transform(value) {
      return value ? 1 : 0;
    }
  }, {
    name: 'activityType',
    label: '\u6D3B\u52A8\u7C7B\u578B',
    col: 10,
    type: 'radio',
    dict: STATUS_DICT
    // initialValue: STATUS_DICT[0]['value'],
  }, {
    name: 'status',
    label: '\u72B6\u6001',
    type: 'select',
    placeholder: '\u8BF7\u9009\u62E9\u72B6\u6001',
    dict: STATUS_DICT,
    allowClear: true
  }, {
    name: '\u5E26\u8BF7\u6C42\u7684select',
    label: 'fetchSelect',
    type: 'select',
    isNeedAll: true,
    dictConfig: {
      textKey: 'label',
      valueKey: 'value'
    },
    fetchConfig: {
      apiUrl: "/getSelectDict",
      dataPath: 'data',
      searchKey: 'ke',
      method: 'POST',
      params: {
        key: 'key'
      }
      // \u5982\u679C\u6709\u521D\u59CB\u5316\u51FD\u6570\u5219\u4E0D\u8BF7\u6C42
      // initDictFn:()=>[]
    },

    renderItem: function renderItem(item) {
      return "".concat(item.label, "-").concat(item.value);
    }
    // formFieldProps: {
    //   rules: FormRules.withName('select').object().isRequired().create()
    // }
  }, {
    name: 'startDate,endDate',
    label: 'startDate,endDate',
    // format \u4EC5\u5BF9dateRange\u7C7B\u578B\u751F\u6548
    type: 'dateRange',
    placeholder: '',
    picker: 'month',
    format: 'YYYY',
    // \u8BF7\u6C42\u7ED9\u540E\u7AEF\u7684\u683C\u5F0F
    controlProps: {
      // form\u5916\u89C2\u663E\u793A\u7684\u683C\u5F0F
      format: 'YYYY'
    }
  }, {
    name: 'startTime',
    label: 'date',
    type: 'date',
    placeholder: '\u8BF7\u9009\u62E9\u5F00\u59CB\u65F6\u95F4',
    initialValue: dayjs_min_default()('2020-01-01')
  }, {
    name: 'endTime',
    label: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("span", {
        style: {
          marginRight: 4
        },
        children: "month"
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(tooltip/* default */.Z, {
        title: "\\u63D0\\u793A",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(QuestionCircleOutlined/* default */.Z, {
          style: {
            marginLeft: 2,
            fontSize: 12,
            color: 'rgb(153,153,153)'
          }
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
          style: {
            color: 'black',
            marginLeft: 2
          },
          children: ":"
        })]
      })]
    }),
    itemProps: {
      colon: false,
      className: hookmodules.noColon
    },
    type: 'month',
    format: 'YYYYMM',
    initialValue: dayjs_min_default()()
  }
  // {
  //   name: 'editor',
  //   label: 'editor',
  //   type: 'editor',
  //   initialValue: '123',
  // }
  ];
};
// EXTERNAL MODULE: ./src/core/helpers/index.tsx
var helpers = __webpack_require__(91694);
;// CONCATENATED MODULE: ./src/pages/Component/hook/config/otherFormList.tsx




var otherFormList_apiPrefix = projectConfig/* default.apiPrefix */.Z.apiPrefix;
var otherFormList_layout = {
  labelCol: {
    span: 4
  },
  wrapperCol: {
    span: 20
  }
};
var otherFormList_ITEM_PROPS = {
  style: {
    marginBottom: 0
  }
};
var getOtherFormList = function getOtherFormList(self) {
  // return getFormList(self).map((item) => ({ ...item, layout }));
  return [{
    name: 'activityCode',
    label: '\u6D3B\u52A8\u7F16\u7801',
    type: 'input',
    allowClear: true,
    formFieldProps: {
      rules: validate/* default.withName */.Z.withName('\u6D3B\u52A8\u7F16\u7801').isRequired().create()
    },
    // dictConfig: { textKey: 'name', valueKey: 'code' },
    itemProps: objectSpread2_default()({}, otherFormList_ITEM_PROPS),
    layout: otherFormList_layout
  }, {
    name: 'activityName',
    label: '\u6D3B\u52A8\u540D\u79F0',
    type: 'input',
    formFieldProps: {
      rules: validate/* default.withName */.Z.withName('\u6D3B\u52A8\u540D\u79F0').isRequired().create()
    },
    allowClear: true,
    itemProps: objectSpread2_default()({}, otherFormList_ITEM_PROPS),
    condition: [{
      action: 'disabled',
      regex: {
        textarea: '\u7981\u7528'
      }
    }],
    layout: otherFormList_layout
  }, {
    name: 'textarea',
    label: 'textarea',
    type: 'textarea',
    disabled: false,
    // formFieldProps: {
    //   rules: FormRules.withName('\u6D3B\u52A8\u540D\u79F0').isRequired().create(),
    // },
    initialValue: '\u7981\u7528',
    formFieldProps: {
      rules: [{
        required: true,
        message: '\u8BF7\u8F93\u5165'
      }, {
        max: 100,
        message: '\u6700\u591A100\u4E2A\u5B57\u7B26'
      }]
    },
    controlProps: {
      maxLength: 100,
      showCount: true,
      autoSize: {
        minRows: 5
      },
      onChange: function onChange(e) {
        // console.log(e)
      }
    },
    itemProps: {
      style: {
        marginBottom: 0
      }
    },
    layout: otherFormList_layout
  }, {
    name: 'type',
    label: 'type',
    type: 'select',
    dict: [{
      text: '\u6EE1\u6298',
      value: '0'
    }, {
      text: '\u6EE1\u51CF',
      value: '1'
    }, {
      text: '\u7ACB\u51CF',
      value: '2'
    }],
    renderItem: function renderItem(item) {
      return "".concat(item.value, " - ").concat(item.text);
    },
    hide: function hide(config) {
      // console.log(config);
      return false;
    },
    layout: otherFormList_layout
  }, {
    name: 'custom',
    label: 'custom',
    type: 'custom',
    Component: function Component(props) {
      return '--';
    },
    layout: otherFormList_layout
  }, {
    name: 'week',
    label: 'week',
    type: 'date',
    format: 'YYYY-w',
    picker: 'week',
    controlProps: {},
    layout: otherFormList_layout
  }, {
    name: 'startMonth,endMonth',
    label: 'monthRange',
    type: 'monthRange',
    format: 'YYYYMM',
    initialValue: [dayjs_min_default()('2020-01'), dayjs_min_default()('2020-02')],
    layout: otherFormList_layout
  }, {
    name: 'EditCol',
    label: '\u5B9E\u65F6\u7F16\u8F91\u7684\u8868\u683C',
    type: 'editCol',
    layout: otherFormList_layout,
    initialValue: [{
      tableFormCode: '111',
      tableFormName: '111',
      tableFormTime: [dayjs_min_default()(), dayjs_min_default()()]
    }, {
      tableFormCode: '222',
      tableFormName: '222',
      tableFormTime: [dayjs_min_default()(), dayjs_min_default()()]
    }, {
      tableFormCode: '333',
      tableFormName: '333',
      tableFormTime: [dayjs_min_default()(), dayjs_min_default()()]
    }],
    tableProps: {
      columns: [{
        title: '\u6D3B\u52A8\u7F16\u7801',
        dataIndex: 'tableFormCode',
        // width: 200,
        editable: true,
        formItemProps: {
          name: 'tableFormCode',
          label: '\u6D3B\u52A8\u7F16\u7801',
          type: 'input',
          col: 12,
          allowClear: true,
          formFieldProps: {
            rules: validate/* default.withName */.Z.withName('\u6D3B\u52A8\u7F16\u7801').isRequired().create()
          },
          // dictConfig: { textKey: 'name', valueKey: 'code' },
          itemProps: objectSpread2_default()({}, otherFormList_ITEM_PROPS)
        }
      }, {
        title: '\u6D3B\u52A8\u540D\u79F0',
        dataIndex: 'tableFormName',
        // width: 200,
        editable: true,
        formItemProps: {
          name: 'tableFormName',
          label: '\u6D3B\u52A8\u540D\u79F0',
          type: 'input',
          col: 12,
          formFieldProps: {
            rules: validate/* default.withName */.Z.withName('\u6D3B\u52A8\u540D\u79F0').isRequired().create()
          },
          allowClear: true,
          itemProps: objectSpread2_default()({}, otherFormList_ITEM_PROPS),
          condition: [{
            action: 'disabled',
            regex: {
              textarea: '\u7981\u7528'
            }
          }]
        }
      }, {
        title: 'time',
        dataIndex: 'tableFormTime',
        width: 200,
        editable: true,
        formItemProps: {
          name: 'tableFormTime',
          label: 'time',
          type: 'dateRange',
          disabled: false,
          // formFieldProps: {
          //   rules: FormRules.withName('\u6D3B\u52A8\u540D\u79F0').isRequired().create(),
          // },
          controlProps: {},
          itemProps: {}
        }
      }]
    }
  }, {
    name: 'editRow',
    label: '\u53EF\u4FDD\u5B58\u7684table',
    type: 'editRow',
    layout: otherFormList_layout,
    initialValue: [{
      editCode: '1',
      editName: '1',
      editTime: [dayjs_min_default()(), dayjs_min_default()()]
    }],
    tableProps: {
      rowKey: 'editCode',
      columns: [{
        title: '\u6D3B\u52A8\u7F16\u7801',
        dataIndex: 'editCode',
        // width: 200,
        editable: true,
        formItemProps: {
          name: 'editCode',
          label: '\u6D3B\u52A8\u7F16\u7801',
          type: 'input',
          col: 12,
          allowClear: true,
          formFieldProps: {
            rules: validate/* default.withName */.Z.withName('\u6D3B\u52A8\u7F16\u7801').isRequired().create()
          },
          // dictConfig: { textKey: 'name', valueKey: 'code' },
          itemProps: objectSpread2_default()({}, otherFormList_ITEM_PROPS)
        }
      }, {
        title: '\u6D3B\u52A8\u540D\u79F0',
        dataIndex: 'editName',
        // width: 200,
        editable: true,
        formItemProps: {
          name: 'editName',
          label: '\u6D3B\u52A8\u540D\u79F0',
          type: 'input',
          col: 12,
          formFieldProps: {
            rules: validate/* default.withName */.Z.withName('\u6D3B\u52A8\u540D\u79F0').isRequired().create()
          },
          allowClear: true,
          itemProps: objectSpread2_default()({}, otherFormList_ITEM_PROPS),
          condition: [{
            action: 'disabled',
            regex: {
              textarea: '\u7981\u7528'
            }
          }]
        }
      }, {
        title: 'time',
        dataIndex: 'editTime',
        width: 200,
        editable: true,
        formItemProps: {
          name: 'editTime',
          label: 'time',
          type: 'dateRange',
          disabled: false,
          // formFieldProps: {
          //   rules: FormRules.withName('\u6D3B\u52A8\u540D\u79F0').isRequired().create(),
          // },
          controlProps: {},
          itemProps: {}
        }
      }]
    }
  }];
};
// EXTERNAL MODULE: ./src/core/Enhance/withRoutePage.tsx
var withRoutePage = __webpack_require__(28790);
// EXTERNAL MODULE: ./node_modules/redux/es/redux.js
var redux = __webpack_require__(14890);
// EXTERNAL MODULE: ./node_modules/react-router/index.js
var react_router = __webpack_require__(96974);
;// CONCATENATED MODULE: ./src/core/Enhance/withRouter.tsx




var withRouter = function withRouter(Component) {
  return function (props) {
    var location = (0,react_router/* useLocation */.TH)();
    var params = (0,react_router/* useParams */.UO)();
    var navigate = (0,react_router/* useNavigate */.s0)();
    return /*#__PURE__*/(0,jsx_runtime.jsx)(Component, objectSpread2_default()(objectSpread2_default()({}, props), {}, {
      location: location,
      params: params,
      navigate: navigate
    }));
  };
};
// EXTERNAL MODULE: ./src/components/CommonCard/index.tsx + 8 modules
var CommonCard = __webpack_require__(79216);
;// CONCATENATED MODULE: ./src/pages/Component/hook/index.tsx





var _excluded = ["name", "type", "initialValue", "formFieldProps", "controlProps"];
















var apiPrefixMock = projectConfig/* default.apiPrefixMock */.Z.apiPrefixMock;





var MyContext = /*#__PURE__*/react.createContext('light');
var IndexPage = function IndexPage(props, ref) {
  var IndexPageRef = props.IndexPageRef;
  var theme = (0,react.useContext)(MyContext);
  var _Form$useForm = es_form/* default.useForm */.Z.useForm(),
    _Form$useForm2 = slicedToArray_default()(_Form$useForm, 1),
    form = _Form$useForm2[0];
  var OtherFormRef = es_form/* default.useForm */.Z.useForm()[0];
  var self = hook_useBaseComponent({
    searchParams: {
      aaaaaa: 1
    },
    selectedRows: [],
    selectedRowKeys: [],
    expandedKey: 'index',
    expandedRowKeys: []
  });
  (0,react.useEffect)(function () {
    var _self$tableRef$curren;
    (_self$tableRef$curren = self.tableRef.current) === null || _self$tableRef$curren === void 0 ? void 0 : _self$tableRef$curren.handleRefreshPage();
  }, [self.searchParams]);
  (0,react.useImperativeHandle)(IndexPageRef, function () {
    return {
      form: form
    };
  });

  // \u624B\u52A8\u63A7\u5236\u5237\u65B0
  // useEffect(() => {
  //   setParams({
  //     ...params,
  //     xxx
  //   })
  // }, [xxx])

  var handleOpenRegList = function handleOpenRegList(record) {};
  var handleFormatValues = function handleFormatValues(values, record, type) {
    console.log(values, record, type);
    if (type === 'edit_echo') {
      return record;
    }
    return {
      values: values
    };
  };
  var renderFormItem = function renderFormItem(item, index) {
    var form = OtherFormRef;
    var name = item.name,
      type = item.type,
      initialValue = item.initialValue,
      formFieldProps = item.formFieldProps,
      controlProps = item.controlProps,
      otherProps = objectWithoutProperties_default()(item, _excluded);
    var myControlProps = objectSpread2_default()(objectSpread2_default()({}, controlProps), {}, {
      size: controlProps && controlProps.size || 'small'
    });
    var fieldProps = objectSpread2_default()({
      form: form,
      name: name,
      type: type,
      initialValue: initialValue,
      formFieldProps: formFieldProps,
      controlProps: myControlProps
    }, otherProps);
    return (0,helpers/* getFieldComp */.Q3)(fieldProps);
  };
  var tableParams = {
    columns: getColumns(self),
    searchParams: (0,util/* formatParams */.aP)(self.searchParams),
    rowKey: 'index',
    fetchMethod: 'get',
    extraParams: {
      my: '121213'
    },
    alternateColor: true,
    // defaultPageSize: 10,
    pagination: {
      pageSizeOptions: ['10', '20', '30', '40', '50']
    },
    dataHandler: function dataHandler(dataSource, data) {
      return dataSource;
    },
    button: [{
      text: '\u65B0\u589E',
      onClick: self.handleAdd
    }, {
      text: '\u83B7\u53D6\u62D6\u62FD\u540E\u53CA\u9009\u62E9\u7684\u6570\u636E',
      // element: <Button type="link" danger >ss</Button>,
      onClick: function onClick() {
        console.log(self.getDataSource());
        console.log(self.selectedRowKeys, self.selectedRows);
        console.log(self.expandedRowKeys);
      }
    }, {
      text: '\u5BFC\u51FA',
      onClick: function onClick() {
        return self.handleExport('\u589E\u5220\u6539\u67E5\u7EC4\u4EF6');
      }
    }],
    itemButton: [{
      text: '\u7F16\u8F91',
      onClick: self.handleEdit,
      code: 'class-editButton'
    }, {
      text: '\u5220\u9664',
      buttonType: 'delete',
      // code \u6743\u9650\u6821\u9A8C\u5982\u679C\u540E\u7AEF\u63A5\u53E3\u6CA1\u6709\u8FD4\u56DE \u5219\u4E0D\u663E\u793A
      code: 'class-deleteButton',
      // code: '\u9519\u8BEF\u7684code',
      onClick: function onClick() {
        self.handleDelete({
          id: 1,
          idDel: 1
        }, '/deleteActivityList');
      }
    }],
    footer: function footer(a) {
      // console.log(a)
      return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        children: "3"
      });
    },
    itemButtonWidth: 200,
    urls: {
      listUrl: "/getActivityList"
    },
    selectType: 'checkbox',
    selectedRowKeys: self.selectedRowKeys,
    selectedRows: self.selectedRows,
    expandable: {
      expandedRowKeys: self.expandedRowKeys,
      expandedRowRender: function expandedRowRender(record) {
        return /*#__PURE__*/(0,jsx_runtime.jsx)("p", {
          style: {
            margin: 0
          },
          children: record.index
        });
      },
      rowExpandable: function rowExpandable(record) {
        return record.name !== 'Not Expandable';
      },
      onExpand: self.handleExpand
    },
    onSelect: self.handleSelect,
    dataPath: 'data.list',
    totalPath: 'data.total',
    draggable: true,
    resizable: true,
    isSummary: false,
    // \u865A\u62DF\u5217\u8868\u914D\u7F6E
    isVirtual: false,
    scroll: {
      y: 800
    },
    fixRowkeys: [1, 2, 3],
    rowEventHandlers: {
      onClick: function onClick(record, index, event) {}
    }
  };
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(CommonCard/* Page */.T3, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(components/* CommonSearch */.ji, {
      formList: getSearches(self),
      handleSearch: self.setSearchParams,
      ref: self.searchRef,
      columnNumber: 3
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(components/* CommonTable */.FN, objectSpread2_default()(objectSpread2_default()({}, tableParams), {}, {
      ref: self.tableRef
    })), /*#__PURE__*/(0,jsx_runtime.jsx)(components/* CustomForm */.yV, {
      title: "\\u8425\\u9500\\u6D3B\\u52A8"
      // isShowTitlePrefix={false}
      // isTable={true}
      ,
      className: hookmodules.customForm,
      modalType: typings/* ModalType.modal */.w.modal,
      modalConf: {
        width: 1000,
        forceRender: true
      },
      defaultLayout: {
        labelCol: {
          span: 5
        },
        wrapperCol: {
          span: 19
        }
      },
      ref: self.formRef,
      formList: getFormList(self),
      formatValues: handleFormatValues,
      onSubmit: {
        action: service/* saveActivity */.d,
        callback: self.handleRefreshPage,
        failCallback: function failCallback() {
          return console.log('faill');
        },
        completeCallback: function completeCallback() {
          return console.log('complete');
        }
      },
      onCancel: function onCancel() {
        return console.log('cancel');
      },
      otherClick: function otherClick() {
        console.log('click');
      },
      handleSubmitPreCallBack: /*#__PURE__*/asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee() {
        var _self$formRef$current;
        return regeneratorRuntime_default()().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              console.table((_self$formRef$current = self.formRef.current) === null || _self$formRef$current === void 0 ? void 0 : _self$formRef$current.form.getFieldsValue());
              console.table(OtherFormRef === null || OtherFormRef === void 0 ? void 0 : OtherFormRef.getFieldsValue());
              // return Promise.reject \u5C31\u963B\u6B62\u63D0\u4EA4 \u7528\u4E8E\u989D\u5916\u7684\u8868\u5355
              // return Promise.resolve({})
              _context.next = 4;
              return OtherFormRef === null || OtherFormRef === void 0 ? void 0 : OtherFormRef.validateFields();
            case 4:
              return _context.abrupt("return", Promise.resolve({}));
            case 5:
            case "end":
              return _context.stop();
          }
        }, _callee);
      })),
      handleFieldsChange: function handleFieldsChange(changedFields, allFields, form) {
        // console.log(changedFields, allFields, form);
      },
      otherRender: function otherRender() {
        return /*#__PURE__*/(0,jsx_runtime.jsxs)(es_form/* default */.Z, {
          form: OtherFormRef,
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default.Item */.Z.Item, {
            label: "\\u4EE5\\u4E0B\\u90FD\\u662F\\u4F7F\\u7528getFieldComp\\u65B9\\u6CD5\\u6784\\u9020\\u7684form"
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default.Item */.Z.Item, {
            label: "otherFormItem",
            name: "otherFormItem",
            rules: [{
              required: true,
              message: '\u8BF7\u8F93\u5165otherFormItem'
            }],
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(input/* default */.Z, {})
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(row/* default */.Z, {
            children: (getOtherFormList(self) || []).map(function (item, index) {
              return /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
                span: item['span'] || 24,
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default.Item */.Z.Item, objectSpread2_default()(objectSpread2_default()(objectSpread2_default()({
                  labelAlign: "right",
                  label: item.label,
                  name: item.name,
                  rules: (item === null || item === void 0 ? void 0 : item.rules) || [],
                  initialValue: item.initialValue
                }, item.layout), item.itemProps), {}, {
                  children: renderFormItem(item)
                }))
              }, item.name);
            })
          })]
        });
      }
    })]
  });
};

// IndexPage => forwardRef => connect => withRouter => withRoutePage
var NewIndexPage = (0,redux/* compose */.qC)(withRoutePage/* withRoutePage */.A, withRouter, (0,_umi_production_exports.connect)(function (_ref2) {
  var global = _ref2.global,
    login = _ref2.login;
  return {
    token: login.token
  };
}, null, null, {
  forwardRef: true,
  pure: undefined
}), react.forwardRef)(IndexPage);
var Content = function Content() {
  var ref = (0,react.useRef)(null);
  (0,react.useEffect)(function () {
    var _ref$current;
    return console.log((_ref$current = ref.current) === null || _ref$current === void 0 ? void 0 : _ref$current.form);
  }, []);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(NewIndexPage, {
    IndexPageRef: ref
  });
};
/* harmony default export */ var hook = (Content);

//# sourceURL=webpack:///./src/pages/Component/hook/index.tsx_+_7_modules?`)},58955:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval(`/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": function() { return /* binding */ saveActivity; }
/* harmony export */ });
/* harmony import */ var _Users_eternallycyf_Documents_GitHub_case_Antd_CustomComponent_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(97857);
/* harmony import */ var _Users_eternallycyf_Documents_GitHub_case_Antd_CustomComponent_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_eternallycyf_Documents_GitHub_case_Antd_CustomComponent_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _umijs_max__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41997);


function saveActivity(data, isEdit) {
  return (0,_umijs_max__WEBPACK_IMPORTED_MODULE_1__.request)('/updateActivityList', {
    method: 'POST',
    data: _Users_eternallycyf_Documents_GitHub_case_Antd_CustomComponent_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0___default()(_Users_eternallycyf_Documents_GitHub_case_Antd_CustomComponent_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0___default()({}, data), {}, {
      isEdit: isEdit
    })
  });
}

//# sourceURL=webpack:///./src/pages/Component/service.ts?`)},40297:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval(`/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ FormRules; }
/* harmony export */ });
/* unused harmony export FormRuleType */
/* harmony import */ var _Users_eternallycyf_Documents_GitHub_case_Antd_CustomComponent_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(97857);
/* harmony import */ var _Users_eternallycyf_Documents_GitHub_case_Antd_CustomComponent_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_eternallycyf_Documents_GitHub_case_Antd_CustomComponent_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_eternallycyf_Documents_GitHub_case_Antd_CustomComponent_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12444);
/* harmony import */ var _Users_eternallycyf_Documents_GitHub_case_Antd_CustomComponent_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_eternallycyf_Documents_GitHub_case_Antd_CustomComponent_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_eternallycyf_Documents_GitHub_case_Antd_CustomComponent_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(72004);
/* harmony import */ var _Users_eternallycyf_Documents_GitHub_case_Antd_CustomComponent_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_eternallycyf_Documents_GitHub_case_Antd_CustomComponent_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Users_eternallycyf_Documents_GitHub_case_Antd_CustomComponent_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9783);
/* harmony import */ var _Users_eternallycyf_Documents_GitHub_case_Antd_CustomComponent_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Users_eternallycyf_Documents_GitHub_case_Antd_CustomComponent_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__);




var FormRuleType;
(function (FormRuleType) {
  FormRuleType["string"] = "string";
  FormRuleType["number"] = "number";
  FormRuleType["boolean"] = "boolean";
  FormRuleType["method"] = "method";
  FormRuleType["regexp"] = "regexp";
  FormRuleType["integer"] = "integer";
  FormRuleType["float"] = "float";
  FormRuleType["object"] = "object";
  FormRuleType["enum"] = "enum";
  FormRuleType["date"] = "date";
  FormRuleType["url"] = "url";
  FormRuleType["hex"] = "hex";
  FormRuleType["email"] = "email";
})(FormRuleType || (FormRuleType = {}));
var FormRules = /*#__PURE__*/function () {
  function FormRules(name) {
    _Users_eternallycyf_Documents_GitHub_case_Antd_CustomComponent_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1___default()(this, FormRules);
    _Users_eternallycyf_Documents_GitHub_case_Antd_CustomComponent_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(this, "name", void 0);
    _Users_eternallycyf_Documents_GitHub_case_Antd_CustomComponent_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(this, "rules", []);
    this.name = name;
  }
  _Users_eternallycyf_Documents_GitHub_case_Antd_CustomComponent_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_2___default()(FormRules, [{
    key: "isRequired",
    value: function isRequired() {
      var onlyWhiteSpaceIsError = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var lastRule = this.rules[this.rules.length - 1];
      if (!lastRule) {
        this.string();
        lastRule = this.rules[this.rules.length - 1];
      }
      lastRule.required = true;
      lastRule.whitespace = onlyWhiteSpaceIsError;
      return this;
    }
  }, {
    key: "append",
    value: function append(obj) {
      var cloneObj = _Users_eternallycyf_Documents_GitHub_case_Antd_CustomComponent_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0___default()({}, obj);
      if (typeof cloneObj.message === 'string') {
        cloneObj.message = cloneObj.message.replace(':name', this.name);
      }
      this.rules.push(cloneObj);
      return this;
    }
  }, {
    key: "string",
    value: function string(min, max) {
      var newMessage = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
      var message = newMessage;
      message = message || FormRules.formatMessageByLimit(min, max, '\u5B57\u7B26\u4E32', '\u957F\u5EA6');
      this.rules.push({
        type: FormRuleType.string,
        min: min,
        max: max,
        message: message.replace(':name', this.name)
      });
      return this;
    }
  }, {
    key: "bool",
    value: function bool() {
      var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ':name\u5FC5\u987B\u662F\u5E03\u5C14\u503C';
      this.rules.push({
        type: FormRuleType["boolean"],
        message: message.replace(':name', this.name)
      });
      return this;
    }
  }, {
    key: "phone",
    value: function phone() {
      var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '\u8BF7\u8F93\u5165\u6B63\u786E\u7684:name';
      this.rules.push({
        type: FormRuleType.string,
        pattern: /^1[3-9] \\d{9}$/,
        message: message.replace(':name', this.name)
      });
      return this;
    }
  }, {
    key: "number",
    value: function number(min, max) {
      var newMessage = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
      var message = newMessage;
      message = message || FormRules.formatMessageByLimit(min, max, '\u6570\u5B57', '\u503C');
      this.rules.push({
        type: FormRuleType.number,
        transform: FormRules.transformNumber,
        min: min,
        max: max,
        message: message.replace(':name', this.name)
      });
      return this;
    }
  }, {
    key: "integer",
    value: function integer(min, max) {
      var newMessage = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
      var message = newMessage;
      message = message || FormRules.formatMessageByLimit(min, max, '\u6574\u6570', '\u503C');
      this.rules.push({
        type: FormRuleType.integer,
        transform: FormRules.transformNumber,
        min: min,
        max: max,
        message: message.replace(':name', this.name)
      });
      return this;
    }
  }, {
    key: "email",
    value: function email() {
      var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '\u8BF7\u8F93\u5165\u6B63\u786E\u7684:name';
      this.rules.push({
        type: FormRuleType.email,
        message: message.replace(':name', this.name)
      });
      return this;
    }
  }, {
    key: "match",
    value: function match(pattern) {
      var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ':name\u4E0D\u7B26\u5408\u89C4\u8303';
      this.rules.push({
        type: FormRuleType.string,
        pattern: pattern,
        message: message.replace(':name', this.name)
      });
      return this;
    }
  }, {
    key: "url",
    value: function url() {
      var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '\u6B63\u8F93\u5165\u6B63\u786E\u7684: name';
      this.rules.push({
        type: FormRuleType.url,
        message: message.replace(':name', this.name)
      });
      return this;
    }
  }, {
    key: "callback",
    value: function callback(func) {
      this.rules.push({
        validator: function validator(rule, value, callback) {
          var errors = func(value, rule.field);
          if (Array.isArray(errors)) {
            callback(errors);
          } else if (errors === undefined || errors === null) {
            callback([]);
          } else {
            callback([errors]);
          }
        }
      });
      return this;
    }
  }, {
    key: "identityCard",
    value: function identityCard() {
      var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '\u8BF7\u8F93\u5165E\u786E\u7684: name';
      return this.match(/^(Id[18]|d[17][xx])$/, message);
    }
  }, {
    key: "withoutWhiteSpace",
    value: function withoutWhiteSpace() {
      var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ':name\u7981\u6B62\u5305\u542B\u7A7A\u683C';
      return this.match(/A[As]+$/, message);
    }
  }, {
    key: "object",
    value: function object() {
      var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ':name\u5FC5\u987B\u662F\u5BF9\u8C61\u7C7B\u578B';
      this.rules.push({
        type: FormRuleType.object,
        message: message.replace(': name', this.name)
      });
      return this;
    }
  }, {
    key: "resetRule",
    value: function resetRule() {
      this.rules = [];
      return this;
    }
  }, {
    key: "create",
    value: function create() {
      return this.rules;
    }
  }], [{
    key: "withName",
    value: function withName(fieldLocalName) {
      return new FormRules(fieldLocalName);
    }

    // \u9A8C\u8BC1\u65F6\u8F6C\u6362\u6570\u5B57\u7C7B\u578B\uFF08\u4F46\u662F\u5E76\u4E0D\u5F71\u54CD\u6700\u7EC8\u503C\uFF09
  }, {
    key: "transformNumber",
    value: function transformNumber(value) {
      if (typeof value === 'number') {
        return value;
      }
      return typeof value === 'string' && value.length ? Number(value) : void 0;
    }
  }, {
    key: "formatMessageByLimit",
    value: function formatMessageByLimit(min, max) {
      var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
      var unit = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
      var existMin = typeof min === 'number';
      var existMax = typeof max === 'number';
      var message;
      if (existMax && existMin) {
        message = ":name\\u5FC5\\u987B\\u662F".concat(type, "\\u4E14").concat(unit, " \\u5728:min\\u5230:max\\u4E4B\\u95F4");
      } else if (existMax) {
        message = ":name\\u5FC5\\u987B\\u662F".concat(type, ",\\u4E14").concat(unit, " \\u5C0F\\u4E8E\\u7B49\\u4E8E:max");
      } else if (existMin) {
        message = ":name\\u662F\\u5FC5\\u987B\\u662F".concat(type, "\\uFF0C\\u4E14").concat(unit, " \\u5927\\u4E8E\\u7B49\\u4E8E:min");
      } else {
        message = ":name\\u5FC5\\u987B\\u662F".concat(type);
      }
      if (existMin) {
        message = message.replace(':min', String(min));
      }
      if (existMax) {
        message = message.replace(':max', String(max));
      }
      return message;
    }
  }]);
  return FormRules;
}();


//# sourceURL=webpack:///./src/utils/validate.tsx?`)},51904:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval(`
// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ tag; }
});

// EXTERNAL MODULE: ./node_modules/antd/node_modules/@ant-design/icons/es/icons/CloseOutlined.js
var CloseOutlined = __webpack_require__(62208);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(94184);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/antd/es/_util/colors.js
var colors = __webpack_require__(98787);
// EXTERNAL MODULE: ./node_modules/antd/es/_util/wave/index.js + 4 modules
var wave = __webpack_require__(45353);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/context.js
var context = __webpack_require__(53124);
;// CONCATENATED MODULE: ./node_modules/antd/es/_util/capitalize.js
function capitalize(str) {
  if (typeof str !== 'string') {
    return str;
  }
  const ret = str.charAt(0).toUpperCase() + str.slice(1);
  return ret;
}
// EXTERNAL MODULE: ./node_modules/antd/es/style/index.js
var style = __webpack_require__(14747);
// EXTERNAL MODULE: ./node_modules/antd/es/theme/util/genPresetColor.js
var genPresetColor = __webpack_require__(98719);
// EXTERNAL MODULE: ./node_modules/antd/es/theme/util/genComponentStyleHook.js
var genComponentStyleHook = __webpack_require__(67968);
// EXTERNAL MODULE: ./node_modules/antd/es/theme/util/statistic.js
var statistic = __webpack_require__(45503);
;// CONCATENATED MODULE: ./node_modules/antd/es/tag/style/index.js



const genTagStatusStyle = (token, status, cssVariableType) => {
  const capitalizedCssVariableType = capitalize(cssVariableType);
  return {
    [\`\${token.componentCls}-\${status}\`]: {
      color: token[\`color\${cssVariableType}\`],
      background: token[\`color\${capitalizedCssVariableType}Bg\`],
      borderColor: token[\`color\${capitalizedCssVariableType}Border\`],
      [\`&\${token.componentCls}-borderless\`]: {
        borderColor: 'transparent'
      }
    }
  };
};
const genPresetStyle = token => (0,genPresetColor/* default */.Z)(token, (colorKey, _ref) => {
  let {
    textColor,
    lightBorderColor,
    lightColor,
    darkColor
  } = _ref;
  return {
    [\`\${token.componentCls}-\${colorKey}\`]: {
      color: textColor,
      background: lightColor,
      borderColor: lightBorderColor,
      // Inverse color
      '&-inverse': {
        color: token.colorTextLightSolid,
        background: darkColor,
        borderColor: darkColor
      },
      [\`&\${token.componentCls}-borderless\`]: {
        borderColor: 'transparent'
      }
    }
  };
});
const genBaseStyle = token => {
  const {
    paddingXXS,
    lineWidth,
    tagPaddingHorizontal,
    componentCls
  } = token;
  const paddingInline = tagPaddingHorizontal - lineWidth;
  const iconMarginInline = paddingXXS - lineWidth;
  return {
    // Result
    [componentCls]: Object.assign(Object.assign({}, (0,style/* resetComponent */.Wf)(token)), {
      display: 'inline-block',
      height: 'auto',
      marginInlineEnd: token.marginXS,
      paddingInline,
      fontSize: token.tagFontSize,
      lineHeight: \`\${token.tagLineHeight}px\`,
      whiteSpace: 'nowrap',
      background: token.tagDefaultBg,
      border: \`\${token.lineWidth}px \${token.lineType} \${token.colorBorder}\`,
      borderRadius: token.borderRadiusSM,
      opacity: 1,
      transition: \`all \${token.motionDurationMid}\`,
      textAlign: 'start',
      // RTL
      [\`&\${componentCls}-rtl\`]: {
        direction: 'rtl'
      },
      '&, a, a:hover': {
        color: token.tagDefaultColor
      },
      [\`\${componentCls}-close-icon\`]: {
        marginInlineStart: iconMarginInline,
        color: token.colorTextDescription,
        fontSize: token.tagIconSize,
        cursor: 'pointer',
        transition: \`all \${token.motionDurationMid}\`,
        '&:hover': {
          color: token.colorTextHeading
        }
      },
      [\`&\${componentCls}-has-color\`]: {
        borderColor: 'transparent',
        [\`&, a, a:hover, \${token.iconCls}-close, \${token.iconCls}-close:hover\`]: {
          color: token.colorTextLightSolid
        }
      },
      [\`&-checkable\`]: {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        cursor: 'pointer',
        [\`&:not(\${componentCls}-checkable-checked):hover\`]: {
          color: token.colorPrimary,
          backgroundColor: token.colorFillSecondary
        },
        '&:active, &-checked': {
          color: token.colorTextLightSolid
        },
        '&-checked': {
          backgroundColor: token.colorPrimary,
          '&:hover': {
            backgroundColor: token.colorPrimaryHover
          }
        },
        '&:active': {
          backgroundColor: token.colorPrimaryActive
        }
      },
      [\`&-hidden\`]: {
        display: 'none'
      },
      // To ensure that a space will be placed between character and \`Icon\`.
      [\`> \${token.iconCls} + span, > span + \${token.iconCls}\`]: {
        marginInlineStart: paddingInline
      }
    }),
    [\`\${componentCls}-borderless\`]: {
      borderColor: 'transparent',
      background: token.tagBorderlessBg
    }
  };
};
// ============================== Export ==============================
/* harmony default export */ var tag_style = ((0,genComponentStyleHook/* default */.Z)('Tag', token => {
  const {
    fontSize,
    lineHeight,
    lineWidth,
    fontSizeIcon
  } = token;
  const tagHeight = Math.round(fontSize * lineHeight);
  const tagFontSize = token.fontSizeSM;
  const tagLineHeight = tagHeight - lineWidth * 2;
  const tagDefaultBg = token.colorFillQuaternary;
  const tagDefaultColor = token.colorText;
  const tagToken = (0,statistic/* merge */.TS)(token, {
    tagFontSize,
    tagLineHeight,
    tagDefaultBg,
    tagDefaultColor,
    tagIconSize: fontSizeIcon - 2 * lineWidth,
    tagPaddingHorizontal: 8,
    tagBorderlessBg: token.colorFillTertiary
  });
  return [genBaseStyle(tagToken), genPresetStyle(tagToken), genTagStatusStyle(tagToken, 'success', 'Success'), genTagStatusStyle(tagToken, 'processing', 'Info'), genTagStatusStyle(tagToken, 'error', 'Error'), genTagStatusStyle(tagToken, 'warning', 'Warning')];
}));
;// CONCATENATED MODULE: ./node_modules/antd/es/tag/CheckableTag.js
var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};




const CheckableTag = props => {
  const {
      prefixCls: customizePrefixCls,
      className,
      checked,
      onChange,
      onClick
    } = props,
    restProps = __rest(props, ["prefixCls", "className", "checked", "onChange", "onClick"]);
  const {
    getPrefixCls
  } = react.useContext(context/* ConfigContext */.E_);
  const handleClick = e => {
    onChange === null || onChange === void 0 ? void 0 : onChange(!checked);
    onClick === null || onClick === void 0 ? void 0 : onClick(e);
  };
  const prefixCls = getPrefixCls('tag', customizePrefixCls);
  // Style
  const [wrapSSR, hashId] = tag_style(prefixCls);
  const cls = classnames_default()(prefixCls, {
    [\`\${prefixCls}-checkable\`]: true,
    [\`\${prefixCls}-checkable-checked\`]: checked
  }, className, hashId);
  return wrapSSR( /*#__PURE__*/react.createElement("span", Object.assign({}, restProps, {
    className: cls,
    onClick: handleClick
  })));
};
/* harmony default export */ var tag_CheckableTag = (CheckableTag);
;// CONCATENATED MODULE: ./node_modules/antd/es/tag/index.js
var tag_rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};









const InternalTag = (tagProps, ref) => {
  const {
      prefixCls: customizePrefixCls,
      className,
      rootClassName,
      style,
      children,
      icon,
      color,
      onClose,
      closeIcon,
      closable = false,
      bordered = true
    } = tagProps,
    props = tag_rest(tagProps, ["prefixCls", "className", "rootClassName", "style", "children", "icon", "color", "onClose", "closeIcon", "closable", "bordered"]);
  const {
    getPrefixCls,
    direction
  } = react.useContext(context/* ConfigContext */.E_);
  const [visible, setVisible] = react.useState(true);
  // Warning for deprecated usage
  if (false) {}
  react.useEffect(() => {
    if ('visible' in props) {
      setVisible(props.visible);
    }
  }, [props.visible]);
  const isInternalColor = (0,colors/* isPresetColor */.o2)(color) || (0,colors/* isPresetStatusColor */.yT)(color);
  const tagStyle = Object.assign({
    backgroundColor: color && !isInternalColor ? color : undefined
  }, style);
  const prefixCls = getPrefixCls('tag', customizePrefixCls);
  // Style
  const [wrapSSR, hashId] = tag_style(prefixCls);
  const tagClassName = classnames_default()(prefixCls, {
    [\`\${prefixCls}-\${color}\`]: isInternalColor,
    [\`\${prefixCls}-has-color\`]: color && !isInternalColor,
    [\`\${prefixCls}-hidden\`]: !visible,
    [\`\${prefixCls}-rtl\`]: direction === 'rtl',
    [\`\${prefixCls}-borderless\`]: !bordered
  }, className, rootClassName, hashId);
  const handleCloseClick = e => {
    e.stopPropagation();
    onClose === null || onClose === void 0 ? void 0 : onClose(e);
    if (e.defaultPrevented) {
      return;
    }
    setVisible(false);
  };
  const closeIconNode = react.useMemo(() => {
    if (closable) {
      return closeIcon ? /*#__PURE__*/react.createElement("span", {
        className: \`\${prefixCls}-close-icon\`,
        onClick: handleCloseClick
      }, closeIcon) : /*#__PURE__*/react.createElement(CloseOutlined/* default */.Z, {
        className: \`\${prefixCls}-close-icon\`,
        onClick: handleCloseClick
      });
    }
    return null;
  }, [closable, closeIcon, prefixCls, handleCloseClick]);
  const isNeedWave = typeof props.onClick === 'function' || children && children.type === 'a';
  const iconNode = icon || null;
  const kids = iconNode ? /*#__PURE__*/react.createElement(react.Fragment, null, iconNode, /*#__PURE__*/react.createElement("span", null, children)) : children;
  const tagNode = /*#__PURE__*/react.createElement("span", Object.assign({}, props, {
    ref: ref,
    className: tagClassName,
    style: tagStyle
  }), kids, closeIconNode);
  return wrapSSR(isNeedWave ? /*#__PURE__*/react.createElement(wave/* default */.Z, null, tagNode) : tagNode);
};
const Tag = /*#__PURE__*/react.forwardRef(InternalTag);
if (false) {}
Tag.CheckableTag = tag_CheckableTag;
/* harmony default export */ var tag = (Tag);

//# sourceURL=webpack:///./node_modules/antd/es/tag/index.js_+_3_modules?`)}}]);
