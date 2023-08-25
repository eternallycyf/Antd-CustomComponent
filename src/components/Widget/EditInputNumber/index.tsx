import Icon from '@/components/Icon';
import Ellipsis from '@/core/base/Ellipsis';
import { CheckOutlined, CloseOutlined, EditOutlined, EditTwoTone } from '@ant-design/icons';
import { InputNumber, InputNumberProps, Space, Spin, Typography } from 'antd';
import { TextAreaProps } from 'antd/es/input';
import { Input } from 'antd/lib';
import _ from 'lodash';
import { ChangeEvent, ChangeEventHandler, FC, useEffect, useState } from 'react';
import styles from './index.less';
import variables from '@/assets/styles/variable.less';
const { Paragraph, Link } = Typography;

export interface IEditInputNumber<T = any> {
  text: number | string | undefined;
  record: T;
  editKey?: string;
  max?: number;
  type: 'inputNumber' | 'textArea';
  handleSave: (value: IEditInputNumber['text'], record: IEditInputNumber['record'], cb: Function) => any;
}

const EditInputNumber: FC<IEditInputNumber> = (props) => {
  const { text, record, editKey, max = 100, type, handleSave } = props;
  const [showInput, setShowInput] = useState<boolean>(false);
  const [value, setValue] = useState<IEditInputNumber['text']>(text);
  const [lastValue, setLastValue] = useState<IEditInputNumber['text']>(text);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setValue(text);
    setLastValue(text);
  }, [text]);

  const handleCancel = () => {
    setShowInput(false);
    setValue(lastValue);
  };

  const handleDefaultSave = () => {
    if (handleSave) {
      setLoading(true);
      handleSave(value, record, () => {
        setShowInput(false);
        setLastValue(value);
        setLoading(false);
      });
      return;
    }
  };

  const contentProps: any =
    type == 'textArea'
      ? ({
          value,
          onChange: (e) => setValue(e.target.value || undefined),
          placeholder: '请录入',
          allowClear: true,
          autoSize: true,
        } as TextAreaProps)
      : ({
          style: { flex: 1 },
          value: Number(value),
          onChange: (val: number) => setValue(String(val)),
          min: 0,
          max,
          precision: 2,
          placeholder: '请录入',
        } as InputNumberProps);

  return (
    <Spin spinning={loading} className={styles.EditInputNumber}>
      <div className={`${styles.columnItem}`}>
        {showInput || (type == 'textArea' && !lastValue) ? (
          <>
            {type == 'textArea' ? <Input.TextArea {...contentProps} /> : <InputNumber {...contentProps} />}
            <Link onClick={handleDefaultSave}>
              <CheckOutlined style={{ color: variables.green, margin: '0 12px' }} />
            </Link>
            <Link onClick={handleCancel}>
              <CloseOutlined style={{ color: variables.red }} />
            </Link>
          </>
        ) : (
          <>{value != undefined && <Ellipsis lines={2}>{type == 'inputNumber' ? Number(value)?.toFixed(2) : value}</Ellipsis>}</>
        )}
        <span onClick={() => setShowInput(true)} style={{ color: variables.primary, cursor: 'pointer' }}>
          <EditOutlined style={{ display: 'none', marginLeft: 5 }} className={!showInput && styles.icon} />
          {value == undefined && <a style={{ color: variables.primary, marginLeft: 6 }}>录入</a>}
        </span>
      </div>
    </Spin>
  );
};

export default EditInputNumber;
