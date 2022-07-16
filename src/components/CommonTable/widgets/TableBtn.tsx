import React, { Fragment } from 'react';
import cx from 'classnames';
import { IButtonProps } from '@/typings';
import AccessBtn from '@/components/AccessBtn';
import styles from '../index.less';
// 渲染button
export const renderBtn = (button: any) => {
  if (!button || !button.length) return null;
  const filterButton = button.filter((item: any) => {
    return (
      !item.visible ||
      (item.visible && typeof item.visible === 'function' && item.visible())
    );
  });

  const [buttonList, otherList] = filterButton.reduce(
    (prev: any, curr: any) => {
      if (curr.element) {
        prev[1].push(curr);
      } else {
        delete curr.element;
        prev[0].push(curr);
      }
      return prev;
    },
    [[], []],
  );

  if (!buttonList.length && !otherList.length) return null;
  return (
    <Fragment>
      <AccessBtn btnList={buttonList} />
      {otherList.map((item: any) => item.element)}
    </Fragment>
  );
};
interface ITableBtnProps {
  button: IButtonProps[];
}

class TableBtn extends React.PureComponent<ITableBtnProps, any> {
  render() {
    const { button } = this.props;
    return button && button.length > 0 ? (
      <div className={cx(styles.buttonRow)}>{renderBtn(button)}</div>
    ) : null;
  }
}

export default TableBtn;
