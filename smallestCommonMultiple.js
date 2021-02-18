// Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.
function smallestCommons(arr) {
  let min = Math.min(...arr)
  let max = Math.max(...arr)
  let allNumbers = []
  for (let i = min; i <= max; i++) {
    allNumbers.push(i)
  }
  let isDividedByAll = false
  let returnNumber = 0

  // Multiple maximal number in array untill divisible by all is found
  for (let i = max; !isDividedByAll; i += max) { 
    let numberOfDividers = 0
    
    // Check if every element of allNumbers is divisible
    for (const element of allNumbers) {
      if (i % element === 0) {
        numberOfDividers++
      } else {
        break
      }
    }
    
    if (numberOfDividers === allNumbers.length) {
      returnNumber = i
      isDividedByAll = true
    }  
  }
  return returnNumber;
}

