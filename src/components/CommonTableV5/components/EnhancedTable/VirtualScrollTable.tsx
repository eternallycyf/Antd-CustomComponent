import React, {
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback,
} from 'react';
import classNames from 'classnames';
import Table from './MemoTable';
import './VirtualScrollTable.less';
import { debounce } from 'lodash';
import { Checkbox, Radio } from 'antd';
import { getUUID } from '@/utils/random';

function getFirstFixRight(columns: any) {
  let firstFixRightColumnIndex = -1;
  for (let i = columns.length - 1; i >= 0; i--) {
    //倒著找，加快查找速度
    const column = columns[i];
    if (column.fixed === 'right') {
      firstFixRightColumnIndex = i;
    } else {
      break;
    }
  }
  return firstFixRightColumnIndex;
}

function getLastFixLeft(columns: any) {
  let lastFixLeftColumnIndex = -1;
  for (let j = 0; j < columns.length; j++) {
    const column = columns[j];
    if (column.fixed === 'left') {
      lastFixLeftColumnIndex = j;
    } else {
      break;
    }
  }
  return lastFixLeftColumnIndex;
}

const getRangeBuilder = (fn: any, rowOrColumn: any) => {
  // 计算展示的行列分布函数生成器
  let prevScrollTop: null = null;
  let prevScrollLeft: null = null;
  let prevScrollDirection: string | null = null; // 'horizontal' 'vertical'，默认为垂直方向滚动
  let cache: null = null;
  return (...args: any) => {
    const [scrollItem, displayColumns] = args;
    const { scrollTop, scrollLeft } = scrollItem;
    const scrollDirection =
      scrollTop === prevScrollTop
        ? 'horizontal'
        : scrollLeft === prevScrollLeft
        ? 'vertical'
        : null; //当前是水平滚动还是垂直滚动
    let value;
    if (prevScrollDirection === scrollDirection) {
      if (scrollDirection === 'vertical' && rowOrColumn === 'column') {
        // 垂直方向滚动，不重复计算水平列分布
        value = cache;
      } else if (scrollDirection === 'horizontal' && rowOrColumn === 'row') {
        value = cache;
      } else {
        value = fn(scrollItem, displayColumns);
      }
    } else {
      value = fn(scrollItem, displayColumns);
    }
    prevScrollDirection = scrollDirection;
    prevScrollLeft = scrollLeft;
    prevScrollTop = scrollTop;
    cache = value;
    return value;
  };
};

export default function VirtualScrollTable(props: any) {
  const {
    columns,
    height = 600,
    rowHeight = 40,
    dataSource: dataSource1 = [],
    rowEventHandlers,
    fixRowkeys = [],
    rowKey,
    rowSelection,
    onSelect,
    selectedRowkeys,
    selectedRows,
  } = props;
  const tableRef = useRef(null);

  const dataSource = useMemo(() => {
    return (dataSource1 || []).map((item: any) => {
      const currentRowKey = item[rowKey];
      if (currentRowKey === null || currentRowKey === undefined)
        item[rowKey] = getUUID();
      return item;
    });
  }, [dataSource1, rowKey]);

  useEffect(() => {
    const table: any = tableRef.current;
    const headCellNodeList = table?.querySelectorAll(
      '.ant-table-thead th.ant-table-cell-fix-1eft',
    );
    let left = 0;
    fixLeftColumnList.forEach((column: any, index: number) => {
      headCellNodeList[index].style.left = left + 'px';
      left += column.width;
    });
  }, []);

  const setColumn = (column: any, index: number) => {
    column.fixed = column.fixed || column.frozen;
    if (!column.width) column.width = 168;
    column.isLastFixLeft = index == getLastFixLeft(columns);
    column.isFirstFixRight = index === getFirstFixRight(columns);
    return column;
  };

  const getThList = (node: any, mergedColumns: any) => {
    const theadRows = node?.querySelectorAll('thead tr');
    let thList = [];
    if (theadRows?.length >= 1) {
      [...theadRows].forEach((row) => {
        const currentThList = row.querySelectorAll('th');
        if (currentThList.length > thList.length) thList = [...currentThList];
      });
    }
    // 有选择栏且标题栏有多行时，选择栏需要单独加到列表中
    if (mergedColumns.length !== thList.length) {
      thList.unshift(node.querySelector('.ant-table-selection-column'));
    }
    return thList;
  };

  const getColumnRealWidth = (
    node: any,
    column: any,
    columnIndex: number,
    mergedColumns: any,
  ) => {
    let realWidth = 8;
    const thList = getThList(node, mergedColumns);
    for (let i = columnIndex; i < thList.length; i++) {
      const th = thList[i] || {};
      if (column.title === th.textContent) {
        realWidth = th.clientWidth;
        break;
      }
    }
    return realWidth;
  };

  const realColumns = useMemo(
    () =>
      columns.reduce((accurate: any, item: any) => {
        if (!item.children?.length) {
          accurate.push(item);
        } else {
          accurate.push(...item.children);
        }
        return accurate;
      }, []),
    [columns],
  );

  const [realWidth, setRealWidth] = useState(0);

  const mergedColumns = useMemo(() => {
    const columns = realColumns.map((column: any, index: number) =>
      setColumn(column, index),
    );
    if (!rowSelection) return columns;
    const selectColumn = {
      width: 42,
      realWidth,
      align: 'center',
      title: '',
      render(text: any, record: any, index: number) {
        const onChange = rowSelection?.onChange;
        let currentRowKey = record[rowKey];
        const currentRow = record;
        const onRadioClick = () => {
          if (!selectedRowkeys.includes(currentRowKey)) {
            onChange([currentRowKey], [currentRow]);
          }
        };
        const onCheckboxChange = (e: any) => {
          const checked = e.target.checked;
          if (checked) {
            onChange(
              [...selectedRowkeys, currentRowKey],
              [...selectedRows, currentRow],
            );
          } else {
            onChange(
              selectedRowkeys.filter((item: any) => item !== currentRowKey),
              selectedRows.filter((item: any) => item !== currentRow),
            );
          }
        };

        const getCheckboxProps = rowSelection.getCheckboxProps;
        let checkboxProps = {};
        if (typeof getCheckboxProps === 'function') {
          checkboxProps = getCheckboxProps(record);
        }
        const node =
          rowSelection.type === 'radio' ? (
            <Radio
              key={currentRowKey}
              checked={currentRowKey === selectedRowkeys[0]}
              onClick={onRadioClick}
            />
          ) : (
            <Checkbox
              checked={selectedRowkeys.includes(currentRowKey)}
              onChange={onCheckboxChange}
              {...checkboxProps}
            />
          );
        const renderCell = rowSelection.renderCell;
        if (typeof renderCell === 'function')
          return renderCell(false, record, index, node);
        return node;
      },
    };
    return [selectColumn, ...columns];
  }, [realColumns, rowSelection, selectedRowkeys, realWidth]);

  const notFixColumns: any[] = useMemo(
    () =>
      mergedColumns.filter(
        (item: any) => item.fixed !== 'left' && item.fixed !== 'right',
      ),
    [mergedColumns],
  );
  const fixLeftColumnList: any[] = useMemo(
    () => mergedColumns.filter((item: any) => item.fixed === 'left'),
    [mergedColumns],
  );
  const fixLeftColumnTotalWidth = useMemo(
    () =>
      fixLeftColumnList.reduce((accurate, item) => accurate + item.width, 0),
    [fixLeftColumnList],
  );
  const fixRightColumnList: any[] = useMemo(
    () => mergedColumns.filter((item: any) => item.fixed === 'right'),
    [mergedColumns],
  );
  const fixRightColumnTotalWidth = useMemo(
    () =>
      fixRightColumnList.reduce((accurate, item) => accurate + item.width, 0),
    [fixRightColumnList],
  );
  const columnTotalWidth = useMemo(
    () =>
      mergedColumns.reduce(
        (accurate: any, item: any) => accurate + item.width,
        0,
      ),
    [mergedColumns],
  );
  const totalWidth = Math.max(
    columnTotalWidth,
    (tableRef as any)?.current?.clientWidth - 14,
  );

  useEffect(() => {
    if (totalWidth >= columnTotalWidth) {
      mergedColumns.forEach((column: any, index: number) => {
        column.realWidth = getColumnRealWidth(
          tableRef?.current,
          column,
          index,
          mergedColumns,
        );
        if (rowSelection && index === 0) setRealWidth(column.realWidth);
      });
    }
  }, [
    columnTotalWidth,
    totalWidth,
    tableRef?.current,
    mergedColumns,
    rowSelection,
  ]);

  const totalHeight = useMemo(
    () => dataSource.length * rowHeight,
    [dataSource, rowHeight],
  );

  const rowNumber = useMemo(() => {
    return Math.ceil(height / rowHeight) + 1; // 多渲染一行
  }, [height]);

  const RenderVirtualList = (
    dataSource = [],
    { scrollbarSize, ref, onScroll, ...a }: any,
    ...b: any
  ) => {
    const [top, setTop] = useState(0);
    const [left, setLeft] = useState(0);
    const [rows, setRows] = useState([]);
    const [displayColumns, setDisplayColumns] = useState([]);
    const [pointerEvents, setPointerEvents] = useState('auto');
    const [activeRowIndex, setActiveRowIndex] = useState(-1);
    const [hoverRowIndex, setHoverRowIndex] = useState(-1);
    const [tableScrollTop, setTableScrollTop] = useState(0);
    const scrollRef: any = useRef(null);

    useEffect(() => {
      setTableData(scrollRef.current);
      setShadow(scrollRef.current);
    }, [dataSource, rowNumber, totalHeight, selectedRowkeys]);

    // 查询时重置数据
    useEffect(() => {
      setTop(0);
      setLeft(0);
      if (scrollRef?.current) {
        scrollRef.current.scrollLeft = 0;
        scrollRef.current.scrollTop = 0;
      }
      onScroll({ scrollLeft: 0 });
    }, [dataSource]);

    const getColumnsInner = (scrollItem: any) => {
      const { clientWidth, scrollLeft } = scrollItem;
      let displayColumns = [];
      let currentTotalColumnWidth = 0;
      let showedColumnWidth = 0;
      let isFirstScrollColumn = true;
      for (let i = 0; i < notFixColumns.length; i++) {
        const column = { ...notFixColumns[i] };
        const { width } = column;
        const displayWidth =
          clientWidth - fixLeftColumnTotalWidth - fixRightColumnTotalWidth;
        if (showedColumnWidth >= displayWidth) {
          break;
        }
        currentTotalColumnWidth += width;
        if (currentTotalColumnWidth > scrollLeft) {
          if (isFirstScrollColumn) {
            showedColumnWidth = currentTotalColumnWidth - scrollLeft;
            const hiddenWidth = column.width - showedColumnWidth;
            column.style = { ...column.style, marginLeft: -hiddenWidth + 'px' };
            isFirstScrollColumn = false;
            if (scrollLeft > 0 && scrollLeft + clientWidth >= totalWidth) {
              const marginLeft =
                currentTotalColumnWidth - scrollLeft - width + 12 + 'px';
              column.style = { ...column.style, marginLeft };
            }
          } else {
            showedColumnWidth += width;
          }
          if (
            i === notFixColumns.length - 1 &&
            scrollLeft + clientWidth >= totalWidth
          ) {
            if (fixRightColumnList.length == 0) {
              column.style = {
                ...column.style,
                width: width - 12 + 'px',
              }; // 这里的12是滚动条宽度
            }
            displayColumns.push(column);
          }
        }
        return displayColumns;
      }
    };

    const getColumns = useCallback(getRangeBuilder(getColumnsInner, 'column'), [
      totalHeight,
      notFixColumns,
    ]);

    const setStartRowIndex = (
      scrollTop: any,
      displayColumns: any,
      realDataSource: any,
    ) => {
      let startRowIndex = 0;
      if (totalHeight <= height) {
        // 数据没有超过总高度
        startRowIndex = 8;
      } else if (totalHeight - scrollTop <= height) {
        startRowIndex = dataSource.length - rowNumber;
      } else {
        startRowIndex = Math.floor(scrollTop / rowHeight);
        {
          // 处理合并行的情况
          displayColumns.forEach((column: any) => {
            if (!column.onCell) return;
            while (true) {
              const rowData = realDataSource[startRowIndex];
              const { rowspan } = column.onCell(rowData, startRowIndex);
              if (rowspan === 0) {
                startRowIndex--;
              } else {
                break;
              }
            }
          });
          return startRowIndex;
        }
      }
    };

    const getRowsInner = (scrollItem: any, displayColumns: any) => {
      if (!dataSource?.length) return [];
      const { scrollTop } = scrollItem;
      const fixRowData = dataSource.filter((item) =>
        fixRowkeys.includes(item[rowKey]),
      ); // 固定的行
      const realDataSource = dataSource.filter(
        (item) => !fixRowkeys.includes(item[rowKey]),
      ); // 正常显示的行
      const startRowIndex: any = setStartRowIndex(
        scrollTop,
        displayColumns,
        realDataSource,
      );
      const rows = [
        ...fixRowData,
        ...realDataSource.slice(startRowIndex, startRowIndex + rowNumber),
      ];
      return rows;
    };

    const getRows = useCallback(getRangeBuilder(getRowsInner, 'row'), [
      totalHeight,
      dataSource,
    ]);

    const setTableData = (scrollItem: any) => {
      const displayColumns = getColumns(scrollItem);
      setDisplayColumns(displayColumns);
      setRows(getRows(scrollItem, displayColumns));
    };

    const setShadow = (scrollItem: any) => {
      const { scrollLeft, clientWidth } = scrollItem;
      const table: any = tableRef?.current;
      const lastFixLeftColumn = table.querySelector(
        'th.ant-table-cell-fix-left-last',
      );
      if (scrollLeft > 0) {
        table.classList.add('show-left-shadow');
        lastFixLeftColumn?.classList.add('ant-table-cell-fix-left-last-reset');
      } else {
        table.classList.remove('show-left-shadow');
        lastFixLeftColumn?.classList.remove(
          'ant-table-cell-fix-left-last-reset',
        );
      }

      {
        table.classList.add('show-right-shadow');
        if (scrollLeft + clientWidth >= totalWidth) {
          table.classList.remove('show-right-shadow');
        }
      }
    };

    const setTopWrapper = (scrollTop: any, clientHeight: any) => {
      let top;
      if (clientHeight > totalHeight) {
        top = 0;
      } else if (scrollTop + clientHeight >= totalHeight) {
        top = totalHeight - clientHeight; // 这里有一个问题，为什么往下滑动会超出但是往右不会？
      } else {
        top = scrollTop - (scrollTop % rowHeight);
      }
      setTop(top);
    };

    const handleScroll = (scrollItem: any) => {
      const { scrollTop, scrollLeft, clientHeight } = scrollItem;
      setTableScrollTop(scrollTop);
      setTableData(scrollItem);
      setTopWrapper(scrollTop, clientHeight);
      setLeft(scrollLeft);
      setShadow(scrollItem);
    };

    const setPointerEventsDebounce = useCallback(
      debounce(() => {
        setPointerEvents('auto');
      }, 1200),
      [],
    );

    const _onScroll = (e: any) => {
      if (pointerEvents === 'auto') {
        setPointerEvents('none');
      }
      setPointerEventsDebounce();
      setActiveRowIndex(-1); // 重置点击
      const scrollItem = e.target;
      onScroll({ scrollLeft: scrollItem.scrollLeft });
      handleScroll(scrollItem);
    };

    const onClick = (rowObj: any) => {
      if (typeof rowEventHandlers?.onclick !== 'function') return;
      rowEventHandlers?.onclick(rowObj);
      setActiveRowIndex(rowObj.rowIndex);
    };

    const calcWidth = (colSpan: any, columns: any, columnIndex: number) => {
      let width = 8;
      for (let i = 0; i < colSpan; i++) {
        const column = columns[columnIndex + i];
        const columnWidth = column.realWidth || column.width;
        width += columnWidth;
        return width;
      }
    };

    const getRowAndColSpan = (column: any, row: any, rowIndex: number) => {
      let rowSpan = 1,
        colSpan = 1;
      if (column.onCell) {
        rowSpan = column.onCell(row, rowIndex)?.rowSpan ?? 1;
        colSpan = column.onCell(row, rowIndex)?.colSpan ?? 1;
      }
      return { rowSpan, colSpan };
    };

    const setCellStyle = (
      column: any,
      columnIndex: any,
      columns: any,
      rowSpan: any,
      colSpan: any,
      rowIndex: number,
    ) => {
      const showHover =
        rowSpan > 1 &&
        rowIndex < hoverRowIndex &&
        rowIndex + rowSpan > hoverRowIndex;
      const showActive =
        rowSpan > 1 &&
        rowIndex < activeRowIndex &&
        rowIndex + rowSpan > activeRowIndex;
      const style = {
        width: calcWidth(colSpan, columns, columnIndex) + 'px',
        height: rowHeight * rowSpan + 'px',
        justifyContent:
          column.align === 'right'
            ? 'flex-end'
            : column.align === 'center'
            ? 'center'
            : 'flex-start',
        opacity: rowSpan == 0 ? 0 : 1,
        background: showHover || showActive ? '#dfe8f8' : '',
      };

      const isLastColumn =
        columnIndex === columns.length - 1 &&
        (column.fixed === 'right' ||
          (!fixRightColumnList.length && column.fixed !== 'left'));

      if (isLastColumn)
        style.width = (column.realWidth || column.width) - 13 + 'px';
      return { ...column.style, ...style };
    };

    const setCellContent = (column: any, row: any, rowIndex: number) => {
      return typeof column.render === 'function'
        ? column.render(row[column.dataIndex], row, rowIndex)
        : row[column.dataIndex];
    };

    const renderCell = (
      column: any,
      columnIndex: any,
      row: any,
      rowIndex: any,
      columns: any,
    ) => {
      const { rowSpan, colSpan } = getRowAndColSpan(column, row, rowIndex);
      const style = setCellStyle(
        column,
        columnIndex,
        columns,
        rowSpan,
        colSpan,
        rowIndex,
      );
      const content = setCellContent(column, row, rowIndex);
      if (colSpan === 0) return null;
      return (
        <div
          className={classNames('virtual-table-cel1', {
            'virtual-table-cell-last': columnIndex === mergedColumns.length - 1,
            'virtual-table-cell-fix-left': column.fixed === 'left',
            'virtual-table-cell-fix-left-last':
              column.isLastFixLeft && left > 0,
            'virtual-table-cell-fix-right': column.fixed === 'right',
            'virtual-table-cell-fix-right-first': column.isFirstFixRight,
          })}
          style={style}
          key={'column' + columnIndex}
        >
          {content}
        </div>
      );
    };

    const getRowStyle = (rowIndex: number) => {
      return tableScrollTop > 0
        ? { top: rowIndex * rowHeight, height: rowHeight + 'px' }
        : { boxShadow: 'none', height: rowHeight + 'px' };
    };

    return (
      <div
        className="scroll-container"
        onScroll={_onScroll}
        style={{ height: height + 'px' }}
        ref={scrollRef}
      >
        <div
          style={{
            height: totalHeight + 'px',
            width: totalWidth + 'px',
            pointerEvents: pointerEvents as any,
          }}
        >
          <div
            className="table-content-container"
            style={{ top: top + 'px', left: left + 'px' }}
          >
            {rows.map((row, rowIndex) => (
              <div
                className={classNames('row', {
                  'row-active': rowIndex === activeRowIndex,
                  'fix-row-top': fixRowkeys.includes(row[rowKey]),
                  'row-grey': rowIndex % 2 === 0, // 偶数行背景色为灰
                })}
                style={getRowStyle(rowIndex)}
                key={rowIndex}
                onClick={() =>
                  onClick({ rowKey: rowIndex, rowData: row, rowIndex })
                }
                onMouseEnter={() => setHoverRowIndex(rowIndex)}
                onMouseLeave={() => setHoverRowIndex(-1)}
              >
                {fixLeftColumnList.map((column, columnIndex) =>
                  renderCell(
                    column,
                    columnIndex,
                    row,
                    rowIndex,
                    fixLeftColumnList,
                  ),
                )}
                {displayColumns.map((column, columnIndex) =>
                  renderCell(
                    column,
                    columnIndex,
                    row,
                    rowIndex,
                    displayColumns,
                  ),
                )}
                {/* 分开写的目的是为了避免闪屏。由于列数不固定，如果一起写会添加删除dom，固定在右边的列会闪屏 */}
                {fixRightColumnList.map((column, columnIndex) =>
                  renderCell(
                    column,
                    columnIndex,
                    row,
                    rowIndex,
                    fixRightColumnList,
                  ),
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <Table
      {...props}
      ref={tableRef}
      className="virtual-table"
      pagination={false}
      components={{
        body: RenderVirtualList,
      }}
    />
  );
}