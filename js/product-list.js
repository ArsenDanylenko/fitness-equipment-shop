import { Cart } from './cart.js';
// import { ProductsService } from './products-service.js';
import { showAlert } from './alert.js';

export class ProductList {
   constructor() {
      this.container = document.querySelector('.product-list');
      this.renderProducts();
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

   async getProductById(id) {
      const products = await this.getProducts();
      return products.find(product => product.id === id);
   }

   async renderProducts() {
      try {
         let productListDomString = '';
         const products = await this.getProducts();
         products.forEach(product => {
            productListDomString += this.createProductDomString(product);
         });
         this.container.innerHTML = productListDomString;
         this.addEventListeners();
      } catch (error) {
         console.error('Error rendering products:', error);
      }
   }

   createProductDomString(product) {
      return `<article class="product__list-product product">
                <div class="product__info">
                <div class="product__img-container">
                     <img src="img/${product.image}" class="product__img" alt="${product.title}">
                </div>
                    <h5 class="product-title pt-3 mb-0">${product.title}</h5>
                    <p class="product-description">${product.description}</p>
                    <p class="product-price py-1 fw-bold" data-id=${product.id}>$${product.price}</p>
                    <div class="product-btns">
                        <a href="#" class="btn btn-info" data-bs-toggle="modal"       data-bs-target="#product-info-modal" data-id=${product.id}>Info</a>
                        <a href="#" class="btn btn-primary btn-buy" data-id=${product.id}>Buy</a>
                    </div>
                </div>
              </article>`;
   }

   addEventListeners() {
      document.querySelectorAll('.btn-info').forEach(btn => {
         btn.addEventListener('click', this.showProductInfo.bind(this));
      });
      document.querySelectorAll('.btn-buy').forEach(btn => {
         btn.addEventListener('click', this.addProductToCart.bind(this));
      });
   }

   async showProductInfo(event) {
      const id = event.target.dataset.id;
      const product = await this.getProductById(id);

      const modalHeader = document.querySelector("#product-info-modal .modal-header");
      const modalBody = document.querySelector("#product-info-modal .modal-body");
      const modalFooter = document.querySelector("#product-info-modal .modal-footer");

      modalHeader.innerHTML =
         `<h5 class="modal-title" id="product-info-modalLabel">${product.title}</h5>

         <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>`;

      modalBody.innerHTML =
         `<img class="product-image" src="img/${product.image}" alt="${product.title}">
         <p class="product-description">${product.description}</p>
         <p class="product-price">$${product.price}</p>`;

      modalFooter.innerHTML =
         `<button type="button" id="btn-buy" class="btn btn-primary btn-buy" data-id="${product.id}">Buy</button>`;

      modalFooter.querySelector('.btn-buy').dataset.id = product.id;
      this.addEventListeners();
   }

   addProductToCart(event) {
      const id = event.target.dataset.id;
      const cart = new Cart();
      cart.addProduct(id);
      showAlert('Added to cart!');
   }
}


new ProductList();