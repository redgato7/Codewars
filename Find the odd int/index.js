function findOdd(A) {
    let checkingArray = []

    for (let j = 0; j < A.length; j++) {


        for (let i = 0; i < A.length; i++) {
            if (A[j] === A[i]) {
                checkingArray.push(A[i])
            }
        }

        if (checkingArray.length % 2 === 1) {
            return checkingArray[0]
        } else {
            checkingArray = []
        }
    }
}