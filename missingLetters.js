// Find missing letter in passed letter range
function fearNotLetter(str) {
    let alphabetArr = 'abcdefghijklmnopqrstuvwxyz'.split('')
    let strArr = str.split('')

    // Find where letter range begins and ends
    let startIndex = alphabetArr.indexOf(strArr[0])
    let endIndex = alphabetArr.indexOf(strArr[strArr.length - 1])

    // Slice alphabet to match letter range
    let alphabetSlice = alphabetArr.slice(startIndex, endIndex + 1)
    let missingLetter;

    // Find which letter is missing 
    for (const element of alphabetSlice) {
        if (strArr.indexOf(element) === -1) {
            missingLetter = element
        }
    }
    return missingLetter;
  }
