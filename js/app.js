console.log("HEWWWWWWWWWWO SANITY");

const content = document.getElementById("content");
const shoppingList = new ShoppingList();
shoppingList.render();

function add_to_shopping_list() {
  const nameInput = document.getElementById("name");
  const descriptionInput = document.getElementById("description");
  const name = nameInput.value;
  const description = descriptionInput.value;

  const new_shopping_list_item = new ShoppingListItem(name, description);
  shoppingList.addItem(new_shopping_list_item);
  content.innerHTML = "";
  content.appendChild(shoppingList.render());

  console.log(shoppingList.items);
}

function changeCheckedStatus(index, checkbox) {
  if (checkbox.checked) {
    shoppingList.items[index].check();
  } else {
    shoppingList.items[index].uncheck();
  }
  console.log(shoppingList.items[index].is_done);
}

function removeItemButtonClicked(index) {
  const item = shoppingList.items[index];

  shoppingList.removeItem(item);
  content.innerHTML = "";
  content.appendChild(shoppingList.render());

  console.log(shoppingList.items);
}
