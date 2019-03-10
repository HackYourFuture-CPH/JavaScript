function removeChars (str) {
  var removedStr = ''

  for (var i = 1; i < str.length - 1; i++) {
    removedStr += str[i] // removedStr = removedStr + str[i]
  }

  return removedStr
}

console.log(removeChars('country') === 'ountr')
console.log(removeChars('emil') === 'mi')

removeChars('')
removeChars('country')
