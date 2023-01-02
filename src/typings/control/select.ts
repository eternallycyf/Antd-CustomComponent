import { SelectProps } from 'antd';

export interface ISelectProps {
  /**@description 仅type=select 生效 */
  isNeedAll?: boolean;
  /**@description 仅type=select 生效 item就是字典项的返回*/
  renderItem?: (item: any) => React.ReactNode;
}

export interface ISelectFetchConfig {
  firstFetch?: boolean;
}
