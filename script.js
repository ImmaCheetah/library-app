const bookContainer = document.querySelector('#book-container');


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
    {
        title: "Book 3",
        author: "Author 3",
        pages: 189,
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
    const book = new Book(prompt('title?'), prompt('author?'), prompt('pages?'), prompt('read?'));
    myLibrary.push(book);
    console.log(book.info());
}

// Loop through array and show all books
function displayBooks() {
    for (let i = 0; i < myLibrary.length; i++) {
        // Card div
        const bookCard = document.createElement('div');


        // Add each info to element then append to div
        // Book info
        const bookTitle = document.createElement('h4');
        const bookAuthor = document.createElement('p');
        const bookPages = document.createElement('p');
        const bookState = document.createElement('p');



        bookCard.innerHTML += myLibrary[i].title;
        bookCard.innerHTML += myLibrary[i].author;
        bookCard.innerHTML += myLibrary[i].pages;
        bookCard.innerHTML += myLibrary[i].readState;
        bookContainer.appendChild(bookCard);
    }
}

displayBooks();


// Start loop of array
// Loop over each object
// Make a blank book card div element (card) every run
// Start second loop inside 
// Create dom elements for object keys
// Add/append key values to elements
// Append those to the div
