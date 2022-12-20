import React from 'react';
import _ from 'lodash';
import update from 'immutability-helper';
import { ICommonTable } from '@/typings';
import { getAction, postAction } from '@/services/global';
import { ResizableTitle } from '@/components/CommonTable/widgets/Resizable';
import { renderBtn } from '@/components/CommonTable/widgets/TableBtn';

export interface IBaseTableState {
  loading: boolean;
  height: number;
  total: number;
  filters: any;
  sorter: any;
  current: number;
  pageSize: number;
  extraParams: any;
  columns: any[];
  dataSource: any[];
  selectedRowkeys: any[];
  selectedRows: any[];
  dev: Boolean;
}
const DEFAULT_OBSERVE_PARAMS = {
  childList: true, // 子节点的变动（新增、删除或者更改）
  attributes: true, // 属性的变动
  characterData: true, // 节点内容或节点文本的变动
  subtree: true, // 是否将观察器应用于该节点的所有后代节点
};

const initHeightParams = (
  wrapClassStr: string,
  buttonRow: any,
  pagination: any,
) => {
  const container: any = document.querySelector(wrapClassStr);
  const theadHeight = container?.querySelector('.ant-table-thead').clientHeight;
  const containerHeight = container?.clientHeight - 32;

  // button高度计算
  const buttonHeight = buttonRow ? 30 : 8;

  // pagination
  const paginationHeight = typeof pagination !== 'boolean' ? 30 : 0;

  // 其他项总高度
  const tableHeadHeight = 30;
  const otherHeight = buttonHeight + theadHeight + paginationHeight;

  return {
    container,
    height: containerHeight - otherHeight - 30,
  };
};

const isUpdate = (array: [], other: any) => {
  if (_.isFunction(array) && _.isFunction(other)) return true;
};

class BaseTable<
  P extends ICommonTable<any>,
  S extends IBaseTableState,
> extends React.PureComponent<P, S> {
  protected observer: any;
  protected components: any = {};
  protected heightParams!: { container: any; height: number };

  componentDidMount() {
    const { calcHeight, wrapClassStr, button, pagination }: any = this.props;
    if (calcHeight) {
      this.heightParams = initHeightParams(
        wrapClassStr,
        renderBtn(button),
        pagination,
      );
      this.handleTableHeight();
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps: any) {
    if (!_.isEqual(nextProps.dataSource, this.props.dataSource)) {
      this.setState({ dataSource: nextProps.dataSource });
    }

    if (!_.isEqualWith(nextProps.columns, this.props.columns, isUpdate)) {
      // @ts-ignore
      this.handleColumns(nextProps);
    }

    if (nextProps.loading !== this.props.loading) {
      this.setState({ loading: nextProps.loading });
    }

    if (
      nextProps.selectedRowkeys !== this.props.selectedRowkeys &&
      nextProps.selectedRows !== this.props.selectedRows
    ) {
      this.setState({
        selectedRowkeys: nextProps.selectedRowkeys,
        selectedRows: nextProps.selectedRows,
      });
    }
  }

  componentWillUnmount() {
    if (this.observer) {
      this.observer.takeRecords();
      this.observer.disconnect();
    }
  }

  // 返回dataSource for outer
  gettableData = () => {
    return this.state.dataSource;
  };

  // 请求数据
  loadData = async (isReset: boolean = false) => {
    const { loading, sorter, filters, current, pageSize, extraParams } =
      this.state;
    const {
      urls,
      recordKey,
      fetchMethod,
      searchParams,
      dataHandler,
      rowKey,
      isSummary,
      dataPath,
      totalPath,
    }: any = this.props;

    if (!(urls && urls.listUrl)) return;
    if (loading) return;

    this.setState({ loading: true });
    try {
      const action =
        (fetchMethod && fetchMethod.toLocaleLowerCase()) === 'get'
          ? getAction
          : postAction;
      const currentPage = isReset ? 1 : current;
      const result = await action(urls.listUrl, {
        page: currentPage,
        limit: isSummary ? pageSize - 1 : pageSize,
        ...searchParams,
        ...extraParams,
        ...sorter,
      });
      const data = dataPath ? _.get(result, dataPath) : result.data;
      const rows = Array.isArray(data) ? data : data[recordKey];
      const total = totalPath
        ? _.get(result, totalPath)
        : data.totalCount || data.total || rows.length;
      // dataSource 数据处理
      let dataSource = (rows || []).map((item: any, index: number) => ({
        ...item,
        index: (currentPage - 1) * pageSize + (index + 1),
        rowKey:
          (typeof rowKey == 'function' ? rowKey(item, index) : item[rowKey]) ||
          (currentPage - 1) * pageSize + (index + 1),
      }));
      dataSource = dataHandler ? dataHandler(dataSource, data) : dataSource;
      this.setState({
        loading: false,
        dataSource,
        current: currentPage,
        total,
      });
    } catch (e) {
      console.log(e);
      this.setState({ loading: false });
    }
  };

  handleBasicColumns = (props: any) => {
    const { showIndex, columns, resizable }: any = props || this.props;
    const { dev } = this.state;
    let columnList = [...columns];
    //展示序号
    if (showIndex) {
      columnList = ([] as any).concat(
        {
          dataIndex: 'index',
          title: '序号',
          width: 44,
          align: 'center',
        },
        columnList,
      );
      columnList[0]['fixed'] = columnList.some(
        (item) => item['fixed'] === 'left',
      )
        ? 'left'
        : null;
    }
    //表格列是否可伸缩
    if (resizable || dev) {
      columnList = columnList.map((col, index) => ({
        ...col,
        onHeaderCell: (column: any) => ({
          width: column.width,
          onResize: this.handleResize(index),
        }),
      }));

      this.components = {
        ...this.components,
        header: {
          cell: ResizableTitle,
        },
      };
    }
    return columnList;
  };

  //处理列表高度
  handleTableHeight = () => {
    const { container, height } = this.heightParams;
    const searchWrap = container?.querySelector('. searchWrap');
    if (searchWrap) {
      this.observer = new MutationObserver((mutations, observer) => {
        const tableHeight: number = height - searchWrap.clientHeight;
        if (this.state.height == tableHeight || tableHeight === height) return;
        if (this.props.isVirtual) {
          // 虚拟滚动表格的高度，需要通过props动态设置
          this.setState({
            height: tableHeight,
          });
        }
        this.setTableBody(tableHeight);
      });
      this.observer.observe(searchWrap, DEFAULT_OBSERVE_PARAMS);
    } else {
      this.setState({ height });
      this.setTableBody(height);
    }
  };

  setTableBody(height: number) {
    const tableBodyNodeList = document.querySelectorAll('.ant-table-body'); // 多个标签页多个表格有多个dom
    if (tableBodyNodeList.length) {
      [...tableBodyNodeList].forEach((tableBodyDOM) => {
        (tableBodyDOM as any).style.height = height + 'px';
        //tableBodyDoM.style.overflow ＝ ＇auto＇ 设置该属性会导致协议管理-机构客户页面不断拉长
      });
    }
  }

  //刷新列表
  handleFirstPage = () => {
    return this.loadData(true);
  };

  //刷新列表
  handleRefreshPage = () => {
    this.loadData();
  };

  //处理动态参数变动
  handleDynamicParam = async (values: any) => {
    this.setState({ extraParams: values }, this.loadData);
  };

  // 表格change
  handleTableChange = async (pagination: any, filters: any, sorter: any) => {
    const { field } = sorter;
    const { current, pageSize } = pagination;
    const order = (sorter.order == 'ascend' && 'asc') || 'desc';
    const sort =
      field && sorter.order
        ? field
            .split('.')
            .pop()
            .replace(/\B([A-Z])/g, '_$1')
            .toLowerCase()
        : null;

    this.setState(
      {
        current,
        pageSize,
        filters,
        sorter: order && sort ? { order, sort } : {},
      },
      () => {
        this.loadData();
      },
    );
  };

  // 清空选择
  handleClearSelected = () => {
    const { onselect } = this.props;
    this.setState({ selectedRowkeys: [], selectedRows: [] });
    if (onselect) onselect([], []);
  };

  /**
   * 选择事件
   * @param selectedRowkeys
   * @param selectedRows
   */
  onSelectChange = (selectedRowkeys: any[], selectedRows: any[]) => {
    const { onSelect } = this.props;
    const stateRows = this.state.selectedRows;
    let resultRows = [];
    if (selectedRowkeys.length > selectedRows.length) {
      const partialSelectedRowKeys = selectedRows.map((row) => row.rowKey);
      const leftRows = stateRows.filter(
        (row) =>
          selectedRowkeys.indexOf(row.rowKey) >= 0 &&
          partialSelectedRowKeys.indexOf(row.rowKey) < 0,
      );
      resultRows = leftRows.concat(selectedRows);
    } else {
      resultRows = selectedRows;
    }

    this.setState({
      selectedRowkeys,
      selectedRows: resultRows,
    });

    if (onSelect) {
      onSelect(selectedRowkeys, resultRows);
    }
  };

  /**
   *  处理表头大小变更
   * @param index
   * @returns
   */
  handleResize =
    (index: number) =>
    (e: any, { size }: any) => {
      this.setState(({ columns }) => {
        const nextColumns = [...columns];
        nextColumns[index] = {
          ...nextColumns[index],
          width: size.width,
        };
        return { columns: nextColumns };
      });
    };

  /**
   *  拖拽行
   * @param dragIndex
   * @param hoverIndex
   */
  moveRow = (dragIndex: number, hoverIndex: number) => {
    const { dataSource } = this.state;
    const dragRow = dataSource[dragIndex];

    this.setState(
      update(this.state, {
        dataSource: {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, dragRow],
          ],
        },
      } as any),
    );
  };
}
export default BaseTable;
