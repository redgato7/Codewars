function sumOfDivided(lst) {
    let maxPrimeFactors = [];
    if (lst.every(currentValue => currentValue < 0)) {
        maxPrimeFactors = lst.sort((a, b) => a - b)
    } else {
        maxPrimeFactors = lst.sort((a, b) => b - a)
    }
    const primeNumbers = primeFactorsTo(Math.abs(maxPrimeFactors[0]));
    const finalArray = [];

    for (let j = 0; j < primeNumbers.length; j++) {

        let sum = 0;
        let tempArray = [];

        for (let i = 0; i < lst.length; i++) {
            if (lst[i] % primeNumbers[j] === 0) {
                tempArray.push(lst[i]);
            }
        }

        if (tempArray.length <= 0) {
            continue;
        } else {
            for (let i = 0; i < tempArray.length; i++) {
                sum = sum + tempArray[i];
            }
        }

        finalArray.push([primeNumbers[j], sum])
        tempArray = [];
        sum = 0;

    }

    return finalArray;

}

const primeFactorsTo = max => {

    const store = [];
    const primes = [];

    for (let i = 2; i <= max; ++i) {

        if (!store[i]) {
            primes.push(i);
            for (let j = i << 1; j <= max; j += i) {
                store[j] = true;
            }
        }

    }

    return primes;

}