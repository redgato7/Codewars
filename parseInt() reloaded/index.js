function parseInt(string) {
    console.log(string)
    const wordNumber = string.split(' ')
    const number = [];

    for (let i = 0; i < wordNumber.length; i++) {
        let numberChanger = '';
        let check = '';

        //boundary condition
        if (string === 'zero') {
            return 02;
        }
        if (string === 'one million') {
            return 1000000;
        }

        //checking if number is in dozens
        if (wordNumber[i].includes('twenty')) {
            numberChanger = '2';
        } else if (wordNumber[i].includes('thirty')) {
            numberChanger = '3';
        } else if (wordNumber[i].includes('forty')) {
            numberChanger = '4';
        } else if (wordNumber[i].includes('fifty')) {
            numberChanger = '5';
        } else if (wordNumber[i].includes('sixty')) {
            wordNumber[i] = wordNumber[i].slice(6);
            numberChanger = '6';
        } else if (wordNumber[i].includes('seventy')) {
            wordNumber[i] = wordNumber[i].slice(8);
            numberChanger = '7';
        } else if (wordNumber[i].includes('eighty')) {
            wordNumber[i] = wordNumber[i].slice(7);
            numberChanger = '8';
        } else if (wordNumber[i].includes('ninety')) {
            wordNumber[i] = wordNumber[i].slice(7);
            numberChanger = '9';
        }
        //if number is in dozens add to him second element and push it to the finalArray
        //else if the number is in units/teens push it to the finalArray
        if (wordNumber[i].includes('one')) {
            if ((wordNumber[i - 1] === 'thousand' || wordNumber[i - 2] === 'thousand') && wordNumber[i + 1] !== 'hundred') {
                number.push('0')
            }
            if (numberChanger !== '') {
                number.push(numberChanger + '1')
            } else if (wordNumber[i - 1] === 'thousand' && wordNumber[i - 2] === 'hundred' && wordNumber[i + 1] === 'hundred') {
                number.push('1')
            } else if (wordNumber[i - 1] === 'hundred' || wordNumber[i - 2] === 'hundred') {
                number.push('01')
            } else if ((wordNumber[i - 1] === 'thousand' || wordNumber[i - 2] === 'thousand') && wordNumber[i + 1] !== 'hundred') {
                number.push('001')
            } else {
                number.push('1')
            }
        } else if (wordNumber[i].includes('two')) {
            if ((wordNumber[i - 1] === 'thousand' || wordNumber[i - 2] === 'thousand') && wordNumber[i + 1] !== 'hundred') {
                number.push('0')
            }
            if (numberChanger !== '') {
                number.push(numberChanger + '2')
            } else if (wordNumber[i - 1] === 'thousand' && wordNumber[i - 2] === 'hundred' && wordNumber[i + 1] === 'hundred') {
                number.push('2')
            } else if (wordNumber[i - 1] === 'hundred' || wordNumber[i - 2] === 'hundred') {
                number.push('02')
            } else if ((wordNumber[i - 1] === 'thousand' || wordNumber[i - 2] === 'thousand') && wordNumber[i + 1] !== 'hundred') {
                number.push('002')
            } else {
                number.push('2')
            }
        } else if (wordNumber[i].includes('three')) {
            if ((wordNumber[i - 1] === 'thousand' || wordNumber[i - 2] === 'thousand') && wordNumber[i + 1] !== 'hundred') {
                number.push('0')
            }
            if (numberChanger !== '') {
                number.push(numberChanger + '3')
            } else if (wordNumber[i - 1] === 'thousand' && wordNumber[i - 2] === 'hundred' && wordNumber[i + 1] === 'hundred') {
                number.push('3')
            } else if ((wordNumber[i - 1] === 'hundred' || wordNumber[i - 2] === 'hundred') || (wordNumber[i - 3] === 'hundred' && wordNumber[i - 1] === 'and')) {
                number.push('03')
            } else if ((wordNumber[i - 1] === 'thousand' || wordNumber[i - 2] === 'thousand') && wordNumber[i + 1] !== 'hundred') {
                number.push('003')
            } else {
                number.push('3')
            }
        } else if (wordNumber[i].includes('four')) {
            if ((wordNumber[i - 1] === 'thousand' || wordNumber[i - 2] === 'thousand') && wordNumber[i + 1] !== 'hundred') {
                number.push('0')
            }
            if (numberChanger !== '') {
                number.push(numberChanger + '4')
            } else if (wordNumber[i].includes('teen')) {
                number.push('14')
            } else if (wordNumber[i - 1] === 'thousand' && wordNumber[i - 2] === 'hundred' && wordNumber[i + 1] === 'hundred') {
                number.push('4')
            } else if (wordNumber[i - 1] === 'hundred' || wordNumber[i - 2] === 'hundred') {
                number.push('04')
            } else if ((wordNumber[i - 1] === 'thousand' || wordNumber[i - 2] === 'thousand') && wordNumber[i + 1] !== 'hundred') {
                number.push('004')
            } else {
                number.push('4')
            }
        } else if (wordNumber[i].includes('five')) {
            if ((wordNumber[i - 1] === 'thousand' || wordNumber[i - 2] === 'thousand') && wordNumber[i + 1] !== 'hundred') {
                number.push('0')
            }
            if (numberChanger !== '') {
                number.push(numberChanger + '5')
            } else if (wordNumber[i - 1] === 'thousand' && wordNumber[i - 2] === 'hundred' && wordNumber[i + 1] === 'hundred') {
                number.push('5')
            } else if (wordNumber[i - 1] === 'hundred' || wordNumber[i - 2] === 'hundred') {
                number.push('05')
            } else if ((wordNumber[i - 1] === 'thousand' || wordNumber[i - 2] === 'thousand') && wordNumber[i + 1] !== 'hundred') {
                number.push('005')
            } else {
                number.push('5')
            }
        } else if (wordNumber[i].includes('six')) {
            if ((wordNumber[i - 1] === 'thousand' || wordNumber[i - 2] === 'thousand') && wordNumber[i + 1] !== 'hundred') {
                number.push('0')
            }
            if (numberChanger !== '') {
                number.push(numberChanger + '6')
            } else if (wordNumber[i].includes('teen')) {
                number.push('16')
            } else if (wordNumber[i - 1] === 'thousand' && wordNumber[i - 2] === 'hundred' && wordNumber[i + 1] === 'hundred') {
                number.push('6')
            } else if (wordNumber[i - 1] === 'hundred' || wordNumber[i - 2] === 'hundred') {
                number.push('06')
            } else if ((wordNumber[i - 1] === 'thousand' || wordNumber[i - 2] === 'thousand') && wordNumber[i + 1] !== 'hundred') {
                number.push('006')
            } else {
                number.push('6')
            }
        } else if (wordNumber[i].includes('seven')) {
            if ((wordNumber[i - 1] === 'thousand' || wordNumber[i - 2] === 'thousand') && wordNumber[i + 1] !== 'hundred') {
                number.push('0')
            }
            if (numberChanger !== '') {
                number.push(numberChanger + '7')
            } else if (wordNumber[i].includes('teen')) {
                number.push('17')
            } else if (wordNumber[i - 1] === 'thousand' && wordNumber[i - 2] === 'hundred' && wordNumber[i + 1] === 'hundred') {
                number.push('7')
            } else if (wordNumber[i - 1] === 'hundred' || wordNumber[i - 2] === 'hundred') {
                number.push('07')
            } else if ((wordNumber[i - 1] === 'thousand' || wordNumber[i - 2] === 'thousand') && wordNumber[i + 1] !== 'hundred') {
                number.push('007')
            } else {
                number.push('7')
            }
        } else if (wordNumber[i].includes('eight')) {
            if ((wordNumber[i - 1] === 'thousand' || wordNumber[i - 2] === 'thousand') && wordNumber[i + 1] !== 'hundred') {
                number.push('0')
            }
            if (numberChanger !== '') {
                number.push(numberChanger + '8')
            } else if (wordNumber[i].includes('teen')) {
                number.push('18')
            } else if (wordNumber[i - 1] === 'thousand' && wordNumber[i - 2] === 'hundred' && wordNumber[i + 1] === 'hundred') {
                number.push('8')
            } else if (wordNumber[i - 1] === 'hundred' || wordNumber[i - 2] === 'hundred') {
                number.push('08')
            } else if ((wordNumber[i - 1] === 'thousand' || wordNumber[i - 2] === 'thousand') && wordNumber[i + 1] !== 'hundred') {
                number.push('008')
            } else {
                number.push('8')
            }
        } else if (wordNumber[i].includes('nine')) {
            if ((wordNumber[i - 1] === 'thousand' || wordNumber[i - 2] === 'thousand') && wordNumber[i + 1] !== 'hundred') {
                number.push('0')
            }
            if (numberChanger !== '') {
                number.push(numberChanger + '9')
            } else if (wordNumber[i].includes('teen')) {
                number.push('19')
            } else if (wordNumber[i - 1] === 'thousand' && wordNumber[i - 2] === 'hundred' && wordNumber[i + 1] === 'hundred') {
                number.push('9')
            } else if (wordNumber[i - 1] === 'hundred' || wordNumber[i - 2] === 'hundred') {
                number.push('09')
            } else if ((wordNumber[i - 1] === 'thousand' || wordNumber[i - 2] === 'thousand') && wordNumber[i + 1] !== 'hundred') {
                number.push('009')
            } else {
                number.push('9')
            }
        } else if (wordNumber[i].includes('ten')) {
            if (wordNumber[i - 1] === 'thousand' || wordNumber[i - 2] === 'thousand') {
                number.push('0')
            }
            number.push('10')
        } else if (wordNumber[i].includes('eleven')) {
            if (wordNumber[i - 1] === 'thousand' || wordNumber[i - 2] === 'thousand') {
                number.push('0')
            }
            number.push('11')
        } else if (wordNumber[i].includes('twelve')) {
            if (wordNumber[i - 1] === 'thousand' || wordNumber[i - 2] === 'thousand') {
                number.push('0')
            }
            number.push('12')
        } else if (wordNumber[i].includes('thirteen')) {
            if (wordNumber[i - 1] === 'thousand' || wordNumber[i - 2] === 'thousand') {
                number.push('0')
            }
            number.push('13')
        } else if (wordNumber[i].includes('fifteen')) {
            if (wordNumber[i - 1] === 'thousand' || wordNumber[i - 2] === 'thousand') {
                number.push('0')
            }
            number.push('15')
        } else if (wordNumber[i].includes('hundred')) {
            if (wordNumber[i + 1] === undefined || wordNumber[i + 1] === 'thousand') {
                number.push('00')
            }
        } else if (wordNumber[i].includes('thousand')) {
            if (wordNumber[i + 1] === undefined) {
                number.push('000')
            }
        } else if (wordNumber[i].includes('and')) {
            continue;
        } else {
            number.push(numberChanger + '0')
        }
        console.log(number)

    }
    return Number(number.join(''));
}


console.log(parseInt("two hundred thousand three"))

// if (wordNumber[i].includes('ty')) {
//     switch (wordNumber[i]) {
//         case 'twenty':
//             number.push(dozens[0])
//             break;
//         case 'thirty':
//             number.push(dozens[1])
//             break;
//         case 'fourty':
//             number.push(dozens[2])
//             break;
//         case 'fifty':
//             number.push(dozens[3])
//             break;
//         case 'sixty':
//             number.push(dozens[4])
//             break;
//         case 'seventy':
//             number.push(dozens[5])
//             break;
//         case 'eighty':
//             number.push(dozens[6])
//             break;
//         case 'ninety':
//             number.push(dozens[7])
//             break;

//     }
// }

// if (wordNumber[i].includes('teen')) {
//     switch (wordNumber[i]) {
//         case 'thirteen':
//             number.push(unitsAndTeens[13])
//             break;
//         case 'fourteen':
//             number.push(unitsAndTeens[14])
//             break;
//         case 'fifteen':
//             number.push(unitsAndTeens[15])
//             break;
//         case 'sixteen':
//             number.push(unitsAndTeens[16])
//             break;
//         case 'seventeen':
//             number.push(unitsAndTeens[17])
//             break;
//         case 'eighteen':
//             number.push(unitsAndTeens[18])
//             break;
//         case 'nineteen':
//             number.push(unitsAndTeens[19])
//             break;

//     }
// }

// switch (wordNumber[i]) {
//     case 'zero':
//         number.push(unitsAndTeens[0])
//         break;
//     case 'one':
//         number.push(unitsAndTeens[1])
//         break;
//     case 'two':
//         number.push(unitsAndTeens[2])
//         break;
//     case 'three':
//         number.push(unitsAndTeens[3])
//         break;
//     case 'four':
//         number.push(unitsAndTeens[4])
//         break;
//     case 'five':
//         number.push(unitsAndTeens[5])
//         break;
//     case 'six':
//         number.push(unitsAndTeens[6])
//         break;
//     case 'seven':
//         number.push(unitsAndTeens[7])
//         break;
//     case 'eight':
//         number.push(unitsAndTeens[8])
//         break;
//     case 'nine':
//         number.push(unitsAndTeens[9])
//         break;
//     case 'ten':
//         number.push(unitsAndTeens[10])
//         break;
//     case 'eleven':
//         number.push(unitsAndTeens[11])
//         break;
//     case 'twelve':
//         number.push(unitsAndTeens[12])
//         break;

// }