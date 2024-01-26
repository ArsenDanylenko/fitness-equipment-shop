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