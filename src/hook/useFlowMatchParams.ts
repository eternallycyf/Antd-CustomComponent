import { RouteComponentProps } from '@/typings/router';
import { useState } from 'react';

type status = 'add' | 'edit' | 'detail';

interface extraMatchParams {
  businessId: string;
}

interface IUseFlowMatchParams extends RouteComponentProps<extraMatchParams> {
  flowPath: string;
}

const useFlowMatchParams = (props: IUseFlowMatchParams) => {
  const { flowPath } = props;
  const currentPath = props.location?.pathname;
  const businessId = props.match?.params.businessId;
  const pathList = {
    [`/process/${flowPath}/add`]: 'add',
    [`/process/${flowPath}/edit/${businessId}`]: 'edit',
    [`/process/${flowPath}/detail/${businessId}`]: 'detail',
  };
  const [status, setStatus] = useState<status>(pathList[currentPath as any] as status);
  return {
    status,
    pathList,
    businessId,
    currentPath,
  };
};

export default useFlowMatchParams;
