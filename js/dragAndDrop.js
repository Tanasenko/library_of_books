var favoriteContainer = document.querySelector('.favorite_book__container');
var bookItems = document.querySelectorAll('.book__item');
var bookContainer = document.querySelector('.book__container');
var favBook = {};
    
function dragstart_handler(ev) {
    ev.dataTransfer.setData("text/html", ev.target.outerHTML);
    ev.dataTransfer.dropEffect = "move";
}

function dragover_handler(ev) {
    ev.preventDefault();
    ev.dataTransfer.dropEffect = "move";
}
    
function drop_handler(ev) { 
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text/html");  
    this.insertAdjacentHTML('beforeend', data);

    dropForFav();
}

function drop_handl(ev) { 
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text/html");  
    this.insertAdjacentHTML('beforeend', data);

    dropForMy()
}
      
window.addEventListener('DOMContentLoaded', () => {
    bookItems.forEach(e => {
        e.addEventListener("dragstart", dragstart_handler);
    });      
    favoriteContainer.addEventListener("drop", drop_handler);
    favoriteContainer.addEventListener("dragover", dragover_handler);
    
    bookContainer.addEventListener("drop", drop_handl);
    bookContainer.addEventListener("dragover", dragover_handler);
});

function q() {
    if (localStorage.favBook) {
        let keys = JSON.parse(localStorage.favBook);
        for(let key in keys) {
            favBook[key] = keys[key];
        }
    }
    
}

function a() {
    if (localStorage.myBook) {
        let keys = JSON.parse(localStorage.myBook);
        for(let key in keys) {
            myBook[key] = keys[key];
        }
    }
}

function dropForFav() {
    var favoritElems = favoriteContainer.children;
    for (let favoritElem of favoritElems){
        for (let bookItem of bookItems){
            if (favoritElem.innerHTML == bookItem.innerHTML) {
                bookItem.remove();
            }
        }
    } 

    if (localStorage.myBook) {
        let myBooks = JSON.parse(localStorage.myBook); 
        for(let myBook in myBooks){
            let favConteiner = document.querySelector('.favorite_book__container');
            for(let item of favConteiner.children){
                if (item.firstChild.textContent == myBook) {
                    q();
                    favBook[`${myBook}`] = `${myBooks[myBook]}`;
                    localStorage.setItem('favBook', JSON.stringify(favBook));

                    delete myBooks[myBook];
                    localStorage.removeItem(myBook);
                    localStorage.setItem('myBook', JSON.stringify(myBooks));
                    window.location.reload();
                }
            }
        }
    }
}

function dropForMy() {
    var bookElems = bookContainer.children;
    for (let bookElem of bookElems){
        var favItems = favoriteContainer.querySelectorAll('.book__item');
        for (let favItem of favItems){
            if (bookElem.innerHTML == favItem.innerHTML) {
                favItem.remove();
            }
        }
    } 

    let favBooks = JSON.parse(localStorage.favBook); 
    for(let favBook in favBooks){
        for(let item of bookContainer.children){
            if (item.firstChild.textContent == favBook) {
                a();
                myBook[`${favBook}`] = `${favBooks[favBook]}`;
                localStorage.setItem('myBook', JSON.stringify(myBook));

                delete favBooks[favBook];
                localStorage.removeItem(favBook);
                localStorage.setItem('favBook', JSON.stringify(favBooks));
                window.location.reload();
            }
        }
    }
}