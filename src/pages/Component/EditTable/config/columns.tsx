import { IEditTableColumnsType } from '@/typings';
import { IRecord, IColumnsExtraRecord } from './interface';

export const columns: IEditTableColumnsType<IRecord, IColumnsExtraRecord>[] = [
  {
    dataIndex: 'userName',
    title: '姓名',
    type: 'input',
    align: 'center',
    formItemProps: {},
    ellipsis: true,
    width: 100,
    tooltip: 'sss',
  },
  {
    dataIndex: 'time',
    title: '时间',
    type: 'date',
    align: 'center',
    formatTime: true,
    width: 100,
    formItemProps: {},
  },
  {
    dataIndex: 'age',
    title: '数额',
    type: 'inputNumber',
    align: 'center',
    formatNumber: true,
    width: 100,
    formItemProps: {},
  },
];
