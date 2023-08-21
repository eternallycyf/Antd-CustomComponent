import { FullscreenExitOutlined, FullscreenOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';
import React, { useEffect, useState } from 'react';
import { addEvent } from '../../helpers';

declare const document: Document & {
  fullScreen: boolean;
  fullscreenElement: Element;
  webkitFullscreenElement: Element;
  webkitIsFullScreen: boolean;
  webkitCancelFullScreen: () => void;
  mozFullScreen: boolean;
  mozFullScreenElement: Element;
  mozCancelFullScreen: () => void;
  msExitFullscreen: () => void;
};

const FullScreen: React.FC<any> = () => {
  const showFullScreenBtn: boolean = window.navigator.userAgent.indexOf('MSIE') < 0;
  const [fullScreen, setFullScreen] = useState<boolean>(false);
  const main = document.body as any;

  useEffect(() => {
    const callback = () => {
      const isFullScreen =
        document.fullscreenElement ||
        document.mozFullScreenElement ||
        document.webkitFullscreenElement ||
        document.fullScreen ||
        document.mozFullScreen ||
        document.webkitIsFullScreen;
      setFullScreen(!!isFullScreen);
    };
    addEvent(document, 'fullscreenchange', callback);
    addEvent(document, 'mozfullscreenchange', callback);
    addEvent(document, 'webkitfullscreenchange', callback);
    addEvent(document, 'msfullscreenchange', callback);
  }, []);

  const handleFullScreen = () => {
    if (fullScreen) {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    } else {
      if (main.requestFullscreen) {
        main.requestFullscreen();
      } else if (main.mozRequestFullScreen) {
        main.mozRequestFullScreen();
      } else if (main.webkitRequestFullScreen) {
        main.webkitRequestFullScreen();
      } else if (main.msRequestFullscreen) {
        main.msRequestFullscreen();
      }
    }
  };

  const fullScreenStyle = {
    fontSize: 16,
    margin: '0 12px',
    cursor: 'pointer',
    color: '#fff',
  };

  if (!showFullScreenBtn) return null;

  return (
    <div style={fullScreenStyle}>
      <Tooltip placement="bottom" title={fullScreen ? '退出全屏' : '全屏'}>
        {fullScreen ? <FullscreenExitOutlined onClick={handleFullScreen} /> : <FullscreenOutlined onClick={handleFullScreen} />}
      </Tooltip>
    </div>
  );
};

export default FullScreen;
