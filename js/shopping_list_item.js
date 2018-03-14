class ShoppingListItem {
  constructor(name, description) {
    this.name = name;
    this.description = description;
    this.is_done = undefined;
  }

  check() {
    this.is_done = true;
    return this.is_done;
  }

  uncheck() {
    this.is_done = false;
    return this.is_done;
  }

  render() {
    const index = shoppingList.items.findIndex(obj => obj.name === this.name);
    const div = document.createElement("div");
    const checkbox = document.createElement("input");
    const button = document.createElement("button");

    div.innerHTML += this.name + " " + this.description;
    checkbox.type = "checkbox";
    checkbox.value = this.name;
    button.innerHTML = "delete";

    checkbox.addEventListener("change", function() {
      changeCheckedStatus(index, checkbox);
    });
    button.addEventListener("click", function() {
      removeItemButtonClicked(index);
    });

    div.appendChild(checkbox);
    div.appendChild(button);

    return div;
  }
}
