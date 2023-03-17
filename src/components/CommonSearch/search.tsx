import React, { useEffect, useImperativeHandle, useState } from 'react';
import _ from 'lodash';
import cx from 'classnames';
import { ReloadOutlined, SearchOutlined, DownOutlined, UpOutlined } from '@ant-design/icons';
import { Button, Col, Row, Form } from 'antd';
import { getFieldComp } from '@/core/helpers';
import { IToolTipTagProps } from './index';
import styles from './index.less';
const dateFormat = 'YYYYMMDD';
const monthFormat = 'YYYYMM';
const yearFormat = 'YYYY';
const quarterFormat = 'YYYY-Q';

export interface ISearchProps extends IToolTipTagProps {
  children?: any;
  handleTagList?: any;
  handleResetCallback: () => void;
}

const CommonSearch: React.FC<ISearchProps> = React.forwardRef((props, ref) => {
  const { formList, showSearchBtn = true, showResetBtn = true, columnNumber, children, handleResetCallback } = props;
  const [form] = Form.useForm();
  const [state, setState] = useState({
    expandForm: props.expandForm,
    searchParams: {},
  });

  useEffect(() => {
    const { form, record } = props;
    if (record) form.setFieldsValue(record);
  }, [props]);

  useImperativeHandle(ref, () => ({
    form,
    formatSubmitValues,
  }));

  /**
   * 格式化提交的数据
   * 如果需要自定义 search 配置需要填写 transform
   * 如果是日期选择 默认 dateFormat
   * 如果是日期选择范围 解析key 格式：xxx＿1（必须）最终替换为xx＿1和xx＿2 默认dateFormat *如果是时间选择 转为时间戳
   */

  const formatSubmitValues = (values: any) => {
    const formDict = _.keyBy(formList, 'name');

    const data: any = {};

    Object.keys(values).forEach((key) => {
      const sourceItem = formDict[key] as any;
      const { format } = sourceItem;
      const value = values[key];

      if (!value && !_.isBoolean(value) && !_.isNumber(value)) return;
      data[key] = value;

      if (sourceItem.type === 'select' || sourceItem.type === 'treeSelect') {
        if (Array.isArray(value)) {
          data[key] = value.map((item) => item.key || item.value);
        } else {
          data[key] = value.key || value.value;
        }
      }

      if (sourceItem.type === 'date') {
        data[key] = (format && value.format(format)) || value.format(dateFormat);
      }

      if (sourceItem.type === 'year') {
        data[key] = (format && value.format(format)) || value.format(yearFormat);
      }

      if (sourceItem.type === 'quarter') {
        data[key] = (format && value.format(format)) || value.format(quarterFormat);
      }

      if (sourceItem.type === 'dateRange') {
        const [startTime, endTime] = value || [];
        if (!startTime || !endTime) return;

        const [startTimeKey, endTimeKey] = key.split(',');
        data[startTimeKey] = (format && startTime.format(format)) || startTime.format(dateFormat);
        data[endTimeKey] = (format && endTime.format(format)) || endTime.format(dateFormat);

        delete data[key];
      }

      if (sourceItem.type === 'month') {
        data[key] = (format && value.format(format)) || value.format(monthFormat);
      }

      if (sourceItem.type === 'monthRange') {
        const [startTime, endTime] = value || [];
        if (!startTime || !endTime) return;

        const [startTimeKey, endTimeKey] = key.split(',');
        data[startTimeKey] = startTime;
        data[endTimeKey] = endTime;

        delete data[key];
      }

      if (sourceItem.type === 'datetime' || sourceItem.type === 'time') {
        data[key] = value.unix();
      }

      if (sourceItem.transform) {
        data[key] = sourceItem.transform(value);
      }

      if (Array.isArray(sourceItem.fields) && sourceItem.transform) {
        const keyData = sourceItem.transform(value);
        sourceItem.fields.forEach((value: any, index: any, array: any) => {
          data[sourceItem.fields[index]] = keyData[index];
        });
      }
    });

    const result = _.pickBy(data, (item: any) => {
      if (_.isNumber(item) || _.isBoolean(item)) {
        return true;
      }
      return !_.isEmpty(item);
    });

    return {
      ...result,
      refresh_time: new Date().getTime(),
    };
  };

  // 触发搜索事件 如果新旧参数不变直接return
  const triggerSearch = (values: any) => {
    const { handleSearch } = props;
    setState((prevState) => ({ ...prevState, searchParams: values }));
    if (handleSearch) handleSearch(values);
  };

  /**
   * 重置查询
   */
  const handleReset = () => {
    form.resetFields();
    const formData = form.getFieldsValue();
    triggerSearch(formatSubmitValues(formData));
    if (handleResetCallback) {
      handleResetCallback();
    }
  };

  /**
   * 提交搜索
   */
  const handleSubmit = () => {
    form.validateFields().then((values) => {
      triggerSearch(formatSubmitValues(values));
    });
  };

  /**
   * 切换展开与收起
   */
  const toggleForm = () => {
    const { expandForm } = state;
    setState((prevState) => ({ ...prevState, expandForm: !expandForm }));
    document.dispatchEvent(new Event('toggleForm'));
  };

  /**
   * 渲染 formItem
   * @param field
   */
  const renderFormItem = (field: any) => {
    const { name, type, initialValue, formFieldProps, controlProps, ...otherProps } = field;

    const myControlProps = {
      ...controlProps,
      size: (controlProps && controlProps.size) || 'small',
    };

    if (type && type === 'select') {
      myControlProps.labelInValue = true;
    }

    const fieldProps = {
      form,
      name,
      type,
      initialValue,
      formFieldProps,
      controlProps: myControlProps,
      ...otherProps,
    };
    return getFieldComp(fieldProps);
  };

  const onFieldsChange = (changedFields: any, allFields: any) => {
    const { handleTagList, showToolTipTag } = props as any;
    if (showToolTipTag) {
      const changedValues = Object.values(changedFields).reduce((prev: any, curr: any) => {
        prev[curr.name] = curr.value;
        return prev;
      }, {});
      handleTagList(changedValues, allFields);
    }
  };

  const { expandForm } = state;
  const formListLength = formList.length;
  const showCount = expandForm ? columnNumber : formListLength;
  const lineLength = columnNumber; // 一行有多少个col 因为相关操作按钮占一个col 所以＋1
  const span = 24 / (lineLength as any);
  const isOneLine = formListLength <= (columnNumber as any);

  return (
    <div className={cx('searchWrap', styles.searchWrap)} style={{ border: (isOneLine as any) && undefined }}>
      <Form onFieldsChange={onFieldsChange} layout="inline" form={form} onFinish={handleSubmit} className={styles.form}>
        <Row align="middle" gutter={{ md: 4, lg: 12, xl: 24 }} style={{ flex: 1, width: '100%' }}>
          {formList.map((field, index) => (
            <Col
              key={field.name}
              span={isOneLine ? field.col || span : span}
              style={{ display: index < (showCount as any) ? 'block' : 'none', width: '100%' }}
            >
              <Form.Item
                labelAlign="right"
                labelCol={{ style: { maxWidth: '250px', minWidth: '100px' } }}
                // wrapperCol={{ span: 20 }}
                label={field.label}
                {...(field.itemProps as any)}
              >
                {renderFormItem(field)}
              </Form.Item>
            </Col>
          ))}
        </Row>
        <Row style={{ margin: '8px 0 5px 10px' }}>
          {showSearchBtn && (
            <Button type="primary" htmlType="submit" size="small" icon={<SearchOutlined />} style={{ marginRight: 10 }}>
              查询
            </Button>
          )}
          {showResetBtn ? (
            <Button size="small" htmlType="button" icon={<ReloadOutlined />} onClick={handleReset}>
              重置
            </Button>
          ) : null}
        </Row>
      </Form>
      {children}
      {!isOneLine ? (
        <a onClick={toggleForm} className={cx(styles.toggleForm, !expandForm && styles.expand)}>
          {expandForm ? '展开' : '收起'}
          {expandForm ? <DownOutlined /> : <UpOutlined />}
        </a>
      ) : null}
    </div>
  );
});

CommonSearch.defaultProps = {
  columnNumber: 4,
  expandForm: true,
  showResetBtn: true,
};

export default React.memo(CommonSearch);
