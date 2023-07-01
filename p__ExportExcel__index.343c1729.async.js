"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[230],{75662:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_eternallycyf_Documents_GitHub_case_Antd_CustomComponent_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5574);
/* harmony import */ var _Users_eternallycyf_Documents_GitHub_case_Antd_CustomComponent_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_eternallycyf_Documents_GitHub_case_Antd_CustomComponent_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4393);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(26713);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(71577);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(50168);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var exceljs_dist_exceljs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16663);
/* harmony import */ var exceljs_dist_exceljs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(exceljs_dist_exceljs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_CommonCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(79216);
/* harmony import */ var _components_File_FileExportExcel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(94174);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(85893);








var generateHeaders = _components_File_FileExportExcel__WEBPACK_IMPORTED_MODULE_4__/* .generateHeaders */ .WB,
  saveWorkbook = _components_File_FileExportExcel__WEBPACK_IMPORTED_MODULE_4__/* .saveWorkbook */ .Cl,
  downloadExcel = _components_File_FileExportExcel__WEBPACK_IMPORTED_MODULE_4__/* .downloadExcel */ .r8,
  downloadFiles2ZipWithFolder = _components_File_FileExportExcel__WEBPACK_IMPORTED_MODULE_4__/* .downloadFiles2ZipWithFolder */ ._S,
  downloadFiles2Zip = _components_File_FileExportExcel__WEBPACK_IMPORTED_MODULE_4__/* .downloadFiles2Zip */ .vq;
var columns = [{
  width: 50,
  dataIndex: 'id',
  key: 'id',
  title: 'ID'
}, {
  width: 100,
  dataIndex: 'name',
  key: 'name',
  title: '\u59D3\u540D'
}, {
  width: 50,
  dataIndex: 'age',
  key: 'age',
  title: '\u5E74\u9F84'
}, {
  width: 80,
  dataIndex: 'gender',
  key: 'gender',
  title: '\u6027\u522B'
}];
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
    _useState2 = _Users_eternallycyf_Documents_GitHub_case_Antd_CustomComponent_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
    list = _useState2[0],
    setList = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    generateData();
  }, []);
  function generateData() {
    var arr = [];
    for (var i = 0; i < 10; i++) {
      arr.push({
        id: i,
        name: "\\u5C0F\\u660E".concat(i, "\\u53F7"),
        age: i,
        gender: i % 2 === 0 ? '\u7537' : '\u5973'
      });
    }
    setList(arr);
  }
  function onExportBasicExcel() {
    // \u521B\u5EFA\u5DE5\u4F5C\u7C3F
    var workbook = new (exceljs_dist_exceljs__WEBPACK_IMPORTED_MODULE_2___default().Workbook)();
    // \u6DFB\u52A0sheet
    var worksheet = workbook.addWorksheet('demo sheet');
    // \u8BBE\u7F6E sheet \u7684\u9ED8\u8BA4\u884C\u9AD8
    worksheet.properties.defaultRowHeight = 20;
    // \u8BBE\u7F6E\u5217
    worksheet.columns = generateHeaders(columns);
    // \u6DFB\u52A0\u884C
    worksheet.addRows(list);
    // \u5BFC\u51FAexcel
    saveWorkbook(workbook, 'simple-demo.xlsx');
  }
  function onExportBasicExcelWithStyle() {
    // \u521B\u5EFA\u5DE5\u4F5C\u7C3F
    var workbook = new (exceljs_dist_exceljs__WEBPACK_IMPORTED_MODULE_2___default().Workbook)();
    // \u6DFB\u52A0sheet
    var worksheet = workbook.addWorksheet('demo sheet');
    // \u8BBE\u7F6E sheet \u7684\u9ED8\u8BA4\u884C\u9AD8
    worksheet.properties.defaultRowHeight = 20;
    // \u8BBE\u7F6E\u5217
    worksheet.columns = generateHeaders(columns);
    // \u7ED9\u8868\u5934\u6DFB\u52A0\u80CC\u666F\u8272\u3002\u56E0\u4E3A\u8868\u5934\u662F\u7B2C\u4E00\u884C\uFF0C\u53EF\u4EE5\u901A\u8FC7 getRow(1) \u6765\u83B7\u53D6\u8868\u5934\u8FD9\u4E00\u884C
    var headerRow = worksheet.getRow(1);
    // \u76F4\u63A5\u7ED9\u8FD9\u4E00\u884C\u8BBE\u7F6E\u80CC\u666F\u8272
    // headerRow.fill = {
    //   type: 'pattern',
    //   pattern: 'solid',
    //   fgColor: {argb: 'dff8ff'},
    // }
    // \u901A\u8FC7 cell \u8BBE\u7F6E\u6837\u5F0F\uFF0C\u66F4\u7CBE\u51C6
    headerRow.eachCell(function (cell, colNum) {
      // \u8BBE\u7F6E\u80CC\u666F\u8272
      cell.fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: {
          argb: 'dff8ff'
        }
      };
      // \u8BBE\u7F6E\u5B57\u4F53
      cell.font = {
        bold: true,
        italic: true,
        size: 12,
        name: '\u5FAE\u8F6F\u96C5\u9ED1',
        color: {
          argb: 'ff0000'
        }
      };
      // \u8BBE\u7F6E\u5BF9\u9F50\u65B9\u5F0F
      cell.alignment = {
        vertical: 'middle',
        horizontal: 'left',
        wrapText: false
      };
    });
    // \u6DFB\u52A0\u884C
    var rows = worksheet.addRows(list);
    // \u8BBE\u7F6E\u6BCF\u884C\u7684\u6837\u5F0F
    rows === null || rows === void 0 ? void 0 : rows.forEach(function (row) {
      // \u8BBE\u7F6E\u5B57\u4F53
      row.font = {
        size: 11,
        name: '\u5FAE\u8F6F\u96C5\u9ED1'
      };
      // \u8BBE\u7F6E\u5BF9\u9F50\u65B9\u5F0F
      row.alignment = {
        vertical: 'middle',
        horizontal: 'left',
        wrapText: false
      };
    });
    // \u5BFC\u51FAexcel
    saveWorkbook(workbook, 'simple-demo.xlsx');
  }
  function onExportExcel() {
    downloadExcel({
      filename: 'test',
      sheets: [{
        sheetName: 'test',
        columns: columns,
        dataSource: list,
        header: 'xxxxxHeader'
      }]
    });
  }
  function onExportZip() {
    downloadFiles2Zip({
      zipName: '\u538B\u7F29\u5305',
      files: [{
        filename: 'test',
        sheets: [{
          sheetName: 'test',
          columns: columns,
          dataSource: list
        }, {
          sheetName: 'test2',
          columns: columns,
          dataSource: list
        }]
      }, {
        filename: 'test2',
        sheets: [{
          sheetName: 'test',
          columns: columns,
          dataSource: list
        }]
      }, {
        filename: 'test3',
        sheets: [{
          sheetName: 'test',
          columns: columns,
          dataSource: list
        }]
      }]
    });
  }
  function onExportFolderZip() {
    downloadFiles2ZipWithFolder({
      zipName: '\u538B\u7F29\u5305',
      folders: [{
        folderName: '\u6587\u4EF6\u59391',
        files: [{
          filename: 'test',
          sheets: [{
            sheetName: 'test',
            columns: columns,
            dataSource: list
          }]
        }, {
          filename: 'test2',
          sheets: [{
            sheetName: 'test',
            columns: columns,
            dataSource: list
          }]
        }]
      }, {
        folderName: '\u6587\u4EF6\u59392',
        files: [{
          filename: 'test',
          sheets: [{
            sheetName: 'test',
            columns: columns,
            dataSource: list
          }]
        }, {
          filename: 'test2',
          sheets: [{
            sheetName: 'test',
            columns: columns,
            dataSource: list
          }]
        }]
      }, {
        folderName: '\u6587\u4EF6\u59392/\u6587\u4EF6\u59392-1',
        files: [{
          filename: 'test',
          sheets: [{
            sheetName: 'test',
            columns: columns,
            dataSource: list
          }]
        }, {
          filename: 'test2',
          sheets: [{
            sheetName: 'test',
            columns: columns,
            dataSource: list
          }]
        }]
      }, {
        folderName: '\u6587\u4EF6\u59392/\u6587\u4EF6\u59392-1/\u6587\u4EF6\u59392-1-1',
        files: [{
          filename: 'test',
          sheets: [{
            sheetName: 'test',
            columns: columns,
            dataSource: list
          }]
        }, {
          filename: 'test2',
          sheets: [{
            sheetName: 'test',
            columns: columns,
            dataSource: list
          }]
        }]
      }, {
        folderName: '',
        files: [{
          filename: 'test',
          sheets: [{
            sheetName: 'test',
            columns: columns,
            dataSource: list
          }, {
            sheetName: 'test2',
            columns: columns,
            dataSource: list
          }]
        }, {
          filename: 'test2',
          sheets: [{
            sheetName: 'test',
            columns: columns,
            dataSource: list
          }]
        }]
      }]
    });
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_CommonCard__WEBPACK_IMPORTED_MODULE_3__/* .Page */ .T3, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
      style: {
        margin: 24
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
        align: "center",
        direction: "horizontal",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(antd__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .ZP, {
          type: 'primary',
          onClick: onExportBasicExcel,
          children: "\\u5BFC\\u51FAexcel"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(antd__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .ZP, {
          type: 'primary',
          onClick: onExportBasicExcelWithStyle,
          children: "\\u5BFC\\u51FA\\u5E26\\u6837\\u5F0Fexcel"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(antd__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .ZP, {
          type: 'primary',
          onClick: onExportExcel,
          children: "\\u5C01\\u88C5\\u65B9\\u6CD5\\u5BFC\\u51FAexcel"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(antd__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .ZP, {
          type: 'primary',
          onClick: onExportZip,
          children: "\\u5BFC\\u51FAzip"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(antd__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .ZP, {
          type: 'primary',
          onClick: onExportFolderZip,
          children: "\\u5BFC\\u51FA\\u5206\\u6587\\u4EF6\\u5939zip"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(antd__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
        rowKey: 'id',
        columns: columns,
        dataSource: list
      })]
    })
  });
});

//# sourceURL=webpack:///./src/pages/ExportExcel/index.tsx?`)}}]);
