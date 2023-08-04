import React, { useState } from 'react';
import { Typography, Popover } from 'antd';
import axios from 'axios';
import { fetchUserInfo } from '@/services';

const { Paragraph } = Typography;

{
  /* <UserTips text={'sss'} />; */
}

/**
 * axios 取消接口请求操作
 */
let sourceToken = axios.CancelToken.source();

const UserTips = ({ text }) => {
  let timer: any = null; // eslint-disable-line
  const [show, setShow] = useState(false); //弹框的显隐
  const [data, setData] = useState<CommonObjectType>({}); //展示信息
  const [errorType, setErrorType] = useState(false); //展示标识
  /**
   * 鼠标滑入后调取接口
   */
  const onMouseOver = () => {
    sourceToken = axios.CancelToken.source();
    clearTimeout(timer);
    timer = setTimeout(function () {
      getMsg();
    }, 500);
  };

  /**
   * 获取人员信息的参数
   */
  const getMsg = () => {
    fetchUserInfo({ username: text }, sourceToken.token).then((res: CommonObjectType) => {
      setShow(true);
      if (res.code === 200) {
        setData(res.data);
      } else {
        setErrorType(true);
      }
    });
  };

  /**
   * 鼠标离开后清空参数
   * 并隐藏pover
   */
  const onMouseOut = () => {
    clearTimeout(timer);
    setShow(false);
    setErrorType(false);
    sourceToken.cancel('取消请求');
  };

  return (
    <div className="user-tips">
      <Popover
        overlayStyle={{ width: '368px', borderRadius: '4px', padding: '4px 10px' }}
        content={<div className="tag">{errorType ? <div style={{ textAlign: 'center' }}>No Data</div> : <div>....你的结构和信息</div>}</div>}
        destroyTooltipOnHide
        arrowPointAtCenter
        trigger="hover"
        visible={show}
      >
        <span onMouseOver={onMouseOver} onMouseOut={onMouseOut} className="pointer person">
          {text}
        </span>
      </Popover>
    </div>
  );
};
