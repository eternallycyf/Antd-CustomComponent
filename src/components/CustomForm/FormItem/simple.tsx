import React, { useImperativeHandle } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import {
  AutoComplete,
  Checkbox,
  DatePicker,
  Input,
  InputNumber,
  Radio,
  Rate,
  Slider,
  Switch,
  TimePicker,
} from 'antd';
import 'dayjs/locale/zh-cn';
import locale from 'antd/es/date-picker/locale/zh_CN';
import { IControlProps } from '@/typings';
import dayjs from 'dayjs';
const RadioGroup = Radio.Group;
const CheckboxGroup = Checkbox.Group;
const { TextArea, Password, Search } = Input;
const { MonthPicker, RangePicker, QuarterPicker } = DatePicker;

dayjs.locale('zh-cn');

interface ISimpleControlProps extends IControlProps {
  defaultVal?: any;
}

const SimpleControl: React.FC<ISimpleControlProps> = React.forwardRef(
  (
    {
      name,
      form,
      type,
      dict,
      defaultVal,
      Component: CustomComponent,
      ...newControlProps
    }: any,
    ref,
  ) => {
    let Component: any;
    let controlProps = { ...newControlProps } || {};

    useImperativeHandle(ref, () => ({}));

    switch (type) {
      case 'date':
      case 'year':
        Component = DatePicker;
        break;
      case 'quarter':
        Component = QuarterPicker;
        break;
      case 'dateRange':
        Component = RangePicker;
        break;
      case 'month':
        Component = MonthPicker;
        break;
      case 'time':
        Component = TimePicker;
        break;
      case 'input':
        Component = Input;
        break;
      case 'password':
        Component = Password;
        break;
      case 'textarea':
        Component = TextArea;
        break;
      case 'search':
        Component = Input;
        break;
      case 'rate':
        Component = Rate;
        break;
      case 'switch':
        Component = Switch;
        break;
      case 'inputNumber':
        Component = InputNumber;
        break;
      case 'slider':
        Component = Slider;
        break;
      case 'custom':
        Component = CustomComponent;
    }

    const formProps = { form, name, type };
    controlProps = {
      ...defaultVal[type],
      ...controlProps,
    };

    if (type === 'autoComplete') {
      return (
        <AutoComplete {...controlProps}>
          {dict.map((dic: any) => (
            <AutoComplete.Option {...dic} key={dic.value} value={dic.value}>
              {(controlProps.renderItem && controlProps.renderItem(dic)) ||
                dic.text}{' '}
            </AutoComplete.Option>
          ))}
        </AutoComplete>
      );
    } else if (type === 'checkbox') {
      return (
        <CheckboxGroup {...controlProps}>
          {dict.map((dic: any) => (
            <Checkbox {...dic} key={dic.value} value={dic.value}>
              {dic.text}
            </Checkbox>
          ))}
        </CheckboxGroup>
      );
    } else if (type === 'radio') {
      let RadioComp: any = Radio;
      if (controlProps.buttonStyle === 'solid') {
        RadioComp = Radio.Button;
      }
      return (
        <RadioGroup {...controlProps}>
          {dict.map((dic: any) => (
            <RadioComp
              {...dic}
              key={dic.value}
              value={dic.value}
              title={dic.text}
            >
              {dic.text}
            </RadioComp>
          ))}
        </RadioGroup>
      );
    } else {
      return (
        <Component
          prefix={type === 'search' && <SearchOutlined />}
          {...controlProps}
          {...formProps}
        />
      );
    }
  },
);

SimpleControl.defaultProps = {
  defaultVal: {
    year: {
      locale,
      picker: 'year',
    },
    quarter: {
      locale,
      picker: 'quarter',
    },
    datetime: {
      locale,
      showTime: true,
      format: 'YYYY-MM-DD HH:mm:ss',
    },
    month: {
      locale,
      format: 'YYYY-MM',
    },
    time: {
      locale,
      format: 'HH:mm:ss',
    },
    dateRange: {
      locale,
      format: 'YYYY-MM-DD',
    },
    input: {
      placeholder: '请输入',
    },
    password: {
      placeholder: '请输入',
    },
    textarea: {
      placeholder: '请输入',
      autoSize: { minRows: 2, maxRows: 5 },
    },
    search: {
      placeholder: '请输入',
      inputNumber: {
        min: 0,
        max: 100,
        placeholder: '请输入',
      },
    },
  },
};

export default SimpleControl;
