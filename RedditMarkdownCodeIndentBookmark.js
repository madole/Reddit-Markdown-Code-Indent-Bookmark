javascript: (function() {
  function replaceSelectedText(replacementText) {
    $('.usertext-edit > div > textarea').val(replacementText);
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

  var text = getSelectedText();
  var indentedText = addIndentation(text);
  replaceSelectedText(indentedText);

})();