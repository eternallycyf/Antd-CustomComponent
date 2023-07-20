import { IEditTableColumnsType } from '@/typings';
import { IRecord, IColumnsExtraRecord } from './interface';
import styles from '../index.less';
import _ from 'lodash';

interface IGetColumnsParams {
  currentRatio: number;
  setCurrentRatio: React.Dispatch<React.SetStateAction<number>>;
  handleGetCurrentRatio: () => void;
  handleCheckIsRatioExceedExcessie: (_: any, val: number) => Promise<string>;
}
export const getColumns = (params: IGetColumnsParams): IEditTableColumnsType<IRecord, IColumnsExtraRecord>[] => {
  const { currentRatio, setCurrentRatio, handleGetCurrentRatio, handleCheckIsRatioExceedExcessie } = params;
  return [
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
      dataIndex: 'ratio',
      title: () => {
        return (
          <>
            <span>
              比例
              <span className={styles.percentMark} style={{ color: '#B3B8C2' }}>
                ({currentRatio}%/100%)
              </span>
            </span>
          </>
        );
      },
      hasRequiredMark: true,
      type: 'inputNumber',
      align: 'left',
      formatNumber: true,
      width: 140,
      formatPercent: true,
      formItemProps: {
        controlProps: {
          min: 0,
          max: 100,
          step: 1,
          precision: 2,
          addonAfter: '%',
          style: { width: '100%' },
          onChange: _.debounce(handleGetCurrentRatio, 500),
        },
        itemProps: {
          validateTrigger: ['onBlur', 'onSubmit'],
        },
        rules: [
          {
            required: true,
            validator: handleCheckIsRatioExceedExcessie,
            validateTrigger: 'onSubmit',
          },
        ],
      },
    },
  ];
};
