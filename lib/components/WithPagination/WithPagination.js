"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withPagination = void 0;

var _core = require("@emotion/core");

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react2 = require("javascript-utils/lib/react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var withPagination = function withPagination(WrappedComponent) {
  var WithPagination =
  /*#__PURE__*/
  function (_Component) {
    _inherits(WithPagination, _Component);

    function WithPagination(props) {
      var _this;

      _classCallCheck(this, WithPagination);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(WithPagination).call(this, props));
      _this.buttonIndex = 0; // Used to assign a unique key to each button

      return _this;
    }

    _createClass(WithPagination, [{
      key: "getCurrentPage",
      value: function getCurrentPage() {
        return this.props.currentPage - 1;
      }
      /**
       * Returns the begin and end pages that need to be displayed.
       *
       * @returns {Array}
       */

    }, {
      key: "getPageRange",
      value: function getPageRange() {
        var _this$props = this.props,
            totalPages = _this$props.totalPages,
            maxButtonCount = _this$props.maxButtonCount;
        var currentPage = this.getCurrentPage();
        var beginPage = Math.max(0, currentPage - parseInt(maxButtonCount / 2, 10));
        var endPage = beginPage + (maxButtonCount - 1);

        if (endPage >= totalPages) {
          endPage = totalPages - 1;
          beginPage = Math.max(0, endPage - (maxButtonCount + 1));
        }

        return [beginPage, endPage];
      }
      /**
       * Creates a page button.
       *
       * @param {String} label - The text label for the button
       * @param {Number} page - The page number
       * @param {String} className - The CSS class for the page button
       * @param {Boolean} disabled - Whether this page button is disabled
       * @param {Boolean} active - Whether this page button is active
       * @return {Object} - Object containing button information
       */

    }, {
      key: "createPageButton",
      value: function createPageButton(label, page, className, disabled, active) {
        var _this$props2 = this.props,
            disabledPageClassName = _this$props2.disabledPageClassName,
            activePageClassName = _this$props2.activePageClassName;
        var normalizedClassName = className;

        if (disabled || active) {
          normalizedClassName += ' ';
          normalizedClassName += disabled ? disabledPageClassName : activePageClassName;
        }

        return {
          key: ++this.buttonIndex,
          name: "".concat(page + 1),
          label: label,
          className: normalizedClassName,
          active: active,
          disabled: disabled
        };
      }
      /**
       * Creates the page buttons.
       *
       * @return {Array} - Array of object containing button information.
       */

    }, {
      key: "createPageButtons",
      value: function createPageButtons() {
        var _this$props3 = this.props,
            firstPageLabel = _this$props3.firstPageLabel,
            lastPageLabel = _this$props3.lastPageLabel,
            prevPageLabel = _this$props3.prevPageLabel,
            nextPageLabel = _this$props3.nextPageLabel,
            firstPageClassName = _this$props3.firstPageClassName,
            lastPageClassName = _this$props3.lastPageClassName,
            previousPageClassName = _this$props3.previousPageClassName,
            nextPageClassName = _this$props3.nextPageClassName,
            internalPageClassName = _this$props3.internalPageClassName,
            totalPages = _this$props3.totalPages;
        var currentPage = this.getCurrentPage();

        if (totalPages <= 1) {
          return [];
        }

        var pageRange = this.getPageRange();
        var beginPage = pageRange[0];
        var endPage = pageRange[1];
        var buttons = []; // First page

        if (firstPageLabel) {
          buttons.push(this.createPageButton(firstPageLabel, 0, firstPageClassName, currentPage <= 0, false));
        } // Prev page


        if (prevPageLabel) {
          var menuItemPage = currentPage - 1;

          if (menuItemPage < 0) {
            menuItemPage = 0;
          }

          buttons.push(this.createPageButton(prevPageLabel, menuItemPage, previousPageClassName, currentPage <= 0, false));
        } // Internal pages


        for (var i = beginPage; i <= endPage; ++i) {
          buttons.push(this.createPageButton(i + 1, i, internalPageClassName, false, i === currentPage));
        } // Next page


        if (nextPageLabel) {
          var _menuItemPage = currentPage + 1;

          if (_menuItemPage >= totalPages - 1) {
            _menuItemPage = totalPages - 1;
          }

          buttons.push(this.createPageButton(nextPageLabel, _menuItemPage, nextPageClassName, currentPage >= totalPages - 1, false));
        } // Last page


        if (lastPageLabel) {
          buttons.push(this.createPageButton(lastPageLabel, totalPages - 1, lastPageClassName, currentPage >= totalPages - 1, false));
        } // Reset the page buttons


        this.buttonIndex = 0;
        return buttons;
      }
    }, {
      key: "render",
      value: function render() {
        if (this.props.totalPages > 1) {
          return (0, _core.jsx)(WrappedComponent, _extends({}, this.props, {
            buttons: this.createPageButtons()
          }));
        }

        return null;
      }
    }]);

    return WithPagination;
  }(_react.Component);

  _defineProperty(WithPagination, "propTypes", {
    firstPageClassName: _propTypes.default.string,
    lastPageClassName: _propTypes.default.string,
    previousPageClassName: _propTypes.default.string,
    nextPageClassName: _propTypes.default.string,
    internalPageClassName: _propTypes.default.string,
    activePageClassName: _propTypes.default.string,
    disabledPageClassName: _propTypes.default.string,
    firstPageLabel: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.bool]),
    lastPageLabel: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.bool]),
    prevPageLabel: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.bool, _propTypes.default.node]),
    nextPageLabel: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.bool, _propTypes.default.node]),
    maxButtonCount: _propTypes.default.number,
    currentPage: _propTypes.default.number.isRequired,
    totalPages: _propTypes.default.number.isRequired,
    onButtonClick: _propTypes.default.func.isRequired
  });

  _defineProperty(WithPagination, "defaultProps", {
    firstPageClassName: 'first',
    lastPageClassName: 'last',
    previousPageClassName: 'previous',
    nextPageClassName: 'next',
    internalPageClassName: 'internal',
    activePageClassName: 'active',
    disabledPageClassName: 'disabled',
    firstPageLabel: 'First',
    lastPageLabel: 'Last',
    prevPageLabel: "\xAB",
    nextPageLabel: "\xBB",
    maxButtonCount: 5
  });

  WithPagination.displayName = "WithPagination(".concat((0, _react2.getDisplayName)(WrappedComponent), ")");
  return WithPagination;
};

exports.withPagination = withPagination;