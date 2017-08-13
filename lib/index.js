'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withRoleAwareness = exports.withReponsiveness = undefined;

var _WithResponsiveness = require('./components/WithResponsiveness');

var _WithResponsiveness2 = _interopRequireDefault(_WithResponsiveness);

var _WithRoleAwareness = require('./components/WithRoleAwareness');

var _WithRoleAwareness2 = _interopRequireDefault(_WithRoleAwareness);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.withReponsiveness = _WithResponsiveness2.default;
exports.withRoleAwareness = _WithRoleAwareness2.default;