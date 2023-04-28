import useBaseComponent from '@/hook/useBaseComponent';
import { IColumnsType } from '@/typings';

const ACTIVE_TYPE: any = {
  '0': '满折',
  '1': '满减',
  '2': '立减',
};

export const getColumns = (self: ReturnType<typeof useBaseComponent>): IColumnsType => {
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
      // ellipsis: true,
      initChecked: false,
    },
    {
      dataIndex: 'activityPrice',
      title: 'activityPrice',
      width: 112,
      sorter: true,
      formatNumber: 2,
      align: 'center' as 'center',
      fixed: 'left' as 'left',
      // ellipsis: true,
    },
    {
      dataIndex: 'activityType',
      title: '活动类型',
      width: 112,
      render: (text: string) => ACTIVE_TYPE[text] || '--',
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
