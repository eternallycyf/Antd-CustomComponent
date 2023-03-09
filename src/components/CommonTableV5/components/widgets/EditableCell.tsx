import { EditableContext } from '@/components/CustomForm/FormItem/editRow';
import { getFieldComp } from '@/core/helpers';
import { IBaseFormControlType } from '@/typings/base';
import { InputNumber, Input, Form, FormInstance, FormItemProps } from 'antd';
import React, { useContext } from 'react';

interface EditableCellProps extends React.HTMLAttributes<HTMLElement> {
  fieldProps: {
    form: FormInstance;
    controlProps: any;
    disabled: boolean;
    formFieldProps: FormItemProps;
    itemProps: any;
    label: string;
    name: string;
    type: IBaseFormControlType;
  };
  record: any;
  type: IBaseFormControlType;
}

export const EditableCell: React.FC<EditableCellProps> = (props) => {
  const { children, fieldProps, record, type, ...restProps } = props;
  const tableParams = useContext(EditableContext)!;
  const { editingKey = '', rowKey = '' } = tableParams;
  const editing = record && record[rowKey as string] === editingKey;

  return (
    <td {...restProps}>{editing ? getFieldComp(fieldProps) : children}</td>
  );
};
