import React, { useState, useEffect, Fragment } from 'react';
import { connect } from '@umijs/max';
import { Button, Space, Form } from 'antd';
import { ConnectState } from '@/typings/connect';
import { IButtonProps } from '@/typings';
import { getUUID } from '@/utils/random';
import styles from './index.less';
import ButtonGroup from './ButtonGroup';
import { getFieldComp } from '@/core/helpers';

interface IProps {
  className?: string;
  accessCollection?: string[]; // 权限集合
  children?: React.ReactNode;
  type?: 'ButtonGroup' | 'Button';
  btnList?: IButtonProps[];
}

const AccessBtn: React.FC<IProps> = (props) => {
  const { type = 'Button', accessCollection = [], btnList, children } = props;
  const [button, setButton] = useState([]);

  useEffect(() => {
    const button = getButtonTpl(accessCollection);
    setButton(button as any);
  }, [btnList, children]);

  const getButtonTpl = (accessCollection: string[]) => {
    const accessCodeList = accessCollection.map((item) => item);

    const btnEleList = (btnList || []).map((btn, index) => {
      const { code, text, size, onClick, buttonType, groupDict = [], groupValue, formItemProps, onChange, ...restProps } = btn;

      if (code && accessCodeList.indexOf(code) === -1) return null;

      if (buttonType === 'custom') {
        return text;
      }

      if (buttonType === 'formItem') {
        return (
          <Form.Item
            name={formItemProps?.name as string}
            label={formItemProps?.label as string}
            {...formItemProps?.itemProps}
            style={{ marginBottom: 0, minWidth: 150, ...formItemProps?.itemProps?.style }}
          >
            {getFieldComp(formItemProps as any)}
          </Form.Item>
        );
      }

      if (buttonType === 'group') {
        return (
          <ButtonGroup
            value={groupValue as any}
            key={`access-${code || index}${getUUID()}`}
            data={groupDict}
            getCurrentValue={onChange}
            {...restProps}
          />
        );
      }
      return (
        <Button key={`access-${code || index}${getUUID()}`} size={size || 'small'} type="primary" onClick={onClick as any} {...restProps}>
          {text}
        </Button>
      );
    });

    const childrenList =
      React.Children.map(children as any, (child: React.ReactElement<any>, index) => {
        if (!child) return null;

        const hasPerm = !child.props['data-code'] || accessCodeList.indexOf(child.props['data-code']) !== -1;
        if (hasPerm) {
          const key = child.props['data-code'] || index;
          return React.cloneElement(child, {
            key,
            size: child.props.size || 'small',
          });
        }
        return null;
      }) || [];

    return [...btnEleList, ...childrenList].filter((item) => item);
  };

  return type === 'ButtonGroup' ? <Button.Group>{button}</Button.Group> : <Space>{button}</Space>;
};

export default React.memo(
  connect(({ global }: ConnectState) => ({
    accessCollection: global.accessCollection || [],
  }))(AccessBtn),
);
