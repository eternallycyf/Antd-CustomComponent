import React from 'react';

export const STATUS_DICT = [
  { text: '走进参观', value: '0' },
  { text: '高峰论坛', value: '1' },
  { text: '对接', value: '2' },
  { text: '全部', value: '3' },
];

export const search = [
  {
    name: 'telName',
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
];
