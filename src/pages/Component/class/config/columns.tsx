import { IColumnsType } from '@/typings';
import Activity from '../index';
import { ACTIVE_TYPE } from './constant';

export const getColumns = (self: InstanceType<typeof Activity>): IColumnsType => {
  return [
    {
      dataIndex: 'activityName',
      title: '活动名称',
      tooltip: () => 'tooltip',
      formatNumber: true,
      width: 300,
      sorter: true,
      align: 'center' as 'center',
      fixed: 'left' as 'left',
      ellipsis: true,
      initCheckedDisabled: true,
    },
    {
      dataIndex: 'activityStartTime',
      title: '活动开始时间',
      width: 112,
      sorter: true,
      formatTime: true,
      align: 'center' as 'center',
      fixed: 'left' as 'left',
      initChecked: false,
      // ellipsis: true,
    },
    {
      dataIndex: 'activityPrice',
      title: 'activityPrice',
      width: 112,
      sorter: true,
      formatNumber: (value) => value * 100,
      align: 'center' as 'center',
      fixed: 'left' as 'left',
      // ellipsis: true,
    },
    {
      dataIndex: 'activityType',
      title: '活动类型',
      width: 112,
      dict: ACTIVE_TYPE,
      // render: (text: string) => ACTIVE_TYPE[text] || '--',
      // sorter: true,
      align: 'center' as 'center',
      fixed: 'left' as 'left',
      ellipsis: true,
      // sorter: (a, b) => (a.area || '').localeCompare(b.area || ''),
      sorter: true,
      // TODO: add types
      //     {
      //   sorterFn?: (
      //     dataIndex: string,
      //     sorter: string,
      //   ) => { order: 'ascend' | 'descend'; sort: string };
      //   isRefresh?: boolean;
      // }
      // sorterFn: (dataIndex, sorter, self) => ({
      //   order: sorter,
      //   sort: 'xxxxxx',
      // }),
    },
  ];
};
