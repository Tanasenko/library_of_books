//var titleBook = document.querySelector('.book__title');
//var textBook = document.querySelector('.book__text'); 
var books = document.querySelectorAll('.book__title');

var bookItem = document.querySelectorAll('.book__item')
var readBtn = document.querySelectorAll('.readBtn');

/* Нажатие на название книги */

for (let i = 0; i < books.length; i++) {
    const book = books[i];
    let bookKey = book.innerText;
    let bookValue = localStorage.getItem(bookKey);

    book.addEventListener('click', ()=>{
        aside.innerHTML = '';

        var titleBook = document.createElement('h2');
        titleBook.classList.add('book__title');
        titleBook.textContent = `${bookKey}`;
        aside.append(titleBook);

        var textBook = document.createElement('span');
        textBook.classList.add('book__text');
        textBook.textContent = `${bookValue}`;
        aside.append(textBook);

        var statusBtn = book.parentNode.lastChild.querySelector('.statusBtn');
        statusBtn.style.backgroundColor = 'green'
    })

}

/* Нажатие на кнопку "Читать" */

for (let i = 0; i < readBtn.length; i++) {
    const elem = readBtn[i];

    elem.addEventListener('click', (e)=>{
        aside.innerHTML = '';

        let bookKey = e.target.parentNode.previousSibling.innerText;
        let bookValue = localStorage.getItem(bookKey);

        var titleBook = document.createElement('h2');
        titleBook.classList.add('book__title');
        titleBook.textContent = `${bookKey}`;
        aside.append(titleBook);

        var textBook = document.createElement('span');
        textBook.classList.add('book__text');
        textBook.textContent = `${bookValue}`;
        aside.append(textBook);

        var statusBtn = elem.parentNode.querySelector('.statusBtn');
        statusBtn.style.backgroundColor = 'green'
        
    })   
}