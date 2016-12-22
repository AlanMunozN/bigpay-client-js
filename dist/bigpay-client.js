(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["bigpayClient"] = factory();
	else
		root["bigpayClient"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ((function(modules) {
	// Check all modules for deduplicated modules
	for(var i in modules) {
		if(Object.prototype.hasOwnProperty.call(modules, i)) {
			switch(typeof modules[i]) {
			case "function": break;
			case "object":
				// Module can be created from a template
				modules[i] = (function(_m) {
					var args = _m.slice(1), fn = modules[_m[0]];
					return function (a,b,c) {
						fn.apply(this, [a,b,c].concat(args));
					};
				}(modules[i]));
				break;
			default:
				// Module is a copy of another module
				modules[i] = modules[modules[i]];
				break;
			}
		}
	}
	return modules;
}([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.createClient = undefined;
	
	var _client = __webpack_require__(1);
	
	exports.createClient = _client.createClient;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.createClient = undefined;
	
	var _createClient = __webpack_require__(2);
	
	var _createClient2 = _interopRequireDefault(_createClient);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.createClient = _createClient2.default;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = createClient;
	
	var _client = __webpack_require__(3);
	
	var _client2 = _interopRequireDefault(_client);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Create client
	 * @param {Object} config
	 * @returns {Client}
	 */
	function createClient(config) {
	  return new _client2.default(config);
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _payment = __webpack_require__(4);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Client = function () {
	    /**
	     * Construct BigpayClient
	     * @param {Object} config
	     * @param {string} config.host
	     */
	    function Client(_ref) {
	        var host = _ref.host;
	
	        _classCallCheck(this, Client);
	
	        this.host = host;
	    }
	
	    /**
	     * Initialize offsite payment
	     * @param {PaymentRequestData} data
	     * @param {Function} [callback]
	     * @returns {void}
	     */
	
	
	    _createClass(Client, [{
	        key: 'initializeOffsitePayment',
	        value: function initializeOffsitePayment(data, callback) {
	            var _data$paymentMethod = data.paymentMethod;
	            var paymentMethod = _data$paymentMethod === undefined ? {} : _data$paymentMethod;
	
	            var options = { host: this.host };
	
	            if (paymentMethod.type !== _payment.PAYMENT_TYPES.HOSTED) {
	                throw new Error(paymentMethod.type + ' is not supported.');
	            }
	
	            (0, _payment.initializeOffsitePayment)(data, options, callback);
	        }
	
	        /**
	         * Submit payment
	         * @param {PaymentRequestData} data
	         * @param {Function} [callback]
	         * @returns {void}
	         */
	
	    }, {
	        key: 'submitPayment',
	        value: function submitPayment(data, callback) {
	            var _data$paymentMethod2 = data.paymentMethod;
	            var paymentMethod = _data$paymentMethod2 === undefined ? {} : _data$paymentMethod2;
	
	            var options = { host: this.host };
	
	            if (paymentMethod.type !== _payment.PAYMENT_TYPES.API) {
	                throw new Error(paymentMethod.type + ' is not supported.');
	            }
	
	            (0, _payment.submitPayment)(data, options, callback);
	        }
	    }]);
	
	    return Client;
	}();
	
	exports.default = Client;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.submitPayment = exports.initializeOffsitePayment = exports.PAYMENT_TYPES = undefined;
	
	var _paymentTypes = __webpack_require__(5);
	
	var PAYMENT_TYPES = _interopRequireWildcard(_paymentTypes);
	
	var _initializeOffsitePayment = __webpack_require__(6);
	
	var _initializeOffsitePayment2 = _interopRequireDefault(_initializeOffsitePayment);
	
	var _submitPayment = __webpack_require__(33);
	
	var _submitPayment2 = _interopRequireDefault(_submitPayment);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	exports.PAYMENT_TYPES = PAYMENT_TYPES;
	exports.initializeOffsitePayment = _initializeOffsitePayment2.default;
	exports.submitPayment = _submitPayment2.default;

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var API = exports.API = 'PAYMENT_TYPE_API';
	var HOSTED = exports.HOSTED = 'PAYMENT_TYPE_HOSTED';
	var OFFLINE = exports.OFFLINE = 'PAYMENT_TYPE_OFFLINE';

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = initializeOffsitePayment;
	
	var _urls = __webpack_require__(7);
	
	var _offsiteMappers = __webpack_require__(8);
	
	var _formRequest = __webpack_require__(30);
	
	/**
	 * Initialize offsite payment
	 * @param {PaymentRequestData} data
	 * @param {Object} [options = {}]
	 * @param {string} [options.host]
	 * @param {Function} [callback]
	 * @returns {void}
	 */
	function initializeOffsitePayment(data) {
	  var _ref = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	  var host = _ref.host;
	  var callback = arguments[2];
	
	  var payload = (0, _offsiteMappers.mapToPayload)(data);
	  var url = (0, _urls.getOffsitePaymentUrl)(host);
	
	  (0, _formRequest.postForm)(url, payload, callback);
	}

/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getOffsitePaymentUrl = getOffsitePaymentUrl;
	exports.getPaymentUrl = getPaymentUrl;
	/**
	 * Get offsite payment URL
	 * @param {string} host
	 * @returns {string}
	 */
	function getOffsitePaymentUrl(host) {
	  return host + "/pay/initialize";
	}
	
	/**
	 * Payment URL
	 * @param {string} host
	 * @returns {string}
	 */
	function getPaymentUrl(host) {
	  return host + "/api/public/v1/orders/payments";
	}

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.mapToPayload = undefined;
	
	var _mapToPayload = __webpack_require__(9);
	
	var _mapToPayload2 = _interopRequireDefault(_mapToPayload);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.mapToPayload = _mapToPayload2.default;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = mapToPayload;
	
	var _objectAssign = __webpack_require__(10);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	var _utils = __webpack_require__(11);
	
	var _paymentMethod = __webpack_require__(21);
	
	var _mapToBillingAddress = __webpack_require__(24);
	
	var _mapToBillingAddress2 = _interopRequireDefault(_mapToBillingAddress);
	
	var _mapToCustomer = __webpack_require__(26);
	
	var _mapToCustomer2 = _interopRequireDefault(_mapToCustomer);
	
	var _mapToMeta = __webpack_require__(27);
	
	var _mapToMeta2 = _interopRequireDefault(_mapToMeta);
	
	var _mapToShippingAddress = __webpack_require__(28);
	
	var _mapToShippingAddress2 = _interopRequireDefault(_mapToShippingAddress);
	
	var _mapToStore = __webpack_require__(29);
	
	var _mapToStore2 = _interopRequireDefault(_mapToStore);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Map to payload
	 * @param {PaymentRequestData} data
	 * @returns {Object}
	 */
	function mapToPayload(data) {
	    var authToken = data.authToken;
	    var _data$order = data.order;
	    var order = _data$order === undefined ? {} : _data$order;
	    var _data$paymentMethod = data.paymentMethod;
	    var paymentMethod = _data$paymentMethod === undefined ? {} : _data$paymentMethod;
	
	
	    var payload = (0, _objectAssign2.default)({
	        amount: order.grandTotal ? order.grandTotal.integerAmount : null,
	        bc_auth_token: authToken,
	        currency: order.currency,
	        gateway: paymentMethod.gateway,
	        notify_url: order.callbackUrl,
	        order_id: (0, _utils.toString)(order.orderId),
	        page_title: document.title,
	        payment_method_id: (0, _paymentMethod.mapToId)(paymentMethod),
	        reference_id: (0, _utils.toString)(order.orderId),
	        return_url: order.payment ? order.payment.returnUrl : null
	    }, (0, _mapToBillingAddress2.default)(data), (0, _mapToCustomer2.default)(data), (0, _mapToMeta2.default)(data), (0, _mapToShippingAddress2.default)(data), (0, _mapToStore2.default)(data));
	
	    return (0, _utils.omitNil)(payload);
	}

/***/ },
/* 10 */
/***/ function(module, exports) {

	'use strict';
	/* eslint-disable no-unused-vars */
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;
	
	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}
	
		return Object(val);
	}
	
	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}
	
			// Detect buggy property enumeration order in older V8 versions.
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}
	
			return true;
		} catch (e) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}
	
	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;
	
		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);
	
			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}
	
			if (Object.getOwnPropertySymbols) {
				symbols = Object.getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}
	
		return to;
	};


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.toString = exports.toSnakeCase = exports.toNumber = exports.omitProperty = exports.omitNil = exports.isObject = exports.isNil = exports.includes = exports.capitalize = undefined;
	
	var _capitalize = __webpack_require__(12);
	
	var _capitalize2 = _interopRequireDefault(_capitalize);
	
	var _includes = __webpack_require__(13);
	
	var _includes2 = _interopRequireDefault(_includes);
	
	var _isNil = __webpack_require__(14);
	
	var _isNil2 = _interopRequireDefault(_isNil);
	
	var _isObject = __webpack_require__(15);
	
	var _isObject2 = _interopRequireDefault(_isObject);
	
	var _omitNil = __webpack_require__(16);
	
	var _omitNil2 = _interopRequireDefault(_omitNil);
	
	var _omitProperty = __webpack_require__(17);
	
	var _omitProperty2 = _interopRequireDefault(_omitProperty);
	
	var _toNumber = __webpack_require__(18);
	
	var _toNumber2 = _interopRequireDefault(_toNumber);
	
	var _toSnakeCase = __webpack_require__(19);
	
	var _toSnakeCase2 = _interopRequireDefault(_toSnakeCase);
	
	var _toString = __webpack_require__(20);
	
	var _toString2 = _interopRequireDefault(_toString);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.capitalize = _capitalize2.default;
	exports.includes = _includes2.default;
	exports.isNil = _isNil2.default;
	exports.isObject = _isObject2.default;
	exports.omitNil = _omitNil2.default;
	exports.omitProperty = _omitProperty2.default;
	exports.toNumber = _toNumber2.default;
	exports.toSnakeCase = _toSnakeCase2.default;
	exports.toString = _toString2.default;

/***/ },
/* 12 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = capitalize;
	/**
	 * Capitalize
	 * @param {string} string
	 * @returns {string}
	 */
	function capitalize(string) {
	    if (!string) {
	        return string;
	    }
	
	    return string.charAt(0).toUpperCase() + string.slice(1);
	}

/***/ },
/* 13 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = includes;
	/**
	 * Includes item
	 * @param {array|string} items
	 * @param {array|string} item
	 * @returns {boolean}
	 */
	function includes(items, item) {
	    if (!Array.isArray(items) && typeof items !== 'string') {
	        return false;
	    }
	
	    return items.indexOf(item) !== -1;
	}

/***/ },
/* 14 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = isNil;
	/**
	 * Is nil
	 * @param {*} value
	 * @returns {boolean}
	 */
	function isNil(value) {
	    if (value === null || value === undefined) {
	        return true;
	    }
	
	    return false;
	}

/***/ },
/* 15 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	exports.default = isObject;
	/**
	 * Is object
	 * @param {*} value
	 * @returns {boolean}
	 */
	function isObject(value) {
	  var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
	
	  return value !== null && (type === 'object' || type === 'function');
	}

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = omitNil;
	
	var _isNil = __webpack_require__(14);
	
	var _isNil2 = _interopRequireDefault(_isNil);
	
	var _omitProperty = __webpack_require__(17);
	
	var _omitProperty2 = _interopRequireDefault(_omitProperty);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Omit nil
	 * @param {Object} object
	 * @returns {Object}
	 */
	function omitNil(object) {
	  return (0, _omitProperty2.default)(object, _isNil2.default);
	}

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = omitProperty;
	
	var _isObject = __webpack_require__(15);
	
	var _isObject2 = _interopRequireDefault(_isObject);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Omit property
	 * @param {Object} object
	 * @param {Function} predicateFn
	 * @returns {Object}
	 */
	function omitProperty(object, predicateFn) {
	    if (!(0, _isObject2.default)(object)) {
	        return object;
	    }
	
	    var keys = Object.keys(object);
	
	    return keys.reduce(function (result, key) {
	        var value = object[key];
	
	        if (!predicateFn(value)) {
	            result[key] = value;
	        }
	
	        return result;
	    }, {});
	}

/***/ },
/* 18 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = toNumber;
	/**
	 * To number
	 * @param {*} value
	 * @returns {number}
	 */
	function toNumber(value) {
	  return parseFloat(value) || 0;
	}

/***/ },
/* 19 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = toSnakeCase;
	/**
	 * To snake case
	 * @param {string} string
	 * @returns {string}
	 */
	function toSnakeCase(string) {
	    if (!string) {
	        return string;
	    }
	
	    return string.replace(/([a-z\d])([A-Z]+)/g, '$1_$2').replace(/[-\s]+/g, '_').toLowerCase();
	}

/***/ },
/* 20 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = toString;
	/**
	 * To string
	 * @param {*} value
	 * @returns {string}
	 */
	function toString(value) {
	    if (typeof value === 'string') {
	        return value;
	    }
	
	    if (typeof value === 'number' && !isNaN(value)) {
	        return value.toString();
	    }
	
	    return '';
	}

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.PAYMENT_METHODS = exports.mapToId = undefined;
	
	var _paymentMethods = __webpack_require__(22);
	
	var PAYMENT_METHODS = _interopRequireWildcard(_paymentMethods);
	
	var _mapToId = __webpack_require__(23);
	
	var _mapToId2 = _interopRequireDefault(_mapToId);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	exports.mapToId = _mapToId2.default;
	exports.PAYMENT_METHODS = PAYMENT_METHODS;

/***/ },
/* 22 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var BRAINTREE = exports.BRAINTREE = 'braintree';
	var BRAINTREE_PAYPAL = exports.BRAINTREE_PAYPAL = 'braintreepaypal';

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = mapToId;
	
	var _paymentMethods = __webpack_require__(22);
	
	/**
	 * Map to gateway
	 * @param {PaymentMethod} paymentMethod
	 * @returns {string}
	 */
	function mapToId(paymentMethod) {
	    if (paymentMethod.id === _paymentMethods.BRAINTREE_PAYPAL) {
	        return _paymentMethods.BRAINTREE;
	    }
	
	    return paymentMethod.id;
	}

/***/ },
/* 24 */
[57, 25],
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = mapToAddress;
	
	var _utils = __webpack_require__(11);
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	/**
	 * Map to address
	 * @param {PaymentRequestData} data
	 * @param {string} addressKey
	 * @returns {Object}
	 */
	function mapToAddress(data, addressKey) {
	    var _omitNil;
	
	    var address = data[addressKey] || {};
	    var formattedAddressKey = (0, _utils.toSnakeCase)(addressKey);
	
	    return (0, _utils.omitNil)((_omitNil = {}, _defineProperty(_omitNil, formattedAddressKey + '_city', address.city), _defineProperty(_omitNil, formattedAddressKey + '_company', address.company), _defineProperty(_omitNil, formattedAddressKey + '_country_code', address.countryCode), _defineProperty(_omitNil, formattedAddressKey + '_country', address.country), _defineProperty(_omitNil, formattedAddressKey + '_first_name', address.firstName), _defineProperty(_omitNil, formattedAddressKey + '_last_name', address.lastName), _defineProperty(_omitNil, formattedAddressKey + '_phone', address.phone), _defineProperty(_omitNil, formattedAddressKey + '_state_code', address.provinceCode), _defineProperty(_omitNil, formattedAddressKey + '_state', address.province), _defineProperty(_omitNil, formattedAddressKey + '_street_1', address.addressLine1), _defineProperty(_omitNil, formattedAddressKey + '_street_2', address.addressLine2), _defineProperty(_omitNil, formattedAddressKey + '_zip', address.postCode), _omitNil));
	}

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = mapToCustomer;
	
	var _utils = __webpack_require__(11);
	
	/**
	 * Map to customer
	 * @param {PaymentRequestData} data
	 * @returns {Object}
	 */
	function mapToCustomer(data) {
	    var _data$customer = data.customer;
	    var customer = _data$customer === undefined ? {} : _data$customer;
	    var _data$quoteMeta = data.quoteMeta;
	    var quoteMeta = _data$quoteMeta === undefined ? {} : _data$quoteMeta;
	    var _data$store = data.store;
	    var store = _data$store === undefined ? {} : _data$store;
	
	
	    return (0, _utils.omitNil)({
	        customer_browser_info: navigator.userAgent,
	        customer_email: customer.email,
	        customer_first_name: customer.firstName,
	        customer_geo_ip_country_code: quoteMeta.request ? quoteMeta.request.geoCountryCode : null,
	        customer_last_name: customer.lastName,
	        customer_locale: store.storeLanguage,
	        customer_name: customer.name,
	        customer_phone: customer.phoneNumber,
	        customer_reference: customer.email
	    });
	}

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = mapToMeta;
	
	var _utils = __webpack_require__(11);
	
	/**
	 * Map to meta
	 * @param {PaymentRequestData} data
	 * @returns {Object}
	 */
	function mapToMeta(data) {
	    var source = data.source;
	
	
	    return (0, _utils.omitNil)({
	        meta_referrer: document.referrer,
	        meta_source: source,
	        meta_user_agent: navigator.userAgent
	    });
	}

/***/ },
/* 28 */
[58, 25],
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = mapToStore;
	
	var _utils = __webpack_require__(11);
	
	/**
	 * Map to store
	 * @param {PaymentRequestData} data
	 * @returns {Object}
	 */
	function mapToStore(data) {
	    var _data$store = data.store;
	    var store = _data$store === undefined ? {} : _data$store;
	
	
	    return (0, _utils.omitNil)({
	        store_hash: store.storeHash,
	        store_id: '' + store.storeId
	    });
	}

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.postForm = undefined;
	
	var _postForm = __webpack_require__(31);
	
	var _postForm2 = _interopRequireDefault(_postForm);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.postForm = _postForm2.default;

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = postForm;
	
	var _createForm = __webpack_require__(32);
	
	var _createForm2 = _interopRequireDefault(_createForm);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Post form
	 * @param {string} url
	 * @param {Object} data
	 * @param {Function} [callback]
	 * @returns {void}
	 */
	function postForm(url, data) {
	    var callback = arguments.length <= 2 || arguments[2] === undefined ? function () {} : arguments[2];
	
	    var form = (0, _createForm2.default)(url, data);
	
	    // Some browsers require the form to be part of DOM in order to submit
	    document.body.appendChild(form);
	    form.submit();
	    document.body.removeChild(form);
	
	    window.addEventListener('beforeunload', function handleBeforeUnload() {
	        window.removeEventListener('beforeunload', handleBeforeUnload);
	
	        callback();
	    });
	}

/***/ },
/* 32 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = createForm;
	/**
	 * Create input
	 * @param {string} value
	 * @param {string} key
	 * @returns {HTMLInputElement}
	 */
	function createInput(value, key) {
	    var input = document.createElement('input');
	
	    input.setAttribute('name', key);
	    input.setAttribute('type', 'hidden');
	    input.setAttribute('value', value);
	
	    return input;
	}
	
	/**
	 * Create form
	 * @param {string} url
	 * @param {Object} data
	 * @returns {HTMLFormElement}
	 */
	function createForm(url, data) {
	    var form = document.createElement('form');
	
	    form.style.display = 'none';
	
	    form.setAttribute('action', url);
	    form.setAttribute('method', 'POST');
	    form.setAttribute('target', '_top');
	
	    Object.keys(data).forEach(function (key) {
	        var value = data[key];
	
	        form.appendChild(createInput(value, key));
	    });
	
	    return form;
	}

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = submitPayment;
	
	var _urls = __webpack_require__(7);
	
	var _httpRequest = __webpack_require__(34);
	
	var _mappers = __webpack_require__(44);
	
	/**
	 * Submit payment
	 * @param {PaymentRequestData} data
	 * @param {Object} [options = {}]
	 * @param {string} [options.host]
	 * @param {Function} [callback]
	 * @returns {void}
	 */
	function submitPayment(data) {
	    var _ref = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	    var host = _ref.host;
	    var callback = arguments[2];
	
	    var payload = (0, _mappers.mapToPayload)(data);
	    var url = (0, _urls.getPaymentUrl)(host);
	    var options = {
	        headers: (0, _mappers.mapToHeaders)(data)
	    };
	
	    (0, _httpRequest.postRequest)(url, payload, options, callback);
	}

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.sendRequest = exports.postRequest = undefined;
	
	var _postRequest = __webpack_require__(35);
	
	var _postRequest2 = _interopRequireDefault(_postRequest);
	
	var _sendRequest = __webpack_require__(40);
	
	var _sendRequest2 = _interopRequireDefault(_sendRequest);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.postRequest = _postRequest2.default;
	exports.sendRequest = _sendRequest2.default;

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = postRequest;
	
	var _objectAssign = __webpack_require__(10);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	var _constants = __webpack_require__(36);
	
	var _sendRequest = __webpack_require__(40);
	
	var _sendRequest2 = _interopRequireDefault(_sendRequest);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Post request
	 * @param {string} url
	 * @param {Object} data
	 * @param {Object} [options]
	 * @param {Function} [callback]
	 * @returns {void}
	 */
	function postRequest(url, data, options, callback) {
	    var mergedOptions = (0, _objectAssign2.default)({}, options, {
	        method: _constants.METHOD_TYPES.POST
	    });
	
	    (0, _sendRequest2.default)(url, data, mergedOptions, callback);
	}

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.METHOD_TYPES = exports.DEFAULT_OPTIONS = exports.CONTENT_TYPES = undefined;
	
	var _contentTypes = __webpack_require__(37);
	
	var CONTENT_TYPES = _interopRequireWildcard(_contentTypes);
	
	var _methodTypes = __webpack_require__(38);
	
	var METHOD_TYPES = _interopRequireWildcard(_methodTypes);
	
	var _defaultOptions = __webpack_require__(39);
	
	var _defaultOptions2 = _interopRequireDefault(_defaultOptions);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	exports.CONTENT_TYPES = CONTENT_TYPES;
	exports.DEFAULT_OPTIONS = _defaultOptions2.default;
	exports.METHOD_TYPES = METHOD_TYPES;

/***/ },
/* 37 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var APPLICATION_JSON = exports.APPLICATION_JSON = 'application/json';

/***/ },
/* 38 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var GET = exports.GET = 'GET';
	var POST = exports.POST = 'POST';

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _contentTypes = __webpack_require__(37);
	
	var _methodTypes = __webpack_require__(38);
	
	var DEFAULT_OPTIONS = {
	    headers: {
	        Accept: _contentTypes.APPLICATION_JSON,
	        'Content-Type': _contentTypes.APPLICATION_JSON
	    },
	    method: _methodTypes.GET
	};
	
	exports.default = DEFAULT_OPTIONS;

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = sendRequest;
	
	var _deepAssign = __webpack_require__(41);
	
	var _deepAssign2 = _interopRequireDefault(_deepAssign);
	
	var _constants = __webpack_require__(36);
	
	var _utils = __webpack_require__(11);
	
	var _createRequest = __webpack_require__(43);
	
	var _createRequest2 = _interopRequireDefault(_createRequest);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Get request body
	 * @private
	 * @param {Object} data
	 * @param {string} [contentType = CONTENT_TYPES.APPLICATION_JSON]
	 * @returns {Object}
	 */
	function getRequestBody(data) {
	    var contentType = arguments.length <= 1 || arguments[1] === undefined ? _constants.CONTENT_TYPES.APPLICATION_JSON : arguments[1];
	
	    if (data && (0, _utils.includes)(contentType, _constants.CONTENT_TYPES.APPLICATION_JSON)) {
	        return JSON.stringify(data);
	    }
	
	    return data;
	}
	
	/**
	 * Get response
	 * @private
	 * @param {XMLHttpRequest} xhr
	 * @returns {Object}
	 */
	function getResponse(xhr) {
	    var contentType = xhr.getResponseHeader('Content-Type');
	    var status = xhr.status;
	    var statusText = xhr.statusText;
	
	
	    var data = 'response' in xhr ? xhr.response : xhr.responseText;
	
	    if (data && (0, _utils.includes)(contentType, _constants.CONTENT_TYPES.APPLICATION_JSON)) {
	        data = JSON.parse(data);
	    }
	
	    return { data: data, status: status, statusText: statusText };
	}
	
	/**
	 * Is request successful
	 * @private
	 * @param {XMLHttpRequest} xhr
	 * @returns {boolean}
	 */
	function isSuccessfulRequest(xhr) {
	    return xhr.status >= 200 && xhr.status < 300;
	}
	
	/**
	 * Send request
	 * @param {string} url
	 * @param {Object} data
	 * @param {Object} [options]
	 * @param {Function} [callback]
	 * @returns {void}
	 */
	function sendRequest(url, data, options) {
	    var callback = arguments.length <= 3 || arguments[3] === undefined ? function () {} : arguments[3];
	
	    var mergedOptions = (0, _deepAssign2.default)({}, _constants.DEFAULT_OPTIONS, options);
	
	    var xhr = (0, _createRequest2.default)(url, mergedOptions, function (error) {
	        var response = getResponse(xhr);
	
	        if (error || !isSuccessfulRequest(xhr)) {
	            callback(response);
	
	            return;
	        }
	
	        callback(null, response);
	    });
	
	    var payload = getRequestBody(data, mergedOptions.headers['Content-Type']);
	
	    xhr.send(payload);
	}

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var isObj = __webpack_require__(42);
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;
	
	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Sources cannot be null or undefined');
		}
	
		return Object(val);
	}
	
	function assignKey(to, from, key) {
		var val = from[key];
	
		if (val === undefined || val === null) {
			return;
		}
	
		if (hasOwnProperty.call(to, key)) {
			if (to[key] === undefined || to[key] === null) {
				throw new TypeError('Cannot convert undefined or null to object (' + key + ')');
			}
		}
	
		if (!hasOwnProperty.call(to, key) || !isObj(val)) {
			to[key] = val;
		} else {
			to[key] = assign(Object(to[key]), from[key]);
		}
	}
	
	function assign(to, from) {
		if (to === from) {
			return to;
		}
	
		from = Object(from);
	
		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				assignKey(to, from, key);
			}
		}
	
		if (Object.getOwnPropertySymbols) {
			var symbols = Object.getOwnPropertySymbols(from);
	
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					assignKey(to, from, symbols[i]);
				}
			}
		}
	
		return to;
	}
	
	module.exports = function deepAssign(target) {
		target = toObject(target);
	
		for (var s = 1; s < arguments.length; s++) {
			assign(target, arguments[s]);
		}
	
		return target;
	};


/***/ },
/* 42 */
/***/ function(module, exports) {

	'use strict';
	module.exports = function (x) {
		var type = typeof x;
		return x !== null && (type === 'object' || type === 'function');
	};


/***/ },
/* 43 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = createRequest;
	/**
	 * Set XHR headers
	 * @private
	 * @param {XMLHttpRequest} xhr
	 * @param {Object} headers
	 * @returns {void}
	 */
	function setHeaders(xhr, headers) {
	    var headerKeys = Object.keys(headers);
	
	    headerKeys.forEach(function (key) {
	        var value = headers[key];
	
	        xhr.setRequestHeader(key, value);
	    });
	}
	
	/**
	 * Set XHR options
	 * @private
	 * @param {XMLHttpRequest} xhr
	 * @param {Object} options
	 * @returns {void}
	 */
	function setOptions(xhr, options) {
	    xhr.withCredentials = options.withCredentials;
	
	    if (options.headers) {
	        setHeaders(xhr, options.headers);
	    }
	}
	
	/**
	 * Create XMLHttpRequest
	 * @param {string} url
	 * @param {Object} options
	 * @param {Function} [callback]
	 * @returns {XMLHttpRequest}
	 */
	function createRequest(url, options) {
	    var callback = arguments.length <= 2 || arguments[2] === undefined ? function () {} : arguments[2];
	
	    var xhr = new XMLHttpRequest();
	
	    xhr.onerror = function () {
	        return callback(new Error(xhr.statusText));
	    };
	    xhr.onload = function () {
	        return callback();
	    };
	
	    xhr.open(options.method, url, true);
	    setOptions(xhr, options);
	
	    return xhr;
	}

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.mapToPayload = exports.mapToHeaders = undefined;
	
	var _mapToHeaders = __webpack_require__(45);
	
	var _mapToHeaders2 = _interopRequireDefault(_mapToHeaders);
	
	var _mapToPayload = __webpack_require__(46);
	
	var _mapToPayload2 = _interopRequireDefault(_mapToPayload);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.mapToHeaders = _mapToHeaders2.default;
	exports.mapToPayload = _mapToPayload2.default;

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = mapToHeaders;
	
	var _utils = __webpack_require__(11);
	
	/**
	 * Map to headers
	 * @param {PaymentRequestData} data
	 * @returns {Object}
	 */
	function mapToHeaders(data) {
	    var authToken = data.authToken;
	
	
	    return (0, _utils.omitNil)({
	        Authorization: authToken
	    });
	}

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = mapToPayload;
	
	var _utils = __webpack_require__(11);
	
	var _mapToCustomer = __webpack_require__(47);
	
	var _mapToCustomer2 = _interopRequireDefault(_mapToCustomer);
	
	var _mapToOrder = __webpack_require__(48);
	
	var _mapToOrder2 = _interopRequireDefault(_mapToOrder);
	
	var _mapToPayment = __webpack_require__(54);
	
	var _mapToPayment2 = _interopRequireDefault(_mapToPayment);
	
	var _mapToStore = __webpack_require__(56);
	
	var _mapToStore2 = _interopRequireDefault(_mapToStore);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Map to payload
	 * @param {PaymentRequestData} data
	 * @returns {Object}
	 */
	function mapToPayload(data) {
	    var _data$order = data.order;
	    var order = _data$order === undefined ? {} : _data$order;
	
	
	    return (0, _utils.omitNil)({
	        customer: (0, _mapToCustomer2.default)(data),
	        notify_url: order.callbackUrl,
	        order: (0, _mapToOrder2.default)(data),
	        payment: (0, _mapToPayment2.default)(data),
	        store: (0, _mapToStore2.default)(data)
	    });
	}

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = mapToCustomer;
	
	var _utils = __webpack_require__(11);
	
	/**
	 * Map to customer
	 * @param {PaymentRequestData} data
	 * @returns {Object}
	 */
	function mapToCustomer(data) {
	    var _data$customer = data.customer;
	    var customer = _data$customer === undefined ? {} : _data$customer;
	    var _data$quoteMeta = data.quoteMeta;
	    var quoteMeta = _data$quoteMeta === undefined ? {} : _data$quoteMeta;
	
	
	    return (0, _utils.omitNil)({
	        geo_ip_country_code: quoteMeta.request ? quoteMeta.request.geoCountryCode : null,
	        id: (0, _utils.toString)(customer.customerId),
	        session_token: quoteMeta.request ? quoteMeta.request.sessionHash : null
	    });
	}

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = mapToOrder;
	
	var _utils = __webpack_require__(11);
	
	var _mapToBillingAddress = __webpack_require__(49);
	
	var _mapToBillingAddress2 = _interopRequireDefault(_mapToBillingAddress);
	
	var _mapToItems = __webpack_require__(51);
	
	var _mapToItems2 = _interopRequireDefault(_mapToItems);
	
	var _mapToOrderTotals = __webpack_require__(52);
	
	var _mapToOrderTotals2 = _interopRequireDefault(_mapToOrderTotals);
	
	var _mapToShippingAddress = __webpack_require__(53);
	
	var _mapToShippingAddress2 = _interopRequireDefault(_mapToShippingAddress);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Map to order
	 * @param {PaymentRequestData} data
	 * @returns {Object}
	 */
	function mapToOrder(data) {
	    var order = data.order;
	
	
	    return (0, _utils.omitNil)({
	        billing_address: (0, _mapToBillingAddress2.default)(data),
	        currency: order.currency,
	        id: (0, _utils.toString)(order.orderId),
	        items: (0, _mapToItems2.default)(data),
	        shipping_address: (0, _mapToShippingAddress2.default)(data),
	        token: order.token,
	        totals: (0, _mapToOrderTotals2.default)(data)
	    });
	}

/***/ },
/* 49 */
[57, 50],
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = mapToAddress;
	
	var _utils = __webpack_require__(11);
	
	/**
	 * Map to address
	 * @param {PaymentRequestData} data
	 * @param {string} addressKey
	 * @returns {Object}
	 */
	function mapToAddress(data, addressKey) {
	    var address = data[addressKey] || {};
	
	    return (0, _utils.omitNil)({
	        city: address.city,
	        company: address.company,
	        country_code: address.countryCode,
	        country: address.country,
	        first_name: address.firstName,
	        last_name: address.lastName,
	        phone: address.phone,
	        state_code: address.provinceCode,
	        state: address.province,
	        street_1: address.addressLine1,
	        street_2: address.addressLine2,
	        zip: address.postCode
	    });
	}

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = mapToItems;
	
	var _utils = __webpack_require__(11);
	
	/**
	 * Map to items
	 * @param {PaymentRequestData} data
	 * @returns {Object}
	 */
	function mapToItems(data) {
	    var _data$cart = data.cart;
	    var cart = _data$cart === undefined ? { items: [] } : _data$cart;
	
	
	    return cart.items.map(function (itemData) {
	        return (0, _utils.omitNil)({
	            code: itemData.id,
	            name: itemData.name,
	            price: itemData.integerAmount,
	            quantity: itemData.quantity,
	            sku: itemData.sku
	        });
	    });
	}

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = mapToOrderTotals;
	
	var _utils = __webpack_require__(11);
	
	/**
	 * Map to order totals
	 * @param {PaymentRequestData} data
	 * @returns {Object}
	 */
	function mapToOrderTotals(data) {
	    var order = data.order;
	
	
	    return (0, _utils.omitNil)({
	        grand_total: order.grandTotal ? order.grandTotal.integerAmount : null,
	        handling: order.handling ? order.handling.integerAmount : null,
	        shipping: order.shipping ? order.shipping.integerAmount : null,
	        subtotal: order.subtotal ? order.subtotal.integerAmount : null,
	        tax: order.taxTotal ? order.taxTotal.integerAmount : null
	    });
	}

/***/ },
/* 53 */
[58, 50],
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = mapToPayment;
	
	var _objectAssign = __webpack_require__(10);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	var _utils = __webpack_require__(11);
	
	var _paymentMethod = __webpack_require__(21);
	
	var _mapToCreditCard = __webpack_require__(55);
	
	var _mapToCreditCard2 = _interopRequireDefault(_mapToCreditCard);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Map to payment
	 * @param {PaymentRequestData} data
	 * @returns {Object}
	 */
	function mapToPayment(data) {
	    var _data$order = data.order;
	    var order = _data$order === undefined ? {} : _data$order;
	    var _data$payment = data.payment;
	    var payment = _data$payment === undefined ? {} : _data$payment;
	    var _data$paymentMethod = data.paymentMethod;
	    var paymentMethod = _data$paymentMethod === undefined ? {} : _data$paymentMethod;
	    var _data$quoteMeta = data.quoteMeta;
	    var quoteMeta = _data$quoteMeta === undefined ? {} : _data$quoteMeta;
	
	
	    var payload = {
	        device_info: quoteMeta.request ? quoteMeta.request.deviceSessionId : null,
	        gateway: (0, _paymentMethod.mapToId)(paymentMethod),
	        notify_url: order.callbackUrl
	    };
	
	    var nonce = payment.nonce || paymentMethod.nonce;
	
	    if (nonce) {
	        (0, _objectAssign2.default)(payload, {
	            credit_card_token: {
	                token: nonce
	            }
	        });
	    } else {
	        (0, _objectAssign2.default)(payload, {
	            credit_card: (0, _mapToCreditCard2.default)(data)
	        });
	    }
	
	    return (0, _utils.omitNil)(payload);
	}

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = mapToCreditCard;
	
	var _utils = __webpack_require__(11);
	
	/**
	 * Map to credit card
	 * @param {PaymentRequestData} data
	 * @returns {Object}
	 */
	function mapToCreditCard(data) {
	    var _data$payment = data.payment;
	    var payment = _data$payment === undefined ? {} : _data$payment;
	
	
	    return (0, _utils.omitNil)({
	        account_name: payment.ccName,
	        month: payment.ccExpiry ? (0, _utils.toNumber)(payment.ccExpiry.month) : null,
	        number: payment.ccNumber,
	        verification_value: payment.ccCvv,
	        year: payment.ccExpiry ? (0, _utils.toNumber)(payment.ccExpiry.year) : null
	    });
	}

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = mapToStore;
	
	var _utils = __webpack_require__(11);
	
	/**
	 * Map to store
	 * @param {PaymentRequestData} data
	 * @returns {Object}
	 */
	function mapToStore(data) {
	    var _data$store = data.store;
	    var store = _data$store === undefined ? {} : _data$store;
	
	
	    return (0, _utils.omitNil)({
	        hash: store.storeHash,
	        id: '' + store.storeId,
	        name: store.storeName
	    });
	}

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__, __webpack_module_template_argument_0__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = mapToBillingAddress;
	
	var _mapToAddress = __webpack_require__(__webpack_module_template_argument_0__);
	
	var _mapToAddress2 = _interopRequireDefault(_mapToAddress);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Map to billing address
	 * @param {PaymentRequestData} data
	 * @returns {Object}
	 */
	function mapToBillingAddress(data) {
	  return (0, _mapToAddress2.default)(data, 'billingAddress');
	}

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__, __webpack_module_template_argument_0__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = mapToShippingAddress;
	
	var _mapToAddress = __webpack_require__(__webpack_module_template_argument_0__);
	
	var _mapToAddress2 = _interopRequireDefault(_mapToAddress);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Map to shipping address
	 * @param {PaymentRequestData} data
	 * @returns {Object}
	 */
	function mapToShippingAddress(data) {
	  return (0, _mapToAddress2.default)(data, 'shippingAddress');
	}

/***/ }
/******/ ])))
});
;
//# sourceMappingURL=bigpay-client.js.map