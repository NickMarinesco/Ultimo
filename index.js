let carrito = [];
let total = 0;

function agregarAlCarrito(nombre, precio) {
  carrito.push({ nombre, precio });
  total += precio;
  actualizarCarrito();
}

function actualizarCarrito() {
  const carritoLista = document.getElementById('carrito-lista');
  const carritoTotal = document.getElementById('carrito-total');
  carritoLista.innerHTML = '';
  carrito.forEach(item => {
    const li = document.createElement('li');
    li.innerText = `${item.nombre} - $${item.precio.toFixed(2)}`;
    carritoLista.appendChild(li);
  });
  carritoTotal.innerText = `Total: $${total.toFixed(2)}`;
}

function comprar() {
  
  alert('Compra realizada. ¡Gracias por su compra!');
  vaciarCarrito();
}

function vaciarCarrito() {
  carrito = [];
  total = 0;
  actualizarCarrito();
}

const bbdd = [{
  usuario: 'Nico',
  contraseña:'123'
},
{
  usuario: 'Naty',
  contraseña:'1234'
},
{
  usuario: 'Mate',
  contraseña:'12345'
}]
const user = {
  usuario: '',
  contraseña:''
}
const buttonLogin = document.getElementById("login-button");
const app = document.querySelector("#app");
let isAuth = JSON.parse(localStorage.getItem("autenticacion"));
const inputs = document.querySelectorAll("input");
if(isAuth === null){
  isAuth = { isLogin : false }
}

const bienvenidaAlUsuario = nombre => {
  app.innerHTML = `<h1 class='title'>Bienvenido sr/sra ${nombre}</h1>`
}

if(isAuth.isLogin){
 bienvenidaAlUsuario(isAuth.name);
}

buttonLogin.addEventListener("click",()=>{
  const usuarioEncontrado = bbdd.find(el => el.usuario === user.usuario && el.contraseña === user.contraseña)
  if(usuarioEncontrado){
      bienvenidaAlUsuario(usuarioEncontrado.usuario);
      localStorage.setItem("autenticacion", JSON.stringify({ name: usuarioEncontrado.usuario, isLogin: true}));        
  }else{
      console.log("No crack no existis.")
  }
});


inputs.forEach( (elemento) => {
  elemento.addEventListener("input",(e)=>{
      const { target } = e;
      const { name, value } = target 

      user[name] = value 
   
  })
})