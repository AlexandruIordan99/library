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

const newBookButton = document.getElementById('newBookButton');

const newBookForm = document.getElementById('newBookForm');

const cancelButton = document.getElementById('cancelButton');

const overlay = document.getElementById('overlay');

function openForm(modal){
  if (modal ==null){
    return;
  }
  modal.classList.add('active');
  overlay.classList.add('active');
}

function closeForm(modal){
  if (modal == null){
    return;
  }
  modal.classList.remove('active');
  overlay.classList.remove('active');
}

function closeOverlay(overlay){
  overlay.classList.remove('active');
}

newBookButton.addEventListener('click', () =>{
    openForm(newBookForm);
})

cancelButton.addEventListener('click', () =>{
  closeForm(newBookForm);
})

overlay.addEventListener('click', () =>{
  closeOverlay(overlay);
  closeForm(newBookForm);
})

let bookCardContainer = document.getElementById('bookCardContainer');

const submitButton = document.getElementById('submitButton');


submitButton.addEventListener('click', () =>{


  closeOverlay(overlay);
  closeForm(newBookForm);
})