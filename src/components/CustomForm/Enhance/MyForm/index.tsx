import { CustomTooltip } from '@/components';
import { renderFormItem } from '@/utils/util';
import { Button, Col, Form, Row, Space } from 'antd';
import _ from 'lodash';
import { forwardRef, useImperativeHandle } from 'react';
import styles from './index.less';
import { IHandle, IMyFormProps } from './interface';

const MyForm: React.ForwardRefRenderFunction<IHandle, IMyFormProps> = (props) => {
  const [form] = Form.useForm();
  const { wrapperRef, formList, isViewMode, defaultValue, onFinish, formProps, onResetCallback, ...restProps } = props;

  useImperativeHandle(wrapperRef, () => ({
    form,
    getParserValues,
  }));

  const getFormItem = (isView: boolean, { maxLength = 20, ...item }) => {
    const formValue = form.getFieldValue(item.name);
    const formValues = form.getFieldsValue();
    let value = isView ? defaultValue?.[item?.name] : formValue;
    const values = isView ? defaultValue : formValues;
    value = item?.parser && isView ? item.parser(value, values) : value;

    if (!isView) return renderFormItem(item);
    if (item?.render) {
      return <span className={styles.desc}>{item.render(value, values, form)}</span>;
    }

    return <CustomTooltip paragraphClassName={styles.desc} text={value ?? '--'} maxLength={maxLength} />;
  };

  const getParserValues: IHandle['getParserValues'] = (record, formList, isInit = true, cb) => {
    const values = _.mapValues(record, (value, key) => {
      const item = formList.find((item: any) => item?.name === key);
      return item?.parser && item?.isView ? item.parser(value, record) : value;
    });
    if (isInit) form.setFieldsValue(cb ? cb(values) : values);
    return values;
  };

  const handleOnFinish = (_values: any) => {
    const values = isViewMode ? defaultValue : _values;
    const resultValue = _.mapValues(values, (value, key) => {
      const item = formList?.find((item: any) => item?.name === key);
      const isView = item?.isView || isViewMode;
      const newValue = isView ? defaultValue?.[key] : value;
      return item?.transform ? item.transform(newValue, values) : newValue;
    });
    onFinish(resultValue);
  };

  const handleReset = () => {
    form.resetFields();
    if (onResetCallback) onResetCallback();
  };

  return (
    <Form form={form} onFinish={handleOnFinish} {...formProps}>
      <Row>
        {(formList || []).map(({ isView = isViewMode || false, ...item }, index: number) => (
          <Col span={item['span'] || 24} key={index}>
            <Form.Item
              labelAlign="right"
              label={typeof item.label === 'function' ? item.label() : item.label}
              name={item.name as string}
              initialValue={item.initialValue}
              {...item?.layout}
              {...item.itemProps}
            >
              {getFormItem(isView, item)}
            </Form.Item>
          </Col>
        ))}
      </Row>
      <Row>
        <Col span={24} style={{ textAlign: 'right' }}>
          <Space>
            <Button type="primary" htmlType="submit">
              提交
            </Button>
            <Button type="default" onClick={handleReset}>
              重置
            </Button>
          </Space>
        </Col>
      </Row>
    </Form>
  );
};

export default forwardRef(MyForm);
