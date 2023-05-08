import React, { Fragment } from 'react';
import cx from 'classnames';
import { DownOutlined, SettingFilled, SettingOutlined } from '@ant-design/icons';
import { Button, Dropdown, Popconfirm, Table as AntdTable, Empty, Popover, Checkbox } from 'antd';
import Table from './components/EnhancedTable';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { IButtonProps, IColumnsType, ICommonTable } from '@/typings';
import { formatColumn as formatColumnUtil } from '@/utils/util';
import BaseTable, { IBaseTableState } from './components/BaseTable';
import TableBtn from '@/components/CommonTableV5/components/widgets/TableBtn';
import AccessBtn from '@/components/AccessBtn';
import styles from './index.less';
import { getUUID } from '@/utils/random';
import { CheckboxChangeEvent } from 'antd/lib/checkbox';
import { CheckboxValueType } from 'antd/lib/checkbox/Group';
import { getDvaApp } from '@umijs/max';
const { theme } = getDvaApp()._store.getState().global;
class CommonTable<T> extends BaseTable<ICommonTable<T>, IBaseTableState> {
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
    defaultPageSize: 30,
    buttonLen: 5,
    itemButtonWidth: 200,
    showIndex: true,
    calcHeight: true,
    initRequest: true,
    isSummary: false,
    summaryPosition: 'top',
  };
  cls: string = '';
  constructor(props: any) {
    super(props);
    this.state = {
      loading: props.loading,
      height: props.scroll && props.scroll.y ? props.scroll.y : 0,
      total: 0,
      filters: {},
      sorter: {},
      current: 1,
      pageSize: props.defaultPageSize || 30,
      extraParams: props.extraParams || {},
      columns: [],
      selectedRowkeys: props.selectedRowkeys || [],
      selectedRows: props.selectedRows || [],
      dev: false,
      dataSource: [],
      requestCount: 0,
      indeterminate: false,
      checkAll: true,
      checkedOptions: [],
      checkedList: [],
    };

    this.cls = cx('common-table', props.className, {
      [theme === 'light' ? 'table-row-alternate-color-light' : 'table-row-alternate-color-dark']: props.alternateColor,
    });
  }

  componentDidMount(): void {
    const { initRequest } = this.props;
    if (initRequest) this.loadData();
    window.addEventListener('dev', () => {
      this.setState({ dev: true }, this.handleColumns);
    });
    this.handleColumns();
  }

  getOpenWidth = (itemButton: any) => {
    let width = 0;
    itemButton.forEach((item: any) => {
      width += item.text.length * 20;
    });
    return width;
  };

  handleSetDefaultChecked = (cb?: (columnList: any[]) => void) => {
    const { checkAll = true, indeterminate = false } = this.props;
    let columnList: any = this.handleBasicColumns(this.props);
    const list: any[] = (columnList || [])
      .filter((item: any) => item?.title !== '操作' && item?.key !== 'operate')
      ?.map((item: any) => ({
        label: typeof item?.title == 'function' ? item.title() : item?.title,
        value: item.dataIndex,
        disabled: item?.initCheckedDisabled ?? false,
        initChecked: item?.initChecked ?? true,
      }));

    const checkList = list.filter((item) => item.initChecked).map((item) => item.value);

    this.setState(
      {
        checkAll: checkAll,
        indeterminate: indeterminate,
        checkedOptions: list,
        checkedList: checkAll ? checkList : [],
      },
      () => {
        if (cb) cb(columnList);
      },
    );
  };

  // 处理列表columns
  handleColumns = () => {
    const { itemButton, buttonLen, expandedRowRender, isFixed, openFixed, itemButtonWidth }: any = this.props;
    const handleSetColumns = (columnList: any) => {
      // 显示行操作项
      if (itemButton && itemButton.length) {
        const width =
          itemButton.length > buttonLen
            ? buttonLen == 1
              ? buttonLen * 90
              : buttonLen * 70
            : this.getOpenWidth(itemButton) || itemButtonWidth;

        const column: any = [
          {
            width,
            key: 'operate',
            align: 'center',
            title: () => this.renderOperateTitle(columnList),
            fixed: openFixed ? openFixed : expandedRowRender || isFixed ? false : 'right',
            render: (text: any, record: any) => {
              const button = itemButton.map((item: any) => {
                const flag =
                  !item.visible || (item.visible && typeof item.visible === 'function' && item.visible(record));
                if (!flag) {
                  return {
                    text: '-',
                    type: 'primary',
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
                return [
                  {
                    key: index,
                    children: (
                      <AccessBtn>
                        {buttonType === 'delete' ? (
                          <Popconfirm
                            placement="rightTop"
                            title="确认删除该记录?"
                            data-code={code}
                            onConfirm={(e: any) => {
                              e.stopPropagation();
                              if (onClick) onClick(record);
                            }}
                          >
                            <span onClick={(e: any) => e.stopPropagation()} {...otherProps}>
                              {text}
                            </span>
                          </Popconfirm>
                        ) : (
                          <span {...otherProps} data-code={code} onClick={(e: any) => onClick && onClick(record, e)}>
                            {text}
                          </span>
                        )}
                      </AccessBtn>
                    ),
                  },
                ];
              });

              return (
                <div className={styles.itemButtonRow}>
                  {mainBtn.map((item: any, index: number) => {
                    const { text, buttonType, code, onClick, visible, ...otherProps } = item;
                    const button = (
                      <Button
                        {...otherProps}
                        size="small"
                        onClick={(e: any) => e.stopPropagation()}
                        type="link"
                        danger={buttonType === 'delete'}
                      >
                        {text}
                      </Button>
                    );

                    return buttonType === 'delete' ? (
                      <AccessBtn key={index}>
                        <Popconfirm
                          title="确认删除该记录？"
                          data-code={code}
                          onConfirm={(e: any) => {
                            e.stopPropagation();
                            if (onClick) onClick(record, e);
                          }}
                        >
                          {button}
                        </Popconfirm>
                      </AccessBtn>
                    ) : text !== '-' ? (
                      <AccessBtn key={index}>
                        {React.cloneElement(button, {
                          'data-code': code,
                          onClick: (e: any) => onClick && onClick(record, e),
                        })}
                      </AccessBtn>
                    ) : (
                      '-'
                    );
                  })}
                  {otherBtn.length ? (
                    <Dropdown menu={menu} overlayClassName={styles.dropdown}>
                      <Button size="small" className={styles.more} onClick={(e: any) => e.stopPropagation()}>
                        <DownOutlined onClick={(e: any) => e.stopPropagation()} />
                      </Button>
                    </Dropdown>
                  ) : null}
                </div>
              );
            },
          },
        ];

        columnList = expandedRowRender && !openFixed ? [].concat(column, columnList) : [].concat(columnList, column);
      }
      let columns = formatColumnUtil(columnList);
      if (this.props?.formatColumn) {
        columns = this.props?.formatColumn(columns);
      }

      this.setState({
        columns: columns.filter((item: any) => (item?.initChecked === undefined ? true : item?.initChecked)),
      });
    };
    this.handleSetDefaultChecked(handleSetColumns);
  };

  renderOperateTitle = (columnList: any[] = []) => {
    const { formatColumn } = this.props;
    const { indeterminate, checkAll, checkedList, checkedOptions } = this.state;
    const checkDefaultValues = checkedOptions.map((item) => item.value);

    const _formatColumns = (list: any[]) => (formatColumn ? formatColumn(list) : formatColumnUtil(list));

    const getCurrentColumnsList = (isCheckAll: boolean) => {
      let columns = [];
      if (isCheckAll) {
        columns = columnList;
      } else {
        columns = columnList.filter(
          (item: any) =>
            !checkDefaultValues.includes(item?.dataIndex) || item?.key === 'operate' || item?.initCheckedDisabled,
        );
      }
      return _formatColumns(columns);
    };

    const onCheckAllChange = (e: CheckboxChangeEvent) => {
      const checkAll = e.target.checked;
      const columns = getCurrentColumnsList(checkAll);
      const checkedList = checkAll
        ? checkDefaultValues
        : checkedOptions.filter((item) => item.disabled).map((item) => item.value);

      this.setState({
        checkedList,
        indeterminate: false,
        checkAll,
        columns,
      });
    };

    const onChange = (list: CheckboxValueType[]) => {
      const newColumnList = columnList.filter((item: any) => list.includes(item.dataIndex) || item?.key === 'operate');
      this.setState({
        checkedList: list,
        indeterminate: !!list.length && list.length < checkDefaultValues.length,
        checkAll: list.length === checkDefaultValues.length,
        columns: _formatColumns(newColumnList),
      });
    };

    const onReset = () => this.handleColumns();

    const content = (
      <div className={styles.operateShowList}>
        <div className={styles.operateShowListTitle}>
          <div>
            <Checkbox indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll}>
              列展示
            </Checkbox>
          </div>
          <Button type="link" onClick={onReset}>
            重置
          </Button>
        </div>
        <Checkbox.Group
          value={checkedList}
          options={checkedOptions}
          className={styles.operateShowListContent}
          onChange={onChange}
        />
      </div>
    );

    return (
      <Popover trigger="click" content={content}>
        操作 &nbsp;
        <SettingOutlined />
      </Popover>
    );
  };

  renderSummary = (currentData: any[], columns: any[]) => {
    const hasSelect = typeof this.props.onSelect === 'function';
    const hasIndex = this.props.showIndex === true;
    const summaryColumns = hasIndex ? columns.slice(1) : columns;
    summaryColumns.pop();
    const summaryData = currentData?.[0];
    const renderCell = (title = '', index: number, item: any = {}) => {
      return (
        <AntdTable.Summary.Cell key={getUUID()} index={index} align="center" {...item}>
          {title}
        </AntdTable.Summary.Cell>
      );
    };
    return (
      <AntdTable.Summary fixed={this.props.summaryPosition}>
        <AntdTable.Summary.Row>
          <AntdTable.Summary.Cell index={0}>0</AntdTable.Summary.Cell>
          {hasSelect ? renderCell('-', 0) : renderCell('合计', 1)}
          {hasSelect ? renderCell('合计', 1) : null}
          {summaryColumns.map(({ dataIndex, ...item }, index) => {
            return renderCell(summaryData?.[dataIndex], index + 2, item);
          })}
          {renderCell('-', 999)}
        </AntdTable.Summary.Row>
      </AntdTable.Summary>
    );
  };

  getOnRow = (restProps: any) => {
    const { draggable, data, rowKey } = this.props;
    const { dataSource } = this.state;
    const defaultOnRow = restProps.onRow ? restProps.onRow : null;
    const fixRowKeys = restProps?.fixRowKeys || [];
    const _data = (data?.length > 0 ? data : dataSource) || [];
    restProps.onRow = (record: any, index: number) => {
      const defaultRowProps = defaultOnRow ? defaultOnRow(record, index) : {};
      const dataHasFixedKeys =
        fixRowKeys.filter((key: any) => _data.some((ele: any) => ele[rowKey as any] == key)) || [];
      const currentRowKey = record?.[rowKey as any];
      const fixedStyle = {};

      if (dataHasFixedKeys.includes(currentRowKey)) {
        fixedStyle['position'] = 'sticky';
        fixedStyle['top'] = 45 * dataHasFixedKeys.findIndex((item: any) => item == currentRowKey);
        fixedStyle['zIndex'] = 999;
      }

      return {
        index,
        moveRow: draggable ? this.moveRow : null,
        style: fixedStyle,
        ...defaultRowProps,
      } as React.HTMLAttributes<any>;
    };
  };

  render(): any {
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
      initRequest,
      requestCount,
      ...extraProps
    } = this.props;
    let restProps: any = { ...extraProps };
    const { loading, height, total, current, pageSize, columns, dataSource, selectedRowkeys } = this.state;

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
          type: selectType === 'radio' ? 'radio' : 'checkbox',
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

    this.getOnRow(restProps);

    const BaseTable = (
      <Table
        {...restProps}
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
        onChange={(...params: any[]) => {
          const { requestCount = 0 } = this.state;
          if (onTableChange) {
            onTableChange(...params);
          } else {
            // @ts-ignore
            this.handleTableChange(...params);
          }
          this.setState({ requestCount: requestCount + 1 });
        }}
        size="small"
        initRequest={initRequest}
        summary={(currentData: any[]) => (this.props.isSummary ? this.renderSummary(currentData, columns) : null)}
        locale={{
          emptyText: (
            <Empty
              description={!initRequest && !requestCount ? '请选择筛选条件进行查询' : '暂无数据'}
              style={{ color: '#b3b8c2', fontSize: 12, height: 500, display: 'grid', placeContent: 'center' }}
              image={!initRequest && !requestCount ? require('@/assets/empty.png') : Empty.PRESENTED_IMAGE_SIMPLE}
            />
          ),
        }}
      />
    );

    if (this.props.editable) return BaseTable;

    const table = (
      <Fragment>
        <div className={buttonOther ? styles.tableButton : ''}>
          <TableBtn button={button as IButtonProps[]} />
          <TableBtn button={buttonOther} />
        </div>
        <div className={styles.tableWrap}>
          {this.props.children}
          {BaseTable}
        </div>
      </Fragment>
    );

    return draggable ? <DndProvider backend={HTML5Backend}>{table}</DndProvider> : table;
  }
}

export default CommonTable;
