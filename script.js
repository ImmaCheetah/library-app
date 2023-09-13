const myLibrary = [];

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

addBookToLibrary();
addBookToLibrary();
addBookToLibrary();

function displayBooks() {
    for (let i = 0; i < myLibrary.length; i++) {
        return myLibrary[i];
    }
}

console.log(displayBooks());

// const arr = [];
// function foo() {
//   const a = Math.floor(Math.random() * 10);
//   arr.push(a);
// }

