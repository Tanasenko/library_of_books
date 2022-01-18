var editBtn = document.querySelectorAll('.editBtn');
var bookItem = document.querySelectorAll('.book__item')
var titleBook = document.querySelector('.book__title');
var textBook = document.querySelector('.book__text');
var aside = document.querySelector('.aside');

var bookContainer = document.querySelector('.book__container');

function a() {
    let keys = JSON.parse(localStorage.myBook);
    for(let key in keys) {
        myBook[key] = keys[key];
    }
}

function editBook() { 
    for (let i = 0; i < editBtn.length; i++) {
        const elem = editBtn[i];

        elem.addEventListener('click', (e)=>{
            let bookKey = e.target.parentNode.previousSibling.innerText;
            let bookValue = localStorage.getItem(bookKey);
            let targetItem = e.target.parentNode.parentNode;    // bookItem в котором лежит bookKey

            if (aside.innerHTML == "") {

                var titleInput = document.createElement('input');
                titleInput.classList.add('editTitle');
                titleInput.value = `${bookKey}`;
                aside.append(titleInput);

                var textInput = document.createElement('textarea');
                textInput.classList.add('editText');
                textInput.value = `${bookValue}`;
                textInput.setAttribute('cols', '30');
                textInput.setAttribute('rows', '5');
                aside.append(textInput);

                var saveBtn = document.createElement('button');
                saveBtn.classList.add('saveBtn');
                saveBtn.innerText = 'Сохранить';
                aside.append(saveBtn);
                
                saveBtn.addEventListener('click', ()=>{
                    let keys = JSON.parse(localStorage.myBook)
                    for(let key in keys) {
                        if (key == `${bookKey}`) {
                            delete keys[key];
                            localStorage.removeItem(myBook);
                            localStorage.setItem('myBook', JSON.stringify(keys));
                        }
                    }

                    targetItem.remove();

                    a();
                    myBook[`${titleInput.value}`] = `${textInput.value}`;
                    
                    localStorage.setItem('myBook', JSON.stringify(myBook));

                    var bookItem = document.createElement('div');
                    bookItem.classList.add('book__item');
                    bookItem.setAttribute('draggable', 'true');
                    bookContainer.append(bookItem);

                    var bookTitle = document.createElement('span');
                    bookTitle.classList.add('book__title');
                    bookTitle.innerText = `${titleInput.value}`;
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

                    aside.innerHTML = '';

                })

            } else {

                aside.innerHTML = '';

                var titleInput = document.createElement('input');
                titleInput.classList.add('editTitle');
                titleInput.value = `${bookKey}`;
                aside.append(titleInput);

                var textInput = document.createElement('textarea');
                textInput.classList.add('editText');
                textInput.value = `${bookValue}`;
                textInput.setAttribute('cols', '30');
                textInput.setAttribute('rows', '5');
                aside.append(textInput);

                var saveBtn = document.createElement('button');
                saveBtn.classList.add('saveBtn');
                saveBtn.innerText = 'Сохранить';
                aside.append(saveBtn);
                
                saveBtn.addEventListener('click', ()=>{
                    let keys = JSON.parse(localStorage.myBook)
                    for(let key in keys) {
                        if (key == `${bookKey}`) {
                            delete keys[key];
                            localStorage.removeItem(myBook);
                            localStorage.setItem('myBook', JSON.stringify(keys));
                        }
                    }

                    targetItem.remove();

                    a();
                    myBook[`${titleInput.value}`] = `${textInput.value}`;
                    
                    localStorage.setItem('myBook', JSON.stringify(myBook));

                    var bookItem = document.createElement('div');
                    bookItem.classList.add('book__item');
                    bookItem.setAttribute('draggable', 'true');
                    bookContainer.append(bookItem);

                    var bookTitle = document.createElement('span');
                    bookTitle.classList.add('book__title');
                    bookTitle.innerText = `${titleInput.value}`;
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

                    aside.innerHTML = '';
                })

            }
                
        })   
    }
}

editBook()