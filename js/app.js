// import {index}
const addCartBtn = document.querySelector(".guitarra")
const tableCart = document.querySelector("#table-cart tbody")
const deleteProductBtn = document.querySelector(".carrito__table")
const emptyCartBtn = document.querySelector(".carrito__vaciar")
let productsCart=[]
registrarEventListener()
function registrarEventListener(){
  document.addEventListener('DOMContentLoaded',()=>{
    productsCart = JSON.parse(sessionStorage.getItem("cart")) || []
    addCartHtml()
  })
  addCartBtn.addEventListener('click',addCart)
  deleteProductBtn.addEventListener('click',deleteProduct)
  emptyCartBtn.addEventListener('click',()=>{
    productsCart=[]
  })
}

function addCart(e){
  e.preventDefault();
  if(e.target.classList.contains('guitarra__agregar-carrito')){
    console.log("agregando")
    const product = e.target.parentElement.parentElement.parentElement
    postProduct(product)
  }
}
function postProduct(product){
const costoElement = product.querySelector('.guitarra__costo');
const price = parseFloat(costoElement.childNodes[1].textContent.trim());
  const infoProduct = {
    id:product.querySelector('input').getAttribute('data-id'),
    image:product.querySelector('img').src,
    name:product.querySelector('.guitarra__nombre').textContent,
    price:price,
    quantity:parseInt(product.querySelector('.guitarra__cantidad')?.value) || 0
  }
  if(infoProduct.quantity<=0){
    alert('Cantidad no vallida');
    return;
  }
  const exist = productsCart.some((product)=> product.id === infoProduct.id)
  if(exist){
    const products = productsCart.map((product)=>{
      if(product.id===infoProduct.id){
        product.quantity+=infoProduct.quantity;
        return product;
      }else{
        return product;
      }
    })
    productsCart = [...products]
  }else{
    productsCart=[...productsCart,infoProduct]
  }

  addCartHtml();
}
function addCartHtml(){
  clearHtml();
  let totalPrice=0
  productsCart.forEach((product)=>{
    const {id, image , name ,price ,quantity} = product
    const priceTotal=price*quantity
    totalPrice+=priceTotal
    const row = document.createElement('tr')
    row.innerHTML=`
      <td><img src="${image}" width="100"></td>
      <td>${name}</td>
      <td>$${price}</td>
      <td>${quantity}</td>
      <td>
        <a href="" class="delete-product" data-id="${id}" >x</a>
      </td> 
    `;
    tableCart.appendChild(row)
  })
  const rowTotal = document.createElement('tr');
  rowTotal.innerHTML = `
    <td colspan="4" style="text-align: right;">Total:</td>
    <td>$${totalPrice.toFixed(2)}</td>  
  `;
  tableCart.appendChild(rowTotal);
  saveSessionStorage()
}
function saveSessionStorage(){
  sessionStorage.setItem("cart",JSON.stringify(productsCart))
}
function clearHtml(){
  while(tableCart.firstChild){
    tableCart.removeChild(tableCart.firstChild)
  }
}

function deleteProduct(e){
  e.preventDefault();
  if(e.target.classList.contains('delete-product')){
    const productId = e.target.getAttribute('data-id')
    productsCart = productsCart.filter((product)=>product.id !==productId) 
  }
  addCartHtml();
}