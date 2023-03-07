import React, { useState, useEffect, FC } from 'react';
import { Popover } from 'antd';
import { SketchPicker } from 'react-color';
import styles from './index.less';

interface IProps {
  color: any;
  setColor: (color: any) => void;
  value?: any;
  style?: any;
  onChange?: (value: any) => void;
}

const ColorPicker: FC<IProps> = (props) => {
  const { value, style, color, setColor, onChange } = props;

  useEffect(() => {
    setColor(value);
  }, [value]);

  return (
    <Popover
      overlayClassName={styles.popover}
      content={
        <>
          <span style={{ fontWeight: 700 }}>切换主题色</span>
          <SketchPicker
            color={color}
            onChange={(hexColor: any) => {
              setColor(hexColor.rgb);
              if (onChange) {
                onChange(hexColor.rgb);
              }
            }}
          />
        </>
      }
      trigger="click"
    >
      <div
        className={styles.swatch}
        style={{
          ...style,
          background: `rgba(${color?.r}, ${color?.g}, ${color?.b}, ${color?.a})`,
        }}
      ></div>
    </Popover>
  );
};

export default ColorPicker;
