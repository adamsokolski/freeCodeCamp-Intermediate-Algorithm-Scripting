function translatePigLatin(str) {
  // (First consonant or consonant cluster) nad (rest of letters)
  let regex = /(^[bcdfghjklmnpqrstvwxzy]{1,})([a-z]+)?/gi

  if (regex.test(str)) {
    str = str.replace(regex, '$2$1ay')
  } else {
    str += 'way'
  }
  return str
}
