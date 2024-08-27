import fetch from "node-fetch";
addEventListener("load", setUpListeners);

// Maximum number to be generated, equal to number of quoteObjects available in db.json
const maxQuotes = 5; 

const quoteCard = document.getElementById("quote-card");
const feedback = document.getElementById("feedback");
const form = document.getElementById("user-input");

let currentQuoteObj = {};


function setUpListeners() {
  
    document.addEventListener("DOMContentLoaded", 
        getQuote
    );
};




// Use Math object to get random int

function getQuote() {
    const randomNumber = Math.floor(Math.random() * maxQuotes)
    const quoteObj = fetch("http://localhost:3000/quotes")
        .then(resp => resp.json()
        .then(data => {
            currentQuoteObj = data[randomNumber]
            quoteCard.textContent = `"${currentQuoteObj.quote}"`
            return currentQuoteObj;
        }));
    return quoteObj;
}

function verifyAnswer() {
    const userInput = form.value;
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




export {getQuote, verifyAnswer};