function spinWords(text) {
    let splittedText = text.split(' ')
    let element = []
    let finalArray = []
    for (let i = 0; i < splittedText.length; i++) {
        if (splittedText[i].length >= 5) {
            element = splittedText[i].split('').reverse().join('')
            finalArray.push(element)
        } else {
            finalArray.push(splittedText[i])
        }

    }
    return finalArray.join(' ')
}