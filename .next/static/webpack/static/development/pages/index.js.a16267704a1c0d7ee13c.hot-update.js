webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./node_modules/chain-function/index.js":
/*!**********************************************!*\
  !*** ./node_modules/chain-function/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


module.exports = function chain(){
  var len = arguments.length
  var args = [];

  for (var i = 0; i < len; i++)
    args[i] = arguments[i]

  args = args.filter(function(fn){ return fn != null })

  if (args.length === 0) return undefined
  if (args.length === 1) return args[0]

  return args.reduce(function(current, next){
    return function chainedFunction() {
      current.apply(this, arguments);
      next.apply(this, arguments);
    };
  })
}


/***/ }),

/***/ "./node_modules/next/dist/build/polyfills/object-assign.js":
/*!***********************************************************************************************************************!*\
  !*** delegated ./node_modules/next/dist/build/polyfills/object-assign.js from dll-reference dll_5030f387d328e4415785 ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_5030f387d328e4415785 */ "dll-reference dll_5030f387d328e4415785"))("./node_modules/next/dist/build/polyfills/object-assign.js");

/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!*********************************************************************************************************!*\
  !*** delegated ./node_modules/prop-types/checkPropTypes.js from dll-reference dll_5030f387d328e4415785 ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_5030f387d328e4415785 */ "dll-reference dll_5030f387d328e4415785"))("./node_modules/prop-types/checkPropTypes.js");

/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*******************************************************************************************************************!*\
  !*** delegated ./node_modules/prop-types/lib/ReactPropTypesSecret.js from dll-reference dll_5030f387d328e4415785 ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_5030f387d328e4415785 */ "dll-reference dll_5030f387d328e4415785"))("./node_modules/prop-types/lib/ReactPropTypesSecret.js");

/***/ }),

/***/ "./node_modules/react-addons-transition-group/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-addons-transition-group/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



module.exports = __webpack_require__(/*! react-transition-group/TransitionGroup */ "./node_modules/react-transition-group/TransitionGroup.js");


/***/ }),

/***/ "./node_modules/react-shuffle/index.js":
/*!*********************************************!*\
  !*** ./node_modules/react-shuffle/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Shuffle = __webpack_require__(/*! ./lib/shuffle */ "./node_modules/react-shuffle/lib/shuffle.js");

module.exports = Shuffle;


/***/ }),

/***/ "./node_modules/react-shuffle/lib/shuffle.js":
/*!***************************************************!*\
  !*** ./node_modules/react-shuffle/lib/shuffle.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _objectAssign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _reactTweenState = __webpack_require__(/*! react-tween-state */ "./node_modules/react-tween-state/lib/index.js");

var _reactTweenState2 = _interopRequireDefault(_reactTweenState);

var _reactAddonsTransitionGroup = __webpack_require__(/*! react-addons-transition-group */ "./node_modules/react-addons-transition-group/index.js");

var _reactAddonsTransitionGroup2 = _interopRequireDefault(_reactAddonsTransitionGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } /* eslint no-unused-vars:0 */
/*global window, document, getComputedStyle*/

var Clones = _react2.default.createClass({
  displayName: 'ShuffleClones',

  _childrenWithPositions: function _childrenWithPositions() {
    var _this = this;

    var children = [];
    _react2.default.Children.forEach(this.props.children, function (child) {
      var style = _this.props.positions[child.key];
      var key = child.key;
      children.push(_react2.default.createElement(Clone, {
        child: child,
        style: style,
        key: key,
        initial: _this.props.initial,
        fade: _this.props.fade,
        scale: _this.props.scale,
        duration: _this.props.duration }));
    });
    return children.sort(function (a, b) {
      return a.key < b.key ? -1 : a.key > b.key ? 1 : 0;
    });
  },
  render: function render() {
    return _react2.default.createElement(
      'div',
      { className: 'ShuffleClones' },
      _react2.default.createElement(
        _reactAddonsTransitionGroup2.default,
        null,
        this._childrenWithPositions()
      )
    );
  }
});

var Clone = _react2.default.createClass({
  mixins: [_reactTweenState2.default.Mixin],
  displayName: 'ShuffleClone',
  getInitialState: function getInitialState() {
    return {
      top: this.props.style ? this.props.style.top : 0,
      left: this.props.style ? this.props.style.left : 0,
      opacity: 1,
      transform: 1
    };
  },
  componentWillAppear: function componentWillAppear(cb) {
    this.tweenState('opacity', {
      easing: _reactTweenState2.default.easingTypes.easeOutSine,
      duration: this.props.duration,
      beginValue: this.props.initial ? 0 : 1,
      endValue: 1,
      onEnd: cb
    });
  },
  componentWillEnter: function componentWillEnter(cb) {
    this.tweenState('opacity', {
      easing: _reactTweenState2.default.easingTypes.easeOutSine,
      duration: this.props.duration,
      beginValue: 0,
      endValue: 1,
      onEnd: cb
    });
  },
  componentWillLeave: function componentWillLeave(cb) {
    this.tweenState('opacity', {
      easing: _reactTweenState2.default.easingTypes.easeOutSine,
      duration: this.props.duration,
      endValue: 0,
      onEnd: function onEnd() {
        try {
          cb();
        } catch (e) {
          // This try catch handles component umounting jumping the gun
        }
      }
    });
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    this.tweenState('top', {
      easing: _reactTweenState2.default.easingTypes.easeOutSine,
      duration: nextProps.duration,
      endValue: nextProps.style.top
    });
    this.tweenState('left', {
      easing: _reactTweenState2.default.easingTypes.easeOutSine,
      duration: nextProps.duration,
      endValue: nextProps.style.left
    });
  },
  render: function render() {
    var style = {};
    if (this.props.style) {
      style = {
        top: this.getTweeningValue('top'),
        left: this.getTweeningValue('left'),
        opacity: this.props.fade ? this.getTweeningValue('opacity') : 1,
        transform: this.props.scale ? 'scale(' + this.getTweeningValue('opacity') + ')' : 0,
        transformOrigin: 'center center',
        width: this.props.style.width,
        height: this.props.style.height,
        position: this.props.style.position
      };
    }
    var key = this.props.key;
    return _react2.default.cloneElement(this.props.child, { style: style, key: key });
  }
});

var Shuffle = _react2.default.createClass({

  displayName: 'Shuffle',

  propTypes: {
    duration: _react2.default.PropTypes.number,
    scale: _react2.default.PropTypes.bool,
    fade: _react2.default.PropTypes.bool,
    initial: _react2.default.PropTypes.bool
  },

  getDefaultProps: function getDefaultProps() {
    return {
      duration: 300,
      scale: true,
      fade: true,
      initial: false
    };
  },
  getInitialState: function getInitialState() {
    return {
      animating: false,
      ready: false
    };
  },
  componentDidMount: function componentDidMount() {
    this._makePortal();
    window.addEventListener('resize', this._renderClonesInitially);
  },
  componentWillUnmount: function componentWillUnmount() {
    _reactDom2.default.unmountComponentAtNode(this._portalNode);
    _reactDom2.default.findDOMNode(this.refs.container).removeChild(this._portalNode);
    window.removeEventListener('resize', this._renderClonesInitially);
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    this._startAnimation(nextProps);
  },
  componentDidUpdate: function componentDidUpdate(prevProps) {
    var _this2 = this;

    if (this.state.ready === false) {
      this.setState({ ready: true }, function () {
        _this2._renderClonesInitially();
      });
    } else {
      this._renderClonesToNewPositions(this.props);
    }
  },
  _makePortal: function _makePortal() {
    this._portalNode = document.createElement('div');
    this._portalNode.style.left = '0px';
    this._portalNode.style.top = '0px';
    this._portalNode.style.position = 'absolute';
    _reactDom2.default.findDOMNode(this.refs.container).appendChild(this._portalNode);
  },
  _addTransitionEndEvent: function _addTransitionEndEvent() {
    setTimeout(this._finishAnimation, this.props.duration);
  },
  _startAnimation: function _startAnimation(nextProps) {
    var _this3 = this;

    if (this.state.animating) {
      return;
    }

    var cloneProps = (0, _objectAssign2.default)({}, nextProps, {
      positions: this._getPositions(),
      initial: this.props.initial,
      fade: this.props.fade,
      scale: this.props.scale,
      duration: this.props.duration
    });
    this._renderClones(cloneProps, function () {
      _this3._addTransitionEndEvent();
      _this3.setState({ animating: true });
    });
  },
  _renderClonesToNewPositions: function _renderClonesToNewPositions(props) {
    var cloneProps = (0, _objectAssign2.default)({}, props, {
      positions: this._getPositions(),
      initial: this.props.initial,
      fade: this.props.fade,
      scale: this.props.scale,
      duration: this.props.duration
    });
    this._renderClones(cloneProps);
  },
  _finishAnimation: function _finishAnimation() {
    this.setState({ animating: false });
  },
  _getPositions: function _getPositions() {
    var _this4 = this;

    var positions = {};
    _react2.default.Children.forEach(this.props.children, function (child) {
      var ref = child.key;
      var node = _reactDom2.default.findDOMNode(_this4.refs[ref]);
      var rect = node.getBoundingClientRect();
      var computedStyle = getComputedStyle(node);
      var marginTop = parseInt(computedStyle.marginTop, 10);
      var marginLeft = parseInt(computedStyle.marginLeft, 10);
      var position = {
        top: node.offsetTop - marginTop,
        left: node.offsetLeft - marginLeft,
        width: rect.width,
        height: rect.height,
        position: 'absolute',
        opacity: 1
      };
      positions[ref] = position;
    });
    return positions;
  },
  _renderClonesInitially: function _renderClonesInitially() {
    var cloneProps = (0, _objectAssign2.default)({}, this.props, {
      positions: this._getPositions(),
      initial: this.props.initial,
      fade: this.props.fade,
      scale: this.props.scale,
      duration: this.props.duration
    });
    _reactDom2.default.unstable_renderSubtreeIntoContainer(this, _react2.default.createElement(Clones, cloneProps), this._portalNode);
    this.setState({ ready: true });
  },
  _renderClones: function _renderClones(props, cb) {
    _reactDom2.default.unstable_renderSubtreeIntoContainer(this, _react2.default.createElement(Clones, props), this._portalNode, cb);
  },
  _childrenWithRefs: function _childrenWithRefs() {
    return _react2.default.Children.map(this.props.children, function (child) {
      return _react2.default.cloneElement(child, { ref: child.key });
    });
  },
  render: function render() {
    var _props = this.props,
        initial = _props.initial,
        fade = _props.fade,
        duration = _props.duration,
        props = _objectWithoutProperties(_props, ['initial', 'fade', 'duration']);

    var showContainer = initial ? 0 : 1;
    if (this.state.ready) {
      showContainer = 0;
    }
    return _react2.default.createElement(
      'div',
      _extends({ ref: 'container', style: { position: 'relative' } }, props),
      _react2.default.createElement(
        'div',
        { style: { opacity: showContainer } },
        this._childrenWithRefs()
      )
    );
  }
});

exports.default = Shuffle;

/***/ }),

/***/ "./node_modules/react-transition-group/TransitionGroup.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-transition-group/TransitionGroup.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _chainFunction = __webpack_require__(/*! chain-function */ "./node_modules/chain-function/index.js");

var _chainFunction2 = _interopRequireDefault(_chainFunction);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _warning = __webpack_require__(/*! warning */ "./node_modules/warning/browser.js");

var _warning2 = _interopRequireDefault(_warning);

var _ChildMapping = __webpack_require__(/*! ./utils/ChildMapping */ "./node_modules/react-transition-group/utils/ChildMapping.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
  component: _propTypes2.default.any,
  childFactory: _propTypes2.default.func,
  children: _propTypes2.default.node
};

var defaultProps = {
  component: 'span',
  childFactory: function childFactory(child) {
    return child;
  }
};

var TransitionGroup = function (_React$Component) {
  _inherits(TransitionGroup, _React$Component);

  function TransitionGroup(props, context) {
    _classCallCheck(this, TransitionGroup);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));

    _this.performAppear = function (key, component) {
      _this.currentlyTransitioningKeys[key] = true;

      if (component.componentWillAppear) {
        component.componentWillAppear(_this._handleDoneAppearing.bind(_this, key, component));
      } else {
        _this._handleDoneAppearing(key, component);
      }
    };

    _this._handleDoneAppearing = function (key, component) {
      if (component.componentDidAppear) {
        component.componentDidAppear();
      }

      delete _this.currentlyTransitioningKeys[key];

      var currentChildMapping = (0, _ChildMapping.getChildMapping)(_this.props.children);

      if (!currentChildMapping || !currentChildMapping.hasOwnProperty(key)) {
        // This was removed before it had fully appeared. Remove it.
        _this.performLeave(key, component);
      }
    };

    _this.performEnter = function (key, component) {
      _this.currentlyTransitioningKeys[key] = true;

      if (component.componentWillEnter) {
        component.componentWillEnter(_this._handleDoneEntering.bind(_this, key, component));
      } else {
        _this._handleDoneEntering(key, component);
      }
    };

    _this._handleDoneEntering = function (key, component) {
      if (component.componentDidEnter) {
        component.componentDidEnter();
      }

      delete _this.currentlyTransitioningKeys[key];

      var currentChildMapping = (0, _ChildMapping.getChildMapping)(_this.props.children);

      if (!currentChildMapping || !currentChildMapping.hasOwnProperty(key)) {
        // This was removed before it had fully entered. Remove it.
        _this.performLeave(key, component);
      }
    };

    _this.performLeave = function (key, component) {
      _this.currentlyTransitioningKeys[key] = true;

      if (component.componentWillLeave) {
        component.componentWillLeave(_this._handleDoneLeaving.bind(_this, key, component));
      } else {
        // Note that this is somewhat dangerous b/c it calls setState()
        // again, effectively mutating the component before all the work
        // is done.
        _this._handleDoneLeaving(key, component);
      }
    };

    _this._handleDoneLeaving = function (key, component) {
      if (component.componentDidLeave) {
        component.componentDidLeave();
      }

      delete _this.currentlyTransitioningKeys[key];

      var currentChildMapping = (0, _ChildMapping.getChildMapping)(_this.props.children);

      if (currentChildMapping && currentChildMapping.hasOwnProperty(key)) {
        // This entered again before it fully left. Add it again.
        _this.keysToEnter.push(key);
      } else {
        _this.setState(function (state) {
          var newChildren = _extends({}, state.children);
          delete newChildren[key];
          return { children: newChildren };
        });
      }
    };

    _this.childRefs = Object.create(null);

    _this.state = {
      children: (0, _ChildMapping.getChildMapping)(props.children)
    };
    return _this;
  }

  TransitionGroup.prototype.componentWillMount = function componentWillMount() {
    this.currentlyTransitioningKeys = {};
    this.keysToEnter = [];
    this.keysToLeave = [];
  };

  TransitionGroup.prototype.componentDidMount = function componentDidMount() {
    var initialChildMapping = this.state.children;
    for (var key in initialChildMapping) {
      if (initialChildMapping[key]) {
        this.performAppear(key, this.childRefs[key]);
      }
    }
  };

  TransitionGroup.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var nextChildMapping = (0, _ChildMapping.getChildMapping)(nextProps.children);
    var prevChildMapping = this.state.children;

    this.setState({
      children: (0, _ChildMapping.mergeChildMappings)(prevChildMapping, nextChildMapping)
    });

    for (var key in nextChildMapping) {
      var hasPrev = prevChildMapping && prevChildMapping.hasOwnProperty(key);
      if (nextChildMapping[key] && !hasPrev && !this.currentlyTransitioningKeys[key]) {
        this.keysToEnter.push(key);
      }
    }

    for (var _key in prevChildMapping) {
      var hasNext = nextChildMapping && nextChildMapping.hasOwnProperty(_key);
      if (prevChildMapping[_key] && !hasNext && !this.currentlyTransitioningKeys[_key]) {
        this.keysToLeave.push(_key);
      }
    }

    // If we want to someday check for reordering, we could do it here.
  };

  TransitionGroup.prototype.componentDidUpdate = function componentDidUpdate() {
    var _this2 = this;

    var keysToEnter = this.keysToEnter;
    this.keysToEnter = [];
    keysToEnter.forEach(function (key) {
      return _this2.performEnter(key, _this2.childRefs[key]);
    });

    var keysToLeave = this.keysToLeave;
    this.keysToLeave = [];
    keysToLeave.forEach(function (key) {
      return _this2.performLeave(key, _this2.childRefs[key]);
    });
  };

  TransitionGroup.prototype.render = function render() {
    var _this3 = this;

    // TODO: we could get rid of the need for the wrapper node
    // by cloning a single child
    var childrenToRender = [];

    var _loop = function _loop(key) {
      var child = _this3.state.children[key];
      if (child) {
        var isCallbackRef = typeof child.ref !== 'string';
        var factoryChild = _this3.props.childFactory(child);
        var ref = function ref(r) {
          _this3.childRefs[key] = r;
        };

         true ? (0, _warning2.default)(isCallbackRef, 'string refs are not supported on children of TransitionGroup and will be ignored. ' + 'Please use a callback ref instead: https://facebook.github.io/react/docs/refs-and-the-dom.html#the-ref-callback-attribute') : undefined;

        // Always chaining the refs leads to problems when the childFactory
        // wraps the child. The child ref callback gets called twice with the
        // wrapper and the child. So we only need to chain the ref if the
        // factoryChild is not different from child.
        if (factoryChild === child && isCallbackRef) {
          ref = (0, _chainFunction2.default)(child.ref, ref);
        }

        // You may need to apply reactive updates to a child as it is leaving.
        // The normal React way to do it won't work since the child will have
        // already been removed. In case you need this behavior you can provide
        // a childFactory function to wrap every child, even the ones that are
        // leaving.
        childrenToRender.push(_react2.default.cloneElement(factoryChild, {
          key: key,
          ref: ref
        }));
      }
    };

    for (var key in this.state.children) {
      _loop(key);
    }

    // Do not forward TransitionGroup props to primitive DOM nodes
    var props = _extends({}, this.props);
    delete props.transitionLeave;
    delete props.transitionName;
    delete props.transitionAppear;
    delete props.transitionEnter;
    delete props.childFactory;
    delete props.transitionLeaveTimeout;
    delete props.transitionEnterTimeout;
    delete props.transitionAppearTimeout;
    delete props.component;

    return _react2.default.createElement(this.props.component, props, childrenToRender);
  };

  return TransitionGroup;
}(_react2.default.Component);

TransitionGroup.displayName = 'TransitionGroup';


TransitionGroup.propTypes =  true ? propTypes : undefined;
TransitionGroup.defaultProps = defaultProps;

exports.default = TransitionGroup;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-transition-group/utils/ChildMapping.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-transition-group/utils/ChildMapping.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getChildMapping = getChildMapping;
exports.mergeChildMappings = mergeChildMappings;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

/**
 * Given `this.props.children`, return an object mapping key to child.
 *
 * @param {*} children `this.props.children`
 * @return {object} Mapping of key to child
 */
function getChildMapping(children) {
  if (!children) {
    return children;
  }
  var result = {};
  _react.Children.map(children, function (child) {
    return child;
  }).forEach(function (child) {
    result[child.key] = child;
  });
  return result;
}

/**
 * When you're adding or removing children some may be added or removed in the
 * same render pass. We want to show *both* since we want to simultaneously
 * animate elements in and out. This function takes a previous set of keys
 * and a new set of keys and merges them with its best guess of the correct
 * ordering. In the future we may expose some of the utilities in
 * ReactMultiChild to make this easy, but for now React itself does not
 * directly have this concept of the union of prevChildren and nextChildren
 * so we implement it here.
 *
 * @param {object} prev prev children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @param {object} next next children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @return {object} a key set that contains all keys in `prev` and all keys
 * in `next` in a reasonable order.
 */
function mergeChildMappings(prev, next) {
  prev = prev || {};
  next = next || {};

  function getValueForKey(key) {
    if (next.hasOwnProperty(key)) {
      return next[key];
    }

    return prev[key];
  }

  // For each key of `next`, the list of keys to insert before that key in
  // the combined list
  var nextKeysPending = {};

  var pendingKeys = [];
  for (var prevKey in prev) {
    if (next.hasOwnProperty(prevKey)) {
      if (pendingKeys.length) {
        nextKeysPending[prevKey] = pendingKeys;
        pendingKeys = [];
      }
    } else {
      pendingKeys.push(prevKey);
    }
  }

  var i = void 0;
  var childMapping = {};
  for (var nextKey in next) {
    if (nextKeysPending.hasOwnProperty(nextKey)) {
      for (i = 0; i < nextKeysPending[nextKey].length; i++) {
        var pendingNextKey = nextKeysPending[nextKey][i];
        childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
      }
    }
    childMapping[nextKey] = getValueForKey(nextKey);
  }

  // Finally, add the keys which didn't appear before any key in `next`
  for (i = 0; i < pendingKeys.length; i++) {
    childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
  }

  return childMapping;
}

/***/ }),

/***/ "./node_modules/react-tween-state/lib/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-tween-state/lib/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,n){ true?module.exports=n():undefined}(this,function(){return function(e){function n(r){if(t[r])return t[r].exports;var a=t[r]={exports:{},id:r,loaded:!1};return e[r].call(a.exports,a,a.exports,n),a.loaded=!0,a.exports}var t={};return n.m=e,n.c=t,n.p="",n(0)}({0:function(e,n,t){e.exports=t(90)},1:function(e,n){function t(){c=!1,o.length?s=o.concat(s):f=-1,s.length&&r()}function r(){if(!c){var e=setTimeout(t);c=!0;for(var n=s.length;n;){for(o=s,s=[];++f<n;)o&&o[f].run();f=-1,n=s.length}o=null,c=!1,clearTimeout(e)}}function a(e,n){this.fun=e,this.array=n}function u(){}var o,i=e.exports={},s=[],c=!1,f=-1;i.nextTick=function(e){var n=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)n[t-1]=arguments[t];s.push(new a(e,n)),1!==s.length||c||setTimeout(r,0)},a.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=u,i.addListener=u,i.once=u,i.off=u,i.removeListener=u,i.removeAllListeners=u,i.emit=u,i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},90:function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(n,"__esModule",{value:!0});var a=t(165),u=r(a),o=t(91),i=r(o),s="ADDITIVE",c=a.easeInOutQuad,f=300,l=0,h={ADDITIVE:"ADDITIVE",DESTRUCTIVE:"DESTRUCTIVE"},v={_rafID:null,getInitialState:function(){return{tweenQueue:[]}},componentWillUnmount:function(){i["default"].cancel(this._rafID),this._rafID=-1},tweenState:function(e,n){var t=this,r=n.easing,a=n.duration,u=n.delay,o=n.beginValue,v=n.endValue,d=n.onEnd,p=n.stackBehavior;this.setState(function(n){var I=n,w=void 0,g=void 0;if("string"==typeof e)w=e,g=e;else{for(var M=0;M<e.length-1;M++)I=I[e[M]];w=e[e.length-1],g=e.join("|")}var m={easing:r||c,duration:null==a?f:a,delay:null==u?l:u,beginValue:null==o?I[w]:o,endValue:v,onEnd:d,stackBehavior:p||s},x=n.tweenQueue;return m.stackBehavior===h.DESTRUCTIVE&&(x=n.tweenQueue.filter(function(e){return e.pathHash!==g})),x.push({pathHash:g,config:m,initTime:Date.now()+m.delay}),I[w]=m.endValue,1===x.length&&(t._rafID=(0,i["default"])(t._rafCb)),{tweenQueue:x}})},getTweeningValue:function(e){var n=this.state,t=void 0,r=void 0;if("string"==typeof e)t=n[e],r=e;else{t=n;for(var a=0;a<e.length;a++)t=t[e[a]];r=e.join("|")}for(var u=Date.now(),a=0;a<n.tweenQueue.length;a++){var o=n.tweenQueue[a],i=o.pathHash,s=o.initTime,c=o.config;if(i===r){var f=u-s>c.duration?c.duration:Math.max(0,u-s),l=0===c.duration?c.endValue:c.easing(f,c.beginValue,c.endValue,c.duration),h=l-c.endValue;t+=h}}return t},_rafCb:function(){var e=this.state;if(0!==e.tweenQueue.length){for(var n=Date.now(),t=[],r=0;r<e.tweenQueue.length;r++){var a=e.tweenQueue[r],u=a.initTime,o=a.config;n-u<o.duration?t.push(a):o.onEnd&&o.onEnd()}-1!==this._rafID&&(this.setState({tweenQueue:t}),this._rafID=(0,i["default"])(this._rafCb))}}};n["default"]={Mixin:v,easingTypes:u["default"],stackBehavior:h},e.exports=n["default"]},91:function(e,n,t){for(var r=t(92),a="undefined"==typeof window?{}:window,u=["moz","webkit"],o="AnimationFrame",i=a["request"+o],s=a["cancel"+o]||a["cancelRequest"+o],c=0;c<u.length&&!i;c++)i=a[u[c]+"Request"+o],s=a[u[c]+"Cancel"+o]||a[u[c]+"CancelRequest"+o];if(!i||!s){var f=0,l=0,h=[],v=1e3/60;i=function(e){if(0===h.length){var n=r(),t=Math.max(0,v-(n-f));f=t+n,setTimeout(function(){var e=h.slice(0);h.length=0;for(var n=0;n<e.length;n++)if(!e[n].cancelled)try{e[n].callback(f)}catch(t){setTimeout(function(){throw t},0)}},Math.round(t))}return h.push({handle:++l,callback:e,cancelled:!1}),l},s=function(e){for(var n=0;n<h.length;n++)h[n].handle===e&&(h[n].cancelled=!0)}}e.exports=function(e){return i.call(a,e)},e.exports.cancel=function(){s.apply(a,arguments)}},92:function(e,n,t){(function(n){(function(){var t,r,a;"undefined"!=typeof performance&&null!==performance&&performance.now?e.exports=function(){return performance.now()}:"undefined"!=typeof n&&null!==n&&n.hrtime?(e.exports=function(){return(t()-a)/1e6},r=n.hrtime,t=function(){var e;return e=r(),1e9*e[0]+e[1]},a=t()):Date.now?(e.exports=function(){return Date.now()-a},a=Date.now()):(e.exports=function(){return(new Date).getTime()-a},a=(new Date).getTime())}).call(this)}).call(n,t(1))},165:function(e,n){"use strict";var t={linear:function(e,n,t,r){var a=t-n;return a*e/r+n},easeInQuad:function(e,n,t,r){var a=t-n;return a*(e/=r)*e+n},easeOutQuad:function(e,n,t,r){var a=t-n;return-a*(e/=r)*(e-2)+n},easeInOutQuad:function(e,n,t,r){var a=t-n;return(e/=r/2)<1?a/2*e*e+n:-a/2*(--e*(e-2)-1)+n},easeInCubic:function(e,n,t,r){var a=t-n;return a*(e/=r)*e*e+n},easeOutCubic:function(e,n,t,r){var a=t-n;return a*((e=e/r-1)*e*e+1)+n},easeInOutCubic:function(e,n,t,r){var a=t-n;return(e/=r/2)<1?a/2*e*e*e+n:a/2*((e-=2)*e*e+2)+n},easeInQuart:function(e,n,t,r){var a=t-n;return a*(e/=r)*e*e*e+n},easeOutQuart:function(e,n,t,r){var a=t-n;return-a*((e=e/r-1)*e*e*e-1)+n},easeInOutQuart:function(e,n,t,r){var a=t-n;return(e/=r/2)<1?a/2*e*e*e*e+n:-a/2*((e-=2)*e*e*e-2)+n},easeInQuint:function(e,n,t,r){var a=t-n;return a*(e/=r)*e*e*e*e+n},easeOutQuint:function(e,n,t,r){var a=t-n;return a*((e=e/r-1)*e*e*e*e+1)+n},easeInOutQuint:function(e,n,t,r){var a=t-n;return(e/=r/2)<1?a/2*e*e*e*e*e+n:a/2*((e-=2)*e*e*e*e+2)+n},easeInSine:function(e,n,t,r){var a=t-n;return-a*Math.cos(e/r*(Math.PI/2))+a+n},easeOutSine:function(e,n,t,r){var a=t-n;return a*Math.sin(e/r*(Math.PI/2))+n},easeInOutSine:function(e,n,t,r){var a=t-n;return-a/2*(Math.cos(Math.PI*e/r)-1)+n},easeInExpo:function(e,n,t,r){var a=t-n;return 0==e?n:a*Math.pow(2,10*(e/r-1))+n},easeOutExpo:function(e,n,t,r){var a=t-n;return e==r?n+a:a*(-Math.pow(2,-10*e/r)+1)+n},easeInOutExpo:function(e,n,t,r){var a=t-n;return 0===e?n:e===r?n+a:(e/=r/2)<1?a/2*Math.pow(2,10*(e-1))+n:a/2*(-Math.pow(2,-10*--e)+2)+n},easeInCirc:function(e,n,t,r){var a=t-n;return-a*(Math.sqrt(1-(e/=r)*e)-1)+n},easeOutCirc:function(e,n,t,r){var a=t-n;return a*Math.sqrt(1-(e=e/r-1)*e)+n},easeInOutCirc:function(e,n,t,r){var a=t-n;return(e/=r/2)<1?-a/2*(Math.sqrt(1-e*e)-1)+n:a/2*(Math.sqrt(1-(e-=2)*e)+1)+n},easeInElastic:function(e,n,t,r){var a,u,o,i=t-n;return o=1.70158,u=0,a=i,0===e?n:1===(e/=r)?n+i:(u||(u=.3*r),a<Math.abs(i)?(a=i,o=u/4):o=u/(2*Math.PI)*Math.asin(i/a),-(a*Math.pow(2,10*(e-=1))*Math.sin((e*r-o)*(2*Math.PI)/u))+n)},easeOutElastic:function(e,n,t,r){var a,u,o,i=t-n;return o=1.70158,u=0,a=i,0===e?n:1===(e/=r)?n+i:(u||(u=.3*r),a<Math.abs(i)?(a=i,o=u/4):o=u/(2*Math.PI)*Math.asin(i/a),a*Math.pow(2,-10*e)*Math.sin((e*r-o)*(2*Math.PI)/u)+i+n)},easeInOutElastic:function(e,n,t,r){var a,u,o,i=t-n;return o=1.70158,u=0,a=i,0===e?n:2===(e/=r/2)?n+i:(u||(u=r*(.3*1.5)),a<Math.abs(i)?(a=i,o=u/4):o=u/(2*Math.PI)*Math.asin(i/a),1>e?-.5*(a*Math.pow(2,10*(e-=1))*Math.sin((e*r-o)*(2*Math.PI)/u))+n:a*Math.pow(2,-10*(e-=1))*Math.sin((e*r-o)*(2*Math.PI)/u)*.5+i+n)},easeInBack:function(e,n,t,r,a){var u=t-n;return void 0===a&&(a=1.70158),u*(e/=r)*e*((a+1)*e-a)+n},easeOutBack:function(e,n,t,r,a){var u=t-n;return void 0===a&&(a=1.70158),u*((e=e/r-1)*e*((a+1)*e+a)+1)+n},easeInOutBack:function(e,n,t,r,a){var u=t-n;return void 0===a&&(a=1.70158),(e/=r/2)<1?u/2*(e*e*(((a*=1.525)+1)*e-a))+n:u/2*((e-=2)*e*(((a*=1.525)+1)*e+a)+2)+n},easeInBounce:function(e,n,r,a){var u,o=r-n;return u=t.easeOutBounce(a-e,0,o,a),o-u+n},easeOutBounce:function(e,n,t,r){var a=t-n;return(e/=r)<1/2.75?a*(7.5625*e*e)+n:2/2.75>e?a*(7.5625*(e-=1.5/2.75)*e+.75)+n:2.5/2.75>e?a*(7.5625*(e-=2.25/2.75)*e+.9375)+n:a*(7.5625*(e-=2.625/2.75)*e+.984375)+n},easeInOutBounce:function(e,n,r,a){var u,o=r-n;return a/2>e?(u=t.easeInBounce(2*e,0,o,a),.5*u+n):(u=t.easeOutBounce(2*e-a,0,o,a),.5*u+.5*o+n)}};e.exports=t}})});

/***/ }),

/***/ "./node_modules/warning/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/warning/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = function() {};

if (true) {
  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
        '`warning(condition, format, ...args)` requires a warning ' +
        'message argument'
      );
    }

    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
      throw new Error(
        'The warning format should be able to uniquely identify this ' +
        'warning. Please, use a more descriptive format than: ' + format
      );
    }

    if (!condition) {
      var argIndex = 0;
      var message = 'Warning: ' +
        format.replace(/%s/g, function() {
          return args[argIndex++];
        });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch(x) {}
    }
  };
}

module.exports = warning;


/***/ }),

/***/ "./pages/Skills.js":
/*!*************************!*\
  !*** ./pages/Skills.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Skills; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _content_home_md__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../content/home.md */ "./content/home.md");
/* harmony import */ var _content_home_md__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_content_home_md__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_shuffle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-shuffle */ "./node_modules/react-shuffle/index.js");
/* harmony import */ var react_shuffle__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_shuffle__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Ramzi\\Desktop\\DEV\\Personal Projects\\ramzi.dev\\pages\\Skills.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function Skills() {
  _s();

  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("all"),
      filter = _useState[0],
      setFilter = _useState[1];

  var skills = _content_home_md__WEBPACK_IMPORTED_MODULE_1__["attributes"].skills;
  return __jsx("div", {
    className: "skills",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, __jsx("h1", {
    className: "skills_header",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, "Skills"), __jsx("div", {
    className: "skills_filter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: filter === "all" ? "skills_filter-tab active" : "skills_filter-tab",
    onClick: function onClick() {
      return setFilter("all");
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, "All"), __jsx("div", {
    className: filter === "front" ? "skills_filter-tab active" : "skills_filter-tab",
    onClick: function onClick() {
      return setFilter("front");
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, "Front-End"), __jsx("div", {
    className: filter === "back" ? "skills_filter-tab active" : "skills_filter-tab",
    onClick: function onClick() {
      return setFilter("back");
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, "Back-End"), __jsx("div", {
    className: filter === "other" ? "skills_filter-tab active" : "skills_filter-tab",
    onClick: function onClick() {
      return setFilter("other");
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }, "Other")), __jsx(react_shuffle__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "skills_section",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  }, skills.map(function (skill, key) {
    console.log(filter, skill.description, skill.name);
    var filteredClass = skill.description === filter ? " activePill" : "";
    var classname = filter === "all" ? "skills_pill" : "skills_pill" + filteredClass;
    return __jsx("div", {
      className: classname,
      key: key,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 15
      }
    }, skill.name);
  }))));
}

_s(Skills, "boPJerHaELAyf+PNkR+Y8+JetQg=");

_c = Skills;

var _c;

$RefreshReg$(_c, "Skills");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY2hhaW4tZnVuY3Rpb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvcG9seWZpbGxzL29iamVjdC1hc3NpZ24uanMgZnJvbSBkbGwtcmVmZXJlbmNlIGRsbF81MDMwZjM4N2QzMjhlNDQxNTc4NSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvY2hlY2tQcm9wVHlwZXMuanMgZnJvbSBkbGwtcmVmZXJlbmNlIGRsbF81MDMwZjM4N2QzMjhlNDQxNTc4NSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9mYWN0b3J5V2l0aFR5cGVDaGVja2Vycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0LmpzIGZyb20gZGxsLXJlZmVyZW5jZSBkbGxfNTAzMGYzODdkMzI4ZTQ0MTU3ODUiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWFkZG9ucy10cmFuc2l0aW9uLWdyb3VwL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1zaHVmZmxlL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1zaHVmZmxlL2xpYi9zaHVmZmxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC10cmFuc2l0aW9uLWdyb3VwL1RyYW5zaXRpb25Hcm91cC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtdHJhbnNpdGlvbi1ncm91cC91dGlscy9DaGlsZE1hcHBpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXR3ZWVuLXN0YXRlL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvd2FybmluZy9icm93c2VyLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL1NraWxscy5qcyJdLCJuYW1lcyI6WyJTa2lsbHMiLCJ1c2VTdGF0ZSIsImZpbHRlciIsInNldEZpbHRlciIsInNraWxscyIsImF0dHJpYnV0ZXMiLCJtYXAiLCJza2lsbCIsImtleSIsImNvbnNvbGUiLCJsb2ciLCJkZXNjcmlwdGlvbiIsIm5hbWUiLCJmaWx0ZXJlZENsYXNzIiwiY2xhc3NuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixTQUFTO0FBQzFCOztBQUVBLGtDQUFrQyxvQkFBb0I7O0FBRXREO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7O0FDbkJBLDRMOzs7Ozs7Ozs7OztBQ0FBLDhLOzs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWE7O0FBRWIsY0FBYyxtQkFBTyxDQUFDLGtEQUFVO0FBQ2hDLGFBQWEsbUJBQU8sQ0FBQyxnRkFBZTs7QUFFcEMsMkJBQTJCLG1CQUFPLENBQUMseUZBQTRCO0FBQy9ELHFCQUFxQixtQkFBTyxDQUFDLHFFQUFrQjs7QUFFL0M7QUFDQTs7QUFFQSxJQUFJLElBQXFDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQzs7QUFFMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQixjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLDZCQUE2QjtBQUM3QixRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsS0FBSztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULDRCQUE0QjtBQUM1QixPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxRQUFRLElBQXFDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsVUFBVSxLQUFxQztBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixzQkFBc0I7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFVLElBQXFDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscUJBQXFCLDJCQUEyQjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU0sS0FBcUMsNEZBQTRGLFNBQU07QUFDN0k7QUFDQTs7QUFFQSxtQkFBbUIsZ0NBQWdDO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQixnQ0FBZ0M7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7O0FDOWtCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEs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bWVudFxccGFnZXNcXGluZGV4LmpzLmExNjI2NzcwNGExYzBkN2VlMTNjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY2hhaW4oKXtcbiAgdmFyIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGhcbiAgdmFyIGFyZ3MgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKVxuICAgIGFyZ3NbaV0gPSBhcmd1bWVudHNbaV1cblxuICBhcmdzID0gYXJncy5maWx0ZXIoZnVuY3Rpb24oZm4peyByZXR1cm4gZm4gIT0gbnVsbCB9KVxuXG4gIGlmIChhcmdzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIHVuZGVmaW5lZFxuICBpZiAoYXJncy5sZW5ndGggPT09IDEpIHJldHVybiBhcmdzWzBdXG5cbiAgcmV0dXJuIGFyZ3MucmVkdWNlKGZ1bmN0aW9uKGN1cnJlbnQsIG5leHQpe1xuICAgIHJldHVybiBmdW5jdGlvbiBjaGFpbmVkRnVuY3Rpb24oKSB7XG4gICAgICBjdXJyZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICBuZXh0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfTtcbiAgfSlcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oLyohIGRsbC1yZWZlcmVuY2UgZGxsXzUwMzBmMzg3ZDMyOGU0NDE1Nzg1ICovIFwiZGxsLXJlZmVyZW5jZSBkbGxfNTAzMGYzODdkMzI4ZTQ0MTU3ODVcIikpKFwiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3BvbHlmaWxscy9vYmplY3QtYXNzaWduLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oLyohIGRsbC1yZWZlcmVuY2UgZGxsXzUwMzBmMzg3ZDMyOGU0NDE1Nzg1ICovIFwiZGxsLXJlZmVyZW5jZSBkbGxfNTAzMGYzODdkMzI4ZTQ0MTU3ODVcIikpKFwiLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9jaGVja1Byb3BUeXBlcy5qc1wiKTsiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0SXMgPSByZXF1aXJlKCdyZWFjdC1pcycpO1xudmFyIGFzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcblxudmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gcmVxdWlyZSgnLi9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQnKTtcbnZhciBjaGVja1Byb3BUeXBlcyA9IHJlcXVpcmUoJy4vY2hlY2tQcm9wVHlwZXMnKTtcblxudmFyIGhhcyA9IEZ1bmN0aW9uLmNhbGwuYmluZChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5KTtcbnZhciBwcmludFdhcm5pbmcgPSBmdW5jdGlvbigpIHt9O1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICBwcmludFdhcm5pbmcgPSBmdW5jdGlvbih0ZXh0KSB7XG4gICAgdmFyIG1lc3NhZ2UgPSAnV2FybmluZzogJyArIHRleHQ7XG4gICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIC8vIC0tLSBXZWxjb21lIHRvIGRlYnVnZ2luZyBSZWFjdCAtLS1cbiAgICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgeW91IGNhbiB1c2UgdGhpcyBzdGFja1xuICAgICAgLy8gdG8gZmluZCB0aGUgY2FsbHNpdGUgdGhhdCBjYXVzZWQgdGhpcyB3YXJuaW5nIHRvIGZpcmUuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfSBjYXRjaCAoeCkge31cbiAgfTtcbn1cblxuZnVuY3Rpb24gZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbCgpIHtcbiAgcmV0dXJuIG51bGw7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXNWYWxpZEVsZW1lbnQsIHRocm93T25EaXJlY3RBY2Nlc3MpIHtcbiAgLyogZ2xvYmFsIFN5bWJvbCAqL1xuICB2YXIgSVRFUkFUT1JfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuaXRlcmF0b3I7XG4gIHZhciBGQVVYX0lURVJBVE9SX1NZTUJPTCA9ICdAQGl0ZXJhdG9yJzsgLy8gQmVmb3JlIFN5bWJvbCBzcGVjLlxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBpdGVyYXRvciBtZXRob2QgZnVuY3Rpb24gY29udGFpbmVkIG9uIHRoZSBpdGVyYWJsZSBvYmplY3QuXG4gICAqXG4gICAqIEJlIHN1cmUgdG8gaW52b2tlIHRoZSBmdW5jdGlvbiB3aXRoIHRoZSBpdGVyYWJsZSBhcyBjb250ZXh0OlxuICAgKlxuICAgKiAgICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKG15SXRlcmFibGUpO1xuICAgKiAgICAgaWYgKGl0ZXJhdG9yRm4pIHtcbiAgICogICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKG15SXRlcmFibGUpO1xuICAgKiAgICAgICAuLi5cbiAgICogICAgIH1cbiAgICpcbiAgICogQHBhcmFtIHs/b2JqZWN0fSBtYXliZUl0ZXJhYmxlXG4gICAqIEByZXR1cm4gez9mdW5jdGlvbn1cbiAgICovXG4gIGZ1bmN0aW9uIGdldEl0ZXJhdG9yRm4obWF5YmVJdGVyYWJsZSkge1xuICAgIHZhciBpdGVyYXRvckZuID0gbWF5YmVJdGVyYWJsZSAmJiAoSVRFUkFUT1JfU1lNQk9MICYmIG1heWJlSXRlcmFibGVbSVRFUkFUT1JfU1lNQk9MXSB8fCBtYXliZUl0ZXJhYmxlW0ZBVVhfSVRFUkFUT1JfU1lNQk9MXSk7XG4gICAgaWYgKHR5cGVvZiBpdGVyYXRvckZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gaXRlcmF0b3JGbjtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ29sbGVjdGlvbiBvZiBtZXRob2RzIHRoYXQgYWxsb3cgZGVjbGFyYXRpb24gYW5kIHZhbGlkYXRpb24gb2YgcHJvcHMgdGhhdCBhcmVcbiAgICogc3VwcGxpZWQgdG8gUmVhY3QgY29tcG9uZW50cy4gRXhhbXBsZSB1c2FnZTpcbiAgICpcbiAgICogICB2YXIgUHJvcHMgPSByZXF1aXJlKCdSZWFjdFByb3BUeXBlcycpO1xuICAgKiAgIHZhciBNeUFydGljbGUgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAqICAgICBwcm9wVHlwZXM6IHtcbiAgICogICAgICAgLy8gQW4gb3B0aW9uYWwgc3RyaW5nIHByb3AgbmFtZWQgXCJkZXNjcmlwdGlvblwiLlxuICAgKiAgICAgICBkZXNjcmlwdGlvbjogUHJvcHMuc3RyaW5nLFxuICAgKlxuICAgKiAgICAgICAvLyBBIHJlcXVpcmVkIGVudW0gcHJvcCBuYW1lZCBcImNhdGVnb3J5XCIuXG4gICAqICAgICAgIGNhdGVnb3J5OiBQcm9wcy5vbmVPZihbJ05ld3MnLCdQaG90b3MnXSkuaXNSZXF1aXJlZCxcbiAgICpcbiAgICogICAgICAgLy8gQSBwcm9wIG5hbWVkIFwiZGlhbG9nXCIgdGhhdCByZXF1aXJlcyBhbiBpbnN0YW5jZSBvZiBEaWFsb2cuXG4gICAqICAgICAgIGRpYWxvZzogUHJvcHMuaW5zdGFuY2VPZihEaWFsb2cpLmlzUmVxdWlyZWRcbiAgICogICAgIH0sXG4gICAqICAgICByZW5kZXI6IGZ1bmN0aW9uKCkgeyAuLi4gfVxuICAgKiAgIH0pO1xuICAgKlxuICAgKiBBIG1vcmUgZm9ybWFsIHNwZWNpZmljYXRpb24gb2YgaG93IHRoZXNlIG1ldGhvZHMgYXJlIHVzZWQ6XG4gICAqXG4gICAqICAgdHlwZSA6PSBhcnJheXxib29sfGZ1bmN8b2JqZWN0fG51bWJlcnxzdHJpbmd8b25lT2YoWy4uLl0pfGluc3RhbmNlT2YoLi4uKVxuICAgKiAgIGRlY2wgOj0gUmVhY3RQcm9wVHlwZXMue3R5cGV9KC5pc1JlcXVpcmVkKT9cbiAgICpcbiAgICogRWFjaCBhbmQgZXZlcnkgZGVjbGFyYXRpb24gcHJvZHVjZXMgYSBmdW5jdGlvbiB3aXRoIHRoZSBzYW1lIHNpZ25hdHVyZS4gVGhpc1xuICAgKiBhbGxvd3MgdGhlIGNyZWF0aW9uIG9mIGN1c3RvbSB2YWxpZGF0aW9uIGZ1bmN0aW9ucy4gRm9yIGV4YW1wbGU6XG4gICAqXG4gICAqICB2YXIgTXlMaW5rID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgKiAgICBwcm9wVHlwZXM6IHtcbiAgICogICAgICAvLyBBbiBvcHRpb25hbCBzdHJpbmcgb3IgVVJJIHByb3AgbmFtZWQgXCJocmVmXCIuXG4gICAqICAgICAgaHJlZjogZnVuY3Rpb24ocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lKSB7XG4gICAqICAgICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgKiAgICAgICAgaWYgKHByb3BWYWx1ZSAhPSBudWxsICYmIHR5cGVvZiBwcm9wVmFsdWUgIT09ICdzdHJpbmcnICYmXG4gICAqICAgICAgICAgICAgIShwcm9wVmFsdWUgaW5zdGFuY2VvZiBVUkkpKSB7XG4gICAqICAgICAgICAgIHJldHVybiBuZXcgRXJyb3IoXG4gICAqICAgICAgICAgICAgJ0V4cGVjdGVkIGEgc3RyaW5nIG9yIGFuIFVSSSBmb3IgJyArIHByb3BOYW1lICsgJyBpbiAnICtcbiAgICogICAgICAgICAgICBjb21wb25lbnROYW1lXG4gICAqICAgICAgICAgICk7XG4gICAqICAgICAgICB9XG4gICAqICAgICAgfVxuICAgKiAgICB9LFxuICAgKiAgICByZW5kZXI6IGZ1bmN0aW9uKCkgey4uLn1cbiAgICogIH0pO1xuICAgKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG5cbiAgdmFyIEFOT05ZTU9VUyA9ICc8PGFub255bW91cz4+JztcblxuICAvLyBJbXBvcnRhbnQhXG4gIC8vIEtlZXAgdGhpcyBsaXN0IGluIHN5bmMgd2l0aCBwcm9kdWN0aW9uIHZlcnNpb24gaW4gYC4vZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zLmpzYC5cbiAgdmFyIFJlYWN0UHJvcFR5cGVzID0ge1xuICAgIGFycmF5OiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignYXJyYXknKSxcbiAgICBib29sOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignYm9vbGVhbicpLFxuICAgIGZ1bmM6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdmdW5jdGlvbicpLFxuICAgIG51bWJlcjogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ251bWJlcicpLFxuICAgIG9iamVjdDogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ29iamVjdCcpLFxuICAgIHN0cmluZzogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ3N0cmluZycpLFxuICAgIHN5bWJvbDogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ3N5bWJvbCcpLFxuXG4gICAgYW55OiBjcmVhdGVBbnlUeXBlQ2hlY2tlcigpLFxuICAgIGFycmF5T2Y6IGNyZWF0ZUFycmF5T2ZUeXBlQ2hlY2tlcixcbiAgICBlbGVtZW50OiBjcmVhdGVFbGVtZW50VHlwZUNoZWNrZXIoKSxcbiAgICBlbGVtZW50VHlwZTogY3JlYXRlRWxlbWVudFR5cGVUeXBlQ2hlY2tlcigpLFxuICAgIGluc3RhbmNlT2Y6IGNyZWF0ZUluc3RhbmNlVHlwZUNoZWNrZXIsXG4gICAgbm9kZTogY3JlYXRlTm9kZUNoZWNrZXIoKSxcbiAgICBvYmplY3RPZjogY3JlYXRlT2JqZWN0T2ZUeXBlQ2hlY2tlcixcbiAgICBvbmVPZjogY3JlYXRlRW51bVR5cGVDaGVja2VyLFxuICAgIG9uZU9mVHlwZTogY3JlYXRlVW5pb25UeXBlQ2hlY2tlcixcbiAgICBzaGFwZTogY3JlYXRlU2hhcGVUeXBlQ2hlY2tlcixcbiAgICBleGFjdDogY3JlYXRlU3RyaWN0U2hhcGVUeXBlQ2hlY2tlcixcbiAgfTtcblxuICAvKipcbiAgICogaW5saW5lZCBPYmplY3QuaXMgcG9seWZpbGwgdG8gYXZvaWQgcmVxdWlyaW5nIGNvbnN1bWVycyBzaGlwIHRoZWlyIG93blxuICAgKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9PYmplY3QvaXNcbiAgICovXG4gIC8qZXNsaW50LWRpc2FibGUgbm8tc2VsZi1jb21wYXJlKi9cbiAgZnVuY3Rpb24gaXMoeCwgeSkge1xuICAgIC8vIFNhbWVWYWx1ZSBhbGdvcml0aG1cbiAgICBpZiAoeCA9PT0geSkge1xuICAgICAgLy8gU3RlcHMgMS01LCA3LTEwXG4gICAgICAvLyBTdGVwcyA2LmItNi5lOiArMCAhPSAtMFxuICAgICAgcmV0dXJuIHggIT09IDAgfHwgMSAvIHggPT09IDEgLyB5O1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBTdGVwIDYuYTogTmFOID09IE5hTlxuICAgICAgcmV0dXJuIHggIT09IHggJiYgeSAhPT0geTtcbiAgICB9XG4gIH1cbiAgLyplc2xpbnQtZW5hYmxlIG5vLXNlbGYtY29tcGFyZSovXG5cbiAgLyoqXG4gICAqIFdlIHVzZSBhbiBFcnJvci1saWtlIG9iamVjdCBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSBhcyBwZW9wbGUgbWF5IGNhbGxcbiAgICogUHJvcFR5cGVzIGRpcmVjdGx5IGFuZCBpbnNwZWN0IHRoZWlyIG91dHB1dC4gSG93ZXZlciwgd2UgZG9uJ3QgdXNlIHJlYWxcbiAgICogRXJyb3JzIGFueW1vcmUuIFdlIGRvbid0IGluc3BlY3QgdGhlaXIgc3RhY2sgYW55d2F5LCBhbmQgY3JlYXRpbmcgdGhlbVxuICAgKiBpcyBwcm9oaWJpdGl2ZWx5IGV4cGVuc2l2ZSBpZiB0aGV5IGFyZSBjcmVhdGVkIHRvbyBvZnRlbiwgc3VjaCBhcyB3aGF0XG4gICAqIGhhcHBlbnMgaW4gb25lT2ZUeXBlKCkgZm9yIGFueSB0eXBlIGJlZm9yZSB0aGUgb25lIHRoYXQgbWF0Y2hlZC5cbiAgICovXG4gIGZ1bmN0aW9uIFByb3BUeXBlRXJyb3IobWVzc2FnZSkge1xuICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgdGhpcy5zdGFjayA9ICcnO1xuICB9XG4gIC8vIE1ha2UgYGluc3RhbmNlb2YgRXJyb3JgIHN0aWxsIHdvcmsgZm9yIHJldHVybmVkIGVycm9ycy5cbiAgUHJvcFR5cGVFcnJvci5wcm90b3R5cGUgPSBFcnJvci5wcm90b3R5cGU7XG5cbiAgZnVuY3Rpb24gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgdmFyIG1hbnVhbFByb3BUeXBlQ2FsbENhY2hlID0ge307XG4gICAgICB2YXIgbWFudWFsUHJvcFR5cGVXYXJuaW5nQ291bnQgPSAwO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjaGVja1R5cGUoaXNSZXF1aXJlZCwgcHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBzZWNyZXQpIHtcbiAgICAgIGNvbXBvbmVudE5hbWUgPSBjb21wb25lbnROYW1lIHx8IEFOT05ZTU9VUztcbiAgICAgIHByb3BGdWxsTmFtZSA9IHByb3BGdWxsTmFtZSB8fCBwcm9wTmFtZTtcblxuICAgICAgaWYgKHNlY3JldCAhPT0gUmVhY3RQcm9wVHlwZXNTZWNyZXQpIHtcbiAgICAgICAgaWYgKHRocm93T25EaXJlY3RBY2Nlc3MpIHtcbiAgICAgICAgICAvLyBOZXcgYmVoYXZpb3Igb25seSBmb3IgdXNlcnMgb2YgYHByb3AtdHlwZXNgIHBhY2thZ2VcbiAgICAgICAgICB2YXIgZXJyID0gbmV3IEVycm9yKFxuICAgICAgICAgICAgJ0NhbGxpbmcgUHJvcFR5cGVzIHZhbGlkYXRvcnMgZGlyZWN0bHkgaXMgbm90IHN1cHBvcnRlZCBieSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UuICcgK1xuICAgICAgICAgICAgJ1VzZSBgUHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzKClgIHRvIGNhbGwgdGhlbS4gJyArXG4gICAgICAgICAgICAnUmVhZCBtb3JlIGF0IGh0dHA6Ly9mYi5tZS91c2UtY2hlY2stcHJvcC10eXBlcydcbiAgICAgICAgICApO1xuICAgICAgICAgIGVyci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgfSBlbHNlIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIC8vIE9sZCBiZWhhdmlvciBmb3IgcGVvcGxlIHVzaW5nIFJlYWN0LlByb3BUeXBlc1xuICAgICAgICAgIHZhciBjYWNoZUtleSA9IGNvbXBvbmVudE5hbWUgKyAnOicgKyBwcm9wTmFtZTtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAhbWFudWFsUHJvcFR5cGVDYWxsQ2FjaGVbY2FjaGVLZXldICYmXG4gICAgICAgICAgICAvLyBBdm9pZCBzcGFtbWluZyB0aGUgY29uc29sZSBiZWNhdXNlIHRoZXkgYXJlIG9mdGVuIG5vdCBhY3Rpb25hYmxlIGV4Y2VwdCBmb3IgbGliIGF1dGhvcnNcbiAgICAgICAgICAgIG1hbnVhbFByb3BUeXBlV2FybmluZ0NvdW50IDwgM1xuICAgICAgICAgICkge1xuICAgICAgICAgICAgcHJpbnRXYXJuaW5nKFxuICAgICAgICAgICAgICAnWW91IGFyZSBtYW51YWxseSBjYWxsaW5nIGEgUmVhY3QuUHJvcFR5cGVzIHZhbGlkYXRpb24gJyArXG4gICAgICAgICAgICAgICdmdW5jdGlvbiBmb3IgdGhlIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2AgcHJvcCBvbiBgJyArIGNvbXBvbmVudE5hbWUgICsgJ2AuIFRoaXMgaXMgZGVwcmVjYXRlZCAnICtcbiAgICAgICAgICAgICAgJ2FuZCB3aWxsIHRocm93IGluIHRoZSBzdGFuZGFsb25lIGBwcm9wLXR5cGVzYCBwYWNrYWdlLiAnICtcbiAgICAgICAgICAgICAgJ1lvdSBtYXkgYmUgc2VlaW5nIHRoaXMgd2FybmluZyBkdWUgdG8gYSB0aGlyZC1wYXJ0eSBQcm9wVHlwZXMgJyArXG4gICAgICAgICAgICAgICdsaWJyYXJ5LiBTZWUgaHR0cHM6Ly9mYi5tZS9yZWFjdC13YXJuaW5nLWRvbnQtY2FsbC1wcm9wdHlwZXMgJyArICdmb3IgZGV0YWlscy4nXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgbWFudWFsUHJvcFR5cGVDYWxsQ2FjaGVbY2FjaGVLZXldID0gdHJ1ZTtcbiAgICAgICAgICAgIG1hbnVhbFByb3BUeXBlV2FybmluZ0NvdW50Kys7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAocHJvcHNbcHJvcE5hbWVdID09IG51bGwpIHtcbiAgICAgICAgaWYgKGlzUmVxdWlyZWQpIHtcbiAgICAgICAgICBpZiAocHJvcHNbcHJvcE5hbWVdID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1RoZSAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2AgaXMgbWFya2VkIGFzIHJlcXVpcmVkICcgKyAoJ2luIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBidXQgaXRzIHZhbHVlIGlzIGBudWxsYC4nKSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignVGhlICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBpcyBtYXJrZWQgYXMgcmVxdWlyZWQgaW4gJyArICgnYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGJ1dCBpdHMgdmFsdWUgaXMgYHVuZGVmaW5lZGAuJykpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGNoYWluZWRDaGVja1R5cGUgPSBjaGVja1R5cGUuYmluZChudWxsLCBmYWxzZSk7XG4gICAgY2hhaW5lZENoZWNrVHlwZS5pc1JlcXVpcmVkID0gY2hlY2tUeXBlLmJpbmQobnVsbCwgdHJ1ZSk7XG5cbiAgICByZXR1cm4gY2hhaW5lZENoZWNrVHlwZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKGV4cGVjdGVkVHlwZSkge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgc2VjcmV0KSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gZXhwZWN0ZWRUeXBlKSB7XG4gICAgICAgIC8vIGBwcm9wVmFsdWVgIGJlaW5nIGluc3RhbmNlIG9mLCBzYXksIGRhdGUvcmVnZXhwLCBwYXNzIHRoZSAnb2JqZWN0J1xuICAgICAgICAvLyBjaGVjaywgYnV0IHdlIGNhbiBvZmZlciBhIG1vcmUgcHJlY2lzZSBlcnJvciBtZXNzYWdlIGhlcmUgcmF0aGVyIHRoYW5cbiAgICAgICAgLy8gJ29mIHR5cGUgYG9iamVjdGAnLlxuICAgICAgICB2YXIgcHJlY2lzZVR5cGUgPSBnZXRQcmVjaXNlVHlwZShwcm9wVmFsdWUpO1xuXG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByZWNpc2VUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkICcpICsgKCdgJyArIGV4cGVjdGVkVHlwZSArICdgLicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlQW55VHlwZUNoZWNrZXIoKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKGVtcHR5RnVuY3Rpb25UaGF0UmV0dXJuc051bGwpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlQXJyYXlPZlR5cGVDaGVja2VyKHR5cGVDaGVja2VyKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBpZiAodHlwZW9mIHR5cGVDaGVja2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignUHJvcGVydHkgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiBjb21wb25lbnQgYCcgKyBjb21wb25lbnROYW1lICsgJ2AgaGFzIGludmFsaWQgUHJvcFR5cGUgbm90YXRpb24gaW5zaWRlIGFycmF5T2YuJyk7XG4gICAgICB9XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJvcFR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYW4gYXJyYXkuJykpO1xuICAgICAgfVxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wVmFsdWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGVycm9yID0gdHlwZUNoZWNrZXIocHJvcFZhbHVlLCBpLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lICsgJ1snICsgaSArICddJywgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVFbGVtZW50VHlwZUNoZWNrZXIoKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudChwcm9wVmFsdWUpKSB7XG4gICAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByb3BUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGEgc2luZ2xlIFJlYWN0RWxlbWVudC4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRUeXBlVHlwZUNoZWNrZXIoKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgaWYgKCFSZWFjdElzLmlzVmFsaWRFbGVtZW50VHlwZShwcm9wVmFsdWUpKSB7XG4gICAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByb3BUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGEgc2luZ2xlIFJlYWN0RWxlbWVudCB0eXBlLicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlSW5zdGFuY2VUeXBlQ2hlY2tlcihleHBlY3RlZENsYXNzKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBpZiAoIShwcm9wc1twcm9wTmFtZV0gaW5zdGFuY2VvZiBleHBlY3RlZENsYXNzKSkge1xuICAgICAgICB2YXIgZXhwZWN0ZWRDbGFzc05hbWUgPSBleHBlY3RlZENsYXNzLm5hbWUgfHwgQU5PTllNT1VTO1xuICAgICAgICB2YXIgYWN0dWFsQ2xhc3NOYW1lID0gZ2V0Q2xhc3NOYW1lKHByb3BzW3Byb3BOYW1lXSk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIGFjdHVhbENsYXNzTmFtZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCAnKSArICgnaW5zdGFuY2Ugb2YgYCcgKyBleHBlY3RlZENsYXNzTmFtZSArICdgLicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlRW51bVR5cGVDaGVja2VyKGV4cGVjdGVkVmFsdWVzKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGV4cGVjdGVkVmFsdWVzKSkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgcHJpbnRXYXJuaW5nKFxuICAgICAgICAgICAgJ0ludmFsaWQgYXJndW1lbnRzIHN1cHBsaWVkIHRvIG9uZU9mLCBleHBlY3RlZCBhbiBhcnJheSwgZ290ICcgKyBhcmd1bWVudHMubGVuZ3RoICsgJyBhcmd1bWVudHMuICcgK1xuICAgICAgICAgICAgJ0EgY29tbW9uIG1pc3Rha2UgaXMgdG8gd3JpdGUgb25lT2YoeCwgeSwgeikgaW5zdGVhZCBvZiBvbmVPZihbeCwgeSwgel0pLidcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHByaW50V2FybmluZygnSW52YWxpZCBhcmd1bWVudCBzdXBwbGllZCB0byBvbmVPZiwgZXhwZWN0ZWQgYW4gYXJyYXkuJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBlbXB0eUZ1bmN0aW9uVGhhdFJldHVybnNOdWxsO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZXhwZWN0ZWRWYWx1ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGlzKHByb3BWYWx1ZSwgZXhwZWN0ZWRWYWx1ZXNbaV0pKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIHZhbHVlc1N0cmluZyA9IEpTT04uc3RyaW5naWZ5KGV4cGVjdGVkVmFsdWVzLCBmdW5jdGlvbiByZXBsYWNlcihrZXksIHZhbHVlKSB7XG4gICAgICAgIHZhciB0eXBlID0gZ2V0UHJlY2lzZVR5cGUodmFsdWUpO1xuICAgICAgICBpZiAodHlwZSA9PT0gJ3N5bWJvbCcpIHtcbiAgICAgICAgICByZXR1cm4gU3RyaW5nKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdmFsdWUgYCcgKyBTdHJpbmcocHJvcFZhbHVlKSArICdgICcgKyAoJ3N1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBvbmUgb2YgJyArIHZhbHVlc1N0cmluZyArICcuJykpO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlT2JqZWN0T2ZUeXBlQ2hlY2tlcih0eXBlQ2hlY2tlcikge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgaWYgKHR5cGVvZiB0eXBlQ2hlY2tlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1Byb3BlcnR5IGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgY29tcG9uZW50IGAnICsgY29tcG9uZW50TmFtZSArICdgIGhhcyBpbnZhbGlkIFByb3BUeXBlIG5vdGF0aW9uIGluc2lkZSBvYmplY3RPZi4nKTtcbiAgICAgIH1cbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgaWYgKHByb3BUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhbiBvYmplY3QuJykpO1xuICAgICAgfVxuICAgICAgZm9yICh2YXIga2V5IGluIHByb3BWYWx1ZSkge1xuICAgICAgICBpZiAoaGFzKHByb3BWYWx1ZSwga2V5KSkge1xuICAgICAgICAgIHZhciBlcnJvciA9IHR5cGVDaGVja2VyKHByb3BWYWx1ZSwga2V5LCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lICsgJy4nICsga2V5LCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlVW5pb25UeXBlQ2hlY2tlcihhcnJheU9mVHlwZUNoZWNrZXJzKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGFycmF5T2ZUeXBlQ2hlY2tlcnMpKSB7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gcHJpbnRXYXJuaW5nKCdJbnZhbGlkIGFyZ3VtZW50IHN1cHBsaWVkIHRvIG9uZU9mVHlwZSwgZXhwZWN0ZWQgYW4gaW5zdGFuY2Ugb2YgYXJyYXkuJykgOiB2b2lkIDA7XG4gICAgICByZXR1cm4gZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbDtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5T2ZUeXBlQ2hlY2tlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBjaGVja2VyID0gYXJyYXlPZlR5cGVDaGVja2Vyc1tpXTtcbiAgICAgIGlmICh0eXBlb2YgY2hlY2tlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBwcmludFdhcm5pbmcoXG4gICAgICAgICAgJ0ludmFsaWQgYXJndW1lbnQgc3VwcGxpZWQgdG8gb25lT2ZUeXBlLiBFeHBlY3RlZCBhbiBhcnJheSBvZiBjaGVjayBmdW5jdGlvbnMsIGJ1dCAnICtcbiAgICAgICAgICAncmVjZWl2ZWQgJyArIGdldFBvc3RmaXhGb3JUeXBlV2FybmluZyhjaGVja2VyKSArICcgYXQgaW5kZXggJyArIGkgKyAnLidcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIGVtcHR5RnVuY3Rpb25UaGF0UmV0dXJuc051bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5T2ZUeXBlQ2hlY2tlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGNoZWNrZXIgPSBhcnJheU9mVHlwZUNoZWNrZXJzW2ldO1xuICAgICAgICBpZiAoY2hlY2tlcihwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIFJlYWN0UHJvcFR5cGVzU2VjcmV0KSA9PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBzdXBwbGllZCB0byAnICsgKCdgJyArIGNvbXBvbmVudE5hbWUgKyAnYC4nKSk7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVOb2RlQ2hlY2tlcigpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICghaXNOb2RlKHByb3BzW3Byb3BOYW1lXSkpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBzdXBwbGllZCB0byAnICsgKCdgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYSBSZWFjdE5vZGUuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVTaGFwZVR5cGVDaGVja2VyKHNoYXBlVHlwZXMpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgaWYgKHByb3BUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgYCcgKyBwcm9wVHlwZSArICdgICcgKyAoJ3N1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBgb2JqZWN0YC4nKSk7XG4gICAgICB9XG4gICAgICBmb3IgKHZhciBrZXkgaW4gc2hhcGVUeXBlcykge1xuICAgICAgICB2YXIgY2hlY2tlciA9IHNoYXBlVHlwZXNba2V5XTtcbiAgICAgICAgaWYgKCFjaGVja2VyKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGVycm9yID0gY2hlY2tlcihwcm9wVmFsdWUsIGtleSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICcuJyArIGtleSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlU3RyaWN0U2hhcGVUeXBlQ2hlY2tlcihzaGFwZVR5cGVzKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlIGAnICsgcHJvcFR5cGUgKyAnYCAnICsgKCdzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYG9iamVjdGAuJykpO1xuICAgICAgfVxuICAgICAgLy8gV2UgbmVlZCB0byBjaGVjayBhbGwga2V5cyBpbiBjYXNlIHNvbWUgYXJlIHJlcXVpcmVkIGJ1dCBtaXNzaW5nIGZyb21cbiAgICAgIC8vIHByb3BzLlxuICAgICAgdmFyIGFsbEtleXMgPSBhc3NpZ24oe30sIHByb3BzW3Byb3BOYW1lXSwgc2hhcGVUeXBlcyk7XG4gICAgICBmb3IgKHZhciBrZXkgaW4gYWxsS2V5cykge1xuICAgICAgICB2YXIgY2hlY2tlciA9IHNoYXBlVHlwZXNba2V5XTtcbiAgICAgICAgaWYgKCFjaGVja2VyKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKFxuICAgICAgICAgICAgJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIGtleSBgJyArIGtleSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLicgK1xuICAgICAgICAgICAgJ1xcbkJhZCBvYmplY3Q6ICcgKyBKU09OLnN0cmluZ2lmeShwcm9wc1twcm9wTmFtZV0sIG51bGwsICcgICcpICtcbiAgICAgICAgICAgICdcXG5WYWxpZCBrZXlzOiAnICsgIEpTT04uc3RyaW5naWZ5KE9iamVjdC5rZXlzKHNoYXBlVHlwZXMpLCBudWxsLCAnICAnKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGVycm9yID0gY2hlY2tlcihwcm9wVmFsdWUsIGtleSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICcuJyArIGtleSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBpc05vZGUocHJvcFZhbHVlKSB7XG4gICAgc3dpdGNoICh0eXBlb2YgcHJvcFZhbHVlKSB7XG4gICAgICBjYXNlICdudW1iZXInOlxuICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgIGNhc2UgJ3VuZGVmaW5lZCc6XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICAgIHJldHVybiAhcHJvcFZhbHVlO1xuICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocHJvcFZhbHVlKSkge1xuICAgICAgICAgIHJldHVybiBwcm9wVmFsdWUuZXZlcnkoaXNOb2RlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvcFZhbHVlID09PSBudWxsIHx8IGlzVmFsaWRFbGVtZW50KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihwcm9wVmFsdWUpO1xuICAgICAgICBpZiAoaXRlcmF0b3JGbikge1xuICAgICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChwcm9wVmFsdWUpO1xuICAgICAgICAgIHZhciBzdGVwO1xuICAgICAgICAgIGlmIChpdGVyYXRvckZuICE9PSBwcm9wVmFsdWUuZW50cmllcykge1xuICAgICAgICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICAgICAgICBpZiAoIWlzTm9kZShzdGVwLnZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBJdGVyYXRvciB3aWxsIHByb3ZpZGUgZW50cnkgW2ssdl0gdHVwbGVzIHJhdGhlciB0aGFuIHZhbHVlcy5cbiAgICAgICAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgICAgICAgdmFyIGVudHJ5ID0gc3RlcC52YWx1ZTtcbiAgICAgICAgICAgICAgaWYgKGVudHJ5KSB7XG4gICAgICAgICAgICAgICAgaWYgKCFpc05vZGUoZW50cnlbMV0pKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGlzU3ltYm9sKHByb3BUeXBlLCBwcm9wVmFsdWUpIHtcbiAgICAvLyBOYXRpdmUgU3ltYm9sLlxuICAgIGlmIChwcm9wVHlwZSA9PT0gJ3N5bWJvbCcpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8vIGZhbHN5IHZhbHVlIGNhbid0IGJlIGEgU3ltYm9sXG4gICAgaWYgKCFwcm9wVmFsdWUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyAxOS40LjMuNSBTeW1ib2wucHJvdG90eXBlW0BAdG9TdHJpbmdUYWddID09PSAnU3ltYm9sJ1xuICAgIGlmIChwcm9wVmFsdWVbJ0BAdG9TdHJpbmdUYWcnXSA9PT0gJ1N5bWJvbCcpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8vIEZhbGxiYWNrIGZvciBub24tc3BlYyBjb21wbGlhbnQgU3ltYm9scyB3aGljaCBhcmUgcG9seWZpbGxlZC5cbiAgICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBwcm9wVmFsdWUgaW5zdGFuY2VvZiBTeW1ib2wpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vIEVxdWl2YWxlbnQgb2YgYHR5cGVvZmAgYnV0IHdpdGggc3BlY2lhbCBoYW5kbGluZyBmb3IgYXJyYXkgYW5kIHJlZ2V4cC5cbiAgZnVuY3Rpb24gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKSB7XG4gICAgdmFyIHByb3BUeXBlID0gdHlwZW9mIHByb3BWYWx1ZTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShwcm9wVmFsdWUpKSB7XG4gICAgICByZXR1cm4gJ2FycmF5JztcbiAgICB9XG4gICAgaWYgKHByb3BWYWx1ZSBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgICAgLy8gT2xkIHdlYmtpdHMgKGF0IGxlYXN0IHVudGlsIEFuZHJvaWQgNC4wKSByZXR1cm4gJ2Z1bmN0aW9uJyByYXRoZXIgdGhhblxuICAgICAgLy8gJ29iamVjdCcgZm9yIHR5cGVvZiBhIFJlZ0V4cC4gV2UnbGwgbm9ybWFsaXplIHRoaXMgaGVyZSBzbyB0aGF0IC9ibGEvXG4gICAgICAvLyBwYXNzZXMgUHJvcFR5cGVzLm9iamVjdC5cbiAgICAgIHJldHVybiAnb2JqZWN0JztcbiAgICB9XG4gICAgaWYgKGlzU3ltYm9sKHByb3BUeXBlLCBwcm9wVmFsdWUpKSB7XG4gICAgICByZXR1cm4gJ3N5bWJvbCc7XG4gICAgfVxuICAgIHJldHVybiBwcm9wVHlwZTtcbiAgfVxuXG4gIC8vIFRoaXMgaGFuZGxlcyBtb3JlIHR5cGVzIHRoYW4gYGdldFByb3BUeXBlYC4gT25seSB1c2VkIGZvciBlcnJvciBtZXNzYWdlcy5cbiAgLy8gU2VlIGBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcmAuXG4gIGZ1bmN0aW9uIGdldFByZWNpc2VUeXBlKHByb3BWYWx1ZSkge1xuICAgIGlmICh0eXBlb2YgcHJvcFZhbHVlID09PSAndW5kZWZpbmVkJyB8fCBwcm9wVmFsdWUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiAnJyArIHByb3BWYWx1ZTtcbiAgICB9XG4gICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICBpZiAocHJvcFR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICBpZiAocHJvcFZhbHVlIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICByZXR1cm4gJ2RhdGUnO1xuICAgICAgfSBlbHNlIGlmIChwcm9wVmFsdWUgaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICAgICAgcmV0dXJuICdyZWdleHAnO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcHJvcFR5cGU7XG4gIH1cblxuICAvLyBSZXR1cm5zIGEgc3RyaW5nIHRoYXQgaXMgcG9zdGZpeGVkIHRvIGEgd2FybmluZyBhYm91dCBhbiBpbnZhbGlkIHR5cGUuXG4gIC8vIEZvciBleGFtcGxlLCBcInVuZGVmaW5lZFwiIG9yIFwib2YgdHlwZSBhcnJheVwiXG4gIGZ1bmN0aW9uIGdldFBvc3RmaXhGb3JUeXBlV2FybmluZyh2YWx1ZSkge1xuICAgIHZhciB0eXBlID0gZ2V0UHJlY2lzZVR5cGUodmFsdWUpO1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSAnYXJyYXknOlxuICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgcmV0dXJuICdhbiAnICsgdHlwZTtcbiAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgY2FzZSAnZGF0ZSc6XG4gICAgICBjYXNlICdyZWdleHAnOlxuICAgICAgICByZXR1cm4gJ2EgJyArIHR5cGU7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gdHlwZTtcbiAgICB9XG4gIH1cblxuICAvLyBSZXR1cm5zIGNsYXNzIG5hbWUgb2YgdGhlIG9iamVjdCwgaWYgYW55LlxuICBmdW5jdGlvbiBnZXRDbGFzc05hbWUocHJvcFZhbHVlKSB7XG4gICAgaWYgKCFwcm9wVmFsdWUuY29uc3RydWN0b3IgfHwgIXByb3BWYWx1ZS5jb25zdHJ1Y3Rvci5uYW1lKSB7XG4gICAgICByZXR1cm4gQU5PTllNT1VTO1xuICAgIH1cbiAgICByZXR1cm4gcHJvcFZhbHVlLmNvbnN0cnVjdG9yLm5hbWU7XG4gIH1cblxuICBSZWFjdFByb3BUeXBlcy5jaGVja1Byb3BUeXBlcyA9IGNoZWNrUHJvcFR5cGVzO1xuICBSZWFjdFByb3BUeXBlcy5yZXNldFdhcm5pbmdDYWNoZSA9IGNoZWNrUHJvcFR5cGVzLnJlc2V0V2FybmluZ0NhY2hlO1xuICBSZWFjdFByb3BUeXBlcy5Qcm9wVHlwZXMgPSBSZWFjdFByb3BUeXBlcztcblxuICByZXR1cm4gUmVhY3RQcm9wVHlwZXM7XG59O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YXIgUmVhY3RJcyA9IHJlcXVpcmUoJ3JlYWN0LWlzJyk7XG5cbiAgLy8gQnkgZXhwbGljaXRseSB1c2luZyBgcHJvcC10eXBlc2AgeW91IGFyZSBvcHRpbmcgaW50byBuZXcgZGV2ZWxvcG1lbnQgYmVoYXZpb3IuXG4gIC8vIGh0dHA6Ly9mYi5tZS9wcm9wLXR5cGVzLWluLXByb2RcbiAgdmFyIHRocm93T25EaXJlY3RBY2Nlc3MgPSB0cnVlO1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZmFjdG9yeVdpdGhUeXBlQ2hlY2tlcnMnKShSZWFjdElzLmlzRWxlbWVudCwgdGhyb3dPbkRpcmVjdEFjY2Vzcyk7XG59IGVsc2Uge1xuICAvLyBCeSBleHBsaWNpdGx5IHVzaW5nIGBwcm9wLXR5cGVzYCB5b3UgYXJlIG9wdGluZyBpbnRvIG5ldyBwcm9kdWN0aW9uIGJlaGF2aW9yLlxuICAvLyBodHRwOi8vZmIubWUvcHJvcC10eXBlcy1pbi1wcm9kXG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9mYWN0b3J5V2l0aFRocm93aW5nU2hpbXMnKSgpO1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgZGxsLXJlZmVyZW5jZSBkbGxfNTAzMGYzODdkMzI4ZTQ0MTU3ODUgKi8gXCJkbGwtcmVmZXJlbmNlIGRsbF81MDMwZjM4N2QzMjhlNDQxNTc4NVwiKSkoXCIuL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldC5qc1wiKTsiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCdyZWFjdC10cmFuc2l0aW9uLWdyb3VwL1RyYW5zaXRpb25Hcm91cCcpO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgU2h1ZmZsZSA9IHJlcXVpcmUoJy4vbGliL3NodWZmbGUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBTaHVmZmxlO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcmVhY3REb20gPSByZXF1aXJlKCdyZWFjdC1kb20nKTtcblxudmFyIF9yZWFjdERvbTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdERvbSk7XG5cbnZhciBfb2JqZWN0QXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xuXG52YXIgX29iamVjdEFzc2lnbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9vYmplY3RBc3NpZ24pO1xuXG52YXIgX3JlYWN0VHdlZW5TdGF0ZSA9IHJlcXVpcmUoJ3JlYWN0LXR3ZWVuLXN0YXRlJyk7XG5cbnZhciBfcmVhY3RUd2VlblN0YXRlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0VHdlZW5TdGF0ZSk7XG5cbnZhciBfcmVhY3RBZGRvbnNUcmFuc2l0aW9uR3JvdXAgPSByZXF1aXJlKCdyZWFjdC1hZGRvbnMtdHJhbnNpdGlvbi1ncm91cCcpO1xuXG52YXIgX3JlYWN0QWRkb25zVHJhbnNpdGlvbkdyb3VwMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0QWRkb25zVHJhbnNpdGlvbkdyb3VwKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfSAvKiBlc2xpbnQgbm8tdW51c2VkLXZhcnM6MCAqL1xuLypnbG9iYWwgd2luZG93LCBkb2N1bWVudCwgZ2V0Q29tcHV0ZWRTdHlsZSovXG5cbnZhciBDbG9uZXMgPSBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ1NodWZmbGVDbG9uZXMnLFxuXG4gIF9jaGlsZHJlbldpdGhQb3NpdGlvbnM6IGZ1bmN0aW9uIF9jaGlsZHJlbldpdGhQb3NpdGlvbnMoKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIHZhciBjaGlsZHJlbiA9IFtdO1xuICAgIF9yZWFjdDIuZGVmYXVsdC5DaGlsZHJlbi5mb3JFYWNoKHRoaXMucHJvcHMuY2hpbGRyZW4sIGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgdmFyIHN0eWxlID0gX3RoaXMucHJvcHMucG9zaXRpb25zW2NoaWxkLmtleV07XG4gICAgICB2YXIga2V5ID0gY2hpbGQua2V5O1xuICAgICAgY2hpbGRyZW4ucHVzaChfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChDbG9uZSwge1xuICAgICAgICBjaGlsZDogY2hpbGQsXG4gICAgICAgIHN0eWxlOiBzdHlsZSxcbiAgICAgICAga2V5OiBrZXksXG4gICAgICAgIGluaXRpYWw6IF90aGlzLnByb3BzLmluaXRpYWwsXG4gICAgICAgIGZhZGU6IF90aGlzLnByb3BzLmZhZGUsXG4gICAgICAgIHNjYWxlOiBfdGhpcy5wcm9wcy5zY2FsZSxcbiAgICAgICAgZHVyYXRpb246IF90aGlzLnByb3BzLmR1cmF0aW9uIH0pKTtcbiAgICB9KTtcbiAgICByZXR1cm4gY2hpbGRyZW4uc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgcmV0dXJuIGEua2V5IDwgYi5rZXkgPyAtMSA6IGEua2V5ID4gYi5rZXkgPyAxIDogMDtcbiAgICB9KTtcbiAgfSxcbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICB7IGNsYXNzTmFtZTogJ1NodWZmbGVDbG9uZXMnIH0sXG4gICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgX3JlYWN0QWRkb25zVHJhbnNpdGlvbkdyb3VwMi5kZWZhdWx0LFxuICAgICAgICBudWxsLFxuICAgICAgICB0aGlzLl9jaGlsZHJlbldpdGhQb3NpdGlvbnMoKVxuICAgICAgKVxuICAgICk7XG4gIH1cbn0pO1xuXG52YXIgQ2xvbmUgPSBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlQ2xhc3Moe1xuICBtaXhpbnM6IFtfcmVhY3RUd2VlblN0YXRlMi5kZWZhdWx0Lk1peGluXSxcbiAgZGlzcGxheU5hbWU6ICdTaHVmZmxlQ2xvbmUnLFxuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdG9wOiB0aGlzLnByb3BzLnN0eWxlID8gdGhpcy5wcm9wcy5zdHlsZS50b3AgOiAwLFxuICAgICAgbGVmdDogdGhpcy5wcm9wcy5zdHlsZSA/IHRoaXMucHJvcHMuc3R5bGUubGVmdCA6IDAsXG4gICAgICBvcGFjaXR5OiAxLFxuICAgICAgdHJhbnNmb3JtOiAxXG4gICAgfTtcbiAgfSxcbiAgY29tcG9uZW50V2lsbEFwcGVhcjogZnVuY3Rpb24gY29tcG9uZW50V2lsbEFwcGVhcihjYikge1xuICAgIHRoaXMudHdlZW5TdGF0ZSgnb3BhY2l0eScsIHtcbiAgICAgIGVhc2luZzogX3JlYWN0VHdlZW5TdGF0ZTIuZGVmYXVsdC5lYXNpbmdUeXBlcy5lYXNlT3V0U2luZSxcbiAgICAgIGR1cmF0aW9uOiB0aGlzLnByb3BzLmR1cmF0aW9uLFxuICAgICAgYmVnaW5WYWx1ZTogdGhpcy5wcm9wcy5pbml0aWFsID8gMCA6IDEsXG4gICAgICBlbmRWYWx1ZTogMSxcbiAgICAgIG9uRW5kOiBjYlxuICAgIH0pO1xuICB9LFxuICBjb21wb25lbnRXaWxsRW50ZXI6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxFbnRlcihjYikge1xuICAgIHRoaXMudHdlZW5TdGF0ZSgnb3BhY2l0eScsIHtcbiAgICAgIGVhc2luZzogX3JlYWN0VHdlZW5TdGF0ZTIuZGVmYXVsdC5lYXNpbmdUeXBlcy5lYXNlT3V0U2luZSxcbiAgICAgIGR1cmF0aW9uOiB0aGlzLnByb3BzLmR1cmF0aW9uLFxuICAgICAgYmVnaW5WYWx1ZTogMCxcbiAgICAgIGVuZFZhbHVlOiAxLFxuICAgICAgb25FbmQ6IGNiXG4gICAgfSk7XG4gIH0sXG4gIGNvbXBvbmVudFdpbGxMZWF2ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbExlYXZlKGNiKSB7XG4gICAgdGhpcy50d2VlblN0YXRlKCdvcGFjaXR5Jywge1xuICAgICAgZWFzaW5nOiBfcmVhY3RUd2VlblN0YXRlMi5kZWZhdWx0LmVhc2luZ1R5cGVzLmVhc2VPdXRTaW5lLFxuICAgICAgZHVyYXRpb246IHRoaXMucHJvcHMuZHVyYXRpb24sXG4gICAgICBlbmRWYWx1ZTogMCxcbiAgICAgIG9uRW5kOiBmdW5jdGlvbiBvbkVuZCgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjYigpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gVGhpcyB0cnkgY2F0Y2ggaGFuZGxlcyBjb21wb25lbnQgdW1vdW50aW5nIGp1bXBpbmcgdGhlIGd1blxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHM6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgdGhpcy50d2VlblN0YXRlKCd0b3AnLCB7XG4gICAgICBlYXNpbmc6IF9yZWFjdFR3ZWVuU3RhdGUyLmRlZmF1bHQuZWFzaW5nVHlwZXMuZWFzZU91dFNpbmUsXG4gICAgICBkdXJhdGlvbjogbmV4dFByb3BzLmR1cmF0aW9uLFxuICAgICAgZW5kVmFsdWU6IG5leHRQcm9wcy5zdHlsZS50b3BcbiAgICB9KTtcbiAgICB0aGlzLnR3ZWVuU3RhdGUoJ2xlZnQnLCB7XG4gICAgICBlYXNpbmc6IF9yZWFjdFR3ZWVuU3RhdGUyLmRlZmF1bHQuZWFzaW5nVHlwZXMuZWFzZU91dFNpbmUsXG4gICAgICBkdXJhdGlvbjogbmV4dFByb3BzLmR1cmF0aW9uLFxuICAgICAgZW5kVmFsdWU6IG5leHRQcm9wcy5zdHlsZS5sZWZ0XG4gICAgfSk7XG4gIH0sXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBzdHlsZSA9IHt9O1xuICAgIGlmICh0aGlzLnByb3BzLnN0eWxlKSB7XG4gICAgICBzdHlsZSA9IHtcbiAgICAgICAgdG9wOiB0aGlzLmdldFR3ZWVuaW5nVmFsdWUoJ3RvcCcpLFxuICAgICAgICBsZWZ0OiB0aGlzLmdldFR3ZWVuaW5nVmFsdWUoJ2xlZnQnKSxcbiAgICAgICAgb3BhY2l0eTogdGhpcy5wcm9wcy5mYWRlID8gdGhpcy5nZXRUd2VlbmluZ1ZhbHVlKCdvcGFjaXR5JykgOiAxLFxuICAgICAgICB0cmFuc2Zvcm06IHRoaXMucHJvcHMuc2NhbGUgPyAnc2NhbGUoJyArIHRoaXMuZ2V0VHdlZW5pbmdWYWx1ZSgnb3BhY2l0eScpICsgJyknIDogMCxcbiAgICAgICAgdHJhbnNmb3JtT3JpZ2luOiAnY2VudGVyIGNlbnRlcicsXG4gICAgICAgIHdpZHRoOiB0aGlzLnByb3BzLnN0eWxlLndpZHRoLFxuICAgICAgICBoZWlnaHQ6IHRoaXMucHJvcHMuc3R5bGUuaGVpZ2h0LFxuICAgICAgICBwb3NpdGlvbjogdGhpcy5wcm9wcy5zdHlsZS5wb3NpdGlvblxuICAgICAgfTtcbiAgICB9XG4gICAgdmFyIGtleSA9IHRoaXMucHJvcHMua2V5O1xuICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY2xvbmVFbGVtZW50KHRoaXMucHJvcHMuY2hpbGQsIHsgc3R5bGU6IHN0eWxlLCBrZXk6IGtleSB9KTtcbiAgfVxufSk7XG5cbnZhciBTaHVmZmxlID0gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUNsYXNzKHtcblxuICBkaXNwbGF5TmFtZTogJ1NodWZmbGUnLFxuXG4gIHByb3BUeXBlczoge1xuICAgIGR1cmF0aW9uOiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLm51bWJlcixcbiAgICBzY2FsZTogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5ib29sLFxuICAgIGZhZGU6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMuYm9vbCxcbiAgICBpbml0aWFsOiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLmJvb2xcbiAgfSxcblxuICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZHVyYXRpb246IDMwMCxcbiAgICAgIHNjYWxlOiB0cnVlLFxuICAgICAgZmFkZTogdHJ1ZSxcbiAgICAgIGluaXRpYWw6IGZhbHNlXG4gICAgfTtcbiAgfSxcbiAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGFuaW1hdGluZzogZmFsc2UsXG4gICAgICByZWFkeTogZmFsc2VcbiAgICB9O1xuICB9LFxuICBjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5fbWFrZVBvcnRhbCgpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLl9yZW5kZXJDbG9uZXNJbml0aWFsbHkpO1xuICB9LFxuICBjb21wb25lbnRXaWxsVW5tb3VudDogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgX3JlYWN0RG9tMi5kZWZhdWx0LnVubW91bnRDb21wb25lbnRBdE5vZGUodGhpcy5fcG9ydGFsTm9kZSk7XG4gICAgX3JlYWN0RG9tMi5kZWZhdWx0LmZpbmRET01Ob2RlKHRoaXMucmVmcy5jb250YWluZXIpLnJlbW92ZUNoaWxkKHRoaXMuX3BvcnRhbE5vZGUpO1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLl9yZW5kZXJDbG9uZXNJbml0aWFsbHkpO1xuICB9LFxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgIHRoaXMuX3N0YXJ0QW5pbWF0aW9uKG5leHRQcm9wcyk7XG4gIH0sXG4gIGNvbXBvbmVudERpZFVwZGF0ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgaWYgKHRoaXMuc3RhdGUucmVhZHkgPT09IGZhbHNlKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgcmVhZHk6IHRydWUgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpczIuX3JlbmRlckNsb25lc0luaXRpYWxseSgpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3JlbmRlckNsb25lc1RvTmV3UG9zaXRpb25zKHRoaXMucHJvcHMpO1xuICAgIH1cbiAgfSxcbiAgX21ha2VQb3J0YWw6IGZ1bmN0aW9uIF9tYWtlUG9ydGFsKCkge1xuICAgIHRoaXMuX3BvcnRhbE5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aGlzLl9wb3J0YWxOb2RlLnN0eWxlLmxlZnQgPSAnMHB4JztcbiAgICB0aGlzLl9wb3J0YWxOb2RlLnN0eWxlLnRvcCA9ICcwcHgnO1xuICAgIHRoaXMuX3BvcnRhbE5vZGUuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgIF9yZWFjdERvbTIuZGVmYXVsdC5maW5kRE9NTm9kZSh0aGlzLnJlZnMuY29udGFpbmVyKS5hcHBlbmRDaGlsZCh0aGlzLl9wb3J0YWxOb2RlKTtcbiAgfSxcbiAgX2FkZFRyYW5zaXRpb25FbmRFdmVudDogZnVuY3Rpb24gX2FkZFRyYW5zaXRpb25FbmRFdmVudCgpIHtcbiAgICBzZXRUaW1lb3V0KHRoaXMuX2ZpbmlzaEFuaW1hdGlvbiwgdGhpcy5wcm9wcy5kdXJhdGlvbik7XG4gIH0sXG4gIF9zdGFydEFuaW1hdGlvbjogZnVuY3Rpb24gX3N0YXJ0QW5pbWF0aW9uKG5leHRQcm9wcykge1xuICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgaWYgKHRoaXMuc3RhdGUuYW5pbWF0aW5nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGNsb25lUHJvcHMgPSAoMCwgX29iamVjdEFzc2lnbjIuZGVmYXVsdCkoe30sIG5leHRQcm9wcywge1xuICAgICAgcG9zaXRpb25zOiB0aGlzLl9nZXRQb3NpdGlvbnMoKSxcbiAgICAgIGluaXRpYWw6IHRoaXMucHJvcHMuaW5pdGlhbCxcbiAgICAgIGZhZGU6IHRoaXMucHJvcHMuZmFkZSxcbiAgICAgIHNjYWxlOiB0aGlzLnByb3BzLnNjYWxlLFxuICAgICAgZHVyYXRpb246IHRoaXMucHJvcHMuZHVyYXRpb25cbiAgICB9KTtcbiAgICB0aGlzLl9yZW5kZXJDbG9uZXMoY2xvbmVQcm9wcywgZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMzLl9hZGRUcmFuc2l0aW9uRW5kRXZlbnQoKTtcbiAgICAgIF90aGlzMy5zZXRTdGF0ZSh7IGFuaW1hdGluZzogdHJ1ZSB9KTtcbiAgICB9KTtcbiAgfSxcbiAgX3JlbmRlckNsb25lc1RvTmV3UG9zaXRpb25zOiBmdW5jdGlvbiBfcmVuZGVyQ2xvbmVzVG9OZXdQb3NpdGlvbnMocHJvcHMpIHtcbiAgICB2YXIgY2xvbmVQcm9wcyA9ICgwLCBfb2JqZWN0QXNzaWduMi5kZWZhdWx0KSh7fSwgcHJvcHMsIHtcbiAgICAgIHBvc2l0aW9uczogdGhpcy5fZ2V0UG9zaXRpb25zKCksXG4gICAgICBpbml0aWFsOiB0aGlzLnByb3BzLmluaXRpYWwsXG4gICAgICBmYWRlOiB0aGlzLnByb3BzLmZhZGUsXG4gICAgICBzY2FsZTogdGhpcy5wcm9wcy5zY2FsZSxcbiAgICAgIGR1cmF0aW9uOiB0aGlzLnByb3BzLmR1cmF0aW9uXG4gICAgfSk7XG4gICAgdGhpcy5fcmVuZGVyQ2xvbmVzKGNsb25lUHJvcHMpO1xuICB9LFxuICBfZmluaXNoQW5pbWF0aW9uOiBmdW5jdGlvbiBfZmluaXNoQW5pbWF0aW9uKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBhbmltYXRpbmc6IGZhbHNlIH0pO1xuICB9LFxuICBfZ2V0UG9zaXRpb25zOiBmdW5jdGlvbiBfZ2V0UG9zaXRpb25zKCkge1xuICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gICAgdmFyIHBvc2l0aW9ucyA9IHt9O1xuICAgIF9yZWFjdDIuZGVmYXVsdC5DaGlsZHJlbi5mb3JFYWNoKHRoaXMucHJvcHMuY2hpbGRyZW4sIGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgdmFyIHJlZiA9IGNoaWxkLmtleTtcbiAgICAgIHZhciBub2RlID0gX3JlYWN0RG9tMi5kZWZhdWx0LmZpbmRET01Ob2RlKF90aGlzNC5yZWZzW3JlZl0pO1xuICAgICAgdmFyIHJlY3QgPSBub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgdmFyIGNvbXB1dGVkU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKG5vZGUpO1xuICAgICAgdmFyIG1hcmdpblRvcCA9IHBhcnNlSW50KGNvbXB1dGVkU3R5bGUubWFyZ2luVG9wLCAxMCk7XG4gICAgICB2YXIgbWFyZ2luTGVmdCA9IHBhcnNlSW50KGNvbXB1dGVkU3R5bGUubWFyZ2luTGVmdCwgMTApO1xuICAgICAgdmFyIHBvc2l0aW9uID0ge1xuICAgICAgICB0b3A6IG5vZGUub2Zmc2V0VG9wIC0gbWFyZ2luVG9wLFxuICAgICAgICBsZWZ0OiBub2RlLm9mZnNldExlZnQgLSBtYXJnaW5MZWZ0LFxuICAgICAgICB3aWR0aDogcmVjdC53aWR0aCxcbiAgICAgICAgaGVpZ2h0OiByZWN0LmhlaWdodCxcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgIG9wYWNpdHk6IDFcbiAgICAgIH07XG4gICAgICBwb3NpdGlvbnNbcmVmXSA9IHBvc2l0aW9uO1xuICAgIH0pO1xuICAgIHJldHVybiBwb3NpdGlvbnM7XG4gIH0sXG4gIF9yZW5kZXJDbG9uZXNJbml0aWFsbHk6IGZ1bmN0aW9uIF9yZW5kZXJDbG9uZXNJbml0aWFsbHkoKSB7XG4gICAgdmFyIGNsb25lUHJvcHMgPSAoMCwgX29iamVjdEFzc2lnbjIuZGVmYXVsdCkoe30sIHRoaXMucHJvcHMsIHtcbiAgICAgIHBvc2l0aW9uczogdGhpcy5fZ2V0UG9zaXRpb25zKCksXG4gICAgICBpbml0aWFsOiB0aGlzLnByb3BzLmluaXRpYWwsXG4gICAgICBmYWRlOiB0aGlzLnByb3BzLmZhZGUsXG4gICAgICBzY2FsZTogdGhpcy5wcm9wcy5zY2FsZSxcbiAgICAgIGR1cmF0aW9uOiB0aGlzLnByb3BzLmR1cmF0aW9uXG4gICAgfSk7XG4gICAgX3JlYWN0RG9tMi5kZWZhdWx0LnVuc3RhYmxlX3JlbmRlclN1YnRyZWVJbnRvQ29udGFpbmVyKHRoaXMsIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KENsb25lcywgY2xvbmVQcm9wcyksIHRoaXMuX3BvcnRhbE5vZGUpO1xuICAgIHRoaXMuc2V0U3RhdGUoeyByZWFkeTogdHJ1ZSB9KTtcbiAgfSxcbiAgX3JlbmRlckNsb25lczogZnVuY3Rpb24gX3JlbmRlckNsb25lcyhwcm9wcywgY2IpIHtcbiAgICBfcmVhY3REb20yLmRlZmF1bHQudW5zdGFibGVfcmVuZGVyU3VidHJlZUludG9Db250YWluZXIodGhpcywgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQ2xvbmVzLCBwcm9wcyksIHRoaXMuX3BvcnRhbE5vZGUsIGNiKTtcbiAgfSxcbiAgX2NoaWxkcmVuV2l0aFJlZnM6IGZ1bmN0aW9uIF9jaGlsZHJlbldpdGhSZWZzKCkge1xuICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuQ2hpbGRyZW4ubWFwKHRoaXMucHJvcHMuY2hpbGRyZW4sIGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jbG9uZUVsZW1lbnQoY2hpbGQsIHsgcmVmOiBjaGlsZC5rZXkgfSk7XG4gICAgfSk7XG4gIH0sXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICBpbml0aWFsID0gX3Byb3BzLmluaXRpYWwsXG4gICAgICAgIGZhZGUgPSBfcHJvcHMuZmFkZSxcbiAgICAgICAgZHVyYXRpb24gPSBfcHJvcHMuZHVyYXRpb24sXG4gICAgICAgIHByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9wcm9wcywgWydpbml0aWFsJywgJ2ZhZGUnLCAnZHVyYXRpb24nXSk7XG5cbiAgICB2YXIgc2hvd0NvbnRhaW5lciA9IGluaXRpYWwgPyAwIDogMTtcbiAgICBpZiAodGhpcy5zdGF0ZS5yZWFkeSkge1xuICAgICAgc2hvd0NvbnRhaW5lciA9IDA7XG4gICAgfVxuICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICdkaXYnLFxuICAgICAgX2V4dGVuZHMoeyByZWY6ICdjb250YWluZXInLCBzdHlsZTogeyBwb3NpdGlvbjogJ3JlbGF0aXZlJyB9IH0sIHByb3BzKSxcbiAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnZGl2JyxcbiAgICAgICAgeyBzdHlsZTogeyBvcGFjaXR5OiBzaG93Q29udGFpbmVyIH0gfSxcbiAgICAgICAgdGhpcy5fY2hpbGRyZW5XaXRoUmVmcygpXG4gICAgICApXG4gICAgKTtcbiAgfVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFNodWZmbGU7IiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2NoYWluRnVuY3Rpb24gPSByZXF1aXJlKCdjaGFpbi1mdW5jdGlvbicpO1xuXG52YXIgX2NoYWluRnVuY3Rpb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2hhaW5GdW5jdGlvbik7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbnZhciBfd2FybmluZyA9IHJlcXVpcmUoJ3dhcm5pbmcnKTtcblxudmFyIF93YXJuaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3dhcm5pbmcpO1xuXG52YXIgX0NoaWxkTWFwcGluZyA9IHJlcXVpcmUoJy4vdXRpbHMvQ2hpbGRNYXBwaW5nJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIHByb3BUeXBlcyA9IHtcbiAgY29tcG9uZW50OiBfcHJvcFR5cGVzMi5kZWZhdWx0LmFueSxcbiAgY2hpbGRGYWN0b3J5OiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIGNoaWxkcmVuOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm5vZGVcbn07XG5cbnZhciBkZWZhdWx0UHJvcHMgPSB7XG4gIGNvbXBvbmVudDogJ3NwYW4nLFxuICBjaGlsZEZhY3Rvcnk6IGZ1bmN0aW9uIGNoaWxkRmFjdG9yeShjaGlsZCkge1xuICAgIHJldHVybiBjaGlsZDtcbiAgfVxufTtcblxudmFyIFRyYW5zaXRpb25Hcm91cCA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhUcmFuc2l0aW9uR3JvdXAsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFRyYW5zaXRpb25Hcm91cChwcm9wcywgY29udGV4dCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUcmFuc2l0aW9uR3JvdXApO1xuXG4gICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX1JlYWN0JENvbXBvbmVudC5jYWxsKHRoaXMsIHByb3BzLCBjb250ZXh0KSk7XG5cbiAgICBfdGhpcy5wZXJmb3JtQXBwZWFyID0gZnVuY3Rpb24gKGtleSwgY29tcG9uZW50KSB7XG4gICAgICBfdGhpcy5jdXJyZW50bHlUcmFuc2l0aW9uaW5nS2V5c1trZXldID0gdHJ1ZTtcblxuICAgICAgaWYgKGNvbXBvbmVudC5jb21wb25lbnRXaWxsQXBwZWFyKSB7XG4gICAgICAgIGNvbXBvbmVudC5jb21wb25lbnRXaWxsQXBwZWFyKF90aGlzLl9oYW5kbGVEb25lQXBwZWFyaW5nLmJpbmQoX3RoaXMsIGtleSwgY29tcG9uZW50KSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBfdGhpcy5faGFuZGxlRG9uZUFwcGVhcmluZyhrZXksIGNvbXBvbmVudCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLl9oYW5kbGVEb25lQXBwZWFyaW5nID0gZnVuY3Rpb24gKGtleSwgY29tcG9uZW50KSB7XG4gICAgICBpZiAoY29tcG9uZW50LmNvbXBvbmVudERpZEFwcGVhcikge1xuICAgICAgICBjb21wb25lbnQuY29tcG9uZW50RGlkQXBwZWFyKCk7XG4gICAgICB9XG5cbiAgICAgIGRlbGV0ZSBfdGhpcy5jdXJyZW50bHlUcmFuc2l0aW9uaW5nS2V5c1trZXldO1xuXG4gICAgICB2YXIgY3VycmVudENoaWxkTWFwcGluZyA9ICgwLCBfQ2hpbGRNYXBwaW5nLmdldENoaWxkTWFwcGluZykoX3RoaXMucHJvcHMuY2hpbGRyZW4pO1xuXG4gICAgICBpZiAoIWN1cnJlbnRDaGlsZE1hcHBpbmcgfHwgIWN1cnJlbnRDaGlsZE1hcHBpbmcuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAvLyBUaGlzIHdhcyByZW1vdmVkIGJlZm9yZSBpdCBoYWQgZnVsbHkgYXBwZWFyZWQuIFJlbW92ZSBpdC5cbiAgICAgICAgX3RoaXMucGVyZm9ybUxlYXZlKGtleSwgY29tcG9uZW50KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMucGVyZm9ybUVudGVyID0gZnVuY3Rpb24gKGtleSwgY29tcG9uZW50KSB7XG4gICAgICBfdGhpcy5jdXJyZW50bHlUcmFuc2l0aW9uaW5nS2V5c1trZXldID0gdHJ1ZTtcblxuICAgICAgaWYgKGNvbXBvbmVudC5jb21wb25lbnRXaWxsRW50ZXIpIHtcbiAgICAgICAgY29tcG9uZW50LmNvbXBvbmVudFdpbGxFbnRlcihfdGhpcy5faGFuZGxlRG9uZUVudGVyaW5nLmJpbmQoX3RoaXMsIGtleSwgY29tcG9uZW50KSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBfdGhpcy5faGFuZGxlRG9uZUVudGVyaW5nKGtleSwgY29tcG9uZW50KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMuX2hhbmRsZURvbmVFbnRlcmluZyA9IGZ1bmN0aW9uIChrZXksIGNvbXBvbmVudCkge1xuICAgICAgaWYgKGNvbXBvbmVudC5jb21wb25lbnREaWRFbnRlcikge1xuICAgICAgICBjb21wb25lbnQuY29tcG9uZW50RGlkRW50ZXIoKTtcbiAgICAgIH1cblxuICAgICAgZGVsZXRlIF90aGlzLmN1cnJlbnRseVRyYW5zaXRpb25pbmdLZXlzW2tleV07XG5cbiAgICAgIHZhciBjdXJyZW50Q2hpbGRNYXBwaW5nID0gKDAsIF9DaGlsZE1hcHBpbmcuZ2V0Q2hpbGRNYXBwaW5nKShfdGhpcy5wcm9wcy5jaGlsZHJlbik7XG5cbiAgICAgIGlmICghY3VycmVudENoaWxkTWFwcGluZyB8fCAhY3VycmVudENoaWxkTWFwcGluZy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIC8vIFRoaXMgd2FzIHJlbW92ZWQgYmVmb3JlIGl0IGhhZCBmdWxseSBlbnRlcmVkLiBSZW1vdmUgaXQuXG4gICAgICAgIF90aGlzLnBlcmZvcm1MZWF2ZShrZXksIGNvbXBvbmVudCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLnBlcmZvcm1MZWF2ZSA9IGZ1bmN0aW9uIChrZXksIGNvbXBvbmVudCkge1xuICAgICAgX3RoaXMuY3VycmVudGx5VHJhbnNpdGlvbmluZ0tleXNba2V5XSA9IHRydWU7XG5cbiAgICAgIGlmIChjb21wb25lbnQuY29tcG9uZW50V2lsbExlYXZlKSB7XG4gICAgICAgIGNvbXBvbmVudC5jb21wb25lbnRXaWxsTGVhdmUoX3RoaXMuX2hhbmRsZURvbmVMZWF2aW5nLmJpbmQoX3RoaXMsIGtleSwgY29tcG9uZW50KSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBOb3RlIHRoYXQgdGhpcyBpcyBzb21ld2hhdCBkYW5nZXJvdXMgYi9jIGl0IGNhbGxzIHNldFN0YXRlKClcbiAgICAgICAgLy8gYWdhaW4sIGVmZmVjdGl2ZWx5IG11dGF0aW5nIHRoZSBjb21wb25lbnQgYmVmb3JlIGFsbCB0aGUgd29ya1xuICAgICAgICAvLyBpcyBkb25lLlxuICAgICAgICBfdGhpcy5faGFuZGxlRG9uZUxlYXZpbmcoa2V5LCBjb21wb25lbnQpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5faGFuZGxlRG9uZUxlYXZpbmcgPSBmdW5jdGlvbiAoa2V5LCBjb21wb25lbnQpIHtcbiAgICAgIGlmIChjb21wb25lbnQuY29tcG9uZW50RGlkTGVhdmUpIHtcbiAgICAgICAgY29tcG9uZW50LmNvbXBvbmVudERpZExlYXZlKCk7XG4gICAgICB9XG5cbiAgICAgIGRlbGV0ZSBfdGhpcy5jdXJyZW50bHlUcmFuc2l0aW9uaW5nS2V5c1trZXldO1xuXG4gICAgICB2YXIgY3VycmVudENoaWxkTWFwcGluZyA9ICgwLCBfQ2hpbGRNYXBwaW5nLmdldENoaWxkTWFwcGluZykoX3RoaXMucHJvcHMuY2hpbGRyZW4pO1xuXG4gICAgICBpZiAoY3VycmVudENoaWxkTWFwcGluZyAmJiBjdXJyZW50Q2hpbGRNYXBwaW5nLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgLy8gVGhpcyBlbnRlcmVkIGFnYWluIGJlZm9yZSBpdCBmdWxseSBsZWZ0LiBBZGQgaXQgYWdhaW4uXG4gICAgICAgIF90aGlzLmtleXNUb0VudGVyLnB1c2goa2V5KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIF90aGlzLnNldFN0YXRlKGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgICAgICAgIHZhciBuZXdDaGlsZHJlbiA9IF9leHRlbmRzKHt9LCBzdGF0ZS5jaGlsZHJlbik7XG4gICAgICAgICAgZGVsZXRlIG5ld0NoaWxkcmVuW2tleV07XG4gICAgICAgICAgcmV0dXJuIHsgY2hpbGRyZW46IG5ld0NoaWxkcmVuIH07XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5jaGlsZFJlZnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuXG4gICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBjaGlsZHJlbjogKDAsIF9DaGlsZE1hcHBpbmcuZ2V0Q2hpbGRNYXBwaW5nKShwcm9wcy5jaGlsZHJlbilcbiAgICB9O1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIFRyYW5zaXRpb25Hcm91cC5wcm90b3R5cGUuY29tcG9uZW50V2lsbE1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIHRoaXMuY3VycmVudGx5VHJhbnNpdGlvbmluZ0tleXMgPSB7fTtcbiAgICB0aGlzLmtleXNUb0VudGVyID0gW107XG4gICAgdGhpcy5rZXlzVG9MZWF2ZSA9IFtdO1xuICB9O1xuXG4gIFRyYW5zaXRpb25Hcm91cC5wcm90b3R5cGUuY29tcG9uZW50RGlkTW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB2YXIgaW5pdGlhbENoaWxkTWFwcGluZyA9IHRoaXMuc3RhdGUuY2hpbGRyZW47XG4gICAgZm9yICh2YXIga2V5IGluIGluaXRpYWxDaGlsZE1hcHBpbmcpIHtcbiAgICAgIGlmIChpbml0aWFsQ2hpbGRNYXBwaW5nW2tleV0pIHtcbiAgICAgICAgdGhpcy5wZXJmb3JtQXBwZWFyKGtleSwgdGhpcy5jaGlsZFJlZnNba2V5XSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIFRyYW5zaXRpb25Hcm91cC5wcm90b3R5cGUuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgdmFyIG5leHRDaGlsZE1hcHBpbmcgPSAoMCwgX0NoaWxkTWFwcGluZy5nZXRDaGlsZE1hcHBpbmcpKG5leHRQcm9wcy5jaGlsZHJlbik7XG4gICAgdmFyIHByZXZDaGlsZE1hcHBpbmcgPSB0aGlzLnN0YXRlLmNoaWxkcmVuO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBjaGlsZHJlbjogKDAsIF9DaGlsZE1hcHBpbmcubWVyZ2VDaGlsZE1hcHBpbmdzKShwcmV2Q2hpbGRNYXBwaW5nLCBuZXh0Q2hpbGRNYXBwaW5nKVxuICAgIH0pO1xuXG4gICAgZm9yICh2YXIga2V5IGluIG5leHRDaGlsZE1hcHBpbmcpIHtcbiAgICAgIHZhciBoYXNQcmV2ID0gcHJldkNoaWxkTWFwcGluZyAmJiBwcmV2Q2hpbGRNYXBwaW5nLmhhc093blByb3BlcnR5KGtleSk7XG4gICAgICBpZiAobmV4dENoaWxkTWFwcGluZ1trZXldICYmICFoYXNQcmV2ICYmICF0aGlzLmN1cnJlbnRseVRyYW5zaXRpb25pbmdLZXlzW2tleV0pIHtcbiAgICAgICAgdGhpcy5rZXlzVG9FbnRlci5wdXNoKGtleSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2tleSBpbiBwcmV2Q2hpbGRNYXBwaW5nKSB7XG4gICAgICB2YXIgaGFzTmV4dCA9IG5leHRDaGlsZE1hcHBpbmcgJiYgbmV4dENoaWxkTWFwcGluZy5oYXNPd25Qcm9wZXJ0eShfa2V5KTtcbiAgICAgIGlmIChwcmV2Q2hpbGRNYXBwaW5nW19rZXldICYmICFoYXNOZXh0ICYmICF0aGlzLmN1cnJlbnRseVRyYW5zaXRpb25pbmdLZXlzW19rZXldKSB7XG4gICAgICAgIHRoaXMua2V5c1RvTGVhdmUucHVzaChfa2V5KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBJZiB3ZSB3YW50IHRvIHNvbWVkYXkgY2hlY2sgZm9yIHJlb3JkZXJpbmcsIHdlIGNvdWxkIGRvIGl0IGhlcmUuXG4gIH07XG5cbiAgVHJhbnNpdGlvbkdyb3VwLnByb3RvdHlwZS5jb21wb25lbnREaWRVcGRhdGUgPSBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICB2YXIga2V5c1RvRW50ZXIgPSB0aGlzLmtleXNUb0VudGVyO1xuICAgIHRoaXMua2V5c1RvRW50ZXIgPSBbXTtcbiAgICBrZXlzVG9FbnRlci5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHJldHVybiBfdGhpczIucGVyZm9ybUVudGVyKGtleSwgX3RoaXMyLmNoaWxkUmVmc1trZXldKTtcbiAgICB9KTtcblxuICAgIHZhciBrZXlzVG9MZWF2ZSA9IHRoaXMua2V5c1RvTGVhdmU7XG4gICAgdGhpcy5rZXlzVG9MZWF2ZSA9IFtdO1xuICAgIGtleXNUb0xlYXZlLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgcmV0dXJuIF90aGlzMi5wZXJmb3JtTGVhdmUoa2V5LCBfdGhpczIuY2hpbGRSZWZzW2tleV0pO1xuICAgIH0pO1xuICB9O1xuXG4gIFRyYW5zaXRpb25Hcm91cC5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgLy8gVE9ETzogd2UgY291bGQgZ2V0IHJpZCBvZiB0aGUgbmVlZCBmb3IgdGhlIHdyYXBwZXIgbm9kZVxuICAgIC8vIGJ5IGNsb25pbmcgYSBzaW5nbGUgY2hpbGRcbiAgICB2YXIgY2hpbGRyZW5Ub1JlbmRlciA9IFtdO1xuXG4gICAgdmFyIF9sb29wID0gZnVuY3Rpb24gX2xvb3Aoa2V5KSB7XG4gICAgICB2YXIgY2hpbGQgPSBfdGhpczMuc3RhdGUuY2hpbGRyZW5ba2V5XTtcbiAgICAgIGlmIChjaGlsZCkge1xuICAgICAgICB2YXIgaXNDYWxsYmFja1JlZiA9IHR5cGVvZiBjaGlsZC5yZWYgIT09ICdzdHJpbmcnO1xuICAgICAgICB2YXIgZmFjdG9yeUNoaWxkID0gX3RoaXMzLnByb3BzLmNoaWxkRmFjdG9yeShjaGlsZCk7XG4gICAgICAgIHZhciByZWYgPSBmdW5jdGlvbiByZWYocikge1xuICAgICAgICAgIF90aGlzMy5jaGlsZFJlZnNba2V5XSA9IHI7XG4gICAgICAgIH07XG5cbiAgICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/ICgwLCBfd2FybmluZzIuZGVmYXVsdCkoaXNDYWxsYmFja1JlZiwgJ3N0cmluZyByZWZzIGFyZSBub3Qgc3VwcG9ydGVkIG9uIGNoaWxkcmVuIG9mIFRyYW5zaXRpb25Hcm91cCBhbmQgd2lsbCBiZSBpZ25vcmVkLiAnICsgJ1BsZWFzZSB1c2UgYSBjYWxsYmFjayByZWYgaW5zdGVhZDogaHR0cHM6Ly9mYWNlYm9vay5naXRodWIuaW8vcmVhY3QvZG9jcy9yZWZzLWFuZC10aGUtZG9tLmh0bWwjdGhlLXJlZi1jYWxsYmFjay1hdHRyaWJ1dGUnKSA6IHZvaWQgMDtcblxuICAgICAgICAvLyBBbHdheXMgY2hhaW5pbmcgdGhlIHJlZnMgbGVhZHMgdG8gcHJvYmxlbXMgd2hlbiB0aGUgY2hpbGRGYWN0b3J5XG4gICAgICAgIC8vIHdyYXBzIHRoZSBjaGlsZC4gVGhlIGNoaWxkIHJlZiBjYWxsYmFjayBnZXRzIGNhbGxlZCB0d2ljZSB3aXRoIHRoZVxuICAgICAgICAvLyB3cmFwcGVyIGFuZCB0aGUgY2hpbGQuIFNvIHdlIG9ubHkgbmVlZCB0byBjaGFpbiB0aGUgcmVmIGlmIHRoZVxuICAgICAgICAvLyBmYWN0b3J5Q2hpbGQgaXMgbm90IGRpZmZlcmVudCBmcm9tIGNoaWxkLlxuICAgICAgICBpZiAoZmFjdG9yeUNoaWxkID09PSBjaGlsZCAmJiBpc0NhbGxiYWNrUmVmKSB7XG4gICAgICAgICAgcmVmID0gKDAsIF9jaGFpbkZ1bmN0aW9uMi5kZWZhdWx0KShjaGlsZC5yZWYsIHJlZik7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBZb3UgbWF5IG5lZWQgdG8gYXBwbHkgcmVhY3RpdmUgdXBkYXRlcyB0byBhIGNoaWxkIGFzIGl0IGlzIGxlYXZpbmcuXG4gICAgICAgIC8vIFRoZSBub3JtYWwgUmVhY3Qgd2F5IHRvIGRvIGl0IHdvbid0IHdvcmsgc2luY2UgdGhlIGNoaWxkIHdpbGwgaGF2ZVxuICAgICAgICAvLyBhbHJlYWR5IGJlZW4gcmVtb3ZlZC4gSW4gY2FzZSB5b3UgbmVlZCB0aGlzIGJlaGF2aW9yIHlvdSBjYW4gcHJvdmlkZVxuICAgICAgICAvLyBhIGNoaWxkRmFjdG9yeSBmdW5jdGlvbiB0byB3cmFwIGV2ZXJ5IGNoaWxkLCBldmVuIHRoZSBvbmVzIHRoYXQgYXJlXG4gICAgICAgIC8vIGxlYXZpbmcuXG4gICAgICAgIGNoaWxkcmVuVG9SZW5kZXIucHVzaChfcmVhY3QyLmRlZmF1bHQuY2xvbmVFbGVtZW50KGZhY3RvcnlDaGlsZCwge1xuICAgICAgICAgIGtleToga2V5LFxuICAgICAgICAgIHJlZjogcmVmXG4gICAgICAgIH0pKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZm9yICh2YXIga2V5IGluIHRoaXMuc3RhdGUuY2hpbGRyZW4pIHtcbiAgICAgIF9sb29wKGtleSk7XG4gICAgfVxuXG4gICAgLy8gRG8gbm90IGZvcndhcmQgVHJhbnNpdGlvbkdyb3VwIHByb3BzIHRvIHByaW1pdGl2ZSBET00gbm9kZXNcbiAgICB2YXIgcHJvcHMgPSBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcyk7XG4gICAgZGVsZXRlIHByb3BzLnRyYW5zaXRpb25MZWF2ZTtcbiAgICBkZWxldGUgcHJvcHMudHJhbnNpdGlvbk5hbWU7XG4gICAgZGVsZXRlIHByb3BzLnRyYW5zaXRpb25BcHBlYXI7XG4gICAgZGVsZXRlIHByb3BzLnRyYW5zaXRpb25FbnRlcjtcbiAgICBkZWxldGUgcHJvcHMuY2hpbGRGYWN0b3J5O1xuICAgIGRlbGV0ZSBwcm9wcy50cmFuc2l0aW9uTGVhdmVUaW1lb3V0O1xuICAgIGRlbGV0ZSBwcm9wcy50cmFuc2l0aW9uRW50ZXJUaW1lb3V0O1xuICAgIGRlbGV0ZSBwcm9wcy50cmFuc2l0aW9uQXBwZWFyVGltZW91dDtcbiAgICBkZWxldGUgcHJvcHMuY29tcG9uZW50O1xuXG4gICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHRoaXMucHJvcHMuY29tcG9uZW50LCBwcm9wcywgY2hpbGRyZW5Ub1JlbmRlcik7XG4gIH07XG5cbiAgcmV0dXJuIFRyYW5zaXRpb25Hcm91cDtcbn0oX3JlYWN0Mi5kZWZhdWx0LkNvbXBvbmVudCk7XG5cblRyYW5zaXRpb25Hcm91cC5kaXNwbGF5TmFtZSA9ICdUcmFuc2l0aW9uR3JvdXAnO1xuXG5cblRyYW5zaXRpb25Hcm91cC5wcm9wVHlwZXMgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBwcm9wVHlwZXMgOiB7fTtcblRyYW5zaXRpb25Hcm91cC5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFRyYW5zaXRpb25Hcm91cDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZ2V0Q2hpbGRNYXBwaW5nID0gZ2V0Q2hpbGRNYXBwaW5nO1xuZXhwb3J0cy5tZXJnZUNoaWxkTWFwcGluZ3MgPSBtZXJnZUNoaWxkTWFwcGluZ3M7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG4vKipcbiAqIEdpdmVuIGB0aGlzLnByb3BzLmNoaWxkcmVuYCwgcmV0dXJuIGFuIG9iamVjdCBtYXBwaW5nIGtleSB0byBjaGlsZC5cbiAqXG4gKiBAcGFyYW0geyp9IGNoaWxkcmVuIGB0aGlzLnByb3BzLmNoaWxkcmVuYFxuICogQHJldHVybiB7b2JqZWN0fSBNYXBwaW5nIG9mIGtleSB0byBjaGlsZFxuICovXG5mdW5jdGlvbiBnZXRDaGlsZE1hcHBpbmcoY2hpbGRyZW4pIHtcbiAgaWYgKCFjaGlsZHJlbikge1xuICAgIHJldHVybiBjaGlsZHJlbjtcbiAgfVxuICB2YXIgcmVzdWx0ID0ge307XG4gIF9yZWFjdC5DaGlsZHJlbi5tYXAoY2hpbGRyZW4sIGZ1bmN0aW9uIChjaGlsZCkge1xuICAgIHJldHVybiBjaGlsZDtcbiAgfSkuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICByZXN1bHRbY2hpbGQua2V5XSA9IGNoaWxkO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBXaGVuIHlvdSdyZSBhZGRpbmcgb3IgcmVtb3ZpbmcgY2hpbGRyZW4gc29tZSBtYXkgYmUgYWRkZWQgb3IgcmVtb3ZlZCBpbiB0aGVcbiAqIHNhbWUgcmVuZGVyIHBhc3MuIFdlIHdhbnQgdG8gc2hvdyAqYm90aCogc2luY2Ugd2Ugd2FudCB0byBzaW11bHRhbmVvdXNseVxuICogYW5pbWF0ZSBlbGVtZW50cyBpbiBhbmQgb3V0LiBUaGlzIGZ1bmN0aW9uIHRha2VzIGEgcHJldmlvdXMgc2V0IG9mIGtleXNcbiAqIGFuZCBhIG5ldyBzZXQgb2Yga2V5cyBhbmQgbWVyZ2VzIHRoZW0gd2l0aCBpdHMgYmVzdCBndWVzcyBvZiB0aGUgY29ycmVjdFxuICogb3JkZXJpbmcuIEluIHRoZSBmdXR1cmUgd2UgbWF5IGV4cG9zZSBzb21lIG9mIHRoZSB1dGlsaXRpZXMgaW5cbiAqIFJlYWN0TXVsdGlDaGlsZCB0byBtYWtlIHRoaXMgZWFzeSwgYnV0IGZvciBub3cgUmVhY3QgaXRzZWxmIGRvZXMgbm90XG4gKiBkaXJlY3RseSBoYXZlIHRoaXMgY29uY2VwdCBvZiB0aGUgdW5pb24gb2YgcHJldkNoaWxkcmVuIGFuZCBuZXh0Q2hpbGRyZW5cbiAqIHNvIHdlIGltcGxlbWVudCBpdCBoZXJlLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBwcmV2IHByZXYgY2hpbGRyZW4gYXMgcmV0dXJuZWQgZnJvbVxuICogYFJlYWN0VHJhbnNpdGlvbkNoaWxkTWFwcGluZy5nZXRDaGlsZE1hcHBpbmcoKWAuXG4gKiBAcGFyYW0ge29iamVjdH0gbmV4dCBuZXh0IGNoaWxkcmVuIGFzIHJldHVybmVkIGZyb21cbiAqIGBSZWFjdFRyYW5zaXRpb25DaGlsZE1hcHBpbmcuZ2V0Q2hpbGRNYXBwaW5nKClgLlxuICogQHJldHVybiB7b2JqZWN0fSBhIGtleSBzZXQgdGhhdCBjb250YWlucyBhbGwga2V5cyBpbiBgcHJldmAgYW5kIGFsbCBrZXlzXG4gKiBpbiBgbmV4dGAgaW4gYSByZWFzb25hYmxlIG9yZGVyLlxuICovXG5mdW5jdGlvbiBtZXJnZUNoaWxkTWFwcGluZ3MocHJldiwgbmV4dCkge1xuICBwcmV2ID0gcHJldiB8fCB7fTtcbiAgbmV4dCA9IG5leHQgfHwge307XG5cbiAgZnVuY3Rpb24gZ2V0VmFsdWVGb3JLZXkoa2V5KSB7XG4gICAgaWYgKG5leHQuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgcmV0dXJuIG5leHRba2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJldltrZXldO1xuICB9XG5cbiAgLy8gRm9yIGVhY2gga2V5IG9mIGBuZXh0YCwgdGhlIGxpc3Qgb2Yga2V5cyB0byBpbnNlcnQgYmVmb3JlIHRoYXQga2V5IGluXG4gIC8vIHRoZSBjb21iaW5lZCBsaXN0XG4gIHZhciBuZXh0S2V5c1BlbmRpbmcgPSB7fTtcblxuICB2YXIgcGVuZGluZ0tleXMgPSBbXTtcbiAgZm9yICh2YXIgcHJldktleSBpbiBwcmV2KSB7XG4gICAgaWYgKG5leHQuaGFzT3duUHJvcGVydHkocHJldktleSkpIHtcbiAgICAgIGlmIChwZW5kaW5nS2V5cy5sZW5ndGgpIHtcbiAgICAgICAgbmV4dEtleXNQZW5kaW5nW3ByZXZLZXldID0gcGVuZGluZ0tleXM7XG4gICAgICAgIHBlbmRpbmdLZXlzID0gW107XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHBlbmRpbmdLZXlzLnB1c2gocHJldktleSk7XG4gICAgfVxuICB9XG5cbiAgdmFyIGkgPSB2b2lkIDA7XG4gIHZhciBjaGlsZE1hcHBpbmcgPSB7fTtcbiAgZm9yICh2YXIgbmV4dEtleSBpbiBuZXh0KSB7XG4gICAgaWYgKG5leHRLZXlzUGVuZGluZy5oYXNPd25Qcm9wZXJ0eShuZXh0S2V5KSkge1xuICAgICAgZm9yIChpID0gMDsgaSA8IG5leHRLZXlzUGVuZGluZ1tuZXh0S2V5XS5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgcGVuZGluZ05leHRLZXkgPSBuZXh0S2V5c1BlbmRpbmdbbmV4dEtleV1baV07XG4gICAgICAgIGNoaWxkTWFwcGluZ1tuZXh0S2V5c1BlbmRpbmdbbmV4dEtleV1baV1dID0gZ2V0VmFsdWVGb3JLZXkocGVuZGluZ05leHRLZXkpO1xuICAgICAgfVxuICAgIH1cbiAgICBjaGlsZE1hcHBpbmdbbmV4dEtleV0gPSBnZXRWYWx1ZUZvcktleShuZXh0S2V5KTtcbiAgfVxuXG4gIC8vIEZpbmFsbHksIGFkZCB0aGUga2V5cyB3aGljaCBkaWRuJ3QgYXBwZWFyIGJlZm9yZSBhbnkga2V5IGluIGBuZXh0YFxuICBmb3IgKGkgPSAwOyBpIDwgcGVuZGluZ0tleXMubGVuZ3RoOyBpKyspIHtcbiAgICBjaGlsZE1hcHBpbmdbcGVuZGluZ0tleXNbaV1dID0gZ2V0VmFsdWVGb3JLZXkocGVuZGluZ0tleXNbaV0pO1xuICB9XG5cbiAgcmV0dXJuIGNoaWxkTWFwcGluZztcbn0iLCIhZnVuY3Rpb24oZSxuKXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz1uKCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXSxuKTpcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9leHBvcnRzLnR3ZWVuU3RhdGU9bigpOmUudHdlZW5TdGF0ZT1uKCl9KHRoaXMsZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24oZSl7ZnVuY3Rpb24gbihyKXtpZih0W3JdKXJldHVybiB0W3JdLmV4cG9ydHM7dmFyIGE9dFtyXT17ZXhwb3J0czp7fSxpZDpyLGxvYWRlZDohMX07cmV0dXJuIGVbcl0uY2FsbChhLmV4cG9ydHMsYSxhLmV4cG9ydHMsbiksYS5sb2FkZWQ9ITAsYS5leHBvcnRzfXZhciB0PXt9O3JldHVybiBuLm09ZSxuLmM9dCxuLnA9XCJcIixuKDApfSh7MDpmdW5jdGlvbihlLG4sdCl7ZS5leHBvcnRzPXQoOTApfSwxOmZ1bmN0aW9uKGUsbil7ZnVuY3Rpb24gdCgpe2M9ITEsby5sZW5ndGg/cz1vLmNvbmNhdChzKTpmPS0xLHMubGVuZ3RoJiZyKCl9ZnVuY3Rpb24gcigpe2lmKCFjKXt2YXIgZT1zZXRUaW1lb3V0KHQpO2M9ITA7Zm9yKHZhciBuPXMubGVuZ3RoO247KXtmb3Iobz1zLHM9W107KytmPG47KW8mJm9bZl0ucnVuKCk7Zj0tMSxuPXMubGVuZ3RofW89bnVsbCxjPSExLGNsZWFyVGltZW91dChlKX19ZnVuY3Rpb24gYShlLG4pe3RoaXMuZnVuPWUsdGhpcy5hcnJheT1ufWZ1bmN0aW9uIHUoKXt9dmFyIG8saT1lLmV4cG9ydHM9e30scz1bXSxjPSExLGY9LTE7aS5uZXh0VGljaz1mdW5jdGlvbihlKXt2YXIgbj1uZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aC0xKTtpZihhcmd1bWVudHMubGVuZ3RoPjEpZm9yKHZhciB0PTE7dDxhcmd1bWVudHMubGVuZ3RoO3QrKyluW3QtMV09YXJndW1lbnRzW3RdO3MucHVzaChuZXcgYShlLG4pKSwxIT09cy5sZW5ndGh8fGN8fHNldFRpbWVvdXQociwwKX0sYS5wcm90b3R5cGUucnVuPWZ1bmN0aW9uKCl7dGhpcy5mdW4uYXBwbHkobnVsbCx0aGlzLmFycmF5KX0saS50aXRsZT1cImJyb3dzZXJcIixpLmJyb3dzZXI9ITAsaS5lbnY9e30saS5hcmd2PVtdLGkudmVyc2lvbj1cIlwiLGkudmVyc2lvbnM9e30saS5vbj11LGkuYWRkTGlzdGVuZXI9dSxpLm9uY2U9dSxpLm9mZj11LGkucmVtb3ZlTGlzdGVuZXI9dSxpLnJlbW92ZUFsbExpc3RlbmVycz11LGkuZW1pdD11LGkuYmluZGluZz1mdW5jdGlvbihlKXt0aHJvdyBuZXcgRXJyb3IoXCJwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZFwiKX0saS5jd2Q9ZnVuY3Rpb24oKXtyZXR1cm5cIi9cIn0saS5jaGRpcj1mdW5jdGlvbihlKXt0aHJvdyBuZXcgRXJyb3IoXCJwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWRcIil9LGkudW1hc2s9ZnVuY3Rpb24oKXtyZXR1cm4gMH19LDkwOmZ1bmN0aW9uKGUsbix0KXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiByKGUpe3JldHVybiBlJiZlLl9fZXNNb2R1bGU/ZTp7XCJkZWZhdWx0XCI6ZX19T2JqZWN0LmRlZmluZVByb3BlcnR5KG4sXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIGE9dCgxNjUpLHU9cihhKSxvPXQoOTEpLGk9cihvKSxzPVwiQURESVRJVkVcIixjPWEuZWFzZUluT3V0UXVhZCxmPTMwMCxsPTAsaD17QURESVRJVkU6XCJBRERJVElWRVwiLERFU1RSVUNUSVZFOlwiREVTVFJVQ1RJVkVcIn0sdj17X3JhZklEOm51bGwsZ2V0SW5pdGlhbFN0YXRlOmZ1bmN0aW9uKCl7cmV0dXJue3R3ZWVuUXVldWU6W119fSxjb21wb25lbnRXaWxsVW5tb3VudDpmdW5jdGlvbigpe2lbXCJkZWZhdWx0XCJdLmNhbmNlbCh0aGlzLl9yYWZJRCksdGhpcy5fcmFmSUQ9LTF9LHR3ZWVuU3RhdGU6ZnVuY3Rpb24oZSxuKXt2YXIgdD10aGlzLHI9bi5lYXNpbmcsYT1uLmR1cmF0aW9uLHU9bi5kZWxheSxvPW4uYmVnaW5WYWx1ZSx2PW4uZW5kVmFsdWUsZD1uLm9uRW5kLHA9bi5zdGFja0JlaGF2aW9yO3RoaXMuc2V0U3RhdGUoZnVuY3Rpb24obil7dmFyIEk9bix3PXZvaWQgMCxnPXZvaWQgMDtpZihcInN0cmluZ1wiPT10eXBlb2YgZSl3PWUsZz1lO2Vsc2V7Zm9yKHZhciBNPTA7TTxlLmxlbmd0aC0xO00rKylJPUlbZVtNXV07dz1lW2UubGVuZ3RoLTFdLGc9ZS5qb2luKFwifFwiKX12YXIgbT17ZWFzaW5nOnJ8fGMsZHVyYXRpb246bnVsbD09YT9mOmEsZGVsYXk6bnVsbD09dT9sOnUsYmVnaW5WYWx1ZTpudWxsPT1vP0lbd106byxlbmRWYWx1ZTp2LG9uRW5kOmQsc3RhY2tCZWhhdmlvcjpwfHxzfSx4PW4udHdlZW5RdWV1ZTtyZXR1cm4gbS5zdGFja0JlaGF2aW9yPT09aC5ERVNUUlVDVElWRSYmKHg9bi50d2VlblF1ZXVlLmZpbHRlcihmdW5jdGlvbihlKXtyZXR1cm4gZS5wYXRoSGFzaCE9PWd9KSkseC5wdXNoKHtwYXRoSGFzaDpnLGNvbmZpZzptLGluaXRUaW1lOkRhdGUubm93KCkrbS5kZWxheX0pLElbd109bS5lbmRWYWx1ZSwxPT09eC5sZW5ndGgmJih0Ll9yYWZJRD0oMCxpW1wiZGVmYXVsdFwiXSkodC5fcmFmQ2IpKSx7dHdlZW5RdWV1ZTp4fX0pfSxnZXRUd2VlbmluZ1ZhbHVlOmZ1bmN0aW9uKGUpe3ZhciBuPXRoaXMuc3RhdGUsdD12b2lkIDAscj12b2lkIDA7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGUpdD1uW2VdLHI9ZTtlbHNle3Q9bjtmb3IodmFyIGE9MDthPGUubGVuZ3RoO2ErKyl0PXRbZVthXV07cj1lLmpvaW4oXCJ8XCIpfWZvcih2YXIgdT1EYXRlLm5vdygpLGE9MDthPG4udHdlZW5RdWV1ZS5sZW5ndGg7YSsrKXt2YXIgbz1uLnR3ZWVuUXVldWVbYV0saT1vLnBhdGhIYXNoLHM9by5pbml0VGltZSxjPW8uY29uZmlnO2lmKGk9PT1yKXt2YXIgZj11LXM+Yy5kdXJhdGlvbj9jLmR1cmF0aW9uOk1hdGgubWF4KDAsdS1zKSxsPTA9PT1jLmR1cmF0aW9uP2MuZW5kVmFsdWU6Yy5lYXNpbmcoZixjLmJlZ2luVmFsdWUsYy5lbmRWYWx1ZSxjLmR1cmF0aW9uKSxoPWwtYy5lbmRWYWx1ZTt0Kz1ofX1yZXR1cm4gdH0sX3JhZkNiOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5zdGF0ZTtpZigwIT09ZS50d2VlblF1ZXVlLmxlbmd0aCl7Zm9yKHZhciBuPURhdGUubm93KCksdD1bXSxyPTA7cjxlLnR3ZWVuUXVldWUubGVuZ3RoO3IrKyl7dmFyIGE9ZS50d2VlblF1ZXVlW3JdLHU9YS5pbml0VGltZSxvPWEuY29uZmlnO24tdTxvLmR1cmF0aW9uP3QucHVzaChhKTpvLm9uRW5kJiZvLm9uRW5kKCl9LTEhPT10aGlzLl9yYWZJRCYmKHRoaXMuc2V0U3RhdGUoe3R3ZWVuUXVldWU6dH0pLHRoaXMuX3JhZklEPSgwLGlbXCJkZWZhdWx0XCJdKSh0aGlzLl9yYWZDYikpfX19O25bXCJkZWZhdWx0XCJdPXtNaXhpbjp2LGVhc2luZ1R5cGVzOnVbXCJkZWZhdWx0XCJdLHN0YWNrQmVoYXZpb3I6aH0sZS5leHBvcnRzPW5bXCJkZWZhdWx0XCJdfSw5MTpmdW5jdGlvbihlLG4sdCl7Zm9yKHZhciByPXQoOTIpLGE9XCJ1bmRlZmluZWRcIj09dHlwZW9mIHdpbmRvdz97fTp3aW5kb3csdT1bXCJtb3pcIixcIndlYmtpdFwiXSxvPVwiQW5pbWF0aW9uRnJhbWVcIixpPWFbXCJyZXF1ZXN0XCIrb10scz1hW1wiY2FuY2VsXCIrb118fGFbXCJjYW5jZWxSZXF1ZXN0XCIrb10sYz0wO2M8dS5sZW5ndGgmJiFpO2MrKylpPWFbdVtjXStcIlJlcXVlc3RcIitvXSxzPWFbdVtjXStcIkNhbmNlbFwiK29dfHxhW3VbY10rXCJDYW5jZWxSZXF1ZXN0XCIrb107aWYoIWl8fCFzKXt2YXIgZj0wLGw9MCxoPVtdLHY9MWUzLzYwO2k9ZnVuY3Rpb24oZSl7aWYoMD09PWgubGVuZ3RoKXt2YXIgbj1yKCksdD1NYXRoLm1heCgwLHYtKG4tZikpO2Y9dCtuLHNldFRpbWVvdXQoZnVuY3Rpb24oKXt2YXIgZT1oLnNsaWNlKDApO2gubGVuZ3RoPTA7Zm9yKHZhciBuPTA7bjxlLmxlbmd0aDtuKyspaWYoIWVbbl0uY2FuY2VsbGVkKXRyeXtlW25dLmNhbGxiYWNrKGYpfWNhdGNoKHQpe3NldFRpbWVvdXQoZnVuY3Rpb24oKXt0aHJvdyB0fSwwKX19LE1hdGgucm91bmQodCkpfXJldHVybiBoLnB1c2goe2hhbmRsZTorK2wsY2FsbGJhY2s6ZSxjYW5jZWxsZWQ6ITF9KSxsfSxzPWZ1bmN0aW9uKGUpe2Zvcih2YXIgbj0wO248aC5sZW5ndGg7bisrKWhbbl0uaGFuZGxlPT09ZSYmKGhbbl0uY2FuY2VsbGVkPSEwKX19ZS5leHBvcnRzPWZ1bmN0aW9uKGUpe3JldHVybiBpLmNhbGwoYSxlKX0sZS5leHBvcnRzLmNhbmNlbD1mdW5jdGlvbigpe3MuYXBwbHkoYSxhcmd1bWVudHMpfX0sOTI6ZnVuY3Rpb24oZSxuLHQpeyhmdW5jdGlvbihuKXsoZnVuY3Rpb24oKXt2YXIgdCxyLGE7XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHBlcmZvcm1hbmNlJiZudWxsIT09cGVyZm9ybWFuY2UmJnBlcmZvcm1hbmNlLm5vdz9lLmV4cG9ydHM9ZnVuY3Rpb24oKXtyZXR1cm4gcGVyZm9ybWFuY2Uubm93KCl9OlwidW5kZWZpbmVkXCIhPXR5cGVvZiBuJiZudWxsIT09biYmbi5ocnRpbWU/KGUuZXhwb3J0cz1mdW5jdGlvbigpe3JldHVybih0KCktYSkvMWU2fSxyPW4uaHJ0aW1lLHQ9ZnVuY3Rpb24oKXt2YXIgZTtyZXR1cm4gZT1yKCksMWU5KmVbMF0rZVsxXX0sYT10KCkpOkRhdGUubm93PyhlLmV4cG9ydHM9ZnVuY3Rpb24oKXtyZXR1cm4gRGF0ZS5ub3coKS1hfSxhPURhdGUubm93KCkpOihlLmV4cG9ydHM9ZnVuY3Rpb24oKXtyZXR1cm4obmV3IERhdGUpLmdldFRpbWUoKS1hfSxhPShuZXcgRGF0ZSkuZ2V0VGltZSgpKX0pLmNhbGwodGhpcyl9KS5jYWxsKG4sdCgxKSl9LDE2NTpmdW5jdGlvbihlLG4pe1widXNlIHN0cmljdFwiO3ZhciB0PXtsaW5lYXI6ZnVuY3Rpb24oZSxuLHQscil7dmFyIGE9dC1uO3JldHVybiBhKmUvcitufSxlYXNlSW5RdWFkOmZ1bmN0aW9uKGUsbix0LHIpe3ZhciBhPXQtbjtyZXR1cm4gYSooZS89cikqZStufSxlYXNlT3V0UXVhZDpmdW5jdGlvbihlLG4sdCxyKXt2YXIgYT10LW47cmV0dXJuLWEqKGUvPXIpKihlLTIpK259LGVhc2VJbk91dFF1YWQ6ZnVuY3Rpb24oZSxuLHQscil7dmFyIGE9dC1uO3JldHVybihlLz1yLzIpPDE/YS8yKmUqZStuOi1hLzIqKC0tZSooZS0yKS0xKStufSxlYXNlSW5DdWJpYzpmdW5jdGlvbihlLG4sdCxyKXt2YXIgYT10LW47cmV0dXJuIGEqKGUvPXIpKmUqZStufSxlYXNlT3V0Q3ViaWM6ZnVuY3Rpb24oZSxuLHQscil7dmFyIGE9dC1uO3JldHVybiBhKigoZT1lL3ItMSkqZSplKzEpK259LGVhc2VJbk91dEN1YmljOmZ1bmN0aW9uKGUsbix0LHIpe3ZhciBhPXQtbjtyZXR1cm4oZS89ci8yKTwxP2EvMiplKmUqZStuOmEvMiooKGUtPTIpKmUqZSsyKStufSxlYXNlSW5RdWFydDpmdW5jdGlvbihlLG4sdCxyKXt2YXIgYT10LW47cmV0dXJuIGEqKGUvPXIpKmUqZSplK259LGVhc2VPdXRRdWFydDpmdW5jdGlvbihlLG4sdCxyKXt2YXIgYT10LW47cmV0dXJuLWEqKChlPWUvci0xKSplKmUqZS0xKStufSxlYXNlSW5PdXRRdWFydDpmdW5jdGlvbihlLG4sdCxyKXt2YXIgYT10LW47cmV0dXJuKGUvPXIvMik8MT9hLzIqZSplKmUqZStuOi1hLzIqKChlLT0yKSplKmUqZS0yKStufSxlYXNlSW5RdWludDpmdW5jdGlvbihlLG4sdCxyKXt2YXIgYT10LW47cmV0dXJuIGEqKGUvPXIpKmUqZSplKmUrbn0sZWFzZU91dFF1aW50OmZ1bmN0aW9uKGUsbix0LHIpe3ZhciBhPXQtbjtyZXR1cm4gYSooKGU9ZS9yLTEpKmUqZSplKmUrMSkrbn0sZWFzZUluT3V0UXVpbnQ6ZnVuY3Rpb24oZSxuLHQscil7dmFyIGE9dC1uO3JldHVybihlLz1yLzIpPDE/YS8yKmUqZSplKmUqZStuOmEvMiooKGUtPTIpKmUqZSplKmUrMikrbn0sZWFzZUluU2luZTpmdW5jdGlvbihlLG4sdCxyKXt2YXIgYT10LW47cmV0dXJuLWEqTWF0aC5jb3MoZS9yKihNYXRoLlBJLzIpKSthK259LGVhc2VPdXRTaW5lOmZ1bmN0aW9uKGUsbix0LHIpe3ZhciBhPXQtbjtyZXR1cm4gYSpNYXRoLnNpbihlL3IqKE1hdGguUEkvMikpK259LGVhc2VJbk91dFNpbmU6ZnVuY3Rpb24oZSxuLHQscil7dmFyIGE9dC1uO3JldHVybi1hLzIqKE1hdGguY29zKE1hdGguUEkqZS9yKS0xKStufSxlYXNlSW5FeHBvOmZ1bmN0aW9uKGUsbix0LHIpe3ZhciBhPXQtbjtyZXR1cm4gMD09ZT9uOmEqTWF0aC5wb3coMiwxMCooZS9yLTEpKStufSxlYXNlT3V0RXhwbzpmdW5jdGlvbihlLG4sdCxyKXt2YXIgYT10LW47cmV0dXJuIGU9PXI/bithOmEqKC1NYXRoLnBvdygyLC0xMCplL3IpKzEpK259LGVhc2VJbk91dEV4cG86ZnVuY3Rpb24oZSxuLHQscil7dmFyIGE9dC1uO3JldHVybiAwPT09ZT9uOmU9PT1yP24rYTooZS89ci8yKTwxP2EvMipNYXRoLnBvdygyLDEwKihlLTEpKStuOmEvMiooLU1hdGgucG93KDIsLTEwKi0tZSkrMikrbn0sZWFzZUluQ2lyYzpmdW5jdGlvbihlLG4sdCxyKXt2YXIgYT10LW47cmV0dXJuLWEqKE1hdGguc3FydCgxLShlLz1yKSplKS0xKStufSxlYXNlT3V0Q2lyYzpmdW5jdGlvbihlLG4sdCxyKXt2YXIgYT10LW47cmV0dXJuIGEqTWF0aC5zcXJ0KDEtKGU9ZS9yLTEpKmUpK259LGVhc2VJbk91dENpcmM6ZnVuY3Rpb24oZSxuLHQscil7dmFyIGE9dC1uO3JldHVybihlLz1yLzIpPDE/LWEvMiooTWF0aC5zcXJ0KDEtZSplKS0xKStuOmEvMiooTWF0aC5zcXJ0KDEtKGUtPTIpKmUpKzEpK259LGVhc2VJbkVsYXN0aWM6ZnVuY3Rpb24oZSxuLHQscil7dmFyIGEsdSxvLGk9dC1uO3JldHVybiBvPTEuNzAxNTgsdT0wLGE9aSwwPT09ZT9uOjE9PT0oZS89cik/bitpOih1fHwodT0uMypyKSxhPE1hdGguYWJzKGkpPyhhPWksbz11LzQpOm89dS8oMipNYXRoLlBJKSpNYXRoLmFzaW4oaS9hKSwtKGEqTWF0aC5wb3coMiwxMCooZS09MSkpKk1hdGguc2luKChlKnItbykqKDIqTWF0aC5QSSkvdSkpK24pfSxlYXNlT3V0RWxhc3RpYzpmdW5jdGlvbihlLG4sdCxyKXt2YXIgYSx1LG8saT10LW47cmV0dXJuIG89MS43MDE1OCx1PTAsYT1pLDA9PT1lP246MT09PShlLz1yKT9uK2k6KHV8fCh1PS4zKnIpLGE8TWF0aC5hYnMoaSk/KGE9aSxvPXUvNCk6bz11LygyKk1hdGguUEkpKk1hdGguYXNpbihpL2EpLGEqTWF0aC5wb3coMiwtMTAqZSkqTWF0aC5zaW4oKGUqci1vKSooMipNYXRoLlBJKS91KStpK24pfSxlYXNlSW5PdXRFbGFzdGljOmZ1bmN0aW9uKGUsbix0LHIpe3ZhciBhLHUsbyxpPXQtbjtyZXR1cm4gbz0xLjcwMTU4LHU9MCxhPWksMD09PWU/bjoyPT09KGUvPXIvMik/bitpOih1fHwodT1yKiguMyoxLjUpKSxhPE1hdGguYWJzKGkpPyhhPWksbz11LzQpOm89dS8oMipNYXRoLlBJKSpNYXRoLmFzaW4oaS9hKSwxPmU/LS41KihhKk1hdGgucG93KDIsMTAqKGUtPTEpKSpNYXRoLnNpbigoZSpyLW8pKigyKk1hdGguUEkpL3UpKStuOmEqTWF0aC5wb3coMiwtMTAqKGUtPTEpKSpNYXRoLnNpbigoZSpyLW8pKigyKk1hdGguUEkpL3UpKi41K2krbil9LGVhc2VJbkJhY2s6ZnVuY3Rpb24oZSxuLHQscixhKXt2YXIgdT10LW47cmV0dXJuIHZvaWQgMD09PWEmJihhPTEuNzAxNTgpLHUqKGUvPXIpKmUqKChhKzEpKmUtYSkrbn0sZWFzZU91dEJhY2s6ZnVuY3Rpb24oZSxuLHQscixhKXt2YXIgdT10LW47cmV0dXJuIHZvaWQgMD09PWEmJihhPTEuNzAxNTgpLHUqKChlPWUvci0xKSplKigoYSsxKSplK2EpKzEpK259LGVhc2VJbk91dEJhY2s6ZnVuY3Rpb24oZSxuLHQscixhKXt2YXIgdT10LW47cmV0dXJuIHZvaWQgMD09PWEmJihhPTEuNzAxNTgpLChlLz1yLzIpPDE/dS8yKihlKmUqKCgoYSo9MS41MjUpKzEpKmUtYSkpK246dS8yKigoZS09MikqZSooKChhKj0xLjUyNSkrMSkqZSthKSsyKStufSxlYXNlSW5Cb3VuY2U6ZnVuY3Rpb24oZSxuLHIsYSl7dmFyIHUsbz1yLW47cmV0dXJuIHU9dC5lYXNlT3V0Qm91bmNlKGEtZSwwLG8sYSksby11K259LGVhc2VPdXRCb3VuY2U6ZnVuY3Rpb24oZSxuLHQscil7dmFyIGE9dC1uO3JldHVybihlLz1yKTwxLzIuNzU/YSooNy41NjI1KmUqZSkrbjoyLzIuNzU+ZT9hKig3LjU2MjUqKGUtPTEuNS8yLjc1KSplKy43NSkrbjoyLjUvMi43NT5lP2EqKDcuNTYyNSooZS09Mi4yNS8yLjc1KSplKy45Mzc1KStuOmEqKDcuNTYyNSooZS09Mi42MjUvMi43NSkqZSsuOTg0Mzc1KStufSxlYXNlSW5PdXRCb3VuY2U6ZnVuY3Rpb24oZSxuLHIsYSl7dmFyIHUsbz1yLW47cmV0dXJuIGEvMj5lPyh1PXQuZWFzZUluQm91bmNlKDIqZSwwLG8sYSksLjUqdStuKToodT10LmVhc2VPdXRCb3VuY2UoMiplLWEsMCxvLGEpLC41KnUrLjUqbytuKX19O2UuZXhwb3J0cz10fX0pfSk7IiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxNC0yMDE1LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFNpbWlsYXIgdG8gaW52YXJpYW50IGJ1dCBvbmx5IGxvZ3MgYSB3YXJuaW5nIGlmIHRoZSBjb25kaXRpb24gaXMgbm90IG1ldC5cbiAqIFRoaXMgY2FuIGJlIHVzZWQgdG8gbG9nIGlzc3VlcyBpbiBkZXZlbG9wbWVudCBlbnZpcm9ubWVudHMgaW4gY3JpdGljYWxcbiAqIHBhdGhzLiBSZW1vdmluZyB0aGUgbG9nZ2luZyBjb2RlIGZvciBwcm9kdWN0aW9uIGVudmlyb25tZW50cyB3aWxsIGtlZXAgdGhlXG4gKiBzYW1lIGxvZ2ljIGFuZCBmb2xsb3cgdGhlIHNhbWUgY29kZSBwYXRocy5cbiAqL1xuXG52YXIgd2FybmluZyA9IGZ1bmN0aW9uKCkge307XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHdhcm5pbmcgPSBmdW5jdGlvbihjb25kaXRpb24sIGZvcm1hdCwgYXJncykge1xuICAgIHZhciBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIGFyZ3MgPSBuZXcgQXJyYXkobGVuID4gMiA/IGxlbiAtIDIgOiAwKTtcbiAgICBmb3IgKHZhciBrZXkgPSAyOyBrZXkgPCBsZW47IGtleSsrKSB7XG4gICAgICBhcmdzW2tleSAtIDJdID0gYXJndW1lbnRzW2tleV07XG4gICAgfVxuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAnYHdhcm5pbmcoY29uZGl0aW9uLCBmb3JtYXQsIC4uLmFyZ3MpYCByZXF1aXJlcyBhIHdhcm5pbmcgJyArXG4gICAgICAgICdtZXNzYWdlIGFyZ3VtZW50J1xuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAoZm9ybWF0Lmxlbmd0aCA8IDEwIHx8ICgvXltzXFxXXSokLykudGVzdChmb3JtYXQpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICdUaGUgd2FybmluZyBmb3JtYXQgc2hvdWxkIGJlIGFibGUgdG8gdW5pcXVlbHkgaWRlbnRpZnkgdGhpcyAnICtcbiAgICAgICAgJ3dhcm5pbmcuIFBsZWFzZSwgdXNlIGEgbW9yZSBkZXNjcmlwdGl2ZSBmb3JtYXQgdGhhbjogJyArIGZvcm1hdFxuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAoIWNvbmRpdGlvbikge1xuICAgICAgdmFyIGFyZ0luZGV4ID0gMDtcbiAgICAgIHZhciBtZXNzYWdlID0gJ1dhcm5pbmc6ICcgK1xuICAgICAgICBmb3JtYXQucmVwbGFjZSgvJXMvZywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107XG4gICAgICAgIH0pO1xuICAgICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuICAgICAgfVxuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCB5b3UgY2FuIHVzZSB0aGlzIHN0YWNrXG4gICAgICAgIC8vIHRvIGZpbmQgdGhlIGNhbGxzaXRlIHRoYXQgY2F1c2VkIHRoaXMgd2FybmluZyB0byBmaXJlLlxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgICB9IGNhdGNoKHgpIHt9XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHdhcm5pbmc7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgYXR0cmlidXRlcyB9IGZyb20gXCIuLi9jb250ZW50L2hvbWUubWRcIjtcclxuaW1wb3J0IFNodWZmbGUgZnJvbSBcInJlYWN0LXNodWZmbGVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNraWxscygpIHtcclxuICBjb25zdCBbZmlsdGVyLCBzZXRGaWx0ZXJdID0gdXNlU3RhdGUoXCJhbGxcIik7XHJcbiAgbGV0IHsgc2tpbGxzIH0gPSBhdHRyaWJ1dGVzO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJza2lsbHNcIj5cclxuICAgICAgPGgxIGNsYXNzTmFtZT1cInNraWxsc19oZWFkZXJcIj5Ta2lsbHM8L2gxPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNraWxsc19maWx0ZXJcIj5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICBmaWx0ZXIgPT09IFwiYWxsXCIgPyBcInNraWxsc19maWx0ZXItdGFiIGFjdGl2ZVwiIDogXCJza2lsbHNfZmlsdGVyLXRhYlwiXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRGaWx0ZXIoXCJhbGxcIil9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgQWxsXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgZmlsdGVyID09PSBcImZyb250XCJcclxuICAgICAgICAgICAgICA/IFwic2tpbGxzX2ZpbHRlci10YWIgYWN0aXZlXCJcclxuICAgICAgICAgICAgICA6IFwic2tpbGxzX2ZpbHRlci10YWJcIlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0RmlsdGVyKFwiZnJvbnRcIil9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgRnJvbnQtRW5kXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgZmlsdGVyID09PSBcImJhY2tcIiA/IFwic2tpbGxzX2ZpbHRlci10YWIgYWN0aXZlXCIgOiBcInNraWxsc19maWx0ZXItdGFiXCJcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEZpbHRlcihcImJhY2tcIil9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgQmFjay1FbmRcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICBmaWx0ZXIgPT09IFwib3RoZXJcIlxyXG4gICAgICAgICAgICAgID8gXCJza2lsbHNfZmlsdGVyLXRhYiBhY3RpdmVcIlxyXG4gICAgICAgICAgICAgIDogXCJza2lsbHNfZmlsdGVyLXRhYlwiXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRGaWx0ZXIoXCJvdGhlclwiKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBPdGhlclxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPFNodWZmbGU+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJza2lsbHNfc2VjdGlvblwiPlxyXG4gICAgICAgICAge3NraWxscy5tYXAoKHNraWxsLCBrZXkpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZmlsdGVyLCBza2lsbC5kZXNjcmlwdGlvbiwgc2tpbGwubmFtZSk7XHJcblxyXG4gICAgICAgICAgICBsZXQgZmlsdGVyZWRDbGFzcyA9XHJcbiAgICAgICAgICAgICAgc2tpbGwuZGVzY3JpcHRpb24gPT09IGZpbHRlciA/IFwiIGFjdGl2ZVBpbGxcIiA6IFwiXCI7XHJcbiAgICAgICAgICAgIGxldCBjbGFzc25hbWUgPVxyXG4gICAgICAgICAgICAgIGZpbHRlciA9PT0gXCJhbGxcIiA/IFwic2tpbGxzX3BpbGxcIiA6IFwic2tpbGxzX3BpbGxcIiArIGZpbHRlcmVkQ2xhc3M7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzbmFtZX0ga2V5PXtrZXl9PlxyXG4gICAgICAgICAgICAgICAge3NraWxsLm5hbWV9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9KX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9TaHVmZmxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9