"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.content = void 0;
var _react = _interopRequireWildcard(require("react"));
var _Dialog = _interopRequireDefault(require("@material-ui/core/Dialog"));
var _DialogContent = _interopRequireDefault(require("@material-ui/core/DialogContent"));
var _DialogTitle = _interopRequireDefault(require("@material-ui/core/DialogTitle"));
var _GetApp = _interopRequireDefault(require("@material-ui/icons/GetApp"));
var _ListItemIcon = _interopRequireDefault(require("@material-ui/core/ListItemIcon"));
var _ListItemText = _interopRequireDefault(require("@material-ui/core/ListItemText"));
var _MenuList = _interopRequireDefault(require("@material-ui/core/MenuList"));
var _MenuItem = _interopRequireDefault(require("@material-ui/core/MenuItem"));
var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));
var _propTypes = _interopRequireWildcard(require("prop-types"));
var _core = require("@material-ui/core");
var _AnnotationUploader = require("./AnnotationUploader");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
/** */
var styles = function styles(theme) {
  return {
    listitem: {
      '&:focus': {
        backgroundColor: theme.palette.action.focus
      },
      '&:hover': {
        backgroundColor: theme.palette.action.hover
      }
    }
  };
};
var content;

/** */
exports.content = content;
var AnnotationExportDialog = /*#__PURE__*/function (_Component) {
  _inheritsLoose(AnnotationExportDialog, _Component);
  /** */
  function AnnotationExportDialog(props) {
    var _this;
    _this = _Component.call(this, props) || this;
    _this.state = {
      exportLinks: []
    };
    _this.closeDialog = _this.closeDialog.bind(_assertThisInitialized(_this));
    return _this;
  }

  /** */
  var _proto = AnnotationExportDialog.prototype;
  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var _this2 = this;
    var _this$props = this.props,
      canvases = _this$props.canvases,
      config = _this$props.config,
      open = _this$props.open;
    var _ref = prevProps || {},
      prevOpen = _ref.open;
    if (prevOpen !== open && open) {
      /** */
      var reducer = /*#__PURE__*/function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(acc, canvas) {
          var store, resolvedAcc, label, data, url;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                store = config.annotation.adapter(canvas.id);
                _context.next = 3;
                return acc;
              case 3:
                resolvedAcc = _context.sent;
                _context.next = 6;
                return store.all();
              case 6:
                exports.content = content = _context.sent;
                if (!content) {
                  _context.next = 12;
                  break;
                }
                // eslint-disable-next-line no-underscore-dangle
                label = canvas.__jsonld && canvas.__jsonld.label || canvas.id;
                data = new Blob([JSON.stringify(content)], {
                  type: 'application/json'
                });
                url = window.URL.createObjectURL(data);
                return _context.abrupt("return", [].concat(resolvedAcc, [{
                  canvasId: canvas.id,
                  id: content.id || content['@id'],
                  label: label,
                  url: url
                }]));
              case 12:
                return _context.abrupt("return", resolvedAcc);
              case 13:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }));
        return function reducer(_x, _x2) {
          return _ref2.apply(this, arguments);
        };
      }();
      if (canvases && canvases.length > 0) {
        canvases.reduce(reducer, []).then(function (exportLinks) {
          _this2.setState({
            exportLinks: exportLinks
          });
        });
      }
    }
  }

  /** */;
  _proto.closeDialog = function closeDialog() {
    var handleClose = this.props.handleClose;
    this.setState({
      exportLinks: []
    });
    handleClose();
  }

  /** */;
  _proto.render = function render() {
    var _this$props2 = this.props,
      classes = _this$props2.classes,
      handleClose = _this$props2.handleClose,
      open = _this$props2.open;
    var exportLinks = this.state.exportLinks;
    return /*#__PURE__*/_react["default"].createElement(_Dialog["default"], {
      "aria-labelledby": "annotation-export-dialog-title",
      id: "annotation-export-dialog",
      onClose: handleClose,
      onEscapeKeyDown: this.closeDialog,
      open: open
    }, /*#__PURE__*/_react["default"].createElement(_DialogTitle["default"], {
      id: "annotation-export-dialog-title",
      disableTypography: true
    }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
      variant: "h2"
    }, "Upload Annotations")), /*#__PURE__*/_react["default"].createElement(_DialogContent["default"], null, exportLinks === undefined || exportLinks.length === 0 ? /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
      variant: "body1"
    }, "No annotations stored yet.") : /*#__PURE__*/_react["default"].createElement(_MenuList["default"], null, exportLinks.map(function (dl) {
      return /*#__PURE__*/_react["default"].createElement(_MenuItem["default"], {
        button: true,
        className: classes.listitem,
        component: "a",
        key: dl.canvasId,
        "aria-label": "Upload annotations to the server",
        onClick: _AnnotationUploader.uploadAnnotations
        // href={dl.url}
        // download={`${dl.id}.json`}
      }, /*#__PURE__*/_react["default"].createElement(_ListItemIcon["default"], null, /*#__PURE__*/_react["default"].createElement(_GetApp["default"], null)), /*#__PURE__*/_react["default"].createElement(_ListItemText["default"], null, "Upload annotations for the server"));
    }))));
  };
  return AnnotationExportDialog;
}(_react.Component);
AnnotationExportDialog.propTypes = process.env.NODE_ENV !== "production" ? {
  canvases: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    id: _propTypes["default"].string
  })).isRequired,
  classes: _propTypes["default"].objectOf(_propTypes["default"].string),
  config: _propTypes["default"].shape({
    annotation: _propTypes["default"].shape({
      adapter: _propTypes["default"].func
    })
  }).isRequired,
  handleClose: _propTypes["default"].func.isRequired,
  open: _propTypes.bool.isRequired
} : {};
AnnotationExportDialog.defaultProps = {
  classes: {}
};
var _default = (0, _core.withStyles)(styles)(AnnotationExportDialog);
/* {
  "name": "mirador-annotations",
  "version": "0.5.0",
  "description": "mirador-annotations React component",
  "main": "lib/index.js",
  "module": "es/index.js",
  "files": [
    "css",
    "es",
    "lib",
    "umd"
  ],
  "scripts": {
    "build": "nwb build-react-component",
    "clean": "nwb clean-module && nwb clean-demo",
    "lint": "eslint ./src ./__tests__",
    "prepublishOnly": "npm run build",
    "start": "nwb serve-react-demo",
    "test": "npm run lint && jest",
    "test:coverage": "jest --coverage",
    "test:watch": "jest --watch"
  },
  "dependencies": {
    "@psychobolt/react-paperjs": "^1.0.0",
    "@psychobolt/react-paperjs-editor": "^0.0.14",
    "draft-js": "^0.11.6",
    "draft-js-export-html": "^1.4.1",
    "draft-js-import-html": "^1.4.1",
    "immutable": "^4.0.0-rc.12",
    "material-ui-color-components": "^0.3.0",
    "paper": "^0.12.11",
    "react-color": "^2.18.1"
  },
  "peerDependencies": {
    "@material-ui/core": "^4.9.13",
    "@material-ui/icons": "^4.9.1",
    "@material-ui/lab": "^4.0.0-alpha.52",
    "lodash": "^4.17.11",
    "mirador": "^3.0.0-rc.5",
    "prop-types": "^15.7.2",
    "react": "^17.0",
    "react-dom": "^17.0",
    "uuid": "^8.0.0"
  },
  "devDependencies": {
    "@babel/core": "^7.10.4",
    "@babel/preset-env": "^7.10.4",
    "@babel/preset-react": "^7.10.4",
    "@material-ui/core": "^4.11.0",
    "@material-ui/icons": "^4.9.1",
    "@material-ui/lab": "^4.0.0-alpha.56",
    "@wojtekmaj/enzyme-adapter-react-17": "^0.6.0",
    "babel-eslint": "^10.1.0",
    "canvas": "^2.6.1",
    "enzyme": "^3.11.0",
    "eslint": "^7.2",
    "eslint-config-airbnb": "^18.2.0",
    "eslint-config-react-app": "^6.0.0",
    "eslint-plugin-flowtype": "^5.6.0",
    "eslint-plugin-import": "^2.22.0",
    "eslint-plugin-jest": "^23.18.0",
    "eslint-plugin-jsx-a11y": "^6.3.1",
    "eslint-plugin-react": "^7.20.3",
    "eslint-plugin-react-hooks": "^4.0.6",
    "jest": "^26.1.0",
    "jest-canvas-mock": "^2.2.0",
    "jest-localstorage-mock": "^2.4.2",
    "mirador": "^3.0.0-rc.5",
    "nwb": "^0.24.7",
    "prop-types": "^15.7.2",
    "react": "^17.0",
    "react-dom": "^17.0",
    "uuid": "^8.2.0"
  },
  "author": "",
  "homepage": "",
  "license": "Apache-2.0",
  "repository": "",
  "keywords": [
    "react-component"
  ]
}

*/
exports["default"] = _default;