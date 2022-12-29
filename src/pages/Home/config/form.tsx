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
      name: 'activityCode',
      label: '活动编码',
      type: 'input',
      col: { span: 12 },
      layout,
      allowClear: true,
      formFieldProps: {
        rules: FormRules.withName('活动编码').isRequired().create(),
      },
      // dictConfig: { textKey: 'name', valueKey: 'code' },
      itemProps: {
        ...ITEM_PROPS,
      },
    },
    {
      name: 'activityName',
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
