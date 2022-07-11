import React, { useState, useEffect } from 'react';
import { Cascader } from 'antd';
import _ from 'lodash';
import { IControlProps } from '@/typings';

const CascadeControl: React.FC<IControlProps> = React.forwardRef(
  ({ name, form, onChange, fetchConfig, ...controlProps }: any, ref) => {
    const { dict } = controlProps;
    const { apiUrl, params, method } = fetchConfig;
    const [options, setoptions] = useState(dict);

    // 加载远程数据
    const loadRemoteData = (selectedOptions: any) => {
      const targetoption = selectedOptions[selectedOptions.length - 1];
      targetoption.loading = true;
    };

    if (apiUrl) {
      controlProps.loadData = loadRemoteData;
    }

    return <Cascader {...controlProps} />;
  },
);

CascadeControl.defaultProps = {
  showSearch: (inputValue: any, path: any) => {
    return path.some(
      (option: any) =>
        option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1,
    );
  },
};

export default CascadeControl;
