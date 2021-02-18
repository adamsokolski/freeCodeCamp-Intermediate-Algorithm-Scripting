// Flatten a nested array. You must account for varying levels of nesting.
function steamrollArray(arr) {
    let returnArr = []
    return searchArray(arr, returnArr);
  }
  
  function searchArray(a, arrayToPush) {

    // if a is an array itereate through it
    if (Array.isArray(a)) {
      for (const element of a) {
        // Check every element of this array if it is an array
        searchArray(element, arrayToPush)
      }
    } else {
        // If it isn't push it
      arrayToPush.push(a)
    }
    return arrayToPush  
  }
  