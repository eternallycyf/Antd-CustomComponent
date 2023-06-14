import React, { useState, useImperativeHandle, Fragment } from 'react';
import { Col, Form, FormInstance, Row } from 'antd';
import { IControlProps } from '@/typings';
import { getFieldComp } from '@/core/helpers';
import { ISearchProps } from '@/components/CommonSearch/search';
import { getUUID } from '@/utils/random';

//  [
//   {
//     type: 'update',
//     itemProps: {
//       noStyle: true,
//       shouldUpdate: (pre, cru) => pre.activityName != cru.activityName,
//       next: (values, form) => {
//         if (values?.activityName == '1') {
//           return [
//             {
//               name: 'activityCode',
//               label: '活动编码',
//               type: 'input',
//               allowClear: true,
//               itemProps: {
//                 ...ITEM_PROPS,
//               },
//               layout,
//             },
//           ] as ISearchesType;
//         }
//         return false;
//       },
//     },
//   },
//   {
//     name: 'activityName',
//     label: '活动名称',
//     type: 'input',
//     allowClear: true,
//     itemProps: {
//       ...ITEM_PROPS,
//     },
//     layout,
//   },
// ];

type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>;
    }
  : T;

export interface IUpdateProps {
  shouldUpdate: (prevValues: any, nextValues: any) => boolean;
  next?: (values: any, form: Omit<FormInstance<any>, 'scrollToField' | 'getFieldInstance'>) => false | DeepPartial<ISearchProps>;
}

const renderFormItem = (item: any, index?: number) => {
  const { name, type, initialValue, formFieldProps, controlProps, ...otherProps } = item;
  const myControlProps = {
    ...controlProps,
    size: (controlProps && controlProps.size) || 'small',
  };
  const fieldProps = {
    name,
    type,
    initialValue,
    formFieldProps,
    controlProps: myControlProps,
    ...otherProps,
  };
  return getFieldComp(fieldProps);
};

const Update: React.FC<IUpdateProps> = React.forwardRef((props, ref) => {
  const { shouldUpdate, next, ...controlProps } = props;

  if (!next) return null;

  return (
    <Form.Item noStyle shouldUpdate={true}>
      {(form) => {
        const values = form.getFieldsValue();
        if (!next) return null;
        const nextValues = next(values, form);
        if (nextValues === false) return null;

        return (
          <Fragment key={getUUID()}>
            <Row>
              {(nextValues || []).map((item: any, index: number) => (
                <Col span={item['col'] || 24} key={index}>
                  <Form.Item
                    labelAlign="right"
                    label={item?.label}
                    name={item?.name}
                    rules={item?.rules || []}
                    initialValue={item?.initialValue}
                    {...item.layout}
                    {...item.itemProps}
                  >
                    {renderFormItem(item)}
                  </Form.Item>
                </Col>
              ))}
            </Row>
          </Fragment>
        ) as any;
      }}
    </Form.Item>
  );
});

Update.defaultProps = {
  next: () => false,
};

export default Update;
