javascript: (function() {
  function replaceSelectedText(originalText, replacementText) {
    var originalString  = $('.usertext-edit > div > textarea').val();
    var newString       = originalString.replace(originalText, replacementText);
    $('.usertext-edit > div > textarea').val(newString);
  }

  function getSelectedText() {
    return window.getSelection().toString();
  }

  function addIndentation(text) {
    var arrText = text.split('');
    var indentedText = arrText.map(function(character, i) {

      if (i === 0) {
        character = '    ' + character;
      }
      if (character.match(/\r/) || character.match(/\n/)) {
        character = character + '    ';
      }
      return character;
    });
    return indentedText.join('');
  }

  var originalText = getSelectedText();
  var indentedText = addIndentation(originalText);
  replaceSelectedText(originalText, indentedText);

})();