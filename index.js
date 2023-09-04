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




textarea.addEventListener('keyup', () => {
  const text = textarea.value
  const wordCounter = analyzer.getWordCount(text)
  const characterCounter = analyzer.getCharacterCount(text)
  const counterExcludingSpaces = analyzer.getCharacterCountExcludingSpaces(text)
  const average = analyzer.getAverageWordLength(text)
  const numberCount = analyzer.getNumberCount(text)
  const numberSum = analyzer.getNumberSum(text)

  liWordCount.textContent = `Palabras: ${wordCounter}`
  liCharacterCount.textContent = `Caracteres: ${characterCounter}`
  liCharacterSpaces.textContent = `Caracteres sin espacios: ${counterExcludingSpaces}`
  liAverage.textContent = `Promedio longitud: ${average}`
  liNumberCount.textContent = `Números: ${numberCount}`
  liNumberSum.textContent = `Suma números: ${numberSum}`
})
btn.addEventListener('click', () => {
  location.reload()
})
