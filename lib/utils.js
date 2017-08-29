'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Replace all occurrences of the values in the search array with the replacement values
 * from the replace array.
 *
 * @param {String} value
 * @param {Array} search
 * @param {Array} replace
 * @returns {String}
 */
var replaceArray = exports.replaceArray = function replaceArray(value, search, replace) {
  var replaceString = value;
  var regex = void 0;
  for (var i = 0; i < search.length; i++) {
    regex = new RegExp(search[i], 'g');
    replaceString = replaceString.replace(regex, replace[i]);
  }

  return replaceString;
};