let searchBox = document.querySelector('.box-search');
let lupe = document.querySelector('.icon-search');
let iconClose = document.querySelector('.icon-close');

lupe.addEventListener('click', ()=> {
    searchBox.classList.add('open')
})

iconClose.addEventListener('click', ()=> {
    searchBox.classList.remove('open')
})


