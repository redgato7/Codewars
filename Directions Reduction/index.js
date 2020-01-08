function dirReduc(arr) {
    let finalArray = [];
    const obj = { NORTH: 'SOUTH', SOUTH: 'NORTH', EAST: 'WEST', WEST: 'EAST' };
    let oneMoreTime = false;

    for (let i = 0; i < arr.length; i++) {
        console.log(obj[arr[i]])
        if (obj[arr[i]] !== arr[i + 1]) {
            finalArray.push(arr[i]);
        } else {
            oneMoreTime = true;
            i++;
        }
    }
    if (oneMoreTime === true) {
        return dirReduc(finalArray);
    } else {
        return finalArray;
    }
}