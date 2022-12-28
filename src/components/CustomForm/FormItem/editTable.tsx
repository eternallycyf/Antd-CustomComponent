import React, { useImperativeHandle } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Form } from 'antd';
import { Button } from 'antd';
import CommonTable from '@/components/CommonTableV4/CommonTableV4';
import { IControlProps } from '@/typings';
import { getFieldComp } from '@/core/helpers';
import styles from './index.less';
const FormItem = Form.Item;
let uuid = 0;

const EditTableControl: React.FC<IControlProps> = React.forwardRef(
  ({ form, name, tableProps }: any, ref) => {
    const { getFieldValue } = form;
    const { rowKey, columns, operateList, ...otherTableProps } = tableProps;
    const dataSource = getFieldValue(name); // [{ id: '1', name: '1', age: '11' }]

    useImperativeHandle(ref, () => ({}));

    /**
     * 新增行记录
     */
    const newMember = () => {
      const data = form.getFieldValue(name);
      const fieldMap = columns.reduce((prev: any, curr: any) => {
        prev[`${curr.name}`] = '';
        prev[`${curr.type}`] = curr.type || 'input';
        return prev;
      }, {});

      data.push({ [rowKey as string]: `NEW_TEMP_ID_${uuid++}`, ...fieldMap });
      form.setFieldsValue({ [name]: data });
    };

    /**
     * 删除行记录
     * @param key
     */
    const handleRemove = (key: any) => {
      const data = form.getFieldValue(name);
      const newData = data.filter(
        (item: any) => item[rowKey as string] !== key,
      );
      form.setFieldsValue({ [name]: newData });
    };

    // 渲染表格列
    const renderColumns = () => {
      const formatColumns = columns.map((item: any) => ({
        title: item.label,
        key: item.name,
        dataIndex: item.name,
        render: (text: string, record: any, index: number) => {
          const fieldProps = {
            form,
            type: item.type || 'input',
            initialValue: text,
            name: `${name}_${item.name}_[${index}]`,
            controlProps: item.controlProps,
            formFieldProps: item.formFieldProps,
          };
          return <FormItem>{getFieldComp(fieldProps)}</FormItem>;
        },
      }));
      return [...formatColumns];
    };

    return (
      <div className={styles['edit-table']}>
        <CommonTable
          {...otherTableProps}
          rowKey={rowKey}
          selectType={false}
          columns={renderColumns()}
          dataSource={dataSource}
        />
        <Button
          ghost
          onClick={newMember}
          type="primary"
          size="small"
          icon={<PlusOutlined />}
        >
          添加
        </Button>
      </div>
    );
  },
);
export default EditTableControl;
