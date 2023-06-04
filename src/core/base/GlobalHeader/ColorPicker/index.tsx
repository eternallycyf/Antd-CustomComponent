import React, { useState, useEffect, FC } from 'react';
import { ColorPicker, ColorPickerProps } from 'antd';
import styles from './index.less';
import type { Color } from 'antd/es/color-picker';
import { IRgba } from '@/core/layouts/BasicLayout';
import { Dispatch } from '@umijs/max';

interface IProps {
  color: IRgba;
  value?: IRgba;
  style?: React.CSSProperties;
  onChange?: (value: IRgba) => void;
  dispatch: Dispatch;
}

const ThemeColorPicker: FC<IProps> = (props) => {
  const { value, style, color, onChange, dispatch } = props;

  const handleColorOnChange: ColorPickerProps['onChange'] = (colorValues) => {
    const color = colorValues.toRgb() as any as IRgba;
    dispatch({
      type: 'global/changeColor',
      color: color,
    });
    if (onChange) {
      onChange(color);
    }
  };

  return <ColorPicker format="rgb" value={color as any as Color} onChange={handleColorOnChange} />;
};

export default ThemeColorPicker;
