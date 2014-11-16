replaceSelectedText = (originalText, replaceSelectedText) ->
  textArea        = $('.usertext-edit > div > textarea')
  originalString  = textArea.val()
  newString       = originalString.replace originalText, replaceSelectedText
  textArea.val newString
  return

getSelectedText = ->
  return window.getSelection().toString();

addIndentToCharacter = (character, i) ->
  if i is 0
    return '    ' + character

  else if character.match(/\r/) or character.match(/\n/)
    return character + '    '

  return character

addIndentation = (text) ->
  arrText       = text.split('')
  indentedText  = arrText.map(addIndentToCharacter)
  return indentedText.join('')

originalText = getSelectedText()
indentedText = addIndentation originalText
replaceSelectedText originalText, indentedText
return