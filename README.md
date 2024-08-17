# Javascript Interview Questions

## One Edit Distance

You are given 2 strings. You can use only 3 operators: Insert, Delete, Replace. Using only these three operations, if it is possible to make these two words the same to each other with at most one operation, your function should return true. Otherwise, returns false.

- [5-one-edit-distance.js](5-one-edit-distance.js)
- [https://playcode.io/1973035](https://playcode.io/1973035)

First, I wrote the code as below:

```javascript
function comp(a, b) {
  let count = 0
  // ABC AC
  while (a.length > 0 || b.length > 0) {
    // check if first characters are same
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

console.log('pale - ple', comp('pale', 'ple')) // true
console.log('pales - pale', comp('pales', 'pale')) // true
console.log('pale - bale', comp('pale', 'bale')) // true
console.log('pale - bae', comp('pale', 'bae')) // false
```

Then, I realized that this algorithm is not very efficient. Because JavaScript Strings are immutable since once a string is created, it will receive a reference in the memory and its value will never change. This means that any operation on a string give a new string without mutating the main string. The algorithm below has better memory and time complexity. Instead of creating a new strings with substring method, it is better to traverse the strings by characters.

```javascript
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
  let i = 0,
    j = 0
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
```
