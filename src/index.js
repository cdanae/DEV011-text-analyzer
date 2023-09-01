import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`
const textarea = document.querySelector('textarea');
const btn = document.getElementById('reset-button');


textarea.addEventListener('keyup', getValue)
btn.addEventListener('click', clear)


function getValue() {
    const text = textarea.value
    analyzer.getWordCount(text)
    analyzer.getCharacterCount(text)
    analyzer.getCharacterCountExcludingSpaces(text)
    analyzer.getAverageWordLength(text)
    analyzer.getNumberCount(text)
    analyzer.getNumberSum(text)
    
}

function clear() {
    location.reload()
}
