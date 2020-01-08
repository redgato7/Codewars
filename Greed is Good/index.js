function score(dice) {
    let points = 0;
    const diceObj = {};

    for (let i = 0; i < dice.length; i++) {

        if (!diceObj.hasOwnProperty(dice[i])) {
            diceObj[dice[i]] = 0
        }
        diceObj[dice[i]]++;
        
    }

    for (key in diceObj) {

        if (diceObj[key] >= 3 && key != 1 && key != 5) {
            points += key * 100;
        } else if (key == 1) {
            let i = 1
            while (i <= diceObj[key]) {
                if (i !== 3) {
                    points += 100;
                } else {
                    points += 1000 - 200;
                }
                i++;
            }
        } else if (key == 5) {
            let i = 1
            while (i <= diceObj[key]) {
                if (i !== 3) {
                    points += 50;
                } else {
                    points += 500 - 100;
                }
                i++;
            }
        }

    }

    return points;
}