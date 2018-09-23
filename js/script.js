// FSJS - Random Quote Generator

// An array of quotes used later in the app
const quotes = [
  {
    quote: 'We build our computer (systems) the way we build our cities: over time, without a plan, on top of ruins.',
    source: 'Ellen Ullman',
    citation: 'https://twitter.com/CodeWisdom',
    year: 2017,
    tags: ['computers']
  },
  {
    quote: 'What one programmer can do in one month, two programmers can do in two months.',
    source: 'Fred Brooks',
    citation: 'https://twitter.com/CodeWisdom',
    tags: ['programmers', 'time management']
  },
  {
    quote: 'Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.',
    source: 'Patrick McKenzie',
    citation: 'https://twitter.com/CodeWisdom',
    year: 2016,
    tags: ['developer', 'problem solving']
  },
  {
    quote: 'Rules of Optimization:<br>Rule 1: Don\'t do it.<br>Rule 2 (for experts only): Don\'t do it yet.',
    source: 'Michael A. Jackson',
    citation: 'https://twitter.com/CodeWisdom',
    year: 2017,
    tags: ['optimization', 'rules', 'experts']
  },
  {
    quote: 'David Letterman - “How did you know so much about computers?”<br>Grace Hopper - “I didn’t, it was the first one.”',
    source: 'Grace Hopper',
    citation: 'David Letterman Show',
    tags: ['media', 'tv', 'Grace Hopper', 'history']
  },
  {
    quote: 'A primary cause of complexity is that software vendors uncritically adopt almost any feature that users want.',
    source: 'Niklaus Wirth',
    citation: 'https://twitter.com/CodeWisdom',
    year: 2017,
    tags: ['complexity', 'software vendors', 'user features']
  },
  {
    quote: 'No one in the brief history of computing has ever written a piece of perfect software. It\'s unlikely that you\'ll be the first.',
    source: 'Andrew Hunt',
    citation: 'https://twitter.com/CodeWisdom',
    year: 2017,
    tags: ['history', 'software', 'naivety']
  },
  {
    quote: 'Java is to JavaScript as ham is to hamster.',
    source: 'Jeremy Keith',
    citation: 'https://twitter.com/CodeWisdom',
    tags: ['JavaScript', 'Java', 'eternal confusions']
  },
  {
    quote: 'One of the best programming skills you can have is knowing when to walk away for awhile.',
    source: 'Oscar Godson',
    citation: 'https://twitter.com/CodeWisdom',
    year: 2017,
    tags: ['programming', 'skills', 'best practices']
  },
  {
    quote: 'Without requirements or design, programming is the art of adding bugs to an empty text file.',
    source: 'Louis Srygley',
    citation: 'https://twitter.com/CodeWisdom',
    year: 2017,
    tags: ['requirements', 'design', 'programming', 'art']
  }
];


// This function takes an array and returns its element, randomly
const getRandomQuote = array => {

  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];

};

// This functions generates a random number from 0 to 255 for later use in changeBackgroundColor function
const getRandomColorValue = () => {

  return Math.floor(Math.random() * 256);

};

// This function changes the background color of the page and the 'Show another quote' button
const changeBackgroundColor = () => {

  // Targeting elements
  const body = document.querySelector('body');
  const button = document.getElementById('loadQuote');
  const panel = document.getElementById('tags-panel');
  const tags = document.querySelectorAll('.tag');
  // Generating color values
  const red = getRandomColorValue();
  const green = getRandomColorValue();
  const blue = getRandomColorValue();
  // Forming color value to be later used in the function
  const rgb = `rgb(${red}, ${green}, ${blue})`;
  // Applying new color to the elements
  body.style = `background-color: ${rgb};`;
  button.style = `background-color: ${rgb};`;
  panel.style = `border-color: ${rgb}; color: ${rgb};`;
  tags.forEach(function(tag) {
    tag.style = `border-color: ${rgb};`;
  });
};

// This function provides HTML .tags-panel to be used in printQuote function
const printTags = quote => {
  outputHTML = `<div id="tags-panel">Tags : `;
  quote.tags.forEach(function(tag) {
    outputHTML += `<span class="tag">${tag}</span>`;
  });
  outputHTML += `</div>`;

  return outputHTML;
};

// This function makes up HTML code out of randomly chosen quote object from quotes array
const printQuote = () => {

  // Getting a random quote object
  const randomQuote = getRandomQuote(quotes);

  // Making up HTML
  let outputHTML = `<p class="quote">${randomQuote.quote}</p>`;
  outputHTML += `<p class="source">${randomQuote.source}`;
  // If randomQuote.citation exists and is not an empty string, additional HTML will be added
  if (randomQuote.citation || randomQuote.citation != '') {
    outputHTML += `<span class="citation">${randomQuote.citation}</span>`;
  }
  // If randomQuote.year exists, additional HTML will be added
  if (randomQuote.year) {
    outputHTML += `<span class="year">${randomQuote.year}`;
  }
  outputHTML += printTags(randomQuote);
  // No matter if additional HTML is added p.source gets its closing tag
  outputHTML += `</p>`;

  // Targeting #quote-box and updating its HTML content
  const target = document.getElementById('quote-box');
  target.innerHTML = outputHTML;
  changeBackgroundColor();

};

// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

window.setInterval(printQuote, 5000);
