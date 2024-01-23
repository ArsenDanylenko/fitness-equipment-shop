
export class ProductList {
   constructor() {
      this.container = document.querySelector('.product-list');
   }

   async getProducts() {
      try {
         if (!this.products) {
            const response = await fetch('../api/products.json');
            if (!response.ok) {
               throw new Error(`Failed to fetch products. Status: ${response.status}`);
            }
            this.products = await response.json();
         }
         return this.products;
      } catch (error) {
         console.error('Error fetching products:', error);
         return [];
      }
   }

   async renderProducts() {
      try {
         let productListDomString = '';
         const products = await this.getProducts();
         products.forEach(product => {
            productListDomString += this.createProductDomString(product);
         });
         this.container.innerHTML = productListDomString;
      } catch (error) {
         console.error('Error rendering products:', error);
      }
   }

   createProductDomString(product) {
      return `<article class="product__list-product product">
                <div class="product__info">
                  <a class="product__info-link" href="#" data-bs-toggle="modal" data-bs-target="#product-info-modal" data-id=${product.id}>
                  <img src="img/${product.image}" class="product__img" alt="${product.title}">
                    <h5 class="product-title">${product.title}</h5>
                    <p class="product-description">${product.description}</p>
                    <p class="product-price" data-id=${product.id}>$${product.price}</p>
                  </a>
                </div>
              </article>`;
   }
}

new ProductList().renderProducts();