var favoriteContainer = document.querySelector('.favorite_book__container');
var bookItems = document.querySelectorAll('.book__item');

/*for (let i = 0; i < bookItems.length; i++) {
    const bookItem = bookItems[i];
}*/

    /*bookItem.addEventListener('click', ()=>{
    })*/

    favoriteContainer.addEventListener('click', (ev)=>{
        console.log(ev.target.id);
    })
    
    function dragstart_handler(ev) {
        // Добавить id целевого элемента в объект передачи данных
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
        console.log(data);
        this.append(data);
    }
    


    
    window.addEventListener('DOMContentLoaded', () => {
        bookItems.forEach(e => {
            e.addEventListener("dragstart", dragstart_handler);
        });        
        favoriteContainer.addEventListener("drop", drop_handler);
        favoriteContainer.addEventListener("dragover", dragover_handler);
    });

    //bookItem.setAttribute('ondragstart', 'dragstart_handler(event)');
    //favoriteContainer.setAttribute('ondrop', 'drop_handler(event)');
    //favoriteContainer.setAttribute('ondragover', 'dragover_handler(event)');
    


