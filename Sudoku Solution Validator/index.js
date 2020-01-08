function validSolution(board) {
    let sum = 0;

    //counting rows
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            sum += board[i][j]
        }
        if (sum != 45) {
            return false;
        }
        sum = 0;
    }

    //counting columns
    for (let i = 0; i < 9; i++) {

        for (let j = 0; j < 9; j++) {
            sum += board[j][i]
        }
        if (sum != 45) {
            return false;
        }
        sum = 0;

    }

    //counting squares
    for (let columns = 0; columns < 9; columns += 3) {
        for (let rows = 0; rows < 9; rows += 3) {
            sum = 0;
            for (let i = columns; i < columns + 3; i++) {
                for (let j = rows; j < rows + 3; j++) {
                    sum = sum + board[i][j]
                }
            }

            if (sum != 45) {
                return false;
            }

        }

    }

    return true;

}