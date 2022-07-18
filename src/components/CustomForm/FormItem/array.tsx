import React, { Fragment } from 'react';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Row, Col, Button } from 'antd';
import _ from 'lodash';
import { IControlProps } from '@/typings';
import { getFieldComp } from '@/core/helpers';

let uuid = 0;

const ArrayControl: React.FC<IControlProps> = React.forwardRef(
  ({ form, name, arrayProps }: any, ref) => {
    const { getFieldValue } = form;
    const { columns, rowKey = 'id' } = arrayProps;
    const dataSource = getFieldValue(name); // [{ name: '1', age: '11' }]

    // 新增
    const handleAdd = () => {
      const data = form.getFieldValue(name);
      const fieldMap = columns.reduce(
        (prev: any, curr: any) => {
          prev[`${curr.name}`] = '';
          prev.type = curr.type || 'input';
          return prev;
        },
        { type: 'input' },
      );

      data.push({ [rowKey]: `NEW_TEMP_ID_${uuid++}`, ...fieldMap });
      form.setFieldsValue({ [name]: data });
    };

    /**
     * 删除行记录
     * @param key
     */
    const handleRemove = (key: any) => {
      const data = form.getFieldValue(name);
      const newData = data.filter((item: any) => item[rowKey as any] !== key);
      form.setFieldsValue({ [name]: newData });
    };

    const renderField = () => {
      <Row gutter={16}>
        {dataSource.map((row: any, index: number) => (
          <Row key={index} gutter={12}>
            {Object.keys(row)
              .filter((row) => [rowKey, 'type'].indexOf(row) === -1)
              .map((field) => {
                const column = columns.find(
                  (column: any) => column.name === field,
                );
                const formProps = {
                  form,
                  name: `${name}_${field}_${index}`,
                  type: column.type || 'input',
                  initialValue: row[field],
                  controlProps: column.controlProps,
                  formFieldProps: column.formFieldProps,
                };
                return (
                  <Col
                    span={column.col || 24}
                    key={`${name}_${field}_${index}`}
                  >
                    {getFieldComp(formProps)}
                  </Col>
                );
              })}
            <Col span={1}>
              {dataSource.length > 0 ? (
                <MinusCircleOutlined
                  className="dynamic-delete-button"
                  onClick={() => handleRemove(row[rowKey])}
                />
              ) : null}
            </Col>
          </Row>
        ))}
      </Row>;
    };

    return (
      <>
        {renderField()}
        <Button
          type="dashed"
          onClick={handleAdd}
          size="small"
          style={{ width: '60%' }}
        >
          <PlusOutlined />å 新增
        </Button>
      </>
    );
  },
);
export default ArrayControl;
