// Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it. Then return the rest of the array once the condition is satisfied

function dropElements(arr, func) {
    let returnArr = [...arr]
    for (const element of returnArr) {
      if (func(element)) {
        break
      } else {
        returnArr = returnArr.slice(1)
      }
    }
    return returnArr
  }