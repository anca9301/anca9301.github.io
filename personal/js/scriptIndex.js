//for welcome page
const startButton = document.querySelector("#startButton");

//for homephrase
const startPhrase = document.querySelector("#homePhrase");
const editPhrase = document.querySelector("#editPhrase");
const savePhrase = document.querySelector("#savePhrase");
const phraseContent = document.querySelector("#phraseContent");

startButton.addEventListener('click', (e) => {
  window.location.href = "journal.html";
})

//to edit startPhrase
startPhrase.addEventListener('click', (e) => {
  var prevPhrase = startPhrase.innerHTML;
  phraseContent.value = prevPhrase;
  
  startPhrase.style.display= "none";
  editPhrase.style.display = "block";
})

//to save startPhrase
savePhrase.addEventListener('click', (e) => {
  var newPhrase = phraseContent.value;
  startPhrase.innerHTML = newPhrase;
  
  startPhrase.style.display= "block";
  editPhrase.style.display = "none";
})