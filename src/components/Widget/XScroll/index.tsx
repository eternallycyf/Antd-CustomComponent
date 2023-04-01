import useResize from '@/hook/useResize';
import { FC, useRef, useState } from 'react';
import styles from './index.less';

interface IProps {
  children: React.ReactNode;
}

const XScroll: FC<IProps> = (props) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [rect, setRect] = useState({ width: 0, height: 0 });
  useResize({
    node: scrollRef,
    cb: (entry, rect) => {
      setRect(rect);
    },
  });
  const { children } = props;
  const { width, height } = rect;
  const style = {
    '--width': `${width}px`,
    '--height': `${height}px`,
  } as React.CSSProperties;

  return (
    <div ref={scrollRef} className={styles['scroll-container']}>
      <div className={styles['v-scroll']} style={style}>
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
};

export default XScroll;
