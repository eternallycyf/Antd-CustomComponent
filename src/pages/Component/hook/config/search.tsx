import useBaseComponent from '@/hook/useBaseComponent';
import { FormControl, ISearchesType } from '@/typings';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';
import styles from '../index.less';
import dayjs from 'dayjs';

export const STATUS_DICT = [
  { text: '满折', value: '0' },
  { text: '满减', value: '1' },
  { text: '立减', value: '2' },
];

export const getSearches = (self: ReturnType<typeof useBaseComponent>): ISearchesType => {
  return [
    {
      name: 'activityNameSearch',
      label: 'search',
      type: 'search',
    },
    {
      name: 'activityName',
      label: '电话',
      disabled: true,
      type: 'input',
      formFieldProps: {
        // rules: FormRules.withName('电话').phone().isRequired().create()
        // rules: FormRules.withName('电话').email().isRequired().create()
      },
      controlProps: {},
      layout: {
        labelCol: { span: 4 },
        wrapperCol: { span: 20 },
      },
      // children: [{}]
    },
    {
      name: 'switch',
      label: 'switch',
      type: 'switch',
      initialValue: true,
      transform: (value: any) => (value ? 1 : 0),
    },
    {
      name: 'activityType',
      label: '活动类型',
      col: 10,
      type: 'radio',
      dict: STATUS_DICT,
      // initialValue: STATUS_DICT[0]['value'],
    },
    {
      name: 'status',
      label: '状态',
      type: 'select',
      placeholder: '请选择状态',
      dict: STATUS_DICT,
      allowClear: true,
    },
    {
      name: '带请求的select',
      label: 'fetchSelect',
      type: 'select',
      isNeedAll: true,
      dictConfig: { textKey: 'label', valueKey: 'value' },
      fetchConfig: {
        apiUrl: `/getSelectDict`,
        dataPath: 'data',
        searchKey: 'ke',
        method: 'POST',
        params: {
          key: 'key',
        },
        // 如果有初始化函数则不请求
        // initDictFn:()=>[]
      },
      renderItem: (item) => `${item.label}-${item.value}`,
      // formFieldProps: {
      //   rules: FormRules.withName('select').object().isRequired().create()
      // }
    },
    {
      name: 'startDate,endDate',
      label: 'startDate,endDate',
      // format 仅对dateRange类型生效
      type: 'dateRange',
      placeholder: '',
      picker: 'month',
      format: 'YYYY', // 请求给后端的格式
      controlProps: {
        // form外观显示的格式
        format: 'YYYY',
      },
    },
    {
      name: 'startTime',
      label: 'date',
      type: 'date',
      placeholder: '请选择开始时间',
      initialValue: dayjs('2020-01-01'),
    },
    {
      name: 'endTime',
      label: (
        <div>
          <span style={{ marginRight: 4 }}>month</span>
          <Tooltip title="提示">
            <QuestionCircleOutlined style={{ marginLeft: 2, fontSize: 12, color: 'rgb(153,153,153)' }} />
            <span style={{ color: 'black', marginLeft: 2 }}>:</span>
          </Tooltip>
        </div>
      ),
      itemProps: {
        colon: false,
        className: styles.noColon,
      },
      type: 'month',
      format: 'YYYYMM',
      initialValue: dayjs(),
    },
    // {
    //   name: 'editor',
    //   label: 'editor',
    //   type: 'editor',
    //   initialValue: '123',
    // }
  ];
};
