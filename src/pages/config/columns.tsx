import React from 'react';
import Activity from '../index';

const ACTIVE_TYPE: any = {
  '0': '满折',
  '1': '满减',
  '2': '立减',
};

export const getColumns = (self: InstanceType<typeof Activity>) => {
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
      align: 'center',
      render: (text: string) => ACTIVE_TYPE[text] || '--',
      sorter: true,
    },
  ];
};
