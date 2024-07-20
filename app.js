// Maximum number to be generated, equal to number of quoteObjects available in db.json
const maxQuotes = 4; 
const quoteCard = document.getElementById("quote-card");


// Use Math object to get random int
// fetch quoteObj[randomNumber]
function getQuote() {
    const randomNumber = Math.floor(Math.random() * maxQuotes)
    const newQuote = fetch("http://localhost:3000/quotes")
    .then(resp => resp.json()
    .then(data => {
        const quoteObj = data[randomNumber];
        const text = quoteCard.appendChild(document.createElement("p"));
        text.textContent = `"${quoteObj.quote}"`;
    }))
}

function verifyAnswer(){
    
}




document.addEventListener("DOMContentLoaded", 
    getQuote()
);


