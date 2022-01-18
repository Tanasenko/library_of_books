var form = document.querySelector('.add__form');
var uploadBook = document.querySelector('.upload__book');
var writeBook = document.querySelector('.write__book');
var formContent = document.querySelector('.form__content');

var bookContainer = document.querySelector('.book__container');

var myBook = {};

function a() {
    let keys = JSON.parse(localStorage.myBook);
    for(let key in keys) {
        myBook[key] = keys[key];
    }
}

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

        a();
        myBook[`${book.login}`] = `${book.file}`;        
        localStorage.setItem('myBook', JSON.stringify(myBook));

        titleBook.value = '';
        descriptionBook.value = '';

        addToListBook(book.login)
        window.location.reload();
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

        let fileBook = selectBook.files[0];

        let reader = new FileReader();

        reader.readAsText(fileBook);

        reader.onload = function() {
            let value = reader.result;
            a()

            myBook[`${key[1]}`] = `${value}`;        
            localStorage.setItem('myBook', JSON.stringify(myBook));
        };
        
        addToListBook(key[1])

        titleBook.value = '';
        selectBook.value = '';
        
        window.location.reload();
    })
}

function addToListBook(key) {

    var bookItem = document.createElement('div');
    bookItem.classList.add('book__item');
    bookItem.setAttribute('draggable', 'true');
    bookContainer.append(bookItem);

    var bookTitle = document.createElement('span');
    bookTitle.classList.add('book__title');
    bookTitle.innerText = key;
    bookItem.append(bookTitle);

    var bookTools = document.createElement('div');
    bookTools.classList.add('book__tools');
    bookItem.append(bookTools);

    var bookEdit = document.createElement('button');
    bookEdit.classList.add('btn__tools', 'editBtn');
    bookEdit.innerText = 'ред.';
    bookTools.append(bookEdit);

    var bookPreview = document.createElement('button');
    bookPreview.classList.add('btn__tools');
    bookPreview.innerText = 'прочитано';
    bookTools.append(bookPreview);

    var bookRead = document.createElement('button');
    bookRead.classList.add('btn__tools', 'readBtn');
    bookRead.innerText = 'читать';
    bookTools.append(bookRead);

    var bookRemove = document.createElement('button');
    bookRemove.classList.add('btn__tools');
    bookRemove.innerText = 'x';
    bookTools.append(bookRemove);
}