javascript: (function () {
  var originalText, indentedText;

  function replaceSelectedText(originalText, replacementText) {
    var textArea, originalString, newString;
    textArea        = $('.usertext-edit > div > textarea');
    originalString  = textArea.val();
    newString       = originalString.replace(originalText, replacementText);
    textArea.val(newString);
  }

  function getSelectedText() {
    return window.getSelection().toString();
  }

  function addIndentToCharacter(character, i) {
    if (i === 0) {
      return '    ' + character;
    }
    if (character.match(/\r/) || character.match(/\n/)) {
      return character + '    ';
    }
    return character;
  }

  function addIndentation(text) {
    var arrText, indentedText;
    arrText = text.split('');
    indentedText = arrText.map(addIndentToCharacter);
    return indentedText.join('');
  }

  originalText = getSelectedText();
  indentedText = addIndentation(originalText);
  replaceSelectedText(originalText, indentedText);

})();
