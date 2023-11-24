// HTML
const wordsForm = document.querySelector('#word-form');
const input = document.querySelector('.inputWords');
const addBtn = document.querySelector('.add-button');
const sortBtn = document.querySelector('.sort-button');
const orderBtn = document.querySelector('#order-check');
let showList = document.querySelector('.list-view');
// Variables
let arrayWord = [];


// Funciones
const init = () => {
    showList.style.visibility = 'hidden';
}

const emptyInput = () => {
    const characters = /^[a-zA-Z0-9\s]+$/;
    let validate = characters.test(input.value);
    
    if(!validate){
        alert('Solo son permitidos caracteres alfanumericos');
        input.value = '';
    }else { 
        arrayWord.push(input.value);
        input.value = '';
    } 
}

const sort = () => {

    ol.innerHTML = '';

    showList.style.visibility = 'visible';

    let sortedWords = arrayWord.sort(function(a, b){return a.toLocaleLowerCase().localeCompare(b.toLocaleLowerCase())})

   
    if (orderBtn.checked === true) {
        
        sortedWords.reverse();
    }

    for(let i = 0; i <= sortedWords.length - 1; i++){
        ol.innerHTML += `<li>${sortedWords[i]}</li>`;
    }

    
    sortedWords.length = 0
}

// Listeners
window.addEventListener('load', () => {init();})

wordsForm.addEventListener('submit', (event) => {
    event.preventDefault();

    emptyInput();
})

orderBtn.addEventListener('click', () => {
    if (ol.innerHTML !== '') {
        showList.style.visibility = 'hidden';
    }
})

addBtn.addEventListener('click', () => {emptyInput();})

sortBtn.addEventListener('click', () => {sort();})