/**
 * Replace all occurrences of the values in the search array with the replacement values
 * from the replace array.
 *
 * @param {String} value
 * @param {Array} search
 * @param {Array} replace
 * @returns {String}
 */
export const replaceArray = (value, search, replace) => {
  let replaceString = value;
  let regex;
  for (let i = 0; i < search.length; i++) {
    regex = new RegExp(search[i], 'g');
    replaceString = replaceString.replace(regex, replace[i]);
  }

  return replaceString;
};
