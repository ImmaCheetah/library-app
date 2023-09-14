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

// Get values from form fields and use it to create new book object
function addBookToLibrary() {

    // Target each form field
    const bookTitleInForm = form.elements['book-title'];
    const bookAuthorInForm = form.elements['book-author'];
    const bookPagesInForm = form.elements['book-pages'];
    const bookStateInForm = form.elements['book-state'];

    // Assign field value to variable
    let title = bookTitleInForm.value;
    let author = bookAuthorInForm.value;
    let pages = bookPagesInForm.value;
    let state = bookStateInForm.value;

    // Use variable to create new book object
    const book = new Book(title, author, pages, state);

    //Add object to array
    myLibrary.push(book);
    console.log(book);

    // Take value from each field and add to object
}

// Loop through array and show all books
function displayBooks() {
    bookContainer.innerHTML = "";
    for (let i = 0; i < myLibrary.length; i++) {
        

        // Card div
        const bookCard = document.createElement('div');
        bookCard.classList.add('book-card');

        // Create elements for book info
        const bookTitle = document.createElement('h4');
        const bookAuthor = document.createElement('p');
        const bookPages = document.createElement('p');
        const bookState = document.createElement('p');

        // Add book content to elements
        bookTitle.textContent += myLibrary[i].title;
        bookAuthor.textContent += myLibrary[i].author;
        bookPages.textContent += myLibrary[i].pages;
        bookState.textContent += myLibrary[i].readState;

        // Add book info to book card
        bookCard.append(bookTitle);
        bookCard.append(bookAuthor);
        bookCard.append(bookPages);
        bookCard.append(bookState);

        // Add card to container
        bookContainer.append(bookCard);
    }
    
}

displayBooks();


// Event Listeners

// Open modal when clicked
newBookBtn.addEventListener('click', (e) => {
    dialog.showModal();
});

// Add book from form to display, then update display and close modal
addBtn.addEventListener('click', (e) => {
    event.preventDefault();
    addBookToLibrary();
    displayBooks();
    dialog.close();
});

