//The word i18n is a common abbreviation of internationalization in the developer community, used instead of typing the whole word and trying to spell it correctly. Similarly, a11y is an abbreviation of accessibility.
//
//Write a function that takes a string and turns any and all "words" (see below) within that string of length 4 or greater into an abbreviation, following these rules:
//
//   - A "word" is a sequence of alphabetical characters. By this definition, any other character like a space or hyphen (eg. "elephant-ride") will split up a series of letters into two words (eg. "elephant" and "ride").
//   - The abbreviated version of the word should have the first letter, then the number of removed characters, then the last letter (eg. "elephant ride" => "e6t r2e").


//abbreviate("elephant-rides are really fun!")
////          ^^^^^^^^*^^^^^*^^^*^^^^^^*^^^*
//// words (^):   "elephant" "rides" "are" "really" "fun"
////                123456     123     1     1234     1
//// ignore short words:               X              X
//
//// abbreviate:    "e6t"     "r3s"  "are"  "r4y"   "fun"
//// all non-word characters (*) remain in place
////                     "-"      " "    " "     " "     "!"
//=== "e6t-r3s are r4y fun!"

function abbreviate(string) {
  var arr = string.split(' ');
  var str = 'abcdefghijklmnopqrstuvwxyz';
  var newArr = arr.map(function(word){
    let newstr = ''; let sum = 0;
    for (var p = 0; p < word.length; p++) {
      p == 0  ? newstr += word[p] : 
      word[p] == '-' ? (newstr += (sum - 1) + word[p-1] + word[p] + word[p+1], sum = 0, p++ ) : 
      (word.length == 2 || word.length == 3) ? newstr += word[p] :
      word[p] == ',' ? newstr += (sum - 1) + word[p-1] + word[p]:
      p == word.length - 1 ? newstr += sum + word[p] : 
      sum++; 
    }
    return newstr;
  });
  return newArr.join(' ');
}

//TESTS
abbreviate("internationalization");//result: "i18n"
abbreviate("accessibility");//result: "a11y"
abbreviate("Accessibility");//result: "A11y"
abbreviate("elephant-ride");//result: "e6t-r2e"