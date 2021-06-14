let resp = []

// Fetch the quotes from API
fetch('https://type.fit/api/quotes')
  .then((response) => {
    return response.json() // convert to json
  })
  .then(function (data) {
    resp = data // store in a variable
    randomQuote() // generate random quote
  })

const randomQuote = () => {
  const quote = resp[Math.floor(Math.random() * resp.length)] // Get random quote
  // Insert quote in document
  document.getElementById('quote').innerHTML = quote.text
  document.getElementById('author').innerHTML = quote.author
}

// Add click event listener to button
document.getElementById('button').addEventListener('click', randomQuote)
