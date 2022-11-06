import React from 'react';

const ACTIVE_TYPE: any = {
  走进: '1',
  峰会: '2',
  对接: '3',
};

const WAY_TYPE = {
  线下: '1',
  线上: '2',
};

const USER_TYPE = {
  活动报名: '1',
  用户参加: '2',
};

const OBJ_TYPE = {
  内部员工: '1',
  机构用户: '2',
};

export const columns = [
  {
    dataIndex: 'activeName',
    title: '活动名称',
    ellipsis: true,
    width: 112,
  },
  {
    dataIndex: 'activeType',
    title: '活动类型',
    width: 112,
    align: 'center',
    render: (text: string) => ACTIVE_TYPE[text] || '--',
  },
];
