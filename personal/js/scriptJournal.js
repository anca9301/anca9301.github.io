//should theoretically work on a website (try later with git)

const openCreateEntry = document.querySelector("#addEntryButton");
const addEntryForm = document.querySelector("#addEntryForm");
const closeCreateEntry = document.querySelector("#closeCreateEntry");
const submitEntry = document.querySelector("#submitNewEntry");

const entryDisplay = document.querySelector("#entryDisplay");
const editEntryForm = document.querySelector("#editEntryForm");
const closeEditEntry = document.querySelector("#closeEditEntry");
const submitEditEntry = document.querySelector("#submitEditEntry");

let dictionary = {
  1: { Title: "Test1", Date: "2022-01-01", Content: "This is a test." },
  2: { Title: "Test2", Date: "2024-02-29", Content: "This is a ." }
};

updateEntry();

function updateEntry() {
  for (var key in dictionary) {
    //console.log(dictionary[key]['Title'], dictionary[key]['Date'], dictionary[key]['Content'])
    // entryDisplay.innerHTML += dictionary[key]['Title'] + '<br>' + dictionary[key]['Date'] + '<br>' + dictionary[key]['Content'] + '<br>' + '<br>';
    let div = document.createElement("div");
    div.className = "entryName";
    let entryTitle = dictionary[key]['Title'] + '     ' + dictionary[key]['Date'];
    div.innerHTML = entryTitle;
    entryDisplay.appendChild(div);
  }
}

function openUpdateEntry() {
  addEntryForm.style.display = "block";
}

// for adding a new journal entry
openCreateEntry.addEventListener('click', (e) => {
  addEntryForm.style.display = "block";
})
closeCreateEntry.addEventListener('click', (e) => {
  addEntryForm.style.display = "none";
})
submitEntry.addEventListener('click', (e) => {
  let newEntry = { Title: document.querySelector("#entryTitle").value, Date: document.querySelector("#entryDate").value, Content: document.querySelector("#entryContent").value };
  dictionary[Object.keys(dictionary).length + 1] = newEntry;
  updateEntry();
})


// for editing an existing journal entry
// need to update to be clickable for every individual entry
entryDisplay.addEventListener('click', (e) => {
  editEntryForm.style.display = "block";
})
closeEditEntry.addEventListener('click', (e) => {
  editEntryForm.style.display = "none";
})
// NEED to update to find the original place of entry to update
submitEditEntry.addEventListener('click', (e) => {
  let entry = { Title: document.querySelector("#entryTitle").value, Date: document.querySelector("#entryDate").value, Content: document.querySelector("#entryContent").value };
  dictionary[Object.keys(dictionary).length + 1] = entry;
  updateEntry();
})
