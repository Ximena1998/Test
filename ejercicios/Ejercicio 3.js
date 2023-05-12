function countWords(lineText) {
    const words = lineText.toLowerCase().split(/\s+/);
    const wordCounts = {};
  
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
  
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
    return repeatedWords;
  }