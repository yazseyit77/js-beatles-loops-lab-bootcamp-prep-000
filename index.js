// add solution here
const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(){
  for(var i = 0; i < musicians.length; i++){
      return `${musicians[i]} plays ${instruments[i]}`;
  }
}

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(){
  var i = 0;
  while(i < facts.length){
  return `${facts[i]}!!!`;
    i++;
  }
}

var type = ["I love the Beatles!"];
function iLoveTheBeatles(num){
  if(num === 7){
    for(var i = 0; i <= 8; i++){
      return i;
    } if(num === 17){
      for(var i = 0; i <= 18; i++){
        return i;
    }
  }
}
