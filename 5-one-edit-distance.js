/*
You are given 2 strings. You can use only 3 operators: Insert, Delete, Replace. Using only these three operations, if it is possible to make these two words the same to each other with at most one operation, your function should return true. Otherwise, returns false.

I added this code to the links below:
https://playcode.io/1973035
https://github.com/bilalgonen/javascript-data-structures/blob/main/5-string-operation-count.js
https://leetcode.com/problems/one-edit-distance/
*/

function comp(a, b) {
  let count = 0
  // ABC AC
  while (a.length > 0 || b.length > 0) {
    // First characters are same
    if (a.charAt(0) === b.charAt(0)) {
      a = a.substring(1)
      b = b.substring(1)
    } else {
      count++
      // BC and ABC  ==> Remove from 2nd string fixes the issue
      if (a.charAt(0) === b.charAt(1)) {
        b = b.substring(1)
      }
      // ABC and BC  ==> Remove from 1st string fixes the issue
      else if (a.charAt(1) === b.charAt(0)) {
        a = a.substring(1)
      }
      // XBC and YBC  ==> Replace first letter of any string fixes the issue
      else if (a.charAt(1) === b.charAt(1)) {
        a = a.substring(1)
        b = b.substring(1)
      }
    }
  }
  return count < 2
}

console.log('pale - ple', comp('pale', 'ple'))
console.log('pales - pale', comp('pales', 'pale'))
console.log('pale - bale', comp('pale', 'bale'))
console.log('pale - bae', comp('pale', 'bae'))
