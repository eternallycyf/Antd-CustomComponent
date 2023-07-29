import { IFileListExtraRecord } from '@/components/File/FileUpload/interface';
import { ConnectState } from '@/typings/connect';
import { RouteComponentProps } from '@/typings/router';
import { DeepPartial, Merge, ValueOf } from '@/typings/utils';
import { handleDownload } from '@/utils/util';
import projectConfig from '@/config/projectConfig';
import { history } from '@umijs/max';
const { apiPrefixMock } = projectConfig;

export type IStateFlowStatus = [ValueOf<typeof FLOW_STATUS>, keyof typeof FLOW_STATUS];
type ConnectProps = DeepPartial<Merge<ConnectState['login'], ConnectState['global']>>;
export interface extraMatchParams {
  businessId: string;
}
export interface IProcessProps extends RouteComponentProps<extraMatchParams>, ConnectProps {}

export const FLOW_STATUS = {
  审批中: 'approve',
  已结束: 'finish',
  已驳回: 'reject',
  草稿中: 'draft',
  已废止: 'abandon',
  // 自己定义的
  删除: 12,
  编辑: 13,
  提交: 14,
  查看0A: 15,
};

export const FLOW_STATUS_COLOR = {
  已结束: '#30C25B',
  审批中: '#3363D7',
  草稿中: '#8E96A4',
  发起流程: '#3363D7',
  已驳回: '#E62C3B',
  已废止: '#E62C3B',
} as const;

export const zzsm_tip = [
  `说明: 1.附件名称不能包括.%'&></~特殊字符`,
  `2. 文件大小不超过100M`,
  `3. 文件格式不能为.exe .bat .xml .acp .dll .vbs .chm .cmd .jsp .php .html .aspx`,
];

export const BOOLEAN_DICT = [
  { text: '是', value: 1 },
  { text: '否', value: 0 },
];

export const getRequireRules = (name: string) => [{ required: true, message: `${name}是必填项` }];

export const handleDownAll = (recordDataSource: any) => {
  const arr: IFileListExtraRecord[] = recordDataSource?.attachment || [];
  try {
    arr.forEach((item) => {
      handleDownload(
        { id: item.fdExternalAttachId, name: item.fdFileName },
        {
          url: `${apiPrefixMock}/ims/org/cust/download`,
          fileName: item.fdFileName!,
        },
      );
    });
  } catch (error) {}
};

export const handleRouterToCenter = (props: any) => {
  window.closeTab(props.match.url);
  history.push('/processCenter');
};
