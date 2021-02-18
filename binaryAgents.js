// Return an English translated sentence of the passed binary string.
function binaryAgent(str) {
    let strArr = str.split(' ')
                    .map(x => String.fromCharCode(parseInt(x, 2)))
                    .join('')
    return strArr;
  }