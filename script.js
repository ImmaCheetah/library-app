const bookContainer = document.querySelector('#book-container');
const dialog = document.getElementById('dialog');
const newBookBtn = document.getElementById('new-book-btn');
const form = document.getElementById('main-form');
const addBtn = document.getElementById('add-btn');


// Main array to hold all book objects
const myLibrary = [
    {
        title: "Book 1",
        author: "Author 1",
        pages: 413,
        readState: "No",
    },
    {
        title: "Book 2",
        author: "Author 2",
        pages: 560,
        readState: "Yes",
    },
];

// Book constructor
function Book(title, author, pages, readState) {
    this.title = title
    this.author = author
    this.pages = pages
    this.readState = readState
}

// Set info function to prototype of Book
Book.prototype.info = function() {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.readState}`;
}

// Creates new variable each time it's called and adds new object to myLibrary array
function addBookToLibrary() {
    // const book = new Book(prompt('title?'), prompt('author?'), prompt('pages?'), prompt('read?'));

    const bookTitleInForm = form.elements['book-title'];
    const bookAuthorInForm = form.elements['book-author'];
    const bookPagesInForm = form.elements['book-pages'];
    const bookStateInForm = form.elements['book-state'];

    let title = bookTitleInForm.value;
    let author = bookAuthorInForm.value;
    let pages = bookPagesInForm.value;
    let state = bookStateInForm.value;

    const book = new Book(title, author, pages, state);

    myLibrary.push(book);
    console.log(book);

    // Take value from each field and add to object
}

// Loop through array and show all books
function displayBooks() {
    for (let i = 0; i < myLibrary.length; i++) {
        // Card div
        const bookCard = document.createElement('div');
        bookCard.classList.add('book-card');

        // Add each info to element then append to div
        // Book info
        const bookTitle = document.createElement('h4');
        const bookAuthor = document.createElement('p');
        const bookPages = document.createElement('p');
        const bookState = document.createElement('p');

        bookTitle.textContent += myLibrary[i].title;
        bookAuthor.textContent += myLibrary[i].author;
        bookPages.textContent += myLibrary[i].pages;
        bookState.textContent += myLibrary[i].readState;

        bookCard.append(bookTitle);
        bookCard.append(bookAuthor);
        bookCard.append(bookPages);
        bookCard.append(bookState);

        bookContainer.append(bookCard);

        // bookCard.innerHTML += myLibrary[i].title;
        // bookCard.innerHTML += myLibrary[i].author;
        // bookCard.innerHTML += myLibrary[i].pages;
        // bookCard.innerHTML += myLibrary[i].readState;
        // bookContainer.appendChild(bookCard);
    }
}

// addBookToLibrary();
displayBooks();


// Event Listeners

// Open modal when clicked
newBookBtn.addEventListener('click', (e) => {
    dialog.showModal();
});


addBtn.addEventListener('click', (e) => {
    event.preventDefault();
    addBookToLibrary();
    displayBooks();
});


// Start loop of array
// Loop over each object
// Make a blank book card div element (card) every run
// Start second loop inside 
// Create dom elements for object keys
// Add/append key values to elements
// Append those to the div
