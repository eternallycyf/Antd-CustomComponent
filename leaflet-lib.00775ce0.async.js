(self.webpackChunk=self.webpackChunk||[]).push([[429],{45243:function(__unused_webpack_module,exports){eval(`/* @preserve
 * Leaflet 1.9.4, a JS library for interactive maps. https://leafletjs.com
 * (c) 2010-2023 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */

(function (global, factory) {
   true ? factory(exports) :
  0;
})(this, (function (exports) { 'use strict';

  var version = "1.9.4";

  /*\r
   * @namespace Util\r
   *\r
   * Various utility functions, used by Leaflet internally.\r
   */\r
\r
  // @function extend(dest: Object, src?: Object): Object\r
  // Merges the properties of the \`src\` object (or multiple objects) into \`dest\` object and returns the latter. Has an \`L.extend\` shortcut.\r
  function extend(dest) {\r
  	var i, j, len, src;\r
\r
  	for (j = 1, len = arguments.length; j < len; j++) {\r
  		src = arguments[j];\r
  		for (i in src) {\r
  			dest[i] = src[i];\r
  		}\r
  	}\r
  	return dest;\r
  }\r
\r
  // @function create(proto: Object, properties?: Object): Object\r
  // Compatibility polyfill for [Object.create](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/create)\r
  var create$2 = Object.create || (function () {\r
  	function F() {}\r
  	return function (proto) {\r
  		F.prototype = proto;\r
  		return new F();\r
  	};\r
  })();\r
\r
  // @function bind(fn: Function, \u2026): Function\r
  // Returns a new function bound to the arguments passed, like [Function.prototype.bind](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Function/bind).\r
  // Has a \`L.bind()\` shortcut.\r
  function bind(fn, obj) {\r
  	var slice = Array.prototype.slice;\r
\r
  	if (fn.bind) {\r
  		return fn.bind.apply(fn, slice.call(arguments, 1));\r
  	}\r
\r
  	var args = slice.call(arguments, 2);\r
\r
  	return function () {\r
  		return fn.apply(obj, args.length ? args.concat(slice.call(arguments)) : arguments);\r
  	};\r
  }\r
\r
  // @property lastId: Number\r
  // Last unique ID used by [\`stamp()\`](#util-stamp)\r
  var lastId = 0;\r
\r
  // @function stamp(obj: Object): Number\r
  // Returns the unique ID of an object, assigning it one if it doesn't have it.\r
  function stamp(obj) {\r
  	if (!('_leaflet_id' in obj)) {\r
  		obj['_leaflet_id'] = ++lastId;\r
  	}\r
  	return obj._leaflet_id;\r
  }\r
\r
  // @function throttle(fn: Function, time: Number, context: Object): Function\r
  // Returns a function which executes function \`fn\` with the given scope \`context\`\r
  // (so that the \`this\` keyword refers to \`context\` inside \`fn\`'s code). The function\r
  // \`fn\` will be called no more than one time per given amount of \`time\`. The arguments\r
  // received by the bound function will be any arguments passed when binding the\r
  // function, followed by any arguments passed when invoking the bound function.\r
  // Has an \`L.throttle\` shortcut.\r
  function throttle(fn, time, context) {\r
  	var lock, args, wrapperFn, later;\r
\r
  	later = function () {\r
  		// reset lock and call if queued\r
  		lock = false;\r
  		if (args) {\r
  			wrapperFn.apply(context, args);\r
  			args = false;\r
  		}\r
  	};\r
\r
  	wrapperFn = function () {\r
  		if (lock) {\r
  			// called too soon, queue to call later\r
  			args = arguments;\r
\r
  		} else {\r
  			// call and lock until later\r
  			fn.apply(context, arguments);\r
  			setTimeout(later, time);\r
  			lock = true;\r
  		}\r
  	};\r
\r
  	return wrapperFn;\r
  }\r
\r
  // @function wrapNum(num: Number, range: Number[], includeMax?: Boolean): Number\r
  // Returns the number \`num\` modulo \`range\` in such a way so it lies within\r
  // \`range[0]\` and \`range[1]\`. The returned value will be always smaller than\r
  // \`range[1]\` unless \`includeMax\` is set to \`true\`.\r
  function wrapNum(x, range, includeMax) {\r
  	var max = range[1],\r
  	    min = range[0],\r
  	    d = max - min;\r
  	return x === max && includeMax ? x : ((x - min) % d + d) % d + min;\r
  }\r
\r
  // @function falseFn(): Function\r
  // Returns a function which always returns \`false\`.\r
  function falseFn() { return false; }\r
\r
  // @function formatNum(num: Number, precision?: Number|false): Number\r
  // Returns the number \`num\` rounded with specified \`precision\`.\r
  // The default \`precision\` value is 6 decimal places.\r
  // \`false\` can be passed to skip any processing (can be useful to avoid round-off errors).\r
  function formatNum(num, precision) {\r
  	if (precision === false) { return num; }\r
  	var pow = Math.pow(10, precision === undefined ? 6 : precision);\r
  	return Math.round(num * pow) / pow;\r
  }\r
\r
  // @function trim(str: String): String\r
  // Compatibility polyfill for [String.prototype.trim](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String/Trim)\r
  function trim(str) {\r
  	return str.trim ? str.trim() : str.replace(/^\\s+|\\s+$/g, '');\r
  }\r
\r
  // @function splitWords(str: String): String[]\r
  // Trims and splits the string on whitespace and returns the array of parts.\r
  function splitWords(str) {\r
  	return trim(str).split(/\\s+/);\r
  }\r
\r
  // @function setOptions(obj: Object, options: Object): Object\r
  // Merges the given properties to the \`options\` of the \`obj\` object, returning the resulting options. See \`Class options\`. Has an \`L.setOptions\` shortcut.\r
  function setOptions(obj, options) {\r
  	if (!Object.prototype.hasOwnProperty.call(obj, 'options')) {\r
  		obj.options = obj.options ? create$2(obj.options) : {};\r
  	}\r
  	for (var i in options) {\r
  		obj.options[i] = options[i];\r
  	}\r
  	return obj.options;\r
  }\r
\r
  // @function getParamString(obj: Object, existingUrl?: String, uppercase?: Boolean): String\r
  // Converts an object into a parameter URL string, e.g. \`{a: "foo", b: "bar"}\`\r
  // translates to \`'?a=foo&b=bar'\`. If \`existingUrl\` is set, the parameters will\r
  // be appended at the end. If \`uppercase\` is \`true\`, the parameter names will\r
  // be uppercased (e.g. \`'?A=foo&B=bar'\`)\r
  function getParamString(obj, existingUrl, uppercase) {\r
  	var params = [];\r
  	for (var i in obj) {\r
  		params.push(encodeURIComponent(uppercase ? i.toUpperCase() : i) + '=' + encodeURIComponent(obj[i]));\r
  	}\r
  	return ((!existingUrl || existingUrl.indexOf('?') === -1) ? '?' : '&') + params.join('&');\r
  }\r
\r
  var templateRe = /\\{ *([\\w_ -]+) *\\}/g;\r
\r
  // @function template(str: String, data: Object): String\r
  // Simple templating facility, accepts a template string of the form \`'Hello {a}, {b}'\`\r
  // and a data object like \`{a: 'foo', b: 'bar'}\`, returns evaluated string\r
  // \`('Hello foo, bar')\`. You can also specify functions instead of strings for\r
  // data values \u2014 they will be evaluated passing \`data\` as an argument.\r
  function template(str, data) {\r
  	return str.replace(templateRe, function (str, key) {\r
  		var value = data[key];\r
\r
  		if (value === undefined) {\r
  			throw new Error('No value provided for variable ' + str);\r
\r
  		} else if (typeof value === 'function') {\r
  			value = value(data);\r
  		}\r
  		return value;\r
  	});\r
  }\r
\r
  // @function isArray(obj): Boolean\r
  // Compatibility polyfill for [Array.isArray](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray)\r
  var isArray = Array.isArray || function (obj) {\r
  	return (Object.prototype.toString.call(obj) === '[object Array]');\r
  };\r
\r
  // @function indexOf(array: Array, el: Object): Number\r
  // Compatibility polyfill for [Array.prototype.indexOf](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)\r
  function indexOf(array, el) {\r
  	for (var i = 0; i < array.length; i++) {\r
  		if (array[i] === el) { return i; }\r
  	}\r
  	return -1;\r
  }\r
\r
  // @property emptyImageUrl: String\r
  // Data URI string containing a base64-encoded empty GIF image.\r
  // Used as a hack to free memory from unused images on WebKit-powered\r
  // mobile devices (by setting image \`src\` to this string).\r
  var emptyImageUrl = 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=';\r
\r
  // inspired by https://paulirish.com/2011/requestanimationframe-for-smart-animating/\r
\r
  function getPrefixed(name) {\r
  	return window['webkit' + name] || window['moz' + name] || window['ms' + name];\r
  }\r
\r
  var lastTime = 0;\r
\r
  // fallback for IE 7-8\r
  function timeoutDefer(fn) {\r
  	var time = +new Date(),\r
  	    timeToCall = Math.max(0, 16 - (time - lastTime));\r
\r
  	lastTime = time + timeToCall;\r
  	return window.setTimeout(fn, timeToCall);\r
  }\r
\r
  var requestFn = window.requestAnimationFrame || getPrefixed('RequestAnimationFrame') || timeoutDefer;\r
  var cancelFn = window.cancelAnimationFrame || getPrefixed('CancelAnimationFrame') ||\r
  		getPrefixed('CancelRequestAnimationFrame') || function (id) { window.clearTimeout(id); };\r
\r
  // @function requestAnimFrame(fn: Function, context?: Object, immediate?: Boolean): Number\r
  // Schedules \`fn\` to be executed when the browser repaints. \`fn\` is bound to\r
  // \`context\` if given. When \`immediate\` is set, \`fn\` is called immediately if\r
  // the browser doesn't have native support for\r
  // [\`window.requestAnimationFrame\`](https://developer.mozilla.org/docs/Web/API/window/requestAnimationFrame),\r
  // otherwise it's delayed. Returns a request ID that can be used to cancel the request.\r
  function requestAnimFrame(fn, context, immediate) {\r
  	if (immediate && requestFn === timeoutDefer) {\r
  		fn.call(context);\r
  	} else {\r
  		return requestFn.call(window, bind(fn, context));\r
  	}\r
  }\r
\r
  // @function cancelAnimFrame(id: Number): undefined\r
  // Cancels a previous \`requestAnimFrame\`. See also [window.cancelAnimationFrame](https://developer.mozilla.org/docs/Web/API/window/cancelAnimationFrame).\r
  function cancelAnimFrame(id) {\r
  	if (id) {\r
  		cancelFn.call(window, id);\r
  	}\r
  }

  var Util = {
    __proto__: null,
    extend: extend,
    create: create$2,
    bind: bind,
    get lastId () { return lastId; },
    stamp: stamp,
    throttle: throttle,
    wrapNum: wrapNum,
    falseFn: falseFn,
    formatNum: formatNum,
    trim: trim,
    splitWords: splitWords,
    setOptions: setOptions,
    getParamString: getParamString,
    template: template,
    isArray: isArray,
    indexOf: indexOf,
    emptyImageUrl: emptyImageUrl,
    requestFn: requestFn,
    cancelFn: cancelFn,
    requestAnimFrame: requestAnimFrame,
    cancelAnimFrame: cancelAnimFrame
  };

  // @class Class\r
  // @aka L.Class\r
\r
  // @section\r
  // @uninheritable\r
\r
  // Thanks to John Resig and Dean Edwards for inspiration!\r
\r
  function Class() {}\r
\r
  Class.extend = function (props) {\r
\r
  	// @function extend(props: Object): Function\r
  	// [Extends the current class](#class-inheritance) given the properties to be included.\r
  	// Returns a Javascript function that is a class constructor (to be called with \`new\`).\r
  	var NewClass = function () {\r
\r
  		setOptions(this);\r
\r
  		// call the constructor\r
  		if (this.initialize) {\r
  			this.initialize.apply(this, arguments);\r
  		}\r
\r
  		// call all constructor hooks\r
  		this.callInitHooks();\r
  	};\r
\r
  	var parentProto = NewClass.__super__ = this.prototype;\r
\r
  	var proto = create$2(parentProto);\r
  	proto.constructor = NewClass;\r
\r
  	NewClass.prototype = proto;\r
\r
  	// inherit parent's statics\r
  	for (var i in this) {\r
  		if (Object.prototype.hasOwnProperty.call(this, i) && i !== 'prototype' && i !== '__super__') {\r
  			NewClass[i] = this[i];\r
  		}\r
  	}\r
\r
  	// mix static properties into the class\r
  	if (props.statics) {\r
  		extend(NewClass, props.statics);\r
  	}\r
\r
  	// mix includes into the prototype\r
  	if (props.includes) {\r
  		checkDeprecatedMixinEvents(props.includes);\r
  		extend.apply(null, [proto].concat(props.includes));\r
  	}\r
\r
  	// mix given properties into the prototype\r
  	extend(proto, props);\r
  	delete proto.statics;\r
  	delete proto.includes;\r
\r
  	// merge options\r
  	if (proto.options) {\r
  		proto.options = parentProto.options ? create$2(parentProto.options) : {};\r
  		extend(proto.options, props.options);\r
  	}\r
\r
  	proto._initHooks = [];\r
\r
  	// add method for calling all hooks\r
  	proto.callInitHooks = function () {\r
\r
  		if (this._initHooksCalled) { return; }\r
\r
  		if (parentProto.callInitHooks) {\r
  			parentProto.callInitHooks.call(this);\r
  		}\r
\r
  		this._initHooksCalled = true;\r
\r
  		for (var i = 0, len = proto._initHooks.length; i < len; i++) {\r
  			proto._initHooks[i].call(this);\r
  		}\r
  	};\r
\r
  	return NewClass;\r
  };\r
\r
\r
  // @function include(properties: Object): this\r
  // [Includes a mixin](#class-includes) into the current class.\r
  Class.include = function (props) {\r
  	var parentOptions = this.prototype.options;\r
  	extend(this.prototype, props);\r
  	if (props.options) {\r
  		this.prototype.options = parentOptions;\r
  		this.mergeOptions(props.options);\r
  	}\r
  	return this;\r
  };\r
\r
  // @function mergeOptions(options: Object): this\r
  // [Merges \`options\`](#class-options) into the defaults of the class.\r
  Class.mergeOptions = function (options) {\r
  	extend(this.prototype.options, options);\r
  	return this;\r
  };\r
\r
  // @function addInitHook(fn: Function): this\r
  // Adds a [constructor hook](#class-constructor-hooks) to the class.\r
  Class.addInitHook = function (fn) { // (Function) || (String, args...)\r
  	var args = Array.prototype.slice.call(arguments, 1);\r
\r
  	var init = typeof fn === 'function' ? fn : function () {\r
  		this[fn].apply(this, args);\r
  	};\r
\r
  	this.prototype._initHooks = this.prototype._initHooks || [];\r
  	this.prototype._initHooks.push(init);\r
  	return this;\r
  };\r
\r
  function checkDeprecatedMixinEvents(includes) {\r
  	/* global L: true */\r
  	if (typeof L === 'undefined' || !L || !L.Mixin) { return; }\r
\r
  	includes = isArray(includes) ? includes : [includes];\r
\r
  	for (var i = 0; i < includes.length; i++) {\r
  		if (includes[i] === L.Mixin.Events) {\r
  			console.warn('Deprecated include of L.Mixin.Events: ' +\r
  				'this property will be removed in future releases, ' +\r
  				'please inherit from L.Evented instead.', new Error().stack);\r
  		}\r
  	}\r
  }

  /*\r
   * @class Evented\r
   * @aka L.Evented\r
   * @inherits Class\r
   *\r
   * A set of methods shared between event-powered classes (like \`Map\` and \`Marker\`). Generally, events allow you to execute some function when something happens with an object (e.g. the user clicks on the map, causing the map to fire \`'click'\` event).\r
   *\r
   * @example\r
   *\r
   * \`\`\`js\r
   * map.on('click', function(e) {\r
   * 	alert(e.latlng);\r
   * } );\r
   * \`\`\`\r
   *\r
   * Leaflet deals with event listeners by reference, so if you want to add a listener and then remove it, define it as a function:\r
   *\r
   * \`\`\`js\r
   * function onClick(e) { ... }\r
   *\r
   * map.on('click', onClick);\r
   * map.off('click', onClick);\r
   * \`\`\`\r
   */\r
\r
  var Events = {\r
  	/* @method on(type: String, fn: Function, context?: Object): this\r
  	 * Adds a listener function (\`fn\`) to a particular event type of the object. You can optionally specify the context of the listener (object the this keyword will point to). You can also pass several space-separated types (e.g. \`'click dblclick'\`).\r
  	 *\r
  	 * @alternative\r
  	 * @method on(eventMap: Object): this\r
  	 * Adds a set of type/listener pairs, e.g. \`{click: onClick, mousemove: onMouseMove}\`\r
  	 */\r
  	on: function (types, fn, context) {\r
\r
  		// types can be a map of types/handlers\r
  		if (typeof types === 'object') {\r
  			for (var type in types) {\r
  				// we don't process space-separated events here for performance;\r
  				// it's a hot path since Layer uses the on(obj) syntax\r
  				this._on(type, types[type], fn);\r
  			}\r
\r
  		} else {\r
  			// types can be a string of space-separated words\r
  			types = splitWords(types);\r
\r
  			for (var i = 0, len = types.length; i < len; i++) {\r
  				this._on(types[i], fn, context);\r
  			}\r
  		}\r
\r
  		return this;\r
  	},\r
\r
  	/* @method off(type: String, fn?: Function, context?: Object): this\r
  	 * Removes a previously added listener function. If no function is specified, it will remove all the listeners of that particular event from the object. Note that if you passed a custom context to \`on\`, you must pass the same context to \`off\` in order to remove the listener.\r
  	 *\r
  	 * @alternative\r
  	 * @method off(eventMap: Object): this\r
  	 * Removes a set of type/listener pairs.\r
  	 *\r
  	 * @alternative\r
  	 * @method off: this\r
  	 * Removes all listeners to all events on the object. This includes implicitly attached events.\r
  	 */\r
  	off: function (types, fn, context) {\r
\r
  		if (!arguments.length) {\r
  			// clear all listeners if called without arguments\r
  			delete this._events;\r
\r
  		} else if (typeof types === 'object') {\r
  			for (var type in types) {\r
  				this._off(type, types[type], fn);\r
  			}\r
\r
  		} else {\r
  			types = splitWords(types);\r
\r
  			var removeAll = arguments.length === 1;\r
  			for (var i = 0, len = types.length; i < len; i++) {\r
  				if (removeAll) {\r
  					this._off(types[i]);\r
  				} else {\r
  					this._off(types[i], fn, context);\r
  				}\r
  			}\r
  		}\r
\r
  		return this;\r
  	},\r
\r
  	// attach listener (without syntactic sugar now)\r
  	_on: function (type, fn, context, _once) {\r
  		if (typeof fn !== 'function') {\r
  			console.warn('wrong listener type: ' + typeof fn);\r
  			return;\r
  		}\r
\r
  		// check if fn already there\r
  		if (this._listens(type, fn, context) !== false) {\r
  			return;\r
  		}\r
\r
  		if (context === this) {\r
  			// Less memory footprint.\r
  			context = undefined;\r
  		}\r
\r
  		var newListener = {fn: fn, ctx: context};\r
  		if (_once) {\r
  			newListener.once = true;\r
  		}\r
\r
  		this._events = this._events || {};\r
  		this._events[type] = this._events[type] || [];\r
  		this._events[type].push(newListener);\r
  	},\r
\r
  	_off: function (type, fn, context) {\r
  		var listeners,\r
  		    i,\r
  		    len;\r
\r
  		if (!this._events) {\r
  			return;\r
  		}\r
\r
  		listeners = this._events[type];\r
  		if (!listeners) {\r
  			return;\r
  		}\r
\r
  		if (arguments.length === 1) { // remove all\r
  			if (this._firingCount) {\r
  				// Set all removed listeners to noop\r
  				// so they are not called if remove happens in fire\r
  				for (i = 0, len = listeners.length; i < len; i++) {\r
  					listeners[i].fn = falseFn;\r
  				}\r
  			}\r
  			// clear all listeners for a type if function isn't specified\r
  			delete this._events[type];\r
  			return;\r
  		}\r
\r
  		if (typeof fn !== 'function') {\r
  			console.warn('wrong listener type: ' + typeof fn);\r
  			return;\r
  		}\r
\r
  		// find fn and remove it\r
  		var index = this._listens(type, fn, context);\r
  		if (index !== false) {\r
  			var listener = listeners[index];\r
  			if (this._firingCount) {\r
  				// set the removed listener to noop so that's not called if remove happens in fire\r
  				listener.fn = falseFn;\r
\r
  				/* copy array in case events are being fired */\r
  				this._events[type] = listeners = listeners.slice();\r
  			}\r
  			listeners.splice(index, 1);\r
  		}\r
  	},\r
\r
  	// @method fire(type: String, data?: Object, propagate?: Boolean): this\r
  	// Fires an event of the specified type. You can optionally provide a data\r
  	// object \u2014 the first argument of the listener function will contain its\r
  	// properties. The event can optionally be propagated to event parents.\r
  	fire: function (type, data, propagate) {\r
  		if (!this.listens(type, propagate)) { return this; }\r
\r
  		var event = extend({}, data, {\r
  			type: type,\r
  			target: this,\r
  			sourceTarget: data && data.sourceTarget || this\r
  		});\r
\r
  		if (this._events) {\r
  			var listeners = this._events[type];\r
  			if (listeners) {\r
  				this._firingCount = (this._firingCount + 1) || 1;\r
  				for (var i = 0, len = listeners.length; i < len; i++) {\r
  					var l = listeners[i];\r
  					// off overwrites l.fn, so we need to copy fn to a var\r
  					var fn = l.fn;\r
  					if (l.once) {\r
  						this.off(type, fn, l.ctx);\r
  					}\r
  					fn.call(l.ctx || this, event);\r
  				}\r
\r
  				this._firingCount--;\r
  			}\r
  		}\r
\r
  		if (propagate) {\r
  			// propagate the event to parents (set with addEventParent)\r
  			this._propagateEvent(event);\r
  		}\r
\r
  		return this;\r
  	},\r
\r
  	// @method listens(type: String, propagate?: Boolean): Boolean\r
  	// @method listens(type: String, fn: Function, context?: Object, propagate?: Boolean): Boolean\r
  	// Returns \`true\` if a particular event type has any listeners attached to it.\r
  	// The verification can optionally be propagated, it will return \`true\` if parents have the listener attached to it.\r
  	listens: function (type, fn, context, propagate) {\r
  		if (typeof type !== 'string') {\r
  			console.warn('"string" type argument expected');\r
  		}\r
\r
  		// we don't overwrite the input \`fn\` value, because we need to use it for propagation\r
  		var _fn = fn;\r
  		if (typeof fn !== 'function') {\r
  			propagate = !!fn;\r
  			_fn = undefined;\r
  			context = undefined;\r
  		}\r
\r
  		var listeners = this._events && this._events[type];\r
  		if (listeners && listeners.length) {\r
  			if (this._listens(type, _fn, context) !== false) {\r
  				return true;\r
  			}\r
  		}\r
\r
  		if (propagate) {\r
  			// also check parents for listeners if event propagates\r
  			for (var id in this._eventParents) {\r
  				if (this._eventParents[id].listens(type, fn, context, propagate)) { return true; }\r
  			}\r
  		}\r
  		return false;\r
  	},\r
\r
  	// returns the index (number) or false\r
  	_listens: function (type, fn, context) {\r
  		if (!this._events) {\r
  			return false;\r
  		}\r
\r
  		var listeners = this._events[type] || [];\r
  		if (!fn) {\r
  			return !!listeners.length;\r
  		}\r
\r
  		if (context === this) {\r
  			// Less memory footprint.\r
  			context = undefined;\r
  		}\r
\r
  		for (var i = 0, len = listeners.length; i < len; i++) {\r
  			if (listeners[i].fn === fn && listeners[i].ctx === context) {\r
  				return i;\r
  			}\r
  		}\r
  		return false;\r
\r
  	},\r
\r
  	// @method once(\u2026): this\r
  	// Behaves as [\`on(\u2026)\`](#evented-on), except the listener will only get fired once and then removed.\r
  	once: function (types, fn, context) {\r
\r
  		// types can be a map of types/handlers\r
  		if (typeof types === 'object') {\r
  			for (var type in types) {\r
  				// we don't process space-separated events here for performance;\r
  				// it's a hot path since Layer uses the on(obj) syntax\r
  				this._on(type, types[type], fn, true);\r
  			}\r
\r
  		} else {\r
  			// types can be a string of space-separated words\r
  			types = splitWords(types);\r
\r
  			for (var i = 0, len = types.length; i < len; i++) {\r
  				this._on(types[i], fn, context, true);\r
  			}\r
  		}\r
\r
  		return this;\r
  	},\r
\r
  	// @method addEventParent(obj: Evented): this\r
  	// Adds an event parent - an \`Evented\` that will receive propagated events\r
  	addEventParent: function (obj) {\r
  		this._eventParents = this._eventParents || {};\r
  		this._eventParents[stamp(obj)] = obj;\r
  		return this;\r
  	},\r
\r
  	// @method removeEventParent(obj: Evented): this\r
  	// Removes an event parent, so it will stop receiving propagated events\r
  	removeEventParent: function (obj) {\r
  		if (this._eventParents) {\r
  			delete this._eventParents[stamp(obj)];\r
  		}\r
  		return this;\r
  	},\r
\r
  	_propagateEvent: function (e) {\r
  		for (var id in this._eventParents) {\r
  			this._eventParents[id].fire(e.type, extend({\r
  				layer: e.target,\r
  				propagatedFrom: e.target\r
  			}, e), true);\r
  		}\r
  	}\r
  };\r
\r
  // aliases; we should ditch those eventually\r
\r
  // @method addEventListener(\u2026): this\r
  // Alias to [\`on(\u2026)\`](#evented-on)\r
  Events.addEventListener = Events.on;\r
\r
  // @method removeEventListener(\u2026): this\r
  // Alias to [\`off(\u2026)\`](#evented-off)\r
\r
  // @method clearAllEventListeners(\u2026): this\r
  // Alias to [\`off()\`](#evented-off)\r
  Events.removeEventListener = Events.clearAllEventListeners = Events.off;\r
\r
  // @method addOneTimeEventListener(\u2026): this\r
  // Alias to [\`once(\u2026)\`](#evented-once)\r
  Events.addOneTimeEventListener = Events.once;\r
\r
  // @method fireEvent(\u2026): this\r
  // Alias to [\`fire(\u2026)\`](#evented-fire)\r
  Events.fireEvent = Events.fire;\r
\r
  // @method hasEventListeners(\u2026): Boolean\r
  // Alias to [\`listens(\u2026)\`](#evented-listens)\r
  Events.hasEventListeners = Events.listens;\r
\r
  var Evented = Class.extend(Events);

  /*\r
   * @class Point\r
   * @aka L.Point\r
   *\r
   * Represents a point with \`x\` and \`y\` coordinates in pixels.\r
   *\r
   * @example\r
   *\r
   * \`\`\`js\r
   * var point = L.point(200, 300);\r
   * \`\`\`\r
   *\r
   * All Leaflet methods and options that accept \`Point\` objects also accept them in a simple Array form (unless noted otherwise), so these lines are equivalent:\r
   *\r
   * \`\`\`js\r
   * map.panBy([200, 300]);\r
   * map.panBy(L.point(200, 300));\r
   * \`\`\`\r
   *\r
   * Note that \`Point\` does not inherit from Leaflet's \`Class\` object,\r
   * which means new classes can't inherit from it, and new methods\r
   * can't be added to it with the \`include\` function.\r
   */\r
\r
  function Point(x, y, round) {\r
  	// @property x: Number; The \`x\` coordinate of the point\r
  	this.x = (round ? Math.round(x) : x);\r
  	// @property y: Number; The \`y\` coordinate of the point\r
  	this.y = (round ? Math.round(y) : y);\r
  }\r
\r
  var trunc = Math.trunc || function (v) {\r
  	return v > 0 ? Math.floor(v) : Math.ceil(v);\r
  };\r
\r
  Point.prototype = {\r
\r
  	// @method clone(): Point\r
  	// Returns a copy of the current point.\r
  	clone: function () {\r
  		return new Point(this.x, this.y);\r
  	},\r
\r
  	// @method add(otherPoint: Point): Point\r
  	// Returns the result of addition of the current and the given points.\r
  	add: function (point) {\r
  		// non-destructive, returns a new point\r
  		return this.clone()._add(toPoint(point));\r
  	},\r
\r
  	_add: function (point) {\r
  		// destructive, used directly for performance in situations where it's safe to modify existing point\r
  		this.x += point.x;\r
  		this.y += point.y;\r
  		return this;\r
  	},\r
\r
  	// @method subtract(otherPoint: Point): Point\r
  	// Returns the result of subtraction of the given point from the current.\r
  	subtract: function (point) {\r
  		return this.clone()._subtract(toPoint(point));\r
  	},\r
\r
  	_subtract: function (point) {\r
  		this.x -= point.x;\r
  		this.y -= point.y;\r
  		return this;\r
  	},\r
\r
  	// @method divideBy(num: Number): Point\r
  	// Returns the result of division of the current point by the given number.\r
  	divideBy: function (num) {\r
  		return this.clone()._divideBy(num);\r
  	},\r
\r
  	_divideBy: function (num) {\r
  		this.x /= num;\r
  		this.y /= num;\r
  		return this;\r
  	},\r
\r
  	// @method multiplyBy(num: Number): Point\r
  	// Returns the result of multiplication of the current point by the given number.\r
  	multiplyBy: function (num) {\r
  		return this.clone()._multiplyBy(num);\r
  	},\r
\r
  	_multiplyBy: function (num) {\r
  		this.x *= num;\r
  		this.y *= num;\r
  		return this;\r
  	},\r
\r
  	// @method scaleBy(scale: Point): Point\r
  	// Multiply each coordinate of the current point by each coordinate of\r
  	// \`scale\`. In linear algebra terms, multiply the point by the\r
  	// [scaling matrix](https://en.wikipedia.org/wiki/Scaling_%28geometry%29#Matrix_representation)\r
  	// defined by \`scale\`.\r
  	scaleBy: function (point) {\r
  		return new Point(this.x * point.x, this.y * point.y);\r
  	},\r
\r
  	// @method unscaleBy(scale: Point): Point\r
  	// Inverse of \`scaleBy\`. Divide each coordinate of the current point by\r
  	// each coordinate of \`scale\`.\r
  	unscaleBy: function (point) {\r
  		return new Point(this.x / point.x, this.y / point.y);\r
  	},\r
\r
  	// @method round(): Point\r
  	// Returns a copy of the current point with rounded coordinates.\r
  	round: function () {\r
  		return this.clone()._round();\r
  	},\r
\r
  	_round: function () {\r
  		this.x = Math.round(this.x);\r
  		this.y = Math.round(this.y);\r
  		return this;\r
  	},\r
\r
  	// @method floor(): Point\r
  	// Returns a copy of the current point with floored coordinates (rounded down).\r
  	floor: function () {\r
  		return this.clone()._floor();\r
  	},\r
\r
  	_floor: function () {\r
  		this.x = Math.floor(this.x);\r
  		this.y = Math.floor(this.y);\r
  		return this;\r
  	},\r
\r
  	// @method ceil(): Point\r
  	// Returns a copy of the current point with ceiled coordinates (rounded up).\r
  	ceil: function () {\r
  		return this.clone()._ceil();\r
  	},\r
\r
  	_ceil: function () {\r
  		this.x = Math.ceil(this.x);\r
  		this.y = Math.ceil(this.y);\r
  		return this;\r
  	},\r
\r
  	// @method trunc(): Point\r
  	// Returns a copy of the current point with truncated coordinates (rounded towards zero).\r
  	trunc: function () {\r
  		return this.clone()._trunc();\r
  	},\r
\r
  	_trunc: function () {\r
  		this.x = trunc(this.x);\r
  		this.y = trunc(this.y);\r
  		return this;\r
  	},\r
\r
  	// @method distanceTo(otherPoint: Point): Number\r
  	// Returns the cartesian distance between the current and the given points.\r
  	distanceTo: function (point) {\r
  		point = toPoint(point);\r
\r
  		var x = point.x - this.x,\r
  		    y = point.y - this.y;\r
\r
  		return Math.sqrt(x * x + y * y);\r
  	},\r
\r
  	// @method equals(otherPoint: Point): Boolean\r
  	// Returns \`true\` if the given point has the same coordinates.\r
  	equals: function (point) {\r
  		point = toPoint(point);\r
\r
  		return point.x === this.x &&\r
  		       point.y === this.y;\r
  	},\r
\r
  	// @method contains(otherPoint: Point): Boolean\r
  	// Returns \`true\` if both coordinates of the given point are less than the corresponding current point coordinates (in absolute values).\r
  	contains: function (point) {\r
  		point = toPoint(point);\r
\r
  		return Math.abs(point.x) <= Math.abs(this.x) &&\r
  		       Math.abs(point.y) <= Math.abs(this.y);\r
  	},\r
\r
  	// @method toString(): String\r
  	// Returns a string representation of the point for debugging purposes.\r
  	toString: function () {\r
  		return 'Point(' +\r
  		        formatNum(this.x) + ', ' +\r
  		        formatNum(this.y) + ')';\r
  	}\r
  };\r
\r
  // @factory L.point(x: Number, y: Number, round?: Boolean)\r
  // Creates a Point object with the given \`x\` and \`y\` coordinates. If optional \`round\` is set to true, rounds the \`x\` and \`y\` values.\r
\r
  // @alternative\r
  // @factory L.point(coords: Number[])\r
  // Expects an array of the form \`[x, y]\` instead.\r
\r
  // @alternative\r
  // @factory L.point(coords: Object)\r
  // Expects a plain object of the form \`{x: Number, y: Number}\` instead.\r
  function toPoint(x, y, round) {\r
  	if (x instanceof Point) {\r
  		return x;\r
  	}\r
  	if (isArray(x)) {\r
  		return new Point(x[0], x[1]);\r
  	}\r
  	if (x === undefined || x === null) {\r
  		return x;\r
  	}\r
  	if (typeof x === 'object' && 'x' in x && 'y' in x) {\r
  		return new Point(x.x, x.y);\r
  	}\r
  	return new Point(x, y, round);\r
  }

  /*\r
   * @class Bounds\r
   * @aka L.Bounds\r
   *\r
   * Represents a rectangular area in pixel coordinates.\r
   *\r
   * @example\r
   *\r
   * \`\`\`js\r
   * var p1 = L.point(10, 10),\r
   * p2 = L.point(40, 60),\r
   * bounds = L.bounds(p1, p2);\r
   * \`\`\`\r
   *\r
   * All Leaflet methods that accept \`Bounds\` objects also accept them in a simple Array form (unless noted otherwise), so the bounds example above can be passed like this:\r
   *\r
   * \`\`\`js\r
   * otherBounds.intersects([[10, 10], [40, 60]]);\r
   * \`\`\`\r
   *\r
   * Note that \`Bounds\` does not inherit from Leaflet's \`Class\` object,\r
   * which means new classes can't inherit from it, and new methods\r
   * can't be added to it with the \`include\` function.\r
   */\r
\r
  function Bounds(a, b) {\r
  	if (!a) { return; }\r
\r
  	var points = b ? [a, b] : a;\r
\r
  	for (var i = 0, len = points.length; i < len; i++) {\r
  		this.extend(points[i]);\r
  	}\r
  }\r
\r
  Bounds.prototype = {\r
  	// @method extend(point: Point): this\r
  	// Extends the bounds to contain the given point.\r
\r
  	// @alternative\r
  	// @method extend(otherBounds: Bounds): this\r
  	// Extend the bounds to contain the given bounds\r
  	extend: function (obj) {\r
  		var min2, max2;\r
  		if (!obj) { return this; }\r
\r
  		if (obj instanceof Point || typeof obj[0] === 'number' || 'x' in obj) {\r
  			min2 = max2 = toPoint(obj);\r
  		} else {\r
  			obj = toBounds(obj);\r
  			min2 = obj.min;\r
  			max2 = obj.max;\r
\r
  			if (!min2 || !max2) { return this; }\r
  		}\r
\r
  		// @property min: Point\r
  		// The top left corner of the rectangle.\r
  		// @property max: Point\r
  		// The bottom right corner of the rectangle.\r
  		if (!this.min && !this.max) {\r
  			this.min = min2.clone();\r
  			this.max = max2.clone();\r
  		} else {\r
  			this.min.x = Math.min(min2.x, this.min.x);\r
  			this.max.x = Math.max(max2.x, this.max.x);\r
  			this.min.y = Math.min(min2.y, this.min.y);\r
  			this.max.y = Math.max(max2.y, this.max.y);\r
  		}\r
  		return this;\r
  	},\r
\r
  	// @method getCenter(round?: Boolean): Point\r
  	// Returns the center point of the bounds.\r
  	getCenter: function (round) {\r
  		return toPoint(\r
  		        (this.min.x + this.max.x) / 2,\r
  		        (this.min.y + this.max.y) / 2, round);\r
  	},\r
\r
  	// @method getBottomLeft(): Point\r
  	// Returns the bottom-left point of the bounds.\r
  	getBottomLeft: function () {\r
  		return toPoint(this.min.x, this.max.y);\r
  	},\r
\r
  	// @method getTopRight(): Point\r
  	// Returns the top-right point of the bounds.\r
  	getTopRight: function () { // -> Point\r
  		return toPoint(this.max.x, this.min.y);\r
  	},\r
\r
  	// @method getTopLeft(): Point\r
  	// Returns the top-left point of the bounds (i.e. [\`this.min\`](#bounds-min)).\r
  	getTopLeft: function () {\r
  		return this.min; // left, top\r
  	},\r
\r
  	// @method getBottomRight(): Point\r
  	// Returns the bottom-right point of the bounds (i.e. [\`this.max\`](#bounds-max)).\r
  	getBottomRight: function () {\r
  		return this.max; // right, bottom\r
  	},\r
\r
  	// @method getSize(): Point\r
  	// Returns the size of the given bounds\r
  	getSize: function () {\r
  		return this.max.subtract(this.min);\r
  	},\r
\r
  	// @method contains(otherBounds: Bounds): Boolean\r
  	// Returns \`true\` if the rectangle contains the given one.\r
  	// @alternative\r
  	// @method contains(point: Point): Boolean\r
  	// Returns \`true\` if the rectangle contains the given point.\r
  	contains: function (obj) {\r
  		var min, max;\r
\r
  		if (typeof obj[0] === 'number' || obj instanceof Point) {\r
  			obj = toPoint(obj);\r
  		} else {\r
  			obj = toBounds(obj);\r
  		}\r
\r
  		if (obj instanceof Bounds) {\r
  			min = obj.min;\r
  			max = obj.max;\r
  		} else {\r
  			min = max = obj;\r
  		}\r
\r
  		return (min.x >= this.min.x) &&\r
  		       (max.x <= this.max.x) &&\r
  		       (min.y >= this.min.y) &&\r
  		       (max.y <= this.max.y);\r
  	},\r
\r
  	// @method intersects(otherBounds: Bounds): Boolean\r
  	// Returns \`true\` if the rectangle intersects the given bounds. Two bounds\r
  	// intersect if they have at least one point in common.\r
  	intersects: function (bounds) { // (Bounds) -> Boolean\r
  		bounds = toBounds(bounds);\r
\r
  		var min = this.min,\r
  		    max = this.max,\r
  		    min2 = bounds.min,\r
  		    max2 = bounds.max,\r
  		    xIntersects = (max2.x >= min.x) && (min2.x <= max.x),\r
  		    yIntersects = (max2.y >= min.y) && (min2.y <= max.y);\r
\r
  		return xIntersects && yIntersects;\r
  	},\r
\r
  	// @method overlaps(otherBounds: Bounds): Boolean\r
  	// Returns \`true\` if the rectangle overlaps the given bounds. Two bounds\r
  	// overlap if their intersection is an area.\r
  	overlaps: function (bounds) { // (Bounds) -> Boolean\r
  		bounds = toBounds(bounds);\r
\r
  		var min = this.min,\r
  		    max = this.max,\r
  		    min2 = bounds.min,\r
  		    max2 = bounds.max,\r
  		    xOverlaps = (max2.x > min.x) && (min2.x < max.x),\r
  		    yOverlaps = (max2.y > min.y) && (min2.y < max.y);\r
\r
  		return xOverlaps && yOverlaps;\r
  	},\r
\r
  	// @method isValid(): Boolean\r
  	// Returns \`true\` if the bounds are properly initialized.\r
  	isValid: function () {\r
  		return !!(this.min && this.max);\r
  	},\r
\r
\r
  	// @method pad(bufferRatio: Number): Bounds\r
  	// Returns bounds created by extending or retracting the current bounds by a given ratio in each direction.\r
  	// For example, a ratio of 0.5 extends the bounds by 50% in each direction.\r
  	// Negative values will retract the bounds.\r
  	pad: function (bufferRatio) {\r
  		var min = this.min,\r
  		max = this.max,\r
  		heightBuffer = Math.abs(min.x - max.x) * bufferRatio,\r
  		widthBuffer = Math.abs(min.y - max.y) * bufferRatio;\r
\r
\r
  		return toBounds(\r
  			toPoint(min.x - heightBuffer, min.y - widthBuffer),\r
  			toPoint(max.x + heightBuffer, max.y + widthBuffer));\r
  	},\r
\r
\r
  	// @method equals(otherBounds: Bounds): Boolean\r
  	// Returns \`true\` if the rectangle is equivalent to the given bounds.\r
  	equals: function (bounds) {\r
  		if (!bounds) { return false; }\r
\r
  		bounds = toBounds(bounds);\r
\r
  		return this.min.equals(bounds.getTopLeft()) &&\r
  			this.max.equals(bounds.getBottomRight());\r
  	},\r
  };\r
\r
\r
  // @factory L.bounds(corner1: Point, corner2: Point)\r
  // Creates a Bounds object from two corners coordinate pairs.\r
  // @alternative\r
  // @factory L.bounds(points: Point[])\r
  // Creates a Bounds object from the given array of points.\r
  function toBounds(a, b) {\r
  	if (!a || a instanceof Bounds) {\r
  		return a;\r
  	}\r
  	return new Bounds(a, b);\r
  }

  /*\r
   * @class LatLngBounds\r
   * @aka L.LatLngBounds\r
   *\r
   * Represents a rectangular geographical area on a map.\r
   *\r
   * @example\r
   *\r
   * \`\`\`js\r
   * var corner1 = L.latLng(40.712, -74.227),\r
   * corner2 = L.latLng(40.774, -74.125),\r
   * bounds = L.latLngBounds(corner1, corner2);\r
   * \`\`\`\r
   *\r
   * All Leaflet methods that accept LatLngBounds objects also accept them in a simple Array form (unless noted otherwise), so the bounds example above can be passed like this:\r
   *\r
   * \`\`\`js\r
   * map.fitBounds([\r
   * 	[40.712, -74.227],\r
   * 	[40.774, -74.125]\r
   * ]);\r
   * \`\`\`\r
   *\r
   * Caution: if the area crosses the antimeridian (often confused with the International Date Line), you must specify corners _outside_ the [-180, 180] degrees longitude range.\r
   *\r
   * Note that \`LatLngBounds\` does not inherit from Leaflet's \`Class\` object,\r
   * which means new classes can't inherit from it, and new methods\r
   * can't be added to it with the \`include\` function.\r
   */\r
\r
  function LatLngBounds(corner1, corner2) { // (LatLng, LatLng) or (LatLng[])\r
  	if (!corner1) { return; }\r
\r
  	var latlngs = corner2 ? [corner1, corner2] : corner1;\r
\r
  	for (var i = 0, len = latlngs.length; i < len; i++) {\r
  		this.extend(latlngs[i]);\r
  	}\r
  }\r
\r
  LatLngBounds.prototype = {\r
\r
  	// @method extend(latlng: LatLng): this\r
  	// Extend the bounds to contain the given point\r
\r
  	// @alternative\r
  	// @method extend(otherBounds: LatLngBounds): this\r
  	// Extend the bounds to contain the given bounds\r
  	extend: function (obj) {\r
  		var sw = this._southWest,\r
  		    ne = this._northEast,\r
  		    sw2, ne2;\r
\r
  		if (obj instanceof LatLng) {\r
  			sw2 = obj;\r
  			ne2 = obj;\r
\r
  		} else if (obj instanceof LatLngBounds) {\r
  			sw2 = obj._southWest;\r
  			ne2 = obj._northEast;\r
\r
  			if (!sw2 || !ne2) { return this; }\r
\r
  		} else {\r
  			return obj ? this.extend(toLatLng(obj) || toLatLngBounds(obj)) : this;\r
  		}\r
\r
  		if (!sw && !ne) {\r
  			this._southWest = new LatLng(sw2.lat, sw2.lng);\r
  			this._northEast = new LatLng(ne2.lat, ne2.lng);\r
  		} else {\r
  			sw.lat = Math.min(sw2.lat, sw.lat);\r
  			sw.lng = Math.min(sw2.lng, sw.lng);\r
  			ne.lat = Math.max(ne2.lat, ne.lat);\r
  			ne.lng = Math.max(ne2.lng, ne.lng);\r
  		}\r
\r
  		return this;\r
  	},\r
\r
  	// @method pad(bufferRatio: Number): LatLngBounds\r
  	// Returns bounds created by extending or retracting the current bounds by a given ratio in each direction.\r
  	// For example, a ratio of 0.5 extends the bounds by 50% in each direction.\r
  	// Negative values will retract the bounds.\r
  	pad: function (bufferRatio) {\r
  		var sw = this._southWest,\r
  		    ne = this._northEast,\r
  		    heightBuffer = Math.abs(sw.lat - ne.lat) * bufferRatio,\r
  		    widthBuffer = Math.abs(sw.lng - ne.lng) * bufferRatio;\r
\r
  		return new LatLngBounds(\r
  		        new LatLng(sw.lat - heightBuffer, sw.lng - widthBuffer),\r
  		        new LatLng(ne.lat + heightBuffer, ne.lng + widthBuffer));\r
  	},\r
\r
  	// @method getCenter(): LatLng\r
  	// Returns the center point of the bounds.\r
  	getCenter: function () {\r
  		return new LatLng(\r
  		        (this._southWest.lat + this._northEast.lat) / 2,\r
  		        (this._southWest.lng + this._northEast.lng) / 2);\r
  	},\r
\r
  	// @method getSouthWest(): LatLng\r
  	// Returns the south-west point of the bounds.\r
  	getSouthWest: function () {\r
  		return this._southWest;\r
  	},\r
\r
  	// @method getNorthEast(): LatLng\r
  	// Returns the north-east point of the bounds.\r
  	getNorthEast: function () {\r
  		return this._northEast;\r
  	},\r
\r
  	// @method getNorthWest(): LatLng\r
  	// Returns the north-west point of the bounds.\r
  	getNorthWest: function () {\r
  		return new LatLng(this.getNorth(), this.getWest());\r
  	},\r
\r
  	// @method getSouthEast(): LatLng\r
  	// Returns the south-east point of the bounds.\r
  	getSouthEast: function () {\r
  		return new LatLng(this.getSouth(), this.getEast());\r
  	},\r
\r
  	// @method getWest(): Number\r
  	// Returns the west longitude of the bounds\r
  	getWest: function () {\r
  		return this._southWest.lng;\r
  	},\r
\r
  	// @method getSouth(): Number\r
  	// Returns the south latitude of the bounds\r
  	getSouth: function () {\r
  		return this._southWest.lat;\r
  	},\r
\r
  	// @method getEast(): Number\r
  	// Returns the east longitude of the bounds\r
  	getEast: function () {\r
  		return this._northEast.lng;\r
  	},\r
\r
  	// @method getNorth(): Number\r
  	// Returns the north latitude of the bounds\r
  	getNorth: function () {\r
  		return this._northEast.lat;\r
  	},\r
\r
  	// @method contains(otherBounds: LatLngBounds): Boolean\r
  	// Returns \`true\` if the rectangle contains the given one.\r
\r
  	// @alternative\r
  	// @method contains (latlng: LatLng): Boolean\r
  	// Returns \`true\` if the rectangle contains the given point.\r
  	contains: function (obj) { // (LatLngBounds) or (LatLng) -> Boolean\r
  		if (typeof obj[0] === 'number' || obj instanceof LatLng || 'lat' in obj) {\r
  			obj = toLatLng(obj);\r
  		} else {\r
  			obj = toLatLngBounds(obj);\r
  		}\r
\r
  		var sw = this._southWest,\r
  		    ne = this._northEast,\r
  		    sw2, ne2;\r
\r
  		if (obj instanceof LatLngBounds) {\r
  			sw2 = obj.getSouthWest();\r
  			ne2 = obj.getNorthEast();\r
  		} else {\r
  			sw2 = ne2 = obj;\r
  		}\r
\r
  		return (sw2.lat >= sw.lat) && (ne2.lat <= ne.lat) &&\r
  		       (sw2.lng >= sw.lng) && (ne2.lng <= ne.lng);\r
  	},\r
\r
  	// @method intersects(otherBounds: LatLngBounds): Boolean\r
  	// Returns \`true\` if the rectangle intersects the given bounds. Two bounds intersect if they have at least one point in common.\r
  	intersects: function (bounds) {\r
  		bounds = toLatLngBounds(bounds);\r
\r
  		var sw = this._southWest,\r
  		    ne = this._northEast,\r
  		    sw2 = bounds.getSouthWest(),\r
  		    ne2 = bounds.getNorthEast(),\r
\r
  		    latIntersects = (ne2.lat >= sw.lat) && (sw2.lat <= ne.lat),\r
  		    lngIntersects = (ne2.lng >= sw.lng) && (sw2.lng <= ne.lng);\r
\r
  		return latIntersects && lngIntersects;\r
  	},\r
\r
  	// @method overlaps(otherBounds: LatLngBounds): Boolean\r
  	// Returns \`true\` if the rectangle overlaps the given bounds. Two bounds overlap if their intersection is an area.\r
  	overlaps: function (bounds) {\r
  		bounds = toLatLngBounds(bounds);\r
\r
  		var sw = this._southWest,\r
  		    ne = this._northEast,\r
  		    sw2 = bounds.getSouthWest(),\r
  		    ne2 = bounds.getNorthEast(),\r
\r
  		    latOverlaps = (ne2.lat > sw.lat) && (sw2.lat < ne.lat),\r
  		    lngOverlaps = (ne2.lng > sw.lng) && (sw2.lng < ne.lng);\r
\r
  		return latOverlaps && lngOverlaps;\r
  	},\r
\r
  	// @method toBBoxString(): String\r
  	// Returns a string with bounding box coordinates in a 'southwest_lng,southwest_lat,northeast_lng,northeast_lat' format. Useful for sending requests to web services that return geo data.\r
  	toBBoxString: function () {\r
  		return [this.getWest(), this.getSouth(), this.getEast(), this.getNorth()].join(',');\r
  	},\r
\r
  	// @method equals(otherBounds: LatLngBounds, maxMargin?: Number): Boolean\r
  	// Returns \`true\` if the rectangle is equivalent (within a small margin of error) to the given bounds. The margin of error can be overridden by setting \`maxMargin\` to a small number.\r
  	equals: function (bounds, maxMargin) {\r
  		if (!bounds) { return false; }\r
\r
  		bounds = toLatLngBounds(bounds);\r
\r
  		return this._southWest.equals(bounds.getSouthWest(), maxMargin) &&\r
  		       this._northEast.equals(bounds.getNorthEast(), maxMargin);\r
  	},\r
\r
  	// @method isValid(): Boolean\r
  	// Returns \`true\` if the bounds are properly initialized.\r
  	isValid: function () {\r
  		return !!(this._southWest && this._northEast);\r
  	}\r
  };\r
\r
  // TODO International date line?\r
\r
  // @factory L.latLngBounds(corner1: LatLng, corner2: LatLng)\r
  // Creates a \`LatLngBounds\` object by defining two diagonally opposite corners of the rectangle.\r
\r
  // @alternative\r
  // @factory L.latLngBounds(latlngs: LatLng[])\r
  // Creates a \`LatLngBounds\` object defined by the geographical points it contains. Very useful for zooming the map to fit a particular set of locations with [\`fitBounds\`](#map-fitbounds).\r
  function toLatLngBounds(a, b) {\r
  	if (a instanceof LatLngBounds) {\r
  		return a;\r
  	}\r
  	return new LatLngBounds(a, b);\r
  }

  /* @class LatLng\r
   * @aka L.LatLng\r
   *\r
   * Represents a geographical point with a certain latitude and longitude.\r
   *\r
   * @example\r
   *\r
   * \`\`\`\r
   * var latlng = L.latLng(50.5, 30.5);\r
   * \`\`\`\r
   *\r
   * All Leaflet methods that accept LatLng objects also accept them in a simple Array form and simple object form (unless noted otherwise), so these lines are equivalent:\r
   *\r
   * \`\`\`\r
   * map.panTo([50, 30]);\r
   * map.panTo({lon: 30, lat: 50});\r
   * map.panTo({lat: 50, lng: 30});\r
   * map.panTo(L.latLng(50, 30));\r
   * \`\`\`\r
   *\r
   * Note that \`LatLng\` does not inherit from Leaflet's \`Class\` object,\r
   * which means new classes can't inherit from it, and new methods\r
   * can't be added to it with the \`include\` function.\r
   */\r
\r
  function LatLng(lat, lng, alt) {\r
  	if (isNaN(lat) || isNaN(lng)) {\r
  		throw new Error('Invalid LatLng object: (' + lat + ', ' + lng + ')');\r
  	}\r
\r
  	// @property lat: Number\r
  	// Latitude in degrees\r
  	this.lat = +lat;\r
\r
  	// @property lng: Number\r
  	// Longitude in degrees\r
  	this.lng = +lng;\r
\r
  	// @property alt: Number\r
  	// Altitude in meters (optional)\r
  	if (alt !== undefined) {\r
  		this.alt = +alt;\r
  	}\r
  }\r
\r
  LatLng.prototype = {\r
  	// @method equals(otherLatLng: LatLng, maxMargin?: Number): Boolean\r
  	// Returns \`true\` if the given \`LatLng\` point is at the same position (within a small margin of error). The margin of error can be overridden by setting \`maxMargin\` to a small number.\r
  	equals: function (obj, maxMargin) {\r
  		if (!obj) { return false; }\r
\r
  		obj = toLatLng(obj);\r
\r
  		var margin = Math.max(\r
  		        Math.abs(this.lat - obj.lat),\r
  		        Math.abs(this.lng - obj.lng));\r
\r
  		return margin <= (maxMargin === undefined ? 1.0E-9 : maxMargin);\r
  	},\r
\r
  	// @method toString(): String\r
  	// Returns a string representation of the point (for debugging purposes).\r
  	toString: function (precision) {\r
  		return 'LatLng(' +\r
  		        formatNum(this.lat, precision) + ', ' +\r
  		        formatNum(this.lng, precision) + ')';\r
  	},\r
\r
  	// @method distanceTo(otherLatLng: LatLng): Number\r
  	// Returns the distance (in meters) to the given \`LatLng\` calculated using the [Spherical Law of Cosines](https://en.wikipedia.org/wiki/Spherical_law_of_cosines).\r
  	distanceTo: function (other) {\r
  		return Earth.distance(this, toLatLng(other));\r
  	},\r
\r
  	// @method wrap(): LatLng\r
  	// Returns a new \`LatLng\` object with the longitude wrapped so it's always between -180 and +180 degrees.\r
  	wrap: function () {\r
  		return Earth.wrapLatLng(this);\r
  	},\r
\r
  	// @method toBounds(sizeInMeters: Number): LatLngBounds\r
  	// Returns a new \`LatLngBounds\` object in which each boundary is \`sizeInMeters/2\` meters apart from the \`LatLng\`.\r
  	toBounds: function (sizeInMeters) {\r
  		var latAccuracy = 180 * sizeInMeters / 40075017,\r
  		    lngAccuracy = latAccuracy / Math.cos((Math.PI / 180) * this.lat);\r
\r
  		return toLatLngBounds(\r
  		        [this.lat - latAccuracy, this.lng - lngAccuracy],\r
  		        [this.lat + latAccuracy, this.lng + lngAccuracy]);\r
  	},\r
\r
  	clone: function () {\r
  		return new LatLng(this.lat, this.lng, this.alt);\r
  	}\r
  };\r
\r
\r
\r
  // @factory L.latLng(latitude: Number, longitude: Number, altitude?: Number): LatLng\r
  // Creates an object representing a geographical point with the given latitude and longitude (and optionally altitude).\r
\r
  // @alternative\r
  // @factory L.latLng(coords: Array): LatLng\r
  // Expects an array of the form \`[Number, Number]\` or \`[Number, Number, Number]\` instead.\r
\r
  // @alternative\r
  // @factory L.latLng(coords: Object): LatLng\r
  // Expects an plain object of the form \`{lat: Number, lng: Number}\` or \`{lat: Number, lng: Number, alt: Number}\` instead.\r
\r
  function toLatLng(a, b, c) {\r
  	if (a instanceof LatLng) {\r
  		return a;\r
  	}\r
  	if (isArray(a) && typeof a[0] !== 'object') {\r
  		if (a.length === 3) {\r
  			return new LatLng(a[0], a[1], a[2]);\r
  		}\r
  		if (a.length === 2) {\r
  			return new LatLng(a[0], a[1]);\r
  		}\r
  		return null;\r
  	}\r
  	if (a === undefined || a === null) {\r
  		return a;\r
  	}\r
  	if (typeof a === 'object' && 'lat' in a) {\r
  		return new LatLng(a.lat, 'lng' in a ? a.lng : a.lon, a.alt);\r
  	}\r
  	if (b === undefined) {\r
  		return null;\r
  	}\r
  	return new LatLng(a, b, c);\r
  }

  /*\r
   * @namespace CRS\r
   * @crs L.CRS.Base\r
   * Object that defines coordinate reference systems for projecting\r
   * geographical points into pixel (screen) coordinates and back (and to\r
   * coordinates in other units for [WMS](https://en.wikipedia.org/wiki/Web_Map_Service) services). See\r
   * [spatial reference system](https://en.wikipedia.org/wiki/Spatial_reference_system).\r
   *\r
   * Leaflet defines the most usual CRSs by default. If you want to use a\r
   * CRS not defined by default, take a look at the\r
   * [Proj4Leaflet](https://github.com/kartena/Proj4Leaflet) plugin.\r
   *\r
   * Note that the CRS instances do not inherit from Leaflet's \`Class\` object,\r
   * and can't be instantiated. Also, new classes can't inherit from them,\r
   * and methods can't be added to them with the \`include\` function.\r
   */\r
\r
  var CRS = {\r
  	// @method latLngToPoint(latlng: LatLng, zoom: Number): Point\r
  	// Projects geographical coordinates into pixel coordinates for a given zoom.\r
  	latLngToPoint: function (latlng, zoom) {\r
  		var projectedPoint = this.projection.project(latlng),\r
  		    scale = this.scale(zoom);\r
\r
  		return this.transformation._transform(projectedPoint, scale);\r
  	},\r
\r
  	// @method pointToLatLng(point: Point, zoom: Number): LatLng\r
  	// The inverse of \`latLngToPoint\`. Projects pixel coordinates on a given\r
  	// zoom into geographical coordinates.\r
  	pointToLatLng: function (point, zoom) {\r
  		var scale = this.scale(zoom),\r
  		    untransformedPoint = this.transformation.untransform(point, scale);\r
\r
  		return this.projection.unproject(untransformedPoint);\r
  	},\r
\r
  	// @method project(latlng: LatLng): Point\r
  	// Projects geographical coordinates into coordinates in units accepted for\r
  	// this CRS (e.g. meters for EPSG:3857, for passing it to WMS services).\r
  	project: function (latlng) {\r
  		return this.projection.project(latlng);\r
  	},\r
\r
  	// @method unproject(point: Point): LatLng\r
  	// Given a projected coordinate returns the corresponding LatLng.\r
  	// The inverse of \`project\`.\r
  	unproject: function (point) {\r
  		return this.projection.unproject(point);\r
  	},\r
\r
  	// @method scale(zoom: Number): Number\r
  	// Returns the scale used when transforming projected coordinates into\r
  	// pixel coordinates for a particular zoom. For example, it returns\r
  	// \`256 * 2^zoom\` for Mercator-based CRS.\r
  	scale: function (zoom) {\r
  		return 256 * Math.pow(2, zoom);\r
  	},\r
\r
  	// @method zoom(scale: Number): Number\r
  	// Inverse of \`scale()\`, returns the zoom level corresponding to a scale\r
  	// factor of \`scale\`.\r
  	zoom: function (scale) {\r
  		return Math.log(scale / 256) / Math.LN2;\r
  	},\r
\r
  	// @method getProjectedBounds(zoom: Number): Bounds\r
  	// Returns the projection's bounds scaled and transformed for the provided \`zoom\`.\r
  	getProjectedBounds: function (zoom) {\r
  		if (this.infinite) { return null; }\r
\r
  		var b = this.projection.bounds,\r
  		    s = this.scale(zoom),\r
  		    min = this.transformation.transform(b.min, s),\r
  		    max = this.transformation.transform(b.max, s);\r
\r
  		return new Bounds(min, max);\r
  	},\r
\r
  	// @method distance(latlng1: LatLng, latlng2: LatLng): Number\r
  	// Returns the distance between two geographical coordinates.\r
\r
  	// @property code: String\r
  	// Standard code name of the CRS passed into WMS services (e.g. \`'EPSG:3857'\`)\r
  	//\r
  	// @property wrapLng: Number[]\r
  	// An array of two numbers defining whether the longitude (horizontal) coordinate\r
  	// axis wraps around a given range and how. Defaults to \`[-180, 180]\` in most\r
  	// geographical CRSs. If \`undefined\`, the longitude axis does not wrap around.\r
  	//\r
  	// @property wrapLat: Number[]\r
  	// Like \`wrapLng\`, but for the latitude (vertical) axis.\r
\r
  	// wrapLng: [min, max],\r
  	// wrapLat: [min, max],\r
\r
  	// @property infinite: Boolean\r
  	// If true, the coordinate space will be unbounded (infinite in both axes)\r
  	infinite: false,\r
\r
  	// @method wrapLatLng(latlng: LatLng): LatLng\r
  	// Returns a \`LatLng\` where lat and lng has been wrapped according to the\r
  	// CRS's \`wrapLat\` and \`wrapLng\` properties, if they are outside the CRS's bounds.\r
  	wrapLatLng: function (latlng) {\r
  		var lng = this.wrapLng ? wrapNum(latlng.lng, this.wrapLng, true) : latlng.lng,\r
  		    lat = this.wrapLat ? wrapNum(latlng.lat, this.wrapLat, true) : latlng.lat,\r
  		    alt = latlng.alt;\r
\r
  		return new LatLng(lat, lng, alt);\r
  	},\r
\r
  	// @method wrapLatLngBounds(bounds: LatLngBounds): LatLngBounds\r
  	// Returns a \`LatLngBounds\` with the same size as the given one, ensuring\r
  	// that its center is within the CRS's bounds.\r
  	// Only accepts actual \`L.LatLngBounds\` instances, not arrays.\r
  	wrapLatLngBounds: function (bounds) {\r
  		var center = bounds.getCenter(),\r
  		    newCenter = this.wrapLatLng(center),\r
  		    latShift = center.lat - newCenter.lat,\r
  		    lngShift = center.lng - newCenter.lng;\r
\r
  		if (latShift === 0 && lngShift === 0) {\r
  			return bounds;\r
  		}\r
\r
  		var sw = bounds.getSouthWest(),\r
  		    ne = bounds.getNorthEast(),\r
  		    newSw = new LatLng(sw.lat - latShift, sw.lng - lngShift),\r
  		    newNe = new LatLng(ne.lat - latShift, ne.lng - lngShift);\r
\r
  		return new LatLngBounds(newSw, newNe);\r
  	}\r
  };

  /*
   * @namespace CRS
   * @crs L.CRS.Earth
   *
   * Serves as the base for CRS that are global such that they cover the earth.
   * Can only be used as the base for other CRS and cannot be used directly,
   * since it does not have a \`code\`, \`projection\` or \`transformation\`. \`distance()\` returns
   * meters.
   */

  var Earth = extend({}, CRS, {
  	wrapLng: [-180, 180],

  	// Mean Earth Radius, as recommended for use by
  	// the International Union of Geodesy and Geophysics,
  	// see https://rosettacode.org/wiki/Haversine_formula
  	R: 6371000,

  	// distance between two geographical points using spherical law of cosines approximation
  	distance: function (latlng1, latlng2) {
  		var rad = Math.PI / 180,
  		    lat1 = latlng1.lat * rad,
  		    lat2 = latlng2.lat * rad,
  		    sinDLat = Math.sin((latlng2.lat - latlng1.lat) * rad / 2),
  		    sinDLon = Math.sin((latlng2.lng - latlng1.lng) * rad / 2),
  		    a = sinDLat * sinDLat + Math.cos(lat1) * Math.cos(lat2) * sinDLon * sinDLon,
  		    c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  		return this.R * c;
  	}
  });

  /*\r
   * @namespace Projection\r
   * @projection L.Projection.SphericalMercator\r
   *\r
   * Spherical Mercator projection \u2014 the most common projection for online maps,\r
   * used by almost all free and commercial tile providers. Assumes that Earth is\r
   * a sphere. Used by the \`EPSG:3857\` CRS.\r
   */\r
\r
  var earthRadius = 6378137;\r
\r
  var SphericalMercator = {\r
\r
  	R: earthRadius,\r
  	MAX_LATITUDE: 85.0511287798,\r
\r
  	project: function (latlng) {\r
  		var d = Math.PI / 180,\r
  		    max = this.MAX_LATITUDE,\r
  		    lat = Math.max(Math.min(max, latlng.lat), -max),\r
  		    sin = Math.sin(lat * d);\r
\r
  		return new Point(\r
  			this.R * latlng.lng * d,\r
  			this.R * Math.log((1 + sin) / (1 - sin)) / 2);\r
  	},\r
\r
  	unproject: function (point) {\r
  		var d = 180 / Math.PI;\r
\r
  		return new LatLng(\r
  			(2 * Math.atan(Math.exp(point.y / this.R)) - (Math.PI / 2)) * d,\r
  			point.x * d / this.R);\r
  	},\r
\r
  	bounds: (function () {\r
  		var d = earthRadius * Math.PI;\r
  		return new Bounds([-d, -d], [d, d]);\r
  	})()\r
  };

  /*\r
   * @class Transformation\r
   * @aka L.Transformation\r
   *\r
   * Represents an affine transformation: a set of coefficients \`a\`, \`b\`, \`c\`, \`d\`\r
   * for transforming a point of a form \`(x, y)\` into \`(a*x + b, c*y + d)\` and doing\r
   * the reverse. Used by Leaflet in its projections code.\r
   *\r
   * @example\r
   *\r
   * \`\`\`js\r
   * var transformation = L.transformation(2, 5, -1, 10),\r
   * 	p = L.point(1, 2),\r
   * 	p2 = transformation.transform(p), //  L.point(7, 8)\r
   * 	p3 = transformation.untransform(p2); //  L.point(1, 2)\r
   * \`\`\`\r
   */\r
\r
\r
  // factory new L.Transformation(a: Number, b: Number, c: Number, d: Number)\r
  // Creates a \`Transformation\` object with the given coefficients.\r
  function Transformation(a, b, c, d) {\r
  	if (isArray(a)) {\r
  		// use array properties\r
  		this._a = a[0];\r
  		this._b = a[1];\r
  		this._c = a[2];\r
  		this._d = a[3];\r
  		return;\r
  	}\r
  	this._a = a;\r
  	this._b = b;\r
  	this._c = c;\r
  	this._d = d;\r
  }\r
\r
  Transformation.prototype = {\r
  	// @method transform(point: Point, scale?: Number): Point\r
  	// Returns a transformed point, optionally multiplied by the given scale.\r
  	// Only accepts actual \`L.Point\` instances, not arrays.\r
  	transform: function (point, scale) { // (Point, Number) -> Point\r
  		return this._transform(point.clone(), scale);\r
  	},\r
\r
  	// destructive transform (faster)\r
  	_transform: function (point, scale) {\r
  		scale = scale || 1;\r
  		point.x = scale * (this._a * point.x + this._b);\r
  		point.y = scale * (this._c * point.y + this._d);\r
  		return point;\r
  	},\r
\r
  	// @method untransform(point: Point, scale?: Number): Point\r
  	// Returns the reverse transformation of the given point, optionally divided\r
  	// by the given scale. Only accepts actual \`L.Point\` instances, not arrays.\r
  	untransform: function (point, scale) {\r
  		scale = scale || 1;\r
  		return new Point(\r
  		        (point.x / scale - this._b) / this._a,\r
  		        (point.y / scale - this._d) / this._c);\r
  	}\r
  };\r
\r
  // factory L.transformation(a: Number, b: Number, c: Number, d: Number)\r
\r
  // @factory L.transformation(a: Number, b: Number, c: Number, d: Number)\r
  // Instantiates a Transformation object with the given coefficients.\r
\r
  // @alternative\r
  // @factory L.transformation(coefficients: Array): Transformation\r
  // Expects an coefficients array of the form\r
  // \`[a: Number, b: Number, c: Number, d: Number]\`.\r
\r
  function toTransformation(a, b, c, d) {\r
  	return new Transformation(a, b, c, d);\r
  }

  /*\r
   * @namespace CRS\r
   * @crs L.CRS.EPSG3857\r
   *\r
   * The most common CRS for online maps, used by almost all free and commercial\r
   * tile providers. Uses Spherical Mercator projection. Set in by default in\r
   * Map's \`crs\` option.\r
   */\r
\r
  var EPSG3857 = extend({}, Earth, {\r
  	code: 'EPSG:3857',\r
  	projection: SphericalMercator,\r
\r
  	transformation: (function () {\r
  		var scale = 0.5 / (Math.PI * SphericalMercator.R);\r
  		return toTransformation(scale, 0.5, -scale, 0.5);\r
  	}())\r
  });\r
\r
  var EPSG900913 = extend({}, EPSG3857, {\r
  	code: 'EPSG:900913'\r
  });

  // @namespace SVG; @section
  // There are several static functions which can be called without instantiating L.SVG:

  // @function create(name: String): SVGElement
  // Returns a instance of [SVGElement](https://developer.mozilla.org/docs/Web/API/SVGElement),
  // corresponding to the class name passed. For example, using 'line' will return
  // an instance of [SVGLineElement](https://developer.mozilla.org/docs/Web/API/SVGLineElement).
  function svgCreate(name) {
  	return document.createElementNS('http://www.w3.org/2000/svg', name);
  }

  // @function pointsToPath(rings: Point[], closed: Boolean): String
  // Generates a SVG path string for multiple rings, with each ring turning
  // into "M..L..L.." instructions
  function pointsToPath(rings, closed) {
  	var str = '',
  	i, j, len, len2, points, p;

  	for (i = 0, len = rings.length; i < len; i++) {
  		points = rings[i];

  		for (j = 0, len2 = points.length; j < len2; j++) {
  			p = points[j];
  			str += (j ? 'L' : 'M') + p.x + ' ' + p.y;
  		}

  		// closes the ring for polygons; "x" is VML syntax
  		str += closed ? (Browser.svg ? 'z' : 'x') : '';
  	}

  	// SVG complains about empty path strings
  	return str || 'M0 0';
  }

  /*\r
   * @namespace Browser\r
   * @aka L.Browser\r
   *\r
   * A namespace with static properties for browser/feature detection used by Leaflet internally.\r
   *\r
   * @example\r
   *\r
   * \`\`\`js\r
   * if (L.Browser.ielt9) {\r
   *   alert('Upgrade your browser, dude!');\r
   * }\r
   * \`\`\`\r
   */\r
\r
  var style = document.documentElement.style;\r
\r
  // @property ie: Boolean; \`true\` for all Internet Explorer versions (not Edge).\r
  var ie = 'ActiveXObject' in window;\r
\r
  // @property ielt9: Boolean; \`true\` for Internet Explorer versions less than 9.\r
  var ielt9 = ie && !document.addEventListener;\r
\r
  // @property edge: Boolean; \`true\` for the Edge web browser.\r
  var edge = 'msLaunchUri' in navigator && !('documentMode' in document);\r
\r
  // @property webkit: Boolean;\r
  // \`true\` for webkit-based browsers like Chrome and Safari (including mobile versions).\r
  var webkit = userAgentContains('webkit');\r
\r
  // @property android: Boolean\r
  // **Deprecated.** \`true\` for any browser running on an Android platform.\r
  var android = userAgentContains('android');\r
\r
  // @property android23: Boolean; **Deprecated.** \`true\` for browsers running on Android 2 or Android 3.\r
  var android23 = userAgentContains('android 2') || userAgentContains('android 3');\r
\r
  /* See https://stackoverflow.com/a/17961266 for details on detecting stock Android */\r
  var webkitVer = parseInt(/WebKit\\/([0-9]+)|$/.exec(navigator.userAgent)[1], 10); // also matches AppleWebKit\r
  // @property androidStock: Boolean; **Deprecated.** \`true\` for the Android stock browser (i.e. not Chrome)\r
  var androidStock = android && userAgentContains('Google') && webkitVer < 537 && !('AudioNode' in window);\r
\r
  // @property opera: Boolean; \`true\` for the Opera browser\r
  var opera = !!window.opera;\r
\r
  // @property chrome: Boolean; \`true\` for the Chrome browser.\r
  var chrome = !edge && userAgentContains('chrome');\r
\r
  // @property gecko: Boolean; \`true\` for gecko-based browsers like Firefox.\r
  var gecko = userAgentContains('gecko') && !webkit && !opera && !ie;\r
\r
  // @property safari: Boolean; \`true\` for the Safari browser.\r
  var safari = !chrome && userAgentContains('safari');\r
\r
  var phantom = userAgentContains('phantom');\r
\r
  // @property opera12: Boolean\r
  // \`true\` for the Opera browser supporting CSS transforms (version 12 or later).\r
  var opera12 = 'OTransition' in style;\r
\r
  // @property win: Boolean; \`true\` when the browser is running in a Windows platform\r
  var win = navigator.platform.indexOf('Win') === 0;\r
\r
  // @property ie3d: Boolean; \`true\` for all Internet Explorer versions supporting CSS transforms.\r
  var ie3d = ie && ('transition' in style);\r
\r
  // @property webkit3d: Boolean; \`true\` for webkit-based browsers supporting CSS transforms.\r
  var webkit3d = ('WebKitCSSMatrix' in window) && ('m11' in new window.WebKitCSSMatrix()) && !android23;\r
\r
  // @property gecko3d: Boolean; \`true\` for gecko-based browsers supporting CSS transforms.\r
  var gecko3d = 'MozPerspective' in style;\r
\r
  // @property any3d: Boolean\r
  // \`true\` for all browsers supporting CSS transforms.\r
  var any3d = !window.L_DISABLE_3D && (ie3d || webkit3d || gecko3d) && !opera12 && !phantom;\r
\r
  // @property mobile: Boolean; \`true\` for all browsers running in a mobile device.\r
  var mobile = typeof orientation !== 'undefined' || userAgentContains('mobile');\r
\r
  // @property mobileWebkit: Boolean; \`true\` for all webkit-based browsers in a mobile device.\r
  var mobileWebkit = mobile && webkit;\r
\r
  // @property mobileWebkit3d: Boolean\r
  // \`true\` for all webkit-based browsers in a mobile device supporting CSS transforms.\r
  var mobileWebkit3d = mobile && webkit3d;\r
\r
  // @property msPointer: Boolean\r
  // \`true\` for browsers implementing the Microsoft touch events model (notably IE10).\r
  var msPointer = !window.PointerEvent && window.MSPointerEvent;\r
\r
  // @property pointer: Boolean\r
  // \`true\` for all browsers supporting [pointer events](https://msdn.microsoft.com/en-us/library/dn433244%28v=vs.85%29.aspx).\r
  var pointer = !!(window.PointerEvent || msPointer);\r
\r
  // @property touchNative: Boolean\r
  // \`true\` for all browsers supporting [touch events](https://developer.mozilla.org/docs/Web/API/Touch_events).\r
  // **This does not necessarily mean** that the browser is running in a computer with\r
  // a touchscreen, it only means that the browser is capable of understanding\r
  // touch events.\r
  var touchNative = 'ontouchstart' in window || !!window.TouchEvent;\r
\r
  // @property touch: Boolean\r
  // \`true\` for all browsers supporting either [touch](#browser-touch) or [pointer](#browser-pointer) events.\r
  // Note: pointer events will be preferred (if available), and processed for all \`touch*\` listeners.\r
  var touch = !window.L_NO_TOUCH && (touchNative || pointer);\r
\r
  // @property mobileOpera: Boolean; \`true\` for the Opera browser in a mobile device.\r
  var mobileOpera = mobile && opera;\r
\r
  // @property mobileGecko: Boolean\r
  // \`true\` for gecko-based browsers running in a mobile device.\r
  var mobileGecko = mobile && gecko;\r
\r
  // @property retina: Boolean\r
  // \`true\` for browsers on a high-resolution "retina" screen or on any screen when browser's display zoom is more than 100%.\r
  var retina = (window.devicePixelRatio || (window.screen.deviceXDPI / window.screen.logicalXDPI)) > 1;\r
\r
  // @property passiveEvents: Boolean\r
  // \`true\` for browsers that support passive events.\r
  var passiveEvents = (function () {\r
  	var supportsPassiveOption = false;\r
  	try {\r
  		var opts = Object.defineProperty({}, 'passive', {\r
  			get: function () { // eslint-disable-line getter-return\r
  				supportsPassiveOption = true;\r
  			}\r
  		});\r
  		window.addEventListener('testPassiveEventSupport', falseFn, opts);\r
  		window.removeEventListener('testPassiveEventSupport', falseFn, opts);\r
  	} catch (e) {\r
  		// Errors can safely be ignored since this is only a browser support test.\r
  	}\r
  	return supportsPassiveOption;\r
  }());\r
\r
  // @property canvas: Boolean\r
  // \`true\` when the browser supports [\`<canvas>\`](https://developer.mozilla.org/docs/Web/API/Canvas_API).\r
  var canvas$1 = (function () {\r
  	return !!document.createElement('canvas').getContext;\r
  }());\r
\r
  // @property svg: Boolean\r
  // \`true\` when the browser supports [SVG](https://developer.mozilla.org/docs/Web/SVG).\r
  var svg$1 = !!(document.createElementNS && svgCreate('svg').createSVGRect);\r
\r
  var inlineSvg = !!svg$1 && (function () {\r
  	var div = document.createElement('div');\r
  	div.innerHTML = '<svg/>';\r
  	return (div.firstChild && div.firstChild.namespaceURI) === 'http://www.w3.org/2000/svg';\r
  })();\r
\r
  // @property vml: Boolean\r
  // \`true\` if the browser supports [VML](https://en.wikipedia.org/wiki/Vector_Markup_Language).\r
  var vml = !svg$1 && (function () {\r
  	try {\r
  		var div = document.createElement('div');\r
  		div.innerHTML = '<v:shape adj="1"/>';\r
\r
  		var shape = div.firstChild;\r
  		shape.style.behavior = 'url(#default#VML)';\r
\r
  		return shape && (typeof shape.adj === 'object');\r
\r
  	} catch (e) {\r
  		return false;\r
  	}\r
  }());\r
\r
\r
  // @property mac: Boolean; \`true\` when the browser is running in a Mac platform\r
  var mac = navigator.platform.indexOf('Mac') === 0;\r
\r
  // @property mac: Boolean; \`true\` when the browser is running in a Linux platform\r
  var linux = navigator.platform.indexOf('Linux') === 0;\r
\r
  function userAgentContains(str) {\r
  	return navigator.userAgent.toLowerCase().indexOf(str) >= 0;\r
  }\r
\r
\r
  var Browser = {\r
  	ie: ie,\r
  	ielt9: ielt9,\r
  	edge: edge,\r
  	webkit: webkit,\r
  	android: android,\r
  	android23: android23,\r
  	androidStock: androidStock,\r
  	opera: opera,\r
  	chrome: chrome,\r
  	gecko: gecko,\r
  	safari: safari,\r
  	phantom: phantom,\r
  	opera12: opera12,\r
  	win: win,\r
  	ie3d: ie3d,\r
  	webkit3d: webkit3d,\r
  	gecko3d: gecko3d,\r
  	any3d: any3d,\r
  	mobile: mobile,\r
  	mobileWebkit: mobileWebkit,\r
  	mobileWebkit3d: mobileWebkit3d,\r
  	msPointer: msPointer,\r
  	pointer: pointer,\r
  	touch: touch,\r
  	touchNative: touchNative,\r
  	mobileOpera: mobileOpera,\r
  	mobileGecko: mobileGecko,\r
  	retina: retina,\r
  	passiveEvents: passiveEvents,\r
  	canvas: canvas$1,\r
  	svg: svg$1,\r
  	vml: vml,\r
  	inlineSvg: inlineSvg,\r
  	mac: mac,\r
  	linux: linux\r
  };

  /*
   * Extends L.DomEvent to provide touch support for Internet Explorer and Windows-based devices.
   */

  var POINTER_DOWN =   Browser.msPointer ? 'MSPointerDown'   : 'pointerdown';
  var POINTER_MOVE =   Browser.msPointer ? 'MSPointerMove'   : 'pointermove';
  var POINTER_UP =     Browser.msPointer ? 'MSPointerUp'     : 'pointerup';
  var POINTER_CANCEL = Browser.msPointer ? 'MSPointerCancel' : 'pointercancel';
  var pEvent = {
  	touchstart  : POINTER_DOWN,
  	touchmove   : POINTER_MOVE,
  	touchend    : POINTER_UP,
  	touchcancel : POINTER_CANCEL
  };
  var handle = {
  	touchstart  : _onPointerStart,
  	touchmove   : _handlePointer,
  	touchend    : _handlePointer,
  	touchcancel : _handlePointer
  };
  var _pointers = {};
  var _pointerDocListener = false;

  // Provides a touch events wrapper for (ms)pointer events.
  // ref https://www.w3.org/TR/pointerevents/ https://www.w3.org/Bugs/Public/show_bug.cgi?id=22890

  function addPointerListener(obj, type, handler) {
  	if (type === 'touchstart') {
  		_addPointerDocListener();
  	}
  	if (!handle[type]) {
  		console.warn('wrong event specified:', type);
  		return falseFn;
  	}
  	handler = handle[type].bind(this, handler);
  	obj.addEventListener(pEvent[type], handler, false);
  	return handler;
  }

  function removePointerListener(obj, type, handler) {
  	if (!pEvent[type]) {
  		console.warn('wrong event specified:', type);
  		return;
  	}
  	obj.removeEventListener(pEvent[type], handler, false);
  }

  function _globalPointerDown(e) {
  	_pointers[e.pointerId] = e;
  }

  function _globalPointerMove(e) {
  	if (_pointers[e.pointerId]) {
  		_pointers[e.pointerId] = e;
  	}
  }

  function _globalPointerUp(e) {
  	delete _pointers[e.pointerId];
  }

  function _addPointerDocListener() {
  	// need to keep track of what pointers and how many are active to provide e.touches emulation
  	if (!_pointerDocListener) {
  		// we listen document as any drags that end by moving the touch off the screen get fired there
  		document.addEventListener(POINTER_DOWN, _globalPointerDown, true);
  		document.addEventListener(POINTER_MOVE, _globalPointerMove, true);
  		document.addEventListener(POINTER_UP, _globalPointerUp, true);
  		document.addEventListener(POINTER_CANCEL, _globalPointerUp, true);

  		_pointerDocListener = true;
  	}
  }

  function _handlePointer(handler, e) {
  	if (e.pointerType === (e.MSPOINTER_TYPE_MOUSE || 'mouse')) { return; }

  	e.touches = [];
  	for (var i in _pointers) {
  		e.touches.push(_pointers[i]);
  	}
  	e.changedTouches = [e];

  	handler(e);
  }

  function _onPointerStart(handler, e) {
  	// IE10 specific: MsTouch needs preventDefault. See #2000
  	if (e.MSPOINTER_TYPE_TOUCH && e.pointerType === e.MSPOINTER_TYPE_TOUCH) {
  		preventDefault(e);
  	}
  	_handlePointer(handler, e);
  }

  /*\r
   * Extends the event handling code with double tap support for mobile browsers.\r
   *\r
   * Note: currently most browsers fire native dblclick, with only a few exceptions\r
   * (see https://github.com/Leaflet/Leaflet/issues/7012#issuecomment-595087386)\r
   */\r
\r
  function makeDblclick(event) {\r
  	// in modern browsers \`type\` cannot be just overridden:\r
  	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Getter_only\r
  	var newEvent = {},\r
  	    prop, i;\r
  	for (i in event) {\r
  		prop = event[i];\r
  		newEvent[i] = prop && prop.bind ? prop.bind(event) : prop;\r
  	}\r
  	event = newEvent;\r
  	newEvent.type = 'dblclick';\r
  	newEvent.detail = 2;\r
  	newEvent.isTrusted = false;\r
  	newEvent._simulated = true; // for debug purposes\r
  	return newEvent;\r
  }\r
\r
  var delay = 200;\r
  function addDoubleTapListener(obj, handler) {\r
  	// Most browsers handle double tap natively\r
  	obj.addEventListener('dblclick', handler);\r
\r
  	// On some platforms the browser doesn't fire native dblclicks for touch events.\r
  	// It seems that in all such cases \`detail\` property of \`click\` event is always \`1\`.\r
  	// So here we rely on that fact to avoid excessive 'dblclick' simulation when not needed.\r
  	var last = 0,\r
  	    detail;\r
  	function simDblclick(e) {\r
  		if (e.detail !== 1) {\r
  			detail = e.detail; // keep in sync to avoid false dblclick in some cases\r
  			return;\r
  		}\r
\r
  		if (e.pointerType === 'mouse' ||\r
  			(e.sourceCapabilities && !e.sourceCapabilities.firesTouchEvents)) {\r
\r
  			return;\r
  		}\r
\r
  		// When clicking on an <input>, the browser generates a click on its\r
  		// <label> (and vice versa) triggering two clicks in quick succession.\r
  		// This ignores clicks on elements which are a label with a 'for'\r
  		// attribute (or children of such a label), but not children of\r
  		// a <input>.\r
  		var path = getPropagationPath(e);\r
  		if (path.some(function (el) {\r
  			return el instanceof HTMLLabelElement && el.attributes.for;\r
  		}) &&\r
  			!path.some(function (el) {\r
  				return (\r
  					el instanceof HTMLInputElement ||\r
  					el instanceof HTMLSelectElement\r
  				);\r
  			})\r
  		) {\r
  			return;\r
  		}\r
\r
  		var now = Date.now();\r
  		if (now - last <= delay) {\r
  			detail++;\r
  			if (detail === 2) {\r
  				handler(makeDblclick(e));\r
  			}\r
  		} else {\r
  			detail = 1;\r
  		}\r
  		last = now;\r
  	}\r
\r
  	obj.addEventListener('click', simDblclick);\r
\r
  	return {\r
  		dblclick: handler,\r
  		simDblclick: simDblclick\r
  	};\r
  }\r
\r
  function removeDoubleTapListener(obj, handlers) {\r
  	obj.removeEventListener('dblclick', handlers.dblclick);\r
  	obj.removeEventListener('click', handlers.simDblclick);\r
  }

  /*\r
   * @namespace DomUtil\r
   *\r
   * Utility functions to work with the [DOM](https://developer.mozilla.org/docs/Web/API/Document_Object_Model)\r
   * tree, used by Leaflet internally.\r
   *\r
   * Most functions expecting or returning a \`HTMLElement\` also work for\r
   * SVG elements. The only difference is that classes refer to CSS classes\r
   * in HTML and SVG classes in SVG.\r
   */\r
\r
\r
  // @property TRANSFORM: String\r
  // Vendor-prefixed transform style name (e.g. \`'webkitTransform'\` for WebKit).\r
  var TRANSFORM = testProp(\r
  	['transform', 'webkitTransform', 'OTransform', 'MozTransform', 'msTransform']);\r
\r
  // webkitTransition comes first because some browser versions that drop vendor prefix don't do\r
  // the same for the transitionend event, in particular the Android 4.1 stock browser\r
\r
  // @property TRANSITION: String\r
  // Vendor-prefixed transition style name.\r
  var TRANSITION = testProp(\r
  	['webkitTransition', 'transition', 'OTransition', 'MozTransition', 'msTransition']);\r
\r
  // @property TRANSITION_END: String\r
  // Vendor-prefixed transitionend event name.\r
  var TRANSITION_END =\r
  	TRANSITION === 'webkitTransition' || TRANSITION === 'OTransition' ? TRANSITION + 'End' : 'transitionend';\r
\r
\r
  // @function get(id: String|HTMLElement): HTMLElement\r
  // Returns an element given its DOM id, or returns the element itself\r
  // if it was passed directly.\r
  function get(id) {\r
  	return typeof id === 'string' ? document.getElementById(id) : id;\r
  }\r
\r
  // @function getStyle(el: HTMLElement, styleAttrib: String): String\r
  // Returns the value for a certain style attribute on an element,\r
  // including computed values or values set through CSS.\r
  function getStyle(el, style) {\r
  	var value = el.style[style] || (el.currentStyle && el.currentStyle[style]);\r
\r
  	if ((!value || value === 'auto') && document.defaultView) {\r
  		var css = document.defaultView.getComputedStyle(el, null);\r
  		value = css ? css[style] : null;\r
  	}\r
  	return value === 'auto' ? null : value;\r
  }\r
\r
  // @function create(tagName: String, className?: String, container?: HTMLElement): HTMLElement\r
  // Creates an HTML element with \`tagName\`, sets its class to \`className\`, and optionally appends it to \`container\` element.\r
  function create$1(tagName, className, container) {\r
  	var el = document.createElement(tagName);\r
  	el.className = className || '';\r
\r
  	if (container) {\r
  		container.appendChild(el);\r
  	}\r
  	return el;\r
  }\r
\r
  // @function remove(el: HTMLElement)\r
  // Removes \`el\` from its parent element\r
  function remove(el) {\r
  	var parent = el.parentNode;\r
  	if (parent) {\r
  		parent.removeChild(el);\r
  	}\r
  }\r
\r
  // @function empty(el: HTMLElement)\r
  // Removes all of \`el\`'s children elements from \`el\`\r
  function empty(el) {\r
  	while (el.firstChild) {\r
  		el.removeChild(el.firstChild);\r
  	}\r
  }\r
\r
  // @function toFront(el: HTMLElement)\r
  // Makes \`el\` the last child of its parent, so it renders in front of the other children.\r
  function toFront(el) {\r
  	var parent = el.parentNode;\r
  	if (parent && parent.lastChild !== el) {\r
  		parent.appendChild(el);\r
  	}\r
  }\r
\r
  // @function toBack(el: HTMLElement)\r
  // Makes \`el\` the first child of its parent, so it renders behind the other children.\r
  function toBack(el) {\r
  	var parent = el.parentNode;\r
  	if (parent && parent.firstChild !== el) {\r
  		parent.insertBefore(el, parent.firstChild);\r
  	}\r
  }\r
\r
  // @function hasClass(el: HTMLElement, name: String): Boolean\r
  // Returns \`true\` if the element's class attribute contains \`name\`.\r
  function hasClass(el, name) {\r
  	if (el.classList !== undefined) {\r
  		return el.classList.contains(name);\r
  	}\r
  	var className = getClass(el);\r
  	return className.length > 0 && new RegExp('(^|\\\\s)' + name + '(\\\\s|$)').test(className);\r
  }\r
\r
  // @function addClass(el: HTMLElement, name: String)\r
  // Adds \`name\` to the element's class attribute.\r
  function addClass(el, name) {\r
  	if (el.classList !== undefined) {\r
  		var classes = splitWords(name);\r
  		for (var i = 0, len = classes.length; i < len; i++) {\r
  			el.classList.add(classes[i]);\r
  		}\r
  	} else if (!hasClass(el, name)) {\r
  		var className = getClass(el);\r
  		setClass(el, (className ? className + ' ' : '') + name);\r
  	}\r
  }\r
\r
  // @function removeClass(el: HTMLElement, name: String)\r
  // Removes \`name\` from the element's class attribute.\r
  function removeClass(el, name) {\r
  	if (el.classList !== undefined) {\r
  		el.classList.remove(name);\r
  	} else {\r
  		setClass(el, trim((' ' + getClass(el) + ' ').replace(' ' + name + ' ', ' ')));\r
  	}\r
  }\r
\r
  // @function setClass(el: HTMLElement, name: String)\r
  // Sets the element's class.\r
  function setClass(el, name) {\r
  	if (el.className.baseVal === undefined) {\r
  		el.className = name;\r
  	} else {\r
  		// in case of SVG element\r
  		el.className.baseVal = name;\r
  	}\r
  }\r
\r
  // @function getClass(el: HTMLElement): String\r
  // Returns the element's class.\r
  function getClass(el) {\r
  	// Check if the element is an SVGElementInstance and use the correspondingElement instead\r
  	// (Required for linked SVG elements in IE11.)\r
  	if (el.correspondingElement) {\r
  		el = el.correspondingElement;\r
  	}\r
  	return el.className.baseVal === undefined ? el.className : el.className.baseVal;\r
  }\r
\r
  // @function setOpacity(el: HTMLElement, opacity: Number)\r
  // Set the opacity of an element (including old IE support).\r
  // \`opacity\` must be a number from \`0\` to \`1\`.\r
  function setOpacity(el, value) {\r
  	if ('opacity' in el.style) {\r
  		el.style.opacity = value;\r
  	} else if ('filter' in el.style) {\r
  		_setOpacityIE(el, value);\r
  	}\r
  }\r
\r
  function _setOpacityIE(el, value) {\r
  	var filter = false,\r
  	    filterName = 'DXImageTransform.Microsoft.Alpha';\r
\r
  	// filters collection throws an error if we try to retrieve a filter that doesn't exist\r
  	try {\r
  		filter = el.filters.item(filterName);\r
  	} catch (e) {\r
  		// don't set opacity to 1 if we haven't already set an opacity,\r
  		// it isn't needed and breaks transparent pngs.\r
  		if (value === 1) { return; }\r
  	}\r
\r
  	value = Math.round(value * 100);\r
\r
  	if (filter) {\r
  		filter.Enabled = (value !== 100);\r
  		filter.Opacity = value;\r
  	} else {\r
  		el.style.filter += ' progid:' + filterName + '(opacity=' + value + ')';\r
  	}\r
  }\r
\r
  // @function testProp(props: String[]): String|false\r
  // Goes through the array of style names and returns the first name\r
  // that is a valid style name for an element. If no such name is found,\r
  // it returns false. Useful for vendor-prefixed styles like \`transform\`.\r
  function testProp(props) {\r
  	var style = document.documentElement.style;\r
\r
  	for (var i = 0; i < props.length; i++) {\r
  		if (props[i] in style) {\r
  			return props[i];\r
  		}\r
  	}\r
  	return false;\r
  }\r
\r
  // @function setTransform(el: HTMLElement, offset: Point, scale?: Number)\r
  // Resets the 3D CSS transform of \`el\` so it is translated by \`offset\` pixels\r
  // and optionally scaled by \`scale\`. Does not have an effect if the\r
  // browser doesn't support 3D CSS transforms.\r
  function setTransform(el, offset, scale) {\r
  	var pos = offset || new Point(0, 0);\r
\r
  	el.style[TRANSFORM] =\r
  		(Browser.ie3d ?\r
  			'translate(' + pos.x + 'px,' + pos.y + 'px)' :\r
  			'translate3d(' + pos.x + 'px,' + pos.y + 'px,0)') +\r
  		(scale ? ' scale(' + scale + ')' : '');\r
  }\r
\r
  // @function setPosition(el: HTMLElement, position: Point)\r
  // Sets the position of \`el\` to coordinates specified by \`position\`,\r
  // using CSS translate or top/left positioning depending on the browser\r
  // (used by Leaflet internally to position its layers).\r
  function setPosition(el, point) {\r
\r
  	/*eslint-disable */\r
  	el._leaflet_pos = point;\r
  	/* eslint-enable */\r
\r
  	if (Browser.any3d) {\r
  		setTransform(el, point);\r
  	} else {\r
  		el.style.left = point.x + 'px';\r
  		el.style.top = point.y + 'px';\r
  	}\r
  }\r
\r
  // @function getPosition(el: HTMLElement): Point\r
  // Returns the coordinates of an element previously positioned with setPosition.\r
  function getPosition(el) {\r
  	// this method is only used for elements previously positioned using setPosition,\r
  	// so it's safe to cache the position for performance\r
\r
  	return el._leaflet_pos || new Point(0, 0);\r
  }\r
\r
  // @function disableTextSelection()\r
  // Prevents the user from generating \`selectstart\` DOM events, usually generated\r
  // when the user drags the mouse through a page with text. Used internally\r
  // by Leaflet to override the behaviour of any click-and-drag interaction on\r
  // the map. Affects drag interactions on the whole document.\r
\r
  // @function enableTextSelection()\r
  // Cancels the effects of a previous [\`L.DomUtil.disableTextSelection\`](#domutil-disabletextselection).\r
  var disableTextSelection;\r
  var enableTextSelection;\r
  var _userSelect;\r
  if ('onselectstart' in document) {\r
  	disableTextSelection = function () {\r
  		on(window, 'selectstart', preventDefault);\r
  	};\r
  	enableTextSelection = function () {\r
  		off(window, 'selectstart', preventDefault);\r
  	};\r
  } else {\r
  	var userSelectProperty = testProp(\r
  		['userSelect', 'WebkitUserSelect', 'OUserSelect', 'MozUserSelect', 'msUserSelect']);\r
\r
  	disableTextSelection = function () {\r
  		if (userSelectProperty) {\r
  			var style = document.documentElement.style;\r
  			_userSelect = style[userSelectProperty];\r
  			style[userSelectProperty] = 'none';\r
  		}\r
  	};\r
  	enableTextSelection = function () {\r
  		if (userSelectProperty) {\r
  			document.documentElement.style[userSelectProperty] = _userSelect;\r
  			_userSelect = undefined;\r
  		}\r
  	};\r
  }\r
\r
  // @function disableImageDrag()\r
  // As [\`L.DomUtil.disableTextSelection\`](#domutil-disabletextselection), but\r
  // for \`dragstart\` DOM events, usually generated when the user drags an image.\r
  function disableImageDrag() {\r
  	on(window, 'dragstart', preventDefault);\r
  }\r
\r
  // @function enableImageDrag()\r
  // Cancels the effects of a previous [\`L.DomUtil.disableImageDrag\`](#domutil-disabletextselection).\r
  function enableImageDrag() {\r
  	off(window, 'dragstart', preventDefault);\r
  }\r
\r
  var _outlineElement, _outlineStyle;\r
  // @function preventOutline(el: HTMLElement)\r
  // Makes the [outline](https://developer.mozilla.org/docs/Web/CSS/outline)\r
  // of the element \`el\` invisible. Used internally by Leaflet to prevent\r
  // focusable elements from displaying an outline when the user performs a\r
  // drag interaction on them.\r
  function preventOutline(element) {\r
  	while (element.tabIndex === -1) {\r
  		element = element.parentNode;\r
  	}\r
  	if (!element.style) { return; }\r
  	restoreOutline();\r
  	_outlineElement = element;\r
  	_outlineStyle = element.style.outlineStyle;\r
  	element.style.outlineStyle = 'none';\r
  	on(window, 'keydown', restoreOutline);\r
  }\r
\r
  // @function restoreOutline()\r
  // Cancels the effects of a previous [\`L.DomUtil.preventOutline\`]().\r
  function restoreOutline() {\r
  	if (!_outlineElement) { return; }\r
  	_outlineElement.style.outlineStyle = _outlineStyle;\r
  	_outlineElement = undefined;\r
  	_outlineStyle = undefined;\r
  	off(window, 'keydown', restoreOutline);\r
  }\r
\r
  // @function getSizedParentNode(el: HTMLElement): HTMLElement\r
  // Finds the closest parent node which size (width and height) is not null.\r
  function getSizedParentNode(element) {\r
  	do {\r
  		element = element.parentNode;\r
  	} while ((!element.offsetWidth || !element.offsetHeight) && element !== document.body);\r
  	return element;\r
  }\r
\r
  // @function getScale(el: HTMLElement): Object\r
  // Computes the CSS scale currently applied on the element.\r
  // Returns an object with \`x\` and \`y\` members as horizontal and vertical scales respectively,\r
  // and \`boundingClientRect\` as the result of [\`getBoundingClientRect()\`](https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect).\r
  function getScale(element) {\r
  	var rect = element.getBoundingClientRect(); // Read-only in old browsers.\r
\r
  	return {\r
  		x: rect.width / element.offsetWidth || 1,\r
  		y: rect.height / element.offsetHeight || 1,\r
  		boundingClientRect: rect\r
  	};\r
  }

  var DomUtil = {
    __proto__: null,
    TRANSFORM: TRANSFORM,
    TRANSITION: TRANSITION,
    TRANSITION_END: TRANSITION_END,
    get: get,
    getStyle: getStyle,
    create: create$1,
    remove: remove,
    empty: empty,
    toFront: toFront,
    toBack: toBack,
    hasClass: hasClass,
    addClass: addClass,
    removeClass: removeClass,
    setClass: setClass,
    getClass: getClass,
    setOpacity: setOpacity,
    testProp: testProp,
    setTransform: setTransform,
    setPosition: setPosition,
    getPosition: getPosition,
    get disableTextSelection () { return disableTextSelection; },
    get enableTextSelection () { return enableTextSelection; },
    disableImageDrag: disableImageDrag,
    enableImageDrag: enableImageDrag,
    preventOutline: preventOutline,
    restoreOutline: restoreOutline,
    getSizedParentNode: getSizedParentNode,
    getScale: getScale
  };

  /*\r
   * @namespace DomEvent\r
   * Utility functions to work with the [DOM events](https://developer.mozilla.org/docs/Web/API/Event), used by Leaflet internally.\r
   */\r
\r
  // Inspired by John Resig, Dean Edwards and YUI addEvent implementations.\r
\r
  // @function on(el: HTMLElement, types: String, fn: Function, context?: Object): this\r
  // Adds a listener function (\`fn\`) to a particular DOM event type of the\r
  // element \`el\`. You can optionally specify the context of the listener\r
  // (object the \`this\` keyword will point to). You can also pass several\r
  // space-separated types (e.g. \`'click dblclick'\`).\r
\r
  // @alternative\r
  // @function on(el: HTMLElement, eventMap: Object, context?: Object): this\r
  // Adds a set of type/listener pairs, e.g. \`{click: onClick, mousemove: onMouseMove}\`\r
  function on(obj, types, fn, context) {\r
\r
  	if (types && typeof types === 'object') {\r
  		for (var type in types) {\r
  			addOne(obj, type, types[type], fn);\r
  		}\r
  	} else {\r
  		types = splitWords(types);\r
\r
  		for (var i = 0, len = types.length; i < len; i++) {\r
  			addOne(obj, types[i], fn, context);\r
  		}\r
  	}\r
\r
  	return this;\r
  }\r
\r
  var eventsKey = '_leaflet_events';\r
\r
  // @function off(el: HTMLElement, types: String, fn: Function, context?: Object): this\r
  // Removes a previously added listener function.\r
  // Note that if you passed a custom context to on, you must pass the same\r
  // context to \`off\` in order to remove the listener.\r
\r
  // @alternative\r
  // @function off(el: HTMLElement, eventMap: Object, context?: Object): this\r
  // Removes a set of type/listener pairs, e.g. \`{click: onClick, mousemove: onMouseMove}\`\r
\r
  // @alternative\r
  // @function off(el: HTMLElement, types: String): this\r
  // Removes all previously added listeners of given types.\r
\r
  // @alternative\r
  // @function off(el: HTMLElement): this\r
  // Removes all previously added listeners from given HTMLElement\r
  function off(obj, types, fn, context) {\r
\r
  	if (arguments.length === 1) {\r
  		batchRemove(obj);\r
  		delete obj[eventsKey];\r
\r
  	} else if (types && typeof types === 'object') {\r
  		for (var type in types) {\r
  			removeOne(obj, type, types[type], fn);\r
  		}\r
\r
  	} else {\r
  		types = splitWords(types);\r
\r
  		if (arguments.length === 2) {\r
  			batchRemove(obj, function (type) {\r
  				return indexOf(types, type) !== -1;\r
  			});\r
  		} else {\r
  			for (var i = 0, len = types.length; i < len; i++) {\r
  				removeOne(obj, types[i], fn, context);\r
  			}\r
  		}\r
  	}\r
\r
  	return this;\r
  }\r
\r
  function batchRemove(obj, filterFn) {\r
  	for (var id in obj[eventsKey]) {\r
  		var type = id.split(/\\d/)[0];\r
  		if (!filterFn || filterFn(type)) {\r
  			removeOne(obj, type, null, null, id);\r
  		}\r
  	}\r
  }\r
\r
  var mouseSubst = {\r
  	mouseenter: 'mouseover',\r
  	mouseleave: 'mouseout',\r
  	wheel: !('onwheel' in window) && 'mousewheel'\r
  };\r
\r
  function addOne(obj, type, fn, context) {\r
  	var id = type + stamp(fn) + (context ? '_' + stamp(context) : '');\r
\r
  	if (obj[eventsKey] && obj[eventsKey][id]) { return this; }\r
\r
  	var handler = function (e) {\r
  		return fn.call(context || obj, e || window.event);\r
  	};\r
\r
  	var originalHandler = handler;\r
\r
  	if (!Browser.touchNative && Browser.pointer && type.indexOf('touch') === 0) {\r
  		// Needs DomEvent.Pointer.js\r
  		handler = addPointerListener(obj, type, handler);\r
\r
  	} else if (Browser.touch && (type === 'dblclick')) {\r
  		handler = addDoubleTapListener(obj, handler);\r
\r
  	} else if ('addEventListener' in obj) {\r
\r
  		if (type === 'touchstart' || type === 'touchmove' || type === 'wheel' ||  type === 'mousewheel') {\r
  			obj.addEventListener(mouseSubst[type] || type, handler, Browser.passiveEvents ? {passive: false} : false);\r
\r
  		} else if (type === 'mouseenter' || type === 'mouseleave') {\r
  			handler = function (e) {\r
  				e = e || window.event;\r
  				if (isExternalTarget(obj, e)) {\r
  					originalHandler(e);\r
  				}\r
  			};\r
  			obj.addEventListener(mouseSubst[type], handler, false);\r
\r
  		} else {\r
  			obj.addEventListener(type, originalHandler, false);\r
  		}\r
\r
  	} else {\r
  		obj.attachEvent('on' + type, handler);\r
  	}\r
\r
  	obj[eventsKey] = obj[eventsKey] || {};\r
  	obj[eventsKey][id] = handler;\r
  }\r
\r
  function removeOne(obj, type, fn, context, id) {\r
  	id = id || type + stamp(fn) + (context ? '_' + stamp(context) : '');\r
  	var handler = obj[eventsKey] && obj[eventsKey][id];\r
\r
  	if (!handler) { return this; }\r
\r
  	if (!Browser.touchNative && Browser.pointer && type.indexOf('touch') === 0) {\r
  		removePointerListener(obj, type, handler);\r
\r
  	} else if (Browser.touch && (type === 'dblclick')) {\r
  		removeDoubleTapListener(obj, handler);\r
\r
  	} else if ('removeEventListener' in obj) {\r
\r
  		obj.removeEventListener(mouseSubst[type] || type, handler, false);\r
\r
  	} else {\r
  		obj.detachEvent('on' + type, handler);\r
  	}\r
\r
  	obj[eventsKey][id] = null;\r
  }\r
\r
  // @function stopPropagation(ev: DOMEvent): this\r
  // Stop the given event from propagation to parent elements. Used inside the listener functions:\r
  // \`\`\`js\r
  // L.DomEvent.on(div, 'click', function (ev) {\r
  // 	L.DomEvent.stopPropagation(ev);\r
  // });\r
  // \`\`\`\r
  function stopPropagation(e) {\r
\r
  	if (e.stopPropagation) {\r
  		e.stopPropagation();\r
  	} else if (e.originalEvent) {  // In case of Leaflet event.\r
  		e.originalEvent._stopped = true;\r
  	} else {\r
  		e.cancelBubble = true;\r
  	}\r
\r
  	return this;\r
  }\r
\r
  // @function disableScrollPropagation(el: HTMLElement): this\r
  // Adds \`stopPropagation\` to the element's \`'wheel'\` events (plus browser variants).\r
  function disableScrollPropagation(el) {\r
  	addOne(el, 'wheel', stopPropagation);\r
  	return this;\r
  }\r
\r
  // @function disableClickPropagation(el: HTMLElement): this\r
  // Adds \`stopPropagation\` to the element's \`'click'\`, \`'dblclick'\`, \`'contextmenu'\`,\r
  // \`'mousedown'\` and \`'touchstart'\` events (plus browser variants).\r
  function disableClickPropagation(el) {\r
  	on(el, 'mousedown touchstart dblclick contextmenu', stopPropagation);\r
  	el['_leaflet_disable_click'] = true;\r
  	return this;\r
  }\r
\r
  // @function preventDefault(ev: DOMEvent): this\r
  // Prevents the default action of the DOM Event \`ev\` from happening (such as\r
  // following a link in the href of the a element, or doing a POST request\r
  // with page reload when a \`<form>\` is submitted).\r
  // Use it inside listener functions.\r
  function preventDefault(e) {\r
  	if (e.preventDefault) {\r
  		e.preventDefault();\r
  	} else {\r
  		e.returnValue = false;\r
  	}\r
  	return this;\r
  }\r
\r
  // @function stop(ev: DOMEvent): this\r
  // Does \`stopPropagation\` and \`preventDefault\` at the same time.\r
  function stop(e) {\r
  	preventDefault(e);\r
  	stopPropagation(e);\r
  	return this;\r
  }\r
\r
  // @function getPropagationPath(ev: DOMEvent): Array\r
  // Compatibility polyfill for [\`Event.composedPath()\`](https://developer.mozilla.org/en-US/docs/Web/API/Event/composedPath).\r
  // Returns an array containing the \`HTMLElement\`s that the given DOM event\r
  // should propagate to (if not stopped).\r
  function getPropagationPath(ev) {\r
  	if (ev.composedPath) {\r
  		return ev.composedPath();\r
  	}\r
\r
  	var path = [];\r
  	var el = ev.target;\r
\r
  	while (el) {\r
  		path.push(el);\r
  		el = el.parentNode;\r
  	}\r
  	return path;\r
  }\r
\r
\r
  // @function getMousePosition(ev: DOMEvent, container?: HTMLElement): Point\r
  // Gets normalized mouse position from a DOM event relative to the\r
  // \`container\` (border excluded) or to the whole page if not specified.\r
  function getMousePosition(e, container) {\r
  	if (!container) {\r
  		return new Point(e.clientX, e.clientY);\r
  	}\r
\r
  	var scale = getScale(container),\r
  	    offset = scale.boundingClientRect; // left and top  values are in page scale (like the event clientX/Y)\r
\r
  	return new Point(\r
  		// offset.left/top values are in page scale (like clientX/Y),\r
  		// whereas clientLeft/Top (border width) values are the original values (before CSS scale applies).\r
  		(e.clientX - offset.left) / scale.x - container.clientLeft,\r
  		(e.clientY - offset.top) / scale.y - container.clientTop\r
  	);\r
  }\r
\r
\r
  //  except , Safari and\r
  // We need double the scroll pixels (see #7403 and #4538) for all Browsers\r
  // except OSX (Mac) -> 3x, Chrome running on Linux 1x\r
\r
  var wheelPxFactor =\r
  	(Browser.linux && Browser.chrome) ? window.devicePixelRatio :\r
  	Browser.mac ? window.devicePixelRatio * 3 :\r
  	window.devicePixelRatio > 0 ? 2 * window.devicePixelRatio : 1;\r
  // @function getWheelDelta(ev: DOMEvent): Number\r
  // Gets normalized wheel delta from a wheel DOM event, in vertical\r
  // pixels scrolled (negative if scrolling down).\r
  // Events from pointing devices without precise scrolling are mapped to\r
  // a best guess of 60 pixels.\r
  function getWheelDelta(e) {\r
  	return (Browser.edge) ? e.wheelDeltaY / 2 : // Don't trust window-geometry-based delta\r
  	       (e.deltaY && e.deltaMode === 0) ? -e.deltaY / wheelPxFactor : // Pixels\r
  	       (e.deltaY && e.deltaMode === 1) ? -e.deltaY * 20 : // Lines\r
  	       (e.deltaY && e.deltaMode === 2) ? -e.deltaY * 60 : // Pages\r
  	       (e.deltaX || e.deltaZ) ? 0 :	// Skip horizontal/depth wheel events\r
  	       e.wheelDelta ? (e.wheelDeltaY || e.wheelDelta) / 2 : // Legacy IE pixels\r
  	       (e.detail && Math.abs(e.detail) < 32765) ? -e.detail * 20 : // Legacy Moz lines\r
  	       e.detail ? e.detail / -32765 * 60 : // Legacy Moz pages\r
  	       0;\r
  }\r
\r
  // check if element really left/entered the event target (for mouseenter/mouseleave)\r
  function isExternalTarget(el, e) {\r
\r
  	var related = e.relatedTarget;\r
\r
  	if (!related) { return true; }\r
\r
  	try {\r
  		while (related && (related !== el)) {\r
  			related = related.parentNode;\r
  		}\r
  	} catch (err) {\r
  		return false;\r
  	}\r
  	return (related !== el);\r
  }

  var DomEvent = {
    __proto__: null,
    on: on,
    off: off,
    stopPropagation: stopPropagation,
    disableScrollPropagation: disableScrollPropagation,
    disableClickPropagation: disableClickPropagation,
    preventDefault: preventDefault,
    stop: stop,
    getPropagationPath: getPropagationPath,
    getMousePosition: getMousePosition,
    getWheelDelta: getWheelDelta,
    isExternalTarget: isExternalTarget,
    addListener: on,
    removeListener: off
  };

  /*
   * @class PosAnimation
   * @aka L.PosAnimation
   * @inherits Evented
   * Used internally for panning animations, utilizing CSS3 Transitions for modern browsers and a timer fallback for IE6-9.
   *
   * @example
   * \`\`\`js
   * var myPositionMarker = L.marker([48.864716, 2.294694]).addTo(map);
   *
   * myPositionMarker.on("click", function() {
   * 	var pos = map.latLngToLayerPoint(myPositionMarker.getLatLng());
   * 	pos.y -= 25;
   * 	var fx = new L.PosAnimation();
   *
   * 	fx.once('end',function() {
   * 		pos.y += 25;
   * 		fx.run(myPositionMarker._icon, pos, 0.8);
   * 	});
   *
   * 	fx.run(myPositionMarker._icon, pos, 0.3);
   * });
   *
   * \`\`\`
   *
   * @constructor L.PosAnimation()
   * Creates a \`PosAnimation\` object.
   *
   */

  var PosAnimation = Evented.extend({

  	// @method run(el: HTMLElement, newPos: Point, duration?: Number, easeLinearity?: Number)
  	// Run an animation of a given element to a new position, optionally setting
  	// duration in seconds (\`0.25\` by default) and easing linearity factor (3rd
  	// argument of the [cubic bezier curve](https://cubic-bezier.com/#0,0,.5,1),
  	// \`0.5\` by default).
  	run: function (el, newPos, duration, easeLinearity) {
  		this.stop();

  		this._el = el;
  		this._inProgress = true;
  		this._duration = duration || 0.25;
  		this._easeOutPower = 1 / Math.max(easeLinearity || 0.5, 0.2);

  		this._startPos = getPosition(el);
  		this._offset = newPos.subtract(this._startPos);
  		this._startTime = +new Date();

  		// @event start: Event
  		// Fired when the animation starts
  		this.fire('start');

  		this._animate();
  	},

  	// @method stop()
  	// Stops the animation (if currently running).
  	stop: function () {
  		if (!this._inProgress) { return; }

  		this._step(true);
  		this._complete();
  	},

  	_animate: function () {
  		// animation loop
  		this._animId = requestAnimFrame(this._animate, this);
  		this._step();
  	},

  	_step: function (round) {
  		var elapsed = (+new Date()) - this._startTime,
  		    duration = this._duration * 1000;

  		if (elapsed < duration) {
  			this._runFrame(this._easeOut(elapsed / duration), round);
  		} else {
  			this._runFrame(1);
  			this._complete();
  		}
  	},

  	_runFrame: function (progress, round) {
  		var pos = this._startPos.add(this._offset.multiplyBy(progress));
  		if (round) {
  			pos._round();
  		}
  		setPosition(this._el, pos);

  		// @event step: Event
  		// Fired continuously during the animation.
  		this.fire('step');
  	},

  	_complete: function () {
  		cancelAnimFrame(this._animId);

  		this._inProgress = false;
  		// @event end: Event
  		// Fired when the animation ends.
  		this.fire('end');
  	},

  	_easeOut: function (t) {
  		return 1 - Math.pow(1 - t, this._easeOutPower);
  	}
  });

  /*\r
   * @class Map\r
   * @aka L.Map\r
   * @inherits Evented\r
   *\r
   * The central class of the API \u2014 it is used to create a map on a page and manipulate it.\r
   *\r
   * @example\r
   *\r
   * \`\`\`js\r
   * // initialize the map on the "map" div with a given center and zoom\r
   * var map = L.map('map', {\r
   * 	center: [51.505, -0.09],\r
   * 	zoom: 13\r
   * });\r
   * \`\`\`\r
   *\r
   */\r
\r
  var Map = Evented.extend({\r
\r
  	options: {\r
  		// @section Map State Options\r
  		// @option crs: CRS = L.CRS.EPSG3857\r
  		// The [Coordinate Reference System](#crs) to use. Don't change this if you're not\r
  		// sure what it means.\r
  		crs: EPSG3857,\r
\r
  		// @option center: LatLng = undefined\r
  		// Initial geographic center of the map\r
  		center: undefined,\r
\r
  		// @option zoom: Number = undefined\r
  		// Initial map zoom level\r
  		zoom: undefined,\r
\r
  		// @option minZoom: Number = *\r
  		// Minimum zoom level of the map.\r
  		// If not specified and at least one \`GridLayer\` or \`TileLayer\` is in the map,\r
  		// the lowest of their \`minZoom\` options will be used instead.\r
  		minZoom: undefined,\r
\r
  		// @option maxZoom: Number = *\r
  		// Maximum zoom level of the map.\r
  		// If not specified and at least one \`GridLayer\` or \`TileLayer\` is in the map,\r
  		// the highest of their \`maxZoom\` options will be used instead.\r
  		maxZoom: undefined,\r
\r
  		// @option layers: Layer[] = []\r
  		// Array of layers that will be added to the map initially\r
  		layers: [],\r
\r
  		// @option maxBounds: LatLngBounds = null\r
  		// When this option is set, the map restricts the view to the given\r
  		// geographical bounds, bouncing the user back if the user tries to pan\r
  		// outside the view. To set the restriction dynamically, use\r
  		// [\`setMaxBounds\`](#map-setmaxbounds) method.\r
  		maxBounds: undefined,\r
\r
  		// @option renderer: Renderer = *\r
  		// The default method for drawing vector layers on the map. \`L.SVG\`\r
  		// or \`L.Canvas\` by default depending on browser support.\r
  		renderer: undefined,\r
\r
\r
  		// @section Animation Options\r
  		// @option zoomAnimation: Boolean = true\r
  		// Whether the map zoom animation is enabled. By default it's enabled\r
  		// in all browsers that support CSS3 Transitions except Android.\r
  		zoomAnimation: true,\r
\r
  		// @option zoomAnimationThreshold: Number = 4\r
  		// Won't animate zoom if the zoom difference exceeds this value.\r
  		zoomAnimationThreshold: 4,\r
\r
  		// @option fadeAnimation: Boolean = true\r
  		// Whether the tile fade animation is enabled. By default it's enabled\r
  		// in all browsers that support CSS3 Transitions except Android.\r
  		fadeAnimation: true,\r
\r
  		// @option markerZoomAnimation: Boolean = true\r
  		// Whether markers animate their zoom with the zoom animation, if disabled\r
  		// they will disappear for the length of the animation. By default it's\r
  		// enabled in all browsers that support CSS3 Transitions except Android.\r
  		markerZoomAnimation: true,\r
\r
  		// @option transform3DLimit: Number = 2^23\r
  		// Defines the maximum size of a CSS translation transform. The default\r
  		// value should not be changed unless a web browser positions layers in\r
  		// the wrong place after doing a large \`panBy\`.\r
  		transform3DLimit: 8388608, // Precision limit of a 32-bit float\r
\r
  		// @section Interaction Options\r
  		// @option zoomSnap: Number = 1\r
  		// Forces the map's zoom level to always be a multiple of this, particularly\r
  		// right after a [\`fitBounds()\`](#map-fitbounds) or a pinch-zoom.\r
  		// By default, the zoom level snaps to the nearest integer; lower values\r
  		// (e.g. \`0.5\` or \`0.1\`) allow for greater granularity. A value of \`0\`\r
  		// means the zoom level will not be snapped after \`fitBounds\` or a pinch-zoom.\r
  		zoomSnap: 1,\r
\r
  		// @option zoomDelta: Number = 1\r
  		// Controls how much the map's zoom level will change after a\r
  		// [\`zoomIn()\`](#map-zoomin), [\`zoomOut()\`](#map-zoomout), pressing \`+\`\r
  		// or \`-\` on the keyboard, or using the [zoom controls](#control-zoom).\r
  		// Values smaller than \`1\` (e.g. \`0.5\`) allow for greater granularity.\r
  		zoomDelta: 1,\r
\r
  		// @option trackResize: Boolean = true\r
  		// Whether the map automatically handles browser window resize to update itself.\r
  		trackResize: true\r
  	},\r
\r
  	initialize: function (id, options) { // (HTMLElement or String, Object)\r
  		options = setOptions(this, options);\r
\r
  		// Make sure to assign internal flags at the beginning,\r
  		// to avoid inconsistent state in some edge cases.\r
  		this._handlers = [];\r
  		this._layers = {};\r
  		this._zoomBoundLayers = {};\r
  		this._sizeChanged = true;\r
\r
  		this._initContainer(id);\r
  		this._initLayout();\r
\r
  		// hack for https://github.com/Leaflet/Leaflet/issues/1980\r
  		this._onResize = bind(this._onResize, this);\r
\r
  		this._initEvents();\r
\r
  		if (options.maxBounds) {\r
  			this.setMaxBounds(options.maxBounds);\r
  		}\r
\r
  		if (options.zoom !== undefined) {\r
  			this._zoom = this._limitZoom(options.zoom);\r
  		}\r
\r
  		if (options.center && options.zoom !== undefined) {\r
  			this.setView(toLatLng(options.center), options.zoom, {reset: true});\r
  		}\r
\r
  		this.callInitHooks();\r
\r
  		// don't animate on browsers without hardware-accelerated transitions or old Android/Opera\r
  		this._zoomAnimated = TRANSITION && Browser.any3d && !Browser.mobileOpera &&\r
  				this.options.zoomAnimation;\r
\r
  		// zoom transitions run with the same duration for all layers, so if one of transitionend events\r
  		// happens after starting zoom animation (propagating to the map pane), we know that it ended globally\r
  		if (this._zoomAnimated) {\r
  			this._createAnimProxy();\r
  			on(this._proxy, TRANSITION_END, this._catchTransitionEnd, this);\r
  		}\r
\r
  		this._addLayers(this.options.layers);\r
  	},\r
\r
\r
  	// @section Methods for modifying map state\r
\r
  	// @method setView(center: LatLng, zoom: Number, options?: Zoom/pan options): this\r
  	// Sets the view of the map (geographical center and zoom) with the given\r
  	// animation options.\r
  	setView: function (center, zoom, options) {\r
\r
  		zoom = zoom === undefined ? this._zoom : this._limitZoom(zoom);\r
  		center = this._limitCenter(toLatLng(center), zoom, this.options.maxBounds);\r
  		options = options || {};\r
\r
  		this._stop();\r
\r
  		if (this._loaded && !options.reset && options !== true) {\r
\r
  			if (options.animate !== undefined) {\r
  				options.zoom = extend({animate: options.animate}, options.zoom);\r
  				options.pan = extend({animate: options.animate, duration: options.duration}, options.pan);\r
  			}\r
\r
  			// try animating pan or zoom\r
  			var moved = (this._zoom !== zoom) ?\r
  				this._tryAnimatedZoom && this._tryAnimatedZoom(center, zoom, options.zoom) :\r
  				this._tryAnimatedPan(center, options.pan);\r
\r
  			if (moved) {\r
  				// prevent resize handler call, the view will refresh after animation anyway\r
  				clearTimeout(this._sizeTimer);\r
  				return this;\r
  			}\r
  		}\r
\r
  		// animation didn't start, just reset the map view\r
  		this._resetView(center, zoom, options.pan && options.pan.noMoveStart);\r
\r
  		return this;\r
  	},\r
\r
  	// @method setZoom(zoom: Number, options?: Zoom/pan options): this\r
  	// Sets the zoom of the map.\r
  	setZoom: function (zoom, options) {\r
  		if (!this._loaded) {\r
  			this._zoom = zoom;\r
  			return this;\r
  		}\r
  		return this.setView(this.getCenter(), zoom, {zoom: options});\r
  	},\r
\r
  	// @method zoomIn(delta?: Number, options?: Zoom options): this\r
  	// Increases the zoom of the map by \`delta\` ([\`zoomDelta\`](#map-zoomdelta) by default).\r
  	zoomIn: function (delta, options) {\r
  		delta = delta || (Browser.any3d ? this.options.zoomDelta : 1);\r
  		return this.setZoom(this._zoom + delta, options);\r
  	},\r
\r
  	// @method zoomOut(delta?: Number, options?: Zoom options): this\r
  	// Decreases the zoom of the map by \`delta\` ([\`zoomDelta\`](#map-zoomdelta) by default).\r
  	zoomOut: function (delta, options) {\r
  		delta = delta || (Browser.any3d ? this.options.zoomDelta : 1);\r
  		return this.setZoom(this._zoom - delta, options);\r
  	},\r
\r
  	// @method setZoomAround(latlng: LatLng, zoom: Number, options: Zoom options): this\r
  	// Zooms the map while keeping a specified geographical point on the map\r
  	// stationary (e.g. used internally for scroll zoom and double-click zoom).\r
  	// @alternative\r
  	// @method setZoomAround(offset: Point, zoom: Number, options: Zoom options): this\r
  	// Zooms the map while keeping a specified pixel on the map (relative to the top-left corner) stationary.\r
  	setZoomAround: function (latlng, zoom, options) {\r
  		var scale = this.getZoomScale(zoom),\r
  		    viewHalf = this.getSize().divideBy(2),\r
  		    containerPoint = latlng instanceof Point ? latlng : this.latLngToContainerPoint(latlng),\r
\r
  		    centerOffset = containerPoint.subtract(viewHalf).multiplyBy(1 - 1 / scale),\r
  		    newCenter = this.containerPointToLatLng(viewHalf.add(centerOffset));\r
\r
  		return this.setView(newCenter, zoom, {zoom: options});\r
  	},\r
\r
  	_getBoundsCenterZoom: function (bounds, options) {\r
\r
  		options = options || {};\r
  		bounds = bounds.getBounds ? bounds.getBounds() : toLatLngBounds(bounds);\r
\r
  		var paddingTL = toPoint(options.paddingTopLeft || options.padding || [0, 0]),\r
  		    paddingBR = toPoint(options.paddingBottomRight || options.padding || [0, 0]),\r
\r
  		    zoom = this.getBoundsZoom(bounds, false, paddingTL.add(paddingBR));\r
\r
  		zoom = (typeof options.maxZoom === 'number') ? Math.min(options.maxZoom, zoom) : zoom;\r
\r
  		if (zoom === Infinity) {\r
  			return {\r
  				center: bounds.getCenter(),\r
  				zoom: zoom\r
  			};\r
  		}\r
\r
  		var paddingOffset = paddingBR.subtract(paddingTL).divideBy(2),\r
\r
  		    swPoint = this.project(bounds.getSouthWest(), zoom),\r
  		    nePoint = this.project(bounds.getNorthEast(), zoom),\r
  		    center = this.unproject(swPoint.add(nePoint).divideBy(2).add(paddingOffset), zoom);\r
\r
  		return {\r
  			center: center,\r
  			zoom: zoom\r
  		};\r
  	},\r
\r
  	// @method fitBounds(bounds: LatLngBounds, options?: fitBounds options): this\r
  	// Sets a map view that contains the given geographical bounds with the\r
  	// maximum zoom level possible.\r
  	fitBounds: function (bounds, options) {\r
\r
  		bounds = toLatLngBounds(bounds);\r
\r
  		if (!bounds.isValid()) {\r
  			throw new Error('Bounds are not valid.');\r
  		}\r
\r
  		var target = this._getBoundsCenterZoom(bounds, options);\r
  		return this.setView(target.center, target.zoom, options);\r
  	},\r
\r
  	// @method fitWorld(options?: fitBounds options): this\r
  	// Sets a map view that mostly contains the whole world with the maximum\r
  	// zoom level possible.\r
  	fitWorld: function (options) {\r
  		return this.fitBounds([[-90, -180], [90, 180]], options);\r
  	},\r
\r
  	// @method panTo(latlng: LatLng, options?: Pan options): this\r
  	// Pans the map to a given center.\r
  	panTo: function (center, options) { // (LatLng)\r
  		return this.setView(center, this._zoom, {pan: options});\r
  	},\r
\r
  	// @method panBy(offset: Point, options?: Pan options): this\r
  	// Pans the map by a given number of pixels (animated).\r
  	panBy: function (offset, options) {\r
  		offset = toPoint(offset).round();\r
  		options = options || {};\r
\r
  		if (!offset.x && !offset.y) {\r
  			return this.fire('moveend');\r
  		}\r
  		// If we pan too far, Chrome gets issues with tiles\r
  		// and makes them disappear or appear in the wrong place (slightly offset) #2602\r
  		if (options.animate !== true && !this.getSize().contains(offset)) {\r
  			this._resetView(this.unproject(this.project(this.getCenter()).add(offset)), this.getZoom());\r
  			return this;\r
  		}\r
\r
  		if (!this._panAnim) {\r
  			this._panAnim = new PosAnimation();\r
\r
  			this._panAnim.on({\r
  				'step': this._onPanTransitionStep,\r
  				'end': this._onPanTransitionEnd\r
  			}, this);\r
  		}\r
\r
  		// don't fire movestart if animating inertia\r
  		if (!options.noMoveStart) {\r
  			this.fire('movestart');\r
  		}\r
\r
  		// animate pan unless animate: false specified\r
  		if (options.animate !== false) {\r
  			addClass(this._mapPane, 'leaflet-pan-anim');\r
\r
  			var newPos = this._getMapPanePos().subtract(offset).round();\r
  			this._panAnim.run(this._mapPane, newPos, options.duration || 0.25, options.easeLinearity);\r
  		} else {\r
  			this._rawPanBy(offset);\r
  			this.fire('move').fire('moveend');\r
  		}\r
\r
  		return this;\r
  	},\r
\r
  	// @method flyTo(latlng: LatLng, zoom?: Number, options?: Zoom/pan options): this\r
  	// Sets the view of the map (geographical center and zoom) performing a smooth\r
  	// pan-zoom animation.\r
  	flyTo: function (targetCenter, targetZoom, options) {\r
\r
  		options = options || {};\r
  		if (options.animate === false || !Browser.any3d) {\r
  			return this.setView(targetCenter, targetZoom, options);\r
  		}\r
\r
  		this._stop();\r
\r
  		var from = this.project(this.getCenter()),\r
  		    to = this.project(targetCenter),\r
  		    size = this.getSize(),\r
  		    startZoom = this._zoom;\r
\r
  		targetCenter = toLatLng(targetCenter);\r
  		targetZoom = targetZoom === undefined ? startZoom : targetZoom;\r
\r
  		var w0 = Math.max(size.x, size.y),\r
  		    w1 = w0 * this.getZoomScale(startZoom, targetZoom),\r
  		    u1 = (to.distanceTo(from)) || 1,\r
  		    rho = 1.42,\r
  		    rho2 = rho * rho;\r
\r
  		function r(i) {\r
  			var s1 = i ? -1 : 1,\r
  			    s2 = i ? w1 : w0,\r
  			    t1 = w1 * w1 - w0 * w0 + s1 * rho2 * rho2 * u1 * u1,\r
  			    b1 = 2 * s2 * rho2 * u1,\r
  			    b = t1 / b1,\r
  			    sq = Math.sqrt(b * b + 1) - b;\r
\r
  			    // workaround for floating point precision bug when sq = 0, log = -Infinite,\r
  			    // thus triggering an infinite loop in flyTo\r
  			    var log = sq < 0.000000001 ? -18 : Math.log(sq);\r
\r
  			return log;\r
  		}\r
\r
  		function sinh(n) { return (Math.exp(n) - Math.exp(-n)) / 2; }\r
  		function cosh(n) { return (Math.exp(n) + Math.exp(-n)) / 2; }\r
  		function tanh(n) { return sinh(n) / cosh(n); }\r
\r
  		var r0 = r(0);\r
\r
  		function w(s) { return w0 * (cosh(r0) / cosh(r0 + rho * s)); }\r
  		function u(s) { return w0 * (cosh(r0) * tanh(r0 + rho * s) - sinh(r0)) / rho2; }\r
\r
  		function easeOut(t) { return 1 - Math.pow(1 - t, 1.5); }\r
\r
  		var start = Date.now(),\r
  		    S = (r(1) - r0) / rho,\r
  		    duration = options.duration ? 1000 * options.duration : 1000 * S * 0.8;\r
\r
  		function frame() {\r
  			var t = (Date.now() - start) / duration,\r
  			    s = easeOut(t) * S;\r
\r
  			if (t <= 1) {\r
  				this._flyToFrame = requestAnimFrame(frame, this);\r
\r
  				this._move(\r
  					this.unproject(from.add(to.subtract(from).multiplyBy(u(s) / u1)), startZoom),\r
  					this.getScaleZoom(w0 / w(s), startZoom),\r
  					{flyTo: true});\r
\r
  			} else {\r
  				this\r
  					._move(targetCenter, targetZoom)\r
  					._moveEnd(true);\r
  			}\r
  		}\r
\r
  		this._moveStart(true, options.noMoveStart);\r
\r
  		frame.call(this);\r
  		return this;\r
  	},\r
\r
  	// @method flyToBounds(bounds: LatLngBounds, options?: fitBounds options): this\r
  	// Sets the view of the map with a smooth animation like [\`flyTo\`](#map-flyto),\r
  	// but takes a bounds parameter like [\`fitBounds\`](#map-fitbounds).\r
  	flyToBounds: function (bounds, options) {\r
  		var target = this._getBoundsCenterZoom(bounds, options);\r
  		return this.flyTo(target.center, target.zoom, options);\r
  	},\r
\r
  	// @method setMaxBounds(bounds: LatLngBounds): this\r
  	// Restricts the map view to the given bounds (see the [maxBounds](#map-maxbounds) option).\r
  	setMaxBounds: function (bounds) {\r
  		bounds = toLatLngBounds(bounds);\r
\r
  		if (this.listens('moveend', this._panInsideMaxBounds)) {\r
  			this.off('moveend', this._panInsideMaxBounds);\r
  		}\r
\r
  		if (!bounds.isValid()) {\r
  			this.options.maxBounds = null;\r
  			return this;\r
  		}\r
\r
  		this.options.maxBounds = bounds;\r
\r
  		if (this._loaded) {\r
  			this._panInsideMaxBounds();\r
  		}\r
\r
  		return this.on('moveend', this._panInsideMaxBounds);\r
  	},\r
\r
  	// @method setMinZoom(zoom: Number): this\r
  	// Sets the lower limit for the available zoom levels (see the [minZoom](#map-minzoom) option).\r
  	setMinZoom: function (zoom) {\r
  		var oldZoom = this.options.minZoom;\r
  		this.options.minZoom = zoom;\r
\r
  		if (this._loaded && oldZoom !== zoom) {\r
  			this.fire('zoomlevelschange');\r
\r
  			if (this.getZoom() < this.options.minZoom) {\r
  				return this.setZoom(zoom);\r
  			}\r
  		}\r
\r
  		return this;\r
  	},\r
\r
  	// @method setMaxZoom(zoom: Number): this\r
  	// Sets the upper limit for the available zoom levels (see the [maxZoom](#map-maxzoom) option).\r
  	setMaxZoom: function (zoom) {\r
  		var oldZoom = this.options.maxZoom;\r
  		this.options.maxZoom = zoom;\r
\r
  		if (this._loaded && oldZoom !== zoom) {\r
  			this.fire('zoomlevelschange');\r
\r
  			if (this.getZoom() > this.options.maxZoom) {\r
  				return this.setZoom(zoom);\r
  			}\r
  		}\r
\r
  		return this;\r
  	},\r
\r
  	// @method panInsideBounds(bounds: LatLngBounds, options?: Pan options): this\r
  	// Pans the map to the closest view that would lie inside the given bounds (if it's not already), controlling the animation using the options specific, if any.\r
  	panInsideBounds: function (bounds, options) {\r
  		this._enforcingBounds = true;\r
  		var center = this.getCenter(),\r
  		    newCenter = this._limitCenter(center, this._zoom, toLatLngBounds(bounds));\r
\r
  		if (!center.equals(newCenter)) {\r
  			this.panTo(newCenter, options);\r
  		}\r
\r
  		this._enforcingBounds = false;\r
  		return this;\r
  	},\r
\r
  	// @method panInside(latlng: LatLng, options?: padding options): this\r
  	// Pans the map the minimum amount to make the \`latlng\` visible. Use\r
  	// padding options to fit the display to more restricted bounds.\r
  	// If \`latlng\` is already within the (optionally padded) display bounds,\r
  	// the map will not be panned.\r
  	panInside: function (latlng, options) {\r
  		options = options || {};\r
\r
  		var paddingTL = toPoint(options.paddingTopLeft || options.padding || [0, 0]),\r
  		    paddingBR = toPoint(options.paddingBottomRight || options.padding || [0, 0]),\r
  		    pixelCenter = this.project(this.getCenter()),\r
  		    pixelPoint = this.project(latlng),\r
  		    pixelBounds = this.getPixelBounds(),\r
  		    paddedBounds = toBounds([pixelBounds.min.add(paddingTL), pixelBounds.max.subtract(paddingBR)]),\r
  		    paddedSize = paddedBounds.getSize();\r
\r
  		if (!paddedBounds.contains(pixelPoint)) {\r
  			this._enforcingBounds = true;\r
  			var centerOffset = pixelPoint.subtract(paddedBounds.getCenter());\r
  			var offset = paddedBounds.extend(pixelPoint).getSize().subtract(paddedSize);\r
  			pixelCenter.x += centerOffset.x < 0 ? -offset.x : offset.x;\r
  			pixelCenter.y += centerOffset.y < 0 ? -offset.y : offset.y;\r
  			this.panTo(this.unproject(pixelCenter), options);\r
  			this._enforcingBounds = false;\r
  		}\r
  		return this;\r
  	},\r
\r
  	// @method invalidateSize(options: Zoom/pan options): this\r
  	// Checks if the map container size changed and updates the map if so \u2014\r
  	// call it after you've changed the map size dynamically, also animating\r
  	// pan by default. If \`options.pan\` is \`false\`, panning will not occur.\r
  	// If \`options.debounceMoveend\` is \`true\`, it will delay \`moveend\` event so\r
  	// that it doesn't happen often even if the method is called many\r
  	// times in a row.\r
\r
  	// @alternative\r
  	// @method invalidateSize(animate: Boolean): this\r
  	// Checks if the map container size changed and updates the map if so \u2014\r
  	// call it after you've changed the map size dynamically, also animating\r
  	// pan by default.\r
  	invalidateSize: function (options) {\r
  		if (!this._loaded) { return this; }\r
\r
  		options = extend({\r
  			animate: false,\r
  			pan: true\r
  		}, options === true ? {animate: true} : options);\r
\r
  		var oldSize = this.getSize();\r
  		this._sizeChanged = true;\r
  		this._lastCenter = null;\r
\r
  		var newSize = this.getSize(),\r
  		    oldCenter = oldSize.divideBy(2).round(),\r
  		    newCenter = newSize.divideBy(2).round(),\r
  		    offset = oldCenter.subtract(newCenter);\r
\r
  		if (!offset.x && !offset.y) { return this; }\r
\r
  		if (options.animate && options.pan) {\r
  			this.panBy(offset);\r
\r
  		} else {\r
  			if (options.pan) {\r
  				this._rawPanBy(offset);\r
  			}\r
\r
  			this.fire('move');\r
\r
  			if (options.debounceMoveend) {\r
  				clearTimeout(this._sizeTimer);\r
  				this._sizeTimer = setTimeout(bind(this.fire, this, 'moveend'), 200);\r
  			} else {\r
  				this.fire('moveend');\r
  			}\r
  		}\r
\r
  		// @section Map state change events\r
  		// @event resize: ResizeEvent\r
  		// Fired when the map is resized.\r
  		return this.fire('resize', {\r
  			oldSize: oldSize,\r
  			newSize: newSize\r
  		});\r
  	},\r
\r
  	// @section Methods for modifying map state\r
  	// @method stop(): this\r
  	// Stops the currently running \`panTo\` or \`flyTo\` animation, if any.\r
  	stop: function () {\r
  		this.setZoom(this._limitZoom(this._zoom));\r
  		if (!this.options.zoomSnap) {\r
  			this.fire('viewreset');\r
  		}\r
  		return this._stop();\r
  	},\r
\r
  	// @section Geolocation methods\r
  	// @method locate(options?: Locate options): this\r
  	// Tries to locate the user using the Geolocation API, firing a [\`locationfound\`](#map-locationfound)\r
  	// event with location data on success or a [\`locationerror\`](#map-locationerror) event on failure,\r
  	// and optionally sets the map view to the user's location with respect to\r
  	// detection accuracy (or to the world view if geolocation failed).\r
  	// Note that, if your page doesn't use HTTPS, this method will fail in\r
  	// modern browsers ([Chrome 50 and newer](https://sites.google.com/a/chromium.org/dev/Home/chromium-security/deprecating-powerful-features-on-insecure-origins))\r
  	// See \`Locate options\` for more details.\r
  	locate: function (options) {\r
\r
  		options = this._locateOptions = extend({\r
  			timeout: 10000,\r
  			watch: false\r
  			// setView: false\r
  			// maxZoom: <Number>\r
  			// maximumAge: 0\r
  			// enableHighAccuracy: false\r
  		}, options);\r
\r
  		if (!('geolocation' in navigator)) {\r
  			this._handleGeolocationError({\r
  				code: 0,\r
  				message: 'Geolocation not supported.'\r
  			});\r
  			return this;\r
  		}\r
\r
  		var onResponse = bind(this._handleGeolocationResponse, this),\r
  		    onError = bind(this._handleGeolocationError, this);\r
\r
  		if (options.watch) {\r
  			this._locationWatchId =\r
  			        navigator.geolocation.watchPosition(onResponse, onError, options);\r
  		} else {\r
  			navigator.geolocation.getCurrentPosition(onResponse, onError, options);\r
  		}\r
  		return this;\r
  	},\r
\r
  	// @method stopLocate(): this\r
  	// Stops watching location previously initiated by \`map.locate({watch: true})\`\r
  	// and aborts resetting the map view if map.locate was called with\r
  	// \`{setView: true}\`.\r
  	stopLocate: function () {\r
  		if (navigator.geolocation && navigator.geolocation.clearWatch) {\r
  			navigator.geolocation.clearWatch(this._locationWatchId);\r
  		}\r
  		if (this._locateOptions) {\r
  			this._locateOptions.setView = false;\r
  		}\r
  		return this;\r
  	},\r
\r
  	_handleGeolocationError: function (error) {\r
  		if (!this._container._leaflet_id) { return; }\r
\r
  		var c = error.code,\r
  		    message = error.message ||\r
  		            (c === 1 ? 'permission denied' :\r
  		            (c === 2 ? 'position unavailable' : 'timeout'));\r
\r
  		if (this._locateOptions.setView && !this._loaded) {\r
  			this.fitWorld();\r
  		}\r
\r
  		// @section Location events\r
  		// @event locationerror: ErrorEvent\r
  		// Fired when geolocation (using the [\`locate\`](#map-locate) method) failed.\r
  		this.fire('locationerror', {\r
  			code: c,\r
  			message: 'Geolocation error: ' + message + '.'\r
  		});\r
  	},\r
\r
  	_handleGeolocationResponse: function (pos) {\r
  		if (!this._container._leaflet_id) { return; }\r
\r
  		var lat = pos.coords.latitude,\r
  		    lng = pos.coords.longitude,\r
  		    latlng = new LatLng(lat, lng),\r
  		    bounds = latlng.toBounds(pos.coords.accuracy * 2),\r
  		    options = this._locateOptions;\r
\r
  		if (options.setView) {\r
  			var zoom = this.getBoundsZoom(bounds);\r
  			this.setView(latlng, options.maxZoom ? Math.min(zoom, options.maxZoom) : zoom);\r
  		}\r
\r
  		var data = {\r
  			latlng: latlng,\r
  			bounds: bounds,\r
  			timestamp: pos.timestamp\r
  		};\r
\r
  		for (var i in pos.coords) {\r
  			if (typeof pos.coords[i] === 'number') {\r
  				data[i] = pos.coords[i];\r
  			}\r
  		}\r
\r
  		// @event locationfound: LocationEvent\r
  		// Fired when geolocation (using the [\`locate\`](#map-locate) method)\r
  		// went successfully.\r
  		this.fire('locationfound', data);\r
  	},\r
\r
  	// TODO Appropriate docs section?\r
  	// @section Other Methods\r
  	// @method addHandler(name: String, HandlerClass: Function): this\r
  	// Adds a new \`Handler\` to the map, given its name and constructor function.\r
  	addHandler: function (name, HandlerClass) {\r
  		if (!HandlerClass) { return this; }\r
\r
  		var handler = this[name] = new HandlerClass(this);\r
\r
  		this._handlers.push(handler);\r
\r
  		if (this.options[name]) {\r
  			handler.enable();\r
  		}\r
\r
  		return this;\r
  	},\r
\r
  	// @method remove(): this\r
  	// Destroys the map and clears all related event listeners.\r
  	remove: function () {\r
\r
  		this._initEvents(true);\r
  		if (this.options.maxBounds) { this.off('moveend', this._panInsideMaxBounds); }\r
\r
  		if (this._containerId !== this._container._leaflet_id) {\r
  			throw new Error('Map container is being reused by another instance');\r
  		}\r
\r
  		try {\r
  			// throws error in IE6-8\r
  			delete this._container._leaflet_id;\r
  			delete this._containerId;\r
  		} catch (e) {\r
  			/*eslint-disable */\r
  			this._container._leaflet_id = undefined;\r
  			/* eslint-enable */\r
  			this._containerId = undefined;\r
  		}\r
\r
  		if (this._locationWatchId !== undefined) {\r
  			this.stopLocate();\r
  		}\r
\r
  		this._stop();\r
\r
  		remove(this._mapPane);\r
\r
  		if (this._clearControlPos) {\r
  			this._clearControlPos();\r
  		}\r
  		if (this._resizeRequest) {\r
  			cancelAnimFrame(this._resizeRequest);\r
  			this._resizeRequest = null;\r
  		}\r
\r
  		this._clearHandlers();\r
\r
  		if (this._loaded) {\r
  			// @section Map state change events\r
  			// @event unload: Event\r
  			// Fired when the map is destroyed with [remove](#map-remove) method.\r
  			this.fire('unload');\r
  		}\r
\r
  		var i;\r
  		for (i in this._layers) {\r
  			this._layers[i].remove();\r
  		}\r
  		for (i in this._panes) {\r
  			remove(this._panes[i]);\r
  		}\r
\r
  		this._layers = [];\r
  		this._panes = [];\r
  		delete this._mapPane;\r
  		delete this._renderer;\r
\r
  		return this;\r
  	},\r
\r
  	// @section Other Methods\r
  	// @method createPane(name: String, container?: HTMLElement): HTMLElement\r
  	// Creates a new [map pane](#map-pane) with the given name if it doesn't exist already,\r
  	// then returns it. The pane is created as a child of \`container\`, or\r
  	// as a child of the main map pane if not set.\r
  	createPane: function (name, container) {\r
  		var className = 'leaflet-pane' + (name ? ' leaflet-' + name.replace('Pane', '') + '-pane' : ''),\r
  		    pane = create$1('div', className, container || this._mapPane);\r
\r
  		if (name) {\r
  			this._panes[name] = pane;\r
  		}\r
  		return pane;\r
  	},\r
\r
  	// @section Methods for Getting Map State\r
\r
  	// @method getCenter(): LatLng\r
  	// Returns the geographical center of the map view\r
  	getCenter: function () {\r
  		this._checkIfLoaded();\r
\r
  		if (this._lastCenter && !this._moved()) {\r
  			return this._lastCenter.clone();\r
  		}\r
  		return this.layerPointToLatLng(this._getCenterLayerPoint());\r
  	},\r
\r
  	// @method getZoom(): Number\r
  	// Returns the current zoom level of the map view\r
  	getZoom: function () {\r
  		return this._zoom;\r
  	},\r
\r
  	// @method getBounds(): LatLngBounds\r
  	// Returns the geographical bounds visible in the current map view\r
  	getBounds: function () {\r
  		var bounds = this.getPixelBounds(),\r
  		    sw = this.unproject(bounds.getBottomLeft()),\r
  		    ne = this.unproject(bounds.getTopRight());\r
\r
  		return new LatLngBounds(sw, ne);\r
  	},\r
\r
  	// @method getMinZoom(): Number\r
  	// Returns the minimum zoom level of the map (if set in the \`minZoom\` option of the map or of any layers), or \`0\` by default.\r
  	getMinZoom: function () {\r
  		return this.options.minZoom === undefined ? this._layersMinZoom || 0 : this.options.minZoom;\r
  	},\r
\r
  	// @method getMaxZoom(): Number\r
  	// Returns the maximum zoom level of the map (if set in the \`maxZoom\` option of the map or of any layers).\r
  	getMaxZoom: function () {\r
  		return this.options.maxZoom === undefined ?\r
  			(this._layersMaxZoom === undefined ? Infinity : this._layersMaxZoom) :\r
  			this.options.maxZoom;\r
  	},\r
\r
  	// @method getBoundsZoom(bounds: LatLngBounds, inside?: Boolean, padding?: Point): Number\r
  	// Returns the maximum zoom level on which the given bounds fit to the map\r
  	// view in its entirety. If \`inside\` (optional) is set to \`true\`, the method\r
  	// instead returns the minimum zoom level on which the map view fits into\r
  	// the given bounds in its entirety.\r
  	getBoundsZoom: function (bounds, inside, padding) { // (LatLngBounds[, Boolean, Point]) -> Number\r
  		bounds = toLatLngBounds(bounds);\r
  		padding = toPoint(padding || [0, 0]);\r
\r
  		var zoom = this.getZoom() || 0,\r
  		    min = this.getMinZoom(),\r
  		    max = this.getMaxZoom(),\r
  		    nw = bounds.getNorthWest(),\r
  		    se = bounds.getSouthEast(),\r
  		    size = this.getSize().subtract(padding),\r
  		    boundsSize = toBounds(this.project(se, zoom), this.project(nw, zoom)).getSize(),\r
  		    snap = Browser.any3d ? this.options.zoomSnap : 1,\r
  		    scalex = size.x / boundsSize.x,\r
  		    scaley = size.y / boundsSize.y,\r
  		    scale = inside ? Math.max(scalex, scaley) : Math.min(scalex, scaley);\r
\r
  		zoom = this.getScaleZoom(scale, zoom);\r
\r
  		if (snap) {\r
  			zoom = Math.round(zoom / (snap / 100)) * (snap / 100); // don't jump if within 1% of a snap level\r
  			zoom = inside ? Math.ceil(zoom / snap) * snap : Math.floor(zoom / snap) * snap;\r
  		}\r
\r
  		return Math.max(min, Math.min(max, zoom));\r
  	},\r
\r
  	// @method getSize(): Point\r
  	// Returns the current size of the map container (in pixels).\r
  	getSize: function () {\r
  		if (!this._size || this._sizeChanged) {\r
  			this._size = new Point(\r
  				this._container.clientWidth || 0,\r
  				this._container.clientHeight || 0);\r
\r
  			this._sizeChanged = false;\r
  		}\r
  		return this._size.clone();\r
  	},\r
\r
  	// @method getPixelBounds(): Bounds\r
  	// Returns the bounds of the current map view in projected pixel\r
  	// coordinates (sometimes useful in layer and overlay implementations).\r
  	getPixelBounds: function (center, zoom) {\r
  		var topLeftPoint = this._getTopLeftPoint(center, zoom);\r
  		return new Bounds(topLeftPoint, topLeftPoint.add(this.getSize()));\r
  	},\r
\r
  	// TODO: Check semantics - isn't the pixel origin the 0,0 coord relative to\r
  	// the map pane? "left point of the map layer" can be confusing, specially\r
  	// since there can be negative offsets.\r
  	// @method getPixelOrigin(): Point\r
  	// Returns the projected pixel coordinates of the top left point of\r
  	// the map layer (useful in custom layer and overlay implementations).\r
  	getPixelOrigin: function () {\r
  		this._checkIfLoaded();\r
  		return this._pixelOrigin;\r
  	},\r
\r
  	// @method getPixelWorldBounds(zoom?: Number): Bounds\r
  	// Returns the world's bounds in pixel coordinates for zoom level \`zoom\`.\r
  	// If \`zoom\` is omitted, the map's current zoom level is used.\r
  	getPixelWorldBounds: function (zoom) {\r
  		return this.options.crs.getProjectedBounds(zoom === undefined ? this.getZoom() : zoom);\r
  	},\r
\r
  	// @section Other Methods\r
\r
  	// @method getPane(pane: String|HTMLElement): HTMLElement\r
  	// Returns a [map pane](#map-pane), given its name or its HTML element (its identity).\r
  	getPane: function (pane) {\r
  		return typeof pane === 'string' ? this._panes[pane] : pane;\r
  	},\r
\r
  	// @method getPanes(): Object\r
  	// Returns a plain object containing the names of all [panes](#map-pane) as keys and\r
  	// the panes as values.\r
  	getPanes: function () {\r
  		return this._panes;\r
  	},\r
\r
  	// @method getContainer: HTMLElement\r
  	// Returns the HTML element that contains the map.\r
  	getContainer: function () {\r
  		return this._container;\r
  	},\r
\r
\r
  	// @section Conversion Methods\r
\r
  	// @method getZoomScale(toZoom: Number, fromZoom: Number): Number\r
  	// Returns the scale factor to be applied to a map transition from zoom level\r
  	// \`fromZoom\` to \`toZoom\`. Used internally to help with zoom animations.\r
  	getZoomScale: function (toZoom, fromZoom) {\r
  		// TODO replace with universal implementation after refactoring projections\r
  		var crs = this.options.crs;\r
  		fromZoom = fromZoom === undefined ? this._zoom : fromZoom;\r
  		return crs.scale(toZoom) / crs.scale(fromZoom);\r
  	},\r
\r
  	// @method getScaleZoom(scale: Number, fromZoom: Number): Number\r
  	// Returns the zoom level that the map would end up at, if it is at \`fromZoom\`\r
  	// level and everything is scaled by a factor of \`scale\`. Inverse of\r
  	// [\`getZoomScale\`](#map-getZoomScale).\r
  	getScaleZoom: function (scale, fromZoom) {\r
  		var crs = this.options.crs;\r
  		fromZoom = fromZoom === undefined ? this._zoom : fromZoom;\r
  		var zoom = crs.zoom(scale * crs.scale(fromZoom));\r
  		return isNaN(zoom) ? Infinity : zoom;\r
  	},\r
\r
  	// @method project(latlng: LatLng, zoom: Number): Point\r
  	// Projects a geographical coordinate \`LatLng\` according to the projection\r
  	// of the map's CRS, then scales it according to \`zoom\` and the CRS's\r
  	// \`Transformation\`. The result is pixel coordinate relative to\r
  	// the CRS origin.\r
  	project: function (latlng, zoom) {\r
  		zoom = zoom === undefined ? this._zoom : zoom;\r
  		return this.options.crs.latLngToPoint(toLatLng(latlng), zoom);\r
  	},\r
\r
  	// @method unproject(point: Point, zoom: Number): LatLng\r
  	// Inverse of [\`project\`](#map-project).\r
  	unproject: function (point, zoom) {\r
  		zoom = zoom === undefined ? this._zoom : zoom;\r
  		return this.options.crs.pointToLatLng(toPoint(point), zoom);\r
  	},\r
\r
  	// @method layerPointToLatLng(point: Point): LatLng\r
  	// Given a pixel coordinate relative to the [origin pixel](#map-getpixelorigin),\r
  	// returns the corresponding geographical coordinate (for the current zoom level).\r
  	layerPointToLatLng: function (point) {\r
  		var projectedPoint = toPoint(point).add(this.getPixelOrigin());\r
  		return this.unproject(projectedPoint);\r
  	},\r
\r
  	// @method latLngToLayerPoint(latlng: LatLng): Point\r
  	// Given a geographical coordinate, returns the corresponding pixel coordinate\r
  	// relative to the [origin pixel](#map-getpixelorigin).\r
  	latLngToLayerPoint: function (latlng) {\r
  		var projectedPoint = this.project(toLatLng(latlng))._round();\r
  		return projectedPoint._subtract(this.getPixelOrigin());\r
  	},\r
\r
  	// @method wrapLatLng(latlng: LatLng): LatLng\r
  	// Returns a \`LatLng\` where \`lat\` and \`lng\` has been wrapped according to the\r
  	// map's CRS's \`wrapLat\` and \`wrapLng\` properties, if they are outside the\r
  	// CRS's bounds.\r
  	// By default this means longitude is wrapped around the dateline so its\r
  	// value is between -180 and +180 degrees.\r
  	wrapLatLng: function (latlng) {\r
  		return this.options.crs.wrapLatLng(toLatLng(latlng));\r
  	},\r
\r
  	// @method wrapLatLngBounds(bounds: LatLngBounds): LatLngBounds\r
  	// Returns a \`LatLngBounds\` with the same size as the given one, ensuring that\r
  	// its center is within the CRS's bounds.\r
  	// By default this means the center longitude is wrapped around the dateline so its\r
  	// value is between -180 and +180 degrees, and the majority of the bounds\r
  	// overlaps the CRS's bounds.\r
  	wrapLatLngBounds: function (latlng) {\r
  		return this.options.crs.wrapLatLngBounds(toLatLngBounds(latlng));\r
  	},\r
\r
  	// @method distance(latlng1: LatLng, latlng2: LatLng): Number\r
  	// Returns the distance between two geographical coordinates according to\r
  	// the map's CRS. By default this measures distance in meters.\r
  	distance: function (latlng1, latlng2) {\r
  		return this.options.crs.distance(toLatLng(latlng1), toLatLng(latlng2));\r
  	},\r
\r
  	// @method containerPointToLayerPoint(point: Point): Point\r
  	// Given a pixel coordinate relative to the map container, returns the corresponding\r
  	// pixel coordinate relative to the [origin pixel](#map-getpixelorigin).\r
  	containerPointToLayerPoint: function (point) { // (Point)\r
  		return toPoint(point).subtract(this._getMapPanePos());\r
  	},\r
\r
  	// @method layerPointToContainerPoint(point: Point): Point\r
  	// Given a pixel coordinate relative to the [origin pixel](#map-getpixelorigin),\r
  	// returns the corresponding pixel coordinate relative to the map container.\r
  	layerPointToContainerPoint: function (point) { // (Point)\r
  		return toPoint(point).add(this._getMapPanePos());\r
  	},\r
\r
  	// @method containerPointToLatLng(point: Point): LatLng\r
  	// Given a pixel coordinate relative to the map container, returns\r
  	// the corresponding geographical coordinate (for the current zoom level).\r
  	containerPointToLatLng: function (point) {\r
  		var layerPoint = this.containerPointToLayerPoint(toPoint(point));\r
  		return this.layerPointToLatLng(layerPoint);\r
  	},\r
\r
  	// @method latLngToContainerPoint(latlng: LatLng): Point\r
  	// Given a geographical coordinate, returns the corresponding pixel coordinate\r
  	// relative to the map container.\r
  	latLngToContainerPoint: function (latlng) {\r
  		return this.layerPointToContainerPoint(this.latLngToLayerPoint(toLatLng(latlng)));\r
  	},\r
\r
  	// @method mouseEventToContainerPoint(ev: MouseEvent): Point\r
  	// Given a MouseEvent object, returns the pixel coordinate relative to the\r
  	// map container where the event took place.\r
  	mouseEventToContainerPoint: function (e) {\r
  		return getMousePosition(e, this._container);\r
  	},\r
\r
  	// @method mouseEventToLayerPoint(ev: MouseEvent): Point\r
  	// Given a MouseEvent object, returns the pixel coordinate relative to\r
  	// the [origin pixel](#map-getpixelorigin) where the event took place.\r
  	mouseEventToLayerPoint: function (e) {\r
  		return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(e));\r
  	},\r
\r
  	// @method mouseEventToLatLng(ev: MouseEvent): LatLng\r
  	// Given a MouseEvent object, returns geographical coordinate where the\r
  	// event took place.\r
  	mouseEventToLatLng: function (e) { // (MouseEvent)\r
  		return this.layerPointToLatLng(this.mouseEventToLayerPoint(e));\r
  	},\r
\r
\r
  	// map initialization methods\r
\r
  	_initContainer: function (id) {\r
  		var container = this._container = get(id);\r
\r
  		if (!container) {\r
  			throw new Error('Map container not found.');\r
  		} else if (container._leaflet_id) {\r
  			throw new Error('Map container is already initialized.');\r
  		}\r
\r
  		on(container, 'scroll', this._onScroll, this);\r
  		this._containerId = stamp(container);\r
  	},\r
\r
  	_initLayout: function () {\r
  		var container = this._container;\r
\r
  		this._fadeAnimated = this.options.fadeAnimation && Browser.any3d;\r
\r
  		addClass(container, 'leaflet-container' +\r
  			(Browser.touch ? ' leaflet-touch' : '') +\r
  			(Browser.retina ? ' leaflet-retina' : '') +\r
  			(Browser.ielt9 ? ' leaflet-oldie' : '') +\r
  			(Browser.safari ? ' leaflet-safari' : '') +\r
  			(this._fadeAnimated ? ' leaflet-fade-anim' : ''));\r
\r
  		var position = getStyle(container, 'position');\r
\r
  		if (position !== 'absolute' && position !== 'relative' && position !== 'fixed' && position !== 'sticky') {\r
  			container.style.position = 'relative';\r
  		}\r
\r
  		this._initPanes();\r
\r
  		if (this._initControlPos) {\r
  			this._initControlPos();\r
  		}\r
  	},\r
\r
  	_initPanes: function () {\r
  		var panes = this._panes = {};\r
  		this._paneRenderers = {};\r
\r
  		// @section\r
  		//\r
  		// Panes are DOM elements used to control the ordering of layers on the map. You\r
  		// can access panes with [\`map.getPane\`](#map-getpane) or\r
  		// [\`map.getPanes\`](#map-getpanes) methods. New panes can be created with the\r
  		// [\`map.createPane\`](#map-createpane) method.\r
  		//\r
  		// Every map has the following default panes that differ only in zIndex.\r
  		//\r
  		// @pane mapPane: HTMLElement = 'auto'\r
  		// Pane that contains all other map panes\r
\r
  		this._mapPane = this.createPane('mapPane', this._container);\r
  		setPosition(this._mapPane, new Point(0, 0));\r
\r
  		// @pane tilePane: HTMLElement = 200\r
  		// Pane for \`GridLayer\`s and \`TileLayer\`s\r
  		this.createPane('tilePane');\r
  		// @pane overlayPane: HTMLElement = 400\r
  		// Pane for vectors (\`Path\`s, like \`Polyline\`s and \`Polygon\`s), \`ImageOverlay\`s and \`VideoOverlay\`s\r
  		this.createPane('overlayPane');\r
  		// @pane shadowPane: HTMLElement = 500\r
  		// Pane for overlay shadows (e.g. \`Marker\` shadows)\r
  		this.createPane('shadowPane');\r
  		// @pane markerPane: HTMLElement = 600\r
  		// Pane for \`Icon\`s of \`Marker\`s\r
  		this.createPane('markerPane');\r
  		// @pane tooltipPane: HTMLElement = 650\r
  		// Pane for \`Tooltip\`s.\r
  		this.createPane('tooltipPane');\r
  		// @pane popupPane: HTMLElement = 700\r
  		// Pane for \`Popup\`s.\r
  		this.createPane('popupPane');\r
\r
  		if (!this.options.markerZoomAnimation) {\r
  			addClass(panes.markerPane, 'leaflet-zoom-hide');\r
  			addClass(panes.shadowPane, 'leaflet-zoom-hide');\r
  		}\r
  	},\r
\r
\r
  	// private methods that modify map state\r
\r
  	// @section Map state change events\r
  	_resetView: function (center, zoom, noMoveStart) {\r
  		setPosition(this._mapPane, new Point(0, 0));\r
\r
  		var loading = !this._loaded;\r
  		this._loaded = true;\r
  		zoom = this._limitZoom(zoom);\r
\r
  		this.fire('viewprereset');\r
\r
  		var zoomChanged = this._zoom !== zoom;\r
  		this\r
  			._moveStart(zoomChanged, noMoveStart)\r
  			._move(center, zoom)\r
  			._moveEnd(zoomChanged);\r
\r
  		// @event viewreset: Event\r
  		// Fired when the map needs to redraw its content (this usually happens\r
  		// on map zoom or load). Very useful for creating custom overlays.\r
  		this.fire('viewreset');\r
\r
  		// @event load: Event\r
  		// Fired when the map is initialized (when its center and zoom are set\r
  		// for the first time).\r
  		if (loading) {\r
  			this.fire('load');\r
  		}\r
  	},\r
\r
  	_moveStart: function (zoomChanged, noMoveStart) {\r
  		// @event zoomstart: Event\r
  		// Fired when the map zoom is about to change (e.g. before zoom animation).\r
  		// @event movestart: Event\r
  		// Fired when the view of the map starts changing (e.g. user starts dragging the map).\r
  		if (zoomChanged) {\r
  			this.fire('zoomstart');\r
  		}\r
  		if (!noMoveStart) {\r
  			this.fire('movestart');\r
  		}\r
  		return this;\r
  	},\r
\r
  	_move: function (center, zoom, data, supressEvent) {\r
  		if (zoom === undefined) {\r
  			zoom = this._zoom;\r
  		}\r
  		var zoomChanged = this._zoom !== zoom;\r
\r
  		this._zoom = zoom;\r
  		this._lastCenter = center;\r
  		this._pixelOrigin = this._getNewPixelOrigin(center);\r
\r
  		if (!supressEvent) {\r
  			// @event zoom: Event\r
  			// Fired repeatedly during any change in zoom level,\r
  			// including zoom and fly animations.\r
  			if (zoomChanged || (data && data.pinch)) {	// Always fire 'zoom' if pinching because #3530\r
  				this.fire('zoom', data);\r
  			}\r
\r
  			// @event move: Event\r
  			// Fired repeatedly during any movement of the map,\r
  			// including pan and fly animations.\r
  			this.fire('move', data);\r
  		} else if (data && data.pinch) {	// Always fire 'zoom' if pinching because #3530\r
  			this.fire('zoom', data);\r
  		}\r
  		return this;\r
  	},\r
\r
  	_moveEnd: function (zoomChanged) {\r
  		// @event zoomend: Event\r
  		// Fired when the map zoom changed, after any animations.\r
  		if (zoomChanged) {\r
  			this.fire('zoomend');\r
  		}\r
\r
  		// @event moveend: Event\r
  		// Fired when the center of the map stops changing\r
  		// (e.g. user stopped dragging the map or after non-centered zoom).\r
  		return this.fire('moveend');\r
  	},\r
\r
  	_stop: function () {\r
  		cancelAnimFrame(this._flyToFrame);\r
  		if (this._panAnim) {\r
  			this._panAnim.stop();\r
  		}\r
  		return this;\r
  	},\r
\r
  	_rawPanBy: function (offset) {\r
  		setPosition(this._mapPane, this._getMapPanePos().subtract(offset));\r
  	},\r
\r
  	_getZoomSpan: function () {\r
  		return this.getMaxZoom() - this.getMinZoom();\r
  	},\r
\r
  	_panInsideMaxBounds: function () {\r
  		if (!this._enforcingBounds) {\r
  			this.panInsideBounds(this.options.maxBounds);\r
  		}\r
  	},\r
\r
  	_checkIfLoaded: function () {\r
  		if (!this._loaded) {\r
  			throw new Error('Set map center and zoom first.');\r
  		}\r
  	},\r
\r
  	// DOM event handling\r
\r
  	// @section Interaction events\r
  	_initEvents: function (remove) {\r
  		this._targets = {};\r
  		this._targets[stamp(this._container)] = this;\r
\r
  		var onOff = remove ? off : on;\r
\r
  		// @event click: MouseEvent\r
  		// Fired when the user clicks (or taps) the map.\r
  		// @event dblclick: MouseEvent\r
  		// Fired when the user double-clicks (or double-taps) the map.\r
  		// @event mousedown: MouseEvent\r
  		// Fired when the user pushes the mouse button on the map.\r
  		// @event mouseup: MouseEvent\r
  		// Fired when the user releases the mouse button on the map.\r
  		// @event mouseover: MouseEvent\r
  		// Fired when the mouse enters the map.\r
  		// @event mouseout: MouseEvent\r
  		// Fired when the mouse leaves the map.\r
  		// @event mousemove: MouseEvent\r
  		// Fired while the mouse moves over the map.\r
  		// @event contextmenu: MouseEvent\r
  		// Fired when the user pushes the right mouse button on the map, prevents\r
  		// default browser context menu from showing if there are listeners on\r
  		// this event. Also fired on mobile when the user holds a single touch\r
  		// for a second (also called long press).\r
  		// @event keypress: KeyboardEvent\r
  		// Fired when the user presses a key from the keyboard that produces a character value while the map is focused.\r
  		// @event keydown: KeyboardEvent\r
  		// Fired when the user presses a key from the keyboard while the map is focused. Unlike the \`keypress\` event,\r
  		// the \`keydown\` event is fired for keys that produce a character value and for keys\r
  		// that do not produce a character value.\r
  		// @event keyup: KeyboardEvent\r
  		// Fired when the user releases a key from the keyboard while the map is focused.\r
  		onOff(this._container, 'click dblclick mousedown mouseup ' +\r
  			'mouseover mouseout mousemove contextmenu keypress keydown keyup', this._handleDOMEvent, this);\r
\r
  		if (this.options.trackResize) {\r
  			onOff(window, 'resize', this._onResize, this);\r
  		}\r
\r
  		if (Browser.any3d && this.options.transform3DLimit) {\r
  			(remove ? this.off : this.on).call(this, 'moveend', this._onMoveEnd);\r
  		}\r
  	},\r
\r
  	_onResize: function () {\r
  		cancelAnimFrame(this._resizeRequest);\r
  		this._resizeRequest = requestAnimFrame(\r
  		        function () { this.invalidateSize({debounceMoveend: true}); }, this);\r
  	},\r
\r
  	_onScroll: function () {\r
  		this._container.scrollTop  = 0;\r
  		this._container.scrollLeft = 0;\r
  	},\r
\r
  	_onMoveEnd: function () {\r
  		var pos = this._getMapPanePos();\r
  		if (Math.max(Math.abs(pos.x), Math.abs(pos.y)) >= this.options.transform3DLimit) {\r
  			// https://bugzilla.mozilla.org/show_bug.cgi?id=1203873 but Webkit also have\r
  			// a pixel offset on very high values, see: https://jsfiddle.net/dg6r5hhb/\r
  			this._resetView(this.getCenter(), this.getZoom());\r
  		}\r
  	},\r
\r
  	_findEventTargets: function (e, type) {\r
  		var targets = [],\r
  		    target,\r
  		    isHover = type === 'mouseout' || type === 'mouseover',\r
  		    src = e.target || e.srcElement,\r
  		    dragging = false;\r
\r
  		while (src) {\r
  			target = this._targets[stamp(src)];\r
  			if (target && (type === 'click' || type === 'preclick') && this._draggableMoved(target)) {\r
  				// Prevent firing click after you just dragged an object.\r
  				dragging = true;\r
  				break;\r
  			}\r
  			if (target && target.listens(type, true)) {\r
  				if (isHover && !isExternalTarget(src, e)) { break; }\r
  				targets.push(target);\r
  				if (isHover) { break; }\r
  			}\r
  			if (src === this._container) { break; }\r
  			src = src.parentNode;\r
  		}\r
  		if (!targets.length && !dragging && !isHover && this.listens(type, true)) {\r
  			targets = [this];\r
  		}\r
  		return targets;\r
  	},\r
\r
  	_isClickDisabled: function (el) {\r
  		while (el && el !== this._container) {\r
  			if (el['_leaflet_disable_click']) { return true; }\r
  			el = el.parentNode;\r
  		}\r
  	},\r
\r
  	_handleDOMEvent: function (e) {\r
  		var el = (e.target || e.srcElement);\r
  		if (!this._loaded || el['_leaflet_disable_events'] || e.type === 'click' && this._isClickDisabled(el)) {\r
  			return;\r
  		}\r
\r
  		var type = e.type;\r
\r
  		if (type === 'mousedown') {\r
  			// prevents outline when clicking on keyboard-focusable element\r
  			preventOutline(el);\r
  		}\r
\r
  		this._fireDOMEvent(e, type);\r
  	},\r
\r
  	_mouseEvents: ['click', 'dblclick', 'mouseover', 'mouseout', 'contextmenu'],\r
\r
  	_fireDOMEvent: function (e, type, canvasTargets) {\r
\r
  		if (e.type === 'click') {\r
  			// Fire a synthetic 'preclick' event which propagates up (mainly for closing popups).\r
  			// @event preclick: MouseEvent\r
  			// Fired before mouse click on the map (sometimes useful when you\r
  			// want something to happen on click before any existing click\r
  			// handlers start running).\r
  			var synth = extend({}, e);\r
  			synth.type = 'preclick';\r
  			this._fireDOMEvent(synth, synth.type, canvasTargets);\r
  		}\r
\r
  		// Find the layer the event is propagating from and its parents.\r
  		var targets = this._findEventTargets(e, type);\r
\r
  		if (canvasTargets) {\r
  			var filtered = []; // pick only targets with listeners\r
  			for (var i = 0; i < canvasTargets.length; i++) {\r
  				if (canvasTargets[i].listens(type, true)) {\r
  					filtered.push(canvasTargets[i]);\r
  				}\r
  			}\r
  			targets = filtered.concat(targets);\r
  		}\r
\r
  		if (!targets.length) { return; }\r
\r
  		if (type === 'contextmenu') {\r
  			preventDefault(e);\r
  		}\r
\r
  		var target = targets[0];\r
  		var data = {\r
  			originalEvent: e\r
  		};\r
\r
  		if (e.type !== 'keypress' && e.type !== 'keydown' && e.type !== 'keyup') {\r
  			var isMarker = target.getLatLng && (!target._radius || target._radius <= 10);\r
  			data.containerPoint = isMarker ?\r
  				this.latLngToContainerPoint(target.getLatLng()) : this.mouseEventToContainerPoint(e);\r
  			data.layerPoint = this.containerPointToLayerPoint(data.containerPoint);\r
  			data.latlng = isMarker ? target.getLatLng() : this.layerPointToLatLng(data.layerPoint);\r
  		}\r
\r
  		for (i = 0; i < targets.length; i++) {\r
  			targets[i].fire(type, data, true);\r
  			if (data.originalEvent._stopped ||\r
  				(targets[i].options.bubblingMouseEvents === false && indexOf(this._mouseEvents, type) !== -1)) { return; }\r
  		}\r
  	},\r
\r
  	_draggableMoved: function (obj) {\r
  		obj = obj.dragging && obj.dragging.enabled() ? obj : this;\r
  		return (obj.dragging && obj.dragging.moved()) || (this.boxZoom && this.boxZoom.moved());\r
  	},\r
\r
  	_clearHandlers: function () {\r
  		for (var i = 0, len = this._handlers.length; i < len; i++) {\r
  			this._handlers[i].disable();\r
  		}\r
  	},\r
\r
  	// @section Other Methods\r
\r
  	// @method whenReady(fn: Function, context?: Object): this\r
  	// Runs the given function \`fn\` when the map gets initialized with\r
  	// a view (center and zoom) and at least one layer, or immediately\r
  	// if it's already initialized, optionally passing a function context.\r
  	whenReady: function (callback, context) {\r
  		if (this._loaded) {\r
  			callback.call(context || this, {target: this});\r
  		} else {\r
  			this.on('load', callback, context);\r
  		}\r
  		return this;\r
  	},\r
\r
\r
  	// private methods for getting map state\r
\r
  	_getMapPanePos: function () {\r
  		return getPosition(this._mapPane) || new Point(0, 0);\r
  	},\r
\r
  	_moved: function () {\r
  		var pos = this._getMapPanePos();\r
  		return pos && !pos.equals([0, 0]);\r
  	},\r
\r
  	_getTopLeftPoint: function (center, zoom) {\r
  		var pixelOrigin = center && zoom !== undefined ?\r
  			this._getNewPixelOrigin(center, zoom) :\r
  			this.getPixelOrigin();\r
  		return pixelOrigin.subtract(this._getMapPanePos());\r
  	},\r
\r
  	_getNewPixelOrigin: function (center, zoom) {\r
  		var viewHalf = this.getSize()._divideBy(2);\r
  		return this.project(center, zoom)._subtract(viewHalf)._add(this._getMapPanePos())._round();\r
  	},\r
\r
  	_latLngToNewLayerPoint: function (latlng, zoom, center) {\r
  		var topLeft = this._getNewPixelOrigin(center, zoom);\r
  		return this.project(latlng, zoom)._subtract(topLeft);\r
  	},\r
\r
  	_latLngBoundsToNewLayerBounds: function (latLngBounds, zoom, center) {\r
  		var topLeft = this._getNewPixelOrigin(center, zoom);\r
  		return toBounds([\r
  			this.project(latLngBounds.getSouthWest(), zoom)._subtract(topLeft),\r
  			this.project(latLngBounds.getNorthWest(), zoom)._subtract(topLeft),\r
  			this.project(latLngBounds.getSouthEast(), zoom)._subtract(topLeft),\r
  			this.project(latLngBounds.getNorthEast(), zoom)._subtract(topLeft)\r
  		]);\r
  	},\r
\r
  	// layer point of the current center\r
  	_getCenterLayerPoint: function () {\r
  		return this.containerPointToLayerPoint(this.getSize()._divideBy(2));\r
  	},\r
\r
  	// offset of the specified place to the current center in pixels\r
  	_getCenterOffset: function (latlng) {\r
  		return this.latLngToLayerPoint(latlng).subtract(this._getCenterLayerPoint());\r
  	},\r
\r
  	// adjust center for view to get inside bounds\r
  	_limitCenter: function (center, zoom, bounds) {\r
\r
  		if (!bounds) { return center; }\r
\r
  		var centerPoint = this.project(center, zoom),\r
  		    viewHalf = this.getSize().divideBy(2),\r
  		    viewBounds = new Bounds(centerPoint.subtract(viewHalf), centerPoint.add(viewHalf)),\r
  		    offset = this._getBoundsOffset(viewBounds, bounds, zoom);\r
\r
  		// If offset is less than a pixel, ignore.\r
  		// This prevents unstable projections from getting into\r
  		// an infinite loop of tiny offsets.\r
  		if (Math.abs(offset.x) <= 1 && Math.abs(offset.y) <= 1) {\r
  			return center;\r
  		}\r
\r
  		return this.unproject(centerPoint.add(offset), zoom);\r
  	},\r
\r
  	// adjust offset for view to get inside bounds\r
  	_limitOffset: function (offset, bounds) {\r
  		if (!bounds) { return offset; }\r
\r
  		var viewBounds = this.getPixelBounds(),\r
  		    newBounds = new Bounds(viewBounds.min.add(offset), viewBounds.max.add(offset));\r
\r
  		return offset.add(this._getBoundsOffset(newBounds, bounds));\r
  	},\r
\r
  	// returns offset needed for pxBounds to get inside maxBounds at a specified zoom\r
  	_getBoundsOffset: function (pxBounds, maxBounds, zoom) {\r
  		var projectedMaxBounds = toBounds(\r
  		        this.project(maxBounds.getNorthEast(), zoom),\r
  		        this.project(maxBounds.getSouthWest(), zoom)\r
  		    ),\r
  		    minOffset = projectedMaxBounds.min.subtract(pxBounds.min),\r
  		    maxOffset = projectedMaxBounds.max.subtract(pxBounds.max),\r
\r
  		    dx = this._rebound(minOffset.x, -maxOffset.x),\r
  		    dy = this._rebound(minOffset.y, -maxOffset.y);\r
\r
  		return new Point(dx, dy);\r
  	},\r
\r
  	_rebound: function (left, right) {\r
  		return left + right > 0 ?\r
  			Math.round(left - right) / 2 :\r
  			Math.max(0, Math.ceil(left)) - Math.max(0, Math.floor(right));\r
  	},\r
\r
  	_limitZoom: function (zoom) {\r
  		var min = this.getMinZoom(),\r
  		    max = this.getMaxZoom(),\r
  		    snap = Browser.any3d ? this.options.zoomSnap : 1;\r
  		if (snap) {\r
  			zoom = Math.round(zoom / snap) * snap;\r
  		}\r
  		return Math.max(min, Math.min(max, zoom));\r
  	},\r
\r
  	_onPanTransitionStep: function () {\r
  		this.fire('move');\r
  	},\r
\r
  	_onPanTransitionEnd: function () {\r
  		removeClass(this._mapPane, 'leaflet-pan-anim');\r
  		this.fire('moveend');\r
  	},\r
\r
  	_tryAnimatedPan: function (center, options) {\r
  		// difference between the new and current centers in pixels\r
  		var offset = this._getCenterOffset(center)._trunc();\r
\r
  		// don't animate too far unless animate: true specified in options\r
  		if ((options && options.animate) !== true && !this.getSize().contains(offset)) { return false; }\r
\r
  		this.panBy(offset, options);\r
\r
  		return true;\r
  	},\r
\r
  	_createAnimProxy: function () {\r
\r
  		var proxy = this._proxy = create$1('div', 'leaflet-proxy leaflet-zoom-animated');\r
  		this._panes.mapPane.appendChild(proxy);\r
\r
  		this.on('zoomanim', function (e) {\r
  			var prop = TRANSFORM,\r
  			    transform = this._proxy.style[prop];\r
\r
  			setTransform(this._proxy, this.project(e.center, e.zoom), this.getZoomScale(e.zoom, 1));\r
\r
  			// workaround for case when transform is the same and so transitionend event is not fired\r
  			if (transform === this._proxy.style[prop] && this._animatingZoom) {\r
  				this._onZoomTransitionEnd();\r
  			}\r
  		}, this);\r
\r
  		this.on('load moveend', this._animMoveEnd, this);\r
\r
  		this._on('unload', this._destroyAnimProxy, this);\r
  	},\r
\r
  	_destroyAnimProxy: function () {\r
  		remove(this._proxy);\r
  		this.off('load moveend', this._animMoveEnd, this);\r
  		delete this._proxy;\r
  	},\r
\r
  	_animMoveEnd: function () {\r
  		var c = this.getCenter(),\r
  		    z = this.getZoom();\r
  		setTransform(this._proxy, this.project(c, z), this.getZoomScale(z, 1));\r
  	},\r
\r
  	_catchTransitionEnd: function (e) {\r
  		if (this._animatingZoom && e.propertyName.indexOf('transform') >= 0) {\r
  			this._onZoomTransitionEnd();\r
  		}\r
  	},\r
\r
  	_nothingToAnimate: function () {\r
  		return !this._container.getElementsByClassName('leaflet-zoom-animated').length;\r
  	},\r
\r
  	_tryAnimatedZoom: function (center, zoom, options) {\r
\r
  		if (this._animatingZoom) { return true; }\r
\r
  		options = options || {};\r
\r
  		// don't animate if disabled, not supported or zoom difference is too large\r
  		if (!this._zoomAnimated || options.animate === false || this._nothingToAnimate() ||\r
  		        Math.abs(zoom - this._zoom) > this.options.zoomAnimationThreshold) { return false; }\r
\r
  		// offset is the pixel coords of the zoom origin relative to the current center\r
  		var scale = this.getZoomScale(zoom),\r
  		    offset = this._getCenterOffset(center)._divideBy(1 - 1 / scale);\r
\r
  		// don't animate if the zoom origin isn't within one screen from the current center, unless forced\r
  		if (options.animate !== true && !this.getSize().contains(offset)) { return false; }\r
\r
  		requestAnimFrame(function () {\r
  			this\r
  			    ._moveStart(true, options.noMoveStart || false)\r
  			    ._animateZoom(center, zoom, true);\r
  		}, this);\r
\r
  		return true;\r
  	},\r
\r
  	_animateZoom: function (center, zoom, startAnim, noUpdate) {\r
  		if (!this._mapPane) { return; }\r
\r
  		if (startAnim) {\r
  			this._animatingZoom = true;\r
\r
  			// remember what center/zoom to set after animation\r
  			this._animateToCenter = center;\r
  			this._animateToZoom = zoom;\r
\r
  			addClass(this._mapPane, 'leaflet-zoom-anim');\r
  		}\r
\r
  		// @section Other Events\r
  		// @event zoomanim: ZoomAnimEvent\r
  		// Fired at least once per zoom animation. For continuous zoom, like pinch zooming, fired once per frame during zoom.\r
  		this.fire('zoomanim', {\r
  			center: center,\r
  			zoom: zoom,\r
  			noUpdate: noUpdate\r
  		});\r
\r
  		if (!this._tempFireZoomEvent) {\r
  			this._tempFireZoomEvent = this._zoom !== this._animateToZoom;\r
  		}\r
\r
  		this._move(this._animateToCenter, this._animateToZoom, undefined, true);\r
\r
  		// Work around webkit not firing 'transitionend', see https://github.com/Leaflet/Leaflet/issues/3689, 2693\r
  		setTimeout(bind(this._onZoomTransitionEnd, this), 250);\r
  	},\r
\r
  	_onZoomTransitionEnd: function () {\r
  		if (!this._animatingZoom) { return; }\r
\r
  		if (this._mapPane) {\r
  			removeClass(this._mapPane, 'leaflet-zoom-anim');\r
  		}\r
\r
  		this._animatingZoom = false;\r
\r
  		this._move(this._animateToCenter, this._animateToZoom, undefined, true);\r
\r
  		if (this._tempFireZoomEvent) {\r
  			this.fire('zoom');\r
  		}\r
  		delete this._tempFireZoomEvent;\r
\r
  		this.fire('move');\r
\r
  		this._moveEnd(true);\r
  	}\r
  });\r
\r
  // @section\r
\r
  // @factory L.map(id: String, options?: Map options)\r
  // Instantiates a map object given the DOM ID of a \`<div>\` element\r
  // and optionally an object literal with \`Map options\`.\r
  //\r
  // @alternative\r
  // @factory L.map(el: HTMLElement, options?: Map options)\r
  // Instantiates a map object given an instance of a \`<div>\` HTML element\r
  // and optionally an object literal with \`Map options\`.\r
  function createMap(id, options) {\r
  	return new Map(id, options);\r
  }

  /*\r
   * @class Control\r
   * @aka L.Control\r
   * @inherits Class\r
   *\r
   * L.Control is a base class for implementing map controls. Handles positioning.\r
   * All other controls extend from this class.\r
   */\r
\r
  var Control = Class.extend({\r
  	// @section\r
  	// @aka Control Options\r
  	options: {\r
  		// @option position: String = 'topright'\r
  		// The position of the control (one of the map corners). Possible values are \`'topleft'\`,\r
  		// \`'topright'\`, \`'bottomleft'\` or \`'bottomright'\`\r
  		position: 'topright'\r
  	},\r
\r
  	initialize: function (options) {\r
  		setOptions(this, options);\r
  	},\r
\r
  	/* @section\r
  	 * Classes extending L.Control will inherit the following methods:\r
  	 *\r
  	 * @method getPosition: string\r
  	 * Returns the position of the control.\r
  	 */\r
  	getPosition: function () {\r
  		return this.options.position;\r
  	},\r
\r
  	// @method setPosition(position: string): this\r
  	// Sets the position of the control.\r
  	setPosition: function (position) {\r
  		var map = this._map;\r
\r
  		if (map) {\r
  			map.removeControl(this);\r
  		}\r
\r
  		this.options.position = position;\r
\r
  		if (map) {\r
  			map.addControl(this);\r
  		}\r
\r
  		return this;\r
  	},\r
\r
  	// @method getContainer: HTMLElement\r
  	// Returns the HTMLElement that contains the control.\r
  	getContainer: function () {\r
  		return this._container;\r
  	},\r
\r
  	// @method addTo(map: Map): this\r
  	// Adds the control to the given map.\r
  	addTo: function (map) {\r
  		this.remove();\r
  		this._map = map;\r
\r
  		var container = this._container = this.onAdd(map),\r
  		    pos = this.getPosition(),\r
  		    corner = map._controlCorners[pos];\r
\r
  		addClass(container, 'leaflet-control');\r
\r
  		if (pos.indexOf('bottom') !== -1) {\r
  			corner.insertBefore(container, corner.firstChild);\r
  		} else {\r
  			corner.appendChild(container);\r
  		}\r
\r
  		this._map.on('unload', this.remove, this);\r
\r
  		return this;\r
  	},\r
\r
  	// @method remove: this\r
  	// Removes the control from the map it is currently active on.\r
  	remove: function () {\r
  		if (!this._map) {\r
  			return this;\r
  		}\r
\r
  		remove(this._container);\r
\r
  		if (this.onRemove) {\r
  			this.onRemove(this._map);\r
  		}\r
\r
  		this._map.off('unload', this.remove, this);\r
  		this._map = null;\r
\r
  		return this;\r
  	},\r
\r
  	_refocusOnMap: function (e) {\r
  		// if map exists and event is not a keyboard event\r
  		if (this._map && e && e.screenX > 0 && e.screenY > 0) {\r
  			this._map.getContainer().focus();\r
  		}\r
  	}\r
  });\r
\r
  var control = function (options) {\r
  	return new Control(options);\r
  };\r
\r
  /* @section Extension methods\r
   * @uninheritable\r
   *\r
   * Every control should extend from \`L.Control\` and (re-)implement the following methods.\r
   *\r
   * @method onAdd(map: Map): HTMLElement\r
   * Should return the container DOM element for the control and add listeners on relevant map events. Called on [\`control.addTo(map)\`](#control-addTo).\r
   *\r
   * @method onRemove(map: Map)\r
   * Optional method. Should contain all clean up code that removes the listeners previously added in [\`onAdd\`](#control-onadd). Called on [\`control.remove()\`](#control-remove).\r
   */\r
\r
  /* @namespace Map\r
   * @section Methods for Layers and Controls\r
   */\r
  Map.include({\r
  	// @method addControl(control: Control): this\r
  	// Adds the given control to the map\r
  	addControl: function (control) {\r
  		control.addTo(this);\r
  		return this;\r
  	},\r
\r
  	// @method removeControl(control: Control): this\r
  	// Removes the given control from the map\r
  	removeControl: function (control) {\r
  		control.remove();\r
  		return this;\r
  	},\r
\r
  	_initControlPos: function () {\r
  		var corners = this._controlCorners = {},\r
  		    l = 'leaflet-',\r
  		    container = this._controlContainer =\r
  		            create$1('div', l + 'control-container', this._container);\r
\r
  		function createCorner(vSide, hSide) {\r
  			var className = l + vSide + ' ' + l + hSide;\r
\r
  			corners[vSide + hSide] = create$1('div', className, container);\r
  		}\r
\r
  		createCorner('top', 'left');\r
  		createCorner('top', 'right');\r
  		createCorner('bottom', 'left');\r
  		createCorner('bottom', 'right');\r
  	},\r
\r
  	_clearControlPos: function () {\r
  		for (var i in this._controlCorners) {\r
  			remove(this._controlCorners[i]);\r
  		}\r
  		remove(this._controlContainer);\r
  		delete this._controlCorners;\r
  		delete this._controlContainer;\r
  	}\r
  });

  /*\r
   * @class Control.Layers\r
   * @aka L.Control.Layers\r
   * @inherits Control\r
   *\r
   * The layers control gives users the ability to switch between different base layers and switch overlays on/off (check out the [detailed example](https://leafletjs.com/examples/layers-control/)). Extends \`Control\`.\r
   *\r
   * @example\r
   *\r
   * \`\`\`js\r
   * var baseLayers = {\r
   * 	"Mapbox": mapbox,\r
   * 	"OpenStreetMap": osm\r
   * };\r
   *\r
   * var overlays = {\r
   * 	"Marker": marker,\r
   * 	"Roads": roadsLayer\r
   * };\r
   *\r
   * L.control.layers(baseLayers, overlays).addTo(map);\r
   * \`\`\`\r
   *\r
   * The \`baseLayers\` and \`overlays\` parameters are object literals with layer names as keys and \`Layer\` objects as values:\r
   *\r
   * \`\`\`js\r
   * {\r
   *     "<someName1>": layer1,\r
   *     "<someName2>": layer2\r
   * }\r
   * \`\`\`\r
   *\r
   * The layer names can contain HTML, which allows you to add additional styling to the items:\r
   *\r
   * \`\`\`js\r
   * {"<img src='my-layer-icon' /> <span class='my-layer-item'>My Layer</span>": myLayer}\r
   * \`\`\`\r
   */\r
\r
  var Layers = Control.extend({\r
  	// @section\r
  	// @aka Control.Layers options\r
  	options: {\r
  		// @option collapsed: Boolean = true\r
  		// If \`true\`, the control will be collapsed into an icon and expanded on mouse hover, touch, or keyboard activation.\r
  		collapsed: true,\r
  		position: 'topright',\r
\r
  		// @option autoZIndex: Boolean = true\r
  		// If \`true\`, the control will assign zIndexes in increasing order to all of its layers so that the order is preserved when switching them on/off.\r
  		autoZIndex: true,\r
\r
  		// @option hideSingleBase: Boolean = false\r
  		// If \`true\`, the base layers in the control will be hidden when there is only one.\r
  		hideSingleBase: false,\r
\r
  		// @option sortLayers: Boolean = false\r
  		// Whether to sort the layers. When \`false\`, layers will keep the order\r
  		// in which they were added to the control.\r
  		sortLayers: false,\r
\r
  		// @option sortFunction: Function = *\r
  		// A [compare function](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)\r
  		// that will be used for sorting the layers, when \`sortLayers\` is \`true\`.\r
  		// The function receives both the \`L.Layer\` instances and their names, as in\r
  		// \`sortFunction(layerA, layerB, nameA, nameB)\`.\r
  		// By default, it sorts layers alphabetically by their name.\r
  		sortFunction: function (layerA, layerB, nameA, nameB) {\r
  			return nameA < nameB ? -1 : (nameB < nameA ? 1 : 0);\r
  		}\r
  	},\r
\r
  	initialize: function (baseLayers, overlays, options) {\r
  		setOptions(this, options);\r
\r
  		this._layerControlInputs = [];\r
  		this._layers = [];\r
  		this._lastZIndex = 0;\r
  		this._handlingClick = false;\r
  		this._preventClick = false;\r
\r
  		for (var i in baseLayers) {\r
  			this._addLayer(baseLayers[i], i);\r
  		}\r
\r
  		for (i in overlays) {\r
  			this._addLayer(overlays[i], i, true);\r
  		}\r
  	},\r
\r
  	onAdd: function (map) {\r
  		this._initLayout();\r
  		this._update();\r
\r
  		this._map = map;\r
  		map.on('zoomend', this._checkDisabledLayers, this);\r
\r
  		for (var i = 0; i < this._layers.length; i++) {\r
  			this._layers[i].layer.on('add remove', this._onLayerChange, this);\r
  		}\r
\r
  		return this._container;\r
  	},\r
\r
  	addTo: function (map) {\r
  		Control.prototype.addTo.call(this, map);\r
  		// Trigger expand after Layers Control has been inserted into DOM so that is now has an actual height.\r
  		return this._expandIfNotCollapsed();\r
  	},\r
\r
  	onRemove: function () {\r
  		this._map.off('zoomend', this._checkDisabledLayers, this);\r
\r
  		for (var i = 0; i < this._layers.length; i++) {\r
  			this._layers[i].layer.off('add remove', this._onLayerChange, this);\r
  		}\r
  	},\r
\r
  	// @method addBaseLayer(layer: Layer, name: String): this\r
  	// Adds a base layer (radio button entry) with the given name to the control.\r
  	addBaseLayer: function (layer, name) {\r
  		this._addLayer(layer, name);\r
  		return (this._map) ? this._update() : this;\r
  	},\r
\r
  	// @method addOverlay(layer: Layer, name: String): this\r
  	// Adds an overlay (checkbox entry) with the given name to the control.\r
  	addOverlay: function (layer, name) {\r
  		this._addLayer(layer, name, true);\r
  		return (this._map) ? this._update() : this;\r
  	},\r
\r
  	// @method removeLayer(layer: Layer): this\r
  	// Remove the given layer from the control.\r
  	removeLayer: function (layer) {\r
  		layer.off('add remove', this._onLayerChange, this);\r
\r
  		var obj = this._getLayer(stamp(layer));\r
  		if (obj) {\r
  			this._layers.splice(this._layers.indexOf(obj), 1);\r
  		}\r
  		return (this._map) ? this._update() : this;\r
  	},\r
\r
  	// @method expand(): this\r
  	// Expand the control container if collapsed.\r
  	expand: function () {\r
  		addClass(this._container, 'leaflet-control-layers-expanded');\r
  		this._section.style.height = null;\r
  		var acceptableHeight = this._map.getSize().y - (this._container.offsetTop + 50);\r
  		if (acceptableHeight < this._section.clientHeight) {\r
  			addClass(this._section, 'leaflet-control-layers-scrollbar');\r
  			this._section.style.height = acceptableHeight + 'px';\r
  		} else {\r
  			removeClass(this._section, 'leaflet-control-layers-scrollbar');\r
  		}\r
  		this._checkDisabledLayers();\r
  		return this;\r
  	},\r
\r
  	// @method collapse(): this\r
  	// Collapse the control container if expanded.\r
  	collapse: function () {\r
  		removeClass(this._container, 'leaflet-control-layers-expanded');\r
  		return this;\r
  	},\r
\r
  	_initLayout: function () {\r
  		var className = 'leaflet-control-layers',\r
  		    container = this._container = create$1('div', className),\r
  		    collapsed = this.options.collapsed;\r
\r
  		// makes this work on IE touch devices by stopping it from firing a mouseout event when the touch is released\r
  		container.setAttribute('aria-haspopup', true);\r
\r
  		disableClickPropagation(container);\r
  		disableScrollPropagation(container);\r
\r
  		var section = this._section = create$1('section', className + '-list');\r
\r
  		if (collapsed) {\r
  			this._map.on('click', this.collapse, this);\r
\r
  			on(container, {\r
  				mouseenter: this._expandSafely,\r
  				mouseleave: this.collapse\r
  			}, this);\r
  		}\r
\r
  		var link = this._layersLink = create$1('a', className + '-toggle', container);\r
  		link.href = '#';\r
  		link.title = 'Layers';\r
  		link.setAttribute('role', 'button');\r
\r
  		on(link, {\r
  			keydown: function (e) {\r
  				if (e.keyCode === 13) {\r
  					this._expandSafely();\r
  				}\r
  			},\r
  			// Certain screen readers intercept the key event and instead send a click event\r
  			click: function (e) {\r
  				preventDefault(e);\r
  				this._expandSafely();\r
  			}\r
  		}, this);\r
\r
  		if (!collapsed) {\r
  			this.expand();\r
  		}\r
\r
  		this._baseLayersList = create$1('div', className + '-base', section);\r
  		this._separator = create$1('div', className + '-separator', section);\r
  		this._overlaysList = create$1('div', className + '-overlays', section);\r
\r
  		container.appendChild(section);\r
  	},\r
\r
  	_getLayer: function (id) {\r
  		for (var i = 0; i < this._layers.length; i++) {\r
\r
  			if (this._layers[i] && stamp(this._layers[i].layer) === id) {\r
  				return this._layers[i];\r
  			}\r
  		}\r
  	},\r
\r
  	_addLayer: function (layer, name, overlay) {\r
  		if (this._map) {\r
  			layer.on('add remove', this._onLayerChange, this);\r
  		}\r
\r
  		this._layers.push({\r
  			layer: layer,\r
  			name: name,\r
  			overlay: overlay\r
  		});\r
\r
  		if (this.options.sortLayers) {\r
  			this._layers.sort(bind(function (a, b) {\r
  				return this.options.sortFunction(a.layer, b.layer, a.name, b.name);\r
  			}, this));\r
  		}\r
\r
  		if (this.options.autoZIndex && layer.setZIndex) {\r
  			this._lastZIndex++;\r
  			layer.setZIndex(this._lastZIndex);\r
  		}\r
\r
  		this._expandIfNotCollapsed();\r
  	},\r
\r
  	_update: function () {\r
  		if (!this._container) { return this; }\r
\r
  		empty(this._baseLayersList);\r
  		empty(this._overlaysList);\r
\r
  		this._layerControlInputs = [];\r
  		var baseLayersPresent, overlaysPresent, i, obj, baseLayersCount = 0;\r
\r
  		for (i = 0; i < this._layers.length; i++) {\r
  			obj = this._layers[i];\r
  			this._addItem(obj);\r
  			overlaysPresent = overlaysPresent || obj.overlay;\r
  			baseLayersPresent = baseLayersPresent || !obj.overlay;\r
  			baseLayersCount += !obj.overlay ? 1 : 0;\r
  		}\r
\r
  		// Hide base layers section if there's only one layer.\r
  		if (this.options.hideSingleBase) {\r
  			baseLayersPresent = baseLayersPresent && baseLayersCount > 1;\r
  			this._baseLayersList.style.display = baseLayersPresent ? '' : 'none';\r
  		}\r
\r
  		this._separator.style.display = overlaysPresent && baseLayersPresent ? '' : 'none';\r
\r
  		return this;\r
  	},\r
\r
  	_onLayerChange: function (e) {\r
  		if (!this._handlingClick) {\r
  			this._update();\r
  		}\r
\r
  		var obj = this._getLayer(stamp(e.target));\r
\r
  		// @namespace Map\r
  		// @section Layer events\r
  		// @event baselayerchange: LayersControlEvent\r
  		// Fired when the base layer is changed through the [layers control](#control-layers).\r
  		// @event overlayadd: LayersControlEvent\r
  		// Fired when an overlay is selected through the [layers control](#control-layers).\r
  		// @event overlayremove: LayersControlEvent\r
  		// Fired when an overlay is deselected through the [layers control](#control-layers).\r
  		// @namespace Control.Layers\r
  		var type = obj.overlay ?\r
  			(e.type === 'add' ? 'overlayadd' : 'overlayremove') :\r
  			(e.type === 'add' ? 'baselayerchange' : null);\r
\r
  		if (type) {\r
  			this._map.fire(type, obj);\r
  		}\r
  	},\r
\r
  	// IE7 bugs out if you create a radio dynamically, so you have to do it this hacky way (see https://stackoverflow.com/a/119079)\r
  	_createRadioElement: function (name, checked) {\r
\r
  		var radioHtml = '<input type="radio" class="leaflet-control-layers-selector" name="' +\r
  				name + '"' + (checked ? ' checked="checked"' : '') + '/>';\r
\r
  		var radioFragment = document.createElement('div');\r
  		radioFragment.innerHTML = radioHtml;\r
\r
  		return radioFragment.firstChild;\r
  	},\r
\r
  	_addItem: function (obj) {\r
  		var label = document.createElement('label'),\r
  		    checked = this._map.hasLayer(obj.layer),\r
  		    input;\r
\r
  		if (obj.overlay) {\r
  			input = document.createElement('input');\r
  			input.type = 'checkbox';\r
  			input.className = 'leaflet-control-layers-selector';\r
  			input.defaultChecked = checked;\r
  		} else {\r
  			input = this._createRadioElement('leaflet-base-layers_' + stamp(this), checked);\r
  		}\r
\r
  		this._layerControlInputs.push(input);\r
  		input.layerId = stamp(obj.layer);\r
\r
  		on(input, 'click', this._onInputClick, this);\r
\r
  		var name = document.createElement('span');\r
  		name.innerHTML = ' ' + obj.name;\r
\r
  		// Helps from preventing layer control flicker when checkboxes are disabled\r
  		// https://github.com/Leaflet/Leaflet/issues/2771\r
  		var holder = document.createElement('span');\r
\r
  		label.appendChild(holder);\r
  		holder.appendChild(input);\r
  		holder.appendChild(name);\r
\r
  		var container = obj.overlay ? this._overlaysList : this._baseLayersList;\r
  		container.appendChild(label);\r
\r
  		this._checkDisabledLayers();\r
  		return label;\r
  	},\r
\r
  	_onInputClick: function () {\r
  		// expanding the control on mobile with a click can cause adding a layer - we don't want this\r
  		if (this._preventClick) {\r
  			return;\r
  		}\r
\r
  		var inputs = this._layerControlInputs,\r
  		    input, layer;\r
  		var addedLayers = [],\r
  		    removedLayers = [];\r
\r
  		this._handlingClick = true;\r
\r
  		for (var i = inputs.length - 1; i >= 0; i--) {\r
  			input = inputs[i];\r
  			layer = this._getLayer(input.layerId).layer;\r
\r
  			if (input.checked) {\r
  				addedLayers.push(layer);\r
  			} else if (!input.checked) {\r
  				removedLayers.push(layer);\r
  			}\r
  		}\r
\r
  		// Bugfix issue 2318: Should remove all old layers before readding new ones\r
  		for (i = 0; i < removedLayers.length; i++) {\r
  			if (this._map.hasLayer(removedLayers[i])) {\r
  				this._map.removeLayer(removedLayers[i]);\r
  			}\r
  		}\r
  		for (i = 0; i < addedLayers.length; i++) {\r
  			if (!this._map.hasLayer(addedLayers[i])) {\r
  				this._map.addLayer(addedLayers[i]);\r
  			}\r
  		}\r
\r
  		this._handlingClick = false;\r
\r
  		this._refocusOnMap();\r
  	},\r
\r
  	_checkDisabledLayers: function () {\r
  		var inputs = this._layerControlInputs,\r
  		    input,\r
  		    layer,\r
  		    zoom = this._map.getZoom();\r
\r
  		for (var i = inputs.length - 1; i >= 0; i--) {\r
  			input = inputs[i];\r
  			layer = this._getLayer(input.layerId).layer;\r
  			input.disabled = (layer.options.minZoom !== undefined && zoom < layer.options.minZoom) ||\r
  			                 (layer.options.maxZoom !== undefined && zoom > layer.options.maxZoom);\r
\r
  		}\r
  	},\r
\r
  	_expandIfNotCollapsed: function () {\r
  		if (this._map && !this.options.collapsed) {\r
  			this.expand();\r
  		}\r
  		return this;\r
  	},\r
\r
  	_expandSafely: function () {\r
  		var section = this._section;\r
  		this._preventClick = true;\r
  		on(section, 'click', preventDefault);\r
  		this.expand();\r
  		var that = this;\r
  		setTimeout(function () {\r
  			off(section, 'click', preventDefault);\r
  			that._preventClick = false;\r
  		});\r
  	}\r
\r
  });\r
\r
\r
  // @factory L.control.layers(baselayers?: Object, overlays?: Object, options?: Control.Layers options)\r
  // Creates a layers control with the given layers. Base layers will be switched with radio buttons, while overlays will be switched with checkboxes. Note that all base layers should be passed in the base layers object, but only one should be added to the map during map instantiation.\r
  var layers = function (baseLayers, overlays, options) {\r
  	return new Layers(baseLayers, overlays, options);\r
  };

  /*\r
   * @class Control.Zoom\r
   * @aka L.Control.Zoom\r
   * @inherits Control\r
   *\r
   * A basic zoom control with two buttons (zoom in and zoom out). It is put on the map by default unless you set its [\`zoomControl\` option](#map-zoomcontrol) to \`false\`. Extends \`Control\`.\r
   */\r
\r
  var Zoom = Control.extend({\r
  	// @section\r
  	// @aka Control.Zoom options\r
  	options: {\r
  		position: 'topleft',\r
\r
  		// @option zoomInText: String = '<span aria-hidden="true">+</span>'\r
  		// The text set on the 'zoom in' button.\r
  		zoomInText: '<span aria-hidden="true">+</span>',\r
\r
  		// @option zoomInTitle: String = 'Zoom in'\r
  		// The title set on the 'zoom in' button.\r
  		zoomInTitle: 'Zoom in',\r
\r
  		// @option zoomOutText: String = '<span aria-hidden="true">&#x2212;</span>'\r
  		// The text set on the 'zoom out' button.\r
  		zoomOutText: '<span aria-hidden="true">&#x2212;</span>',\r
\r
  		// @option zoomOutTitle: String = 'Zoom out'\r
  		// The title set on the 'zoom out' button.\r
  		zoomOutTitle: 'Zoom out'\r
  	},\r
\r
  	onAdd: function (map) {\r
  		var zoomName = 'leaflet-control-zoom',\r
  		    container = create$1('div', zoomName + ' leaflet-bar'),\r
  		    options = this.options;\r
\r
  		this._zoomInButton  = this._createButton(options.zoomInText, options.zoomInTitle,\r
  		        zoomName + '-in',  container, this._zoomIn);\r
  		this._zoomOutButton = this._createButton(options.zoomOutText, options.zoomOutTitle,\r
  		        zoomName + '-out', container, this._zoomOut);\r
\r
  		this._updateDisabled();\r
  		map.on('zoomend zoomlevelschange', this._updateDisabled, this);\r
\r
  		return container;\r
  	},\r
\r
  	onRemove: function (map) {\r
  		map.off('zoomend zoomlevelschange', this._updateDisabled, this);\r
  	},\r
\r
  	disable: function () {\r
  		this._disabled = true;\r
  		this._updateDisabled();\r
  		return this;\r
  	},\r
\r
  	enable: function () {\r
  		this._disabled = false;\r
  		this._updateDisabled();\r
  		return this;\r
  	},\r
\r
  	_zoomIn: function (e) {\r
  		if (!this._disabled && this._map._zoom < this._map.getMaxZoom()) {\r
  			this._map.zoomIn(this._map.options.zoomDelta * (e.shiftKey ? 3 : 1));\r
  		}\r
  	},\r
\r
  	_zoomOut: function (e) {\r
  		if (!this._disabled && this._map._zoom > this._map.getMinZoom()) {\r
  			this._map.zoomOut(this._map.options.zoomDelta * (e.shiftKey ? 3 : 1));\r
  		}\r
  	},\r
\r
  	_createButton: function (html, title, className, container, fn) {\r
  		var link = create$1('a', className, container);\r
  		link.innerHTML = html;\r
  		link.href = '#';\r
  		link.title = title;\r
\r
  		/*\r
  		 * Will force screen readers like VoiceOver to read this as "Zoom in - button"\r
  		 */\r
  		link.setAttribute('role', 'button');\r
  		link.setAttribute('aria-label', title);\r
\r
  		disableClickPropagation(link);\r
  		on(link, 'click', stop);\r
  		on(link, 'click', fn, this);\r
  		on(link, 'click', this._refocusOnMap, this);\r
\r
  		return link;\r
  	},\r
\r
  	_updateDisabled: function () {\r
  		var map = this._map,\r
  		    className = 'leaflet-disabled';\r
\r
  		removeClass(this._zoomInButton, className);\r
  		removeClass(this._zoomOutButton, className);\r
  		this._zoomInButton.setAttribute('aria-disabled', 'false');\r
  		this._zoomOutButton.setAttribute('aria-disabled', 'false');\r
\r
  		if (this._disabled || map._zoom === map.getMinZoom()) {\r
  			addClass(this._zoomOutButton, className);\r
  			this._zoomOutButton.setAttribute('aria-disabled', 'true');\r
  		}\r
  		if (this._disabled || map._zoom === map.getMaxZoom()) {\r
  			addClass(this._zoomInButton, className);\r
  			this._zoomInButton.setAttribute('aria-disabled', 'true');\r
  		}\r
  	}\r
  });\r
\r
  // @namespace Map\r
  // @section Control options\r
  // @option zoomControl: Boolean = true\r
  // Whether a [zoom control](#control-zoom) is added to the map by default.\r
  Map.mergeOptions({\r
  	zoomControl: true\r
  });\r
\r
  Map.addInitHook(function () {\r
  	if (this.options.zoomControl) {\r
  		// @section Controls\r
  		// @property zoomControl: Control.Zoom\r
  		// The default zoom control (only available if the\r
  		// [\`zoomControl\` option](#map-zoomcontrol) was \`true\` when creating the map).\r
  		this.zoomControl = new Zoom();\r
  		this.addControl(this.zoomControl);\r
  	}\r
  });\r
\r
  // @namespace Control.Zoom\r
  // @factory L.control.zoom(options: Control.Zoom options)\r
  // Creates a zoom control\r
  var zoom = function (options) {\r
  	return new Zoom(options);\r
  };

  /*
   * @class Control.Scale
   * @aka L.Control.Scale
   * @inherits Control
   *
   * A simple scale control that shows the scale of the current center of screen in metric (m/km) and imperial (mi/ft) systems. Extends \`Control\`.
   *
   * @example
   *
   * \`\`\`js
   * L.control.scale().addTo(map);
   * \`\`\`
   */

  var Scale = Control.extend({
  	// @section
  	// @aka Control.Scale options
  	options: {
  		position: 'bottomleft',

  		// @option maxWidth: Number = 100
  		// Maximum width of the control in pixels. The width is set dynamically to show round values (e.g. 100, 200, 500).
  		maxWidth: 100,

  		// @option metric: Boolean = True
  		// Whether to show the metric scale line (m/km).
  		metric: true,

  		// @option imperial: Boolean = True
  		// Whether to show the imperial scale line (mi/ft).
  		imperial: true

  		// @option updateWhenIdle: Boolean = false
  		// If \`true\`, the control is updated on [\`moveend\`](#map-moveend), otherwise it's always up-to-date (updated on [\`move\`](#map-move)).
  	},

  	onAdd: function (map) {
  		var className = 'leaflet-control-scale',
  		    container = create$1('div', className),
  		    options = this.options;

  		this._addScales(options, className + '-line', container);

  		map.on(options.updateWhenIdle ? 'moveend' : 'move', this._update, this);
  		map.whenReady(this._update, this);

  		return container;
  	},

  	onRemove: function (map) {
  		map.off(this.options.updateWhenIdle ? 'moveend' : 'move', this._update, this);
  	},

  	_addScales: function (options, className, container) {
  		if (options.metric) {
  			this._mScale = create$1('div', className, container);
  		}
  		if (options.imperial) {
  			this._iScale = create$1('div', className, container);
  		}
  	},

  	_update: function () {
  		var map = this._map,
  		    y = map.getSize().y / 2;

  		var maxMeters = map.distance(
  			map.containerPointToLatLng([0, y]),
  			map.containerPointToLatLng([this.options.maxWidth, y]));

  		this._updateScales(maxMeters);
  	},

  	_updateScales: function (maxMeters) {
  		if (this.options.metric && maxMeters) {
  			this._updateMetric(maxMeters);
  		}
  		if (this.options.imperial && maxMeters) {
  			this._updateImperial(maxMeters);
  		}
  	},

  	_updateMetric: function (maxMeters) {
  		var meters = this._getRoundNum(maxMeters),
  		    label = meters < 1000 ? meters + ' m' : (meters / 1000) + ' km';

  		this._updateScale(this._mScale, label, meters / maxMeters);
  	},

  	_updateImperial: function (maxMeters) {
  		var maxFeet = maxMeters * 3.2808399,
  		    maxMiles, miles, feet;

  		if (maxFeet > 5280) {
  			maxMiles = maxFeet / 5280;
  			miles = this._getRoundNum(maxMiles);
  			this._updateScale(this._iScale, miles + ' mi', miles / maxMiles);

  		} else {
  			feet = this._getRoundNum(maxFeet);
  			this._updateScale(this._iScale, feet + ' ft', feet / maxFeet);
  		}
  	},

  	_updateScale: function (scale, text, ratio) {
  		scale.style.width = Math.round(this.options.maxWidth * ratio) + 'px';
  		scale.innerHTML = text;
  	},

  	_getRoundNum: function (num) {
  		var pow10 = Math.pow(10, (Math.floor(num) + '').length - 1),
  		    d = num / pow10;

  		d = d >= 10 ? 10 :
  		    d >= 5 ? 5 :
  		    d >= 3 ? 3 :
  		    d >= 2 ? 2 : 1;

  		return pow10 * d;
  	}
  });


  // @factory L.control.scale(options?: Control.Scale options)
  // Creates an scale control with the given options.
  var scale = function (options) {
  	return new Scale(options);
  };

  var ukrainianFlag = '<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>';\r
\r
\r
  /*\r
   * @class Control.Attribution\r
   * @aka L.Control.Attribution\r
   * @inherits Control\r
   *\r
   * The attribution control allows you to display attribution data in a small text box on a map. It is put on the map by default unless you set its [\`attributionControl\` option](#map-attributioncontrol) to \`false\`, and it fetches attribution texts from layers with the [\`getAttribution\` method](#layer-getattribution) automatically. Extends Control.\r
   */\r
\r
  var Attribution = Control.extend({\r
  	// @section\r
  	// @aka Control.Attribution options\r
  	options: {\r
  		position: 'bottomright',\r
\r
  		// @option prefix: String|false = 'Leaflet'\r
  		// The HTML text shown before the attributions. Pass \`false\` to disable.\r
  		prefix: '<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">' + (Browser.inlineSvg ? ukrainianFlag + ' ' : '') + 'Leaflet</a>'\r
  	},\r
\r
  	initialize: function (options) {\r
  		setOptions(this, options);\r
\r
  		this._attributions = {};\r
  	},\r
\r
  	onAdd: function (map) {\r
  		map.attributionControl = this;\r
  		this._container = create$1('div', 'leaflet-control-attribution');\r
  		disableClickPropagation(this._container);\r
\r
  		// TODO ugly, refactor\r
  		for (var i in map._layers) {\r
  			if (map._layers[i].getAttribution) {\r
  				this.addAttribution(map._layers[i].getAttribution());\r
  			}\r
  		}\r
\r
  		this._update();\r
\r
  		map.on('layeradd', this._addAttribution, this);\r
\r
  		return this._container;\r
  	},\r
\r
  	onRemove: function (map) {\r
  		map.off('layeradd', this._addAttribution, this);\r
  	},\r
\r
  	_addAttribution: function (ev) {\r
  		if (ev.layer.getAttribution) {\r
  			this.addAttribution(ev.layer.getAttribution());\r
  			ev.layer.once('remove', function () {\r
  				this.removeAttribution(ev.layer.getAttribution());\r
  			}, this);\r
  		}\r
  	},\r
\r
  	// @method setPrefix(prefix: String|false): this\r
  	// The HTML text shown before the attributions. Pass \`false\` to disable.\r
  	setPrefix: function (prefix) {\r
  		this.options.prefix = prefix;\r
  		this._update();\r
  		return this;\r
  	},\r
\r
  	// @method addAttribution(text: String): this\r
  	// Adds an attribution text (e.g. \`'&copy; OpenStreetMap contributors'\`).\r
  	addAttribution: function (text) {\r
  		if (!text) { return this; }\r
\r
  		if (!this._attributions[text]) {\r
  			this._attributions[text] = 0;\r
  		}\r
  		this._attributions[text]++;\r
\r
  		this._update();\r
\r
  		return this;\r
  	},\r
\r
  	// @method removeAttribution(text: String): this\r
  	// Removes an attribution text.\r
  	removeAttribution: function (text) {\r
  		if (!text) { return this; }\r
\r
  		if (this._attributions[text]) {\r
  			this._attributions[text]--;\r
  			this._update();\r
  		}\r
\r
  		return this;\r
  	},\r
\r
  	_update: function () {\r
  		if (!this._map) { return; }\r
\r
  		var attribs = [];\r
\r
  		for (var i in this._attributions) {\r
  			if (this._attributions[i]) {\r
  				attribs.push(i);\r
  			}\r
  		}\r
\r
  		var prefixAndAttribs = [];\r
\r
  		if (this.options.prefix) {\r
  			prefixAndAttribs.push(this.options.prefix);\r
  		}\r
  		if (attribs.length) {\r
  			prefixAndAttribs.push(attribs.join(', '));\r
  		}\r
\r
  		this._container.innerHTML = prefixAndAttribs.join(' <span aria-hidden="true">|</span> ');\r
  	}\r
  });\r
\r
  // @namespace Map\r
  // @section Control options\r
  // @option attributionControl: Boolean = true\r
  // Whether a [attribution control](#control-attribution) is added to the map by default.\r
  Map.mergeOptions({\r
  	attributionControl: true\r
  });\r
\r
  Map.addInitHook(function () {\r
  	if (this.options.attributionControl) {\r
  		new Attribution().addTo(this);\r
  	}\r
  });\r
\r
  // @namespace Control.Attribution\r
  // @factory L.control.attribution(options: Control.Attribution options)\r
  // Creates an attribution control.\r
  var attribution = function (options) {\r
  	return new Attribution(options);\r
  };

  Control.Layers = Layers;
  Control.Zoom = Zoom;
  Control.Scale = Scale;
  Control.Attribution = Attribution;

  control.layers = layers;
  control.zoom = zoom;
  control.scale = scale;
  control.attribution = attribution;

  /*
  	L.Handler is a base class for handler classes that are used internally to inject
  	interaction features like dragging to classes like Map and Marker.
  */

  // @class Handler
  // @aka L.Handler
  // Abstract class for map interaction handlers

  var Handler = Class.extend({
  	initialize: function (map) {
  		this._map = map;
  	},

  	// @method enable(): this
  	// Enables the handler
  	enable: function () {
  		if (this._enabled) { return this; }

  		this._enabled = true;
  		this.addHooks();
  		return this;
  	},

  	// @method disable(): this
  	// Disables the handler
  	disable: function () {
  		if (!this._enabled) { return this; }

  		this._enabled = false;
  		this.removeHooks();
  		return this;
  	},

  	// @method enabled(): Boolean
  	// Returns \`true\` if the handler is enabled
  	enabled: function () {
  		return !!this._enabled;
  	}

  	// @section Extension methods
  	// Classes inheriting from \`Handler\` must implement the two following methods:
  	// @method addHooks()
  	// Called when the handler is enabled, should add event hooks.
  	// @method removeHooks()
  	// Called when the handler is disabled, should remove the event hooks added previously.
  });

  // @section There is static function which can be called without instantiating L.Handler:
  // @function addTo(map: Map, name: String): this
  // Adds a new Handler to the given map with the given name.
  Handler.addTo = function (map, name) {
  	map.addHandler(name, this);
  	return this;
  };

  var Mixin = {Events: Events};

  /*\r
   * @class Draggable\r
   * @aka L.Draggable\r
   * @inherits Evented\r
   *\r
   * A class for making DOM elements draggable (including touch support).\r
   * Used internally for map and marker dragging. Only works for elements\r
   * that were positioned with [\`L.DomUtil.setPosition\`](#domutil-setposition).\r
   *\r
   * @example\r
   * \`\`\`js\r
   * var draggable = new L.Draggable(elementToDrag);\r
   * draggable.enable();\r
   * \`\`\`\r
   */\r
\r
  var START = Browser.touch ? 'touchstart mousedown' : 'mousedown';\r
\r
  var Draggable = Evented.extend({\r
\r
  	options: {\r
  		// @section\r
  		// @aka Draggable options\r
  		// @option clickTolerance: Number = 3\r
  		// The max number of pixels a user can shift the mouse pointer during a click\r
  		// for it to be considered a valid click (as opposed to a mouse drag).\r
  		clickTolerance: 3\r
  	},\r
\r
  	// @constructor L.Draggable(el: HTMLElement, dragHandle?: HTMLElement, preventOutline?: Boolean, options?: Draggable options)\r
  	// Creates a \`Draggable\` object for moving \`el\` when you start dragging the \`dragHandle\` element (equals \`el\` itself by default).\r
  	initialize: function (element, dragStartTarget, preventOutline, options) {\r
  		setOptions(this, options);\r
\r
  		this._element = element;\r
  		this._dragStartTarget = dragStartTarget || element;\r
  		this._preventOutline = preventOutline;\r
  	},\r
\r
  	// @method enable()\r
  	// Enables the dragging ability\r
  	enable: function () {\r
  		if (this._enabled) { return; }\r
\r
  		on(this._dragStartTarget, START, this._onDown, this);\r
\r
  		this._enabled = true;\r
  	},\r
\r
  	// @method disable()\r
  	// Disables the dragging ability\r
  	disable: function () {\r
  		if (!this._enabled) { return; }\r
\r
  		// If we're currently dragging this draggable,\r
  		// disabling it counts as first ending the drag.\r
  		if (Draggable._dragging === this) {\r
  			this.finishDrag(true);\r
  		}\r
\r
  		off(this._dragStartTarget, START, this._onDown, this);\r
\r
  		this._enabled = false;\r
  		this._moved = false;\r
  	},\r
\r
  	_onDown: function (e) {\r
  		// Ignore the event if disabled; this happens in IE11\r
  		// under some circumstances, see #3666.\r
  		if (!this._enabled) { return; }\r
\r
  		this._moved = false;\r
\r
  		if (hasClass(this._element, 'leaflet-zoom-anim')) { return; }\r
\r
  		if (e.touches && e.touches.length !== 1) {\r
  			// Finish dragging to avoid conflict with touchZoom\r
  			if (Draggable._dragging === this) {\r
  				this.finishDrag();\r
  			}\r
  			return;\r
  		}\r
\r
  		if (Draggable._dragging || e.shiftKey || ((e.which !== 1) && (e.button !== 1) && !e.touches)) { return; }\r
  		Draggable._dragging = this;  // Prevent dragging multiple objects at once.\r
\r
  		if (this._preventOutline) {\r
  			preventOutline(this._element);\r
  		}\r
\r
  		disableImageDrag();\r
  		disableTextSelection();\r
\r
  		if (this._moving) { return; }\r
\r
  		// @event down: Event\r
  		// Fired when a drag is about to start.\r
  		this.fire('down');\r
\r
  		var first = e.touches ? e.touches[0] : e,\r
  		    sizedParent = getSizedParentNode(this._element);\r
\r
  		this._startPoint = new Point(first.clientX, first.clientY);\r
  		this._startPos = getPosition(this._element);\r
\r
  		// Cache the scale, so that we can continuously compensate for it during drag (_onMove).\r
  		this._parentScale = getScale(sizedParent);\r
\r
  		var mouseevent = e.type === 'mousedown';\r
  		on(document, mouseevent ? 'mousemove' : 'touchmove', this._onMove, this);\r
  		on(document, mouseevent ? 'mouseup' : 'touchend touchcancel', this._onUp, this);\r
  	},\r
\r
  	_onMove: function (e) {\r
  		// Ignore the event if disabled; this happens in IE11\r
  		// under some circumstances, see #3666.\r
  		if (!this._enabled) { return; }\r
\r
  		if (e.touches && e.touches.length > 1) {\r
  			this._moved = true;\r
  			return;\r
  		}\r
\r
  		var first = (e.touches && e.touches.length === 1 ? e.touches[0] : e),\r
  		    offset = new Point(first.clientX, first.clientY)._subtract(this._startPoint);\r
\r
  		if (!offset.x && !offset.y) { return; }\r
  		if (Math.abs(offset.x) + Math.abs(offset.y) < this.options.clickTolerance) { return; }\r
\r
  		// We assume that the parent container's position, border and scale do not change for the duration of the drag.\r
  		// Therefore there is no need to account for the position and border (they are eliminated by the subtraction)\r
  		// and we can use the cached value for the scale.\r
  		offset.x /= this._parentScale.x;\r
  		offset.y /= this._parentScale.y;\r
\r
  		preventDefault(e);\r
\r
  		if (!this._moved) {\r
  			// @event dragstart: Event\r
  			// Fired when a drag starts\r
  			this.fire('dragstart');\r
\r
  			this._moved = true;\r
\r
  			addClass(document.body, 'leaflet-dragging');\r
\r
  			this._lastTarget = e.target || e.srcElement;\r
  			// IE and Edge do not give the <use> element, so fetch it\r
  			// if necessary\r
  			if (window.SVGElementInstance && this._lastTarget instanceof window.SVGElementInstance) {\r
  				this._lastTarget = this._lastTarget.correspondingUseElement;\r
  			}\r
  			addClass(this._lastTarget, 'leaflet-drag-target');\r
  		}\r
\r
  		this._newPos = this._startPos.add(offset);\r
  		this._moving = true;\r
\r
  		this._lastEvent = e;\r
  		this._updatePosition();\r
  	},\r
\r
  	_updatePosition: function () {\r
  		var e = {originalEvent: this._lastEvent};\r
\r
  		// @event predrag: Event\r
  		// Fired continuously during dragging *before* each corresponding\r
  		// update of the element's position.\r
  		this.fire('predrag', e);\r
  		setPosition(this._element, this._newPos);\r
\r
  		// @event drag: Event\r
  		// Fired continuously during dragging.\r
  		this.fire('drag', e);\r
  	},\r
\r
  	_onUp: function () {\r
  		// Ignore the event if disabled; this happens in IE11\r
  		// under some circumstances, see #3666.\r
  		if (!this._enabled) { return; }\r
  		this.finishDrag();\r
  	},\r
\r
  	finishDrag: function (noInertia) {\r
  		removeClass(document.body, 'leaflet-dragging');\r
\r
  		if (this._lastTarget) {\r
  			removeClass(this._lastTarget, 'leaflet-drag-target');\r
  			this._lastTarget = null;\r
  		}\r
\r
  		off(document, 'mousemove touchmove', this._onMove, this);\r
  		off(document, 'mouseup touchend touchcancel', this._onUp, this);\r
\r
  		enableImageDrag();\r
  		enableTextSelection();\r
\r
  		var fireDragend = this._moved && this._moving;\r
\r
  		this._moving = false;\r
  		Draggable._dragging = false;\r
\r
  		if (fireDragend) {\r
  			// @event dragend: DragEndEvent\r
  			// Fired when the drag ends.\r
  			this.fire('dragend', {\r
  				noInertia: noInertia,\r
  				distance: this._newPos.distanceTo(this._startPos)\r
  			});\r
  		}\r
  	}\r
\r
  });

  /*\r
   * @namespace PolyUtil\r
   * Various utility functions for polygon geometries.\r
   */\r
\r
  /* @function clipPolygon(points: Point[], bounds: Bounds, round?: Boolean): Point[]\r
   * Clips the polygon geometry defined by the given \`points\` by the given bounds (using the [Sutherland-Hodgman algorithm](https://en.wikipedia.org/wiki/Sutherland%E2%80%93Hodgman_algorithm)).\r
   * Used by Leaflet to only show polygon points that are on the screen or near, increasing\r
   * performance. Note that polygon points needs different algorithm for clipping\r
   * than polyline, so there's a separate method for it.\r
   */\r
  function clipPolygon(points, bounds, round) {\r
  	var clippedPoints,\r
  	    edges = [1, 4, 2, 8],\r
  	    i, j, k,\r
  	    a, b,\r
  	    len, edge, p;\r
\r
  	for (i = 0, len = points.length; i < len; i++) {\r
  		points[i]._code = _getBitCode(points[i], bounds);\r
  	}\r
\r
  	// for each edge (left, bottom, right, top)\r
  	for (k = 0; k < 4; k++) {\r
  		edge = edges[k];\r
  		clippedPoints = [];\r
\r
  		for (i = 0, len = points.length, j = len - 1; i < len; j = i++) {\r
  			a = points[i];\r
  			b = points[j];\r
\r
  			// if a is inside the clip window\r
  			if (!(a._code & edge)) {\r
  				// if b is outside the clip window (a->b goes out of screen)\r
  				if (b._code & edge) {\r
  					p = _getEdgeIntersection(b, a, edge, bounds, round);\r
  					p._code = _getBitCode(p, bounds);\r
  					clippedPoints.push(p);\r
  				}\r
  				clippedPoints.push(a);\r
\r
  			// else if b is inside the clip window (a->b enters the screen)\r
  			} else if (!(b._code & edge)) {\r
  				p = _getEdgeIntersection(b, a, edge, bounds, round);\r
  				p._code = _getBitCode(p, bounds);\r
  				clippedPoints.push(p);\r
  			}\r
  		}\r
  		points = clippedPoints;\r
  	}\r
\r
  	return points;\r
  }\r
\r
  /* @function polygonCenter(latlngs: LatLng[], crs: CRS): LatLng\r
   * Returns the center ([centroid](http://en.wikipedia.org/wiki/Centroid)) of the passed LatLngs (first ring) from a polygon.\r
   */\r
  function polygonCenter(latlngs, crs) {\r
  	var i, j, p1, p2, f, area, x, y, center;\r
\r
  	if (!latlngs || latlngs.length === 0) {\r
  		throw new Error('latlngs not passed');\r
  	}\r
\r
  	if (!isFlat(latlngs)) {\r
  		console.warn('latlngs are not flat! Only the first ring will be used');\r
  		latlngs = latlngs[0];\r
  	}\r
\r
  	var centroidLatLng = toLatLng([0, 0]);\r
\r
  	var bounds = toLatLngBounds(latlngs);\r
  	var areaBounds = bounds.getNorthWest().distanceTo(bounds.getSouthWest()) * bounds.getNorthEast().distanceTo(bounds.getNorthWest());\r
  	// tests showed that below 1700 rounding errors are happening\r
  	if (areaBounds < 1700) {\r
  		// getting a inexact center, to move the latlngs near to [0, 0] to prevent rounding errors\r
  		centroidLatLng = centroid(latlngs);\r
  	}\r
\r
  	var len = latlngs.length;\r
  	var points = [];\r
  	for (i = 0; i < len; i++) {\r
  		var latlng = toLatLng(latlngs[i]);\r
  		points.push(crs.project(toLatLng([latlng.lat - centroidLatLng.lat, latlng.lng - centroidLatLng.lng])));\r
  	}\r
\r
  	area = x = y = 0;\r
\r
  	// polygon centroid algorithm;\r
  	for (i = 0, j = len - 1; i < len; j = i++) {\r
  		p1 = points[i];\r
  		p2 = points[j];\r
\r
  		f = p1.y * p2.x - p2.y * p1.x;\r
  		x += (p1.x + p2.x) * f;\r
  		y += (p1.y + p2.y) * f;\r
  		area += f * 3;\r
  	}\r
\r
  	if (area === 0) {\r
  		// Polygon is so small that all points are on same pixel.\r
  		center = points[0];\r
  	} else {\r
  		center = [x / area, y / area];\r
  	}\r
\r
  	var latlngCenter = crs.unproject(toPoint(center));\r
  	return toLatLng([latlngCenter.lat + centroidLatLng.lat, latlngCenter.lng + centroidLatLng.lng]);\r
  }\r
\r
  /* @function centroid(latlngs: LatLng[]): LatLng\r
   * Returns the 'center of mass' of the passed LatLngs.\r
   */\r
  function centroid(coords) {\r
  	var latSum = 0;\r
  	var lngSum = 0;\r
  	var len = 0;\r
  	for (var i = 0; i < coords.length; i++) {\r
  		var latlng = toLatLng(coords[i]);\r
  		latSum += latlng.lat;\r
  		lngSum += latlng.lng;\r
  		len++;\r
  	}\r
  	return toLatLng([latSum / len, lngSum / len]);\r
  }

  var PolyUtil = {
    __proto__: null,
    clipPolygon: clipPolygon,
    polygonCenter: polygonCenter,
    centroid: centroid
  };

  /*\r
   * @namespace LineUtil\r
   *\r
   * Various utility functions for polyline points processing, used by Leaflet internally to make polylines lightning-fast.\r
   */\r
\r
  // Simplify polyline with vertex reduction and Douglas-Peucker simplification.\r
  // Improves rendering performance dramatically by lessening the number of points to draw.\r
\r
  // @function simplify(points: Point[], tolerance: Number): Point[]\r
  // Dramatically reduces the number of points in a polyline while retaining\r
  // its shape and returns a new array of simplified points, using the\r
  // [Ramer-Douglas-Peucker algorithm](https://en.wikipedia.org/wiki/Ramer-Douglas-Peucker_algorithm).\r
  // Used for a huge performance boost when processing/displaying Leaflet polylines for\r
  // each zoom level and also reducing visual noise. tolerance affects the amount of\r
  // simplification (lesser value means higher quality but slower and with more points).\r
  // Also released as a separated micro-library [Simplify.js](https://mourner.github.io/simplify-js/).\r
  function simplify(points, tolerance) {\r
  	if (!tolerance || !points.length) {\r
  		return points.slice();\r
  	}\r
\r
  	var sqTolerance = tolerance * tolerance;\r
\r
  	    // stage 1: vertex reduction\r
  	    points = _reducePoints(points, sqTolerance);\r
\r
  	    // stage 2: Douglas-Peucker simplification\r
  	    points = _simplifyDP(points, sqTolerance);\r
\r
  	return points;\r
  }\r
\r
  // @function pointToSegmentDistance(p: Point, p1: Point, p2: Point): Number\r
  // Returns the distance between point \`p\` and segment \`p1\` to \`p2\`.\r
  function pointToSegmentDistance(p, p1, p2) {\r
  	return Math.sqrt(_sqClosestPointOnSegment(p, p1, p2, true));\r
  }\r
\r
  // @function closestPointOnSegment(p: Point, p1: Point, p2: Point): Number\r
  // Returns the closest point from a point \`p\` on a segment \`p1\` to \`p2\`.\r
  function closestPointOnSegment(p, p1, p2) {\r
  	return _sqClosestPointOnSegment(p, p1, p2);\r
  }\r
\r
  // Ramer-Douglas-Peucker simplification, see https://en.wikipedia.org/wiki/Ramer-Douglas-Peucker_algorithm\r
  function _simplifyDP(points, sqTolerance) {\r
\r
  	var len = points.length,\r
  	    ArrayConstructor = typeof Uint8Array !== undefined + '' ? Uint8Array : Array,\r
  	    markers = new ArrayConstructor(len);\r
\r
  	    markers[0] = markers[len - 1] = 1;\r
\r
  	_simplifyDPStep(points, markers, sqTolerance, 0, len - 1);\r
\r
  	var i,\r
  	    newPoints = [];\r
\r
  	for (i = 0; i < len; i++) {\r
  		if (markers[i]) {\r
  			newPoints.push(points[i]);\r
  		}\r
  	}\r
\r
  	return newPoints;\r
  }\r
\r
  function _simplifyDPStep(points, markers, sqTolerance, first, last) {\r
\r
  	var maxSqDist = 0,\r
  	index, i, sqDist;\r
\r
  	for (i = first + 1; i <= last - 1; i++) {\r
  		sqDist = _sqClosestPointOnSegment(points[i], points[first], points[last], true);\r
\r
  		if (sqDist > maxSqDist) {\r
  			index = i;\r
  			maxSqDist = sqDist;\r
  		}\r
  	}\r
\r
  	if (maxSqDist > sqTolerance) {\r
  		markers[index] = 1;\r
\r
  		_simplifyDPStep(points, markers, sqTolerance, first, index);\r
  		_simplifyDPStep(points, markers, sqTolerance, index, last);\r
  	}\r
  }\r
\r
  // reduce points that are too close to each other to a single point\r
  function _reducePoints(points, sqTolerance) {\r
  	var reducedPoints = [points[0]];\r
\r
  	for (var i = 1, prev = 0, len = points.length; i < len; i++) {\r
  		if (_sqDist(points[i], points[prev]) > sqTolerance) {\r
  			reducedPoints.push(points[i]);\r
  			prev = i;\r
  		}\r
  	}\r
  	if (prev < len - 1) {\r
  		reducedPoints.push(points[len - 1]);\r
  	}\r
  	return reducedPoints;\r
  }\r
\r
  var _lastCode;\r
\r
  // @function clipSegment(a: Point, b: Point, bounds: Bounds, useLastCode?: Boolean, round?: Boolean): Point[]|Boolean\r
  // Clips the segment a to b by rectangular bounds with the\r
  // [Cohen-Sutherland algorithm](https://en.wikipedia.org/wiki/Cohen%E2%80%93Sutherland_algorithm)\r
  // (modifying the segment points directly!). Used by Leaflet to only show polyline\r
  // points that are on the screen or near, increasing performance.\r
  function clipSegment(a, b, bounds, useLastCode, round) {\r
  	var codeA = useLastCode ? _lastCode : _getBitCode(a, bounds),\r
  	    codeB = _getBitCode(b, bounds),\r
\r
  	    codeOut, p, newCode;\r
\r
  	    // save 2nd code to avoid calculating it on the next segment\r
  	    _lastCode = codeB;\r
\r
  	while (true) {\r
  		// if a,b is inside the clip window (trivial accept)\r
  		if (!(codeA | codeB)) {\r
  			return [a, b];\r
  		}\r
\r
  		// if a,b is outside the clip window (trivial reject)\r
  		if (codeA & codeB) {\r
  			return false;\r
  		}\r
\r
  		// other cases\r
  		codeOut = codeA || codeB;\r
  		p = _getEdgeIntersection(a, b, codeOut, bounds, round);\r
  		newCode = _getBitCode(p, bounds);\r
\r
  		if (codeOut === codeA) {\r
  			a = p;\r
  			codeA = newCode;\r
  		} else {\r
  			b = p;\r
  			codeB = newCode;\r
  		}\r
  	}\r
  }\r
\r
  function _getEdgeIntersection(a, b, code, bounds, round) {\r
  	var dx = b.x - a.x,\r
  	    dy = b.y - a.y,\r
  	    min = bounds.min,\r
  	    max = bounds.max,\r
  	    x, y;\r
\r
  	if (code & 8) { // top\r
  		x = a.x + dx * (max.y - a.y) / dy;\r
  		y = max.y;\r
\r
  	} else if (code & 4) { // bottom\r
  		x = a.x + dx * (min.y - a.y) / dy;\r
  		y = min.y;\r
\r
  	} else if (code & 2) { // right\r
  		x = max.x;\r
  		y = a.y + dy * (max.x - a.x) / dx;\r
\r
  	} else if (code & 1) { // left\r
  		x = min.x;\r
  		y = a.y + dy * (min.x - a.x) / dx;\r
  	}\r
\r
  	return new Point(x, y, round);\r
  }\r
\r
  function _getBitCode(p, bounds) {\r
  	var code = 0;\r
\r
  	if (p.x < bounds.min.x) { // left\r
  		code |= 1;\r
  	} else if (p.x > bounds.max.x) { // right\r
  		code |= 2;\r
  	}\r
\r
  	if (p.y < bounds.min.y) { // bottom\r
  		code |= 4;\r
  	} else if (p.y > bounds.max.y) { // top\r
  		code |= 8;\r
  	}\r
\r
  	return code;\r
  }\r
\r
  // square distance (to avoid unnecessary Math.sqrt calls)\r
  function _sqDist(p1, p2) {\r
  	var dx = p2.x - p1.x,\r
  	    dy = p2.y - p1.y;\r
  	return dx * dx + dy * dy;\r
  }\r
\r
  // return closest point on segment or distance to that point\r
  function _sqClosestPointOnSegment(p, p1, p2, sqDist) {\r
  	var x = p1.x,\r
  	    y = p1.y,\r
  	    dx = p2.x - x,\r
  	    dy = p2.y - y,\r
  	    dot = dx * dx + dy * dy,\r
  	    t;\r
\r
  	if (dot > 0) {\r
  		t = ((p.x - x) * dx + (p.y - y) * dy) / dot;\r
\r
  		if (t > 1) {\r
  			x = p2.x;\r
  			y = p2.y;\r
  		} else if (t > 0) {\r
  			x += dx * t;\r
  			y += dy * t;\r
  		}\r
  	}\r
\r
  	dx = p.x - x;\r
  	dy = p.y - y;\r
\r
  	return sqDist ? dx * dx + dy * dy : new Point(x, y);\r
  }\r
\r
\r
  // @function isFlat(latlngs: LatLng[]): Boolean\r
  // Returns true if \`latlngs\` is a flat array, false is nested.\r
  function isFlat(latlngs) {\r
  	return !isArray(latlngs[0]) || (typeof latlngs[0][0] !== 'object' && typeof latlngs[0][0] !== 'undefined');\r
  }\r
\r
  function _flat(latlngs) {\r
  	console.warn('Deprecated use of _flat, please use L.LineUtil.isFlat instead.');\r
  	return isFlat(latlngs);\r
  }\r
\r
  /* @function polylineCenter(latlngs: LatLng[], crs: CRS): LatLng\r
   * Returns the center ([centroid](http://en.wikipedia.org/wiki/Centroid)) of the passed LatLngs (first ring) from a polyline.\r
   */\r
  function polylineCenter(latlngs, crs) {\r
  	var i, halfDist, segDist, dist, p1, p2, ratio, center;\r
\r
  	if (!latlngs || latlngs.length === 0) {\r
  		throw new Error('latlngs not passed');\r
  	}\r
\r
  	if (!isFlat(latlngs)) {\r
  		console.warn('latlngs are not flat! Only the first ring will be used');\r
  		latlngs = latlngs[0];\r
  	}\r
\r
  	var centroidLatLng = toLatLng([0, 0]);\r
\r
  	var bounds = toLatLngBounds(latlngs);\r
  	var areaBounds = bounds.getNorthWest().distanceTo(bounds.getSouthWest()) * bounds.getNorthEast().distanceTo(bounds.getNorthWest());\r
  	// tests showed that below 1700 rounding errors are happening\r
  	if (areaBounds < 1700) {\r
  		// getting a inexact center, to move the latlngs near to [0, 0] to prevent rounding errors\r
  		centroidLatLng = centroid(latlngs);\r
  	}\r
\r
  	var len = latlngs.length;\r
  	var points = [];\r
  	for (i = 0; i < len; i++) {\r
  		var latlng = toLatLng(latlngs[i]);\r
  		points.push(crs.project(toLatLng([latlng.lat - centroidLatLng.lat, latlng.lng - centroidLatLng.lng])));\r
  	}\r
\r
  	for (i = 0, halfDist = 0; i < len - 1; i++) {\r
  		halfDist += points[i].distanceTo(points[i + 1]) / 2;\r
  	}\r
\r
  	// The line is so small in the current view that all points are on the same pixel.\r
  	if (halfDist === 0) {\r
  		center = points[0];\r
  	} else {\r
  		for (i = 0, dist = 0; i < len - 1; i++) {\r
  			p1 = points[i];\r
  			p2 = points[i + 1];\r
  			segDist = p1.distanceTo(p2);\r
  			dist += segDist;\r
\r
  			if (dist > halfDist) {\r
  				ratio = (dist - halfDist) / segDist;\r
  				center = [\r
  					p2.x - ratio * (p2.x - p1.x),\r
  					p2.y - ratio * (p2.y - p1.y)\r
  				];\r
  				break;\r
  			}\r
  		}\r
  	}\r
\r
  	var latlngCenter = crs.unproject(toPoint(center));\r
  	return toLatLng([latlngCenter.lat + centroidLatLng.lat, latlngCenter.lng + centroidLatLng.lng]);\r
  }

  var LineUtil = {
    __proto__: null,
    simplify: simplify,
    pointToSegmentDistance: pointToSegmentDistance,
    closestPointOnSegment: closestPointOnSegment,
    clipSegment: clipSegment,
    _getEdgeIntersection: _getEdgeIntersection,
    _getBitCode: _getBitCode,
    _sqClosestPointOnSegment: _sqClosestPointOnSegment,
    isFlat: isFlat,
    _flat: _flat,
    polylineCenter: polylineCenter
  };

  /*\r
   * @namespace Projection\r
   * @section\r
   * Leaflet comes with a set of already defined Projections out of the box:\r
   *\r
   * @projection L.Projection.LonLat\r
   *\r
   * Equirectangular, or Plate Carree projection \u2014 the most simple projection,\r
   * mostly used by GIS enthusiasts. Directly maps \`x\` as longitude, and \`y\` as\r
   * latitude. Also suitable for flat worlds, e.g. game maps. Used by the\r
   * \`EPSG:4326\` and \`Simple\` CRS.\r
   */\r
\r
  var LonLat = {\r
  	project: function (latlng) {\r
  		return new Point(latlng.lng, latlng.lat);\r
  	},\r
\r
  	unproject: function (point) {\r
  		return new LatLng(point.y, point.x);\r
  	},\r
\r
  	bounds: new Bounds([-180, -90], [180, 90])\r
  };

  /*\r
   * @namespace Projection\r
   * @projection L.Projection.Mercator\r
   *\r
   * Elliptical Mercator projection \u2014 more complex than Spherical Mercator. Assumes that Earth is an ellipsoid. Used by the EPSG:3395 CRS.\r
   */\r
\r
  var Mercator = {\r
  	R: 6378137,\r
  	R_MINOR: 6356752.314245179,\r
\r
  	bounds: new Bounds([-20037508.34279, -15496570.73972], [20037508.34279, 18764656.23138]),\r
\r
  	project: function (latlng) {\r
  		var d = Math.PI / 180,\r
  		    r = this.R,\r
  		    y = latlng.lat * d,\r
  		    tmp = this.R_MINOR / r,\r
  		    e = Math.sqrt(1 - tmp * tmp),\r
  		    con = e * Math.sin(y);\r
\r
  		var ts = Math.tan(Math.PI / 4 - y / 2) / Math.pow((1 - con) / (1 + con), e / 2);\r
  		y = -r * Math.log(Math.max(ts, 1E-10));\r
\r
  		return new Point(latlng.lng * d * r, y);\r
  	},\r
\r
  	unproject: function (point) {\r
  		var d = 180 / Math.PI,\r
  		    r = this.R,\r
  		    tmp = this.R_MINOR / r,\r
  		    e = Math.sqrt(1 - tmp * tmp),\r
  		    ts = Math.exp(-point.y / r),\r
  		    phi = Math.PI / 2 - 2 * Math.atan(ts);\r
\r
  		for (var i = 0, dphi = 0.1, con; i < 15 && Math.abs(dphi) > 1e-7; i++) {\r
  			con = e * Math.sin(phi);\r
  			con = Math.pow((1 - con) / (1 + con), e / 2);\r
  			dphi = Math.PI / 2 - 2 * Math.atan(ts * con) - phi;\r
  			phi += dphi;\r
  		}\r
\r
  		return new LatLng(phi * d, point.x * d / r);\r
  	}\r
  };

  /*
   * @class Projection

   * An object with methods for projecting geographical coordinates of the world onto
   * a flat surface (and back). See [Map projection](https://en.wikipedia.org/wiki/Map_projection).

   * @property bounds: Bounds
   * The bounds (specified in CRS units) where the projection is valid

   * @method project(latlng: LatLng): Point
   * Projects geographical coordinates into a 2D point.
   * Only accepts actual \`L.LatLng\` instances, not arrays.

   * @method unproject(point: Point): LatLng
   * The inverse of \`project\`. Projects a 2D point into a geographical location.
   * Only accepts actual \`L.Point\` instances, not arrays.

   * Note that the projection instances do not inherit from Leaflet's \`Class\` object,
   * and can't be instantiated. Also, new classes can't inherit from them,
   * and methods can't be added to them with the \`include\` function.

   */

  var index = {
    __proto__: null,
    LonLat: LonLat,
    Mercator: Mercator,
    SphericalMercator: SphericalMercator
  };

  /*\r
   * @namespace CRS\r
   * @crs L.CRS.EPSG3395\r
   *\r
   * Rarely used by some commercial tile providers. Uses Elliptical Mercator projection.\r
   */\r
  var EPSG3395 = extend({}, Earth, {\r
  	code: 'EPSG:3395',\r
  	projection: Mercator,\r
\r
  	transformation: (function () {\r
  		var scale = 0.5 / (Math.PI * Mercator.R);\r
  		return toTransformation(scale, 0.5, -scale, 0.5);\r
  	}())\r
  });

  /*\r
   * @namespace CRS\r
   * @crs L.CRS.EPSG4326\r
   *\r
   * A common CRS among GIS enthusiasts. Uses simple Equirectangular projection.\r
   *\r
   * Leaflet 1.0.x complies with the [TMS coordinate scheme for EPSG:4326](https://wiki.osgeo.org/wiki/Tile_Map_Service_Specification#global-geodetic),\r
   * which is a breaking change from 0.7.x behaviour.  If you are using a \`TileLayer\`\r
   * with this CRS, ensure that there are two 256x256 pixel tiles covering the\r
   * whole earth at zoom level zero, and that the tile coordinate origin is (-180,+90),\r
   * or (-180,-90) for \`TileLayer\`s with [the \`tms\` option](#tilelayer-tms) set.\r
   */\r
\r
  var EPSG4326 = extend({}, Earth, {\r
  	code: 'EPSG:4326',\r
  	projection: LonLat,\r
  	transformation: toTransformation(1 / 180, 1, -1 / 180, 0.5)\r
  });

  /*
   * @namespace CRS
   * @crs L.CRS.Simple
   *
   * A simple CRS that maps longitude and latitude into \`x\` and \`y\` directly.
   * May be used for maps of flat surfaces (e.g. game maps). Note that the \`y\`
   * axis should still be inverted (going from bottom to top). \`distance()\` returns
   * simple euclidean distance.
   */

  var Simple = extend({}, CRS, {
  	projection: LonLat,
  	transformation: toTransformation(1, 0, -1, 0),

  	scale: function (zoom) {
  		return Math.pow(2, zoom);
  	},

  	zoom: function (scale) {
  		return Math.log(scale) / Math.LN2;
  	},

  	distance: function (latlng1, latlng2) {
  		var dx = latlng2.lng - latlng1.lng,
  		    dy = latlng2.lat - latlng1.lat;

  		return Math.sqrt(dx * dx + dy * dy);
  	},

  	infinite: true
  });

  CRS.Earth = Earth;
  CRS.EPSG3395 = EPSG3395;
  CRS.EPSG3857 = EPSG3857;
  CRS.EPSG900913 = EPSG900913;
  CRS.EPSG4326 = EPSG4326;
  CRS.Simple = Simple;

  /*
   * @class Layer
   * @inherits Evented
   * @aka L.Layer
   * @aka ILayer
   *
   * A set of methods from the Layer base class that all Leaflet layers use.
   * Inherits all methods, options and events from \`L.Evented\`.
   *
   * @example
   *
   * \`\`\`js
   * var layer = L.marker(latlng).addTo(map);
   * layer.addTo(map);
   * layer.remove();
   * \`\`\`
   *
   * @event add: Event
   * Fired after the layer is added to a map
   *
   * @event remove: Event
   * Fired after the layer is removed from a map
   */


  var Layer = Evented.extend({

  	// Classes extending \`L.Layer\` will inherit the following options:
  	options: {
  		// @option pane: String = 'overlayPane'
  		// By default the layer will be added to the map's [overlay pane](#map-overlaypane). Overriding this option will cause the layer to be placed on another pane by default.
  		pane: 'overlayPane',

  		// @option attribution: String = null
  		// String to be shown in the attribution control, e.g. "\xA9 OpenStreetMap contributors". It describes the layer data and is often a legal obligation towards copyright holders and tile providers.
  		attribution: null,

  		bubblingMouseEvents: true
  	},

  	/* @section
  	 * Classes extending \`L.Layer\` will inherit the following methods:
  	 *
  	 * @method addTo(map: Map|LayerGroup): this
  	 * Adds the layer to the given map or layer group.
  	 */
  	addTo: function (map) {
  		map.addLayer(this);
  		return this;
  	},

  	// @method remove: this
  	// Removes the layer from the map it is currently active on.
  	remove: function () {
  		return this.removeFrom(this._map || this._mapToAdd);
  	},

  	// @method removeFrom(map: Map): this
  	// Removes the layer from the given map
  	//
  	// @alternative
  	// @method removeFrom(group: LayerGroup): this
  	// Removes the layer from the given \`LayerGroup\`
  	removeFrom: function (obj) {
  		if (obj) {
  			obj.removeLayer(this);
  		}
  		return this;
  	},

  	// @method getPane(name? : String): HTMLElement
  	// Returns the \`HTMLElement\` representing the named pane on the map. If \`name\` is omitted, returns the pane for this layer.
  	getPane: function (name) {
  		return this._map.getPane(name ? (this.options[name] || name) : this.options.pane);
  	},

  	addInteractiveTarget: function (targetEl) {
  		this._map._targets[stamp(targetEl)] = this;
  		return this;
  	},

  	removeInteractiveTarget: function (targetEl) {
  		delete this._map._targets[stamp(targetEl)];
  		return this;
  	},

  	// @method getAttribution: String
  	// Used by the \`attribution control\`, returns the [attribution option](#gridlayer-attribution).
  	getAttribution: function () {
  		return this.options.attribution;
  	},

  	_layerAdd: function (e) {
  		var map = e.target;

  		// check in case layer gets added and then removed before the map is ready
  		if (!map.hasLayer(this)) { return; }

  		this._map = map;
  		this._zoomAnimated = map._zoomAnimated;

  		if (this.getEvents) {
  			var events = this.getEvents();
  			map.on(events, this);
  			this.once('remove', function () {
  				map.off(events, this);
  			}, this);
  		}

  		this.onAdd(map);

  		this.fire('add');
  		map.fire('layeradd', {layer: this});
  	}
  });

  /* @section Extension methods
   * @uninheritable
   *
   * Every layer should extend from \`L.Layer\` and (re-)implement the following methods.
   *
   * @method onAdd(map: Map): this
   * Should contain code that creates DOM elements for the layer, adds them to \`map panes\` where they should belong and puts listeners on relevant map events. Called on [\`map.addLayer(layer)\`](#map-addlayer).
   *
   * @method onRemove(map: Map): this
   * Should contain all clean up code that removes the layer's elements from the DOM and removes listeners previously added in [\`onAdd\`](#layer-onadd). Called on [\`map.removeLayer(layer)\`](#map-removelayer).
   *
   * @method getEvents(): Object
   * This optional method should return an object like \`{ viewreset: this._reset }\` for [\`addEventListener\`](#evented-addeventlistener). The event handlers in this object will be automatically added and removed from the map with your layer.
   *
   * @method getAttribution(): String
   * This optional method should return a string containing HTML to be shown on the \`Attribution control\` whenever the layer is visible.
   *
   * @method beforeAdd(map: Map): this
   * Optional method. Called on [\`map.addLayer(layer)\`](#map-addlayer), before the layer is added to the map, before events are initialized, without waiting until the map is in a usable state. Use for early initialization only.
   */


  /* @namespace Map
   * @section Layer events
   *
   * @event layeradd: LayerEvent
   * Fired when a new layer is added to the map.
   *
   * @event layerremove: LayerEvent
   * Fired when some layer is removed from the map
   *
   * @section Methods for Layers and Controls
   */
  Map.include({
  	// @method addLayer(layer: Layer): this
  	// Adds the given layer to the map
  	addLayer: function (layer) {
  		if (!layer._layerAdd) {
  			throw new Error('The provided object is not a Layer.');
  		}

  		var id = stamp(layer);
  		if (this._layers[id]) { return this; }
  		this._layers[id] = layer;

  		layer._mapToAdd = this;

  		if (layer.beforeAdd) {
  			layer.beforeAdd(this);
  		}

  		this.whenReady(layer._layerAdd, layer);

  		return this;
  	},

  	// @method removeLayer(layer: Layer): this
  	// Removes the given layer from the map.
  	removeLayer: function (layer) {
  		var id = stamp(layer);

  		if (!this._layers[id]) { return this; }

  		if (this._loaded) {
  			layer.onRemove(this);
  		}

  		delete this._layers[id];

  		if (this._loaded) {
  			this.fire('layerremove', {layer: layer});
  			layer.fire('remove');
  		}

  		layer._map = layer._mapToAdd = null;

  		return this;
  	},

  	// @method hasLayer(layer: Layer): Boolean
  	// Returns \`true\` if the given layer is currently added to the map
  	hasLayer: function (layer) {
  		return stamp(layer) in this._layers;
  	},

  	/* @method eachLayer(fn: Function, context?: Object): this
  	 * Iterates over the layers of the map, optionally specifying context of the iterator function.
  	 * \`\`\`
  	 * map.eachLayer(function(layer){
  	 *     layer.bindPopup('Hello');
  	 * });
  	 * \`\`\`
  	 */
  	eachLayer: function (method, context) {
  		for (var i in this._layers) {
  			method.call(context, this._layers[i]);
  		}
  		return this;
  	},

  	_addLayers: function (layers) {
  		layers = layers ? (isArray(layers) ? layers : [layers]) : [];

  		for (var i = 0, len = layers.length; i < len; i++) {
  			this.addLayer(layers[i]);
  		}
  	},

  	_addZoomLimit: function (layer) {
  		if (!isNaN(layer.options.maxZoom) || !isNaN(layer.options.minZoom)) {
  			this._zoomBoundLayers[stamp(layer)] = layer;
  			this._updateZoomLevels();
  		}
  	},

  	_removeZoomLimit: function (layer) {
  		var id = stamp(layer);

  		if (this._zoomBoundLayers[id]) {
  			delete this._zoomBoundLayers[id];
  			this._updateZoomLevels();
  		}
  	},

  	_updateZoomLevels: function () {
  		var minZoom = Infinity,
  		    maxZoom = -Infinity,
  		    oldZoomSpan = this._getZoomSpan();

  		for (var i in this._zoomBoundLayers) {
  			var options = this._zoomBoundLayers[i].options;

  			minZoom = options.minZoom === undefined ? minZoom : Math.min(minZoom, options.minZoom);
  			maxZoom = options.maxZoom === undefined ? maxZoom : Math.max(maxZoom, options.maxZoom);
  		}

  		this._layersMaxZoom = maxZoom === -Infinity ? undefined : maxZoom;
  		this._layersMinZoom = minZoom === Infinity ? undefined : minZoom;

  		// @section Map state change events
  		// @event zoomlevelschange: Event
  		// Fired when the number of zoomlevels on the map is changed due
  		// to adding or removing a layer.
  		if (oldZoomSpan !== this._getZoomSpan()) {
  			this.fire('zoomlevelschange');
  		}

  		if (this.options.maxZoom === undefined && this._layersMaxZoom && this.getZoom() > this._layersMaxZoom) {
  			this.setZoom(this._layersMaxZoom);
  		}
  		if (this.options.minZoom === undefined && this._layersMinZoom && this.getZoom() < this._layersMinZoom) {
  			this.setZoom(this._layersMinZoom);
  		}
  	}
  });

  /*\r
   * @class LayerGroup\r
   * @aka L.LayerGroup\r
   * @inherits Interactive layer\r
   *\r
   * Used to group several layers and handle them as one. If you add it to the map,\r
   * any layers added or removed from the group will be added/removed on the map as\r
   * well. Extends \`Layer\`.\r
   *\r
   * @example\r
   *\r
   * \`\`\`js\r
   * L.layerGroup([marker1, marker2])\r
   * 	.addLayer(polyline)\r
   * 	.addTo(map);\r
   * \`\`\`\r
   */\r
\r
  var LayerGroup = Layer.extend({\r
\r
  	initialize: function (layers, options) {\r
  		setOptions(this, options);\r
\r
  		this._layers = {};\r
\r
  		var i, len;\r
\r
  		if (layers) {\r
  			for (i = 0, len = layers.length; i < len; i++) {\r
  				this.addLayer(layers[i]);\r
  			}\r
  		}\r
  	},\r
\r
  	// @method addLayer(layer: Layer): this\r
  	// Adds the given layer to the group.\r
  	addLayer: function (layer) {\r
  		var id = this.getLayerId(layer);\r
\r
  		this._layers[id] = layer;\r
\r
  		if (this._map) {\r
  			this._map.addLayer(layer);\r
  		}\r
\r
  		return this;\r
  	},\r
\r
  	// @method removeLayer(layer: Layer): this\r
  	// Removes the given layer from the group.\r
  	// @alternative\r
  	// @method removeLayer(id: Number): this\r
  	// Removes the layer with the given internal ID from the group.\r
  	removeLayer: function (layer) {\r
  		var id = layer in this._layers ? layer : this.getLayerId(layer);\r
\r
  		if (this._map && this._layers[id]) {\r
  			this._map.removeLayer(this._layers[id]);\r
  		}\r
\r
  		delete this._layers[id];\r
\r
  		return this;\r
  	},\r
\r
  	// @method hasLayer(layer: Layer): Boolean\r
  	// Returns \`true\` if the given layer is currently added to the group.\r
  	// @alternative\r
  	// @method hasLayer(id: Number): Boolean\r
  	// Returns \`true\` if the given internal ID is currently added to the group.\r
  	hasLayer: function (layer) {\r
  		var layerId = typeof layer === 'number' ? layer : this.getLayerId(layer);\r
  		return layerId in this._layers;\r
  	},\r
\r
  	// @method clearLayers(): this\r
  	// Removes all the layers from the group.\r
  	clearLayers: function () {\r
  		return this.eachLayer(this.removeLayer, this);\r
  	},\r
\r
  	// @method invoke(methodName: String, \u2026): this\r
  	// Calls \`methodName\` on every layer contained in this group, passing any\r
  	// additional parameters. Has no effect if the layers contained do not\r
  	// implement \`methodName\`.\r
  	invoke: function (methodName) {\r
  		var args = Array.prototype.slice.call(arguments, 1),\r
  		    i, layer;\r
\r
  		for (i in this._layers) {\r
  			layer = this._layers[i];\r
\r
  			if (layer[methodName]) {\r
  				layer[methodName].apply(layer, args);\r
  			}\r
  		}\r
\r
  		return this;\r
  	},\r
\r
  	onAdd: function (map) {\r
  		this.eachLayer(map.addLayer, map);\r
  	},\r
\r
  	onRemove: function (map) {\r
  		this.eachLayer(map.removeLayer, map);\r
  	},\r
\r
  	// @method eachLayer(fn: Function, context?: Object): this\r
  	// Iterates over the layers of the group, optionally specifying context of the iterator function.\r
  	// \`\`\`js\r
  	// group.eachLayer(function (layer) {\r
  	// 	layer.bindPopup('Hello');\r
  	// });\r
  	// \`\`\`\r
  	eachLayer: function (method, context) {\r
  		for (var i in this._layers) {\r
  			method.call(context, this._layers[i]);\r
  		}\r
  		return this;\r
  	},\r
\r
  	// @method getLayer(id: Number): Layer\r
  	// Returns the layer with the given internal ID.\r
  	getLayer: function (id) {\r
  		return this._layers[id];\r
  	},\r
\r
  	// @method getLayers(): Layer[]\r
  	// Returns an array of all the layers added to the group.\r
  	getLayers: function () {\r
  		var layers = [];\r
  		this.eachLayer(layers.push, layers);\r
  		return layers;\r
  	},\r
\r
  	// @method setZIndex(zIndex: Number): this\r
  	// Calls \`setZIndex\` on every layer contained in this group, passing the z-index.\r
  	setZIndex: function (zIndex) {\r
  		return this.invoke('setZIndex', zIndex);\r
  	},\r
\r
  	// @method getLayerId(layer: Layer): Number\r
  	// Returns the internal ID for a layer\r
  	getLayerId: function (layer) {\r
  		return stamp(layer);\r
  	}\r
  });\r
\r
\r
  // @factory L.layerGroup(layers?: Layer[], options?: Object)\r
  // Create a layer group, optionally given an initial set of layers and an \`options\` object.\r
  var layerGroup = function (layers, options) {\r
  	return new LayerGroup(layers, options);\r
  };

  /*\r
   * @class FeatureGroup\r
   * @aka L.FeatureGroup\r
   * @inherits LayerGroup\r
   *\r
   * Extended \`LayerGroup\` that makes it easier to do the same thing to all its member layers:\r
   *  * [\`bindPopup\`](#layer-bindpopup) binds a popup to all of the layers at once (likewise with [\`bindTooltip\`](#layer-bindtooltip))\r
   *  * Events are propagated to the \`FeatureGroup\`, so if the group has an event\r
   * handler, it will handle events from any of the layers. This includes mouse events\r
   * and custom events.\r
   *  * Has \`layeradd\` and \`layerremove\` events\r
   *\r
   * @example\r
   *\r
   * \`\`\`js\r
   * L.featureGroup([marker1, marker2, polyline])\r
   * 	.bindPopup('Hello world!')\r
   * 	.on('click', function() { alert('Clicked on a member of the group!'); })\r
   * 	.addTo(map);\r
   * \`\`\`\r
   */\r
\r
  var FeatureGroup = LayerGroup.extend({\r
\r
  	addLayer: function (layer) {\r
  		if (this.hasLayer(layer)) {\r
  			return this;\r
  		}\r
\r
  		layer.addEventParent(this);\r
\r
  		LayerGroup.prototype.addLayer.call(this, layer);\r
\r
  		// @event layeradd: LayerEvent\r
  		// Fired when a layer is added to this \`FeatureGroup\`\r
  		return this.fire('layeradd', {layer: layer});\r
  	},\r
\r
  	removeLayer: function (layer) {\r
  		if (!this.hasLayer(layer)) {\r
  			return this;\r
  		}\r
  		if (layer in this._layers) {\r
  			layer = this._layers[layer];\r
  		}\r
\r
  		layer.removeEventParent(this);\r
\r
  		LayerGroup.prototype.removeLayer.call(this, layer);\r
\r
  		// @event layerremove: LayerEvent\r
  		// Fired when a layer is removed from this \`FeatureGroup\`\r
  		return this.fire('layerremove', {layer: layer});\r
  	},\r
\r
  	// @method setStyle(style: Path options): this\r
  	// Sets the given path options to each layer of the group that has a \`setStyle\` method.\r
  	setStyle: function (style) {\r
  		return this.invoke('setStyle', style);\r
  	},\r
\r
  	// @method bringToFront(): this\r
  	// Brings the layer group to the top of all other layers\r
  	bringToFront: function () {\r
  		return this.invoke('bringToFront');\r
  	},\r
\r
  	// @method bringToBack(): this\r
  	// Brings the layer group to the back of all other layers\r
  	bringToBack: function () {\r
  		return this.invoke('bringToBack');\r
  	},\r
\r
  	// @method getBounds(): LatLngBounds\r
  	// Returns the LatLngBounds of the Feature Group (created from bounds and coordinates of its children).\r
  	getBounds: function () {\r
  		var bounds = new LatLngBounds();\r
\r
  		for (var id in this._layers) {\r
  			var layer = this._layers[id];\r
  			bounds.extend(layer.getBounds ? layer.getBounds() : layer.getLatLng());\r
  		}\r
  		return bounds;\r
  	}\r
  });\r
\r
  // @factory L.featureGroup(layers?: Layer[], options?: Object)\r
  // Create a feature group, optionally given an initial set of layers and an \`options\` object.\r
  var featureGroup = function (layers, options) {\r
  	return new FeatureGroup(layers, options);\r
  };

  /*\r
   * @class Icon\r
   * @aka L.Icon\r
   *\r
   * Represents an icon to provide when creating a marker.\r
   *\r
   * @example\r
   *\r
   * \`\`\`js\r
   * var myIcon = L.icon({\r
   *     iconUrl: 'my-icon.png',\r
   *     iconRetinaUrl: 'my-icon@2x.png',\r
   *     iconSize: [38, 95],\r
   *     iconAnchor: [22, 94],\r
   *     popupAnchor: [-3, -76],\r
   *     shadowUrl: 'my-icon-shadow.png',\r
   *     shadowRetinaUrl: 'my-icon-shadow@2x.png',\r
   *     shadowSize: [68, 95],\r
   *     shadowAnchor: [22, 94]\r
   * });\r
   *\r
   * L.marker([50.505, 30.57], {icon: myIcon}).addTo(map);\r
   * \`\`\`\r
   *\r
   * \`L.Icon.Default\` extends \`L.Icon\` and is the blue icon Leaflet uses for markers by default.\r
   *\r
   */\r
\r
  var Icon = Class.extend({\r
\r
  	/* @section\r
  	 * @aka Icon options\r
  	 *\r
  	 * @option iconUrl: String = null\r
  	 * **(required)** The URL to the icon image (absolute or relative to your script path).\r
  	 *\r
  	 * @option iconRetinaUrl: String = null\r
  	 * The URL to a retina sized version of the icon image (absolute or relative to your\r
  	 * script path). Used for Retina screen devices.\r
  	 *\r
  	 * @option iconSize: Point = null\r
  	 * Size of the icon image in pixels.\r
  	 *\r
  	 * @option iconAnchor: Point = null\r
  	 * The coordinates of the "tip" of the icon (relative to its top left corner). The icon\r
  	 * will be aligned so that this point is at the marker's geographical location. Centered\r
  	 * by default if size is specified, also can be set in CSS with negative margins.\r
  	 *\r
  	 * @option popupAnchor: Point = [0, 0]\r
  	 * The coordinates of the point from which popups will "open", relative to the icon anchor.\r
  	 *\r
  	 * @option tooltipAnchor: Point = [0, 0]\r
  	 * The coordinates of the point from which tooltips will "open", relative to the icon anchor.\r
  	 *\r
  	 * @option shadowUrl: String = null\r
  	 * The URL to the icon shadow image. If not specified, no shadow image will be created.\r
  	 *\r
  	 * @option shadowRetinaUrl: String = null\r
  	 *\r
  	 * @option shadowSize: Point = null\r
  	 * Size of the shadow image in pixels.\r
  	 *\r
  	 * @option shadowAnchor: Point = null\r
  	 * The coordinates of the "tip" of the shadow (relative to its top left corner) (the same\r
  	 * as iconAnchor if not specified).\r
  	 *\r
  	 * @option className: String = ''\r
  	 * A custom class name to assign to both icon and shadow images. Empty by default.\r
  	 */\r
\r
  	options: {\r
  		popupAnchor: [0, 0],\r
  		tooltipAnchor: [0, 0],\r
\r
  		// @option crossOrigin: Boolean|String = false\r
  		// Whether the crossOrigin attribute will be added to the tiles.\r
  		// If a String is provided, all tiles will have their crossOrigin attribute set to the String provided. This is needed if you want to access tile pixel data.\r
  		// Refer to [CORS Settings](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes) for valid String values.\r
  		crossOrigin: false\r
  	},\r
\r
  	initialize: function (options) {\r
  		setOptions(this, options);\r
  	},\r
\r
  	// @method createIcon(oldIcon?: HTMLElement): HTMLElement\r
  	// Called internally when the icon has to be shown, returns a \`<img>\` HTML element\r
  	// styled according to the options.\r
  	createIcon: function (oldIcon) {\r
  		return this._createIcon('icon', oldIcon);\r
  	},\r
\r
  	// @method createShadow(oldIcon?: HTMLElement): HTMLElement\r
  	// As \`createIcon\`, but for the shadow beneath it.\r
  	createShadow: function (oldIcon) {\r
  		return this._createIcon('shadow', oldIcon);\r
  	},\r
\r
  	_createIcon: function (name, oldIcon) {\r
  		var src = this._getIconUrl(name);\r
\r
  		if (!src) {\r
  			if (name === 'icon') {\r
  				throw new Error('iconUrl not set in Icon options (see the docs).');\r
  			}\r
  			return null;\r
  		}\r
\r
  		var img = this._createImg(src, oldIcon && oldIcon.tagName === 'IMG' ? oldIcon : null);\r
  		this._setIconStyles(img, name);\r
\r
  		if (this.options.crossOrigin || this.options.crossOrigin === '') {\r
  			img.crossOrigin = this.options.crossOrigin === true ? '' : this.options.crossOrigin;\r
  		}\r
\r
  		return img;\r
  	},\r
\r
  	_setIconStyles: function (img, name) {\r
  		var options = this.options;\r
  		var sizeOption = options[name + 'Size'];\r
\r
  		if (typeof sizeOption === 'number') {\r
  			sizeOption = [sizeOption, sizeOption];\r
  		}\r
\r
  		var size = toPoint(sizeOption),\r
  		    anchor = toPoint(name === 'shadow' && options.shadowAnchor || options.iconAnchor ||\r
  		            size && size.divideBy(2, true));\r
\r
  		img.className = 'leaflet-marker-' + name + ' ' + (options.className || '');\r
\r
  		if (anchor) {\r
  			img.style.marginLeft = (-anchor.x) + 'px';\r
  			img.style.marginTop  = (-anchor.y) + 'px';\r
  		}\r
\r
  		if (size) {\r
  			img.style.width  = size.x + 'px';\r
  			img.style.height = size.y + 'px';\r
  		}\r
  	},\r
\r
  	_createImg: function (src, el) {\r
  		el = el || document.createElement('img');\r
  		el.src = src;\r
  		return el;\r
  	},\r
\r
  	_getIconUrl: function (name) {\r
  		return Browser.retina && this.options[name + 'RetinaUrl'] || this.options[name + 'Url'];\r
  	}\r
  });\r
\r
\r
  // @factory L.icon(options: Icon options)\r
  // Creates an icon instance with the given options.\r
  function icon(options) {\r
  	return new Icon(options);\r
  }

  /*
   * @miniclass Icon.Default (Icon)
   * @aka L.Icon.Default
   * @section
   *
   * A trivial subclass of \`Icon\`, represents the icon to use in \`Marker\`s when
   * no icon is specified. Points to the blue marker image distributed with Leaflet
   * releases.
   *
   * In order to customize the default icon, just change the properties of \`L.Icon.Default.prototype.options\`
   * (which is a set of \`Icon options\`).
   *
   * If you want to _completely_ replace the default icon, override the
   * \`L.Marker.prototype.options.icon\` with your own icon instead.
   */

  var IconDefault = Icon.extend({

  	options: {
  		iconUrl:       'marker-icon.png',
  		iconRetinaUrl: 'marker-icon-2x.png',
  		shadowUrl:     'marker-shadow.png',
  		iconSize:    [25, 41],
  		iconAnchor:  [12, 41],
  		popupAnchor: [1, -34],
  		tooltipAnchor: [16, -28],
  		shadowSize:  [41, 41]
  	},

  	_getIconUrl: function (name) {
  		if (typeof IconDefault.imagePath !== 'string') {	// Deprecated, backwards-compatibility only
  			IconDefault.imagePath = this._detectIconPath();
  		}

  		// @option imagePath: String
  		// \`Icon.Default\` will try to auto-detect the location of the
  		// blue icon images. If you are placing these images in a non-standard
  		// way, set this option to point to the right path.
  		return (this.options.imagePath || IconDefault.imagePath) + Icon.prototype._getIconUrl.call(this, name);
  	},

  	_stripUrl: function (path) {	// separate function to use in tests
  		var strip = function (str, re, idx) {
  			var match = re.exec(str);
  			return match && match[idx];
  		};
  		path = strip(path, /^url\\((['"])?(.+)\\1\\)$/, 2);
  		return path && strip(path, /^(.*)marker-icon\\.png$/, 1);
  	},

  	_detectIconPath: function () {
  		var el = create$1('div',  'leaflet-default-icon-path', document.body);
  		var path = getStyle(el, 'background-image') ||
  		           getStyle(el, 'backgroundImage');	// IE8

  		document.body.removeChild(el);
  		path = this._stripUrl(path);
  		if (path) { return path; }
  		var link = document.querySelector('link[href$="leaflet.css"]');
  		if (!link) { return ''; }
  		return link.href.substring(0, link.href.length - 'leaflet.css'.length - 1);
  	}
  });

  /*
   * L.Handler.MarkerDrag is used internally by L.Marker to make the markers draggable.
   */


  /* @namespace Marker
   * @section Interaction handlers
   *
   * Interaction handlers are properties of a marker instance that allow you to control interaction behavior in runtime, enabling or disabling certain features such as dragging (see \`Handler\` methods). Example:
   *
   * \`\`\`js
   * marker.dragging.disable();
   * \`\`\`
   *
   * @property dragging: Handler
   * Marker dragging handler (by both mouse and touch). Only valid when the marker is on the map (Otherwise set [\`marker.options.draggable\`](#marker-draggable)).
   */

  var MarkerDrag = Handler.extend({
  	initialize: function (marker) {
  		this._marker = marker;
  	},

  	addHooks: function () {
  		var icon = this._marker._icon;

  		if (!this._draggable) {
  			this._draggable = new Draggable(icon, icon, true);
  		}

  		this._draggable.on({
  			dragstart: this._onDragStart,
  			predrag: this._onPreDrag,
  			drag: this._onDrag,
  			dragend: this._onDragEnd
  		}, this).enable();

  		addClass(icon, 'leaflet-marker-draggable');
  	},

  	removeHooks: function () {
  		this._draggable.off({
  			dragstart: this._onDragStart,
  			predrag: this._onPreDrag,
  			drag: this._onDrag,
  			dragend: this._onDragEnd
  		}, this).disable();

  		if (this._marker._icon) {
  			removeClass(this._marker._icon, 'leaflet-marker-draggable');
  		}
  	},

  	moved: function () {
  		return this._draggable && this._draggable._moved;
  	},

  	_adjustPan: function (e) {
  		var marker = this._marker,
  		    map = marker._map,
  		    speed = this._marker.options.autoPanSpeed,
  		    padding = this._marker.options.autoPanPadding,
  		    iconPos = getPosition(marker._icon),
  		    bounds = map.getPixelBounds(),
  		    origin = map.getPixelOrigin();

  		var panBounds = toBounds(
  			bounds.min._subtract(origin).add(padding),
  			bounds.max._subtract(origin).subtract(padding)
  		);

  		if (!panBounds.contains(iconPos)) {
  			// Compute incremental movement
  			var movement = toPoint(
  				(Math.max(panBounds.max.x, iconPos.x) - panBounds.max.x) / (bounds.max.x - panBounds.max.x) -
  				(Math.min(panBounds.min.x, iconPos.x) - panBounds.min.x) / (bounds.min.x - panBounds.min.x),

  				(Math.max(panBounds.max.y, iconPos.y) - panBounds.max.y) / (bounds.max.y - panBounds.max.y) -
  				(Math.min(panBounds.min.y, iconPos.y) - panBounds.min.y) / (bounds.min.y - panBounds.min.y)
  			).multiplyBy(speed);

  			map.panBy(movement, {animate: false});

  			this._draggable._newPos._add(movement);
  			this._draggable._startPos._add(movement);

  			setPosition(marker._icon, this._draggable._newPos);
  			this._onDrag(e);

  			this._panRequest = requestAnimFrame(this._adjustPan.bind(this, e));
  		}
  	},

  	_onDragStart: function () {
  		// @section Dragging events
  		// @event dragstart: Event
  		// Fired when the user starts dragging the marker.

  		// @event movestart: Event
  		// Fired when the marker starts moving (because of dragging).

  		this._oldLatLng = this._marker.getLatLng();

  		// When using ES6 imports it could not be set when \`Popup\` was not imported as well
  		this._marker.closePopup && this._marker.closePopup();

  		this._marker
  			.fire('movestart')
  			.fire('dragstart');
  	},

  	_onPreDrag: function (e) {
  		if (this._marker.options.autoPan) {
  			cancelAnimFrame(this._panRequest);
  			this._panRequest = requestAnimFrame(this._adjustPan.bind(this, e));
  		}
  	},

  	_onDrag: function (e) {
  		var marker = this._marker,
  		    shadow = marker._shadow,
  		    iconPos = getPosition(marker._icon),
  		    latlng = marker._map.layerPointToLatLng(iconPos);

  		// update shadow position
  		if (shadow) {
  			setPosition(shadow, iconPos);
  		}

  		marker._latlng = latlng;
  		e.latlng = latlng;
  		e.oldLatLng = this._oldLatLng;

  		// @event drag: Event
  		// Fired repeatedly while the user drags the marker.
  		marker
  		    .fire('move', e)
  		    .fire('drag', e);
  	},

  	_onDragEnd: function (e) {
  		// @event dragend: DragEndEvent
  		// Fired when the user stops dragging the marker.

  		 cancelAnimFrame(this._panRequest);

  		// @event moveend: Event
  		// Fired when the marker stops moving (because of dragging).
  		delete this._oldLatLng;
  		this._marker
  		    .fire('moveend')
  		    .fire('dragend', e);
  	}
  });

  /*\r
   * @class Marker\r
   * @inherits Interactive layer\r
   * @aka L.Marker\r
   * L.Marker is used to display clickable/draggable icons on the map. Extends \`Layer\`.\r
   *\r
   * @example\r
   *\r
   * \`\`\`js\r
   * L.marker([50.5, 30.5]).addTo(map);\r
   * \`\`\`\r
   */\r
\r
  var Marker = Layer.extend({\r
\r
  	// @section\r
  	// @aka Marker options\r
  	options: {\r
  		// @option icon: Icon = *\r
  		// Icon instance to use for rendering the marker.\r
  		// See [Icon documentation](#L.Icon) for details on how to customize the marker icon.\r
  		// If not specified, a common instance of \`L.Icon.Default\` is used.\r
  		icon: new IconDefault(),\r
\r
  		// Option inherited from "Interactive layer" abstract class\r
  		interactive: true,\r
\r
  		// @option keyboard: Boolean = true\r
  		// Whether the marker can be tabbed to with a keyboard and clicked by pressing enter.\r
  		keyboard: true,\r
\r
  		// @option title: String = ''\r
  		// Text for the browser tooltip that appear on marker hover (no tooltip by default).\r
  		// [Useful for accessibility](https://leafletjs.com/examples/accessibility/#markers-must-be-labelled).\r
  		title: '',\r
\r
  		// @option alt: String = 'Marker'\r
  		// Text for the \`alt\` attribute of the icon image.\r
  		// [Useful for accessibility](https://leafletjs.com/examples/accessibility/#markers-must-be-labelled).\r
  		alt: 'Marker',\r
\r
  		// @option zIndexOffset: Number = 0\r
  		// By default, marker images zIndex is set automatically based on its latitude. Use this option if you want to put the marker on top of all others (or below), specifying a high value like \`1000\` (or high negative value, respectively).\r
  		zIndexOffset: 0,\r
\r
  		// @option opacity: Number = 1.0\r
  		// The opacity of the marker.\r
  		opacity: 1,\r
\r
  		// @option riseOnHover: Boolean = false\r
  		// If \`true\`, the marker will get on top of others when you hover the mouse over it.\r
  		riseOnHover: false,\r
\r
  		// @option riseOffset: Number = 250\r
  		// The z-index offset used for the \`riseOnHover\` feature.\r
  		riseOffset: 250,\r
\r
  		// @option pane: String = 'markerPane'\r
  		// \`Map pane\` where the markers icon will be added.\r
  		pane: 'markerPane',\r
\r
  		// @option shadowPane: String = 'shadowPane'\r
  		// \`Map pane\` where the markers shadow will be added.\r
  		shadowPane: 'shadowPane',\r
\r
  		// @option bubblingMouseEvents: Boolean = false\r
  		// When \`true\`, a mouse event on this marker will trigger the same event on the map\r
  		// (unless [\`L.DomEvent.stopPropagation\`](#domevent-stoppropagation) is used).\r
  		bubblingMouseEvents: false,\r
\r
  		// @option autoPanOnFocus: Boolean = true\r
  		// When \`true\`, the map will pan whenever the marker is focused (via\r
  		// e.g. pressing \`tab\` on the keyboard) to ensure the marker is\r
  		// visible within the map's bounds\r
  		autoPanOnFocus: true,\r
\r
  		// @section Draggable marker options\r
  		// @option draggable: Boolean = false\r
  		// Whether the marker is draggable with mouse/touch or not.\r
  		draggable: false,\r
\r
  		// @option autoPan: Boolean = false\r
  		// Whether to pan the map when dragging this marker near its edge or not.\r
  		autoPan: false,\r
\r
  		// @option autoPanPadding: Point = Point(50, 50)\r
  		// Distance (in pixels to the left/right and to the top/bottom) of the\r
  		// map edge to start panning the map.\r
  		autoPanPadding: [50, 50],\r
\r
  		// @option autoPanSpeed: Number = 10\r
  		// Number of pixels the map should pan by.\r
  		autoPanSpeed: 10\r
  	},\r
\r
  	/* @section\r
  	 *\r
  	 * In addition to [shared layer methods](#Layer) like \`addTo()\` and \`remove()\` and [popup methods](#Popup) like bindPopup() you can also use the following methods:\r
  	 */\r
\r
  	initialize: function (latlng, options) {\r
  		setOptions(this, options);\r
  		this._latlng = toLatLng(latlng);\r
  	},\r
\r
  	onAdd: function (map) {\r
  		this._zoomAnimated = this._zoomAnimated && map.options.markerZoomAnimation;\r
\r
  		if (this._zoomAnimated) {\r
  			map.on('zoomanim', this._animateZoom, this);\r
  		}\r
\r
  		this._initIcon();\r
  		this.update();\r
  	},\r
\r
  	onRemove: function (map) {\r
  		if (this.dragging && this.dragging.enabled()) {\r
  			this.options.draggable = true;\r
  			this.dragging.removeHooks();\r
  		}\r
  		delete this.dragging;\r
\r
  		if (this._zoomAnimated) {\r
  			map.off('zoomanim', this._animateZoom, this);\r
  		}\r
\r
  		this._removeIcon();\r
  		this._removeShadow();\r
  	},\r
\r
  	getEvents: function () {\r
  		return {\r
  			zoom: this.update,\r
  			viewreset: this.update\r
  		};\r
  	},\r
\r
  	// @method getLatLng: LatLng\r
  	// Returns the current geographical position of the marker.\r
  	getLatLng: function () {\r
  		return this._latlng;\r
  	},\r
\r
  	// @method setLatLng(latlng: LatLng): this\r
  	// Changes the marker position to the given point.\r
  	setLatLng: function (latlng) {\r
  		var oldLatLng = this._latlng;\r
  		this._latlng = toLatLng(latlng);\r
  		this.update();\r
\r
  		// @event move: Event\r
  		// Fired when the marker is moved via [\`setLatLng\`](#marker-setlatlng) or by [dragging](#marker-dragging). Old and new coordinates are included in event arguments as \`oldLatLng\`, \`latlng\`.\r
  		return this.fire('move', {oldLatLng: oldLatLng, latlng: this._latlng});\r
  	},\r
\r
  	// @method setZIndexOffset(offset: Number): this\r
  	// Changes the [zIndex offset](#marker-zindexoffset) of the marker.\r
  	setZIndexOffset: function (offset) {\r
  		this.options.zIndexOffset = offset;\r
  		return this.update();\r
  	},\r
\r
  	// @method getIcon: Icon\r
  	// Returns the current icon used by the marker\r
  	getIcon: function () {\r
  		return this.options.icon;\r
  	},\r
\r
  	// @method setIcon(icon: Icon): this\r
  	// Changes the marker icon.\r
  	setIcon: function (icon) {\r
\r
  		this.options.icon = icon;\r
\r
  		if (this._map) {\r
  			this._initIcon();\r
  			this.update();\r
  		}\r
\r
  		if (this._popup) {\r
  			this.bindPopup(this._popup, this._popup.options);\r
  		}\r
\r
  		return this;\r
  	},\r
\r
  	getElement: function () {\r
  		return this._icon;\r
  	},\r
\r
  	update: function () {\r
\r
  		if (this._icon && this._map) {\r
  			var pos = this._map.latLngToLayerPoint(this._latlng).round();\r
  			this._setPos(pos);\r
  		}\r
\r
  		return this;\r
  	},\r
\r
  	_initIcon: function () {\r
  		var options = this.options,\r
  		    classToAdd = 'leaflet-zoom-' + (this._zoomAnimated ? 'animated' : 'hide');\r
\r
  		var icon = options.icon.createIcon(this._icon),\r
  		    addIcon = false;\r
\r
  		// if we're not reusing the icon, remove the old one and init new one\r
  		if (icon !== this._icon) {\r
  			if (this._icon) {\r
  				this._removeIcon();\r
  			}\r
  			addIcon = true;\r
\r
  			if (options.title) {\r
  				icon.title = options.title;\r
  			}\r
\r
  			if (icon.tagName === 'IMG') {\r
  				icon.alt = options.alt || '';\r
  			}\r
  		}\r
\r
  		addClass(icon, classToAdd);\r
\r
  		if (options.keyboard) {\r
  			icon.tabIndex = '0';\r
  			icon.setAttribute('role', 'button');\r
  		}\r
\r
  		this._icon = icon;\r
\r
  		if (options.riseOnHover) {\r
  			this.on({\r
  				mouseover: this._bringToFront,\r
  				mouseout: this._resetZIndex\r
  			});\r
  		}\r
\r
  		if (this.options.autoPanOnFocus) {\r
  			on(icon, 'focus', this._panOnFocus, this);\r
  		}\r
\r
  		var newShadow = options.icon.createShadow(this._shadow),\r
  		    addShadow = false;\r
\r
  		if (newShadow !== this._shadow) {\r
  			this._removeShadow();\r
  			addShadow = true;\r
  		}\r
\r
  		if (newShadow) {\r
  			addClass(newShadow, classToAdd);\r
  			newShadow.alt = '';\r
  		}\r
  		this._shadow = newShadow;\r
\r
\r
  		if (options.opacity < 1) {\r
  			this._updateOpacity();\r
  		}\r
\r
\r
  		if (addIcon) {\r
  			this.getPane().appendChild(this._icon);\r
  		}\r
  		this._initInteraction();\r
  		if (newShadow && addShadow) {\r
  			this.getPane(options.shadowPane).appendChild(this._shadow);\r
  		}\r
  	},\r
\r
  	_removeIcon: function () {\r
  		if (this.options.riseOnHover) {\r
  			this.off({\r
  				mouseover: this._bringToFront,\r
  				mouseout: this._resetZIndex\r
  			});\r
  		}\r
\r
  		if (this.options.autoPanOnFocus) {\r
  			off(this._icon, 'focus', this._panOnFocus, this);\r
  		}\r
\r
  		remove(this._icon);\r
  		this.removeInteractiveTarget(this._icon);\r
\r
  		this._icon = null;\r
  	},\r
\r
  	_removeShadow: function () {\r
  		if (this._shadow) {\r
  			remove(this._shadow);\r
  		}\r
  		this._shadow = null;\r
  	},\r
\r
  	_setPos: function (pos) {\r
\r
  		if (this._icon) {\r
  			setPosition(this._icon, pos);\r
  		}\r
\r
  		if (this._shadow) {\r
  			setPosition(this._shadow, pos);\r
  		}\r
\r
  		this._zIndex = pos.y + this.options.zIndexOffset;\r
\r
  		this._resetZIndex();\r
  	},\r
\r
  	_updateZIndex: function (offset) {\r
  		if (this._icon) {\r
  			this._icon.style.zIndex = this._zIndex + offset;\r
  		}\r
  	},\r
\r
  	_animateZoom: function (opt) {\r
  		var pos = this._map._latLngToNewLayerPoint(this._latlng, opt.zoom, opt.center).round();\r
\r
  		this._setPos(pos);\r
  	},\r
\r
  	_initInteraction: function () {\r
\r
  		if (!this.options.interactive) { return; }\r
\r
  		addClass(this._icon, 'leaflet-interactive');\r
\r
  		this.addInteractiveTarget(this._icon);\r
\r
  		if (MarkerDrag) {\r
  			var draggable = this.options.draggable;\r
  			if (this.dragging) {\r
  				draggable = this.dragging.enabled();\r
  				this.dragging.disable();\r
  			}\r
\r
  			this.dragging = new MarkerDrag(this);\r
\r
  			if (draggable) {\r
  				this.dragging.enable();\r
  			}\r
  		}\r
  	},\r
\r
  	// @method setOpacity(opacity: Number): this\r
  	// Changes the opacity of the marker.\r
  	setOpacity: function (opacity) {\r
  		this.options.opacity = opacity;\r
  		if (this._map) {\r
  			this._updateOpacity();\r
  		}\r
\r
  		return this;\r
  	},\r
\r
  	_updateOpacity: function () {\r
  		var opacity = this.options.opacity;\r
\r
  		if (this._icon) {\r
  			setOpacity(this._icon, opacity);\r
  		}\r
\r
  		if (this._shadow) {\r
  			setOpacity(this._shadow, opacity);\r
  		}\r
  	},\r
\r
  	_bringToFront: function () {\r
  		this._updateZIndex(this.options.riseOffset);\r
  	},\r
\r
  	_resetZIndex: function () {\r
  		this._updateZIndex(0);\r
  	},\r
\r
  	_panOnFocus: function () {\r
  		var map = this._map;\r
  		if (!map) { return; }\r
\r
  		var iconOpts = this.options.icon.options;\r
  		var size = iconOpts.iconSize ? toPoint(iconOpts.iconSize) : toPoint(0, 0);\r
  		var anchor = iconOpts.iconAnchor ? toPoint(iconOpts.iconAnchor) : toPoint(0, 0);\r
\r
  		map.panInside(this._latlng, {\r
  			paddingTopLeft: anchor,\r
  			paddingBottomRight: size.subtract(anchor)\r
  		});\r
  	},\r
\r
  	_getPopupAnchor: function () {\r
  		return this.options.icon.options.popupAnchor;\r
  	},\r
\r
  	_getTooltipAnchor: function () {\r
  		return this.options.icon.options.tooltipAnchor;\r
  	}\r
  });\r
\r
\r
  // factory L.marker(latlng: LatLng, options? : Marker options)\r
\r
  // @factory L.marker(latlng: LatLng, options? : Marker options)\r
  // Instantiates a Marker object given a geographical point and optionally an options object.\r
  function marker(latlng, options) {\r
  	return new Marker(latlng, options);\r
  }

  /*
   * @class Path
   * @aka L.Path
   * @inherits Interactive layer
   *
   * An abstract class that contains options and constants shared between vector
   * overlays (Polygon, Polyline, Circle). Do not use it directly. Extends \`Layer\`.
   */

  var Path = Layer.extend({

  	// @section
  	// @aka Path options
  	options: {
  		// @option stroke: Boolean = true
  		// Whether to draw stroke along the path. Set it to \`false\` to disable borders on polygons or circles.
  		stroke: true,

  		// @option color: String = '#3388ff'
  		// Stroke color
  		color: '#3388ff',

  		// @option weight: Number = 3
  		// Stroke width in pixels
  		weight: 3,

  		// @option opacity: Number = 1.0
  		// Stroke opacity
  		opacity: 1,

  		// @option lineCap: String= 'round'
  		// A string that defines [shape to be used at the end](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-linecap) of the stroke.
  		lineCap: 'round',

  		// @option lineJoin: String = 'round'
  		// A string that defines [shape to be used at the corners](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-linejoin) of the stroke.
  		lineJoin: 'round',

  		// @option dashArray: String = null
  		// A string that defines the stroke [dash pattern](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-dasharray). Doesn't work on \`Canvas\`-powered layers in [some old browsers](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/setLineDash#Browser_compatibility).
  		dashArray: null,

  		// @option dashOffset: String = null
  		// A string that defines the [distance into the dash pattern to start the dash](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-dashoffset). Doesn't work on \`Canvas\`-powered layers in [some old browsers](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/setLineDash#Browser_compatibility).
  		dashOffset: null,

  		// @option fill: Boolean = depends
  		// Whether to fill the path with color. Set it to \`false\` to disable filling on polygons or circles.
  		fill: false,

  		// @option fillColor: String = *
  		// Fill color. Defaults to the value of the [\`color\`](#path-color) option
  		fillColor: null,

  		// @option fillOpacity: Number = 0.2
  		// Fill opacity.
  		fillOpacity: 0.2,

  		// @option fillRule: String = 'evenodd'
  		// A string that defines [how the inside of a shape](https://developer.mozilla.org/docs/Web/SVG/Attribute/fill-rule) is determined.
  		fillRule: 'evenodd',

  		// className: '',

  		// Option inherited from "Interactive layer" abstract class
  		interactive: true,

  		// @option bubblingMouseEvents: Boolean = true
  		// When \`true\`, a mouse event on this path will trigger the same event on the map
  		// (unless [\`L.DomEvent.stopPropagation\`](#domevent-stoppropagation) is used).
  		bubblingMouseEvents: true
  	},

  	beforeAdd: function (map) {
  		// Renderer is set here because we need to call renderer.getEvents
  		// before this.getEvents.
  		this._renderer = map.getRenderer(this);
  	},

  	onAdd: function () {
  		this._renderer._initPath(this);
  		this._reset();
  		this._renderer._addPath(this);
  	},

  	onRemove: function () {
  		this._renderer._removePath(this);
  	},

  	// @method redraw(): this
  	// Redraws the layer. Sometimes useful after you changed the coordinates that the path uses.
  	redraw: function () {
  		if (this._map) {
  			this._renderer._updatePath(this);
  		}
  		return this;
  	},

  	// @method setStyle(style: Path options): this
  	// Changes the appearance of a Path based on the options in the \`Path options\` object.
  	setStyle: function (style) {
  		setOptions(this, style);
  		if (this._renderer) {
  			this._renderer._updateStyle(this);
  			if (this.options.stroke && style && Object.prototype.hasOwnProperty.call(style, 'weight')) {
  				this._updateBounds();
  			}
  		}
  		return this;
  	},

  	// @method bringToFront(): this
  	// Brings the layer to the top of all path layers.
  	bringToFront: function () {
  		if (this._renderer) {
  			this._renderer._bringToFront(this);
  		}
  		return this;
  	},

  	// @method bringToBack(): this
  	// Brings the layer to the bottom of all path layers.
  	bringToBack: function () {
  		if (this._renderer) {
  			this._renderer._bringToBack(this);
  		}
  		return this;
  	},

  	getElement: function () {
  		return this._path;
  	},

  	_reset: function () {
  		// defined in child classes
  		this._project();
  		this._update();
  	},

  	_clickTolerance: function () {
  		// used when doing hit detection for Canvas layers
  		return (this.options.stroke ? this.options.weight / 2 : 0) +
  		  (this._renderer.options.tolerance || 0);
  	}
  });

  /*
   * @class CircleMarker
   * @aka L.CircleMarker
   * @inherits Path
   *
   * A circle of a fixed size with radius specified in pixels. Extends \`Path\`.
   */

  var CircleMarker = Path.extend({

  	// @section
  	// @aka CircleMarker options
  	options: {
  		fill: true,

  		// @option radius: Number = 10
  		// Radius of the circle marker, in pixels
  		radius: 10
  	},

  	initialize: function (latlng, options) {
  		setOptions(this, options);
  		this._latlng = toLatLng(latlng);
  		this._radius = this.options.radius;
  	},

  	// @method setLatLng(latLng: LatLng): this
  	// Sets the position of a circle marker to a new location.
  	setLatLng: function (latlng) {
  		var oldLatLng = this._latlng;
  		this._latlng = toLatLng(latlng);
  		this.redraw();

  		// @event move: Event
  		// Fired when the marker is moved via [\`setLatLng\`](#circlemarker-setlatlng). Old and new coordinates are included in event arguments as \`oldLatLng\`, \`latlng\`.
  		return this.fire('move', {oldLatLng: oldLatLng, latlng: this._latlng});
  	},

  	// @method getLatLng(): LatLng
  	// Returns the current geographical position of the circle marker
  	getLatLng: function () {
  		return this._latlng;
  	},

  	// @method setRadius(radius: Number): this
  	// Sets the radius of a circle marker. Units are in pixels.
  	setRadius: function (radius) {
  		this.options.radius = this._radius = radius;
  		return this.redraw();
  	},

  	// @method getRadius(): Number
  	// Returns the current radius of the circle
  	getRadius: function () {
  		return this._radius;
  	},

  	setStyle : function (options) {
  		var radius = options && options.radius || this._radius;
  		Path.prototype.setStyle.call(this, options);
  		this.setRadius(radius);
  		return this;
  	},

  	_project: function () {
  		this._point = this._map.latLngToLayerPoint(this._latlng);
  		this._updateBounds();
  	},

  	_updateBounds: function () {
  		var r = this._radius,
  		    r2 = this._radiusY || r,
  		    w = this._clickTolerance(),
  		    p = [r + w, r2 + w];
  		this._pxBounds = new Bounds(this._point.subtract(p), this._point.add(p));
  	},

  	_update: function () {
  		if (this._map) {
  			this._updatePath();
  		}
  	},

  	_updatePath: function () {
  		this._renderer._updateCircle(this);
  	},

  	_empty: function () {
  		return this._radius && !this._renderer._bounds.intersects(this._pxBounds);
  	},

  	// Needed by the \`Canvas\` renderer for interactivity
  	_containsPoint: function (p) {
  		return p.distanceTo(this._point) <= this._radius + this._clickTolerance();
  	}
  });


  // @factory L.circleMarker(latlng: LatLng, options?: CircleMarker options)
  // Instantiates a circle marker object given a geographical point, and an optional options object.
  function circleMarker(latlng, options) {
  	return new CircleMarker(latlng, options);
  }

  /*
   * @class Circle
   * @aka L.Circle
   * @inherits CircleMarker
   *
   * A class for drawing circle overlays on a map. Extends \`CircleMarker\`.
   *
   * It's an approximation and starts to diverge from a real circle closer to poles (due to projection distortion).
   *
   * @example
   *
   * \`\`\`js
   * L.circle([50.5, 30.5], {radius: 200}).addTo(map);
   * \`\`\`
   */

  var Circle = CircleMarker.extend({

  	initialize: function (latlng, options, legacyOptions) {
  		if (typeof options === 'number') {
  			// Backwards compatibility with 0.7.x factory (latlng, radius, options?)
  			options = extend({}, legacyOptions, {radius: options});
  		}
  		setOptions(this, options);
  		this._latlng = toLatLng(latlng);

  		if (isNaN(this.options.radius)) { throw new Error('Circle radius cannot be NaN'); }

  		// @section
  		// @aka Circle options
  		// @option radius: Number; Radius of the circle, in meters.
  		this._mRadius = this.options.radius;
  	},

  	// @method setRadius(radius: Number): this
  	// Sets the radius of a circle. Units are in meters.
  	setRadius: function (radius) {
  		this._mRadius = radius;
  		return this.redraw();
  	},

  	// @method getRadius(): Number
  	// Returns the current radius of a circle. Units are in meters.
  	getRadius: function () {
  		return this._mRadius;
  	},

  	// @method getBounds(): LatLngBounds
  	// Returns the \`LatLngBounds\` of the path.
  	getBounds: function () {
  		var half = [this._radius, this._radiusY || this._radius];

  		return new LatLngBounds(
  			this._map.layerPointToLatLng(this._point.subtract(half)),
  			this._map.layerPointToLatLng(this._point.add(half)));
  	},

  	setStyle: Path.prototype.setStyle,

  	_project: function () {

  		var lng = this._latlng.lng,
  		    lat = this._latlng.lat,
  		    map = this._map,
  		    crs = map.options.crs;

  		if (crs.distance === Earth.distance) {
  			var d = Math.PI / 180,
  			    latR = (this._mRadius / Earth.R) / d,
  			    top = map.project([lat + latR, lng]),
  			    bottom = map.project([lat - latR, lng]),
  			    p = top.add(bottom).divideBy(2),
  			    lat2 = map.unproject(p).lat,
  			    lngR = Math.acos((Math.cos(latR * d) - Math.sin(lat * d) * Math.sin(lat2 * d)) /
  			            (Math.cos(lat * d) * Math.cos(lat2 * d))) / d;

  			if (isNaN(lngR) || lngR === 0) {
  				lngR = latR / Math.cos(Math.PI / 180 * lat); // Fallback for edge case, #2425
  			}

  			this._point = p.subtract(map.getPixelOrigin());
  			this._radius = isNaN(lngR) ? 0 : p.x - map.project([lat2, lng - lngR]).x;
  			this._radiusY = p.y - top.y;

  		} else {
  			var latlng2 = crs.unproject(crs.project(this._latlng).subtract([this._mRadius, 0]));

  			this._point = map.latLngToLayerPoint(this._latlng);
  			this._radius = this._point.x - map.latLngToLayerPoint(latlng2).x;
  		}

  		this._updateBounds();
  	}
  });

  // @factory L.circle(latlng: LatLng, options?: Circle options)
  // Instantiates a circle object given a geographical point, and an options object
  // which contains the circle radius.
  // @alternative
  // @factory L.circle(latlng: LatLng, radius: Number, options?: Circle options)
  // Obsolete way of instantiating a circle, for compatibility with 0.7.x code.
  // Do not use in new applications or plugins.
  function circle(latlng, options, legacyOptions) {
  	return new Circle(latlng, options, legacyOptions);
  }

  /*
   * @class Polyline
   * @aka L.Polyline
   * @inherits Path
   *
   * A class for drawing polyline overlays on a map. Extends \`Path\`.
   *
   * @example
   *
   * \`\`\`js
   * // create a red polyline from an array of LatLng points
   * var latlngs = [
   * 	[45.51, -122.68],
   * 	[37.77, -122.43],
   * 	[34.04, -118.2]
   * ];
   *
   * var polyline = L.polyline(latlngs, {color: 'red'}).addTo(map);
   *
   * // zoom the map to the polyline
   * map.fitBounds(polyline.getBounds());
   * \`\`\`
   *
   * You can also pass a multi-dimensional array to represent a \`MultiPolyline\` shape:
   *
   * \`\`\`js
   * // create a red polyline from an array of arrays of LatLng points
   * var latlngs = [
   * 	[[45.51, -122.68],
   * 	 [37.77, -122.43],
   * 	 [34.04, -118.2]],
   * 	[[40.78, -73.91],
   * 	 [41.83, -87.62],
   * 	 [32.76, -96.72]]
   * ];
   * \`\`\`
   */


  var Polyline = Path.extend({

  	// @section
  	// @aka Polyline options
  	options: {
  		// @option smoothFactor: Number = 1.0
  		// How much to simplify the polyline on each zoom level. More means
  		// better performance and smoother look, and less means more accurate representation.
  		smoothFactor: 1.0,

  		// @option noClip: Boolean = false
  		// Disable polyline clipping.
  		noClip: false
  	},

  	initialize: function (latlngs, options) {
  		setOptions(this, options);
  		this._setLatLngs(latlngs);
  	},

  	// @method getLatLngs(): LatLng[]
  	// Returns an array of the points in the path, or nested arrays of points in case of multi-polyline.
  	getLatLngs: function () {
  		return this._latlngs;
  	},

  	// @method setLatLngs(latlngs: LatLng[]): this
  	// Replaces all the points in the polyline with the given array of geographical points.
  	setLatLngs: function (latlngs) {
  		this._setLatLngs(latlngs);
  		return this.redraw();
  	},

  	// @method isEmpty(): Boolean
  	// Returns \`true\` if the Polyline has no LatLngs.
  	isEmpty: function () {
  		return !this._latlngs.length;
  	},

  	// @method closestLayerPoint(p: Point): Point
  	// Returns the point closest to \`p\` on the Polyline.
  	closestLayerPoint: function (p) {
  		var minDistance = Infinity,
  		    minPoint = null,
  		    closest = _sqClosestPointOnSegment,
  		    p1, p2;

  		for (var j = 0, jLen = this._parts.length; j < jLen; j++) {
  			var points = this._parts[j];

  			for (var i = 1, len = points.length; i < len; i++) {
  				p1 = points[i - 1];
  				p2 = points[i];

  				var sqDist = closest(p, p1, p2, true);

  				if (sqDist < minDistance) {
  					minDistance = sqDist;
  					minPoint = closest(p, p1, p2);
  				}
  			}
  		}
  		if (minPoint) {
  			minPoint.distance = Math.sqrt(minDistance);
  		}
  		return minPoint;
  	},

  	// @method getCenter(): LatLng
  	// Returns the center ([centroid](https://en.wikipedia.org/wiki/Centroid)) of the polyline.
  	getCenter: function () {
  		// throws error when not yet added to map as this center calculation requires projected coordinates
  		if (!this._map) {
  			throw new Error('Must add layer to map before using getCenter()');
  		}
  		return polylineCenter(this._defaultShape(), this._map.options.crs);
  	},

  	// @method getBounds(): LatLngBounds
  	// Returns the \`LatLngBounds\` of the path.
  	getBounds: function () {
  		return this._bounds;
  	},

  	// @method addLatLng(latlng: LatLng, latlngs?: LatLng[]): this
  	// Adds a given point to the polyline. By default, adds to the first ring of
  	// the polyline in case of a multi-polyline, but can be overridden by passing
  	// a specific ring as a LatLng array (that you can earlier access with [\`getLatLngs\`](#polyline-getlatlngs)).
  	addLatLng: function (latlng, latlngs) {
  		latlngs = latlngs || this._defaultShape();
  		latlng = toLatLng(latlng);
  		latlngs.push(latlng);
  		this._bounds.extend(latlng);
  		return this.redraw();
  	},

  	_setLatLngs: function (latlngs) {
  		this._bounds = new LatLngBounds();
  		this._latlngs = this._convertLatLngs(latlngs);
  	},

  	_defaultShape: function () {
  		return isFlat(this._latlngs) ? this._latlngs : this._latlngs[0];
  	},

  	// recursively convert latlngs input into actual LatLng instances; calculate bounds along the way
  	_convertLatLngs: function (latlngs) {
  		var result = [],
  		    flat = isFlat(latlngs);

  		for (var i = 0, len = latlngs.length; i < len; i++) {
  			if (flat) {
  				result[i] = toLatLng(latlngs[i]);
  				this._bounds.extend(result[i]);
  			} else {
  				result[i] = this._convertLatLngs(latlngs[i]);
  			}
  		}

  		return result;
  	},

  	_project: function () {
  		var pxBounds = new Bounds();
  		this._rings = [];
  		this._projectLatlngs(this._latlngs, this._rings, pxBounds);

  		if (this._bounds.isValid() && pxBounds.isValid()) {
  			this._rawPxBounds = pxBounds;
  			this._updateBounds();
  		}
  	},

  	_updateBounds: function () {
  		var w = this._clickTolerance(),
  		    p = new Point(w, w);

  		if (!this._rawPxBounds) {
  			return;
  		}

  		this._pxBounds = new Bounds([
  			this._rawPxBounds.min.subtract(p),
  			this._rawPxBounds.max.add(p)
  		]);
  	},

  	// recursively turns latlngs into a set of rings with projected coordinates
  	_projectLatlngs: function (latlngs, result, projectedBounds) {
  		var flat = latlngs[0] instanceof LatLng,
  		    len = latlngs.length,
  		    i, ring;

  		if (flat) {
  			ring = [];
  			for (i = 0; i < len; i++) {
  				ring[i] = this._map.latLngToLayerPoint(latlngs[i]);
  				projectedBounds.extend(ring[i]);
  			}
  			result.push(ring);
  		} else {
  			for (i = 0; i < len; i++) {
  				this._projectLatlngs(latlngs[i], result, projectedBounds);
  			}
  		}
  	},

  	// clip polyline by renderer bounds so that we have less to render for performance
  	_clipPoints: function () {
  		var bounds = this._renderer._bounds;

  		this._parts = [];
  		if (!this._pxBounds || !this._pxBounds.intersects(bounds)) {
  			return;
  		}

  		if (this.options.noClip) {
  			this._parts = this._rings;
  			return;
  		}

  		var parts = this._parts,
  		    i, j, k, len, len2, segment, points;

  		for (i = 0, k = 0, len = this._rings.length; i < len; i++) {
  			points = this._rings[i];

  			for (j = 0, len2 = points.length; j < len2 - 1; j++) {
  				segment = clipSegment(points[j], points[j + 1], bounds, j, true);

  				if (!segment) { continue; }

  				parts[k] = parts[k] || [];
  				parts[k].push(segment[0]);

  				// if segment goes out of screen, or it's the last one, it's the end of the line part
  				if ((segment[1] !== points[j + 1]) || (j === len2 - 2)) {
  					parts[k].push(segment[1]);
  					k++;
  				}
  			}
  		}
  	},

  	// simplify each clipped part of the polyline for performance
  	_simplifyPoints: function () {
  		var parts = this._parts,
  		    tolerance = this.options.smoothFactor;

  		for (var i = 0, len = parts.length; i < len; i++) {
  			parts[i] = simplify(parts[i], tolerance);
  		}
  	},

  	_update: function () {
  		if (!this._map) { return; }

  		this._clipPoints();
  		this._simplifyPoints();
  		this._updatePath();
  	},

  	_updatePath: function () {
  		this._renderer._updatePoly(this);
  	},

  	// Needed by the \`Canvas\` renderer for interactivity
  	_containsPoint: function (p, closed) {
  		var i, j, k, len, len2, part,
  		    w = this._clickTolerance();

  		if (!this._pxBounds || !this._pxBounds.contains(p)) { return false; }

  		// hit detection for polylines
  		for (i = 0, len = this._parts.length; i < len; i++) {
  			part = this._parts[i];

  			for (j = 0, len2 = part.length, k = len2 - 1; j < len2; k = j++) {
  				if (!closed && (j === 0)) { continue; }

  				if (pointToSegmentDistance(p, part[k], part[j]) <= w) {
  					return true;
  				}
  			}
  		}
  		return false;
  	}
  });

  // @factory L.polyline(latlngs: LatLng[], options?: Polyline options)
  // Instantiates a polyline object given an array of geographical points and
  // optionally an options object. You can create a \`Polyline\` object with
  // multiple separate lines (\`MultiPolyline\`) by passing an array of arrays
  // of geographic points.
  function polyline(latlngs, options) {
  	return new Polyline(latlngs, options);
  }

  // Retrocompat. Allow plugins to support Leaflet versions before and after 1.1.
  Polyline._flat = _flat;

  /*
   * @class Polygon
   * @aka L.Polygon
   * @inherits Polyline
   *
   * A class for drawing polygon overlays on a map. Extends \`Polyline\`.
   *
   * Note that points you pass when creating a polygon shouldn't have an additional last point equal to the first one \u2014 it's better to filter out such points.
   *
   *
   * @example
   *
   * \`\`\`js
   * // create a red polygon from an array of LatLng points
   * var latlngs = [[37, -109.05],[41, -109.03],[41, -102.05],[37, -102.04]];
   *
   * var polygon = L.polygon(latlngs, {color: 'red'}).addTo(map);
   *
   * // zoom the map to the polygon
   * map.fitBounds(polygon.getBounds());
   * \`\`\`
   *
   * You can also pass an array of arrays of latlngs, with the first array representing the outer shape and the other arrays representing holes in the outer shape:
   *
   * \`\`\`js
   * var latlngs = [
   *   [[37, -109.05],[41, -109.03],[41, -102.05],[37, -102.04]], // outer ring
   *   [[37.29, -108.58],[40.71, -108.58],[40.71, -102.50],[37.29, -102.50]] // hole
   * ];
   * \`\`\`
   *
   * Additionally, you can pass a multi-dimensional array to represent a MultiPolygon shape.
   *
   * \`\`\`js
   * var latlngs = [
   *   [ // first polygon
   *     [[37, -109.05],[41, -109.03],[41, -102.05],[37, -102.04]], // outer ring
   *     [[37.29, -108.58],[40.71, -108.58],[40.71, -102.50],[37.29, -102.50]] // hole
   *   ],
   *   [ // second polygon
   *     [[41, -111.03],[45, -111.04],[45, -104.05],[41, -104.05]]
   *   ]
   * ];
   * \`\`\`
   */

  var Polygon = Polyline.extend({

  	options: {
  		fill: true
  	},

  	isEmpty: function () {
  		return !this._latlngs.length || !this._latlngs[0].length;
  	},

  	// @method getCenter(): LatLng
  	// Returns the center ([centroid](http://en.wikipedia.org/wiki/Centroid)) of the Polygon.
  	getCenter: function () {
  		// throws error when not yet added to map as this center calculation requires projected coordinates
  		if (!this._map) {
  			throw new Error('Must add layer to map before using getCenter()');
  		}
  		return polygonCenter(this._defaultShape(), this._map.options.crs);
  	},

  	_convertLatLngs: function (latlngs) {
  		var result = Polyline.prototype._convertLatLngs.call(this, latlngs),
  		    len = result.length;

  		// remove last point if it equals first one
  		if (len >= 2 && result[0] instanceof LatLng && result[0].equals(result[len - 1])) {
  			result.pop();
  		}
  		return result;
  	},

  	_setLatLngs: function (latlngs) {
  		Polyline.prototype._setLatLngs.call(this, latlngs);
  		if (isFlat(this._latlngs)) {
  			this._latlngs = [this._latlngs];
  		}
  	},

  	_defaultShape: function () {
  		return isFlat(this._latlngs[0]) ? this._latlngs[0] : this._latlngs[0][0];
  	},

  	_clipPoints: function () {
  		// polygons need a different clipping algorithm so we redefine that

  		var bounds = this._renderer._bounds,
  		    w = this.options.weight,
  		    p = new Point(w, w);

  		// increase clip padding by stroke width to avoid stroke on clip edges
  		bounds = new Bounds(bounds.min.subtract(p), bounds.max.add(p));

  		this._parts = [];
  		if (!this._pxBounds || !this._pxBounds.intersects(bounds)) {
  			return;
  		}

  		if (this.options.noClip) {
  			this._parts = this._rings;
  			return;
  		}

  		for (var i = 0, len = this._rings.length, clipped; i < len; i++) {
  			clipped = clipPolygon(this._rings[i], bounds, true);
  			if (clipped.length) {
  				this._parts.push(clipped);
  			}
  		}
  	},

  	_updatePath: function () {
  		this._renderer._updatePoly(this, true);
  	},

  	// Needed by the \`Canvas\` renderer for interactivity
  	_containsPoint: function (p) {
  		var inside = false,
  		    part, p1, p2, i, j, k, len, len2;

  		if (!this._pxBounds || !this._pxBounds.contains(p)) { return false; }

  		// ray casting algorithm for detecting if point is in polygon
  		for (i = 0, len = this._parts.length; i < len; i++) {
  			part = this._parts[i];

  			for (j = 0, len2 = part.length, k = len2 - 1; j < len2; k = j++) {
  				p1 = part[j];
  				p2 = part[k];

  				if (((p1.y > p.y) !== (p2.y > p.y)) && (p.x < (p2.x - p1.x) * (p.y - p1.y) / (p2.y - p1.y) + p1.x)) {
  					inside = !inside;
  				}
  			}
  		}

  		// also check if it's on polygon stroke
  		return inside || Polyline.prototype._containsPoint.call(this, p, true);
  	}

  });


  // @factory L.polygon(latlngs: LatLng[], options?: Polyline options)
  function polygon(latlngs, options) {
  	return new Polygon(latlngs, options);
  }

  /*\r
   * @class GeoJSON\r
   * @aka L.GeoJSON\r
   * @inherits FeatureGroup\r
   *\r
   * Represents a GeoJSON object or an array of GeoJSON objects. Allows you to parse\r
   * GeoJSON data and display it on the map. Extends \`FeatureGroup\`.\r
   *\r
   * @example\r
   *\r
   * \`\`\`js\r
   * L.geoJSON(data, {\r
   * 	style: function (feature) {\r
   * 		return {color: feature.properties.color};\r
   * 	}\r
   * }).bindPopup(function (layer) {\r
   * 	return layer.feature.properties.description;\r
   * }).addTo(map);\r
   * \`\`\`\r
   */\r
\r
  var GeoJSON = FeatureGroup.extend({\r
\r
  	/* @section\r
  	 * @aka GeoJSON options\r
  	 *\r
  	 * @option pointToLayer: Function = *\r
  	 * A \`Function\` defining how GeoJSON points spawn Leaflet layers. It is internally\r
  	 * called when data is added, passing the GeoJSON point feature and its \`LatLng\`.\r
  	 * The default is to spawn a default \`Marker\`:\r
  	 * \`\`\`js\r
  	 * function(geoJsonPoint, latlng) {\r
  	 * 	return L.marker(latlng);\r
  	 * }\r
  	 * \`\`\`\r
  	 *\r
  	 * @option style: Function = *\r
  	 * A \`Function\` defining the \`Path options\` for styling GeoJSON lines and polygons,\r
  	 * called internally when data is added.\r
  	 * The default value is to not override any defaults:\r
  	 * \`\`\`js\r
  	 * function (geoJsonFeature) {\r
  	 * 	return {}\r
  	 * }\r
  	 * \`\`\`\r
  	 *\r
  	 * @option onEachFeature: Function = *\r
  	 * A \`Function\` that will be called once for each created \`Feature\`, after it has\r
  	 * been created and styled. Useful for attaching events and popups to features.\r
  	 * The default is to do nothing with the newly created layers:\r
  	 * \`\`\`js\r
  	 * function (feature, layer) {}\r
  	 * \`\`\`\r
  	 *\r
  	 * @option filter: Function = *\r
  	 * A \`Function\` that will be used to decide whether to include a feature or not.\r
  	 * The default is to include all features:\r
  	 * \`\`\`js\r
  	 * function (geoJsonFeature) {\r
  	 * 	return true;\r
  	 * }\r
  	 * \`\`\`\r
  	 * Note: dynamically changing the \`filter\` option will have effect only on newly\r
  	 * added data. It will _not_ re-evaluate already included features.\r
  	 *\r
  	 * @option coordsToLatLng: Function = *\r
  	 * A \`Function\` that will be used for converting GeoJSON coordinates to \`LatLng\`s.\r
  	 * The default is the \`coordsToLatLng\` static method.\r
  	 *\r
  	 * @option markersInheritOptions: Boolean = false\r
  	 * Whether default Markers for "Point" type Features inherit from group options.\r
  	 */\r
\r
  	initialize: function (geojson, options) {\r
  		setOptions(this, options);\r
\r
  		this._layers = {};\r
\r
  		if (geojson) {\r
  			this.addData(geojson);\r
  		}\r
  	},\r
\r
  	// @method addData( <GeoJSON> data ): this\r
  	// Adds a GeoJSON object to the layer.\r
  	addData: function (geojson) {\r
  		var features = isArray(geojson) ? geojson : geojson.features,\r
  		    i, len, feature;\r
\r
  		if (features) {\r
  			for (i = 0, len = features.length; i < len; i++) {\r
  				// only add this if geometry or geometries are set and not null\r
  				feature = features[i];\r
  				if (feature.geometries || feature.geometry || feature.features || feature.coordinates) {\r
  					this.addData(feature);\r
  				}\r
  			}\r
  			return this;\r
  		}\r
\r
  		var options = this.options;\r
\r
  		if (options.filter && !options.filter(geojson)) { return this; }\r
\r
  		var layer = geometryToLayer(geojson, options);\r
  		if (!layer) {\r
  			return this;\r
  		}\r
  		layer.feature = asFeature(geojson);\r
\r
  		layer.defaultOptions = layer.options;\r
  		this.resetStyle(layer);\r
\r
  		if (options.onEachFeature) {\r
  			options.onEachFeature(geojson, layer);\r
  		}\r
\r
  		return this.addLayer(layer);\r
  	},\r
\r
  	// @method resetStyle( <Path> layer? ): this\r
  	// Resets the given vector layer's style to the original GeoJSON style, useful for resetting style after hover events.\r
  	// If \`layer\` is omitted, the style of all features in the current layer is reset.\r
  	resetStyle: function (layer) {\r
  		if (layer === undefined) {\r
  			return this.eachLayer(this.resetStyle, this);\r
  		}\r
  		// reset any custom styles\r
  		layer.options = extend({}, layer.defaultOptions);\r
  		this._setLayerStyle(layer, this.options.style);\r
  		return this;\r
  	},\r
\r
  	// @method setStyle( <Function> style ): this\r
  	// Changes styles of GeoJSON vector layers with the given style function.\r
  	setStyle: function (style) {\r
  		return this.eachLayer(function (layer) {\r
  			this._setLayerStyle(layer, style);\r
  		}, this);\r
  	},\r
\r
  	_setLayerStyle: function (layer, style) {\r
  		if (layer.setStyle) {\r
  			if (typeof style === 'function') {\r
  				style = style(layer.feature);\r
  			}\r
  			layer.setStyle(style);\r
  		}\r
  	}\r
  });\r
\r
  // @section\r
  // There are several static functions which can be called without instantiating L.GeoJSON:\r
\r
  // @function geometryToLayer(featureData: Object, options?: GeoJSON options): Layer\r
  // Creates a \`Layer\` from a given GeoJSON feature. Can use a custom\r
  // [\`pointToLayer\`](#geojson-pointtolayer) and/or [\`coordsToLatLng\`](#geojson-coordstolatlng)\r
  // functions if provided as options.\r
  function geometryToLayer(geojson, options) {\r
\r
  	var geometry = geojson.type === 'Feature' ? geojson.geometry : geojson,\r
  	    coords = geometry ? geometry.coordinates : null,\r
  	    layers = [],\r
  	    pointToLayer = options && options.pointToLayer,\r
  	    _coordsToLatLng = options && options.coordsToLatLng || coordsToLatLng,\r
  	    latlng, latlngs, i, len;\r
\r
  	if (!coords && !geometry) {\r
  		return null;\r
  	}\r
\r
  	switch (geometry.type) {\r
  	case 'Point':\r
  		latlng = _coordsToLatLng(coords);\r
  		return _pointToLayer(pointToLayer, geojson, latlng, options);\r
\r
  	case 'MultiPoint':\r
  		for (i = 0, len = coords.length; i < len; i++) {\r
  			latlng = _coordsToLatLng(coords[i]);\r
  			layers.push(_pointToLayer(pointToLayer, geojson, latlng, options));\r
  		}\r
  		return new FeatureGroup(layers);\r
\r
  	case 'LineString':\r
  	case 'MultiLineString':\r
  		latlngs = coordsToLatLngs(coords, geometry.type === 'LineString' ? 0 : 1, _coordsToLatLng);\r
  		return new Polyline(latlngs, options);\r
\r
  	case 'Polygon':\r
  	case 'MultiPolygon':\r
  		latlngs = coordsToLatLngs(coords, geometry.type === 'Polygon' ? 1 : 2, _coordsToLatLng);\r
  		return new Polygon(latlngs, options);\r
\r
  	case 'GeometryCollection':\r
  		for (i = 0, len = geometry.geometries.length; i < len; i++) {\r
  			var geoLayer = geometryToLayer({\r
  				geometry: geometry.geometries[i],\r
  				type: 'Feature',\r
  				properties: geojson.properties\r
  			}, options);\r
\r
  			if (geoLayer) {\r
  				layers.push(geoLayer);\r
  			}\r
  		}\r
  		return new FeatureGroup(layers);\r
\r
  	case 'FeatureCollection':\r
  		for (i = 0, len = geometry.features.length; i < len; i++) {\r
  			var featureLayer = geometryToLayer(geometry.features[i], options);\r
\r
  			if (featureLayer) {\r
  				layers.push(featureLayer);\r
  			}\r
  		}\r
  		return new FeatureGroup(layers);\r
\r
  	default:\r
  		throw new Error('Invalid GeoJSON object.');\r
  	}\r
  }\r
\r
  function _pointToLayer(pointToLayerFn, geojson, latlng, options) {\r
  	return pointToLayerFn ?\r
  		pointToLayerFn(geojson, latlng) :\r
  		new Marker(latlng, options && options.markersInheritOptions && options);\r
  }\r
\r
  // @function coordsToLatLng(coords: Array): LatLng\r
  // Creates a \`LatLng\` object from an array of 2 numbers (longitude, latitude)\r
  // or 3 numbers (longitude, latitude, altitude) used in GeoJSON for points.\r
  function coordsToLatLng(coords) {\r
  	return new LatLng(coords[1], coords[0], coords[2]);\r
  }\r
\r
  // @function coordsToLatLngs(coords: Array, levelsDeep?: Number, coordsToLatLng?: Function): Array\r
  // Creates a multidimensional array of \`LatLng\`s from a GeoJSON coordinates array.\r
  // \`levelsDeep\` specifies the nesting level (0 is for an array of points, 1 for an array of arrays of points, etc., 0 by default).\r
  // Can use a custom [\`coordsToLatLng\`](#geojson-coordstolatlng) function.\r
  function coordsToLatLngs(coords, levelsDeep, _coordsToLatLng) {\r
  	var latlngs = [];\r
\r
  	for (var i = 0, len = coords.length, latlng; i < len; i++) {\r
  		latlng = levelsDeep ?\r
  			coordsToLatLngs(coords[i], levelsDeep - 1, _coordsToLatLng) :\r
  			(_coordsToLatLng || coordsToLatLng)(coords[i]);\r
\r
  		latlngs.push(latlng);\r
  	}\r
\r
  	return latlngs;\r
  }\r
\r
  // @function latLngToCoords(latlng: LatLng, precision?: Number|false): Array\r
  // Reverse of [\`coordsToLatLng\`](#geojson-coordstolatlng)\r
  // Coordinates values are rounded with [\`formatNum\`](#util-formatnum) function.\r
  function latLngToCoords(latlng, precision) {\r
  	latlng = toLatLng(latlng);\r
  	return latlng.alt !== undefined ?\r
  		[formatNum(latlng.lng, precision), formatNum(latlng.lat, precision), formatNum(latlng.alt, precision)] :\r
  		[formatNum(latlng.lng, precision), formatNum(latlng.lat, precision)];\r
  }\r
\r
  // @function latLngsToCoords(latlngs: Array, levelsDeep?: Number, closed?: Boolean, precision?: Number|false): Array\r
  // Reverse of [\`coordsToLatLngs\`](#geojson-coordstolatlngs)\r
  // \`closed\` determines whether the first point should be appended to the end of the array to close the feature, only used when \`levelsDeep\` is 0. False by default.\r
  // Coordinates values are rounded with [\`formatNum\`](#util-formatnum) function.\r
  function latLngsToCoords(latlngs, levelsDeep, closed, precision) {\r
  	var coords = [];\r
\r
  	for (var i = 0, len = latlngs.length; i < len; i++) {\r
  		// Check for flat arrays required to ensure unbalanced arrays are correctly converted in recursion\r
  		coords.push(levelsDeep ?\r
  			latLngsToCoords(latlngs[i], isFlat(latlngs[i]) ? 0 : levelsDeep - 1, closed, precision) :\r
  			latLngToCoords(latlngs[i], precision));\r
  	}\r
\r
  	if (!levelsDeep && closed && coords.length > 0) {\r
  		coords.push(coords[0].slice());\r
  	}\r
\r
  	return coords;\r
  }\r
\r
  function getFeature(layer, newGeometry) {\r
  	return layer.feature ?\r
  		extend({}, layer.feature, {geometry: newGeometry}) :\r
  		asFeature(newGeometry);\r
  }\r
\r
  // @function asFeature(geojson: Object): Object\r
  // Normalize GeoJSON geometries/features into GeoJSON features.\r
  function asFeature(geojson) {\r
  	if (geojson.type === 'Feature' || geojson.type === 'FeatureCollection') {\r
  		return geojson;\r
  	}\r
\r
  	return {\r
  		type: 'Feature',\r
  		properties: {},\r
  		geometry: geojson\r
  	};\r
  }\r
\r
  var PointToGeoJSON = {\r
  	toGeoJSON: function (precision) {\r
  		return getFeature(this, {\r
  			type: 'Point',\r
  			coordinates: latLngToCoords(this.getLatLng(), precision)\r
  		});\r
  	}\r
  };\r
\r
  // @namespace Marker\r
  // @section Other methods\r
  // @method toGeoJSON(precision?: Number|false): Object\r
  // Coordinates values are rounded with [\`formatNum\`](#util-formatnum) function with given \`precision\`.\r
  // Returns a [\`GeoJSON\`](https://en.wikipedia.org/wiki/GeoJSON) representation of the marker (as a GeoJSON \`Point\` Feature).\r
  Marker.include(PointToGeoJSON);\r
\r
  // @namespace CircleMarker\r
  // @method toGeoJSON(precision?: Number|false): Object\r
  // Coordinates values are rounded with [\`formatNum\`](#util-formatnum) function with given \`precision\`.\r
  // Returns a [\`GeoJSON\`](https://en.wikipedia.org/wiki/GeoJSON) representation of the circle marker (as a GeoJSON \`Point\` Feature).\r
  Circle.include(PointToGeoJSON);\r
  CircleMarker.include(PointToGeoJSON);\r
\r
\r
  // @namespace Polyline\r
  // @method toGeoJSON(precision?: Number|false): Object\r
  // Coordinates values are rounded with [\`formatNum\`](#util-formatnum) function with given \`precision\`.\r
  // Returns a [\`GeoJSON\`](https://en.wikipedia.org/wiki/GeoJSON) representation of the polyline (as a GeoJSON \`LineString\` or \`MultiLineString\` Feature).\r
  Polyline.include({\r
  	toGeoJSON: function (precision) {\r
  		var multi = !isFlat(this._latlngs);\r
\r
  		var coords = latLngsToCoords(this._latlngs, multi ? 1 : 0, false, precision);\r
\r
  		return getFeature(this, {\r
  			type: (multi ? 'Multi' : '') + 'LineString',\r
  			coordinates: coords\r
  		});\r
  	}\r
  });\r
\r
  // @namespace Polygon\r
  // @method toGeoJSON(precision?: Number|false): Object\r
  // Coordinates values are rounded with [\`formatNum\`](#util-formatnum) function with given \`precision\`.\r
  // Returns a [\`GeoJSON\`](https://en.wikipedia.org/wiki/GeoJSON) representation of the polygon (as a GeoJSON \`Polygon\` or \`MultiPolygon\` Feature).\r
  Polygon.include({\r
  	toGeoJSON: function (precision) {\r
  		var holes = !isFlat(this._latlngs),\r
  		    multi = holes && !isFlat(this._latlngs[0]);\r
\r
  		var coords = latLngsToCoords(this._latlngs, multi ? 2 : holes ? 1 : 0, true, precision);\r
\r
  		if (!holes) {\r
  			coords = [coords];\r
  		}\r
\r
  		return getFeature(this, {\r
  			type: (multi ? 'Multi' : '') + 'Polygon',\r
  			coordinates: coords\r
  		});\r
  	}\r
  });\r
\r
\r
  // @namespace LayerGroup\r
  LayerGroup.include({\r
  	toMultiPoint: function (precision) {\r
  		var coords = [];\r
\r
  		this.eachLayer(function (layer) {\r
  			coords.push(layer.toGeoJSON(precision).geometry.coordinates);\r
  		});\r
\r
  		return getFeature(this, {\r
  			type: 'MultiPoint',\r
  			coordinates: coords\r
  		});\r
  	},\r
\r
  	// @method toGeoJSON(precision?: Number|false): Object\r
  	// Coordinates values are rounded with [\`formatNum\`](#util-formatnum) function with given \`precision\`.\r
  	// Returns a [\`GeoJSON\`](https://en.wikipedia.org/wiki/GeoJSON) representation of the layer group (as a GeoJSON \`FeatureCollection\`, \`GeometryCollection\`, or \`MultiPoint\`).\r
  	toGeoJSON: function (precision) {\r
\r
  		var type = this.feature && this.feature.geometry && this.feature.geometry.type;\r
\r
  		if (type === 'MultiPoint') {\r
  			return this.toMultiPoint(precision);\r
  		}\r
\r
  		var isGeometryCollection = type === 'GeometryCollection',\r
  		    jsons = [];\r
\r
  		this.eachLayer(function (layer) {\r
  			if (layer.toGeoJSON) {\r
  				var json = layer.toGeoJSON(precision);\r
  				if (isGeometryCollection) {\r
  					jsons.push(json.geometry);\r
  				} else {\r
  					var feature = asFeature(json);\r
  					// Squash nested feature collections\r
  					if (feature.type === 'FeatureCollection') {\r
  						jsons.push.apply(jsons, feature.features);\r
  					} else {\r
  						jsons.push(feature);\r
  					}\r
  				}\r
  			}\r
  		});\r
\r
  		if (isGeometryCollection) {\r
  			return getFeature(this, {\r
  				geometries: jsons,\r
  				type: 'GeometryCollection'\r
  			});\r
  		}\r
\r
  		return {\r
  			type: 'FeatureCollection',\r
  			features: jsons\r
  		};\r
  	}\r
  });\r
\r
  // @namespace GeoJSON\r
  // @factory L.geoJSON(geojson?: Object, options?: GeoJSON options)\r
  // Creates a GeoJSON layer. Optionally accepts an object in\r
  // [GeoJSON format](https://tools.ietf.org/html/rfc7946) to display on the map\r
  // (you can alternatively add it later with \`addData\` method) and an \`options\` object.\r
  function geoJSON(geojson, options) {\r
  	return new GeoJSON(geojson, options);\r
  }\r
\r
  // Backward compatibility.\r
  var geoJson = geoJSON;

  /*\r
   * @class ImageOverlay\r
   * @aka L.ImageOverlay\r
   * @inherits Interactive layer\r
   *\r
   * Used to load and display a single image over specific bounds of the map. Extends \`Layer\`.\r
   *\r
   * @example\r
   *\r
   * \`\`\`js\r
   * var imageUrl = 'https://maps.lib.utexas.edu/maps/historical/newark_nj_1922.jpg',\r
   * 	imageBounds = [[40.712216, -74.22655], [40.773941, -74.12544]];\r
   * L.imageOverlay(imageUrl, imageBounds).addTo(map);\r
   * \`\`\`\r
   */\r
\r
  var ImageOverlay = Layer.extend({\r
\r
  	// @section\r
  	// @aka ImageOverlay options\r
  	options: {\r
  		// @option opacity: Number = 1.0\r
  		// The opacity of the image overlay.\r
  		opacity: 1,\r
\r
  		// @option alt: String = ''\r
  		// Text for the \`alt\` attribute of the image (useful for accessibility).\r
  		alt: '',\r
\r
  		// @option interactive: Boolean = false\r
  		// If \`true\`, the image overlay will emit [mouse events](#interactive-layer) when clicked or hovered.\r
  		interactive: false,\r
\r
  		// @option crossOrigin: Boolean|String = false\r
  		// Whether the crossOrigin attribute will be added to the image.\r
  		// If a String is provided, the image will have its crossOrigin attribute set to the String provided. This is needed if you want to access image pixel data.\r
  		// Refer to [CORS Settings](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes) for valid String values.\r
  		crossOrigin: false,\r
\r
  		// @option errorOverlayUrl: String = ''\r
  		// URL to the overlay image to show in place of the overlay that failed to load.\r
  		errorOverlayUrl: '',\r
\r
  		// @option zIndex: Number = 1\r
  		// The explicit [zIndex](https://developer.mozilla.org/docs/Web/CSS/CSS_Positioning/Understanding_z_index) of the overlay layer.\r
  		zIndex: 1,\r
\r
  		// @option className: String = ''\r
  		// A custom class name to assign to the image. Empty by default.\r
  		className: ''\r
  	},\r
\r
  	initialize: function (url, bounds, options) { // (String, LatLngBounds, Object)\r
  		this._url = url;\r
  		this._bounds = toLatLngBounds(bounds);\r
\r
  		setOptions(this, options);\r
  	},\r
\r
  	onAdd: function () {\r
  		if (!this._image) {\r
  			this._initImage();\r
\r
  			if (this.options.opacity < 1) {\r
  				this._updateOpacity();\r
  			}\r
  		}\r
\r
  		if (this.options.interactive) {\r
  			addClass(this._image, 'leaflet-interactive');\r
  			this.addInteractiveTarget(this._image);\r
  		}\r
\r
  		this.getPane().appendChild(this._image);\r
  		this._reset();\r
  	},\r
\r
  	onRemove: function () {\r
  		remove(this._image);\r
  		if (this.options.interactive) {\r
  			this.removeInteractiveTarget(this._image);\r
  		}\r
  	},\r
\r
  	// @method setOpacity(opacity: Number): this\r
  	// Sets the opacity of the overlay.\r
  	setOpacity: function (opacity) {\r
  		this.options.opacity = opacity;\r
\r
  		if (this._image) {\r
  			this._updateOpacity();\r
  		}\r
  		return this;\r
  	},\r
\r
  	setStyle: function (styleOpts) {\r
  		if (styleOpts.opacity) {\r
  			this.setOpacity(styleOpts.opacity);\r
  		}\r
  		return this;\r
  	},\r
\r
  	// @method bringToFront(): this\r
  	// Brings the layer to the top of all overlays.\r
  	bringToFront: function () {\r
  		if (this._map) {\r
  			toFront(this._image);\r
  		}\r
  		return this;\r
  	},\r
\r
  	// @method bringToBack(): this\r
  	// Brings the layer to the bottom of all overlays.\r
  	bringToBack: function () {\r
  		if (this._map) {\r
  			toBack(this._image);\r
  		}\r
  		return this;\r
  	},\r
\r
  	// @method setUrl(url: String): this\r
  	// Changes the URL of the image.\r
  	setUrl: function (url) {\r
  		this._url = url;\r
\r
  		if (this._image) {\r
  			this._image.src = url;\r
  		}\r
  		return this;\r
  	},\r
\r
  	// @method setBounds(bounds: LatLngBounds): this\r
  	// Update the bounds that this ImageOverlay covers\r
  	setBounds: function (bounds) {\r
  		this._bounds = toLatLngBounds(bounds);\r
\r
  		if (this._map) {\r
  			this._reset();\r
  		}\r
  		return this;\r
  	},\r
\r
  	getEvents: function () {\r
  		var events = {\r
  			zoom: this._reset,\r
  			viewreset: this._reset\r
  		};\r
\r
  		if (this._zoomAnimated) {\r
  			events.zoomanim = this._animateZoom;\r
  		}\r
\r
  		return events;\r
  	},\r
\r
  	// @method setZIndex(value: Number): this\r
  	// Changes the [zIndex](#imageoverlay-zindex) of the image overlay.\r
  	setZIndex: function (value) {\r
  		this.options.zIndex = value;\r
  		this._updateZIndex();\r
  		return this;\r
  	},\r
\r
  	// @method getBounds(): LatLngBounds\r
  	// Get the bounds that this ImageOverlay covers\r
  	getBounds: function () {\r
  		return this._bounds;\r
  	},\r
\r
  	// @method getElement(): HTMLElement\r
  	// Returns the instance of [\`HTMLImageElement\`](https://developer.mozilla.org/docs/Web/API/HTMLImageElement)\r
  	// used by this overlay.\r
  	getElement: function () {\r
  		return this._image;\r
  	},\r
\r
  	_initImage: function () {\r
  		var wasElementSupplied = this._url.tagName === 'IMG';\r
  		var img = this._image = wasElementSupplied ? this._url : create$1('img');\r
\r
  		addClass(img, 'leaflet-image-layer');\r
  		if (this._zoomAnimated) { addClass(img, 'leaflet-zoom-animated'); }\r
  		if (this.options.className) { addClass(img, this.options.className); }\r
\r
  		img.onselectstart = falseFn;\r
  		img.onmousemove = falseFn;\r
\r
  		// @event load: Event\r
  		// Fired when the ImageOverlay layer has loaded its image\r
  		img.onload = bind(this.fire, this, 'load');\r
  		img.onerror = bind(this._overlayOnError, this, 'error');\r
\r
  		if (this.options.crossOrigin || this.options.crossOrigin === '') {\r
  			img.crossOrigin = this.options.crossOrigin === true ? '' : this.options.crossOrigin;\r
  		}\r
\r
  		if (this.options.zIndex) {\r
  			this._updateZIndex();\r
  		}\r
\r
  		if (wasElementSupplied) {\r
  			this._url = img.src;\r
  			return;\r
  		}\r
\r
  		img.src = this._url;\r
  		img.alt = this.options.alt;\r
  	},\r
\r
  	_animateZoom: function (e) {\r
  		var scale = this._map.getZoomScale(e.zoom),\r
  		    offset = this._map._latLngBoundsToNewLayerBounds(this._bounds, e.zoom, e.center).min;\r
\r
  		setTransform(this._image, offset, scale);\r
  	},\r
\r
  	_reset: function () {\r
  		var image = this._image,\r
  		    bounds = new Bounds(\r
  		        this._map.latLngToLayerPoint(this._bounds.getNorthWest()),\r
  		        this._map.latLngToLayerPoint(this._bounds.getSouthEast())),\r
  		    size = bounds.getSize();\r
\r
  		setPosition(image, bounds.min);\r
\r
  		image.style.width  = size.x + 'px';\r
  		image.style.height = size.y + 'px';\r
  	},\r
\r
  	_updateOpacity: function () {\r
  		setOpacity(this._image, this.options.opacity);\r
  	},\r
\r
  	_updateZIndex: function () {\r
  		if (this._image && this.options.zIndex !== undefined && this.options.zIndex !== null) {\r
  			this._image.style.zIndex = this.options.zIndex;\r
  		}\r
  	},\r
\r
  	_overlayOnError: function () {\r
  		// @event error: Event\r
  		// Fired when the ImageOverlay layer fails to load its image\r
  		this.fire('error');\r
\r
  		var errorUrl = this.options.errorOverlayUrl;\r
  		if (errorUrl && this._url !== errorUrl) {\r
  			this._url = errorUrl;\r
  			this._image.src = errorUrl;\r
  		}\r
  	},\r
\r
  	// @method getCenter(): LatLng\r
  	// Returns the center of the ImageOverlay.\r
  	getCenter: function () {\r
  		return this._bounds.getCenter();\r
  	}\r
  });\r
\r
  // @factory L.imageOverlay(imageUrl: String, bounds: LatLngBounds, options?: ImageOverlay options)\r
  // Instantiates an image overlay object given the URL of the image and the\r
  // geographical bounds it is tied to.\r
  var imageOverlay = function (url, bounds, options) {\r
  	return new ImageOverlay(url, bounds, options);\r
  };

  /*\r
   * @class VideoOverlay\r
   * @aka L.VideoOverlay\r
   * @inherits ImageOverlay\r
   *\r
   * Used to load and display a video player over specific bounds of the map. Extends \`ImageOverlay\`.\r
   *\r
   * A video overlay uses the [\`<video>\`](https://developer.mozilla.org/docs/Web/HTML/Element/video)\r
   * HTML5 element.\r
   *\r
   * @example\r
   *\r
   * \`\`\`js\r
   * var videoUrl = 'https://www.mapbox.com/bites/00188/patricia_nasa.webm',\r
   * 	videoBounds = [[ 32, -130], [ 13, -100]];\r
   * L.videoOverlay(videoUrl, videoBounds ).addTo(map);\r
   * \`\`\`\r
   */\r
\r
  var VideoOverlay = ImageOverlay.extend({\r
\r
  	// @section\r
  	// @aka VideoOverlay options\r
  	options: {\r
  		// @option autoplay: Boolean = true\r
  		// Whether the video starts playing automatically when loaded.\r
  		// On some browsers autoplay will only work with \`muted: true\`\r
  		autoplay: true,\r
\r
  		// @option loop: Boolean = true\r
  		// Whether the video will loop back to the beginning when played.\r
  		loop: true,\r
\r
  		// @option keepAspectRatio: Boolean = true\r
  		// Whether the video will save aspect ratio after the projection.\r
  		// Relevant for supported browsers. See [browser compatibility](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit)\r
  		keepAspectRatio: true,\r
\r
  		// @option muted: Boolean = false\r
  		// Whether the video starts on mute when loaded.\r
  		muted: false,\r
\r
  		// @option playsInline: Boolean = true\r
  		// Mobile browsers will play the video right where it is instead of open it up in fullscreen mode.\r
  		playsInline: true\r
  	},\r
\r
  	_initImage: function () {\r
  		var wasElementSupplied = this._url.tagName === 'VIDEO';\r
  		var vid = this._image = wasElementSupplied ? this._url : create$1('video');\r
\r
  		addClass(vid, 'leaflet-image-layer');\r
  		if (this._zoomAnimated) { addClass(vid, 'leaflet-zoom-animated'); }\r
  		if (this.options.className) { addClass(vid, this.options.className); }\r
\r
  		vid.onselectstart = falseFn;\r
  		vid.onmousemove = falseFn;\r
\r
  		// @event load: Event\r
  		// Fired when the video has finished loading the first frame\r
  		vid.onloadeddata = bind(this.fire, this, 'load');\r
\r
  		if (wasElementSupplied) {\r
  			var sourceElements = vid.getElementsByTagName('source');\r
  			var sources = [];\r
  			for (var j = 0; j < sourceElements.length; j++) {\r
  				sources.push(sourceElements[j].src);\r
  			}\r
\r
  			this._url = (sourceElements.length > 0) ? sources : [vid.src];\r
  			return;\r
  		}\r
\r
  		if (!isArray(this._url)) { this._url = [this._url]; }\r
\r
  		if (!this.options.keepAspectRatio && Object.prototype.hasOwnProperty.call(vid.style, 'objectFit')) {\r
  			vid.style['objectFit'] = 'fill';\r
  		}\r
  		vid.autoplay = !!this.options.autoplay;\r
  		vid.loop = !!this.options.loop;\r
  		vid.muted = !!this.options.muted;\r
  		vid.playsInline = !!this.options.playsInline;\r
  		for (var i = 0; i < this._url.length; i++) {\r
  			var source = create$1('source');\r
  			source.src = this._url[i];\r
  			vid.appendChild(source);\r
  		}\r
  	}\r
\r
  	// @method getElement(): HTMLVideoElement\r
  	// Returns the instance of [\`HTMLVideoElement\`](https://developer.mozilla.org/docs/Web/API/HTMLVideoElement)\r
  	// used by this overlay.\r
  });\r
\r
\r
  // @factory L.videoOverlay(video: String|Array|HTMLVideoElement, bounds: LatLngBounds, options?: VideoOverlay options)\r
  // Instantiates an image overlay object given the URL of the video (or array of URLs, or even a video element) and the\r
  // geographical bounds it is tied to.\r
\r
  function videoOverlay(video, bounds, options) {\r
  	return new VideoOverlay(video, bounds, options);\r
  }

  /*
   * @class SVGOverlay
   * @aka L.SVGOverlay
   * @inherits ImageOverlay
   *
   * Used to load, display and provide DOM access to an SVG file over specific bounds of the map. Extends \`ImageOverlay\`.
   *
   * An SVG overlay uses the [\`<svg>\`](https://developer.mozilla.org/docs/Web/SVG/Element/svg) element.
   *
   * @example
   *
   * \`\`\`js
   * var svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
   * svgElement.setAttribute('xmlns', "http://www.w3.org/2000/svg");
   * svgElement.setAttribute('viewBox', "0 0 200 200");
   * svgElement.innerHTML = '<rect width="200" height="200"/><rect x="75" y="23" width="50" height="50" style="fill:red"/><rect x="75" y="123" width="50" height="50" style="fill:#0013ff"/>';
   * var svgElementBounds = [ [ 32, -130 ], [ 13, -100 ] ];
   * L.svgOverlay(svgElement, svgElementBounds).addTo(map);
   * \`\`\`
   */

  var SVGOverlay = ImageOverlay.extend({
  	_initImage: function () {
  		var el = this._image = this._url;

  		addClass(el, 'leaflet-image-layer');
  		if (this._zoomAnimated) { addClass(el, 'leaflet-zoom-animated'); }
  		if (this.options.className) { addClass(el, this.options.className); }

  		el.onselectstart = falseFn;
  		el.onmousemove = falseFn;
  	}

  	// @method getElement(): SVGElement
  	// Returns the instance of [\`SVGElement\`](https://developer.mozilla.org/docs/Web/API/SVGElement)
  	// used by this overlay.
  });


  // @factory L.svgOverlay(svg: String|SVGElement, bounds: LatLngBounds, options?: SVGOverlay options)
  // Instantiates an image overlay object given an SVG element and the geographical bounds it is tied to.
  // A viewBox attribute is required on the SVG element to zoom in and out properly.

  function svgOverlay(el, bounds, options) {
  	return new SVGOverlay(el, bounds, options);
  }

  /*\r
   * @class DivOverlay\r
   * @inherits Interactive layer\r
   * @aka L.DivOverlay\r
   * Base model for L.Popup and L.Tooltip. Inherit from it for custom overlays like plugins.\r
   */\r
\r
  // @namespace DivOverlay\r
  var DivOverlay = Layer.extend({\r
\r
  	// @section\r
  	// @aka DivOverlay options\r
  	options: {\r
  		// @option interactive: Boolean = false\r
  		// If true, the popup/tooltip will listen to the mouse events.\r
  		interactive: false,\r
\r
  		// @option offset: Point = Point(0, 0)\r
  		// The offset of the overlay position.\r
  		offset: [0, 0],\r
\r
  		// @option className: String = ''\r
  		// A custom CSS class name to assign to the overlay.\r
  		className: '',\r
\r
  		// @option pane: String = undefined\r
  		// \`Map pane\` where the overlay will be added.\r
  		pane: undefined,\r
\r
  		// @option content: String|HTMLElement|Function = ''\r
  		// Sets the HTML content of the overlay while initializing. If a function is passed the source layer will be\r
  		// passed to the function. The function should return a \`String\` or \`HTMLElement\` to be used in the overlay.\r
  		content: ''\r
  	},\r
\r
  	initialize: function (options, source) {\r
  		if (options && (options instanceof LatLng || isArray(options))) {\r
  			this._latlng = toLatLng(options);\r
  			setOptions(this, source);\r
  		} else {\r
  			setOptions(this, options);\r
  			this._source = source;\r
  		}\r
  		if (this.options.content) {\r
  			this._content = this.options.content;\r
  		}\r
  	},\r
\r
  	// @method openOn(map: Map): this\r
  	// Adds the overlay to the map.\r
  	// Alternative to \`map.openPopup(popup)\`/\`.openTooltip(tooltip)\`.\r
  	openOn: function (map) {\r
  		map = arguments.length ? map : this._source._map; // experimental, not the part of public api\r
  		if (!map.hasLayer(this)) {\r
  			map.addLayer(this);\r
  		}\r
  		return this;\r
  	},\r
\r
  	// @method close(): this\r
  	// Closes the overlay.\r
  	// Alternative to \`map.closePopup(popup)\`/\`.closeTooltip(tooltip)\`\r
  	// and \`layer.closePopup()\`/\`.closeTooltip()\`.\r
  	close: function () {\r
  		if (this._map) {\r
  			this._map.removeLayer(this);\r
  		}\r
  		return this;\r
  	},\r
\r
  	// @method toggle(layer?: Layer): this\r
  	// Opens or closes the overlay bound to layer depending on its current state.\r
  	// Argument may be omitted only for overlay bound to layer.\r
  	// Alternative to \`layer.togglePopup()\`/\`.toggleTooltip()\`.\r
  	toggle: function (layer) {\r
  		if (this._map) {\r
  			this.close();\r
  		} else {\r
  			if (arguments.length) {\r
  				this._source = layer;\r
  			} else {\r
  				layer = this._source;\r
  			}\r
  			this._prepareOpen();\r
\r
  			// open the overlay on the map\r
  			this.openOn(layer._map);\r
  		}\r
  		return this;\r
  	},\r
\r
  	onAdd: function (map) {\r
  		this._zoomAnimated = map._zoomAnimated;\r
\r
  		if (!this._container) {\r
  			this._initLayout();\r
  		}\r
\r
  		if (map._fadeAnimated) {\r
  			setOpacity(this._container, 0);\r
  		}\r
\r
  		clearTimeout(this._removeTimeout);\r
  		this.getPane().appendChild(this._container);\r
  		this.update();\r
\r
  		if (map._fadeAnimated) {\r
  			setOpacity(this._container, 1);\r
  		}\r
\r
  		this.bringToFront();\r
\r
  		if (this.options.interactive) {\r
  			addClass(this._container, 'leaflet-interactive');\r
  			this.addInteractiveTarget(this._container);\r
  		}\r
  	},\r
\r
  	onRemove: function (map) {\r
  		if (map._fadeAnimated) {\r
  			setOpacity(this._container, 0);\r
  			this._removeTimeout = setTimeout(bind(remove, undefined, this._container), 200);\r
  		} else {\r
  			remove(this._container);\r
  		}\r
\r
  		if (this.options.interactive) {\r
  			removeClass(this._container, 'leaflet-interactive');\r
  			this.removeInteractiveTarget(this._container);\r
  		}\r
  	},\r
\r
  	// @namespace DivOverlay\r
  	// @method getLatLng: LatLng\r
  	// Returns the geographical point of the overlay.\r
  	getLatLng: function () {\r
  		return this._latlng;\r
  	},\r
\r
  	// @method setLatLng(latlng: LatLng): this\r
  	// Sets the geographical point where the overlay will open.\r
  	setLatLng: function (latlng) {\r
  		this._latlng = toLatLng(latlng);\r
  		if (this._map) {\r
  			this._updatePosition();\r
  			this._adjustPan();\r
  		}\r
  		return this;\r
  	},\r
\r
  	// @method getContent: String|HTMLElement\r
  	// Returns the content of the overlay.\r
  	getContent: function () {\r
  		return this._content;\r
  	},\r
\r
  	// @method setContent(htmlContent: String|HTMLElement|Function): this\r
  	// Sets the HTML content of the overlay. If a function is passed the source layer will be passed to the function.\r
  	// The function should return a \`String\` or \`HTMLElement\` to be used in the overlay.\r
  	setContent: function (content) {\r
  		this._content = content;\r
  		this.update();\r
  		return this;\r
  	},\r
\r
  	// @method getElement: String|HTMLElement\r
  	// Returns the HTML container of the overlay.\r
  	getElement: function () {\r
  		return this._container;\r
  	},\r
\r
  	// @method update: null\r
  	// Updates the overlay content, layout and position. Useful for updating the overlay after something inside changed, e.g. image loaded.\r
  	update: function () {\r
  		if (!this._map) { return; }\r
\r
  		this._container.style.visibility = 'hidden';\r
\r
  		this._updateContent();\r
  		this._updateLayout();\r
  		this._updatePosition();\r
\r
  		this._container.style.visibility = '';\r
\r
  		this._adjustPan();\r
  	},\r
\r
  	getEvents: function () {\r
  		var events = {\r
  			zoom: this._updatePosition,\r
  			viewreset: this._updatePosition\r
  		};\r
\r
  		if (this._zoomAnimated) {\r
  			events.zoomanim = this._animateZoom;\r
  		}\r
  		return events;\r
  	},\r
\r
  	// @method isOpen: Boolean\r
  	// Returns \`true\` when the overlay is visible on the map.\r
  	isOpen: function () {\r
  		return !!this._map && this._map.hasLayer(this);\r
  	},\r
\r
  	// @method bringToFront: this\r
  	// Brings this overlay in front of other overlays (in the same map pane).\r
  	bringToFront: function () {\r
  		if (this._map) {\r
  			toFront(this._container);\r
  		}\r
  		return this;\r
  	},\r
\r
  	// @method bringToBack: this\r
  	// Brings this overlay to the back of other overlays (in the same map pane).\r
  	bringToBack: function () {\r
  		if (this._map) {\r
  			toBack(this._container);\r
  		}\r
  		return this;\r
  	},\r
\r
  	// prepare bound overlay to open: update latlng pos / content source (for FeatureGroup)\r
  	_prepareOpen: function (latlng) {\r
  		var source = this._source;\r
  		if (!source._map) { return false; }\r
\r
  		if (source instanceof FeatureGroup) {\r
  			source = null;\r
  			var layers = this._source._layers;\r
  			for (var id in layers) {\r
  				if (layers[id]._map) {\r
  					source = layers[id];\r
  					break;\r
  				}\r
  			}\r
  			if (!source) { return false; } // Unable to get source layer.\r
\r
  			// set overlay source to this layer\r
  			this._source = source;\r
  		}\r
\r
  		if (!latlng) {\r
  			if (source.getCenter) {\r
  				latlng = source.getCenter();\r
  			} else if (source.getLatLng) {\r
  				latlng = source.getLatLng();\r
  			} else if (source.getBounds) {\r
  				latlng = source.getBounds().getCenter();\r
  			} else {\r
  				throw new Error('Unable to get source layer LatLng.');\r
  			}\r
  		}\r
  		this.setLatLng(latlng);\r
\r
  		if (this._map) {\r
  			// update the overlay (content, layout, etc...)\r
  			this.update();\r
  		}\r
\r
  		return true;\r
  	},\r
\r
  	_updateContent: function () {\r
  		if (!this._content) { return; }\r
\r
  		var node = this._contentNode;\r
  		var content = (typeof this._content === 'function') ? this._content(this._source || this) : this._content;\r
\r
  		if (typeof content === 'string') {\r
  			node.innerHTML = content;\r
  		} else {\r
  			while (node.hasChildNodes()) {\r
  				node.removeChild(node.firstChild);\r
  			}\r
  			node.appendChild(content);\r
  		}\r
\r
  		// @namespace DivOverlay\r
  		// @section DivOverlay events\r
  		// @event contentupdate: Event\r
  		// Fired when the content of the overlay is updated\r
  		this.fire('contentupdate');\r
  	},\r
\r
  	_updatePosition: function () {\r
  		if (!this._map) { return; }\r
\r
  		var pos = this._map.latLngToLayerPoint(this._latlng),\r
  		    offset = toPoint(this.options.offset),\r
  		    anchor = this._getAnchor();\r
\r
  		if (this._zoomAnimated) {\r
  			setPosition(this._container, pos.add(anchor));\r
  		} else {\r
  			offset = offset.add(pos).add(anchor);\r
  		}\r
\r
  		var bottom = this._containerBottom = -offset.y,\r
  		    left = this._containerLeft = -Math.round(this._containerWidth / 2) + offset.x;\r
\r
  		// bottom position the overlay in case the height of the overlay changes (images loading etc)\r
  		this._container.style.bottom = bottom + 'px';\r
  		this._container.style.left = left + 'px';\r
  	},\r
\r
  	_getAnchor: function () {\r
  		return [0, 0];\r
  	}\r
\r
  });\r
\r
  Map.include({\r
  	_initOverlay: function (OverlayClass, content, latlng, options) {\r
  		var overlay = content;\r
  		if (!(overlay instanceof OverlayClass)) {\r
  			overlay = new OverlayClass(options).setContent(content);\r
  		}\r
  		if (latlng) {\r
  			overlay.setLatLng(latlng);\r
  		}\r
  		return overlay;\r
  	}\r
  });\r
\r
\r
  Layer.include({\r
  	_initOverlay: function (OverlayClass, old, content, options) {\r
  		var overlay = content;\r
  		if (overlay instanceof OverlayClass) {\r
  			setOptions(overlay, options);\r
  			overlay._source = this;\r
  		} else {\r
  			overlay = (old && !options) ? old : new OverlayClass(options, this);\r
  			overlay.setContent(content);\r
  		}\r
  		return overlay;\r
  	}\r
  });

  /*\r
   * @class Popup\r
   * @inherits DivOverlay\r
   * @aka L.Popup\r
   * Used to open popups in certain places of the map. Use [Map.openPopup](#map-openpopup) to\r
   * open popups while making sure that only one popup is open at one time\r
   * (recommended for usability), or use [Map.addLayer](#map-addlayer) to open as many as you want.\r
   *\r
   * @example\r
   *\r
   * If you want to just bind a popup to marker click and then open it, it's really easy:\r
   *\r
   * \`\`\`js\r
   * marker.bindPopup(popupContent).openPopup();\r
   * \`\`\`\r
   * Path overlays like polylines also have a \`bindPopup\` method.\r
   *\r
   * A popup can be also standalone:\r
   *\r
   * \`\`\`js\r
   * var popup = L.popup()\r
   * 	.setLatLng(latlng)\r
   * 	.setContent('<p>Hello world!<br />This is a nice popup.</p>')\r
   * 	.openOn(map);\r
   * \`\`\`\r
   * or\r
   * \`\`\`js\r
   * var popup = L.popup(latlng, {content: '<p>Hello world!<br />This is a nice popup.</p>')\r
   * 	.openOn(map);\r
   * \`\`\`\r
   */\r
\r
\r
  // @namespace Popup\r
  var Popup = DivOverlay.extend({\r
\r
  	// @section\r
  	// @aka Popup options\r
  	options: {\r
  		// @option pane: String = 'popupPane'\r
  		// \`Map pane\` where the popup will be added.\r
  		pane: 'popupPane',\r
\r
  		// @option offset: Point = Point(0, 7)\r
  		// The offset of the popup position.\r
  		offset: [0, 7],\r
\r
  		// @option maxWidth: Number = 300\r
  		// Max width of the popup, in pixels.\r
  		maxWidth: 300,\r
\r
  		// @option minWidth: Number = 50\r
  		// Min width of the popup, in pixels.\r
  		minWidth: 50,\r
\r
  		// @option maxHeight: Number = null\r
  		// If set, creates a scrollable container of the given height\r
  		// inside a popup if its content exceeds it.\r
  		// The scrollable container can be styled using the\r
  		// \`leaflet-popup-scrolled\` CSS class selector.\r
  		maxHeight: null,\r
\r
  		// @option autoPan: Boolean = true\r
  		// Set it to \`false\` if you don't want the map to do panning animation\r
  		// to fit the opened popup.\r
  		autoPan: true,\r
\r
  		// @option autoPanPaddingTopLeft: Point = null\r
  		// The margin between the popup and the top left corner of the map\r
  		// view after autopanning was performed.\r
  		autoPanPaddingTopLeft: null,\r
\r
  		// @option autoPanPaddingBottomRight: Point = null\r
  		// The margin between the popup and the bottom right corner of the map\r
  		// view after autopanning was performed.\r
  		autoPanPaddingBottomRight: null,\r
\r
  		// @option autoPanPadding: Point = Point(5, 5)\r
  		// Equivalent of setting both top left and bottom right autopan padding to the same value.\r
  		autoPanPadding: [5, 5],\r
\r
  		// @option keepInView: Boolean = false\r
  		// Set it to \`true\` if you want to prevent users from panning the popup\r
  		// off of the screen while it is open.\r
  		keepInView: false,\r
\r
  		// @option closeButton: Boolean = true\r
  		// Controls the presence of a close button in the popup.\r
  		closeButton: true,\r
\r
  		// @option autoClose: Boolean = true\r
  		// Set it to \`false\` if you want to override the default behavior of\r
  		// the popup closing when another popup is opened.\r
  		autoClose: true,\r
\r
  		// @option closeOnEscapeKey: Boolean = true\r
  		// Set it to \`false\` if you want to override the default behavior of\r
  		// the ESC key for closing of the popup.\r
  		closeOnEscapeKey: true,\r
\r
  		// @option closeOnClick: Boolean = *\r
  		// Set it if you want to override the default behavior of the popup closing when user clicks\r
  		// on the map. Defaults to the map's [\`closePopupOnClick\`](#map-closepopuponclick) option.\r
\r
  		// @option className: String = ''\r
  		// A custom CSS class name to assign to the popup.\r
  		className: ''\r
  	},\r
\r
  	// @namespace Popup\r
  	// @method openOn(map: Map): this\r
  	// Alternative to \`map.openPopup(popup)\`.\r
  	// Adds the popup to the map and closes the previous one.\r
  	openOn: function (map) {\r
  		map = arguments.length ? map : this._source._map; // experimental, not the part of public api\r
\r
  		if (!map.hasLayer(this) && map._popup && map._popup.options.autoClose) {\r
  			map.removeLayer(map._popup);\r
  		}\r
  		map._popup = this;\r
\r
  		return DivOverlay.prototype.openOn.call(this, map);\r
  	},\r
\r
  	onAdd: function (map) {\r
  		DivOverlay.prototype.onAdd.call(this, map);\r
\r
  		// @namespace Map\r
  		// @section Popup events\r
  		// @event popupopen: PopupEvent\r
  		// Fired when a popup is opened in the map\r
  		map.fire('popupopen', {popup: this});\r
\r
  		if (this._source) {\r
  			// @namespace Layer\r
  			// @section Popup events\r
  			// @event popupopen: PopupEvent\r
  			// Fired when a popup bound to this layer is opened\r
  			this._source.fire('popupopen', {popup: this}, true);\r
  			// For non-path layers, we toggle the popup when clicking\r
  			// again the layer, so prevent the map to reopen it.\r
  			if (!(this._source instanceof Path)) {\r
  				this._source.on('preclick', stopPropagation);\r
  			}\r
  		}\r
  	},\r
\r
  	onRemove: function (map) {\r
  		DivOverlay.prototype.onRemove.call(this, map);\r
\r
  		// @namespace Map\r
  		// @section Popup events\r
  		// @event popupclose: PopupEvent\r
  		// Fired when a popup in the map is closed\r
  		map.fire('popupclose', {popup: this});\r
\r
  		if (this._source) {\r
  			// @namespace Layer\r
  			// @section Popup events\r
  			// @event popupclose: PopupEvent\r
  			// Fired when a popup bound to this layer is closed\r
  			this._source.fire('popupclose', {popup: this}, true);\r
  			if (!(this._source instanceof Path)) {\r
  				this._source.off('preclick', stopPropagation);\r
  			}\r
  		}\r
  	},\r
\r
  	getEvents: function () {\r
  		var events = DivOverlay.prototype.getEvents.call(this);\r
\r
  		if (this.options.closeOnClick !== undefined ? this.options.closeOnClick : this._map.options.closePopupOnClick) {\r
  			events.preclick = this.close;\r
  		}\r
\r
  		if (this.options.keepInView) {\r
  			events.moveend = this._adjustPan;\r
  		}\r
\r
  		return events;\r
  	},\r
\r
  	_initLayout: function () {\r
  		var prefix = 'leaflet-popup',\r
  		    container = this._container = create$1('div',\r
  			prefix + ' ' + (this.options.className || '') +\r
  			' leaflet-zoom-animated');\r
\r
  		var wrapper = this._wrapper = create$1('div', prefix + '-content-wrapper', container);\r
  		this._contentNode = create$1('div', prefix + '-content', wrapper);\r
\r
  		disableClickPropagation(container);\r
  		disableScrollPropagation(this._contentNode);\r
  		on(container, 'contextmenu', stopPropagation);\r
\r
  		this._tipContainer = create$1('div', prefix + '-tip-container', container);\r
  		this._tip = create$1('div', prefix + '-tip', this._tipContainer);\r
\r
  		if (this.options.closeButton) {\r
  			var closeButton = this._closeButton = create$1('a', prefix + '-close-button', container);\r
  			closeButton.setAttribute('role', 'button'); // overrides the implicit role=link of <a> elements #7399\r
  			closeButton.setAttribute('aria-label', 'Close popup');\r
  			closeButton.href = '#close';\r
  			closeButton.innerHTML = '<span aria-hidden="true">&#215;</span>';\r
\r
  			on(closeButton, 'click', function (ev) {\r
  				preventDefault(ev);\r
  				this.close();\r
  			}, this);\r
  		}\r
  	},\r
\r
  	_updateLayout: function () {\r
  		var container = this._contentNode,\r
  		    style = container.style;\r
\r
  		style.width = '';\r
  		style.whiteSpace = 'nowrap';\r
\r
  		var width = container.offsetWidth;\r
  		width = Math.min(width, this.options.maxWidth);\r
  		width = Math.max(width, this.options.minWidth);\r
\r
  		style.width = (width + 1) + 'px';\r
  		style.whiteSpace = '';\r
\r
  		style.height = '';\r
\r
  		var height = container.offsetHeight,\r
  		    maxHeight = this.options.maxHeight,\r
  		    scrolledClass = 'leaflet-popup-scrolled';\r
\r
  		if (maxHeight && height > maxHeight) {\r
  			style.height = maxHeight + 'px';\r
  			addClass(container, scrolledClass);\r
  		} else {\r
  			removeClass(container, scrolledClass);\r
  		}\r
\r
  		this._containerWidth = this._container.offsetWidth;\r
  	},\r
\r
  	_animateZoom: function (e) {\r
  		var pos = this._map._latLngToNewLayerPoint(this._latlng, e.zoom, e.center),\r
  		    anchor = this._getAnchor();\r
  		setPosition(this._container, pos.add(anchor));\r
  	},\r
\r
  	_adjustPan: function () {\r
  		if (!this.options.autoPan) { return; }\r
  		if (this._map._panAnim) { this._map._panAnim.stop(); }\r
\r
  		// We can endlessly recurse if keepInView is set and the view resets.\r
  		// Let's guard against that by exiting early if we're responding to our own autopan.\r
  		if (this._autopanning) {\r
  			this._autopanning = false;\r
  			return;\r
  		}\r
\r
  		var map = this._map,\r
  		    marginBottom = parseInt(getStyle(this._container, 'marginBottom'), 10) || 0,\r
  		    containerHeight = this._container.offsetHeight + marginBottom,\r
  		    containerWidth = this._containerWidth,\r
  		    layerPos = new Point(this._containerLeft, -containerHeight - this._containerBottom);\r
\r
  		layerPos._add(getPosition(this._container));\r
\r
  		var containerPos = map.layerPointToContainerPoint(layerPos),\r
  		    padding = toPoint(this.options.autoPanPadding),\r
  		    paddingTL = toPoint(this.options.autoPanPaddingTopLeft || padding),\r
  		    paddingBR = toPoint(this.options.autoPanPaddingBottomRight || padding),\r
  		    size = map.getSize(),\r
  		    dx = 0,\r
  		    dy = 0;\r
\r
  		if (containerPos.x + containerWidth + paddingBR.x > size.x) { // right\r
  			dx = containerPos.x + containerWidth - size.x + paddingBR.x;\r
  		}\r
  		if (containerPos.x - dx - paddingTL.x < 0) { // left\r
  			dx = containerPos.x - paddingTL.x;\r
  		}\r
  		if (containerPos.y + containerHeight + paddingBR.y > size.y) { // bottom\r
  			dy = containerPos.y + containerHeight - size.y + paddingBR.y;\r
  		}\r
  		if (containerPos.y - dy - paddingTL.y < 0) { // top\r
  			dy = containerPos.y - paddingTL.y;\r
  		}\r
\r
  		// @namespace Map\r
  		// @section Popup events\r
  		// @event autopanstart: Event\r
  		// Fired when the map starts autopanning when opening a popup.\r
  		if (dx || dy) {\r
  			// Track that we're autopanning, as this function will be re-ran on moveend\r
  			if (this.options.keepInView) {\r
  				this._autopanning = true;\r
  			}\r
\r
  			map\r
  			    .fire('autopanstart')\r
  			    .panBy([dx, dy]);\r
  		}\r
  	},\r
\r
  	_getAnchor: function () {\r
  		// Where should we anchor the popup on the source layer?\r
  		return toPoint(this._source && this._source._getPopupAnchor ? this._source._getPopupAnchor() : [0, 0]);\r
  	}\r
\r
  });\r
\r
  // @namespace Popup\r
  // @factory L.popup(options?: Popup options, source?: Layer)\r
  // Instantiates a \`Popup\` object given an optional \`options\` object that describes its appearance and location and an optional \`source\` object that is used to tag the popup with a reference to the Layer to which it refers.\r
  // @alternative\r
  // @factory L.popup(latlng: LatLng, options?: Popup options)\r
  // Instantiates a \`Popup\` object given \`latlng\` where the popup will open and an optional \`options\` object that describes its appearance and location.\r
  var popup = function (options, source) {\r
  	return new Popup(options, source);\r
  };\r
\r
\r
  /* @namespace Map\r
   * @section Interaction Options\r
   * @option closePopupOnClick: Boolean = true\r
   * Set it to \`false\` if you don't want popups to close when user clicks the map.\r
   */\r
  Map.mergeOptions({\r
  	closePopupOnClick: true\r
  });\r
\r
\r
  // @namespace Map\r
  // @section Methods for Layers and Controls\r
  Map.include({\r
  	// @method openPopup(popup: Popup): this\r
  	// Opens the specified popup while closing the previously opened (to make sure only one is opened at one time for usability).\r
  	// @alternative\r
  	// @method openPopup(content: String|HTMLElement, latlng: LatLng, options?: Popup options): this\r
  	// Creates a popup with the specified content and options and opens it in the given point on a map.\r
  	openPopup: function (popup, latlng, options) {\r
  		this._initOverlay(Popup, popup, latlng, options)\r
  		  .openOn(this);\r
\r
  		return this;\r
  	},\r
\r
  	// @method closePopup(popup?: Popup): this\r
  	// Closes the popup previously opened with [openPopup](#map-openpopup) (or the given one).\r
  	closePopup: function (popup) {\r
  		popup = arguments.length ? popup : this._popup;\r
  		if (popup) {\r
  			popup.close();\r
  		}\r
  		return this;\r
  	}\r
  });\r
\r
  /*\r
   * @namespace Layer\r
   * @section Popup methods example\r
   *\r
   * All layers share a set of methods convenient for binding popups to it.\r
   *\r
   * \`\`\`js\r
   * var layer = L.Polygon(latlngs).bindPopup('Hi There!').addTo(map);\r
   * layer.openPopup();\r
   * layer.closePopup();\r
   * \`\`\`\r
   *\r
   * Popups will also be automatically opened when the layer is clicked on and closed when the layer is removed from the map or another popup is opened.\r
   */\r
\r
  // @section Popup methods\r
  Layer.include({\r
\r
  	// @method bindPopup(content: String|HTMLElement|Function|Popup, options?: Popup options): this\r
  	// Binds a popup to the layer with the passed \`content\` and sets up the\r
  	// necessary event listeners. If a \`Function\` is passed it will receive\r
  	// the layer as the first argument and should return a \`String\` or \`HTMLElement\`.\r
  	bindPopup: function (content, options) {\r
  		this._popup = this._initOverlay(Popup, this._popup, content, options);\r
  		if (!this._popupHandlersAdded) {\r
  			this.on({\r
  				click: this._openPopup,\r
  				keypress: this._onKeyPress,\r
  				remove: this.closePopup,\r
  				move: this._movePopup\r
  			});\r
  			this._popupHandlersAdded = true;\r
  		}\r
\r
  		return this;\r
  	},\r
\r
  	// @method unbindPopup(): this\r
  	// Removes the popup previously bound with \`bindPopup\`.\r
  	unbindPopup: function () {\r
  		if (this._popup) {\r
  			this.off({\r
  				click: this._openPopup,\r
  				keypress: this._onKeyPress,\r
  				remove: this.closePopup,\r
  				move: this._movePopup\r
  			});\r
  			this._popupHandlersAdded = false;\r
  			this._popup = null;\r
  		}\r
  		return this;\r
  	},\r
\r
  	// @method openPopup(latlng?: LatLng): this\r
  	// Opens the bound popup at the specified \`latlng\` or at the default popup anchor if no \`latlng\` is passed.\r
  	openPopup: function (latlng) {\r
  		if (this._popup) {\r
  			if (!(this instanceof FeatureGroup)) {\r
  				this._popup._source = this;\r
  			}\r
  			if (this._popup._prepareOpen(latlng || this._latlng)) {\r
  				// open the popup on the map\r
  				this._popup.openOn(this._map);\r
  			}\r
  		}\r
  		return this;\r
  	},\r
\r
  	// @method closePopup(): this\r
  	// Closes the popup bound to this layer if it is open.\r
  	closePopup: function () {\r
  		if (this._popup) {\r
  			this._popup.close();\r
  		}\r
  		return this;\r
  	},\r
\r
  	// @method togglePopup(): this\r
  	// Opens or closes the popup bound to this layer depending on its current state.\r
  	togglePopup: function () {\r
  		if (this._popup) {\r
  			this._popup.toggle(this);\r
  		}\r
  		return this;\r
  	},\r
\r
  	// @method isPopupOpen(): boolean\r
  	// Returns \`true\` if the popup bound to this layer is currently open.\r
  	isPopupOpen: function () {\r
  		return (this._popup ? this._popup.isOpen() : false);\r
  	},\r
\r
  	// @method setPopupContent(content: String|HTMLElement|Popup): this\r
  	// Sets the content of the popup bound to this layer.\r
  	setPopupContent: function (content) {\r
  		if (this._popup) {\r
  			this._popup.setContent(content);\r
  		}\r
  		return this;\r
  	},\r
\r
  	// @method getPopup(): Popup\r
  	// Returns the popup bound to this layer.\r
  	getPopup: function () {\r
  		return this._popup;\r
  	},\r
\r
  	_openPopup: function (e) {\r
  		if (!this._popup || !this._map) {\r
  			return;\r
  		}\r
  		// prevent map click\r
  		stop(e);\r
\r
  		var target = e.layer || e.target;\r
  		if (this._popup._source === target && !(target instanceof Path)) {\r
  			// treat it like a marker and figure out\r
  			// if we should toggle it open/closed\r
  			if (this._map.hasLayer(this._popup)) {\r
  				this.closePopup();\r
  			} else {\r
  				this.openPopup(e.latlng);\r
  			}\r
  			return;\r
  		}\r
  		this._popup._source = target;\r
  		this.openPopup(e.latlng);\r
  	},\r
\r
  	_movePopup: function (e) {\r
  		this._popup.setLatLng(e.latlng);\r
  	},\r
\r
  	_onKeyPress: function (e) {\r
  		if (e.originalEvent.keyCode === 13) {\r
  			this._openPopup(e);\r
  		}\r
  	}\r
  });

  /*
   * @class Tooltip
   * @inherits DivOverlay
   * @aka L.Tooltip
   * Used to display small texts on top of map layers.
   *
   * @example
   * If you want to just bind a tooltip to marker:
   *
   * \`\`\`js
   * marker.bindTooltip("my tooltip text").openTooltip();
   * \`\`\`
   * Path overlays like polylines also have a \`bindTooltip\` method.
   *
   * A tooltip can be also standalone:
   *
   * \`\`\`js
   * var tooltip = L.tooltip()
   * 	.setLatLng(latlng)
   * 	.setContent('Hello world!<br />This is a nice tooltip.')
   * 	.addTo(map);
   * \`\`\`
   * or
   * \`\`\`js
   * var tooltip = L.tooltip(latlng, {content: 'Hello world!<br />This is a nice tooltip.'})
   * 	.addTo(map);
   * \`\`\`
   *
   *
   * Note about tooltip offset. Leaflet takes two options in consideration
   * for computing tooltip offsetting:
   * - the \`offset\` Tooltip option: it defaults to [0, 0], and it's specific to one tooltip.
   *   Add a positive x offset to move the tooltip to the right, and a positive y offset to
   *   move it to the bottom. Negatives will move to the left and top.
   * - the \`tooltipAnchor\` Icon option: this will only be considered for Marker. You
   *   should adapt this value if you use a custom icon.
   */


  // @namespace Tooltip
  var Tooltip = DivOverlay.extend({

  	// @section
  	// @aka Tooltip options
  	options: {
  		// @option pane: String = 'tooltipPane'
  		// \`Map pane\` where the tooltip will be added.
  		pane: 'tooltipPane',

  		// @option offset: Point = Point(0, 0)
  		// Optional offset of the tooltip position.
  		offset: [0, 0],

  		// @option direction: String = 'auto'
  		// Direction where to open the tooltip. Possible values are: \`right\`, \`left\`,
  		// \`top\`, \`bottom\`, \`center\`, \`auto\`.
  		// \`auto\` will dynamically switch between \`right\` and \`left\` according to the tooltip
  		// position on the map.
  		direction: 'auto',

  		// @option permanent: Boolean = false
  		// Whether to open the tooltip permanently or only on mouseover.
  		permanent: false,

  		// @option sticky: Boolean = false
  		// If true, the tooltip will follow the mouse instead of being fixed at the feature center.
  		sticky: false,

  		// @option opacity: Number = 0.9
  		// Tooltip container opacity.
  		opacity: 0.9
  	},

  	onAdd: function (map) {
  		DivOverlay.prototype.onAdd.call(this, map);
  		this.setOpacity(this.options.opacity);

  		// @namespace Map
  		// @section Tooltip events
  		// @event tooltipopen: TooltipEvent
  		// Fired when a tooltip is opened in the map.
  		map.fire('tooltipopen', {tooltip: this});

  		if (this._source) {
  			this.addEventParent(this._source);

  			// @namespace Layer
  			// @section Tooltip events
  			// @event tooltipopen: TooltipEvent
  			// Fired when a tooltip bound to this layer is opened.
  			this._source.fire('tooltipopen', {tooltip: this}, true);
  		}
  	},

  	onRemove: function (map) {
  		DivOverlay.prototype.onRemove.call(this, map);

  		// @namespace Map
  		// @section Tooltip events
  		// @event tooltipclose: TooltipEvent
  		// Fired when a tooltip in the map is closed.
  		map.fire('tooltipclose', {tooltip: this});

  		if (this._source) {
  			this.removeEventParent(this._source);

  			// @namespace Layer
  			// @section Tooltip events
  			// @event tooltipclose: TooltipEvent
  			// Fired when a tooltip bound to this layer is closed.
  			this._source.fire('tooltipclose', {tooltip: this}, true);
  		}
  	},

  	getEvents: function () {
  		var events = DivOverlay.prototype.getEvents.call(this);

  		if (!this.options.permanent) {
  			events.preclick = this.close;
  		}

  		return events;
  	},

  	_initLayout: function () {
  		var prefix = 'leaflet-tooltip',
  		    className = prefix + ' ' + (this.options.className || '') + ' leaflet-zoom-' + (this._zoomAnimated ? 'animated' : 'hide');

  		this._contentNode = this._container = create$1('div', className);

  		this._container.setAttribute('role', 'tooltip');
  		this._container.setAttribute('id', 'leaflet-tooltip-' + stamp(this));
  	},

  	_updateLayout: function () {},

  	_adjustPan: function () {},

  	_setPosition: function (pos) {
  		var subX, subY,
  		    map = this._map,
  		    container = this._container,
  		    centerPoint = map.latLngToContainerPoint(map.getCenter()),
  		    tooltipPoint = map.layerPointToContainerPoint(pos),
  		    direction = this.options.direction,
  		    tooltipWidth = container.offsetWidth,
  		    tooltipHeight = container.offsetHeight,
  		    offset = toPoint(this.options.offset),
  		    anchor = this._getAnchor();

  		if (direction === 'top') {
  			subX = tooltipWidth / 2;
  			subY = tooltipHeight;
  		} else if (direction === 'bottom') {
  			subX = tooltipWidth / 2;
  			subY = 0;
  		} else if (direction === 'center') {
  			subX = tooltipWidth / 2;
  			subY = tooltipHeight / 2;
  		} else if (direction === 'right') {
  			subX = 0;
  			subY = tooltipHeight / 2;
  		} else if (direction === 'left') {
  			subX = tooltipWidth;
  			subY = tooltipHeight / 2;
  		} else if (tooltipPoint.x < centerPoint.x) {
  			direction = 'right';
  			subX = 0;
  			subY = tooltipHeight / 2;
  		} else {
  			direction = 'left';
  			subX = tooltipWidth + (offset.x + anchor.x) * 2;
  			subY = tooltipHeight / 2;
  		}

  		pos = pos.subtract(toPoint(subX, subY, true)).add(offset).add(anchor);

  		removeClass(container, 'leaflet-tooltip-right');
  		removeClass(container, 'leaflet-tooltip-left');
  		removeClass(container, 'leaflet-tooltip-top');
  		removeClass(container, 'leaflet-tooltip-bottom');
  		addClass(container, 'leaflet-tooltip-' + direction);
  		setPosition(container, pos);
  	},

  	_updatePosition: function () {
  		var pos = this._map.latLngToLayerPoint(this._latlng);
  		this._setPosition(pos);
  	},

  	setOpacity: function (opacity) {
  		this.options.opacity = opacity;

  		if (this._container) {
  			setOpacity(this._container, opacity);
  		}
  	},

  	_animateZoom: function (e) {
  		var pos = this._map._latLngToNewLayerPoint(this._latlng, e.zoom, e.center);
  		this._setPosition(pos);
  	},

  	_getAnchor: function () {
  		// Where should we anchor the tooltip on the source layer?
  		return toPoint(this._source && this._source._getTooltipAnchor && !this.options.sticky ? this._source._getTooltipAnchor() : [0, 0]);
  	}

  });

  // @namespace Tooltip
  // @factory L.tooltip(options?: Tooltip options, source?: Layer)
  // Instantiates a \`Tooltip\` object given an optional \`options\` object that describes its appearance and location and an optional \`source\` object that is used to tag the tooltip with a reference to the Layer to which it refers.
  // @alternative
  // @factory L.tooltip(latlng: LatLng, options?: Tooltip options)
  // Instantiates a \`Tooltip\` object given \`latlng\` where the tooltip will open and an optional \`options\` object that describes its appearance and location.
  var tooltip = function (options, source) {
  	return new Tooltip(options, source);
  };

  // @namespace Map
  // @section Methods for Layers and Controls
  Map.include({

  	// @method openTooltip(tooltip: Tooltip): this
  	// Opens the specified tooltip.
  	// @alternative
  	// @method openTooltip(content: String|HTMLElement, latlng: LatLng, options?: Tooltip options): this
  	// Creates a tooltip with the specified content and options and open it.
  	openTooltip: function (tooltip, latlng, options) {
  		this._initOverlay(Tooltip, tooltip, latlng, options)
  		  .openOn(this);

  		return this;
  	},

  	// @method closeTooltip(tooltip: Tooltip): this
  	// Closes the tooltip given as parameter.
  	closeTooltip: function (tooltip) {
  		tooltip.close();
  		return this;
  	}

  });

  /*
   * @namespace Layer
   * @section Tooltip methods example
   *
   * All layers share a set of methods convenient for binding tooltips to it.
   *
   * \`\`\`js
   * var layer = L.Polygon(latlngs).bindTooltip('Hi There!').addTo(map);
   * layer.openTooltip();
   * layer.closeTooltip();
   * \`\`\`
   */

  // @section Tooltip methods
  Layer.include({

  	// @method bindTooltip(content: String|HTMLElement|Function|Tooltip, options?: Tooltip options): this
  	// Binds a tooltip to the layer with the passed \`content\` and sets up the
  	// necessary event listeners. If a \`Function\` is passed it will receive
  	// the layer as the first argument and should return a \`String\` or \`HTMLElement\`.
  	bindTooltip: function (content, options) {

  		if (this._tooltip && this.isTooltipOpen()) {
  			this.unbindTooltip();
  		}

  		this._tooltip = this._initOverlay(Tooltip, this._tooltip, content, options);
  		this._initTooltipInteractions();

  		if (this._tooltip.options.permanent && this._map && this._map.hasLayer(this)) {
  			this.openTooltip();
  		}

  		return this;
  	},

  	// @method unbindTooltip(): this
  	// Removes the tooltip previously bound with \`bindTooltip\`.
  	unbindTooltip: function () {
  		if (this._tooltip) {
  			this._initTooltipInteractions(true);
  			this.closeTooltip();
  			this._tooltip = null;
  		}
  		return this;
  	},

  	_initTooltipInteractions: function (remove) {
  		if (!remove && this._tooltipHandlersAdded) { return; }
  		var onOff = remove ? 'off' : 'on',
  		    events = {
  			remove: this.closeTooltip,
  			move: this._moveTooltip
  		    };
  		if (!this._tooltip.options.permanent) {
  			events.mouseover = this._openTooltip;
  			events.mouseout = this.closeTooltip;
  			events.click = this._openTooltip;
  			if (this._map) {
  				this._addFocusListeners();
  			} else {
  				events.add = this._addFocusListeners;
  			}
  		} else {
  			events.add = this._openTooltip;
  		}
  		if (this._tooltip.options.sticky) {
  			events.mousemove = this._moveTooltip;
  		}
  		this[onOff](events);
  		this._tooltipHandlersAdded = !remove;
  	},

  	// @method openTooltip(latlng?: LatLng): this
  	// Opens the bound tooltip at the specified \`latlng\` or at the default tooltip anchor if no \`latlng\` is passed.
  	openTooltip: function (latlng) {
  		if (this._tooltip) {
  			if (!(this instanceof FeatureGroup)) {
  				this._tooltip._source = this;
  			}
  			if (this._tooltip._prepareOpen(latlng)) {
  				// open the tooltip on the map
  				this._tooltip.openOn(this._map);

  				if (this.getElement) {
  					this._setAriaDescribedByOnLayer(this);
  				} else if (this.eachLayer) {
  					this.eachLayer(this._setAriaDescribedByOnLayer, this);
  				}
  			}
  		}
  		return this;
  	},

  	// @method closeTooltip(): this
  	// Closes the tooltip bound to this layer if it is open.
  	closeTooltip: function () {
  		if (this._tooltip) {
  			return this._tooltip.close();
  		}
  	},

  	// @method toggleTooltip(): this
  	// Opens or closes the tooltip bound to this layer depending on its current state.
  	toggleTooltip: function () {
  		if (this._tooltip) {
  			this._tooltip.toggle(this);
  		}
  		return this;
  	},

  	// @method isTooltipOpen(): boolean
  	// Returns \`true\` if the tooltip bound to this layer is currently open.
  	isTooltipOpen: function () {
  		return this._tooltip.isOpen();
  	},

  	// @method setTooltipContent(content: String|HTMLElement|Tooltip): this
  	// Sets the content of the tooltip bound to this layer.
  	setTooltipContent: function (content) {
  		if (this._tooltip) {
  			this._tooltip.setContent(content);
  		}
  		return this;
  	},

  	// @method getTooltip(): Tooltip
  	// Returns the tooltip bound to this layer.
  	getTooltip: function () {
  		return this._tooltip;
  	},

  	_addFocusListeners: function () {
  		if (this.getElement) {
  			this._addFocusListenersOnLayer(this);
  		} else if (this.eachLayer) {
  			this.eachLayer(this._addFocusListenersOnLayer, this);
  		}
  	},

  	_addFocusListenersOnLayer: function (layer) {
  		var el = typeof layer.getElement === 'function' && layer.getElement();
  		if (el) {
  			on(el, 'focus', function () {
  				this._tooltip._source = layer;
  				this.openTooltip();
  			}, this);
  			on(el, 'blur', this.closeTooltip, this);
  		}
  	},

  	_setAriaDescribedByOnLayer: function (layer) {
  		var el = typeof layer.getElement === 'function' && layer.getElement();
  		if (el) {
  			el.setAttribute('aria-describedby', this._tooltip._container.id);
  		}
  	},


  	_openTooltip: function (e) {
  		if (!this._tooltip || !this._map) {
  			return;
  		}

  		// If the map is moving, we will show the tooltip after it's done.
  		if (this._map.dragging && this._map.dragging.moving() && !this._openOnceFlag) {
  			this._openOnceFlag = true;
  			var that = this;
  			this._map.once('moveend', function () {
  				that._openOnceFlag = false;
  				that._openTooltip(e);
  			});
  			return;
  		}

  		this._tooltip._source = e.layer || e.target;

  		this.openTooltip(this._tooltip.options.sticky ? e.latlng : undefined);
  	},

  	_moveTooltip: function (e) {
  		var latlng = e.latlng, containerPoint, layerPoint;
  		if (this._tooltip.options.sticky && e.originalEvent) {
  			containerPoint = this._map.mouseEventToContainerPoint(e.originalEvent);
  			layerPoint = this._map.containerPointToLayerPoint(containerPoint);
  			latlng = this._map.layerPointToLatLng(layerPoint);
  		}
  		this._tooltip.setLatLng(latlng);
  	}
  });

  /*
   * @class DivIcon
   * @aka L.DivIcon
   * @inherits Icon
   *
   * Represents a lightweight icon for markers that uses a simple \`<div>\`
   * element instead of an image. Inherits from \`Icon\` but ignores the \`iconUrl\` and shadow options.
   *
   * @example
   * \`\`\`js
   * var myIcon = L.divIcon({className: 'my-div-icon'});
   * // you can set .my-div-icon styles in CSS
   *
   * L.marker([50.505, 30.57], {icon: myIcon}).addTo(map);
   * \`\`\`
   *
   * By default, it has a 'leaflet-div-icon' CSS class and is styled as a little white square with a shadow.
   */

  var DivIcon = Icon.extend({
  	options: {
  		// @section
  		// @aka DivIcon options
  		iconSize: [12, 12], // also can be set through CSS

  		// iconAnchor: (Point),
  		// popupAnchor: (Point),

  		// @option html: String|HTMLElement = ''
  		// Custom HTML code to put inside the div element, empty by default. Alternatively,
  		// an instance of \`HTMLElement\`.
  		html: false,

  		// @option bgPos: Point = [0, 0]
  		// Optional relative position of the background, in pixels
  		bgPos: null,

  		className: 'leaflet-div-icon'
  	},

  	createIcon: function (oldIcon) {
  		var div = (oldIcon && oldIcon.tagName === 'DIV') ? oldIcon : document.createElement('div'),
  		    options = this.options;

  		if (options.html instanceof Element) {
  			empty(div);
  			div.appendChild(options.html);
  		} else {
  			div.innerHTML = options.html !== false ? options.html : '';
  		}

  		if (options.bgPos) {
  			var bgPos = toPoint(options.bgPos);
  			div.style.backgroundPosition = (-bgPos.x) + 'px ' + (-bgPos.y) + 'px';
  		}
  		this._setIconStyles(div, 'icon');

  		return div;
  	},

  	createShadow: function () {
  		return null;
  	}
  });

  // @factory L.divIcon(options: DivIcon options)
  // Creates a \`DivIcon\` instance with the given options.
  function divIcon(options) {
  	return new DivIcon(options);
  }

  Icon.Default = IconDefault;

  /*
   * @class GridLayer
   * @inherits Layer
   * @aka L.GridLayer
   *
   * Generic class for handling a tiled grid of HTML elements. This is the base class for all tile layers and replaces \`TileLayer.Canvas\`.
   * GridLayer can be extended to create a tiled grid of HTML elements like \`<canvas>\`, \`<img>\` or \`<div>\`. GridLayer will handle creating and animating these DOM elements for you.
   *
   *
   * @section Synchronous usage
   * @example
   *
   * To create a custom layer, extend GridLayer and implement the \`createTile()\` method, which will be passed a \`Point\` object with the \`x\`, \`y\`, and \`z\` (zoom level) coordinates to draw your tile.
   *
   * \`\`\`js
   * var CanvasLayer = L.GridLayer.extend({
   *     createTile: function(coords){
   *         // create a <canvas> element for drawing
   *         var tile = L.DomUtil.create('canvas', 'leaflet-tile');
   *
   *         // setup tile width and height according to the options
   *         var size = this.getTileSize();
   *         tile.width = size.x;
   *         tile.height = size.y;
   *
   *         // get a canvas context and draw something on it using coords.x, coords.y and coords.z
   *         var ctx = tile.getContext('2d');
   *
   *         // return the tile so it can be rendered on screen
   *         return tile;
   *     }
   * });
   * \`\`\`
   *
   * @section Asynchronous usage
   * @example
   *
   * Tile creation can also be asynchronous, this is useful when using a third-party drawing library. Once the tile is finished drawing it can be passed to the \`done()\` callback.
   *
   * \`\`\`js
   * var CanvasLayer = L.GridLayer.extend({
   *     createTile: function(coords, done){
   *         var error;
   *
   *         // create a <canvas> element for drawing
   *         var tile = L.DomUtil.create('canvas', 'leaflet-tile');
   *
   *         // setup tile width and height according to the options
   *         var size = this.getTileSize();
   *         tile.width = size.x;
   *         tile.height = size.y;
   *
   *         // draw something asynchronously and pass the tile to the done() callback
   *         setTimeout(function() {
   *             done(error, tile);
   *         }, 1000);
   *
   *         return tile;
   *     }
   * });
   * \`\`\`
   *
   * @section
   */


  var GridLayer = Layer.extend({

  	// @section
  	// @aka GridLayer options
  	options: {
  		// @option tileSize: Number|Point = 256
  		// Width and height of tiles in the grid. Use a number if width and height are equal, or \`L.point(width, height)\` otherwise.
  		tileSize: 256,

  		// @option opacity: Number = 1.0
  		// Opacity of the tiles. Can be used in the \`createTile()\` function.
  		opacity: 1,

  		// @option updateWhenIdle: Boolean = (depends)
  		// Load new tiles only when panning ends.
  		// \`true\` by default on mobile browsers, in order to avoid too many requests and keep smooth navigation.
  		// \`false\` otherwise in order to display new tiles _during_ panning, since it is easy to pan outside the
  		// [\`keepBuffer\`](#gridlayer-keepbuffer) option in desktop browsers.
  		updateWhenIdle: Browser.mobile,

  		// @option updateWhenZooming: Boolean = true
  		// By default, a smooth zoom animation (during a [touch zoom](#map-touchzoom) or a [\`flyTo()\`](#map-flyto)) will update grid layers every integer zoom level. Setting this option to \`false\` will update the grid layer only when the smooth animation ends.
  		updateWhenZooming: true,

  		// @option updateInterval: Number = 200
  		// Tiles will not update more than once every \`updateInterval\` milliseconds when panning.
  		updateInterval: 200,

  		// @option zIndex: Number = 1
  		// The explicit zIndex of the tile layer.
  		zIndex: 1,

  		// @option bounds: LatLngBounds = undefined
  		// If set, tiles will only be loaded inside the set \`LatLngBounds\`.
  		bounds: null,

  		// @option minZoom: Number = 0
  		// The minimum zoom level down to which this layer will be displayed (inclusive).
  		minZoom: 0,

  		// @option maxZoom: Number = undefined
  		// The maximum zoom level up to which this layer will be displayed (inclusive).
  		maxZoom: undefined,

  		// @option maxNativeZoom: Number = undefined
  		// Maximum zoom number the tile source has available. If it is specified,
  		// the tiles on all zoom levels higher than \`maxNativeZoom\` will be loaded
  		// from \`maxNativeZoom\` level and auto-scaled.
  		maxNativeZoom: undefined,

  		// @option minNativeZoom: Number = undefined
  		// Minimum zoom number the tile source has available. If it is specified,
  		// the tiles on all zoom levels lower than \`minNativeZoom\` will be loaded
  		// from \`minNativeZoom\` level and auto-scaled.
  		minNativeZoom: undefined,

  		// @option noWrap: Boolean = false
  		// Whether the layer is wrapped around the antimeridian. If \`true\`, the
  		// GridLayer will only be displayed once at low zoom levels. Has no
  		// effect when the [map CRS](#map-crs) doesn't wrap around. Can be used
  		// in combination with [\`bounds\`](#gridlayer-bounds) to prevent requesting
  		// tiles outside the CRS limits.
  		noWrap: false,

  		// @option pane: String = 'tilePane'
  		// \`Map pane\` where the grid layer will be added.
  		pane: 'tilePane',

  		// @option className: String = ''
  		// A custom class name to assign to the tile layer. Empty by default.
  		className: '',

  		// @option keepBuffer: Number = 2
  		// When panning the map, keep this many rows and columns of tiles before unloading them.
  		keepBuffer: 2
  	},

  	initialize: function (options) {
  		setOptions(this, options);
  	},

  	onAdd: function () {
  		this._initContainer();

  		this._levels = {};
  		this._tiles = {};

  		this._resetView(); // implicit _update() call
  	},

  	beforeAdd: function (map) {
  		map._addZoomLimit(this);
  	},

  	onRemove: function (map) {
  		this._removeAllTiles();
  		remove(this._container);
  		map._removeZoomLimit(this);
  		this._container = null;
  		this._tileZoom = undefined;
  	},

  	// @method bringToFront: this
  	// Brings the tile layer to the top of all tile layers.
  	bringToFront: function () {
  		if (this._map) {
  			toFront(this._container);
  			this._setAutoZIndex(Math.max);
  		}
  		return this;
  	},

  	// @method bringToBack: this
  	// Brings the tile layer to the bottom of all tile layers.
  	bringToBack: function () {
  		if (this._map) {
  			toBack(this._container);
  			this._setAutoZIndex(Math.min);
  		}
  		return this;
  	},

  	// @method getContainer: HTMLElement
  	// Returns the HTML element that contains the tiles for this layer.
  	getContainer: function () {
  		return this._container;
  	},

  	// @method setOpacity(opacity: Number): this
  	// Changes the [opacity](#gridlayer-opacity) of the grid layer.
  	setOpacity: function (opacity) {
  		this.options.opacity = opacity;
  		this._updateOpacity();
  		return this;
  	},

  	// @method setZIndex(zIndex: Number): this
  	// Changes the [zIndex](#gridlayer-zindex) of the grid layer.
  	setZIndex: function (zIndex) {
  		this.options.zIndex = zIndex;
  		this._updateZIndex();

  		return this;
  	},

  	// @method isLoading: Boolean
  	// Returns \`true\` if any tile in the grid layer has not finished loading.
  	isLoading: function () {
  		return this._loading;
  	},

  	// @method redraw: this
  	// Causes the layer to clear all the tiles and request them again.
  	redraw: function () {
  		if (this._map) {
  			this._removeAllTiles();
  			var tileZoom = this._clampZoom(this._map.getZoom());
  			if (tileZoom !== this._tileZoom) {
  				this._tileZoom = tileZoom;
  				this._updateLevels();
  			}
  			this._update();
  		}
  		return this;
  	},

  	getEvents: function () {
  		var events = {
  			viewprereset: this._invalidateAll,
  			viewreset: this._resetView,
  			zoom: this._resetView,
  			moveend: this._onMoveEnd
  		};

  		if (!this.options.updateWhenIdle) {
  			// update tiles on move, but not more often than once per given interval
  			if (!this._onMove) {
  				this._onMove = throttle(this._onMoveEnd, this.options.updateInterval, this);
  			}

  			events.move = this._onMove;
  		}

  		if (this._zoomAnimated) {
  			events.zoomanim = this._animateZoom;
  		}

  		return events;
  	},

  	// @section Extension methods
  	// Layers extending \`GridLayer\` shall reimplement the following method.
  	// @method createTile(coords: Object, done?: Function): HTMLElement
  	// Called only internally, must be overridden by classes extending \`GridLayer\`.
  	// Returns the \`HTMLElement\` corresponding to the given \`coords\`. If the \`done\` callback
  	// is specified, it must be called when the tile has finished loading and drawing.
  	createTile: function () {
  		return document.createElement('div');
  	},

  	// @section
  	// @method getTileSize: Point
  	// Normalizes the [tileSize option](#gridlayer-tilesize) into a point. Used by the \`createTile()\` method.
  	getTileSize: function () {
  		var s = this.options.tileSize;
  		return s instanceof Point ? s : new Point(s, s);
  	},

  	_updateZIndex: function () {
  		if (this._container && this.options.zIndex !== undefined && this.options.zIndex !== null) {
  			this._container.style.zIndex = this.options.zIndex;
  		}
  	},

  	_setAutoZIndex: function (compare) {
  		// go through all other layers of the same pane, set zIndex to max + 1 (front) or min - 1 (back)

  		var layers = this.getPane().children,
  		    edgeZIndex = -compare(-Infinity, Infinity); // -Infinity for max, Infinity for min

  		for (var i = 0, len = layers.length, zIndex; i < len; i++) {

  			zIndex = layers[i].style.zIndex;

  			if (layers[i] !== this._container && zIndex) {
  				edgeZIndex = compare(edgeZIndex, +zIndex);
  			}
  		}

  		if (isFinite(edgeZIndex)) {
  			this.options.zIndex = edgeZIndex + compare(-1, 1);
  			this._updateZIndex();
  		}
  	},

  	_updateOpacity: function () {
  		if (!this._map) { return; }

  		// IE doesn't inherit filter opacity properly, so we're forced to set it on tiles
  		if (Browser.ielt9) { return; }

  		setOpacity(this._container, this.options.opacity);

  		var now = +new Date(),
  		    nextFrame = false,
  		    willPrune = false;

  		for (var key in this._tiles) {
  			var tile = this._tiles[key];
  			if (!tile.current || !tile.loaded) { continue; }

  			var fade = Math.min(1, (now - tile.loaded) / 200);

  			setOpacity(tile.el, fade);
  			if (fade < 1) {
  				nextFrame = true;
  			} else {
  				if (tile.active) {
  					willPrune = true;
  				} else {
  					this._onOpaqueTile(tile);
  				}
  				tile.active = true;
  			}
  		}

  		if (willPrune && !this._noPrune) { this._pruneTiles(); }

  		if (nextFrame) {
  			cancelAnimFrame(this._fadeFrame);
  			this._fadeFrame = requestAnimFrame(this._updateOpacity, this);
  		}
  	},

  	_onOpaqueTile: falseFn,

  	_initContainer: function () {
  		if (this._container) { return; }

  		this._container = create$1('div', 'leaflet-layer ' + (this.options.className || ''));
  		this._updateZIndex();

  		if (this.options.opacity < 1) {
  			this._updateOpacity();
  		}

  		this.getPane().appendChild(this._container);
  	},

  	_updateLevels: function () {

  		var zoom = this._tileZoom,
  		    maxZoom = this.options.maxZoom;

  		if (zoom === undefined) { return undefined; }

  		for (var z in this._levels) {
  			z = Number(z);
  			if (this._levels[z].el.children.length || z === zoom) {
  				this._levels[z].el.style.zIndex = maxZoom - Math.abs(zoom - z);
  				this._onUpdateLevel(z);
  			} else {
  				remove(this._levels[z].el);
  				this._removeTilesAtZoom(z);
  				this._onRemoveLevel(z);
  				delete this._levels[z];
  			}
  		}

  		var level = this._levels[zoom],
  		    map = this._map;

  		if (!level) {
  			level = this._levels[zoom] = {};

  			level.el = create$1('div', 'leaflet-tile-container leaflet-zoom-animated', this._container);
  			level.el.style.zIndex = maxZoom;

  			level.origin = map.project(map.unproject(map.getPixelOrigin()), zoom).round();
  			level.zoom = zoom;

  			this._setZoomTransform(level, map.getCenter(), map.getZoom());

  			// force the browser to consider the newly added element for transition
  			falseFn(level.el.offsetWidth);

  			this._onCreateLevel(level);
  		}

  		this._level = level;

  		return level;
  	},

  	_onUpdateLevel: falseFn,

  	_onRemoveLevel: falseFn,

  	_onCreateLevel: falseFn,

  	_pruneTiles: function () {
  		if (!this._map) {
  			return;
  		}

  		var key, tile;

  		var zoom = this._map.getZoom();
  		if (zoom > this.options.maxZoom ||
  			zoom < this.options.minZoom) {
  			this._removeAllTiles();
  			return;
  		}

  		for (key in this._tiles) {
  			tile = this._tiles[key];
  			tile.retain = tile.current;
  		}

  		for (key in this._tiles) {
  			tile = this._tiles[key];
  			if (tile.current && !tile.active) {
  				var coords = tile.coords;
  				if (!this._retainParent(coords.x, coords.y, coords.z, coords.z - 5)) {
  					this._retainChildren(coords.x, coords.y, coords.z, coords.z + 2);
  				}
  			}
  		}

  		for (key in this._tiles) {
  			if (!this._tiles[key].retain) {
  				this._removeTile(key);
  			}
  		}
  	},

  	_removeTilesAtZoom: function (zoom) {
  		for (var key in this._tiles) {
  			if (this._tiles[key].coords.z !== zoom) {
  				continue;
  			}
  			this._removeTile(key);
  		}
  	},

  	_removeAllTiles: function () {
  		for (var key in this._tiles) {
  			this._removeTile(key);
  		}
  	},

  	_invalidateAll: function () {
  		for (var z in this._levels) {
  			remove(this._levels[z].el);
  			this._onRemoveLevel(Number(z));
  			delete this._levels[z];
  		}
  		this._removeAllTiles();

  		this._tileZoom = undefined;
  	},

  	_retainParent: function (x, y, z, minZoom) {
  		var x2 = Math.floor(x / 2),
  		    y2 = Math.floor(y / 2),
  		    z2 = z - 1,
  		    coords2 = new Point(+x2, +y2);
  		coords2.z = +z2;

  		var key = this._tileCoordsToKey(coords2),
  		    tile = this._tiles[key];

  		if (tile && tile.active) {
  			tile.retain = true;
  			return true;

  		} else if (tile && tile.loaded) {
  			tile.retain = true;
  		}

  		if (z2 > minZoom) {
  			return this._retainParent(x2, y2, z2, minZoom);
  		}

  		return false;
  	},

  	_retainChildren: function (x, y, z, maxZoom) {

  		for (var i = 2 * x; i < 2 * x + 2; i++) {
  			for (var j = 2 * y; j < 2 * y + 2; j++) {

  				var coords = new Point(i, j);
  				coords.z = z + 1;

  				var key = this._tileCoordsToKey(coords),
  				    tile = this._tiles[key];

  				if (tile && tile.active) {
  					tile.retain = true;
  					continue;

  				} else if (tile && tile.loaded) {
  					tile.retain = true;
  				}

  				if (z + 1 < maxZoom) {
  					this._retainChildren(i, j, z + 1, maxZoom);
  				}
  			}
  		}
  	},

  	_resetView: function (e) {
  		var animating = e && (e.pinch || e.flyTo);
  		this._setView(this._map.getCenter(), this._map.getZoom(), animating, animating);
  	},

  	_animateZoom: function (e) {
  		this._setView(e.center, e.zoom, true, e.noUpdate);
  	},

  	_clampZoom: function (zoom) {
  		var options = this.options;

  		if (undefined !== options.minNativeZoom && zoom < options.minNativeZoom) {
  			return options.minNativeZoom;
  		}

  		if (undefined !== options.maxNativeZoom && options.maxNativeZoom < zoom) {
  			return options.maxNativeZoom;
  		}

  		return zoom;
  	},

  	_setView: function (center, zoom, noPrune, noUpdate) {
  		var tileZoom = Math.round(zoom);
  		if ((this.options.maxZoom !== undefined && tileZoom > this.options.maxZoom) ||
  		    (this.options.minZoom !== undefined && tileZoom < this.options.minZoom)) {
  			tileZoom = undefined;
  		} else {
  			tileZoom = this._clampZoom(tileZoom);
  		}

  		var tileZoomChanged = this.options.updateWhenZooming && (tileZoom !== this._tileZoom);

  		if (!noUpdate || tileZoomChanged) {

  			this._tileZoom = tileZoom;

  			if (this._abortLoading) {
  				this._abortLoading();
  			}

  			this._updateLevels();
  			this._resetGrid();

  			if (tileZoom !== undefined) {
  				this._update(center);
  			}

  			if (!noPrune) {
  				this._pruneTiles();
  			}

  			// Flag to prevent _updateOpacity from pruning tiles during
  			// a zoom anim or a pinch gesture
  			this._noPrune = !!noPrune;
  		}

  		this._setZoomTransforms(center, zoom);
  	},

  	_setZoomTransforms: function (center, zoom) {
  		for (var i in this._levels) {
  			this._setZoomTransform(this._levels[i], center, zoom);
  		}
  	},

  	_setZoomTransform: function (level, center, zoom) {
  		var scale = this._map.getZoomScale(zoom, level.zoom),
  		    translate = level.origin.multiplyBy(scale)
  		        .subtract(this._map._getNewPixelOrigin(center, zoom)).round();

  		if (Browser.any3d) {
  			setTransform(level.el, translate, scale);
  		} else {
  			setPosition(level.el, translate);
  		}
  	},

  	_resetGrid: function () {
  		var map = this._map,
  		    crs = map.options.crs,
  		    tileSize = this._tileSize = this.getTileSize(),
  		    tileZoom = this._tileZoom;

  		var bounds = this._map.getPixelWorldBounds(this._tileZoom);
  		if (bounds) {
  			this._globalTileRange = this._pxBoundsToTileRange(bounds);
  		}

  		this._wrapX = crs.wrapLng && !this.options.noWrap && [
  			Math.floor(map.project([0, crs.wrapLng[0]], tileZoom).x / tileSize.x),
  			Math.ceil(map.project([0, crs.wrapLng[1]], tileZoom).x / tileSize.y)
  		];
  		this._wrapY = crs.wrapLat && !this.options.noWrap && [
  			Math.floor(map.project([crs.wrapLat[0], 0], tileZoom).y / tileSize.x),
  			Math.ceil(map.project([crs.wrapLat[1], 0], tileZoom).y / tileSize.y)
  		];
  	},

  	_onMoveEnd: function () {
  		if (!this._map || this._map._animatingZoom) { return; }

  		this._update();
  	},

  	_getTiledPixelBounds: function (center) {
  		var map = this._map,
  		    mapZoom = map._animatingZoom ? Math.max(map._animateToZoom, map.getZoom()) : map.getZoom(),
  		    scale = map.getZoomScale(mapZoom, this._tileZoom),
  		    pixelCenter = map.project(center, this._tileZoom).floor(),
  		    halfSize = map.getSize().divideBy(scale * 2);

  		return new Bounds(pixelCenter.subtract(halfSize), pixelCenter.add(halfSize));
  	},

  	// Private method to load tiles in the grid's active zoom level according to map bounds
  	_update: function (center) {
  		var map = this._map;
  		if (!map) { return; }
  		var zoom = this._clampZoom(map.getZoom());

  		if (center === undefined) { center = map.getCenter(); }
  		if (this._tileZoom === undefined) { return; }	// if out of minzoom/maxzoom

  		var pixelBounds = this._getTiledPixelBounds(center),
  		    tileRange = this._pxBoundsToTileRange(pixelBounds),
  		    tileCenter = tileRange.getCenter(),
  		    queue = [],
  		    margin = this.options.keepBuffer,
  		    noPruneRange = new Bounds(tileRange.getBottomLeft().subtract([margin, -margin]),
  		                              tileRange.getTopRight().add([margin, -margin]));

  		// Sanity check: panic if the tile range contains Infinity somewhere.
  		if (!(isFinite(tileRange.min.x) &&
  		      isFinite(tileRange.min.y) &&
  		      isFinite(tileRange.max.x) &&
  		      isFinite(tileRange.max.y))) { throw new Error('Attempted to load an infinite number of tiles'); }

  		for (var key in this._tiles) {
  			var c = this._tiles[key].coords;
  			if (c.z !== this._tileZoom || !noPruneRange.contains(new Point(c.x, c.y))) {
  				this._tiles[key].current = false;
  			}
  		}

  		// _update just loads more tiles. If the tile zoom level differs too much
  		// from the map's, let _setView reset levels and prune old tiles.
  		if (Math.abs(zoom - this._tileZoom) > 1) { this._setView(center, zoom); return; }

  		// create a queue of coordinates to load tiles from
  		for (var j = tileRange.min.y; j <= tileRange.max.y; j++) {
  			for (var i = tileRange.min.x; i <= tileRange.max.x; i++) {
  				var coords = new Point(i, j);
  				coords.z = this._tileZoom;

  				if (!this._isValidTile(coords)) { continue; }

  				var tile = this._tiles[this._tileCoordsToKey(coords)];
  				if (tile) {
  					tile.current = true;
  				} else {
  					queue.push(coords);
  				}
  			}
  		}

  		// sort tile queue to load tiles in order of their distance to center
  		queue.sort(function (a, b) {
  			return a.distanceTo(tileCenter) - b.distanceTo(tileCenter);
  		});

  		if (queue.length !== 0) {
  			// if it's the first batch of tiles to load
  			if (!this._loading) {
  				this._loading = true;
  				// @event loading: Event
  				// Fired when the grid layer starts loading tiles.
  				this.fire('loading');
  			}

  			// create DOM fragment to append tiles in one batch
  			var fragment = document.createDocumentFragment();

  			for (i = 0; i < queue.length; i++) {
  				this._addTile(queue[i], fragment);
  			}

  			this._level.el.appendChild(fragment);
  		}
  	},

  	_isValidTile: function (coords) {
  		var crs = this._map.options.crs;

  		if (!crs.infinite) {
  			// don't load tile if it's out of bounds and not wrapped
  			var bounds = this._globalTileRange;
  			if ((!crs.wrapLng && (coords.x < bounds.min.x || coords.x > bounds.max.x)) ||
  			    (!crs.wrapLat && (coords.y < bounds.min.y || coords.y > bounds.max.y))) { return false; }
  		}

  		if (!this.options.bounds) { return true; }

  		// don't load tile if it doesn't intersect the bounds in options
  		var tileBounds = this._tileCoordsToBounds(coords);
  		return toLatLngBounds(this.options.bounds).overlaps(tileBounds);
  	},

  	_keyToBounds: function (key) {
  		return this._tileCoordsToBounds(this._keyToTileCoords(key));
  	},

  	_tileCoordsToNwSe: function (coords) {
  		var map = this._map,
  		    tileSize = this.getTileSize(),
  		    nwPoint = coords.scaleBy(tileSize),
  		    sePoint = nwPoint.add(tileSize),
  		    nw = map.unproject(nwPoint, coords.z),
  		    se = map.unproject(sePoint, coords.z);
  		return [nw, se];
  	},

  	// converts tile coordinates to its geographical bounds
  	_tileCoordsToBounds: function (coords) {
  		var bp = this._tileCoordsToNwSe(coords),
  		    bounds = new LatLngBounds(bp[0], bp[1]);

  		if (!this.options.noWrap) {
  			bounds = this._map.wrapLatLngBounds(bounds);
  		}
  		return bounds;
  	},
  	// converts tile coordinates to key for the tile cache
  	_tileCoordsToKey: function (coords) {
  		return coords.x + ':' + coords.y + ':' + coords.z;
  	},

  	// converts tile cache key to coordinates
  	_keyToTileCoords: function (key) {
  		var k = key.split(':'),
  		    coords = new Point(+k[0], +k[1]);
  		coords.z = +k[2];
  		return coords;
  	},

  	_removeTile: function (key) {
  		var tile = this._tiles[key];
  		if (!tile) { return; }

  		remove(tile.el);

  		delete this._tiles[key];

  		// @event tileunload: TileEvent
  		// Fired when a tile is removed (e.g. when a tile goes off the screen).
  		this.fire('tileunload', {
  			tile: tile.el,
  			coords: this._keyToTileCoords(key)
  		});
  	},

  	_initTile: function (tile) {
  		addClass(tile, 'leaflet-tile');

  		var tileSize = this.getTileSize();
  		tile.style.width = tileSize.x + 'px';
  		tile.style.height = tileSize.y + 'px';

  		tile.onselectstart = falseFn;
  		tile.onmousemove = falseFn;

  		// update opacity on tiles in IE7-8 because of filter inheritance problems
  		if (Browser.ielt9 && this.options.opacity < 1) {
  			setOpacity(tile, this.options.opacity);
  		}
  	},

  	_addTile: function (coords, container) {
  		var tilePos = this._getTilePos(coords),
  		    key = this._tileCoordsToKey(coords);

  		var tile = this.createTile(this._wrapCoords(coords), bind(this._tileReady, this, coords));

  		this._initTile(tile);

  		// if createTile is defined with a second argument ("done" callback),
  		// we know that tile is async and will be ready later; otherwise
  		if (this.createTile.length < 2) {
  			// mark tile as ready, but delay one frame for opacity animation to happen
  			requestAnimFrame(bind(this._tileReady, this, coords, null, tile));
  		}

  		setPosition(tile, tilePos);

  		// save tile in cache
  		this._tiles[key] = {
  			el: tile,
  			coords: coords,
  			current: true
  		};

  		container.appendChild(tile);
  		// @event tileloadstart: TileEvent
  		// Fired when a tile is requested and starts loading.
  		this.fire('tileloadstart', {
  			tile: tile,
  			coords: coords
  		});
  	},

  	_tileReady: function (coords, err, tile) {
  		if (err) {
  			// @event tileerror: TileErrorEvent
  			// Fired when there is an error loading a tile.
  			this.fire('tileerror', {
  				error: err,
  				tile: tile,
  				coords: coords
  			});
  		}

  		var key = this._tileCoordsToKey(coords);

  		tile = this._tiles[key];
  		if (!tile) { return; }

  		tile.loaded = +new Date();
  		if (this._map._fadeAnimated) {
  			setOpacity(tile.el, 0);
  			cancelAnimFrame(this._fadeFrame);
  			this._fadeFrame = requestAnimFrame(this._updateOpacity, this);
  		} else {
  			tile.active = true;
  			this._pruneTiles();
  		}

  		if (!err) {
  			addClass(tile.el, 'leaflet-tile-loaded');

  			// @event tileload: TileEvent
  			// Fired when a tile loads.
  			this.fire('tileload', {
  				tile: tile.el,
  				coords: coords
  			});
  		}

  		if (this._noTilesToLoad()) {
  			this._loading = false;
  			// @event load: Event
  			// Fired when the grid layer loaded all visible tiles.
  			this.fire('load');

  			if (Browser.ielt9 || !this._map._fadeAnimated) {
  				requestAnimFrame(this._pruneTiles, this);
  			} else {
  				// Wait a bit more than 0.2 secs (the duration of the tile fade-in)
  				// to trigger a pruning.
  				setTimeout(bind(this._pruneTiles, this), 250);
  			}
  		}
  	},

  	_getTilePos: function (coords) {
  		return coords.scaleBy(this.getTileSize()).subtract(this._level.origin);
  	},

  	_wrapCoords: function (coords) {
  		var newCoords = new Point(
  			this._wrapX ? wrapNum(coords.x, this._wrapX) : coords.x,
  			this._wrapY ? wrapNum(coords.y, this._wrapY) : coords.y);
  		newCoords.z = coords.z;
  		return newCoords;
  	},

  	_pxBoundsToTileRange: function (bounds) {
  		var tileSize = this.getTileSize();
  		return new Bounds(
  			bounds.min.unscaleBy(tileSize).floor(),
  			bounds.max.unscaleBy(tileSize).ceil().subtract([1, 1]));
  	},

  	_noTilesToLoad: function () {
  		for (var key in this._tiles) {
  			if (!this._tiles[key].loaded) { return false; }
  		}
  		return true;
  	}
  });

  // @factory L.gridLayer(options?: GridLayer options)
  // Creates a new instance of GridLayer with the supplied options.
  function gridLayer(options) {
  	return new GridLayer(options);
  }

  /*\r
   * @class TileLayer\r
   * @inherits GridLayer\r
   * @aka L.TileLayer\r
   * Used to load and display tile layers on the map. Note that most tile servers require attribution, which you can set under \`Layer\`. Extends \`GridLayer\`.\r
   *\r
   * @example\r
   *\r
   * \`\`\`js\r
   * L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}', {foo: 'bar', attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(map);
   * \`\`\`\r
   *\r
   * @section URL template\r
   * @example\r
   *\r
   * A string of the following form:\r
   *\r
   * \`\`\`\r
   * 'https://{s}.somedomain.com/blabla/{z}/{x}/{y}{r}.png'\r
   * \`\`\`\r
   *\r
   * \`{s}\` means one of the available subdomains (used sequentially to help with browser parallel requests per domain limitation; subdomain values are specified in options; \`a\`, \`b\` or \`c\` by default, can be omitted), \`{z}\` \u2014 zoom level, \`{x}\` and \`{y}\` \u2014 tile coordinates. \`{r}\` can be used to add "&commat;2x" to the URL to load retina tiles.\r
   *\r
   * You can use custom keys in the template, which will be [evaluated](#util-template) from TileLayer options, like this:\r
   *\r
   * \`\`\`\r
   * L.tileLayer('https://{s}.somedomain.com/{foo}/{z}/{x}/{y}.png', {foo: 'bar'});\r
   * \`\`\`\r
   */\r
\r
\r
  var TileLayer = GridLayer.extend({\r
\r
  	// @section\r
  	// @aka TileLayer options\r
  	options: {\r
  		// @option minZoom: Number = 0\r
  		// The minimum zoom level down to which this layer will be displayed (inclusive).\r
  		minZoom: 0,\r
\r
  		// @option maxZoom: Number = 18\r
  		// The maximum zoom level up to which this layer will be displayed (inclusive).\r
  		maxZoom: 18,\r
\r
  		// @option subdomains: String|String[] = 'abc'\r
  		// Subdomains of the tile service. Can be passed in the form of one string (where each letter is a subdomain name) or an array of strings.\r
  		subdomains: 'abc',\r
\r
  		// @option errorTileUrl: String = ''\r
  		// URL to the tile image to show in place of the tile that failed to load.\r
  		errorTileUrl: '',\r
\r
  		// @option zoomOffset: Number = 0\r
  		// The zoom number used in tile URLs will be offset with this value.\r
  		zoomOffset: 0,\r
\r
  		// @option tms: Boolean = false\r
  		// If \`true\`, inverses Y axis numbering for tiles (turn this on for [TMS](https://en.wikipedia.org/wiki/Tile_Map_Service) services).\r
  		tms: false,\r
\r
  		// @option zoomReverse: Boolean = false\r
  		// If set to true, the zoom number used in tile URLs will be reversed (\`maxZoom - zoom\` instead of \`zoom\`)\r
  		zoomReverse: false,\r
\r
  		// @option detectRetina: Boolean = false\r
  		// If \`true\` and user is on a retina display, it will request four tiles of half the specified size and a bigger zoom level in place of one to utilize the high resolution.\r
  		detectRetina: false,\r
\r
  		// @option crossOrigin: Boolean|String = false\r
  		// Whether the crossOrigin attribute will be added to the tiles.\r
  		// If a String is provided, all tiles will have their crossOrigin attribute set to the String provided. This is needed if you want to access tile pixel data.\r
  		// Refer to [CORS Settings](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes) for valid String values.\r
  		crossOrigin: false,\r
\r
  		// @option referrerPolicy: Boolean|String = false\r
  		// Whether the referrerPolicy attribute will be added to the tiles.\r
  		// If a String is provided, all tiles will have their referrerPolicy attribute set to the String provided.\r
  		// This may be needed if your map's rendering context has a strict default but your tile provider expects a valid referrer\r
  		// (e.g. to validate an API token).\r
  		// Refer to [HTMLImageElement.referrerPolicy](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/referrerPolicy) for valid String values.\r
  		referrerPolicy: false\r
  	},\r
\r
  	initialize: function (url, options) {\r
\r
  		this._url = url;\r
\r
  		options = setOptions(this, options);\r
\r
  		// detecting retina displays, adjusting tileSize and zoom levels\r
  		if (options.detectRetina && Browser.retina && options.maxZoom > 0) {\r
\r
  			options.tileSize = Math.floor(options.tileSize / 2);\r
\r
  			if (!options.zoomReverse) {\r
  				options.zoomOffset++;\r
  				options.maxZoom = Math.max(options.minZoom, options.maxZoom - 1);\r
  			} else {\r
  				options.zoomOffset--;\r
  				options.minZoom = Math.min(options.maxZoom, options.minZoom + 1);\r
  			}\r
\r
  			options.minZoom = Math.max(0, options.minZoom);\r
  		} else if (!options.zoomReverse) {\r
  			// make sure maxZoom is gte minZoom\r
  			options.maxZoom = Math.max(options.minZoom, options.maxZoom);\r
  		} else {\r
  			// make sure minZoom is lte maxZoom\r
  			options.minZoom = Math.min(options.maxZoom, options.minZoom);\r
  		}\r
\r
  		if (typeof options.subdomains === 'string') {\r
  			options.subdomains = options.subdomains.split('');\r
  		}\r
\r
  		this.on('tileunload', this._onTileRemove);\r
  	},\r
\r
  	// @method setUrl(url: String, noRedraw?: Boolean): this\r
  	// Updates the layer's URL template and redraws it (unless \`noRedraw\` is set to \`true\`).\r
  	// If the URL does not change, the layer will not be redrawn unless\r
  	// the noRedraw parameter is set to false.\r
  	setUrl: function (url, noRedraw) {\r
  		if (this._url === url && noRedraw === undefined) {\r
  			noRedraw = true;\r
  		}\r
\r
  		this._url = url;\r
\r
  		if (!noRedraw) {\r
  			this.redraw();\r
  		}\r
  		return this;\r
  	},\r
\r
  	// @method createTile(coords: Object, done?: Function): HTMLElement\r
  	// Called only internally, overrides GridLayer's [\`createTile()\`](#gridlayer-createtile)\r
  	// to return an \`<img>\` HTML element with the appropriate image URL given \`coords\`. The \`done\`\r
  	// callback is called when the tile has been loaded.\r
  	createTile: function (coords, done) {\r
  		var tile = document.createElement('img');\r
\r
  		on(tile, 'load', bind(this._tileOnLoad, this, done, tile));\r
  		on(tile, 'error', bind(this._tileOnError, this, done, tile));\r
\r
  		if (this.options.crossOrigin || this.options.crossOrigin === '') {\r
  			tile.crossOrigin = this.options.crossOrigin === true ? '' : this.options.crossOrigin;\r
  		}\r
\r
  		// for this new option we follow the documented behavior\r
  		// more closely by only setting the property when string\r
  		if (typeof this.options.referrerPolicy === 'string') {\r
  			tile.referrerPolicy = this.options.referrerPolicy;\r
  		}\r
\r
  		// The alt attribute is set to the empty string,\r
  		// allowing screen readers to ignore the decorative image tiles.\r
  		// https://www.w3.org/WAI/tutorials/images/decorative/\r
  		// https://www.w3.org/TR/html-aria/#el-img-empty-alt\r
  		tile.alt = '';\r
\r
  		tile.src = this.getTileUrl(coords);\r
\r
  		return tile;\r
  	},\r
\r
  	// @section Extension methods\r
  	// @uninheritable\r
  	// Layers extending \`TileLayer\` might reimplement the following method.\r
  	// @method getTileUrl(coords: Object): String\r
  	// Called only internally, returns the URL for a tile given its coordinates.\r
  	// Classes extending \`TileLayer\` can override this function to provide custom tile URL naming schemes.\r
  	getTileUrl: function (coords) {\r
  		var data = {\r
  			r: Browser.retina ? '@2x' : '',\r
  			s: this._getSubdomain(coords),\r
  			x: coords.x,\r
  			y: coords.y,\r
  			z: this._getZoomForUrl()\r
  		};\r
  		if (this._map && !this._map.options.crs.infinite) {\r
  			var invertedY = this._globalTileRange.max.y - coords.y;\r
  			if (this.options.tms) {\r
  				data['y'] = invertedY;\r
  			}\r
  			data['-y'] = invertedY;\r
  		}\r
\r
  		return template(this._url, extend(data, this.options));\r
  	},\r
\r
  	_tileOnLoad: function (done, tile) {\r
  		// For https://github.com/Leaflet/Leaflet/issues/3332\r
  		if (Browser.ielt9) {\r
  			setTimeout(bind(done, this, null, tile), 0);\r
  		} else {\r
  			done(null, tile);\r
  		}\r
  	},\r
\r
  	_tileOnError: function (done, tile, e) {\r
  		var errorUrl = this.options.errorTileUrl;\r
  		if (errorUrl && tile.getAttribute('src') !== errorUrl) {\r
  			tile.src = errorUrl;\r
  		}\r
  		done(e, tile);\r
  	},\r
\r
  	_onTileRemove: function (e) {\r
  		e.tile.onload = null;\r
  	},\r
\r
  	_getZoomForUrl: function () {\r
  		var zoom = this._tileZoom,\r
  		maxZoom = this.options.maxZoom,\r
  		zoomReverse = this.options.zoomReverse,\r
  		zoomOffset = this.options.zoomOffset;\r
\r
  		if (zoomReverse) {\r
  			zoom = maxZoom - zoom;\r
  		}\r
\r
  		return zoom + zoomOffset;\r
  	},\r
\r
  	_getSubdomain: function (tilePoint) {\r
  		var index = Math.abs(tilePoint.x + tilePoint.y) % this.options.subdomains.length;\r
  		return this.options.subdomains[index];\r
  	},\r
\r
  	// stops loading all tiles in the background layer\r
  	_abortLoading: function () {\r
  		var i, tile;\r
  		for (i in this._tiles) {\r
  			if (this._tiles[i].coords.z !== this._tileZoom) {\r
  				tile = this._tiles[i].el;\r
\r
  				tile.onload = falseFn;\r
  				tile.onerror = falseFn;\r
\r
  				if (!tile.complete) {\r
  					tile.src = emptyImageUrl;\r
  					var coords = this._tiles[i].coords;\r
  					remove(tile);\r
  					delete this._tiles[i];\r
  					// @event tileabort: TileEvent\r
  					// Fired when a tile was loading but is now not wanted.\r
  					this.fire('tileabort', {\r
  						tile: tile,\r
  						coords: coords\r
  					});\r
  				}\r
  			}\r
  		}\r
  	},\r
\r
  	_removeTile: function (key) {\r
  		var tile = this._tiles[key];\r
  		if (!tile) { return; }\r
\r
  		// Cancels any pending http requests associated with the tile\r
  		tile.el.setAttribute('src', emptyImageUrl);\r
\r
  		return GridLayer.prototype._removeTile.call(this, key);\r
  	},\r
\r
  	_tileReady: function (coords, err, tile) {\r
  		if (!this._map || (tile && tile.getAttribute('src') === emptyImageUrl)) {\r
  			return;\r
  		}\r
\r
  		return GridLayer.prototype._tileReady.call(this, coords, err, tile);\r
  	}\r
  });\r
\r
\r
  // @factory L.tilelayer(urlTemplate: String, options?: TileLayer options)\r
  // Instantiates a tile layer object given a \`URL template\` and optionally an options object.\r
\r
  function tileLayer(url, options) {\r
  	return new TileLayer(url, options);\r
  }

  /*\r
   * @class TileLayer.WMS\r
   * @inherits TileLayer\r
   * @aka L.TileLayer.WMS\r
   * Used to display [WMS](https://en.wikipedia.org/wiki/Web_Map_Service) services as tile layers on the map. Extends \`TileLayer\`.\r
   *\r
   * @example\r
   *\r
   * \`\`\`js\r
   * var nexrad = L.tileLayer.wms("http://mesonet.agron.iastate.edu/cgi-bin/wms/nexrad/n0r.cgi", {\r
   * 	layers: 'nexrad-n0r-900913',\r
   * 	format: 'image/png',\r
   * 	transparent: true,\r
   * 	attribution: "Weather data \xA9 2012 IEM Nexrad"\r
   * });\r
   * \`\`\`\r
   */\r
\r
  var TileLayerWMS = TileLayer.extend({\r
\r
  	// @section\r
  	// @aka TileLayer.WMS options\r
  	// If any custom options not documented here are used, they will be sent to the\r
  	// WMS server as extra parameters in each request URL. This can be useful for\r
  	// [non-standard vendor WMS parameters](https://docs.geoserver.org/stable/en/user/services/wms/vendor.html).\r
  	defaultWmsParams: {\r
  		service: 'WMS',\r
  		request: 'GetMap',\r
\r
  		// @option layers: String = ''\r
  		// **(required)** Comma-separated list of WMS layers to show.\r
  		layers: '',\r
\r
  		// @option styles: String = ''\r
  		// Comma-separated list of WMS styles.\r
  		styles: '',\r
\r
  		// @option format: String = 'image/jpeg'\r
  		// WMS image format (use \`'image/png'\` for layers with transparency).\r
  		format: 'image/jpeg',\r
\r
  		// @option transparent: Boolean = false\r
  		// If \`true\`, the WMS service will return images with transparency.\r
  		transparent: false,\r
\r
  		// @option version: String = '1.1.1'\r
  		// Version of the WMS service to use\r
  		version: '1.1.1'\r
  	},\r
\r
  	options: {\r
  		// @option crs: CRS = null\r
  		// Coordinate Reference System to use for the WMS requests, defaults to\r
  		// map CRS. Don't change this if you're not sure what it means.\r
  		crs: null,\r
\r
  		// @option uppercase: Boolean = false\r
  		// If \`true\`, WMS request parameter keys will be uppercase.\r
  		uppercase: false\r
  	},\r
\r
  	initialize: function (url, options) {\r
\r
  		this._url = url;\r
\r
  		var wmsParams = extend({}, this.defaultWmsParams);\r
\r
  		// all keys that are not TileLayer options go to WMS params\r
  		for (var i in options) {\r
  			if (!(i in this.options)) {\r
  				wmsParams[i] = options[i];\r
  			}\r
  		}\r
\r
  		options = setOptions(this, options);\r
\r
  		var realRetina = options.detectRetina && Browser.retina ? 2 : 1;\r
  		var tileSize = this.getTileSize();\r
  		wmsParams.width = tileSize.x * realRetina;\r
  		wmsParams.height = tileSize.y * realRetina;\r
\r
  		this.wmsParams = wmsParams;\r
  	},\r
\r
  	onAdd: function (map) {\r
\r
  		this._crs = this.options.crs || map.options.crs;\r
  		this._wmsVersion = parseFloat(this.wmsParams.version);\r
\r
  		var projectionKey = this._wmsVersion >= 1.3 ? 'crs' : 'srs';\r
  		this.wmsParams[projectionKey] = this._crs.code;\r
\r
  		TileLayer.prototype.onAdd.call(this, map);\r
  	},\r
\r
  	getTileUrl: function (coords) {\r
\r
  		var tileBounds = this._tileCoordsToNwSe(coords),\r
  		    crs = this._crs,\r
  		    bounds = toBounds(crs.project(tileBounds[0]), crs.project(tileBounds[1])),\r
  		    min = bounds.min,\r
  		    max = bounds.max,\r
  		    bbox = (this._wmsVersion >= 1.3 && this._crs === EPSG4326 ?\r
  		    [min.y, min.x, max.y, max.x] :\r
  		    [min.x, min.y, max.x, max.y]).join(','),\r
  		    url = TileLayer.prototype.getTileUrl.call(this, coords);\r
  		return url +\r
  			getParamString(this.wmsParams, url, this.options.uppercase) +\r
  			(this.options.uppercase ? '&BBOX=' : '&bbox=') + bbox;\r
  	},\r
\r
  	// @method setParams(params: Object, noRedraw?: Boolean): this\r
  	// Merges an object with the new parameters and re-requests tiles on the current screen (unless \`noRedraw\` was set to true).\r
  	setParams: function (params, noRedraw) {\r
\r
  		extend(this.wmsParams, params);\r
\r
  		if (!noRedraw) {\r
  			this.redraw();\r
  		}\r
\r
  		return this;\r
  	}\r
  });\r
\r
\r
  // @factory L.tileLayer.wms(baseUrl: String, options: TileLayer.WMS options)\r
  // Instantiates a WMS tile layer object given a base URL of the WMS service and a WMS parameters/options object.\r
  function tileLayerWMS(url, options) {\r
  	return new TileLayerWMS(url, options);\r
  }

  TileLayer.WMS = TileLayerWMS;
  tileLayer.wms = tileLayerWMS;

  /*
   * @class Renderer
   * @inherits Layer
   * @aka L.Renderer
   *
   * Base class for vector renderer implementations (\`SVG\`, \`Canvas\`). Handles the
   * DOM container of the renderer, its bounds, and its zoom animation.
   *
   * A \`Renderer\` works as an implicit layer group for all \`Path\`s - the renderer
   * itself can be added or removed to the map. All paths use a renderer, which can
   * be implicit (the map will decide the type of renderer and use it automatically)
   * or explicit (using the [\`renderer\`](#path-renderer) option of the path).
   *
   * Do not use this class directly, use \`SVG\` and \`Canvas\` instead.
   *
   * @event update: Event
   * Fired when the renderer updates its bounds, center and zoom, for example when
   * its map has moved
   */

  var Renderer = Layer.extend({

  	// @section
  	// @aka Renderer options
  	options: {
  		// @option padding: Number = 0.1
  		// How much to extend the clip area around the map view (relative to its size)
  		// e.g. 0.1 would be 10% of map view in each direction
  		padding: 0.1
  	},

  	initialize: function (options) {
  		setOptions(this, options);
  		stamp(this);
  		this._layers = this._layers || {};
  	},

  	onAdd: function () {
  		if (!this._container) {
  			this._initContainer(); // defined by renderer implementations

  			// always keep transform-origin as 0 0
  			addClass(this._container, 'leaflet-zoom-animated');
  		}

  		this.getPane().appendChild(this._container);
  		this._update();
  		this.on('update', this._updatePaths, this);
  	},

  	onRemove: function () {
  		this.off('update', this._updatePaths, this);
  		this._destroyContainer();
  	},

  	getEvents: function () {
  		var events = {
  			viewreset: this._reset,
  			zoom: this._onZoom,
  			moveend: this._update,
  			zoomend: this._onZoomEnd
  		};
  		if (this._zoomAnimated) {
  			events.zoomanim = this._onAnimZoom;
  		}
  		return events;
  	},

  	_onAnimZoom: function (ev) {
  		this._updateTransform(ev.center, ev.zoom);
  	},

  	_onZoom: function () {
  		this._updateTransform(this._map.getCenter(), this._map.getZoom());
  	},

  	_updateTransform: function (center, zoom) {
  		var scale = this._map.getZoomScale(zoom, this._zoom),
  		    viewHalf = this._map.getSize().multiplyBy(0.5 + this.options.padding),
  		    currentCenterPoint = this._map.project(this._center, zoom),

  		    topLeftOffset = viewHalf.multiplyBy(-scale).add(currentCenterPoint)
  				  .subtract(this._map._getNewPixelOrigin(center, zoom));

  		if (Browser.any3d) {
  			setTransform(this._container, topLeftOffset, scale);
  		} else {
  			setPosition(this._container, topLeftOffset);
  		}
  	},

  	_reset: function () {
  		this._update();
  		this._updateTransform(this._center, this._zoom);

  		for (var id in this._layers) {
  			this._layers[id]._reset();
  		}
  	},

  	_onZoomEnd: function () {
  		for (var id in this._layers) {
  			this._layers[id]._project();
  		}
  	},

  	_updatePaths: function () {
  		for (var id in this._layers) {
  			this._layers[id]._update();
  		}
  	},

  	_update: function () {
  		// Update pixel bounds of renderer container (for positioning/sizing/clipping later)
  		// Subclasses are responsible of firing the 'update' event.
  		var p = this.options.padding,
  		    size = this._map.getSize(),
  		    min = this._map.containerPointToLayerPoint(size.multiplyBy(-p)).round();

  		this._bounds = new Bounds(min, min.add(size.multiplyBy(1 + p * 2)).round());

  		this._center = this._map.getCenter();
  		this._zoom = this._map.getZoom();
  	}
  });

  /*
   * @class Canvas
   * @inherits Renderer
   * @aka L.Canvas
   *
   * Allows vector layers to be displayed with [\`<canvas>\`](https://developer.mozilla.org/docs/Web/API/Canvas_API).
   * Inherits \`Renderer\`.
   *
   * Due to [technical limitations](https://caniuse.com/canvas), Canvas is not
   * available in all web browsers, notably IE8, and overlapping geometries might
   * not display properly in some edge cases.
   *
   * @example
   *
   * Use Canvas by default for all paths in the map:
   *
   * \`\`\`js
   * var map = L.map('map', {
   * 	renderer: L.canvas()
   * });
   * \`\`\`
   *
   * Use a Canvas renderer with extra padding for specific vector geometries:
   *
   * \`\`\`js
   * var map = L.map('map');
   * var myRenderer = L.canvas({ padding: 0.5 });
   * var line = L.polyline( coordinates, { renderer: myRenderer } );
   * var circle = L.circle( center, { renderer: myRenderer } );
   * \`\`\`
   */

  var Canvas = Renderer.extend({

  	// @section
  	// @aka Canvas options
  	options: {
  		// @option tolerance: Number = 0
  		// How much to extend the click tolerance around a path/object on the map.
  		tolerance: 0
  	},

  	getEvents: function () {
  		var events = Renderer.prototype.getEvents.call(this);
  		events.viewprereset = this._onViewPreReset;
  		return events;
  	},

  	_onViewPreReset: function () {
  		// Set a flag so that a viewprereset+moveend+viewreset only updates&redraws once
  		this._postponeUpdatePaths = true;
  	},

  	onAdd: function () {
  		Renderer.prototype.onAdd.call(this);

  		// Redraw vectors since canvas is cleared upon removal,
  		// in case of removing the renderer itself from the map.
  		this._draw();
  	},

  	_initContainer: function () {
  		var container = this._container = document.createElement('canvas');

  		on(container, 'mousemove', this._onMouseMove, this);
  		on(container, 'click dblclick mousedown mouseup contextmenu', this._onClick, this);
  		on(container, 'mouseout', this._handleMouseOut, this);
  		container['_leaflet_disable_events'] = true;

  		this._ctx = container.getContext('2d');
  	},

  	_destroyContainer: function () {
  		cancelAnimFrame(this._redrawRequest);
  		delete this._ctx;
  		remove(this._container);
  		off(this._container);
  		delete this._container;
  	},

  	_updatePaths: function () {
  		if (this._postponeUpdatePaths) { return; }

  		var layer;
  		this._redrawBounds = null;
  		for (var id in this._layers) {
  			layer = this._layers[id];
  			layer._update();
  		}
  		this._redraw();
  	},

  	_update: function () {
  		if (this._map._animatingZoom && this._bounds) { return; }

  		Renderer.prototype._update.call(this);

  		var b = this._bounds,
  		    container = this._container,
  		    size = b.getSize(),
  		    m = Browser.retina ? 2 : 1;

  		setPosition(container, b.min);

  		// set canvas size (also clearing it); use double size on retina
  		container.width = m * size.x;
  		container.height = m * size.y;
  		container.style.width = size.x + 'px';
  		container.style.height = size.y + 'px';

  		if (Browser.retina) {
  			this._ctx.scale(2, 2);
  		}

  		// translate so we use the same path coordinates after canvas element moves
  		this._ctx.translate(-b.min.x, -b.min.y);

  		// Tell paths to redraw themselves
  		this.fire('update');
  	},

  	_reset: function () {
  		Renderer.prototype._reset.call(this);

  		if (this._postponeUpdatePaths) {
  			this._postponeUpdatePaths = false;
  			this._updatePaths();
  		}
  	},

  	_initPath: function (layer) {
  		this._updateDashArray(layer);
  		this._layers[stamp(layer)] = layer;

  		var order = layer._order = {
  			layer: layer,
  			prev: this._drawLast,
  			next: null
  		};
  		if (this._drawLast) { this._drawLast.next = order; }
  		this._drawLast = order;
  		this._drawFirst = this._drawFirst || this._drawLast;
  	},

  	_addPath: function (layer) {
  		this._requestRedraw(layer);
  	},

  	_removePath: function (layer) {
  		var order = layer._order;
  		var next = order.next;
  		var prev = order.prev;

  		if (next) {
  			next.prev = prev;
  		} else {
  			this._drawLast = prev;
  		}
  		if (prev) {
  			prev.next = next;
  		} else {
  			this._drawFirst = next;
  		}

  		delete layer._order;

  		delete this._layers[stamp(layer)];

  		this._requestRedraw(layer);
  	},

  	_updatePath: function (layer) {
  		// Redraw the union of the layer's old pixel
  		// bounds and the new pixel bounds.
  		this._extendRedrawBounds(layer);
  		layer._project();
  		layer._update();
  		// The redraw will extend the redraw bounds
  		// with the new pixel bounds.
  		this._requestRedraw(layer);
  	},

  	_updateStyle: function (layer) {
  		this._updateDashArray(layer);
  		this._requestRedraw(layer);
  	},

  	_updateDashArray: function (layer) {
  		if (typeof layer.options.dashArray === 'string') {
  			var parts = layer.options.dashArray.split(/[, ]+/),
  			    dashArray = [],
  			    dashValue,
  			    i;
  			for (i = 0; i < parts.length; i++) {
  				dashValue = Number(parts[i]);
  				// Ignore dash array containing invalid lengths
  				if (isNaN(dashValue)) { return; }
  				dashArray.push(dashValue);
  			}
  			layer.options._dashArray = dashArray;
  		} else {
  			layer.options._dashArray = layer.options.dashArray;
  		}
  	},

  	_requestRedraw: function (layer) {
  		if (!this._map) { return; }

  		this._extendRedrawBounds(layer);
  		this._redrawRequest = this._redrawRequest || requestAnimFrame(this._redraw, this);
  	},

  	_extendRedrawBounds: function (layer) {
  		if (layer._pxBounds) {
  			var padding = (layer.options.weight || 0) + 1;
  			this._redrawBounds = this._redrawBounds || new Bounds();
  			this._redrawBounds.extend(layer._pxBounds.min.subtract([padding, padding]));
  			this._redrawBounds.extend(layer._pxBounds.max.add([padding, padding]));
  		}
  	},

  	_redraw: function () {
  		this._redrawRequest = null;

  		if (this._redrawBounds) {
  			this._redrawBounds.min._floor();
  			this._redrawBounds.max._ceil();
  		}

  		this._clear(); // clear layers in redraw bounds
  		this._draw(); // draw layers

  		this._redrawBounds = null;
  	},

  	_clear: function () {
  		var bounds = this._redrawBounds;
  		if (bounds) {
  			var size = bounds.getSize();
  			this._ctx.clearRect(bounds.min.x, bounds.min.y, size.x, size.y);
  		} else {
  			this._ctx.save();
  			this._ctx.setTransform(1, 0, 0, 1, 0, 0);
  			this._ctx.clearRect(0, 0, this._container.width, this._container.height);
  			this._ctx.restore();
  		}
  	},

  	_draw: function () {
  		var layer, bounds = this._redrawBounds;
  		this._ctx.save();
  		if (bounds) {
  			var size = bounds.getSize();
  			this._ctx.beginPath();
  			this._ctx.rect(bounds.min.x, bounds.min.y, size.x, size.y);
  			this._ctx.clip();
  		}

  		this._drawing = true;

  		for (var order = this._drawFirst; order; order = order.next) {
  			layer = order.layer;
  			if (!bounds || (layer._pxBounds && layer._pxBounds.intersects(bounds))) {
  				layer._updatePath();
  			}
  		}

  		this._drawing = false;

  		this._ctx.restore();  // Restore state before clipping.
  	},

  	_updatePoly: function (layer, closed) {
  		if (!this._drawing) { return; }

  		var i, j, len2, p,
  		    parts = layer._parts,
  		    len = parts.length,
  		    ctx = this._ctx;

  		if (!len) { return; }

  		ctx.beginPath();

  		for (i = 0; i < len; i++) {
  			for (j = 0, len2 = parts[i].length; j < len2; j++) {
  				p = parts[i][j];
  				ctx[j ? 'lineTo' : 'moveTo'](p.x, p.y);
  			}
  			if (closed) {
  				ctx.closePath();
  			}
  		}

  		this._fillStroke(ctx, layer);

  		// TODO optimization: 1 fill/stroke for all features with equal style instead of 1 for each feature
  	},

  	_updateCircle: function (layer) {

  		if (!this._drawing || layer._empty()) { return; }

  		var p = layer._point,
  		    ctx = this._ctx,
  		    r = Math.max(Math.round(layer._radius), 1),
  		    s = (Math.max(Math.round(layer._radiusY), 1) || r) / r;

  		if (s !== 1) {
  			ctx.save();
  			ctx.scale(1, s);
  		}

  		ctx.beginPath();
  		ctx.arc(p.x, p.y / s, r, 0, Math.PI * 2, false);

  		if (s !== 1) {
  			ctx.restore();
  		}

  		this._fillStroke(ctx, layer);
  	},

  	_fillStroke: function (ctx, layer) {
  		var options = layer.options;

  		if (options.fill) {
  			ctx.globalAlpha = options.fillOpacity;
  			ctx.fillStyle = options.fillColor || options.color;
  			ctx.fill(options.fillRule || 'evenodd');
  		}

  		if (options.stroke && options.weight !== 0) {
  			if (ctx.setLineDash) {
  				ctx.setLineDash(layer.options && layer.options._dashArray || []);
  			}
  			ctx.globalAlpha = options.opacity;
  			ctx.lineWidth = options.weight;
  			ctx.strokeStyle = options.color;
  			ctx.lineCap = options.lineCap;
  			ctx.lineJoin = options.lineJoin;
  			ctx.stroke();
  		}
  	},

  	// Canvas obviously doesn't have mouse events for individual drawn objects,
  	// so we emulate that by calculating what's under the mouse on mousemove/click manually

  	_onClick: function (e) {
  		var point = this._map.mouseEventToLayerPoint(e), layer, clickedLayer;

  		for (var order = this._drawFirst; order; order = order.next) {
  			layer = order.layer;
  			if (layer.options.interactive && layer._containsPoint(point)) {
  				if (!(e.type === 'click' || e.type === 'preclick') || !this._map._draggableMoved(layer)) {
  					clickedLayer = layer;
  				}
  			}
  		}
  		this._fireEvent(clickedLayer ? [clickedLayer] : false, e);
  	},

  	_onMouseMove: function (e) {
  		if (!this._map || this._map.dragging.moving() || this._map._animatingZoom) { return; }

  		var point = this._map.mouseEventToLayerPoint(e);
  		this._handleMouseHover(e, point);
  	},


  	_handleMouseOut: function (e) {
  		var layer = this._hoveredLayer;
  		if (layer) {
  			// if we're leaving the layer, fire mouseout
  			removeClass(this._container, 'leaflet-interactive');
  			this._fireEvent([layer], e, 'mouseout');
  			this._hoveredLayer = null;
  			this._mouseHoverThrottled = false;
  		}
  	},

  	_handleMouseHover: function (e, point) {
  		if (this._mouseHoverThrottled) {
  			return;
  		}

  		var layer, candidateHoveredLayer;

  		for (var order = this._drawFirst; order; order = order.next) {
  			layer = order.layer;
  			if (layer.options.interactive && layer._containsPoint(point)) {
  				candidateHoveredLayer = layer;
  			}
  		}

  		if (candidateHoveredLayer !== this._hoveredLayer) {
  			this._handleMouseOut(e);

  			if (candidateHoveredLayer) {
  				addClass(this._container, 'leaflet-interactive'); // change cursor
  				this._fireEvent([candidateHoveredLayer], e, 'mouseover');
  				this._hoveredLayer = candidateHoveredLayer;
  			}
  		}

  		this._fireEvent(this._hoveredLayer ? [this._hoveredLayer] : false, e);

  		this._mouseHoverThrottled = true;
  		setTimeout(bind(function () {
  			this._mouseHoverThrottled = false;
  		}, this), 32);
  	},

  	_fireEvent: function (layers, e, type) {
  		this._map._fireDOMEvent(e, type || e.type, layers);
  	},

  	_bringToFront: function (layer) {
  		var order = layer._order;

  		if (!order) { return; }

  		var next = order.next;
  		var prev = order.prev;

  		if (next) {
  			next.prev = prev;
  		} else {
  			// Already last
  			return;
  		}
  		if (prev) {
  			prev.next = next;
  		} else if (next) {
  			// Update first entry unless this is the
  			// single entry
  			this._drawFirst = next;
  		}

  		order.prev = this._drawLast;
  		this._drawLast.next = order;

  		order.next = null;
  		this._drawLast = order;

  		this._requestRedraw(layer);
  	},

  	_bringToBack: function (layer) {
  		var order = layer._order;

  		if (!order) { return; }

  		var next = order.next;
  		var prev = order.prev;

  		if (prev) {
  			prev.next = next;
  		} else {
  			// Already first
  			return;
  		}
  		if (next) {
  			next.prev = prev;
  		} else if (prev) {
  			// Update last entry unless this is the
  			// single entry
  			this._drawLast = prev;
  		}

  		order.prev = null;

  		order.next = this._drawFirst;
  		this._drawFirst.prev = order;
  		this._drawFirst = order;

  		this._requestRedraw(layer);
  	}
  });

  // @factory L.canvas(options?: Renderer options)
  // Creates a Canvas renderer with the given options.
  function canvas(options) {
  	return Browser.canvas ? new Canvas(options) : null;
  }

  /*
   * Thanks to Dmitry Baranovsky and his Raphael library for inspiration!
   */


  var vmlCreate = (function () {
  	try {
  		document.namespaces.add('lvml', 'urn:schemas-microsoft-com:vml');
  		return function (name) {
  			return document.createElement('<lvml:' + name + ' class="lvml">');
  		};
  	} catch (e) {
  		// Do not return fn from catch block so \`e\` can be garbage collected
  		// See https://github.com/Leaflet/Leaflet/pull/7279
  	}
  	return function (name) {
  		return document.createElement('<' + name + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">');
  	};
  })();


  /*
   * @class SVG
   *
   *
   * VML was deprecated in 2012, which means VML functionality exists only for backwards compatibility
   * with old versions of Internet Explorer.
   */

  // mixin to redefine some SVG methods to handle VML syntax which is similar but with some differences
  var vmlMixin = {

  	_initContainer: function () {
  		this._container = create$1('div', 'leaflet-vml-container');
  	},

  	_update: function () {
  		if (this._map._animatingZoom) { return; }
  		Renderer.prototype._update.call(this);
  		this.fire('update');
  	},

  	_initPath: function (layer) {
  		var container = layer._container = vmlCreate('shape');

  		addClass(container, 'leaflet-vml-shape ' + (this.options.className || ''));

  		container.coordsize = '1 1';

  		layer._path = vmlCreate('path');
  		container.appendChild(layer._path);

  		this._updateStyle(layer);
  		this._layers[stamp(layer)] = layer;
  	},

  	_addPath: function (layer) {
  		var container = layer._container;
  		this._container.appendChild(container);

  		if (layer.options.interactive) {
  			layer.addInteractiveTarget(container);
  		}
  	},

  	_removePath: function (layer) {
  		var container = layer._container;
  		remove(container);
  		layer.removeInteractiveTarget(container);
  		delete this._layers[stamp(layer)];
  	},

  	_updateStyle: function (layer) {
  		var stroke = layer._stroke,
  		    fill = layer._fill,
  		    options = layer.options,
  		    container = layer._container;

  		container.stroked = !!options.stroke;
  		container.filled = !!options.fill;

  		if (options.stroke) {
  			if (!stroke) {
  				stroke = layer._stroke = vmlCreate('stroke');
  			}
  			container.appendChild(stroke);
  			stroke.weight = options.weight + 'px';
  			stroke.color = options.color;
  			stroke.opacity = options.opacity;

  			if (options.dashArray) {
  				stroke.dashStyle = isArray(options.dashArray) ?
  				    options.dashArray.join(' ') :
  				    options.dashArray.replace(/( *, *)/g, ' ');
  			} else {
  				stroke.dashStyle = '';
  			}
  			stroke.endcap = options.lineCap.replace('butt', 'flat');
  			stroke.joinstyle = options.lineJoin;

  		} else if (stroke) {
  			container.removeChild(stroke);
  			layer._stroke = null;
  		}

  		if (options.fill) {
  			if (!fill) {
  				fill = layer._fill = vmlCreate('fill');
  			}
  			container.appendChild(fill);
  			fill.color = options.fillColor || options.color;
  			fill.opacity = options.fillOpacity;

  		} else if (fill) {
  			container.removeChild(fill);
  			layer._fill = null;
  		}
  	},

  	_updateCircle: function (layer) {
  		var p = layer._point.round(),
  		    r = Math.round(layer._radius),
  		    r2 = Math.round(layer._radiusY || r);

  		this._setPath(layer, layer._empty() ? 'M0 0' :
  			'AL ' + p.x + ',' + p.y + ' ' + r + ',' + r2 + ' 0,' + (65535 * 360));
  	},

  	_setPath: function (layer, path) {
  		layer._path.v = path;
  	},

  	_bringToFront: function (layer) {
  		toFront(layer._container);
  	},

  	_bringToBack: function (layer) {
  		toBack(layer._container);
  	}
  };

  var create = Browser.vml ? vmlCreate : svgCreate;

  /*
   * @class SVG
   * @inherits Renderer
   * @aka L.SVG
   *
   * Allows vector layers to be displayed with [SVG](https://developer.mozilla.org/docs/Web/SVG).
   * Inherits \`Renderer\`.
   *
   * Due to [technical limitations](https://caniuse.com/svg), SVG is not
   * available in all web browsers, notably Android 2.x and 3.x.
   *
   * Although SVG is not available on IE7 and IE8, these browsers support
   * [VML](https://en.wikipedia.org/wiki/Vector_Markup_Language)
   * (a now deprecated technology), and the SVG renderer will fall back to VML in
   * this case.
   *
   * @example
   *
   * Use SVG by default for all paths in the map:
   *
   * \`\`\`js
   * var map = L.map('map', {
   * 	renderer: L.svg()
   * });
   * \`\`\`
   *
   * Use a SVG renderer with extra padding for specific vector geometries:
   *
   * \`\`\`js
   * var map = L.map('map');
   * var myRenderer = L.svg({ padding: 0.5 });
   * var line = L.polyline( coordinates, { renderer: myRenderer } );
   * var circle = L.circle( center, { renderer: myRenderer } );
   * \`\`\`
   */

  var SVG = Renderer.extend({

  	_initContainer: function () {
  		this._container = create('svg');

  		// makes it possible to click through svg root; we'll reset it back in individual paths
  		this._container.setAttribute('pointer-events', 'none');

  		this._rootGroup = create('g');
  		this._container.appendChild(this._rootGroup);
  	},

  	_destroyContainer: function () {
  		remove(this._container);
  		off(this._container);
  		delete this._container;
  		delete this._rootGroup;
  		delete this._svgSize;
  	},

  	_update: function () {
  		if (this._map._animatingZoom && this._bounds) { return; }

  		Renderer.prototype._update.call(this);

  		var b = this._bounds,
  		    size = b.getSize(),
  		    container = this._container;

  		// set size of svg-container if changed
  		if (!this._svgSize || !this._svgSize.equals(size)) {
  			this._svgSize = size;
  			container.setAttribute('width', size.x);
  			container.setAttribute('height', size.y);
  		}

  		// movement: update container viewBox so that we don't have to change coordinates of individual layers
  		setPosition(container, b.min);
  		container.setAttribute('viewBox', [b.min.x, b.min.y, size.x, size.y].join(' '));

  		this.fire('update');
  	},

  	// methods below are called by vector layers implementations

  	_initPath: function (layer) {
  		var path = layer._path = create('path');

  		// @namespace Path
  		// @option className: String = null
  		// Custom class name set on an element. Only for SVG renderer.
  		if (layer.options.className) {
  			addClass(path, layer.options.className);
  		}

  		if (layer.options.interactive) {
  			addClass(path, 'leaflet-interactive');
  		}

  		this._updateStyle(layer);
  		this._layers[stamp(layer)] = layer;
  	},

  	_addPath: function (layer) {
  		if (!this._rootGroup) { this._initContainer(); }
  		this._rootGroup.appendChild(layer._path);
  		layer.addInteractiveTarget(layer._path);
  	},

  	_removePath: function (layer) {
  		remove(layer._path);
  		layer.removeInteractiveTarget(layer._path);
  		delete this._layers[stamp(layer)];
  	},

  	_updatePath: function (layer) {
  		layer._project();
  		layer._update();
  	},

  	_updateStyle: function (layer) {
  		var path = layer._path,
  		    options = layer.options;

  		if (!path) { return; }

  		if (options.stroke) {
  			path.setAttribute('stroke', options.color);
  			path.setAttribute('stroke-opacity', options.opacity);
  			path.setAttribute('stroke-width', options.weight);
  			path.setAttribute('stroke-linecap', options.lineCap);
  			path.setAttribute('stroke-linejoin', options.lineJoin);

  			if (options.dashArray) {
  				path.setAttribute('stroke-dasharray', options.dashArray);
  			} else {
  				path.removeAttribute('stroke-dasharray');
  			}

  			if (options.dashOffset) {
  				path.setAttribute('stroke-dashoffset', options.dashOffset);
  			} else {
  				path.removeAttribute('stroke-dashoffset');
  			}
  		} else {
  			path.setAttribute('stroke', 'none');
  		}

  		if (options.fill) {
  			path.setAttribute('fill', options.fillColor || options.color);
  			path.setAttribute('fill-opacity', options.fillOpacity);
  			path.setAttribute('fill-rule', options.fillRule || 'evenodd');
  		} else {
  			path.setAttribute('fill', 'none');
  		}
  	},

  	_updatePoly: function (layer, closed) {
  		this._setPath(layer, pointsToPath(layer._parts, closed));
  	},

  	_updateCircle: function (layer) {
  		var p = layer._point,
  		    r = Math.max(Math.round(layer._radius), 1),
  		    r2 = Math.max(Math.round(layer._radiusY), 1) || r,
  		    arc = 'a' + r + ',' + r2 + ' 0 1,0 ';

  		// drawing a circle with two half-arcs
  		var d = layer._empty() ? 'M0 0' :
  			'M' + (p.x - r) + ',' + p.y +
  			arc + (r * 2) + ',0 ' +
  			arc + (-r * 2) + ',0 ';

  		this._setPath(layer, d);
  	},

  	_setPath: function (layer, path) {
  		layer._path.setAttribute('d', path);
  	},

  	// SVG does not have the concept of zIndex so we resort to changing the DOM order of elements
  	_bringToFront: function (layer) {
  		toFront(layer._path);
  	},

  	_bringToBack: function (layer) {
  		toBack(layer._path);
  	}
  });

  if (Browser.vml) {
  	SVG.include(vmlMixin);
  }

  // @namespace SVG
  // @factory L.svg(options?: Renderer options)
  // Creates a SVG renderer with the given options.
  function svg(options) {
  	return Browser.svg || Browser.vml ? new SVG(options) : null;
  }

  Map.include({
  	// @namespace Map; @method getRenderer(layer: Path): Renderer
  	// Returns the instance of \`Renderer\` that should be used to render the given
  	// \`Path\`. It will ensure that the \`renderer\` options of the map and paths
  	// are respected, and that the renderers do exist on the map.
  	getRenderer: function (layer) {
  		// @namespace Path; @option renderer: Renderer
  		// Use this specific instance of \`Renderer\` for this path. Takes
  		// precedence over the map's [default renderer](#map-renderer).
  		var renderer = layer.options.renderer || this._getPaneRenderer(layer.options.pane) || this.options.renderer || this._renderer;

  		if (!renderer) {
  			renderer = this._renderer = this._createRenderer();
  		}

  		if (!this.hasLayer(renderer)) {
  			this.addLayer(renderer);
  		}
  		return renderer;
  	},

  	_getPaneRenderer: function (name) {
  		if (name === 'overlayPane' || name === undefined) {
  			return false;
  		}

  		var renderer = this._paneRenderers[name];
  		if (renderer === undefined) {
  			renderer = this._createRenderer({pane: name});
  			this._paneRenderers[name] = renderer;
  		}
  		return renderer;
  	},

  	_createRenderer: function (options) {
  		// @namespace Map; @option preferCanvas: Boolean = false
  		// Whether \`Path\`s should be rendered on a \`Canvas\` renderer.
  		// By default, all \`Path\`s are rendered in a \`SVG\` renderer.
  		return (this.options.preferCanvas && canvas(options)) || svg(options);
  	}
  });

  /*
   * L.Rectangle extends Polygon and creates a rectangle when passed a LatLngBounds object.
   */

  /*
   * @class Rectangle
   * @aka L.Rectangle
   * @inherits Polygon
   *
   * A class for drawing rectangle overlays on a map. Extends \`Polygon\`.
   *
   * @example
   *
   * \`\`\`js
   * // define rectangle geographical bounds
   * var bounds = [[54.559322, -5.767822], [56.1210604, -3.021240]];
   *
   * // create an orange rectangle
   * L.rectangle(bounds, {color: "#ff7800", weight: 1}).addTo(map);
   *
   * // zoom the map to the rectangle bounds
   * map.fitBounds(bounds);
   * \`\`\`
   *
   */


  var Rectangle = Polygon.extend({
  	initialize: function (latLngBounds, options) {
  		Polygon.prototype.initialize.call(this, this._boundsToLatLngs(latLngBounds), options);
  	},

  	// @method setBounds(latLngBounds: LatLngBounds): this
  	// Redraws the rectangle with the passed bounds.
  	setBounds: function (latLngBounds) {
  		return this.setLatLngs(this._boundsToLatLngs(latLngBounds));
  	},

  	_boundsToLatLngs: function (latLngBounds) {
  		latLngBounds = toLatLngBounds(latLngBounds);
  		return [
  			latLngBounds.getSouthWest(),
  			latLngBounds.getNorthWest(),
  			latLngBounds.getNorthEast(),
  			latLngBounds.getSouthEast()
  		];
  	}
  });


  // @factory L.rectangle(latLngBounds: LatLngBounds, options?: Polyline options)
  function rectangle(latLngBounds, options) {
  	return new Rectangle(latLngBounds, options);
  }

  SVG.create = create;
  SVG.pointsToPath = pointsToPath;

  GeoJSON.geometryToLayer = geometryToLayer;
  GeoJSON.coordsToLatLng = coordsToLatLng;
  GeoJSON.coordsToLatLngs = coordsToLatLngs;
  GeoJSON.latLngToCoords = latLngToCoords;
  GeoJSON.latLngsToCoords = latLngsToCoords;
  GeoJSON.getFeature = getFeature;
  GeoJSON.asFeature = asFeature;

  /*
   * L.Handler.BoxZoom is used to add shift-drag zoom interaction to the map
   * (zoom to a selected bounding box), enabled by default.
   */

  // @namespace Map
  // @section Interaction Options
  Map.mergeOptions({
  	// @option boxZoom: Boolean = true
  	// Whether the map can be zoomed to a rectangular area specified by
  	// dragging the mouse while pressing the shift key.
  	boxZoom: true
  });

  var BoxZoom = Handler.extend({
  	initialize: function (map) {
  		this._map = map;
  		this._container = map._container;
  		this._pane = map._panes.overlayPane;
  		this._resetStateTimeout = 0;
  		map.on('unload', this._destroy, this);
  	},

  	addHooks: function () {
  		on(this._container, 'mousedown', this._onMouseDown, this);
  	},

  	removeHooks: function () {
  		off(this._container, 'mousedown', this._onMouseDown, this);
  	},

  	moved: function () {
  		return this._moved;
  	},

  	_destroy: function () {
  		remove(this._pane);
  		delete this._pane;
  	},

  	_resetState: function () {
  		this._resetStateTimeout = 0;
  		this._moved = false;
  	},

  	_clearDeferredResetState: function () {
  		if (this._resetStateTimeout !== 0) {
  			clearTimeout(this._resetStateTimeout);
  			this._resetStateTimeout = 0;
  		}
  	},

  	_onMouseDown: function (e) {
  		if (!e.shiftKey || ((e.which !== 1) && (e.button !== 1))) { return false; }

  		// Clear the deferred resetState if it hasn't executed yet, otherwise it
  		// will interrupt the interaction and orphan a box element in the container.
  		this._clearDeferredResetState();
  		this._resetState();

  		disableTextSelection();
  		disableImageDrag();

  		this._startPoint = this._map.mouseEventToContainerPoint(e);

  		on(document, {
  			contextmenu: stop,
  			mousemove: this._onMouseMove,
  			mouseup: this._onMouseUp,
  			keydown: this._onKeyDown
  		}, this);
  	},

  	_onMouseMove: function (e) {
  		if (!this._moved) {
  			this._moved = true;

  			this._box = create$1('div', 'leaflet-zoom-box', this._container);
  			addClass(this._container, 'leaflet-crosshair');

  			this._map.fire('boxzoomstart');
  		}

  		this._point = this._map.mouseEventToContainerPoint(e);

  		var bounds = new Bounds(this._point, this._startPoint),
  		    size = bounds.getSize();

  		setPosition(this._box, bounds.min);

  		this._box.style.width  = size.x + 'px';
  		this._box.style.height = size.y + 'px';
  	},

  	_finish: function () {
  		if (this._moved) {
  			remove(this._box);
  			removeClass(this._container, 'leaflet-crosshair');
  		}

  		enableTextSelection();
  		enableImageDrag();

  		off(document, {
  			contextmenu: stop,
  			mousemove: this._onMouseMove,
  			mouseup: this._onMouseUp,
  			keydown: this._onKeyDown
  		}, this);
  	},

  	_onMouseUp: function (e) {
  		if ((e.which !== 1) && (e.button !== 1)) { return; }

  		this._finish();

  		if (!this._moved) { return; }
  		// Postpone to next JS tick so internal click event handling
  		// still see it as "moved".
  		this._clearDeferredResetState();
  		this._resetStateTimeout = setTimeout(bind(this._resetState, this), 0);

  		var bounds = new LatLngBounds(
  		        this._map.containerPointToLatLng(this._startPoint),
  		        this._map.containerPointToLatLng(this._point));

  		this._map
  			.fitBounds(bounds)
  			.fire('boxzoomend', {boxZoomBounds: bounds});
  	},

  	_onKeyDown: function (e) {
  		if (e.keyCode === 27) {
  			this._finish();
  			this._clearDeferredResetState();
  			this._resetState();
  		}
  	}
  });

  // @section Handlers
  // @property boxZoom: Handler
  // Box (shift-drag with mouse) zoom handler.
  Map.addInitHook('addHandler', 'boxZoom', BoxZoom);

  /*
   * L.Handler.DoubleClickZoom is used to handle double-click zoom on the map, enabled by default.
   */

  // @namespace Map
  // @section Interaction Options

  Map.mergeOptions({
  	// @option doubleClickZoom: Boolean|String = true
  	// Whether the map can be zoomed in by double clicking on it and
  	// zoomed out by double clicking while holding shift. If passed
  	// \`'center'\`, double-click zoom will zoom to the center of the
  	//  view regardless of where the mouse was.
  	doubleClickZoom: true
  });

  var DoubleClickZoom = Handler.extend({
  	addHooks: function () {
  		this._map.on('dblclick', this._onDoubleClick, this);
  	},

  	removeHooks: function () {
  		this._map.off('dblclick', this._onDoubleClick, this);
  	},

  	_onDoubleClick: function (e) {
  		var map = this._map,
  		    oldZoom = map.getZoom(),
  		    delta = map.options.zoomDelta,
  		    zoom = e.originalEvent.shiftKey ? oldZoom - delta : oldZoom + delta;

  		if (map.options.doubleClickZoom === 'center') {
  			map.setZoom(zoom);
  		} else {
  			map.setZoomAround(e.containerPoint, zoom);
  		}
  	}
  });

  // @section Handlers
  //
  // Map properties include interaction handlers that allow you to control
  // interaction behavior in runtime, enabling or disabling certain features such
  // as dragging or touch zoom (see \`Handler\` methods). For example:
  //
  // \`\`\`js
  // map.doubleClickZoom.disable();
  // \`\`\`
  //
  // @property doubleClickZoom: Handler
  // Double click zoom handler.
  Map.addInitHook('addHandler', 'doubleClickZoom', DoubleClickZoom);

  /*
   * L.Handler.MapDrag is used to make the map draggable (with panning inertia), enabled by default.
   */

  // @namespace Map
  // @section Interaction Options
  Map.mergeOptions({
  	// @option dragging: Boolean = true
  	// Whether the map is draggable with mouse/touch or not.
  	dragging: true,

  	// @section Panning Inertia Options
  	// @option inertia: Boolean = *
  	// If enabled, panning of the map will have an inertia effect where
  	// the map builds momentum while dragging and continues moving in
  	// the same direction for some time. Feels especially nice on touch
  	// devices. Enabled by default.
  	inertia: true,

  	// @option inertiaDeceleration: Number = 3000
  	// The rate with which the inertial movement slows down, in pixels/second\xB2.
  	inertiaDeceleration: 3400, // px/s^2

  	// @option inertiaMaxSpeed: Number = Infinity
  	// Max speed of the inertial movement, in pixels/second.
  	inertiaMaxSpeed: Infinity, // px/s

  	// @option easeLinearity: Number = 0.2
  	easeLinearity: 0.2,

  	// TODO refactor, move to CRS
  	// @option worldCopyJump: Boolean = false
  	// With this option enabled, the map tracks when you pan to another "copy"
  	// of the world and seamlessly jumps to the original one so that all overlays
  	// like markers and vector layers are still visible.
  	worldCopyJump: false,

  	// @option maxBoundsViscosity: Number = 0.0
  	// If \`maxBounds\` is set, this option will control how solid the bounds
  	// are when dragging the map around. The default value of \`0.0\` allows the
  	// user to drag outside the bounds at normal speed, higher values will
  	// slow down map dragging outside bounds, and \`1.0\` makes the bounds fully
  	// solid, preventing the user from dragging outside the bounds.
  	maxBoundsViscosity: 0.0
  });

  var Drag = Handler.extend({
  	addHooks: function () {
  		if (!this._draggable) {
  			var map = this._map;

  			this._draggable = new Draggable(map._mapPane, map._container);

  			this._draggable.on({
  				dragstart: this._onDragStart,
  				drag: this._onDrag,
  				dragend: this._onDragEnd
  			}, this);

  			this._draggable.on('predrag', this._onPreDragLimit, this);
  			if (map.options.worldCopyJump) {
  				this._draggable.on('predrag', this._onPreDragWrap, this);
  				map.on('zoomend', this._onZoomEnd, this);

  				map.whenReady(this._onZoomEnd, this);
  			}
  		}
  		addClass(this._map._container, 'leaflet-grab leaflet-touch-drag');
  		this._draggable.enable();
  		this._positions = [];
  		this._times = [];
  	},

  	removeHooks: function () {
  		removeClass(this._map._container, 'leaflet-grab');
  		removeClass(this._map._container, 'leaflet-touch-drag');
  		this._draggable.disable();
  	},

  	moved: function () {
  		return this._draggable && this._draggable._moved;
  	},

  	moving: function () {
  		return this._draggable && this._draggable._moving;
  	},

  	_onDragStart: function () {
  		var map = this._map;

  		map._stop();
  		if (this._map.options.maxBounds && this._map.options.maxBoundsViscosity) {
  			var bounds = toLatLngBounds(this._map.options.maxBounds);

  			this._offsetLimit = toBounds(
  				this._map.latLngToContainerPoint(bounds.getNorthWest()).multiplyBy(-1),
  				this._map.latLngToContainerPoint(bounds.getSouthEast()).multiplyBy(-1)
  					.add(this._map.getSize()));

  			this._viscosity = Math.min(1.0, Math.max(0.0, this._map.options.maxBoundsViscosity));
  		} else {
  			this._offsetLimit = null;
  		}

  		map
  		    .fire('movestart')
  		    .fire('dragstart');

  		if (map.options.inertia) {
  			this._positions = [];
  			this._times = [];
  		}
  	},

  	_onDrag: function (e) {
  		if (this._map.options.inertia) {
  			var time = this._lastTime = +new Date(),
  			    pos = this._lastPos = this._draggable._absPos || this._draggable._newPos;

  			this._positions.push(pos);
  			this._times.push(time);

  			this._prunePositions(time);
  		}

  		this._map
  		    .fire('move', e)
  		    .fire('drag', e);
  	},

  	_prunePositions: function (time) {
  		while (this._positions.length > 1 && time - this._times[0] > 50) {
  			this._positions.shift();
  			this._times.shift();
  		}
  	},

  	_onZoomEnd: function () {
  		var pxCenter = this._map.getSize().divideBy(2),
  		    pxWorldCenter = this._map.latLngToLayerPoint([0, 0]);

  		this._initialWorldOffset = pxWorldCenter.subtract(pxCenter).x;
  		this._worldWidth = this._map.getPixelWorldBounds().getSize().x;
  	},

  	_viscousLimit: function (value, threshold) {
  		return value - (value - threshold) * this._viscosity;
  	},

  	_onPreDragLimit: function () {
  		if (!this._viscosity || !this._offsetLimit) { return; }

  		var offset = this._draggable._newPos.subtract(this._draggable._startPos);

  		var limit = this._offsetLimit;
  		if (offset.x < limit.min.x) { offset.x = this._viscousLimit(offset.x, limit.min.x); }
  		if (offset.y < limit.min.y) { offset.y = this._viscousLimit(offset.y, limit.min.y); }
  		if (offset.x > limit.max.x) { offset.x = this._viscousLimit(offset.x, limit.max.x); }
  		if (offset.y > limit.max.y) { offset.y = this._viscousLimit(offset.y, limit.max.y); }

  		this._draggable._newPos = this._draggable._startPos.add(offset);
  	},

  	_onPreDragWrap: function () {
  		// TODO refactor to be able to adjust map pane position after zoom
  		var worldWidth = this._worldWidth,
  		    halfWidth = Math.round(worldWidth / 2),
  		    dx = this._initialWorldOffset,
  		    x = this._draggable._newPos.x,
  		    newX1 = (x - halfWidth + dx) % worldWidth + halfWidth - dx,
  		    newX2 = (x + halfWidth + dx) % worldWidth - halfWidth - dx,
  		    newX = Math.abs(newX1 + dx) < Math.abs(newX2 + dx) ? newX1 : newX2;

  		this._draggable._absPos = this._draggable._newPos.clone();
  		this._draggable._newPos.x = newX;
  	},

  	_onDragEnd: function (e) {
  		var map = this._map,
  		    options = map.options,

  		    noInertia = !options.inertia || e.noInertia || this._times.length < 2;

  		map.fire('dragend', e);

  		if (noInertia) {
  			map.fire('moveend');

  		} else {
  			this._prunePositions(+new Date());

  			var direction = this._lastPos.subtract(this._positions[0]),
  			    duration = (this._lastTime - this._times[0]) / 1000,
  			    ease = options.easeLinearity,

  			    speedVector = direction.multiplyBy(ease / duration),
  			    speed = speedVector.distanceTo([0, 0]),

  			    limitedSpeed = Math.min(options.inertiaMaxSpeed, speed),
  			    limitedSpeedVector = speedVector.multiplyBy(limitedSpeed / speed),

  			    decelerationDuration = limitedSpeed / (options.inertiaDeceleration * ease),
  			    offset = limitedSpeedVector.multiplyBy(-decelerationDuration / 2).round();

  			if (!offset.x && !offset.y) {
  				map.fire('moveend');

  			} else {
  				offset = map._limitOffset(offset, map.options.maxBounds);

  				requestAnimFrame(function () {
  					map.panBy(offset, {
  						duration: decelerationDuration,
  						easeLinearity: ease,
  						noMoveStart: true,
  						animate: true
  					});
  				});
  			}
  		}
  	}
  });

  // @section Handlers
  // @property dragging: Handler
  // Map dragging handler (by both mouse and touch).
  Map.addInitHook('addHandler', 'dragging', Drag);

  /*
   * L.Map.Keyboard is handling keyboard interaction with the map, enabled by default.
   */

  // @namespace Map
  // @section Keyboard Navigation Options
  Map.mergeOptions({
  	// @option keyboard: Boolean = true
  	// Makes the map focusable and allows users to navigate the map with keyboard
  	// arrows and \`+\`/\`-\` keys.
  	keyboard: true,

  	// @option keyboardPanDelta: Number = 80
  	// Amount of pixels to pan when pressing an arrow key.
  	keyboardPanDelta: 80
  });

  var Keyboard = Handler.extend({

  	keyCodes: {
  		left:    [37],
  		right:   [39],
  		down:    [40],
  		up:      [38],
  		zoomIn:  [187, 107, 61, 171],
  		zoomOut: [189, 109, 54, 173]
  	},

  	initialize: function (map) {
  		this._map = map;

  		this._setPanDelta(map.options.keyboardPanDelta);
  		this._setZoomDelta(map.options.zoomDelta);
  	},

  	addHooks: function () {
  		var container = this._map._container;

  		// make the container focusable by tabbing
  		if (container.tabIndex <= 0) {
  			container.tabIndex = '0';
  		}

  		on(container, {
  			focus: this._onFocus,
  			blur: this._onBlur,
  			mousedown: this._onMouseDown
  		}, this);

  		this._map.on({
  			focus: this._addHooks,
  			blur: this._removeHooks
  		}, this);
  	},

  	removeHooks: function () {
  		this._removeHooks();

  		off(this._map._container, {
  			focus: this._onFocus,
  			blur: this._onBlur,
  			mousedown: this._onMouseDown
  		}, this);

  		this._map.off({
  			focus: this._addHooks,
  			blur: this._removeHooks
  		}, this);
  	},

  	_onMouseDown: function () {
  		if (this._focused) { return; }

  		var body = document.body,
  		    docEl = document.documentElement,
  		    top = body.scrollTop || docEl.scrollTop,
  		    left = body.scrollLeft || docEl.scrollLeft;

  		this._map._container.focus();

  		window.scrollTo(left, top);
  	},

  	_onFocus: function () {
  		this._focused = true;
  		this._map.fire('focus');
  	},

  	_onBlur: function () {
  		this._focused = false;
  		this._map.fire('blur');
  	},

  	_setPanDelta: function (panDelta) {
  		var keys = this._panKeys = {},
  		    codes = this.keyCodes,
  		    i, len;

  		for (i = 0, len = codes.left.length; i < len; i++) {
  			keys[codes.left[i]] = [-1 * panDelta, 0];
  		}
  		for (i = 0, len = codes.right.length; i < len; i++) {
  			keys[codes.right[i]] = [panDelta, 0];
  		}
  		for (i = 0, len = codes.down.length; i < len; i++) {
  			keys[codes.down[i]] = [0, panDelta];
  		}
  		for (i = 0, len = codes.up.length; i < len; i++) {
  			keys[codes.up[i]] = [0, -1 * panDelta];
  		}
  	},

  	_setZoomDelta: function (zoomDelta) {
  		var keys = this._zoomKeys = {},
  		    codes = this.keyCodes,
  		    i, len;

  		for (i = 0, len = codes.zoomIn.length; i < len; i++) {
  			keys[codes.zoomIn[i]] = zoomDelta;
  		}
  		for (i = 0, len = codes.zoomOut.length; i < len; i++) {
  			keys[codes.zoomOut[i]] = -zoomDelta;
  		}
  	},

  	_addHooks: function () {
  		on(document, 'keydown', this._onKeyDown, this);
  	},

  	_removeHooks: function () {
  		off(document, 'keydown', this._onKeyDown, this);
  	},

  	_onKeyDown: function (e) {
  		if (e.altKey || e.ctrlKey || e.metaKey) { return; }

  		var key = e.keyCode,
  		    map = this._map,
  		    offset;

  		if (key in this._panKeys) {
  			if (!map._panAnim || !map._panAnim._inProgress) {
  				offset = this._panKeys[key];
  				if (e.shiftKey) {
  					offset = toPoint(offset).multiplyBy(3);
  				}

  				if (map.options.maxBounds) {
  					offset = map._limitOffset(toPoint(offset), map.options.maxBounds);
  				}

  				if (map.options.worldCopyJump) {
  					var newLatLng = map.wrapLatLng(map.unproject(map.project(map.getCenter()).add(offset)));
  					map.panTo(newLatLng);
  				} else {
  					map.panBy(offset);
  				}
  			}
  		} else if (key in this._zoomKeys) {
  			map.setZoom(map.getZoom() + (e.shiftKey ? 3 : 1) * this._zoomKeys[key]);

  		} else if (key === 27 && map._popup && map._popup.options.closeOnEscapeKey) {
  			map.closePopup();

  		} else {
  			return;
  		}

  		stop(e);
  	}
  });

  // @section Handlers
  // @section Handlers
  // @property keyboard: Handler
  // Keyboard navigation handler.
  Map.addInitHook('addHandler', 'keyboard', Keyboard);

  /*
   * L.Handler.ScrollWheelZoom is used by L.Map to enable mouse scroll wheel zoom on the map.
   */

  // @namespace Map
  // @section Interaction Options
  Map.mergeOptions({
  	// @section Mouse wheel options
  	// @option scrollWheelZoom: Boolean|String = true
  	// Whether the map can be zoomed by using the mouse wheel. If passed \`'center'\`,
  	// it will zoom to the center of the view regardless of where the mouse was.
  	scrollWheelZoom: true,

  	// @option wheelDebounceTime: Number = 40
  	// Limits the rate at which a wheel can fire (in milliseconds). By default
  	// user can't zoom via wheel more often than once per 40 ms.
  	wheelDebounceTime: 40,

  	// @option wheelPxPerZoomLevel: Number = 60
  	// How many scroll pixels (as reported by [L.DomEvent.getWheelDelta](#domevent-getwheeldelta))
  	// mean a change of one full zoom level. Smaller values will make wheel-zooming
  	// faster (and vice versa).
  	wheelPxPerZoomLevel: 60
  });

  var ScrollWheelZoom = Handler.extend({
  	addHooks: function () {
  		on(this._map._container, 'wheel', this._onWheelScroll, this);

  		this._delta = 0;
  	},

  	removeHooks: function () {
  		off(this._map._container, 'wheel', this._onWheelScroll, this);
  	},

  	_onWheelScroll: function (e) {
  		var delta = getWheelDelta(e);

  		var debounce = this._map.options.wheelDebounceTime;

  		this._delta += delta;
  		this._lastMousePos = this._map.mouseEventToContainerPoint(e);

  		if (!this._startTime) {
  			this._startTime = +new Date();
  		}

  		var left = Math.max(debounce - (+new Date() - this._startTime), 0);

  		clearTimeout(this._timer);
  		this._timer = setTimeout(bind(this._performZoom, this), left);

  		stop(e);
  	},

  	_performZoom: function () {
  		var map = this._map,
  		    zoom = map.getZoom(),
  		    snap = this._map.options.zoomSnap || 0;

  		map._stop(); // stop panning and fly animations if any

  		// map the delta with a sigmoid function to -4..4 range leaning on -1..1
  		var d2 = this._delta / (this._map.options.wheelPxPerZoomLevel * 4),
  		    d3 = 4 * Math.log(2 / (1 + Math.exp(-Math.abs(d2)))) / Math.LN2,
  		    d4 = snap ? Math.ceil(d3 / snap) * snap : d3,
  		    delta = map._limitZoom(zoom + (this._delta > 0 ? d4 : -d4)) - zoom;

  		this._delta = 0;
  		this._startTime = null;

  		if (!delta) { return; }

  		if (map.options.scrollWheelZoom === 'center') {
  			map.setZoom(zoom + delta);
  		} else {
  			map.setZoomAround(this._lastMousePos, zoom + delta);
  		}
  	}
  });

  // @section Handlers
  // @property scrollWheelZoom: Handler
  // Scroll wheel zoom handler.
  Map.addInitHook('addHandler', 'scrollWheelZoom', ScrollWheelZoom);

  /*
   * L.Map.TapHold is used to simulate \`contextmenu\` event on long hold,
   * which otherwise is not fired by mobile Safari.
   */

  var tapHoldDelay = 600;

  // @namespace Map
  // @section Interaction Options
  Map.mergeOptions({
  	// @section Touch interaction options
  	// @option tapHold: Boolean
  	// Enables simulation of \`contextmenu\` event, default is \`true\` for mobile Safari.
  	tapHold: Browser.touchNative && Browser.safari && Browser.mobile,

  	// @option tapTolerance: Number = 15
  	// The max number of pixels a user can shift his finger during touch
  	// for it to be considered a valid tap.
  	tapTolerance: 15
  });

  var TapHold = Handler.extend({
  	addHooks: function () {
  		on(this._map._container, 'touchstart', this._onDown, this);
  	},

  	removeHooks: function () {
  		off(this._map._container, 'touchstart', this._onDown, this);
  	},

  	_onDown: function (e) {
  		clearTimeout(this._holdTimeout);
  		if (e.touches.length !== 1) { return; }

  		var first = e.touches[0];
  		this._startPos = this._newPos = new Point(first.clientX, first.clientY);

  		this._holdTimeout = setTimeout(bind(function () {
  			this._cancel();
  			if (!this._isTapValid()) { return; }

  			// prevent simulated mouse events https://w3c.github.io/touch-events/#mouse-events
  			on(document, 'touchend', preventDefault);
  			on(document, 'touchend touchcancel', this._cancelClickPrevent);
  			this._simulateEvent('contextmenu', first);
  		}, this), tapHoldDelay);

  		on(document, 'touchend touchcancel contextmenu', this._cancel, this);
  		on(document, 'touchmove', this._onMove, this);
  	},

  	_cancelClickPrevent: function cancelClickPrevent() {
  		off(document, 'touchend', preventDefault);
  		off(document, 'touchend touchcancel', cancelClickPrevent);
  	},

  	_cancel: function () {
  		clearTimeout(this._holdTimeout);
  		off(document, 'touchend touchcancel contextmenu', this._cancel, this);
  		off(document, 'touchmove', this._onMove, this);
  	},

  	_onMove: function (e) {
  		var first = e.touches[0];
  		this._newPos = new Point(first.clientX, first.clientY);
  	},

  	_isTapValid: function () {
  		return this._newPos.distanceTo(this._startPos) <= this._map.options.tapTolerance;
  	},

  	_simulateEvent: function (type, e) {
  		var simulatedEvent = new MouseEvent(type, {
  			bubbles: true,
  			cancelable: true,
  			view: window,
  			// detail: 1,
  			screenX: e.screenX,
  			screenY: e.screenY,
  			clientX: e.clientX,
  			clientY: e.clientY,
  			// button: 2,
  			// buttons: 2
  		});

  		simulatedEvent._simulated = true;

  		e.target.dispatchEvent(simulatedEvent);
  	}
  });

  // @section Handlers
  // @property tapHold: Handler
  // Long tap handler to simulate \`contextmenu\` event (useful in mobile Safari).
  Map.addInitHook('addHandler', 'tapHold', TapHold);

  /*
   * L.Handler.TouchZoom is used by L.Map to add pinch zoom on supported mobile browsers.
   */

  // @namespace Map
  // @section Interaction Options
  Map.mergeOptions({
  	// @section Touch interaction options
  	// @option touchZoom: Boolean|String = *
  	// Whether the map can be zoomed by touch-dragging with two fingers. If
  	// passed \`'center'\`, it will zoom to the center of the view regardless of
  	// where the touch events (fingers) were. Enabled for touch-capable web
  	// browsers.
  	touchZoom: Browser.touch,

  	// @option bounceAtZoomLimits: Boolean = true
  	// Set it to false if you don't want the map to zoom beyond min/max zoom
  	// and then bounce back when pinch-zooming.
  	bounceAtZoomLimits: true
  });

  var TouchZoom = Handler.extend({
  	addHooks: function () {
  		addClass(this._map._container, 'leaflet-touch-zoom');
  		on(this._map._container, 'touchstart', this._onTouchStart, this);
  	},

  	removeHooks: function () {
  		removeClass(this._map._container, 'leaflet-touch-zoom');
  		off(this._map._container, 'touchstart', this._onTouchStart, this);
  	},

  	_onTouchStart: function (e) {
  		var map = this._map;
  		if (!e.touches || e.touches.length !== 2 || map._animatingZoom || this._zooming) { return; }

  		var p1 = map.mouseEventToContainerPoint(e.touches[0]),
  		    p2 = map.mouseEventToContainerPoint(e.touches[1]);

  		this._centerPoint = map.getSize()._divideBy(2);
  		this._startLatLng = map.containerPointToLatLng(this._centerPoint);
  		if (map.options.touchZoom !== 'center') {
  			this._pinchStartLatLng = map.containerPointToLatLng(p1.add(p2)._divideBy(2));
  		}

  		this._startDist = p1.distanceTo(p2);
  		this._startZoom = map.getZoom();

  		this._moved = false;
  		this._zooming = true;

  		map._stop();

  		on(document, 'touchmove', this._onTouchMove, this);
  		on(document, 'touchend touchcancel', this._onTouchEnd, this);

  		preventDefault(e);
  	},

  	_onTouchMove: function (e) {
  		if (!e.touches || e.touches.length !== 2 || !this._zooming) { return; }

  		var map = this._map,
  		    p1 = map.mouseEventToContainerPoint(e.touches[0]),
  		    p2 = map.mouseEventToContainerPoint(e.touches[1]),
  		    scale = p1.distanceTo(p2) / this._startDist;

  		this._zoom = map.getScaleZoom(scale, this._startZoom);

  		if (!map.options.bounceAtZoomLimits && (
  			(this._zoom < map.getMinZoom() && scale < 1) ||
  			(this._zoom > map.getMaxZoom() && scale > 1))) {
  			this._zoom = map._limitZoom(this._zoom);
  		}

  		if (map.options.touchZoom === 'center') {
  			this._center = this._startLatLng;
  			if (scale === 1) { return; }
  		} else {
  			// Get delta from pinch to center, so centerLatLng is delta applied to initial pinchLatLng
  			var delta = p1._add(p2)._divideBy(2)._subtract(this._centerPoint);
  			if (scale === 1 && delta.x === 0 && delta.y === 0) { return; }
  			this._center = map.unproject(map.project(this._pinchStartLatLng, this._zoom).subtract(delta), this._zoom);
  		}

  		if (!this._moved) {
  			map._moveStart(true, false);
  			this._moved = true;
  		}

  		cancelAnimFrame(this._animRequest);

  		var moveFn = bind(map._move, map, this._center, this._zoom, {pinch: true, round: false}, undefined);
  		this._animRequest = requestAnimFrame(moveFn, this, true);

  		preventDefault(e);
  	},

  	_onTouchEnd: function () {
  		if (!this._moved || !this._zooming) {
  			this._zooming = false;
  			return;
  		}

  		this._zooming = false;
  		cancelAnimFrame(this._animRequest);

  		off(document, 'touchmove', this._onTouchMove, this);
  		off(document, 'touchend touchcancel', this._onTouchEnd, this);

  		// Pinch updates GridLayers' levels only when zoomSnap is off, so zoomSnap becomes noUpdate.
  		if (this._map.options.zoomAnimation) {
  			this._map._animateZoom(this._center, this._map._limitZoom(this._zoom), true, this._map.options.zoomSnap);
  		} else {
  			this._map._resetView(this._center, this._map._limitZoom(this._zoom));
  		}
  	}
  });

  // @section Handlers
  // @property touchZoom: Handler
  // Touch zoom handler.
  Map.addInitHook('addHandler', 'touchZoom', TouchZoom);

  Map.BoxZoom = BoxZoom;
  Map.DoubleClickZoom = DoubleClickZoom;
  Map.Drag = Drag;
  Map.Keyboard = Keyboard;
  Map.ScrollWheelZoom = ScrollWheelZoom;
  Map.TapHold = TapHold;
  Map.TouchZoom = TouchZoom;

  exports.Bounds = Bounds;
  exports.Browser = Browser;
  exports.CRS = CRS;
  exports.Canvas = Canvas;
  exports.Circle = Circle;
  exports.CircleMarker = CircleMarker;
  exports.Class = Class;
  exports.Control = Control;
  exports.DivIcon = DivIcon;
  exports.DivOverlay = DivOverlay;
  exports.DomEvent = DomEvent;
  exports.DomUtil = DomUtil;
  exports.Draggable = Draggable;
  exports.Evented = Evented;
  exports.FeatureGroup = FeatureGroup;
  exports.GeoJSON = GeoJSON;
  exports.GridLayer = GridLayer;
  exports.Handler = Handler;
  exports.Icon = Icon;
  exports.ImageOverlay = ImageOverlay;
  exports.LatLng = LatLng;
  exports.LatLngBounds = LatLngBounds;
  exports.Layer = Layer;
  exports.LayerGroup = LayerGroup;
  exports.LineUtil = LineUtil;
  exports.Map = Map;
  exports.Marker = Marker;
  exports.Mixin = Mixin;
  exports.Path = Path;
  exports.Point = Point;
  exports.PolyUtil = PolyUtil;
  exports.Polygon = Polygon;
  exports.Polyline = Polyline;
  exports.Popup = Popup;
  exports.PosAnimation = PosAnimation;
  exports.Projection = index;
  exports.Rectangle = Rectangle;
  exports.Renderer = Renderer;
  exports.SVG = SVG;
  exports.SVGOverlay = SVGOverlay;
  exports.TileLayer = TileLayer;
  exports.Tooltip = Tooltip;
  exports.Transformation = Transformation;
  exports.Util = Util;
  exports.VideoOverlay = VideoOverlay;
  exports.bind = bind;
  exports.bounds = toBounds;
  exports.canvas = canvas;
  exports.circle = circle;
  exports.circleMarker = circleMarker;
  exports.control = control;
  exports.divIcon = divIcon;
  exports.extend = extend;
  exports.featureGroup = featureGroup;
  exports.geoJSON = geoJSON;
  exports.geoJson = geoJson;
  exports.gridLayer = gridLayer;
  exports.icon = icon;
  exports.imageOverlay = imageOverlay;
  exports.latLng = toLatLng;
  exports.latLngBounds = toLatLngBounds;
  exports.layerGroup = layerGroup;
  exports.map = createMap;
  exports.marker = marker;
  exports.point = toPoint;
  exports.polygon = polygon;
  exports.polyline = polyline;
  exports.popup = popup;
  exports.rectangle = rectangle;
  exports.setOptions = setOptions;
  exports.stamp = stamp;
  exports.svg = svg;
  exports.svgOverlay = svgOverlay;
  exports.tileLayer = tileLayer;
  exports.tooltip = tooltip;
  exports.transformation = toTransformation;
  exports.version = version;
  exports.videoOverlay = videoOverlay;

  var oldL = window.L;
  exports.noConflict = function() {
  	window.L = oldL;
  	return this;
  }
  // Always export us to window global (see #2364)
  window.L = exports;

}));
//# sourceMappingURL=leaflet-src.js.map


//# sourceURL=webpack:///./node_modules/leaflet/dist/leaflet-src.js?`)}}]);
