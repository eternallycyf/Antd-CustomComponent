import React, { useState, FC } from 'react';
import { Select, Input, Button, Tag, Form } from 'antd';
import styles from './index.less';
const { Option } = Select;

interface Iprops {
  /**
   * 可以这样写属性描述
   * @description       也可以显式加上描述名
   * @default           支持定义默认值
   * @type              number
   */
  type?: any;
}

const App: FC<Iprops> = () => {
  const options = [
    { label: 'jack', value: '1' },
    { label: 'lucy', value: '2' },
    { label: 'Yiminghe', value: '3' },
    { label: '4', value: '4' },
    { label: '5', value: '5' },
    { label: '6', value: '6' },
    { label: '7', value: '7' },
    { label: '8', value: '8' },
    { label: '9', value: '9' },
  ];
  return (
    <div className={styles.contentBox}>
      <Select
        defaultValue={[
          { label: 'jack', value: '1' },
          { label: 'lucy', value: '2' },
          { label: 'Yiminghe', value: '3' },
          { label: '4', value: '4' },
        ]}
        mode="multiple"
        maxTagCount={3}
        style={{ width: 300 }}
        open={true}
        showSearch
        filterOption={false}
        className={styles.selectbox}
        dropdownMatchSelectWidth
        popupClassName={styles.selects}
        dropdownStyle={{ height: 300, width: 600, overflow: 'scroll' }}
      >
        {options.map((item, index) => (
          <Option className={styles.options} value={item.value} key={index}>
            {item.label}
          </Option>
        ))}
      </Select>
    </div>
  );
};

export default App;
