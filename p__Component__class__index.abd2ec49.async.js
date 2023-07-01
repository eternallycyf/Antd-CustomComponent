"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[956],{41857:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval(`// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ Component_class; }
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
// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(12444);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);
// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(72004);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);
// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(25098);
var assertThisInitialized_default = /*#__PURE__*/__webpack_require__.n(assertThisInitialized);
// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__(31996);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);
// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createSuper.js
var createSuper = __webpack_require__(26037);
var createSuper_default = /*#__PURE__*/__webpack_require__.n(createSuper);
// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(9783);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);
// EXTERNAL MODULE: ./src/components/index.tsx + 50 modules
var components = __webpack_require__(41599);
// EXTERNAL MODULE: ./src/components/BaseComponent/index.tsx
var BaseComponent = __webpack_require__(96413);
// EXTERNAL MODULE: ./src/config/projectConfig.tsx
var projectConfig = __webpack_require__(69365);
// EXTERNAL MODULE: ./src/typings/index.ts
var typings = __webpack_require__(63718);
// EXTERNAL MODULE: ./src/utils/util.tsx
var util = __webpack_require__(10618);
// EXTERNAL MODULE: ./node_modules/antd/es/form/index.js + 20 modules
var es_form = __webpack_require__(12029);
// EXTERNAL MODULE: ./node_modules/antd/es/select/index.js + 29 modules
var es_select = __webpack_require__(40038);
// EXTERNAL MODULE: ./node_modules/antd/es/space/index.js + 1 modules
var space = __webpack_require__(26713);
// EXTERNAL MODULE: ./node_modules/antd/es/spin/index.js + 2 modules
var spin = __webpack_require__(46572);
// EXTERNAL MODULE: ./node_modules/antd/es/input/index.js + 5 modules
var input = __webpack_require__(75008);
// EXTERNAL MODULE: ./node_modules/antd/es/row/index.js
var row = __webpack_require__(71230);
// EXTERNAL MODULE: ./node_modules/antd/es/col/index.js
var col = __webpack_require__(15746);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
;// CONCATENATED MODULE: ./src/pages/Component/class/config/constant.tsx
var ACTIVE_TYPE = [{
  text: '\u6EE1\u6298',
  value: '0'
}, {
  text: '\u6EE1\u51CF',
  value: '1'
}, {
  text: '\u7ACB\u51CF',
  value: '2'
}];
var DEFAULT_ACTIVE_TYPE = ACTIVE_TYPE[0]['value'];
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
var DEFAULT_STATUS = STATUS_DICT[0]['value'];
;// CONCATENATED MODULE: ./src/pages/Component/class/config/columns.tsx

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
    initChecked: false
    // ellipsis: true,
  }, {
    dataIndex: 'activityPrice',
    title: 'activityPrice',
    width: 112,
    sorter: true,
    formatNumber: function formatNumber(value) {
      return value * 100;
    },
    align: 'center',
    fixed: 'left'
    // ellipsis: true,
  }, {
    dataIndex: 'activityType',
    title: '\u6D3B\u52A8\u7C7B\u578B',
    width: 112,
    dict: ACTIVE_TYPE,
    // render: (text: string) => ACTIVE_TYPE[text] || '--',
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
;// CONCATENATED MODULE: ./src/pages/Component/class/config/form.tsx









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
    allowClear: true,
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
;// CONCATENATED MODULE: ./src/pages/Component/class/index.less?modules
// extracted by mini-css-extract-plugin
/* harmony default export */ var classmodules = ({"noColon":"noColon___tQi2C"});
;// CONCATENATED MODULE: ./src/pages/Component/class/config/search.tsx










var getSearches = function getSearches(self) {
  return [{
    name: 'activityNameSearch',
    label: 'search',
    type: 'search'
  }, {
    name: 'xxxxxStatus',
    label: '\u72B6\u6001',
    type: 'radio',
    dict: STATUS_DICT,
    initialValue: STATUS_DICT[0].value,
    controlProps: {
      buttonStyle: 'solid',
      onChange: function onChange(value) {
        var _self$searchRef$curre3;
        var _self$searchRef$curre = (_self$searchRef$curre3 = self.searchRef.current) === null || _self$searchRef$curre3 === void 0 ? void 0 : _self$searchRef$curre3.handleRealParams(),
          _self$searchRef$curre2 = slicedToArray_default()(_self$searchRef$curre, 2),
          _ = _self$searchRef$curre2[0],
          values = _self$searchRef$curre2[1];
        self.setState({
          radioValue: value.target.value
        });
        self.handleSearch(objectSpread2_default()(objectSpread2_default()({}, values), {}, {
          xxxxxStatus: value.target.value
        }));
      }
    }
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
    initialValue: STATUS_DICT,
    allowClear: true,
    controlProps: {
      mode: 'multiple',
      labelInValue: true
    }
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
  },
  // {
  //   name: 'startDate,endDate',
  //   label: 'date',
  //   // format \u4EC5\u5BF9dateRange\u7C7B\u578B\u751F\u6548
  //   type: 'dateRange',
  //   placeholder: '',
  //   picker: 'month',
  //   format: 'YYYY', // \u8BF7\u6C42\u7ED9\u540E\u7AEF\u7684\u683C\u5F0F
  //   controlProps: {
  //     // form\u5916\u89C2\u663E\u793A\u7684\u683C\u5F0F
  //     format: 'YYYY',
  //   },
  // },
  {
    name: 'startDate',
    label: '\u5F00\u59CB\u65E5\u671F',
    type: 'date',
    allowClear: true,
    format: 'YYYYMMDD',
    controlProps: {
      format: 'YYYY-MM-DD',
      disabledDate: function disabledDate(date) {
        return self.getDisabledDate('startDate', date);
      },
      onChange: function onChange() {
        if (self.searchRef) {
          var _self$searchRef$curre4, _self$searchRef$curre5;
          (_self$searchRef$curre4 = self.searchRef.current) === null || _self$searchRef$curre4 === void 0 ? void 0 : (_self$searchRef$curre5 = _self$searchRef$curre4.searchFormRef.current) === null || _self$searchRef$curre5 === void 0 ? void 0 : _self$searchRef$curre5.form.setFieldsValue({
            endDate: undefined
          });
        }
      }
    }
  }, {
    name: 'endDate',
    label: '\u7ED3\u675F\u65E5\u671F',
    type: 'date',
    allowClear: true,
    format: 'YYYYMMDD',
    controlProps: {
      format: 'YYYY-MM-DD',
      disabledDate: function disabledDate(date) {
        return self.getDisabledDate('endDate', date);
      }
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
      className: classmodules.noColon
    },
    type: 'month',
    format: 'YYYYMM',
    initialValue: dayjs_min_default()()
  }, {
    name: 'month',
    label: '\u8D77\u6B62\u6708\u4EFD',
    type: 'input',
    // itemProps: {
    //   labelCol: { span: 4 },
    //   wrapperCol: { span: 20 },
    // },
    children: [{
      name: 'beginMonth',
      type: 'month',
      format: 'YYYYMM',
      placeholder: '\u5F00\u59CB\u6708\u4EFD',
      formFieldProps: {
        style: {
          width: '40%',
          display: 'inline-block'
        }
      }
    }, {
      name: 'aa',
      type: 'input',
      initialValue: '\u81F3',
      controlProps: {
        bordered: false,
        allowClear: false,
        readOnly: true
      },
      formFieldProps: {
        style: {
          width: '20%',
          padding: '0 2.5%',
          display: 'inline-block'
        }
      }
    }, {
      name: 'endMonth',
      type: 'month',
      format: 'YYYYMM',
      placeholder: '\u7ED3\u675F\u6708\u4EFD',
      formFieldProps: {
        style: {
          width: '40%',
          display: 'inline-block'
        }
      }
    }]
  }
  // {
  //   name: 'editor',
  //   label: 'editor',
  //   type: 'editor',
  //   initialValue: '123',
  // }
  ];
};
;// CONCATENATED MODULE: ./src/pages/Component/class/config/otherFormList.tsx





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
    name: '\u52A8\u6001',
    label: '\u52A8\u6001',
    type: 'input',
    itemProps: objectSpread2_default()({}, otherFormList_ITEM_PROPS),
    controlProps: {
      onChange: function onChange(e) {
        if (e.target.value == 1) {
          var _self$OtherFormRef$cu;
          (_self$OtherFormRef$cu = self.OtherFormRef.current) === null || _self$OtherFormRef$cu === void 0 ? void 0 : _self$OtherFormRef$cu.setFieldsValue({
            flag: 1
          });
        } else {
          var _self$OtherFormRef$cu2;
          (_self$OtherFormRef$cu2 = self.OtherFormRef.current) === null || _self$OtherFormRef$cu2 === void 0 ? void 0 : _self$OtherFormRef$cu2.setFieldsValue({
            flag: 0
          });
        }
      }
    },
    layout: otherFormList_layout
  }, {
    type: 'input',
    name: 'flag',
    itemProps: {
      hidden: true
    }
  }, {
    type: 'update',
    itemProps: {
      noStyle: true,
      shouldUpdate: true,
      next: function next(values, form) {
        var isFlag = values.flag == 1;
        if (isFlag) {
          return /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
            children: "hello"
          });
        }
        return false;
      }
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
// EXTERNAL MODULE: ./src/pages/Component/service.ts
var service = __webpack_require__(58955);
// EXTERNAL MODULE: ./src/.umi-production/exports.ts + 39 modules
var _umi_production_exports = __webpack_require__(41997);
// EXTERNAL MODULE: ./src/core/helpers/index.tsx
var helpers = __webpack_require__(91694);
// EXTERNAL MODULE: ./src/core/Enhance/withRoutePage.tsx
var withRoutePage = __webpack_require__(28790);
// EXTERNAL MODULE: ./node_modules/redux/es/redux.js
var redux = __webpack_require__(14890);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var esm_objectSpread2 = __webpack_require__(1413);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/FileAddOutlined.js
// This icon file is generated automatically.
var FileAddOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0042 42h216v494zM544 472c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v108H372c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h108v108c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V644h108c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H544V472z" } }] }, "name": "file-add", "theme": "outlined" };
/* harmony default export */ var asn_FileAddOutlined = (FileAddOutlined);

// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/components/AntdIcon.js + 5 modules
var AntdIcon = __webpack_require__(91146);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/icons/FileAddOutlined.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY



var FileAddOutlined_FileAddOutlined = function FileAddOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.Z, (0,esm_objectSpread2/* default */.Z)((0,esm_objectSpread2/* default */.Z)({}, props), {}, {
    ref: ref,
    icon: asn_FileAddOutlined
  }));
};
FileAddOutlined_FileAddOutlined.displayName = 'FileAddOutlined';
/* harmony default export */ var icons_FileAddOutlined = (/*#__PURE__*/react.forwardRef(FileAddOutlined_FileAddOutlined));
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/ImportOutlined.js
// This icon file is generated automatically.
var ImportOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M888.3 757.4h-53.8c-4.2 0-7.7 3.5-7.7 7.7v61.8H197.1V197.1h629.8v61.8c0 4.2 3.5 7.7 7.7 7.7h53.8c4.2 0 7.7-3.4 7.7-7.7V158.7c0-17-13.7-30.7-30.7-30.7H158.7c-17 0-30.7 13.7-30.7 30.7v706.6c0 17 13.7 30.7 30.7 30.7h706.6c17 0 30.7-13.7 30.7-30.7V765.1c0-4.3-3.5-7.7-7.7-7.7zM902 476H588v-76c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 000 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-76h314c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z" } }] }, "name": "import", "theme": "outlined" };
/* harmony default export */ var asn_ImportOutlined = (ImportOutlined);

;// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/icons/ImportOutlined.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY



var ImportOutlined_ImportOutlined = function ImportOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.Z, (0,esm_objectSpread2/* default */.Z)((0,esm_objectSpread2/* default */.Z)({}, props), {}, {
    ref: ref,
    icon: asn_ImportOutlined
  }));
};
ImportOutlined_ImportOutlined.displayName = 'ImportOutlined';
/* harmony default export */ var icons_ImportOutlined = (/*#__PURE__*/react.forwardRef(ImportOutlined_ImportOutlined));
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/SyncOutlined.js
// This icon file is generated automatically.
var SyncOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M168 504.2c1-43.7 10-86.1 26.9-126 17.3-41 42.1-77.7 73.7-109.4S337 212.3 378 195c42.4-17.9 87.4-27 133.9-27s91.5 9.1 133.8 27A341.5 341.5 0 01755 268.8c9.9 9.9 19.2 20.4 27.8 31.4l-60.2 47a8 8 0 003 14.1l175.7 43c5 1.2 9.9-2.6 9.9-7.7l.8-180.9c0-6.7-7.7-10.5-12.9-6.3l-56.4 44.1C765.8 155.1 646.2 92 511.8 92 282.7 92 96.3 275.6 92 503.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8zm756 7.8h-60c-4.4 0-7.9 3.5-8 7.8-1 43.7-10 86.1-26.9 126-17.3 41-42.1 77.8-73.7 109.4A342.45 342.45 0 01512.1 856a342.24 342.24 0 01-243.2-100.8c-9.9-9.9-19.2-20.4-27.8-31.4l60.2-47a8 8 0 00-3-14.1l-175.7-43c-5-1.2-9.9 2.6-9.9 7.7l-.7 181c0 6.7 7.7 10.5 12.9 6.3l56.4-44.1C258.2 868.9 377.8 932 512.2 932c229.2 0 415.5-183.7 419.8-411.8a8 8 0 00-8-8.2z" } }] }, "name": "sync", "theme": "outlined" };
/* harmony default export */ var asn_SyncOutlined = (SyncOutlined);

;// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/icons/SyncOutlined.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY



var SyncOutlined_SyncOutlined = function SyncOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.Z, (0,esm_objectSpread2/* default */.Z)((0,esm_objectSpread2/* default */.Z)({}, props), {}, {
    ref: ref,
    icon: asn_SyncOutlined
  }));
};
SyncOutlined_SyncOutlined.displayName = 'SyncOutlined';
/* harmony default export */ var icons_SyncOutlined = (/*#__PURE__*/react.forwardRef(SyncOutlined_SyncOutlined));
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/ExportOutlined.js
// This icon file is generated automatically.
var ExportOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M888.3 757.4h-53.8c-4.2 0-7.7 3.5-7.7 7.7v61.8H197.1V197.1h629.8v61.8c0 4.2 3.5 7.7 7.7 7.7h53.8c4.2 0 7.7-3.4 7.7-7.7V158.7c0-17-13.7-30.7-30.7-30.7H158.7c-17 0-30.7 13.7-30.7 30.7v706.6c0 17 13.7 30.7 30.7 30.7h706.6c17 0 30.7-13.7 30.7-30.7V765.1c0-4.3-3.5-7.7-7.7-7.7zm18.6-251.7L765 393.7c-5.3-4.2-13-.4-13 6.3v76H438c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h314v76c0 6.7 7.8 10.5 13 6.3l141.9-112a8 8 0 000-12.6z" } }] }, "name": "export", "theme": "outlined" };
/* harmony default export */ var asn_ExportOutlined = (ExportOutlined);

;// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/icons/ExportOutlined.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY



var ExportOutlined_ExportOutlined = function ExportOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.Z, (0,esm_objectSpread2/* default */.Z)((0,esm_objectSpread2/* default */.Z)({}, props), {}, {
    ref: ref,
    icon: asn_ExportOutlined
  }));
};
ExportOutlined_ExportOutlined.displayName = 'ExportOutlined';
/* harmony default export */ var icons_ExportOutlined = (/*#__PURE__*/react.forwardRef(ExportOutlined_ExportOutlined));
// EXTERNAL MODULE: ./node_modules/@ant-design/icons-svg/es/asn/EditOutlined.js
var asn_EditOutlined = __webpack_require__(27363);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/icons/EditOutlined.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY



var EditOutlined = function EditOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.Z, (0,esm_objectSpread2/* default */.Z)((0,esm_objectSpread2/* default */.Z)({}, props), {}, {
    ref: ref,
    icon: asn_EditOutlined/* default */.Z
  }));
};
EditOutlined.displayName = 'EditOutlined';
/* harmony default export */ var icons_EditOutlined = (/*#__PURE__*/react.forwardRef(EditOutlined));
// EXTERNAL MODULE: ./node_modules/@ant-design/icons-svg/es/asn/DeleteOutlined.js
var asn_DeleteOutlined = __webpack_require__(47046);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/icons/DeleteOutlined.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY



var DeleteOutlined = function DeleteOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.Z, (0,esm_objectSpread2/* default */.Z)((0,esm_objectSpread2/* default */.Z)({}, props), {}, {
    ref: ref,
    icon: asn_DeleteOutlined/* default */.Z
  }));
};
DeleteOutlined.displayName = 'DeleteOutlined';
/* harmony default export */ var icons_DeleteOutlined = (/*#__PURE__*/react.forwardRef(DeleteOutlined));
// EXTERNAL MODULE: ./src/components/CommonCard/index.tsx + 8 modules
var CommonCard = __webpack_require__(79216);
;// CONCATENATED MODULE: ./src/pages/Component/class/index.tsx











var _excluded = ["name", "type", "initialValue", "formFieldProps", "controlProps"];























var apiPrefixMock = projectConfig/* default.apiPrefixMock */.Z.apiPrefixMock;
var Activity = /*#__PURE__*/function (_BaseComponent) {
  inherits_default()(Activity, _BaseComponent);
  var _super = createSuper_default()(Activity);
  function Activity(props) {
    var _this;
    classCallCheck_default()(this, Activity);
    _this = _super.call(this, props);
    defineProperty_default()(assertThisInitialized_default()(_this), "OtherFormRef", /*#__PURE__*/react.createRef());
    defineProperty_default()(assertThisInitialized_default()(_this), "handleOpenRegList", function (record) {});
    defineProperty_default()(assertThisInitialized_default()(_this), "getDisabledDate", function (disabledKey, current) {
      var _this$searchRef$curre3;
      var _this$searchRef$curre = (_this$searchRef$curre3 = _this.searchRef.current) === null || _this$searchRef$curre3 === void 0 ? void 0 : _this$searchRef$curre3.handleRealParams(),
        _this$searchRef$curre2 = slicedToArray_default()(_this$searchRef$curre, 2),
        values = _this$searchRef$curre2[1];
      if (!values) return false;
      if (current && current > dayjs_min_default()()) return true;
      switch (disabledKey) {
        case 'startDate':
          return current && current > dayjs_min_default()().startOf('day');
        case 'endDate':
          return current && current < dayjs_min_default()(values === null || values === void 0 ? void 0 : values['startDate'], 'YYYYMMDD').startOf('day');
      }
    });
    defineProperty_default()(assertThisInitialized_default()(_this), "handleFormatValues", function (values, record, type) {
      console.log(values, record, type);
      if (type === 'edit_echo') {
        return record;
      }
      return {
        values: values
      };
    });
    defineProperty_default()(assertThisInitialized_default()(_this), "renderFormItem", function (item, index) {
      var form = _this.OtherFormRef.current;
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
    });
    defineProperty_default()(assertThisInitialized_default()(_this), "handleOnReset", function (fn) {
      var _this$tableRef$curren, _this$tableRef$curren2;
      var defaultGroupValue = '1';
      var extraParams = (_this$tableRef$curren = _this.tableRef.current) === null || _this$tableRef$curren === void 0 ? void 0 : _this$tableRef$curren.state.extraParams;
      _this.setState({
        groupValue: defaultGroupValue
      });
      (_this$tableRef$curren2 = _this.tableRef.current) === null || _this$tableRef$curren2 === void 0 ? void 0 : _this$tableRef$curren2.setState({
        extraParams: objectSpread2_default()(objectSpread2_default()({}, extraParams), {}, {
          groupValue: defaultGroupValue
        })
      }, function () {
        return fn();
      });
    });
    _this.state = {
      searchParams: {
        aaaaaa: 1
      },
      selectedRows: [],
      selectedRowKeys: [],
      expandedKey: 'index',
      expandedRowKeys: [],
      exportLoading: false,
      radioValue: DEFAULT_ACTIVE_TYPE,
      dictType: DEFAULT_ACTIVE_TYPE,
      groupValue: DEFAULT_ACTIVE_TYPE
    };
    return _this;
  }
  createClass_default()(Activity, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$searchRef$curre6;
      var _this$searchRef$curre4 = (_this$searchRef$curre6 = this.searchRef.current) === null || _this$searchRef$curre6 === void 0 ? void 0 : _this$searchRef$curre6.handleRealParams(),
        _this$searchRef$curre5 = slicedToArray_default()(_this$searchRef$curre4, 2),
        value = _this$searchRef$curre5[0],
        values = _this$searchRef$curre5[1];
      _umi_production_exports.history.listen(function (_ref) {
        var location = _ref.location;
        console.log(location);
      });
    }

    // \u6253\u5F00\u6D3B\u52A8\u62A5\u540D\u5217\u8868\u9875\u9762
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$state = this.state,
        searchParams = _this$state.searchParams,
        selectedRowKeys = _this$state.selectedRowKeys,
        selectedRows = _this$state.selectedRows,
        expandedRowKeys = _this$state.expandedRowKeys,
        exportLoading = _this$state.exportLoading,
        dictType = _this$state.dictType,
        groupValue = _this$state.groupValue;
      var tableParams = {
        columns: getColumns(this),
        searchParams: (0,util/* formatParams */.aP)(searchParams),
        rowKey: 'index',
        fetchMethod: 'get',
        extraParams: {
          my: '121213',
          dictType: dictType,
          groupValue: groupValue
        },
        alternateColor: true,
        // defaultPageSize: 10,
        pagination: {
          pageSizeOptions: ['10', '20', '30', '40', '50']
        },
        dataHandler: function dataHandler(dataSource, data) {
          return dataSource;
        },
        buttonLeft: [{
          text: '\u65B0\u589E',
          onClick: this.handleAdd,
          buttonType: 'group',
          groupValue: groupValue,
          onChange: function onChange(e) {
            var _this2$tableRef$curre;
            var extraParams = (_this2$tableRef$curre = _this2.tableRef.current) === null || _this2$tableRef$curre === void 0 ? void 0 : _this2$tableRef$curre.state.extraParams;
            _this2.setState({
              groupValue: groupValue
            }, function () {
              return _this2.handleDynamicParam(objectSpread2_default()(objectSpread2_default()({}, extraParams), {}, {
                groupValue: e
              }));
            });
          },
          groupDict: [{
            name: '\u5168\u90E8',
            value: ''
          }, {
            name: '\u6EE1\u6298',
            value: '1'
          }, {
            name: '\u6EE1\u51CF',
            value: '2'
          }]
        }, {
          buttonType: 'custom',
          text: /*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default.Item */.Z.Item, {
            style: {
              marginBottom: 0,
              width: 200
            },
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(es_select/* default */.Z, {
              options: [{
                label: '\u4E07\u5143',
                value: '1'
              }]
            })
          })
        }],
        button: [{
          text: '\u65B0\u589E',
          icon: /*#__PURE__*/(0,jsx_runtime.jsx)(icons_FileAddOutlined, {}),
          onClick: this.handleAdd
        }, {
          text: '\u83B7\u53D6\u62D6\u62FD\u540E\u53CA\u9009\u62E9\u7684\u6570\u636E',
          icon: /*#__PURE__*/(0,jsx_runtime.jsx)(icons_ImportOutlined, {}),
          // element: <Button type="link" danger >ss</Button>,
          onClick: function onClick() {
            console.log(_this2.getDataSource());
            console.log(selectedRowKeys, selectedRows);
            console.log(expandedRowKeys);
          }
        }, {
          text: /*#__PURE__*/(0,jsx_runtime.jsxs)(space/* default */.Z, {
            children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(spin/* default */.Z, {
              spinning: exportLoading,
              size: "small",
              children: [exportLoading ? /*#__PURE__*/(0,jsx_runtime.jsx)(icons_SyncOutlined, {}) : /*#__PURE__*/(0,jsx_runtime.jsx)(icons_ExportOutlined, {}), ' ']
            }), "\\u5BFC\\u51FA"]
          }),
          onClick: function onClick() {
            return _this2.handleExport('\u589E\u5220\u6539\u67E5\u7EC4\u4EF6');
          }
        }, {
          buttonType: 'formItem',
          text: '',
          formItemProps: {
            name: 'money',
            label: '\u4E07\u5143',
            type: 'select',
            dict: [{
              text: '\u4E07\u5143',
              value: '1'
            }]
          }
        }],
        itemButton: [{
          text: '\u7F16\u8F91',
          icon: /*#__PURE__*/(0,jsx_runtime.jsx)(icons_EditOutlined, {}),
          onClick: this.handleEdit,
          code: 'class-editButton'
        }, {
          text: '\u5220\u9664',
          icon: /*#__PURE__*/(0,jsx_runtime.jsx)(icons_DeleteOutlined, {}),
          buttonType: 'delete',
          // code \u6743\u9650\u6821\u9A8C\u5982\u679C\u540E\u7AEF\u63A5\u53E3\u6CA1\u6709\u8FD4\u56DE \u5219\u4E0D\u663E\u793A
          code: 'class-deleteButton',
          // code: '\u9519\u8BEF\u7684code',
          onClick: function onClick() {
            _this2.handleDelete({
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
        urlAlls: {
          listUrl: "/getActivityListTotal"
        },
        selectType: 'checkbox',
        selectedRowKeys: selectedRowKeys,
        selectedRows: selectedRows,
        expandable: {
          expandedRowKeys: expandedRowKeys,
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
          onExpand: function onExpand(expanded, record) {
            if (!expanded) return _this2.setState({
              expandedRowKeys: []
            });
            _this2.setState({
              expandedRowKeys: [record.index]
            });
          }
        },
        onSelect: this.handleSelect,
        dataPath: 'data.list',
        totalPath: 'data.total',
        draggable: true,
        resizable: true,
        isSummary: true,
        // \u865A\u62DF\u5217\u8868\u914D\u7F6E
        isVirtual: false,
        scroll: {
          y: 800
        },
        fixRowKeys: [1, 2, 3],
        rowEventHandlers: {
          onClick: function onClick(record, index, event) {}
        },
        calcHeight: true,
        showIndex: true,
        removeSummary: ['activityType']
      };
      return /*#__PURE__*/(0,jsx_runtime.jsxs)(CommonCard/* Page */.T3, {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(components/* CommonTable */.FN, objectSpread2_default()(objectSpread2_default()({}, tableParams), {}, {
          ref: this.tableRef,
          preChildren: function preChildren(_ref2) {
            var loading = _ref2.loading;
            return /*#__PURE__*/(0,jsx_runtime.jsx)(spin/* default */.Z, {
              spinning: loading,
              indicator: /*#__PURE__*/(0,jsx_runtime.jsx)("span", {}),
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(components/* CommonSearch */.ji, {
                formList: getSearches(_this2),
                handleSearch: _this2.handleSearch,
                ref: _this2.searchRef,
                columnNumber: 4,
                expandForm: false,
                handleResetPreCallback: _this2.handleOnReset
              })
            });
          }
        })), /*#__PURE__*/(0,jsx_runtime.jsx)(components/* CustomForm */.yV, {
          title: "\\u8425\\u9500\\u6D3B\\u52A8"
          // isShowTitlePrefix={false}
          // isTable={true}
          ,
          className: classmodules.customForm,
          modalType: typings/* ModalType.modal */.w.modal,
          modalConf: {
            width: 1000,
            getContainer: false
          },
          defaultLayout: {
            labelCol: {
              span: 3
            },
            wrapperCol: {
              span: 21
            }
          },
          ref: this.formRef,
          formList: getFormList(this),
          formatValues: this.handleFormatValues,
          onSubmit: {
            action: service/* saveActivity */.d,
            callback: this.handleRefreshPage,
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
            var _this2$formRef$curren, _this2$OtherFormRef$c, _this2$OtherFormRef$c2;
            return regeneratorRuntime_default()().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  console.table((_this2$formRef$curren = _this2.formRef.current) === null || _this2$formRef$curren === void 0 ? void 0 : _this2$formRef$curren.form.getFieldsValue());
                  console.table((_this2$OtherFormRef$c = _this2.OtherFormRef.current) === null || _this2$OtherFormRef$c === void 0 ? void 0 : _this2$OtherFormRef$c.getFieldsValue());
                  // return Promise.reject \u5C31\u963B\u6B62\u63D0\u4EA4 \u7528\u4E8E\u989D\u5916\u7684\u8868\u5355
                  // return Promise.resolve({})
                  _context.next = 4;
                  return (_this2$OtherFormRef$c2 = _this2.OtherFormRef.current) === null || _this2$OtherFormRef$c2 === void 0 ? void 0 : _this2$OtherFormRef$c2.validateFields();
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
              ref: _this2.OtherFormRef,
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
                children: (getOtherFormList(_this2) || []).map(function (item, index) {
                  return /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
                    span: item['col'] || 24,
                    children: /*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default.Item */.Z.Item, objectSpread2_default()(objectSpread2_default()(objectSpread2_default()({
                      labelAlign: "right",
                      label: item.label,
                      name: item.name,
                      rules: (item === null || item === void 0 ? void 0 : item.rules) || [],
                      initialValue: item.initialValue
                    }, item.layout), item.itemProps), {}, {
                      children: _this2.renderFormItem(item)
                    }))
                  }, index);
                })
              })]
            });
          }
        })]
      });
    }
  }]);
  return Activity;
}(BaseComponent/* default */.Z);
/* harmony default export */ var Component_class = ((0,redux/* compose */.qC)(withRoutePage/* withRoutePage */.A, _umi_production_exports.withRouter, (0,_umi_production_exports.connect)(function (_ref4) {
  var global = _ref4.global,
    login = _ref4.login;
  return login;
}))(Activity));

//# sourceURL=webpack:///./src/pages/Component/class/index.tsx_+_16_modules?`)},58955:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval(`/* harmony export */ __webpack_require__.d(__webpack_exports__, {
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
