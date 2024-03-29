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

    //setting text contents of the element
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-button");
    itemName.textContent = item;

    // Adding span and button as children of list element
    listElement.appendChild(itemName);
    listElement.appendChild(deleteButton);

    //Adding list element to the list
    list.appendChild(listElement);

    // When button is clicked, element deleted but removing 
    // list element from the list
    deleteButton.addEventListener('click', () =>{
        list.removeChild(listElement);
    });
}); 

