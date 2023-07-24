import FormRules from '@/utils/validate';
import projectConfig from '@/config/projectConfig';
import { ISearchesType } from '@/typings';
import dayjs from 'dayjs';
import useBaseComponent from '@/hook/useBaseComponent';
import { CustomTooltip } from '@/components';
import { Tag } from 'antd';
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

export const getFormList = (self: ReturnType<typeof useBaseComponent>): ISearchesType => {
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
