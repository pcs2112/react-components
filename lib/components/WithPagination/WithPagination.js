'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withPagination = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _utils = require('../../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * React component to display the pagination summary
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * of a list of items.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var withPagination = exports.withPagination = function withPagination(WrappedComponent) {
  var WithPagination = function (_Component) {
    _inherits(WithPagination, _Component);

    function WithPagination(props) {
      _classCallCheck(this, WithPagination);

      var _this = _possibleConstructorReturn(this, (WithPagination.__proto__ || Object.getPrototypeOf(WithPagination)).call(this, props));

      _this.buttonIndex = 0; // Used to assign a unique key to each button
      return _this;
    }

    _createClass(WithPagination, [{
      key: 'onButtonClick',
      value: function onButtonClick(e, _ref) {
        var name = _ref.name,
            disabled = _ref.disabled,
            className = _ref.className;

        e.preventDefault();
        this.props.onButtonClick(name, disabled === true || className && className.indexOf('disabled') > -1);
      }
    }, {
      key: 'getCurrentPage',
      value: function getCurrentPage() {
        return this.props.currentPage - 1;
      }

      /**
       * Returns the begin and end pages that need to be displayed.
       *
       * @returns {Array}
       */

    }, {
      key: 'getPageRange',
      value: function getPageRange() {
        var _props = this.props,
            totalPages = _props.totalPages,
            maxButtonCount = _props.maxButtonCount;

        var currentPage = this.getCurrentPage();

        var beginPage = Math.max(0, currentPage - parseInt(maxButtonCount / 2, 10));
        var endPage = beginPage + (maxButtonCount - 1);

        if (endPage >= totalPages) {
          endPage = totalPages - 1;
          beginPage = Math.max(0, endPage - maxButtonCount + 1);
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
      key: 'createPageButton',
      value: function createPageButton(label, page, className, disabled, active) {
        var _props2 = this.props,
            disabledPageClassName = _props2.disabledPageClassName,
            activePageClassName = _props2.activePageClassName;


        var normalizedClassName = className;
        if (disabled || active) {
          normalizedClassName += ' ' + (disabled ? disabledPageClassName : activePageClassName);
        }

        return {
          key: ++this.buttonIndex,
          name: '' + (page + 1),
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
      key: 'createPageButtons',
      value: function createPageButtons() {
        var _props3 = this.props,
            firstPageLabel = _props3.firstPageLabel,
            lastPageLabel = _props3.lastPageLabel,
            prevPageLabel = _props3.prevPageLabel,
            nextPageLabel = _props3.nextPageLabel,
            firstPageClassName = _props3.firstPageClassName,
            lastPageClassName = _props3.lastPageClassName,
            previousPageClassName = _props3.previousPageClassName,
            nextPageClassName = _props3.nextPageClassName,
            internalPageClassName = _props3.internalPageClassName,
            totalPages = _props3.totalPages;


        var currentPage = this.getCurrentPage();

        if (totalPages <= 1) {
          return [];
        }

        var pageRange = this.getPageRange();
        var beginPage = pageRange[0];
        var endPage = pageRange[1];
        var buttons = [];

        // First page
        if (firstPageLabel) {
          buttons.push(this.createPageButton(firstPageLabel, 0, firstPageClassName, currentPage <= 0, false));
        }

        // Prev page
        if (prevPageLabel) {
          var menuItemPage = currentPage - 1;
          if (menuItemPage < 0) {
            menuItemPage = 0;
          }

          buttons.push(this.createPageButton(prevPageLabel, menuItemPage, previousPageClassName, currentPage <= 0, false));
        }

        // Internal pages
        for (var i = beginPage; i <= endPage; ++i) {
          buttons.push(this.createPageButton(i + 1, i, internalPageClassName, false, i === currentPage));
        }

        // Next page
        if (nextPageLabel) {
          var _menuItemPage = currentPage + 1;
          if (_menuItemPage >= totalPages - 1) {
            _menuItemPage = totalPages - 1;
          }

          buttons.push(this.createPageButton(nextPageLabel, _menuItemPage, nextPageClassName, currentPage >= totalPages - 1, false));
        }

        // Last page
        if (lastPageLabel) {
          buttons.push(this.createPageButton(lastPageLabel, totalPages - 1, lastPageClassName, currentPage >= totalPages - 1, false));
        }

        // Reset the page buttons
        this.buttonIndex = 0;

        return buttons;
      }
    }, {
      key: 'render',
      value: function render() {
        if (this.props.totalPages < 1) {
          return null;
        }

        return _react2.default.createElement(WrappedComponent, _extends({}, this.props, {
          buttons: this.createPageButtons(),
          onButtonClick: this.onButtonClick
        }));
      }
    }]);

    return WithPagination;
  }(_react.Component);

  WithPagination.propTypes = {
    firstPageClassName: _propTypes2.default.string,
    lastPageClassName: _propTypes2.default.string,
    previousPageClassName: _propTypes2.default.string,
    nextPageClassName: _propTypes2.default.string,
    internalPageClassName: _propTypes2.default.string,
    activePageClassName: _propTypes2.default.string,
    disabledPageClassName: _propTypes2.default.string,
    firstPageLabel: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.bool]),
    lastPageLabel: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.bool]),
    prevPageLabel: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.bool, _propTypes2.default.node]),
    nextPageLabel: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.bool, _propTypes2.default.node]),
    maxButtonCount: _propTypes2.default.number,
    currentPage: _propTypes2.default.number.isRequired,
    totalPages: _propTypes2.default.number.isRequired,
    onButtonClick: _propTypes2.default.func.isRequired
  };
  WithPagination.defaultProps = {
    firstPageClassName: 'first',
    lastPageClassName: 'last',
    previousPageClassName: 'previous',
    nextPageClassName: 'next',
    internalPageClassName: 'internal',
    activePageClassName: 'active',
    disabledPageClassName: 'disabled',
    firstPageLabel: 'First',
    lastPageLabel: 'Last',
    prevPageLabel: '\xAB',
    nextPageLabel: '\xBB',
    maxButtonCount: 5
  };


  WithPagination.displayName = 'WithPagination(' + (0, _utils.getDisplayName)(WrappedComponent) + ')';

  return WithPagination;
};