var form = document.querySelector('.add__form');
var uploadBook = document.querySelector('.upload__book');
var writeBook = document.querySelector('.write__book');
var formContent = document.querySelector('.form__content');

writeBook.addEventListener('click', ()=>{
    if (formContent.innerHTML == '') {
        makeBook();
    } else {
        formContent.innerHTML ='';
        makeBook();
    }
});

uploadBook.addEventListener('click', ()=>{
    if (formContent.innerHTML == '') {
        giveBook();
    } else {
        formContent.innerHTML ='';
        giveBook();
    }
    
});

function makeBook() {
    let titleBook = document.createElement('input');
    titleBook.classList.add('title__book');
    titleBook.setAttribute('type', 'text');
    titleBook.setAttribute('placeholder', 'Заголовок');
    formContent.append(titleBook);

    let descriptionBook = document.createElement('textarea');
    descriptionBook.classList.add('description__book');
    descriptionBook.setAttribute('placeholder', 'Описание');    
    descriptionBook.setAttribute('cols', '30');
    descriptionBook.setAttribute('rows', '5');
    formContent.append(descriptionBook);

    let addBook = document.createElement('button');
    addBook.classList.add('add__book');
    addBook.innerText = 'Загрузить';
    formContent.append(addBook);

    form.append(formContent);

    addBook.addEventListener('click', async(e)=>{
        e.preventDefault();
        let book = {};
        book.login = titleBook.value;
        book.file = descriptionBook.value;
        
        localStorage.setItem(book.login, book.file);
        console.log(localStorage);
    })
}

function giveBook() {
    let titleBook = document.createElement('input');
    titleBook.classList.add('title__book');
    titleBook.setAttribute('type', 'text');
    titleBook.setAttribute('placeholder', 'Заголовок');
    formContent.append(titleBook);

    let container = document.createElement('div');
    container.classList.add('container__form');
    formContent.append(container);

    let selectBook = document.createElement('input');
    selectBook.classList.add('select__book');
    selectBook.setAttribute('type', 'file');
    selectBook.setAttribute('accept', '.txt, .doc, .docx');
    container.append(selectBook);

    let addBook = document.createElement('button');
    addBook.classList.add('add__book');
    addBook.innerText = 'Загрузить';
    container.append(addBook);

    form.append(formContent);

    addBook.addEventListener('click', async(e)=>{
        e.preventDefault();
        let book = {};
        book.login = titleBook.value;
        let file = selectBook.files[0];
        let reader = new FileReader();
        reader.readAsText(file);
        reader.onload = function() {
            book.file = reader.result;
        };

        let response = await fetch('https://apiinterns.osora.ru', {
            method: 'POST',
            headers: {
                'Content-Type': 'text/plain;charset=UTF-8'
            },
            body: JSON.stringify(book)
        });

        let result = await response.json();
        console.log(result.message);
        
        localStorage.setItem(book.login, book.file);
        console.log(localStorage);
    })
}

