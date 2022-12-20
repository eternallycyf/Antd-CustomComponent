import React, { useImperativeHandle, useRef, useState, useEffect } from 'react';
import _ from 'lodash';
import { CloseOutlined, DownOutlined, UpOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';
import { FormComponentProps } from '@ant-design/compatible/es/form/Form';
import { FormControl } from '@/typings';
import CommonSearch from '@/components/CommonSearch/search';
import styles from './index.less';
import RenderTag from './renderTag';

export interface IToolTipTagProps extends FormComponentProps {
  formList: FormControl[]; // form列表
  record?: any; // 值会映射到表单
  expandForm?: boolean; // 是否可展开
  columnNumber?: number; // 一行放几个 formItem
  showResetBtn?: boolean; // 是否展示重置按钮
  showToolTipTag?: boolean; // 是否展示toolTip tag
  checkBoxStatus?: boolean; // checkbox的状态
  handleSearch?: (values: any) => void; // 进行搜索
  handleDeleteTagCallback?: () => void; // 删除tag的回调函数
  [propName: string]: any;
}

let count = 0;
let flag = true;

const TooltipTag: React.FC<Omit<IToolTipTagProps, 'form'>> = React.forwardRef(
  (props, ref) => {
    const {
      showToolTipTag = true,
      formList,
      children,
      checkBoxStatus,
      handleDeleteTagCallback,
      ...restProps
    } = props;
    const [tagList, setTagList] = useState<any[]>([]);
    const [toggle, setToggle] = useState(false);
    const searchRef: React.RefObject<any> = useRef(null);
    const divRef: React.RefObject<any> = useRef(null);
    const newTagList = useRef<any[]>([]);

    useImperativeHandle(ref, () => ({
      handleRealParams,
      searchFormRef: searchRef,
    }));

    // 获取查询实时参数 -→导出
    const handleRealParams = () => {
      const { form, formatSubmitValues } = searchRef.current;
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
        })
        .filter((item) => item);

      changedFields.forEach((changedField: any) => {
        const { name, type, format } = changedField;
        const changedIndex = tagList.findIndex((tag: any) => tag.name === name);
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
                value =
                  valueFirst.format(format || 'YYYY-MM-DD') +
                  valueLast.format(format || 'YYYY-MM-DD');
              } else {
                value = undefined;
              }
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
            const selectRow = dict.find(
              (item: { [x: string]: any }) =>
                String(item['value']) === String(value),
            );
            value = _.get(selectRow, 'text', value);
            break;
          case 'checkbox':
            const item = changedField.dict.find(
              (item: { [x: string]: any }) =>
                String(item['value']) === String(value),
            );
            value = _.get(item, 'text', value);
          default:
        }

        if (changedIndex === -1) {
          if (value) {
            setTagList((list) => {
              newTagList.current = [...list, { ...changedField, value }];
              return [...list, { ...changedField, value }];
            });
          } else {
            if (!value) {
              tagList.splice(changedIndex, 1);
            } else {
              tagList[changedIndex].value = value;
            }
          }
        }

        setTagList((list) => {
          newTagList.current = [...list];
          return [...tagList];
        });
      });
    };

    // 删除tag
    const handleDeleteTag = (
      { name, itemValue }: { name: string; itemValue: string },
      index: string | number,
    ) => {
      if (checkBoxStatus) {
        return handleDeleteTagCallback();
      }
      const { form } = searchRef.current;
      const deleteTag: any = tagList.find((item: any) => item.name === name);
      const { controlProps = {}, mode, value } = deleteTag;
      const isMultiple =
        mode === 'multiple' || controlProps?.mode === 'multiple';
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
        wrappedComponentRef={searchRef}
        formList={formList}
        showToolTipTag={showToolTipTag}
        handleTagList={handleTagList}
      >
        {showToolTipTag && tagList ? (
          <div ref={divRef} className={styles.tagRow}>
            {newTagList.current.map((item, index) => (
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
  },
);

TooltipTag.defaultProps = {
  showToolTipTag: true,
};

export default React.memo(TooltipTag);
