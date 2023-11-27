import { ModalProps, TreeProps } from 'antd';
import Item from '../TreeModal/Item';
import TreeModal from '../TreeModal/TreeModal';

export interface TreeData {
  id: string;
  name: string;
  dealMode?: number;
  memo?: string;
  channel: string;
  code: string;
  key?: React.Key;
  pid: string;
  priceType: string;
  disable?: boolean;
  children?: TreeData[];
}

type IModalOnConfirm = (value: string[]) => void;

export interface ITreeModalProps {
  title?: [React.ReactNode | ((checkList: string[]) => React.ReactNode), React.ReactNode | ((checkList: string[]) => React.ReactNode)];
  placeholder?: [string, string];
  type?: 'check' | 'view';
  children?: React.ReactNode | ((value: ITreeModalContext) => React.ReactNode);
  value?: string[];
  options: TreeData[];
  defaultCheckKeys?: string[] | undefined;
  disabledKeys?: string[];
  onChange?: IModalOnConfirm;
  modalProps?: ModalProps;
  onOk?: IModalOnConfirm;
  onCancel?: IModalOnConfirm;
  preChildren?: React.ReactNode | ((value: ITreeModalContext) => any);
}
export type ITreeModalHandle = {
  handleOpenModal: () => void;
  setCheckedKeys: React.Dispatch<React.SetStateAction<string[]>>;
};
export interface ITreeModalContext extends Pick<ITreeModalProps, 'value'> {
  handleOpenModal: () => void;
  checkedKeys: ITreeModalProps['value'];
  rightOptions: ITreeModalProps['options'];
  setCheckedKeys: React.Dispatch<React.SetStateAction<string[]>>;
}

export type IModalTreeType = 'left' | 'right';

export interface ITreeModalItemProps extends Omit<TreeProps, 'onExpand'> {
  placeholder?: string;
  type: IModalTreeType;
  title?: React.ReactNode | ((checkList: string[]) => React.ReactNode);
  isView?: boolean;
  options?: ITreeModalProps['options'];
  onExpand?: (type: IModalTreeType, expandedKeys: React.Key[]) => void;
  setExpandedKeys: React.Dispatch<React.SetStateAction<string[]>>;
}

type CompoundedComponent = typeof TreeModal & {
  Item: typeof Item;
};
const CommonEditTable = TreeModal as CompoundedComponent;
CommonEditTable.Item = Item;

export default TreeModal;
