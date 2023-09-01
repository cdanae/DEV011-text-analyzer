const analyzer = {  
  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const wordCounter = text.trim().split(' ').length
  
    return wordCounter
  },
  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    const characterCounter = text.length

    return characterCounter
  },
  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    const textUpperCase = text.toUpperCase()

    let counterExcludingSpaces = 0
    for (let i = 0; i < textUpperCase.length; i++) {
      const arr = textUpperCase[i];
      if ( (arr >= 'A' && arr <= 'Z') || (arr >= '0' && arr <= '9') ) {
        counterExcludingSpaces++
      }
  
    }

    return counterExcludingSpaces
  },
  getAverageWordLength: (text) => {    
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const resultWordCount = analyzer.getWordCount(text);
    let counterExclJustSpaces = 0;

    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      if (char !== ' ') {
        counterExclJustSpaces++;
      }
    }
    const average = (counterExclJustSpaces/resultWordCount).toFixed(2)

    return average
  },
  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    let numberCount = 0
    for (let i = 0; i < text.length; i++) {
      const arr = text[i];
      if (arr >= '0' && arr <= '9') {
        numberCount++
      }
    }

    return numberCount

  },
  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    let numberSum = 0
    for (let i = 0; i < text.length; i++) {
      const arr = text[i];
      if (arr >= '0' && arr <= '9'){
        numberSum = numberSum + parseInt(arr)
      }
    }
    return numberSum
  },
};

export default analyzer;
