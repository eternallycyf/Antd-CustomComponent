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
      name: 'startDate,endDate',
      label: '日期',
      type: 'monthRange',
      placeholder: '',
    },
    {
      name: 'activityType',
      label: '活动类型',
      type: 'radio',
      dict: STATUS_DICT,
      initialValue: STATUS_DICT[0]['value'],
    },
    {
      name: 'activityName2',
      label: '活动名称',
      type: 'input',
      placeholder: '请输入活动名称',
    },
    {
      name: 'activityName3',
      label: '活动名称1',
      type: 'input',
      placeholder: '请输入活动名称',
    },
    {
      name: 'activityName4',
      label: '活动名称2',
      type: 'input',
      placeholder: '请输入活动名称',
    },
    {
      name: 'activityName5',
      label: '活动名称3',
      type: 'input',
      placeholder: '请输入活动名称',
    },
    {
      name: 'activityName6',
      label: '活动名称4',
      type: 'input',
      placeholder: '请输入活动名称',
    },
  ];
};
