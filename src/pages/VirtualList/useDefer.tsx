import React, { useState } from 'react';

interface Iprops {
  maxFrameCount?: number;
}

const useDefer = (props: Iprops) => {
  const {
    maxFrameCount = 1000
  } = props;

  const [frameCount, setFrameCount] = useState(0);
  const refreshFrameCount = () => {
    requestAnimationFrame(() => {
      setFrameCount(frameCount + 1);
      if (frameCount < maxFrameCount) {
        refreshFrameCount();
      }
    });
  }
  refreshFrameCount();
  return function (showInFrameCount: number) {
    return frameCount >= showInFrameCount;
  }
}

useDefer.defaultProps = {
  maxFrameCount: 1000
}

export default useDefer;