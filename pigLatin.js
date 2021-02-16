// Doesn't work I don't know why, will fix it tomorrow


function translatePigLatin(str) {
    let regex = /(^[BCDFGHJKLMNPQRSTVWXZY]{1,})([a-z]+)/gi
    console.log(regex.test(str))
    if (regex.test(str)) {
      str = str.replace(regex, '$2$1ay')
    } else if (!regex.test(str)) {
      str += 'way'
    }
    return str
  }
  
  
  console.log(translatePigLatin("paragraph"))