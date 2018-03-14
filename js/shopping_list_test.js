const expect = chai.expect;
const should = chai.should();
let item;

describe("ShoppingListItem", function() {
  before(function() {
    item = new ShoppingListItem("name", "description");
  });
  it("should be a class", function() {
    expect(ShoppingListItem).to.be.a("function");
  });
  it("should have property 'name'", function() {
    expect(item).to.have.property("name");
  });
  it("should have property 'description'", function() {
    expect(item).to.have.property("description");
  });
  it("should have property 'is_done'", function() {
    expect(item).to.have.property("is_done");
    expect(item.is_done).to.be.undefined;
  });
  it("should have a constructor method", function() {
    expect(item).to.be.an.instanceof(ShoppingListItem);
  });

  describe("check()", function() {
    before(function() {
      item = new ShoppingListItem("name", "description");
    });
    it("should have a method 'check'", function() {
      expect(item.check).to.be.a("function");
    });
    it("should set is_done to true", function() {
      expect(item.check()).to.be.true;
    });
  });

  describe("uncheck()", function() {
    before(function() {
      item = new ShoppingListItem("name", "description");
    });
    it("should have a method 'uncheck'", function() {
      expect(item.uncheck).to.be.a("function");
    });
    it("should set is_done to false", function() {
      expect(item.uncheck()).to.be.false;
    });
  });

  describe("render()", function() {
    before(function() {
      item = new ShoppingListItem("name", "description");
    });
    it("should have a method 'render'", function() {
      expect(item.render).to.be.a("function");
    });
    it("should be a string", function() {
      expect(item.render()).to.be.a("string");
    });
    it("should be wrapped in <li> tags", function() {
      expect(item.render()).to.include("<li>");
      expect(item.render()).to.include("</li>");
    });
  });
});

describe("ShoppingList", function() {
  before(function() {
    list = new ShoppingList();
  });
  it("should be a class", function() {
    expect(ShoppingList).to.be.a("function");
  });
  it("should have property 'items'", function() {
    expect(list).to.have.property("items");
  });
  it("'items' should be an empty array", function() {
    expect(list.items).to.be.an("array").and.empty;
  });
  it("should have a constructor method", function() {
    expect(list).to.be.an.instanceof(ShoppingList);
  });

  describe("addItem()", function() {
    before(function() {
      list = new ShoppingList();
      item = new ShoppingListItem("name", "description");
    });
    it("should have a method 'addItem'", function() {
      expect(list.addItem).to.be.a("function");
    });
    it("should add valid items to your shopping cart", function() {
      list.addItem(item);
      expect(list.items).to.include(item);
      expect(list.addItem(item)).to.be.a("string");
      expect(list.addItem(null)).to.be.a("string");
    });
  });

  describe("removeItem()", function() {
    before(function() {
      list = new ShoppingList();
      item = new ShoppingListItem("name", "description");
      list.addItem(item);
    });
    it("should have a method 'removeItem'", function() {
      expect(list.removeItem).to.be.a("function");
    });
    it("should remove items that are in your shopping cart", function() {
      list.removeItem(item);
      expect(list.items).to.not.include(item);
      list.removeItem();
      expect(list.items).to.be.empty;
      expect(list.removeItem(item)).to.be.a("string");
      expect(list.removeItem(null)).to.be.a("string");
    });
  });

  describe("render()", function() {
    before(function() {
      list = new ShoppingList();
      item = new ShoppingListItem("name", "description");
      list.addItem(item);
    });
    it("should have a method 'render'", function() {
      expect(list.render).to.be.a("function");
    });
    it("should be a string", function() {
      expect(list.render()).to.be.a("string");
    });
    it("should be wrapped in <ul> tags", function() {
      expect(list.render()).to.include("<ul>");
      expect(list.render()).to.include("</ul>");
    });
  });
});
