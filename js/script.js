let myLibrary = [];

const form = document.getElementById('form_container');

const books = document.getElementById('books_container');

function Book(author, title, numPages, beenRead) {
  this.author = author;
  this.title = title;
  this.numPages = numPages;
  this.beenRead = beenRead;
}

function checkForm(author, title, numPages, beenRead) {
  if (author === '')
    alert('Author can\'t be blank');
  else if (title === '')
    alert('Title can\'t be blank');
  else if (numPages === '')
    alert('Number of pages can\'t be blank');
  else
    addBookToLibrary(new Book(author, title, numPages, beenRead));

}

function hideForm() {
  form.classList.add('hide');
}

function showForm() {
  form.classList.remove('hide');

  const inputs = [...document.getElementsByClassName("inputs")];

  for (let i = 0; i < inputs.length; i += 1) {
    if (inputs[i].type === 'text' || inputs[i].type === 'number') {
      inputs[i].value = '';
    } else {
      inputs[i].checked = false;
    }
  }
}

function render() {
  let innerHTML = '';

  for (let i = 0; i < myLibrary.length; i += 1) {
    innerHTML += `<div class='book'><p><span>Author</span> ${myLibrary[i].author}</p>`;
    innerHTML += `<i class='fas fa-trash-alt' onclick="removeBookToLibrary(${i})"></i>`;
    innerHTML += `<p><span>Title</span> ${myLibrary[i].title}</p>`;
    innerHTML += `<p><span># pages</span> ${myLibrary[i].numPages}</p>`;
    innerHTML += "<p><span>Have you read this book?</span><input type='checkbox' ";

    if (myLibrary[i].beenRead) {
      innerHTML +=  'checked ';
    }

    innerHTML += `onclick="toggleBeenRead(${i})" /></p></div>`;
  }

  books.innerHTML = innerHTML;
}

function addBookToLibrary(book) {
  myLibrary.push(book);

  hideForm();

  render();
}

function removeBookToLibrary(index) {
  if (confirm('Would you like to delete this book ??')) {
    myLibrary.splice(index, 1);
  }

  render();
}

myLibrary = [new Book('Julio Verne', 'Five weeks in a balloon', '288', true)];
addBookToLibrary(new Book('Julio Verne', 'Journey to the center of the earth', '368', false));
addBookToLibrary(new Book('Julio Verne', 'Around the world in 80 days', '400', false));
