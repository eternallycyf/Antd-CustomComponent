import { Button, ButtonProps, Modal, ModalFuncProps } from 'antd';
import React from 'react';
import styles from './index.less';

interface IAsyncConfirm {
  footerBtns: any[];
  modalProps: ModalFuncProps;
  type: ModalFuncProps['type'];
}

export const asyncConfirm = (props: IAsyncConfirm): Promise<{ destory: Function; update: Function }> => {
  const { footerBtns, modalProps, type = 'info' } = props;

  return new Promise((resolve) => {
    const { content } = modalProps;
    const originContent = modalProps?.footer ? (
      modalProps?.footer
    ) : (
      <div className={styles.confirm_btns}>
        {footerBtns.map((b) => (
          <Button
            {...b.btnProps}
            key={b.code}
            onClick={() => {
              if (b.code === false) {
                b.onClick ? b.onClick(b.code, modalRef.destroy) : modalRef.destroy();
              } else {
                b.onClick ? b.onClick(b.code, modalRef.destroy) : modalRef.destroy();
              }
            }}
          >
            {b.btnChild}
          </Button>
        ))}
      </div>
    );

    const modalContent = <>{content}</>;

    const footer =
      modalProps?.footer == undefined && footerBtns?.length == 0
        ? {}
        : {
            footer: originContent,
          };

    const modalRef = Modal[type]({
      ...modalProps,
      ...footer,
      className: styles.async_confirm,
      content: modalContent as any,
    });
    resolve(modalRef as any as Promise<{ destory: Function; update: Function }>);
  });
};

interface ICreateModal {
  onOk?: (status: boolean, destoryFn: () => void) => void;
  type?: ModalFuncProps['type'];
  title?: React.ReactNode;
  content?: React.ReactNode;
  modalProps?: ModalFuncProps;
  footerBtns: {
    code: boolean;
    btnChild: React.ReactNode;
    btnProps?: ButtonProps;
    onClick?: (status: boolean, destoryFn: () => void) => void;
  }[];
}

const CustomModal = async ({
  onOk = (status, destoryFn) => {
    destoryFn();
  },
  type = 'info',
  title = '确定删除嘛',
  content = '',
  modalProps = {},
  footerBtns = [
    { code: false, btnChild: '取消' },
    {
      btnProps: { type: 'primary' },
      code: true,
      btnChild: '确定',
      onClick: onOk,
    },
  ],
}: ICreateModal) => {
  return await asyncConfirm({
    footerBtns,
    type,
    modalProps: {
      title,
      content,
      ...modalProps,
    },
  });
};

export default CustomModal;
