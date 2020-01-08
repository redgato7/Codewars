function squareDigits(num) {
  num = num.toString();
  const arrayNumbers = num.split('');
  const arraySquaredNumbers = [];

  arrayNumbers.forEach(element => {
        arraySquaredNumbers.push(element * element)
  });

  return Number(arraySquaredNumbers.join(''));
}