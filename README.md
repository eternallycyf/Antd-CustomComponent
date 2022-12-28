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
import { ISearchesType } from '@/typings';
import React from 'react';
import Activity from '../index';

export const STATUS_DICT = [
  { text: '满折', value: '0' },
  { text: '满减', value: '1' },
  { text: '立减', value: '2' },
];

export const getSearches = (
  self: InstanceType<typeof Activity>,
): ISearchesType => {
  return [
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
      dict: STATUS_DICT,
      initialValue: STATUS_DICT[0]['value'],
    },
    {
      name: 'activityName',
      label: '活动名称',
      type: 'input',
      placeholder: '请输入活动名称',
    },
    {
      name: '活动名称1',
      label: '活动名称1',
      type: 'input',
      placeholder: '请输入活动名称',
    },
    {
      name: '活动名称2',
      label: '活动名称2',
      type: 'input',
      placeholder: '请输入活动名称',
    },
    {
      name: '活动名称3',
      label: '活动名称3',
      type: 'input',
      placeholder: '请输入活动名称',
    },
    {
      name: '活动名称4',
      label: '活动名称4',
      type: 'input',
      placeholder: '请输入活动名称',
    },
  ];
};
```

- index.tsx

```tsx
import React from 'react';
import BaseComponent from '@/components/BaseComponent';
import { CommonSearch, CommonTable } from '@/components';
import { formatParams } from '@/utils/util';
import { getColumns } from './config/columns';
import { getSearches } from './config/search';
import projectConfig from '@/config/projectConfig';
import _ from 'lodash';
import { history } from 'umi';
import { getPreferentialList } from './service';
const { apiPrefixMock } = projectConfig;

class Activity extends BaseComponent<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      searchParams: {
        activityType: 0,
        aaaaaa: 1,
      },
    };
  }

  componentDidMount() {
    this.handleRefreshPage();
  }

  // 打开活动报名列表页面
  handleOpenRegList = (record: any) => {};

  render() {
    const { searchParams } = this.state;
    const tableParams = {
      columns: getColumns(this),
      searchParams: formatParams(searchParams),
      rowKey: 'activityCode',
      fetchMethod: 'get',
      button: [
        {
          text: '报名列表',
          onClick: this.handleOpenRegList,
        },
      ],
      itemButton: [
        {
          text: '报名列表',
          onClick: this.handleOpenRegList,
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
          formList={getSearches(this)}
          handleSearch={this.handleSearch}
          ref={this.searchRef}
          columnNumber={3}
        />
        <CommonTable {...tableParams} ref={this.tableRef} />
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
