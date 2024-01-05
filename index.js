// Getting references to list, input box and button
const list = document.querySelector('ul');
const inputBox = document.querySelector('input');
const addItemButton = document.querySelector('.add-item');

addItemButton.addEventListener('click', ()=>{
    // getting item name from the inputBox
    let item = inputBox.value;
    //setting inputBox value to empty
    inputBox.value = '';

    // creating elements for list item
    const listElement = document.createElement('li');
    const itemName = document.createElement('span');
    const deleteButton = document.createElement('button');

})