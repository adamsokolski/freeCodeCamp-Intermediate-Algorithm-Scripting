// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
function convertHTML(str) {
    str = str.split('')
    str = str.map(e => findChar(e))
    str = str.join('')
    return str;
  }
  
  function findChar(e) {
    let char = '';
    if (e === '&') char = '&amp;'
    else if (e === '<') char = '&lt;'
    else if (e === '>') char = '&gt;'
    else if (e === '"') char = '&quot;'
    else if (e === "'") char = '&apos;'
    else return e
    return char
  } 