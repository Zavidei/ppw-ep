const myList = document.getElementById('myList');
const addButton = document.getElementById('addButton');

function addListItem() {
    const itemList = document.createElement('li');

    itemList.textContent = 'New Item';
    myList.appendChild(itemList);
}

addButton.addEventListener('click', addListItem);