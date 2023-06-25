import CommonTable from '@/components/CommonTableV5/CommonTableV5';
import { formatNumber, formatPercent } from '@/utils/util';
import { Row } from 'antd';
import React from 'react';
import styles from './index.less';
import { IProcessPageTableProps } from './interface';
import { addSpace, formatTime, renderDetail } from './utils';

const ProcessPageTable: React.FC<IProcessPageTableProps> = (props) => {
  const { status = 'table', infoColumns = [], dataSource = [] } = props;

  if (status == 'view') {
    const columns = (infoColumns || []).map((ele) => ({ ...ele, className: `${ele.className} ${styles.desc}` }));
    return (
      <div className={styles.ProcessPageTable}>
        {dataSource?.[0] && (
          <Row className={styles.subHeader} gutter={[18, 18]} justify="start" align="middle">
            {renderDetail(columns, dataSource[0])}
          </Row>
        )}
      </div>
    );
  }

  const newColumns = (infoColumns || []).map((item) => {
    return {
      dataIndex: item.key,
      title: item.label,
      ellipsis: true,
      render: (text: any, record: any) => {
        let value = item?.formatValue ? item?.formatValue(text, record) : text;
        if (item?.format) return item?.format(value, record);

        if (item.isPhone) value = addSpace(String(value));
        if (item.formatPercent) value = formatPercent(value);
        if (item.formatNumber) value = formatNumber(item, value);
        if (item.formatTime) value = formatTime(item, value);

        if (value == undefined) return '--';
        return value;
      },
    };
  });

  return (
    <CommonTable
      showIndex={false}
      style={{ margin: '0px 0 10px 0' }}
      className={styles.ProcessPageTable}
      columns={newColumns as any}
      pagination={false}
      {...(props as any)}
    />
  );
};

export default ProcessPageTable;
