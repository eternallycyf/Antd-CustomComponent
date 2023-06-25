import { Button } from 'antd';
import React, { useState } from 'react';
import styles from './index.less';

export interface IButtonGroupDefaultProps {
  value: string | number | undefined;
  data: { value: string | number; name: string }[];
  style?: React.CSSProperties;
  className?: string;
  getCurrentValue?: (value: string | number) => void;
}

type IHandle = {
  type: string;
};

const ButtonGroup: React.ForwardRefRenderFunction<IHandle, IButtonGroupDefaultProps> = (props, ref) => {
  const { data, style, className, getCurrentValue, value } = props;
  const [type, setType] = useState(value);

  const handleOnChange = (value: string | number) => {
    setType(value);
    getCurrentValue && getCurrentValue(value);
  };

  return (
    <Button.Group size="small" style={style} className={`${styles.btnGroup} ${className}`}>
      {(data || [])?.map((item) => (
        <Button key={item.value} type={item.value === type ? 'primary' : 'default'} onClick={() => handleOnChange(item.value)}>
          {item.name}
        </Button>
      ))}
    </Button.Group>
  );
};

export default React.forwardRef(ButtonGroup);
