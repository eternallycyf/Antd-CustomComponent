import React from 'react';
import { Form } from 'antd';
import '@/assets/styles/compatible.css';
import { Row, Col, Button } from 'antd';
import _ from 'lodash';
import cx from 'classnames';
import { CustomForm, FormControl, ModalType } from '@/typings';
import { getFieldComp } from '@/core/helpers';
import styles from './index.less';

const FormItem = Form.Item;
const PlainComp = ({
  className,
  children,
}: {
  className: string;
  children: React.ReactNode;
}) => <div className={className}>{children}</div>;

// 行内元素默认宽度
const defaultInlineWidth = {
  date: 140,
  month: 140,
  dataRange: 280,
  datetime: 140,
  select: 140,
  treeSelect: 140,
  cascade: 140,
  default: 140,
};

const FormBuilder: React.FC<CustomForm> = (props) => {
  console.log(props, '=======');

  const {
    form,
    type,
    record,
    formList,
    children,
    rows,
    cols,
    defaultLayout,
    loading,
    modalType,
    className,
    onCancel,
    onFinish,
    onClick,
    onFieldsChange,
    ...otherProps
  } = props;

  // 回调函数参数
  const funcCbParams = {
    form,
    record,
    formData: form.getFieldsValue(),
  };

  // 表单属性设置
  const formProps = [
    'hideRequiredMark',
    'labelAlign',
    'colon',
    'labelCol',
    'wrapperCo1',
  ].reduce((prev: any, next) => {
    if (otherProps[next]) {
      prev[next] = otherProps[next];
      delete otherProps[next];
    }
    return prev;
  }, {});

  /**
   * 重置表单
   */
  const onReset = () => {
    form.resetFields();
  };

  const statusJudge = (fieldHide: any, fieldDisabled: any, condition: any) => {
    let hide = fieldHide;
    let disabled = fieldDisabled;
    // 条件设置
    if (typeof fieldHide === 'function') {
      hide = fieldHide({ ...funcCbParams });
    }
    if (typeof fieldDisabled === 'function') {
      disabled = fieldDisabled({ ...funcCbParams });
    }
    if (condition) {
      condition.forEach(({ regex = {}, action }: any) => {
        let isPassed = true; // 是否满足条件
        for (const key in regex) {
          if ((regex[key]! = form.getFieldValue(key))) {
            isPassed = false;
          }
        }
        switch (action) {
          case 'disabled':
            disabled = isPassed;
            break;
          case 'hide':
            hide = !isPassed;
            break;
          case 'show':
            hide = !isPassed;
            break;
        }
      });
    }
    return { hide, disabled };
  };

  const ComponentRow = type == 'inline' ? PlainComp : Row;
  const ComponentCol = type === 'inline' ? PlainComp : Col;
  const cls = cx(styles['custom-form'], className, {
    [styles['form-inline']]: type === 'inline',
    [styles['form-grid']]: type === 'grid',
  });

  const buildRow = () => {
    const result: any = [];
    let rowIndex = 0;

    (formList as Array<any>).forEach((config) => {
      // 有元素包裹 => 将使用包裹元素进行包装
      if (config.WrappedComponent) {
        result.push(config);
        rowIndex += 2;
      } else {
        if (!result[rowIndex]) result[rowIndex] = [];
        result[rowIndex].push(config);
      }
    });
    return result;
  };

  const buildCol = (formFields: FormControl[]) =>
    formFields.map((field: any, i) => {
      // 传入个性化的列大小，改变这个值可以改变每行元素的个数
      let col = { ...cols };
      if (type === 'grid' && field.col) {
        col = field.col;
      } else if (type !== 'grid') {
        col = {};
      }
      let layout = { ...defaultLayout };
      if (type === 'grid' && field.layout) {
        layout = {
          ...defaultLayout,
          ...field.layout,
        };
      } else if (type !== 'grid') {
        layout = {};
      }
      const { hide, disabled } = statusJudge(
        field.hide,
        field.disabled,
        field.condition,
      );
      // 构造formProps
      const { itemProps, controlProps, name, other, otherText, ...restProps } =
        field;
      const fieldType = field.type || 'input';
      const myControlProps = {
        ...controlProps,
        size: (controlProps && controlProps.size) || 'small',
      };

      const fieldProps: any = {
        form,
        ...restProps,
        record,
        disabled,
        name,
        type: fieldType,
        controlProps: myControlProps,
      };

      if (type === 'inline') {
        fieldProps.width =
          fieldProps.width ||
          (defaultInlineWidth as any)[fieldType] ||
          defaultInlineWidth.default;
      }

      return (
        <ComponentCol key={`col-${i}`} className={styles['col-item']} {...col}>
          <FormItem
            className={styles.item}
            {...layout}
            {...itemProps}
            label={field.label}
          >
            {getFieldComp(fieldProps)}
            {other && (
              <span className="ant-form-text">
                <Button
                  onClick={onClick}
                  style={{
                    height: '22px',
                    lineHeight: '9px',
                    marginLeft: '6px',
                  }}
                >
                  {otherText}
                </Button>
              </span>
            )}
          </FormItem>
        </ComponentCol>
      );
    });

  return (
    <Form
      className={cls}
      onFinish={onFinish}
      onFieldsChange={onFieldsChange}
      {...formProps}
      {...(type === 'inline' && { layout: 'inline' })}
    >
      {buildRow().map((item: any, index: any) => {
        if (Array.isArray(item)) {
          return (
            <ComponentRow key={index} className={styles['row-item']} {...rows}>
              {buildCol(item)}
            </ComponentRow>
          );
        } else if (item.WrappedComponent) {
          return (
            <item.WrappedComponent {...funcCbParams}>
              <ComponentRow className={styles['row-item']} {...rows}>
                {buildCol(item)}
              </ComponentRow>
            </item.WrappedComponent>
          );
        }
      })}

      {children
        ? React.Children.map(
            children as any,
            (child: React.ReactElement<any>, index) => {
              return React.cloneElement(child, {
                size: child.props.size || 'small',
              });
            },
          )
        : null}

      {modalType === ModalType.normal && (
        <ComponentCol className={cx(styles['form-btn'])}>
          <Button
            title="提交"
            type="primary"
            htmlType="submit"
            loading={loading}
          >
            提交
          </Button>
          <Button title="重置" htmlType="button" onClick={onReset}>
            重置
          </Button>
        </ComponentCol>
      )}
      {modalType === ModalType.drawer && (
        <ComponentCol className="drawer-bottom-button">
          <Button title="取消" onClick={onCancel} style={{ marginRight: 8 }}>
            取消
          </Button>
          <Button
            title="提交"
            type="primary"
            htmlType="submit"
            loading={loading}
          >
            提交
          </Button>
        </ComponentCol>
      )}
    </Form>
  );
};

FormBuilder.defaultProps = {
  type: 'grid',
  loading: false,
  defaultLayout: {
    labelCol: { span: 6 },
    wrapperCol: { span: 16 },
  },
  other: '',
  otherText: '',
  rows: {
    // 当type为grid时，指定每两个元素的间隔
    gutter: 10,
  },
  cols: {
    // 当type为grid时，指定每行元素个数
    x5: 24,
    md: 24,
    x1: 24,
  },
};

export default React.memo(FormBuilder);
