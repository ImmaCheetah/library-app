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
Book.prototype.status = function() {
    this.readState.toggle
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
    let state = bookStateInForm.checked;

    // Use variable to create new book object
    const book = new Book(title, author, pages, state);

    //Add object to array
    myLibrary.push(book);
}

// Loop through array and show all books
function displayBooks() {
    bookContainer.innerHTML = "";

    for (let i = 0; i < myLibrary.length; i++) {
        // Card div
        const bookCard = document.createElement('div');
        bookCard.classList.add('book-card');

        // Create elements for book 
        const bookTitle = document.createElement('h4');
        const bookAuthor = document.createElement('p');
        const bookPages = document.createElement('p');
        const bookState = document.createElement('button');
        const removeBtn = document.createElement('button'); 

        // Add book content to elements
        bookTitle.textContent += myLibrary[i].title;
        bookAuthor.textContent += myLibrary[i].author;
        bookPages.textContent += myLibrary[i].pages;
        
        removeBtn.textContent += "Remove";

        console.log(myLibrary[i].readState);

        if (myLibrary[i].readState === true) {
            bookState.textContent += "Book has been read";
        } else {
            bookState.textContent += "Book has not been read";
        };

        // Add book info to book card
        bookCard.append(bookTitle);
        bookCard.append(bookAuthor);
        bookCard.append(bookPages);
        bookCard.append(bookState);
        bookCard.append(removeBtn);

        // Add data attribute to card that links the index of array
        bookCard.setAttribute('data-index', i);

        // Add card to container
        bookContainer.append(bookCard);

        // Run removeBook when button is clicked
        removeBtn.addEventListener('click', () => {
            removeBook(event.target);
        });
    }
}

// Removes book card div and book from array
function removeBook(book) {
    bookContainer.removeChild(book.parentElement);

    myLibrary.splice(book.parentElement.dataset.index, 1);
    console.log(myLibrary);
}

displayBooks();

// Event Listeners

// Open modal when clicked
newBookBtn.addEventListener('click', (e) => {
    dialog.showModal();
});

// Add book from form to display, then update display and close modal
addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    addBookToLibrary();
    displayBooks();
    dialog.close();
});

