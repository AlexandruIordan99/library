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

const submitButton = document.getElementById('submitButton');

submitButton.addEventListener('click', () =>{
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pageCount = document.getElementById('pageCount').value;
    let inputBook = new Book(title, author, pageCount);
    library.push(inputBook);
    populateBookCardContainer(library.pop());

    closeOverlay(overlay);
    closeForm(newBookForm);
})

let bookCardContainer = document.getElementById('bookCardContainer');


function populateBookCardContainer(book){
  let bookCard = document.createElement('div');
  bookCard.classList.add('bookCard');
  bookCard.innerHTML=        `
  <div><strong>${book.title}</strong></div>
  <p>Author: ${book.author}</p>
  <p>Page Count: ${book.pageCount}</p>
  <div class ="readStatus">Read</div>
        <div class="bookCardButtons">
        <button class ="readOrNot">Set as not read</button>
        <button class ="delete">Delete</button>
      </div>
`;
  bookCardContainer.appendChild(bookCard);
  bookCard.classList.add('bookCard', );


  const deleteBookButton = bookCard.querySelector('.delete');

  deleteBookButton.addEventListener('click', () =>{
    bookCard.remove();

  })

  const readOrNotButton = bookCard.querySelector('.readOrNot');
  const readStatus = bookCard.querySelector('.readStatus');
  readOrNotButton.addEventListener('click', () =>{
      if(readOrNotButton.innerText === "Set as not read"){
        readStatus.innerText = "Not read";
        readOrNotButton.innerText = "Set as read";
      }else if(readOrNotButton.innerText === "Set as read"){
        readStatus.innerText = "Read";
        readOrNotButton.innerText = "Set as not read";
      }
  })

}

for (let i=0; i<library.length; i++){
  populateBookCardContainer(library[i]);
}




