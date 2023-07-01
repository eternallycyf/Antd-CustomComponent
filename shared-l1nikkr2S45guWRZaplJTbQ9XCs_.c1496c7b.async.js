"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[723],{1830:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval(`
// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ VirtualList; }
});

// UNUSED EXPORTS: ScrollDirection

// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(13769);
var objectWithoutProperties_default = /*#__PURE__*/__webpack_require__.n(objectWithoutProperties);
// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(12444);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);
// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(72004);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);
// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(25098);
var assertThisInitialized_default = /*#__PURE__*/__webpack_require__.n(assertThisInitialized);
// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__(31996);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);
// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createSuper.js
var createSuper = __webpack_require__(26037);
var createSuper_default = /*#__PURE__*/__webpack_require__.n(createSuper);
// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(9783);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);
// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/objectSpread2.js
var objectSpread2 = __webpack_require__(97857);
var objectSpread2_default = /*#__PURE__*/__webpack_require__.n(objectSpread2);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
;// CONCATENATED MODULE: ./src/components/Widget/VirtualList/constants.ts

var _scrollProp, _sizeProp, _positionProp, _marginProp, _oppositeMarginProp;
var ALIGNMENT;
(function (ALIGNMENT) {
  ALIGNMENT["AUTO"] = "auto";
  ALIGNMENT["START"] = "start";
  ALIGNMENT["CENTER"] = "center";
  ALIGNMENT["END"] = "end";
})(ALIGNMENT || (ALIGNMENT = {}));
var DIRECTION;
(function (DIRECTION) {
  DIRECTION["HORIZONTAL"] = "horizontal";
  DIRECTION["VERTICAL"] = "vertical";
})(DIRECTION || (DIRECTION = {}));
var SCROLL_CHANGE_REASON;
(function (SCROLL_CHANGE_REASON) {
  SCROLL_CHANGE_REASON["OBSERVED"] = "observed";
  SCROLL_CHANGE_REASON["REQUESTED"] = "requested";
})(SCROLL_CHANGE_REASON || (SCROLL_CHANGE_REASON = {}));
var scrollProp = (_scrollProp = {}, defineProperty_default()(_scrollProp, DIRECTION.VERTICAL, 'scrollTop'), defineProperty_default()(_scrollProp, DIRECTION.HORIZONTAL, 'scrollLeft'), _scrollProp);
var sizeProp = (_sizeProp = {}, defineProperty_default()(_sizeProp, DIRECTION.VERTICAL, 'height'), defineProperty_default()(_sizeProp, DIRECTION.HORIZONTAL, 'width'), _sizeProp);
var positionProp = (_positionProp = {}, defineProperty_default()(_positionProp, DIRECTION.VERTICAL, 'top'), defineProperty_default()(_positionProp, DIRECTION.HORIZONTAL, 'left'), _positionProp);
var marginProp = (_marginProp = {}, defineProperty_default()(_marginProp, DIRECTION.VERTICAL, 'marginTop'), defineProperty_default()(_marginProp, DIRECTION.HORIZONTAL, 'marginLeft'), _marginProp);
var oppositeMarginProp = (_oppositeMarginProp = {}, defineProperty_default()(_oppositeMarginProp, DIRECTION.VERTICAL, 'marginBottom'), defineProperty_default()(_oppositeMarginProp, DIRECTION.HORIZONTAL, 'marginRight'), _oppositeMarginProp);
;// CONCATENATED MODULE: ./src/components/Widget/VirtualList/SizeAndPositionManager.ts



/* Forked from react-virtualized \u{1F496} */

var SizeAndPositionManager = /*#__PURE__*/function () {
  function SizeAndPositionManager(_ref) {
    var itemCount = _ref.itemCount,
      itemSizeGetter = _ref.itemSizeGetter,
      estimatedItemSize = _ref.estimatedItemSize;
    classCallCheck_default()(this, SizeAndPositionManager);
    defineProperty_default()(this, "itemSizeGetter", void 0);
    defineProperty_default()(this, "itemCount", void 0);
    defineProperty_default()(this, "estimatedItemSize", void 0);
    defineProperty_default()(this, "lastMeasuredIndex", void 0);
    defineProperty_default()(this, "itemSizeAndPositionData", void 0);
    this.itemSizeGetter = itemSizeGetter;
    this.itemCount = itemCount;
    this.estimatedItemSize = estimatedItemSize;

    // Cache of size and position data for items, mapped by item index.
    this.itemSizeAndPositionData = {};

    // Measurements for items up to this index can be trusted; items afterward should be estimated.
    this.lastMeasuredIndex = -1;
  }
  createClass_default()(SizeAndPositionManager, [{
    key: "updateConfig",
    value: function updateConfig(_ref2) {
      var itemCount = _ref2.itemCount,
        itemSizeGetter = _ref2.itemSizeGetter,
        estimatedItemSize = _ref2.estimatedItemSize;
      if (itemCount != null) {
        this.itemCount = itemCount;
      }
      if (estimatedItemSize != null) {
        this.estimatedItemSize = estimatedItemSize;
      }
      if (itemSizeGetter != null) {
        this.itemSizeGetter = itemSizeGetter;
      }
    }
  }, {
    key: "getLastMeasuredIndex",
    value: function getLastMeasuredIndex() {
      return this.lastMeasuredIndex;
    }

    /**
     * This method returns the size and position for the item at the specified index.
     * It just-in-time calculates (or used cached values) for items leading up to the index.
     */
  }, {
    key: "getSizeAndPositionForIndex",
    value: function getSizeAndPositionForIndex(index) {
      if (index < 0 || index >= this.itemCount) {
        throw Error("Requested index ".concat(index, " is outside of range 0..").concat(this.itemCount));
      }
      if (index > this.lastMeasuredIndex) {
        var lastMeasuredSizeAndPosition = this.getSizeAndPositionOfLastMeasuredItem();
        var offset = lastMeasuredSizeAndPosition.offset + lastMeasuredSizeAndPosition.size;
        for (var i = this.lastMeasuredIndex + 1; i <= index; i++) {
          var size = this.itemSizeGetter(i);
          if (size == null || isNaN(size)) {
            throw Error("Invalid size returned for index ".concat(i, " of value ").concat(size));
          }
          this.itemSizeAndPositionData[i] = {
            offset: offset,
            size: size
          };
          offset += size;
        }
        this.lastMeasuredIndex = index;
      }
      return this.itemSizeAndPositionData[index];
    }
  }, {
    key: "getSizeAndPositionOfLastMeasuredItem",
    value: function getSizeAndPositionOfLastMeasuredItem() {
      return this.lastMeasuredIndex >= 0 ? this.itemSizeAndPositionData[this.lastMeasuredIndex] : {
        offset: 0,
        size: 0
      };
    }

    /**
     * Total size of all items being measured.
     * This value will be completedly estimated initially.
     * As items as measured the estimate will be updated.
     */
  }, {
    key: "getTotalSize",
    value: function getTotalSize() {
      var lastMeasuredSizeAndPosition = this.getSizeAndPositionOfLastMeasuredItem();
      return lastMeasuredSizeAndPosition.offset + lastMeasuredSizeAndPosition.size + (this.itemCount - this.lastMeasuredIndex - 1) * this.estimatedItemSize;
    }

    /**
     * Determines a new offset that ensures a certain item is visible, given the alignment.
     *
     * @param align Desired alignment within container; one of "start" (default), "center", or "end"
     * @param containerSize Size (width or height) of the container viewport
     * @return Offset to use to ensure the specified item is visible
     */
  }, {
    key: "getUpdatedOffsetForIndex",
    value: function getUpdatedOffsetForIndex(_ref3) {
      var _ref3$align = _ref3.align,
        align = _ref3$align === void 0 ? ALIGNMENT.START : _ref3$align,
        containerSize = _ref3.containerSize,
        currentOffset = _ref3.currentOffset,
        targetIndex = _ref3.targetIndex;
      if (containerSize <= 0) {
        return 0;
      }
      var datum = this.getSizeAndPositionForIndex(targetIndex);
      var maxOffset = datum.offset;
      var minOffset = maxOffset - containerSize + datum.size;
      var idealOffset;
      switch (align) {
        case ALIGNMENT.END:
          idealOffset = minOffset;
          break;
        case ALIGNMENT.CENTER:
          idealOffset = maxOffset - (containerSize - datum.size) / 2;
          break;
        case ALIGNMENT.START:
          idealOffset = maxOffset;
          break;
        default:
          idealOffset = Math.max(minOffset, Math.min(maxOffset, currentOffset));
      }
      var totalSize = this.getTotalSize();
      return Math.max(0, Math.min(totalSize - containerSize, idealOffset));
    }
  }, {
    key: "getVisibleRange",
    value: function getVisibleRange(_ref4) {
      var containerSize = _ref4.containerSize,
        offset = _ref4.offset,
        overscanCount = _ref4.overscanCount;
      var totalSize = this.getTotalSize();
      if (totalSize === 0) {
        return {};
      }
      var maxOffset = offset + containerSize;
      var start = this.findNearestItem(offset);
      if (typeof start === 'undefined') {
        throw Error("Invalid offset ".concat(offset, " specified"));
      }
      var datum = this.getSizeAndPositionForIndex(start);
      offset = datum.offset + datum.size;
      var stop = start;
      while (offset < maxOffset && stop < this.itemCount - 1) {
        stop++;
        offset += this.getSizeAndPositionForIndex(stop).size;
      }
      if (overscanCount) {
        start = Math.max(0, start - overscanCount);
        stop = Math.min(stop + overscanCount, this.itemCount - 1);
      }
      return {
        start: start,
        stop: stop
      };
    }

    /**
     * Clear all cached values for items after the specified index.
     * This method should be called for any item that has changed its size.
     * It will not immediately perform any calculations; they'll be performed the next time getSizeAndPositionForIndex() is called.
     */
  }, {
    key: "resetItem",
    value: function resetItem(index) {
      this.lastMeasuredIndex = Math.min(this.lastMeasuredIndex, index - 1);
    }

    /**
     * Searches for the item (index) nearest the specified offset.
     *
     * If no exact match is found the next lowest item index will be returned.
     * This allows partially visible items (with offsets just before/above the fold) to be visible.
     */
  }, {
    key: "findNearestItem",
    value: function findNearestItem(offset) {
      if (isNaN(offset)) {
        throw Error("Invalid offset ".concat(offset, " specified"));
      }

      // Our search algorithms find the nearest match at or below the specified offset.
      // So make sure the offset is at least 0 or no match will be found.
      offset = Math.max(0, offset);
      var lastMeasuredSizeAndPosition = this.getSizeAndPositionOfLastMeasuredItem();
      var lastMeasuredIndex = Math.max(0, this.lastMeasuredIndex);
      if (lastMeasuredSizeAndPosition.offset >= offset) {
        // If we've already measured items within this range just use a binary search as it's faster.
        return this.binarySearch({
          high: lastMeasuredIndex,
          low: 0,
          offset: offset
        });
      } else {
        // If we haven't yet measured this high, fallback to an exponential search with an inner binary search.
        // The exponential search avoids pre-computing sizes for the full set of items as a binary search would.
        // The overall complexity for this approach is O(log n).
        return this.exponentialSearch({
          index: lastMeasuredIndex,
          offset: offset
        });
      }
    }
  }, {
    key: "binarySearch",
    value: function binarySearch(_ref5) {
      var low = _ref5.low,
        high = _ref5.high,
        offset = _ref5.offset;
      var middle = 0;
      var currentOffset = 0;
      while (low <= high) {
        middle = low + Math.floor((high - low) / 2);
        currentOffset = this.getSizeAndPositionForIndex(middle).offset;
        if (currentOffset === offset) {
          return middle;
        } else if (currentOffset < offset) {
          low = middle + 1;
        } else if (currentOffset > offset) {
          high = middle - 1;
        }
      }
      if (low > 0) {
        return low - 1;
      }
      return 0;
    }
  }, {
    key: "exponentialSearch",
    value: function exponentialSearch(_ref6) {
      var index = _ref6.index,
        offset = _ref6.offset;
      var interval = 1;
      while (index < this.itemCount && this.getSizeAndPositionForIndex(index).offset < offset) {
        index += interval;
        interval *= 2;
      }
      return this.binarySearch({
        high: Math.min(index, this.itemCount - 1),
        low: Math.floor(index / 2),
        offset: offset
      });
    }
  }]);
  return SizeAndPositionManager;
}();

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./src/components/Widget/VirtualList/index.tsx








var _excluded = ["estimatedItemSize", "height", "overscanCount", "renderItem", "itemCount", "itemSize", "onItemsRendered", "onScroll", "scrollDirection", "scrollOffset", "scrollToIndex", "scrollToAlignment", "stickyIndices", "style", "width"];






var STYLE_WRAPPER = {
  overflow: 'auto',
  willChange: 'transform',
  WebkitOverflowScrolling: 'touch'
};
var STYLE_INNER = {
  position: 'relative',
  width: '100%',
  minHeight: '100%'
};
var STYLE_ITEM = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%'
};
var STYLE_STICKY_ITEM = objectSpread2_default()(objectSpread2_default()({}, STYLE_ITEM), {}, {
  position: 'sticky'
});
var VirtualList = /*#__PURE__*/function (_React$PureComponent) {
  inherits_default()(VirtualList, _React$PureComponent);
  var _super = createSuper_default()(VirtualList);
  function VirtualList() {
    var _this;
    classCallCheck_default()(this, VirtualList);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    defineProperty_default()(assertThisInitialized_default()(_this), "itemSizeGetter", function (itemSize) {
      return function (index) {
        return _this.getSize(index, itemSize);
      };
    });
    defineProperty_default()(assertThisInitialized_default()(_this), "sizeAndPositionManager", new SizeAndPositionManager({
      itemCount: _this.props.itemCount,
      itemSizeGetter: _this.itemSizeGetter(_this.props.itemSize),
      estimatedItemSize: _this.getEstimatedItemSize()
    }));
    defineProperty_default()(assertThisInitialized_default()(_this), "state", {
      offset: _this.props.scrollOffset || _this.props.scrollToIndex != null && _this.getOffsetForIndex(_this.props.scrollToIndex) || 0,
      scrollChangeReason: SCROLL_CHANGE_REASON.REQUESTED
    });
    defineProperty_default()(assertThisInitialized_default()(_this), "rootNode", void 0);
    defineProperty_default()(assertThisInitialized_default()(_this), "styleCache", {});
    defineProperty_default()(assertThisInitialized_default()(_this), "getRef", function (node) {
      _this.rootNode = node;
    });
    defineProperty_default()(assertThisInitialized_default()(_this), "handleScroll", function (event) {
      var onScroll = _this.props.onScroll;
      var offset = _this.getNodeOffset();
      if (offset < 0 || _this.state.offset === offset || event.target !== _this.rootNode) {
        return;
      }
      _this.setState({
        offset: offset,
        scrollChangeReason: SCROLL_CHANGE_REASON.OBSERVED
      });
      if (typeof onScroll === 'function') {
        onScroll(offset, event);
      }
    });
    return _this;
  }
  createClass_default()(VirtualList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
        scrollOffset = _this$props.scrollOffset,
        scrollToIndex = _this$props.scrollToIndex;
      this.rootNode.addEventListener('scroll', this.handleScroll, {
        passive: true
      });
      if (scrollOffset != null) {
        this.scrollTo(scrollOffset);
      } else if (scrollToIndex != null) {
        this.scrollTo(this.getOffsetForIndex(scrollToIndex));
      }
    }
  }, {
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      var _this$props2 = this.props,
        estimatedItemSize = _this$props2.estimatedItemSize,
        itemCount = _this$props2.itemCount,
        itemSize = _this$props2.itemSize,
        scrollOffset = _this$props2.scrollOffset,
        scrollToAlignment = _this$props2.scrollToAlignment,
        scrollToIndex = _this$props2.scrollToIndex;
      var scrollPropsHaveChanged = nextProps.scrollToIndex !== scrollToIndex || nextProps.scrollToAlignment !== scrollToAlignment;
      var itemPropsHaveChanged = nextProps.itemCount !== itemCount || nextProps.itemSize !== itemSize || nextProps.estimatedItemSize !== estimatedItemSize;
      if (nextProps.itemSize !== itemSize) {
        this.sizeAndPositionManager.updateConfig({
          itemSizeGetter: this.itemSizeGetter(nextProps.itemSize)
        });
      }
      if (nextProps.itemCount !== itemCount || nextProps.estimatedItemSize !== estimatedItemSize) {
        this.sizeAndPositionManager.updateConfig({
          itemCount: nextProps.itemCount,
          estimatedItemSize: this.getEstimatedItemSize(nextProps)
        });
      }
      if (itemPropsHaveChanged) {
        this.recomputeSizes();
      }
      if (nextProps.scrollOffset !== scrollOffset) {
        this.setState({
          offset: nextProps.scrollOffset || 0,
          scrollChangeReason: SCROLL_CHANGE_REASON.REQUESTED
        });
      } else if (typeof nextProps.scrollToIndex === 'number' && (scrollPropsHaveChanged || itemPropsHaveChanged)) {
        this.setState({
          offset: this.getOffsetForIndex(nextProps.scrollToIndex, nextProps.scrollToAlignment, nextProps.itemCount),
          scrollChangeReason: SCROLL_CHANGE_REASON.REQUESTED
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(_, prevState) {
      var _this$state = this.state,
        offset = _this$state.offset,
        scrollChangeReason = _this$state.scrollChangeReason;
      if (prevState.offset !== offset && scrollChangeReason === SCROLL_CHANGE_REASON.REQUESTED) {
        this.scrollTo(offset);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.rootNode.removeEventListener('scroll', this.handleScroll);
    }
  }, {
    key: "scrollTo",
    value: function scrollTo(value) {
      var _this$props$scrollDir = this.props.scrollDirection,
        scrollDirection = _this$props$scrollDir === void 0 ? DIRECTION.VERTICAL : _this$props$scrollDir;
      this.rootNode[scrollProp[scrollDirection]] = value;
    }
  }, {
    key: "getOffsetForIndex",
    value: function getOffsetForIndex(index) {
      var scrollToAlignment = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.props.scrollToAlignment;
      var itemCount = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.props.itemCount;
      var _this$props$scrollDir2 = this.props.scrollDirection,
        scrollDirection = _this$props$scrollDir2 === void 0 ? DIRECTION.VERTICAL : _this$props$scrollDir2;
      if (index < 0 || index >= itemCount) {
        index = 0;
      }
      return this.sizeAndPositionManager.getUpdatedOffsetForIndex({
        align: scrollToAlignment,
        containerSize: this.props[sizeProp[scrollDirection]],
        currentOffset: this.state && this.state.offset || 0,
        targetIndex: index
      });
    }
  }, {
    key: "recomputeSizes",
    value: function recomputeSizes() {
      var startIndex = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      this.styleCache = {};
      this.sizeAndPositionManager.resetItem(startIndex);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props3 = this.props,
        estimatedItemSize = _this$props3.estimatedItemSize,
        height = _this$props3.height,
        _this$props3$overscan = _this$props3.overscanCount,
        overscanCount = _this$props3$overscan === void 0 ? 3 : _this$props3$overscan,
        renderItem = _this$props3.renderItem,
        itemCount = _this$props3.itemCount,
        itemSize = _this$props3.itemSize,
        onItemsRendered = _this$props3.onItemsRendered,
        onScroll = _this$props3.onScroll,
        _this$props3$scrollDi = _this$props3.scrollDirection,
        scrollDirection = _this$props3$scrollDi === void 0 ? DIRECTION.VERTICAL : _this$props3$scrollDi,
        scrollOffset = _this$props3.scrollOffset,
        scrollToIndex = _this$props3.scrollToIndex,
        scrollToAlignment = _this$props3.scrollToAlignment,
        stickyIndices = _this$props3.stickyIndices,
        style = _this$props3.style,
        width = _this$props3.width,
        props = objectWithoutProperties_default()(_this$props3, _excluded);
      var offset = this.state.offset;
      var _this$sizeAndPosition = this.sizeAndPositionManager.getVisibleRange({
          containerSize: this.props[sizeProp[scrollDirection]] || 0,
          offset: offset,
          overscanCount: overscanCount
        }),
        start = _this$sizeAndPosition.start,
        stop = _this$sizeAndPosition.stop;
      var items = [];
      var wrapperStyle = objectSpread2_default()(objectSpread2_default()(objectSpread2_default()({}, STYLE_WRAPPER), style), {}, {
        height: height,
        width: width
      });
      var innerStyle = objectSpread2_default()(objectSpread2_default()({}, STYLE_INNER), {}, defineProperty_default()({}, sizeProp[scrollDirection], this.sizeAndPositionManager.getTotalSize()));
      if (stickyIndices != null && stickyIndices.length !== 0) {
        stickyIndices.forEach(function (index) {
          return items.push(renderItem({
            index: index,
            style: _this2.getStyle(index, true)
          }));
        });
        if (scrollDirection === DIRECTION.HORIZONTAL) {
          innerStyle.display = 'flex';
        }
      }
      if (typeof start !== 'undefined' && typeof stop !== 'undefined') {
        for (var index = start; index <= stop; index++) {
          if (stickyIndices != null && stickyIndices.includes(index)) {
            continue;
          }
          items.push(renderItem({
            index: index,
            style: this.getStyle(index, false)
          }));
        }
        if (typeof onItemsRendered === 'function') {
          onItemsRendered({
            startIndex: start,
            stopIndex: stop
          });
        }
      }
      return /*#__PURE__*/(0,jsx_runtime.jsx)("div", objectSpread2_default()(objectSpread2_default()({
        ref: this.getRef
      }, props), {}, {
        style: wrapperStyle,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          style: innerStyle,
          children: items
        })
      }));
    }
  }, {
    key: "getNodeOffset",
    value: function getNodeOffset() {
      var _this$props$scrollDir3 = this.props.scrollDirection,
        scrollDirection = _this$props$scrollDir3 === void 0 ? DIRECTION.VERTICAL : _this$props$scrollDir3;
      return this.rootNode[scrollProp[scrollDirection]];
    }
  }, {
    key: "getEstimatedItemSize",
    value: function getEstimatedItemSize() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
      return props.estimatedItemSize || typeof props.itemSize === 'number' && props.itemSize || 50;
    }
  }, {
    key: "getSize",
    value: function getSize(index, itemSize) {
      if (typeof itemSize === 'function') {
        return itemSize(index);
      }
      return Array.isArray(itemSize) ? itemSize[index] : itemSize;
    }
  }, {
    key: "getStyle",
    value: function getStyle(index, sticky) {
      var _objectSpread3, _objectSpread4;
      var style = this.styleCache[index];
      if (style) {
        return style;
      }
      var _this$props$scrollDir4 = this.props.scrollDirection,
        scrollDirection = _this$props$scrollDir4 === void 0 ? DIRECTION.VERTICAL : _this$props$scrollDir4;
      var _this$sizeAndPosition2 = this.sizeAndPositionManager.getSizeAndPositionForIndex(index),
        size = _this$sizeAndPosition2.size,
        offset = _this$sizeAndPosition2.offset;
      return this.styleCache[index] = sticky ? objectSpread2_default()(objectSpread2_default()({}, STYLE_STICKY_ITEM), {}, (_objectSpread3 = {}, defineProperty_default()(_objectSpread3, sizeProp[scrollDirection], size), defineProperty_default()(_objectSpread3, marginProp[scrollDirection], offset), defineProperty_default()(_objectSpread3, oppositeMarginProp[scrollDirection], -(offset + size)), defineProperty_default()(_objectSpread3, "zIndex", 1), _objectSpread3)) : objectSpread2_default()(objectSpread2_default()({}, STYLE_ITEM), {}, (_objectSpread4 = {}, defineProperty_default()(_objectSpread4, sizeProp[scrollDirection], size), defineProperty_default()(_objectSpread4, positionProp[scrollDirection], offset), _objectSpread4));
    }
  }]);
  return VirtualList;
}(react.PureComponent);
defineProperty_default()(VirtualList, "defaultProps", {
  overscanCount: 3,
  scrollDirection: DIRECTION.VERTICAL,
  width: '100%'
});
defineProperty_default()(VirtualList, "propTypes", {
  estimatedItemSize: prop_types.number,
  height: prop_types.oneOfType([prop_types.number, prop_types.string]).isRequired,
  itemCount: prop_types.number.isRequired,
  itemSize: prop_types.oneOfType([prop_types.number, prop_types.array, prop_types.func]).isRequired,
  onScroll: prop_types.func,
  onItemsRendered: prop_types.func,
  overscanCount: prop_types.number,
  renderItem: prop_types.func.isRequired,
  scrollOffset: prop_types.number,
  scrollToIndex: prop_types.number,
  scrollToAlignment: prop_types.oneOf([ALIGNMENT.AUTO, ALIGNMENT.START, ALIGNMENT.CENTER, ALIGNMENT.END]),
  scrollDirection: prop_types.oneOf([DIRECTION.HORIZONTAL, DIRECTION.VERTICAL]),
  stickyIndices: prop_types.arrayOf(prop_types.number),
  style: prop_types.object,
  width: prop_types.oneOfType([prop_types.number, prop_types.string])
});


//# sourceURL=webpack:///./src/components/Widget/VirtualList/index.tsx_+_2_modules?`)},15746:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval(`/* harmony import */ var _grid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21584);

/* harmony default export */ __webpack_exports__["Z"] = (_grid__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z);

//# sourceURL=webpack:///./node_modules/antd/es/col/index.js?`)},71230:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval(`/* harmony import */ var _grid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92820);

/* harmony default export */ __webpack_exports__["Z"] = (_grid__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z);

//# sourceURL=webpack:///./node_modules/antd/es/row/index.js?`)}}]);
