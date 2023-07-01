(self.webpackChunk=self.webpackChunk||[]).push([[783],{85589:function(module,__unused_webpack_exports,__webpack_require__){eval(`(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory(__webpack_require__(67294), __webpack_require__(32452), __webpack_require__(9041), __webpack_require__(43393), __webpack_require__(36444), __webpack_require__(73935), __webpack_require__(42017), __webpack_require__(5252));
	else { var i, a; }
})(window, function(__WEBPACK_EXTERNAL_MODULE__0__, __WEBPACK_EXTERNAL_MODULE__3__, __WEBPACK_EXTERNAL_MODULE__6__, __WEBPACK_EXTERNAL_MODULE__13__, __WEBPACK_EXTERNAL_MODULE__14__, __WEBPACK_EXTERNAL_MODULE__16__, __WEBPACK_EXTERNAL_MODULE__17__, __WEBPACK_EXTERNAL_MODULE__23__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __nested_webpack_require_1471__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_1471__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__nested_webpack_require_1471__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__nested_webpack_require_1471__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__nested_webpack_require_1471__.d = function(exports, name, getter) {
/******/ 		if(!__nested_webpack_require_1471__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__nested_webpack_require_1471__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__nested_webpack_require_1471__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __nested_webpack_require_1471__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__nested_webpack_require_1471__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __nested_webpack_require_1471__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__nested_webpack_require_1471__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__nested_webpack_require_1471__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__nested_webpack_require_1471__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__nested_webpack_require_1471__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __nested_webpack_require_1471__(__nested_webpack_require_1471__.s = 39);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__3__;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),
/* 5 */
/***/ (function(module, exports, __nested_webpack_require_6017__) {

var defineProperty = __nested_webpack_require_6017__(2);

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      defineProperty(target, key, source[key]);
    });
  }

  return target;
}

module.exports = _objectSpread;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__6__;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),
/* 8 */
/***/ (function(module, exports, __nested_webpack_require_7468__) {

var _typeof = __nested_webpack_require_7468__(15);

var assertThisInitialized = __nested_webpack_require_7468__(1);

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),
/* 10 */
/***/ (function(module, exports, __nested_webpack_require_8195__) {

var setPrototypeOf = __nested_webpack_require_8195__(26);

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),
/* 12 */
/***/ (function(module, exports, __nested_webpack_require_9258__) {

var arrayWithoutHoles = __nested_webpack_require_9258__(27);

var iterableToArray = __nested_webpack_require_9258__(28);

var nonIterableSpread = __nested_webpack_require_9258__(29);

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__13__;

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__14__;

/***/ }),
/* 15 */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__16__;

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__17__;

/***/ }),
/* 18 */
/***/ (function(module, exports, __nested_webpack_require_10936__) {

var Immutable = __nested_webpack_require_10936__(13);

var KEY_SEPARATOR = '-';

function MultiDecorator(decorators) {
    this.decorators = Immutable.List(decorators);
}

/**
    Return list of decoration IDs per character

    @param {ContentBlock}
    @return {List<String>}
*/
MultiDecorator.prototype.getDecorations = function(block) {
    var decorations = Array(block.getText().length).fill(null);

    this.decorators.forEach(function(decorator, i) {
        var _decorations = decorator.getDecorations(block);

        _decorations.forEach(function(key, offset) {
            if (!key) {
                return;
            }

            key = i + KEY_SEPARATOR + key;

            decorations[offset] = key;
        });
    });

    return Immutable.List(decorations);
};

/**
    Return component to render a decoration

    @param {String}
    @return {Function}
*/
MultiDecorator.prototype.getComponentForKey = function(key) {
    var decorator = this.getDecoratorForKey(key);
    return decorator.getComponentForKey(
        this.getInnerKey(key)
    );
};

/**
    Return props to render a decoration

    @param {String}
    @return {Object}
*/
MultiDecorator.prototype.getPropsForKey = function(key) {
    var decorator = this.getDecoratorForKey(key);
    return decorator.getPropsForKey(
        this.getInnerKey(key)
    );
};

/**
    Return a decorator for a specific key

    @param {String}
    @return {Decorator}
*/
MultiDecorator.prototype.getDecoratorForKey = function(key) {
    var parts = key.split(KEY_SEPARATOR);
    var index = Number(parts[0]);

    return this.decorators.get(index);
};

/**
    Return inner key for a decorator

    @param {String}
    @return {String}
*/
MultiDecorator.prototype.getInnerKey = function(key) {
    var parts = key.split(KEY_SEPARATOR);
    return parts.slice(1).join(KEY_SEPARATOR);
};

module.exports = MultiDecorator;


/***/ }),
/* 19 */
/***/ (function(module, exports, __nested_webpack_require_12892__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule CharacterMetadata
 * @format
 * 
 */



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _require = __nested_webpack_require_12892__(13),
    Map = _require.Map,
    OrderedSet = _require.OrderedSet,
    Record = _require.Record;

// Immutable.map is typed such that the value for every key in the map
// must be the same type


var EMPTY_SET = OrderedSet();

var defaultRecord = {
  style: EMPTY_SET,
  entity: null
};

var CharacterMetadataRecord = Record(defaultRecord);

var CharacterMetadata = function (_CharacterMetadataRec) {
  _inherits(CharacterMetadata, _CharacterMetadataRec);

  function CharacterMetadata() {
    _classCallCheck(this, CharacterMetadata);

    return _possibleConstructorReturn(this, _CharacterMetadataRec.apply(this, arguments));
  }

  CharacterMetadata.prototype.getStyle = function getStyle() {
    return this.get('style');
  };

  CharacterMetadata.prototype.getEntity = function getEntity() {
    return this.get('entity');
  };

  CharacterMetadata.prototype.hasStyle = function hasStyle(style) {
    return this.getStyle().includes(style);
  };

  CharacterMetadata.applyStyle = function applyStyle(record, style) {
    var withStyle = record.set('style', record.getStyle().add(style));
    return CharacterMetadata.create(withStyle);
  };

  CharacterMetadata.removeStyle = function removeStyle(record, style) {
    var withoutStyle = record.set('style', record.getStyle().remove(style));
    return CharacterMetadata.create(withoutStyle);
  };

  CharacterMetadata.applyEntity = function applyEntity(record, entityKey) {
    var withEntity = record.getEntity() === entityKey ? record : record.set('entity', entityKey);
    return CharacterMetadata.create(withEntity);
  };

  /**
   * Use this function instead of the \`CharacterMetadata\` constructor.
   * Since most content generally uses only a very small number of
   * style/entity permutations, we can reuse these objects as often as
   * possible.
   */


  CharacterMetadata.create = function create(config) {
    if (!config) {
      return EMPTY;
    }

    var defaultConfig = {
      style: EMPTY_SET,
      entity: null
    };

    // Fill in unspecified properties, if necessary.
    var configMap = Map(defaultConfig).merge(config);

    var existing = pool.get(configMap);
    if (existing) {
      return existing;
    }

    var newCharacter = new CharacterMetadata(configMap);
    pool = pool.set(configMap, newCharacter);
    return newCharacter;
  };

  return CharacterMetadata;
}(CharacterMetadataRecord);

var EMPTY = new CharacterMetadata();
var pool = Map([[Map(defaultRecord), EMPTY]]);

CharacterMetadata.EMPTY = EMPTY;

module.exports = CharacterMetadata;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule findRangesImmutable
 * @format
 * 
 */



/**
 * Search through an array to find contiguous stretches of elements that
 * match a specified filter function.
 *
 * When ranges are found, execute a specified \`found\` function to supply
 * the values to the caller.
 */
function findRangesImmutable(haystack, areEqualFn, filterFn, foundFn) {
  if (!haystack.size) {
    return;
  }

  var cursor = 0;

  haystack.reduce(function (value, nextValue, nextIndex) {
    if (!areEqualFn(value, nextValue)) {
      if (filterFn(value)) {
        foundFn(cursor, nextIndex);
      }
      cursor = nextIndex;
    }
    return nextValue;
  });

  filterFn(haystack.last()) && foundFn(cursor, haystack.count());
}

module.exports = findRangesImmutable;

/***/ }),
/* 21 */
/***/ (function(module, exports, __nested_webpack_require_17977__) {

var objectWithoutPropertiesLoose = __nested_webpack_require_17977__(25);

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

module.exports = _objectWithoutProperties;

/***/ }),
/* 22 */
/***/ (function(module, exports, __nested_webpack_require_18702__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule getFragmentFromSelection
 * @format
 * 
 */



var getContentStateFragment = __nested_webpack_require_18702__(30);

function getFragmentFromSelection(editorState) {
  var selectionState = editorState.getSelection();

  if (selectionState.isCollapsed()) {
    return null;
  }

  return getContentStateFragment(editorState.getCurrentContent(), selectionState);
}

module.exports = getFragmentFromSelection;

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__23__;

/***/ }),
/* 24 */
/***/ (function(module, exports, __nested_webpack_require_19619__) {

var arrayWithHoles = __nested_webpack_require_19619__(36);

var iterableToArrayLimit = __nested_webpack_require_19619__(37);

var nonIterableRest = __nested_webpack_require_19619__(38);

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),
/* 25 */
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),
/* 26 */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),
/* 27 */
/***/ (function(module, exports) {

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

module.exports = _arrayWithoutHoles;

/***/ }),
/* 28 */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),
/* 29 */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

module.exports = _nonIterableSpread;

/***/ }),
/* 30 */
/***/ (function(module, exports, __nested_webpack_require_21475__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule getContentStateFragment
 * @format
 * 
 */



var randomizeBlockMapKeys = __nested_webpack_require_21475__(31);
var removeEntitiesAtEdges = __nested_webpack_require_21475__(34);

var getContentStateFragment = function getContentStateFragment(contentState, selectionState) {
  var startKey = selectionState.getStartKey();
  var startOffset = selectionState.getStartOffset();
  var endKey = selectionState.getEndKey();
  var endOffset = selectionState.getEndOffset();

  // Edge entities should be stripped to ensure that we don't preserve
  // invalid partial entities when the fragment is reused. We do, however,
  // preserve entities that are entirely within the selection range.
  var contentWithoutEdgeEntities = removeEntitiesAtEdges(contentState, selectionState);

  var blockMap = contentWithoutEdgeEntities.getBlockMap();
  var blockKeys = blockMap.keySeq();
  var startIndex = blockKeys.indexOf(startKey);
  var endIndex = blockKeys.indexOf(endKey) + 1;

  return randomizeBlockMapKeys(blockMap.slice(startIndex, endIndex).map(function (block, blockKey) {
    var text = block.getText();
    var chars = block.getCharacterList();

    if (startKey === endKey) {
      return block.merge({
        text: text.slice(startOffset, endOffset),
        characterList: chars.slice(startOffset, endOffset)
      });
    }

    if (blockKey === startKey) {
      return block.merge({
        text: text.slice(startOffset),
        characterList: chars.slice(startOffset)
      });
    }

    if (blockKey === endKey) {
      return block.merge({
        text: text.slice(0, endOffset),
        characterList: chars.slice(0, endOffset)
      });
    }

    return block;
  }));
};

module.exports = getContentStateFragment;

/***/ }),
/* 31 */
/***/ (function(module, exports, __nested_webpack_require_23590__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule randomizeBlockMapKeys
 * @format
 * 
 */



var ContentBlockNode = __nested_webpack_require_23590__(32);
var Immutable = __nested_webpack_require_23590__(13);

var generateRandomKey = __nested_webpack_require_23590__(33);

var OrderedMap = Immutable.OrderedMap;


var randomizeContentBlockNodeKeys = function randomizeContentBlockNodeKeys(blockMap) {
  var newKeysRef = {};

  // we keep track of root blocks in order to update subsequent sibling links
  var lastRootBlock = void 0;

  return OrderedMap(blockMap.withMutations(function (blockMapState) {
    blockMapState.forEach(function (block, index) {
      var oldKey = block.getKey();
      var nextKey = block.getNextSiblingKey();
      var prevKey = block.getPrevSiblingKey();
      var childrenKeys = block.getChildKeys();
      var parentKey = block.getParentKey();

      // new key that we will use to build linking
      var key = generateRandomKey();

      // we will add it here to re-use it later
      newKeysRef[oldKey] = key;

      if (nextKey) {
        var nextBlock = blockMapState.get(nextKey);
        if (nextBlock) {
          blockMapState.setIn([nextKey, 'prevSibling'], key);
        } else {
          // this can happen when generating random keys for fragments
          blockMapState.setIn([oldKey, 'nextSibling'], null);
        }
      }

      if (prevKey) {
        var prevBlock = blockMapState.get(prevKey);
        if (prevBlock) {
          blockMapState.setIn([prevKey, 'nextSibling'], key);
        } else {
          // this can happen when generating random keys for fragments
          blockMapState.setIn([oldKey, 'prevSibling'], null);
        }
      }

      if (parentKey && blockMapState.get(parentKey)) {
        var parentBlock = blockMapState.get(parentKey);
        var parentChildrenList = parentBlock.getChildKeys();
        blockMapState.setIn([parentKey, 'children'], parentChildrenList.set(parentChildrenList.indexOf(block.getKey()), key));
      } else {
        // blocks will then be treated as root block nodes
        blockMapState.setIn([oldKey, 'parent'], null);

        if (lastRootBlock) {
          blockMapState.setIn([lastRootBlock.getKey(), 'nextSibling'], key);
          blockMapState.setIn([oldKey, 'prevSibling'], newKeysRef[lastRootBlock.getKey()]);
        }

        lastRootBlock = blockMapState.get(oldKey);
      }

      childrenKeys.forEach(function (childKey) {
        var childBlock = blockMapState.get(childKey);
        if (childBlock) {
          blockMapState.setIn([childKey, 'parent'], key);
        } else {
          blockMapState.setIn([oldKey, 'children'], block.getChildKeys().filter(function (child) {
            return child !== childKey;
          }));
        }
      });
    });
  }).toArray().map(function (block) {
    return [newKeysRef[block.getKey()], block.set('key', newKeysRef[block.getKey()])];
  }));
};

var randomizeContentBlockKeys = function randomizeContentBlockKeys(blockMap) {
  return OrderedMap(blockMap.toArray().map(function (block) {
    var key = generateRandomKey();
    return [key, block.set('key', key)];
  }));
};

var randomizeBlockMapKeys = function randomizeBlockMapKeys(blockMap) {
  var isTreeBasedBlockMap = blockMap.first() instanceof ContentBlockNode;

  if (!isTreeBasedBlockMap) {
    return randomizeContentBlockKeys(blockMap);
  }

  return randomizeContentBlockNodeKeys(blockMap);
};

module.exports = randomizeBlockMapKeys;

/***/ }),
/* 32 */
/***/ (function(module, exports, __nested_webpack_require_27394__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ContentBlockNode
 * @format
 * 
 *
 * This file is a fork of ContentBlock adding support for nesting references by
 * providing links to children, parent, prevSibling, and nextSibling.
 *
 * This is unstable and not part of the public API and should not be used by
 * production systems. This file may be update/removed without notice.
 */



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CharacterMetadata = __nested_webpack_require_27394__(19);
var Immutable = __nested_webpack_require_27394__(13);

var findRangesImmutable = __nested_webpack_require_27394__(20);

var List = Immutable.List,
    Map = Immutable.Map,
    OrderedSet = Immutable.OrderedSet,
    Record = Immutable.Record,
    Repeat = Immutable.Repeat;


var EMPTY_SET = OrderedSet();

var defaultRecord = {
  parent: null,
  characterList: List(),
  data: Map(),
  depth: 0,
  key: '',
  text: '',
  type: 'unstyled',
  children: List(),
  prevSibling: null,
  nextSibling: null
};

var haveEqualStyle = function haveEqualStyle(charA, charB) {
  return charA.getStyle() === charB.getStyle();
};

var haveEqualEntity = function haveEqualEntity(charA, charB) {
  return charA.getEntity() === charB.getEntity();
};

var decorateCharacterList = function decorateCharacterList(config) {
  if (!config) {
    return config;
  }

  var characterList = config.characterList,
      text = config.text;


  if (text && !characterList) {
    config.characterList = List(Repeat(CharacterMetadata.EMPTY, text.length));
  }

  return config;
};

var ContentBlockNode = function (_Record) {
  _inherits(ContentBlockNode, _Record);

  function ContentBlockNode() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultRecord;

    _classCallCheck(this, ContentBlockNode);

    return _possibleConstructorReturn(this, _Record.call(this, decorateCharacterList(props)));
  }

  ContentBlockNode.prototype.getKey = function getKey() {
    return this.get('key');
  };

  ContentBlockNode.prototype.getType = function getType() {
    return this.get('type');
  };

  ContentBlockNode.prototype.getText = function getText() {
    return this.get('text');
  };

  ContentBlockNode.prototype.getCharacterList = function getCharacterList() {
    return this.get('characterList');
  };

  ContentBlockNode.prototype.getLength = function getLength() {
    return this.getText().length;
  };

  ContentBlockNode.prototype.getDepth = function getDepth() {
    return this.get('depth');
  };

  ContentBlockNode.prototype.getData = function getData() {
    return this.get('data');
  };

  ContentBlockNode.prototype.getInlineStyleAt = function getInlineStyleAt(offset) {
    var character = this.getCharacterList().get(offset);
    return character ? character.getStyle() : EMPTY_SET;
  };

  ContentBlockNode.prototype.getEntityAt = function getEntityAt(offset) {
    var character = this.getCharacterList().get(offset);
    return character ? character.getEntity() : null;
  };

  ContentBlockNode.prototype.getChildKeys = function getChildKeys() {
    return this.get('children');
  };

  ContentBlockNode.prototype.getParentKey = function getParentKey() {
    return this.get('parent');
  };

  ContentBlockNode.prototype.getPrevSiblingKey = function getPrevSiblingKey() {
    return this.get('prevSibling');
  };

  ContentBlockNode.prototype.getNextSiblingKey = function getNextSiblingKey() {
    return this.get('nextSibling');
  };

  ContentBlockNode.prototype.findStyleRanges = function findStyleRanges(filterFn, callback) {
    findRangesImmutable(this.getCharacterList(), haveEqualStyle, filterFn, callback);
  };

  ContentBlockNode.prototype.findEntityRanges = function findEntityRanges(filterFn, callback) {
    findRangesImmutable(this.getCharacterList(), haveEqualEntity, filterFn, callback);
  };

  return ContentBlockNode;
}(Record(defaultRecord));

module.exports = ContentBlockNode;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule generateRandomKey
 * @format
 * 
 */



var seenKeys = {};
var MULTIPLIER = Math.pow(2, 24);

function generateRandomKey() {
  var key = void 0;
  while (key === undefined || seenKeys.hasOwnProperty(key) || !isNaN(+key)) {
    key = Math.floor(Math.random() * MULTIPLIER).toString(32);
  }
  seenKeys[key] = true;
  return key;
}

module.exports = generateRandomKey;

/***/ }),
/* 34 */
/***/ (function(module, exports, __nested_webpack_require_33291__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule removeEntitiesAtEdges
 * @format
 * 
 */



var CharacterMetadata = __nested_webpack_require_33291__(19);

var findRangesImmutable = __nested_webpack_require_33291__(20);
var invariant = __nested_webpack_require_33291__(35);

function removeEntitiesAtEdges(contentState, selectionState) {
  var blockMap = contentState.getBlockMap();
  var entityMap = contentState.getEntityMap();

  var updatedBlocks = {};

  var startKey = selectionState.getStartKey();
  var startOffset = selectionState.getStartOffset();
  var startBlock = blockMap.get(startKey);
  var updatedStart = removeForBlock(entityMap, startBlock, startOffset);

  if (updatedStart !== startBlock) {
    updatedBlocks[startKey] = updatedStart;
  }

  var endKey = selectionState.getEndKey();
  var endOffset = selectionState.getEndOffset();
  var endBlock = blockMap.get(endKey);
  if (startKey === endKey) {
    endBlock = updatedStart;
  }

  var updatedEnd = removeForBlock(entityMap, endBlock, endOffset);

  if (updatedEnd !== endBlock) {
    updatedBlocks[endKey] = updatedEnd;
  }

  if (!Object.keys(updatedBlocks).length) {
    return contentState.set('selectionAfter', selectionState);
  }

  return contentState.merge({
    blockMap: blockMap.merge(updatedBlocks),
    selectionAfter: selectionState
  });
}

function getRemovalRange(characters, key, offset) {
  var removalRange;
  findRangesImmutable(characters, function (a, b) {
    return a.getEntity() === b.getEntity();
  }, function (element) {
    return element.getEntity() === key;
  }, function (start, end) {
    if (start <= offset && end >= offset) {
      removalRange = { start: start, end: end };
    }
  });
  !(typeof removalRange === 'object') ?   false ? 0 : invariant(false) : void 0;
  return removalRange;
}

function removeForBlock(entityMap, block, offset) {
  var chars = block.getCharacterList();
  var charBefore = offset > 0 ? chars.get(offset - 1) : undefined;
  var charAfter = offset < chars.count() ? chars.get(offset) : undefined;
  var entityBeforeCursor = charBefore ? charBefore.getEntity() : undefined;
  var entityAfterCursor = charAfter ? charAfter.getEntity() : undefined;

  if (entityAfterCursor && entityAfterCursor === entityBeforeCursor) {
    var entity = entityMap.__get(entityAfterCursor);
    if (entity.getMutability() !== 'MUTABLE') {
      var _getRemovalRange = getRemovalRange(chars, entityAfterCursor, offset),
          start = _getRemovalRange.start,
          end = _getRemovalRange.end;

      var current;
      while (start < end) {
        current = chars.get(start);
        chars = chars.set(start, CharacterMetadata.applyEntity(current, null));
        start++;
      }
      return block.set('characterList', chars);
    }
  }

  return block;
}

module.exports = removeEntitiesAtEdges;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (false) {}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;

/***/ }),
/* 36 */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),
/* 37 */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),
/* 38 */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

module.exports = _nonIterableRest;

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_38800__) {

"use strict";
__nested_webpack_require_38800__.r(__webpack_exports__);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/typeof.js
var helpers_typeof = __nested_webpack_require_38800__(15);
var typeof_default = /*#__PURE__*/__nested_webpack_require_38800__.n(helpers_typeof);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/objectSpread.js
var objectSpread = __nested_webpack_require_38800__(5);
var objectSpread_default = /*#__PURE__*/__nested_webpack_require_38800__.n(objectSpread);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/objectWithoutProperties.js
var objectWithoutProperties = __nested_webpack_require_38800__(21);
var objectWithoutProperties_default = /*#__PURE__*/__nested_webpack_require_38800__.n(objectWithoutProperties);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __nested_webpack_require_38800__(4);
var classCallCheck_default = /*#__PURE__*/__nested_webpack_require_38800__.n(classCallCheck);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/createClass.js
var createClass = __nested_webpack_require_38800__(7);
var createClass_default = /*#__PURE__*/__nested_webpack_require_38800__.n(createClass);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __nested_webpack_require_38800__(8);
var possibleConstructorReturn_default = /*#__PURE__*/__nested_webpack_require_38800__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __nested_webpack_require_38800__(9);
var getPrototypeOf_default = /*#__PURE__*/__nested_webpack_require_38800__.n(getPrototypeOf);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/assertThisInitialized.js
var assertThisInitialized = __nested_webpack_require_38800__(1);
var assertThisInitialized_default = /*#__PURE__*/__nested_webpack_require_38800__.n(assertThisInitialized);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/inherits.js
var inherits = __nested_webpack_require_38800__(10);
var inherits_default = /*#__PURE__*/__nested_webpack_require_38800__.n(inherits);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __nested_webpack_require_38800__(2);
var defineProperty_default = /*#__PURE__*/__nested_webpack_require_38800__.n(defineProperty);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/toConsumableArray.js
var toConsumableArray = __nested_webpack_require_38800__(12);
var toConsumableArray_default = /*#__PURE__*/__nested_webpack_require_38800__.n(toConsumableArray);

// EXTERNAL MODULE: ../node_modules/draft-js/dist/Draft.css
var Draft = __nested_webpack_require_38800__(40);

// EXTERNAL MODULE: ./assets/scss/_base.scss
var _base = __nested_webpack_require_38800__(42);

// EXTERNAL MODULE: external "react"
var external_react_ = __nested_webpack_require_38800__(0);
var external_react_default = /*#__PURE__*/__nested_webpack_require_38800__.n(external_react_);

// CONCATENATED MODULE: ./languages/en.js
/* harmony default export */ var en = ({
  base: {
    remove: 'Remove',
    cancel: 'Cancel',
    confirm: 'Confirm',
    inert: 'Insert',
    width: 'Width',
    height: 'Height'
  },
  controls: {
    clear: 'Clear',
    undo: 'Undo',
    redo: 'Redo',
    fontSize: 'Font Size',
    color: 'Color',
    textColor: 'Text',
    tempColors: 'Temp Colors',
    backgroundColor: 'Background',
    bold: 'Bold',
    lineHeight: 'Line Height',
    letterSpacing: 'Letter Spacing',
    textIndent: 'Text Indent',
    increaseIndent: 'Increase Indent',
    decreaseIndent: 'Decrease Indent',
    italic: 'Italic',
    underline: 'Underline',
    strikeThrough: 'Strike Through',
    fontFamily: 'Font Family',
    textAlign: 'Text Alignment',
    alignLeft: 'Left Alignment',
    alignCenter: 'Center Alignment',
    alignRight: 'Right Alignment',
    alignJustify: 'Justify Alignment',
    floatLeft: 'Left Float',
    floatRight: 'Right Float',
    superScript: 'Super Script',
    subScript: 'Sub Script',
    removeStyles: 'Remove Styles',
    headings: 'Headings',
    header: 'Header',
    normal: 'Normal',
    orderedList: 'Ordered List',
    unorderedList: 'Unordered List',
    blockQuote: 'Quote',
    code: 'Code',
    link: 'Link',
    unlink: 'Unlink',
    hr: 'Horizontal Line',
    media: 'Media',
    mediaLibirary: 'Media Library',
    emoji: 'Emoji',
    fullscreen: 'Fullscreen',
    exitFullscreen: 'Exit Fullscreen'
  },
  linkEditor: {
    textInputPlaceHolder: 'Input link text',
    linkInputPlaceHolder: 'Input link URL',
    inputWithEnterPlaceHolder: 'Input link URL and press Enter',
    openInNewWindow: 'Open in new window',
    removeLink: 'Remove Link'
  },
  audioPlayer: {
    title: 'Play Audio'
  },
  videoPlayer: {
    title: 'Play Video',
    embedTitle: 'Embed Media'
  },
  media: {
    image: 'Image',
    video: 'Video',
    audio: 'Audio',
    embed: 'Embed'
  }
});
// CONCATENATED MODULE: ./languages/zh.js
/* harmony default export */ var zh = ({
  base: {
    remove: '\u5220\u9664',
    cancel: '\u53D6\u6D88',
    confirm: '\u786E\u5B9A',
    inert: '\u63D2\u5165',
    width: '\u5BBD\u5EA6',
    height: '\u9AD8\u5EA6'
  },
  controls: {
    clear: '\u6E05\u9664\u5185\u5BB9',
    undo: '\u64A4\u9500',
    redo: '\u91CD\u505A',
    fontSize: '\u5B57\u53F7',
    lineHeight: '\u884C\u9AD8',
    letterSpacing: '\u5B57\u95F4\u8DDD',
    textIndent: '\u6BB5\u843D\u7F29\u8FDB',
    increaseIndent: '\u589E\u52A0\u7F29\u8FDB',
    decreaseIndent: '\u51CF\u5C11\u7F29\u8FDB',
    border: '\u8FB9\u6846',
    color: '\u989C\u8272',
    textColor: '\u6587\u5B57\u989C\u8272',
    backgroundColor: '\u80CC\u666F\u989C\u8272',
    tempColors: '\u4E34\u65F6\u989C\u8272',
    bold: '\u52A0\u7C97',
    italic: '\u659C\u4F53',
    underline: '\u4E0B\u5212\u7EBF',
    strikeThrough: '\u5220\u9664\u7EBF',
    fontFamily: '\u5B57\u4F53',
    textAlign: '\u6587\u672C\u5BF9\u9F50',
    alignLeft: '\u5C45\u5DE6',
    alignCenter: '\u5C45\u4E2D',
    alignRight: '\u5C45\u53F3',
    alignJustify: '\u4E24\u7AEF',
    floatLeft: '\u5DE6\u6D6E\u52A8',
    floatRight: '\u53F3\u6D6E\u52A8',
    superScript: '\u4E0A\u6807',
    subScript: '\u4E0B\u6807',
    removeStyles: '\u6E05\u9664\u6837\u5F0F',
    headings: '\u6807\u9898',
    header: '\u6807\u9898',
    normal: '\u5E38\u89C4',
    orderedList: '\u6709\u5E8F\u5217\u8868',
    unorderedList: '\u65E0\u5E8F\u5217\u8868',
    blockQuote: '\u5F15\u7528',
    code: '\u4EE3\u7801',
    link: '\u94FE\u63A5',
    unlink: '\u6E05\u9664\u94FE\u63A5',
    hr: '\u6C34\u5E73\u7EBF',
    media: '\u5A92\u4F53',
    mediaLibirary: '\u5A92\u4F53\u5E93',
    emoji: '\u5C0F\u8868\u60C5',
    fullscreen: '\u5168\u5C4F',
    exitFullscreen: '\u9000\u51FA\u5168\u5C4F'
  },
  linkEditor: {
    textInputPlaceHolder: '\u8F93\u5165\u94FE\u63A5\u6587\u5B57',
    linkInputPlaceHolder: '\u8F93\u5165\u94FE\u63A5\u5730\u5740',
    inputWithEnterPlaceHolder: '\u8F93\u5165\u94FE\u63A5\u5730\u5740\u5E76\u56DE\u8F66',
    openInNewWindow: '\u5728\u65B0\u7A97\u53E3\u6253\u5F00',
    removeLink: '\u79FB\u9664\u94FE\u63A5'
  },
  audioPlayer: {
    title: '\u64AD\u653E\u97F3\u9891\u6587\u4EF6'
  },
  videoPlayer: {
    title: '\u64AD\u653E\u89C6\u9891\u6587\u4EF6',
    embedTitle: '\u5D4C\u5165\u5F0F\u5A92\u4F53'
  },
  media: {
    image: '\u56FE\u50CF',
    video: '\u89C6\u9891',
    audio: '\u97F3\u9891',
    embed: '\u5D4C\u5165\u5F0F\u5A92\u4F53'
  }
});
// CONCATENATED MODULE: ./languages/zh-hant.js
/* harmony default export */ var zh_hant = ({
  base: {
    remove: '\u522A\u9664',
    cancel: '\u53D6\u6D88',
    confirm: '\u78BA\u5B9A',
    inert: '\u63D2\u5165',
    width: '\u5BEC\u5EA6',
    height: '\u9AD8\u5EA6'
  },
  controls: {
    clear: '\u6E05\u9664\u5185\u5BB9',
    undo: '\u5FA9\u539F',
    redo: '\u53D6\u6D88\u5FA9\u539F',
    fontSize: '\u5B57\u578B\u5927\u5C0F',
    color: '\u984F\u8272',
    textColor: '\u6587\u5B57\u984F\u8272',
    backgroundColor: '\u80CC\u666F\u984F\u8272',
    tempColors: '\u81E8\u6642\u984F\u8272',
    bold: '\u7C97\u9AD4',
    lineHeight: '\u884C\u9AD8',
    letterSpacing: '\u5B57\u9593\u8DDD',
    textIndent: '\u6BB5\u843D\u7E2E\u9032',
    increaseIndent: '\u589E\u52A0\u7E2E\u9032',
    decreaseIndent: '\u51CF\u5C11\u7E2E\u9032',
    border: '\u908A\u6846',
    italic: '\u659C\u9AD4',
    underline: '\u5E95\u7DDA',
    strikeThrough: '\u522A\u9664\u7DDA',
    fontFamily: '\u5B57\u9AD4',
    textAlign: '\u6587\u5B57\u5C0D\u9F4A',
    alignLeft: '\u7F6E\u5DE6',
    alignCenter: '\u7F6E\u4E2D',
    alignRight: '\u7F6E\u53F3',
    alignJustify: '\u5DE6\u53F3\u5C0D\u9F4A',
    floatLeft: '\u5DE6\u6D6E\u52D5',
    floatRight: '\u53F3\u6D6E\u52D5',
    superScript: '\u4E0A\u6A19',
    subScript: '\u4E0B\u6A19',
    removeStyles: '\u6E05\u9664\u6A23\u5F0F',
    headings: '\u6A19\u984C',
    header: '\u6A19\u984C',
    normal: '\u5E38\u898F',
    orderedList: '\u6709\u5E8F\u5217\u8868',
    unorderedList: '\u7121\u5E8F\u5217\u8868',
    blockQuote: '\u5F15\u7528',
    code: '\u7A0B\u5F0F\u78BC',
    link: '\u9023\u7D50',
    unlink: '\u6E05\u9664\u9023\u7D50',
    hr: '\u6C34\u5E73\u7DDA',
    media: '\u5A92\u9AD4',
    mediaLibirary: '\u5A92\u9AD4\u5EAB',
    emoji: '\u8868\u60C5\u7B26\u865F',
    fullscreen: '\u5168\u87A2\u5E55',
    exitFullscreen: '\u9000\u51FA\u5168\u87A2\u5E55'
  },
  linkEditor: {
    textInputPlaceHolder: '\u8F38\u5165\u9023\u7D50\u6587\u5B57',
    linkInputPlaceHolder: '\u8F38\u5165\u9023\u7D50\u5730\u5740',
    inputWithEnterPlaceHolder: '\u8F38\u5165\u9023\u7D50\u5730\u5740\u4E26\u63DB\u884C',
    openInNewWindow: '\u5728\u65B0\u8996\u7A97\u6253\u958B',
    removeLink: '\u79FB\u9664\u9023\u7D50'
  },
  audioPlayer: {
    title: '\u64AD\u653E\u97F3\u6A94'
  },
  videoPlayer: {
    title: '\u64AD\u653E\u5F71\u7247',
    embedTitle: '\u5D4C\u5165\u5F0F\u5A92\u9AD4'
  },
  media: {
    image: '\u5716\u7247',
    video: '\u5F71\u7247',
    audio: '\u97F3\u6A94',
    embed: '\u5D4C\u5165\u5F0F\u5A92\u9AD4'
  }
});
// CONCATENATED MODULE: ./languages/pl.js
/* harmony default export */ var pl = ({
  base: {
    remove: 'Usu\u0144',
    cancel: 'Anuluj',
    confirm: 'Potwierd\u017A',
    inert: 'Wstaw',
    width: 'Szeroko\u015B\u0107',
    height: 'Wysoko\u015B\u0107'
  },
  controls: {
    clear: 'Wyczy\u015B\u0107',
    undo: 'Cofnij',
    redo: 'Przywr\xF3\u0107',
    fontSize: 'Wielko\u015B\u0107',
    color: 'Kolor',
    textColor: 'Kolor tekstu',
    tempColors: 'Kolory',
    backgroundColor: 'T\u0142o',
    bold: 'Pogrubienie',
    lineHeight: 'Wysoko\u015B\u0107 linii',
    letterSpacing: 'Odst\u0119p znak\xF3w',
    textIndent: 'Wci\u0119cie tekstu',
    increaseIndent: 'Zwi\u0119ksz wci\u0119cie',
    decreaseIndent: 'Zmniejsz wci\u0119cie',
    italic: 'Italiki',
    underline: 'Podkre\u015Blenie',
    strikeThrough: 'Przekre\u015Blenie',
    fontFamily: 'Czcionka',
    textAlign: 'Wyr\xF3wnanie tekstu',
    alignLeft: 'Do lewej',
    alignCenter: 'Wycentruj',
    alignRight: 'Do prawej',
    alignJustify: 'Wyjustuj',
    floatLeft: 'Do lewej',
    floatRight: 'Do prawej',
    superScript: 'Superskrypt',
    subScript: 'Subskrypt',
    removeStyles: 'Usu\u0144 stylowanie',
    headings: 'Nag\u0142\xF3wki',
    header: 'Nag\u0142\xF3wek',
    normal: 'Normalny',
    orderedList: 'Lista uporz\u0105dkowana',
    unorderedList: 'Lista nieuporz\u0105dkowana',
    blockQuote: 'Cytat',
    code: 'Kod',
    link: 'Link',
    unlink: 'Usu\u0144 link',
    hr: 'Linia pozioma',
    media: 'Media',
    mediaLibirary: 'Biblioteka medi\xF3w',
    emoji: 'Emoji'
  },
  linkEditor: {
    textInputPlaceHolder: 'Wpisz tekst linku',
    linkInputPlaceHolder: 'Wpisz Adres URL',
    inputWithEnterPlaceHolder: 'Wpisz adres URL i naci\u015Bnij Enter',
    openInNewWindow: 'Otw\xF3rz w nowym oknie',
    removeLink: 'Usu\u0144 link'
  },
  audioPlayer: {
    title: 'Odtw\xF3rz audio'
  },
  videoPlayer: {
    title: 'Odtw\xF3rz wideo',
    embedTitle: 'Tytu\u0142'
  },
  media: {
    image: 'Obraz',
    video: 'Wideo',
    audio: 'Audio',
    embed: 'Obiekt osadzony'
  }
});
// CONCATENATED MODULE: ./languages/kr.js
/* harmony default export */ var kr = ({
  base: {
    remove: '\uC0AD\uC81C',
    cancel: '\uCDE8\uC18C',
    confirm: '\uACB0\uC815',
    inert: '\uC0BD\uC785',
    width: '\uB108\uBE44',
    height: '\uB192\uC774'
  },
  controls: {
    clear: '\uCF58\uD150\uCE20\uC9C0\uC6B0\uAE30',
    undo: '\uCDE8\uC18C',
    redo: '\uB2E4\uC2DC\uD558\uAE30',
    fontSize: '\uAE00\uC790\uD06C\uAE30',
    lineHeight: '\uD589\uB192\uC774',
    letterSpacing: '\uB2E8\uC5B4\uAC04\uACA9',
    textIndent: '\uB2E8\uB77D\uB4E4\uC5EC\uC4F0\uAE30',
    increaseIndent: '\uB4E4\uC5EC\uC4F0\uAE30\uB298\uB9AC\uAE30',
    decreaseIndent: '\uB4E4\uC5EC\uC4F0\uAE30\uC904\uC774\uAE30',
    border: '\uAD6D\uACBD',
    color: '\uC0C9\uC0C1',
    textColor: '\uD14D\uC2A4\uD2B8\uC0C9\uC0C1',
    backgroundColor: '\uBC30\uACBD\uC0C9\uC0C1',
    tempColors: '\uC784\uC2DC\uC0C9',
    bold: '\uAD75\uAC8C',
    italic: '\uAE30\uC6B8\uC784\uAF34',
    underline: '\uBC11\uC904',
    strikeThrough: '\uCDE8\uC18C\uC120',
    fontFamily: '\uAE00\uAF34',
    textAlign: '\uD14D\uC2A4\uD2B8\uC815\uB82C',
    alignLeft: '\uC67C\uCABD',
    alignCenter: '\uC911\uC2EC',
    alignRight: '\uC624\uB978\uCABD',
    alignJustify: '\uC591\uCABD\uB05D',
    floatLeft: '\uB5A0\uB2E4\uB2C8\uAE30',
    floatRight: '\uC624\uB978\uCABD\uBD80\uB3D9',
    superScript: '\uC704\uCCA8\uC790',
    subScript: '\uCCA8\uC790',
    removeStyles: '\uC2A4\uD0C0\uC77C\uC9C0\uC6B0\uAE30',
    headings: '\uC81C\uBAA9',
    header: '\uC81C\uBAA9',
    normal: '\uC7AC\uB798\uC2DD',
    orderedList: '\uC21C\uC11C\uAC00\uC9C0\uC815\uB41C\uBAA9\uB85D',
    unorderedList: '\uC815\uB82C\uB418\uC9C0\uC54A\uC740\uBAA9\uB85D',
    blockQuote: '\uCC38\uACE0\uBB38\uD5CC',
    code: '\uCF54\uB4DC',
    link: '\uB9C1\uD06C',
    unlink: '\uB9C1\uD06C\uC0AD\uC81C',
    hr: '\uC218\uD3C9\uC120',
    media: '\uBBF8\uB514\uC5B4',
    mediaLibirary: '\uBBF8\uB514\uC5B4\uB77C\uC774\uBE0C\uB7EC\uB9AC',
    emoji: '\uC791\uC740\uD45C\uD604',
    fullscreen: '\uC804\uCCB4\uD654\uBA74',
    exitFullscreen: '\uC804\uCCB4\uD654\uBA74\uC885\uB8CC'
  },
  linkEditor: {
    textInputPlaceHolder: '\uB9C1\uD06C\uD14D\uC2A4\uD2B8\uC785\uB825',
    linkInputPlaceHolder: '\uB9C1\uD06C\uC8FC\uC18C\uC785\uB825',
    inputWithEnterPlaceHolder: '\uB9C1\uD06C\uC8FC\uC18C\uC785\uB825.',
    openInNewWindow: '\uC0C8\uCC3D\uC5F4\uAE30',
    removeLink: '\uB9C1\uD06C\uC0AD\uC81C'
  },
  audioPlayer: {
    title: '\uC624\uB514\uC624\uD30C\uC77C\uC7AC\uC0DD'
  },
  videoPlayer: {
    title: '\uBE44\uB514\uC624\uD30C\uC77C\uC7AC\uC0DD',
    embedTitle: '\uC784\uBCA0\uB514\uB4DC\uBBF8\uB514\uC5B4'
  },
  media: {
    image: '\uC774\uBBF8\uC9C0',
    video: '\uBE44\uB514\uC624',
    audio: '\uC624\uB514\uC624',
    embed: '\uC784\uBCA0\uB514\uB4DC\uBBF8\uB514\uC5B4'
  }
});
// CONCATENATED MODULE: ./languages/tr.js
/* harmony default export */ var tr = ({
  base: {
    remove: 'Kald\u0131r',
    cancel: '\u0130ptal',
    confirm: 'Onayla',
    inert: 'Ekle',
    width: 'Geni\u015Flik',
    height: 'Y\xFCkseklik'
  },
  controls: {
    clear: 'Temizle',
    undo: 'Geri al',
    redo: '\u0130leri al',
    fontSize: 'Yaz\u0131 boyutu',
    color: 'Renk',
    textColor: 'Yaz\u0131 rengi',
    tempColors: 'Ge\xE7ici renkler',
    backgroundColor: 'Arkaplan',
    bold: 'Kal\u0131n',
    lineHeight: 'Sat\u0131r y\xFCksekli\u011Fi',
    letterSpacing: 'Harf aral\u0131\u011F\u0131',
    textIndent: '\xC7entik aral\u0131\u011F\u0131',
    increaseIndent: '\xC7enti\u011Fi geni\u015Flet',
    decreaseIndent: '\xC7enti\u011Fi daralt',
    italic: 'E\u011Fik',
    underline: 'Alt\u0131 \xE7izili',
    strikeThrough: '\xDCst\xFC \xE7izili',
    fontFamily: 'Yaz\u0131 tipi',
    textAlign: 'Metin Hizalama',
    alignLeft: 'Sola hizala',
    alignCenter: 'Ortaya hizala',
    alignRight: 'Sa\u011Fa hizala',
    alignJustify: 'Her iki tarafa hizala',
    floatLeft: 'Sola yat\u0131r',
    floatRight: 'Sa\u011Fa yat\u0131r',
    superScript: 'Ana kod',
    subScript: 'Alt kod',
    removeStyles: 'Stilleri kald\u0131r',
    headings: 'Ba\u015Fl\u0131klar',
    header: 'Ba\u015Fl\u0131k',
    normal: 'Normal',
    orderedList: 'S\u0131ral\u0131 liste',
    unorderedList: 'S\u0131ras\u0131z liste',
    blockQuote: 'Al\u0131nt\u0131',
    code: 'Kod',
    link: 'Ba\u011Flant\u0131',
    unlink: 'Ba\u011Flant\u0131y\u0131 kald\u0131r',
    hr: 'Yatay \xE7izgi',
    media: 'Medya',
    mediaLibirary: 'K\xFCt\xFCphane',
    emoji: '\u0130fade',
    fullscreen: 'Tam ekran',
    exitFullscreen: 'Tam ekrandan \xE7\u0131k'
  },
  linkEditor: {
    textInputPlaceHolder: 'Ba\u011Flant\u0131 metnini girin',
    linkInputPlaceHolder: 'Ba\u011Flant\u0131 URL\\' si girin',
    inputWithEnterPlaceHolder: 'Ba\u011Flant\u0131 URL\\'si girin ve Enter\\' a bas\u0131n',
    openInNewWindow: 'Yeni pencerede a\xE7',
    removeLink: 'Ba\u011Flant\u0131y\u0131 kald\u0131r'
  },
  audioPlayer: {
    title: 'Ses \xE7al'
  },
  videoPlayer: {
    title: 'G\xF6r\xFCnt\xFC oynat',
    embedTitle: 'G\xF6r\xFCnt\xFCy\xFC g\xF6m'
  },
  media: {
    image: 'Resim',
    video: 'G\xF6r\xFCnt\xFC',
    audio: 'Ses',
    embed: 'G\xF6m\xFCl\xFC nesne'
  }
});
// CONCATENATED MODULE: ./languages/jpn.js
/* harmony default export */ var jpn = ({
  base: {
    remove: '\u524A\u9664',
    cancel: '\u30AD\u30E3\u30F3\u30BB\u30EB',
    confirm: '\u6C7A\u5B9A',
    inert: '\u633F\u5165',
    width: '\u5E45',
    height: '\u9AD8\u3055'
  },
  controls: {
    clear: '\u30AF\u30EA\u30A2\u30B3\u30F3\u30C6\u30F3\u30C4',
    undo: '\u30AD\u30E3\u30F3\u30BB\u30EB',
    redo: '\u30AD\u30E3\u30F3\u30BB\u30EB',
    fontSize: '\u30D5\u30A9\u30F3\u30C8\u30B5\u30A4\u30BA',
    lineHeight: '\u30D5\u30A9\u30F3\u30C8\u30B5\u30A4\u30BA',
    letterSpacing: '\u30EF\u30FC\u30C9\u9593\u9694',
    textIndent: '\u6BB5\u843D\u306E\u30A4\u30F3\u30C7\u30F3\u30C8',
    increaseIndent: '\u30A4\u30F3\u30C7\u30F3\u30C8\u3092\u5897\u3084\u3059',
    decreaseIndent: '\u30A4\u30F3\u30C7\u30F3\u30C8\u3092\u6E1B\u3089\u3059',
    border: '\u56FD\u5883',
    color: '\u8272',
    textColor: '\u30C6\u30AD\u30B9\u30C8\u306E\u8272',
    backgroundColor: '\u80CC\u666F\u8272',
    tempColors: '\u4EEE\u8272',
    bold: '\u592A\u5B57',
    italic: '\u30A4\u30BF\u30EA\u30C3\u30AF\u4F53',
    underline: '\u4E0B\u7DDA',
    strikeThrough: '\u53D6\u308A\u6D88\u3057\u7DDA',
    fontFamily: '\u30D5\u30A9\u30F3\u30C8',
    textAlign: '\u30C6\u30AD\u30B9\u30C8\u306E\u914D\u7F6E',
    alignLeft: '\u5DE6',
    alignCenter: '\u4E2D\u592E\u63C3\u3048',
    alignRight: '\u53F3\u306B\u7ACB\u3064',
    alignJustify: '\u4E21\u7AEF',
    floatLeft: '\u5DE6\u30D5\u30ED\u30FC\u30C6\u30A3\u30F3\u30B0',
    floatRight: '\u53F3\u30D5\u30ED\u30FC\u30C6\u30A3\u30F3\u30B0',
    superScript: '\u4E0A\u4ED8\u304D',
    subScript: '\u4E0B\u4ED8\u304D\u6587\u5B57',
    removeStyles: '\u30AF\u30EA\u30A2\u30B9\u30BF\u30A4\u30EB',
    headings: '\u5F79\u8077',
    header: '\u5F79\u8077',
    normal: '\u5F93\u6765\u306E',
    orderedList: '\u9806\u5E8F\u4ED8\u304D\u30EA\u30B9\u30C8',
    unorderedList: '\u756A\u53F7\u306A\u3057\u30EA\u30B9\u30C8',
    blockQuote: '\u53C2\u7167',
    code: '\u30B3\u30FC\u30C9',
    link: '\u30EA\u30F3\u30AF',
    unlink: '\u30EA\u30F3\u30AF\u3092\u89E3\u9664',
    hr: '\u6A2A\u7DDA',
    media: '\u30E1\u30C7\u30A3\u30A2',
    mediaLibirary: '\u30E1\u30C7\u30A3\u30A2\u30E9\u30A4\u30D6\u30E9\u30EA\u30FC',
    emoji: '\u5C0F\u3055\u306A\u8868\u73FE',
    fullscreen: '\u5168\u753B\u9762',
    exitFullscreen: '\u5168\u753B\u9762\u3092\u9000\u304F'
  },
  linkEditor: {
    textInputPlaceHolder: '\u30EA\u30F3\u30AF\u30C6\u30AD\u30B9\u30C8\u3092\u5165\u529B',
    linkInputPlaceHolder: '\u30EA\u30F3\u30AF\u30A2\u30C9\u30EC\u30B9\u3092\u5165\u529B',
    inputWithEnterPlaceHolder: '\u30EA\u30F3\u30AF\u30A2\u30C9\u30EC\u30B9\u3092\u5165\u529B\u3057\u3066\u623B\u308A\u307E\u3059',
    openInNewWindow: '\u65B0\u3057\u3044\u30A6\u30A3\u30F3\u30C9\u30A6\u3067\u958B\u304F',
    removeLink: '\u65B0\u3057\u3044\u30A6\u30A3\u30F3\u30C9\u30A6\u3067\u958B\u304F'
  },
  audioPlayer: {
    title: '\u30AA\u30FC\u30C7\u30A3\u30AA\u30D5\u30A1\u30A4\u30EB\u3092\u518D\u751F\u3059\u308B'
  },
  videoPlayer: {
    title: '\u30D3\u30C7\u30AA\u30D5\u30A1\u30A4\u30EB\u3092\u518D\u751F\u3059\u308B',
    embedTitle: '\u57CB\u3081\u8FBC\u307F\u30E1\u30C7\u30A3\u30A2'
  },
  media: {
    image: '\u753B\u50CF',
    video: '\u30D3\u30C7\u30AA',
    audio: '\u97F3\u58F0',
    embed: '\u57CB\u3081\u8FBC\u307F\u30E1\u30C7\u30A3\u30A2'
  }
});
// CONCATENATED MODULE: ./languages/ru.js
/* harmony default export */ var ru = ({
  base: {
    remove: '\u0423\u0434\u0430\u043B\u0438\u0442\u044C',
    cancel: '\u041E\u0442\u043C\u0435\u043D\u0430',
    confirm: '\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044C',
    insert: '\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044C',
    width: '\u0428\u0438\u0440\u0438\u043D\u0430',
    height: '\u0412\u044B\u0441\u043E\u0442\u0430'
  },
  controls: {
    clear: '\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C',
    undo: '\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C',
    redo: '\u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u044C',
    fontSize: '\u0420\u0430\u0437\u043C\u0435\u0440 \u0448\u0440\u0438\u0444\u0442\u0430',
    color: '\u0426\u0432\u0435\u0442',
    textColor: '\u0426\u0432\u0435\u0442 \u0442\u0435\u043A\u0441\u0442\u0430',
    tempColors: 'Temp Colors',
    backgroundColor: '\u0426\u0432\u0435\u0442 \u0444\u043E\u043D\u0430',
    bold: '\u0416\u0438\u0440\u043D\u044B\u0439',
    lineHeight: '\u041C\u0435\u0436\u0441\u0442\u0440\u043E\u0447\u043D\u044B\u0439 \u0438\u043D\u0442\u0435\u0440\u0432\u0430\u043B',
    letterSpacing: '\u041C\u0435\u0436\u0431\u0443\u043A\u0432\u0435\u043D\u043D\u044B\u0439 \u0438\u043D\u0442\u0435\u0440\u0432\u0430\u043B',
    textIndent: '\u041E\u0442\u0441\u0442\u0443\u043F',
    increaseIndent: '\u0423\u0432\u0435\u043B\u0438\u0447\u0438\u0442\u044C \u043E\u0442\u0441\u0442\u0443\u043F',
    decreaseIndent: '\u0423\u043C\u0435\u043D\u044C\u0448\u0438\u0442\u044C \u043E\u0442\u0441\u0442\u0443\u043F',
    italic: '\u041A\u0443\u0440\u0441\u0438\u0432',
    underline: '\u041F\u043E\u0434\u0447\u0435\u0440\u043A\u043D\u0443\u0442\u044B\u0439',
    strikeThrough: '\u041F\u0435\u0440\u0435\u0447\u0435\u0440\u043A\u043D\u0443\u0442\u044B\u0439',
    fontFamily: '\u0428\u0440\u0438\u0444\u0442',
    textAlign: '\u0420\u0430\u0441\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u0442\u0435\u043A\u0441\u0442\u0430',
    alignLeft: '\u041F\u043E \u043B\u0435\u0432\u043E\u043C\u0443 \u043A\u0440\u0430\u044E',
    alignCenter: '\u041F\u043E \u0446\u0435\u043D\u0442\u0440\u0443',
    alignRight: '\u041F\u043E \u043F\u0440\u0430\u0432\u043E\u043C\u0443 \u043A\u0440\u0430\u044E',
    alignJustify: '\u041F\u043E \u0448\u0438\u0440\u0438\u043D\u0435',
    floatLeft: '\u041E\u0431\u0442\u0435\u043A\u0430\u043D\u0438\u0435 \u0441\u043B\u0435\u0432\u0430',
    floatRight: '\u041E\u0431\u0442\u0435\u043A\u0430\u043D\u0438\u0435 \u0441\u043F\u0440\u0430\u0432\u0430',
    superScript: '\u041D\u0430\u0434\u0441\u0442\u0440\u043E\u0447\u043D\u044B\u0439 \u0438\u043D\u0434\u0435\u043A\u0441',
    subScript: '\u041F\u043E\u0434\u0441\u0442\u0440\u043E\u0447\u043D\u044B\u0439 \u0438\u043D\u0434\u0435\u043A\u0441',
    removeStyles: '\u0423\u0431\u0440\u0430\u0442\u044C \u0441\u0442\u0438\u043B\u0438',
    headings: '\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043A\u0438',
    header: '\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A',
    normal: '\u041E\u0431\u044B\u0447\u043D\u044B\u0439',
    orderedList: '\u0423\u043F\u043E\u0440\u044F\u0434\u043E\u0447\u0435\u043D\u043D\u044B\u0439 \u0441\u043F\u0438\u0441\u043E\u043A',
    unorderedList: '\u041D\u0435\u0443\u043F\u043E\u0440\u044F\u0434\u043E\u0447\u0435\u043D\u043D\u044B\u0439 \u0441\u043F\u0438\u0441\u043E\u043A',
    blockQuote: '\u0426\u0438\u0442\u0430\u0442\u0430',
    code: '\u041A\u043E\u0434',
    link: '\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0441\u0441\u044B\u043B\u043A\u0443',
    unlink: '\u0423\u0431\u0440\u0430\u0442\u044C \u0441\u0441\u044B\u043B\u043A\u0443',
    hr: '\u0413\u043E\u0440\u0438\u0437\u043E\u043D\u0442\u0430\u043B\u044C\u043D\u0430\u044F \u043B\u0438\u043D\u0438\u044F',
    media: '\u041C\u0435\u0434\u0438\u0430',
    mediaLibirary: '\u041C\u0435\u0434\u0438\u0430 \u0431\u0438\u0431\u043B\u0438\u043E\u0442\u0435\u043A\u0430',
    emoji: 'Emoji',
    fullscreen: '\u041F\u043E\u043B\u043D\u043E\u044D\u043A\u0440\u0430\u043D\u043D\u044B\u0439 \u0440\u0435\u0436\u0438\u043C',
    exitFullscreen: '\u0412\u044B\u0439\u0442\u0438 \u0438\u0437 \u043F\u043E\u043B\u043D\u043E\u044D\u043A\u0440\u0430\u043D\u043D\u043E\u0433\u043E \u0440\u0435\u0436\u0438\u043C\u0430'
  },
  linkEditor: {
    textInputPlaceHolder: '\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043A\u0441\u0442 \u0441\u0441\u044B\u043B\u043A\u0438',
    linkInputPlaceHolder: '\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0441\u0441\u044B\u043B\u043A\u0443',
    inputWithEnterPlaceHolder: '\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0441\u0441\u044B\u043B\u043A\u0443 \u0438 \u043D\u0430\u0436\u0430\u0442\u044C Enter',
    openInNewWindow: '\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0432 \u043D\u043E\u0432\u043E\u043C \u043E\u043A\u043D\u0435',
    removeLink: '\u0423\u0431\u0440\u0430\u0442\u044C \u0441\u0441\u044B\u043B\u043A\u0443'
  },
  audioPlayer: {
    title: '\u0412\u043E\u0441\u043F\u0440\u043E\u0438\u0437\u0432\u0435\u0441\u0442\u0438 \u0430\u0443\u0434\u0438\u043E\u0444\u0430\u0439\u043B'
  },
  videoPlayer: {
    title: '\u0412\u043E\u0441\u043F\u0440\u043E\u0438\u0437\u0432\u0435\u0441\u0442\u0438 \u0432\u0438\u0434\u0435\u043E\u0444\u0430\u0439\u043B',
    embedTitle: 'Embed Media'
  },
  media: {
    image: '\u041A\u0430\u0440\u0442\u0438\u043D\u043A\u0430',
    video: '\u0412\u0438\u0434\u0435\u043E',
    audio: '\u0410\u0443\u0434\u0438\u043E',
    embed: '\u0412\u0441\u0442\u0440\u043E\u0435\u043D\u043D\u043E\u0435'
  }
});
// CONCATENATED MODULE: ./languages/fr.js
/* harmony default export */ var fr = ({
  base: {
    remove: 'Supprimer',
    cancel: 'Annuler',
    confirm: 'Confirmer',
    inert: 'Ins\xE9rer',
    width: 'Largeur',
    height: 'Hauteur'
  },
  controls: {
    clear: 'Effacer',
    undo: 'Annuler',
    redo: 'Refaire',
    fontSize: 'Taille de police',
    color: 'Couleur',
    textColor: 'Texte',
    tempColors: 'Couleurs temporaire',
    backgroundColor: 'Couleur d\\'arri\xE8re plan',
    bold: 'Gras',
    lineHeight: 'Hauteur de ligne',
    letterSpacing: 'Espacement des lettres',
    textIndent: 'Indentation du texte',
    increaseIndent: 'Augmenter l\\'indentation',
    decreaseIndent: 'R\xE9duire l\\'indentation',
    italic: 'Italique',
    underline: 'Souligner',
    strikeThrough: 'Barrer',
    fontFamily: 'Police d\\'\xE9criture',
    textAlign: 'Alignement du texte',
    alignLeft: 'Aligner \xE0 gauche',
    alignCenter: 'Aligner au centre',
    alignRight: 'Aligner \xE0 droite',
    alignJustify: 'Justifier',
    floatLeft: 'D\xE9placer \xE0 gauche',
    floatRight: 'D\xE9placer \xE0 droite',
    superScript: 'Super-script',
    subScript: 'Sous-script',
    removeStyles: 'Supprimer les styles',
    headings: 'Titres',
    header: 'Ent\xEAtes',
    normal: 'Normal',
    orderedList: 'Liste ordonn\xE9e',
    unorderedList: 'Liste non-ordonn\xE9e',
    blockQuote: 'Citation',
    code: 'Code',
    link: 'Ins\xE9rer un lien',
    unlink: 'Supprimer le lien',
    hr: 'Ligne horizontale',
    media: 'M\xE9dia',
    mediaLibirary: 'Biblioth\xEAque',
    emoji: 'Emoji',
    fullscreen: 'Plein \xE9cran',
    exitFullscreen: 'Quitter le plein \xE9cran'
  },
  linkEditor: {
    textInputPlaceHolder: 'Ins\xE9rer le texte \xE0 afficher',
    linkInputPlaceHolder: 'Ins\xE9rer le lien URL',
    inputWithEnterPlaceHolder: 'Ins\xE9rer le lien URL puis appuyer sur Entr\xE9e',
    openInNewWindow: 'Ouvrir dans une nouvelle fen\xEAtre',
    removeLink: 'Supprimer le lien'
  },
  audioPlayer: {
    title: 'Lancer le son audio'
  },
  videoPlayer: {
    title: 'Lancer la video',
    embedTitle: 'Int\xE9grer m\xE9dia'
  },
  media: {
    image: 'Image',
    video: 'Vid\xE9o',
    audio: 'Audio',
    embed: 'Int\xE9gr\xE9'
  }
});
// CONCATENATED MODULE: ./languages/pt-br.js
/* harmony default export */ var pt_br = ({
  base: {
    remove: 'Remover',
    cancel: 'Cancelar',
    confirm: 'Confirmar',
    inert: 'Inserir',
    width: 'Largura',
    height: 'Altura'
  },
  controls: {
    clear: 'Limpar',
    undo: 'Desfazer',
    redo: 'Refazer',
    fontSize: 'Tamanho da Fonte',
    color: 'Cor',
    textColor: 'Texto',
    tempColors: 'Temp Colors',
    backgroundColor: 'Cor de Fundo',
    bold: 'Negrito',
    lineHeight: 'Altura da LinhaLine Height',
    letterSpacing: 'Espa\xE7amento entre Letras',
    textIndent: 'Identa\xE7\xE3o de Texto',
    increaseIndent: 'Aumentar Identa\xE7\xE3o',
    decreaseIndent: 'Diminuir Ident\xE7\xE3o',
    italic: 'It\xE1lico',
    underline: 'Sublinhado',
    strikeThrough: 'Riscado',
    fontFamily: 'Fam\xEDlia da Fonte',
    textAlign: 'Alinhamento de Texto',
    alignLeft: 'Alinhamento \xE0 Esquerda',
    alignCenter: 'Alinhamento Centralizado',
    alignRight: 'Alinhamento \xE0 Direita',
    alignJustify: 'Alinhamento Justificado',
    floatLeft: 'Flutua\xE7\xE3o \xE0 Esquerda',
    floatRight: 'Flutua\xE7\xE3o \xE0 Direita',
    superScript: 'Sobrescrito',
    subScript: 'Subscrito',
    removeStyles: 'Remover Estilos',
    headings: 'Cabe\xE7alhos',
    header: 'Cabe\xE7alho',
    normal: 'Normal',
    orderedList: 'Lista Ordenada',
    unorderedList: 'Lista N\xE3o Ordenada',
    blockQuote: 'Cita\xE7\xE3o',
    code: 'C\xF3digo',
    link: 'Link',
    unlink: 'Remover Link',
    hr: 'Linha Horizontal',
    media: 'M\xEDdia',
    mediaLibirary: 'Biblioteca de M\xEDdia',
    emoji: 'Emoji',
    fullscreen: 'Tela Cheia',
    exitFullscreen: 'Sair de Tela Cheia'
  },
  linkEditor: {
    textInputPlaceHolder: 'Insira o texto do link',
    linkInputPlaceHolder: 'Insira a URL do link',
    inputWithEnterPlaceHolder: 'Insira a URL do link e aperte Enter',
    openInNewWindow: 'Abrir em nova janela',
    removeLink: 'Remover Link'
  },
  audioPlayer: {
    title: 'Tocar \xC1udio'
  },
  videoPlayer: {
    title: 'Tocar V\xEDdeo',
    embedTitle: 'M\xEDdia Embutida'
  },
  media: {
    image: 'Imagem',
    video: 'V\xEDdeo',
    audio: '\xC1udio',
    embed: 'Embutido'
  }
});
// CONCATENATED MODULE: ./languages/vi-vn.js
/* harmony default export */ var vi_vn = ({
  base: {
    remove: 'X\xF3a b\u1ECF',
    cancel: 'H\u1EE7y b\u1ECF',
    confirm: 'X\xE1c nh\u1EADn',
    inert: 'Ch\xE8n v\xE0o',
    width: '\u0110\u1ED9 r\u1ED9ng',
    height: '\u0110\u1ED9 cao'
  },
  controls: {
    clear: 'X\xF3a to\xE0n b\u1ED9 n\u1ED9i dung',
    undo: 'H\u1EE7y b\u1ECF',
    redo: 'L\xE0m l\u1EA1i',
    fontSize: 'Size ch\u1EEF',
    lineHeight: '\u0110\u1ED9 cao h\xE0ng',
    letterSpacing: 'Kho\u1EA3ng c\xE1ch ch\u1EEF',
    textIndent: 'Kho\u1EA3ng c\xE1ch \u0111o\u1EA1n v\u0103n',
    increaseIndent: 'T\u0103ng kho\u1EA3ng c\xE1ch',
    decreaseIndent: 'Gi\u1EA3m kho\u1EA3ng c\xE1ch',
    border: '\u0110\u01B0\u1EDDng vi\u1EC1n',
    color: 'M\xE0u s\u1EAFc',
    textColor: 'M\xE0u ch\u1EEF',
    backgroundColor: 'M\xE0u n\u1EC1n',
    tempColors: 'M\xE0u t\u1EA1m th\u1EDDi',
    bold: 'T\xF4 \u0111\u1EADm',
    italic: 'In nghi\xEAng',
    underline: 'G\u1EA1ch d\u01B0\u1EDBi',
    strikeThrough: 'X\xF3a g\u1EA1ch d\u01B0\u1EDBi',
    fontFamily: 'Font ch\u1EEF',
    textAlign: 'C\u0103n ch\u1EC9nh v\u0103n b\u1EA3n',
    alignLeft: 'C\u0103n tr\xE1i',
    alignCenter: 'C\u0103n gi\u1EEFa',
    alignRight: 'C\u0103n ph\u1EA3i',
    alignJustify: 'Hai l\u1EC1',
    floatLeft: 'Float left',
    floatRight: 'Float right',
    superScript: 'Ch\u1EC9 s\u1ED1 tr\xEAn',
    subScript: 'Ch\u1EC9 s\u1ED1 d\u01B0\u1EDBi',
    removeStyles: 'X\xF3a style',
    headings: 'Ti\xEAu \u0111\u1EC1',
    header: 'Ti\xEAu \u0111\u1EC1',
    normal: 'Quy t\u1EAFc th\xF4ng th\u01B0\u1EDDng',
    orderedList: 'Ki\u1EC3u s\u1EAFp x\u1EBFp',
    unorderedList: 'Ki\u1EC3u kh\xF4ng s\u1EAFp x\u1EBFp',
    blockQuote: 'Tr\xEDch d\u1EABn',
    code: 'Code',
    link: 'Li\xEAn k\u1EBFt',
    unlink: 'G\u1EE1 li\xEAn k\u1EBFt',
    hr: 'Horizontal line',
    media: 'Media',
    mediaLibirary: 'Kho media',
    emoji: 'Bi\u1EC3u t\u01B0\u1EE3ng c\u1EA3m x\xFAc',
    fullscreen: 'To\xE0n m\xE0n h\xECnh',
    exitFullscreen: 'Tho\xE1t kh\u1ECFi ch\u1EBF \u0111\u1ED9 to\xE0n m\xE0n h\xECnh'
  },
  linkEditor: {
    textInputPlaceHolder: 'Nh\u1EADp v\u0103n b\u1EA3n li\xEAn k\u1EBFt',
    linkInputPlaceHolder: 'Nh\u1EADp \u0111\u1ECBa ch\u1EC9 li\xEAn k\u1EBFt',
    inputWithEnterPlaceHolder: 'Nh\u1EADp \u0111\u1ECBa ch\u1EC9 li\xEAn k\u1EBFt v\xE0 Enter',
    openInNewWindow: 'M\u1EDF trong tab m\u1EDBi',
    removeLink: 'G\u1EE1 li\xEAn k\u1EBFt'
  },
  audioPlayer: {
    title: 'Ph\xE1t t\u1EC7p \xE2m thanh'
  },
  videoPlayer: {
    title: 'Ph\xE1t t\u1EC7p video',
    embedTitle: 'Media nh\xFAng'
  },
  media: {
    image: 'H\xECnh \u1EA3nh',
    video: 'Video',
    audio: '\xC2m thanh',
    embed: 'Media nh\xFAng'
  }
});
// CONCATENATED MODULE: ./languages/index.js











/* harmony default export */ var languages = ({
  'en': en,
  'zh': zh,
  'zh-hant': zh_hant,
  'pl': pl,
  'kr': kr,
  'tr': tr,
  'jpn': jpn,
  'ru': ru,
  'fr': fr,
  'pt-br': pt_br,
  'vi-vn': vi_vn
});
// EXTERNAL MODULE: external "braft-finder"
var external_braft_finder_ = __nested_webpack_require_38800__(17);
var external_braft_finder_default = /*#__PURE__*/__nested_webpack_require_38800__.n(external_braft_finder_);

// EXTERNAL MODULE: external "braft-utils"
var external_braft_utils_ = __nested_webpack_require_38800__(3);

// EXTERNAL MODULE: external "draft-js"
var external_draft_js_ = __nested_webpack_require_38800__(6);

// EXTERNAL MODULE: external "immutable"
var external_immutable_ = __nested_webpack_require_38800__(13);
var external_immutable_default = /*#__PURE__*/__nested_webpack_require_38800__.n(external_immutable_);

// CONCATENATED MODULE: ./configs/keybindings.js
 // TODO
// Allow custom shortcut settings

/* harmony default export */ var keybindings = (function (customKeyBindingFn) {
  return function (event) {
    if (event.keyCode === 83 && (external_draft_js_["KeyBindingUtil"].hasCommandModifier(event) || external_draft_js_["KeyBindingUtil"].isCtrlKeyCommand(event))) {
      return 'braft-save';
    }

    if (customKeyBindingFn) {
      return customKeyBindingFn(event) || Object(external_draft_js_["getDefaultKeyBinding"])(event);
    }

    return Object(external_draft_js_["getDefaultKeyBinding"])(event);
  };
});
// CONCATENATED MODULE: ./configs/props.js
/* harmony default export */ var configs_props = ({
  language: 'zh',
  controls: ['undo', 'redo', 'separator', 'font-size', 'line-height', 'letter-spacing', 'separator', 'text-color', 'bold', 'italic', 'underline', 'strike-through', 'separator', 'superscript', 'subscript', 'remove-styles', 'emoji', 'separator', 'text-indent', 'text-align', 'separator', 'headings', 'list-ul', 'list-ol', 'blockquote', 'code', 'separator', 'media', 'link', 'table', 'split', 'hr', 'separator', 'clear', 'separator', 'fullscreen'],
  excludeControls: [],
  extendControls: [],
  extendAtomics: [],
  componentBelowControlBar: null,
  media: {
    pasteImage: true,
    imagePasteLimit: 5,
    image: true,
    video: true,
    audio: true,
    uploadFn: null,
    validateFn: null,
    onBeforeDeselect: null,
    onDeselect: null,
    onBeforeSelect: null,
    onSelect: null,
    onBeforeRemove: null,
    onRemove: null,
    onCancel: null,
    onFileSelect: null,
    onBeforeInsert: null,
    onInsert: null,
    onChange: null,
    accepts: {
      image: 'image/png,image/jpeg,image/gif,image/webp,image/apng,image/svg',
      video: 'video/mp4',
      audio: 'audio/mp3'
    },
    externals: {
      audio: true,
      video: true,
      image: true,
      embed: true
    }
  },
  imageControls: ['float-left', 'float-right', 'align-left', 'align-center', 'align-right', 'link', 'size', 'remove'],
  imageResizable: true,
  imageEqualRatio: true,
  colors: ['#000000', '#333333', '#666666', '#999999', '#cccccc', '#ffffff', '#61a951', '#16a085', '#07a9fe', '#003ba5', '#8e44ad', '#f32784', '#c0392b', '#d35400', '#f39c12', '#fdda00'],
  colorPicker: null,
  colorPickerTheme: 'dark',
  colorPickerAutoHide: true,
  codeTabIndents: 2,
  headings: ['header-one', 'header-two', 'header-three', 'header-four', 'header-five', 'header-six', 'unstyled'],
  textAligns: ['left', 'center', 'right', 'justify'],
  textBackgroundColor: true,
  allowInsertLinkText: false,
  defaultLinkTarget: '',
  letterSpacings: [0, 1, 2, 3, 4, 5, 6],
  lineHeights: [1, 1.2, 1.5, 1.75, 2, 2.5, 3, 4],
  fontSizes: [12, 14, 16, 18, 20, 24, 28, 30, 32, 36, 40, 48, 56, 64, 72, 96, 120, 144],
  fontFamilies: [{
    name: 'Araial',
    family: 'Arial, Helvetica, sans-serif'
  }, {
    name: 'Georgia',
    family: 'Georgia, serif'
  }, {
    name: 'Impact',
    family: 'Impact, serif'
  }, {
    name: 'Monospace',
    family: '"Courier New", Courier, monospace'
  }, {
    name: 'Tahoma',
    family: 'tahoma, arial, "Hiragino Sans GB", \u5B8B\u4F53, sans-serif'
  }],
  converts: {
    unitExportFn: function unitExportFn(value, type) {
      return type === 'line-height' ? value : "".concat(value, "px");
    }
  },
  emojis: ['\u{1F923}', '\u{1F64C}', '\u{1F49A}', '\u{1F49B}', '\u{1F44F}', '\u{1F609}', '\u{1F4AF}', '\u{1F495}', '\u{1F49E}', '\u{1F498}', '\u{1F499}', '\u{1F49D}', '\u{1F5A4}', '\u{1F49C}', '\u2764\uFE0F', '\u{1F60D}', '\u{1F63B}', '\u{1F493}', '\u{1F497}', '\u{1F60B}', '\u{1F607}', '\u{1F602}', '\u{1F639}', '\u{1F618}', '\u{1F496}', '\u{1F601}', '\u{1F600}', '\u{1F91E}', '\u{1F632}', '\u{1F604}', '\u{1F60A}', '\u{1F44D}', '\u{1F60C}', '\u{1F603}', '\u{1F605}', '\u270C\uFE0F', '\u{1F917}', '\u{1F48B}', '\u{1F617}', '\u{1F63D}', '\u{1F61A}', '\u{1F920}', '\u{1F619}', '\u{1F63A}', '\u{1F444}', '\u{1F638}', '\u{1F60F}', '\u{1F63C}', '\u{1F44C}', '\u{1F60E}', '\u{1F606}', '\u{1F61B}', '\u{1F64F}', '\u{1F91D}', '\u{1F642}', '\u{1F911}', '\u{1F61D}', '\u{1F610}', '\u{1F611}', '\u{1F924}', '\u{1F624}', '\u{1F643}', '\u{1F921}', '\u{1F636}', '\u{1F62A}', '\u{1F634}', '\u{1F635}', '\u{1F613}', '\u{1F44A}', '\u{1F626}', '\u{1F637}', '\u{1F910}', '\u{1F61C}', '\u{1F913}', '\u{1F47B}', '\u{1F625}', '\u{1F644}', '\u{1F914}', '\u{1F912}', '\u{1F641}', '\u{1F614}', '\u{1F62F}', '\u2639\uFE0F', '\u2620\uFE0F', '\u{1F630}', '\u{1F629}', '\u{1F616}', '\u{1F615}', '\u{1F612}', '\u{1F623}', '\u{1F622}', '\u{1F62E}', '\u{1F63F}', '\u{1F927}', '\u{1F62B}', '\u{1F925}', '\u{1F61E}', '\u{1F62C}', '\u{1F44E}', '\u{1F480}', '\u{1F633}', '\u{1F628}', '\u{1F915}', '\u{1F922}', '\u{1F631}', '\u{1F62D}', '\u{1F620}', '\u{1F608}', '\u{1F627}', '\u{1F494}', '\u{1F61F}', '\u{1F640}', '\u{1F4A9}', '\u{1F47F}', '\u{1F621}', '\u{1F63E}', '\u{1F595}'],
  stripPastedStyles: false,
  triggerChangeOnMount: true,
  className: '',
  style: {},
  controlBarClassName: '',
  controlBarStyle: {},
  contentClassName: '',
  contentStyle: {},
  draftProps: {},
  hooks: {},
  onChange: null,
  onFocus: null,
  onBlur: null,
  onTab: null,
  onDelete: null,
  onSave: null,
  fixPlaceholder: false
});
// EXTERNAL MODULE: ../node_modules/draft-js/lib/getFragmentFromSelection.js
var getFragmentFromSelection = __nested_webpack_require_38800__(22);
var getFragmentFromSelection_default = /*#__PURE__*/__nested_webpack_require_38800__.n(getFragmentFromSelection);

// EXTERNAL MODULE: external "draftjs-utils"
var external_draftjs_utils_ = __nested_webpack_require_38800__(23);

// CONCATENATED MODULE: ./configs/handlers.js






var handlers_keyCommandHandlers = function keyCommandHandlers(command, editorState, editor) {
  if (editor.editorProps.handleKeyCommand && editor.editorProps.handleKeyCommand(command, editorState, editor) === 'handled') {
    return 'handled';
  }

  if (command === 'braft-save') {
    editor.editorProps.onSave && editor.editorProps.onSave(editorState);
    return 'handled';
  }

  var _editor$editorProps = editor.editorProps,
      controls = _editor$editorProps.controls,
      excludeControls = _editor$editorProps.excludeControls;
  var allowIndent = (controls.indexOf('text-indent') !== 0 || controls.find(function (item) {
    return item.key === 'text-indent';
  })) && excludeControls.indexOf('text-indent') === -1;
  var cursorStart = editorState.getSelection().getStartOffset();
  var cursorEnd = editorState.getSelection().getEndOffset();
  var cursorIsAtFirst = cursorStart === 0 && cursorEnd === 0;

  if (command === 'backspace') {
    if (editor.editorProps.onDelete && editor.editorProps.onDelete(editorState) === false) {
      return 'handled';
    }

    var blockType = external_braft_utils_["ContentUtils"].getSelectionBlockType(editorState);

    if (allowIndent && cursorIsAtFirst && blockType !== 'code-block') {
      editor.setValue(external_braft_utils_["ContentUtils"].decreaseSelectionIndent(editorState));
    }
  }

  if (command === 'tab') {
    var _blockType = external_braft_utils_["ContentUtils"].getSelectionBlockType(editorState);

    if (_blockType === 'code-block') {
      editor.setValue(external_braft_utils_["ContentUtils"].insertText(editorState, ' '.repeat(editor.editorProps.codeTabIndents)));
      return 'handled';
    } else if (_blockType === 'ordered-list-item' || _blockType === 'unordered-list-item') {
      var newEditorState = external_draft_js_["RichUtils"].onTab(event, editorState, 4);

      if (newEditorState !== editorState) {
        editor.setValue(newEditorState);
      }

      return 'handled';
    } else if (_blockType !== 'atomic' && allowIndent && cursorIsAtFirst) {
      editor.setValue(external_braft_utils_["ContentUtils"].increaseSelectionIndent(editorState));
      return 'handled';
    }
  }

  var nextEditorState = external_braft_utils_["ContentUtils"].handleKeyCommand(editorState, command);

  if (nextEditorState) {
    editor.setValue(nextEditorState);
    return 'handled';
  }

  return 'not-handled';
};
var handlers_returnHandlers = function returnHandlers(event, editorState, editor) {
  if (editor.editorProps.handleReturn && editor.editorProps.handleReturn(event, editorState, editor) === 'handled') {
    return 'handled';
  }

  var currentBlock = external_braft_utils_["ContentUtils"].getSelectionBlock(editorState);
  var currentBlockType = currentBlock.getType();

  if (currentBlockType === 'unordered-list-item' || currentBlockType === 'ordered-list-item') {
    if (currentBlock.getLength() === 0) {
      editor.setValue(external_braft_utils_["ContentUtils"].toggleSelectionBlockType(editorState, 'unstyled'));
      return 'handled';
    }

    return 'not-handled';
  } else if (currentBlockType === 'code-block') {
    if (event.which === 13 && (event.getModifierState('Shift') || event.getModifierState('Alt') || event.getModifierState('Control'))) {
      editor.setValue(external_braft_utils_["ContentUtils"].toggleSelectionBlockType(editorState, 'unstyled'));
      return 'handled';
    }

    return 'not-handled';
  } else if (currentBlockType === 'blockquote') {
    if (event.which === 13) {
      if (event.getModifierState('Shift') || event.getModifierState('Alt') || event.getModifierState('Control')) {
        event.which = 0;
      } else {
        editor.setValue(external_draft_js_["RichUtils"].insertSoftNewline(editorState));
        return 'handled';
      }
    }
  }

  var nextEditorState = Object(external_draftjs_utils_["handleNewLine"])(editorState, event);

  if (nextEditorState) {
    editor.setValue(nextEditorState);
    return 'handled';
  }

  return 'not-handled';
};
var beforeInputHandlers = function beforeInputHandlers(chars, editorState, editor) {
  if (editor.editorProps.handleBeforeInput && editor.editorProps.handleBeforeInput(chars, editorState, editor) === 'handled') {
    return 'handled';
  }

  return 'not-handled';
};
var handlers_compositionStartHandler = function compositionStartHandler(_, editor) {
  var editorState = editor.state.editorState;
  var selectedBlocks = external_braft_utils_["ContentUtils"].getSelectedBlocks(editorState);

  if (selectedBlocks && selectedBlocks.length > 1) {
    var nextEditorState = external_draft_js_["EditorState"].push(editorState, external_draft_js_["Modifier"].removeRange(editorState.getCurrentContent(), editorState.getSelection(), 'backward'), 'remove-range');
    editor.setValue(nextEditorState);
  }
};
var handlers_dropHandlers = function dropHandlers(selectionState, dataTransfer, editor) {
  if (editor.editorProps.readOnly || editor.editorProps.disabled) {
    return 'handled';
  }

  if (window && window.__BRAFT_DRAGING__IMAGE__) {
    var nextEditorState = external_draft_js_["EditorState"].forceSelection(editor.state.editorState, selectionState);
    nextEditorState = external_braft_utils_["ContentUtils"].insertMedias(nextEditorState, [window.__BRAFT_DRAGING__IMAGE__.mediaData]);
    nextEditorState = external_braft_utils_["ContentUtils"].removeBlock(nextEditorState, window.__BRAFT_DRAGING__IMAGE__.block, nextEditorState.getSelection());
    window.__BRAFT_DRAGING__IMAGE__ = null;
    editor.lockOrUnlockEditor(true);
    editor.setValue(nextEditorState);
    return 'handled';
  } else if (!dataTransfer || !dataTransfer.getText()) {
    return 'handled';
  }

  return 'not-handled';
};
var handlers_handleFiles = function handleFiles(files, editor) {
  var _editor$constructor$d = objectSpread_default()({}, editor.constructor.defaultProps.media, editor.editorProps.media),
      pasteImage = _editor$constructor$d.pasteImage,
      validateFn = _editor$constructor$d.validateFn,
      imagePasteLimit = _editor$constructor$d.imagePasteLimit;

  pasteImage && files.slice(0, imagePasteLimit).forEach(function (file) {
    if (file && file.type.indexOf('image') > -1 && editor.braftFinder) {
      var validateResult = validateFn ? validateFn(file) : true;

      if (validateResult instanceof Promise) {
        validateResult.then(function () {
          editor.braftFinder.uploadImage(file, function (image) {
            editor.isLiving && editor.setValue(external_braft_utils_["ContentUtils"].insertMedias(editor.state.editorState, [image]));
          });
        });
      } else if (validateResult) {
        editor.braftFinder.uploadImage(file, function (image) {
          editor.isLiving && editor.setValue(external_braft_utils_["ContentUtils"].insertMedias(editor.state.editorState, [image]));
        });
      }
    }
  });

  if (files[0] && files[0].type.indexOf('image') > -1 && pasteImage) {
    return 'handled';
  }

  return 'not-handled';
};
var droppedFilesHandlers = function droppedFilesHandlers(selectionState, files, editor) {
  if (editor.editorProps.handleDroppedFiles && editor.editorProps.handleDroppedFiles(selectionState, files, editor) === 'handled') {
    return 'handled';
  }

  return handlers_handleFiles(files, editor);
};
var pastedFilesHandlers = function pastedFilesHandlers(files, editor) {
  if (editor.editorProps.handlePastedFiles && editor.editorProps.handlePastedFiles(files, editor) === 'handled') {
    return 'handled';
  }

  return handlers_handleFiles(files, editor);
};
var handlers_copyHandlers = function copyHandlers(event, editor) {
  var blockMap = getFragmentFromSelection_default()(editor.state.editorState);

  if (blockMap && blockMap.toArray) {
    try {
      var tempContentState = external_draft_js_["ContentState"].createFromBlockArray(blockMap.toArray());
      var tempEditorState = external_draft_js_["EditorState"].createWithContent(tempContentState);
      var clipboardData = event.clipboardData || window.clipboardData || event.originalEvent.clipboardData;
      tempEditorState.setConvertOptions(editor.state.editorState.convertOptions);
      clipboardData.setData('text/html', tempEditorState.toHTML());
      clipboardData.setData('text/plain', tempEditorState.toText());
      event.preventDefault();
    } catch (error) {
      console.warn(error);
    }
  }
};
var handlers_pastedTextHandlers = function pastedTextHandlers(text, html, editorState, editor) {
  if (editor.editorProps.handlePastedText && editor.editorProps.handlePastedText(text, html, editorState, editor) === 'handled') {
    return 'handled';
  }

  if (!html || editor.editorProps.stripPastedStyles) {
    return false;
  }

  var tempColors = external_braft_utils_["ColorUtils"].detectColorsFromHTMLString(html);
  editor.setState({
    tempColors: [].concat(toConsumableArray_default()(editor.state.tempColors), toConsumableArray_default()(tempColors)).filter(function (item) {
      return editor.editorProps.colors.indexOf(item) === -1;
    }).filter(function (item, index, array) {
      return array.indexOf(item) === index;
    })
  }, function () {
    editor.setValue(external_braft_utils_["ContentUtils"].insertHTML(editorState, html, 'paste'));
  });
  return 'handled';
};
// CONCATENATED MODULE: ./helpers/extension.js

// TODO
//-extended support for block-style and atomic types

var extension_extensionControls = [];
var extension_extensionDecorators = [];
var extension_propInterceptors = [];
var extension_extensionBlockRenderMaps = [];
var extension_extensionBlockRendererFns = [];
var extensionInlineStyleMaps = [];
var extension_extensionInlineStyleFns = [];
var extensionEntities = [];
var inlineStyleImporters = [];
var inlineStyleExporters = [];
var blockImporters = [];
var blockExporters = [];

var filterByEditorId = function filterByEditorId(items, editorId) {
  if (!editorId) {
    return items.filter(function (item) {
      return !item.includeEditors;
    }).map(function (item) {
      return item.data;
    });
  }

  return items.map(function (item) {
    if (!item.includeEditors && !item.excludeEditors) {
      return item.data;
    }

    if (item.includeEditors) {
      return item.includeEditors.indexOf(editorId) !== -1 ? item.data : false;
    }

    if (item.excludeEditors) {
      return item.excludeEditors.indexOf(editorId) !== -1 ? false : item.data;
    }

    return false;
  }).filter(function (item) {
    return item;
  });
};

var getPropInterceptors = function getPropInterceptors(editorId) {
  return filterByEditorId(extension_propInterceptors, editorId);
};
var getExtensionControls = function getExtensionControls(editorId) {
  return filterByEditorId(extension_extensionControls, editorId);
};
var getExtensionDecorators = function getExtensionDecorators(editorId) {
  return filterByEditorId(extension_extensionDecorators, editorId, 'decorators');
};
var getExtensionBlockRenderMaps = function getExtensionBlockRenderMaps(editorId) {
  return filterByEditorId(extension_extensionBlockRenderMaps, editorId);
};
var getExtensionBlockRendererFns = function getExtensionBlockRendererFns(editorId) {
  return filterByEditorId(extension_extensionBlockRendererFns, editorId);
};
var getExtensionInlineStyleMap = function getExtensionInlineStyleMap(editorId) {
  var inlineStyleMap = {};
  filterByEditorId(extensionInlineStyleMaps, editorId).forEach(function (item) {
    inlineStyleMap[item.inlineStyleName] = item.styleMap;
  });
  return inlineStyleMap;
};
var getExtensionInlineStyleFns = function getExtensionInlineStyleFns(editorId) {
  return filterByEditorId(extension_extensionInlineStyleFns, editorId);
};
var compositeStyleImportFn = function compositeStyleImportFn(styleImportFn, editorId) {
  return function (nodeName, node, style) {
    filterByEditorId(inlineStyleImporters, editorId).forEach(function (styleImporter) {
      if (styleImporter.importer && styleImporter.importer(nodeName, node)) {
        style = style.add(styleImporter.inlineStyleName);
      }
    });
    return styleImportFn ? styleImportFn(nodeName, node, style) : style;
  };
};
var compositeStyleExportFn = function compositeStyleExportFn(styleExportFn, editorId) {
  return function (style) {
    style = style.toUpperCase();
    var result = styleExportFn ? styleExportFn(style) : undefined;

    if (result) {
      return result;
    }

    filterByEditorId(inlineStyleExporters, editorId).find(function (item) {
      if (item.inlineStyleName === style) {
        result = item.exporter;
        return true;
      }
    });
    return result;
  };
};
var compositeEntityImportFn = function compositeEntityImportFn(entityImportFn, editorId) {
  return function (nodeName, node, createEntity, source) {
    var result = entityImportFn ? entityImportFn(nodeName, node, createEntity, source) : null;

    if (result) {
      return result;
    }

    filterByEditorId(extensionEntities, editorId).find(function (entityItem) {
      var matched = entityItem.importer ? entityItem.importer(nodeName, node, source) : null;
      matched && (result = createEntity(entityItem.entityType, matched.mutability || 'MUTABLE', matched.data || {}));
      return !!matched;
    });
    return result;
  };
};
var compositeEntityExportFn = function compositeEntityExportFn(entityExportFn, editorId) {
  return function (entity, originalText) {
    var result = entityExportFn ? entityExportFn(entity, originalText) : undefined;

    if (result) {
      return result;
    }

    var entityType = entity.type.toUpperCase();
    filterByEditorId(extensionEntities, editorId).find(function (entityItem) {
      if (entityItem.entityType === entityType) {
        result = entityItem.exporter ? entityItem.exporter(entity, originalText) : undefined;
        return true;
      }
    });
    return result;
  };
};
var compositeBlockImportFn = function compositeBlockImportFn(blockImportFn, editorId) {
  return function (nodeName, node, source) {
    var result = blockImportFn ? blockImportFn(nodeName, node, source) : null;

    if (result) {
      return result;
    }

    filterByEditorId(blockImporters, editorId).find(function (blockImporter) {
      var matched = blockImporter.importer ? blockImporter.importer(nodeName, node, source) : undefined;
      matched && (result = matched);
      return !!matched;
    });
    return result;
  };
};
var compositeBlockExportFn = function compositeBlockExportFn(blockExportFn, editorId) {
  return function (contentState, block) {
    var result = blockExportFn ? blockExportFn(contentState, block) : null;

    if (result) {
      return result;
    }

    filterByEditorId(blockExporters, editorId).find(function (blockExporter) {
      var matched = blockExporter.exporter ? blockExporter.exporter(contentState, block) : undefined;
      matched && (result = matched);
      return !!matched;
    });
    return result;
  };
};

var extension_useExtension = function useExtension(extension) {
  if (extension instanceof Array) {
    extension.forEach(useExtension);
    return false;
  }

  if (!extension || !extension.type || typeof extension.type !== 'string') {
    return false;
  }

  var includeEditors = extension.includeEditors,
      excludeEditors = extension.excludeEditors;

  if (extension.type === 'control') {
    extension_extensionControls.push({
      includeEditors: includeEditors,
      excludeEditors: excludeEditors,
      data: extension.control
    });
  } else if (extension.type === 'inline-style') {
    var inlineStyleName = extension.name.toUpperCase();

    if (extension.control) {
      extension_extensionControls.push({
        includeEditors: includeEditors,
        excludeEditors: excludeEditors,
        data: objectSpread_default()({
          key: inlineStyleName,
          type: 'inline-style',
          command: inlineStyleName
        }, extension.control)
      });
    }

    if (extension.style) {
      extensionInlineStyleMaps.push({
        includeEditors: includeEditors,
        excludeEditors: excludeEditors,
        data: {
          inlineStyleName: inlineStyleName,
          styleMap: extension.style
        }
      });
    }

    if (extension.styleFn) {
      extension_extensionInlineStyleFns.push({
        includeEditors: includeEditors,
        excludeEditors: excludeEditors,
        data: {
          inlineStyleName: inlineStyleName,
          styleFn: extension.styleFn
        }
      });
    }

    if (extension.importer) {
      inlineStyleImporters.push({
        includeEditors: includeEditors,
        excludeEditors: excludeEditors,
        data: {
          inlineStyleName: inlineStyleName,
          importer: extension.importer
        }
      });
    }

    inlineStyleExporters.push({
      includeEditors: includeEditors,
      excludeEditors: excludeEditors,
      data: {
        inlineStyleName: inlineStyleName,
        exporter: extension.exporter ? extension.exporter(extension) : external_react_default.a.createElement("span", {
          style: extension.style
        })
      }
    });
  } else if (extension.type === 'block-style') {// TODO
  } else if (extension.type === 'entity') {
    var entityType = extension.name.toUpperCase();

    if (extension.control) {
      extension_extensionControls.push({
        includeEditors: includeEditors,
        excludeEditors: excludeEditors,
        data: typeof extension.control === 'function' ? extension.control : objectSpread_default()({
          key: entityType,
          type: 'entity',
          command: entityType,
          data: {
            mutability: extension.mutability || 'MUTABLE',
            data: extension.data || {}
          }
        }, extension.control)
      });
    }

    extensionEntities.push({
      includeEditors: includeEditors,
      excludeEditors: excludeEditors,
      data: {
        entityType: entityType,
        importer: extension.importer,
        exporter: extension.exporter
      }
    });
    extension_extensionDecorators.push({
      includeEditors: includeEditors,
      excludeEditors: excludeEditors,
      data: {
        type: 'entity',
        decorator: {
          key: entityType,
          component: extension.component
        }
      }
    });
  } else if (extension.type === 'block') {
    var blockType = extension.name;

    if (extension.renderMap) {
      extension_extensionBlockRenderMaps.push({
        includeEditors: includeEditors,
        excludeEditors: excludeEditors,
        data: {
          blockType: blockType,
          renderMap: extension.renderMap
        }
      });
    }

    if (extension.rendererFn) {
      extension_extensionBlockRendererFns.push({
        includeEditors: includeEditors,
        excludeEditors: excludeEditors,
        data: {
          blockType: blockType,
          rendererFn: extension.rendererFn
        }
      });
    }

    if (extension.importer) {
      blockImporters.push({
        includeEditors: includeEditors,
        excludeEditors: excludeEditors,
        data: {
          blockType: blockType,
          importer: extension.importer
        }
      });
    }

    if (extension.exporter) {
      blockExporters.push({
        includeEditors: includeEditors,
        excludeEditors: excludeEditors,
        data: {
          blockType: blockType,
          exporter: extension.exporter
        }
      });
    }
  } else if (extension.type === 'atomic') {// TODO
  } else if (extension.type === 'decorator') {
    var decorator = extension.decorator;

    if (decorator && decorator.strategy && decorator.component) {
      extension_extensionDecorators.push({
        includeEditors: includeEditors,
        excludeEditors: excludeEditors,
        data: {
          type: 'strategy',
          decorator: decorator
        }
      });
    } else if (decorator && decorator.getDecorations) {
      extension_extensionDecorators.push({
        includeEditors: includeEditors,
        excludeEditors: excludeEditors,
        data: {
          type: 'class',
          decorator: decorator
        }
      });
    }
  } else if (extension.type === 'prop-interception') {
    extension_propInterceptors.push({
      includeEditors: includeEditors,
      excludeEditors: excludeEditors,
      data: extension.interceptor
    });
  }
};

var createExtensibleEditor = function createExtensibleEditor(BraftEditor) {
  BraftEditor.use = extension_useExtension;
  return BraftEditor;
};
// CONCATENATED MODULE: ./renderers/block/blockRenderMap.js




/* harmony default export */ var block_blockRenderMap = (function (props, blockRenderMap) {
  var customBlockRenderMap = Object(external_immutable_["Map"])({
    'atomic': {
      element: ''
    },
    'code-block': {
      element: 'code',
      wrapper: external_react_default.a.createElement("pre", {
        className: "braft-code-block"
      })
    }
  });

  try {
    var extensionBlockRenderMaps = getExtensionBlockRenderMaps(props.editorId);
    customBlockRenderMap = extensionBlockRenderMaps.reduce(function (customBlockRenderMap, item) {
      return customBlockRenderMap.merge(typeof item.renderMap === 'function' ? item.renderMap(props) : item.renderMap);
    }, customBlockRenderMap);

    if (blockRenderMap) {
      if (typeof blockRenderMap === 'function') {
        customBlockRenderMap = customBlockRenderMap.merge(blockRenderMap(props));
      } else {
        customBlockRenderMap = customBlockRenderMap.merge(blockRenderMap);
      }
    }

    customBlockRenderMap = external_draft_js_["DefaultDraftBlockRenderMap"].merge(customBlockRenderMap);
  } catch (error) {
    console.warn(error);
  }

  return customBlockRenderMap;
});
// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __nested_webpack_require_38800__(11);
var extends_default = /*#__PURE__*/__nested_webpack_require_38800__.n(helpers_extends);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __nested_webpack_require_38800__(24);
var slicedToArray_default = /*#__PURE__*/__nested_webpack_require_38800__.n(slicedToArray);

// EXTERNAL MODULE: ./renderers/atomics/Image/style.scss
var Image_style = __nested_webpack_require_38800__(45);

// EXTERNAL MODULE: ./components/common/Switch/style.scss
var Switch_style = __nested_webpack_require_38800__(46);

// CONCATENATED MODULE: ./components/common/Switch/index.jsx


/* harmony default export */ var Switch = (function (props) {
  var active = props.active,
      _onClick = props.onClick,
      className = props.className;
  return external_react_default.a.createElement("div", {
    onClick: function onClick() {
      return _onClick();
    },
    className: 'bf-switch ' + className + (active ? ' active' : '')
  });
});
// CONCATENATED MODULE: ./configs/controls.js

/* harmony default export */ var configs_controls = (function (lang, editor) {
  return [{
    key: 'undo',
    title: lang.controls.undo,
    text: external_react_default.a.createElement("i", {
      className: "bfi-undo"
    }),
    type: 'editor-method',
    command: 'undo'
  }, {
    key: 'redo',
    title: lang.controls.redo,
    text: external_react_default.a.createElement("i", {
      className: "bfi-redo"
    }),
    type: 'editor-method',
    command: 'redo'
  }, {
    key: 'remove-styles',
    title: lang.controls.removeStyles,
    text: external_react_default.a.createElement("i", {
      className: "bfi-format_clear"
    }),
    type: 'editor-method',
    command: 'removeSelectionInlineStyles'
  }, {
    key: 'hr',
    title: lang.controls.hr,
    text: external_react_default.a.createElement("i", {
      className: "bfi-hr"
    }),
    type: 'editor-method',
    command: 'insertHorizontalLine'
  }, {
    key: 'bold',
    title: lang.controls.bold,
    text: external_react_default.a.createElement("i", {
      className: "bfi-bold"
    }),
    type: 'inline-style',
    command: 'bold'
  }, {
    key: 'italic',
    title: lang.controls.italic,
    text: external_react_default.a.createElement("i", {
      className: "bfi-italic"
    }),
    type: 'inline-style',
    command: 'italic'
  }, {
    key: 'underline',
    title: lang.controls.underline,
    text: external_react_default.a.createElement("i", {
      className: "bfi-underlined"
    }),
    type: 'inline-style',
    command: 'underline'
  }, {
    key: 'strike-through',
    title: lang.controls.strikeThrough,
    text: external_react_default.a.createElement("i", {
      className: "bfi-strikethrough"
    }),
    type: 'inline-style',
    command: 'strikethrough'
  }, {
    key: 'superscript',
    title: lang.controls.superScript,
    text: external_react_default.a.createElement("i", {
      className: "bfi-superscript"
    }),
    type: 'inline-style',
    command: 'superscript'
  }, {
    key: 'subscript',
    title: lang.controls.subScript,
    text: external_react_default.a.createElement("i", {
      className: "bfi-subscript"
    }),
    type: 'inline-style',
    command: 'subscript'
  }, {
    key: 'headings',
    title: lang.controls.headings,
    type: 'headings'
  }, {
    key: 'blockquote',
    title: lang.controls.blockQuote,
    text: external_react_default.a.createElement("i", {
      className: "bfi-quote"
    }),
    type: 'block-type',
    command: 'blockquote'
  }, {
    key: 'code',
    title: lang.controls.code,
    text: external_react_default.a.createElement("i", {
      className: "bfi-code"
    }),
    type: 'block-type',
    command: 'code-block'
  }, {
    key: 'list-ul',
    title: lang.controls.unorderedList,
    text: external_react_default.a.createElement("i", {
      className: "bfi-list"
    }),
    type: 'block-type',
    command: 'unordered-list-item'
  }, {
    key: 'list-ol',
    title: lang.controls.orderedList,
    text: external_react_default.a.createElement("i", {
      className: "bfi-list-numbered"
    }),
    type: 'block-type',
    command: 'ordered-list-item'
  }, {
    key: 'link',
    title: lang.controls.link,
    type: 'link'
  }, {
    key: 'text-color',
    title: lang.controls.color,
    type: 'text-color'
  }, {
    key: 'line-height',
    title: lang.controls.lineHeight,
    type: 'line-height'
  }, {
    key: 'letter-spacing',
    title: lang.controls.letterSpacing,
    type: 'letter-spacing'
  }, {
    key: 'text-indent',
    title: lang.controls.textIndent,
    type: 'text-indent'
  }, {
    key: 'font-size',
    title: lang.controls.fontSize,
    type: 'font-size'
  }, {
    key: 'font-family',
    title: lang.controls.fontFamily,
    type: 'font-family'
  }, {
    key: 'text-align',
    title: lang.controls.textAlign,
    type: 'text-align'
  }, {
    key: 'media',
    title: lang.controls.media,
    text: external_react_default.a.createElement("i", {
      className: "bfi-media"
    }),
    type: 'media'
  }, {
    key: 'emoji',
    title: lang.controls.emoji,
    text: external_react_default.a.createElement("i", {
      className: "bfi-emoji"
    }),
    type: 'emoji'
  }, {
    key: 'clear',
    title: lang.controls.clear,
    text: external_react_default.a.createElement("i", {
      className: "bfi-clear_all"
    }),
    type: 'editor-method',
    command: 'clearEditorContent'
  }, {
    key: 'fullscreen',
    title: editor.state.isFullscreen ? lang.controls.exitFullscreen : lang.controls.fullscreen,
    text: external_react_default.a.createElement("i", {
      className: editor.state.isFullscreen ? 'bfi-fullscreen-exit' : 'bfi-fullscreen'
    }),
    type: 'editor-method',
    command: 'toggleFullscreen'
  }, {
    key: 'modal',
    type: 'modal'
  }, {
    key: 'button',
    type: 'button'
  }, {
    key: 'dropdown',
    type: 'dropdown'
  }, {
    key: 'component',
    type: 'component'
  }];
});
var imageControlItems = {
  'float-left': {
    text: external_react_default.a.createElement("span", {
      "data-float": "left"
    }, "\\uE91E"),
    command: 'setImageFloat|left'
  },
  'float-right': {
    text: external_react_default.a.createElement("span", {
      "data-float": "right"
    }, "\\uE914"),
    command: 'setImageFloat|right'
  },
  'align-left': {
    text: external_react_default.a.createElement("span", {
      "data-align": "left"
    }, "\\uE027"),
    command: 'setImageAlignment|left'
  },
  'align-center': {
    text: external_react_default.a.createElement("span", {
      "data-align": "center"
    }, "\\uE028"),
    command: 'setImageAlignment|center'
  },
  'align-right': {
    text: external_react_default.a.createElement("span", {
      "data-align": "right"
    }, "\\uE029"),
    command: 'setImageAlignment|right'
  },
  'size': {
    text: external_react_default.a.createElement("span", null, "\\uE3C2"),
    command: 'toggleSizeEditor'
  },
  'link': {
    text: external_react_default.a.createElement("span", null, "\\uE91A"),
    command: 'toggleLinkEditor'
  },
  'remove': {
    text: external_react_default.a.createElement("span", null, "\\uE9AC"),
    command: 'removeImage'
  }
};
// CONCATENATED MODULE: ./renderers/atomics/Image/index.jsx
















var Image_Image =
/*#__PURE__*/
function (_React$Component) {
  inherits_default()(Image, _React$Component);

  function Image() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck_default()(this, Image);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn_default()(this, (_getPrototypeOf2 = getPrototypeOf_default()(Image)).call.apply(_getPrototypeOf2, [this].concat(args)));

    defineProperty_default()(assertThisInitialized_default()(_this), "state", {
      toolbarVisible: false,
      toolbarOffset: 0,
      linkEditorVisible: false,
      sizeEditorVisible: false,
      tempLink: null,
      tempWidth: null,
      tempHeight: null
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "initialLeft", void 0);

    defineProperty_default()(assertThisInitialized_default()(_this), "initialTop", void 0);

    defineProperty_default()(assertThisInitialized_default()(_this), "initialWidth", void 0);

    defineProperty_default()(assertThisInitialized_default()(_this), "initialHeight", void 0);

    defineProperty_default()(assertThisInitialized_default()(_this), "reSizeType", void 0);

    defineProperty_default()(assertThisInitialized_default()(_this), "zoom", void 0);

    defineProperty_default()(assertThisInitialized_default()(_this), "changeSize", function (e) {
      var type = _this.reSizeType;

      if (!_this.initialLeft) {
        _this.initialLeft = e.screenX;
        _this.initialTop = e.screenY;
      }

      if (type === 'rightbottom') {
        _this.initialHeight += e.screenY - _this.initialTop;
        _this.initialWidth += e.screenX - _this.initialLeft;
      }

      if (type === 'leftbottom') {
        _this.initialHeight += e.screenY - _this.initialTop;
        _this.initialWidth += -e.screenX + _this.initialLeft;
      }

      _this.initialLeft = e.screenX;
      _this.initialTop = e.screenY;
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "moveImage", function (e) {
      _this.changeSize(e);

      _this.setState({
        tempWidth: Math.abs(_this.initialWidth),
        tempHeight: Math.abs(_this.initialHeight)
      });
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "upImage", function () {
      var imageEqualRatio = _this.props.imageEqualRatio;

      if (imageEqualRatio) {
        _this.confirmImageSizeEqualRatio();
      } else {
        _this.confirmImageSize();
      }

      document.removeEventListener('mousemove', _this.moveImage);
      document.removeEventListener('mouseup', _this.upImage);
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "repareChangeSize", function (type) {
      return function (e) {
        _this.reSizeType = type;

        var imageRect = _this.imageElement.getBoundingClientRect();

        _this.initialLeft = _this.initialTop = 0;
        _this.initialWidth = imageRect.width;
        _this.initialHeight = imageRect.height;
        _this.zoom = imageRect.width / imageRect.height;
        e.preventDefault();
        document.addEventListener('mousemove', _this.moveImage);
        document.addEventListener('mouseup', _this.upImage);
      };
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "preventDragEvent", function (event) {
      event.stopPropagation();
      event.preventDefault();
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "handleDragStart", function () {
      if (_this.props.editor.editorProps.readOnly || _this.props.editor.editorProps.disabled) {
        return false;
      }

      window.__BRAFT_DRAGING__IMAGE__ = {
        block: _this.props.block,
        mediaData: objectSpread_default()({
          type: 'IMAGE'
        }, _this.props.mediaData)
      };

      _this.setState({
        toolbarVisible: false
      }, function () {
        _this.unlockEditor();
      });

      return true;
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "handleDragEnd", function () {
      window.__BRAFT_DRAGING__IMAGE__ = null;
      return false;
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "executeCommand", function (command) {
      if (typeof command === 'string') {
        var _command$split = command.split('|'),
            _command$split2 = slicedToArray_default()(_command$split, 2),
            method = _command$split2[0],
            param = _command$split2[1];

        _this[method] && _this[method](param);
      } else if (typeof command === 'function') {
        command(_this.props.block, _this.props.mediaData, _this.props.editor.getValue());
      }
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "removeImage", function () {
      _this.props.editor.setValue(external_braft_utils_["ContentUtils"].removeBlock(_this.props.editor.getValue(), _this.props.block));

      _this.unlockEditor();
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "toggleLinkEditor", function () {
      _this.setState({
        linkEditorVisible: !_this.state.linkEditorVisible,
        sizeEditorVisible: false
      });
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "toggleSizeEditor", function () {
      _this.setState({
        linkEditorVisible: false,
        sizeEditorVisible: !_this.state.sizeEditorVisible
      });
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "handleLinkInputKeyDown", function (e) {
      if (e.keyCode === 13) {
        _this.confirmImageLink();
      } else {
        return;
      }
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "setImageLink", function (e) {
      _this.setState({
        tempLink: e.currentTarget.value
      });

      return;
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "confirmImageLink", function () {
      var link = _this.state.tempLink;

      var hookReturns = _this.props.hooks('set-image-link', link)(link);

      if (hookReturns === false) {
        return false;
      }

      if (typeof hookReturns === 'string') {
        link = hookReturns;
      }

      if (link !== null) {
        _this.props.editor.setValue(external_braft_utils_["ContentUtils"].setMediaData(_this.props.editor.getValue(), _this.props.entityKey, {
          link: link
        }));

        window.setImmediate(_this.props.editor.forceRender);
      }
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "handleSizeInputKeyDown", function (e) {
      if (e.keyCode === 13) {
        _this.confirmImageSize();
      } else {
        return;
      }
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "setImageWidth", function (_ref) {
      var currentTarget = _ref.currentTarget;
      var value = currentTarget.value;
      value && !isNaN(value) && (value = value + 'px');

      _this.setState({
        tempWidth: value
      });

      return;
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "setImageHeight", function (_ref2) {
      var currentTarget = _ref2.currentTarget;
      var value = currentTarget.value;
      value && !isNaN(value) && (value = value + 'px');

      _this.setState({
        tempHeight: value
      });

      return;
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "confirmImageSize", function () {
      var _this$state = _this.state,
          width = _this$state.tempWidth,
          height = _this$state.tempHeight;
      var newImageSize = {};
      width !== null && (newImageSize.width = width);
      height !== null && (newImageSize.height = height);

      var hookReturns = _this.props.hooks('set-image-size', newImageSize)(newImageSize);

      if (hookReturns === false) {
        return false;
      }

      if (hookReturns && (hookReturns.width || hookReturns.height)) {
        newImageSize = hookReturns;
      }

      _this.props.editor.setValue(external_braft_utils_["ContentUtils"].setMediaData(_this.props.editor.getValue(), _this.props.entityKey, newImageSize));

      window.setImmediate(_this.props.editor.forceRender);
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "confirmImageSizeEqualRatio", function () {
      var _this$state2 = _this.state,
          width = _this$state2.tempWidth,
          height = _this$state2.tempHeight;
      var equalWidth;
      var equalHeight;
      var newImageSize = {}; // \u5BBD\u5EA6\u8FC7\u5927 \u56FE\u7247\u7B49\u6BD4\u7F29\u653E

      if (width / height > _this.zoom) {
        equalWidth = Math.floor(height * _this.zoom);

        _this.setState({
          tempWidth: equalWidth
        });

        equalHeight = height;
      } else if (width / height < _this.zoom) {
        equalHeight = Math.floor(width / _this.zoom);

        _this.setState({
          tempHeight: equalHeight
        });

        equalWidth = width;
      }

      equalWidth !== null && (newImageSize.width = equalWidth);
      equalHeight !== null && (newImageSize.height = equalHeight);

      var hookReturns = _this.props.hooks('set-image-size', newImageSize)(newImageSize);

      if (hookReturns === false) {
        return false;
      }

      if (hookReturns && (hookReturns.width || hookReturns.height)) {
        newImageSize = hookReturns;
      }

      _this.props.editor.setValue(external_braft_utils_["ContentUtils"].setMediaData(_this.props.editor.getValue(), _this.props.entityKey, newImageSize));

      window.setImmediate(_this.props.editor.forceRender);
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "setImageFloat", function (float) {
      var hookReturns = _this.props.hooks('set-image-float', float)(float);

      if (hookReturns === false) {
        return false;
      }

      if (typeof hookReturns === 'string') {
        float = hookReturns;
      }

      _this.props.editor.setValue(external_braft_utils_["ContentUtils"].setMediaPosition(_this.props.editor.getValue(), _this.props.block, {
        float: float
      }));

      _this.unlockEditor();
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "setImageAlignment", function (alignment) {
      var hookReturns = _this.props.hooks('set-image-alignment', alignment)(alignment);

      if (hookReturns === false) {
        return false;
      }

      if (typeof hookReturns === 'string') {
        alignment = hookReturns;
      }

      _this.props.editor.setValue(external_braft_utils_["ContentUtils"].setMediaPosition(_this.props.editor.getValue(), _this.props.block, {
        alignment: alignment
      }));

      _this.unlockEditor();
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "showToolbar", function (event) {
      if (_this.props.editor.editorProps.readOnly || _this.props.editor.editorProps.disabled) {
        return false;
      }

      event.preventDefault();

      if (!_this.state.toolbarVisible) {
        _this.setState({
          toolbarVisible: true
        }, function () {
          _this.lockEditor();

          _this.setState({
            toolbarOffset: _this.calcToolbarOffset()
          });
        });
      }
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "hideToolbar", function (event) {
      event.preventDefault();

      _this.setState({
        toolbarVisible: false
      }, function () {
        _this.unlockEditor(); // this.props.editor.requestFocus()

      });
    });

    return _this;
  }

  createClass_default()(Image, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          mediaData = _this$props.mediaData,
          language = _this$props.language,
          imageControls = _this$props.imageControls,
          imageResizable = _this$props.imageResizable;
      var _this$state3 = this.state,
          toolbarVisible = _this$state3.toolbarVisible,
          toolbarOffset = _this$state3.toolbarOffset,
          linkEditorVisible = _this$state3.linkEditorVisible,
          sizeEditorVisible = _this$state3.sizeEditorVisible,
          tempWidth = _this$state3.tempWidth,
          tempHeight = _this$state3.tempHeight;
      var blockData = this.props.block.getData();
      var float = blockData.get('float');
      var alignment = blockData.get('alignment');
      var url = mediaData.url,
          link = mediaData.link,
          link_target = mediaData.link_target,
          width = mediaData.width,
          height = mediaData.height,
          meta = mediaData.meta;
      var imageStyles = {};
      var clearFix = false;

      if (float) {
        alignment = null;
      } else if (alignment === 'left') {
        imageStyles.float = 'left';
        clearFix = true;
      } else if (alignment === 'right') {
        imageStyles.float = 'right';
        clearFix = true;
      } else if (alignment === 'center') {
        imageStyles.textAlign = 'center';
      } else {
        imageStyles.float = 'left';
        clearFix = true;
      }

      var renderedControlItems = imageControls.map(function (item, index) {
        if (typeof item === 'string' && imageControlItems[item]) {
          return external_react_default.a.createElement("a", {
            className: item === 'link' && link ? 'active' : '',
            key: index,
            onClick: function onClick() {
              return _this2.executeCommand(imageControlItems[item].command);
            }
          }, imageControlItems[item].text);
        } else if (item && (item.render || item.text)) {
          return item.render ? item.render(mediaData, _this2.props.block) : external_react_default.a.createElement("a", {
            key: index,
            onClick: function onClick() {
              return item.onClick && _this2.executeCommand(item.onClick);
            }
          }, item.text);
        } else {
          return null;
        }
      });
      return external_react_default.a.createElement("div", {
        className: "bf-media"
      }, external_react_default.a.createElement("div", {
        style: imageStyles,
        draggable: true,
        onMouseEnter: this.showToolbar,
        onMouseMove: this.showToolbar,
        onMouseLeave: this.hideToolbar,
        onDragStart: this.handleDragStart,
        onDragEnd: this.handleDragEnd,
        ref: function ref(instance) {
          return _this2.mediaEmbederInstance = instance;
        },
        className: "bf-image"
      }, toolbarVisible ? external_react_default.a.createElement("div", {
        style: {
          marginLeft: toolbarOffset
        },
        ref: function ref(instance) {
          return _this2.toolbarElement = instance;
        },
        "data-float": float,
        "data-align": alignment,
        className: "bf-media-toolbar"
      }, linkEditorVisible ? external_react_default.a.createElement("div", {
        className: "bf-image-link-editor"
      }, external_react_default.a.createElement("div", {
        className: "editor-input-group"
      }, external_react_default.a.createElement("input", {
        type: "text",
        placeholder: language.linkEditor.inputWithEnterPlaceHolder,
        onKeyDown: this.handleLinkInputKeyDown,
        onChange: this.setImageLink,
        defaultValue: link
      }), external_react_default.a.createElement("button", {
        type: "button",
        onClick: this.confirmImageLink
      }, language.base.confirm)), external_react_default.a.createElement("div", {
        className: "switch-group"
      }, external_react_default.a.createElement(Switch, {
        active: link_target === '_blank',
        onClick: function onClick() {
          return _this2.setImageLinkTarget(link_target);
        }
      }), external_react_default.a.createElement("label", null, language.linkEditor.openInNewWindow))) : null, sizeEditorVisible ? external_react_default.a.createElement("div", {
        className: "bf-image-size-editor"
      }, external_react_default.a.createElement("div", {
        className: "editor-input-group"
      }, external_react_default.a.createElement("input", {
        type: "text",
        placeholder: language.base.width,
        onKeyDown: this.handleSizeInputKeyDown,
        onChange: this.setImageWidth,
        defaultValue: width
      }), external_react_default.a.createElement("input", {
        type: "text",
        placeholder: language.base.height,
        onKeyDown: this.handleSizeInputKeyDown,
        onChange: this.setImageHeight,
        defaultValue: height
      }), external_react_default.a.createElement("button", {
        type: "button",
        onClick: this.confirmImageSize
      }, language.base.confirm))) : null, renderedControlItems, external_react_default.a.createElement("i", {
        style: {
          marginLeft: toolbarOffset * -1
        },
        className: "bf-media-toolbar-arrow"
      })) : null, external_react_default.a.createElement("div", {
        style: {
          position: 'relative',
          width: "".concat(width, "px"),
          height: "".concat(height, "px"),
          display: 'inline-block'
        }
      }, external_react_default.a.createElement("img", extends_default()({
        ref: function ref(instance) {
          return _this2.imageElement = instance;
        },
        src: url,
        width: width,
        height: height
      }, meta)), toolbarVisible && imageResizable ? external_react_default.a.createElement("div", {
        className: "bf-csize-icon right-bottom",
        onMouseDown: this.repareChangeSize('rightbottom')
      }) : null, toolbarVisible && imageResizable ? external_react_default.a.createElement("div", {
        className: "bf-csize-icon left-bottom",
        onMouseDown: this.repareChangeSize('leftbottom')
      }) : null, external_react_default.a.createElement("div", {
        className: "bf-pre-csize ".concat(this.reSizeType),
        style: {
          width: "".concat(tempWidth, "px"),
          height: "".concat(tempHeight, "px")
        }
      }))), clearFix && external_react_default.a.createElement("div", {
        className: "clearfix",
        style: {
          clear: 'both',
          height: 0,
          lineHeight: 0,
          float: 'none'
        }
      }));
    }
  }, {
    key: "lockEditor",
    value: function lockEditor() {
      this.props.editor.lockOrUnlockEditor(true);
    }
  }, {
    key: "unlockEditor",
    value: function unlockEditor() {
      this.props.editor.lockOrUnlockEditor(false);
    }
  }, {
    key: "calcToolbarOffset",
    value: function calcToolbarOffset() {
      var _this$props2 = this.props,
          getContainerNode = _this$props2.getContainerNode,
          containerNode = _this$props2.containerNode;
      var container = getContainerNode ? getContainerNode() : containerNode;

      if (!container) {
        return 0;
      }

      var viewRect = container.querySelector('.bf-content').getBoundingClientRect();
      var toolbarRect = this.toolbarElement.getBoundingClientRect();
      var imageRect = this.imageElement.getBoundingClientRect();
      var right = viewRect.right - (imageRect.right - imageRect.width / 2 + toolbarRect.width / 2);
      var left = imageRect.left + imageRect.width / 2 - toolbarRect.width / 2 - viewRect.left;

      if (right < 10) {
        return right - 10;
      } else if (left < 10) {
        return left * -1 + 10;
      } else {
        return 0;
      }
    }
  }, {
    key: "setImageLinkTarget",
    value: function setImageLinkTarget(link_target) {
      var hookReturns = this.props.hooks('set-image-link-target', link_target)(link_target);

      if (hookReturns === false) {
        return false;
      }

      if (typeof hookReturns === 'string') {
        link_target = hookReturns;
      }

      link_target = link_target === '_blank' ? '' : '_blank';
      this.props.editor.setValue(external_braft_utils_["ContentUtils"].setMediaData(this.props.editor.getValue(), this.props.entityKey, {
        link_target: link_target
      }));
      window.setImmediate(this.props.editor.forceRender);
    }
  }]);

  return Image;
}(external_react_default.a.Component);


// EXTERNAL MODULE: ./renderers/atomics/Video/style.scss
var Video_style = __nested_webpack_require_38800__(47);

// EXTERNAL MODULE: ./components/common/Modal/style.scss
var Modal_style = __nested_webpack_require_38800__(48);

// EXTERNAL MODULE: external "react-dom"
var external_react_dom_ = __nested_webpack_require_38800__(16);
var external_react_dom_default = /*#__PURE__*/__nested_webpack_require_38800__.n(external_react_dom_);

// CONCATENATED MODULE: ./components/common/Modal/index.jsx














var Modal_Modal =
/*#__PURE__*/
function (_React$Component) {
  inherits_default()(Modal, _React$Component);

  function Modal(props) {
    var _this;

    classCallCheck_default()(this, Modal);

    _this = possibleConstructorReturn_default()(this, getPrototypeOf_default()(Modal).call(this, props));

    defineProperty_default()(assertThisInitialized_default()(_this), "handleTransitionEnd", function () {
      if (!_this.rootElement || !_this.rootElement.classList) {
        return false;
      }

      if (!_this.rootElement.classList.contains('active')) {
        external_react_dom_default.a.unmountComponentAtNode(_this.rootElement) && _this.rootElement.parentNode.removeChild(_this.rootElement);
      }
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "handleMouseDown", function (event) {
      var tagName = event.target.tagName.toLowerCase();

      if (tagName === 'input' || tagName === 'textarea') {
        return false;
      }

      event.preventDefault();
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "handleCancel", function () {
      _this.props.closeOnCancel && _this.close();
      _this.props.onCancel && _this.props.onCancel();
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "handleConfirm", function () {
      _this.props.closeOnConfirm && _this.close();
      _this.props.onConfirm && _this.props.onConfirm();
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "handleMaskClick", function () {
      _this.props.closeOnBlur && _this.close();
      _this.props.onBlue && _this.props.onBlue();
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "close", function () {
      _this.unrenderComponent();

      _this.props.onClose && _this.props.onClose();
    });

    _this.active = false;
    _this.componentId = 'BRAFT-MODAL-' + external_braft_utils_["BaseUtils"].UniqueIndex();
    return _this;
  }

  createClass_default()(Modal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.visible) {
        this.active = true;
        this.renderComponent(this.props);
      }
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(next) {
      if (this.props.visible && !next.visible) {
        this.unrenderComponent();
      } else if (this.props.visible || next.visible) {
        this.active = true;
        this.renderComponent(next);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }, {
    key: "unrenderComponent",
    value: function unrenderComponent() {
      this.active = false;
      this.activeId && window.clearImmediate(this.activeId);

      if (this.rootElement && this.rootElement.classList) {
        this.rootElement.classList.remove('active');
      }
    }
  }, {
    key: "renderComponent",
    value: function renderComponent(props) {
      var _this2 = this;

      if (!this.active) {
        return false;
      }

      var title = props.title,
          className = props.className,
          width = props.width,
          height = props.height,
          children = props.children,
          component = props.component,
          confirmable = props.confirmable,
          showFooter = props.showFooter,
          showCancel = props.showCancel,
          showConfirm = props.showConfirm,
          showClose = props.showClose,
          cancelText = props.cancelText,
          confirmText = props.confirmText,
          bottomText = props.bottomText,
          language = props.language;
      typeof showCancel === 'undefined' && (showCancel = true);
      typeof showClose === 'undefined' && (showClose = true);
      typeof showConfirm === 'undefined' && (showConfirm = true);
      typeof showFooter === 'undefined' && (showFooter = true);
      var childComponent = external_react_default.a.createElement("div", {
        onMouseDown: this.handleMouseDown,
        className: 'bf-modal ' + (className || '')
      }, external_react_default.a.createElement("div", {
        className: "bf-modal-mask",
        onClick: this.handleMaskClick
      }), external_react_default.a.createElement("div", {
        onTransitionEnd: this.handleTransitionEnd,
        style: {
          width: width,
          height: height
        },
        className: "bf-modal-content"
      }, external_react_default.a.createElement("div", {
        className: "bf-modal-header"
      }, external_react_default.a.createElement("h3", {
        className: "bf-modal-caption"
      }, title), showClose && external_react_default.a.createElement("button", {
        type: "button",
        onClick: this.close,
        className: "bf-modal-close-button"
      }, external_react_default.a.createElement("i", {
        className: "bfi-close"
      }))), external_react_default.a.createElement("div", {
        className: "bf-modal-body"
      }, children || component), showFooter ? external_react_default.a.createElement("div", {
        className: "bf-modal-footer"
      }, external_react_default.a.createElement("div", {
        className: "bf-modal-addon-text"
      }, bottomText), external_react_default.a.createElement("div", {
        className: "bf-modal-buttons"
      }, showCancel && external_react_default.a.createElement("button", {
        type: "button",
        onClick: this.handleCancel,
        className: "bf-modal-cancel"
      }, cancelText || language.base.cancel), showConfirm && external_react_default.a.createElement("button", {
        type: "button",
        onClick: this.handleConfirm,
        className: 'bf-modal-confirm ' + (!confirmable ? 'disabled' : '')
      }, confirmText || language.base.confirm))) : null));
      this.rootElement = document.querySelector('#' + this.componentId);

      if (!this.rootElement) {
        this.rootElement = document.createElement('div');
        this.rootElement.id = this.componentId;
        this.rootElement.className = 'bf-modal-root';
        document.body.appendChild(this.rootElement);
      }

      external_react_dom_default.a.render(childComponent, this.rootElement);
      this.activeId = window.setImmediate(function () {
        _this2.rootElement.classList.add('active');
      });
    }
  }]);

  return Modal;
}(external_react_default.a.Component);

defineProperty_default()(Modal_Modal, "defaultProps", {
  showFooter: true,
  closeOnBlur: true
});


var Modal_showModal = function showModal(props) {
  var hostNode = document.createElement('div');
  hostNode.style.display = 'none';
  document.body.appendChild(hostNode);
  props = objectSpread_default()({
    visible: true,
    closeOnConfirm: true,
    closeOnCancel: true
  }, props);

  var close = function close() {
    external_react_dom_default.a.unmountComponentAtNode(hostNode) && hostNode.parentNode.removeChild(hostNode);
  };

  var onConfirm = function onConfirm() {
    props.onConfirm && props.onConfirm();
  };

  var onCancel = function onCancel() {
    props.onCancel && props.onCancel();
  };

  var onClose = function onClose() {
    close();
    props.onClose && props.onClose();
  };

  var modalInstance = external_react_dom_default.a.render(external_react_default.a.createElement(Modal_Modal, extends_default()({}, props, {
    onConfirm: onConfirm,
    onCancel: onCancel,
    onClose: onClose
  })), hostNode);
  modalInstance.destroy = close;
  modalInstance.update = modalInstance.renderComponent;
  return modalInstance;
};
// EXTERNAL MODULE: ./components/business/PlayerModal/style.scss
var PlayerModal_style = __nested_webpack_require_38800__(49);

// CONCATENATED MODULE: ./components/business/PlayerModal/index.jsx




var PlayerModal_playViaModal = function playViaModal(title, component, language) {
  return Modal_showModal({
    title: title,
    component: component,
    language: language,
    showFooter: false
  });
};

var typeIconsMap = {
  'video': 'bfi-film',
  'audio': 'bfi-music',
  'embed': 'bfi-code'
};
/* harmony default export */ var PlayerModal = (function (_ref) {
  var title = _ref.title,
      type = _ref.type,
      language = _ref.language,
      name = _ref.name,
      url = _ref.url,
      poster = _ref.poster,
      children = _ref.children,
      onRemove = _ref.onRemove;
  return external_react_default.a.createElement("div", {
    className: "bf-player-holder ".concat(type)
  }, external_react_default.a.createElement("div", {
    className: "icon-badge"
  }, external_react_default.a.createElement("i", {
    className: typeIconsMap[type]
  }), external_react_default.a.createElement("span", {
    className: "text"
  }, language.media[type])), external_react_default.a.createElement("button", {
    onMouseDown: onRemove,
    className: "button-remove"
  }, external_react_default.a.createElement("i", {
    className: "bfi-close"
  })), external_react_default.a.createElement("button", {
    onMouseDown: function onMouseDown() {
      return PlayerModal_playViaModal(name ? "".concat(title, ":").concat(name) : title, children, language);
    },
    className: "button-play"
  }, external_react_default.a.createElement("i", {
    className: "bfi-play_arrow"
  })), name ? external_react_default.a.createElement("h5", {
    className: "bf-name"
  }, name) : null, external_react_default.a.createElement("h6", {
    className: "bf-url"
  }, url), poster ? external_react_default.a.createElement("div", {
    className: "bf-poster",
    style: {
      backgroundImage: "url(".concat(poster, ")")
    }
  }) : null);
});
// CONCATENATED MODULE: ./renderers/atomics/Video/index.jsx












var Video_Video =
/*#__PURE__*/
function (_React$Component) {
  inherits_default()(Video, _React$Component);

  function Video() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck_default()(this, Video);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn_default()(this, (_getPrototypeOf2 = getPrototypeOf_default()(Video)).call.apply(_getPrototypeOf2, [this].concat(args)));

    defineProperty_default()(assertThisInitialized_default()(_this), "removeVideo", function () {
      _this.props.editor.setValue(external_braft_utils_["ContentUtils"].removeBlock(_this.props.editorState, _this.props.block));
    });

    return _this;
  }

  createClass_default()(Video, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          mediaData = _this$props.mediaData,
          language = _this$props.language;
      var url = mediaData.url,
          name = mediaData.name,
          meta = mediaData.meta;
      return external_react_default.a.createElement("div", {
        className: "bf-video-wrap"
      }, external_react_default.a.createElement(PlayerModal, {
        type: "video",
        onRemove: this.removeVideo,
        poster: meta ? meta.poster || '' : '',
        language: language,
        url: url,
        name: name,
        title: language.videoPlayer.title
      }, external_react_default.a.createElement("div", {
        className: "bf-video-player"
      }, external_react_default.a.createElement("video", {
        controls: true,
        poster: meta ? meta.poster || '' : ''
      }, external_react_default.a.createElement("source", {
        src: url
      })))));
    }
  }]);

  return Video;
}(external_react_default.a.Component);


// EXTERNAL MODULE: ./renderers/atomics/Audio/style.scss
var Audio_style = __nested_webpack_require_38800__(50);

// CONCATENATED MODULE: ./renderers/atomics/Audio/index.jsx












var Audio_Audio =
/*#__PURE__*/
function (_React$Component) {
  inherits_default()(Audio, _React$Component);

  function Audio() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck_default()(this, Audio);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn_default()(this, (_getPrototypeOf2 = getPrototypeOf_default()(Audio)).call.apply(_getPrototypeOf2, [this].concat(args)));

    defineProperty_default()(assertThisInitialized_default()(_this), "removeAudio", function () {
      _this.props.editor.setValue(external_braft_utils_["ContentUtils"].removeBlock(_this.props.editorState, _this.props.block));
    });

    return _this;
  }

  createClass_default()(Audio, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          mediaData = _this$props.mediaData,
          language = _this$props.language;
      var url = mediaData.url,
          name = mediaData.name,
          meta = mediaData.meta;
      return external_react_default.a.createElement("div", {
        className: "bf-audio-wrap"
      }, external_react_default.a.createElement(PlayerModal, {
        type: "audio",
        onRemove: this.removeAudio,
        poster: meta ? meta.poster || '' : '',
        language: language,
        url: url,
        name: name,
        title: language.audioPlayer.title
      }, external_react_default.a.createElement("div", {
        className: "bf-audio-player"
      }, external_react_default.a.createElement("audio", {
        controls: true,
        src: url
      }))));
    }
  }]);

  return Audio;
}(external_react_default.a.Component);


// EXTERNAL MODULE: ./renderers/atomics/Embed/style.scss
var Embed_style = __nested_webpack_require_38800__(51);

// CONCATENATED MODULE: ./renderers/atomics/Embed/index.jsx












var Embed_Embed =
/*#__PURE__*/
function (_React$Component) {
  inherits_default()(Embed, _React$Component);

  function Embed() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck_default()(this, Embed);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn_default()(this, (_getPrototypeOf2 = getPrototypeOf_default()(Embed)).call.apply(_getPrototypeOf2, [this].concat(args)));

    defineProperty_default()(assertThisInitialized_default()(_this), "removeEmbed", function () {
      _this.props.editor.setValue(external_braft_utils_["ContentUtils"].removeBlock(_this.props.editorState, _this.props.block));
    });

    return _this;
  }

  createClass_default()(Embed, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          mediaData = _this$props.mediaData,
          language = _this$props.language;
      var name = mediaData.name,
          url = mediaData.url,
          meta = mediaData.meta;
      return external_react_default.a.createElement("div", {
        className: "bf-embed-wrap"
      }, external_react_default.a.createElement(PlayerModal, {
        type: "embed",
        onRemove: this.removeEmbed,
        poster: meta ? meta.poster || '' : '',
        language: language,
        url: url,
        name: name,
        title: language.videoPlayer.embedTitle
      }, external_react_default.a.createElement("div", {
        className: "bf-embed-player",
        dangerouslySetInnerHTML: {
          __html: url
        }
      })));
    }
  }]);

  return Embed;
}(external_react_default.a.Component);


// EXTERNAL MODULE: ./renderers/atomics/HorizontalLine/style.scss
var HorizontalLine_style = __nested_webpack_require_38800__(52);

// CONCATENATED MODULE: ./renderers/atomics/HorizontalLine/index.jsx











var HorizontalLine_HorizontalLine =
/*#__PURE__*/
function (_React$Component) {
  inherits_default()(HorizontalLine, _React$Component);

  function HorizontalLine() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck_default()(this, HorizontalLine);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn_default()(this, (_getPrototypeOf2 = getPrototypeOf_default()(HorizontalLine)).call.apply(_getPrototypeOf2, [this].concat(args)));

    defineProperty_default()(assertThisInitialized_default()(_this), "removeHorizontalLine", function () {
      _this.props.editor.setValue(external_braft_utils_["ContentUtils"].removeBlock(_this.props.editorState, _this.props.block));
    });

    return _this;
  }

  createClass_default()(HorizontalLine, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("div", {
        className: "bf-hr"
      }, external_react_default.a.createElement("div", {
        className: "bf-media-toolbar"
      }, external_react_default.a.createElement("a", {
        onClick: this.removeHorizontalLine
      }, "\\uE9AC")));
    }
  }]);

  return HorizontalLine;
}(external_react_default.a.Component);


// CONCATENATED MODULE: ./renderers/block/blockRendererFn.js











var blockRendererFn_BlockRenderFnContext = function BlockRenderFnContext() {
  var _this = this;

  classCallCheck_default()(this, BlockRenderFnContext);

  defineProperty_default()(this, "superProps", void 0);

  defineProperty_default()(this, "customBlockRendererFn", void 0);

  defineProperty_default()(this, "getRenderFn", function (superProps, customBlockRendererFn) {
    _this.superProps = superProps;
    _this.customBlockRendererFn = customBlockRendererFn;
    return _this.blockRendererFn;
  });

  defineProperty_default()(this, "renderAtomicBlock", function (props) {
    var superProps = _this.superProps;
    var entityKey = props.block.getEntityAt(0);

    if (!entityKey) {
      return null;
    }

    var entity = props.contentState.getEntity(entityKey);
    var mediaData = entity.getData();
    var mediaType = entity.getType();

    var mediaProps = objectSpread_default()({}, superProps, {
      block: props.block,
      mediaData: mediaData,
      entityKey: entityKey
    });

    if (mediaType === 'IMAGE') {
      return external_react_default.a.createElement(Image_Image, mediaProps);
    } else if (mediaType === 'AUDIO') {
      return external_react_default.a.createElement(Audio_Audio, mediaProps);
    } else if (mediaType === 'VIDEO') {
      return external_react_default.a.createElement(Video_Video, mediaProps);
    } else if (mediaType === 'EMBED') {
      return external_react_default.a.createElement(Embed_Embed, mediaProps);
    } else if (mediaType === 'HR') {
      return external_react_default.a.createElement(HorizontalLine_HorizontalLine, mediaProps);
    }

    if (superProps.extendAtomics) {
      var atomics = superProps.extendAtomics;

      for (var i = 0; i < atomics.length; i++) {
        if (mediaType === atomics[i].type) {
          var Component = atomics[i].component;
          return external_react_default.a.createElement(Component, mediaProps);
        }
      }
    }

    return null;
  });

  defineProperty_default()(this, "blockRendererFn", function (block) {
    var customBlockRendererFn = _this.customBlockRendererFn,
        superProps = _this.superProps;
    var blockType = block.getType();
    var blockRenderer = null;

    if (customBlockRendererFn) {
      blockRenderer = customBlockRendererFn(block, superProps) || null;
    }

    if (blockRenderer) {
      return blockRenderer;
    }

    var extensionBlockRendererFns = getExtensionBlockRendererFns(superProps.editorId);
    extensionBlockRendererFns.find(function (item) {
      if (item.blockType === blockType || item.blockType instanceof RegExp && item.blockType.test(blockType)) {
        blockRenderer = item.rendererFn ? item.rendererFn(superProps) : null;
        return true;
      }
    });

    if (blockRenderer) {
      return blockRenderer;
    }

    if (blockType === 'atomic') {
      blockRenderer = {
        component: _this.renderAtomicBlock,
        editable: false
      };
    }

    return blockRenderer;
  });
};

var blockRenderFnContext = new blockRendererFn_BlockRenderFnContext();
/* harmony default export */ var block_blockRendererFn = (blockRenderFnContext.getRenderFn);
// CONCATENATED MODULE: ./renderers/block/blockStyleFn.js
/* harmony default export */ var block_blockStyleFn = (function (customBlockStyleFn) {
  return function (block) {
    var blockAlignment = block.getData() && block.getData().get('textAlign');
    var blockIndent = block.getData() && block.getData().get('textIndent');
    var blockFloat = block.getData() && block.getData().get('float');
    var result = '';

    if (blockAlignment) {
      result = "bfa-".concat(blockAlignment);
    }

    if (blockIndent && blockIndent !== 0) {
      result += " bftd-".concat(blockIndent);
    }

    if (blockFloat) {
      result += " bff-".concat(blockFloat);
    }

    if (customBlockStyleFn) {
      result += customBlockStyleFn(block) || '';
    }

    return result;
  };
});
// CONCATENATED MODULE: ./renderers/inline/inlineStyleMap.js


/* harmony default export */ var inlineStyleMap = (function (props) {
  var customStyleMap = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var extensionInlineStyleMap = getExtensionInlineStyleMap(props.editorId);
  return objectSpread_default()({
    'SUPERSCRIPT': {
      position: 'relative',
      top: '-8px',
      fontSize: '11px'
    },
    'SUBSCRIPT': {
      position: 'relative',
      bottom: '-8px',
      fontSize: '11px'
    }
  }, extensionInlineStyleMap, customStyleMap);
});
// CONCATENATED MODULE: ./renderers/inline/inlineStyleFn.js


var getStyleValue = function getStyleValue(style) {
  return style.split('-')[1];
};

/* harmony default export */ var inlineStyleFn = (function (props, options) {
  return function (styles, block) {
    var output = {};
    var fontFamilies = options.fontFamilies,
        unitExportFn = options.unitExportFn,
        customStyleFn = options.customStyleFn;
    var extensionInlineStyleFns = getExtensionInlineStyleFns(props.editorId);
    extensionInlineStyleFns.forEach(function (item) {
      output = item.styleFn ? item.styleFn(styles, block, output) : output;
    });
    output = customStyleFn ? customStyleFn(styles, block, output) : {};
    styles.forEach(function (style) {
      if (style.indexOf('COLOR-') === 0) {
        output.color = '#' + getStyleValue(style);
      } else if (style.indexOf('BGCOLOR-') === 0) {
        output.backgroundColor = '#' + getStyleValue(style);
      } else if (style.indexOf('FONTSIZE-') === 0) {
        output.fontSize = unitExportFn(getStyleValue(style), 'font-size', 'editor');
      } else if (style.indexOf('LINEHEIGHT-') === 0) {
        output.lineHeight = unitExportFn(getStyleValue(style), 'line-height', 'editor');
      } else if (style.indexOf('LETTERSPACING-') === 0) {
        output.letterSpacing = unitExportFn(getStyleValue(style), 'letter-spacing', 'editor');
      } else if (style.indexOf('TEXTINDENT-') === 0) {
        output.textIndent = unitExportFn(getStyleValue(style), 'text-indent', 'editor');
      } else if (style.indexOf('FONTFAMILY-') === 0) {
        output.fontFamily = (fontFamilies.find(function (item) {
          return item.name.toUpperCase() === getStyleValue(style);
        }) || {}).family || '';
      }
    });
    return output;
  };
});
// EXTERNAL MODULE: ../node_modules/draft-js-multidecorators/index.js
var draft_js_multidecorators = __nested_webpack_require_38800__(18);
var draft_js_multidecorators_default = /*#__PURE__*/__nested_webpack_require_38800__.n(draft_js_multidecorators);

// CONCATENATED MODULE: ./renderers/decorators/Link/index.jsx

/* harmony default export */ var Link = (function (props) {
  var children = props.children,
      entityKey = props.entityKey,
      contentState = props.contentState;

  var _contentState$getEnti = contentState.getEntity(entityKey).getData(),
      href = _contentState$getEnti.href,
      target = _contentState$getEnti.target;

  return external_react_default.a.createElement("span", {
    className: "bf-link-wrap"
  }, external_react_default.a.createElement("a", {
    onClick: function onClick(event) {
      return viewLink(event, href);
    },
    className: "bf-link",
    href: href,
    target: target
  }, children));
});

var viewLink = function viewLink(event, link) {
  // When pressing the Ctrl / command key, click to open the url in the link text
  if (event.getModifierState('Control') || event.getModifierState('Meta')) {
    var tempLink = document.createElement('a');
    tempLink.href = link;
    tempLink.target = event.currentTarget.target;
    tempLink.click();
  }
};
// CONCATENATED MODULE: ./renderers/decorators/index.js






var KEY_SEPARATOR = '-';

draft_js_multidecorators_default.a.prototype.getDecorations = function (block, contentState) {
  var decorations = Array(block.getText().length).fill(null);
  this.decorators.forEach(function (decorator, i) {
    decorator.getDecorations(block, contentState).forEach(function (key, offset) {
      if (!key) {
        return;
      }

      key = i + KEY_SEPARATOR + key;
      decorations[offset] = key;
    });
  });
  return external_immutable_default.a.List(decorations);
};

var builtinDecorators = [{
  type: 'entity',
  decorator: {
    key: 'LINK',
    component: Link
  }
}];

var createStrategy = function createStrategy(type) {
  return function (block, callback, contentState) {
    block.findEntityRanges(function (character) {
      var entityKey = character.getEntity();
      return entityKey !== null && contentState.getEntity(entityKey).getType() === type;
    }, callback);
  };
};

/* harmony default export */ var decorators = (function (editorId) {
  var extensionDecorators = getExtensionDecorators(editorId);
  var entityDecorators = [].concat(builtinDecorators, toConsumableArray_default()(extensionDecorators.filter(function (item) {
    return item.type === 'entity';
  })));
  var strategyDecorators = extensionDecorators.filter(function (item) {
    return item.type === 'strategy';
  });
  var classDecorators = extensionDecorators.filter(function (item) {
    return item.type === 'class';
  });
  return new draft_js_multidecorators_default.a([].concat(toConsumableArray_default()(classDecorators.map(function (item) {
    return item.decorator;
  })), [// combine decorators created with strategy
  new external_draft_js_["CompositeDecorator"](strategyDecorators.map(function (item) {
    return item.decorator;
  })), // combine decorators for entities
  new external_draft_js_["CompositeDecorator"](entityDecorators.map(function (item) {
    return {
      strategy: createStrategy(item.decorator.key),
      component: item.decorator.component
    };
  }))]));
});
// CONCATENATED MODULE: ./renderers/index.js






var getBlockRenderMap = block_blockRenderMap;
var getBlockRendererFn = block_blockRendererFn;
var getBlockStyleFn = block_blockStyleFn;
var getCustomStyleMap = inlineStyleMap;
var getCustomStyleFn = inlineStyleFn;
var getDecorators = decorators;
// EXTERNAL MODULE: ./components/business/ControlBar/style.scss
var ControlBar_style = __nested_webpack_require_38800__(53);

// EXTERNAL MODULE: ./components/business/LinkEditor/style.scss
var LinkEditor_style = __nested_webpack_require_38800__(54);

// EXTERNAL MODULE: ./components/common/DropDown/style.scss
var DropDown_style = __nested_webpack_require_38800__(55);

// CONCATENATED MODULE: ./helpers/responsive.js


var resizeEventHandlers = [];
var responsiveHelperInited = false;
var debouce = false;
/* harmony default export */ var responsive = ({
  resolve: function resolve(eventHandler) {
    var id = external_braft_utils_["BaseUtils"].UniqueIndex();
    resizeEventHandlers.push({
      id: id,
      eventHandler: eventHandler
    });
    return id;
  },
  unresolve: function unresolve(id) {
    resizeEventHandlers = resizeEventHandlers.filter(function (item) {
      return item.id !== id;
    });
  }
});

if (!responsiveHelperInited && (typeof window === "undefined" ? "undefined" : typeof_default()(window)) === 'object') {
  window.addEventListener('resize', function (event) {
    clearTimeout(debouce);
    debouce = setTimeout(function () {
      resizeEventHandlers.map(function (item) {
        typeof item.eventHandler === 'function' && item.eventHandler(event);
      });
      debouce = false;
    }, 100);
  });
  responsiveHelperInited = true;
}
// CONCATENATED MODULE: ./components/common/DropDown/index.jsx











var DropDown_DropDown =
/*#__PURE__*/
function (_React$Component) {
  inherits_default()(DropDown, _React$Component);

  function DropDown() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck_default()(this, DropDown);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn_default()(this, (_getPrototypeOf2 = getPrototypeOf_default()(DropDown)).call.apply(_getPrototypeOf2, [this].concat(args)));

    defineProperty_default()(assertThisInitialized_default()(_this), "responsiveResolveId", null);

    defineProperty_default()(assertThisInitialized_default()(_this), "dropDownHandlerElement", null);

    defineProperty_default()(assertThisInitialized_default()(_this), "dropDownContentElement", null);

    defineProperty_default()(assertThisInitialized_default()(_this), "state", {
      active: false,
      offset: 0
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "fixDropDownPosition", function () {
      var viewRect = _this.props.getContainerNode().getBoundingClientRect();

      var handlerRect = _this.dropDownHandlerElement.getBoundingClientRect();

      var contentRect = _this.dropDownContentElement.getBoundingClientRect();

      var offset = 0;
      var right = handlerRect.right - handlerRect.width / 2 + contentRect.width / 2;
      var left = handlerRect.left + handlerRect.width / 2 - contentRect.width / 2;
      right = viewRect.right - right;
      left = left - viewRect.left;

      if (right < 10) {
        offset = right - 10;
      } else if (left < 10) {
        offset = left * -1 + 10;
      }

      if (offset !== _this.state.offset) {
        _this.setState({
          offset: offset
        });
      }
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "registerClickEvent", function (event) {
      var autoHide = _this.props.autoHide;
      var active = _this.state.active;

      if (_this.dropDownContentElement.contains(event.target) || _this.dropDownHandlerElement.contains(event.target)) {
        return false;
      }

      autoHide && active && _this.hide();
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "toggle", function () {
      _this.setState({
        active: !_this.state.active
      });
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "show", function () {
      _this.setState({
        active: true
      });
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "hide", function () {
      _this.setState({
        active: false
      });
    });

    return _this;
  }

  createClass_default()(DropDown, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (document) {
        document.body.addEventListener('click', this.registerClickEvent);
        this.responsiveResolveId = responsive.resolve(this.fixDropDownPosition);
      }
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(next) {
      if (!this.props.disabled && next.disabled) {
        this.hide();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevState) {
      if (!prevState.active && this.state.active) {
        this.fixDropDownPosition();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (document) {
        document.body.removeEventListener('click', this.registerClickEvent);
        responsive.unresolve(this.responsiveResolveId);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          active = _this$state.active,
          offset = _this$state.offset;
      var _this$props = this.props,
          caption = _this$props.caption,
          htmlCaption = _this$props.htmlCaption,
          title = _this$props.title,
          disabled = _this$props.disabled,
          showArrow = _this$props.showArrow,
          arrowActive = _this$props.arrowActive,
          className = _this$props.className,
          children = _this$props.children,
          theme = _this$props.theme;
      disabled && (active = false);
      theme === 'light' && (className = ' light-theme ' + className);
      return external_react_default.a.createElement("div", {
        className: 'bf-dropdown ' + (active ? 'active ' : '') + (disabled ? 'disabled ' : '') + className
      }, htmlCaption ? external_react_default.a.createElement("button", {
        type: "button",
        className: "dropdown-handler",
        "data-title": title,
        onClick: this.toggle,
        dangerouslySetInnerHTML: htmlCaption ? {
          __html: htmlCaption
        } : null,
        ref: function ref(instance) {
          return _this2.dropDownHandlerElement = instance;
        }
      }) : external_react_default.a.createElement("button", {
        type: "button",
        className: "dropdown-handler",
        "data-title": title,
        onClick: this.toggle,
        ref: function ref(instance) {
          return _this2.dropDownHandlerElement = instance;
        }
      }, external_react_default.a.createElement("span", null, caption), showArrow !== false ? external_react_default.a.createElement("i", {
        className: "bfi-drop-down"
      }) : null), external_react_default.a.createElement("div", {
        className: "dropdown-content",
        style: {
          marginLeft: offset
        },
        ref: function ref(instance) {
          return _this2.dropDownContentElement = instance;
        }
      }, external_react_default.a.createElement("i", {
        style: {
          marginLeft: offset * -1
        },
        className: 'dropdown-arrow' + (arrowActive ? ' active' : '')
      }), external_react_default.a.createElement("div", {
        className: "dropdown-content-inner"
      }, children)));
    }
  }]);

  return DropDown;
}(external_react_default.a.Component);


// CONCATENATED MODULE: ./components/business/ControlGroup/index.jsx

/* harmony default export */ var ControlGroup = (function (props) {
  if (external_react_default.a.Fragment) {
    return external_react_default.a.createElement(external_react_default.a.Fragment, null, props.children);
  } else {
    return external_react_default.a.createElement("div", {
      className: "control-item-group"
    }, props.children);
  }
});
// CONCATENATED MODULE: ./components/business/LinkEditor/index.jsx














var LinkEditor_LinkEditor =
/*#__PURE__*/
function (_React$Component) {
  inherits_default()(LinkEditor, _React$Component);

  function LinkEditor(props) {
    var _this;

    classCallCheck_default()(this, LinkEditor);

    _this = possibleConstructorReturn_default()(this, getPrototypeOf_default()(LinkEditor).call(this, props));

    defineProperty_default()(assertThisInitialized_default()(_this), "dropDownInstance", null);

    defineProperty_default()(assertThisInitialized_default()(_this), "handeKeyDown", function (e) {
      if (e.keyCode === 13) {
        _this.handleConfirm();

        e.preventDefault();
        return false;
      }
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "handleTnputText", function (e) {
      _this.setState({
        text: e.currentTarget.value
      });
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "handleInputLink", function (e) {
      _this.setState({
        href: e.currentTarget.value
      });
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "setTarget", function () {
      _this.setState({
        target: _this.state.target === '_blank' ? '' : '_blank'
      });
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "handleCancel", function () {
      _this.dropDownInstance.hide();
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "handleUnlink", function () {
      _this.dropDownInstance.hide();

      _this.props.editor.setValue(external_braft_utils_["ContentUtils"].toggleSelectionLink(_this.props.editorState, false));
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "handleConfirm", function () {
      var _this$state = _this.state,
          text = _this$state.text,
          href = _this$state.href,
          target = _this$state.target,
          textSelected = _this$state.textSelected;

      var hookReturns = _this.props.hooks('toggle-link', {
        href: href,
        target: target
      })({
        href: href,
        target: target
      });

      _this.dropDownInstance.hide();

      _this.props.editor.requestFocus();

      if (hookReturns === false) {
        return false;
      }

      if (hookReturns) {
        typeof hookReturns.href === 'string' && (href = hookReturns.href);
        typeof hookReturns.target === 'string' && (target = hookReturns.target);
      }

      if (textSelected) {
        if (href) {
          _this.props.editor.setValue(external_braft_utils_["ContentUtils"].toggleSelectionLink(_this.props.editorState, href, target));
        } else {
          _this.props.editor.setValue(external_braft_utils_["ContentUtils"].toggleSelectionLink(_this.props.editorState, false));
        }
      } else {
        _this.props.editor.setValue(external_braft_utils_["ContentUtils"].insertText(_this.props.editorState, text || href, null, {
          type: 'LINK',
          data: {
            href: href,
            target: target
          }
        }));
      }
    });

    _this.state = {
      text: '',
      href: '',
      target: props.defaultLinkTarget || '',
      textSelected: false
    };
    return _this;
  }

  createClass_default()(LinkEditor, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var _ContentUtils$getSele = external_braft_utils_["ContentUtils"].getSelectionEntityData(nextProps.editorState, 'LINK'),
          href = _ContentUtils$getSele.href,
          target = _ContentUtils$getSele.target;

      var textSelected = !external_braft_utils_["ContentUtils"].isSelectionCollapsed(this.props.editorState) && external_braft_utils_["ContentUtils"].getSelectionBlockType(this.props.editorState) !== 'atomic';
      var selectedText = '';

      if (textSelected) {
        selectedText = external_braft_utils_["ContentUtils"].getSelectionText(this.props.editorState);
      }

      this.setState({
        textSelected: textSelected,
        text: selectedText,
        href: href || '',
        target: typeof target === 'undefined' ? nextProps.defaultLinkTarget || '' : target || ''
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var allowInsertLinkText = this.props.allowInsertLinkText;
      var _this$state2 = this.state,
          text = _this$state2.text,
          href = _this$state2.href,
          target = _this$state2.target,
          textSelected = _this$state2.textSelected;
      var caption = external_react_default.a.createElement("i", {
        className: "bfi-link"
      });
      return external_react_default.a.createElement(ControlGroup, null, external_react_default.a.createElement(DropDown_DropDown, {
        key: 0,
        caption: caption,
        title: this.props.language.controls.link,
        autoHide: true,
        getContainerNode: this.props.getContainerNode,
        showArrow: false,
        ref: function ref(instance) {
          return _this2.dropDownInstance = instance;
        },
        className: 'control-item dropdown link-editor-dropdown'
      }, external_react_default.a.createElement("div", {
        className: "bf-link-editor"
      }, allowInsertLinkText ? external_react_default.a.createElement("div", {
        className: "input-group"
      }, external_react_default.a.createElement("input", {
        type: "text",
        value: text,
        spellCheck: false,
        disabled: textSelected,
        placeholder: this.props.language.linkEditor.textInputPlaceHolder,
        onKeyDown: this.handeKeyDown,
        onChange: this.handleTnputText
      })) : null, external_react_default.a.createElement("div", {
        className: "input-group"
      }, external_react_default.a.createElement("input", {
        type: "text",
        value: href,
        spellCheck: false,
        placeholder: this.props.language.linkEditor.linkInputPlaceHolder,
        onKeyDown: this.handeKeyDown,
        onChange: this.handleInputLink
      })), external_react_default.a.createElement("div", {
        className: "switch-group"
      }, external_react_default.a.createElement(Switch, {
        active: target === '_blank',
        onClick: this.setTarget
      }), external_react_default.a.createElement("label", null, this.props.language.linkEditor.openInNewWindow)), external_react_default.a.createElement("div", {
        className: "buttons"
      }, external_react_default.a.createElement("a", {
        onClick: this.handleUnlink,
        className: "primary button-remove-link pull-left"
      }, external_react_default.a.createElement("i", {
        className: "bfi-close"
      }), external_react_default.a.createElement("span", null, this.props.language.linkEditor.removeLink)), external_react_default.a.createElement("button", {
        type: "button",
        onClick: this.handleConfirm,
        className: "primary pull-right"
      }, this.props.language.base.confirm), external_react_default.a.createElement("button", {
        type: "button",
        onClick: this.handleCancel,
        className: "default pull-right"
      }, this.props.language.base.cancel)))), external_react_default.a.createElement("button", {
        key: 1,
        type: "button",
        "data-title": this.props.language.controls.unlink,
        className: "control-item button",
        onClick: this.handleUnlink,
        disabled: !textSelected || !href
      }, external_react_default.a.createElement("i", {
        className: "bfi-link-off"
      })));
    }
  }]);

  return LinkEditor;
}(external_react_default.a.Component);


// EXTERNAL MODULE: ./components/business/Headings/style.scss
var Headings_style = __nested_webpack_require_38800__(56);

// CONCATENATED MODULE: ./configs/maps.js

var maps_getHeadings = function getHeadings(lang) {
  return [{
    key: 'header-one',
    title: lang.controls.header + ' 1',
    text: external_react_default.a.createElement("h1", null, lang.controls.header, " 1"),
    type: 'block-type',
    command: 'header-one'
  }, {
    key: 'header-two',
    title: lang.controls.header + ' 2',
    text: external_react_default.a.createElement("h2", null, lang.controls.header, " 2"),
    type: 'block-type',
    command: 'header-two'
  }, {
    key: 'header-three',
    title: lang.controls.header + ' 3',
    text: external_react_default.a.createElement("h3", null, lang.controls.header, " 3"),
    type: 'block-type',
    command: 'header-three'
  }, {
    key: 'header-four',
    title: lang.controls.header + ' 4',
    text: external_react_default.a.createElement("h4", null, lang.controls.header, " 4"),
    type: 'block-type',
    command: 'header-four'
  }, {
    key: 'header-five',
    title: lang.controls.header + ' 5',
    text: external_react_default.a.createElement("h5", null, lang.controls.header, " 5"),
    type: 'block-type',
    command: 'header-five'
  }, {
    key: 'header-six',
    title: lang.controls.header + ' 6',
    text: external_react_default.a.createElement("h6", null, lang.controls.header, " 6"),
    type: 'block-type',
    command: 'header-six'
  }, {
    key: 'unstyled',
    title: lang.controls.normal,
    text: lang.controls.normal,
    type: 'block-type',
    command: 'unstyled'
  }];
};
var blocks = {
  'header-one': 'h1',
  'header-two': 'h2',
  'header-three': 'h3',
  'header-four': 'h4',
  'header-fiv': 'h5',
  'header-six': 'h6',
  'unstyled': 'p',
  'blockquote': 'blockquote'
};
// CONCATENATED MODULE: ./components/business/Headings/index.jsx




/* harmony default export */ var Headings = (function (props) {
  var dropDownInstance = null;
  var headings = maps_getHeadings(props.language).filter(function (item) {
    return props.headings.indexOf(item.key) !== -1;
  });
  var currentHeadingIndex = headings.findIndex(function (item) {
    return item.command === props.current;
  });
  var caption = headings[currentHeadingIndex] ? headings[currentHeadingIndex].title : props.language.controls.normal;
  return external_react_default.a.createElement(DropDown_DropDown, {
    caption: caption,
    autoHide: true,
    getContainerNode: props.getContainerNode,
    title: props.language.controls.headings,
    arrowActive: currentHeadingIndex === 0,
    ref: function ref(instance) {
      return dropDownInstance = instance;
    },
    className: 'control-item dropdown headings-dropdown'
  }, external_react_default.a.createElement("ul", {
    className: "menu"
  }, headings.map(function (item, index) {
    var isActive = props.current === item.command;
    return external_react_default.a.createElement("li", {
      key: index,
      className: 'menu-item' + (isActive ? ' active' : ''),
      onClick: function onClick() {
        props.onChange(item.command, item.type), dropDownInstance.hide();
      }
    }, item.text);
  })));
});
// EXTERNAL MODULE: ./components/business/TextColor/style.scss
var TextColor_style = __nested_webpack_require_38800__(57);

// EXTERNAL MODULE: ./components/common/ColorPicker/style.scss
var ColorPicker_style = __nested_webpack_require_38800__(58);

// CONCATENATED MODULE: ./components/common/ColorPicker/index.jsx


/* harmony default export */ var common_ColorPicker = (function (props) {
  return external_react_default.a.createElement("div", {
    className: "bf-colors-wrap"
  }, external_react_default.a.createElement("ul", {
    className: "bf-colors"
  }, props.presetColors.map(function (item, index) {
    var className = props.color && item.toLowerCase() === props.color.toLowerCase() ? 'color-item active' : 'color-item';
    return external_react_default.a.createElement("li", {
      key: index,
      title: item,
      className: className,
      style: {
        color: item
      },
      "data-color": item.replace('#', ''),
      onClick: function onClick(e) {
        props.onChange(e.currentTarget.dataset.color, true);
      }
    });
  })));
});
// CONCATENATED MODULE: ./components/business/TextColor/index.jsx













var TextColor_TextColor =
/*#__PURE__*/
function (_React$Component) {
  inherits_default()(TextColor, _React$Component);

  function TextColor() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck_default()(this, TextColor);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn_default()(this, (_getPrototypeOf2 = getPrototypeOf_default()(TextColor)).call.apply(_getPrototypeOf2, [this].concat(args)));

    defineProperty_default()(assertThisInitialized_default()(_this), "state", {
      colorType: 'color'
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "switchColorType", function (_ref) {
      var currentTarget = _ref.currentTarget;

      _this.setState({
        colorType: currentTarget.dataset.type
      });
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "toggleColor", function (color, closePicker) {
      if (color) {
        var hookReturns = _this.props.hooks("toggle-text-".concat(_this.state.colorType), color)(color);

        if (hookReturns === false) {
          return false;
        }

        if (typeof hookReturns === 'string') {
          color = hookReturns;
        }

        if (_this.state.colorType === 'color') {
          _this.props.editor.setValue(external_braft_utils_["ContentUtils"].toggleSelectionColor(_this.props.editorState, color));
        } else {
          _this.props.editor.setValue(external_braft_utils_["ContentUtils"].toggleSelectionBackgroundColor(_this.props.editorState, color));
        }
      }

      if (closePicker) {
        _this.dropDownInstance.hide();

        _this.props.editor.requestFocus();
      }
    });

    return _this;
  }

  createClass_default()(TextColor, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var captionStyle = {};
      var currentColor = null;
      var colorType = this.state.colorType;
      var selectionStyles = this.props.editorState.getCurrentInlineStyle().toJS();
      selectionStyles.forEach(function (style) {
        if (style.indexOf('COLOR-') === 0) {
          captionStyle.color = '#' + style.split('-')[1];
          colorType === 'color' && (currentColor = captionStyle.color);
        }

        if (style.indexOf('BGCOLOR-') === 0) {
          captionStyle.backgroundColor = '#' + style.split('-')[1];
          colorType === 'background-color' && (currentColor = captionStyle.backgroundColor);
        }
      });
      var caption = external_react_default.a.createElement("i", {
        style: captionStyle,
        className: "bfi-text-color"
      }, external_react_default.a.createElement("span", {
        className: "path1"
      }), external_react_default.a.createElement("span", {
        className: "path2"
      }));
      var ColorPicker = this.props.colorPicker || common_ColorPicker;
      return external_react_default.a.createElement(DropDown_DropDown, {
        caption: caption,
        title: this.props.language.controls.color,
        showArrow: false,
        autoHide: this.props.autoHide,
        theme: this.props.theme,
        getContainerNode: this.props.getContainerNode,
        ref: function ref(instance) {
          return _this2.dropDownInstance = instance;
        },
        className: 'control-item dropdown text-color-dropdown'
      }, external_react_default.a.createElement("div", {
        className: "bf-text-color-picker-wrap"
      }, external_react_default.a.createElement("div", {
        className: "bf-color-switch-buttons",
        style: this.props.enableBackgroundColor ? {} : {
          display: 'none'
        }
      }, external_react_default.a.createElement("button", {
        type: "button",
        "data-type": "color",
        className: colorType === 'color' ? 'active' : '',
        onClick: this.switchColorType
      }, this.props.language.controls.textColor), external_react_default.a.createElement("button", {
        type: "button",
        "data-type": "background-color",
        className: colorType === 'background-color' ? 'active' : '',
        onClick: this.switchColorType
      }, this.props.language.controls.backgroundColor)), external_react_default.a.createElement(ColorPicker, {
        width: 200,
        color: currentColor,
        disableAlpha: true,
        presetColors: this.props.colors,
        onChange: this.toggleColor
      })));
    }
  }]);

  return TextColor;
}(external_react_default.a.Component);


// EXTERNAL MODULE: ./components/business/FontSize/style.scss
var FontSize_style = __nested_webpack_require_38800__(59);

// CONCATENATED MODULE: ./components/business/FontSize/index.jsx





var FontSize_toggleFontSize = function toggleFontSize(event, props) {
  var fontSize = event.currentTarget.dataset.size;
  var hookReturns = props.hooks('toggle-font-size', fontSize)(fontSize);

  if (hookReturns === false) {
    return false;
  }

  if (!isNaN(fontSize)) {
    fontSize = hookReturns;
  }

  props.editor.setValue(external_braft_utils_["ContentUtils"].toggleSelectionFontSize(props.editorState, fontSize));
  props.editor.requestFocus();
};

/* harmony default export */ var FontSize = (function (props) {
  var caption = null;
  var currentFontSize = null;
  var dropDownInstance = null;
  props.fontSizes.find(function (item) {
    if (external_braft_utils_["ContentUtils"].selectionHasInlineStyle(props.editorState, 'FONTSIZE-' + item)) {
      caption = item;
      currentFontSize = item;
      return true;
    }

    return false;
  });
  return external_react_default.a.createElement(DropDown_DropDown, {
    autoHide: true,
    caption: caption || props.defaultCaption,
    getContainerNode: props.getContainerNode,
    title: props.language.controls.fontSize,
    ref: function ref(instance) {
      return dropDownInstance = instance;
    },
    className: 'control-item dropdown bf-font-size-dropdown'
  }, external_react_default.a.createElement("ul", {
    className: "bf-font-sizes"
  }, props.fontSizes.map(function (item, index) {
    return external_react_default.a.createElement("li", {
      key: index,
      className: item === currentFontSize ? 'active' : null,
      "data-size": item,
      onClick: function onClick(event) {
        FontSize_toggleFontSize(event, props), dropDownInstance.hide();
      }
    }, item);
  })));
});
// EXTERNAL MODULE: ./components/business/LineHeight/style.scss
var LineHeight_style = __nested_webpack_require_38800__(60);

// CONCATENATED MODULE: ./components/business/LineHeight/index.jsx





var LineHeight_toggleLineHeight = function toggleLineHeight(event, props) {
  var lineHeight = event.currentTarget.dataset.size;
  var hookReturns = props.hooks('toggle-line-height', lineHeight)(lineHeight);

  if (hookReturns === false) {
    return false;
  }

  if (!isNaN(hookReturns)) {
    lineHeight = hookReturns;
  }

  props.editor.setValue(external_braft_utils_["ContentUtils"].toggleSelectionLineHeight(props.editorState, lineHeight));
  props.editor.requestFocus();
};

/* harmony default export */ var LineHeight = (function (props) {
  var caption = null;
  var currentLineHeight = null;
  var dropDownInstance = null;
  props.lineHeights.find(function (item) {
    if (external_braft_utils_["ContentUtils"].selectionHasInlineStyle(props.editorState, 'LINEHEIGHT-' + item)) {
      caption = item;
      currentLineHeight = item;
      return true;
    }

    return false;
  });
  return external_react_default.a.createElement(DropDown_DropDown, {
    autoHide: true,
    caption: caption || props.defaultCaption,
    getContainerNode: props.getContainerNode,
    title: props.language.controls.lineHeight,
    ref: function ref(instance) {
      return dropDownInstance = instance;
    },
    className: 'control-item dropdown bf-line-height-dropdown'
  }, external_react_default.a.createElement("ul", {
    className: "bf-line-heights"
  }, props.lineHeights.map(function (item, index) {
    return external_react_default.a.createElement("li", {
      key: index,
      className: item === currentLineHeight ? 'active' : null,
      "data-size": item,
      onClick: function onClick(event) {
        LineHeight_toggleLineHeight(event, props), dropDownInstance.hide();
      }
    }, item);
  })));
});
// EXTERNAL MODULE: ./components/business/FontFamily/style.scss
var FontFamily_style = __nested_webpack_require_38800__(61);

// CONCATENATED MODULE: ./components/business/FontFamily/index.jsx





var FontFamily_toggleFontFamily = function toggleFontFamily(event, props) {
  var fontFamilyName = event.currentTarget.dataset.name;
  var hookReturns = props.hooks('toggle-font-family', fontFamilyName)(fontFamilyName, props.fontFamilies);

  if (hookReturns === false) {
    return false;
  }

  if (typeof hookReturns === 'string') {
    fontFamilyName = hookReturns;
  }

  props.editor.setValue(external_braft_utils_["ContentUtils"].toggleSelectionFontFamily(props.editorState, fontFamilyName));
  props.editor.requestFocus();
};

/* harmony default export */ var FontFamily = (function (props) {
  var caption = null;
  var currentIndex = null;
  var dropDownInstance = null;
  props.fontFamilies.find(function (item, index) {
    if (external_braft_utils_["ContentUtils"].selectionHasInlineStyle(props.editorState, 'FONTFAMILY-' + item.name)) {
      caption = item.name;
      currentIndex = index;
      return true;
    }

    return false;
  });
  return external_react_default.a.createElement(DropDown_DropDown, {
    caption: caption || props.defaultCaption,
    getContainerNode: props.getContainerNode,
    title: props.language.controls.fontFamily,
    autoHide: true,
    arrowActive: currentIndex === 0,
    ref: function ref(instance) {
      return dropDownInstance = instance;
    },
    className: 'control-item dropdown font-family-dropdown'
  }, external_react_default.a.createElement("ul", {
    className: "menu"
  }, props.fontFamilies.map(function (item, index) {
    return external_react_default.a.createElement("li", {
      key: index,
      className: 'menu-item ' + (index === currentIndex ? 'active' : ''),
      "data-name": item.name,
      onClick: function onClick(event) {
        FontFamily_toggleFontFamily(event, props), dropDownInstance.hide();
      }
    }, external_react_default.a.createElement("span", {
      style: {
        fontFamily: item.family
      }
    }, item.name));
  })));
});
// CONCATENATED MODULE: ./components/business/TextAlign/index.jsx











var TextAlign_TextAlign =
/*#__PURE__*/
function (_React$Component) {
  inherits_default()(TextAlign, _React$Component);

  function TextAlign() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck_default()(this, TextAlign);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn_default()(this, (_getPrototypeOf2 = getPrototypeOf_default()(TextAlign)).call.apply(_getPrototypeOf2, [this].concat(args)));

    defineProperty_default()(assertThisInitialized_default()(_this), "state", {
      currentAlignment: undefined
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "setAlignment", function (event) {
      var alignment = event.currentTarget.dataset.alignment;

      var hookReturns = _this.props.hooks('toggle-text-alignment', alignment)(alignment);

      if (_this.props.textAligns.indexOf(hookReturns) > -1) {
        alignment = hookReturns;
      }

      _this.props.editor.setValue(external_braft_utils_["ContentUtils"].toggleSelectionAlignment(_this.props.editorState, alignment));

      _this.props.editor.requestFocus();
    });

    return _this;
  }

  createClass_default()(TextAlign, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(next) {
      this.setState({
        currentAlignment: external_braft_utils_["ContentUtils"].getSelectionBlockData(next.editorState, 'textAlign')
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var textAlignmentTitles = [this.props.language.controls.alignLeft, this.props.language.controls.alignCenter, this.props.language.controls.alignRight, this.props.language.controls.alignJustify];
      return external_react_default.a.createElement(ControlGroup, null, this.props.textAligns.map(function (item, index) {
        return external_react_default.a.createElement("button", {
          type: "button",
          key: index,
          "data-title": textAlignmentTitles[index],
          "data-alignment": item,
          className: 'control-item button ' + (item === _this2.state.currentAlignment ? 'active' : null),
          onClick: _this2.setAlignment
        }, external_react_default.a.createElement("i", {
          className: 'bfi-align-' + item
        }));
      }));
    }
  }]);

  return TextAlign;
}(external_react_default.a.Component);


// EXTERNAL MODULE: ./components/business/EmojiPicker/style.scss
var EmojiPicker_style = __nested_webpack_require_38800__(62);

// CONCATENATED MODULE: ./components/business/EmojiPicker/index.jsx





var EmojiPicker_insertEmoji = function insertEmoji(event, props) {
  var emoji = event.currentTarget.dataset.emoji;
  var hookReturns = props.hooks('insert-emoji', emoji)(emoji);

  if (hookReturns === false) {
    return false;
  }

  if (typeof hookReturns === 'string') {
    emoji = hookReturns;
  }

  props.editor.setValue(external_braft_utils_["ContentUtils"].insertText(props.editorState, emoji));
  props.editor.requestFocus();
};

/* harmony default export */ var EmojiPicker = (function (props) {
  return external_react_default.a.createElement(DropDown_DropDown, {
    caption: props.defaultCaption,
    autoHide: true,
    showArrow: false,
    getContainerNode: props.getContainerNode,
    title: props.language.controls.emoji,
    className: 'control-item dropdown bf-emoji-dropdown'
  }, external_react_default.a.createElement("div", {
    className: "bf-emojis-wrap"
  }, external_react_default.a.createElement("ul", {
    className: "bf-emojis"
  }, props.emojis.map(function (item, index) {
    return external_react_default.a.createElement("li", {
      key: index,
      "data-emoji": item,
      onClick: function onClick(event) {
        return EmojiPicker_insertEmoji(event, props);
      }
    }, item);
  }))));
});
// EXTERNAL MODULE: ./components/business/LetterSpacing/style.scss
var LetterSpacing_style = __nested_webpack_require_38800__(63);

// CONCATENATED MODULE: ./components/business/LetterSpacing/index.jsx





var LetterSpacing_toggleLetterSpacing = function toggleLetterSpacing(event, props) {
  var letterSpacing = event.currentTarget.dataset.size;
  var hookReturns = props.hooks('toggle-letter-spacing', letterSpacing)(letterSpacing);

  if (hookReturns === false) {
    return false;
  }

  if (!isNaN(hookReturns)) {
    letterSpacing = hookReturns;
  }

  props.editor.setValue(external_braft_utils_["ContentUtils"].toggleSelectionLetterSpacing(props.editorState, letterSpacing));
  props.editor.requestFocus();
};

/* harmony default export */ var LetterSpacing = (function (props) {
  var caption = null;
  var currentLetterSpacing = null;
  var dropDownInstance = null;
  props.letterSpacings.find(function (item) {
    if (external_braft_utils_["ContentUtils"].selectionHasInlineStyle(props.editorState, 'LETTERSPACING-' + item)) {
      caption = item;
      currentLetterSpacing = item;
      return true;
    }

    return false;
  });
  return external_react_default.a.createElement(DropDown_DropDown, {
    autoHide: true,
    caption: caption || props.defaultCaption,
    getContainerNode: props.getContainerNode,
    title: props.language.controls.letterSpacing,
    ref: function ref(instance) {
      return dropDownInstance = instance;
    },
    className: 'control-item dropdown bf-letter-spacing-dropdown'
  }, external_react_default.a.createElement("ul", {
    className: "bf-letter-spacings"
  }, props.letterSpacings.map(function (item, index) {
    return external_react_default.a.createElement("li", {
      key: index,
      className: item === currentLetterSpacing ? 'active' : null,
      "data-size": item,
      onClick: function onClick(event) {
        LetterSpacing_toggleLetterSpacing(event, props), dropDownInstance.hide();
      }
    }, item);
  })));
});
// CONCATENATED MODULE: ./components/business/TextIndent/index.jsx











var TextIndent_TextAlign =
/*#__PURE__*/
function (_React$Component) {
  inherits_default()(TextAlign, _React$Component);

  function TextAlign() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck_default()(this, TextAlign);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn_default()(this, (_getPrototypeOf2 = getPrototypeOf_default()(TextAlign)).call.apply(_getPrototypeOf2, [this].concat(args)));

    defineProperty_default()(assertThisInitialized_default()(_this), "state", {
      currentIndent: 0
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "increaseIndent", function () {
      _this.props.editor.setValue(external_braft_utils_["ContentUtils"].increaseSelectionIndent(_this.props.editorState));

      _this.props.editor.requestFocus();
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "decreaseIndent", function () {
      _this.props.editor.setValue(external_braft_utils_["ContentUtils"].decreaseSelectionIndent(_this.props.editorState));

      _this.props.editor.requestFocus();
    });

    return _this;
  }

  createClass_default()(TextAlign, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      this.setState({
        currentIndent: external_braft_utils_["ContentUtils"].getSelectionBlockData(nextProps.editorState, 'textIndent') || 0
      });
    }
  }, {
    key: "render",
    value: function render() {
      var currentIndent = this.state.currentIndent;
      var language = this.props.language;
      return external_react_default.a.createElement(ControlGroup, null, external_react_default.a.createElement("button", {
        key: 0,
        type: "button",
        "data-title": language.controls.increaseIndent,
        disabled: currentIndent >= 6,
        className: "control-item button button-indent-increase".concat(currentIndent > 0 && currentIndent < 6 ? ' active' : ''),
        onClick: this.increaseIndent
      }, external_react_default.a.createElement("i", {
        className: 'bfi-indent-increase'
      })), external_react_default.a.createElement("button", {
        key: 1,
        type: "button",
        "data-title": language.controls.decreaseIndent,
        disabled: currentIndent <= 0,
        className: "control-item button button-indent-decrease",
        onClick: this.decreaseIndent
      }, external_react_default.a.createElement("i", {
        className: 'bfi-indent-decrease'
      })));
    }
  }]);

  return TextAlign;
}(external_react_default.a.Component);


// CONCATENATED MODULE: ./components/business/ControlBar/index.jsx


























var commandHookMap = {
  'inline-style': 'toggle-inline-style',
  'block-type': 'change-block-type',
  'editor-method': 'exec-editor-command'
};
var exclusiveInlineStyles = {
  'superscript': 'subscript',
  'subscript': 'superscript'
};

var mergeControls = function mergeControls(commonProps, builtControls, extensionControls, extendControls) {
  extensionControls = extensionControls.map(function (item) {
    return typeof item === 'function' ? item(commonProps) : item;
  });
  extendControls = extendControls.map(function (item) {
    return typeof item === 'function' ? item(commonProps) : item;
  });

  if (extensionControls.length === 0 && extendControls.length === 0) {
    return builtControls;
  }

  return builtControls.map(function (item) {
    return extendControls.find(function (subItem) {
      return subItem.replace === (item.key || item);
    }) || extensionControls.find(function (subItem) {
      return subItem.replace === (item.key || item);
    }) || item;
  }).concat(extensionControls.length ? 'separator' : '').concat(extensionControls.filter(function (item) {
    return !item.replace;
  })).concat(extendControls.filter(function (item) {
    return typeof item === 'string' || !item.replace;
  }));
};

var ControlBar_ControlBar =
/*#__PURE__*/
function (_React$Component) {
  inherits_default()(ControlBar, _React$Component);

  function ControlBar() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck_default()(this, ControlBar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn_default()(this, (_getPrototypeOf2 = getPrototypeOf_default()(ControlBar)).call.apply(_getPrototypeOf2, [this].concat(args)));

    defineProperty_default()(assertThisInitialized_default()(_this), "allControls", []);

    defineProperty_default()(assertThisInitialized_default()(_this), "mediaLibiraryModal", null);

    defineProperty_default()(assertThisInitialized_default()(_this), "extendedModals", {});

    defineProperty_default()(assertThisInitialized_default()(_this), "openBraftFinder", function () {
      if (!_this.props.braftFinder || !_this.props.braftFinder.ReactComponent) {
        return false;
      }

      if (_this.props.hooks('open-braft-finder')() === false) {
        return false;
      }

      var mediaProps = _this.props.media;
      var MediaLibrary = _this.props.braftFinder.ReactComponent;
      _this.mediaLibiraryModal = Modal_showModal({
        title: _this.props.language.controls.mediaLibirary,
        language: _this.props.language,
        width: 640,
        showFooter: false,
        className: mediaProps.modalClassName,
        component: external_react_default.a.createElement(MediaLibrary, {
          accepts: mediaProps.accepts,
          onCancel: _this.closeBraftFinder,
          onInsert: _this.insertMedias,
          onChange: mediaProps.onChange,
          externals: mediaProps.externals,
          onBeforeSelect: _this.bindBraftFinderHook('select-medias'),
          onBeforeDeselect: _this.bindBraftFinderHook('deselect-medias'),
          onBeforeRemove: _this.bindBraftFinderHook('remove-medias'),
          onBeforeInsert: _this.bindBraftFinderHook('insert-medias'),
          onFileSelect: _this.bindBraftFinderHook('select-files')
        })
      });
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "bindBraftFinderHook", function (hookName) {
      return function () {
        return _this.props.hooks(hookName, arguments.length <= 0 ? undefined : arguments[0]).apply(void 0, arguments);
      };
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "insertMedias", function (medias) {
      _this.props.editor.setValue(external_braft_utils_["ContentUtils"].insertMedias(_this.props.editorState, medias));

      _this.props.editor.requestFocus();

      _this.props.media.onInsert && _this.props.media.onInsert(medias);

      _this.closeBraftFinder();
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "closeBraftFinder", function () {
      _this.props.media.onCancel && _this.props.media.onCancel();
      _this.mediaLibiraryModal && _this.mediaLibiraryModal.close();
    });

    return _this;
  }

  createClass_default()(ControlBar, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var _this2 = this;

      var language = this.props.language;
      this.allControls.forEach(function (item) {
        if (item.type === 'modal') {
          if (item.modal && item.modal.id && _this2.extendedModals[item.modal.id]) {
            _this2.extendedModals[item.modal.id].update(objectSpread_default()({}, item.modal, {
              language: language
            }));
          }
        }
      });
    }
  }, {
    key: "getControlItemClassName",
    value: function getControlItemClassName(data) {
      var className = 'control-item button';
      var type = data.type,
          command = data.command;

      if (type === 'inline-style' && external_braft_utils_["ContentUtils"].selectionHasInlineStyle(this.props.editorState, command)) {
        className += ' active';
      } else if (type === 'block-type' && external_braft_utils_["ContentUtils"].getSelectionBlockType(this.props.editorState) === command) {
        className += ' active';
      } else if (type === 'entity' && external_braft_utils_["ContentUtils"].getSelectionEntityType(this.props.editorState) === command) {
        className += ' active';
      }

      return className;
    }
  }, {
    key: "applyControl",
    value: function applyControl(command, type) {
      var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var hookReturns = this.props.hooks(commandHookMap[type] || type, command)(command);
      var editorState = this.props.editorState;

      if (hookReturns === false) {
        return false;
      }

      if (typeof hookReturns === 'string') {
        command = hookReturns;
      }

      if (type === 'inline-style') {
        var exclusiveInlineStyle = exclusiveInlineStyles[command];

        if (exclusiveInlineStyle && external_braft_utils_["ContentUtils"].selectionHasInlineStyle(editorState, exclusiveInlineStyle)) {
          editorState = external_braft_utils_["ContentUtils"].toggleSelectionInlineStyle(editorState, exclusiveInlineStyle);
        }

        this.props.editor.setValue(external_braft_utils_["ContentUtils"].toggleSelectionInlineStyle(editorState, command));
      } else if (type === 'block-type') {
        this.props.editor.setValue(external_braft_utils_["ContentUtils"].toggleSelectionBlockType(editorState, command));
      } else if (type === 'entity') {
        this.props.editor.setValue(external_braft_utils_["ContentUtils"].toggleSelectionEntity(editorState, {
          type: command,
          mutability: data.mutability || 'MUTABLE',
          data: data.data || {}
        }));
      } else if (type === 'editor-method') {
        this.props.editor[command] && this.props.editor[command]();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props = this.props,
          editor = _this$props.editor,
          editorId = _this$props.editorId,
          editorState = _this$props.editorState,
          className = _this$props.className,
          style = _this$props.style,
          controls = _this$props.controls,
          media = _this$props.media,
          extendControls = _this$props.extendControls,
          language = _this$props.language,
          hooks = _this$props.hooks,
          colors = _this$props.colors,
          colorPicker = _this$props.colorPicker,
          colorPickerTheme = _this$props.colorPickerTheme,
          colorPickerAutoHide = _this$props.colorPickerAutoHide,
          headings = _this$props.headings,
          fontSizes = _this$props.fontSizes,
          fontFamilies = _this$props.fontFamilies,
          emojis = _this$props.emojis,
          getContainerNode = _this$props.getContainerNode,
          lineHeights = _this$props.lineHeights,
          letterSpacings = _this$props.letterSpacings,
          textAligns = _this$props.textAligns,
          textBackgroundColor = _this$props.textBackgroundColor,
          allowInsertLinkText = _this$props.allowInsertLinkText,
          defaultLinkTarget = _this$props.defaultLinkTarget;
      var currentBlockType = external_braft_utils_["ContentUtils"].getSelectionBlockType(editorState);
      var commonProps = {
        editor: editor,
        editorId: editorId,
        editorState: editorState,
        language: language,
        getContainerNode: getContainerNode,
        hooks: hooks
      };
      var renderedControls = [];
      var editorControls = configs_controls(language, editor);
      var extensionControls = getExtensionControls(editorId);
      var allControls = mergeControls(commonProps, controls, extensionControls, extendControls);
      this.allControls = allControls;
      return external_react_default.a.createElement("div", {
        className: "bf-controlbar ".concat(className || ''),
        style: style,
        onMouseDown: this.preventDefault
      }, allControls.map(function (item, index) {
        var itemKey = typeof item === 'string' ? item : item.key;

        if (typeof itemKey !== 'string') {
          return null;
        }

        if (renderedControls.indexOf(itemKey) > -1) {
          return null;
        }

        if (itemKey.toLowerCase() === 'separator') {
          return external_react_default.a.createElement("span", {
            key: index,
            className: "separator-line"
          });
        }

        var controlItem = editorControls.find(function (subItem) {
          return subItem.key.toLowerCase() === itemKey.toLowerCase();
        });

        if (typeof item !== 'string') {
          controlItem = objectSpread_default()({}, controlItem, item);
        }

        if (!controlItem) {
          return null;
        }

        renderedControls.push(itemKey);

        if (controlItem.type === 'headings') {
          return external_react_default.a.createElement(Headings, extends_default()({
            key: index,
            headings: headings,
            current: currentBlockType,
            onChange: function onChange(command) {
              return _this3.applyControl(command, 'block-type');
            }
          }, commonProps));
        } else if (controlItem.type === 'text-color') {
          return external_react_default.a.createElement(TextColor_TextColor, extends_default()({
            key: index,
            colors: colors,
            colorPicker: colorPicker,
            theme: colorPickerTheme,
            autoHide: colorPickerAutoHide,
            enableBackgroundColor: textBackgroundColor
          }, commonProps));
        } else if (controlItem.type === 'font-size') {
          return external_react_default.a.createElement(FontSize, extends_default()({
            key: index,
            fontSizes: fontSizes,
            defaultCaption: controlItem.title
          }, commonProps));
        } else if (controlItem.type === 'line-height') {
          return external_react_default.a.createElement(LineHeight, extends_default()({
            key: index,
            lineHeights: lineHeights,
            defaultCaption: controlItem.title
          }, commonProps));
        } else if (controlItem.type === 'letter-spacing') {
          return external_react_default.a.createElement(LetterSpacing, extends_default()({
            key: index,
            letterSpacings: letterSpacings,
            defaultCaption: controlItem.title
          }, commonProps));
        } else if (controlItem.type === 'text-indent') {
          return external_react_default.a.createElement(TextIndent_TextAlign, extends_default()({
            key: index,
            defaultCaption: controlItem.title
          }, commonProps));
        } else if (controlItem.type === 'font-family') {
          return external_react_default.a.createElement(FontFamily, extends_default()({
            key: index,
            fontFamilies: fontFamilies,
            defaultCaption: controlItem.title
          }, commonProps));
        } else if (controlItem.type === 'emoji') {
          return external_react_default.a.createElement(EmojiPicker, extends_default()({
            key: index,
            emojis: emojis,
            defaultCaption: controlItem.text
          }, commonProps));
        } else if (controlItem.type === 'link') {
          return external_react_default.a.createElement(LinkEditor_LinkEditor, extends_default()({
            key: index,
            defaultLinkTarget: defaultLinkTarget,
            allowInsertLinkText: allowInsertLinkText
          }, commonProps));
        } else if (controlItem.type === 'text-align') {
          return external_react_default.a.createElement(TextAlign_TextAlign, extends_default()({
            key: index,
            textAligns: textAligns
          }, commonProps));
        } else if (controlItem.type === 'media') {
          if (!media.image && !media.video && !media.audio) {
            return null;
          }

          return external_react_default.a.createElement("button", {
            type: "button",
            key: index,
            "data-title": controlItem.title,
            disabled: controlItem.disabled,
            className: "control-item media button",
            onClick: _this3.openBraftFinder
          }, controlItem.text);
        } else if (controlItem.type === 'dropdown') {
          return external_react_default.a.createElement(DropDown_DropDown, extends_default()({
            key: index,
            className: "control-item extend-control-item dropdown ".concat(controlItem.className || ''),
            caption: controlItem.text,
            htmlCaption: controlItem.html,
            showArrow: controlItem.showArrow,
            title: controlItem.title,
            arrowActive: controlItem.arrowActive,
            theme: controlItem.theme,
            autoHide: controlItem.autoHide,
            disabled: controlItem.disabled,
            ref: controlItem.ref
          }, commonProps), controlItem.component);
        } else if (controlItem.type === 'modal') {
          return external_react_default.a.createElement("button", {
            type: "button",
            key: index,
            "data-title": controlItem.title,
            disabled: controlItem.disabled,
            className: "control-item extend-control-item button ".concat(controlItem.className || ''),
            dangerouslySetInnerHTML: controlItem.html ? {
              __html: controlItem.html
            } : null,
            onClick: function onClick(event) {
              if (controlItem.modal && controlItem.modal.id) {
                if (_this3.extendedModals[controlItem.modal.id]) {
                  _this3.extendedModals[controlItem.modal.id].active = true;

                  _this3.extendedModals[controlItem.modal.id].update(objectSpread_default()({}, controlItem.modal, {
                    language: language
                  }));
                } else {
                  _this3.extendedModals[controlItem.modal.id] = Modal_showModal(objectSpread_default()({}, controlItem.modal, {
                    language: language
                  }));
                  controlItem.modal.onCreate && controlItem.modal.onCreate(_this3.extendedModals[controlItem.modal.id]);
                }
              }

              controlItem.onClick && controlItem.onClick(event);
            }
          }, !controlItem.html ? controlItem.text : null);
        } else if (controlItem.type === 'component') {
          return external_react_default.a.createElement("div", {
            key: index,
            className: "component-wrapper ".concat(controlItem.className || '')
          }, controlItem.component);
        } else if (controlItem.type === 'button') {
          return external_react_default.a.createElement("button", {
            type: "button",
            key: index,
            "data-title": controlItem.title,
            disabled: controlItem.disabled,
            className: "control-item button ".concat(controlItem.className || ''),
            dangerouslySetInnerHTML: controlItem.html ? {
              __html: controlItem.html
            } : null,
            onClick: function onClick(event) {
              return controlItem.onClick && controlItem.onClick(event);
            }
          }, !controlItem.html ? controlItem.text : null);
        } else if (controlItem) {
          var disabled = false;

          if (controlItem.command === 'undo') {
            disabled = editorState.getUndoStack().size === 0;
          } else if (controlItem.command === 'redo') {
            disabled = editorState.getRedoStack().size === 0;
          }

          return external_react_default.a.createElement("button", {
            type: "button",
            key: index,
            disabled: disabled,
            "data-title": controlItem.title,
            className: _this3.getControlItemClassName({
              type: controlItem.type,
              command: controlItem.command
            }),
            onClick: function onClick() {
              return _this3.applyControl(controlItem.command, controlItem.type, controlItem.data);
            }
          }, controlItem.text);
        }
      }));
    }
  }, {
    key: "preventDefault",
    value: function preventDefault(event) {
      var tagName = event.target.tagName.toLowerCase();

      if (tagName === 'input' || tagName === 'label') {// ...
      } else {
        event.preventDefault();
      }
    }
  }]);

  return ControlBar;
}(external_react_default.a.Component);


// CONCATENATED MODULE: ./editor/index.jsx

























var buildHooks = function buildHooks(hooks) {
  return function (hookName) {
    var defaultReturns = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return hooks[hookName] || function () {
      return defaultReturns;
    };
  };
};

var filterColors = function filterColors(colors, colors2) {
  return colors.filter(function (item) {
    return !colors2.find(function (color) {
      return color.toLowerCase() === item.toLowerCase();
    });
  }).filter(function (item, index, array) {
    return array.indexOf(item) === index;
  });
};

var editor_isControlEnabled = function isControlEnabled(props, controlName) {
  return [].concat(toConsumableArray_default()(props.controls), toConsumableArray_default()(props.extendControls)).find(function (item) {
    return item === controlName || item.key === controlName;
  }) && props.excludeControls.indexOf(controlName) === -1;
};

var editor_getConvertOptions = function getConvertOptions(props) {
  var editorId = props.editorId || props.id;

  var convertOptions = objectSpread_default()({}, configs_props.converts, props.converts, {
    fontFamilies: props.fontFamilies
  });

  convertOptions.styleImportFn = compositeStyleImportFn(convertOptions.styleImportFn, editorId);
  convertOptions.styleExportFn = compositeStyleExportFn(convertOptions.styleExportFn, editorId);
  convertOptions.entityImportFn = compositeEntityImportFn(convertOptions.entityImportFn, editorId);
  convertOptions.entityExportFn = compositeEntityExportFn(convertOptions.entityExportFn, editorId);
  convertOptions.blockImportFn = compositeBlockImportFn(convertOptions.blockImportFn, editorId);
  convertOptions.blockExportFn = compositeBlockExportFn(convertOptions.blockExportFn, editorId);
  return convertOptions;
};

var editor_BraftEditor =
/*#__PURE__*/
function (_React$Component) {
  inherits_default()(BraftEditor, _React$Component);

  function BraftEditor(props) {
    var _this;

    classCallCheck_default()(this, BraftEditor);

    _this = possibleConstructorReturn_default()(this, getPrototypeOf_default()(BraftEditor).call(this, props));

    defineProperty_default()(assertThisInitialized_default()(_this), "onChange", function (editorState, callback) {
      if (!(editorState instanceof external_draft_js_["EditorState"])) {
        editorState = external_draft_js_["EditorState"].set(editorState, {
          decorator: _this.editorDecorators
        });
      }

      if (!editorState.convertOptions) {
        editorState.setConvertOptions(editor_getConvertOptions(_this.editorProps));
      }

      _this.setState({
        editorState: editorState
      }, function () {
        _this.props.onChange && _this.props.onChange(editorState);
        callback && callback(editorState);
      });
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "getDraftInstance", function () {
      return _this.draftInstance;
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "getFinderInstance", function () {
      return _this.braftFinder;
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "getValue", function () {
      return _this.state.editorState;
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "setValue", function (editorState, callback) {
      return _this.onChange(editorState, callback);
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "forceRender", function () {
      var selectionState = _this.state.editorState.getSelection();

      _this.setValue(external_draft_js_["EditorState"].set(_this.state.editorState, {
        decorator: _this.editorDecorators
      }), function () {
        _this.setValue(external_draft_js_["EditorState"].forceSelection(_this.state.editorState, selectionState));
      });
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "onTab", function (event) {
      if (handlers_keyCommandHandlers('tab', _this.state.editorState, assertThisInitialized_default()(_this)) === 'handled') {
        event.preventDefault();
      }

      _this.editorProps.onTab && _this.editorProps.onTab(event);
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "onFocus", function () {
      _this.isFocused = true;
      _this.editorProps.onFocus && _this.editorProps.onFocus(_this.state.editorState);
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "onBlur", function () {
      _this.isFocused = false;
      _this.editorProps.onBlur && _this.editorProps.onBlur(_this.state.editorState);
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "requestFocus", function () {
      setTimeout(function () {
        return _this.draftInstance.focus();
      }, 0);
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "handleKeyCommand", function (command, editorState) {
      return handlers_keyCommandHandlers(command, editorState, assertThisInitialized_default()(_this));
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "handleReturn", function (event, editorState) {
      return handlers_returnHandlers(event, editorState, assertThisInitialized_default()(_this));
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "handleBeforeInput", function (chars, editorState) {
      return beforeInputHandlers(chars, editorState, assertThisInitialized_default()(_this));
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "handleDrop", function (selectionState, dataTransfer) {
      return handlers_dropHandlers(selectionState, dataTransfer, assertThisInitialized_default()(_this));
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "handleDroppedFiles", function (selectionState, files) {
      return droppedFilesHandlers(selectionState, files, assertThisInitialized_default()(_this));
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "handlePastedFiles", function (files) {
      return pastedFilesHandlers(files, assertThisInitialized_default()(_this));
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "handleCopyContent", function (event) {
      return handlers_copyHandlers(event, assertThisInitialized_default()(_this));
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "handlePastedText", function (text, html, editorState) {
      return handlers_pastedTextHandlers(text, html, editorState, assertThisInitialized_default()(_this));
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "handleCompositionStart", function (event) {
      return handlers_compositionStartHandler(event, assertThisInitialized_default()(_this));
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "undo", function () {
      _this.setValue(external_braft_utils_["ContentUtils"].undo(_this.state.editorState));
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "redo", function () {
      _this.setValue(external_braft_utils_["ContentUtils"].redo(_this.state.editorState));
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "removeSelectionInlineStyles", function () {
      _this.setValue(external_braft_utils_["ContentUtils"].removeSelectionInlineStyles(_this.state.editorState));
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "insertHorizontalLine", function () {
      _this.setValue(external_braft_utils_["ContentUtils"].insertHorizontalLine(_this.state.editorState));
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "clearEditorContent", function () {
      _this.setValue(external_braft_utils_["ContentUtils"].clear(_this.state.editorState), function (editorState) {
        _this.setValue(external_braft_utils_["ContentUtils"].toggleSelectionIndent(editorState, 0));
      });
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "toggleFullscreen", function (fullscreen) {
      _this.setState({
        isFullscreen: typeof fullscreen !== 'undefined' ? fullscreen : !_this.state.isFullscreen
      }, function () {
        _this.editorProps.onFullscreen && _this.editorProps.onFullscreen(_this.state.isFullscreen);
      });
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "setEditorContainerNode", function (containerNode) {
      _this.containerNode = containerNode;
    });

    _this.editorProps = _this.getEditorProps(props);
    _this.editorDecorators = getDecorators(_this.editorProps.editorId || _this.editorProps.id);
    _this.isFocused = false;
    _this.isLiving = false;
    _this.braftFinder = null;
    _this.valueInitialized = !!(_this.props.defaultValue || _this.props.value);
    var defaultEditorState = (_this.props.defaultValue || _this.props.value) instanceof external_draft_js_["EditorState"] ? _this.props.defaultValue || _this.props.value : external_draft_js_["EditorState"].createEmpty(_this.editorDecorators);
    defaultEditorState.setConvertOptions(editor_getConvertOptions(_this.editorProps));
    var tempColors = [];

    if (external_braft_utils_["ContentUtils"].isEditorState(defaultEditorState)) {
      var colors = external_braft_utils_["ColorUtils"].detectColorsFromDraftState(defaultEditorState.toRAW(true));
      defaultEditorState.setConvertOptions(editor_getConvertOptions(_this.editorProps));
      tempColors = filterColors(colors, _this.editorProps.colors);
    }

    _this.state = {
      tempColors: tempColors,
      editorState: defaultEditorState,
      isFullscreen: false,
      draftProps: {}
    };
    _this.containerNode = null;
    return _this;
  }

  createClass_default()(BraftEditor, [{
    key: "getEditorProps",
    value: function getEditorProps(props) {
      var _this2 = this;

      props = props || this.props;

      var _props = props,
          value = _props.value,
          defaultValue = _props.defaultValue,
          onChange = _props.onChange,
          restProps = objectWithoutProperties_default()(_props, ["value", "defaultValue", "onChange"]); // eslint-disable-line no-unused-vars


      var propInterceptors = getPropInterceptors(restProps.editorId || restProps.id);

      if (propInterceptors.length === 0) {
        return restProps;
      }

      var porpsMap = Object(external_immutable_["Map"])(restProps);
      propInterceptors.forEach(function (interceptor) {
        porpsMap = porpsMap.merge(Object(external_immutable_["Map"])(interceptor(porpsMap.toJS(), _this2) || {}));
      });
      return porpsMap.toJS();
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      if (editor_isControlEnabled(this.editorProps, 'media')) {
        var _this$editorProps = this.editorProps,
            language = _this$editorProps.language,
            media = _this$editorProps.media;

        var _defaultProps$media$m = objectSpread_default()({}, configs_props.media, media),
            uploadFn = _defaultProps$media$m.uploadFn,
            validateFn = _defaultProps$media$m.validateFn,
            items = _defaultProps$media$m.items;

        this.braftFinder = new external_braft_finder_default.a({
          items: items,
          language: language,
          uploader: uploadFn,
          validator: validateFn
        });
        this.forceUpdate();
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.isLiving = true;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(_, prevState) {
      if (prevState.editorState !== this.state.editorState) {
        this.state.editorState.setConvertOptions(editor_getConvertOptions(this.editorProps));
      }
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(props) {
      var _this3 = this;

      this.editorProps = this.getEditorProps(props);
      var editorState = props.value;
      var _this$editorProps2 = this.editorProps,
          media = _this$editorProps2.media,
          language = _this$editorProps2.language;
      var currentProps = this.getEditorProps();

      if (!editor_isControlEnabled(currentProps, 'media') && editor_isControlEnabled(this.editorProps, 'media') && !this.braftFinder) {
        var _defaultProps$media$m2 = objectSpread_default()({}, configs_props.media, media),
            uploadFn = _defaultProps$media$m2.uploadFn,
            validateFn = _defaultProps$media$m2.validateFn,
            items = _defaultProps$media$m2.items;

        this.braftFinder = new external_braft_finder_default.a({
          items: items,
          language: language,
          uploader: uploadFn,
          validator: validateFn
        });
        this.forceUpdate();
      }

      if (media && media.items && this.braftFinder) {
        this.braftFinder.setItems(media.items);
      }

      var nextEditorState;

      if (!this.valueInitialized && typeof this.props.defaultValue === 'undefined' && external_braft_utils_["ContentUtils"].isEditorState(props.defaultValue)) {
        nextEditorState = props.defaultValue;
      } else if (external_braft_utils_["ContentUtils"].isEditorState(editorState)) {
        nextEditorState = editorState;
      }

      if (nextEditorState) {
        if (nextEditorState && nextEditorState !== this.state.editorState) {
          var tempColors = external_braft_utils_["ColorUtils"].detectColorsFromDraftState(nextEditorState.toRAW(true));
          nextEditorState.setConvertOptions(editor_getConvertOptions(this.editorProps));
          this.setState({
            tempColors: filterColors([].concat(toConsumableArray_default()(this.state.tempColors), toConsumableArray_default()(tempColors)), currentProps.colors),
            editorState: nextEditorState
          }, function () {
            _this3.props.onChange && _this3.props.onChange(nextEditorState);
          });
        } else {
          this.setState({
            editorState: nextEditorState
          });
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.isLiving = false;
      this.controlBarInstance && this.controlBarInstance.closeBraftFinder();
    }
  }, {
    key: "lockOrUnlockEditor",
    value: function lockOrUnlockEditor(editorLocked) {
      this.setState({
        editorLocked: editorLocked
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var _this$editorProps3 = this.editorProps,
          id = _this$editorProps3.id,
          editorId = _this$editorProps3.editorId,
          controls = _this$editorProps3.controls,
          excludeControls = _this$editorProps3.excludeControls,
          extendControls = _this$editorProps3.extendControls,
          readOnly = _this$editorProps3.readOnly,
          disabled = _this$editorProps3.disabled,
          media = _this$editorProps3.media,
          language = _this$editorProps3.language,
          colors = _this$editorProps3.colors,
          colorPicker = _this$editorProps3.colorPicker,
          colorPickerTheme = _this$editorProps3.colorPickerTheme,
          colorPickerAutoHide = _this$editorProps3.colorPickerAutoHide,
          hooks = _this$editorProps3.hooks,
          fontSizes = _this$editorProps3.fontSizes,
          fontFamilies = _this$editorProps3.fontFamilies,
          emojis = _this$editorProps3.emojis,
          placeholder = _this$editorProps3.placeholder,
          fixPlaceholder = _this$editorProps3.fixPlaceholder,
          headings = _this$editorProps3.headings,
          imageControls = _this$editorProps3.imageControls,
          imageResizable = _this$editorProps3.imageResizable,
          imageEqualRatio = _this$editorProps3.imageEqualRatio,
          lineHeights = _this$editorProps3.lineHeights,
          letterSpacings = _this$editorProps3.letterSpacings,
          textAligns = _this$editorProps3.textAligns,
          textBackgroundColor = _this$editorProps3.textBackgroundColor,
          allowInsertLinkText = _this$editorProps3.allowInsertLinkText,
          defaultLinkTarget = _this$editorProps3.defaultLinkTarget,
          extendAtomics = _this$editorProps3.extendAtomics,
          className = _this$editorProps3.className,
          style = _this$editorProps3.style,
          controlBarClassName = _this$editorProps3.controlBarClassName,
          controlBarStyle = _this$editorProps3.controlBarStyle,
          contentClassName = _this$editorProps3.contentClassName,
          contentStyle = _this$editorProps3.contentStyle,
          stripPastedStyles = _this$editorProps3.stripPastedStyles,
          componentBelowControlBar = _this$editorProps3.componentBelowControlBar;
      var _this$state = this.state,
          isFullscreen = _this$state.isFullscreen,
          editorState = _this$state.editorState;
      editorId = editorId || id;
      hooks = buildHooks(hooks);
      controls = controls.filter(function (item) {
        return excludeControls.indexOf(item) === -1;
      });
      language = (typeof language === 'function' ? language(languages, 'braft-editor') : languages[language]) || languages[configs_props.language];
      var externalMedias = media && media.externals ? objectSpread_default()({}, configs_props.media.externals, media.externals) : configs_props.media.externals;
      var accepts = media && media.accepts ? objectSpread_default()({}, configs_props.media.accepts, media.accepts) : configs_props.media.accepts;
      media = objectSpread_default()({}, configs_props.media, media, {
        externalMedias: externalMedias,
        accepts: accepts
      });

      if (!media.uploadFn) {
        media.video = false;
        media.audio = false;
      }

      var controlBarProps = {
        editor: this,
        editorState: editorState,
        braftFinder: this.braftFinder,
        ref: function ref(instance) {
          return _this4.controlBarInstance = instance;
        },
        getContainerNode: function getContainerNode() {
          return _this4.containerNode;
        },
        className: controlBarClassName,
        style: controlBarStyle,
        colors: [].concat(toConsumableArray_default()(colors), toConsumableArray_default()(this.state.tempColors)),
        colorPicker: colorPicker,
        colorPickerTheme: colorPickerTheme,
        colorPickerAutoHide: colorPickerAutoHide,
        hooks: hooks,
        editorId: editorId,
        media: media,
        controls: controls,
        language: language,
        extendControls: extendControls,
        headings: headings,
        fontSizes: fontSizes,
        fontFamilies: fontFamilies,
        emojis: emojis,
        lineHeights: lineHeights,
        letterSpacings: letterSpacings,
        textAligns: textAligns,
        textBackgroundColor: textBackgroundColor,
        allowInsertLinkText: allowInsertLinkText,
        defaultLinkTarget: defaultLinkTarget
      };
      var unitExportFn = editorState.convertOptions.unitExportFn;
      var commonProps = {
        editor: this,
        editorId: editorId,
        hooks: hooks,
        editorState: editorState,
        containerNode: this.containerNode,
        imageControls: imageControls,
        imageResizable: imageResizable,
        language: language,
        extendAtomics: extendAtomics,
        imageEqualRatio: imageEqualRatio
      };
      var blockRendererFn = getBlockRendererFn(commonProps, this.editorProps.blockRendererFn);
      var blockRenderMap = getBlockRenderMap(commonProps, this.editorProps.blockRenderMap);
      var blockStyleFn = getBlockStyleFn(this.editorProps.blockStyleFn);
      var customStyleMap = getCustomStyleMap(commonProps, this.editorProps.customStyleMap);
      var customStyleFn = getCustomStyleFn(commonProps, {
        fontFamilies: fontFamilies,
        unitExportFn: unitExportFn,
        customStyleFn: this.editorProps.customStyleFn
      });
      var keyBindingFn = keybindings(this.editorProps.keyBindingFn);
      var mixedProps = {};

      if (this.state.editorLocked || this.editorProps.disabled || this.editorProps.readOnly || this.editorProps.draftProps.readOnly) {
        mixedProps.readOnly = true;
      }

      if (placeholder && fixPlaceholder && editorState.isEmpty() && editorState.getCurrentContent().getFirstBlock().getType() !== 'unstyled') {
        placeholder = '';
      }

      var draftProps = objectSpread_default()({
        ref: function ref(instance) {
          _this4.draftInstance = instance;
        },
        editorState: editorState,
        handleKeyCommand: this.handleKeyCommand,
        handleReturn: this.handleReturn,
        handleBeforeInput: this.handleBeforeInput,
        handleDrop: this.handleDrop,
        handleDroppedFiles: this.handleDroppedFiles,
        handlePastedText: this.handlePastedText,
        handlePastedFiles: this.handlePastedFiles,
        onChange: this.onChange,
        onTab: this.onTab,
        onFocus: this.onFocus,
        onBlur: this.onBlur,
        blockRenderMap: blockRenderMap,
        blockRendererFn: blockRendererFn,
        blockStyleFn: blockStyleFn,
        customStyleMap: customStyleMap,
        customStyleFn: customStyleFn,
        keyBindingFn: keyBindingFn,
        placeholder: placeholder,
        stripPastedStyles: stripPastedStyles
      }, this.editorProps.draftProps, mixedProps);

      return external_react_default.a.createElement("div", {
        style: style,
        ref: this.setEditorContainerNode,
        className: "bf-container ".concat(className).concat(disabled ? ' disabled' : '').concat(readOnly ? ' read-only' : '').concat(isFullscreen ? ' fullscreen' : '')
      }, external_react_default.a.createElement(ControlBar_ControlBar, controlBarProps), componentBelowControlBar, external_react_default.a.createElement("div", {
        onCompositionStart: this.handleCompositionStart,
        className: "bf-content ".concat(contentClassName),
        onCopy: this.handleCopyContent,
        style: contentStyle
      }, external_react_default.a.createElement(external_draft_js_["Editor"], draftProps)));
    }
  }]);

  return BraftEditor;
}(external_react_default.a.Component);

defineProperty_default()(editor_BraftEditor, "defaultProps", configs_props);



// EXTERNAL MODULE: external "braft-convert"
var external_braft_convert_ = __nested_webpack_require_38800__(14);

// CONCATENATED MODULE: ./index.jsx
/* concated harmony reexport EditorState */__nested_webpack_require_38800__.d(__webpack_exports__, "EditorState", function() { return external_draft_js_["EditorState"]; });
/* concated harmony reexport getDecorators */__nested_webpack_require_38800__.d(__webpack_exports__, "getDecorators", function() { return getDecorators; });







external_draft_js_["EditorState"].prototype.setConvertOptions = function () {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  this.convertOptions = options;
};

external_draft_js_["EditorState"].prototype.toHTML = function () {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var convertOptions = this.convertOptions || {};
  return Object(external_braft_convert_["convertEditorStateToHTML"])(this, objectSpread_default()({}, convertOptions, options));
};

external_draft_js_["EditorState"].prototype.toRAW = function (noStringify) {
  return noStringify ? Object(external_braft_convert_["convertEditorStateToRaw"])(this) : JSON.stringify(Object(external_braft_convert_["convertEditorStateToRaw"])(this));
};

external_draft_js_["EditorState"].prototype.toText = function () {
  return this.getCurrentContent().getPlainText();
};

external_draft_js_["EditorState"].prototype.isEmpty = function () {
  return !this.getCurrentContent().hasText();
};

editor_BraftEditor.createEditorState = external_draft_js_["EditorState"].createFrom = function (content) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  options.unitExportFn = options.unitExportFn || editor_BraftEditor.defaultProps.converts.unitExportFn;
  options.styleImportFn = compositeStyleImportFn(options.styleImportFn, options.editorId);
  options.entityImportFn = compositeEntityImportFn(options.entityImportFn, options.editorId);
  options.blockImportFn = compositeBlockImportFn(options.blockImportFn, options.editorId);
  var editorState = null;

  if (content instanceof external_draft_js_["EditorState"]) {
    editorState = content;
  } else if (typeof_default()(content) === 'object' && content && content.blocks && content.entityMap) {
    editorState = Object(external_braft_convert_["convertRawToEditorState"])(content, getDecorators(options.editorId));
  } else if (typeof content === 'string') {
    try {
      if (/^(-)?\\d+$/.test(content)) {
        editorState = Object(external_braft_convert_["convertHTMLToEditorState"])(content, getDecorators(options.editorId), options, 'create');
      } else {
        editorState = external_draft_js_["EditorState"].createFrom(JSON.parse(content), options);
      }
    } catch (error) {
      editorState = Object(external_braft_convert_["convertHTMLToEditorState"])(content, getDecorators(options.editorId), options, 'create');
    }
  } else if (typeof content === 'number') {
    editorState = Object(external_braft_convert_["convertHTMLToEditorState"])(content.toLocaleString().replace(/,/g, ''), getDecorators(options.editorId), options, 'create');
  } else {
    editorState = external_draft_js_["EditorState"].createEmpty(getDecorators(options.editorId));
  }

  options.styleExportFn = compositeStyleExportFn(options.styleExportFn, options.editorId);
  options.entityExportFn = compositeEntityExportFn(options.entityExportFn, options.editorId);
  options.blockExportFn = compositeBlockExportFn(options.blockExportFn, options.editorId);
  editorState.setConvertOptions(options);
  return editorState;
};

/* harmony default export */ var index_0 = __webpack_exports__["default"] = (createExtensibleEditor(editor_BraftEditor));
 // 2.1 version development plan
// [] Optimizing the selection of multiple lines of text is an error when inserting a link
// [] Add a new image delete hook in the editor
// 2.2 development plan
// [] table function
// [] Beautify the UI, including icons and interface style
// version 2.3 development plan
// [] Primary md shortcut input support
// [] simple editing functions such as picture cropping
// [] allows custom shortcuts

/***/ }),
/* 40 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 41 */,
/* 42 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 43 */,
/* 44 */,
/* 45 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 46 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 47 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 48 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 49 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 50 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 51 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 52 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 53 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 54 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 55 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 56 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 57 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 58 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 59 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 60 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 61 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 62 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 63 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
});
//# sourceMappingURL=index.js.map

//# sourceURL=webpack:///./node_modules/braft-editor/dist/index.js?`)}}]);
