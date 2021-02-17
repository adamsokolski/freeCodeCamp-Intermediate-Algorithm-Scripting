function pairElement(str) {
  let arr = []
  let strArr = str.split('')
  for (const element of strArr) {
    arr.push(addMatchingChar(element))
  }
  return arr
}

function addMatchingChar(char) {
  let arr = []
  if (char === 'A') arr.push(char, 'T')
  else if (char === 'T') arr.push(char, 'A')
  else if (char === 'C') arr.push(char, 'G')
  else if (char === 'G') arr.push(char, 'C')
  return arr
}
