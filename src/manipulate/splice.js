import coerceToNumber from '../helper/number/coerce_to_number';
import coerceToString from '../helper/string/coerce_to_string';

/**
 * Changes `subject` by removing a substring and adding a new string.
 *
 * @function splice
 * @static
 * @since 1.0.0
 * @memberOf Manipulate
 * @param {string} [subject=''] The string where to insert.
 * @param {string} start The position to start changing the string. For a negative position will start from the end of
 * the string.
 * @param {number} [deleteCount=0] The number of characters to delete from string.
 * @param {string} [toAdd=''] The string to be added instead of deleted characters.
 * @return {string} Returns the modified string.
 * @example
 * v.splice('w', 3);
 * // => 'www'
 *
 * v.splice('world', 0);
 * // => ''
 */
export default function splice(subject, start, deleteCount, toAdd) {
  var subjectString = coerceToString(subject),
    startPosition = coerceToNumber(start),
    deleteCountNumber = coerceToNumber(deleteCount),
    toAddString = coerceToString(toAdd);
  if (startPosition < 0) {
    startPosition = subjectString.length + startPosition;
    if (startPosition < 0) {
      startPosition = 0;
    }
  } else if (startPosition > subjectString.length) {
    startPosition = subjectString.length;
  }
  return subjectString.slice(0, startPosition) + toAddString + subjectString.slice(startPosition + deleteCountNumber);
}