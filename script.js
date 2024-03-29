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

const titleError = document.querySelector("#book-title + span.error");
const authorError = document.querySelector("#book-author + span.error");
const pagesError = document.querySelector("#book-pages + span.error")
// Main array to hold all book objects
const myLibrary = [
    
];

// Book class
class Book {
    constructor(title, author, pages, readState) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.readState = readState;
    }

    toggleStatus() {
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
}

// Book constructor
// function Book(title, author, pages, readState) {
//     this.title = title
//     this.author = author
//     this.pages = pages
//     this.readState = readState
// }

// Set info function to prototype of Book
// Book.prototype.toggleStatus = function() {

//     if (this.readState === true) {
//         this.readState = false;
//         console.log(this.readState);
//     } else if (this.readState === false) {
//         this.readState = true;
//         console.log(this.readState);
//     } else {
//         console.log('Error');
//     }
    
// }

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



bookTitleInForm.addEventListener('input', (e)=> {
    if (bookTitleInForm.validity.valid) {
        titleError.textContent = "";
        titleError.className = "error";
        console.log('its valid');
    } else {
        showTitleError();
    }
})

bookAuthorInForm.addEventListener('input', (e)=> {
    if (bookAuthorInForm.validity.valid) {
        authorError.textContent = "";
        authorError.className = "error";
        console.log('its valid');
    } else {
        showAuthorError();
    }
})

bookPagesInForm.addEventListener('input', (e)=> {
    if (bookPagesInForm.validity.valid) {
        pagesError.textContent = "";
        pagesError.className = "error";
        console.log('its valid');
    } else {
        showPagesError();
    }
})

// Add book from form to display, then update display and close modal
form.addEventListener('submit', (e) => {
    
    if (!bookTitleInForm.validity.valid) {
        console.log('if happened');
        showTitleError();
    } else if (!bookAuthorInForm.validity.valid) {
        showAuthorError();
    } else if (!bookPagesInForm.validity.valid) {
        showPagesError();
    } else {
        console.log('else happened');
        addBookToLibrary();
        displayBooks();
        dialog.close();
    }
    e.preventDefault();
});


function showTitleError() {
   if (bookTitleInForm.validity.valueMissing) {
    titleError.textContent = "Gotcha, enter something";
   } else if (bookTitleInForm.validity.tooShort) {
    titleError.textContent = `Now hold on a minute, you need at least ${bookTitleInForm.minLength}, but you put ${bookTitleInForm.value.length}`;
   }
   titleError.className = "error active";
}

function showAuthorError() {
    if (bookAuthorInForm.validity.valueMissing) {
     authorError.textContent = "Gotcha, enter something";
    } else if (bookTitleInForm.validity.tooShort) {
     authorError.textContent = `Now hold on a minute, you need at least ${bookAuthorInForm.minLength}, but you put ${bookAuthorInForm.value.length}`;
    }
    authorError.className = "error active";
 }

 function showPagesError() {
    if (bookPagesInForm.validity.valueMissing) {
        pagesError.textContent = "Come on man";
    } else if (bookPagesInForm.validity.rangeOverflow) {
        pagesError.textContent = "You went past the limit";
    } else if (bookPagesInForm.validity.rangeUnderflow) {
        pagesError.textContent = "What kind of book has negative pages?"
    }
    pagesError.className = "error active";
 }

// Close dialog
closeBtn.addEventListener('click', (e) => {
    dialog.close();
    form.reset();
});