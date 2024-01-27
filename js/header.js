// ==== BURGER MENU ====

function showBurger() {
   const iconMenu = document.querySelector('.header__burger-btn');
   const menu = document.querySelector('.nav-menu');
   const dropDown = document.querySelectorAll('.dropdown-item');
   iconMenu.addEventListener('click', () => {
      if (iconMenu) {
         menu.classList.toggle('_active');
         iconMenu.classList.toggle('_active');
         document.body.classList.toggle('_fixed');
      }
   })

   dropDown.forEach((item) => {
      item.addEventListener('click', () => {
         menu.classList.remove('_active');
         document.body.classList.remove('_fixed');
         iconMenu.classList.remove('_active');
      })
   })
}
showBurger();

// ==== SEARCH PRODUCTS ====

async function searchProducts() {
   try {
      const searchInput = document.querySelector('.nav-menu__search-input');
      const productList = document.querySelector('.product-list');

      searchInput.addEventListener('input', (e) => {
         const value = e.target.value.trim().toLowerCase();

         for (const productCard of productList.children) {
            const title = productCard.querySelector('.product-title').textContent.toLowerCase();
            const description = productCard.querySelector('.product-description').textContent.toLowerCase();
            const isVisible = title.includes(value) || description.includes(value);
            productCard.classList.toggle('hidden', !isVisible);
         }
      });
   } catch (error) {
      console.error(error);
   }
}
searchProducts();
