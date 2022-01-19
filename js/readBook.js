var bookTitle = document.querySelectorAll('.book__title')
var readBtn = document.querySelectorAll('.readBtn');
var statusBtns = document.querySelectorAll('.statusBtn');

var favContainer = document.querySelector('.favorite_book__container');
var myContainer = document.querySelector('.book__container');


function clickOnReadBtn() {
    for (let i = 0; i < readBtn.length; i++) {
        const elem = readBtn[i];

        elem.addEventListener('click', (e)=>{
            aside.innerHTML = '';

            var bookKey = e.target.parentNode.previousSibling.innerText;
            var targetContainer = e.target.parentNode.parentNode.parentNode;

            var books = {myBook: JSON.parse(localStorage.myBook), favBook: JSON.parse(localStorage.favBook)}

            if (targetContainer == myContainer) {       
                for(let book in books.myBook)  {
                    if (book == bookKey) {
                        var titleBook = document.createElement('h2');
                        titleBook.classList.add('book__title');
                        titleBook.textContent = `${bookKey}`;
                        aside.append(titleBook);

                        var textBook = document.createElement('span');
                        textBook.classList.add('book__text');
                        textBook.textContent = `${book}`;
                        aside.append(textBook);

                        var status = elem.parentNode.querySelector('.statusBtn');
                        status.style.backgroundColor = 'green'
                    }
                }      
            } else if (targetContainer == favContainer) {
                for(let book in books.favBook)  {
                    if (book == bookKey) {
                        var titleBook = document.createElement('h2');
                        titleBook.classList.add('book__title');
                        titleBook.textContent = `${bookKey}`;
                        aside.append(titleBook);

                        var textBook = document.createElement('span');
                        textBook.classList.add('book__text');
                        textBook.textContent = `${book}`;
                        aside.append(textBook);

                        var status = elem.parentNode.querySelector('.statusBtn');
                        status.style.backgroundColor = 'green'
                    }
                } 
            }  
        })   
    }
}


function clickOnTitle() {
    for (let i = 0; i < bookTitle.length; i++) {
        const elem = bookTitle[i];

        elem.addEventListener('click', (e)=>{
            aside.innerHTML = '';

            var bookKey = e.target.innerText;
            var targetContainer = e.target.parentNode.parentNode;

            var books = {myBook: JSON.parse(localStorage.myBook), favBook: JSON.parse(localStorage.favBook)}

            if (targetContainer == myContainer) {       
                for(let book in books.myBook)  {
                    if (book == bookKey) {
                        var titleBook = document.createElement('h2');
                        titleBook.classList.add('book__title');
                        titleBook.textContent = `${bookKey}`;
                        aside.append(titleBook);

                        var textBook = document.createElement('span');
                        textBook.classList.add('book__text');
                        textBook.textContent = `${book}`;
                        aside.append(textBook);

                        var status = elem.parentNode.querySelector('.statusBtn');
                        status.style.backgroundColor = 'green'
                    }
                }      
            } else if (targetContainer == favContainer) {
                for(let book in books.favBook)  {
                    if (book == bookKey) {
                        var titleBook = document.createElement('h2');
                        titleBook.classList.add('book__title');
                        titleBook.textContent = `${bookKey}`;
                        aside.append(titleBook);

                        var textBook = document.createElement('span');
                        textBook.classList.add('book__text');
                        textBook.textContent = `${book}`;
                        aside.append(textBook);

                        var status = elem.parentNode.querySelector('.statusBtn');
                        status.style.backgroundColor = 'green'
                    }
                } 
            }
        })
    }
}

clickOnReadBtn();
clickOnTitle()