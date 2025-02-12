import { products } from "../db/data.js";

const cartImg = document.querySelector('.cart__image');
const cartTable = document.querySelector('.carrito__table');
const carritoContainer = document.querySelector('.carrito');

function getProductId() {
  return new URLSearchParams(window.location.search).get('id');
}

function findProduct() {
  const productId = getProductId();
  for (const category in products) {
    const product = products[category].find(item => item.id === productId);
    if (product) return product; 
  }
  return null;
}

function renderProduct() {
  const product = findProduct();
  if (!product) {
    console.error("Producto no encontrado");
    return;
  }

  const guitarra = document.querySelector('.producto');
  const optionsHTML = Array.from({ length: 5 }, (_, i) => `<option value="${i + 1}">${i + 1}</option>`).join('');
  const description = product.description ? product.description : '';
  guitarra.innerHTML = `
    <img class="producto__imagen" src="${product.imagen}" alt="modelo ${product.id}">
    <div class="guitarra__contenido">
        <h3 class="producto__nombre">${product.name}</h3>
        <p class="producto__descripcion">${description}</p>
        <p class="producto__costo"><span>$</span>${product.price}</p>
        <form class="producto__formulario">
          <label class="producto__label">Cantidad :</label>
          <select class="producto__cantidad">
            <option value="">--Seleccione--</option>
            ${optionsHTML}
          </select>
          <input type="submit" class="producto__agregar-carrito" value="Agregar al carrito" data-id="${product.id}">
          <input type="submit" class="producto__comprar-ahora" value="Comprar ahora">
        </form>
    </div>`;
}

renderProduct();

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