(self.webpackChunk=self.webpackChunk||[]).push([[665],{92380:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";eval(`// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ Charts_ECharts; }
});

// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(9783);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);
// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__(19632);
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);
// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/objectSpread2.js
var objectSpread2 = __webpack_require__(97857);
var objectSpread2_default = /*#__PURE__*/__webpack_require__.n(objectSpread2);
// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(5574);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);
// EXTERNAL MODULE: ./node_modules/antd/es/empty/index.js + 3 modules
var empty = __webpack_require__(32983);
// EXTERNAL MODULE: ./node_modules/echarts-for-react/esm/index.js + 5 modules
var esm = __webpack_require__(66284);
// EXTERNAL MODULE: ./node_modules/lodash/lodash.js
var lodash = __webpack_require__(96486);
var lodash_default = /*#__PURE__*/__webpack_require__.n(lodash);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/dayjs/dayjs.min.js
var dayjs_min = __webpack_require__(27484);
var dayjs_min_default = /*#__PURE__*/__webpack_require__.n(dayjs_min);
;// CONCATENATED MODULE: ./src/components/Charts/ECharts/StackChart/chart.less?modules
// extracted by mini-css-extract-plugin
/* harmony default export */ var chartmodules = ({"tooltipBox":"tooltipBox___qXN61","timeContent":"timeContent___pXvX9","time":"time___CwKdr","hr":"hr___ktXTc","contrastContentCard":"contrastContentCard____qQV3","contrastContent":"contrastContent___uMOFJ","box":"box___s8XJL","title":"title___Bey5K","content":"content___uGcrt","contentCenter":"contentCenter___iLQvF","left":"left___vZwBl","rect":"rect___LF8qK","line":"line___rgswy","right":"right___hz7ve","bold":"bold___oxOGy"});
;// CONCATENATED MODULE: ./src/components/Charts/ECharts/StackChart/utils.tsx

/* eslint-disable no-useless-escape */

var formatNumber = function formatNumber(number) {
  var isPercent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  if (number == 0) return 0;
  if (number == undefined) return '--';
  if (!number) return '--';
  if (isPercent) {
    var _haveDecimal = /\\./.test((number * 100).toString());
    return _haveDecimal ? (Number(number) * 100).toFixed(2) : number * 100;
  }
  var haveDecimal = /\\./.test(number.toString());
  return haveDecimal ? Number(number).toFixed(2) : number;
};
var defaultFormatColor = function defaultFormatColor(_ref) {
  var formatColor = _ref.formatColor,
    value = _ref.value,
    BASE_CONFIG = _ref.BASE_CONFIG;
  var hasFormatColor = formatColor && typeof formatColor === 'function';
  var valueColor = '';
  if (hasFormatColor) {
    valueColor = formatColor(value);
  } else {
    valueColor = value == 0 || value == '0.00' ? BASE_CONFIG.BLACK : value > 0 ? BASE_CONFIG.RED : BASE_CONFIG.GREEN;
  }
  return valueColor;
};
var utils_BASE_CONFIG = {
  // \u65F6\u95F4\u7684\u5B57\u6BB5
  TIME: 'time',
  // \u5408\u8BA1\u7684\u5B57\u6BB5
  TOTAL: 'total',
  TOTAL_NAME: '\u5408\u8BA1',
  // x\u8F74\u65F6\u95F4\u683C\u5F0F\u5316
  XAXIS_FORMATE_TIME: 'YYYY-MM\u6708',
  // tooltip \u65F6\u95F4\u683C\u5F0F\u5316
  TOOLTIP_TIME_FORMAT: 'YYYY\u5E74MM\u6708',
  HAS_TOP_LABEL: false,
  DYNAMICS_BAR_TOTAL: true,
  // \u662F\u5426\u5C55\u793A\u533A\u57DF\u7F29\u653E\u6ED1\u5757
  HAS_DATA_ZOOM: false,
  // \u533A\u57DF\u7F29\u653E \u6ED1\u5757\u662F\u5426\u53EF\u81EA\u5B9A\u4E49\u62C9\u4F38\u5927\u5C0F
  HAS_DATA_ZOOM_LOCK: false,
  /**
   * @name \u533A\u57DF\u7F29\u653E-\u6ED1\u5757\u521D\u59CB\u5316\u5F00\u59CB\u70B9
   * @example '2021-03\u6708'
   */
  DATA_ZOOM_START_VALUE: '',
  // \u533A\u57DF\u7F29\u653E-\u6ED1\u5757\u521D\u59CB\u5316\u7ED3\u675F\u70B9
  DATA_ZOOM_END_VALUE: '',
  DATA_ZOOM_START_AND_END_VALUE_OBJ: false,
  DATA_ZOOM_START_AND_END_OBJ: false,
  DATA_ZOOM_START: '',
  DATA_ZOOM_END: '',
  DATAZOOM_SLIDER_CONFIG: {},
  // \u5F00\u542F\u540E tooltip\u4F1A\u5F00\u542F\u6EDA\u52A8\u6837\u5F0F TOOLTIP_WIDTH TOOLTIP_HEIGHT \u4F1A\u751F\u6548
  HAS_SCROLL_TOOLTIP: false,
  TOOLTIP_WIDTH: 320,
  TOOLTIP_HEIGHT: 350,
  XAXIS_NAME: '',
  YAXIS_NAME1: '',
  YAXIS_NAME2: '',
  // tooltip \u6570\u503C\u683C\u5F0F\u5316\u989C\u8272
  BLACK: '#2A303B',
  RED: '#E62C3B',
  GREEN: '#0FBE3F',
  TOOLTIP_SHADOW_COLOR: '#F0F6FF',
  // \u6298\u7EBF\u6837\u5F0F
  LINE_SERIES: {
    type: 'line',
    smooth: true,
    symbol: 'none',
    yAxisIndex: 1,
    itemStyle: {
      normal: {
        color: '#3376B5'
      }
    }
  },
  // \u662F\u5426\u662F\u9762\u79EF\u56FE
  IS_AREA: false,
  XASIS_LABEL_FORMAT: function XASIS_LABEL_FORMAT(v, currentSelectedLegend) {
    var values = v === null || v === void 0 ? void 0 : v.split('-');
    if (!Array.isArray(values)) return '--';
    if ((values === null || values === void 0 ? void 0 : values.length) === 0) return '--';
    return ["{a|".concat(values[1], "}"), "{b|".concat(values[0], "}")].join('\\n');
  },
  LINE_YAXIS_LABEL: {
    formatter: function formatter(value) {
      return Number(value).toFixed(2) + '%';
    }
  },
  LINE_YAXIS: {},
  LEGEND_CONFIG: {},
  BAR_SERIES: {
    type: 'bar',
    stack: 'sum',
    barWidth: '20px'
  },
  GRID_CONFIG: {},
  GET_LEGEND_FN: function GET_LEGEND_FN(item, data) {
    var _item$legendSuffix;
    var name = "".concat(item.name).concat((_item$legendSuffix = item === null || item === void 0 ? void 0 : item.legendSuffix) !== null && _item$legendSuffix !== void 0 ? _item$legendSuffix : '');
    return {
      name: name,
      icon: (item === null || item === void 0 ? void 0 : item.shape) === 'rect' ? 'path://M80,80,h80,v80,h-80Z' : 'path://M0,0 L8,0 L8,1 L0,1 L0,0 Z'
    };
  }
};
var renderTooltip = function renderTooltip(data, BASE_CONFIG) {
  var _data$ = data[0],
    time = _data$.time,
    width = _data$.width,
    height = _data$.height;
  var hasCustomHeightAndWidth = BASE_CONFIG.HAS_SCROLL_TOOLTIP;
  var newWidth = hasCustomHeightAndWidth ? width + 'px' : width;
  var newHeight = hasCustomHeightAndWidth ? height + 'px' : height;
  var groupKeysList = toConsumableArray_default()(new Set(data.map(function (item) {
    return item === null || item === void 0 ? void 0 : item.tootipType;
  }))).filter(Boolean) || [];
  var newData = (groupKeysList === null || groupKeysList === void 0 ? void 0 : groupKeysList.length) > 0 ? groupKeysList === null || groupKeysList === void 0 ? void 0 : groupKeysList.map(function (item) {
    return data.filter(function (ele) {
      return (ele === null || ele === void 0 ? void 0 : ele.tootipType) === item;
    });
  }) : [data];
  return "\\n  <div class=\\"".concat(chartmodules.tooltipBox, "\\" style=\\"--width:").concat(newWidth, ";--height:").concat(newHeight, ";marginLeft: 100px\\">\\n        <div class=\\"").concat(chartmodules.timeContent, "\\">\\n          <svg viewBox=\\"64 64 896 896\\" focusable=\\"false\\" data-icon=\\"calendar\\" width=\\"1em\\" height=\\"1em\\" fill=\\"currentColor\\" aria-hidden=\\"true\\"><path d=\\"M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32zm-40 656H184V460h656v380zM184 392V256h128v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h256v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h128v136H184z\\"></path></svg>\\n          <span class=\\"").concat(chartmodules.time, "\\">").concat(time, "</span>\\n        </div>\\n        <div class=\\"").concat(chartmodules.hr, "\\"></div>\\n        <div class=\\"").concat(chartmodules.contrastContentCard, "\\">\\n        ").concat(newData.map(function (ele, index, arr) {
    return "\\n          <div class=\\"".concat(chartmodules.contrastContent, "\\">\\n            <div class=\\"").concat(index + 1 != (arr === null || arr === void 0 ? void 0 : arr.length) && chartmodules.box, "\\">\\n            ").concat(ele.map(function (item) {
      var _item$unitSymbol, _item$percentSymbol;
      var left = item.shape ? "<div class=\\"".concat(chartmodules[item.shape], "\\" style=\\"--color:").concat(item.shapeColor, "\\"></div>") : '';
      var currentValue = item !== null && item !== void 0 && item.format ? item.format(item.value, item) : item.value;
      var isBold = item !== null && item !== void 0 && item.isBold ? chartmodules.bold : undefined;
      var isOnly = item !== null && item !== void 0 && item.isOnly ? chartmodules.contentCenter : chartmodules.content;
      var Hr = item.hasHr ? "<div class=\\"".concat(chartmodules.hr, "\\"></div>") : '';
      var percent = item.formatPercent ? item.formatPercent(item.percent, item) : item.percent;
      return "\\n                <div class=\\"".concat(isOnly, "\\">\\n                  <div class=\\"").concat(chartmodules.left, " ").concat(isBold, "\\">\\n                  ").concat(left, "\\n                  <div class=\\"").concat(chartmodules.text, " ").concat(isBold, " ").concat(item === null || item === void 0 ? void 0 : item.leftClassName, "\\">").concat(item.name, "</div>\\n                  </div>\\n                  <div class=\\"").concat(chartmodules.right, " ").concat(isBold, " ").concat(item === null || item === void 0 ? void 0 : item.rightClassName, "\\" style=\\"--color:").concat(item === null || item === void 0 ? void 0 : item.valueColor, ";\\">\\n                    <span>").concat(currentValue, " ").concat((_item$unitSymbol = item === null || item === void 0 ? void 0 : item.unitSymbol) !== null && _item$unitSymbol !== void 0 ? _item$unitSymbol : '', "</span>\\n                    <span>").concat((item === null || item === void 0 ? void 0 : item.percentKey) != undefined ? "".concat(percent).concat((_item$percentSymbol = item.percentSymbol) !== null && _item$percentSymbol !== void 0 ? _item$percentSymbol : '') : '', " </span>\\n                  </div>\\n                </div>\\n                ").concat(Hr, "\\n              ");
    }).join(''), "\\n              </div>\\n            </div>\\n          ");
  }).join(''), "\\n        </div>\\n  </div>\\n  ");
};
;// CONCATENATED MODULE: ./src/components/Charts/ECharts/StackChart/chart.tsx





var getOptions = function getOptions(config) {
  var _config$data = config.data,
    DATA = _config$data === void 0 ? [] : _config$data,
    _config$baseConfig = config.baseConfig,
    baseConfig = _config$baseConfig === void 0 ? {} : _config$baseConfig,
    _config$chartConfig = config.chartConfig,
    chartConfig = _config$chartConfig === void 0 ? {} : _config$chartConfig,
    _config$currentSelect = config.currentSelectedLegend,
    currentSelectedLegend = _config$currentSelect === void 0 ? [] : _config$currentSelect;
  var BASE_CONFIG = objectSpread2_default()(objectSpread2_default()({}, utils_BASE_CONFIG), baseConfig);
  var CHART_CONFIG = toConsumableArray_default()(chartConfig);
  var dataZoomStartAndEndValueObj = BASE_CONFIG.DATA_ZOOM_START_AND_END_VALUE_OBJ ? {
    startValue: BASE_CONFIG.DATA_ZOOM_START_VALUE,
    endValue: BASE_CONFIG.DATA_ZOOM_END_VALUE
  } : {};
  var dataZoomStartAndEndObj = BASE_CONFIG.DATA_ZOOM_START_AND_END_OBJ ? {
    start: BASE_CONFIG.DATA_ZOOM_START,
    end: BASE_CONFIG.DATA_ZOOM_END
  } : {};
  var areaTooltipStyles = BASE_CONFIG.IS_AREA ? {
    axisPointer: {
      type: 'line',
      shadowStyle: {
        color: '#98CEFD',
        opacity: 0.2
      },
      backgroundColor: 'transparent',
      borderColor: 'transparent',
      confine: true
    }
  } : {};
  var getAreaSeriesStyles = BASE_CONFIG.IS_AREA ? function (color) {
    return {
      showSymbol: false,
      symbol: 'circle',
      symbolSize: 4,
      areaStyle: {
        color: color
      }
    };
  } : function () {
    return {};
  };
  return {
    axisPointer: {
      type: 'cross',
      axis: 'radius',
      link: {
        xAxisIndex: 'all'
      },
      lineStyle: {
        type: 'dashed'
      },
      label: {
        backgroundColor: 'black',
        color: '#fff'
      }
    },
    legend: objectSpread2_default()({
      type: 'scroll',
      z: 999999,
      textStyle: {
        color: '#5B6371',
        fontSize: 12,
        fontWeight: 400
      },
      orient: 'horizontal',
      show: true,
      bottom: 0,
      itemWidth: 16,
      itemHeight: 8,
      itemGap: 30,
      data: CHART_CONFIG.filter(function (item) {
        return Boolean(item.isLegend);
      }).map(function (item) {
        return BASE_CONFIG.GET_LEGEND_FN(item, DATA);
      })
    }, BASE_CONFIG.LEGEND_CONFIG),
    grid: objectSpread2_default()({
      top: '10%',
      left: '2%',
      right: '4%',
      bottom: '15%',
      containLabel: true
    }, BASE_CONFIG.GRID_CONFIG),
    yAxis: [objectSpread2_default()({
      type: 'value',
      name: BASE_CONFIG.YAXIS_NAME1,
      nameLocation: 'end',
      nameTextStyle: {
        fontSize: 12,
        padding: [0, 185, 0, 0],
        color: '#B3B8C2'
      },
      position: 'right',
      show: true,
      offset: 3,
      axisLabel: objectSpread2_default()({
        textStyle: {
          color: '#5B6371 ',
          fontSize: 12,
          fontWeight: 400
        }
      }, BASE_CONFIG.LINE_YAXIS_LABEL),
      splitLine: {
        show: true,
        lineStyle: {
          width: 1,
          color: 'rgba(239,241,244,1)'
        }
      },
      axisLine: {
        lineStyle: {
          color: '#B3B8C2'
        }
      }
    }, BASE_CONFIG.LINE_YAXIS), {
      type: 'value',
      position: 'left',
      name: BASE_CONFIG.YAXIS_NAME2,
      nameLocation: 'end',
      nameTextStyle: {
        fontSize: 12,
        padding: [0, 0, 0, 15],
        color: '#B3B8C2'
      },
      show: true,
      axisLabel: {
        textStyle: {
          color: '#5B6371 ',
          fontSize: 12,
          fontWeight: 400
        },
        align: 'right'
      },
      splitLine: {
        show: true,
        lineStyle: {
          width: 1,
          color: 'rgba(239,241,244,1)'
        }
      },
      axisLine: {
        lineStyle: {
          color: '#B3B8C2'
        }
      }
    }],
    xAxis: {
      type: 'category',
      min: 'dataMin',
      max: 'dataMax',
      name: BASE_CONFIG.XAXIS_NAME,
      nameLocation: 'end',
      nameTextStyle: {
        align: 'right',
        verticalAlign: 'top',
        fontSize: 12,
        padding: [30, 5, 0, 0],
        color: '#B3B8C2'
      },
      nameGap: 0,
      boundaryGap: true,
      alignWithLabel: true,
      axisLine: {
        lineStyle: {
          color: '#CACED7'
        }
      },
      axisLabel: {
        textStyle: {
          color: '#5B6371 ',
          fontSize: 12,
          fontWeight: 400
        },
        interval: 0,
        formatter: function formatter(v, currentSelectedLegend) {
          return BASE_CONFIG.XASIS_LABEL_FORMAT(v, currentSelectedLegend);
        },
        rich: {
          a: {
            fontSize: 12,
            fontFamily: 'PingFangSC-Regular, PingFang SC',
            fontWeight: 400,
            color: '#5B6371',
            lineHeight: 12
          },
          b: {
            fontSize: 10,
            fontFamily: 'PingFangSC-Regular, PingFang SC',
            fontWeight: 400,
            color: '#B3B8C2',
            lineHeight: 20
          }
        }
      },
      splitLine: {
        show: true,
        lineStyle: {
          type: 'dashed',
          //\u9ED8\u8BA4\u5B9E\u7EBF\uFF0Cdashed\u865A\u7EBF
          width: 1,
          color: 'transparent'
        }
      },
      axisTick: {
        alignWithLabel: true,
        show: true
      },
      data: DATA.map(function (item) {
        return dayjs_min_default()(item[BASE_CONFIG.TIME]).format(BASE_CONFIG.XAXIS_FORMATE_TIME);
      })
    },
    dataZoom: BASE_CONFIG.HAS_DATA_ZOOM ? [objectSpread2_default()(objectSpread2_default()(objectSpread2_default()({
      type: 'inside',
      zoomOnMouseWheel: 'shift'
    }, dataZoomStartAndEndValueObj), dataZoomStartAndEndObj), {}, {
      top: 50,
      textStyle: {
        color: 'transparent',
        fontSize: 12,
        fontWeight: 400,
        textShadowOffsetY: 45,
        textShadowOffsetX: -45
      }
    }), objectSpread2_default()({
      type: 'slider',
      show: true,
      y: '90%',
      top: '80%',
      brushSelect: false,
      handleIcon: 'path://M-9.35,34.56V42m0-40V9.5m-2,0h4a2,2,0,0,1,2,2v21a2,2,0,0,1-2,2h-4a2,2,0,0,1-2-2v-21A2,2,0,0,1-11.35,9.5Z',
      dataBackground: {
        lineStyle: {
          color: '#C7DEFF',
          opacity: 1
        },
        areaStyle: {
          color: '#E0EDFF'
        }
      },
      borderColor: '#B2CFFB',
      textStyle: {
        color: 'transparent',
        fontSize: 12,
        fontWeight: 400,
        textShadowOffsetY: 45,
        textShadowOffsetX: -45
      },
      width: 'ph',
      height: 'ph',
      bottom: null,
      borderRadius: 3,
      backgroundColor: 'rgba(47,69,84,0)',
      fillerColor: 'rgba(145,175,274,0.2)',
      handleSize: '100%',
      handleStyle: {
        color: '#fff',
        borderColor: '#B2CFFB'
      },
      moveHandleSize: 7,
      showDetail: true,
      showDataShadow: 'auto',
      realtime: true,
      zoomLock: BASE_CONFIG.HAS_DATA_ZOOM_LOCK,
      rangeMode: 'value',
      brushStyle: {
        color: 'rgba(135,175,274,0.15)'
      },
      emphasis: {
        handleStyle: {
          borderColor: '#8Fb0F7'
        }
      }
    }, BASE_CONFIG.DATAZOOM_SLIDER_CONFIG)] : false,
    tooltip: objectSpread2_default()(objectSpread2_default()({
      trigger: 'axis',
      renderMode: 'html',
      enterable: BASE_CONFIG.HAS_SCROLL_TOOLTIP,
      axisPointer: {
        type: 'shadow',
        shadowStyle: {
          color: BASE_CONFIG.TOOLTIP_SHADOW_COLOR,
          opacity: 0.2
        }
      },
      backgroundColor: 'transparent',
      borderColor: 'transparent',
      confine: true,
      extraCssText: 'z-index: 99'
    }, areaTooltipStyles), {}, {
      formatter: function formatter(params) {
        var arr = params.sort(function (a, b) {
          return a.seriesIndex - b.seriesIndex;
        });
        var time = dayjs_min_default()(arr[0].data[BASE_CONFIG.TIME]).format(BASE_CONFIG.TOOLTIP_TIME_FORMAT);
        var nameList = (params || []).map(function (ele) {
          return ele.seriesName;
        }) || [];
        var hasTotal = CHART_CONFIG.some(function (item) {
          return item.name == BASE_CONFIG.TOTAL_NAME;
        });
        var barList = (params || []).filter(function (item) {
          return item.seriesType === 'bar';
        }) || [];
        if (hasTotal && barList.length != 0) {
          nameList = [].concat(toConsumableArray_default()(nameList), [BASE_CONFIG.TOTAL_NAME]);
        }
        var total = barList.reduce(function (pre, cru) {
          return pre + (Number(cru === null || cru === void 0 ? void 0 : cru.value) || 0);
        }, 0);
        var defaultDataObj = arr[0].data;
        var defaultConfig = {
          time: time,
          total: total
        };
        var newArr = CHART_CONFIG.filter(function (item) {
          return Boolean(!item.isTopFlag);
        }).map(function (item) {
          var _value, _item$showName;
          var value = defaultDataObj[item.dataKey];
          var percentObj = item.percentKey ? {
            percent: formatNumber(defaultDataObj[item.percentKey], true)
          } : {};
          value = (_value = value) !== null && _value !== void 0 ? _value : item.type === 'line' ? 0.0 : undefined;
          return objectSpread2_default()(objectSpread2_default()(objectSpread2_default()(objectSpread2_default()({}, item), defaultConfig), percentObj), {}, {
            name: (_item$showName = item === null || item === void 0 ? void 0 : item.showName) !== null && _item$showName !== void 0 ? _item$showName : item.name,
            valueColor: defaultFormatColor(objectSpread2_default()(objectSpread2_default()({}, item), {}, {
              value: value,
              BASE_CONFIG: BASE_CONFIG
            })),
            value: item.name == BASE_CONFIG.TOTAL_NAME ? total : value,
            width: BASE_CONFIG.TOOLTIP_WIDTH,
            height: BASE_CONFIG.TOOLTIP_HEIGHT
          });
        }).filter(function (item) {
          var _item$legendSuffix;
          return BASE_CONFIG.DYNAMICS_BAR_TOTAL ? nameList.includes(item.name + ((_item$legendSuffix = item.legendSuffix) !== null && _item$legendSuffix !== void 0 ? _item$legendSuffix : '')) : true;
        });
        return renderTooltip(newArr, BASE_CONFIG);
      }
    }),
    series: CHART_CONFIG.filter(function (item) {
      return Boolean(item.isLegend || item.isTopFlag);
    }).map(function (item) {
      var _item$legendSuffix2;
      var name = "".concat(item.name).concat((_item$legendSuffix2 = item === null || item === void 0 ? void 0 : item.legendSuffix) !== null && _item$legendSuffix2 !== void 0 ? _item$legendSuffix2 : '');
      var customProps = item.type === 'line' ? BASE_CONFIG.LINE_SERIES : BASE_CONFIG.BAR_SERIES;
      var data = DATA.map(function (ele) {
        return objectSpread2_default()(objectSpread2_default()({}, ele), {}, {
          value: ele[item.dataKey],
          total: ele[BASE_CONFIG.TOTAL],
          time: ele[BASE_CONFIG.TIME]
        });
      });
      if (item.type === 'line') {
        (0,lodash.cloneDeep)(data).reverse().some(function (item) {
          if (!item.value) {
            data.pop();
          }
          return item.value;
        });
      }
      return objectSpread2_default()(objectSpread2_default()(objectSpread2_default()(objectSpread2_default()({}, item), customProps), {}, {
        name: name,
        yAxisIndex: item.type === 'line' ? '0' : '1',
        lineStyle: {
          color: item.shapeColor
        },
        itemStyle: {
          color: item.shapeColor
        },
        textStyle: {
          color: 'transparent',
          fontSize: 12,
          fontWeight: 400
        },
        smooth: false,
        symbol: 'none',
        label: {
          show: false,
          rotate: 0,
          position: 'top',
          distance: -10,
          textStyle: {
            color: '#5B6371',
            fontSize: 12,
            fontWeight: 400
          },
          formatter: function formatter(config) {
            var _item$unitSymbol;
            return formatNumber(config.data[item.dataKey]) + ((_item$unitSymbol = item === null || item === void 0 ? void 0 : item.unitSymbol) !== null && _item$unitSymbol !== void 0 ? _item$unitSymbol : '');
          }
        },
        markLine: {
          animation: false,
          lineStyle: {
            type: 'solid',
            width: 1,
            color: '#CACED7'
          },
          label: {
            show: false
          },
          symbol: ['none', 'none'],
          silent: true,
          data: [{
            yAxis: 0
          }]
        }
      }, getAreaSeriesStyles(item.shapeColor)), {}, {
        data: data
      }, item.series || {});
    })
  };
};
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./src/components/Charts/ECharts/StackChart/index.tsx











var StackChart = function StackChart(props) {
  var _style$height;
  var _useState = (0,react.useState)({}),
    _useState2 = slicedToArray_default()(_useState, 2),
    options = _useState2[0],
    setOptions = _useState2[1];
  var _useState3 = (0,react.useState)([]),
    _useState4 = slicedToArray_default()(_useState3, 2),
    currentSelectedLegend = _useState4[0],
    setCurrentSelectedLegend = _useState4[1];
  var EchartsRef = (0,react.useRef)(null);
  var data = props.data,
    newBaseConfig = props.baseConfig,
    _props$chartConfig = props.chartConfig,
    chartConfig = _props$chartConfig === void 0 ? {} : _props$chartConfig,
    style = props.style;
  var baseConfig = objectSpread2_default()(objectSpread2_default()({}, utils_BASE_CONFIG), newBaseConfig);
  var HAS_TOP_LABEL = baseConfig.HAS_TOP_LABEL;
  var TOTAL_NAME = baseConfig.TOTAL_NAME;
  var TIME = baseConfig.TIME;
  var isEmpty = !data || data.length === 0;
  (0,react.useLayoutEffect)(function () {
    var _EchartsRef$current;
    var options = getOptions({
      data: data,
      baseConfig: baseConfig,
      chartConfig: chartConfig
    });
    setOptions(options);
    if (EchartsRef !== null && EchartsRef !== void 0 && (_EchartsRef$current = EchartsRef.current) !== null && _EchartsRef$current !== void 0 && _EchartsRef$current.getEchartsInstance()) {
      var _EchartsRef$current2, _EchartsRef$current2$;
      EchartsRef === null || EchartsRef === void 0 ? void 0 : (_EchartsRef$current2 = EchartsRef.current) === null || _EchartsRef$current2 === void 0 ? void 0 : (_EchartsRef$current2$ = _EchartsRef$current2.getEchartsInstance()) === null || _EchartsRef$current2$ === void 0 ? void 0 : _EchartsRef$current2$.setOption(options, true);
    }
  }, [data]);
  var hanleChangeLegend = (0,react.useCallback)(function (obj) {
    var _chartConfig$find, _newOptions$series, _newOptions$series2, _newOptions$series2$i;
    var selectedKeys = obj !== null && obj !== void 0 && obj.selected ? Object.entries(obj === null || obj === void 0 ? void 0 : obj.selected).filter(function (_ref) {
      var _ref2 = slicedToArray_default()(_ref, 2),
        key = _ref2[0],
        val = _ref2[1];
      return val;
    }).map(function (item) {
      return item === null || item === void 0 ? void 0 : item[0];
    }) : [];
    setCurrentSelectedLegend(selectedKeys);
    var options = getOptions({
      data: data,
      baseConfig: baseConfig,
      chartConfig: chartConfig
    });
    setOptions(options);
    if (!HAS_TOP_LABEL) return;
    var selected = obj.selected;
    var barList = chartConfig.filter(function (item) {
      return item.type === 'bar';
    });
    var currentList = Object.entries(selected).filter(function (_ref3) {
      var _ref4 = slicedToArray_default()(_ref3, 2),
        key = _ref4[0],
        val = _ref4[1];
      return val;
    }).map(function (item) {
      return item === null || item === void 0 ? void 0 : item[0];
    }).filter(Boolean);
    var currentBarList = lodash_default().intersection(barList === null || barList === void 0 ? void 0 : barList.map(function (item) {
      return item.name;
    }), currentList).filter(Boolean);
    var topKey = (_chartConfig$find = chartConfig.find(function (item) {
      return item.name === TOTAL_NAME;
    })) === null || _chartConfig$find === void 0 ? void 0 : _chartConfig$find.dataKey;
    var otherKeyList = currentBarList.map(function (item) {
      var _chartConfig$find2;
      return chartConfig === null || chartConfig === void 0 ? void 0 : (_chartConfig$find2 = chartConfig.find(function (ele) {
        return (ele === null || ele === void 0 ? void 0 : ele.name) == item;
      })) === null || _chartConfig$find2 === void 0 ? void 0 : _chartConfig$find2.dataKey;
    });
    var newData = (toConsumableArray_default()(data) || []).map(function (item) {
      var _total;
      var total = 0;
      otherKeyList.forEach(function (ele) {
        total = total + (Number(item === null || item === void 0 ? void 0 : item[ele]) || 0);
      });
      return objectSpread2_default()(objectSpread2_default()({}, item), {}, defineProperty_default()({}, topKey, total ? (+((_total = total) === null || _total === void 0 ? void 0 : _total.toFixed(2))).toLocaleString() : 0));
    });
    var newOptions = lodash_default().cloneDeep(getOptions({
      data: newData,
      baseConfig: baseConfig,
      chartConfig: chartConfig
    }));
    var index = newOptions === null || newOptions === void 0 ? void 0 : (_newOptions$series = newOptions.series) === null || _newOptions$series === void 0 ? void 0 : _newOptions$series.findIndex(function (item) {
      return item.isTopFlag;
    });
    if (newOptions !== null && newOptions !== void 0 && (_newOptions$series2 = newOptions.series) !== null && _newOptions$series2 !== void 0 && (_newOptions$series2$i = _newOptions$series2[index]) !== null && _newOptions$series2$i !== void 0 && _newOptions$series2$i.series) {
      var _EchartsRef$current3, _EchartsRef$current3$;
      // @ts-ignore
      newOptions.series[index].series.label.formatter = function (item) {
        var newObj = newData.find(function (ele) {
          var _item$data;
          return ele[TIME] === (item === null || item === void 0 ? void 0 : (_item$data = item.data) === null || _item$data === void 0 ? void 0 : _item$data[TIME]);
        });
        return (newObj === null || newObj === void 0 ? void 0 : newObj[topKey]) || '';
      };
      setOptions(newOptions);
      EchartsRef === null || EchartsRef === void 0 ? void 0 : (_EchartsRef$current3 = EchartsRef.current) === null || _EchartsRef$current3 === void 0 ? void 0 : (_EchartsRef$current3$ = _EchartsRef$current3.getEchartsInstance()) === null || _EchartsRef$current3$ === void 0 ? void 0 : _EchartsRef$current3$.setOption(newOptions);
    }
  }, [data]);
  var onEvents = {
    legendselectchanged: hanleChangeLegend
  };
  return /*#__PURE__*/(0,jsx_runtime.jsx)(react.Fragment, {
    children: isEmpty ? /*#__PURE__*/(0,jsx_runtime.jsx)(empty/* default */.Z, {
      style: {
        height: (_style$height = style === null || style === void 0 ? void 0 : style.height) !== null && _style$height !== void 0 ? _style$height : 300,
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        flexDirection: 'column'
      }
    }) : /*#__PURE__*/(0,jsx_runtime.jsx)(esm/* default */.Z, {
      option: options,
      style: style,
      onEvents: onEvents,
      ref: EchartsRef
    })
  });
};
/* harmony default export */ var ECharts_StackChart = (StackChart);
// EXTERNAL MODULE: ./src/components/Charts/ECharts/index.tsx
var ECharts = __webpack_require__(76983);
// EXTERNAL MODULE: ./node_modules/echarts-stat/index.js
var echarts_stat = __webpack_require__(78448);
var echarts_stat_default = /*#__PURE__*/__webpack_require__.n(echarts_stat);
;// CONCATENATED MODULE: ./src/components/Charts/ECharts/ScatterChart/chart.less?modules
// extracted by mini-css-extract-plugin
/* harmony default export */ var ScatterChart_chartmodules = ({"tooltipBox":"tooltipBox___UmZPf","timeContent":"timeContent___WXK3T","time":"time___EXlzZ","hr":"hr___CG8Ly","contrastContent":"contrastContent___vPC6c","title":"title___z_xru","content":"content___E7nGb","contentCenter":"contentCenter___EmYq3","left":"left___ouq4w","rect":"rect___g7ND2","line":"line___CsGnm","right":"right___Mk7Hp","bold":"bold___Jclyv"});
;// CONCATENATED MODULE: ./src/components/Charts/ECharts/ScatterChart/utils.tsx
/* eslint-disable no-useless-escape */

var utils_formatNumber = function formatNumber(_ref) {
  var number = _ref.number,
    _ref$isPercent = _ref.isPercent,
    isPercent = _ref$isPercent === void 0 ? true : _ref$isPercent;
  if (number == 0) return 0;
  if (number == undefined) return '--';
  if (!number) return '--';
  if (isPercent) {
    var _haveDecimal = /\\./.test((number * 100).toString());
    return _haveDecimal ? (Number(number) * 100).toFixed(2) : number * 100;
  }
  var haveDecimal = /\\./.test(number.toString());
  return haveDecimal ? Number(number).toFixed(2) : number;
};
var utils_defaultFormatColor = function defaultFormatColor(_ref2) {
  var formatColor = _ref2.formatColor,
    value = _ref2.value,
    BASE_CONFIG = _ref2.BASE_CONFIG;
  var hasFormatColor = formatColor && typeof formatColor === 'function';
  var valueColor = '';
  if (hasFormatColor) {
    valueColor = formatColor(value);
  } else {
    valueColor = value == 0 || value == '0.00' ? BASE_CONFIG.BLACK : value > 0 ? BASE_CONFIG.RED : BASE_CONFIG.GREEN;
  }
  return valueColor;
};
var ScatterChart_utils_BASE_CONFIG = {
  // \u65F6\u95F4\u7684\u5B57\u6BB5
  TIME: 'time',
  // \u5408\u8BA1\u7684\u5B57\u6BB5
  TOTAL: 'total',
  // x\u8F74\u65F6\u95F4\u683C\u5F0F\u5316
  XAXIS_FORMATE_TIME: 'YYYY-MM\u6708',
  // tooltip \u65F6\u95F4\u683C\u5F0F\u5316
  TOOLTIP_TIME_FORMAT: 'YYYY-MM\u6708',
  TOOLTIP_WIDTH: 320,
  TOOLTIP_HEIGHT: 350,
  // tooltip \u6570\u503C\u683C\u5F0F\u5316\u989C\u8272
  BLACK: '#2A303B',
  RED: '#E62C3B',
  GREEN: '#0FBE3F',
  TOOLTIP_SHADOW_COLOR: '#F0F6FF',
  XAXIS_NAME: '',
  YAXIS_NAME: '',
  // \u6298\u7EBF\u6837\u5F0F
  LINE_SERIES: {
    type: 'line',
    smooth: true,
    symbol: 'none',
    showSymbol: false,
    yAxisIndex: 1,
    itemStyle: {
      normal: {
        color: '#3376B5'
      }
    }
  },
  BAR_SERIES: {
    type: 'bar',
    stack: 'sum',
    barWidth: '20px'
  },
  SCATTER_SERIES: {
    type: 'scatter',
    emphasis: {
      label: {
        show: false
      },
      itemStyle: {
        color: 'rgba(2,119,249,0.8)',
        shadowColor: '0px 0px 8px 0px rgba(2,119,249,0.46)'
      }
    }
  },
  GRID_CONFIG: {},
  GET_LEGEND_FN: function GET_LEGEND_FN(item, data) {
    var _item$legendSuffix;
    var name = "".concat(item.name).concat((_item$legendSuffix = item === null || item === void 0 ? void 0 : item.legendSuffix) !== null && _item$legendSuffix !== void 0 ? _item$legendSuffix : '');
    return {
      name: name,
      // icon: item?.shape,
      icon: (item === null || item === void 0 ? void 0 : item.shape) === 'rect' ? 'path://M80,80,h80,v80,h-80Z' : item === null || item === void 0 ? void 0 : item.shape
    };
  },
  RENDER_TOOLTIP_FN: function RENDER_TOOLTIP_FN(data) {
    return data;
  }
};
var utils_renderTooltip = function renderTooltip(data) {
  var _data$ = data[0],
    total = _data$.total,
    time = _data$.time,
    width = _data$.width,
    height = _data$.height;
  return "\\n  <div class=\\"".concat(ScatterChart_chartmodules.tooltipBox, "\\" style=\\"--width:").concat(width, ";--height:").concat(height, ";marginLeft: 100px\\">\\n        <div>\\n          <div class=\\"").concat(ScatterChart_chartmodules.contrastContent, "\\">\\n            ").concat(data.map(function (item) {
    var _item$unitSymbol;
    var left = item.shape ? "<div class=\\"".concat(ScatterChart_chartmodules[item.shape], "\\" style=\\"--color:").concat(item.shapeColor, "\\"></div>") : '';
    var currentValue = item !== null && item !== void 0 && item.format ? item.format(item.value) : item.value;
    var isBold = item !== null && item !== void 0 && item.isBold ? ScatterChart_chartmodules.isBold : undefined;
    var isOnly = item !== null && item !== void 0 && item.isOnly ? ScatterChart_chartmodules.contentCenter : ScatterChart_chartmodules.content;
    var Hr = item.hasHr ? "<div class=\\"".concat(ScatterChart_chartmodules.hr, "\\"></div>") : '';
    return "\\n                <div class=\\"".concat(isOnly, "\\">\\n                  <div class=\\"").concat(ScatterChart_chartmodules.left, " ").concat(isBold, "\\">\\n                  ").concat(left, "\\n                  <div class=\\"").concat(ScatterChart_chartmodules.text, " ").concat(isBold, " ").concat(item === null || item === void 0 ? void 0 : item.leftClassName, "\\">").concat(item.name, "</div>\\n                  </div>\\n                  <div class=\\"").concat(ScatterChart_chartmodules.right, " ").concat(isBold, " ").concat(item === null || item === void 0 ? void 0 : item.rightClassName, "\\" style=\\"--color:").concat(item === null || item === void 0 ? void 0 : item.valueColor, ";\\">\\n                    ").concat(currentValue, " ").concat((_item$unitSymbol = item === null || item === void 0 ? void 0 : item.unitSymbol) !== null && _item$unitSymbol !== void 0 ? _item$unitSymbol : '', "\\n                    </div>\\n                </div>\\n                ").concat(Hr, "\\n              ");
  }).join(''), "\\n          </div>\\n  ");
};
;// CONCATENATED MODULE: ./src/components/Charts/ECharts/ScatterChart/chart.tsx





var chart_getOptions = function getOptions(config) {
  var _config$data = config.data,
    _data = _config$data === void 0 ? [] : _config$data,
    _config$baseConfig = config.baseConfig,
    baseConfig = _config$baseConfig === void 0 ? {} : _config$baseConfig,
    _config$chartConfig = config.chartConfig,
    chartConfig = _config$chartConfig === void 0 ? [] : _config$chartConfig;
  var BASE_CONFIG = objectSpread2_default()(objectSpread2_default()({}, ScatterChart_utils_BASE_CONFIG), baseConfig);
  var CHART_CONFIG = toConsumableArray_default()(chartConfig);
  var DATA = _data.map(function (item) {
    return chartConfig.map(function (ele) {
      return item[ele.dataKey];
    });
  });
  // See https://github.com/ecomfe/echarts-stat
  var myRegression = echarts_stat_default().regression('linear', DATA, 0);
  myRegression.points.sort(function (a, b) {
    return a[0] - b[0];
  });
  return {
    axisPointer: {
      type: 'cross',
      axis: 'radius',
      link: {
        xAxisIndex: 'all'
      },
      lineStyle: {
        type: 'dashed'
      },
      label: {
        backgroundColor: 'black',
        color: '#fff'
      }
    },
    legend: {
      type: 'scroll',
      z: 999999,
      textStyle: {
        color: '#5B6371',
        fontSize: 12,
        fontWeight: 400
      },
      orient: 'horizontal',
      show: true,
      bottom: 0,
      itemGap: 30,
      data: CHART_CONFIG.filter(function (item) {
        return item.isLegend;
      }).map(function (item) {
        return BASE_CONFIG.GET_LEGEND_FN(item, DATA);
      })
    },
    grid: objectSpread2_default()({
      top: '10%',
      left: '2%',
      right: '4%',
      bottom: '15%',
      containLabel: true
    }, BASE_CONFIG.GRID_CONFIG),
    yAxis: {
      type: 'value',
      name: BASE_CONFIG.YAXIS_NAME,
      nameLocation: 'end',
      nameTextStyle: {
        fontSize: 12,
        padding: [0, 0, 0, 15],
        color: '#B3BBc2'
      },
      position: 'left',
      show: true,
      axisLabel: {
        textStyle: {
          color: '#5B6371 ',
          fontSize: 12,
          fontWeight: 400
        }
        // formatter: (value: number) => ~~Number(value),
      },

      splitLine: {
        show: true,
        lineStyle: {
          width: 1,
          color: 'rgba(239,241,244,1)'
        }
      },
      axisLine: {
        lineStyle: {
          // color: 'transparent',
        }
      }
    },
    xAxis: {
      type: 'value',
      min: 'dataMin',
      max: 'dataMax',
      name: BASE_CONFIG.XAXIS_NAME,
      nameLocation: 'end',
      nameTextStyle: {
        align: 'right',
        verticalAlign: 'top',
        fontSize: 12,
        padding: [30, 5, 0, 0],
        color: '#B3BBC2'
      },
      nameGap: 0,
      boundaryGap: true,
      alignWithLabel: true,
      axisLine: {
        lineStyle: {
          color: '#CACED7'
        }
      },
      axisLabel: {
        textStyle: {
          color: '#5B6371 ',
          fontSize: 12,
          fontWeight: 400
        },
        interval: 0,
        // formatter: (value: number) => ~~Number(value),
        // formatter: (v: string) => {
        //   const values = v?.split('-');
        //   if (!Array.isArray(values)) return '--';
        //   if (values?.length === 0) return '--';
        //   return [\`{a|\${values[1]}}\`, \`{b|\${values[0]}}\`].join('\\n');
        // },
        rich: {
          a: {
            fontSize: 12,
            fontFamily: 'PingFangSC-Regular, PingFang SC',
            fontWeight: 400,
            color: '#5B6371',
            lineHeight: 12
          },
          b: {
            fontSize: 10,
            fontFamily: 'PingFangSC-Regular, PingFang SC',
            fontWeight: 400,
            color: '#B3B8C2',
            lineHeight: 20
          }
        }
      },
      splitLine: {
        show: true,
        lineStyle: {
          type: 'dashed',
          //\u9ED8\u8BA4\u5B9E\u7EBF\uFF0Cdashed\u865A\u7EBF
          width: 1,
          color: 'transparent'
        }
      },
      axisTick: {
        alignWithLabel: true
      },
      data: DATA.map(function (item) {
        return dayjs_min_default()(item[BASE_CONFIG.TIME]).format(BASE_CONFIG.XAXIS_FORMATE_TIME);
      })
    },
    series: CHART_CONFIG.filter(function (item) {
      return Boolean(item.isSeries);
    }).map(function (item) {
      var _item$legendSuffix;
      var name = "".concat(item.name).concat((_item$legendSuffix = item === null || item === void 0 ? void 0 : item.legendSuffix) !== null && _item$legendSuffix !== void 0 ? _item$legendSuffix : '');
      var customSeries = {
        line: BASE_CONFIG.LINE_SERIES,
        bar: BASE_CONFIG.BAR_SERIES,
        scatter: BASE_CONFIG.SCATTER_SERIES
      };
      var customProps = customSeries[item.type];
      if (item.type === 'line') return {
        name: 'line',
        type: 'line',
        symbol: 'none',
        showSymbol: false,
        lineStyle: {
          color: item.shapeColor
        },
        itemStyle: {
          color: item.shapeColor
        },
        textStyle: {
          color: 'transparent',
          fontSize: 12,
          fontWeight: 400
        },
        data: myRegression.points
      };
      return objectSpread2_default()(objectSpread2_default()(objectSpread2_default()({}, item), customProps), {}, {
        name: name,
        lineStyle: {
          color: item.shapeColor
        },
        itemStyle: {
          color: item.shapeColor
        },
        textStyle: {
          color: 'transparent',
          fontSize: 12,
          fontWeight: 400
        },
        symbol: 'circle',
        symbolSize: 8,
        label: {
          show: false,
          rotate: 0,
          position: 'top',
          distance: -10,
          textStyle: {
            color: '#5B6371',
            fontSize: 12,
            fontWeight: 400
          },
          formatter: function formatter(config) {
            var _item$unitSymbol;
            return utils_formatNumber({
              number: config.data[item.dataKey]
            }) + ((_item$unitSymbol = item === null || item === void 0 ? void 0 : item.unitSymbol) !== null && _item$unitSymbol !== void 0 ? _item$unitSymbol : '');
          }
        },
        data: DATA
      }, item.series || {});
    }),
    tooltip: {
      trigger: 'axis',
      renderMode: 'html',
      axisPointer: {
        type: 'shadow',
        shadowStyle: {
          color: BASE_CONFIG.TOOLTIP_SHADOW_COLOR,
          opacity: 0.2
        }
      },
      backgroundColor: '#transparent',
      borderColor: 'transparent',
      confine: true,
      formatter: function formatter(params) {
        var _arr$;
        var arr = params.sort(function (a, b) {
          return a.seriesIndex - b.seriesIndex;
        });
        var time = dayjs_min_default()(arr[0].data[BASE_CONFIG.TIME]).format(BASE_CONFIG.TOOLTIP_TIME_FORMAT);
        var total = (_arr$ = arr[0]) === null || _arr$ === void 0 ? void 0 : _arr$.data[BASE_CONFIG.TOTAL];
        var defaultDataObj = arr[0].data;
        var defaultConfig = {
          time: time,
          total: total
        };
        var newArr = CHART_CONFIG.filter(function (item) {
          return Boolean(!item.isTopFlag);
        }).map(function (item, index) {
          var _value;
          var value = defaultDataObj[item.dataKey];
          value = (_value = value) !== null && _value !== void 0 ? _value : item.type === 'line' ? 0.0 : undefined;
          return objectSpread2_default()(objectSpread2_default()(objectSpread2_default()({}, item), defaultConfig), {}, {
            valueColor: utils_defaultFormatColor(objectSpread2_default()(objectSpread2_default()({}, item), {}, {
              value: value,
              BASE_CONFIG: BASE_CONFIG
            })),
            value: arr[0].value[index],
            width: BASE_CONFIG.TOOLTIP_WIDTH,
            height: BASE_CONFIG.TOOLTIP_HEIGHT
          });
        });
        return utils_renderTooltip(BASE_CONFIG.RENDER_TOOLTIP_FN(newArr));
      }
    }
  };
};
;// CONCATENATED MODULE: ./src/components/Charts/ECharts/ScatterChart/index.tsx






var ScatterChart_StackChart = function StackChart(props) {
  var data = props.data,
    _props$baseConfig = props.baseConfig,
    baseConfig = _props$baseConfig === void 0 ? ScatterChart_utils_BASE_CONFIG : _props$baseConfig,
    _props$chartConfig = props.chartConfig,
    chartConfig = _props$chartConfig === void 0 ? {} : _props$chartConfig;
  var isEmpty = !data || data.length === 0;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(react.Fragment, {
    children: isEmpty ? /*#__PURE__*/(0,jsx_runtime.jsx)(empty/* default */.Z, {
      style: {
        height: 300,
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        flexDirection: 'column'
      }
    }) : /*#__PURE__*/(0,jsx_runtime.jsx)(ECharts/* default */.Z, {
      option: chart_getOptions({
        data: data,
        baseConfig: baseConfig,
        chartConfig: chartConfig
      })
    })
  });
};
/* harmony default export */ var ScatterChart = (ScatterChart_StackChart);
// EXTERNAL MODULE: ./node_modules/antd/es/row/index.js
var row = __webpack_require__(71230);
// EXTERNAL MODULE: ./node_modules/antd/es/col/index.js
var col = __webpack_require__(15746);
;// CONCATENATED MODULE: ./src/pages/Charts/ECharts/Charts/chart.tsx


var formatMoney = function formatMoney(val) {
  if (lodash_default().isNil(val)) return '--';
  if (!lodash_default().isNumber(val)) return val;
  var value = formatNumber(val, false);
  return Number(value).toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
};
var getChartConfig = function getChartConfig(data) {
  return [{
    name: '1111',
    dataKey: 'pureCommis',
    isLegend: true,
    isSeries: true,
    unitSymbol: '\u4E07',
    shape: 'rect',
    type: 'bar',
    isBold: true,
    // hasHr: true,
    shapeColor: '#5781DF',
    format: formatMoney,
    formatColor: function formatColor(val) {
      return utils_BASE_CONFIG.BLACK;
    }
  }, {
    name: '2221',
    dataKey: 'total',
    isLegend: true,
    isSeries: true,
    unitSymbol: '\u4E07',
    shape: 'rect',
    type: 'bar',
    isBold: true,
    // hasHr: true,
    shapeColor: 'pink',
    format: formatMoney,
    formatColor: function formatColor(val) {
      return utils_BASE_CONFIG.BLACK;
    }
  }];
};
var getChartConfig2 = function getChartConfig2(data) {
  return [{
    name: 'name1',
    dataKey: 'pay',
    isLegend: false,
    isSeries: true,
    unitSymbol: '\u4E07',
    shape: false,
    type: 'scatter',
    isBold: true,
    // hasHr: true,
    shapeColor: '#5781DF',
    format: formatMoney,
    formatColor: function formatColor(val) {
      return utils_BASE_CONFIG.BLACK;
    }
  }, {
    name: 'name2',
    dataKey: 'use',
    isLegend: false,
    isSeries: false,
    unitSymbol: '\u4E07',
    shape: false,
    type: 'scatter',
    isBold: true,
    // hasHr: true,
    shapeColor: 'pink',
    format: formatMoney,
    formatColor: function formatColor(val) {
      return utils_BASE_CONFIG.BLACK;
    }
  }, {
    name: '',
    dataKey: 'company',
    isLegend: false,
    isSeries: true,
    unitSymbol: '',
    shape: false,
    type: 'line',
    isOnly: true,
    isBold: true,
    hasHr: true,
    shapeColor: 'pink',
    format: formatMoney,
    formatColor: function formatColor(val) {
      return utils_BASE_CONFIG.BLACK;
    }
  }];
};
;// CONCATENATED MODULE: ./src/pages/Charts/ECharts/Charts/constant.tsx
var DATA = [{
  total: 200,
  time: '20200314',
  pureCommis: 20,
  crueCommis: 30
}, {
  total: 200,
  time: '20200414',
  pureCommis: 20,
  crueCommis: 30
}, {
  total: 200,
  time: '20200514',
  pureCommis: 20,
  crueCommis: 30
}, {
  total: 200,
  time: '20200614',
  pureCommis: 20,
  crueCommis: 30
}, {
  total: 200,
  time: '20200714',
  pureCommis: 20,
  crueCommis: 30
}, {
  total: 200,
  time: '20200814',
  pureCommis: 20,
  crueCommis: 30
}, {
  total: 200,
  time: '20200914',
  pureCommis: 20,
  crueCommis: 30
}, {
  total: 200,
  time: '20201014',
  pureCommis: 20,
  crueCommis: 30
}, {
  total: 200,
  time: '20201114',
  pureCommis: 20,
  crueCommis: 30
}, {
  total: 200,
  time: '20201214',
  pureCommis: 20,
  crueCommis: 30
}, {
  total: 200,
  time: '20200114',
  pureCommis: 20,
  crueCommis: 30
}, {
  total: 200,
  time: '20200214',
  pureCommis: 20,
  crueCommis: 30
}, {
  total: 200,
  time: '20200214',
  pureCommis: 20,
  crueCommis: 30
}, {
  total: 200,
  time: '20200314',
  pureCommis: 20,
  crueCommis: 30
}, {
  total: 200,
  time: '20210314',
  pureCommis: 20,
  crueCommis: 30
}, {
  total: 200,
  time: '20210414',
  pureCommis: 20,
  crueCommis: 30
}, {
  total: 200,
  time: '20210514',
  pureCommis: 20,
  crueCommis: 30
}, {
  total: 200,
  time: '20210614',
  pureCommis: 20,
  crueCommis: 30
}, {
  total: 200,
  time: '20210714',
  pureCommis: 20,
  crueCommis: 30
}, {
  total: 200,
  time: '20210814',
  pureCommis: 20,
  crueCommis: 30
}, {
  total: 200,
  time: '20210914',
  pureCommis: 20,
  crueCommis: 30
}, {
  total: 200,
  time: '20211014',
  pureCommis: 20,
  crueCommis: 30
}, {
  total: 200,
  time: '20211114',
  pureCommis: 20,
  crueCommis: 30
}, {
  total: 200,
  time: '20211214',
  pureCommis: 20,
  crueCommis: 30
}, {
  total: 200,
  time: '20220114',
  pureCommis: 20,
  crueCommis: 30
}, {
  total: 200,
  time: '20220214',
  pureCommis: 20,
  crueCommis: 30
}, {
  total: 200,
  time: '20230214',
  pureCommis: 20,
  crueCommis: 30
}, {
  total: 200,
  time: '20230314',
  pureCommis: 20,
  crueCommis: 30
}];
var DATA2 = [{
  pay: 30,
  use: 102,
  company: 'xxxx'
}, {
  pay: 50,
  use: 111,
  company: '\u963F\u91CC\u5DF4\u5DF4'
}, {
  pay: 60,
  use: 111,
  company: '\u963F\u91CC\u5DF4\u5DF4'
}];
;// CONCATENATED MODULE: ./src/pages/Charts/ECharts/Charts/index.tsx







var Chart = function Chart() {
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(row/* default */.Z, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
      span: 12,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(ScatterChart, {
        baseConfig: {
          GRID_CONFIG: {
            left: '1.5%',
            right: '1.5%',
            bottom: '25%'
          },
          // \u4EA4\u6362\u4F4D\u7F6E-\u516C\u53F8tooltip\u653E\u6700\u524D\u9762
          RENDER_TOOLTIP_FN: function RENDER_TOOLTIP_FN(data) {
            var _ref = [data[0], data[2]];
            data[2] = _ref[0];
            data[0] = _ref[1];
            return data;
          }
        },
        chartConfig: getChartConfig2(DATA),
        data: DATA2
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
      span: 12,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(ECharts_StackChart, {
        baseConfig: {
          GRID_CONFIG: {
            left: '1.5%',
            right: '1.5%',
            bottom: '25%'
          },
          HAS_DATA_ZOOM: true,
          HAS_DATA_ZOOM_LOCK: true,
          DATA_ZOOM_START_VALUE: '2021-03\u6708',
          DATA_ZOOM_END_VALUE: '2022-03\u6708'
        },
        chartConfig: getChartConfig(DATA),
        data: DATA
      })
    })]
  });
};
/* harmony default export */ var Charts = (Chart);
;// CONCATENATED MODULE: ./src/pages/Charts/ECharts/index.tsx

/* harmony default export */ var Charts_ECharts = (Charts);

//# sourceURL=webpack:///./src/pages/Charts/ECharts/index.tsx_+_11_modules?`)},98082:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";eval(`/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _styleChecker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31808);


/* harmony default export */ __webpack_exports__["Z"] = (() => {
  const [flexible, setFlexible] = react__WEBPACK_IMPORTED_MODULE_0__.useState(false);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    setFlexible((0,_styleChecker__WEBPACK_IMPORTED_MODULE_1__/* .detectFlexGapSupported */ .fk)());
  }, []);
  return flexible;
});

//# sourceURL=webpack:///./node_modules/antd/es/_util/hooks/useFlexGapSupport.js?`)},74443:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";eval(`/* harmony export */ __webpack_require__.d(__webpack_exports__, {
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

//# sourceURL=webpack:///./node_modules/antd/es/_util/responsiveObserver.js?`)},15746:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";eval(`/* harmony import */ var _grid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21584);

/* harmony default export */ __webpack_exports__["Z"] = (_grid__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z);

//# sourceURL=webpack:///./node_modules/antd/es/col/index.js?`)},32983:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";eval(`
// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ es_empty; }
});

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(94184);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/context.js
var context = __webpack_require__(53124);
// EXTERNAL MODULE: ./node_modules/antd/es/locale/useLocale.js
var useLocale = __webpack_require__(10110);
// EXTERNAL MODULE: ./node_modules/@ctrl/tinycolor/dist/module/index.js
var dist_module = __webpack_require__(10274);
// EXTERNAL MODULE: ./node_modules/antd/es/theme/internal.js + 2 modules
var internal = __webpack_require__(64049);
;// CONCATENATED MODULE: ./node_modules/antd/es/empty/empty.js



const Empty = () => {
  const [, token] = (0,internal/* useToken */.dQ)();
  const bgColor = new dist_module/* TinyColor */.C(token.colorBgBase);
  // Dark Theme need more dark of this
  const themeStyle = bgColor.toHsl().l < 0.5 ? {
    opacity: 0.65
  } : {};
  return /*#__PURE__*/react.createElement("svg", {
    style: themeStyle,
    width: "184",
    height: "152",
    viewBox: "0 0 184 152",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/react.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/react.createElement("g", {
    transform: "translate(24 31.67)"
  }, /*#__PURE__*/react.createElement("ellipse", {
    fillOpacity: ".8",
    fill: "#F5F5F7",
    cx: "67.797",
    cy: "106.89",
    rx: "67.797",
    ry: "12.668"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z",
    fill: "#AEB8C2"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M101.537 86.214L80.63 61.102c-1.001-1.207-2.507-1.867-4.048-1.867H31.724c-1.54 0-3.047.66-4.048 1.867L6.769 86.214v13.792h94.768V86.214z",
    fill: "url(#linearGradient-1)",
    transform: "translate(13.56)"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z",
    fill: "#F5F5F7"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z",
    fill: "#DCE0E6"
  })), /*#__PURE__*/react.createElement("path", {
    d: "M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z",
    fill: "#DCE0E6"
  }), /*#__PURE__*/react.createElement("g", {
    transform: "translate(149.65 15.383)",
    fill: "#FFF"
  }, /*#__PURE__*/react.createElement("ellipse", {
    cx: "20.654",
    cy: "3.167",
    rx: "2.849",
    ry: "2.815"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z"
  }))));
};
if (false) {}
/* harmony default export */ var empty = (Empty);
;// CONCATENATED MODULE: ./node_modules/antd/es/empty/simple.js




const Simple = () => {
  const [, token] = (0,internal/* useToken */.dQ)();
  const {
    colorFill,
    colorFillTertiary,
    colorFillQuaternary,
    colorBgContainer
  } = token;
  const {
    borderColor,
    shadowColor,
    contentColor
  } = (0,react.useMemo)(() => ({
    borderColor: new dist_module/* TinyColor */.C(colorFill).onBackground(colorBgContainer).toHexShortString(),
    shadowColor: new dist_module/* TinyColor */.C(colorFillTertiary).onBackground(colorBgContainer).toHexShortString(),
    contentColor: new dist_module/* TinyColor */.C(colorFillQuaternary).onBackground(colorBgContainer).toHexShortString()
  }), [colorFill, colorFillTertiary, colorFillQuaternary, colorBgContainer]);
  return /*#__PURE__*/react.createElement("svg", {
    width: "64",
    height: "41",
    viewBox: "0 0 64 41",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/react.createElement("g", {
    transform: "translate(0 1)",
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/react.createElement("ellipse", {
    fill: shadowColor,
    cx: "32",
    cy: "33",
    rx: "32",
    ry: "7"
  }), /*#__PURE__*/react.createElement("g", {
    fillRule: "nonzero",
    stroke: borderColor
  }, /*#__PURE__*/react.createElement("path", {
    d: "M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z",
    fill: contentColor
  }))));
};
if (false) {}
/* harmony default export */ var simple = (Simple);
// EXTERNAL MODULE: ./node_modules/antd/es/theme/util/genComponentStyleHook.js
var genComponentStyleHook = __webpack_require__(67968);
// EXTERNAL MODULE: ./node_modules/antd/es/theme/util/statistic.js
var statistic = __webpack_require__(45503);
;// CONCATENATED MODULE: ./node_modules/antd/es/empty/style/index.js

// ============================== Shared ==============================
const genSharedEmptyStyle = token => {
  const {
    componentCls,
    margin,
    marginXS,
    marginXL,
    fontSize,
    lineHeight
  } = token;
  return {
    [componentCls]: {
      marginInline: marginXS,
      fontSize,
      lineHeight,
      textAlign: 'center',
      // \u539F\u6765 &-image \u6CA1\u6709\u7236\u5B50\u7ED3\u6784\uFF0C\u73B0\u5728\u4E3A\u4E86\u5916\u5C42\u627F\u62C5\u6211\u4EEC\u7684hashId\uFF0C\u6539\u6210\u7236\u5B50\u7ED3\u679C
      [\`\${componentCls}-image\`]: {
        height: token.emptyImgHeight,
        marginBottom: marginXS,
        opacity: token.opacityImage,
        img: {
          height: '100%'
        },
        svg: {
          maxWidth: '100%',
          height: '100%',
          margin: 'auto'
        }
      },
      [\`\${componentCls}-description\`]: {
        color: token.colorText
      },
      // \u539F\u6765 &-footer \u6CA1\u6709\u7236\u5B50\u7ED3\u6784\uFF0C\u73B0\u5728\u4E3A\u4E86\u5916\u5C42\u627F\u62C5\u6211\u4EEC\u7684hashId\uFF0C\u6539\u6210\u7236\u5B50\u7ED3\u679C
      [\`\${componentCls}-footer\`]: {
        marginTop: margin
      },
      '&-normal': {
        marginBlock: marginXL,
        color: token.colorTextDisabled,
        [\`\${componentCls}-description\`]: {
          color: token.colorTextDisabled
        },
        [\`\${componentCls}-image\`]: {
          height: token.emptyImgHeightMD
        }
      },
      '&-small': {
        marginBlock: marginXS,
        color: token.colorTextDisabled,
        [\`\${componentCls}-image\`]: {
          height: token.emptyImgHeightSM
        }
      }
    }
  };
};
// ============================== Export ==============================
/* harmony default export */ var style = ((0,genComponentStyleHook/* default */.Z)('Empty', token => {
  const {
    componentCls,
    controlHeightLG
  } = token;
  const emptyToken = (0,statistic/* merge */.TS)(token, {
    emptyImgCls: \`\${componentCls}-img\`,
    emptyImgHeight: controlHeightLG * 2.5,
    emptyImgHeightMD: controlHeightLG,
    emptyImgHeightSM: controlHeightLG * 0.875
  });
  return [genSharedEmptyStyle(emptyToken)];
}));
;// CONCATENATED MODULE: ./node_modules/antd/es/empty/index.js
var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};







const defaultEmptyImg = /*#__PURE__*/react.createElement(empty, null);
const simpleEmptyImg = /*#__PURE__*/react.createElement(simple, null);
const empty_Empty = _a => {
  var {
      className,
      rootClassName,
      prefixCls: customizePrefixCls,
      image = defaultEmptyImg,
      description,
      children,
      imageStyle
    } = _a,
    restProps = __rest(_a, ["className", "rootClassName", "prefixCls", "image", "description", "children", "imageStyle"]);
  const {
    getPrefixCls,
    direction
  } = react.useContext(context/* ConfigContext */.E_);
  const prefixCls = getPrefixCls('empty', customizePrefixCls);
  const [wrapSSR, hashId] = style(prefixCls);
  const [locale] = (0,useLocale/* default */.Z)('Empty');
  const des = typeof description !== 'undefined' ? description : locale === null || locale === void 0 ? void 0 : locale.description;
  const alt = typeof des === 'string' ? des : 'empty';
  let imageNode = null;
  if (typeof image === 'string') {
    imageNode = /*#__PURE__*/react.createElement("img", {
      alt: alt,
      src: image
    });
  } else {
    imageNode = image;
  }
  return wrapSSR( /*#__PURE__*/react.createElement("div", Object.assign({
    className: classnames_default()(hashId, prefixCls, {
      [\`\${prefixCls}-normal\`]: image === simpleEmptyImg,
      [\`\${prefixCls}-rtl\`]: direction === 'rtl'
    }, className, rootClassName)
  }, restProps), /*#__PURE__*/react.createElement("div", {
    className: \`\${prefixCls}-image\`,
    style: imageStyle
  }, imageNode), des && /*#__PURE__*/react.createElement("div", {
    className: \`\${prefixCls}-description\`
  }, des), children && /*#__PURE__*/react.createElement("div", {
    className: \`\${prefixCls}-footer\`
  }, children)));
};
empty_Empty.PRESENTED_IMAGE_DEFAULT = defaultEmptyImg;
empty_Empty.PRESENTED_IMAGE_SIMPLE = simpleEmptyImg;
if (false) {}
/* harmony default export */ var es_empty = (empty_Empty);

//# sourceURL=webpack:///./node_modules/antd/es/empty/index.js_+_3_modules?`)},99134:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";eval(`/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);

const RowContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
/* harmony default export */ __webpack_exports__["Z"] = (RowContext);

//# sourceURL=webpack:///./node_modules/antd/es/grid/RowContext.js?`)},21584:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";eval(`/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94184);
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

//# sourceURL=webpack:///./node_modules/antd/es/grid/col.js?`)},92820:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";eval(`/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94184);
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

//# sourceURL=webpack:///./node_modules/antd/es/grid/row.js?`)},6999:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";eval(`/* harmony export */ __webpack_require__.d(__webpack_exports__, {
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

//# sourceURL=webpack:///./node_modules/antd/es/grid/style/index.js?`)},71230:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";eval(`/* harmony import */ var _grid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92820);

/* harmony default export */ __webpack_exports__["Z"] = (_grid__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z);

//# sourceURL=webpack:///./node_modules/antd/es/row/index.js?`)},27484:function(module){eval(`!function(t,e){ true?module.exports=e():0}(this,(function(){"use strict";var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",s="minute",u="hour",a="day",o="week",f="month",h="quarter",c="year",d="date",l="Invalid Date",$=/^(\\d{4})[-/]?(\\d{1,2})?[-/]?(\\d{0,2})[Tt\\s]*(\\d{1,2})?:?(\\d{1,2})?:?(\\d{1,2})?[.:]?(\\d+)?$/,y=/\\[([^\\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,M={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},m=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},v={s:m,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+m(r,2,"0")+":"+m(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,f),s=n-i<0,u=e.clone().add(r+(s?-1:1),f);return+(-(r+(n-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:f,y:c,w:o,d:a,D:d,h:u,m:s,s:i,ms:r,Q:h}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},g="en",D={};D[g]=M;var p=function(t){return t instanceof _},S=function t(e,n,r){var i;if(!e)return g;if("string"==typeof e){var s=e.toLowerCase();D[s]&&(i=s),n&&(D[s]=n,i=s);var u=e.split("-");if(!i&&u.length>1)return t(u[0])}else{var a=e.name;D[a]=e,i=a}return!r&&i&&(g=i),i||!r&&g},w=function(t,e){if(p(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new _(n)},O=v;O.l=S,O.i=p,O.w=function(t,e){return w(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var _=function(){function M(t){this.$L=S(t.locale,null,!0),this.parse(t)}var m=M.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(O.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match($);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},m.$utils=function(){return O},m.isValid=function(){return!(this.$d.toString()===l)},m.isSame=function(t,e){var n=w(t);return this.startOf(e)<=n&&n<=this.endOf(e)},m.isAfter=function(t,e){return w(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<w(t)},m.$g=function(t,e,n){return O.u(t)?this[e]:this.set(n,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,e){var n=this,r=!!O.u(e)||e,h=O.p(t),l=function(t,e){var i=O.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(a)},$=function(t,e){return O.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},y=this.$W,M=this.$M,m=this.$D,v="set"+(this.$u?"UTC":"");switch(h){case c:return r?l(1,0):l(31,11);case f:return r?l(1,M):l(0,M+1);case o:var g=this.$locale().weekStart||0,D=(y<g?y+7:y)-g;return l(r?m-D:m+(6-D),M);case a:case d:return $(v+"Hours",0);case u:return $(v+"Minutes",1);case s:return $(v+"Seconds",2);case i:return $(v+"Milliseconds",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(t,e){var n,o=O.p(t),h="set"+(this.$u?"UTC":""),l=(n={},n[a]=h+"Date",n[d]=h+"Date",n[f]=h+"Month",n[c]=h+"FullYear",n[u]=h+"Hours",n[s]=h+"Minutes",n[i]=h+"Seconds",n[r]=h+"Milliseconds",n)[o],$=o===a?this.$D+(e-this.$W):e;if(o===f||o===c){var y=this.clone().set(d,1);y.$d[l]($),y.init(),this.$d=y.set(d,Math.min(this.$D,y.daysInMonth())).$d}else l&&this.$d[l]($);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[O.p(t)]()},m.add=function(r,h){var d,l=this;r=Number(r);var $=O.p(h),y=function(t){var e=w(l);return O.w(e.date(e.date()+Math.round(t*r)),l)};if($===f)return this.set(f,this.$M+r);if($===c)return this.set(c,this.$y+r);if($===a)return y(1);if($===o)return y(7);var M=(d={},d[s]=e,d[u]=n,d[i]=t,d)[$]||1,m=this.$d.getTime()+r*M;return O.w(m,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||l;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=O.z(this),s=this.$H,u=this.$m,a=this.$M,o=n.weekdays,f=n.months,h=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].slice(0,s)},c=function(t){return O.s(s%12||12,t,"0")},d=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},$={YY:String(this.$y).slice(-2),YYYY:O.s(this.$y,4,"0"),M:a+1,MM:O.s(a+1,2,"0"),MMM:h(n.monthsShort,a,f,3),MMMM:h(f,a),D:this.$D,DD:O.s(this.$D,2,"0"),d:String(this.$W),dd:h(n.weekdaysMin,this.$W,o,2),ddd:h(n.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:O.s(s,2,"0"),h:c(1),hh:c(2),a:d(s,u,!0),A:d(s,u,!1),m:String(u),mm:O.s(u,2,"0"),s:String(this.$s),ss:O.s(this.$s,2,"0"),SSS:O.s(this.$ms,3,"0"),Z:i};return r.replace(y,(function(t,e){return e||$[t]||i.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(r,d,l){var $,y=O.p(d),M=w(r),m=(M.utcOffset()-this.utcOffset())*e,v=this-M,g=O.m(this,M);return g=($={},$[c]=g/12,$[f]=g,$[h]=g/3,$[o]=(v-m)/6048e5,$[a]=(v-m)/864e5,$[u]=v/n,$[s]=v/e,$[i]=v/t,$)[y]||v,l?g:O.a(g)},m.daysInMonth=function(){return this.endOf(f).$D},m.$locale=function(){return D[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=S(t,e,!0);return r&&(n.$L=r),n},m.clone=function(){return O.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},M}(),T=_.prototype;return w.prototype=T,[["$ms",r],["$s",i],["$m",s],["$H",u],["$W",a],["$M",f],["$y",c],["$D",d]].forEach((function(t){T[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),w.extend=function(t,e){return t.$i||(t(e,_,w),t.$i=!0),w},w.locale=S,w.isDayjs=p,w.unix=function(t){return w(1e3*t)},w.en=D[g],w.Ls=D,w.p={},w}));

//# sourceURL=webpack:///./node_modules/dayjs/dayjs.min.js?`)},96063:function(module){eval(`(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __nested_webpack_require_527__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_527__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__nested_webpack_require_527__.m = modules;

/******/ 	// expose the module cache
/******/ 	__nested_webpack_require_527__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__nested_webpack_require_527__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __nested_webpack_require_527__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __nested_webpack_require_1728__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {

	    return {

	        clustering: __nested_webpack_require_1728__(1),
	        regression: __nested_webpack_require_1728__(5),
	        statistics: __nested_webpack_require_1728__(6),
	        histogram: __nested_webpack_require_1728__(15),

	        transform: {
	            regression: __nested_webpack_require_1728__(18),
	            histogram: __nested_webpack_require_1728__(21),
	            clustering: __nested_webpack_require_1728__(22)
	        }

	    };

	}.call(exports, __nested_webpack_require_1728__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 1 */
/***/ (function(module, exports, __nested_webpack_require_2436__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {

	    var dataProcess = __nested_webpack_require_2436__(2);
	    var dataPreprocess = dataProcess.dataPreprocess;
	    var normalizeDimensions = dataProcess.normalizeDimensions;
	    var arrayUtil = __nested_webpack_require_2436__(3);
	    var numberUtil = __nested_webpack_require_2436__(4);
	    var arraySize = arrayUtil.size;
	    var sumOfColumn = arrayUtil.sumOfColumn;
	    var arraySum = arrayUtil.sum;
	    var zeros = arrayUtil.zeros;
	    // var isArray = arrayUtil.isArray;
	    var numberUtil = __nested_webpack_require_2436__(4);
	    var isNumber = numberUtil.isNumber;
	    var mathPow = Math.pow;

	    var OutputType = {
	        /**
	         * Data are all in one. Cluster info are added as an attribute of data.
	         * \`\`\`ts
	         * type OutputDataSingle = {
	         *     // Each index of \`data\` is the index of the input data.
	         *     data: OutputDataItem[];
	         *     // The index of \`centroids\` is the cluster index.
	         *     centroids: [ValueOnX, ValueOnY][];
	         * };
	         * type InputDataItem = (ValueOnX | ValueOnY | OtherValue)[];
	         * type OutputDataItem = (...InputDataItem | ClusterIndex | SquareDistanceToCentroid)[];
	         * \`\`\`
	         */
	        SINGLE: 'single',
	        /**
	         * Data are separated by cluster. Suitable for retrieving data form each cluster.
	         * \`\`\`ts
	         * type OutputDataMultiple = {
	         *     // Each index of \`clusterAssment\` is the index of the input data.
	         *     clusterAssment: [ClusterIndex, SquareDistanceToCentroid][];
	         *     // The index of \`centroids\` is the cluster index.
	         *     centroids: [ValueOnX, ValueOnY][];
	         *     // The index of \`pointsInCluster\` is the cluster index.
	         *     pointsInCluster: DataItemListInOneCluster[];
	         * }
	         * type DataItemListInOneCluster = InputDataItem[];
	         * type InputDataItem = (ValueOnX | ValueOnY | OtherValue)[];
	         * type SquareDistanceToCentroid = number;
	         * type ClusterIndex = number;
	         * type ValueOnX = number;
	         * type ValueOnY = number;
	         * type OtherValue = unknown;
	         * \`\`\`
	         */
	        MULTIPLE: 'multiple'
	    }

	    /**
	     * KMeans of clustering algorithm.
	     * @param {Array.<Array.<number>>} data two-dimension array
	     * @param {number} k the number of clusters in a dataset
	     * @return {Object}
	     */
	    function kMeans(data, k, dataMeta) {

	        // create array to assign data points to centroids, also holds SE of each point
	        var clusterAssigned = zeros(data.length, 2);
	        var centroids = createRandCent(k, calcExtents(data, dataMeta.dimensions));
	        var clusterChanged = true;
	        var minDist;
	        var minIndex;
	        var distIJ;
	        var ptsInClust;

	        while (clusterChanged) {
	            clusterChanged = false;
	            for (var i = 0; i < data.length; i++) {
	                minDist = Infinity;
	                minIndex = -1;
	                for (var j = 0; j < k; j++) {
	                    distIJ = distEuclid(data[i], centroids[j], dataMeta);
	                    if (distIJ < minDist) {
	                        minDist = distIJ;
	                        minIndex = j;
	                    }
	                }
	                if (clusterAssigned[i][0] !== minIndex) {
	                    clusterChanged = true;
	                }
	                clusterAssigned[i][0] = minIndex;
	                clusterAssigned[i][1] = minDist;
	            }
	            //recalculate centroids
	            for (var i = 0; i < k; i++) {
	                ptsInClust = [];
	                for (var j = 0; j < clusterAssigned.length; j++) {
	                    if (clusterAssigned[j][0] === i) {
	                        ptsInClust.push(data[j]);
	                    }
	                }
	                centroids[i] = meanInColumns(ptsInClust, dataMeta);
	            }
	        }

	        var clusterWithKmeans = {
	            centroids: centroids,
	            clusterAssigned: clusterAssigned
	        };
	        return clusterWithKmeans;
	    }

	    /**
	     * Calculate the average of each column in a two-dimensional array
	     * and returns the values as an array.
	     */
	    function meanInColumns(dataList, dataMeta) {
	        var meanArray = [];
	        var sum;
	        var mean;
	        for (var j = 0; j < dataMeta.dimensions.length; j++) {
	            var dimIdx = dataMeta.dimensions[j];
	            sum = 0;
	            for (var i = 0; i < dataList.length; i++) {
	                sum += dataList[i][dimIdx];
	            }
	            mean = sum / dataList.length;
	            meanArray.push(mean);
	        }
	        return meanArray;
	    }

	    /**
	     * The combine of hierarchical clustering and k-means.
	     * @param {Array} data two-dimension array.
	     * @param {Object|number} [clusterCountOrConfig] config or clusterCountOrConfig.
	     * @param {number} clusterCountOrConfig.clusterCount Mandatory.
	     *        The number of clusters in a dataset. It has to be greater than 1.
	     * @param {boolean} [clusterCountOrConfig.stepByStep=false] Optional.
	     * @param {OutputType} [clusterCountOrConfig.outputType='multiple'] Optional.
	     *        See \`OutputType\`.
	     * @param {number} [clusterCountOrConfig.outputClusterIndexDimension] Mandatory.
	     *        Only work in \`OutputType.SINGLE\`.
	     * @param {number} [clusterCountOrConfig.outputCentroidDimensions] Optional.
	     *        If specified, the centroid will be set to those dimensions of the result data one by one.
	     *        By default not set centroid to result.
	     *        Only work in \`OutputType.SINGLE\`.
	     * @param {Array.<number>} [clusterCountOrConfig.dimensions] Optional.
	     *        Target dimensions to calculate the regression.
	     *        By default: use all of the data.
	     * @return {Array} See \`OutputType\`.
	     */
	    function hierarchicalKMeans(data, clusterCountOrConfig, stepByStep) {
	        var config = (
	            isNumber(clusterCountOrConfig)
	                ? {clusterCount: clusterCountOrConfig, stepByStep: stepByStep}
	                : clusterCountOrConfig
	        ) || {clusterCount: 2};

	        var k = config.clusterCount;

	        if (k < 2) {
	            return;
	        }

	        var dataMeta = parseDataMeta(data, config);
	        var isOutputTypeSingle = dataMeta.outputType === OutputType.SINGLE;

	        var dataSet = dataPreprocess(data, {dimensions: dataMeta.dimensions});

	        var clusterAssment = zeros(dataSet.length, 2);
	        var outputSingleData;
	        var setClusterIndex;
	        var getClusterIndex;

	        function setDistance(dataIndex, dist) {
	            clusterAssment[dataIndex][1] = dist;
	        }
	        function getDistance(dataIndex) {
	            return clusterAssment[dataIndex][1];
	        };

	        if (isOutputTypeSingle) {
	            outputSingleData = [];
	            var outputClusterIndexDimension = dataMeta.outputClusterIndexDimension;

	            setClusterIndex = function (dataIndex, clusterIndex) {
	                outputSingleData[dataIndex][outputClusterIndexDimension] = clusterIndex;
	            };
	            getClusterIndex = function (dataIndex) {
	                return outputSingleData[dataIndex][outputClusterIndexDimension];
	            };

	            for (var i = 0; i < dataSet.length; i++) {
	                outputSingleData.push(dataSet[i].slice());
	                setDistance(i, 0);
	                setClusterIndex(i, 0);
	            }
	        }
	        else {
	            setClusterIndex = function (dataIndex, clusterIndex) {
	                clusterAssment[dataIndex][0] = clusterIndex;
	            };
	            getClusterIndex = function (dataIndex) {
	                return clusterAssment[dataIndex][0];
	            };
	        }

	        // initial center point.
	        var centroid0 = meanInColumns(dataSet, dataMeta);
	        var centList = [centroid0];
	        for (var i = 0; i < dataSet.length; i++) {
	            var dist = distEuclid(dataSet[i], centroid0, dataMeta);
	            setDistance(i, dist);
	        }

	        var lowestSSE;
	        var ptsInClust;
	        var ptsNotClust;
	        var clusterInfo;
	        var sseSplit;
	        var sseNotSplit;
	        var index = 1;
	        var result = {
	            data: outputSingleData,
	            centroids: centList,
	            isEnd: false
	        };
	        if (!isOutputTypeSingle) {
	            // Only for backward compat.
	            result.clusterAssment = clusterAssment;
	        }

	        function oneStep() {
	            //the existing clusters are continuously divided
	            //until the number of clusters is k
	            if (index < k) {
	                lowestSSE = Infinity;
	                var centSplit;
	                var newCentroid;
	                var newClusterAss;

	                for (var j = 0; j < centList.length; j++) {
	                    ptsInClust = [];
	                    ptsNotClust = [];
	                    for (var i = 0; i < dataSet.length; i++) {
	                        if (getClusterIndex(i) === j) {
	                            ptsInClust.push(dataSet[i]);
	                        }
	                        else {
	                            ptsNotClust.push(getDistance(i));
	                        }
	                    }
	                    clusterInfo = kMeans(ptsInClust, 2, dataMeta);
	                    sseSplit = sumOfColumn(clusterInfo.clusterAssigned, 1);
	                    sseNotSplit = arraySum(ptsNotClust);
	                    if (sseSplit + sseNotSplit < lowestSSE) {
	                        lowestSSE = sseNotSplit + sseSplit;
	                        centSplit = j;
	                        newCentroid = clusterInfo.centroids;
	                        newClusterAss = clusterInfo.clusterAssigned;
	                    }
	                }

	                for (var i = 0; i < newClusterAss.length; i++) {
	                    if (newClusterAss[i][0] === 0) {
	                        newClusterAss[i][0] = centSplit;
	                    }
	                    else if (newClusterAss[i][0] === 1) {
	                        newClusterAss[i][0] = centList.length;
	                    }
	                }

	                centList[centSplit] = newCentroid[0];
	                centList.push(newCentroid[1]);
	                for (var i = 0, j = 0; i < dataSet.length && j < newClusterAss.length; i++) {
	                    if (getClusterIndex(i) === centSplit) {
	                        setClusterIndex(i, newClusterAss[j][0]);
	                        setDistance(i, newClusterAss[j++][1]);
	                    }
	                }

	                var pointInClust = [];
	                if (!isOutputTypeSingle) {
	                    for (var i = 0; i < centList.length; i++) {
	                        pointInClust[i] = [];
	                        for (var j = 0; j < dataSet.length; j++) {
	                            if (getClusterIndex(j) === i) {
	                                pointInClust[i].push(dataSet[j]);
	                            }
	                        }
	                    }
	                    result.pointsInCluster = pointInClust;
	                }

	                index++;
	            }
	            else {
	                result.isEnd = true;
	            }
	        }

	        if (!config.stepByStep) {
	            while (oneStep(), !result.isEnd);
	        }
	        else {
	            result.next = function () {
	                oneStep();
	                setCentroidToResultData(result, dataMeta);
	                return result;
	            };
	        }
	        setCentroidToResultData(result, dataMeta);
	        return result;
	    }

	    function setCentroidToResultData(result, dataMeta) {
	        var outputCentroidDimensions = dataMeta.outputCentroidDimensions;
	        if (dataMeta.outputType !== OutputType.SINGLE || outputCentroidDimensions == null) {
	            return;
	        }
	        var outputSingleData = result.data;
	        var centroids = result.centroids;

	        for (var i = 0; i < outputSingleData.length; i++) {
	            var line = outputSingleData[i];
	            var clusterIndex = line[dataMeta.outputClusterIndexDimension];
	            var centroid = centroids[clusterIndex];
	            var dimLen = Math.min(centroid.length, outputCentroidDimensions.length);
	            for (var j = 0; j < dimLen; j++) {
	                line[outputCentroidDimensions[j]] = centroid[j];
	            }
	        }
	    }

	    /**
	     * Create random centroid of kmeans.
	     */
	    function createRandCent(k, extents) {
	        //constructs a two-dimensional array with all values 0
	        var centroids = zeros(k, extents.length);
	        //create random cluster centers, within bounds of each dimension
	        for (var j = 0; j < extents.length; j++) {
	            var extentItem = extents[j];
	            for (var i = 0; i < k; i++) {
	                centroids[i][j] = extentItem.min + extentItem.span * Math.random();
	            }
	        }
	        return centroids;
	    }

	    /**
	     * Distance method for calculating similarity
	     */
	    function distEuclid(dataItem, centroid, dataMeta) {
	        // The distance should be normalized between different dimensions,
	        // otherwise they may provide different weight in the final distance.
	        // The greater weight offers more effect in the cluster determination.

	        var powerSum = 0;
	        var dimensions = dataMeta.dimensions;
	        var extents = dataMeta.rawExtents;
	        //subtract the corresponding elements in the vectors
	        for (var i = 0; i < dimensions.length; i++) {
	            var span = extents[i].span;
	            // If span is 0, do not count.
	            if (span) {
	                var dimIdx = dimensions[i];
	                var dist = (dataItem[dimIdx] - centroid[i]) / span;
	                powerSum += mathPow(dist, 2);
	            }
	        }

	        return powerSum;
	    }

	    function parseDataMeta(dataSet, config) {
	        var size = arraySize(dataSet);
	        if (size.length < 1) {
	            throw new Error('The input data of clustering should be two-dimension array.');
	        }
	        var colCount = size[1];
	        var defaultDimensions = [];
	        for (var i = 0; i < colCount; i++) {
	            defaultDimensions.push(i);
	        }
	        var dimensions = normalizeDimensions(config.dimensions, defaultDimensions);
	        var outputType = config.outputType || OutputType.MULTIPLE;

	        var outputClusterIndexDimension = config.outputClusterIndexDimension;
	        if (outputType === OutputType.SINGLE && !numberUtil.isNumber(outputClusterIndexDimension)) {
	            throw new Error('outputClusterIndexDimension is required as a number.');
	        }
	        var extents = calcExtents(dataSet, dimensions);

	        return {
	            dimensions: dimensions,
	            rawExtents: extents,
	            outputType: outputType,
	            outputClusterIndexDimension: outputClusterIndexDimension,
	            outputCentroidDimensions: config.outputCentroidDimensions,
	        };
	    }

	    function calcExtents(dataSet, dimensions) {
	        var extents = [];
	        var dimLen = dimensions.length;
	        for (var i = 0; i < dimLen; i++) {
	            extents.push({ min: Infinity, max: -Infinity });
	        }
	        for (var i = 0; i < dataSet.length; i++) {
	            var line = dataSet[i];
	            for (var j = 0; j < dimLen; j++) {
	                var extentItem = extents[j];
	                var val = line[dimensions[j]];
	                extentItem.min > val && (extentItem.min = val);
	                extentItem.max < val && (extentItem.max = val);
	            }
	        }
	        for (var i = 0; i < dimLen; i++) {
	            extents[i].span = extents[i].max - extents[i].min;
	        }
	        return extents;
	    }

	    return {
	        OutputType: OutputType,
	        hierarchicalKMeans: hierarchicalKMeans
	    };

	}.call(exports, __nested_webpack_require_2436__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 2 */
/***/ (function(module, exports, __nested_webpack_require_18998__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {

	    var array = __nested_webpack_require_18998__(3);
	    var isArray = array.isArray;
	    var size = array.size;
	    var number = __nested_webpack_require_18998__(4);
	    var isNumber = number.isNumber;

	    /**
	     * @param  {Array.<number>|number} dimensions like \`[2, 4]\` or \`4\`
	     * @param  {Array.<number>} [defaultDimensions=undefined] By default \`undefined\`.
	     * @return {Array.<number>} number like \`4\` is normalized to \`[4]\`,
	     *         \`null\`/\`undefined\` is normalized to \`defaultDimensions\`.
	     */
	    function normalizeDimensions(dimensions, defaultDimensions) {
	        return typeof dimensions === 'number'
	            ? [dimensions]
	            : dimensions == null
	            ? defaultDimensions
	            : dimensions;
	    }

	    /**
	     * Data preprocessing, filter the wrong data object.
	     *  for example [12,] --- missing y value
	     *              [,12] --- missing x value
	     *              [12, b] --- incorrect y value
	     *              ['a', 12] --- incorrect x value
	     * @param  {Array.<Array>} data
	     * @param  {Object?} [opt]
	     * @param  {Array.<number>} [opt.dimensions] Optional. Like [2, 4],
	     *         means that dimension index 2 and dimension index 4 need to be number.
	     *         If null/undefined (by default), all dimensions need to be number.
	     * @param  {boolean} [opt.toOneDimensionArray] Convert to one dimension array.
	     *         Each value is from \`opt.dimensions[0]\` or dimension 0.
	     * @return {Array.<Array.<number>>}
	     */
	    function dataPreprocess(data, opt) {
	        opt = opt || {};
	        var dimensions = opt.dimensions;
	        var numberDimensionMap = {};
	        if (dimensions != null) {
	            for (var i = 0; i < dimensions.length; i++) {
	                numberDimensionMap[dimensions[i]] = true;
	            }
	        }
	        var targetOneDim = opt.toOneDimensionArray
	            ? (dimensions ? dimensions[0] : 0)
	            : null;

	        function shouldBeNumberDimension(dimIdx) {
	            return !dimensions || numberDimensionMap.hasOwnProperty(dimIdx);
	        }

	        if (!isArray(data)) {
	            throw new Error('Invalid data type, you should input an array');
	        }
	        var predata = [];
	        var arraySize = size(data);

	        if (arraySize.length === 1) {
	            for (var i = 0; i < arraySize[0]; i++) {
	                var item = data[i];
	                if (isNumber(item)) {
	                    predata.push(item);
	                }
	            }
	        }
	        else if (arraySize.length === 2) {
	            for (var i = 0; i < arraySize[0]; i++) {
	                var isCorrect = true;
	                var item = data[i];
	                for (var j = 0; j < arraySize[1]; j++) {
	                    if (shouldBeNumberDimension(j) && !isNumber(item[j])) {
	                        isCorrect = false;
	                    }
	                }
	                if (isCorrect) {
	                    predata.push(
	                        targetOneDim != null
	                            ? item[targetOneDim]
	                            : item
	                    );
	                }
	            }
	        }
	        return predata;
	    }

	    /**
	     * @param {string|number} val
	     * @return {number}
	     */
	    function getPrecision(val) {
	        var str = val.toString();
	        // scientific notation is not considered
	        var dotIndex = str.indexOf('.');
	        return dotIndex < 0 ? 0 : str.length - 1 - dotIndex;
	    }

	    return {
	        normalizeDimensions: normalizeDimensions,
	        dataPreprocess: dataPreprocess,
	        getPrecision: getPrecision
	    };

	}.call(exports, __nested_webpack_require_18998__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 3 */
/***/ (function(module, exports, __nested_webpack_require_23038__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {

	    var objToString = Object.prototype.toString;
	    var arrayProto = Array.prototype;
	    var nativeMap = arrayProto.map;

	    /**
	     * Get the size of a array
	     * @param  {Array} data
	     * @return {Array}
	     */
	    function size(data) {
	        var s = [];
	        while (isArray(data)) {
	            s.push(data.length);
	            data = data[0];
	        }
	        return s;
	    }

	    /**
	     * @param {*}  value
	     * @return {boolean}
	     */
	    function isArray(value) {
	        return objToString.call(value) === '[object Array]';
	    }

	    /**
	     * constructs a (m x n) array with all values 0
	     * @param  {number} m  the row
	     * @param  {number} n  the column
	     * @return {Array}
	     */
	    function zeros(m, n) {
	        var zeroArray = [];
	        for (var i = 0; i < m ; i++) {
	            zeroArray[i] = [];
	            for (var j = 0; j < n; j++) {
	                zeroArray[i][j] = 0;
	            }
	        }
	        return zeroArray;
	    }

	    /**
	     * Sums each element in the array.
	     * Internal use, for performance considerations, to avoid
	     * unnecessary judgments and calculations.
	     * @param  {Array} vector
	     * @return {number}
	     */
	    function sum(vector) {
	        var sum = 0;
	        for (var i = 0; i < vector.length; i++) {
	            sum += vector[i];
	        }
	        return sum;
	    }

	    /**
	     * Computes the sum of the specified column elements in a two-dimensional array
	     * @param  {Array.<Array>} dataList  two-dimensional array
	     * @param  {number} n  the specified column, zero-based
	     * @return {number}
	     */
	    function sumOfColumn(dataList, n) {
	        var sum = 0;
	        for (var i = 0; i < dataList.length; i++) {
	            sum += dataList[i][n];
	        }
	        return sum;
	    }


	    function ascending(a, b) {

	        return a > b ? 1 : a < b ? -1 : a === b ? 0 : NaN;

	    }

	    /**
	     * Binary search algorithm --- this bisector is specidfied to histogram, which every bin like that [a, b),
	     * so the return value use to add 1.
	     * @param  {Array.<number>} array
	     * @param  {number} value
	     * @param  {number} start
	     * @param  {number} end
	     * @return {number}
	     */
	    function bisect(array, value, start, end) { //\u79FB\u51FA\u53BB

	        if (start == null) {
	            start = 0;
	        }
	        if (end == null) {
	            end = array.length;
	        }
	        while (start < end) {
	            var mid = Math.floor((start + end) / 2);
	            var compare = ascending(array[mid], value);
	            if (compare > 0) {
	                end = mid;
	            }
	            else if (compare < 0) {
	                start = mid + 1;
	            }
	            else {
	                return mid + 1;
	            }
	        }
	        return start;
	    }

	    /**
	     * \u6570\u7EC4\u6620\u5C04
	     * @memberOf module:zrender/core/util
	     * @param {Array} obj
	     * @param {Function} cb
	     * @param {*} [context]
	     * @return {Array}
	     */
	    function map(obj, cb, context) {
	        if (!(obj && cb)) {
	            return;
	        }
	        if (obj.map && obj.map === nativeMap) {
	            return obj.map(cb, context);
	        }
	        else {
	            var result = [];
	            for (var i = 0, len = obj.length; i < len; i++) {
	                result.push(cb.call(context, obj[i], i, obj));
	            }
	            return result;
	        }
	    }

	    return {
	        size: size,
	        isArray: isArray,
	        zeros: zeros,
	        sum: sum,
	        sumOfColumn: sumOfColumn,
	        ascending: ascending,
	        bisect: bisect,
	        map: map
	    };

	}.call(exports, __nested_webpack_require_23038__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 4 */
/***/ (function(module, exports, __nested_webpack_require_27102__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {

	    /**
	     * Test whether value is a number.
	     * @param  {*}  value
	     * @return {boolean}
	     */
	    function isNumber(value) {

	        value = value === null ? NaN : +value;
	        return typeof value === 'number' && !isNaN(value);
	    }

	    /**
	     * Test if a number is integer.
	     * @param  {number}  value
	     * @return {boolean}
	     */
	    function isInteger(value) {
	        return isFinite(value) && value === Math.round(value);
	    }

	    function quantityExponent(val) {
	        if (val === 0) {
	            return 0;
	        }
	        var exp = Math.floor(Math.log(val) / Math.LN10);
	        // Fix pricision loss.
	        if (val / Math.pow(10, exp) >= 10) {
	            exp++;
	        }
	        return exp;
	    }

	    return {
	        isNumber: isNumber,
	        isInteger: isInteger,
	        quantityExponent: quantityExponent
	    };

	}.call(exports, __nested_webpack_require_27102__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 5 */
/***/ (function(module, exports, __nested_webpack_require_28322__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {

	    var dataProcess = __nested_webpack_require_28322__(2);
	    var dataPreprocess = dataProcess.dataPreprocess;
	    var normalizeDimensions = dataProcess.normalizeDimensions;

	    var regreMethods = {

	        /**
	         * Common linear regression algorithm
	         */
	        linear: function (predata, opt) {

	            var xDimIdx = opt.dimensions[0];
	            var yDimIdx = opt.dimensions[1];
	            var sumX = 0;
	            var sumY = 0;
	            var sumXY = 0;
	            var sumXX = 0;
	            var len = predata.length;

	            for (var i = 0; i < len; i++) {
	                var rawItem = predata[i];
	                sumX += rawItem[xDimIdx];
	                sumY += rawItem[yDimIdx];
	                sumXY += rawItem[xDimIdx] * rawItem[yDimIdx];
	                sumXX += rawItem[xDimIdx] * rawItem[xDimIdx];
	            }

	            var gradient = ((len * sumXY) - (sumX * sumY)) / ((len * sumXX) - (sumX * sumX));
	            var intercept = (sumY / len) - ((gradient * sumX) / len);

	            var result = [];
	            for (var j = 0; j < predata.length; j++) {
	                var rawItem = predata[j];
	                var resultItem = rawItem.slice();
	                resultItem[xDimIdx] = rawItem[xDimIdx];
	                resultItem[yDimIdx] = gradient * rawItem[xDimIdx] + intercept;
	                result.push(resultItem);
	            }

	            var expression = 'y = ' + Math.round(gradient * 100) / 100 + 'x + ' + Math.round(intercept * 100) / 100;

	            return {
	                points: result,
	                parameter: {
	                    gradient: gradient,
	                    intercept: intercept
	                },
	                expression: expression
	            };
	        },

	        /**
	         * If the raw data include [0,0] point, we should choose linearThroughOrigin
	         *   instead of linear.
	         */
	        linearThroughOrigin: function (predata, opt) {

	            var xDimIdx = opt.dimensions[0];
	            var yDimIdx = opt.dimensions[1];
	            var sumXX = 0;
	            var sumXY = 0;

	            for (var i = 0; i < predata.length; i++) {
	                var rawItem = predata[i];
	                sumXX += rawItem[xDimIdx] * rawItem[xDimIdx];
	                sumXY += rawItem[xDimIdx] * rawItem[yDimIdx];
	            }

	            var gradient = sumXY / sumXX;
	            var result = [];

	            for (var j = 0; j < predata.length; j++) {
	                var rawItem = predata[j];
	                var resultItem = rawItem.slice();
	                resultItem[xDimIdx] = rawItem[xDimIdx];
	                resultItem[yDimIdx] = rawItem[xDimIdx] * gradient;
	                result.push(resultItem);
	            }

	            var expression = 'y = ' + Math.round(gradient * 100) / 100 + 'x';

	            return {
	                points: result,
	                parameter: {
	                    gradient: gradient
	                },
	                expression: expression
	            };
	        },

	        /**
	         * Exponential regression
	         */
	        exponential: function (predata, opt) {

	            var xDimIdx = opt.dimensions[0];
	            var yDimIdx = opt.dimensions[1];
	            var sumX = 0;
	            var sumY = 0;
	            var sumXXY = 0;
	            var sumYlny = 0;
	            var sumXYlny = 0;
	            var sumXY = 0;

	            for (var i = 0; i < predata.length; i++) {
	                var rawItem = predata[i];
	                sumX += rawItem[xDimIdx];
	                sumY += rawItem[yDimIdx];
	                sumXY += rawItem[xDimIdx] * rawItem[yDimIdx];
	                sumXXY += rawItem[xDimIdx] * rawItem[xDimIdx] * rawItem[yDimIdx];
	                sumYlny += rawItem[yDimIdx] * Math.log(rawItem[yDimIdx]);
	                sumXYlny += rawItem[xDimIdx] * rawItem[yDimIdx] * Math.log(rawItem[yDimIdx]);
	            }

	            var denominator = (sumY * sumXXY) - (sumXY * sumXY);
	            var coefficient = Math.pow(Math.E, (sumXXY * sumYlny - sumXY * sumXYlny) / denominator);
	            var index = (sumY * sumXYlny - sumXY * sumYlny) / denominator;
	            var result = [];

	            for (var j = 0; j < predata.length; j++) {
	                var rawItem = predata[j];
	                var resultItem = rawItem.slice();
	                resultItem[xDimIdx] = rawItem[xDimIdx];
	                resultItem[yDimIdx] = coefficient * Math.pow(Math.E, index * rawItem[xDimIdx]);
	                result.push(resultItem);
	            }

	            var expression = 'y = ' + Math.round(coefficient * 100) / 100 + 'e^(' + Math.round(index * 100) / 100 + 'x)';

	            return {
	                points: result,
	                parameter: {
	                    coefficient: coefficient,
	                    index: index
	                },
	                expression: expression
	            };

	        },

	        /**
	         * Logarithmic regression
	         */
	        logarithmic: function (predata, opt) {

	            var xDimIdx = opt.dimensions[0];
	            var yDimIdx = opt.dimensions[1];
	            var sumlnx = 0;
	            var sumYlnx = 0;
	            var sumY = 0;
	            var sumlnxlnx = 0;

	            for (var i = 0; i < predata.length; i++) {
	                var rawItem = predata[i];
	                sumlnx += Math.log(rawItem[xDimIdx]);
	                sumYlnx += rawItem[yDimIdx] * Math.log(rawItem[xDimIdx]);
	                sumY += rawItem[yDimIdx];
	                sumlnxlnx += Math.pow(Math.log(rawItem[xDimIdx]), 2);
	            }

	            var gradient = (i * sumYlnx - sumY * sumlnx) / (i * sumlnxlnx - sumlnx * sumlnx);
	            var intercept = (sumY - gradient * sumlnx) / i;
	            var result = [];

	            for (var j = 0; j < predata.length; j++) {
	                var rawItem = predata[j];
	                var resultItem = rawItem.slice();
	                resultItem[xDimIdx] = rawItem[xDimIdx];
	                resultItem[yDimIdx] = gradient * Math.log(rawItem[xDimIdx]) + intercept;
	                result.push(resultItem);
	            }

	            var expression =
	                'y = '
	                + Math.round(intercept * 100) / 100
	                + ' + '
	                + Math.round(gradient * 100) / 100 + 'ln(x)';

	            return {
	                points: result,
	                parameter: {
	                    gradient: gradient,
	                    intercept: intercept
	                },
	                expression: expression
	            };

	        },

	        /**
	         * Polynomial regression
	         */
	        polynomial: function (predata, opt) {

	            var xDimIdx = opt.dimensions[0];
	            var yDimIdx = opt.dimensions[1];
	            var order = opt.order;

	            if (order == null) {
	                order = 2;
	            }
	            //coefficient matrix
	            var coeMatrix = [];
	            var lhs = [];
	            var k = order + 1;

	            for (var i = 0; i < k; i++) {
	                var sumA = 0;
	                for (var n = 0; n < predata.length; n++) {
	                    var rawItem = predata[n];
	                    sumA += rawItem[yDimIdx] * Math.pow(rawItem[xDimIdx], i);
	                }
	                lhs.push(sumA);

	                var temp = [];
	                for (var j = 0; j < k; j++) {
	                    var sumB = 0;
	                    for (var m = 0; m < predata.length; m++) {
	                        sumB += Math.pow(predata[m][xDimIdx], i + j);
	                    }
	                    temp.push(sumB);
	                }
	                coeMatrix.push(temp);
	            }
	            coeMatrix.push(lhs);

	            var coeArray = gaussianElimination(coeMatrix, k);

	            var result = [];

	            for (var i = 0; i < predata.length; i++) {
	                var value = 0;
	                var rawItem = predata[i];
	                for (var n = 0; n < coeArray.length; n++) {
	                    value += coeArray[n] * Math.pow(rawItem[xDimIdx], n);
	                }
	                var resultItem = rawItem.slice();
	                resultItem[xDimIdx] = rawItem[xDimIdx];
	                resultItem[yDimIdx] = value;
	                result.push(resultItem);
	            }

	            var expression = 'y = ';
	            for (var i = coeArray.length - 1; i >= 0; i--) {
	                if (i > 1) {
	                    expression += Math.round(coeArray[i] * Math.pow(10, i + 1)) / Math.pow(10, i + 1) + 'x^' + i + ' + ';
	                }
	                else if (i === 1) {
	                    expression += Math.round(coeArray[i] * 100) / 100 + 'x' + ' + ';
	                }
	                else {
	                    expression += Math.round(coeArray[i] * 100) / 100;
	                }
	            }

	            return {
	                points: result,
	                parameter: coeArray,
	                expression: expression
	            };

	        }

	    };

	    /**
	     * Gaussian elimination
	     * @param  {Array.<Array.<number>>} matrix   two-dimensional number array
	     * @param  {number} number
	     * @return {Array}
	     */
	    function gaussianElimination(matrix, number) {

	        for (var i = 0; i < matrix.length - 1; i++) {
	            var maxColumn = i;
	            for (var j = i + 1; j < matrix.length - 1; j++) {
	                if (Math.abs(matrix[i][j]) > Math.abs(matrix[i][maxColumn])) {
	                    maxColumn = j;
	                }
	            }
	            // the matrix here is the transpose of the common Augmented matrix.
	            //  so the can perform the primary column transform, in fact, equivalent
	            //  to the primary line changes
	            for (var k = i; k < matrix.length; k++) {
	                var temp = matrix[k][i];
	                matrix[k][i] = matrix[k][maxColumn];
	                matrix[k][maxColumn] = temp;
	            }
	            for (var n = i + 1; n < matrix.length - 1; n++) {
	                for (var m = matrix.length - 1; m >= i; m--) {
	                    matrix[m][n] -= matrix[m][i] / matrix[i][i] * matrix[i][n];
	                }
	            }
	        }

	        var data = new Array(number);
	        var len = matrix.length - 1;
	        for (var j = matrix.length - 2; j >= 0; j--) {
	            var temp = 0;
	            for (var i = j + 1; i < matrix.length - 1; i++) {
	                temp += matrix[i][j] * data[i];
	            }
	            data[j] = (matrix[len][j] - temp) / matrix[j][j];

	        }

	        return data;
	    }

	    /**
	     * @param  {string} regreMethod
	     * @param  {Array.<Array.<number>>} data   two-dimensional number array
	     * @param  {Object|number} [optOrOrder]  opt or order
	     * @param  {number} [optOrOrder.order]  order of polynomials
	     * @param  {Array.<number>|number} [optOrOrder.dimensions=[0, 1]]  Target dimensions to calculate the regression.
	     *         By defualt: use [0, 1] as [x, y].
	     * @return {Array}
	     */
	    var regression = function (regreMethod, data, optOrOrder) {
	        var opt = typeof optOrOrder === 'number'
	            ? { order: optOrOrder }
	            : (optOrOrder || {});

	        var dimensions = normalizeDimensions(opt.dimensions, [0, 1]);

	        var predata = dataPreprocess(data, { dimensions: dimensions });
	        var result = regreMethods[regreMethod](predata, {
	            order: opt.order,
	            dimensions: dimensions
	        });

	        // Sort for line chart.
	        var xDimIdx = dimensions[0];
	        result.points.sort(function (itemA, itemB) {
	            return itemA[xDimIdx] - itemB[xDimIdx];
	        });

	        return result;
	    };

	    return regression;

	}.call(exports, __nested_webpack_require_28322__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 6 */
/***/ (function(module, exports, __nested_webpack_require_40567__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {

	    var statistics = {};

	    statistics.max = __nested_webpack_require_40567__(7);
	    statistics.deviation = __nested_webpack_require_40567__(8);
	    statistics.mean = __nested_webpack_require_40567__(10);
	    statistics.median = __nested_webpack_require_40567__(12);
	    statistics.min = __nested_webpack_require_40567__(14);
	    statistics.quantile = __nested_webpack_require_40567__(13);
	    statistics.sampleVariance = __nested_webpack_require_40567__(9);
	    statistics.sum = __nested_webpack_require_40567__(11);

	    return statistics;

	}.call(exports, __nested_webpack_require_40567__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 7 */
/***/ (function(module, exports, __nested_webpack_require_41340__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {

	    var number = __nested_webpack_require_41340__(4);
	    var isNumber = number.isNumber;

	    /**
	     * Is a method for computing the max value of a list of numbers,
	     * which will filter other data types.
	     * @param  {Array.<number>} data
	     * @return {number}
	     */
	    function max(data) {

	        var maxData = -Infinity;
	        for (var i = 0; i < data.length; i++) {
	            if (isNumber(data[i]) && data[i] > maxData) {
	                maxData = data[i];
	            }
	        }
	        return maxData;
	    }

	    return max;

	}.call(exports, __nested_webpack_require_41340__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 8 */
/***/ (function(module, exports, __nested_webpack_require_42218__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {

	    var variance = __nested_webpack_require_42218__(9);

	    /**
	     * Computing the deviation
	     * @param  {Array.<number>} data
	     * @return {number}
	     */
	    return function (data) {

	        var squaredDeviation = variance(data);

	        return squaredDeviation ? Math.sqrt(squaredDeviation) : squaredDeviation;
	    };
	}.call(exports, __nested_webpack_require_42218__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 9 */
/***/ (function(module, exports, __nested_webpack_require_42868__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {

	    var number = __nested_webpack_require_42868__(4);
	    var isNumber = number.isNumber;
	    var mean = __nested_webpack_require_42868__(10);

	    /**
	     * Computing the variance of list of sample
	     * @param  {Array.<number>} data
	     * @return {number}
	     */
	    function sampleVariance(data) {

	        var len = data.length;
	        if (!len || len < 2) {
	            return 0;
	        }
	        if (data.length >= 2) {

	            var meanValue = mean(data);
	            var sum = 0;
	            var temple;

	            for (var i = 0; i < data.length; i++) {
	                if (isNumber(data[i])) {
	                    temple = data[i] - meanValue;
	                    sum += temple * temple;
	                }
	            }
	            return sum / (data.length - 1);
	        }
	    }

	    return sampleVariance;

	}.call(exports, __nested_webpack_require_42868__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 10 */
/***/ (function(module, exports, __nested_webpack_require_44023__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {

	    var sum = __nested_webpack_require_44023__(11);

	    /**
	     * Is a method for computing the mean value of a list of numbers,
	     * which will filter other data types.
	     * @param  {Array.<number>} data
	     * @return {number}
	     */
	    function mean(data) {

	        var len = data.length;

	        if (!len) {
	            return 0;
	        }

	        return sum(data) / data.length;

	    }

	    return mean;


	}.call(exports, __nested_webpack_require_44023__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 11 */
/***/ (function(module, exports, __nested_webpack_require_44769__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {

	    var number = __nested_webpack_require_44769__(4);
	    var isNumber = number.isNumber;

	    /**
	     * Is a method for computing the sum of a list of numbers,
	     * which will filter other data types.
	     * @param  {Array.<number>} data
	     * @return {number}
	     */
	    function sum(data) {

	        var len = data.length;

	        if (!len) {
	            return 0;
	        }
	        var sumData = 0;
	        for (var i = 0; i < len; i++) {
	            if (isNumber(data[i])) {
	                sumData += data[i];
	            }
	        }
	        return sumData;
	    }

	    return sum;

	}.call(exports, __nested_webpack_require_44769__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 12 */
/***/ (function(module, exports, __nested_webpack_require_45694__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {

	    var quantile = __nested_webpack_require_45694__(13);

	    /**
	     * Is a method for computing the median value of a sorted array of numbers
	     * @param  {Array.<number>} data
	     * @return {number}
	     */
	    function median(data) {

	        return quantile(data, 0.5);
	    }

	    return median;

	}.call(exports, __nested_webpack_require_45694__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 13 */
/***/ (function(module, exports, __nested_webpack_require_46319__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {

	    /**
	     * Estimating quantiles from a sorted sample of numbers
	     * @see https://en.wikipedia.org/wiki/Quantile#Estimating_quantiles_from_a_sample
	     * R-7 method
	     * @param  {Array.<number>} data  sorted array
	     * @param  {number} p
	     */
	    return function (data, p) {

	        var len = data.length;

	        if (!len) {
	            return 0;
	        }
	        if (p <= 0 || len < 2) {
	            return data[0];
	        }
	        if (p >= 1) {
	            return data[len -1];
	        }
	        // in the wikipedia's R-7 method h = (N - 1)p + 1, but here array index start from 0
	        var h = (len - 1) * p;
	        var i = Math.floor(h);
	        var a = data[i];
	        var b = data[i + 1];
	        return a + (b - a) * (h - i);
	    };

	}.call(exports, __nested_webpack_require_46319__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 14 */
/***/ (function(module, exports, __nested_webpack_require_47431__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {

	    var number = __nested_webpack_require_47431__(4);
	    var isNumber = number.isNumber;

	    /**
	     * Is a method for computing the min value of a list of numbers,
	     * which will filter other data types.
	     * @param  {Array.<number>} data
	     * @return {number}
	     */
	    function min(data) {

	        var minData = Infinity;
	        for (var i = 0; i < data.length; i++) {
	            if (isNumber(data[i]) && data[i] < minData) {
	                minData = data[i];
	            }
	        }
	        return minData;
	    }

	    return min;

	}.call(exports, __nested_webpack_require_47431__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 15 */
/***/ (function(module, exports, __nested_webpack_require_48309__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {

	    var max = __nested_webpack_require_48309__(7);
	    var min = __nested_webpack_require_48309__(14);
	    var quantile = __nested_webpack_require_48309__(13);
	    var deviation = __nested_webpack_require_48309__(8);
	    var dataProcess = __nested_webpack_require_48309__(2);
	    var dataPreprocess = dataProcess.dataPreprocess;
	    var normalizeDimensions = dataProcess.normalizeDimensions;
	    var array = __nested_webpack_require_48309__(3);
	    var ascending = array.ascending;
	    var map = array.map;
	    var range = __nested_webpack_require_48309__(16);
	    var bisect = array.bisect;
	    var tickStep = __nested_webpack_require_48309__(17);

	    /**
	     * Compute bins for histogram
	     * @param  {Array.<number>} data
	     * @param  {Object|string} optOrMethod Optional settings or \`method\`.
	     * @param  {Object|string} optOrMethod.method 'squareRoot' | 'scott' | 'freedmanDiaconis' | 'sturges'
	     * @param  {Array.<number>|number} optOrMethod.dimensions If data is a 2-d array,
	     *         which dimension will be used to calculate histogram.
	     * @return {Object}
	     */
	    function computeBins(data, optOrMethod) {
	        var opt = typeof optOrMethod === 'string'
	            ? { method: optOrMethod }
	            : (optOrMethod || {});

	        var threshold = opt.method == null
	            ? thresholdMethod.squareRoot
	            : thresholdMethod[opt.method];
	        var dimensions = normalizeDimensions(opt.dimensions);

	        var values = dataPreprocess(data, {
	            dimensions: dimensions,
	            toOneDimensionArray: true
	        });
	        var maxValue = max(values);
	        var minValue = min(values);
	        var binsNumber = threshold(values, minValue, maxValue);
	        var tickStepResult = tickStep(minValue, maxValue, binsNumber);
	        var step = tickStepResult.step;
	        var toFixedPrecision = tickStepResult.toFixedPrecision;

	        // return the xAxis coordinate for each bins, except the end point of the value
	        var rangeArray = range(
	            // use function toFixed() to avoid data like '0.700000001'
	            +((Math.ceil(minValue / step) * step).toFixed(toFixedPrecision)),
	            +((Math.floor(maxValue / step) * step).toFixed(toFixedPrecision)),
	            step,
	            toFixedPrecision
	        );

	        var len = rangeArray.length;

	        var bins = new Array(len + 1);

	        for (var i = 0; i <= len; i++) {
	            bins[i] = {};
	            bins[i].sample = [];
	            bins[i].x0 = i > 0
	                ? rangeArray[i - 1]
	                : (rangeArray[i] - minValue) === step
	                ? minValue
	                : (rangeArray[i] - step);
	            bins[i].x1 = i < len
	                ? rangeArray[i]
	                : (maxValue - rangeArray[i-1]) === step
	                ? maxValue
	                : rangeArray[i - 1] + step;
	        }

	        for (var i = 0; i < values.length; i++) {
	            if (minValue <= values[i] && values[i] <= maxValue) {
	                bins[bisect(rangeArray, values[i], 0, len)].sample.push(values[i]);
	            }
	        }

	        var data = map(bins, function (bin) {
	            // use function toFixed() to avoid data like '6.5666638489'
	            return [
	                +((bin.x0 + bin.x1) / 2).toFixed(toFixedPrecision),
	                bin.sample.length,
	                bin.x0,
	                bin.x1,
	                bin.x0 + ' - ' + bin.x1
	            ];
	        });

	        var customData = map(bins, function (bin) {
	            return [bin.x0, bin.x1, bin.sample.length];
	        });

	        return {
	            bins: bins,
	            data: data,
	            customData: customData
	        };
	    }

	    /**
	     * Four kinds of threshold methods used to
	     * compute how much bins the histogram should be divided
	     * @see  https://en.wikipedia.org/wiki/Histogram
	     * @type {Object}
	     */
	    var thresholdMethod = {

	        squareRoot: function (data) {

	            var bins = Math.ceil(Math.sqrt(data.length));

	            return bins > 50 ? 50 : bins;
	        },

	        scott: function (data, min, max) {

	            return Math.ceil((max - min) / (3.5 * deviation(data) * Math.pow(data.length, -1 / 3)));
	        },

	        freedmanDiaconis: function (data, min, max) {

	            data.sort(ascending);

	            return Math.ceil(
	                (max - min) / (2 * (quantile(data, 0.75) - quantile(data, 0.25)) * Math.pow(data.length, -1 / 3))
	            );
	        },

	        sturges: function (data) {

	            return Math.ceil(Math.log(data.length) / Math.LN2) + 1;

	        }
	    };

	    return computeBins;

	}.call(exports, __nested_webpack_require_48309__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 16 */
/***/ (function(module, exports, __nested_webpack_require_53283__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {

	    var dataProcess = __nested_webpack_require_53283__(2);
	    var getPrecision = dataProcess.getPrecision;

	    /**
	     * Computing range array.
	     * Adding param precision to fix range value, avoiding range[i] = 0.7000000001.
	     * @param  {number} start
	     * @param  {number} end
	     * @param  {number} step
	     * @param  {number} precision
	     * @return {Array.<number>}
	     */
	    return function (start, end, step, precision) {

	        var len = arguments.length;

	        if (len < 2) {
	            end = start;
	            start = 0;
	            step = 1;
	        }
	        else if (len < 3) {
	            step = 1;
	        }
	        else if (len < 4) {
	            step = +step;
	            precision = getPrecision(step);
	        }
	        else {
	            precision = +precision;
	        }

	        var n = Math.ceil(((end - start) / step).toFixed(precision));
	        var range = new Array(n + 1);
	        for (var i = 0; i < n + 1; i++) {
	            range[i] = +(start + i * step).toFixed(precision);
	        }
	        return range;
	    };

	}.call(exports, __nested_webpack_require_53283__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 17 */
/***/ (function(module, exports, __nested_webpack_require_54695__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {

	    var numberUtil = __nested_webpack_require_54695__(4);

	    /**
	     * Computing the length of step
	     * @see  https://github.com/d3/d3-array/blob/master/src/ticks.js
	     * @param {number} start
	     * @param {number} stop
	     * @param {number} count
	     */
	    return function (start, stop, count) {

	        var step0 = Math.abs(stop - start) / count;
	        var precision = numberUtil.quantityExponent(step0);

	        var step1 = Math.pow(10, precision);
	        var error = step0 / step1;

	        if (error >= Math.sqrt(50)) {
	            step1 *= 10;
	        }
	        else if (error >= Math.sqrt(10)) {
	            step1 *= 5;
	        }
	        else if(error >= Math.sqrt(2)) {
	            step1 *= 2;
	        }

	        var toFixedPrecision = precision < 0 ? -precision : 0;
	        var resultStep = +(
	            (stop >= start ? step1 : -step1).toFixed(toFixedPrecision)
	        );

	        return {
	            step: resultStep,
	            toFixedPrecision: toFixedPrecision
	        };
	    };

	}.call(exports, __nested_webpack_require_54695__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 18 */
/***/ (function(module, exports, __nested_webpack_require_56053__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {

	    var regression = __nested_webpack_require_56053__(5);
	    var transformHelper = __nested_webpack_require_56053__(19);
	    var FORMULA_DIMENSION = 2;

	    return {

	        type: 'ecStat:regression',

	        /**
	         * @param {Paramter<typeof regression>[0]} [params.config.method='linear'] 'linear' by default
	         * @param {Paramter<typeof regression>[2]} [params.config.order=2] Only work when method is \`polynomial\`.
	         * @param {DimensionLoose[]|DimensionLoose} [params.config.dimensions=[0, 1]] dimensions that used to calculate regression.
	         *        By default [0, 1].
	         * @param {'start' | 'end' | 'all'} params.config.formulaOn Include formula on the last (third) dimension of the:
	         *        'start': first data item.
	         *        'end': last data item (by default).
	         *        'all': all data items.
	         *        'none': no data item.
	         */
	        transform: function transform(params) {
	            var upstream = params.upstream;
	            var config = params.config || {};
	            var method = config.method || 'linear';

	            var result = regression(method, upstream.cloneRawData(), {
	                order: config.order,
	                dimensions: transformHelper.normalizeExistingDimensions(params, config.dimensions)
	            });
	            var points = result.points;

	            var formulaOn = config.formulaOn;
	            if (formulaOn == null) {
	                formulaOn = 'end';
	            }

	            var dimensions;
	            if (formulaOn !== 'none') {
	                for (var i = 0; i < points.length; i++) {
	                    points[i][FORMULA_DIMENSION] =
	                    (
	                        (formulaOn === 'start' && i === 0)
	                        || (formulaOn === 'all')
	                        || (formulaOn === 'end' && i === points.length - 1)
	                    ) ? result.expression : '';
	                }
	                dimensions = upstream.cloneAllDimensionInfo();
	                dimensions[FORMULA_DIMENSION] = {};
	            }

	            return [{
	                dimensions: dimensions,
	                data: points
	            }];
	        }
	    };

	}.call(exports, __nested_webpack_require_56053__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 19 */
/***/ (function(module, exports, __nested_webpack_require_58605__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {

	    var arrayUtil = __nested_webpack_require_58605__(3);
	    var numberUtil = __nested_webpack_require_58605__(4);
	    var objectUtil = __nested_webpack_require_58605__(20);

	    /**
	     * type DimensionLoose = DimensionIndex | DimensionName;
	     * type DimensionIndex = number;
	     * type DimensionName = string;
	     *
	     * @param {object} transformParams The parameter of echarts transfrom.
	     * @param {DimensionLoose | DimensionLoose[]} dimensionsConfig
	     * @return {DimensionIndex | DimensionIndex[]}
	     */
	    function normalizeExistingDimensions(transformParams, dimensionsConfig) {
	        if (dimensionsConfig == null) {
	            return;
	        }
	        var upstream = transformParams.upstream;

	        if (arrayUtil.isArray(dimensionsConfig)) {
	            var result = [];
	            for (var i = 0; i < dimensionsConfig.length; i++) {
	                var dimInfo = upstream.getDimensionInfo(dimensionsConfig[i]);
	                validateDimensionExists(dimInfo, dimensionsConfig[i]);
	                result[i] = dimInfo.index;
	            }
	            return result;
	        }
	        else {
	            var dimInfo = upstream.getDimensionInfo(dimensionsConfig);
	            validateDimensionExists(dimInfo, dimensionsConfig);
	            return dimInfo.index;
	        }

	        function validateDimensionExists(dimInfo, dimConfig) {
	            if (!dimInfo) {
	                throw new Error('Can not find dimension by ' + dimConfig);
	            }
	        }
	    }

	    /**
	     * @param {object} transformParams The parameter of echarts transfrom.
	     * @param {(DimensionIndex | {name: DimensionName, index: DimensionIndex})[]} dimensionsConfig
	     * @param {{name: DimensionName | DimensionName[], index: DimensionIndex | DimensionIndex[]}}
	     */
	    function normalizeNewDimensions(dimensionsConfig) {
	        if (arrayUtil.isArray(dimensionsConfig)) {
	            var names = [];
	            var indices = [];
	            for (var i = 0; i < dimensionsConfig.length; i++) {
	                var item = parseDimensionNewItem(dimensionsConfig[i]);
	                names.push(item.name);
	                indices.push(item.index);
	            }
	            return {name: names, index: indices};
	        }
	        else if (dimensionsConfig != null) {
	            return parseDimensionNewItem(dimensionsConfig);
	        }

	        function parseDimensionNewItem(dimConfig) {
	            if (numberUtil.isNumber(dimConfig)) {
	                return { index: dimConfig };
	            }
	            else if (objectUtil.isObject(dimConfig) && numberUtil.isNumber(dimConfig.index)) {
	                return dimConfig;
	            }
	            throw new Error('Illegle new dimensions config. Expect \`{ name: string, index: number }\`.');
	        }
	    }

	    return {
	        normalizeExistingDimensions: normalizeExistingDimensions,
	        normalizeNewDimensions: normalizeNewDimensions
	    };
	}.call(exports, __nested_webpack_require_58605__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 20 */
/***/ (function(module, exports, __nested_webpack_require_61887__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {

	    function extend(target, source) {
	        if (Object.assign) {
	            Object.assign(target, source);
	        }
	        else {
	            for (var key in source) {
	                if (source.hasOwnProperty(key)) {
	                    target[key] = source[key];
	                }
	            }
	        }
	        return target;
	    }

	    function isObject(value) {
	        const type = typeof value;
	        return type === 'function' || (!!value && type === 'object');
	    }

	    return {
	        extend: extend,
	        isObject: isObject
	    };

	}.call(exports, __nested_webpack_require_61887__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 21 */
/***/ (function(module, exports, __nested_webpack_require_62787__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {

	    var histogram = __nested_webpack_require_62787__(15);
	    var transformHelper = __nested_webpack_require_62787__(19);

	    return {

	        type: 'ecStat:histogram',

	        /**
	         * @param {'squareRoot' | 'scott' | 'freedmanDiaconis' | 'sturges'} [params.config.method='squareRoot']
	         * @param {DimnensionLoose[]} [params.config.dimensions=[0, 1]] dimensions that used to calculate histogram.
	         *        By default [0].
	         */
	        transform: function transform(params) {
	            var upstream = params.upstream;
	            var config = params.config || {};

	            var result = histogram(upstream.cloneRawData(), {
	                method: config.method,
	                dimensions: transformHelper.normalizeExistingDimensions(params, config.dimensions)
	            });

	            return [{
	                dimensions: ['MeanOfV0V1', 'VCount', 'V0', 'V1', 'DisplayableName'],
	                data: result.data
	            }, {
	                data: result.customData
	            }];
	        }
	    };

	}.call(exports, __nested_webpack_require_62787__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 22 */
/***/ (function(module, exports, __nested_webpack_require_64155__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {

	    var clustering = __nested_webpack_require_64155__(1);
	    var numberUtil = __nested_webpack_require_64155__(4);
	    var transformHelper = __nested_webpack_require_64155__(19);

	    var isNumber = numberUtil.isNumber;

	    return {

	        type: 'ecStat:clustering',

	        /**
	         * @param {number} params.config.clusterCount Mandatory.
	         *        The number of clusters in a dataset. It has to be greater than 1.
	         * @param {(DimensionName | DimensionIndex)[]} [params.config.dimensions] Optional.
	         *        Target dimensions to calculate the regression.
	         *        By default: use all of the data.
	         * @param {(DimensionIndex | {name?: DimensionName, index: DimensionIndex})} [params.config.outputClusterIndexDimension] Mandatory.
	         * @param {(DimensionIndex | {name?: DimensionName, index: DimensionIndex})[]} [params.config.outputCentroidDimensions] Optional.
	         *        If specified, the centroid will be set to those dimensions of the result data one by one.
	         *        By default not set centroid to result.
	         */
	        transform: function transform(params) {
	            var upstream = params.upstream;
	            var config = params.config || {};
	            var clusterCount = config.clusterCount;

	            if (!isNumber(clusterCount) || clusterCount <= 0) {
	                throw new Error('config param "clusterCount" need to be specified as an interger greater than 1.');
	            }

	            if (clusterCount === 1) {
	                return [{
	                }, {
	                    data: []
	                }];
	            }

	            var outputClusterIndexDimension = transformHelper.normalizeNewDimensions(
	                config.outputClusterIndexDimension
	            );
	            var outputCentroidDimensions = transformHelper.normalizeNewDimensions(
	                config.outputCentroidDimensions
	            );

	            if (outputClusterIndexDimension == null) {
	                throw new Error('outputClusterIndexDimension is required as a number.');
	            }

	            var result = clustering.hierarchicalKMeans(upstream.cloneRawData(), {
	                clusterCount: clusterCount,
	                stepByStep: false,
	                dimensions: transformHelper.normalizeExistingDimensions(params, config.dimensions),
	                outputType: clustering.OutputType.SINGLE,
	                outputClusterIndexDimension: outputClusterIndexDimension.index,
	                outputCentroidDimensions: (outputCentroidDimensions || {}).index
	            });

	            var sourceDimAll = upstream.cloneAllDimensionInfo();
	            var resultDimsDef = [];
	            for (var i = 0; i < sourceDimAll.length; i++) {
	                var sourceDimItem = sourceDimAll[i];
	                resultDimsDef.push(sourceDimItem.name);
	            }

	            // Always set to dims def even if name not exists, because the resultDimsDef.length
	            // need to be enlarged to tell echarts that there is "cluster index dimension" and "dist dimension".
	            resultDimsDef[outputClusterIndexDimension.index] = outputClusterIndexDimension.name;

	            if (outputCentroidDimensions) {
	                for (var i = 0; i < outputCentroidDimensions.index.length; i++) {
	                    if (outputCentroidDimensions.name[i] != null) {
	                        resultDimsDef[outputCentroidDimensions.index[i]] = outputCentroidDimensions.name[i];
	                    }
	                }
	            }

	            return [{
	                dimensions: resultDimsDef,
	                data: result.data
	            }, {
	                data: result.centroids
	            }];
	        }
	    };

	}.call(exports, __nested_webpack_require_64155__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ })
/******/ ])
});
;

//# sourceURL=webpack:///./node_modules/echarts-stat/dist/ecStat.js?`)},78448:function(module,__unused_webpack_exports,__webpack_require__){eval(`module.exports = __webpack_require__(96063);


//# sourceURL=webpack:///./node_modules/echarts-stat/index.js?`)}}]);
