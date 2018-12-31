"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _core = require("@emotion/core");

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _semanticUiReact = require("semantic-ui-react");

var _WithCyclePagination = _interopRequireDefault(require("../../WithCyclePagination"));

var _css = require("./css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var CycleArrowPagination =
/*#__PURE__*/
function (_Component) {
  _inherits(CycleArrowPagination, _Component);

  function CycleArrowPagination(props) {
    var _this;

    _classCallCheck(this, CycleArrowPagination);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CycleArrowPagination).call(this, props));
    _this.fetchPrev = _this.fetchPrev.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.fetchNext = _this.fetchNext.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(CycleArrowPagination, [{
    key: "fetchPrev",
    value: function fetchPrev(e) {
      e.preventDefault();
      var _this$props = this.props,
          prevDisabled = _this$props.prevDisabled,
          fetchPrev = _this$props.fetchPrev;

      if (!prevDisabled) {
        fetchPrev();
      }
    }
  }, {
    key: "fetchNext",
    value: function fetchNext(e) {
      e.preventDefault();
      var _this$props2 = this.props,
          nextDisabled = _this$props2.nextDisabled,
          fetchNext = _this$props2.fetchNext;

      if (!nextDisabled) {
        fetchNext();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          arrowSize = _this$props3.arrowSize,
          arrowColor = _this$props3.arrowColor,
          prevDisabled = _this$props3.prevDisabled,
          nextDisabled = _this$props3.nextDisabled,
          cycleGroup = _this$props3.cycleGroup,
          cycleGroupStartDttm = _this$props3.cycleGroupStartDttm,
          cycleGroupStartDttmLabel = _this$props3.cycleGroupStartDttmLabel;
      return (0, _core.jsx)("div", {
        css: _css.navCss
      }, (0, _core.jsx)("div", {
        css: _css.navLeftColCss
      }, (0, _core.jsx)("a", {
        href: "#prev",
        onClick: this.fetchPrev
      }, (0, _core.jsx)(_semanticUiReact.Icon, {
        name: "arrow left",
        size: arrowSize,
        color: arrowColor,
        disabled: prevDisabled
      }))), (0, _core.jsx)("div", {
        css: _css.navCenterColCss
      }, (0, _core.jsx)("div", null, (0, _core.jsx)(_semanticUiReact.Label, {
        color: "blue"
      }, cycleGroup * -1)), (0, _core.jsx)("div", null, cycleGroupStartDttmLabel), (0, _core.jsx)("div", null, "(", cycleGroupStartDttm, ")")), (0, _core.jsx)("div", {
        css: _css.navRightColCss
      }, (0, _core.jsx)("a", {
        href: "#next",
        onClick: this.fetchNext
      }, (0, _core.jsx)(_semanticUiReact.Icon, {
        name: "arrow right",
        size: arrowSize,
        color: arrowColor,
        disabled: nextDisabled
      }))));
    }
  }]);

  return CycleArrowPagination;
}(_react.Component);

_defineProperty(CycleArrowPagination, "propTypes", {
  arrowColor: _propTypes.default.string,
  arrowSize: _propTypes.default.string,
  prevDisabled: _propTypes.default.bool.isRequired,
  nextDisabled: _propTypes.default.bool.isRequired,
  fetchPrev: _propTypes.default.func.isRequired,
  fetchNext: _propTypes.default.func.isRequired,
  cycleGroup: _propTypes.default.number.isRequired,
  cycleGroupStartDttm: _propTypes.default.string.isRequired,
  cycleGroupStartDttmLabel: _propTypes.default.string
});

_defineProperty(CycleArrowPagination, "defaultProps", {
  arrowColor: 'green',
  arrowSize: 'huge',
  cycleGroupStartDttmLabel: 'Cycle Start DTTM'
});

var _default = (0, _WithCyclePagination.default)(CycleArrowPagination);

exports.default = _default;
module.exports = exports.default;