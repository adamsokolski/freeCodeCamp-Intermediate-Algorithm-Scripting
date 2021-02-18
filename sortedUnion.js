// Return unique values in order of the orginal provided arrays
function uniteUnique(...arr) {
    let returnArr = []

    // Iterate through main array that contains every array
    for (const array of arr) {

        // Iterate through current array
        for (const element of array) {

            // If returnArr doesn't have that value push it
            if (returnArr.indexOf(element) === -1) {
                returnArr.push(element)
            }
        }
    }
    return returnArr;
  }
  
