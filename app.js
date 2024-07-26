// Maximum number to be generated, equal to number of quoteObjects available in db.json
const maxQuotes = 5; 
const quoteCard = document.getElementById("quote-card");
let currentQuoteObj = {};
const feedback = document.getElementById("feedback");
const form = document.getElementById("user-input");

// When form is submitted, check if the user's answer is correct
form.addEventListener("submit", (event) => {
    event.preventDefault();
   //verifyAnswer();
})




// Use Math object to get random int
// fetch quoteObj[randomNumber]
function getQuote() {
    const randomNumber = Math.floor(Math.random() * maxQuotes)
    fetch("http://localhost:3000/quotes")
    .then(resp => resp.json()
    .then(data => {

        currentQuoteObj = data[randomNumber];
        quoteCard.textContent = `"${currentQuoteObj.quote}"`;
    }));
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

//export {getQuote, verifyAnswer};