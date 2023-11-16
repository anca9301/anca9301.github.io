const newQuoteButton = document.querySelector("#js-new-quote");
const newBackgroundButton = document.querySelector("#js-new-background");
const quoteText = document.querySelector("#js-quote-text");
const authorText = document.querySelector("#js-quote-author");
const quoteBackground = document.querySelector("#js-displayed-img");

const imgFiles = [
  "/img/wa11/Lanterns-LeonC.jpg",
  "/img/wa11/Rainforest-BoudewijnH.jpg",
  "/img/wa12/Stars-DenisD.jpg",
  "/img/wa12/Sea-JosephB.jpg",
  "/img/wa12/Desert-KennyE.jpg",
  "/img/wa12/Cave-MarkO.jpg",
  "/img/wa12/City-PedroL.jpg",
  "/img/wa12/Country-Zugr.jpg",
  "/img/wa12/Park-MikeB.jpg",
  "/img/wa12/Rain-RezaS.jpg",
];
const alts = [
  "Photo by Leon Contreras on Unsplash: low angle shot of paper lanterns",
  "Photo by Boudewijn Huysmans on Unsplash: green trees under white clouds",
  "Photo by Denis Degioanni on Unsplash: milky way on mountains",
  "Photo by Joseph Barrientos on Unsplash: body of water during golden hour",
  "Photo by Kenny Eliason on Unsplash: landscape photography of desert mountains",
  "Photo by Mark Olsen on Unsplash: ice cave",
  "Photo by Pedro Lastra on Unsplash: white and brown city buildings during daytime",
  "Photo by Zugr on Unsplash: selective focus photography of wheat grass during daytime",
  "Photo by Mike Benna on UnSplash: photo of empty park during daytime",
  "Photo by reza shayestehpour on Unsplash: grayscale photography of raindrops",
];

newQuoteButton.addEventListener("click", getQuote);
newBackgroundButton.addEventListener("click", newBackground);

const endpoint = "https://api.quotable.io/random";
var quote;

async function getQuote() {
  // console.log("newQuoteButton working");
  try {
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw Error(response.statusText);
    }
    const json = await response.json();
    console.log(json);
    quote = json;
    displayQuote(json.content);
    displayAuthor(json.author);
  } catch (err) {
    console.log(err);
    alert("failed to fetch new quote");
  }
}

function newBackground() {
  let randNum = random(10);
  quoteBackground.setAttribute("src", imgFiles[randNum]);
  quoteBackground.setAttribute("alt", alts[randNum]);
}

function displayQuote(question) {
  quoteText.textContent = question;
}
function displayAuthor(author) {
  authorText.textContent = author;
}
function random(number) {
  return Math.floor(Math.random() * number);
}

getQuote();
newBackground();
