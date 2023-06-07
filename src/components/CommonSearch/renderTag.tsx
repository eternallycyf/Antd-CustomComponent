import React, { useState, useRef, useEffect } from 'react';
import { Tooltip } from 'antd';
import { CloseOutlined, DownOutlined, UpOutlined } from '@ant-design/icons';
import styles from './index.less';
import { IToolTipTagProps } from './index';

interface IRenderTag extends Pick<IToolTipTagProps, 'handleDeleteTag' | 'checkBoxStatus'> {
  index: number;
  item: any;
}

export default function RenderTag(props: IRenderTag) {
  const { item, index, handleDeleteTag, checkBoxStatus } = props;
  // 当formItem的 isShowCheckAllTag 判断是否有全选的checkbox
  let { isShowCheckAllTag = false } = item;
  const [toggle, setToggle] = useState(false);
  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(true);
  const divRef = useRef<any>(null);
  const { mode, controlProps = {} } = item;

  useEffect(() => {
    const { clientWidth, scrollWidth } = divRef.current || {};
    // let values = item.dict.map(item => item.title).slice(0, 15)
    let values = [];
    if (typeof item.value === 'string') {
      values = item.value.split(',');
    } else if (Array.isArray(item.value)) {
      values = item.value;
    }
    if (clientWidth && scrollWidth > clientWidth && flag) {
      setCount(values.length - 1);
      setFlag(false);
    }
  }, [item.value]);

  const isMultiple = mode === 'multiple' || controlProps.mode === 'multiple';
  let values = [];
  if (typeof item.value === 'string') {
    values = item.value.split(',');
  } else if (Array.isArray(item.value)) {
    values = item.value;
  }

  // 当formItem的 isShowCheckAllTag＝true 属性的时候 tag标签只显示全选
  // 当checkbox的状态非全选 就显示单个的
  let info;

  if (!isShowCheckAllTag || !checkBoxStatus) {
    info = values?.map((info: any) => (
      <Tooltip placement="top" title={item.label} key={`${item.name}_${info}`}>
        <div className={styles.tagItem}>
          <span className={styles.tagItemText}>{info}</span>
          <CloseOutlined onClick={handleDeleteTag.bind(null, { ...item, itemValue: info }, index)} className={styles.tagItemIcon} />
        </div>
      </Tooltip>
    ));
  } else {
    info = values?.map((info: any) => (
      <Tooltip placement="top" title={item.label} key={`${item.name}_${info}`}>
        <div className={styles.tagItem}>
          <span className={styles.tagItemText}>全选</span>
          <CloseOutlined onClick={handleDeleteTag.bind(null, { ...item, itemValue: info }, index, checkBoxStatus)} className={styles.tagItemIcon} />
        </div>
      </Tooltip>
    ))[0];
  }

  return isMultiple ? (
    <div className={styles.tagGroup}>
      <div
        className={styles.tags}
        ref={divRef}
        style={{
          flexWrap: toggle ? 'wrap' : 'nowrap',
          overflow: toggle ? 'auto' : 'hidden',
        }}
      >
        {info}
      </div>
      {count !== 0 && values.length > count && !checkBoxStatus && (
        <div className={styles.tagItem} onClick={() => setToggle(!toggle)}>
          <span className={styles.tagItemText}>{toggle ? '收起' : `更多＋${values.length - count}`}</span>
          {toggle ? <UpOutlined className={styles.tagItemIcon} /> : <DownOutlined className={styles.tagItemIcon} />}
        </div>
      )}
    </div>
  ) : (
    info
  );
}
