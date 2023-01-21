import React, { useState, useImperativeHandle } from 'react';
import { Cascader } from 'antd';
import { IControlProps } from '@/typings';

const CascadeControl: React.FC<IControlProps> = React.forwardRef(
  ({ name, form, onChange, fetchConfig, ...controlProps }: any, ref) => {
    const { dict } = controlProps;
    const { apiUrl, params, method } = fetchConfig;
    const [options, setoptions] = useState(dict);

    useImperativeHandle(ref, () => ({}));

    // 加载远程数据
    const loadRemoteData = (selectedOptions: any) => {
      const targetOption = selectedOptions[selectedOptions.length - 1];
      targetOption.loading = true;
    };

    if (apiUrl) {
      controlProps.loadData = loadRemoteData;
    }

    return <Cascader {...controlProps} />;
  },
);

CascadeControl.defaultProps = {
  // @ts-ignore
  showSearch: (inputValue: any, path: any) => {
    return path.some(
      (option: any) =>
        option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1,
    );
  },
};

export default CascadeControl;
