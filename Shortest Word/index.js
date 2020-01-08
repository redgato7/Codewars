function findShort(s) {
    const words = s.split(' ');
    const shortest = words.reduce((shortestWord, currentWord) => {
        return currentWord.length < shortestWord.length ? currentWord : shortestWord;
    }, words[0]);
    return shortest.length;
}

console.log(findShort('red dead redemption'))