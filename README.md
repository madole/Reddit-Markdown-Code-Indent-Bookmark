## Reddit Markdown Code Indent Bookmark


Have you been indenting each line of your code snippets 4 spaces by hand in your comments?

Well no longer do you have to go through that process.

-   Just add the following code to a bookmark on your browser (Chrome)

```javascript
javascript:(function(){var originalText,indentedText;function replaceSelectedText(originalText,replacementText){var textArea,originalString,newString;textArea=$(".usertext-edit > div > textarea");originalString=textArea.val();newString=originalString.replace(originalText,replacementText);textArea.val(newString)}function getSelectedText(){return window.getSelection().toString()}function addIndentToCharacter(character,i){if(i===0){return"    "+character}if(character.match(/\r/)||character.match(/\n/)){return character+"    "}return character}function addIndentation(text){var arrText,indentedText;arrText=text.split("");indentedText=arrText.map(addIndentToCharacter);return indentedText.join("")}originalText=getSelectedText();indentedText=addIndentation(originalText);replaceSelectedText(originalText,indentedText)})();
```

-   Highlight the code snippet within your comment

-   Click the bookmark

The highlighted code in the textarea will get indented 4 spaces to make the markdown translator pick it up as code.

TODO:
-   Test and tweak for Firefox
-   Add the same functionality for comment replies