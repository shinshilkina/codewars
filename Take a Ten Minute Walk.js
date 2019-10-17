//You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block in a direction and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

//    Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).

function isValidWalk(walk) {
  //north - вверх
  //west - лево
  //east - право
  //south - вниз
  //да, я географический кретин
  let location = {
    horizontal: 0,
    vertical: 0
  };
  for (let p in walk){
    walk[p] == 'n' ? location.vertical++ : 
    walk[p] == 's' ? location.vertical--:
    walk[p] == 'w' ? location.horizontal++:
    walk[p] == 'e' ? location.horizontal--: null;
    //console.log('location: ' + location.horizontal+ ' ' + location.vertical);
    //console.log(walk[p]+ '\n---');
  }
  console.log(location.horizontal==0 && location.vertical == 0 && walk.length == 10 ? true : false);
}

isValidWalk(['n','s','n','s','n','s','n','s','n','s'])//  true
isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e'])//  false
isValidWalk(['w'])//false
isValidWalk(['n','n','n','s','n','s','n','s','n','s'])// false