const quotesEl = document.querySelector(".quotes");
const loaderEl = document.querySelector(".loader");

const quotes = [
  { text: "Hello World 1" },
  { text: "Hello World 2" },
  { text: "Hello World 3" },
  { text: "Hello World 4" },
  { text: "Hello World 5" },
  { text: "Hello World 6" },
  { text: "Hello World 7" },
  { text: "Hello World 8" },
  { text: "Hello World 9" },
  { text: "Hello World 11" },
  { text: "Hello World 12" },
  { text: "Hello World 13" },
  { text: "Hello World 14" },
  { text: "Hello World 15" },
  { text: "Hello World 16" },
  { text: "Hello World 17" },
  { text: "Hello World 18" },
  { text: "Hello World 19" },
  { text: "Hello World 20" },
  { text: "Hello World 21" },
  { text: "Hello World 22" },
  { text: "Hello World 23" },
  { text: "Success!!! 1" },
  { text: "Success!!! 2" },
  { text: "Success!!! 3" },
  { text: "Success!!! 4" },
  { text: "Success!!! 5" },
  { text: "Success!!! 6" },
  { text: "Success!!! 7" },
  { text: "Success!!! 8" },
  { text: "Success!!! 9" },
  { text: "Success!!! 10" },
  { text: "Success!!! 11" },
  { text: "Success!!! 12" },
  { text: "Success!!! 13" },
  { text: "Success!!! 14" },
  { text: "Success!!! 15" },
  { text: "Success!!! 16" },
  { text: "Hello World 1" },
  { text: "Hello World 2" },
  { text: "Hello World 3" },
  { text: "Hello World 4" },
  { text: "Hello World 5" },
  { text: "Hello World 6" },
  { text: "Hello World 7" },
];

// control variables
const available = quotes.length;
const limit = 10;
let displayed = 0;
let startIndex = 0;
let endIndex = startIndex + limit;

// show the quotes
const showQuotes = () => {
  // Grab the specific part of the array we want to display
  let selectedQuotes = quotes.slice(startIndex, endIndex);

  // Map through the selected quotes for display
  selectedQuotes.forEach((quote) => {
    const quoteEl = document.createElement("blockquote");
    quoteEl.classList.add("quote");
    quoteEl.innerHTML = `
              <span></span>
              ${quote.text}
              <footer></footer>
          `;
    quotesEl.appendChild(quoteEl);
  });

  // Update the indexes
  startIndex = startIndex + limit;
  endIndex = startIndex + limit;
};

// Load Quotes
const loadQuotes = async () => {
  // show the loading animation
  showLoader();

  // 2 seconds later
  setTimeout(async () => {
    try {
      // If there are still quotes to display - load the next batch and update the displayed
      if (available > displayed) {
        showQuotes();
        displayed = displayed + limit;
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      hideLoader();
    }
  }, 2000);
};

// Display/Hide the loading animation
const hideLoader = () => {
  loaderEl.classList.remove("show");
};
const showLoader = () => {
  loaderEl.classList.add("show");
};

// Check user's scroll
window.addEventListener(
  "scroll",
  () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

    // If the user has scrolled to the bottom, and there are still quotes to display - load more quotes
    if (scrollTop + clientHeight >= scrollHeight - 5 && available > displayed) {
      loadQuotes();
    }
  },
  {
    passive: true,
  }
);

// initialize
loadQuotes();
