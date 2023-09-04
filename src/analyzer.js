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
    let average = (counterExclJustSpaces/resultWordCount).toFixed(2)
    average = parseFloat(average)

    return average
  },
  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    const findNum = text.match(/\b\d+(\.\d+)?\b/g) // retorna un array con los numeros encontrados

    let numberCount = 0
    if (findNum) {
      numberCount = findNum.length
      return numberCount;
    } else {
      return numberCount;
    }
  },
  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    const findNum = text.match(/\b\d+(\.\d+)?\b/g) // retorna un array con los numeros encontrados
    
    let numberSum = 0
    if (findNum) {
      for (let i = 0; i < findNum.length; i++) {
        const num = parseFloat(findNum[i]);
        numberSum = numberSum + num;
      }
      return numberSum
    } else {
      return numberSum
    }
  },
};

export default analyzer;
