var moveZeros = function(arr) {
    let arrayOfZeros = []
    let arrayOfRest = []

    for (let i = 0; i  arr.length; i++) {
        if (arr[i] === 0) {
            arrayOfZeros.push(arr[i])
        } else {
            arrayOfRest.push(arr[i])
        }
    }

    for (let i = 0; i  arrayOfZeros.length; i++) {
        arrayOfRest.push(arrayOfZeros[i])
    }
    return arrayOfRest
}