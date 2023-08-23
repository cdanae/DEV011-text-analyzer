import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`
const textarea = document.querySelector('textarea');


textarea.addEventListener('keyup', getValue)

function getValue() {
    const text = textarea.value
    analyzer.getWordCount(text)
    analyzer.getCharacterCount(text)
    analyzer.getCharacterCountExcludingSpaces(text)
    
}