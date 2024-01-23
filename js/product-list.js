export class ProductList {
   constructor() {
      this.container = document.querySelector('.product-list');
   }

   async getProducts() {
      if (!this.products) {
         this.products = await (await fetch('../api/products.json')).json();
      }
      return this.products;
   }

   async renderProducts() {
      let productListDomString = '';

      const products = await this.getProducts();
      products.forEach(product => {
         productListDomString += this.createProductDomString(product);
      });
      this.container.innerHTML = productListDomString;
   };

   createProductDomString(product) {
      return `<article class="product__list-product product">
                <img src="img/${product.image}" class="product__img" alt="${product.title}">
                <div class="product__info">
                  <a href="#" data-bs-toggle="modal" data-bs-target="#product-info-modal" data-id=${product.id}>
                    <h5 class="product-title">${product.title}</h5>
                    <p class="product-description">${product.description}</p>
                    <p class="product-price" data-id=${product.id}>${product.price}</p>
                  </a>
                </div>
                </article>`;
   }
}

new ProductList();