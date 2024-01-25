import { ProductsService } from "./products-service.js";

const form = document.querySelector('#addNewProductForm');

class NewItem {
   static count = 5;

   constructor(title, description, price, isInStock) {
      this.productsService = new ProductsService();
      this.title = title;
      this.description = description;
      this.price = price;
      this.isInStock = isInStock;
      this.id = NewItem.count++
   }
}

form.addEventListener('submit', (e) => {
   e.preventDefault();
   const newTitle = document.getElementById('newProductTitle');
   const newDescription = document.getElementById('newProductDescription');
   const newPrice = document.getElementById('newProductPrice');
   const inStock = form.querySelector('input[id="inStock"]:checked');

   const newItem = new NewItem(newTitle.value, newDescription.value, newPrice.value, inStock ? true : false);
   addNewItem(newItem);
});

async function addNewItem(newItem) {
   const products = await newItem.productsService.getProducts();
   products.push(newItem);
   JSON.stringify(products);
}