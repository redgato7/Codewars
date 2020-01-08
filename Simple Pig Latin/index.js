function pigIt(str) {
    const arr = str.split(' ')
    const letters = /[!?,.]/;
    for (let i = 0; i < arr.length; i++) {
        if (!letters.test(arr[i])) {
            arr[i] = arr[i].slice(1) + arr[i][0] + 'ay'
        }
    }
    return arr.join(' ')
}