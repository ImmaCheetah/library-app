const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function() {
        return `${title} by ${author}, ${pages} pages, ${read}`;
    }
}

function addBookToLibrary() {
    const book = new Book(prompt('title?'), prompt('author?'), prompt('pages?'), prompt('read?'));

    console.log(book);
    console.log(book.info());
    myLibrary.push(book);
    console.log(myLibrary[0], myLibrary[1]);
}

addBookToLibrary();
addBookToLibrary();

// const arr = [];
// function foo() {
//   const a = Math.floor(Math.random() * 10);
//   arr.push(a);
// }

