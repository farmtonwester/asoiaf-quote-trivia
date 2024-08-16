import fetch from "node-fetch";



addEventListener("load", setUpListeners);
// Maximum number to be generated, equal to number of quoteObjects available in db.json
const maxQuotes = 5; 
const quoteCard = document.getElementById("quote-card");
let currentQuoteObj = {};
const feedback = document.getElementById("feedback");
const form = document.getElementById("user-input");

// When form is submitted, check if the user's answer is correct
function setUpListeners() {
    form.addEventListener("submit", (event) => {
        event.preventDefault();
       //verifyAnswer();

    })
};




// Use Math object to get random int
// fetch quoteObj[randomNumber]
function getQuote() {
    const randomNumber = Math.floor(Math.random() * maxQuotes)
    const quoteObj = fetch("http://localhost:3000/quotes")
        .then(resp => resp.json()
        .then(data => {
            //quoteCard.textContent = `"${currentQuoteObj.quote}"`
            return data[randomNumber];
        }));
        
    return quoteObj;
}

function verifyAnswer() {
    const userInput = document.getElementById("user-input").value;
    if (currentQuoteObj.character === userInput) {
        feedback.textContent = "Correct!";
    }
    else {
        feedback.textContent = "Incorrect, try again"
    }
}

function getCharDetails() {
    // fetch(apioficeandfire/char/{currCharId})
}



document.addEventListener("DOMContentLoaded", 
    getQuote
);

export {getQuote, verifyAnswer};