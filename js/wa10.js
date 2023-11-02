// COMPLETE VARIABLE AND FUNCTION DEFINITIONS
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

// RAW TEXT STRINGS
var storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";
var insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
var insertY = ["the soup kitchen", "Disneyland", "the White House"];
var insertZ = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];

// EVENT LISTENER AND PARTIAL FUNCTION DEFINITION
randomize.addEventListener('click', result);

function result() {
    var xItem = randomValueFromArray(insertX);
    var yItem = randomValueFromArray(insertY);
    var zItem = randomValueFromArray(insertZ);
    var cName = "Bob";
    var weight = "300 pounds";
    var temp = "94 fahrenheit";

  if(customName.value !== '') {
    cName = customName.value;
  }

  if(document.getElementById("uk").checked) {
    weight = Math.round(300/14).toString() + " stones";
    temp =  Math.round((94-32)/1.8).toString() + " centigrade";

  }

  newStory = `It was ${temp} outside, so ${xItem} went for a walk. When they got to ${yItem}, they stared in horror for a few moments, then ${zItem}. ${cName} saw the whole thing, but was not surprised — ${xItem} weighs ${weight}, and it was a hot day.`;
  story.textContent = newStory;
  story.style.visibility = 'visible';
}