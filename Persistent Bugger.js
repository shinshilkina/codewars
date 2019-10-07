//Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.
//
//For example:
//
// persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
                       // and 4 has only one digit
// persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
                        // 1*2*6 = 12, and finally 1*2 = 2
//
// persistence(4) === 0 // because 4 is already a one-digit number

function persistence(num) {
   let result = 0;
   let str = String(num).split('');
   while (str.join('').length != 1){
    let k = 1;
    for (let g = 0; g < str.join('').length ; g++){
      k = k * str[g];
    }
    console.log(k);
    str = String(k).split('');
    //console.log(str);
    result++;
   }
   console.log ('----------');
   console.log (result) ;
   console.log ('----------');
}

persistence(39)// = 3
persistence(4)// = 0
persistence(25)// = 2
persistence(999)// = 4