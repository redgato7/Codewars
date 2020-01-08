function wave(word) {
    let arrayOfWords = []
    let finalArray = []
    for (let i = 0; i < word.length; i++) {
        arrayOfWords = word.split('')

        if (arrayOfWords[i] === ' ') {
            continue
        }

        arrayOfWords[i] = arrayOfWords[i].toUpperCase()
        finalArray.push(arrayOfWords.join(''))
    }

    return finalArray
