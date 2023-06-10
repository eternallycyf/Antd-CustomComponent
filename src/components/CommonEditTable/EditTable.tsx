// todo 合计
import { IButtonProps, ISearchesType } from '@/typings';
import { Column } from '@/typings/core/column';
import { Search } from '@/typings/core/form';
import { formatColumn } from '@/utils/util';
import { Col, Form, FormInstance, FormItemProps, FormListFieldData, Row, Spin, TableProps } from 'antd';
import React, { Key, useEffect, useImperativeHandle } from 'react';
import TableBtn from '../CommonTableV5/components/widgets/TableBtn';
import { Table } from './';
import styles from './index.less';
import { formatEditTableColumns, getCurrentFieldValue, handleExport, IHandleExport, renderFormItem } from './utils';

// #region
/**
 * @description context
 */
interface IEditTableContext<Values = any, FormItemsValues = any> extends ICommonEditTableHandle<Values, FormItemsValues> {
  operation: FormListOperation<Values>;
  values: Values[] | [] | undefined;
}

/**
 * @description 通用编辑表格
 * @type {Record<string,unknown>} Values 表单name
 * @type {Record<string,unknown>} Rest 其他自定义的参数 => (columnsType & Rest)[]
 */
export interface ICommonEditTableProps<Values = any, Rest = Record<string, unknown>, FormItemsValues = any> {
  /**@description 基础配置 */
  form: FormInstance<FormItemsValues>;
  status?: 'view' | 'edit';
  showIndex?: boolean;
  // 虚拟列表必须传入 scroll.y 高度
  isVirtual?: boolean;

  /**@description 其他内容配置 */
  beforeChildren?: React.ReactNode | ((value: IEditTableContext<Values, FormItemsValues>) => React.ReactNode);
  afterChildren?: React.ReactNode | ((value: IEditTableContext<Values, FormItemsValues>) => React.ReactNode);

  /**@description table配置 */
  tableProps?: TableProps<Values>;
  columns: ReturnType<IGetColumns<Values, Rest>>;
  itemButton?: IEditTableButtonProps<Values>;
  buttonLeft?: IEditTableNotItemButtonProps<Values>;
  buttonRight?: IEditTableNotItemButtonProps<Values>;
  buttonBottomLeft?: IEditTableNotItemButtonProps<Values>;
  buttonBottomRight?: IEditTableNotItemButtonProps<Values>;

  /**@description formList 配置 */
  name?: string;
  formListProps?: React.ComponentProps<typeof Form.List>;
  initialValues?: Values[];
  rules?: React.ComponentProps<typeof Form.List>['rules'];
}

/**
 * @description 通用编辑表格ref获取的方法
 */
export type ICommonEditTableHandle<Values = any, FormItemsValues = any> = {
  form: FormInstance<FormItemsValues>;
  handleExport: IHandleExport<Values>;
};

/**
 * @description 通用编辑表格的列的额外参数
 */
interface IColumnEditRestProps<Values> {
  type?: ISearchesType[number]['type'];
  label?: ISearchesType[number]['label'];
  name?: Values;
}

/**
 * @description columns
 * 只有 type === 'custom' || item.transform && status == 'view' 时 render 才会生效
 * item.transform ? item.transform : item.render
 */
export type IEditTableColumnsType<Values = any, Rest = Record<string, unknown>> = Omit<Column<Values>, 'formItemProps' | 'render'> & {
  formItemProps?: Omit<Search<Values>, 'name' | 'label' | 'type'> & {
    rules?: FormItemProps<Values>['rules'];
  };
  render?: (value: any, record: Values, index: number, allValues: Values[]) => React.ReactNode;
  shouldUpdate?: FormItemProps<Values>['shouldUpdate'];
  // status === 'view' 状态时 展示数据转换 和render一样 只不过为了使用formatCoumn的方法 用这个代替render
  transform?: (text: any, record: Values, index: number, allValues: Values[]) => React.ReactNode;
} & Rest &
  IColumnEditRestProps<Values>;

//#endregion

// #region 内部 interface
interface FormListOperation<Values = any> {
  add: (defaultValue?: Values, insertIndex?: number) => void;
  remove: (index: number | number[]) => void;
  move: (from: number, to: number) => void;
}

type IGetColumns<Values = any, Rest = Record<string, unknown>> = (operation: FormListOperation<Values>) => IEditTableColumnsType<Values, Rest>[];

interface IRenderFnProps<Values> {
  text: any;
  record: Values;
  index: number;
}

interface IVisibleFn<Values> {
  (text: any, record: Values, index: number): boolean;
}

type IClick<Values = any> = (record: IRenderFnProps<Values>, operation: FormListOperation<Values>) => void;
type INotItemButtonClick<Values = any> = (record: undefined, operation: FormListOperation<Values>) => void;
type IEditTableButtonProps<Values = any> = (Omit<IButtonProps<IClick<Values>>, 'visible'> & {
  visible?: boolean | IVisibleFn<Values>;
})[];
type IEditTableNotItemButtonProps<Values = any> = (Omit<IButtonProps<INotItemButtonClick<Values>>, 'visible'> & {
  visible?: boolean | IVisibleFn<Values>;
})[];
//#endregion

const CommonEditTable: React.ForwardRefRenderFunction<ICommonEditTableHandle, ICommonEditTableProps> = (props, ref) => {
  // #region
  const {
    form,
    status = 'edit',
    showIndex = true,
    isVirtual = false,

    beforeChildren,
    afterChildren,

    tableProps = {},
    columns: defaultColumns = [],
    itemButton: defaultItemButton = [],
    buttonLeft: defaultButtonLeft = [],
    buttonRight: defaultButtonRight = [],
    buttonBottomLeft: defaultButtonBottomLeft = [],
    buttonBottomRight: defaultButtonBottomRight = [],

    name: tableFormName = 'EditTable',
    formListProps = {},
    initialValues,
    rules = [],
  } = props;
  // @ts-ignore
  const [columns, setColumns] = React.useState<IEditTableColumnsType[]>(defaultColumns);
  const [itemButton, setItemButton] = React.useState<IEditTableButtonProps>(defaultItemButton);
  const [buttonLeft, setButtonLeft] = React.useState<IEditTableNotItemButtonProps>(defaultButtonLeft);
  const [buttonRight, setButtonRight] = React.useState<IEditTableNotItemButtonProps>(defaultButtonRight);
  const [buttonBottomLeft, setButtonBottomLeft] = React.useState<IEditTableNotItemButtonProps>(defaultButtonBottomLeft);
  const [buttonBottomRight, setButtonBottomRight] = React.useState<IEditTableNotItemButtonProps>(defaultButtonBottomRight);
  const {} = tableProps;
  const EditTableContextInitProps = { form, operation: {}, values: [] } as IEditTableContext;
  const EditTableContext = React.createContext<IEditTableContext>(EditTableContextInitProps);

  useImperativeHandle(ref, () => ({
    form,
    handleExport,
  }));

  const EditTableContextProviderProps = {
    form,
    values: form?.getFieldValue(tableFormName) || [],
    handleExport,
  };
  //#endregion

  // #region
  const getDefaultColumns: IGetColumns = (operation) => {
    const values = form?.getFieldValue(tableFormName) || [];

    let newColumns = columns.map((item: IEditTableColumnsType) => {
      const { dataIndex, label, formItemProps, type = 'view', ...restItem } = item;
      const { initialValue, rules = [], layout, itemProps } = formItemProps || {};
      return {
        dataIndex,
        ...restItem,
        render: (text: number, field: FormListFieldData, index: number) => {
          const renderProps = getCurrentFieldValue(form, tableFormName, index);
          const val = renderProps?.[0]?.[item?.dataIndex!];
          const currentValues = renderProps?.[0];
          const allValues = renderProps?.[1];
          const name = [field.name, dataIndex] as Key[];
          const key = field.key;
          const formProps = {
            ...restItem,
            name,
            type,
          };

          if (type == 'custom') {
            return item.render?.(val, currentValues, index, allValues);
          }

          if (status == 'view') {
            if (item.transform) {
              return item.transform?.(val, currentValues, index, allValues);
            }
            if (item.render) {
              return item.render?.(val, currentValues, index, allValues);
            }
            return formatEditTableColumns(item, val);
          }

          return (
            <Form.Item
              labelAlign="right"
              label={label as string}
              name={name}
              key={key}
              rules={rules || []}
              initialValue={initialValue}
              {...layout}
              {...itemProps}
            >
              {renderFormItem(form, formProps, index)}
            </Form.Item>
          );
        },
      };
    });
    if (itemButton && status === 'edit') {
      newColumns.push({
        title: '操作',
        align: 'center',
        width: values && values?.length != 0 ? itemButton.length * 70 : 60,
        dataIndex: 'operation',
        render: (text: number, field: FormListFieldData, index: number) => {
          const renderProps = getCurrentFieldValue(form, tableFormName, index);
          return renderButtonRow(itemButton, [], operation, { text: renderProps?.[0], record: renderProps?.[1], index });
        },
      });
    }
    if (showIndex) {
      newColumns.unshift({
        title: '序号',
        align: 'center',
        width: 60,
        render: (text: number, field: FormListFieldData, index: number) => (isVirtual ? field.key + 1 : index + 1),
      } as any);
    }

    return formatColumn(newColumns);
  };

  const renderButtonRow = (
    buttonLeft: IEditTableButtonProps | IEditTableNotItemButtonProps = [],
    buttonRight: IEditTableButtonProps | IEditTableNotItemButtonProps = [],
    operation: FormListOperation,
    renderProps?: Parameters<IClick>[0] | undefined,
  ) => {
    if (!buttonLeft.length && !buttonRight.length) return null;

    const getBtnProps = (button: IEditTableButtonProps | IEditTableNotItemButtonProps = []) => {
      return button.map((item) => {
        const { ...otherProps } = item;
        const buttonProps = {
          ...otherProps,
          onClick: () => {
            if (typeof item.onClick === 'function') {
              // @ts-ignore
              item.onClick(renderProps, operation);
            }
          },
          visible: !(item.visible == undefined
            ? true
            : typeof item.visible === 'function'
            ? item.visible(renderProps?.[0], renderProps?.[1], renderProps?.[2])
            : item.visible),
        };

        return buttonProps;
      });
    };

    if (renderProps) {
      return <TableBtn style={{ justifyContent: 'center' }} button={getBtnProps(buttonLeft)} />;
    }

    return (
      <Form.Item noStyle>
        <Row justify="space-between" align="middle">
          <Col>
            <TableBtn button={getBtnProps(buttonLeft)} />
          </Col>
          <Col>
            <TableBtn button={getBtnProps(buttonRight)} />
          </Col>
        </Row>
      </Form.Item>
    );
  };
  //#endregion

  return (
    <Form.List name={tableFormName} initialValue={initialValues} rules={rules} {...formListProps}>
      {(fields, operation, { errors }) => {
        return (
          <EditTableContext.Provider value={{ ...EditTableContextProviderProps, operation }}>
            <Form.Item noStyle>
              <EditTableContext.Consumer>{typeof beforeChildren === 'function' ? beforeChildren : () => null}</EditTableContext.Consumer>
            </Form.Item>
            {renderButtonRow(buttonLeft, buttonRight, operation)}
            <Form.Item className={`${styles.EditTableContent}`}>
              <Table
                isVirtual={isVirtual}
                status={status}
                scroll={isVirtual ? { y: 800 } : false}
                dataSource={fields}
                columns={getDefaultColumns(operation)}
                rowKey={'key'}
                pagination={false}
                {...tableProps}
              />
            </Form.Item>
            {renderButtonRow(buttonBottomLeft, buttonBottomRight, operation)}
            <Form.Item noStyle>
              <EditTableContext.Consumer>{typeof afterChildren === 'function' ? afterChildren : () => null}</EditTableContext.Consumer>
            </Form.Item>
            <Form.ErrorList errors={errors} />
          </EditTableContext.Provider>
        );
      }}
    </Form.List>
  );
};

export default CommonEditTable;
