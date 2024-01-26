// ==== BURGER MENU ====

function showBurger() {
   const iconMenu = document.querySelector('.header__burger-btn');
   const menu = document.querySelector('.nav-menu');
   const headEr = document.querySelector('.header');
   iconMenu.addEventListener('click', () => {
      if (iconMenu) {
         menu.classList.toggle('_active');
         iconMenu.classList.toggle('_active');
         headEr.classList.toggle('_active');
         document.body.classList.toggle('_lock');
      }
   })
}
showBurger();