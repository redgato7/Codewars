const snail = array => {

    const rows = array[0].length
    const columns = array.length;
    const finalArray = [];

    // helping values for first run
    // we will increasing them by one each run 
    let possibleRuns = rows - 1
    let zero = 0;
    let one = 1;
    let two = 2;

   if (array.length === 1) {
        return array[0];
    }

    while (possibleRuns >= 0) {

        if (array.join().length == finalArray.join(',').length) {
            return finalArray;
        } else {
            // go right
            for (let i = zero; i < rows - zero; i++) {
                finalArray.push(array[zero][i])
            }

            // go down
            for (let i = one; i < columns - zero; i++) {
                finalArray.push(array[i][rows - one])
            }

            // go left
            for (let i = rows - two; i >= zero; i--) {
                finalArray.push(array[rows - one][i])
            }

            // go up
            for (let i = columns - two; i > zero; i--) {
                finalArray.push(array[i][columns - rows + zero])
            }

            zero++;
            one++;
            two++;

        }

        possibleRuns--;

    }

}