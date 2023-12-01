import * as React from 'react';
import { convertDataToEntities } from 'rc-tree/lib/utils/treeUtil';
import type { DataEntity } from 'rc-tree/lib/interface';
import type { FieldNames, RawValueType } from './index';

export default (treeData: any, fieldNames: FieldNames) =>
  React.useMemo<{
    valueEntities: Map<RawValueType, DataEntity>;
    keyEntities: Record<string, DataEntity>;
  }>(() => {
    const collection = convertDataToEntities(treeData, {
      fieldNames,
      initWrapper: (wrapper) => ({
        ...wrapper,
        valueEntities: new Map(),
      }),
      processEntity: (entity, wrapper: any) => {
        //@ts-ignore
        const val = entity.node[fieldNames?.value];

        wrapper.valueEntities.set(val, entity);
      },
    });

    return collection as any;
  }, [treeData, fieldNames]);
