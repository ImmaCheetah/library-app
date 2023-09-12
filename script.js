const myLibrary = ['GOT', 'X detective', '4th monke'];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = "not read yet"
    this.info = function() {
        return `${title} by ${author}, ${pages} pages, ${read}`;
    }
}

function addBookToLibrary() {
    let x = prompt("this is a test lord help me");

    console.log(x);
}

addBookToLibrary();