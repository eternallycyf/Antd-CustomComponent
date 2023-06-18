import { Modal as AntdModal, ModalProps } from 'antd';
import React, { useRef, useState } from 'react';
import type { DraggableData, DraggableEvent } from 'react-draggable';
import Draggable from 'react-draggable';

interface IModalPlusProps extends Omit<ModalProps, 'title'> {
  title?: React.ReactNode;
}

const PlusModal: React.FC<IModalPlusProps> = (props) => {
  const [disabled, setDisabled] = useState(true);
  const [bounds, setBounds] = useState({ left: 0, top: 0, bottom: 0, right: 0 });
  const draggleRef = useRef<HTMLDivElement>(null!);
  const { children, title, ...rest } = props;

  const onStart = (_event: DraggableEvent, uiData: DraggableData) => {
    const { clientWidth, clientHeight } = window.document.documentElement;
    const targetRect = draggleRef.current?.getBoundingClientRect();
    if (!targetRect) {
      return;
    }
    setBounds({
      left: -targetRect.left + uiData.x,
      right: clientWidth - (targetRect.right - uiData.x),
      top: -targetRect.top + uiData.y,
      bottom: clientHeight - (targetRect.bottom - uiData.y),
    });
  };

  return (
    <AntdModal
      title={
        <div style={{ width: '100%', cursor: 'move' }} onMouseOver={() => disabled && setDisabled(false)} onMouseOut={() => setDisabled(true)}>
          {title}
        </div>
      }
      modalRender={(modal) => (
        <Draggable disabled={disabled} bounds={bounds} onStart={(event, uiData) => onStart(event, uiData)}>
          <div ref={draggleRef}>{modal}</div>
        </Draggable>
      )}
      {...rest}
    >
      {children}
    </AntdModal>
  );
};

export default PlusModal;
