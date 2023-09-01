import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`
const textarea = document.querySelector('textarea');
const btn = document.getElementById('reset-button');

const liWordCount = document.querySelector('li[data-testid="word-count"]')
const liCharacterCount = document.querySelector('li[data-testid="character-count"]')
const liCharacterSpaces = document.querySelector('li[data-testid="character-no-spaces-count"]')
const liAverage = document.querySelector('li[data-testid="word-length-average"]')
const liNumberCount = document.querySelector('li[data-testid="number-count"]');
const liNumberSum = document.querySelector('li[data-testid="number-sum"]')

liWordCount.textContent = `Palabras: ${wordCounter}`
liCharacterCount.textContent = `Caracteres: ${characterCounter}`
liCharacterSpaces.textContent = `Caracteres sin espacios: ${counterExcludingSpaces}`
liAverage.textContent = `Promedio longitud: ${average}`
liNumberCount.textContent = `Números: ${numberCount}`
liNumberSum.textContent = `Suma números: ${numberSum}`


textarea.addEventListener('keyup', () => {
    const text = textarea.value
    analyzer.getWordCount(text)
    analyzer.getCharacterCount(text)
    analyzer.getCharacterCountExcludingSpaces(text)
    analyzer.getAverageWordLength(text)
    analyzer.getNumberCount(text)
    analyzer.getNumberSum(text)
})
btn.addEventListener('click', () => {
    location.reload()
})
