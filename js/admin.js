document.addEventListener("DOMContentLoaded", () => {
   import('./header.js');

   const form = document.querySelector('#addNewProductForm');

   class NewItem {
      static count = 5;

      constructor(title, description, price, isInStock) {
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
      await fetch('../api/products.json', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json'
         },
         body: JSON.stringify(newItem)
      }).then(res => res.json())
         .then(data => {
            console.log(data);
         })
         .catch(error => alert(error));
   }
});
