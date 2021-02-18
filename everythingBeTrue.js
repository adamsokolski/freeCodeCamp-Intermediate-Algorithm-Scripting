// Check if the predicate (second argument) is truthy on all elements of a collection (first argument).
function truthCheck(collection, pre) {
    let allElementsTruthy = true
    for (const element of collection) {
      if (!element[pre]) {
        allElementsTruthy = false
      }
    }
    return allElementsTruthy;
  }
  