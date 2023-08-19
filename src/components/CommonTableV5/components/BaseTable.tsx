import { DraggableBodyRow } from '@/components/CommonTableV5/components/widgets/DragTableRow';
import { ResizableTitle } from '@/components/CommonTableV5/components/widgets/Resizable';
import { renderBtn } from '@/components/CommonTableV5/components/widgets/TableBtn';
import { getAction, postAction } from '@/services/global';
import { ICommonTable } from '@/typings';
import update from 'immutability-helper';
import _ from 'lodash';
import React from 'react';
import { EditableCell } from './widgets/EditableCell';

export interface IBaseTableState {
  loading: boolean;
  height: number;
  total: number;
  filters: any;
  sorter: any;
  current: number;
  pageSize: number;
  requestCount: number;
  extraParams: any;
  columns: any[];
  dataSource: any[];
  dev: boolean;
  indeterminate: boolean;
  checkAll: boolean;
  checkedList: any[] | [];
  checkedOptions: any[];
  summaryDataSource?: any[];
  hasBtn?: boolean;
}

const DEFAULT_OBSERVE_PARAMS = {
  childList: true, // 子节点的变动（新增、删除或者更改）
  attributes: true, // 属性的变动
  characterData: true, // 节点内容或节点文本的变动
  subtree: true, // 是否将观察器应用于该节点的所有后代节点
};

function getTabPaneActiveChildren(node: HTMLElement): HTMLElement[] {
  const children: HTMLElement[] = [];
  const childList = [...node.children];
  if (childList?.length) {
    childList.forEach((child) => {
      children.push(child as HTMLElement);
      children.push(...getTabPaneActiveChildren(child as HTMLElement));
    });
  }
  return children;
}

function _setTableBody(isVirtual: boolean, self: InstanceType<typeof BaseTable>) {
  const children = getTabPaneActiveChildren(document.querySelector('.ant-tabs-tabpane-active')!);
  const tabpaneActives = children.filter((item) => [...item.classList].includes('ant-tabs-tabpane-active'));
  const tableClassName = isVirtual ? 'scroll-container' : 'ant-table-body';

  const realTable = (tabpaneActives[tabpaneActives.length - 1]?.querySelector(`.${tableClassName}`) ||
    children?.find((item) => [...item.classList].includes(tableClassName))) as HTMLDivElement;
  if (realTable) {
    const height = window.innerHeight - realTable.getBoundingClientRect().top - (isVirtual ? 40 : 80);
    self.setState({ height });
    realTable.style.height = `${height}px`;
  }
}

const initHeightParams = (wrapClassStr: string, buttonRow: any, pagination: any) => {
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

const handleColumns = (columns: any[]) => {
  return columns.map((item) => {
    if (Array.isArray(item.children)) {
      item.children = handleColumns(item.children);
    }
    return {
      ...item,
      sortDirection: item.sorter ? item.sortDirections || ['descend', 'ascend'] : undefined,
    };
  });
};

class BaseTable<P extends ICommonTable<any>, S extends IBaseTableState> extends React.PureComponent<P, S> {
  protected observer: any;
  protected components: any = {};
  protected heightParams!: { container: any; height: number };

  setTableBody = () => _setTableBody(this.props.isVirtual!, this);

  handleInitBaseTable = () => {
    const { calcHeight, wrapClassStr, button, pagination }: any = this.props;
    if (calcHeight) {
      this.heightParams = initHeightParams(wrapClassStr, renderBtn(button), pagination);
      this.setTableBody();
      window.addEventListener('resize', this.setTableBody);
    }
  };

  componentDidUpdate(preProps: Readonly<P>, prevState: Readonly<S>, snapshot?: any): void {
    if (!_.isEqual(preProps.dataSource, this.props.dataSource)) {
      this.setState({ dataSource: preProps.dataSource! });
    }

    if (!_.isEqualWith(preProps.columns, this.props.columns, isUpdate)) {
      // @ts-ignore
      this.handleColumns(preProps);
    }

    if (preProps.loading !== this.props.loading) {
      this.setState({ loading: preProps.loading! });
    }

    if (!_.isEqual(prevState.dataSource, this.state.dataSource)) {
      this.setTableBody();
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.setTableBody);
    if (this.observer) {
      this.observer.takeRecords();
      this.observer.disconnect();
    }
    this.handleTopButton();
  }

  handleTopButton = () => {
    const { buttonLeft = [], button = [] } = this.props;
    const accessCollection = JSON.parse(sessionStorage.getItem('accessCollection') || '[]');
    const left = buttonLeft.filter((item) => (item.code ? accessCollection.includes(item.code) : true));
    const right = button.filter((item) => (item.code ? accessCollection.includes(item.code) : true));
    this.setState({
      hasBtn: [...left, ...right].length > 0,
    });
  };

  // 返回dataSource for outer
  getTableData = () => {
    return this.state.dataSource;
  };

  // 请求数据
  loadData = async (isReset: boolean = false) => {
    const { loading, sorter, filters, current, pageSize: currentPageSize, requestCount = 0, extraParams } = this.state;
    const { fixRowKeys = [], isVirtual = false, urlAlls } = this.props;
    const { urls, recordKey, fetchMethod, searchParams, dataHandler, rowKey, isSummary, dataPath, totalPath, pagination }: any = this.props;

    const pageSize = pagination === false ? 10000 : currentPageSize || 30;
    if (!(urls && urls.listUrl)) return;
    if (loading) return;

    this.setState({ loading: true });
    try {
      const action = (fetchMethod && fetchMethod.toLocaleLowerCase()) === 'get' ? getAction : postAction;
      const currentPage = isReset ? 1 : current;
      const resultAction = action(urls.listUrl, {
        page: currentPage,
        limit: isSummary ? pageSize - 1 : pageSize,
        // limit: pageSize,
        ...searchParams,
        ...extraParams,
        ...sorter,
      });

      // 合计行数据处理
      let resultAllAction;
      let newDataSource = [];
      if (urlAlls && urlAlls.listUrl) {
        resultAllAction = action(urlAlls.listUrl, {
          ...searchParams,
          ...extraParams,
          ...sorter,
          page: 1,
          limit: 1,
          isAmounted: 1,
        });
      }

      Promise.all([resultAction, resultAllAction])
        .then(([result, resultAll]) => {
          const data = dataPath ? _.get(result, dataPath) : result.data;
          const rows = Array.isArray(data) ? data : data[recordKey];
          const total = totalPath ? _.get(result, totalPath) : data.totalCount || data.total || rows.length;
          // dataSource 数据处理
          let dataSource = (rows || []).map((item: any, index: number) => ({
            ...item,
            index: (currentPage - 1) * pageSize + (index + 1) || index + 1,
            rowKey: (typeof rowKey === 'function' ? rowKey(item, index) : item[rowKey]) || (currentPage - 1) * pageSize + (index + 1),
          }));
          dataSource = dataHandler ? dataHandler(dataSource, data) : dataSource;

          const getFixedData = (dataSource: any[]) => {
            let newDataSource: any[] = [];
            let fixRowData = fixRowKeys?.map((item) => dataSource.find((ele: any) => ele.rowKey == item)).filter(Boolean) || [];
            if (!fixRowData.length) return dataSource;
            newDataSource = dataSource.filter((item: any) => !fixRowKeys?.includes(item.rowKey));
            newDataSource = [...fixRowData, ...newDataSource];
            return newDataSource;
          };

          const newData = isVirtual || !fixRowKeys?.length ? dataSource : getFixedData(dataSource);

          newDataSource = resultAll?.data?.list ? resultAll.data.list : this.state.summaryDataSource;

          this.setState({
            loading: false,
            dataSource: newData,
            current: currentPage,
            total,
            requestCount: requestCount + 1,
            summaryDataSource: newDataSource,
          });
        })
        .catch((e) => {
          this.setState({ loading: false });
          console.error(e);
        });
    } catch (e) {
      console.error(e);
      this.setState({ loading: false });
    }
    setTimeout(() => {
      this.props.handleScroll && this.props.handleScroll();
    }, 1000);
  };

  handleBasicColumns = (props: any) => {
    const { showIndex, columns = [], resizable, draggable, editable }: any = props || this.props;
    const { dev } = this.state;
    let columnList = handleColumns(columns);
    //展示序号
    if (showIndex) {
      columnList = ([] as any).concat(
        {
          dataIndex: 'index',
          title: '序号',
          width: 44,
          align: 'center',
          className: 'ant-table-cell-index',
          editable: false,
        },
        columnList,
      );
      columnList[0]['fixed'] = columnList.some((item) => item['fixed'] === 'left') ? 'left' : null;
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

    if (draggable || dev) {
      const newComponents = { ...this.components };
      newComponents.body = { ...newComponents.body, row: DraggableBodyRow };
      this.components = { ...newComponents };
    }

    if (editable || dev) {
      const newComponents = { ...this.components };
      newComponents.body = { ...newComponents.body, cell: EditableCell };
      this.components = { ...newComponents };
    }

    return columnList;
  };

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
    const { field, column: { sorterFn = null, isRefresh = true } = {} } = sorter;
    const { current, pageSize } = pagination;
    const order = (sorter.order === 'ascend' && 'asc') || 'desc';
    let sort =
      field && sorter.order
        ? field
            .split('.')
            .pop()
            .replace(/\B([A-Z])/g, '_$1')
            .toLowerCase()
        : null;

    // 如果排序索引和显示字段不一致，采用排序索引
    if (sorter.column && sorter.column.sorter === true && sorter.column.sorterIndex) {
      sort = sorter.column.sorterIndex;
    }

    this.setState(
      {
        current,
        pageSize,
        filters,
        sorter: order && sort ? (sorterFn ? sorterFn(field, order) : { order, sort }) : {},
      },
      () => {
        if (isRefresh) this.loadData();
      },
    );
  };

  /**
   * 选择事件
   * @param selectedRowKeys
   * @param selectedRows
   */
  onSelectChange = (selectedRowKeys: any[], selectedRows: any[]) => {
    const { onSelect } = this.props;
    if (onSelect) {
      onSelect(selectedRowKeys, selectedRows);
    }
  };

  /**
   *  处理表头大小变更
   * @param {number} index
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
   * @param {number} dragIndex
   * @param {number} hoverIndex
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
