import React from 'react';
import { DatePicker } from 'antd';
import moment from 'moment';
const format = 'YYYYMM';
const { RangePicker } = DatePicker;

export default React.forwardRef((props: any) => {
  const value = (props.value || []).map((v: any) => {
    return moment.isMoment(v) ? v : moment(v);
  });

  const onChange = (values: any, mode: any) => {
    props.onChange(
      values.map((dateValue: any) => {
        return moment(dateValue).format(format);
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
