function fetchBooks() {
  // Return the fetch promise so tests can access it
  return fetch("https://anapioficeandfire.com/api/books")
    .then((response) => response.json())
    .then((jsonData) => renderBooks(jsonData));
}

function renderBooks(books) {
  // This function is provided; it renders book titles to the DOM.
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}
function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
