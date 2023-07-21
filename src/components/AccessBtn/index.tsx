import { getFieldComp } from '@/core/helpers';
import { IButtonProps } from '@/typings';
import { ConnectState } from '@/typings/connect';
import { getUUID } from '@/utils/random';
import { connect } from '@umijs/max';
import { Button, Form, Popconfirm, Space } from 'antd';
import React, { Fragment, useEffect, useState } from 'react';
import ButtonGroup from './ButtonGroup';
import styles from './index.less';

interface IProps {
  className?: string;
  accessCollection?: string[];
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
      const {
        code,
        text,
        size,
        onClick,
        buttonType,
        groupDict = [],
        groupValue,
        formItemProps,
        onChange,
        deleteText = '',
        visible,
        ...restProps
      } = btn;

      if (code && accessCodeList.indexOf(code) === -1) return null;

      if (buttonType === 'custom') {
        return <Fragment key={index}>{text}</Fragment>;
      }

      if (buttonType === 'formItem') {
        return (
          <Form.Item
            key={index}
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

      if (buttonType === 'delete') {
        return (
          <Popconfirm
            key={index}
            title={deleteText || '确认删除该记录'}
            data-code={code || getUUID()}
            onConfirm={onClick}
            okButtonProps={{ classNames: styles['btn-primary'] }}
            cancelButtonProps={{ classNames: styles['btn-default'] }}
            overlayStyle={{ maxWidth: 400 }}
          >
            <Button key={`access-${code || index}${getUUID()}`} size={size || 'middle'} danger type="link" {...restProps}>
              {text}
            </Button>
          </Popconfirm>
        );
      }

      if (buttonType === 'link') {
        return (
          <Button key={`access-${code || index}${getUUID()}`} size={size || 'small'} type="link" onClick={onClick as any} {...restProps}>
            {text}
          </Button>
        );
      }

      return (
        <Button key={`access-${code || index}${getUUID()}`} size={size || 'middle'} type="primary" onClick={onClick as any} {...restProps}>
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
