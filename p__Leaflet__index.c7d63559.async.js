"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[217],{25416:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval(`// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ Leaflet; }
});

// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(5574);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/leaflet/dist/leaflet-src.js
var leaflet_src = __webpack_require__(45243);
var leaflet_src_default = /*#__PURE__*/__webpack_require__.n(leaflet_src);
;// CONCATENATED MODULE: ./node_modules/leaflet/dist/leaflet.css
// extracted by mini-css-extract-plugin

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./src/pages/Leaflet/index.tsx






var LeafletMap = function LeafletMap() {
  var _useState = (0,react.useState)(0),
    _useState2 = slicedToArray_default()(_useState, 2),
    zoom = _useState2[0],
    setZoom = _useState2[1];
  (0,react.useEffect)(function () {
    var key = '3c1fa5502bab6c274c3557cea72eb9f1'; // \u6B64key\u9700\u5728\u5929\u5730\u56FE\u5B98\u7F51\u7533\u8BF7 mapbox\u56FE\u6E90\u4E5F\u662F\u4E00\u6837\u7684
    // \u6DFB\u52A0\u5E95\u56FE
    var baseMap = leaflet_src_default().tileLayer('http://{s}.tianditu.gov.cn/DataServer?T=cta_w&x={x}&y={y}&l={z}&tk=' + key, {
      maxZoom: 20,
      tileSize: 256,
      zIndex: 0,
      // zoomOffset: 1,
      subdomains: ['t0', 't1', 't2', 't3', 't4', 't5', 't6', 't7']
    });
    var baseMap2 = leaflet_src_default().tileLayer('http://{s}.tianditu.gov.cn/DataServer?T=vec_w&x={x}&y={y}&l={z}&tk=' + key, {
      maxZoom: 20,
      tileSize: 256,
      // \u6BCF\u7247\u6805\u683C\u7684\u5927\u5C0F
      zIndex: 1,
      // \u56FE\u5C42\u6392\u5217\u987A\u5E8F
      // zoomOffset: 1,
      subdomains: ['t0', 't1', 't2', 't3', 't4', 't5', 't6', 't7'] // \u6B64\u9879\u4E0D\u53EF\u5C11 \u56E0\u8BBF\u95EE\u91CF\u53EF\u80FD\u8F83\u5927 \u907F\u514D\u591A\u6B21\u8BBF\u95EE\u540C\u4E00\u8282\u70B9\u5929\u5730\u56FE\u53EF\u80FD\u4F1A\u5C4F\u853Dip
      //  {s} \u4F1A\u81EA\u52A8\u968F\u673A\u83B7\u53D6 https://leafletjs.com/reference.html#tilelayer \u67E5\u770B\u8BE6\u60C5
    });

    var map = leaflet_src_default().map('map', {
      center: [22.530739, 114.059854],
      // \u5730\u56FE\u521D\u59CB\u4E2D\u5FC3 leaflet \u4E0E\u5176\u4ED6\u5730\u56FE\u6846\u67B6\u6709\u70B9\u4E0D\u540C \u8FD9\u91CC\u7684x y \u662F\u76F8\u53CD\u7684
      zoom: 11,
      maxZoom: 22,
      // \u6846\u67B6\u9650\u5236\u6700\u5927\u5C42\u7EA7 \u9ED8\u8BA4 \u65E0\u9650\u5236
      minZoom: 3,
      // \u6700\u5C0F\u7F29\u653E\u5C42\u7EA7 \u4E0D\u8BBE\u7F6E\u9ED8\u8BA4\u4E3A0
      zoomControl: false // \u9ED8\u8BA4\u4E0D\u6DFB\u52A0\u7F29\u653E\u63A7\u4EF6
      // layers: [baseMap], // \u5E95\u56FE\u4E5F\u53EF\u4EE5\u76F4\u63A5\u653E\u5728\u8FD9\u91CC
    });

    baseMap2.addTo(map); // \u6DFB\u52A0\u77E2\u91CF
    baseMap.addTo(map); // \u6DFB\u52A0\u6807\u6CE8

    map.on('zoom', function (e) {
      setZoom(e.target._zoom);
      // console.log(e.target._zoom, 'zoom');
    });
  }, []);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      id: "map",
      style: {
        position: 'relative',
        height: '600px',
        zIndex: 0
      }
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      children: ["\\u5F53\\u524D\\u5C42\\u7EA7\\u4E3A\\uFF1A", zoom]
    })]
  });
};
/* harmony default export */ var Leaflet = (LeafletMap);

//# sourceURL=webpack:///./src/pages/Leaflet/index.tsx_+_1_modules?`)}}]);
