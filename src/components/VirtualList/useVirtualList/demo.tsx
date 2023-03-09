import React from 'react';
import { useRef } from 'react';
import useVirtualList from './useVirtualList';

const Section = (props: any) => {
  const ref = useRef(null);
  const entry = useVirtualList(ref, {});
  const isVisible = !!entry?.isIntersecting;
  console.log(`Render Section ${props.title}`, { isVisible });
  return (
    <div
      ref={ref}
      style={{
        minHeight: '100px',
        display: 'flex',
        border: '1px dashed #000',
        fontSize: '2rem',
        width: '100%',
      }}
    >
      {isVisible ? <div style={{ margin: 'auto' }}>{props.title}</div> : ''}
    </div>
  );
};

const App = () =>
  Array.from({ length: 100 }).map((_, index) => (
    <Section key={index + 1} title={`${index + 1}`} />
  ));

export default App;
