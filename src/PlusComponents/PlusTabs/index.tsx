import React, { useState } from 'react';
import type { TabsProps } from 'antd';
import { Tabs } from 'antd';
import StickyBox from 'react-sticky-box';
import type { DragEndEvent } from '@dnd-kit/core';
import { DndContext, PointerSensor, useSensor } from '@dnd-kit/core';
import { arrayMove, horizontalListSortingStrategy, SortableContext, useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

interface IPlusTabsProps extends TabsProps {
  isSticky?: boolean;
  isDrag?: boolean;
}

interface DraggableTabPaneProps extends React.HTMLAttributes<HTMLDivElement> {
  'data-node-key': string;
  onActiveBarTransform: (className: string) => void;
}

const DraggableTabNode = ({ className, onActiveBarTransform, ...props }: DraggableTabPaneProps) => {
  const { attributes, listeners, setNodeRef, transform, transition, isSorting } = useSortable({
    id: props['data-node-key'],
  });

  const style: React.CSSProperties = {
    ...props.style,
    transform: CSS.Transform.toString(transform),
    transition,
    cursor: 'move',
  };

  return React.cloneElement(props.children as React.ReactElement, {
    ref: setNodeRef,
    style,
    ...attributes,
    ...listeners,
  });
};

const PlusTabs: React.FC<IPlusTabsProps> = (props) => {
  const { isSticky = false, isDrag = false, items: defaultItems, className: defaultClassName, ...restProps } = props;

  const [items, setItems] = useState(defaultItems);
  const [className, setClassName] = useState('');
  const sensor = useSensor(PointerSensor, { activationConstraint: { distance: 10 } });
  const onDragEnd = ({ active, over }: DragEndEvent) => {
    if (active.id !== over?.id) {
      setItems((prev) => {
        const activeIndex = prev!.findIndex((i) => i.key === active.id);
        const overIndex = prev!.findIndex((i) => i.key === over?.id);
        return arrayMove(prev!, activeIndex, overIndex);
      });
    }
  };

  const renderStickyTabBar: TabsProps['renderTabBar'] = (props, DefaultTabBar) => (
    <StickyBox offsetTop={0} offsetBottom={20} style={{ zIndex: 1 }}>
      <DefaultTabBar {...props} />
    </StickyBox>
  );

  const renderDraggableTabBar: TabsProps['renderTabBar'] = (tabBarProps, DefaultTabBar) => {
    return (
      <DndContext sensors={[sensor]} onDragEnd={onDragEnd}>
        <SortableContext items={(items || [])?.map((i) => i.key)} strategy={horizontalListSortingStrategy}>
          <DefaultTabBar {...tabBarProps}>
            {(node) => (
              <DraggableTabNode {...node.props} key={node.key} onActiveBarTransform={setClassName}>
                {node}
              </DraggableTabNode>
            )}
          </DefaultTabBar>
        </SortableContext>
      </DndContext>
    );
  };

  const getRenderTabBar = () => {
    if (isSticky) return { renderTabBar: renderStickyTabBar };
    if (isDrag) return { renderTabBar: renderDraggableTabBar };
    return {};
  };

  return <Tabs className={`${className} ${defaultClassName}`} items={items} {...getRenderTabBar()} {...restProps} />;
};

export default PlusTabs;
