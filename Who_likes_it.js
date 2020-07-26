// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.
// Implement a function likes :: [String] -> String, which must take in input array, containing the names of people who like an item.

function likes(names) {
  const namesLenght = names.length; 
  let nameList = '';
  let postfix = '';
  let result = '';
  
  if (namesLenght > 0) {
    //make postfix
   if (namesLenght === 1){
     postfix = 'likes this';
   } else {
     postfix = 'like this';
   }
  //make line of names
  if (namesLenght === 1){
    nameList = names[0];
  } else if (namesLenght === 2) {
    nameList = names[0] + ' and ' + names[1];
  } else if (namesLenght === 3) {
    nameList = names[0] + ', '+ names[1] + ' and ' + names[2];
  } else {
    const otherNames = namesLenght - 2;
    nameList = names[0] + ', '+ names[1] + ' and ' + otherNames + ' others';
  }
    
    result = nameList + ' ' + postfix;
  } 
  // if no one likes
  else {
    result = 'no one likes this';
  }
      
  
  return result;
}

// TEST
likes []; // must be "no one likes this"
likes ["Peter"]; // must be "Peter likes this"
likes ["Jacob", "Alex"]; // must be "Jacob and Alex like this"
likes ["Max", "John", "Mark"]; // must be "Max, John and Mark like this"
