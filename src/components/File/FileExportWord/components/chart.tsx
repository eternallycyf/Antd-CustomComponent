import React, { useState, useEffect, useRef, forwardRef, useImperativeHandle } from 'react';
import { Line } from '@ant-design/plots';

const DemoLine = (props: any, charts: any) => {
  const [data, setData] = useState([]);
  const ref = useRef<any>(null!);

  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };

  useEffect(() => {
    asyncFetch();
  }, []);

  useImperativeHandle(charts, () => ({
    downloadImage: () => {
      return ref.current?.downloadImage();
    },
    getDataURL: () => {
      return ref.current?.toDataURL();
    },
  }));

  const config = {
    data,
    padding: 'auto' as 'auto',
    xField: 'Date',
    yField: 'scales',
    xAxis: {
      // type: 'timeCat',
      tickCount: 5,
    },
    smooth: true,
  };

  return (
    <div ref={charts}>
      <Line
        {...config}
        onReady={(plot) => {
          ref.current = plot;
        }}
      />
    </div>
  );
};
export default forwardRef(DemoLine);
