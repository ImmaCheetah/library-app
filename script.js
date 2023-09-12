const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = Boolean(read)
    this.info = function() {
        return `${title} by ${author}, ${pages} pages, ${read}`;
    }
}

function addBookToLibrary() {
    const book1 = new Book(prompt('title?'), prompt('author?'), prompt('pages?'), prompt('read?'));

    console.log(book1);
    console.log(book1.info());
    myLibrary.push(book1);
    console.log(myLibrary[0]);
}

addBookToLibrary();