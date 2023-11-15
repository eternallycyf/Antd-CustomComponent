## 实时保存见/home/editTable

## 多行

```tsx
import { AccessBtn, CommonEditTable } from '@/components';
import { IEditTableColumnsType, IEditTableHandle, IEditTableProps } from '@/typings';
import { PlusCircleOutlined, VerticalAlignBottomOutlined, WarningOutlined } from '@ant-design/icons';
import { Button, Card, Form, message } from 'antd';
import dayjs from 'dayjs';
import React from 'react';

export const columns: IEditTableColumnsType<IRecord, IColumnsExtraRecord>[] = [
  {
    dataIndex: 'userName',
    title: '姓名',
    type: 'input',
    align: 'center',
    ellipsis: true,
    width: 100,
    tooltip: 'sss',
    editable: true,
    formItemProps: {
      rules: [{ required: true, message: '请输入姓名' }],
      itemProps: {},
    },
  },
  {
    dataIndex: 'time',
    title: '时间',
    type: 'date',
    align: 'center',
    formatTime: true,
    width: 100,
    formItemProps: {},
    editable: true,
  },
  {
    dataIndex: 'age',
    title: '数额',
    type: 'inputNumber',
    align: 'center',
    formatNumber: true,
    width: 100,
    formItemProps: {},
    editable: true,
  },
];

export interface IRecord {
  userName: string;
  time?: dayjs.Dayjs;
  age?: number;
  key: string;
}

export interface IFormValues {
  EditTable?: IRecord[];
}

export interface IColumnsExtraRecord {}

const Demo = () => {
  const [form] = Form.useForm<IFormValues>();
  const [editableKeys, setEditableKeys] = React.useState<string[]>([]);
  const [currentEditValue, setCurrentEditValue] = React.useState<any[]>([]);
  const EditTableRef = React.useRef<IEditTableHandle<IRecord, IFormValues>>(null!);

  const handleOnSubmit = async () => {
    const values = form.getFieldsValue();
    if (editableKeys.length > 0) {
      return message.warning('请先保存编辑项');
    }
    await form.validateFields();
    console.log(values);
  };

  return (
    <Card>
      <Form form={form}>
        <CommonEditTable<IRecord, IColumnsExtraRecord, IFormValues>
          form={form}
          ref={EditTableRef}
          isMultiple={false}
          editableKeys={editableKeys}
          // isVirtual
          initialValues={Array.from({ length: 3 }).map((_, index) => ({
            userName: '张三张三张三张三张三张三张三张三张三张三张三张三张三张三张三张三张三张三张三',
            key: String(index),
            age: 21260,
          }))}
          columns={columns}
          buttonLeft={[]}
          buttonRight={[
            {
              buttonType: 'default',
              text: '添加到头部',
              onClick: (values, operation) => operation.add({ userName: '张三', key: String(Math.random()) }, 0),
              visible: (text, record, index, status) => status == 'edit',
            },
            {
              buttonType: 'default',
              text: '全部删除',
              disabled: status == 'view',
              onClick: () => form.setFieldsValue({ EditTable: [] }),
              icon: <WarningOutlined />,
              visible: (text, record, index, status) => status == 'edit',
            },
            {
              buttonType: 'default',
              text: '导出',
              visible: (text, record, index, status) => status == 'view',
              // visible: (text, record, index) => status == 'view',
              icon: <VerticalAlignBottomOutlined />,
              onClick: (values, operation) => EditTableRef.current.handleExport('导出', columns, form.getFieldValue('EditTable')),
            },
          ]}
          itemButton={[
            {
              buttonType: 'delete',
              text: '删除',
              deleteText: '确认删除嘛',
              onClick: (values, operation) => operation.remove(values.index),
              visible: (record, arr, index, status) => !editableKeys.includes(record.key),
            },
            {
              buttonType: 'link',
              text: '编辑',
              onClick: (values, operation) => {
                setCurrentEditValue([...currentEditValue, values.record]);
                setEditableKeys([...editableKeys, values.record.key]);
              },
              visible: (record, arr, index, status) => !editableKeys.includes(record.key),
            },
            {
              buttonType: 'link',
              text: '保存',
              onClick: async (values, operation) => {
                await form.validateFields();
                setCurrentEditValue(currentEditValue.filter((item) => item.key !== values.record.key));
                setEditableKeys(editableKeys.filter((item) => item !== values.record.key));
              },
              visible: (record, arr, index, status) => editableKeys.includes(record.key),
            },
            {
              buttonType: 'link',
              text: '取消',
              onClick: (values, operation) => {
                const newValues = values.arr;
                newValues[values.index] = currentEditValue.find((item) => item.key === values.record.key);
                form.setFieldsValue({ EditTable: newValues });
                setCurrentEditValue(currentEditValue.filter((item) => item.key !== values.record.key));
                setEditableKeys(editableKeys.filter((item) => item !== values.record.key));
              },
              visible: (record, arr, index, status) => editableKeys.includes(record.key),
            },
          ]}
          afterChildren={(values) => {
            if (status == 'view') return null;
            return (
              <div style={{ display: 'grid', placeContent: 'center' }}>
                <Button
                  type="link"
                  icon={<PlusCircleOutlined />}
                  onClick={() => {
                    const key = String(Math.random());
                    values.operation.add({ userName: '张三', time: dayjs(), key });
                  }}
                >
                  添加
                </Button>
              </div>
            );
          }}
        />
        <Form.Item>
          <Button type="primary" onClick={handleOnSubmit}>
            提交
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default Demo;
```

### 多个 formList

```tsx
import dayjs from 'dayjs';
import { LabeledValue } from 'antd/lib/select';
import { IAttachment } from '@/components/File/FileUpload/interface';
import { FormListFieldData, Form, Button, Row, Card, Col, Input } from 'antd';
import { IEditTableColumnsType, IEditTableProps, ISearchesType } from '@/typings';
import { ICommonEditTableProps } from '@/components/CommonEditTable/EditTable';
import { FormInstance } from 'antd/lib';
import _, { get, values } from 'lodash';
import styles from './index.less';
import { useState } from 'react';
import { CloseOutlined, PlusCircleFilled, WarningOutlined } from '@ant-design/icons';
import { renderFormItem } from '@/utils/util';
import { getUUID } from '@/utils/random';
import { CommonEditTable } from '@/components';

//#region
export interface ICustomerListRecord {
  time?: dayjs.Dayjs;
  customerName?: string;
}

export interface IColumnsExtraRecord {}

interface IActivityListBaseRecord {
  custName?: LabeledValue;
  busiType?: (typeof BUSI_TYPE_DICT)[number]['value'];
  reason?: string;
  attachment?: IAttachment[];
}

type IActivityListRecord = IActivityListBaseRecord & { customerList?: ICustomerListRecord[] };

interface IFormValues {
  activityList?: IActivityListRecord[];
}

interface IGetColumnsParams {
  field: FormListFieldData;
  [props: string]: any;
}

interface IGetFormListParams {
  form: FormInstance<IFormValues>;
  status: IEditTableProps['status'];
  field: FormListFieldData;
  [props: string]: any;
}
//#endregion

//#region
const BUSI_TYPE_DICT = [
  { text: '申请', value: '1' },
  { text: '退出', value: '2' },
];
const BOOLEAN_DICT = [
  { text: '是', value: '1' },
  { text: '否', value: '0' },
];
const ITEM_PROPS = {
  style: {
    marginBottom: 16,
    width: '100%',
  },
};
//#endregion

//#region
export const getColumns: (params: IGetColumnsParams) => IEditTableColumnsType<ICustomerListRecord, IColumnsExtraRecord>[] = (params) => {
  // 第几个活动
  const { field } = params;
  return [
    {
      dataIndex: 'time',
      title: '失效时间',
      hasRequiredMark: true,
      type: 'update',
      align: 'left',
      width: 240,
      shouldCellUpdate: () => true,
      formItemProps: {
        shouldUpdate: () => true,
        itemProps: {
          noStyle: true,
          next: (values: IFormValues, form, index) => {
            const currentValues = values?.activityList?.[field?.name!]?.customerList?.[index!];
            return [
              {
                name: [index, 'time'],
                width: 140,
                col: 12,
                type: 'date',
                rules: [],
              },
            ] as ISearchesType<ICustomerListRecord>;
          },
        },
      },
    },
    {
      dataIndex: 'customerName',
      title: '公司',
      hasRequiredMark: true,
      type: 'update',
      align: 'left',
      width: 240,
      formItemProps: {
        itemProps: {
          shouldUpdate: () => true,
          next(values: IFormValues, form, index) {
            const currentValues = values?.activityList?.[field?.name!]?.customerList?.[index!];
            console.log(values, index);
            return [
              {
                name: [index, 'customerName'],
                width: 140,
                col: 12,
                title: '公司名称',
                type: 'view',
                align: 'left',
                ellipsis: true,
                editable: false,
                render(value, record, index, allValues) {
                  return currentValues?.customerName ?? '--';
                },
              },
            ] as ICommonEditTableProps<ICustomerListRecord>['columns'];
          },
        },
      },
    },
  ];
};

export const getFormList = (params: IGetFormListParams): ISearchesType<IFormValues> => {
  const { status, field } = params;
  const isDetail = status === 'view';
  return [
    {
      type: 'update',
      col: 24,
      itemProps: {
        noStyle: true,
        shouldUpdate: (pre, cru) => !_.isEqual(pre?.activityList?.[field?.name!], cru?.activityList?.[field?.name!]),
        next(values: IFormValues, form, index) {
          const currentValues = values?.activityList?.[field?.name!];
          return [
            {
              name: [field.name, 'busiType'],
              label: '类型',
              type: 'radio',
              rules: [{ required: true }],
              dict: BUSI_TYPE_DICT,
              allowClear: true,
              itemProps: ITEM_PROPS,
              layout: {
                wrapperCol: { span: 24, className: `${styles['plus-radio']} ${isDetail && styles['plus-radio-detail']}` },
              },
            },
          ] as ISearchesType<IActivityListRecord>;
        },
      },
    },
    {
      type: 'update',
      col: 24,
      itemProps: {
        noStyle: true,
        shouldUpdate: (pre, cru) => !_.isEqual(pre?.activityList?.[field?.name!], cru?.activityList?.[field?.name!]),
        next(values: IFormValues, form, index) {
          const currentValues = values?.activityList?.[field?.name!];
          if (currentValues?.busiType == '2') {
            return [
              {
                name: [field.name, 'custName'],
                label: '公司',
                type: 'select',
                col: 12,
                allowClear: true,
                dict: BUSI_TYPE_DICT,
                placeholder: '请选择',
                rules: [{ required: true }],
                itemProps: ITEM_PROPS,
              },
            ] as ISearchesType<IActivityListRecord>;
          }
          return false;
        },
      },
    },
    {
      type: 'update',
      col: 24,
      itemProps: {
        noStyle: true,
        shouldUpdate: (pre, cru) => false,
        next(values: IFormValues, form, index) {
          return [
            {
              name: [field.name, 'reason'],
              label: '说明',
              type: 'textarea',
              col: 24,
              allowClear: true,
              placeholder: '请输入',
              // rules: [{ required: true }],
              itemProps: { style: { marginBottom: 0 } },
              controlProps: {
                maxLength: 1500,
                showCount: true,
                autoSize: {
                  minRows: 3,
                },
              },
            },
          ] as ISearchesType<IActivityListRecord>;
        },
      },
    },
    {
      type: 'update',
      col: 24,
      itemProps: {
        noStyle: true,
        shouldUpdate: () => false,
        next(values: IFormValues, form, index) {
          const currentValues = values?.activityList?.[field?.name!];
          if (isDetail && (!currentValues?.attachment || currentValues?.attachment?.length == 0)) return false;

          return [
            {
              type: 'custom',
              Component: () => '详情附件',
              itemProps: {
                style: {
                  marginBottom: 0,
                },
              },
            },
          ] as ISearchesType<IActivityListRecord>;
        },
      },
    },
    {
      type: 'update',
      col: 24,
      itemProps: {
        noStyle: true,
        shouldUpdate(prevValues, nextValues, info) {
          return false;
        },
        next(values: IFormValues, form, index) {
          const currentValues = values?.activityList?.[field?.name!];
          if (isDetail && (!currentValues?.attachment || currentValues?.attachment?.length == 0)) return false;
          const isRequired = false;

          return [
            {
              name: [field.name, 'attachment'],

              type: 'fileUpload',

              itemProps: ITEM_PROPS,
              col: 24,
              controlProps: {
                attachment: {
                  label: '附件',
                  isRequired,
                  extraRecord: {
                    fdEntityKey: 'attachment',
                  },
                },
                fileKeys: {
                  fileName: 'fileName',
                  fileId: 'fileId',
                },
                isDetail,
                isDownloadByS3: false,
                actionUrl: '/api/attachment/upload',
                colNumber: 8,
              },
            },
          ] as ISearchesType<IActivityListRecord>;
        },
      },
    },
  ];
};
//#endregion

const App: React.FC = () => {
  const [form] = Form.useForm<IFormValues>();
  const [status, setStatus] = useState<IEditTableProps['status']>('edit');

  const handleInitPage = () => {};

  const formListParams = {
    status,
    form,
  };

  return (
    <div className={styles.page}>
      <Button onClick={handleInitPage}>填充表单</Button>
      <Form<IFormValues>
        form={form}
        initialValues={{ activityList: [{}] }}
        layout="vertical"
        className={styles[status == 'view' ? 'plus-formContent-detail' : 'plus-formContent']}
      >
        <Row gutter={16} style={{ width: '100%' }}>
          <Form.List name="activityList">
            {(activityListFields, { add, remove }, { errors }) => {
              return (
                <div style={{ display: 'flex', rowGap: 16, flexDirection: 'column', width: '100%' }}>
                  {activityListFields.map((activityListFields) => (
                    <Card
                      size="small"
                      title={`活动${activityListFields.name + 1}`}
                      key={activityListFields.key}
                      extra={<CloseOutlined onClick={() => remove(activityListFields.name)} />}
                    >
                      {(
                        (status == 'view'
                          ? getFormList({ ...formListParams, field: activityListFields }) || []
                          : getFormList({ ...formListParams, field: activityListFields })) || []
                      ).map((item) => {
                        const Content = (
                          <Form.Item
                            labelAlign="left"
                            label={item.label as string}
                            name={item.name}
                            rules={item?.itemProps?.rules || []}
                            initialValue={item?.initialValue}
                            {...item.layout}
                            {...item.itemProps}
                          >
                            {renderFormItem(item)}
                          </Form.Item>
                        );
                        if (item.type == 'update') return Content;
                        return (
                          <Col className={`${styles[`formItemContent${item.type}`]}`} span={item?.['col'] ?? 12} key={item?.name || getUUID()}>
                            {Content}
                          </Col>
                        );
                      })}

                      <CommonEditTable<ICustomerListRecord, IColumnsExtraRecord, IFormValues>
                        form={form}
                        isMultiple
                        status={'edit'}
                        columns={getColumns({ field: activityListFields })}
                        buttonLeft={[]}
                        name={[activityListFields.name, 'customerList']}
                        buttonRight={[
                          {
                            buttonType: 'default',
                            text: '添加到头部',
                            onClick: (values, operation) => operation.add({ customerName: '公司' }, 0),
                            visible: (text, record, index, status) => status == 'edit',
                          },
                          {
                            buttonType: 'default',
                            text: '全部删除',
                            disabled: status == 'view',
                            onClick: (values, operation) => {
                              form.setFieldValue('activityList', []);
                            },
                            icon: <WarningOutlined />,
                            visible: (text, record, index, status) => status == 'edit',
                          },
                        ]}
                        itemButton={[
                          {
                            buttonType: 'delete',
                            text: '删除',
                            deleteText: '确认删除嘛',
                            onClick: (values, operation) => operation.remove(values.index),
                          },
                        ]}
                        afterChildren={(values) => {
                          if (status == 'view') return null;
                          return (
                            <div style={{ display: 'grid', placeContent: 'center' }}>
                              <Button type="link" icon={<PlusCircleFilled />} onClick={() => values.operation.add({ customerName: '添加到尾部' })}>
                                添加客户
                              </Button>
                            </div>
                          );
                        }}
                      />
                    </Card>
                  ))}
                  <Form.Item>
                    <Button type="dashed" onClick={() => add()} block>
                      添加活动
                    </Button>
                  </Form.Item>
                  <Form.ErrorList errors={errors} />
                </div>
              );
            }}
          </Form.List>
        </Row>
      </Form>

      <Button onClick={() => console.log(form.getFieldsValue())}>提交</Button>
    </div>
  );
};

export default App;
```

## FAQ

### 1.type == 'update'

```tsx
{
  dataIndex: 'userName',
  title: '姓名',
  hasRequiredMark: true,
  type: 'update',
  align: 'center',
  width: 240,
  formItemProps: {
    itemProps: {
      noStyle: true,
      style: { display: 'flex'},
      next: (values, form, index) => {
        return [
          {
            name: [index, 'userName'],
            width: 140,
            col: 12,
            type: 'input',
          }
        ]
      }
    }
  }
}
```

## 2. !isMultiple && type == 'update'

```tsx
{
  dataIndex: 'isEffect',
  title: '失效时间',
  hasRequiredMark: true,
  type: 'update',
  align: 'left',
  width: 240,
  transform: (val, currentValues, index, allValues) => {
    return currentValues?.isEffect
  },
  formItemProps:{
    itemProps:{
      shouldUpdate: ()=> true,
      noStyle: true,
      style: { display: 'flex'},
      next: (values, form, index) => {
        return [
          {
            name: [index, 'detail'],
            width: 140,
            col: 12,
            type: 'input',
          },
          {
            name: [index, 'isEffect'],
            type: 'checkbox',
            col: 12,
            dict: [{text:'永久生效',value:'1'}]
          }
        ]
      }
    }
  }
}
```

## 3.type == 'view';

```tsx
{
  dataIndex: 'deptName',
  title: '部门',
  type: 'xxx',
  align: 'center',
  ellipsis: true,
  editable: false,
  width: 100,
  // transform: (val, record, index) => xxx;
}
```
