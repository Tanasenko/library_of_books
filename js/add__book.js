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
    titleBook.setAttribute('name', 'login');
    titleBook.setAttribute('placeholder', 'Заголовок');
    formContent.append(titleBook);

    let container = document.createElement('div');
    container.classList.add('container__form');
    formContent.append(container);

    let selectBook = document.createElement('input');
    selectBook.classList.add('select__book');
    selectBook.setAttribute('type', 'file');
    selectBook.setAttribute('name', 'file');
    selectBook.setAttribute('accept', '.txt, .doc, .docx');
    container.append(selectBook);

    let addBook = document.createElement('input');
    addBook.classList.add('add__book');
    addBook.setAttribute('type', 'submit');
    addBook.setAttribute('name', 'submit');
    addBook.setAttribute('value', 'Загрузить');
    container.append(addBook);

    form.append(formContent);

    const url = 'https://apiinterns.osora.ru'

    form.addEventListener('submit', async (e) => {
        e.preventDefault()

        const file = document.querySelector('[type=file]').files
        const formData = new FormData()

        formData.append('login', titleBook.value)

        for (let i = 0; i < file.length; i++) {
            let fil = file[i]

            formData.append('file', fil)
        }        

        fetch(url, {
            method: 'POST',
            body: formData,
        }).then((response) => {
            console.log(response)
        }) 

        let dataArr = Array.from(formData.entries());

        let key = dataArr[0];
        let value = dataArr[1];

        localStorage.setItem(key[1], value[1]);
        console.log(localStorage);
    })
}