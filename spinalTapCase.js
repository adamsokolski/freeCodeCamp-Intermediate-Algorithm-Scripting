function spinalCase(str) {

    return str
        // add space between lower and upper case, becauseOfCamelCase
        .replace(/([a-z])([A-Z])/g, '$1 $2')
        .toLowerCase()
        .replace(/[_\s]/g, '-');
  }

  
  