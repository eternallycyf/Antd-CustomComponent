import React from 'react';
import MemoTable from './MemoTable';
import VirtualScrollTable from './VirtualScrollTable';

export default function (props: any) {
  return props.isVirtual ? (
    <VirtualScrollTable {...props} />
  ) : (
    <MemoTable {...props} />
  );
}
