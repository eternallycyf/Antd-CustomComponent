import { ISearchesType } from '@/typings';
import React from 'react';
import Activity from '../index';

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
