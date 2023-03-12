import { Button, Tooltip, type ButtonProps } from 'antd';
import React, { FC, CSSProperties, ReactNode, SetStateAction } from 'react';
import { QuestionCircleFilled, RetweetOutlined } from '@ant-design/icons';

interface IToggleBtnValue {
  size?: ButtonProps['size'];
  buttonType: ButtonProps['type'];
  buttonStyle?: CSSProperties;
  tootipStyle?: CSSProperties;
  toggleIconStyle?: CSSProperties;
  label: ReactNode | string;
  tooltip?: ReactNode | string;
  toggleIcon?: ReactNode | string;
  hasTooltip?: boolean;
}

type IToggleDict = Record<string, IToggleBtnValue>;

type IToggleButtonProps<T> = {
  status: string;
  setStatus: React.Dispatch<SetStateAction<any>>;
  dict: IToggleDict;
  cb?: (status: keyof T) => void;
};

type IDefaultProps = {
  [Key in string as `default${Key & string}`]: any;
};

const ToggleButton = <T extends Record<string, IToggleBtnValue>>({
  status,
  setStatus,
  dict,
  cb,
}: IToggleButtonProps<T>) => {
  const currentDict: IToggleBtnValue = dict[status];
  const currentSize: IToggleBtnValue['size'] = currentDict?.size || 'small';
  const toggleDictStatus: string = Object.keys(dict).find((item) => item != status) as string;
  const otherDict: IToggleBtnValue = dict[toggleDictStatus];

  const defaultProps: IDefaultProps = {
    defaultHasTooltip: true,
    defaultToggleIcon: <RetweetOutlined />,
    defaultButtonStyle:
      currentDict.buttonType == 'primary' ? {} : { color: '#1348a2', border: '1px solid #1348a2', background: '#fff' },
    defaultIconStyle: currentDict.buttonType == 'default' ? {} : { color: 'rgba(255,255,255,0.7)' },
  };

  return (
    <Button
      type={currentDict.buttonType}
      onClick={() => {
        if (cb) {
          cb(toggleDictStatus);
        } else {
          setStatus({ status: toggleDictStatus });
        }
      }}
      icon={currentDict?.toggleIcon || defaultProps.defaultToggleIcon}
      size={currentSize}
      style={{ ...defaultProps.defaultButtonStyle, ...currentDict.buttonStyle }}
    >
      {otherDict.label}
      {(otherDict?.hasTooltip || defaultProps.defaultHasTooltip) && (
        <Tooltip title={otherDict?.tooltip || ''}>
          <QuestionCircleFilled
            style={{
              ...defaultProps.defaultIconStyle,
              ...currentDict.toggleIconStyle,
            }}
          />
        </Tooltip>
      )}
    </Button>
  );
};

export default ToggleButton;
