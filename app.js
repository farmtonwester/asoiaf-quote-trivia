import fetch from "node-fetch";
import updateElement from "./utils";
addEventListener("load", setUpListeners);

// Maximum number to be generated, equal to number of quoteObjects available in db.json
const maxQuotes = 5; 

const quoteCard = document.getElementById("quote-card");
const feedback = document.getElementById("feedback");
const form = document.getElementById("user-input");

const QUOTE_DB = "http://localhost:3000/quotes"

let currentQuoteObj = {};


function setUpListeners() {
  
    document.addEventListener("DOMContentLoaded", 
        fetchQuotes
    );
};




// Use Math object to get random int

async function fetchQuotes() {
    const randomNumber = Math.floor(Math.random() * maxQuotes)

    return await fetch(QUOTE_DB)
    .then(resp => resp.json())
    .then(data => {
        updateElement("quote-card", data[randomNumber]["quote"]);
    });
};



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




export {fetchQuotes, verifyAnswer};