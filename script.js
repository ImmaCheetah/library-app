// Global variables
const bookContainer = document.querySelector('#book-container');
const dialog = document.getElementById('dialog');
const newBookBtn = document.getElementById('new-book-btn');
const form = document.getElementById('main-form');
const addBtn = document.getElementById('add-btn');
const closeBtn = document.querySelector('.close-btn');

let beenRead = "Read";
let notBeenRead = "Not Read";

const bookTitleInForm = form.elements['book-title'];
const bookAuthorInForm = form.elements['book-author'];
const bookPagesInForm = form.elements['book-pages'];
const bookStateInForm = form.elements['book-state'];

// Main array to hold all book objects
const myLibrary = [
    
];

// Book constructor
function Book(title, author, pages, readState) {
    this.title = title
    this.author = author
    this.pages = pages
    this.readState = readState
}

// Set info function to prototype of Book
Book.prototype.toggleStatus = function() {

    if (this.readState === true) {
        this.readState = false;
        console.log(this.readState);
    } else if (this.readState === false) {
        this.readState = true;
        console.log(this.readState);
    } else {
        console.log('Error');
    }
    
}

// Get values from form fields and use it to create new book object
function addBookToLibrary() {

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
        bookPages.textContent += "Pages: " + myLibrary[i].pages;
        removeBtn.textContent += "Remove";

        bookTitle.style.fontStyle = "italic";
        bookTitle.style.fontWeight = "bold";


        // Change button text based on read state
        if (myLibrary[i].readState === true) {
            bookState.textContent += beenRead;
            bookState.style.backgroundColor = 'rgb(140, 245, 149)';
        } else {
            bookState.textContent += notBeenRead;
            bookState.style.backgroundColor = 'rgb(255, 124, 124)';
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

        bookState.addEventListener('click', (e) => {
            if (bookState.textContent === beenRead) {
                bookState.textContent = notBeenRead;
                bookState.style.backgroundColor = 'rgb(255, 124, 124)';
                myLibrary[i].toggleStatus();
            } else if (bookState.textContent === notBeenRead) {
                bookState.textContent = beenRead;
                bookState.style.backgroundColor = 'rgb(140, 245, 149)';
                myLibrary[i].toggleStatus();
            } else {
                console.log('Error from book state');
            }
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
    form.reset();
});

// Add book from form to display, then update display and close modal
form.addEventListener('submit', (e) => {
    e.preventDefault();

    let formTitleCheck = bookTitleInForm.value;
    let formAuthorCheck = bookAuthorInForm.value;
    let formPagesCheck = bookPagesInForm.value;

    if (formTitleCheck === "" || formAuthorCheck === "" || formPagesCheck === "") {
        return;
    } else {
        addBookToLibrary();
        displayBooks();
        dialog.close();
    }
});

// Close dialog
closeBtn.addEventListener('click', (e) => {
    dialog.close();
    form.reset();
});