function whatIsInAName(collection, source) {
    var arr = [];
    // Only change code below this line
  
    
    let sourceKeys = Object.keys(source)
  
    // Iterate through array of object
    for (const e of collection) {
      let numberOfMatches = 0;

      // Iterate through array of source object keys
      for (const key of sourceKeys) {

        // If object has that key and the same value add too number of matches
        if (e.hasOwnProperty(key) && e[key] === source[key]) {
          numberOfMatches++
        }
      }

      // If object has every match it needs push to array
      if (numberOfMatches === sourceKeys.length) {
        arr.push(e)
      }
    }
  
  
    // Only change code above this line
    return arr;
  }
  
  whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }], { "apple": 1, "bat": 2 })
  
  