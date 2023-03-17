import React, { useEffect, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
const LeafletMap = () => {
  const [zoom, setZoom] = useState(0);

  useEffect(() => {
    let key = '3c1fa5502bab6c274c3557cea72eb9f1'; // 此key需在天地图官网申请 mapbox图源也是一样的
    // 添加底图
    let baseMap = L.tileLayer('http://{s}.tianditu.gov.cn/DataServer?T=cta_w&x={x}&y={y}&l={z}&tk=' + key, {
      maxZoom: 20,
      tileSize: 256,
      zIndex: 0,
      // zoomOffset: 1,
      subdomains: ['t0', 't1', 't2', 't3', 't4', 't5', 't6', 't7'],
    });
    let baseMap2 = L.tileLayer('http://{s}.tianditu.gov.cn/DataServer?T=vec_w&x={x}&y={y}&l={z}&tk=' + key, {
      maxZoom: 20,
      tileSize: 256, // 每片栅格的大小
      zIndex: 1, // 图层排列顺序
      // zoomOffset: 1,
      subdomains: ['t0', 't1', 't2', 't3', 't4', 't5', 't6', 't7'], // 此项不可少 因访问量可能较大 避免多次访问同一节点天地图可能会屏蔽ip
      //  {s} 会自动随机获取 https://leafletjs.com/reference.html#tilelayer 查看详情
    });
    let map = L.map('map', {
      center: [22.530739, 114.059854], // 地图初始中心 leaflet 与其他地图框架有点不同 这里的x y 是相反的
      zoom: 11,
      maxZoom: 22, // 框架限制最大层级 默认 无限制
      minZoom: 3, // 最小缩放层级 不设置默认为0
      zoomControl: false, // 默认不添加缩放控件
      // layers: [baseMap], // 底图也可以直接放在这里
    });

    baseMap2.addTo(map); // 添加矢量
    baseMap.addTo(map); // 添加标注

    map.on('zoom', (e) => {
      setZoom(e.target._zoom);
      // console.log(e.target._zoom, 'zoom');
    });
  }, []);
  return (
    <div>
      <div id="map" style={{ position: 'relative', height: '600px', zIndex: 0 }}></div>
      <div>当前层级为：{zoom}</div>
    </div>
  );
};

export default LeafletMap;
