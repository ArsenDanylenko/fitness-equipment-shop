class NewItem {
   constructor(title, description, price, isInStock) {
      this.title = title;
      this.description = description;
      this.price = price;
      this.isInStock = isInStock;
   }

   get statusLabel() {
      return this.isInStock ? "In stock" : "Out of stock";
   }
}

form.onsubmit = (e) => {
   e.preventDefault();

   const newItem = new Product(modelIn.value, priceIn.value, statusCb.checked);

   addProductToTable(newItem);
}