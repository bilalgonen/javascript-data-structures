/*
You are given 2 strings. You can use only 3 operators: Insert, Delete, Replace. Using only these three operations, if it is possible to make these two words the same to each other with at most one operation, your function should return true. Otherwise, returns false.
https://leetcode.com/problems/one-edit-distance/

I added this code to the links below:
https://playcode.io/1973035
https://github.com/bilalgonen/javascript-data-structures/
*/

function comp(a, b) {
  let message = a + ' - ' + b
  let count = 0
  let i = 0, j = 0
  // ABC AC
  while (i < a.length || j < b.length) {
    // First characters are same
    if (a.charAt(i) === b.charAt(j)) {
      i++
      j++
    } else {
      count++
      // BC and ABC  ==> Remove from 2nd string fixes the issue
      if (a.charAt(i) === b.charAt(j + 1)) {
        j++
      }
      // ABC and BC  ==> Remove from 1st string fixes the issue
      else if (a.charAt(i + 1) === b.charAt(j)) {
        i++
      }
      // XBC and YBC  ==> Replace first letter of any string fixes the issue
      else if (a.charAt(i + 1) === b.charAt(j + 1)) {
        i++
        j++
      }
    }
  }
  return message + '   ' + (count < 2)
}

console.log(comp('pale', 'ple')) // true
console.log(comp('pales', 'pale')) // true
console.log(comp('pale', 'bale')) // true
console.log(comp('pale', 'bae')) // false
