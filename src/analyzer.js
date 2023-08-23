const analyzer = {  
  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const word = document.querySelector('li[data-testid="word-count"]')
    const wordCounter = text.trim().split(' ').length
    word.innerText = `Palabras: ${wordCounter}`
  },
  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    const character = document.querySelector('li[data-testid="character-count"]')
    const counter = text.length
    character.innerText = `Caracteres: ${counter}`
  },
  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    const character = document.querySelector('li[data-testid="character-no-spaces-count"]')
    const textUpperCase = text.toUpperCase()

    let counter = 0
    for (let i = 0; i < textUpperCase.length; i++) {
      const arr = textUpperCase[i];
      if (
        (arr >= 'A' && arr <= 'Z') ||
        (arr >= '0' && arr <= '9')
      ) {
        counter++
      }
      
    }

    character.innerText = `Caracteres sin espacios: ${counter}`
  },
  getAverageWordLength: (text) => {    
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
  },
  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
  },
  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
  },
};

export default analyzer;
