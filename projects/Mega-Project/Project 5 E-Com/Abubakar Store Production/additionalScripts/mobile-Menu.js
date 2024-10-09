document.addEventListener('DOMContentLoaded', () => {
    const hamMenu = document.querySelector('.ham-menu');
    const mobileMenu = document.querySelector('.mobile-menu');
    const closeMenu = document.querySelector('.close-menu');
  
    hamMenu.addEventListener('click', () => {
      mobileMenu.classList.toggle('translate-x-0');
      mobileMenu.classList.toggle('translate-x-full');
    });
  
    closeMenu.addEventListener('click', () => {
      mobileMenu.classList.toggle('translate-x-0');
      mobileMenu.classList.toggle('translate-x-full');
    });
  });
  