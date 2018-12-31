export CycleArrowPagination from './CycleArrowPagination';
export FormError from './FormError';
export withBasicForm from './WithBasicForm';
export CheckBoxField from './CheckBoxField';
export CheckBoxGroupField from './CheckBoxGroupField';
export RadioField from './RadioField';
export SelectField from './SelectField';
export TextAreaField from './TextAreaField';
export TextField from './TextField';

// Utility to generate ids
let current = 0;

/**
 * Generates a new html ID.
 * @param {string} prefix - Html ID prefix
 * @returns {string}
 */
export const generateId = prefix => `${prefix || 'id'}-${current++}`;

/**
 * Resets the counter used to generate the Html IDs.
 */
export const resetIdCounter = () => {
  current = 0;
};
