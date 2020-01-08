function divisors(integer) {

    const arrayOfIntegers = [];
    
    if (integer > 1) {
        for (let i = 2; i < integer; i++) {
            if (integer % i == 0) {
                arrayOfIntegers.push(i)
            }
        }
        
        if (arrayOfIntegers.length == 0) {
            return `${integer} is prime`;
        } else {
            return arrayOfIntegers;
        }

    }
};