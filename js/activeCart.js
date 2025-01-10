const cartImg = document.querySelector('.cart__image');
const cartTable = document.querySelector('.carrito__table');
const carritoContainer = document.querySelector('.carrito'); 
cartImg.addEventListener('click', (e) => {
  cartTable.classList.toggle('active'); 
  e.stopPropagation(); 
});

cartTable.addEventListener('click', (e) => {
  e.stopPropagation(); 
});

document.addEventListener('click', (e) => {
  if (!carritoContainer.contains(e.target)) {
    cartTable.classList.remove('active'); 
  }
});