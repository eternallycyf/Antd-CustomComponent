import { Button } from 'antd';
import React from 'react';
import { useEffect, useImperativeHandle, useState } from 'react';
import styles from './index.less';

export interface IButtonGroupDefaultProps {
  value: string | number | undefined;
  data: { value: string; name: string }[];
  style?: React.CSSProperties;
  className?: string;
  getCurrentValue?: (value: string) => void;
}

type IHandle = {
  type: string;
};

const ButtonGroup: React.ForwardRefRenderFunction<IHandle, IButtonGroupDefaultProps> = (props, ref) => {
  const { data, style, className, getCurrentValue, value } = props;
  const [type, setType] = useState(value);

  const handleOnChange = (value: string) => {
    setType(value);
    getCurrentValue && getCurrentValue(value);
  };

  return (
    <Button.Group size="small" style={style} className={`${styles.btnGroup} ${className}`}>
      {(data || [])?.map((item) => (
        <Button type={item.value === type ? 'primary' : 'default'} onClick={() => handleOnChange(item.value)}>
          {item.name}
        </Button>
      ))}
    </Button.Group>
  );
};

export default React.forwardRef(ButtonGroup);