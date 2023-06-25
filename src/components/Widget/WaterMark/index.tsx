import React, { FC, useEffect, useState } from 'react';
interface IWaterMarkProps {
  width?: number;
  height?: number;
  textAlign?: CanvasTextAlign;
  textBaseline?: CanvasTextBaseline;
  fillStyle?: string | CanvasGradient | CanvasPattern;
  font?: string;
  content?: string;
  rotate?: number;
  zIndex?: number;
  children?: React.ReactNode;
  [props: string]: IWaterMarkProps[keyof IWaterMarkProps];
}

const WaterMark: FC<IWaterMarkProps> = (props) => {
  const {
    width = 300,
    height = 200,
    textAlign = 'center',
    textBaseline = 'middle',
    font = '20px Microsoft Yahei',
    fillStyle = 'rgba(184, 184, 184, 0.6)',
    content = 'WaterMark',
    rotate = -20,
    zIndex = 1000,
  } = props;
  const [waterMarkUrl, setWaterMarkUrl] = useState<string>('');

  useEffect(() => {
    const canvas = document.createElement('canvas');
    canvas.setAttribute('width', `${width}px`);
    canvas.setAttribute('height', `${height}px`);

    const translateX = width / 2;
    const translateY = height / 2;

    const ctx = canvas.getContext('2d')!;
    ctx.textAlign = textAlign;
    ctx.textBaseline = textBaseline;
    ctx.font = font;
    ctx.fillStyle = fillStyle;
    ctx.translate(translateX, translateY);
    ctx.rotate((Math.PI / 180) * rotate);
    ctx.translate(-translateX, -translateY);
    ctx.fillText(content, translateX, translateY);
    setWaterMarkUrl(canvas.toDataURL());
  }, [width, height, textAlign, textBaseline, font, fillStyle, content]);

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
      }}
    >
      <div>{props.children}</div>
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex,
          pointerEvents: 'none',
          background: `url(${waterMarkUrl}) repeat`,
        }}
      ></div>
    </div>
  );
};

export default React.memo(WaterMark);
