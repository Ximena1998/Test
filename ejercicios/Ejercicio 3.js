/**Función utilizada para remover los valores nulos de un arreglo
 * @function  
 * lineText es la linea de texto a procesar
 * @type{string}
 * */
function countWords(lineText) {
  /**toLowerCase devuelve el valor en minusculas
   * /\s+/ elimina los espacios en blanco del string
   * @function */
    const words = lineText.toLowerCase().split(/\s+/);
    const wordCounts = {};
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      /** hasOwnProperty devuelve un valor true si el objeto tiene la propiedad especificada
       * @function
      */
      if (wordCounts.hasOwnProperty(word)) {
        wordCounts[word]++;
      } else {
        wordCounts[word] = 1;
      }
    }
    const repeatedWords = {};
    for (const word in wordCounts) {
      if (wordCounts.hasOwnProperty(word) && wordCounts[word] > 1) {
        repeatedWords[word] = wordCounts[word];
      }
    }
    /** repeatedWords guarda el resultado de la función
     * @type{arr}
      */
    return repeatedWords;
  }