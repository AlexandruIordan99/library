const library=[];

function Book(title, author, pageCount){
 if(!new.target){
   throw Error("You must use the 'new' operator to call this constructor function.")
 }
  this.id=crypto.randomUUID()
  this.title = title;
  this.author = author;
  this.pageCount = pageCount;
}


function addBookToLibrary(title, author, pageCount){
    let bookToAdd = new Book(title, author, pageCount);
    library.push(bookToAdd);
}

addBookToLibrary('The Hobbit', "J.R.R. Tolkien", "265");
addBookToLibrary('The Fellowship of the Ring', "J.R.R. Tolkien", "423");
addBookToLibrary('The Two Towers', "J.R.R. Tolkien", "447");
addBookToLibrary('Return of the King', "J.R.R. Tolkien", "432");


function displayLibrary(){
  for (let i=0; i<library.length; i++){
    console.log(library[i]);
  }
}
displayLibrary();

let newBookButton = document.getElementById('newBookButton');


let bookCardContainer = document.getElementById('bookCardContainer');

