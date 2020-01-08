function isIsogram(str) {
  const checkedWord = [];
  const typedWord = str.toLowerCase().split('');

  for (let j = 0; j < typedWord.length; j++) {

      for (let i = 0; i < typedWord.length; i++) {

          if (typedWord[j] == typedWord[i]) {
                checkedWord.push(typedWord[i]);

          }

      }

  }

  return typedWord.join('') == checkedWord.join('')

}