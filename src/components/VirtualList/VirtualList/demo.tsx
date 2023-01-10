import VirtualList, { ItemStyle } from '.';
import { Row, Col } from 'antd';
import React from 'react';

const App = () => {
  const Arr = Array.from({ length: 1000 }, (_, i) => i);

  const renderItem = ({
    style,
    index,
  }: {
    style: ItemStyle;
    index: number;
  }) => {
    const isOdd = index % 2 === 1;
    const IIII = isOdd ? Arr[index + 1] : Arr[index];
    return (
      <Row style={style} key={index}>
        <Col span={12}> {Arr[index]}</Col>
        <Col span={12}>{Arr[index + 1]}</Col>
      </Row>
    );
  };

  return (
    <VirtualList
      height={400}
      itemCount={1000}
      renderItem={renderItem}
      itemSize={50}
    />
  );
};

export default App;
