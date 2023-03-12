import { Worksheet } from 'exceljs';
import ExcelJs from 'exceljs/dist/exceljs';
import {
  addDataTable,
  addHeaderStyle,
  DEFAULT_COLUMN_WIDTH,
  generateHeaders,
  getColumnNumber,
  ITableHeader,
  mergeColumnCell,
  mergeRowCell,
  saveWorkbook,
} from './';

interface ISlash {
  left: string;
  right: string;
}

export function onExportMultiHeaderExcel(
  columns: any[],
  dataSource: any[],
  slash?: ISlash,
  fileName = 'excel',
  title = '导出数据',
) {
  // 创建工作簿
  const workbook = new ExcelJs.Workbook();
  // 添加sheet
  const worksheet = workbook.addWorksheet(fileName);
  // 设置 sheet 的默认行高
  worksheet.properties.defaultRowHeight = 20;
  // 解析 AntD Table 的 columns
  const headers = generateHeaders(columns);
  // 第一行表头
  const names1: string[] = [];
  // 第二行表头
  const names2: string[] = [];
  // 用于匹配数据的 keys
  const headerKeys: string[] = [];
  headers.forEach((item) => {
    if (item.children) {
      // 有 children 说明是多级表头，header name 需要两行
      item.children.forEach((child) => {
        names1.push(item.header);
        names2.push(child.header);
        headerKeys.push(child.key);
      });
    } else {
      const columnNumber = getColumnNumber(item.width);
      for (let i = 0; i < columnNumber; i++) {
        names1.push(item.header);
        names2.push(item.header);
        headerKeys.push(item.key);
      }
    }
  });
  if (title && dataSource.length > 0) {
    //@ts-ignore
    worksheet.insertRow(1);
    //@ts-ignore
    const row = worksheet.insertRow(1);
    const headerMergeCell = String.fromCharCode(64 + columns.length);
    row.border = {
      bottom: { style: 'medium', color: { argb: 'd3dbea' } },
    };
    worksheet.mergeCells(`A1:${headerMergeCell}1`);
    worksheet.getCell('A1').value = title;
    worksheet.getRow(1).commit();
  }
  handleHeader(worksheet, headers, names1, names2);
  // 添加数据
  addDataTable(dataSource, worksheet, headerKeys, headers);
  // 给每列设置固定宽度
  worksheet.columns = worksheet.columns.map((col: any) => ({
    ...col,
    width: DEFAULT_COLUMN_WIDTH,
  }));

  if (slash) {
    worksheet.getCell('A3').border = {
      diagonal: { up: false, down: true, style: 'thin' },
    };
    worksheet.getCell('A3').alignment = {
      vertical: 'middle',
      horizontal: 'left',
      wrapText: true,
    };
    worksheet.getCell('A3').value = `                                             ${slash?.left}\n     ${slash?.right}`;
  }

  // 导出excel
  saveWorkbook(workbook, `${fileName}.xlsx`);
}

function handleHeader(worksheet: Worksheet, headers: ITableHeader[], names1: string[], names2: string[]) {
  // 判断是否有 children, 有的话是两行表头
  const isMultiHeader = headers?.some((item) => item.children);
  if (isMultiHeader) {
    // 加表头数据
    const rowHeader1 = worksheet.addRow(names1);
    const rowHeader2 = worksheet.addRow(names2);
    // 添加表头样式
    // addHeaderStyle(rowHeader1, {}, { bottom: { style: 'medium', color: { argb: 'd3dbea' } }, });
    // addHeaderStyle(rowHeader2, {}, { bottom: { style: 'medium', color: { argb: 'd3dbea' } }, });

    mergeColumnCell(headers, rowHeader1, rowHeader2, names1, names2, worksheet);
    return;
  }
  // 加表头数据
  const rowHeader = worksheet.addRow(names1);
  // 表头根据内容宽度合并单元格
  mergeRowCell(headers, rowHeader, worksheet);
  // 添加表头样式
  // addHeaderStyle(rowHeader, { color: 'dff8ff' });
}
