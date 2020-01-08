function countBy(x, n) {
    let arrayOfArguments = [];
    let multiplier = 0;
    for (let i = 0; i < n; i++) {
        multiplier = x + multiplier
        arrayOfArguments.push(multiplier)
    }
    return arrayOfArguments
}