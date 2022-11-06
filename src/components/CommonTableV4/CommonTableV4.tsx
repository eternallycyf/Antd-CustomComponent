import React, { Fragment } from 'react';
import cx from 'classnames';
import { DownOutlined } from '@ant-design/icons';
import { Button, Dropdown, Menu, Popconfirm } from 'antd';
import Table from './components/EnhancedTable';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import { IButtonProps, ICommonTable } from '@/typings';
import { formatColumn } from '@/utils/util';
import BaseTable, { IBaseTableState } from './components/BaseTable';
import TableBtn from '@/components/commonTable/widgets/TableBtn';
import AccessBtn from '@/components/AccessBtn';
import styles from './index.less';
import _ from 'lodash';

class CommonTable extends BaseTable<ICommonTable<any>, IBaseTableState> {
  static defaultProps = {
    wrapClassStr: '.tabs-tabPane-active',
    size: 'small',
    rowKey: 'id',
    recordKey: 'list',
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
    if (initRequest) this.loadData();
    window.addEventListener('dev', () => {
      this.setState({ dev: true }, this.handleColumns);
    });
  }

  componentDidMount(): void {
    this.handleColumns();
  }

  getOpenWidth = (itemButton: any) => {
    let width = 0;
    itemButton.forEach((item: any) => {
      width += item.text.length * 20;
    });
    return width;
  };

  // 处理列表columns
  handleColumns = () => {
    const {
      itemButton,
      buttonLen,
      expandedRowRender,
      isFixed,
      openFixed,
    }: any = this.props;
    let columnList: any = this.handleBasicColumns(this.props);
    // 显示行操作项
    if (itemButton && itemButton.length) {
      const width =
        itemButton.length > buttonLen
          ? buttonLen == 1
            ? buttonLen * 90
            : buttonLen * 70
          : this.getOpenWidth(itemButton);

      const column: any = [
        {
          width,
          key: 'operate',
          title: '操作',
          fixed: openFixed
            ? openFixed
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
        expandedRowRender && !openFixed
          ? [].concat(column, columnList)
          : [].concat(columnList, column);
    }
    this.setState({ columns: formatColumn(columnList) });
  };

  render() {
    const {
      form,
      rowKey,
      className,
      alternateColor,
      selectType,
      rowSelection,
      pagination,
      defaultPageSize,
      footer,
      button,
      buttonOther,
      draggable,
      resizable,
      calcHeight,
      bodyStyle,
      onSelect,
      dataSource: data = [],
      onTableChange,
      ...extraProps
    } = this.props;
    let restProps: any = { ...extraProps };
    const {
      loading,
      height,
      total,
      current,
      pageSize,
      columns,
      dataSource,
      selectedRowkeys,
    } = this.state;

    const paging =
      typeof pagination !== 'boolean'
        ? {
            total,
            current,
            pageSize,
            defaultPageSize,
            showQuickJumper: true,
            showSizeChanger: true,
            pageSizeOptions: ['10', '30', '50'],
            showTotal: (total: number, range: any[]) => {
              return `一共${total}条记录， 当前第${range[0]}条到${range[1]}条`;
            },
            ...pagination,
          }
        : false;

    const selectOptions = onSelect
      ? {
          type: selectType == 'radio' ? 'radio' : 'checkbox',
          selectedRowkeys,
          columnWidth: 40,
          onChange: this.onSelectChange,
          ...rowSelection,
        }
      : null;

    // scroll 滚动条处理
    const originScroll = this.props.scroll || { x: '100%', y: '100%' };
    const scroll = {
      x: originScroll.x || '100%',
      y: originScroll.y || '100%',
    };

    if (draggable) {
      restProps.onRow = (_: any, index: number) => ({
        index,
        moveRow: this.moveRow,
      });
    }

    const table = (
      <Fragment>
        <div className={buttonOther ? styles.tableButton : ''}>
          <TableBtn button={button as IButtonProps[]} />
          <TableBtn button={buttonOther} />
        </div>
        <div className={styles.tableWrap}>
          <Table
            {...extraProps}
            components={this.components}
            rowHeight={40}
            footer={footer}
            className={this.cls}
            height={height}
            rowKey={rowKey}
            scroll={scroll}
            loading={loading}
            pagination={paging}
            columns={columns}
            dataSource={data?.length > 0 ? data : dataSource}
            rowSelection={selectOptions}
            onChange={onTableChange ? onTableChange : this.handleTableChange}
            size="small"
          />
        </div>
      </Fragment>
    );

    return draggable ? (
      <DndProvider backend={HTML5Backend}>{table}</DndProvider>
    ) : (
      table
    );
  }
}

export default CommonTable;
