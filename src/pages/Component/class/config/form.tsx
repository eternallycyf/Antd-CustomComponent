import FormRules from '@/utils/validate';
import Activity from '../index';
import projectConfig from '@/config/projectConfig';
import { ISearchesType } from '@/typings';
import dayjs from 'dayjs';
import { PlusCircleOutlined } from '@ant-design/icons';
import { Button, Popconfirm, Tag } from 'antd';
import { add } from 'lodash';
import { CustomTooltip } from '@/components';
import { Fragment } from 'react';
import { IRecord } from './columns';
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

export const getFormList = (self: InstanceType<typeof Activity>): ISearchesType => {
  return [
    {
      name: 'custom',
      label: '自定义',
      type: 'custom',
      Component: () => {
        const COLOR_DICT: any = {
          1: 'magenta',
          2: 'red',
          3: 'volcano',
          4: 'orange',
          5: 'gold',
          6: 'lime',
          7: 'green',
          8: 'cyan',
          9: 'blue',
          10: 'purple',
        };
        const tagS = Array.from({ length: 20 }).map((_, i) => (
          <Tag key={Math.random()} color={COLOR_DICT[~~(Math.random() * 10)]}>
            {COLOR_DICT[~~(Math.random() * 10)]}
          </Tag>
        ));
        return (
          <>
            <CustomTooltip.FileName name={'xxasdasdasdx.png'} prefixLength={5} hasPreview={true} previewLinkType="default" fileId="11xxx" />
            <CustomTooltip
              text={Array.from({ length: 300 }, (v, i) => (
                <span>==</span>
              ))}
              row={{
                rows: 1,
                expend: true,
                EllipsisSymbol: false,
                isRight: true,
              }}
            />
            <CustomTooltip
              text={tagS}
              row={{
                rows: 1,
                expend: true,
                EllipsisSymbol: true,
                isRight: true,
                isTag: true,
              }}
            />
            <CustomTooltip.Paragraph text={Array.from({ length: 300 }, (v, i) => '--')} rows={2} />
            <CustomTooltip.Paragraph
              text={Array.from({ length: 10 }, (v, i) => (
                <div key={i}>asdasds</div>
              ))}
              rows={2}
            />
            <CustomTooltip<true>
              text={tagS}
              row={{
                rows: 1,
                expend: true,
                EllipsisSymbol: true,
                isTag: true,
              }}
            />
          </>
        );
      },
    },
    {
      name: 'isAgree',
      type: 'checkbox',
      col: 24,
      initialValue: ['1'],
      rules: [{ validator: (_: any, value) => (value && value?.length != 0 ? Promise.resolve() : Promise.reject('请勾选')) }],
      dict: [{ text: '请确认', value: '1' }],
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
    },
    {
      name: 'type',
      label: 'type',
      type: 'select',
      allowClear: true,
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
    },
    {
      name: 'custom',
      label: 'custom',
      type: 'custom',
      Component: (props) => {
        return '--';
      },
    },
    {
      name: 'week',
      label: 'week',
      type: 'date',
      format: 'YYYY-w',
      picker: 'week',
      controlProps: {},
    },
    {
      name: 'startMonth,endMonth',
      label: 'monthRange',
      type: 'monthRange',
      format: 'YYYYMM',
      initialValue: [dayjs('2020-01'), dayjs('2020-02')],
    },
    {
      name: 'otherButtonClick',
      label: 'otherButtonClick',
      type: 'select',
      otherType: 'button',
      otherText: '自动生成',
    },
  ];
};
