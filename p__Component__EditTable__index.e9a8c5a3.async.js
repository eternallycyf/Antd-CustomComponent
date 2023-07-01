"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[617],{38773:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval(`// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ EditTable; }
});

// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(5574);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);
// EXTERNAL MODULE: ./src/components/index.tsx + 50 modules
var components = __webpack_require__(41599);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(1413);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/WarningOutlined.js
// This icon file is generated automatically.
var WarningOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M464 720a48 48 0 1096 0 48 48 0 10-96 0zm16-304v184c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V416c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8zm475.7 440l-416-720c-6.2-10.7-16.9-16-27.7-16s-21.6 5.3-27.7 16l-416 720C56 877.4 71.4 904 96 904h832c24.6 0 40-26.6 27.7-48zm-783.5-27.9L512 239.9l339.8 588.2H172.2z" } }] }, "name": "warning", "theme": "outlined" };
/* harmony default export */ var asn_WarningOutlined = (WarningOutlined);

// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/components/AntdIcon.js + 5 modules
var AntdIcon = __webpack_require__(91146);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/icons/WarningOutlined.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY



var WarningOutlined_WarningOutlined = function WarningOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.Z, (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, props), {}, {
    ref: ref,
    icon: asn_WarningOutlined
  }));
};
WarningOutlined_WarningOutlined.displayName = 'WarningOutlined';
/* harmony default export */ var icons_WarningOutlined = (/*#__PURE__*/react.forwardRef(WarningOutlined_WarningOutlined));
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/VerticalAlignBottomOutlined.js
// This icon file is generated automatically.
var VerticalAlignBottomOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M859.9 780H164.1c-4.5 0-8.1 3.6-8.1 8v60c0 4.4 3.6 8 8.1 8h695.8c4.5 0 8.1-3.6 8.1-8v-60c0-4.4-3.6-8-8.1-8zM505.7 669a8 8 0 0012.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V176c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8z" } }] }, "name": "vertical-align-bottom", "theme": "outlined" };
/* harmony default export */ var asn_VerticalAlignBottomOutlined = (VerticalAlignBottomOutlined);

;// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/icons/VerticalAlignBottomOutlined.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY



var VerticalAlignBottomOutlined_VerticalAlignBottomOutlined = function VerticalAlignBottomOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.Z, (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, props), {}, {
    ref: ref,
    icon: asn_VerticalAlignBottomOutlined
  }));
};
VerticalAlignBottomOutlined_VerticalAlignBottomOutlined.displayName = 'VerticalAlignBottomOutlined';
/* harmony default export */ var icons_VerticalAlignBottomOutlined = (/*#__PURE__*/react.forwardRef(VerticalAlignBottomOutlined_VerticalAlignBottomOutlined));
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/PlusCircleOutlined.js + 1 modules
var PlusCircleOutlined = __webpack_require__(64789);
// EXTERNAL MODULE: ./node_modules/antd/es/form/index.js + 20 modules
var es_form = __webpack_require__(12029);
// EXTERNAL MODULE: ./node_modules/antd/es/card/index.js + 4 modules
var card = __webpack_require__(4393);
// EXTERNAL MODULE: ./node_modules/antd/es/button/index.js
var es_button = __webpack_require__(71577);
// EXTERNAL MODULE: ./node_modules/dayjs/dayjs.min.js
var dayjs_min = __webpack_require__(27484);
var dayjs_min_default = /*#__PURE__*/__webpack_require__.n(dayjs_min);
;// CONCATENATED MODULE: ./src/pages/Component/EditTable/config/columns.tsx
var columns = [{
  dataIndex: 'userName',
  title: '\u59D3\u540D',
  type: 'input',
  align: 'center',
  formItemProps: {},
  ellipsis: true,
  width: 100,
  tooltip: 'sss'
}, {
  dataIndex: 'time',
  title: '\u65F6\u95F4',
  type: 'date',
  align: 'center',
  formatTime: true,
  width: 100,
  formItemProps: {}
}, {
  dataIndex: 'age',
  title: '\u6570\u989D',
  type: 'inputNumber',
  align: 'center',
  formatNumber: true,
  width: 100,
  formItemProps: {}
}];
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./src/pages/Component/EditTable/index.tsx









var Demo = function Demo() {
  var _Form$useForm = es_form/* default.useForm */.Z.useForm(),
    _Form$useForm2 = slicedToArray_default()(_Form$useForm, 1),
    form = _Form$useForm2[0];
  var EditTableRef = react.useRef(null);
  var _React$useState = react.useState('edit'),
    _React$useState2 = slicedToArray_default()(_React$useState, 2),
    status = _React$useState2[0],
    setStatus = _React$useState2[1];
  var handleOnSubmit = function handleOnSubmit() {
    var values = EditTableRef.current.form.getFieldsValue();
    console.log(values);
  };
  return /*#__PURE__*/(0,jsx_runtime.jsx)(card/* default */.Z, {
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)(es_form/* default */.Z, {
      form: form,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(components/* CommonEditTable */.a6, {
        form: form,
        status: status,
        ref: EditTableRef
        // isVirtual
        ,
        initialValues: Array.from({
          length: 3
        }).map(function (_, index) {
          return {
            userName: '\u5F20\u4E09\u5F20\u4E09\u5F20\u4E09\u5F20\u4E09\u5F20\u4E09\u5F20\u4E09\u5F20\u4E09\u5F20\u4E09\u5F20\u4E09\u5F20\u4E09\u5F20\u4E09\u5F20\u4E09\u5F20\u4E09\u5F20\u4E09\u5F20\u4E09\u5F20\u4E09\u5F20\u4E09\u5F20\u4E09\u5F20\u4E09',
            key: index,
            age: 21260
          };
        }),
        columns: columns,
        buttonLeft: [],
        buttonRight: [{
          buttonType: 'default',
          text: '\u6DFB\u52A0\u5230\u5934\u90E8',
          onClick: function onClick(values, operation) {
            return operation.add({
              userName: '\u5F20\u4E09'
            }, 0);
          },
          visible: function visible(text, record, index, status) {
            return status == 'edit';
          }
        }, {
          buttonType: 'default',
          text: '\u5168\u90E8\u5220\u9664',
          disabled: status == 'view',
          onClick: function onClick() {
            return form.setFieldsValue({
              EditTable: []
            });
          },
          icon: /*#__PURE__*/(0,jsx_runtime.jsx)(icons_WarningOutlined, {}),
          visible: function visible(text, record, index, status) {
            return status == 'edit';
          }
        }, {
          buttonType: 'default',
          text: '\u5BFC\u51FA',
          visible: function visible(text, record, index, status) {
            return status == 'view';
          },
          // visible: (text, record, index) => status == 'view',
          icon: /*#__PURE__*/(0,jsx_runtime.jsx)(icons_VerticalAlignBottomOutlined, {}),
          onClick: function onClick(values, operation) {
            return EditTableRef.current.handleExport('\u5BFC\u51FA', columns, form.getFieldValue('EditTable'));
          }
        }],
        itemButton: [{
          buttonType: 'delete',
          text: '\u5220\u9664',
          deleteText: '\u786E\u8BA4\u5220\u9664\u561B',
          onClick: function onClick(values, operation) {
            return operation.remove(values.index);
          }
        }],
        beforeChildren: function beforeChildren(values) {
          return /*#__PURE__*/(0,jsx_runtime.jsx)(components/* AccessBtn */.P$, {
            btnList: [{
              buttonType: 'group',
              text: '',
              groupValue: status,
              groupDict: [{
                value: 'edit',
                name: '\u7F16\u8F91\u89C6\u56FE'
              }, {
                value: 'view',
                name: '\u5C55\u793A\u89C6\u56FE'
              }],
              onChange: function onChange(value) {
                return setStatus(value);
              }
            }]
          });
        },
        afterChildren: function afterChildren(values) {
          if (status == 'view') return null;
          return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            style: {
              display: 'grid',
              placeContent: 'center'
            },
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
              type: "link",
              icon: /*#__PURE__*/(0,jsx_runtime.jsx)(PlusCircleOutlined/* default */.Z, {}),
              onClick: function onClick() {
                values.operation.add({
                  userName: '\u5F20\u4E09',
                  time: dayjs_min_default()()
                });
              },
              children: "\\u6DFB\\u52A0"
            })
          });
        }
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default.Item */.Z.Item, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
          type: "primary",
          onClick: handleOnSubmit,
          children: "\\u63D0\\u4EA4"
        })
      })]
    })
  });
};
/* harmony default export */ var EditTable = (Demo);

//# sourceURL=webpack:///./src/pages/Component/EditTable/index.tsx_+_5_modules?`)}}]);
