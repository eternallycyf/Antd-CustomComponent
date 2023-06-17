import { Divider, Skeleton } from 'antd';
import dayjs from 'dayjs';
import React from 'react';
import { useAsync } from 'react-use';
import { IProcessPageDetailHeaderProps, IUserInfoFormList } from './interface';
import ProcessPageDetail from './ProcessPageDetail';
import { renderDetail } from './utils';

const userInfoFormList: IUserInfoFormList[] = [
  {
    type: 'formItem' as 'formItem',
    label: '申请人',
    key: 'realname',
    span: 6,
  },
  {
    type: 'formItem' as 'formItem',
    label: '申请部门',
    key: 'department',
    span: 6,
  },
  {
    label: '联系电话',
    key: 'mobile',
    type: 'formItem' as 'formItem',
    isPhone: true,
    span: 6,
  },
  {
    type: 'formItem' as 'formItem',
    label: '申请时间',
    key: 'time',
    span: 6,
    formatValue: () => dayjs().format('YYYY-MM-DD HH:mm:ss'),
  },
];

const ProcessPageDetailHeader: React.FC<IProcessPageDetailHeaderProps> = (props) => {
  const { beforeChildren, afterChildren, formatList } = props;

  const { value: info = {}, loading: infoLoading } = useAsync(async () => {
    const data = {
      realname: '张三',
      department: '研发部',
      mobile: '13888888888',
    };
    return data;
  }, []);

  const ProcessPageDetailHeaderContextInitProps = {
    renderDetail,
    info,
  };
  const ProcessPageDetailHeaderContext = React.createContext(ProcessPageDetailHeaderContextInitProps);

  return (
    <ProcessPageDetailHeaderContext.Provider value={ProcessPageDetailHeaderContextInitProps}>
      <Skeleton loading={infoLoading}>
        <ProcessPageDetailHeaderContext.Consumer>
          {typeof beforeChildren === 'function' ? beforeChildren : () => null}
        </ProcessPageDetailHeaderContext.Consumer>
        <ProcessPageDetail info={info as any} list={formatList ? formatList(info, userInfoFormList) : userInfoFormList} />
        <ProcessPageDetailHeaderContext.Consumer>
          {typeof afterChildren === 'function' ? afterChildren : () => null}
        </ProcessPageDetailHeaderContext.Consumer>
        <Divider style={{ margin: '20px 0', color: '#EFF1F4' }} />
      </Skeleton>
    </ProcessPageDetailHeaderContext.Provider>
  );
};

export default ProcessPageDetailHeader;
