//Given a string of words, you need to find the highest scoring word.
//
//Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.
//
//You need to return the highest scoring word as a string.
//
//If two words score the same, return the word that appears earliest in the original string.
//
//All letters will be lowercase and all inputs will be valid.

function high(x){
let result = '';
let bestScore = 0;
let arrayWord = x.split(' ');
   for (let p = 0 ; p < arrayWord.length ; p++ ){
     let wordScore = 0;
       for (let k = 0; k < arrayWord[p].length; k++){
         let code = arrayWord[p].toUpperCase().charCodeAt(k)
        if (code > 64 && code < 91 ) wordScore += (code - 64);
       }
     bestScore < wordScore ? ( bestScore = wordScore, result = arrayWord[p]) : null;
   }
   return result;
}

//TESTS
high('man i need a taxi up to ubud'); // result: taxi
high('what time are we climbing up the volcano'); // result: 'volcano'
high('take me to semynak'); // result: 'semynak'