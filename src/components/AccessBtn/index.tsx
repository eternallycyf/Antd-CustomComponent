import React, { useState, useEffect, Fragment } from 'react';
import { connect } from 'dva';
import { Button } from 'antd';
import { ConnectState } from '@/typings/connect';
import { IButtonProps } from '@/typings';
import { getUUID } from '@/utils/random';

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
      const { code, text, size, ...restProps } = btn;

      if (code && accessCodeList.indexOf(code) === -1) return null;
      return (
        <Button
          key={`access-${code || index}${getUUID()}`}
          size={size || 'small'}
          type="primary"
          {...restProps}
        >
          {text}
        </Button>
      );
    });

    const childrenList =
      React.Children.map(
        children as any,
        (child: React.ReactElement<any>, index) => {
          if (!child) return null;

          const hasPerm =
            !child.props['data-code'] ||
            accessCodeList.indexOf(child.props['data-code']) !== -1;
          if (hasPerm) {
            const key = child.props['data-code'] || index;
            return React.cloneElement(child, {
              key,
              size: child.props.size || 'small',
            });
          }
          return null;
        },
      ) || [];

    return [...btnEleList, ...childrenList].filter((item) => item);
  };

  return type === 'ButtonGroup' ? (
    <Button.Group>{button}</Button.Group>
  ) : (
    <Fragment>{button}</Fragment>
  );
};

export default React.memo(
  connect(({ login }: ConnectState) => ({
    accessCollection: login.accessCollection || [],
  }))(AccessBtn),
);
