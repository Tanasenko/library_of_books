var books = document.querySelectorAll('.book__title');
var bookItem = document.querySelectorAll('.book__item')
var readBtn = document.querySelectorAll('.readBtn');
var statusBtns = document.querySelectorAll('.statusBtn');

function inMyBook() {
    /* Нажатие на название книги */
    for (let i = 0; i < books.length; i++) {
        const book = books[i];
        let bookKey = book.innerText;    
        let keys = JSON.parse(localStorage.myBook); 
        for(let key in keys) {
            if (bookKey == key) {
                let bookValue = keys[key];

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

                    var status = book.parentNode.lastChild.querySelector('.statusBtn');
                    status.style.backgroundColor = 'green'
                })
            }
        }
    }

    /* Нажатие на кнопку "Читать" */
    for (let i = 0; i < readBtn.length; i++) {
        const elem = readBtn[i];

        elem.addEventListener('click', (e)=>{
            aside.innerHTML = '';

            let bookKey = e.target.parentNode.previousSibling.innerText;
            let keys = JSON.parse(localStorage.myBook); 
            for(let key in keys) {
                if (bookKey == key) {
                    let bookValue = keys[key];

                    var titleBook = document.createElement('h2');
                    titleBook.classList.add('book__title');
                    titleBook.textContent = `${bookKey}`;
                    aside.append(titleBook);

                    var textBook = document.createElement('span');
                    textBook.classList.add('book__text');
                    textBook.textContent = `${bookValue}`;
                    aside.append(textBook);

                    var status = elem.parentNode.querySelector('.statusBtn');
                    status.style.backgroundColor = 'green'
                } else{
                    console.log('error');
                }
            }    
        })   
    }
}


function inFavBook() {
    /* Нажатие на название книги */
    for (let i = 0; i < books.length; i++) {
    const book = books[i];
    let bookKey = book.innerText;   
    if (localStorage.favBook) { 
        let keys = JSON.parse(localStorage.favBook); 
        for(let key in keys) {
            if (bookKey == key) {
                let bookValue = keys[key];

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

                    var status = book.parentNode.lastChild.querySelector('.statusBtn');
                    status.style.backgroundColor = 'green'
                })
            }
        }
    }
}

    /* Нажатие на кнопку "Читать" */
    for (let i = 0; i < readBtn.length; i++) {
        const elem = readBtn[i];

        elem.addEventListener('click', (e)=>{
            aside.innerHTML = '';

            let bookKey = e.target.parentNode.previousSibling.innerText;
            if (localStorage.favBook) {
                let keys = JSON.parse(localStorage.favBook); 
                for(let key in keys) {
                    if (bookKey == key) {
                        let bookValue = keys[key];

                        var titleBook = document.createElement('h2');
                        titleBook.classList.add('book__title');
                        titleBook.textContent = `${bookKey}`;
                        aside.append(titleBook);

                        var textBook = document.createElement('span');
                        textBook.classList.add('book__text');
                        textBook.textContent = `${bookValue}`;
                        aside.append(textBook);

                        var status = elem.parentNode.querySelector('.statusBtn');
                        status.style.backgroundColor = 'green'
                    }
                } 
            }       
        })   
    }
}

inMyBook();
inFavBook();