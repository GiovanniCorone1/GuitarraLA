const vaciarCarrito = document.querySelector(".carrito__vaciarCarrito")
const listarCarrito = document.querySelector(".guitarra__agregar-carrito")
let carrito=[]
registrarEventListener()
function registrarEventListener(){
  vaciarCarrito.addEventListener('click', ()=>{
    console.log("vaciando carrito")
  })
  listarCarrito.addEventListener('click',(e)=>{
    e.preventDefault();
    console.log("agregando al carrito")
  })
}