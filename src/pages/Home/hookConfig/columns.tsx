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
