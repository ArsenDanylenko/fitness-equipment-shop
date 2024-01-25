class NewItem {
   constructor(title, description, price, isInStock) {
      this.title = title;
      this.description = description;
      this.price = price;
      this.isInStock = isInStock;
      this.addEventListener();
   }

   // get statusLabel() {
   //    return this.isInStock ? "In stock" : "Out of stock";
   // }

   addEventListener() {
      const form = document.querySelector('#addNewProductForm');
      form.addEventListener('submit', this.addNewProduct.bind(this));
   }

   addNewProduct(event) {
      // event.preventDefault();
      const newTitle = document.getElementById('#newProductTitle');
      const newDescription = document.getElementById('#newProductDescription');
      const newPrice = document.getElementById('#newProductPrice');
      const inStock = form.isInStock;

      const newItem = new Product(newTitle.value, newDescription.value, newPrice.value, inStock.checked);

      console.log(inStock);
   }


}
new NewItem().addEventListener();