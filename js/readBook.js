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

            var books = {myBook: JSON.parse(localStorage.myBook), favBook: JSON.parse(localStorage.favBook)};

            if (targetContainer == myContainer) { 
                var readBookContainer = targetContainer.querySelector('.readBook');
                readBookContainer.prepend(e.target.parentNode.parentNode); 

                for(let book in books.myBook)  {
                    if (book == bookKey) {
                        var titleBook = document.createElement('h2');
                        titleBook.classList.add('book__title');
                        titleBook.textContent = `${bookKey}`;
                        aside.append(titleBook);

                        var textBook = document.createElement('span');
                        textBook.classList.add('book__text');
                        textBook.textContent = `${books.myBook[book].text}`;
                        aside.append(textBook);

                        var status = elem.parentNode.querySelector('.statusBtn');
                        status.classList.add('read');
                        books.myBook[book].read = true;

                        a();
                        myBook[`${bookKey}`] = books.myBook[book];
                        localStorage.setItem('myBook', JSON.stringify(myBook));
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
                        textBook.textContent = `${books.favBook[book].text}`;
                        aside.append(textBook);

                        var status = elem.parentNode.querySelector('.statusBtn');
                        status.classList.add('read');
                        books.favBook[book].read = true;                    

                        q();
                        favBook[`${bookKey}`] = books.favBook[book];
                        localStorage.setItem('favBook', JSON.stringify(favBook));
                    }
                } 
            }  else if (targetContainer.parentNode == favContainer) {
                for(let book in books.favBook)  {
                    if (book == bookKey) {
                        var titleBook = document.createElement('h2');
                        titleBook.classList.add('book__title');
                        titleBook.textContent = `${bookKey}`;
                        aside.append(titleBook);

                        var textBook = document.createElement('span');
                        textBook.classList.add('book__text');
                        textBook.textContent = `${books.favBook[book].text}`;
                        aside.append(textBook);

                        var status = elem.parentNode.querySelector('.statusBtn');
                        status.classList.add('read');
                        books.favBook[book].read = true;                    

                        q();
                        favBook[`${bookKey}`] = books.favBook[book];
                        localStorage.setItem('favBook', JSON.stringify(favBook));
                    }
                } 
            } else if (targetContainer.parentNode == myContainer) {
                for(let book in books.myBook)  {
                    if (book == bookKey) {
                        var titleBook = document.createElement('h2');
                        titleBook.classList.add('book__title');
                        titleBook.textContent = `${bookKey}`;
                        aside.append(titleBook);

                        var textBook = document.createElement('span');
                        textBook.classList.add('book__text');
                        textBook.textContent = `${books.myBook[book].text}`;
                        aside.append(textBook);

                        var status = elem.parentNode.querySelector('.statusBtn');
                        status.classList.add('read');
                        books.myBook[book].read = true;

                        a();
                        myBook[`${bookKey}`] = books.myBook[book];
                        localStorage.setItem('myBook', JSON.stringify(myBook));
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

            var books = {myBook: JSON.parse(localStorage.myBook), favBook: JSON.parse(localStorage.favBook)};

            if (targetContainer == myContainer) { 
                var readBookContainer = targetContainer.querySelector('.readBook');
                readBookContainer.prepend(e.target.parentNode.parentNode); 

                for(let book in books.myBook)  {
                    if (book == bookKey) {
                        var titleBook = document.createElement('h2');
                        titleBook.classList.add('book__title');
                        titleBook.textContent = `${bookKey}`;
                        aside.append(titleBook);

                        var textBook = document.createElement('span');
                        textBook.classList.add('book__text');
                        textBook.textContent = `${books.myBook[book].text}`;
                        aside.append(textBook);

                        var status = elem.parentNode.querySelector('.statusBtn');
                        status.classList.add('read');
                        books.myBook[book].read = true;

                        a();
                        myBook[`${bookKey}`] = books.myBook[book];
                        localStorage.setItem('myBook', JSON.stringify(myBook));
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
                        textBook.textContent = `${books.favBook[book].text}`;
                        aside.append(textBook);

                        var status = elem.parentNode.querySelector('.statusBtn');
                        status.classList.add('read');
                        books.favBook[book].read = true;                    

                        q();
                        favBook[`${bookKey}`] = books.favBook[book];
                        localStorage.setItem('favBook', JSON.stringify(favBook));
                    }
                } 
            }  else if (targetContainer.parentNode == favContainer) {
                for(let book in books.favBook)  {
                    if (book == bookKey) {
                        var titleBook = document.createElement('h2');
                        titleBook.classList.add('book__title');
                        titleBook.textContent = `${bookKey}`;
                        aside.append(titleBook);

                        var textBook = document.createElement('span');
                        textBook.classList.add('book__text');
                        textBook.textContent = `${books.favBook[book].text}`;
                        aside.append(textBook);

                        var status = elem.parentNode.querySelector('.statusBtn');
                        status.classList.add('read');
                        books.favBook[book].read = true;                    

                        q();
                        favBook[`${bookKey}`] = books.favBook[book];
                        localStorage.setItem('favBook', JSON.stringify(favBook));
                    }
                } 
            } else if (targetContainer.parentNode == myContainer) {
                for(let book in books.myBook)  {
                    if (book == bookKey) {
                        var titleBook = document.createElement('h2');
                        titleBook.classList.add('book__title');
                        titleBook.textContent = `${bookKey}`;
                        aside.append(titleBook);

                        var textBook = document.createElement('span');
                        textBook.classList.add('book__text');
                        textBook.textContent = `${books.myBook[book].text}`;
                        aside.append(textBook);

                        var status = elem.parentNode.querySelector('.statusBtn');
                        status.classList.add('read');
                        books.myBook[book].read = true;

                        a();
                        myBook[`${bookKey}`] = books.myBook[book];
                        localStorage.setItem('myBook', JSON.stringify(myBook));
                    }
                } 
            }
        })
    }
}

clickOnReadBtn();
clickOnTitle()