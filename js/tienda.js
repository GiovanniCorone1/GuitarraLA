import {products} from '../db/data.js';
const guitarraGrid = document.querySelector('.guitarras__grid')
const bateriaGrid=document.querySelector('.baterias__grid')
const otrosGrid=document.querySelector('.otros__grid')
function renderProducts(category){
  products[category].forEach( (product) =>{
    const div = document.createElement('div')
    if(category==="guitarras"){
      div.classList.add('guitarra')
      div.innerHTML=`
      <img class="guitarra__imagen" src=${product.imagen} alt="modelo 3">
      <div class="guitarra__contenido">
        <h3 class="guitarra__nombre">${product.name}</h3>
        <p class="guitarra__descripcion">${product.description}</p>
        <p class="guitarra__costo"><span>$</span>${product.price}</p>
        <a class="guitarra__enlace" href="producto.html?id=${product.id}">Ver Producto</a>
      </div>
      `
      guitarraGrid.appendChild(div)
    }else if(category==="drums"){
      div.classList.add('bateria')
      div.innerHTML=`
      <img class="bateria__imagen" src=${product.imagen} alt="modelo 3">
      <div class="bateria__contenido">
        <h3 class="bateria__nombre">${product.name}</h3>
        <p class="bateria__costo"><span>$</span>${product.price}</p>
        <a class="bateria__enlace" href="producto.html?id=${product.id}">Ver Producto</a>
      </div>
      `
      bateriaGrid.appendChild(div);
    }else if(category==="others"){
      div.classList.add('otro')
      div.innerHTML=`
      <img class="otro__imagen" src=${product.imagen} alt="modelo 3">
      <div class="otro__contenido">
        <h3 class="otro__nombre">${product.name}</h3>
        <p class="otro__costo"><span>$</span>${product.price}</p>
        <a class="otro__enlace" href="producto.html?id=${product.id}">Ver Producto</a>
      </div>
      `
      otrosGrid.appendChild(div);
    }
  })
}
Object.keys(products).forEach((category)=>renderProducts(category))