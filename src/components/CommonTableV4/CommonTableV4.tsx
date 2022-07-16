import React, { Fragment } from 'react';
import cx from 'classnames';
import { DownOutlined } from '@ant-design/icons';
import { Button, Dropdown, Menu, Popconfirm } from 'antd';
import Table from './components/EnhancedTable';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-htm15-backend';
import { ICommonTable } from '@/typings';
import { formatcolumn } from '@/utils/util';
import BaseTable, { IBaseTableState } from './components/BaseTable';
import TableBtn from '@/components/commonTable/widgets/TableBtn';
import AccessBtn from '@/components/AccessBtn';
import styles from './index.less';
import _ from 'lodash';

class CommonTable extends BaseTable<ICommonTable<any>, IBaseTableState> {
  static defaultprops = {
    wrapClassStr: '.tabs-tabpane-active',
    size: 'small',
    rowkey: 'id',
    recordkey: 'list',
    selectType: 'checkbox',
    bordered: true,
    draggable: false,
    resizable: false,
    editable: false,
    alternateColor: true,
    defaultPagesize: 30,
    buttonLen: 5,
    showIndex: true,
    calcHeight: true,
    initRequest: true,
    isSummary: false,
  };
  private cls: string = '';
  constructor(props: any) {
    super(props);
    this.state = {
      loading: props.loading,
      height: props.scroll && props.scroll.y ? props.scroll.y : 0,
      total: 0,
      filters: {},
      sorter: {},
      current: 1,
      pageSize: props.defaultPagesize || 30,
      extraParams: props.params || {},
      columns: [],
      selectedRowkeys: props.selectedRowkeys || [],
      selectedRows: props.selectedRows || [],
      dev: false,
      dataSource: [],
    };

    this.cls = cx('common-table', props.className, {
      'table-row-alternate-color': props.alternateColor,
    });
  }

  componentWilMount() {
    const { initRequest } = this.props;
    this.handleColumns();
    if (initRequest) this.loadData();
    window.addEventListener('dev', () => {
      this.setState({ dev: true }, this.handleColumns);
    });
  }

  getOperWidth = (itemButton: any) => {
    let width = 0;
    itemButton.forEach((item: any) => {
      width += item.text.length * 20;
    });
    return width;
  };

  // 处理列表columns
  handlecolumns = (props: any) => {
    const {
      itemButton,
      buttonLen,
      expandedRowRender,
      isFixed,
      operFixed,
    }: any = this.props;
    let columnList: any = this.handleBasicColumns(props);
    // 显示行操作项
    if (itemButton && itemButton.length) {
      const width =
        itemButton.length > buttonLen
          ? buttonLen == 1
            ? buttonLen * 90
            : buttonLen * 70
          : this.getOperWidth(itemButton);

      const column: any = [
        {
          width,
          key: 'operate',
          title: '操作',
          fixed: operFixed
            ? operFixed
            : expandedRowRender || isFixed
            ? false
            : 'right',
          render: (text: any, record: any) => {
            const button = itemButton.map((item: any) => {
              const flag =
                !item.visible ||
                (item.visible &&
                  typeof item.visible === 'function' &&
                  item.visible(record));
              if (!flag) {
                return {
                  text: '-',
                };
              } else {
                return item;
              }
            });

            const [mainBtn, otherBtn] = button.reduce(
              (prev: any, curr: any, index: number) => {
                if (index <= buttonLen - 1) {
                  prev[0].push(curr);
                } else {
                  prev[1].push(curr);
                }
                return prev;
              },
              [[], []],
            );

            const menu = (otherBtn || []).map((item: any, index: any) => {
              const { text, onClick, code, buttonType, ...otherProps } = item;
              return (
                <Menu.Item key={index}>
                  <AccessBtn>
                    {buttonType === 'delete' ? (
                      <Popconfirm
                        placement="rightTop"
                        title="确认删除该记录?"
                        data-code={code}
                        onConfirm={(e: any) => {
                          e.stopPropagation();
                          onClick && onClick(record);
                        }}
                      >
                        <span
                          onClick={(e: any) => e.stopPropagation()}
                          {...otherProps}
                        >
                          {text}
                        </span>
                      </Popconfirm>
                    ) : (
                      <span
                        {...otherProps}
                        data-code={code}
                        onClick={(e: any) => onClick && onClick(record, e)}
                      >
                        {text}
                      </span>
                    )}
                  </AccessBtn>
                </Menu.Item>
              );
            });

            return (
              <div className={styles.itemButtonRow}>
                {mainBtn.map((item: any, index: number) => {
                  const {
                    text,
                    buttonType,
                    code,
                    onClick,
                    visible,
                    ...otherProps
                  } = item;
                  const button = (
                    <Button
                      {...otherProps}
                      size="small"
                      onClick={(e: any) => e.stopPropagation()}
                      type="link"
                    >
                      {text}
                    </Button>
                  );

                  return buttonType == 'delete' ? (
                    <AccessBtn key={index}>
                      <Popconfirm
                        title="确认删除该记录？"
                        data-code={code}
                        onConfirm={(e: any) => {
                          e.stopPropagation();
                          onclick && onClick(record, e);
                        }}
                      >
                        {button}
                      </Popconfirm>
                    </AccessBtn>
                  ) : text != '-' ? (
                    <AccessBtn key={index}>
                      {React.cloneElement(button, {
                        'data-code': code,
                        onClick: (e: any) => onClick && onClick(record, e),
                      })}
                    </AccessBtn>
                  ) : (
                    ''
                  );
                })}
                {otherBtn.length ? (
                  <Dropdown
                    overlay={<Menu>{menu}</Menu>}
                    overlayClassName={styles.dropdown}
                  >
                    <Button
                      size="small"
                      className={styles.more}
                      onClick={(e: any) => e.stopPropagation()}
                    >
                      <DownOutlined onClick={(e: any) => e.stopPropagation()} />
                    </Button>
                  </Dropdown>
                ) : null}
              </div>
            );
          },
        },
      ];

      columnList =
        expandedRowRender && !operFixed
          ? [].concat(column, columnList)
          : [].concat(columnList, column);
    }
    this.setState({ columns: formatcolumn(columnList) });
  };
}

export default CommonTable;
