import CommonDescriptions, { IDescriptionsColumns } from '@/components/CommonDescriptions';
import dayjs from 'dayjs';
import React from 'react';
import { IProcessPageHeaderProps } from './interface';
import styles from './index.less';
import { apiPrefixMock } from '@/config';
import { Divider } from 'antd';

const ProcessPageHeader: React.FC<IProcessPageHeaderProps> = (props) => {
  const { formatTime, columns, title, ...restProps } = props;

  const userInfoFormList: IDescriptionsColumns<any>[] = [
    {
      key: 'department',
      type: 'text' as 'text',
      span: 24,
      className: styles.subTitle,
      formatValue: (val, record) => `关于【${record?.realname ?? '--'}】- 【${record?.department ?? '--'}】的 ${title}`,
    },
    {
      type: 'formItem' as 'formItem',
      label: '申请人',
      key: 'realname',
      span: 6,
      className: styles.desc,
    },
    {
      type: 'formItem' as 'formItem',
      label: '申请部门',
      key: 'department',
      span: 6,
      className: styles.desc,
    },
    {
      label: '联系电话',
      key: 'mobile',
      type: 'formItem' as 'formItem',
      isPhone: true,
      span: 6,
      className: styles.desc,
    },
    {
      type: 'formItem' as 'formItem',
      label: '申请时间',
      key: 'time',
      span: 6,
      formatValue: (val, record) => (formatTime ? formatTime(val, record) : dayjs().format('YYYY-MM-DD HH:mm:ss')),
      className: styles.desc,
    },
  ];

  return (
    <div className={styles.ProcessPageHeader}>
      <CommonDescriptions
        rowProps={{ gutter: [20, 20] }}
        columns={columns ? columns : userInfoFormList}
        fetchConfig={{
          apiUrl: `${apiPrefixMock}/ims/flow/field/login/user`,
          dataPath: 'data',
        }}
        {...restProps}
      />
      <Divider />
    </div>
  );
};

export default ProcessPageHeader;
