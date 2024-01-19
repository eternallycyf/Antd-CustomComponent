import { PlusOutlined } from '@ant-design/icons';
import { Button, DatePicker, DatePickerProps, Divider, Input, Select, SelectProps, Space, Tag } from 'antd';
import dayjs from 'dayjs';
import localeData from 'dayjs/plugin/localeData';
import _ from 'lodash';
import { FC, useEffect, useState } from 'react';
import variables from '@/assets/styles/variable.less';
import './index.less';
dayjs.extend(localeData);

function _getTimeStamp(value: dayjs.Dayjs): number | undefined {
  return value ? value.startOf('day').valueOf() : undefined;
}

export interface ICascadeControlProps<T = number[]> {
  controlProps?: {
    format: string;
    selectProps: SelectProps;
    datePickerProps: DatePickerProps;
  };
  onChange?: (value: T) => any;
  value?: T;
}

const MultipleQuarterPicker: FC<ICascadeControlProps> = (props) => {
  const { value: selectedDate = [], onChange, controlProps = {} as any } = props;
  const { format = 'YYYY年[Q]Q', selectProps = {}, datePickerProps = {} } = controlProps;
  const [open, setOpen] = useState<boolean>(false);
  const [mode, setMode] = useState<DatePickerProps['mode']>('year');
  const [height, setHeight] = useState<number>(300);

  useEffect(() => {
    updateSelectBg([...selectedDate]);
  }, [selectedDate]);

  const triggerChange = (date: dayjs.Dayjs) => {
    const t = date.startOf('day').valueOf();
    const index = selectedDate.indexOf(t);
    const clone: number[] = [...selectedDate];
    if (index > -1) {
      clone.splice(index, 1);
    } else {
      clone.push(t);
    }
    if (onChange) {
      onChange(clone);
    }

    if (clone) {
      updateSelectBg(clone);
    }
  };

  const updateSelectBg = (selectQuarters: number[]) => {
    setTimeout(() => {
      const quarters = selectQuarters.map((item) => dayjs(item).format('YYYY-[Q]Q'));
      const allQuarterWrapper = document.querySelectorAll('.multipleDropdownClassName .ant-picker-quarter-panel td[title]');
      if (allQuarterWrapper) {
        allQuarterWrapper.forEach((ele: any) => {
          const child = ele?.firstChild;
          if (quarters.includes(ele?.title) && child) {
            child.style.backgroundColor = variables?.primary;
            child.style.color = 'white';
          } else {
            child.style.backgroundColor = 'transparent';
            child.style.color = ele?.className?.includes('ant-picker-cell-disabled') ? '#00000040' : 'black';
          }
        });
      }
    }, 0);
  };

  const renderTag = ({ value, onClose }: any) => {
    const handleClose = () => {
      onClose();
      if (onChange) {
        onChange(selectedDate.filter((item) => item !== value));
      }
    };

    const tagStyle: React.CSSProperties = {
      background: '#ebf2ff',
      color: variables?.primary,
      fontWeight: 400,
      fontSize: 12,
      border: 'none',
      marginTop: 2,
      marginBlock: 2,
    };

    return (
      <Tag style={tagStyle} onClose={handleClose} closable>
        {dayjs(value).format(format)}
      </Tag>
    );
  };

  const disabledDate: DatePickerProps['disabledDate'] = (current) => {
    return current && current > dayjs().endOf('day');
  };

  const clearMode = () => {
    setMode('year');
    setHeight(300);
  };

  const dateRender = (currentDate: dayjs.Dayjs) => {
    const isSelected = selectedDate.indexOf(_getTimeStamp(currentDate) as any) > -1;
    return (
      <div
        className="ant-picker-cell-inner"
        style={
          isSelected
            ? {
                position: 'relative',
                zIndex: 2,
                display: 'inline-block',
                width: 24,
                height: 22,
                lineHeight: 22,
                background: variables?.primary,
                color: '#fff',
                margin: 'auto',
                borderRadius: 2,
                transition: 'background 0.3s, border 0.3s',
              }
            : {}
        }
      >
        {currentDate.date()}
      </div>
    );
  };

  return (
    <Select
      allowClear
      placeholder="请选择季度"
      className={`MultipleQuarterSelecter ${selectProps?.className}`}
      mode="multiple"
      value={selectedDate}
      onClear={() => {
        onChange && onChange([]);
        clearMode();
      }}
      onDropdownVisibleChange={(visible) => {
        if (visible) clearMode();
      }}
      tagRender={renderTag}
      open={true}
      onFocus={() => {
        setOpen(true);
      }}
      onBlur={() => setOpen(false)}
      onDeselect={() => updateSelectBg([...selectedDate])}
      dropdownMatchSelectWidth={false}
      dropdownClassName="multipleDropdownClassName"
      dropdownStyle={{
        height: open ? height : 0,
        top: 0,
        width: 280,
        minWidth: 0,
      }}
      dropdownRender={() => {
        return (
          <DatePicker
            open
            mode={mode}
            defaultPickerValue={dayjs()}
            disabledDate={disabledDate}
            picker="quarter"
            onChange={triggerChange}
            onPanelChange={(_, mode) => {
              if (mode == 'quarter') {
                updateSelectBg([...selectedDate]);
                setHeight(100);
              } else {
                setHeight(300);
              }
              setMode(mode);
            }}
            value={dayjs()}
            dateRender={dateRender}
            style={{
              ...datePickerProps?.style,
              visibility: 'hidden',
              height: 0,
              top: 0,
              position: 'absolute',
            }}
            getPopupContainer={(trigger) => trigger.parentNode as HTMLElement}
            {...datePickerProps}
          />
        );
      }}
      getPopupContainer={(trigger) => trigger.parentNode as HTMLElement}
      {...selectProps}
    />
  );
};

export default MultipleQuarterPicker;
