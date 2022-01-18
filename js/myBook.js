var bookContainer = document.querySelector('.book__container');
var fabBookContainer = document.querySelector('.favorite_book__container');

window.addEventListener('load', loadBook())

function loadBook() {
    if (localStorage.myBook) {
        let keys = JSON.parse(localStorage.myBook); 
        for(let key in keys) {
            var bookItem = document.createElement('div');
            bookItem.classList.add('book__item');
            bookItem.setAttribute('draggable', 'true');
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
                delete keys[key];
                localStorage.removeItem(myBook);
                localStorage.setItem('myBook', JSON.stringify(keys));
                e.target.parentNode.parentNode.remove();
            })
        } 
    }
    
    if (localStorage.favBook) {
        let favBooks = JSON.parse(localStorage.favBook); 
        for(let favBook in favBooks) {
            var bookItem = document.createElement('div');
            bookItem.classList.add('book__item');
            bookItem.setAttribute('draggable', 'true');
            fabBookContainer.append(bookItem);

            var bookTitle = document.createElement('span');
            bookTitle.classList.add('book__title');
            bookTitle.innerText = `${favBook}`;
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
                delete favBooks[favBook];
                localStorage.removeItem(favBook);
                localStorage.setItem('favBook', JSON.stringify(favBooks));
                e.target.parentNode.parentNode.remove();
            })
        } 
    }
}
