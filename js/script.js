// FSJS - Random Quote Generator

// Create the array of quote objects and name it quotes
const quotes = [
  {
    quote: 'We build our computer (systems) the way we build our cities: over time, without a plan, on top of ruins.',
    source: 'Ellen Ullman',
    citation: 'https://twitter.com/CodeWisdom',
    year: 2017
  },
  {
    quote: 'What one programmer can do in one month, two programmers can do in two months.',
    source: 'Fred Brooks',
    citation: 'https://twitter.com/CodeWisdom',
    year: 2017
  },
  {
    quote: 'Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.',
    source: 'Patrick McKenzie',
    citation: 'https://twitter.com/CodeWisdom',
    year: 2017
  },
  {
    quote: 'Rules of Optimization:\nRule 1: Don\'t do it.\nRule 2 (for experts only): Don\'t do it yet.',
    source: 'Michael A. Jackson',
    citation: 'https://twitter.com/CodeWisdom',
    year: 2017
  },
  {
    quote: 'How did you know so much about computers?”\nGrace Hopper - “I didn’t, it was the first one”',
    source: 'Grace Hopper',
    citation: 'David Letterman Show',
    year: 2017
  },
  {
    quote: 'A primary cause of complexity is that software vendors uncritically adopt almost any feature that users want.',
    source: 'Niklaus Wirth',
    citation: 'https://twitter.com/CodeWisdom',
    year: 2017
  },
  {
    quote: 'No one in the brief history of computing has ever written a piece of perfect software. It\'s unlikely that you\'ll be the first.',
    source: 'Andrew Hunt',
    citation: 'https://twitter.com/CodeWisdom',
    year: 2017
  },
  {
    quote: 'Java is to JavaScript as ham is to hamster.',
    source: 'Jeremy Keith',
    citation: 'https://twitter.com/CodeWisdom',
    year: 2017
  },
  {
    quote: 'One of the best programming skills you can have is knowing when to walk away for awhile.',
    source: 'Oscar Godson',
    citation: 'https://twitter.com/CodeWisdom',
    year: 2017
  },
  {
    quote: 'Without requirements or design, programming is the art of adding bugs to an empty text file.',
    source: 'Louis Srygley',
    citation: 'https://twitter.com/CodeWisdom',
    year: 2017
  }
]


// Create the getRandomQuote function and name it getRandomQuote
const getRandomQuote = (array) => {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

// Create the printQuote funtion and name it printQuote



// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
