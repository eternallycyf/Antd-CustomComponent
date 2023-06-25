// todo 合计
import { ErrorBoundary } from '@/core/base/ErrorBoundary';
import { IButtonProps, ISearchesType } from '@/typings';
import { Column } from '@/typings/core/column';
import { Search } from '@/typings/core/form';
import { formatColumn } from '@/utils/util';
import { Col, Form, FormInstance, FormItemProps, FormListFieldData, Row, TableProps } from 'antd';
import React, { Key, useImperativeHandle } from 'react';
import TableBtn from '../CommonTableV5/components/widgets/TableBtn';
import { Table } from './';
import styles from './index.less';
import { formatEditTableColumns, getCurrentFieldValue, handleExport, IHandleExport, removeExtraColumnsProps, renderFormItem } from './utils';

// #region
/**
 * @typedef {Object} IEditTableContext context
 * @property {FormInstance} form - form实例
 * @property {FormListOperation<Values>} operation - formList的操作
 * @property {Values[]} values - formList的值
 * @template Values -
 * @template FormItemsValues -
 */
interface IEditTableContext<Values = any, FormItemsValues = any> extends ICommonEditTableHandle<Values, FormItemsValues> {
  operation: FormListOperation<Values>;
  values: Values[] | [] | undefined;
}

/**
 * 通用编辑表格
 * @typedef {Object} ICommonEditTableProps
 * @property {FormInstance} form - form实例
 * @property {string} [status='edit'] - 编辑状态
 * @property {boolean} [showIndex=true] - 是否显示序号
 * @property {boolean} [isVirtual=false] - 是否是虚拟列表虚拟列表 必须传入 scroll.y 高度
 *
 * @property {React.ReactNode | ((value: IEditTableContext) => React.ReactNode)} [beforeChildren] - 表格前面的内容
 * @property {React.ReactNode | ((value: IEditTableContext) => React.ReactNode)} [afterChildren] - 表格后面的内容
 *
 * @property {TableProps} [tableProps] - table的props
 * @property {IGetColumns} columns - table的columns
 * @property {IEditTableButtonProps} [itemButton] - 每一行的操作按钮
 * @property {IEditTableNotItemButtonProps} [buttonLeft] - 表格左边的按钮
 * @property {IEditTableNotItemButtonProps} [buttonRight] - 表格右边的按钮
 * @property {IEditTableNotItemButtonProps} [buttonBottomLeft] - 表格底部左边的按钮
 * @property {IEditTableNotItemButtonProps} [buttonBottomRight] - 表格底部右边的按钮
 *
 * @property {string} [name='EditTable'] - formList的name
 * @property {React.ComponentProps<typeof Form.List>} [formListProps] - formList的props
 * @property {any[]} [initialValues] - formList的initialValues
 * @property {React.ComponentProps<typeof Form.List>['rules']} [rules] - formList的rules
 * @template Values - 表单name
 * @template Rest - 其他自定义的参数 => (columnsType & Rest)[]
 */
export interface ICommonEditTableProps<Values = any, Rest = Record<string, unknown>, FormItemsValues = any> {
  /**@name 基础配置 */
  form: FormInstance<FormItemsValues>;
  status?: 'view' | 'edit';
  showIndex?: boolean;
  isVirtual?: boolean;

  /**@name 其他内容配置 */
  beforeChildren?: React.ReactNode | ((value: IEditTableContext<Values, FormItemsValues>) => React.ReactNode);
  afterChildren?: React.ReactNode | ((value: IEditTableContext<Values, FormItemsValues>) => React.ReactNode);

  /**@name table配置 */
  tableProps?: TableProps<Values>;
  columns: ReturnType<IGetColumns<Values, Rest>>;
  itemButton?: IEditTableButtonProps<Values>;
  buttonLeft?: IEditTableNotItemButtonProps<Values>;
  buttonRight?: IEditTableNotItemButtonProps<Values>;
  buttonBottomLeft?: IEditTableNotItemButtonProps<Values>;
  buttonBottomRight?: IEditTableNotItemButtonProps<Values>;

  /**@name formList 配置 */
  name?: string;
  formListProps?: React.ComponentProps<typeof Form.List>;
  initialValues?: Values[];
  rules?: React.ComponentProps<typeof Form.List>['rules'];
}

/**
 * @name 通用编辑表格ref获取的方法
 */
export type ICommonEditTableHandle<Values = any, FormItemsValues = any> = {
  form: FormInstance<FormItemsValues>;
  handleExport: IHandleExport<Values>;
  status: ICommonEditTableProps['status'];
};

/**
 * @name 通用编辑表格的列的额外参数
 */
interface IColumnEditRestProps<Values> {
  type?: ISearchesType[number]['type'];
  label?: ISearchesType[number]['label'];
  name?: Values;
}

/**
 * @name columns
 * 只有 type === 'custom' || item.transform && status == 'view' 时 render 才会生效
 * item.transform ? item.transform : item.render
 */
export type ICommonEditTableColumnsType<Values = any, Rest = Record<string, unknown>> = Omit<Column<Values>, 'formItemProps' | 'render'> & {
  formItemProps?: Omit<Search<Values>, 'name' | 'label' | 'type'> & {
    rules?: FormItemProps<Values>['rules'];
  };
  render?: (value: any, record: Values, index: number, allValues: Values[]) => React.ReactNode;
  shouldUpdate?: FormItemProps<Values>['shouldUpdate'];
  /**
   * @name 自定义转换的方法
   * @name status === 'view' 状态时 展示数据转换 和render一样 只不过为了使用formatCoumn的方法 用这个代替render
   * @example <caption>自定义转换的方法</caption>
   * transform: (text, record, index, allValues) => text + '元'
   */
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

type IGetColumns<Values = any, Rest = Record<string, unknown>> = (
  operation: FormListOperation<Values>,
  status: ICommonEditTableProps['status'],
) => ICommonEditTableColumnsType<Values, Rest>[];

interface IRenderFnProps<Values> {
  text: any;
  record: Values;
  index: number;
}

interface IVisibleFn<Values> {
  (text: any, record: Values, index: number, status: ICommonEditTableProps['status']): boolean;
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
    columns = [],
    itemButton = [],
    buttonLeft = [],
    buttonRight = [],
    buttonBottomLeft = [],
    buttonBottomRight = [],

    name: tableFormName = 'EditTable',
    formListProps = {},
    initialValues,
    rules = [],
  } = props;
  const {} = tableProps;
  const EditTableContextInitProps = { form, operation: {}, values: [], status } as IEditTableContext;
  const EditTableContext = React.createContext<IEditTableContext>(EditTableContextInitProps);

  useImperativeHandle(ref, () => ({
    form,
    handleExport,
    status,
  }));

  const EditTableContextProviderProps = {
    form,
    values: form?.getFieldValue(tableFormName) || [],
    handleExport,
    status,
  };
  //#endregion

  // #region
  const getDefaultColumns: IGetColumns = (operation, status) => {
    const values = form?.getFieldValue(tableFormName) || [];

    let newColumns = columns.map((item: ICommonEditTableColumnsType) => {
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
            // 解除传递 formatNumber 等参数 控制台报错问题
            ...removeExtraColumnsProps([restItem]),
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

    // 解除传递 formatNumber 等参数 控制台报错问题
    return removeExtraColumnsProps(formatColumn(newColumns));
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
          // FAQ: 当不是函数形式时 为了兼容tableBtn的visible 所以取函数形式
          visible: () => {
            if (item.visible == undefined) return true;
            if (typeof item.visible === 'function') return item.visible(renderProps?.[0], renderProps?.[1], renderProps?.[2], status);
            return item.visible;
          },
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
    <ErrorBoundary>
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
                  isVirtual={fields?.length >= 100 ? isVirtual : false}
                  status={status}
                  scroll={isVirtual ? { y: 800 } : false}
                  onSearchOrReset={(scrollRef: any) => scrollRef?.current?.dispatchEvent(new CustomEvent('scroll'))}
                  dataSource={fields}
                  columns={getDefaultColumns(operation, status)}
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
    </ErrorBoundary>
  );
};

export default CommonEditTable;
