import React, { useState, useEffect, FC } from 'react';
import { Popover } from 'antd';
import { SketchPicker } from 'react-color';
import styles from './index.less';
import { IRgba } from '@/core/layouts/BasicLayout';
import { Dispatch } from '@umijs/max';

interface IProps {
  color: IRgba;
  value?: IRgba;
  style?: React.CSSProperties;
  onChange?: (value: IRgba) => void;
  dispatch: Dispatch;
}

const ColorPicker: FC<IProps> = (props) => {
  const { value, style, color, onChange, dispatch } = props;

  const handleColorOnChange = (hexColor: { rgb: IRgba }) => {
    const color = hexColor.rgb;
    dispatch({
      type: 'global/changeColor',
      color: color,
    });
    if (onChange) {
      onChange(color);
    }
  };

  return (
    <Popover
      overlayClassName={styles.popover}
      content={
        <>
          <span style={{ fontWeight: 700 }}>切换主题色</span>
          <SketchPicker color={color} onChange={handleColorOnChange} />
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
