import FormRules from '@/utils/validate';
import Activity from '../index';
import projectConfig from '@/config/projectConfig';
import { ISearchesType } from '@/typings';
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

export const getFormList = (
  self: InstanceType<typeof Activity>,
): ISearchesType => {
  return [
    {
      name: 'code',
      label: '活动编码',
      type: 'select',
      col: { span: 12 },
      layout,
      onSelect: (val) => console.log(val),
      formFieldProps: {
        rules: FormRules.withName('活动编码').isRequired().create(),
      },
      dict: [
        { text: '活动1', value: '1' },
        { text: '活动2', value: '2' },
      ],
      // dictConfig: { textKey: 'name', valueKey: 'code' },
      itemProps: {
        ...ITEM_PROPS,
      },
    },
    {
      name: 'name',
      label: '活动名称',
      type: 'input',
      col: { span: 12 },
      layout,
      formFieldProps: {
        rules: FormRules.withName('活动名称').isRequired().create(),
      },
      allowClear: true,
      itemProps: {
        ...ITEM_PROPS,
      },
    },
  ];
};
