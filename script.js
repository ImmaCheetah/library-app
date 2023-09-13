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
    }
];

// Book constructor
function Book(title, author, pages, readState) {
    this.title = title
    this.author = author
    this.pages = pages
    this.readState = readState
    // this.info = function() {
    //     return `${title} by ${author}, ${pages} pages, ${readState}`;
    // }
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
        console.log(myLibrary[i]);
    }
}

(displayBooks());

