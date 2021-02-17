function myReplace(str, before, after) {
    let regex = new RegExp(before, 'gi')
    let startWithUpperCase = /^[A-Z]/g
    if (startWithUpperCase.test(before)) {
        // change first letter to upper case and put it in a string
        after = after.charAt(0).toUpperCase() + after.slice(1)
        str = str.replace(regex, after)
    } else {
        // change first letter to lower case and put it in a string
        after = after.charAt(0).toLowerCase() + after.slice(1)
        str = str.replace(regex, after)
    } 
    return str;
  }
  