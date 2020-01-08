function addBinary( a, b ){
let decimalNumber = a + b;
let binaryNumber = '';

while ( decimalNumber > 0 ) {
binaryNumber = ( decimalNumber % 2 ) + binaryNumber;
decimalNumber = Math.floor( decimalNumber / 2 ); 
}

return binaryNumber; 
}