// Adding the Main and Parent elements via DOM
const h1El = document.createElement("h1");
h1El.innerHTML = "Ice And Fire";

const containerDiv = document.createElement("div");
containerDiv.className = "ui grid container";

const buttonDiv = document.createElement("div");
buttonDiv.className = "buttons";

document.body.append(h1El, containerDiv, buttonDiv);

// Parent Element selection
const buttons = document.querySelector(".buttons");
const container = document.querySelector(".container");

// Initial Page number
var curBook = 1;

// Adding the pagination setup
const init = (curBook) => {
  let html = `
  ${
    curBook === 1
      ? ""
      : `<button id="prev" class="teal button">
     <i id="prev" class="left chevron icon"></i>
      Book ${curBook - 1}
    </button>`
  }
  ${
    curBook === 11
      ? ""
      : `<button id="next" class="orange button">
  Book ${curBook + 1}
  <i id="next" class="right chevron icon"></i>
</button>`
  }`;
  buttons.innerHTML = html;
};

// Initialized the buttons at the start of the page
init(curBook);

// For Handling the page click event
buttons.addEventListener("click", function (e) {
  if (e.target.id === "next" && curBook < 12) {
    curBook++;
  }
  if (e.target.id === "prev" && curBook > 1) {
    curBook--;
  }

  // After every page click re-rendering the Current page number and Books accordingly
  init(curBook);

  // Rendering the books synchronously with the click event
  bookAPI(curBook);
});

// API request for fetching the data from the server
const bookAPI = async (curBook) => {
  try {
    // Awaiting the data using async/await syntax
    const res = await fetch(
      `https://anapioficeandfire.com/api/books/${curBook}`
    );

    const data = await res.json();

    // Since characters is also an API url taking max of 5 characters and passing to the helper function
    let charName = data.characters.slice(0, 5);

    // Passing all the required data to the helper function
    bookDetails(
      data.name,
      data.authors[0],
      data.publisher,
      data.released,
      data.isbn,
      charName,
      data.numberOfPages
    );
  } catch (e) {
    alert(`${e}; Please check the URL (or) try after some time`);
  }
};

// Initially making the request when the user opens the page
bookAPI(curBook);

// DOM elements
let html = `<div class="twelve wide column ui centered card">
  <div class="content">
    <div class="header"></div>
    <div class="meta">
      <p id="author" class="category"></p>
      <p id="publisher" class="category"></p>
      <p id="release" class="category"></p>
    </div>
    <div class="description">
      <p id="isbn"></p>
      <p id="charc"></p>
    </div>
  </div>
  <div class="extra content">
    <div class="right floated author">
      <i id="pages"></i>
    </div>
  </div>
</div>`;

// Adding the DOM elements to the parent element
container.innerHTML = html;

// Helper function for rendering the book bookDetails
// Since characters are needed async syntax is used
const bookDetails = async (
  title,
  author,
  publisher,
  releasedOn,
  isbn,
  characters,
  pages
) => {
  // fetching the characters details of each books
  const charArr1 = await fetch(`${characters[0]}`);
  const res1 = await charArr1.json();

  const charArr2 = await fetch(`${characters[1]}`);
  const res2 = await charArr2.json();

  const charArr3 = await fetch(`${characters[2]}`);
  const res3 = await charArr3.json();

  const charArr4 = await fetch(`${characters[3]}`);
  const res4 = await charArr4.json();

  const charArr5 = await fetch(`${characters[4]}`);
  const res5 = await charArr5.json();

  // Storing them all to a single array
  let charactersName = [res1.name, res2.name, res3.name, res4.name, res5.name];

  // Changing the Release Date to String type for readability
  let date = new Date(releasedOn);

  // Changing the data dynamically for each request made
  document.querySelector(".header").innerHTML = title;
  document.querySelector("#author").innerHTML = `<b>Author : ${author}</b>`;
  document.querySelector(
    "#publisher"
  ).innerHTML = `Published By : ${publisher}`;
  document.querySelector(
    "#release"
  ).innerHTML = `Released On : ${date.toDateString()}`;
  document.querySelector("#isbn").innerHTML = `ISBN : ${isbn}`;
  document.querySelector(
    "#charc"
  ).innerHTML = `Main Characters : ${charactersName.join(" , ")}`;
  document.querySelector("#pages").innerHTML = `Pages : ${pages}`;
};
