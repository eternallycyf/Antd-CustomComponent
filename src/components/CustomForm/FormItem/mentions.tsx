import React, { useState, useEffect } from 'react';
import { Mentions } from 'antd';
import _ from 'lodash';
import debounce from 'lodash/debounce';
import request from '@/utils/request';
import { IControlProps } from '@/typings';
const { Option } = Mentions;

const MentionsControl: React.FC<IControlProps> = React.forwardRef(
  (
    { form, name, dict = [], onChange, fetchConfig, ...controlProps }: any,
    ref,
  ) => {
    const { apiUrl, method, params } = fetchConfig;

    const [data, setData] = useState(dict);
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(false);

    // 请求数据
    useEffect(() => {
      if (apiUrl) fetchData(search);
    }, []);

    // 处理搜索
    const onSearch = (search: any) => {
      setData([]);
      setSearch(search);
      setLoading(!!search);
      fetchData(search);
    };

    // 请求数据
    const fetchData = debounce(async (key: any) => {
      if (!key) {
        setData([]);
        return;
      }
      const isGetMethod = method.toLowerCase() === 'get';
      const res = await request(apiUrl, {
        method,
        [isGetMethod ? 'params' : 'data']: {
          [params]: key,
        },
      });
      if (key !== search) {
        return;
      }
      setLoading(false);
      setData(res.data);
    }, 800);

    if (apiUrl) {
      controlProps.onSearch = onSearch;
    }

    return (
      <Mentions loading={loading} {...controlProps}>
        {data.map((item: any) => (
          <Option key={item.value} value={item.value}>
            {item.text}
          </Option>
        ))}
      </Mentions>
    );
  },
);

export default MentionsControl;
