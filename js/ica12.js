const newQuoteButton = document.querySelector("#js-new-quote");
const answerButton = document.querySelector("#js-tweet");
const questText = document.querySelector('#js-quote-text');
const answerText = document.querySelector("#js-answer-text");

newQuoteButton.addEventListener('click', getQuote);
answerButton.addEventListener('click', getAnswer);

const endpoint = "https://trivia.cyberwisp.com/getrandomchristmasquestion";
var trivia;

async function getQuote() {
    // console.log("newQuoteButton working");
    try {
        const response = await fetch(endpoint);
        if (!response.ok) {
            throw Error(response.statusText);
        }
        const json = await response.json();
        // console.log(json);
        trivia = json;
        displayQuote(json.question);
        displayAnswer("");
    }
    catch(err) {
        console.log(err);
        alert('failed to fetch new quote');
    }
}

async function getAnswer() {
    // console.log("newQuoteButton working");
    try {
        // const response = await fetch(endpoint);
        // if (!response.ok) {
        //     throw Error(response.statusText);
        // }
        // const json = await response.json();
        // console.log(json);
        console.log(trivia);
        displayAnswer(trivia.answer);
    }
    catch(err) {
        console.log(err);
        alert('failed to fetch new answer');
    }
}

function displayQuote(question) {
    questText.textContent = question;
}
function displayAnswer(answer) {
    answerText.textContent = answer;
}

getQuote();