import CommonDescriptions, { IDescriptionsColumns } from '@/components/CommonDescriptions';
import dayjs from 'dayjs';
import React from 'react';
import { IProcessPageHeaderProps } from './interface';
import styles from './index.less';
import { apiPrefixMock } from '@/config';
import { Divider } from 'antd';

const ProcessPageHeader: React.FC<IProcessPageHeaderProps> = (props) => {
  const { formatTime, columns, title, formatApplyPerson, formatSubTitle, hasDivider = false, fetchConfig, businessId, ...restProps } = props;

  const userInfoFormList: IDescriptionsColumns<any>[] = [
    {
      key: 'department',
      type: 'text' as 'text',
      span: 24,
      className: styles.subTitle,
      formatValue: (val, record) =>
        formatSubTitle ? formatSubTitle(val, record) : `关于【${record?.realname ?? '--'}（${record?.deptName ?? '--'}）】的 ${title ?? '--'}`,
    },
    {
      type: 'formItem' as 'formItem',
      label: '申请人',
      key: 'realname',
      span: 6,
      className: styles.desc,
      formatValue: (val, record) => (formatApplyPerson ? formatApplyPerson(val, record) : val ?? '--'),
    },
    {
      type: 'formItem' as 'formItem',
      label: '申请部门',
      key: 'deptName',
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
      key: 'applyTime',
      span: 6,
      formatValue: (val, record) => (formatTime ? formatTime(val, record) : dayjs().format('YYYY-MM-DD HH:mm:ss')),
      className: styles.desc,
    },
  ];

  return (
    <div className={styles.ProcessPageHeader}>
      <CommonDescriptions
        rowProps={{ gutter: [8, 8] }}
        columns={columns ? columns : userInfoFormList}
        fetchConfig={{
          apiUrl: `${apiPrefixMock}/ims/main/common/applicant?businessId=${businessId ?? ''}`,
          dataPath: 'data',
          ...fetchConfig,
        }}
        {...restProps}
      />
      {hasDivider && <Divider style={{ margin: '20px 0 0 0' }} />}
    </div>
  );
};

export default ProcessPageHeader;
