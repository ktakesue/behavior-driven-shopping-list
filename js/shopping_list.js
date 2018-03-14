class ShoppingList {
  constructor() {
    this.items = [];
  }

  addItem(item) {
    if (item instanceof ShoppingListItem) {
      this.items.push(item);
    } else {
      return "Error";
    }
  }

  removeItem(item) {
    const items = this.items;

    if (items.includes(item)) {
      const index = items.indexOf(item);
      items.splice(index, 1);
    } else if (!item && items.length > 0) {
      items.splice(items.length - 1, 1);
    } else return "Error";
  }

  render() {
    const list = document.createElement("ul");
    const items = this.items;

    for (let i = 0; i < items.length; i++) {
      list.appendChild(items[i].render());
    }

    return list;
  }
}
