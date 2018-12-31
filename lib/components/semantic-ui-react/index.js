"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "CycleArrowPagination", {
  enumerable: true,
  get: function get() {
    return _CycleArrowPagination2.default;
  }
});
Object.defineProperty(exports, "FormError", {
  enumerable: true,
  get: function get() {
    return _FormError2.default;
  }
});
Object.defineProperty(exports, "withBasicForm", {
  enumerable: true,
  get: function get() {
    return _WithBasicForm.default;
  }
});
Object.defineProperty(exports, "CheckBoxField", {
  enumerable: true,
  get: function get() {
    return _CheckBoxField2.default;
  }
});
Object.defineProperty(exports, "CheckBoxGroupField", {
  enumerable: true,
  get: function get() {
    return _CheckBoxGroupField2.default;
  }
});
Object.defineProperty(exports, "RadioField", {
  enumerable: true,
  get: function get() {
    return _RadioField2.default;
  }
});
Object.defineProperty(exports, "SelectField", {
  enumerable: true,
  get: function get() {
    return _SelectField2.default;
  }
});
Object.defineProperty(exports, "TextAreaField", {
  enumerable: true,
  get: function get() {
    return _TextAreaField2.default;
  }
});
Object.defineProperty(exports, "TextField", {
  enumerable: true,
  get: function get() {
    return _TextField2.default;
  }
});
exports.resetIdCounter = exports.generateId = void 0;

var _CycleArrowPagination2 = _interopRequireDefault(require("./CycleArrowPagination"));

var _FormError2 = _interopRequireDefault(require("./FormError"));

var _WithBasicForm = _interopRequireDefault(require("./WithBasicForm"));

var _CheckBoxField2 = _interopRequireDefault(require("./CheckBoxField"));

var _CheckBoxGroupField2 = _interopRequireDefault(require("./CheckBoxGroupField"));

var _RadioField2 = _interopRequireDefault(require("./RadioField"));

var _SelectField2 = _interopRequireDefault(require("./SelectField"));

var _TextAreaField2 = _interopRequireDefault(require("./TextAreaField"));

var _TextField2 = _interopRequireDefault(require("./TextField"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Utility to generate ids
var current = 0;
/**
 * Generates a new html ID.
 * @param {string} prefix - Html ID prefix
 * @returns {string}
 */

var generateId = function generateId(prefix) {
  return "".concat(prefix || 'id', "-").concat(current++);
};
/**
 * Resets the counter used to generate the Html IDs.
 */


exports.generateId = generateId;

var resetIdCounter = function resetIdCounter() {
  current = 0;
};

exports.resetIdCounter = resetIdCounter;