function encrypt(text, n) {


    if (!text || n <= 0 || text.length <= 0 ) {

        return text;

    } else if (text == null) {
        
        return null;
        
    } else {

        let textOne = text.split('')
        let textTwo = [];
        let textThree = [];
        
        for (let j = 0; j < n; j++) {

            for (let i = 1; i <= textOne.length; i = i + 2) {
                textTwo.push(textOne[i])
                textThree.push(textOne[i - 1])
            }

            textOne = textTwo.concat(textThree).join('');
            textTwo = [];
            textThree = [];

        }

        return textOne;

    }

}

function decrypt(encryptedText, n) {
    if (!encryptedText || n <= 0 || encryptedText.length <= 0) {
        return encryptedText;
    } else if (encryptedText == null) {
        return null;
    }

    const helper = function(str) {
        let odds = str.slice(0, (str.length / 2));
        let evens = str.slice((str.length / 2));
        let output = "";

        for (let i = 0; i < str.length; i++) {
            if (i % 2) {
                output += odds[0];
                odds = odds.slice(1);
            } else {
                output += evens[0];
                evens = evens.slice(1);
            }
        }

        return output;
    };

    for (let i = 0; i < n; i++) {
        encryptedText = helper(encryptedText);
    }

    return encryptedText;
}