import FormRules from '@/utils/validate';
import Activity from '../index';
import projectConfig from '@/config/projectConfig';
import { ISearchesType } from '@/typings';
import dayjs from 'dayjs';
import { getFormList } from './form';
const { apiPrefix } = projectConfig;

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 20 },
};

const ITEM_PROPS = {
  style: {
    marginBottom: 0,
  },
};
export const getOtherFormList = (
  self: InstanceType<typeof Activity>,
): ISearchesType => {
  // return getFormList(self).map((item) => ({ ...item, layout }));
  return [
    {
      name: 'activityCode',
      label: '活动编码',
      type: 'input',
      allowClear: true,
      formFieldProps: {
        rules: FormRules.withName('活动编码').isRequired().create(),
      },
      // dictConfig: { textKey: 'name', valueKey: 'code' },
      itemProps: {
        ...ITEM_PROPS,
      },
      layout,
    },
    {
      name: 'activityName',
      label: '活动名称',
      type: 'input',
      formFieldProps: {
        rules: FormRules.withName('活动名称').isRequired().create(),
      },
      allowClear: true,
      itemProps: {
        ...ITEM_PROPS,
      },
      condition: [
        {
          action: 'disabled',
          regex: { textarea: '禁用' },
        },
      ],
      layout,
    },
    {
      name: 'textarea',
      label: 'textarea',
      type: 'textarea',
      disabled: false,
      // formFieldProps: {
      //   rules: FormRules.withName('活动名称').isRequired().create(),
      // },
      initialValue: '禁用',
      formFieldProps: {
        rules: [
          { required: true, message: '请输入' },
          { max: 100, message: '最多100个字符' },
        ],
      },
      controlProps: {
        maxLength: 100,
        showCount: true,
        autoSize: {
          minRows: 5,
        },
        onChange: (e: any) => {
          // console.log(e)
        },
      },
      itemProps: {
        style: {
          marginBottom: 0,
        },
      },
      layout,
    },
    {
      name: 'type',
      label: 'type',
      type: 'select',
      dict: [
        { text: '满折', value: '0' },
        { text: '满减', value: '1' },
        { text: '立减', value: '2' },
      ],
      renderItem: (item: any) => `${item.value} - ${item.text}`,
      hide: (config) => {
        // console.log(config);
        return false;
      },
      layout,
    },
    {
      name: 'custom',
      label: 'custom',
      type: 'custom',
      Component: (props) => {
        return '--';
      },
      layout,
    },
    {
      name: 'week',
      label: 'week',
      type: 'date',
      format: 'YYYY-w',
      picker: 'week',
      controlProps: {},
      layout,
    },
    {
      name: 'startMonth,endMonth',
      label: 'monthRange',
      type: 'monthRange',
      format: 'YYYYMM',
      initialValue: [dayjs('2020-01'), dayjs('2020-02')],
      layout,
    },
    {
      name: 'EditCol',
      label: '实时编辑的表格',
      type: 'editCol',
      layout,
      initialValue: [
        {
          tableFormCode: '111',
          tableFormName: '111',
          tableFormTime: [dayjs(), dayjs()],
        },
        {
          tableFormCode: '222',
          tableFormName: '222',
          tableFormTime: [dayjs(), dayjs()],
        },
        {
          tableFormCode: '333',
          tableFormName: '333',
          tableFormTime: [dayjs(), dayjs()],
        },
      ],
      tableProps: {
        columns: [
          {
            title: '活动编码',
            dataIndex: 'tableFormCode',
            // width: 200,
            editable: true,
            formItemProps: {
              name: 'tableFormCode',
              label: '活动编码',
              type: 'input',
              col: 12,
              allowClear: true,
              formFieldProps: {
                rules: FormRules.withName('活动编码').isRequired().create(),
              },
              // dictConfig: { textKey: 'name', valueKey: 'code' },
              itemProps: {
                ...ITEM_PROPS,
              },
            },
          },
          {
            title: '活动名称',
            dataIndex: 'tableFormName',
            // width: 200,
            editable: true,
            formItemProps: {
              name: 'tableFormName',
              label: '活动名称',
              type: 'input',
              col: 12,
              formFieldProps: {
                rules: FormRules.withName('活动名称').isRequired().create(),
              },
              allowClear: true,
              itemProps: {
                ...ITEM_PROPS,
              },
              condition: [
                {
                  action: 'disabled',
                  regex: { textarea: '禁用' },
                },
              ],
            },
          },
          {
            title: 'time',
            dataIndex: 'tableFormTime',
            width: 200,
            editable: true,
            formItemProps: {
              name: 'tableFormTime',
              label: 'time',
              type: 'dateRange',
              disabled: false,
              // formFieldProps: {
              //   rules: FormRules.withName('活动名称').isRequired().create(),
              // },
              controlProps: {},
              itemProps: {},
            },
          },
        ],
      },
    },
    {
      name: 'editRow',
      label: '可保存的table',
      type: 'editRow',
      layout,
      initialValue: [
        {
          editCode: '1',
          editName: '1',
          editTime: [dayjs(), dayjs()],
        },
      ],
      tableProps: {
        rowKey: 'editCode',
        columns: [
          {
            title: '活动编码',
            dataIndex: 'editCode',
            // width: 200,
            editable: true,
            formItemProps: {
              name: 'editCode',
              label: '活动编码',
              type: 'input',
              col: 12,
              allowClear: true,
              formFieldProps: {
                rules: FormRules.withName('活动编码').isRequired().create(),
              },
              // dictConfig: { textKey: 'name', valueKey: 'code' },
              itemProps: {
                ...ITEM_PROPS,
              },
            },
          },
          {
            title: '活动名称',
            dataIndex: 'editName',
            // width: 200,
            editable: true,
            formItemProps: {
              name: 'editName',
              label: '活动名称',
              type: 'input',
              col: 12,
              formFieldProps: {
                rules: FormRules.withName('活动名称').isRequired().create(),
              },
              allowClear: true,
              itemProps: {
                ...ITEM_PROPS,
              },
              condition: [
                {
                  action: 'disabled',
                  regex: { textarea: '禁用' },
                },
              ],
            },
          },
          {
            title: 'time',
            dataIndex: 'editTime',
            width: 200,
            editable: true,
            formItemProps: {
              name: 'editTime',
              label: 'time',
              type: 'dateRange',
              disabled: false,
              // formFieldProps: {
              //   rules: FormRules.withName('活动名称').isRequired().create(),
              // },
              controlProps: {},
              itemProps: {},
            },
          },
        ],
      },
    },
  ];
};
