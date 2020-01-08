function accum(s) {
    let splittedText = s.toLowerCase().split('');
    let arrayOfText = [];
    for (let i = 0; i < splittedText.length; i++) {
        arrayOfText.push(splittedText[i].repeat(i + 1))
    }

    arrayOfText = arrayOfText.map(word => word.replace(/\b\w/g, letter => letter.toUpperCase())).join('-');

    return arrayOfText;
}