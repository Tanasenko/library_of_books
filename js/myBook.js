var bookContainer = document.querySelector('.book__container');

window.addEventListener('load', loadBook())

function loadBook() {
    let keys = Object.keys(localStorage);
    for(let key of keys) {

        var bookItem = document.createElement('div');
        bookItem.classList.add('book__item');
        bookContainer.append(bookItem);

        var bookTitle = document.createElement('span');
        bookTitle.classList.add('book__title');
        bookTitle.innerText = `${key}`;
        bookItem.append(bookTitle);

        var bookTools = document.createElement('div');
        bookTools.classList.add('book__tools');
        bookItem.append(bookTools);

        var bookEdit = document.createElement('button');
        bookEdit.classList.add('btn__tools', 'editBtn');
        bookEdit.innerText = 'ред.';
        bookTools.append(bookEdit);

        var bookPreview = document.createElement('button');
        bookPreview.classList.add('btn__tools', 'statusBtn');
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

        bookRemove.addEventListener('click', (e)=>{
            localStorage.removeItem(`${key}`);
            e.target.parentNode.parentNode.remove();
        })
    }   
}
