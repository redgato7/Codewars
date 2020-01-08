var uniqueInOrder = function(iterable) {
    let finalArray = []

    if (typeof iterable === "string") {
        let arrayOfIterables = iterable.split('')
        for (let i = 0; i < arrayOfIterables.length; i++) {
            if (arrayOfIterables[i] !== arrayOfIterables[i + 1]) {
                finalArray.push(arrayOfIterables[i])
            }
        }
    } else {

        for (let i = 0; i < iterable.length; i++) {
            if (iterable[i] !== iterable[i + 1]) {
                finalArray.push(iterable[i])
            }
        }
    }

    return finalArray
}