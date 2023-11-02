// COMPLETE VARIABLE AND FUNCTION DEFINITIONS
const customName = document.getElementById("customname");
const randomize = document.querySelector(".randomize");
const story = document.querySelector(".story");

function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

// RAW TEXT STRINGS
var storyText =
  "It was 134 farenheit outside, hot enough to :insertx: outside. :inserty: had the great idea to go for a walk :insertz:. As he walked past the bell tower, he noticed :inserta:. The bell fell to the ground, and :insertx: started melting. Jill saw everything. She was not suprised that 400 pound bell fell, but was suprised that :insertx: the snowman did not melt earlier.";
var insertX = [
  "cook an egg",
  "sear a steak",
  "prepare a Thanksgiving feast",
  "bake a wedding cake",
];
var insertY = [
  "Abominable",
  "Frosty",
  "Santa Claus",
  "Olaf",
  "Bumble",
  "Marshmallow",
];
var insertZ = [
  "around town",
  "to the North Pole",
  "across the Atlantic",
  "to the South Pole",
  "around the world",
  "to church",
];
var insertA = [
  "cars melting from the heat",
  "time melting",
  "icicles crashing onto the streets",
  "water evaporating from the pool",
];

// EVENT LISTENER AND PARTIAL FUNCTION DEFINITION
randomize.addEventListener("click", result);

function result() {
  var xItem = randomValueFromArray(insertX);
  var yItem = randomValueFromArray(insertY);
  var zItem = randomValueFromArray(insertZ);
  var aItem = randomValueFromArray(insertA);
  var cName = "Jill";
  var weight = "400 pounds";
  var temp = "134 fahrenheit";

  if (customName.value !== "") {
    cName = customName.value;
  }

  if (document.getElementById("uk").checked) {
    weight = Math.round(300 / 14).toString() + " stones";
    temp = Math.round((94 - 32) / 1.8).toString() + " centigrade";
  }

  newStory = `It was ${temp} outside, hot enough to ${xItem} outside. ${yItem} had the great idea to go for a walk ${zItem}. 
  As he walked past the bell tower, he noticed ${aItem}. The bell fell to the ground, and ${yItem} started melting. ${cName} saw everything. 
  She was not suprised that ${weight} bell fell, but was suprised that ${yItem} the snowman did not melt earlier.`;
  story.textContent = newStory;
  story.style.visibility = "visible";
}
