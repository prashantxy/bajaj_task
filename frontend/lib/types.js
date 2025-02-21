/**
 * @typedef {Object} ProcessDataRequest
 * @property {string[]} data - Array of strings (numbers and alphabets).
 */

/**
 * @typedef {Object} ProcessDataResponse
 * @property {boolean} is_success - Indicates success or failure.
 * @property {string} user_id - User ID.
 * @property {string} email - User email.
 * @property {string} roll_number - Roll number.
 * @property {string[]} numbers - Array of extracted numbers.
 * @property {string[]} alphabets - Array of extracted alphabets.
 * @property {string[]} highest_alphabet - Array containing the highest alphabet.
 */

/**
 * @typedef {'numbers' | 'alphabets' | 'highest_alphabet'} FilterOption
 */

export {};
