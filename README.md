## 1.安装依赖

```js
    "antd": "^4.18.4",
    "@ant-design/compatible": "^1.1.0",
    "@ant-design/icons": "^4.7.0",
    "@antv/data-set": "^0.11.4",
    "classnames": "^2.2.6",
    "lodash": "^4.17.19",
    "dva": "^2.6.0-beta.6",
    "braft-editor": "^2.3.9",
```

## 2.使用方式 class or hook

### class

- config/columns.tsx

```tsx
import { IColumnsType } from '@/typings';
import Activity from '../index';

const ACTIVE_TYPE: any = {
  '0': '满折',
  '1': '满减',
  '2': '立减',
};

export const getColumns = (
  self: InstanceType<typeof Activity>,
): IColumnsType => {
  return [
    {
      dataIndex: 'activityName',
      title: '活动名称',
      width: 112,
      sorter: true,
    },
    {
      dataIndex: 'activityType',
      title: '活动类型',
      width: 112,
      align: 'center' as 'center',
      render: (text: string) => ACTIVE_TYPE[text] || '--',
      sorter: true,
    },
  ];
};
```

- config/search.tsx

```tsx
import { apiPrefixMock } from '@/config';
import { ISearchesType, FormControl } from '@/typings';
import FormRules from '@/utils/validate';
import dayjs from 'dayjs';
import React from 'react';
import Activity from '../index';

export const STATUS_DICT = [
  { text: '满折', value: '0' },
  { text: '满减', value: '1' },
  { text: '立减', value: '2' },
];

export const getSearches = (
  self: InstanceType<typeof Activity>,
): FormControl[] => {
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
      label: 'month',
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
```

- config/form.tsx

```tsx
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

export const getFormList = (
  self: InstanceType<typeof Activity>,
): ISearchesType => {
  return [
    {
      name: 'activityCode',
      label: '活动编码',
      type: 'input',
      col: 12,
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
      col: 12,
      layout,
      formFieldProps: {
        rules: FormRules.withName('活动名称').isRequired().create(),
      },
      allowClear: true,
      itemProps: {
        ...ITEM_PROPS,
      },
    },
    {
      name: 'textarea',
      label: 'textarea',
      type: 'textarea',
      disabled: false,
      // formFieldProps: {
      //   rules: FormRules.withName('活动名称').isRequired().create(),
      // },
      initialValue: '231231',
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
        onChange: (e: any) => console.log(e),
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
        console.log(config);
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
  ];
};
```

- index.tsx

```tsx
import React from 'react';
import BaseComponent from '@/components/BaseComponent';
import { CommonSearch, CommonTable, CustomForm } from '@/components';
import { formatParams } from '@/utils/util';
import { getColumns } from './config/columns';
import { getSearches } from './config/search';
import projectConfig from '@/config/projectConfig';
import _ from 'lodash';
import { history } from 'umi';
import { saveActivity } from './service';
import { ModalType } from '@/typings';
import { getFormList } from './config/form';
import { formatValuesType } from '@/components/CustomForm';
const { apiPrefixMock } = projectConfig;

class Activity extends BaseComponent<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      searchParams: {
        aaaaaa: 1,
      },
    };
  }

  componentDidMount() {
    this.handleRefreshPage();
  }

  // 打开活动报名列表页面
  handleOpenRegList = (record: any) => {};

  handleFormatValues: formatValuesType = (values, record, type) => {
    console.log(values, record, type);
    if (type === 'edit_echo') {
      return record;
    }
    return { values };
  };

  render() {
    const { searchParams } = this.state;
    const tableParams = {
      columns: getColumns(this),
      searchParams: formatParams(searchParams),
      rowKey: 'activityCode',
      fetchMethod: 'get',
      button: [
        {
          text: '新增',
          onClick: this.handleAdd,
        },
      ],
      itemButton: [
        {
          text: '编辑',
          onClick: this.handleEdit,
        },
        {
          text: '删除',
          buttonType: 'delete',
          onClick: (item) =>
            this.handleDelete({ id: 1, idDel: 1 }, '/deleteActivityList'),
        },
      ],
      urls: {
        listUrl: `/getActivityList`,
      },
      dataPath: 'data.list',
      totalPath: 'data.total',
    };

    return (
      <>
        <CommonSearch
          formList={getSearches(this)}
          handleSearch={this.handleSearch}
          ref={this.searchRef}
          columnNumber={3}
        />
        <CommonTable {...tableParams} ref={this.tableRef} />
        <CustomForm
          ref={this.formRef}
          modalConf={{ width: 800 }}
          formList={getFormList(this)}
          defaultLayout={{ labelCol: { span: 5 }, wrapperCol: { span: 19 } }}
          title="营销活动"
          modalType={ModalType.modal}
          formatValues={this.handleFormatValues}
          onSubmit={{
            action: saveActivity,
            callback: this.handleRefreshPage,
          }}
        />
      </>
    );
  }
}

export default Activity;
```

### hook

- config/columns.tsx

```tsx
import { IColumnsType } from '@/typings';

const ACTIVE_TYPE: any = {
  '0': '满折',
  '1': '满减',
  '2': '立减',
};

export const columns: IColumnsType = [
  {
    dataIndex: 'activityName',
    title: '活动名称',
    width: 112,
    sorter: true,
  },
  {
    dataIndex: 'activityType',
    title: '活动类型',
    width: 112,
    render: (text: string) => ACTIVE_TYPE[text] || '--',
    sorter: true,
  },
];
```

- config/search.tsx

```tsx
import { ISearchesType } from '@/typings';

export const STATUS_DICT = [
  { text: '满折', value: '0' },
  { text: '满减', value: '1' },
  { text: '立减', value: '2' },
];

export const searches: ISearchesType = [
  {
    name: 'activityName',
    label: '活动名称',
    type: 'input',
    placeholder: '请输入活动名称',
  },
  {
    name: 'activityType',
    label: '活动类型',
    type: 'radio',
    controlProps: {
      dict: STATUS_DICT,
    },
    initialValue: STATUS_DICT[0]['value'],
  },
];
```

- index.tsx

```tsx
import React, { useEffect, useRef, useState } from 'react';
import BaseComponent from '@/components/BaseComponent';
import { CommonSearch, CommonTable } from '@/components';
import { formatParams } from '@/utils/util';
import { columns } from './hookConfig/columns';
import { searches } from './hookConfig/search';
import projectConfig from '@/config/projectConfig';
import _ from 'lodash';
import { history } from 'umi';
import { getPreferentialList } from './service';
const { apiPrefixMock } = projectConfig;

const Activity = () => {
  const searchRef = useRef<React.ElementRef<typeof CommonSearch>>(null!);
  const tableRef = useRef<InstanceType<typeof CommonTable>>(null!);
  const [params, setParams] = useState({
    activityType: 0,
    aaaaaa: 1,
  });

  useEffect(() => {
    tableRef.current?.handleRefreshPage();
  }, [params]);

  // 手动控制刷新
  // useEffect(() => {
  //   setParams({
  //     ...params,
  //     xxx
  //   })
  // }, [xxx])

  const handleOpenRegList = (record: any) => {};

  const tableParams = {
    columns,
    searchParams: formatParams(params),
    rowKey: 'activityCode',
    fetchMethod: 'get',
    button: [
      {
        text: '报名列表',
        onClick: handleOpenRegList,
      },
    ],
    itemButton: [
      {
        text: '报名列表',
        onClick: handleOpenRegList,
        buttonType: 'delete',
      },
    ],
    urls: {
      listUrl: `/admin-site/marketing/activity/activityList`,
    },
    dataPath: 'data.list',
    totalPath: 'data.total',
  };
  return (
    <>
      <CommonSearch
        formList={searches}
        handleSearch={setParams}
        ref={searchRef}
        columnNumber={3}
      />
      <CommonTable {...tableParams} ref={tableRef} />
    </>
  );
};

export default Activity;
```
