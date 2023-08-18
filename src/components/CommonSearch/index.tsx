import CommonSearch from '@/components/CommonSearch/search';
import { ErrorBoundary } from '@/core/base/ErrorBoundary';
import useSyncState from '@/hook/useSyncState';
import { ISearchesType } from '@/typings';
import { RowProps } from 'antd';
import type { FormInstance } from 'antd/es/form';
import _ from 'lodash';
import React, { useEffect, useImperativeHandle, useRef } from 'react';
import styles from './index.less';
import RenderTag from './renderTag';

/**
 * @property {ISearchesType} formList - 搜索表单列表
 * @property {any} record - 值会映射到表单
 * @property {boolean} expandForm - 是否展开
 * @property {number} columnNumber - 一行放几个 formItem
 * @property {boolean} showSearchBtn - 是否展示搜索按钮
 * @property {boolean} showResetBtn - 是否展示重置按钮
 * @property {boolean} showToolTipTag - 是否展示toolTip tag
 * @property {boolean} checkBoxStatus - checkbox的状态
 * @property {(values: any) => void} handleSearch - 进行搜索
 * @property {(fn: () => void) => void} handleResetPreCallback - 重置前的回调
 * @property {() => void} handleResetCallback - 重置回调
 * @property {(name: string, itemValue: any) => void} handleDeleteTagCallback - 删除tag的回调函数
 * @property {RowProps} rowProps
 * @property {boolean} isInline - 是否是行内表单
 * @property {string} wrapperClassName
 * @property {React.ReactNode} preChildren
 * @property {any} [propName: string]
 */
export interface IToolTipTagProps {
  formList: ISearchesType;
  record?: any;
  expandForm?: boolean;
  columnNumber?: number;
  showSearchBtn?: boolean;
  showResetBtn?: boolean;
  showToolTipTag?: boolean;
  checkBoxStatus?: boolean;
  handleSearch?: (values: any) => void;
  handleResetPreCallback?: (fn: () => void) => void;
  handleResetCallback?: () => void;
  handleDeleteTagCallback?: (name: string, itemValue: any) => void;
  rowProps?: RowProps;
  isInline?: boolean;
  wrapperClassName?: string;
  preChildren?: React.ReactNode;
  /**
   * @name 是否展示分割线
   */
  showLine?: boolean;
  [propName: string]: any;
}

export interface IHandle {
  handleRealParams: () => any;
  searchFormRef: React.RefObject<ISearchRef>;
}

interface ISearchRef {
  form: FormInstance;
  formatSubmitValues: (values: any) => void;
}

const TooltipTag: React.ForwardRefRenderFunction<IHandle, IToolTipTagProps> = (props, ref) => {
  const {
    showToolTipTag = true,
    formList,
    children,
    checkBoxStatus,
    showSearchBtn,
    handleResetCallback,
    handleDeleteTagCallback,
    rowProps = {},
    isInline = false,
    ...restProps
  } = props;
  const [tagList, setTagList] = useSyncState<any[]>([]);
  const searchRef: React.RefObject<ISearchRef> = useRef(null!);
  const divRef: React.RefObject<any> = useRef(null);

  // useEffect(() => {
  //   handleTagList(searchRef.current?.form.getFieldsValue());
  // }, []);

  useImperativeHandle(ref, () => ({
    handleRealParams,
    searchFormRef: searchRef,
  }));

  // 获取查询实时参数 -→导出
  const handleRealParams = () => {
    const { form, formatSubmitValues } = searchRef.current!;
    const values = form.getFieldsValue();
    return [values, formatSubmitValues(values)];
  };

  // 处理tagList
  const handleTagList = (changedValues: any) => {
    if (_.isEmpty(changedValues)) return;
    const tagFormList = _.flattenDeep(
      formList.map((item) => {
        let children = item.children || [];
        children = children.filter((ele) => ele?.initialValue != '至');
        return children?.length != 0 ? children : item;
      }),
    );

    const changedFields = Object.keys(changedValues)
      .map((item) => {
        const index = tagFormList.findIndex((form: any) => form.name === item);
        if (index !== -1) {
          return tagFormList[index];
        }
        return undefined;
      })
      .filter((item) => item);

    changedFields.forEach((changedField: any) => {
      const { name, type, format } = changedField;
      const changedIndex = tagList().findIndex((tag: any) => tag.name === name);
      let value = changedValues[name];
      // 日期类型值处理
      switch (type) {
        case 'month':
        case 'time':
        case 'date':
          value = value ? value.format(format || 'YYYY-MM-DD') : undefined;
          break;
        case 'year':
          value = value ? value.format(format || 'YYYY') : undefined;
          break;
        case 'quarter':
          value = value ? value.format(format || 'YYYY-Q') : undefined;
          break;
        case 'dateRange':
          if (Array.isArray(value)) {
            const [valueFirst, valueLast] = value;
            if (valueFirst) {
              value = valueFirst.format(format || 'YYYY-MM-DD') + valueLast.format(format || 'YYYY-MM-DD');
            } else {
              value = undefined;
            }
          }
          break;
        case 'monthRange':
          if (Array.isArray(value)) {
            value = value.join('~') || undefined;
          }
          break;
        case 'select':
        case 'treeSelect':
          if (Array.isArray(value)) {
            value = value.map((item) => item.label || item.text).join(',');
          } else {
            value = value && value.label;
          }
          break;
        case 'switch':
        case 'radio':
          const dict = _.get(changedField, 'dict', [
            { text: '是', value: true },
            { text: '否', value: false },
          ]);
          let selectRow = dict.find((item: { [x: string]: any }) => String(item['value']) === String(value));
          value = _.get(selectRow, 'text', value);
          break;
        case 'checkbox':
          const item = changedField.dict.find((item: { [x: string]: any }) => String(item['value']) === String(value));
          value = _.get(item, 'text', value);
        default:
      }

      if (changedIndex === -1) {
        if (value) {
          setTagList([...tagList(), { ...changedField, value }]);
        }
      } else {
        if (!value) {
          tagList().splice(changedIndex, 1);
        } else {
          tagList()[changedIndex].value = value;
        }
      }

      setTagList([...tagList()]);
    });
  };

  // 删除tag
  const handleDeleteTag = ({ name, itemValue }: { name: string; itemValue: string }, index: string | number) => {
    if (checkBoxStatus) {
      return handleDeleteTagCallback && handleDeleteTagCallback(name, itemValue);
    }
    const { form } = searchRef.current!;
    const deleteTag: any = tagList().find((item: any) => item.name === name);
    const { controlProps = {}, mode, value } = deleteTag;
    const isMultiple = mode === 'multiple' || controlProps?.mode === 'multiple';
    let newValue = [];
    if (isMultiple) {
      let value = form.getFieldValue(name);
      newValue = value
        .filter((item: any) => (item.label || item.text) !== itemValue)
        .map((item: any) => ({ ...item, label: item.label || item.text }));
    }
    form.setFieldsValue({
      [name]: isMultiple ? newValue : undefined,
    });
    handleTagList(form.getFieldsValue());
  };

  return (
    <ErrorBoundary>
      <CommonSearch
        {...restProps}
        isInline={isInline}
        rowProps={rowProps}
        ref={searchRef}
        formList={formList}
        showToolTipTag={showToolTipTag}
        showSearchBtn={showSearchBtn}
        handleTagList={handleTagList}
        handleResetCallback={() => {
          setTagList([]);
          if (handleResetCallback) handleResetCallback();
        }}
      >
        {showToolTipTag && tagList ? (
          <div ref={divRef} className={styles.tagRow}>
            {tagList().map((item, index) => (
              <RenderTag key={index} item={item} index={index} handleDeleteTag={handleDeleteTag} checkBoxStatus={checkBoxStatus} />
            ))}
          </div>
        ) : null}
        {children}
      </CommonSearch>
    </ErrorBoundary>
  );
};

export default React.memo(React.forwardRef(TooltipTag));
