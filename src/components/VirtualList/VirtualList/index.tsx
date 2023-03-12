import * as React from 'react';
import * as PropTypes from 'prop-types';
import SizeAndPositionManager, { ItemSize } from './SizeAndPositionManager';
import {
  ALIGNMENT,
  DIRECTION,
  SCROLL_CHANGE_REASON,
  marginProp,
  oppositeMarginProp,
  positionProp,
  scrollProp,
  sizeProp,
} from './constants';

export { DIRECTION as ScrollDirection } from './constants';

export type ItemPosition = 'absolute' | 'sticky';

export interface ItemStyle {
  position: ItemPosition;
  top?: number;
  left: number;
  width: string | number;
  height?: number;
  marginTop?: number;
  marginLeft?: number;
  marginRight?: number;
  marginBottom?: number;
  zIndex?: number;
}

interface StyleCache {
  [id: number]: ItemStyle;
}

export interface ItemInfo {
  index: number;
  style: ItemStyle;
}

export interface RenderedRows {
  startIndex: number;
  stopIndex: number;
}

export interface Props {
  className?: string;
  /** Used to estimate the total size of the list before all of its items have actually been measured. The estimated total height is progressively adjusted as items are rendered. */
  estimatedItemSize?: number;
  /** Height of List. This property will determine the number of rendered items when scrollDirection is 'vertical'. */
  height: number | string;
  /** The number of items you want to render */
  itemCount: number;
  /** Either a fixed height/width (depending on the scrollDirection), an array containing the heights of all the items in your list, or a function that returns the height of an item given its index: (index: number): number */
  itemSize: ItemSize;
  /** Number of extra buffer items to render above/below the visible items. Tweaking this can help reduce scroll flickering on certain browsers/devices. */
  overscanCount?: number;
  /** Can be used to control the scroll offset; Also useful for setting an initial scroll offset */
  scrollOffset?: number;
  /** Item index to scroll to (by forcefully scrolling if necessary) x */
  scrollToIndex?: number;
  /** Used in combination with scrollToIndex, this prop controls the alignment of the scrolled to item. One of: 'start', 'center', 'end' or 'auto'. Use 'start' to always align items to the top of the container and 'end' to align them bottom. Use 'center' to align them in the middle of the container. 'auto' scrolls the least amount possible to ensure that the specified scrollToIndex item is fully visible. */
  scrollToAlignment?: ALIGNMENT;
  /** Whether the list should scroll vertically or horizontally. One of 'vertical' (default) or 'horizontal'. */
  scrollDirection?: DIRECTION;
  /** An array of indexes (eg. [0, 10, 25, 30]) to make certain items in the list sticky (position: sticky) */
  stickyIndices?: number[];
  style?: React.CSSProperties;
  /** Width of List. This property will determine the number of rendered items when scrollDirection is 'horizontal'. */
  width?: number | string;
  /** Callback invoked with information about the slice of rows/columns that were just rendered. It has the following signature: ({startIndex: number, stopIndex: number}). */
  onItemsRendered?({ startIndex, stopIndex }: RenderedRows): void;
  /** Callback invoked whenever the scroll offset changes within the inner scrollable region. It has the following signature: (scrollTop: number, event: React.UIEvent<HTMLDivElement>) */
  onScroll?(offset: number, event: UIEvent): void;
  /** Responsible for rendering an item given it's index: ({index: number, style: Object}): React.PropTypes.node. The returned element must handle key and style. */
  renderItem(itemInfo: ItemInfo): React.ReactNode;
}

export interface State {
  offset: number;
  scrollChangeReason: SCROLL_CHANGE_REASON;
}

const STYLE_WRAPPER: React.CSSProperties = {
  overflow: 'auto',
  willChange: 'transform',
  WebkitOverflowScrolling: 'touch',
};

const STYLE_INNER: React.CSSProperties = {
  position: 'relative',
  width: '100%',
  minHeight: '100%',
};

const STYLE_ITEM: {
  position: ItemStyle['position'];
  top: ItemStyle['top'];
  left: ItemStyle['left'];
  width: ItemStyle['width'];
} = {
  position: 'absolute' as ItemPosition,
  top: 0,
  left: 0,
  width: '100%',
};

const STYLE_STICKY_ITEM = {
  ...STYLE_ITEM,
  position: 'sticky' as ItemPosition,
};

export default class VirtualList extends React.PureComponent<Props, State> {
  static defaultProps = {
    overscanCount: 3,
    scrollDirection: DIRECTION.VERTICAL,
    width: '100%',
  };

  static propTypes = {
    estimatedItemSize: PropTypes.number,
    height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    itemCount: PropTypes.number.isRequired,
    itemSize: PropTypes.oneOfType([PropTypes.number, PropTypes.array, PropTypes.func]).isRequired,
    onScroll: PropTypes.func,
    onItemsRendered: PropTypes.func,
    overscanCount: PropTypes.number,
    renderItem: PropTypes.func.isRequired,
    scrollOffset: PropTypes.number,
    scrollToIndex: PropTypes.number,
    scrollToAlignment: PropTypes.oneOf([ALIGNMENT.AUTO, ALIGNMENT.START, ALIGNMENT.CENTER, ALIGNMENT.END]),
    scrollDirection: PropTypes.oneOf([DIRECTION.HORIZONTAL, DIRECTION.VERTICAL]),
    stickyIndices: PropTypes.arrayOf(PropTypes.number),
    style: PropTypes.object,
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  };

  itemSizeGetter = (itemSize: Props['itemSize']) => {
    return (index) => this.getSize(index, itemSize);
  };

  sizeAndPositionManager = new SizeAndPositionManager({
    itemCount: this.props.itemCount,
    itemSizeGetter: this.itemSizeGetter(this.props.itemSize),
    estimatedItemSize: this.getEstimatedItemSize(),
  });

  readonly state: State = {
    offset:
      this.props.scrollOffset ||
      (this.props.scrollToIndex != null && this.getOffsetForIndex(this.props.scrollToIndex)) ||
      0,
    scrollChangeReason: SCROLL_CHANGE_REASON.REQUESTED,
  };

  private rootNode: HTMLElement;

  private styleCache: StyleCache = {};

  componentDidMount() {
    const { scrollOffset, scrollToIndex } = this.props;
    this.rootNode.addEventListener('scroll', this.handleScroll, {
      passive: true,
    });

    if (scrollOffset != null) {
      this.scrollTo(scrollOffset);
    } else if (scrollToIndex != null) {
      this.scrollTo(this.getOffsetForIndex(scrollToIndex));
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps: Props) {
    const { estimatedItemSize, itemCount, itemSize, scrollOffset, scrollToAlignment, scrollToIndex } = this.props;
    const scrollPropsHaveChanged =
      nextProps.scrollToIndex !== scrollToIndex || nextProps.scrollToAlignment !== scrollToAlignment;
    const itemPropsHaveChanged =
      nextProps.itemCount !== itemCount ||
      nextProps.itemSize !== itemSize ||
      nextProps.estimatedItemSize !== estimatedItemSize;

    if (nextProps.itemSize !== itemSize) {
      this.sizeAndPositionManager.updateConfig({
        itemSizeGetter: this.itemSizeGetter(nextProps.itemSize),
      });
    }

    if (nextProps.itemCount !== itemCount || nextProps.estimatedItemSize !== estimatedItemSize) {
      this.sizeAndPositionManager.updateConfig({
        itemCount: nextProps.itemCount,
        estimatedItemSize: this.getEstimatedItemSize(nextProps),
      });
    }

    if (itemPropsHaveChanged) {
      this.recomputeSizes();
    }

    if (nextProps.scrollOffset !== scrollOffset) {
      this.setState({
        offset: nextProps.scrollOffset || 0,
        scrollChangeReason: SCROLL_CHANGE_REASON.REQUESTED,
      });
    } else if (typeof nextProps.scrollToIndex === 'number' && (scrollPropsHaveChanged || itemPropsHaveChanged)) {
      this.setState({
        offset: this.getOffsetForIndex(nextProps.scrollToIndex, nextProps.scrollToAlignment, nextProps.itemCount),
        scrollChangeReason: SCROLL_CHANGE_REASON.REQUESTED,
      });
    }
  }

  componentDidUpdate(_: Props, prevState: State) {
    const { offset, scrollChangeReason } = this.state;

    if (prevState.offset !== offset && scrollChangeReason === SCROLL_CHANGE_REASON.REQUESTED) {
      this.scrollTo(offset);
    }
  }

  componentWillUnmount() {
    this.rootNode.removeEventListener('scroll', this.handleScroll);
  }

  scrollTo(value: number) {
    const { scrollDirection = DIRECTION.VERTICAL } = this.props;

    this.rootNode[scrollProp[scrollDirection]] = value;
  }

  getOffsetForIndex(
    index: number,
    scrollToAlignment = this.props.scrollToAlignment,
    itemCount: number = this.props.itemCount,
  ): number {
    const { scrollDirection = DIRECTION.VERTICAL } = this.props;

    if (index < 0 || index >= itemCount) {
      index = 0;
    }

    return this.sizeAndPositionManager.getUpdatedOffsetForIndex({
      align: scrollToAlignment,
      containerSize: this.props[sizeProp[scrollDirection]],
      currentOffset: (this.state && this.state.offset) || 0,
      targetIndex: index,
    });
  }

  recomputeSizes(startIndex = 0) {
    this.styleCache = {};
    this.sizeAndPositionManager.resetItem(startIndex);
  }

  render() {
    const {
      estimatedItemSize,
      height,
      overscanCount = 3,
      renderItem,
      itemCount,
      itemSize,
      onItemsRendered,
      onScroll,
      scrollDirection = DIRECTION.VERTICAL,
      scrollOffset,
      scrollToIndex,
      scrollToAlignment,
      stickyIndices,
      style,
      width,
      ...props
    } = this.props;
    const { offset } = this.state;
    const { start, stop } = this.sizeAndPositionManager.getVisibleRange({
      containerSize: this.props[sizeProp[scrollDirection]] || 0,
      offset,
      overscanCount,
    });
    const items: React.ReactNode[] = [];
    const wrapperStyle = { ...STYLE_WRAPPER, ...style, height, width };
    const innerStyle = {
      ...STYLE_INNER,
      [sizeProp[scrollDirection]]: this.sizeAndPositionManager.getTotalSize(),
    };

    if (stickyIndices != null && stickyIndices.length !== 0) {
      stickyIndices.forEach((index: number) =>
        items.push(
          renderItem({
            index,
            style: this.getStyle(index, true),
          }),
        ),
      );

      if (scrollDirection === DIRECTION.HORIZONTAL) {
        innerStyle.display = 'flex';
      }
    }

    if (typeof start !== 'undefined' && typeof stop !== 'undefined') {
      for (let index = start; index <= stop; index++) {
        if (stickyIndices != null && stickyIndices.includes(index)) {
          continue;
        }

        items.push(
          renderItem({
            index,
            style: this.getStyle(index, false),
          }),
        );
      }

      if (typeof onItemsRendered === 'function') {
        onItemsRendered({
          startIndex: start,
          stopIndex: stop,
        });
      }
    }

    return (
      <div ref={this.getRef} {...props} style={wrapperStyle}>
        <div style={innerStyle}>{items}</div>
      </div>
    );
  }

  private getRef = (node: HTMLDivElement): void => {
    this.rootNode = node;
  };

  private handleScroll = (event: UIEvent) => {
    const { onScroll } = this.props;
    const offset = this.getNodeOffset();

    if (offset < 0 || this.state.offset === offset || event.target !== this.rootNode) {
      return;
    }

    this.setState({
      offset,
      scrollChangeReason: SCROLL_CHANGE_REASON.OBSERVED,
    });

    if (typeof onScroll === 'function') {
      onScroll(offset, event);
    }
  };

  private getNodeOffset() {
    const { scrollDirection = DIRECTION.VERTICAL } = this.props;

    return this.rootNode[scrollProp[scrollDirection]];
  }

  private getEstimatedItemSize(props = this.props) {
    return props.estimatedItemSize || (typeof props.itemSize === 'number' && props.itemSize) || 50;
  }

  private getSize(index: number, itemSize) {
    if (typeof itemSize === 'function') {
      return itemSize(index);
    }

    return Array.isArray(itemSize) ? itemSize[index] : itemSize;
  }

  private getStyle(index: number, sticky: boolean) {
    const style = this.styleCache[index];

    if (style) {
      return style;
    }

    const { scrollDirection = DIRECTION.VERTICAL } = this.props;
    const { size, offset } = this.sizeAndPositionManager.getSizeAndPositionForIndex(index);

    return (this.styleCache[index] = sticky
      ? {
          ...STYLE_STICKY_ITEM,
          [sizeProp[scrollDirection]]: size,
          [marginProp[scrollDirection]]: offset,
          [oppositeMarginProp[scrollDirection]]: -(offset + size),
          zIndex: 1,
        }
      : {
          ...STYLE_ITEM,
          [sizeProp[scrollDirection]]: size,
          [positionProp[scrollDirection]]: offset,
        });
  }
}
