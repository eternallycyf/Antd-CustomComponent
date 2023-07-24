import FormRules from '@/utils/validate';
import Activity from '../index';
import projectConfig from '@/config/projectConfig';
import { ISearchesType } from '@/typings';
import dayjs from 'dayjs';
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
export const getOtherFormList = (self: InstanceType<typeof Activity>): ISearchesType => {
  // return getFormList(self).map((item) => ({ ...item, layout }));
  return [
    {
      name: '动态',
      label: '动态',
      type: 'input',
      itemProps: { ...ITEM_PROPS },
      controlProps: {
        onChange: (e: any) => {
          if (e.target.value == 1) {
            self.OtherFormRef.current?.setFieldsValue({
              flag: 1,
            });
          } else {
            self.OtherFormRef.current?.setFieldsValue({
              flag: 0,
            });
          }
        },
      },
      layout,
    },
    {
      type: 'input',
      name: 'flag',
      itemProps: {
        hidden: true,
      },
    },
    {
      type: 'update',
      itemProps: {
        noStyle: true,
        shouldUpdate: true,
        next: (values, form) => {
          const isFlag = values.flag == 1;
          if (isFlag) {
            return <span>hello</span>;
          }
          return false;
        },
      },
    },
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
  ];
};
