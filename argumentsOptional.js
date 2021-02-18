// Function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.
function addTogether(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
      return a + b
    } else if (typeof a === 'number' && typeof b === 'undefined' ) {
      return (num) => addTogether(a, num)
    } else {
      return undefined
    }
  }
  