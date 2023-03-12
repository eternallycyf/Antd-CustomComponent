import CommonSearch from '@/components/CommonSearch/search';
import { FormControl } from '@/typings';
import type { FormInstance } from 'antd/es/form';
import _ from 'lodash';
import React, { useImperativeHandle, useRef } from 'react';
import useSyncState from '@/hook/useSyncState';
import styles from './index.less';
import RenderTag from './renderTag';

export interface IToolTipTagProps {
  formList: FormControl[]; // form列表
  record?: any; // 值会映射到表单
  expandForm?: boolean; // 是否可展开
  columnNumber?: number; // 一行放几个 formItem
  showSearchBtn?: boolean; // 是否展示搜索按钮
  showResetBtn?: boolean; // 是否展示重置按钮
  showToolTipTag?: boolean; // 是否展示toolTip tag
  checkBoxStatus?: boolean; // checkbox的状态
  handleSearch?: (values: any) => void; // 进行搜索
  handleResetCallback?: () => void; // 重置回调
  handleDeleteTagCallback?: (name: string, itemValue: any) => void; // 删除tag的回调函数
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

const TooltipTag: React.ForwardRefRenderFunction<IHandle, Omit<IToolTipTagProps, 'form'>> = (props, ref) => {
  const {
    showToolTipTag = true,
    formList,
    children,
    checkBoxStatus,
    showSearchBtn,
    handleResetCallback,
    handleDeleteTagCallback,
    ...restProps
  } = props;
  const [tagList, setTagList] = useSyncState<any[]>([]);
  const searchRef: React.RefObject<ISearchRef> = useRef(null!);
  const divRef: React.RefObject<any> = useRef(null);

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

    const changedFields = Object.keys(changedValues)
      .map((item) => {
        const index = formList.findIndex((form: any) => form.name === item);
        if (index !== -1) {
          return formList[index];
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
            value = value.map((item) => item.label).join(',');
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
      return handleDeleteTagCallback(name, itemValue);
    }
    const { form } = searchRef.current!;
    const deleteTag: any = tagList().find((item: any) => item.name === name);
    setTagList(tagList().filter((item: any) => item.name !== name));
    const { controlProps = {}, mode, value } = deleteTag;
    const isMultiple = mode === 'multiple' || controlProps?.mode === 'multiple';
    let newValue = [];
    if (isMultiple) {
      const value = form.getFieldValue(name);
      newValue = value.filter((item: any) => item.label !== itemValue);
    }
    form.setFieldsValue({ [name]: isMultiple ? newValue : undefined });
  };

  return (
    <CommonSearch
      {...restProps}
      ref={searchRef}
      formList={formList}
      showToolTipTag={showToolTipTag}
      handleTagList={handleTagList}
      handleResetCallback={() => {
        setTagList([]);
        if (handleResetCallback) handleResetCallback();
      }}
    >
      {showToolTipTag && tagList ? (
        <div ref={divRef} className={styles.tagRow}>
          {tagList().map((item, index) => (
            <RenderTag
              key={index}
              item={item}
              index={index}
              handleDeleteTag={handleDeleteTag}
              checkBoxStatus={checkBoxStatus}
            />
          ))}
        </div>
      ) : null}
      {children}
    </CommonSearch>
  );
};

export default React.memo(React.forwardRef(TooltipTag));
