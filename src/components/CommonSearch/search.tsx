import React, { useEffect, useImperativeHandle, useState } from 'react';
import _ from 'lodash';
import cx from 'classnames';
import { ReloadOutlined, SearchOutlined, DownOutlined, UpOutlined } from '@ant-design/icons';
import { Button, Col, Row, Form, RowProps } from 'antd';
import { getFieldComp } from '@/core/helpers';
import { IToolTipTagProps } from './index';
import styles from './index.less';
import { ISearchesType } from '@/typings';
const dateFormat = 'YYYYMMDD';
const monthFormat = 'YYYYMM';
const yearFormat = 'YYYY';
const quarterFormat = 'YYYY-Q';

export interface ISearchProps extends IToolTipTagProps {
  children?: any;
  handleTagList?: any;
  handleResetCallback?: () => void;
  handleToggleFormCallBack?: () => void;
  rowProps?: RowProps;
  isInline?: boolean;
  wrapperClassName?: string;
  preChildren?: React.ReactNode;
}

const formatByAcpCode = (defaultFormList: ISearchesType): ISearchesType => {
  const accessCollection = JSON.parse(sessionStorage.getItem('accessCollection') || '[]');
  const formList = defaultFormList
    .filter(({ acpCode }) => (acpCode ? accessCollection.includes(acpCode) : true))
    ?.map((item) => {
      if (item?.children) {
        return {
          ...item,
          children: item.children && formatByAcpCode(item.children || []),
        };
      } else {
        return item;
      }
    });
  return formList;
};

const CommonSearch: React.FC<ISearchProps> = React.forwardRef((props, ref) => {
  const {
    formList: defaultFormLIst,
    showSearchBtn = true,
    showResetBtn = true,
    columnNumber,
    preChildren,
    children,
    handleResetPreCallback,
    handleResetCallback,
    rowProps = {},
    isInline = false,
    showLine = true,
    handleToggleFormCallBack,
  } = props;
  const [form] = Form.useForm();
  const [state, setState] = useState({
    expandForm: props?.expandForm || true,
    searchParams: {},
  });
  const formList = formatByAcpCode(defaultFormLIst);

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
    const _formList: any[] = [];
    formList.forEach((item) => {
      _formList.push(item);
      item.children && _formList.push(...item.children);
    });
    const formDict = _.keyBy(_formList, 'name');
    const data: any = {};

    Object.keys(values).forEach((key) => {
      const sourceItem = formDict[key] as any;
      const format = sourceItem?.format;
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
    const fn = () => {
      const formData = form.getFieldsValue();
      triggerSearch(formatSubmitValues(formData));
    };

    if (handleResetPreCallback) {
      handleResetPreCallback(fn);
    } else {
      fn();
    }

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
    setState((prevState: any) => ({ ...prevState, expandForm: !state?.expandForm }));
    document.dispatchEvent(new Event('toggleForm'));
    setTimeout(() => {
      handleToggleFormCallBack && handleToggleFormCallBack();
    }, 0);
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
      if (otherProps?.dict?.find?.((item: any) => item.text == '全部')) {
        myControlProps.allowClear = true;
      }
      myControlProps.labelInValue = true;
      otherProps.placeholder = otherProps?.placeholder || `请选择${typeof otherProps?.label == 'string' ? otherProps?.label : ''}`;
    }

    if (type == 'input') {
      otherProps.placeholder = otherProps?.placeholder || `请输入${typeof otherProps?.label == 'string' ? otherProps?.label : ''}`;
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
  const formListLength = formList.length || 0;
  const showCount = expandForm ? columnNumber : formListLength;
  const lineLength = columnNumber; // 一行有多少个col 因为相关操作按钮占一个col 所以＋1
  const span = 24 / (lineLength as any);
  const isOneLine = formListLength <= columnNumber! * 2;
  const labelLengthArr = formList.map((item) => item?.labelWidth || (item?.label ? (item?.label as string)?.length + 1 : 0) * 12);
  let maxLabelLength = Math.max(...labelLengthArr);
  maxLabelLength = maxLabelLength > 100 ? 100 : maxLabelLength;

  return (
    <div className={`${cx('searchWrap', styles.searchWrap, { [styles.inLineForm]: isInline })} ${props?.wrapperClassName}`}>
      {preChildren}
      <Form layout="inline" colon={props.colon} onFieldsChange={onFieldsChange} form={form} onFinish={handleSubmit} className={styles.form}>
        {!isInline && (
          <Row align="middle" gutter={{ md: 4, lg: 12, xl: 24 }} style={{ flex: 1, width: '100%' }} {...rowProps}>
            {formList.map((field, index) => (
              <Col
                key={field.name as string}
                span={isOneLine ? field.col ?? span : span}
                style={{ display: index < (showCount as any) ? 'block' : 'none' }}
              >
                <Form.Item
                  labelAlign="left"
                  labelCol={
                    field?.itemProps?.labelCol ?? {
                      style: { width: 'auto', minWidth: formListLength > (columnNumber || 0) ? 'fit-content' : 'fit-content', padding: 0 },
                    }
                  }
                  label={field.label}
                  {...(field.itemProps as any)}
                >
                  {field.children ? field.children.map(renderFormItem) : renderFormItem(field)}
                </Form.Item>
              </Col>
            ))}
          </Row>
        )}

        {isInline && (
          <Row gutter={8} justify="end" align="middle" {...rowProps}>
            {formList.map((field, index) => (
              <Col key={field.name as string}>
                <Form.Item
                  labelAlign="right"
                  // labelCol={{ style: { maxWidth: '250px', minWidth: '70px' } }}
                  // wrapperCol={{ span: 17 }}
                  label={field.label}
                  style={{ width: '100%' }}
                  {...(field.itemProps as any)}
                >
                  {field.children ? field.children.map(renderFormItem) : renderFormItem(field)}
                </Form.Item>
              </Col>
            ))}
          </Row>
        )}

        {showSearchBtn && showResetBtn && (
          <div style={{ marginLeft: 10 }}>
            <Row style={{ marginBottom: 10 }}>
              {showResetBtn ? (
                <Button
                  style={{ marginRight: 10 }}
                  size="small"
                  htmlType="button"
                  className="btn-default"
                  icon={<ReloadOutlined />}
                  onClick={handleReset}
                >
                  重置
                </Button>
              ) : null}
              {showSearchBtn && (
                <Button type="primary" htmlType="submit" size="small" icon={<SearchOutlined />}>
                  查询
                </Button>
              )}
            </Row>
            {!isOneLine ? (
              <a className={styles.expandForm} onClick={toggleForm}>
                {expandForm ? '展开' : '收起'}
                <DownOutlined className={styles[expandForm ? 'expand' : 'close']} style={{ marginLeft: 6 }} />
              </a>
            ) : null}
          </div>
        )}
      </Form>
      {children}
      {showLine && showSearchBtn && (
        <>
          <div style={{ height: 8 }} />
          <div className={styles.line} />
          <div style={{ height: 16 }} />
        </>
      )}
    </div>
  );
});

CommonSearch.defaultProps = {
  columnNumber: 4,
  expandForm: true,
  showResetBtn: true,
  showSearchBtn: true,
  showLine: true,
};

export default React.memo(CommonSearch);
