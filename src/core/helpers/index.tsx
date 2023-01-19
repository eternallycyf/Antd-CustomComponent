import React from 'react';
import _ from 'lodash';
import dayjs from 'dayjs';
import BraftEditor from 'braft-editor';
import { Form } from 'antd';
import { FieldCompType } from '@/typings';

/**
 * 获取控件
 * @param props
 */
export function getFieldComp({
  form,
  name,
  type = 'input',
  initialValue: initValue,
  record = {},
  tableProps,
  arrayProps,
  fetchConfig,
  dictConfig,
  controlProps = {},
  formFieldProps = {},
  isEdit,
  format,
  hide,
  itemProps,
  ...otherProps
}: FieldCompType) {
  let initialValue = initValue;
  if (record && record[name] != null) {
    if (isEdit) {
      initialValue = dayjs(record[name], format);
    } else {
      initialValue = record[name];
    }
  }

  const formProps = {
    name,
    type,
    record,
    form,
    ...itemProps,
    ...controlProps,
    ...otherProps,
  };
  if (tableProps) formProps.tableProps = tableProps;
  if (arrayProps) formProps.arrayProps = arrayProps;
  if (fetchConfig) formProps.fetchConfig = fetchConfig;
  let FieldComp: any = null;
  formFieldProps.initialValue = initialValue;

  // 特殊处理
  if (type === 'switch') {
    formFieldProps.valuePropName = 'checked';
  }

  switch (type) {
    case 'input': // 输入框
    case 'password': // 密码框
    case 'search': // 搜索框
    case 'textarea': // 多行文本
    case 'radio':
    case 'checkbox':
    case 'rate':
    case 'switch':
    case 'slider':
    case 'inputNumber':
    case 'autoComplete':
    case 'custom':
      FieldComp = require(`@/components/CustomForm/FormItem/simple`).default;
      break;
    case 'date':
      formFieldProps.initialValue = initialValue
        ? dayjs(initialValue, 'YYYY-MM-DD')
        : null;
      FieldComp = require(`@/components/CustomForm/FormItem/simple`).default;
      break;
    case 'year':
      formFieldProps.initialValue = initialValue
        ? dayjs(initialValue, 'YYYY')
        : null;
      FieldComp = require(`@/components/CustomForm/FormItem/simple`).default;
      break;
    case 'quarter':
      formFieldProps.initialValue = initialValue
        ? dayjs(initialValue, 'YYYY-Q')
        : null;
      FieldComp = require(`@/components/CustomForm/FormItem/simple`).default;
      break;
    case 'dateRange':
    case 'month':
    case 'time':
      FieldComp = require(`@/components/CustomForm/FormItem/simple`).default;
      break;
    case 'monthRange':
      FieldComp =
        require(`@/components/CustomForm/FormItem/monthRange`).default;
      break;
    case 'select':
      if (dictConfig) formProps.dictConfig = dictConfig;
      FieldComp = require(`@/components/CustomForm/FormItem/select`).default;
      break;
    case 'editor':
      formFieldProps.initialValue = BraftEditor.createEditorState(
        formFieldProps.initialValue,
      );
      FieldComp = require(`@/components/CustomForm/FormItem/editor`).default;
      break;
    default:
      FieldComp = require(`@/components/CustomForm/FormItem/${type}`).default;
  }

  if (form) {
    return (
      <Form.Item name={name} {...formFieldProps}>
        <FieldComp {...formProps} />
      </Form.Item>
    );
  } else {
    return <FieldComp {...formProps} {...formFieldProps} />;
  }
}

/**
 * 事件绑定
 * @param target
 * @param eventType
 * @param callback
 * @returns {{remove(): void}}
 */
export const addEvent = (
  target: any,
  eventType: string,
  callback: () => void,
) => {
  if (target.addEventListener) {
    target.addEventListener(eventType, callback, false);
    return {
      remove() {
        target.removeEventListener(eventType, callback, false);
      },
    };
  } else if (target.attachEvent) {
    target.attachEvent('on' + eventType, callback);
    return {
      remove() {
        target.detachEvent('on' + eventType, callback);
      },
    };
  }
};

/**
 * 将数组转变树
 * @param arr
 * @param option
 */
export const convertArrayToTree = (arr: any[], option?: any) => {
  const originArr = arr.map((item) => ({ ...item }));
  const options: any = {
    id: 'id',
    rootId: '0',
    parentId: 'parentId',
    children: 'children',
    ...option,
  };
  const arrayById = _.keyBy(originArr, options.id);

  const groupByParents = originArr.reduce((prev, item) => {
    let parentId = item[options.parentId];
    if (!parentId || !arrayById[parentId]) {
      parentId = options.rootId;
    }

    if (parentId && prev[parentId]) {
      prev[parentId].push(item);
      return prev;
    }
    prev[parentId] = [item];
    return prev;
  }, {});

  const rootNodes = groupByParents[options.rootId];
  const createTree = (nodes: any) => {
    const tree: any = [];
    if (nodes) {
      nodes.forEach((node: any) => {
        const childNode = groupByParents[node[options.id]];
        if (childNode) {
          node[options.children] = createTree(childNode);
        }
        tree.push(node);
      });
    }
    return tree;
  };
  return createTree(rootNodes);
};
