"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/react-onclickoutside";
exports.ids = ["vendor-chunks/react-onclickoutside"];
exports.modules = {

/***/ "(ssr)/./node_modules/react-onclickoutside/dist/react-onclickoutside.es.js":
/*!***************************************************************************!*\
  !*** ./node_modules/react-onclickoutside/dist/react-onclickoutside.es.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   IGNORE_CLASS_NAME: () => (/* binding */ IGNORE_CLASS_NAME),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-dom.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\nfunction _inheritsLoose(subClass, superClass) {\n  subClass.prototype = Object.create(superClass.prototype);\n  subClass.prototype.constructor = subClass;\n\n  _setPrototypeOf(subClass, superClass);\n}\n\nfunction _setPrototypeOf(o, p) {\n  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {\n    o.__proto__ = p;\n    return o;\n  };\n\n  return _setPrototypeOf(o, p);\n}\n\nfunction _objectWithoutPropertiesLoose(source, excluded) {\n  if (source == null) return {};\n  var target = {};\n  var sourceKeys = Object.keys(source);\n  var key, i;\n\n  for (i = 0; i < sourceKeys.length; i++) {\n    key = sourceKeys[i];\n    if (excluded.indexOf(key) >= 0) continue;\n    target[key] = source[key];\n  }\n\n  return target;\n}\n\nfunction _assertThisInitialized(self) {\n  if (self === void 0) {\n    throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n  }\n\n  return self;\n}/**\n * Check whether some DOM node is our Component's node.\n */\nfunction isNodeFound(current, componentNode, ignoreClass) {\n  if (current === componentNode) {\n    return true;\n  } // SVG <use/> elements do not technically reside in the rendered DOM, so\n  // they do not have classList directly, but they offer a link to their\n  // corresponding element, which can have classList. This extra check is for\n  // that case.\n  // See: http://www.w3.org/TR/SVG11/struct.html#InterfaceSVGUseElement\n  // Discussion: https://github.com/Pomax/react-onclickoutside/pull/17\n\n\n  if (current.correspondingElement) {\n    return current.correspondingElement.classList.contains(ignoreClass);\n  }\n\n  return current.classList.contains(ignoreClass);\n}\n/**\n * Try to find our node in a hierarchy of nodes, returning the document\n * node as highest node if our node is not found in the path up.\n */\n\nfunction findHighest(current, componentNode, ignoreClass) {\n  if (current === componentNode) {\n    return true;\n  } // If source=local then this event came from 'somewhere'\n  // inside and should be ignored. We could handle this with\n  // a layered approach, too, but that requires going back to\n  // thinking in terms of Dom node nesting, running counter\n  // to React's 'you shouldn't care about the DOM' philosophy.\n  // Also cover shadowRoot node by checking current.host\n\n\n  while (current.parentNode || current.host) {\n    // Only check normal node without shadowRoot\n    if (current.parentNode && isNodeFound(current, componentNode, ignoreClass)) {\n      return true;\n    }\n\n    current = current.parentNode || current.host;\n  }\n\n  return current;\n}\n/**\n * Check if the browser scrollbar was clicked\n */\n\nfunction clickedScrollbar(evt) {\n  return document.documentElement.clientWidth <= evt.clientX || document.documentElement.clientHeight <= evt.clientY;\n}// ideally will get replaced with external dep\n// when rafrex/detect-passive-events#4 and rafrex/detect-passive-events#5 get merged in\nvar testPassiveEventSupport = function testPassiveEventSupport() {\n  if (typeof window === 'undefined' || typeof window.addEventListener !== 'function') {\n    return;\n  }\n\n  var passive = false;\n  var options = Object.defineProperty({}, 'passive', {\n    get: function get() {\n      passive = true;\n    }\n  });\n\n  var noop = function noop() {};\n\n  window.addEventListener('testPassiveEventSupport', noop, options);\n  window.removeEventListener('testPassiveEventSupport', noop, options);\n  return passive;\n};function autoInc(seed) {\n  if (seed === void 0) {\n    seed = 0;\n  }\n\n  return function () {\n    return ++seed;\n  };\n}\n\nvar uid = autoInc();var passiveEventSupport;\nvar handlersMap = {};\nvar enabledInstances = {};\nvar touchEvents = ['touchstart', 'touchmove'];\nvar IGNORE_CLASS_NAME = 'ignore-react-onclickoutside';\n/**\n * Options for addEventHandler and removeEventHandler\n */\n\nfunction getEventHandlerOptions(instance, eventName) {\n  var handlerOptions = {};\n  var isTouchEvent = touchEvents.indexOf(eventName) !== -1;\n\n  if (isTouchEvent && passiveEventSupport) {\n    handlerOptions.passive = !instance.props.preventDefault;\n  }\n\n  return handlerOptions;\n}\n/**\n * This function generates the HOC function that you'll use\n * in order to impart onOutsideClick listening to an\n * arbitrary component. It gets called at the end of the\n * bootstrapping code to yield an instance of the\n * onClickOutsideHOC function defined inside setupHOC().\n */\n\n\nfunction onClickOutsideHOC(WrappedComponent, config) {\n  var _class, _temp;\n\n  var componentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';\n  return _temp = _class = /*#__PURE__*/function (_Component) {\n    _inheritsLoose(onClickOutside, _Component);\n\n    function onClickOutside(props) {\n      var _this;\n\n      _this = _Component.call(this, props) || this;\n\n      _this.__outsideClickHandler = function (event) {\n        if (typeof _this.__clickOutsideHandlerProp === 'function') {\n          _this.__clickOutsideHandlerProp(event);\n\n          return;\n        }\n\n        var instance = _this.getInstance();\n\n        if (typeof instance.props.handleClickOutside === 'function') {\n          instance.props.handleClickOutside(event);\n          return;\n        }\n\n        if (typeof instance.handleClickOutside === 'function') {\n          instance.handleClickOutside(event);\n          return;\n        }\n\n        throw new Error(\"WrappedComponent: \" + componentName + \" lacks a handleClickOutside(event) function for processing outside click events.\");\n      };\n\n      _this.__getComponentNode = function () {\n        var instance = _this.getInstance();\n\n        if (config && typeof config.setClickOutsideRef === 'function') {\n          return config.setClickOutsideRef()(instance);\n        }\n\n        if (typeof instance.setClickOutsideRef === 'function') {\n          return instance.setClickOutsideRef();\n        }\n\n        return (0,react_dom__WEBPACK_IMPORTED_MODULE_1__.findDOMNode)(instance);\n      };\n\n      _this.enableOnClickOutside = function () {\n        if (typeof document === 'undefined' || enabledInstances[_this._uid]) {\n          return;\n        }\n\n        if (typeof passiveEventSupport === 'undefined') {\n          passiveEventSupport = testPassiveEventSupport();\n        }\n\n        enabledInstances[_this._uid] = true;\n        var events = _this.props.eventTypes;\n\n        if (!events.forEach) {\n          events = [events];\n        }\n\n        handlersMap[_this._uid] = function (event) {\n          if (_this.componentNode === null) return;\n\n          if (_this.props.preventDefault) {\n            event.preventDefault();\n          }\n\n          if (_this.props.stopPropagation) {\n            event.stopPropagation();\n          }\n\n          if (_this.props.excludeScrollbar && clickedScrollbar(event)) return;\n          var current = event.composed && event.composedPath && event.composedPath().shift() || event.target;\n\n          if (findHighest(current, _this.componentNode, _this.props.outsideClickIgnoreClass) !== document) {\n            return;\n          }\n\n          _this.__outsideClickHandler(event);\n        };\n\n        events.forEach(function (eventName) {\n          document.addEventListener(eventName, handlersMap[_this._uid], getEventHandlerOptions(_assertThisInitialized(_this), eventName));\n        });\n      };\n\n      _this.disableOnClickOutside = function () {\n        delete enabledInstances[_this._uid];\n        var fn = handlersMap[_this._uid];\n\n        if (fn && typeof document !== 'undefined') {\n          var events = _this.props.eventTypes;\n\n          if (!events.forEach) {\n            events = [events];\n          }\n\n          events.forEach(function (eventName) {\n            return document.removeEventListener(eventName, fn, getEventHandlerOptions(_assertThisInitialized(_this), eventName));\n          });\n          delete handlersMap[_this._uid];\n        }\n      };\n\n      _this.getRef = function (ref) {\n        return _this.instanceRef = ref;\n      };\n\n      _this._uid = uid();\n      return _this;\n    }\n    /**\n     * Access the WrappedComponent's instance.\n     */\n\n\n    var _proto = onClickOutside.prototype;\n\n    _proto.getInstance = function getInstance() {\n      if (WrappedComponent.prototype && !WrappedComponent.prototype.isReactComponent) {\n        return this;\n      }\n\n      var ref = this.instanceRef;\n      return ref.getInstance ? ref.getInstance() : ref;\n    };\n\n    /**\n     * Add click listeners to the current document,\n     * linked to this component's state.\n     */\n    _proto.componentDidMount = function componentDidMount() {\n      // If we are in an environment without a DOM such\n      // as shallow rendering or snapshots then we exit\n      // early to prevent any unhandled errors being thrown.\n      if (typeof document === 'undefined' || !document.createElement) {\n        return;\n      }\n\n      var instance = this.getInstance();\n\n      if (config && typeof config.handleClickOutside === 'function') {\n        this.__clickOutsideHandlerProp = config.handleClickOutside(instance);\n\n        if (typeof this.__clickOutsideHandlerProp !== 'function') {\n          throw new Error(\"WrappedComponent: \" + componentName + \" lacks a function for processing outside click events specified by the handleClickOutside config option.\");\n        }\n      }\n\n      this.componentNode = this.__getComponentNode(); // return early so we dont initiate onClickOutside\n\n      if (this.props.disableOnClickOutside) return;\n      this.enableOnClickOutside();\n    };\n\n    _proto.componentDidUpdate = function componentDidUpdate() {\n      this.componentNode = this.__getComponentNode();\n    }\n    /**\n     * Remove all document's event listeners for this component\n     */\n    ;\n\n    _proto.componentWillUnmount = function componentWillUnmount() {\n      this.disableOnClickOutside();\n    }\n    /**\n     * Can be called to explicitly enable event listening\n     * for clicks and touches outside of this element.\n     */\n    ;\n\n    /**\n     * Pass-through render\n     */\n    _proto.render = function render() {\n      // eslint-disable-next-line no-unused-vars\n      var _this$props = this.props;\n          _this$props.excludeScrollbar;\n          var props = _objectWithoutPropertiesLoose(_this$props, [\"excludeScrollbar\"]);\n\n      if (WrappedComponent.prototype && WrappedComponent.prototype.isReactComponent) {\n        props.ref = this.getRef;\n      } else {\n        props.wrappedRef = this.getRef;\n      }\n\n      props.disableOnClickOutside = this.disableOnClickOutside;\n      props.enableOnClickOutside = this.enableOnClickOutside;\n      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(WrappedComponent, props);\n    };\n\n    return onClickOutside;\n  }(react__WEBPACK_IMPORTED_MODULE_0__.Component), _class.displayName = \"OnClickOutside(\" + componentName + \")\", _class.defaultProps = {\n    eventTypes: ['mousedown', 'touchstart'],\n    excludeScrollbar: config && config.excludeScrollbar || false,\n    outsideClickIgnoreClass: IGNORE_CLASS_NAME,\n    preventDefault: false,\n    stopPropagation: false\n  }, _class.getClass = function () {\n    return WrappedComponent.getClass ? WrappedComponent.getClass() : WrappedComponent;\n  }, _temp;\n}/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (onClickOutsideHOC);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVhY3Qtb25jbGlja291dHNpZGUvZGlzdC9yZWFjdC1vbmNsaWNrb3V0c2lkZS5lcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBZ0Y7QUFDaEY7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGNBQWMsdUJBQXVCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3Q0FBd0M7QUFDeEM7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxlQUFlLHNEQUFXO0FBQzFCOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHNEQUFzRDs7QUFFdEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsb0RBQWE7QUFDMUI7O0FBRUE7QUFDQSxHQUFHLENBQUMsNENBQVM7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNILENBQUMsaUVBQWUsaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2FyZXB1bHNlLy4vbm9kZV9tb2R1bGVzL3JlYWN0LW9uY2xpY2tvdXRzaWRlL2Rpc3QvcmVhY3Qtb25jbGlja291dHNpZGUuZXMuanM/YTYzZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2NyZWF0ZUVsZW1lbnQsQ29tcG9uZW50fWZyb20ncmVhY3QnO2ltcG9ydCB7ZmluZERPTU5vZGV9ZnJvbSdyZWFjdC1kb20nO2Z1bmN0aW9uIF9pbmhlcml0c0xvb3NlKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcy5wcm90b3R5cGUpO1xuICBzdWJDbGFzcy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBzdWJDbGFzcztcblxuICBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpO1xufVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgICBvLl9fcHJvdG9fXyA9IHA7XG4gICAgcmV0dXJuIG87XG4gIH07XG5cbiAgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTtcbn1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkge1xuICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcbiAgdmFyIHRhcmdldCA9IHt9O1xuICB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG4gIHZhciBrZXksIGk7XG5cbiAgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHtcbiAgICBrZXkgPSBzb3VyY2VLZXlzW2ldO1xuICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikge1xuICBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIHNlbGY7XG59LyoqXG4gKiBDaGVjayB3aGV0aGVyIHNvbWUgRE9NIG5vZGUgaXMgb3VyIENvbXBvbmVudCdzIG5vZGUuXG4gKi9cbmZ1bmN0aW9uIGlzTm9kZUZvdW5kKGN1cnJlbnQsIGNvbXBvbmVudE5vZGUsIGlnbm9yZUNsYXNzKSB7XG4gIGlmIChjdXJyZW50ID09PSBjb21wb25lbnROb2RlKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gLy8gU1ZHIDx1c2UvPiBlbGVtZW50cyBkbyBub3QgdGVjaG5pY2FsbHkgcmVzaWRlIGluIHRoZSByZW5kZXJlZCBET00sIHNvXG4gIC8vIHRoZXkgZG8gbm90IGhhdmUgY2xhc3NMaXN0IGRpcmVjdGx5LCBidXQgdGhleSBvZmZlciBhIGxpbmsgdG8gdGhlaXJcbiAgLy8gY29ycmVzcG9uZGluZyBlbGVtZW50LCB3aGljaCBjYW4gaGF2ZSBjbGFzc0xpc3QuIFRoaXMgZXh0cmEgY2hlY2sgaXMgZm9yXG4gIC8vIHRoYXQgY2FzZS5cbiAgLy8gU2VlOiBodHRwOi8vd3d3LnczLm9yZy9UUi9TVkcxMS9zdHJ1Y3QuaHRtbCNJbnRlcmZhY2VTVkdVc2VFbGVtZW50XG4gIC8vIERpc2N1c3Npb246IGh0dHBzOi8vZ2l0aHViLmNvbS9Qb21heC9yZWFjdC1vbmNsaWNrb3V0c2lkZS9wdWxsLzE3XG5cblxuICBpZiAoY3VycmVudC5jb3JyZXNwb25kaW5nRWxlbWVudCkge1xuICAgIHJldHVybiBjdXJyZW50LmNvcnJlc3BvbmRpbmdFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhpZ25vcmVDbGFzcyk7XG4gIH1cblxuICByZXR1cm4gY3VycmVudC5jbGFzc0xpc3QuY29udGFpbnMoaWdub3JlQ2xhc3MpO1xufVxuLyoqXG4gKiBUcnkgdG8gZmluZCBvdXIgbm9kZSBpbiBhIGhpZXJhcmNoeSBvZiBub2RlcywgcmV0dXJuaW5nIHRoZSBkb2N1bWVudFxuICogbm9kZSBhcyBoaWdoZXN0IG5vZGUgaWYgb3VyIG5vZGUgaXMgbm90IGZvdW5kIGluIHRoZSBwYXRoIHVwLlxuICovXG5cbmZ1bmN0aW9uIGZpbmRIaWdoZXN0KGN1cnJlbnQsIGNvbXBvbmVudE5vZGUsIGlnbm9yZUNsYXNzKSB7XG4gIGlmIChjdXJyZW50ID09PSBjb21wb25lbnROb2RlKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gLy8gSWYgc291cmNlPWxvY2FsIHRoZW4gdGhpcyBldmVudCBjYW1lIGZyb20gJ3NvbWV3aGVyZSdcbiAgLy8gaW5zaWRlIGFuZCBzaG91bGQgYmUgaWdub3JlZC4gV2UgY291bGQgaGFuZGxlIHRoaXMgd2l0aFxuICAvLyBhIGxheWVyZWQgYXBwcm9hY2gsIHRvbywgYnV0IHRoYXQgcmVxdWlyZXMgZ29pbmcgYmFjayB0b1xuICAvLyB0aGlua2luZyBpbiB0ZXJtcyBvZiBEb20gbm9kZSBuZXN0aW5nLCBydW5uaW5nIGNvdW50ZXJcbiAgLy8gdG8gUmVhY3QncyAneW91IHNob3VsZG4ndCBjYXJlIGFib3V0IHRoZSBET00nIHBoaWxvc29waHkuXG4gIC8vIEFsc28gY292ZXIgc2hhZG93Um9vdCBub2RlIGJ5IGNoZWNraW5nIGN1cnJlbnQuaG9zdFxuXG5cbiAgd2hpbGUgKGN1cnJlbnQucGFyZW50Tm9kZSB8fCBjdXJyZW50Lmhvc3QpIHtcbiAgICAvLyBPbmx5IGNoZWNrIG5vcm1hbCBub2RlIHdpdGhvdXQgc2hhZG93Um9vdFxuICAgIGlmIChjdXJyZW50LnBhcmVudE5vZGUgJiYgaXNOb2RlRm91bmQoY3VycmVudCwgY29tcG9uZW50Tm9kZSwgaWdub3JlQ2xhc3MpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBjdXJyZW50ID0gY3VycmVudC5wYXJlbnROb2RlIHx8IGN1cnJlbnQuaG9zdDtcbiAgfVxuXG4gIHJldHVybiBjdXJyZW50O1xufVxuLyoqXG4gKiBDaGVjayBpZiB0aGUgYnJvd3NlciBzY3JvbGxiYXIgd2FzIGNsaWNrZWRcbiAqL1xuXG5mdW5jdGlvbiBjbGlja2VkU2Nyb2xsYmFyKGV2dCkge1xuICByZXR1cm4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoIDw9IGV2dC5jbGllbnRYIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQgPD0gZXZ0LmNsaWVudFk7XG59Ly8gaWRlYWxseSB3aWxsIGdldCByZXBsYWNlZCB3aXRoIGV4dGVybmFsIGRlcFxuLy8gd2hlbiByYWZyZXgvZGV0ZWN0LXBhc3NpdmUtZXZlbnRzIzQgYW5kIHJhZnJleC9kZXRlY3QtcGFzc2l2ZS1ldmVudHMjNSBnZXQgbWVyZ2VkIGluXG52YXIgdGVzdFBhc3NpdmVFdmVudFN1cHBvcnQgPSBmdW5jdGlvbiB0ZXN0UGFzc2l2ZUV2ZW50U3VwcG9ydCgpIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBwYXNzaXZlID0gZmFsc2U7XG4gIHZhciBvcHRpb25zID0gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAncGFzc2l2ZScsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHBhc3NpdmUgPSB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgdmFyIG5vb3AgPSBmdW5jdGlvbiBub29wKCkge307XG5cbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Rlc3RQYXNzaXZlRXZlbnRTdXBwb3J0Jywgbm9vcCwgb3B0aW9ucyk7XG4gIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCd0ZXN0UGFzc2l2ZUV2ZW50U3VwcG9ydCcsIG5vb3AsIG9wdGlvbnMpO1xuICByZXR1cm4gcGFzc2l2ZTtcbn07ZnVuY3Rpb24gYXV0b0luYyhzZWVkKSB7XG4gIGlmIChzZWVkID09PSB2b2lkIDApIHtcbiAgICBzZWVkID0gMDtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuICsrc2VlZDtcbiAgfTtcbn1cblxudmFyIHVpZCA9IGF1dG9JbmMoKTt2YXIgcGFzc2l2ZUV2ZW50U3VwcG9ydDtcbnZhciBoYW5kbGVyc01hcCA9IHt9O1xudmFyIGVuYWJsZWRJbnN0YW5jZXMgPSB7fTtcbnZhciB0b3VjaEV2ZW50cyA9IFsndG91Y2hzdGFydCcsICd0b3VjaG1vdmUnXTtcbnZhciBJR05PUkVfQ0xBU1NfTkFNRSA9ICdpZ25vcmUtcmVhY3Qtb25jbGlja291dHNpZGUnO1xuLyoqXG4gKiBPcHRpb25zIGZvciBhZGRFdmVudEhhbmRsZXIgYW5kIHJlbW92ZUV2ZW50SGFuZGxlclxuICovXG5cbmZ1bmN0aW9uIGdldEV2ZW50SGFuZGxlck9wdGlvbnMoaW5zdGFuY2UsIGV2ZW50TmFtZSkge1xuICB2YXIgaGFuZGxlck9wdGlvbnMgPSB7fTtcbiAgdmFyIGlzVG91Y2hFdmVudCA9IHRvdWNoRXZlbnRzLmluZGV4T2YoZXZlbnROYW1lKSAhPT0gLTE7XG5cbiAgaWYgKGlzVG91Y2hFdmVudCAmJiBwYXNzaXZlRXZlbnRTdXBwb3J0KSB7XG4gICAgaGFuZGxlck9wdGlvbnMucGFzc2l2ZSA9ICFpbnN0YW5jZS5wcm9wcy5wcmV2ZW50RGVmYXVsdDtcbiAgfVxuXG4gIHJldHVybiBoYW5kbGVyT3B0aW9ucztcbn1cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBnZW5lcmF0ZXMgdGhlIEhPQyBmdW5jdGlvbiB0aGF0IHlvdSdsbCB1c2VcbiAqIGluIG9yZGVyIHRvIGltcGFydCBvbk91dHNpZGVDbGljayBsaXN0ZW5pbmcgdG8gYW5cbiAqIGFyYml0cmFyeSBjb21wb25lbnQuIEl0IGdldHMgY2FsbGVkIGF0IHRoZSBlbmQgb2YgdGhlXG4gKiBib290c3RyYXBwaW5nIGNvZGUgdG8geWllbGQgYW4gaW5zdGFuY2Ugb2YgdGhlXG4gKiBvbkNsaWNrT3V0c2lkZUhPQyBmdW5jdGlvbiBkZWZpbmVkIGluc2lkZSBzZXR1cEhPQygpLlxuICovXG5cblxuZnVuY3Rpb24gb25DbGlja091dHNpZGVIT0MoV3JhcHBlZENvbXBvbmVudCwgY29uZmlnKSB7XG4gIHZhciBfY2xhc3MsIF90ZW1wO1xuXG4gIHZhciBjb21wb25lbnROYW1lID0gV3JhcHBlZENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBXcmFwcGVkQ29tcG9uZW50Lm5hbWUgfHwgJ0NvbXBvbmVudCc7XG4gIHJldHVybiBfdGVtcCA9IF9jbGFzcyA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICAgIF9pbmhlcml0c0xvb3NlKG9uQ2xpY2tPdXRzaWRlLCBfQ29tcG9uZW50KTtcblxuICAgIGZ1bmN0aW9uIG9uQ2xpY2tPdXRzaWRlKHByb3BzKSB7XG4gICAgICB2YXIgX3RoaXM7XG5cbiAgICAgIF90aGlzID0gX0NvbXBvbmVudC5jYWxsKHRoaXMsIHByb3BzKSB8fCB0aGlzO1xuXG4gICAgICBfdGhpcy5fX291dHNpZGVDbGlja0hhbmRsZXIgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBfdGhpcy5fX2NsaWNrT3V0c2lkZUhhbmRsZXJQcm9wID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgX3RoaXMuX19jbGlja091dHNpZGVIYW5kbGVyUHJvcChldmVudCk7XG5cbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgaW5zdGFuY2UgPSBfdGhpcy5nZXRJbnN0YW5jZSgpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgaW5zdGFuY2UucHJvcHMuaGFuZGxlQ2xpY2tPdXRzaWRlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgaW5zdGFuY2UucHJvcHMuaGFuZGxlQ2xpY2tPdXRzaWRlKGV2ZW50KTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIGluc3RhbmNlLmhhbmRsZUNsaWNrT3V0c2lkZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIGluc3RhbmNlLmhhbmRsZUNsaWNrT3V0c2lkZShldmVudCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiV3JhcHBlZENvbXBvbmVudDogXCIgKyBjb21wb25lbnROYW1lICsgXCIgbGFja3MgYSBoYW5kbGVDbGlja091dHNpZGUoZXZlbnQpIGZ1bmN0aW9uIGZvciBwcm9jZXNzaW5nIG91dHNpZGUgY2xpY2sgZXZlbnRzLlwiKTtcbiAgICAgIH07XG5cbiAgICAgIF90aGlzLl9fZ2V0Q29tcG9uZW50Tm9kZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGluc3RhbmNlID0gX3RoaXMuZ2V0SW5zdGFuY2UoKTtcblxuICAgICAgICBpZiAoY29uZmlnICYmIHR5cGVvZiBjb25maWcuc2V0Q2xpY2tPdXRzaWRlUmVmID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbmZpZy5zZXRDbGlja091dHNpZGVSZWYoKShpbnN0YW5jZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIGluc3RhbmNlLnNldENsaWNrT3V0c2lkZVJlZiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHJldHVybiBpbnN0YW5jZS5zZXRDbGlja091dHNpZGVSZWYoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmaW5kRE9NTm9kZShpbnN0YW5jZSk7XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5lbmFibGVPbkNsaWNrT3V0c2lkZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcgfHwgZW5hYmxlZEluc3RhbmNlc1tfdGhpcy5fdWlkXSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgcGFzc2l2ZUV2ZW50U3VwcG9ydCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICBwYXNzaXZlRXZlbnRTdXBwb3J0ID0gdGVzdFBhc3NpdmVFdmVudFN1cHBvcnQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGVuYWJsZWRJbnN0YW5jZXNbX3RoaXMuX3VpZF0gPSB0cnVlO1xuICAgICAgICB2YXIgZXZlbnRzID0gX3RoaXMucHJvcHMuZXZlbnRUeXBlcztcblxuICAgICAgICBpZiAoIWV2ZW50cy5mb3JFYWNoKSB7XG4gICAgICAgICAgZXZlbnRzID0gW2V2ZW50c107XG4gICAgICAgIH1cblxuICAgICAgICBoYW5kbGVyc01hcFtfdGhpcy5fdWlkXSA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgIGlmIChfdGhpcy5jb21wb25lbnROb2RlID09PSBudWxsKSByZXR1cm47XG5cbiAgICAgICAgICBpZiAoX3RoaXMucHJvcHMucHJldmVudERlZmF1bHQpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKF90aGlzLnByb3BzLnN0b3BQcm9wYWdhdGlvbikge1xuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKF90aGlzLnByb3BzLmV4Y2x1ZGVTY3JvbGxiYXIgJiYgY2xpY2tlZFNjcm9sbGJhcihldmVudCkpIHJldHVybjtcbiAgICAgICAgICB2YXIgY3VycmVudCA9IGV2ZW50LmNvbXBvc2VkICYmIGV2ZW50LmNvbXBvc2VkUGF0aCAmJiBldmVudC5jb21wb3NlZFBhdGgoKS5zaGlmdCgpIHx8IGV2ZW50LnRhcmdldDtcblxuICAgICAgICAgIGlmIChmaW5kSGlnaGVzdChjdXJyZW50LCBfdGhpcy5jb21wb25lbnROb2RlLCBfdGhpcy5wcm9wcy5vdXRzaWRlQ2xpY2tJZ25vcmVDbGFzcykgIT09IGRvY3VtZW50KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgX3RoaXMuX19vdXRzaWRlQ2xpY2tIYW5kbGVyKGV2ZW50KTtcbiAgICAgICAgfTtcblxuICAgICAgICBldmVudHMuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnROYW1lKSB7XG4gICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGhhbmRsZXJzTWFwW190aGlzLl91aWRdLCBnZXRFdmVudEhhbmRsZXJPcHRpb25zKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBldmVudE5hbWUpKTtcbiAgICAgICAgfSk7XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5kaXNhYmxlT25DbGlja091dHNpZGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGRlbGV0ZSBlbmFibGVkSW5zdGFuY2VzW190aGlzLl91aWRdO1xuICAgICAgICB2YXIgZm4gPSBoYW5kbGVyc01hcFtfdGhpcy5fdWlkXTtcblxuICAgICAgICBpZiAoZm4gJiYgdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHZhciBldmVudHMgPSBfdGhpcy5wcm9wcy5ldmVudFR5cGVzO1xuXG4gICAgICAgICAgaWYgKCFldmVudHMuZm9yRWFjaCkge1xuICAgICAgICAgICAgZXZlbnRzID0gW2V2ZW50c107XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50TmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBmbiwgZ2V0RXZlbnRIYW5kbGVyT3B0aW9ucyhfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgZXZlbnROYW1lKSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgZGVsZXRlIGhhbmRsZXJzTWFwW190aGlzLl91aWRdO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5nZXRSZWYgPSBmdW5jdGlvbiAocmVmKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5pbnN0YW5jZVJlZiA9IHJlZjtcbiAgICAgIH07XG5cbiAgICAgIF90aGlzLl91aWQgPSB1aWQoKTtcbiAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogQWNjZXNzIHRoZSBXcmFwcGVkQ29tcG9uZW50J3MgaW5zdGFuY2UuXG4gICAgICovXG5cblxuICAgIHZhciBfcHJvdG8gPSBvbkNsaWNrT3V0c2lkZS5wcm90b3R5cGU7XG5cbiAgICBfcHJvdG8uZ2V0SW5zdGFuY2UgPSBmdW5jdGlvbiBnZXRJbnN0YW5jZSgpIHtcbiAgICAgIGlmIChXcmFwcGVkQ29tcG9uZW50LnByb3RvdHlwZSAmJiAhV3JhcHBlZENvbXBvbmVudC5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudCkge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cblxuICAgICAgdmFyIHJlZiA9IHRoaXMuaW5zdGFuY2VSZWY7XG4gICAgICByZXR1cm4gcmVmLmdldEluc3RhbmNlID8gcmVmLmdldEluc3RhbmNlKCkgOiByZWY7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEFkZCBjbGljayBsaXN0ZW5lcnMgdG8gdGhlIGN1cnJlbnQgZG9jdW1lbnQsXG4gICAgICogbGlua2VkIHRvIHRoaXMgY29tcG9uZW50J3Mgc3RhdGUuXG4gICAgICovXG4gICAgX3Byb3RvLmNvbXBvbmVudERpZE1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAvLyBJZiB3ZSBhcmUgaW4gYW4gZW52aXJvbm1lbnQgd2l0aG91dCBhIERPTSBzdWNoXG4gICAgICAvLyBhcyBzaGFsbG93IHJlbmRlcmluZyBvciBzbmFwc2hvdHMgdGhlbiB3ZSBleGl0XG4gICAgICAvLyBlYXJseSB0byBwcmV2ZW50IGFueSB1bmhhbmRsZWQgZXJyb3JzIGJlaW5nIHRocm93bi5cbiAgICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnIHx8ICFkb2N1bWVudC5jcmVhdGVFbGVtZW50KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIGluc3RhbmNlID0gdGhpcy5nZXRJbnN0YW5jZSgpO1xuXG4gICAgICBpZiAoY29uZmlnICYmIHR5cGVvZiBjb25maWcuaGFuZGxlQ2xpY2tPdXRzaWRlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRoaXMuX19jbGlja091dHNpZGVIYW5kbGVyUHJvcCA9IGNvbmZpZy5oYW5kbGVDbGlja091dHNpZGUoaW5zdGFuY2UpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5fX2NsaWNrT3V0c2lkZUhhbmRsZXJQcm9wICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiV3JhcHBlZENvbXBvbmVudDogXCIgKyBjb21wb25lbnROYW1lICsgXCIgbGFja3MgYSBmdW5jdGlvbiBmb3IgcHJvY2Vzc2luZyBvdXRzaWRlIGNsaWNrIGV2ZW50cyBzcGVjaWZpZWQgYnkgdGhlIGhhbmRsZUNsaWNrT3V0c2lkZSBjb25maWcgb3B0aW9uLlwiKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLmNvbXBvbmVudE5vZGUgPSB0aGlzLl9fZ2V0Q29tcG9uZW50Tm9kZSgpOyAvLyByZXR1cm4gZWFybHkgc28gd2UgZG9udCBpbml0aWF0ZSBvbkNsaWNrT3V0c2lkZVxuXG4gICAgICBpZiAodGhpcy5wcm9wcy5kaXNhYmxlT25DbGlja091dHNpZGUpIHJldHVybjtcbiAgICAgIHRoaXMuZW5hYmxlT25DbGlja091dHNpZGUoKTtcbiAgICB9O1xuXG4gICAgX3Byb3RvLmNvbXBvbmVudERpZFVwZGF0ZSA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50Tm9kZSA9IHRoaXMuX19nZXRDb21wb25lbnROb2RlKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBhbGwgZG9jdW1lbnQncyBldmVudCBsaXN0ZW5lcnMgZm9yIHRoaXMgY29tcG9uZW50XG4gICAgICovXG4gICAgO1xuXG4gICAgX3Byb3RvLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICB0aGlzLmRpc2FibGVPbkNsaWNrT3V0c2lkZSgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDYW4gYmUgY2FsbGVkIHRvIGV4cGxpY2l0bHkgZW5hYmxlIGV2ZW50IGxpc3RlbmluZ1xuICAgICAqIGZvciBjbGlja3MgYW5kIHRvdWNoZXMgb3V0c2lkZSBvZiB0aGlzIGVsZW1lbnQuXG4gICAgICovXG4gICAgO1xuXG4gICAgLyoqXG4gICAgICogUGFzcy10aHJvdWdoIHJlbmRlclxuICAgICAqL1xuICAgIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgICAgIHZhciBfdGhpcyRwcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgICAgICAgX3RoaXMkcHJvcHMuZXhjbHVkZVNjcm9sbGJhcjtcbiAgICAgICAgICB2YXIgcHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfdGhpcyRwcm9wcywgW1wiZXhjbHVkZVNjcm9sbGJhclwiXSk7XG5cbiAgICAgIGlmIChXcmFwcGVkQ29tcG9uZW50LnByb3RvdHlwZSAmJiBXcmFwcGVkQ29tcG9uZW50LnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50KSB7XG4gICAgICAgIHByb3BzLnJlZiA9IHRoaXMuZ2V0UmVmO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcHJvcHMud3JhcHBlZFJlZiA9IHRoaXMuZ2V0UmVmO1xuICAgICAgfVxuXG4gICAgICBwcm9wcy5kaXNhYmxlT25DbGlja091dHNpZGUgPSB0aGlzLmRpc2FibGVPbkNsaWNrT3V0c2lkZTtcbiAgICAgIHByb3BzLmVuYWJsZU9uQ2xpY2tPdXRzaWRlID0gdGhpcy5lbmFibGVPbkNsaWNrT3V0c2lkZTtcbiAgICAgIHJldHVybiBjcmVhdGVFbGVtZW50KFdyYXBwZWRDb21wb25lbnQsIHByb3BzKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIG9uQ2xpY2tPdXRzaWRlO1xuICB9KENvbXBvbmVudCksIF9jbGFzcy5kaXNwbGF5TmFtZSA9IFwiT25DbGlja091dHNpZGUoXCIgKyBjb21wb25lbnROYW1lICsgXCIpXCIsIF9jbGFzcy5kZWZhdWx0UHJvcHMgPSB7XG4gICAgZXZlbnRUeXBlczogWydtb3VzZWRvd24nLCAndG91Y2hzdGFydCddLFxuICAgIGV4Y2x1ZGVTY3JvbGxiYXI6IGNvbmZpZyAmJiBjb25maWcuZXhjbHVkZVNjcm9sbGJhciB8fCBmYWxzZSxcbiAgICBvdXRzaWRlQ2xpY2tJZ25vcmVDbGFzczogSUdOT1JFX0NMQVNTX05BTUUsXG4gICAgcHJldmVudERlZmF1bHQ6IGZhbHNlLFxuICAgIHN0b3BQcm9wYWdhdGlvbjogZmFsc2VcbiAgfSwgX2NsYXNzLmdldENsYXNzID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBXcmFwcGVkQ29tcG9uZW50LmdldENsYXNzID8gV3JhcHBlZENvbXBvbmVudC5nZXRDbGFzcygpIDogV3JhcHBlZENvbXBvbmVudDtcbiAgfSwgX3RlbXA7XG59ZXhwb3J0IGRlZmF1bHQgb25DbGlja091dHNpZGVIT0M7ZXhwb3J0e0lHTk9SRV9DTEFTU19OQU1FfTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/react-onclickoutside/dist/react-onclickoutside.es.js\n");

/***/ })

};
;