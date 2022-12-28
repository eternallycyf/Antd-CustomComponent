import React, { useImperativeHandle } from 'react';
import { DatePicker } from 'antd';
import dayjs from 'dayjs';
const format = 'YYYYMM';
const { RangePicker } = DatePicker;

export default React.forwardRef((props: any, ref) => {
  useImperativeHandle(ref, () => ({}));

  const value = (props.value || []).map((v: any) => {
    return dayjs.isDayjs(v) ? v : dayjs(v);
  });

  const onChange = (values: any, mode: any) => {
    props.onChange(
      (values || []).map((dateValue: any) => {
        return dayjs(dateValue).format(format);
      }),
    );
  };
  return (
    <RangePicker
      // mode={['month', 'month']}
      picker="month"
      placeholder={['开始月份', ' 结束月份']}
      format={format}
      value={value}
      onChange={onChange}
      onPanelChange={onChange}
    />
  );
});
