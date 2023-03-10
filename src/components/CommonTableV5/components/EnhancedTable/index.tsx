import React from 'react';
import MemoTable from './MemoTable';
import VirtualScrollTable from './VirtualScrollTable';

const EnhancedTable = (props: any) => {
  return props.isVirtual ? (
    <VirtualScrollTable {...props} />
  ) : (
    <MemoTable {...props} />
  );
};

export default React.memo(EnhancedTable);
