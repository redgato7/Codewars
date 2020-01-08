function productFib(prod) {
    
    let firstFib = 0;
    let secondFib = 1;
    let temporaryValue = 0;

    while (firstFib * secondFib < prod) {
        temp = firstFib;
        firstFib = secondFib;
        secondFib += temp;
    }

    return [firstFib, secondFib, firstFib * secondFib == prod];

}