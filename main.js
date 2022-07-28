/*let x = 10;
let y = 15;
let cartel1= "hola";
let cartel2= "mundo";

console.log (x + y);
console.log (cartel1 + " " + cartel2);*/



/*let nombre = prompt("ingrese su nombre por favor.");
let edad = prompt("ingrese su edad");

for(let i=1; i <=10; + i ++);{

    alert("bienvenido " + nombre + " tu tienes " + edad );
}*/




/*let num = prompt("ingrese un numero")
if(num <= 10 && num >= 50){
    console.log("el numero es $ {num} esta entre 10 y 50 ");

}else{
    console.log("el numero es $ {num} no esta entre 10 y 50 ");
}*/



/*let tabla =9;
let resultado;

for (let i= 1; i <=10; i + i ++ ){
    resultado=tabla * i;
    console.log (tabla + "x" + i + "es igual a" + resultado);
}*/



//intento de buscador de reciclaje asura por localidad //

/*let diasdereciclaje = prompt ("punto reciclaje");*/

/*alert("ud puede reciclar en " + "ingrese localidad" + " localidad " );*/

/*for ( let i=1 ; i <=7; i++ );*/



  



 

//lo de arriba es practica // 
/*
   
     let opcionUser = prompt(`
    Elija una opción:
    1: Libros
    2: Películas
    3: Juegos
    4:ESC para finalizar
    `);
    
 
 while(opcionUser != "ESC" ){
    switch (opcionUser) {
    case "1":
    alert("Principito"); }
           
    switch (opcionUser) {
    case "2":
    alert("MATRIX"); }
    switch (opcionUser) {
     case "3":
    alert("Mortal Kombat"); }

    

      opcionUser = prompt(`
      Elija una opción:
      1: Libros
      2: Películas
      3: Juegos
      4:ESC para finalizar
      `);
  }*/


/////// proyecto de reciclaje entrega 2//////

/////las array estan en el principio///

/*
  const hoja=[ 25 ];
  const metal= [10];
  const cajas= [80];
  const pet = [0.75];
  
  const  papel = (pesos) => pesos * hoja;
  const  aluminio = (pesos) => pesos * metal;
  const  carton= (pesos) => pesos * cajas;
  const  plastico= (pesos) => pesos * pet;
 
  let seleccion = prompt("que desea reciclar \n 1 - papel \n 2 -  aluminio \n 3 -  carton \n 4 -  plastico ");
  let valor = prompt("cantidad de kg");

  switch (seleccion) {
      case "1":
          alert(papel(valor));
          break;
      case "2":
          alert(aluminio(valor));
          break;
     case"3":
          alert(carton(valor));
          break;
     case"4":
        alert(plastico(valor))
      

}
alert("gracias por usar nuestra web");

console.log(seleccion , valor);

*/
/*
const resultado = document.getElementById("resultado");
const container = document.querySelector(".container");
let contador = 0;

container.addEventListener("click", (e) => {
 
if (e.target.classList.contains("btn-danger")) {
    contador--;
    pintarContador();
  }

if (e.target.classList.contains("btn-info")) {
    contador++;
    pintarContador();
    
  }
  e.stopPropagation()
});

document.body.addEventListener('click', e => {console.log('body')})

pintarContador = () => {
  resultado.textContent = contador;
};

document.getElementById("container py-5 text-center")= ("")*/




/*let carroproductos = [];

function meteralcarrito(carroproductos){
  console.log(carroproductos)
  /*carroproductos.push(productos);
  pintandocarroproductos();*/



/*function pintandolista(){
  let aux = '';
  for(let i = 0; i < productos.length; i++){
    aux = aux +
     `<div oneclick="meteralcarrito({id:${productos[i].id}, nombre:${productos[i].nombre},precio:${productos[i].precio} }) " style="cursor: pointer;border: 1px solid black; margin: 8px; width:200px;
      " >
          <h5>${productos[i].nombre} </h5>
          <p>${productos[i].precio} </p>
          <p>id:${productos[i].id} </p>
     </div>`;
    
    
  }
    document.getElementById(`productos`).innerHTML=aux;
}
pintandolista();



function pintandocarroproductos(){
  let aux = '';
  for(let i = 0; i < carroproductos.length; i++){
    aux = aux +
     `<div oneclick="meteralcarrito({id:${carroproductos[i].id},nombre:${carroproductos[i].nombre},precio:${carroproductos[i].precio} }) 
      ">
          <h5>${carroproductos[i].nombre} </h5>
          <p>${carroproductos[i].precio} </p>
          <p>id:${carroproductos[i].id} </p>
     </div>`;
    
    
  }
    document.getElementById(`carro`).innerHTML=aux;
}
*/



const cards = document.getElementById('cards')
const items = document.getElementById('items')
const footer = document.getElementById('footer')
const templateCard = document.getElementById('template-card').content
const templateFooter = document.getElementById('template-footer').content
const templateCarrito = document.getElementById('template-carrito').content
const fragment = document.createDocumentFragment()
let carrito = {}

// Eventos
// El evento DOMContentLoaded es disparado cuando el documento HTML ha sido completamente cargado y parseado
document.addEventListener('DOMContentLoaded', e => { fetchData() });
cards.addEventListener('click', e => { addCarrito(e) });
items.addEventListener('click', e => { btnAumentarDisminuir(e) })

// Traer productos
const fetchData = async () => {
    const res = await fetch('api.json');
    const data = await res.json()
    // console.log(data)
    pintarCards(data)
}

// Pintar productos
const pintarCards = data => {
    data.forEach(item => {
        templateCard.querySelector('h5').textContent = item.title
        templateCard.querySelector('p').textContent = item.precio
        templateCard.querySelector('button').dataset.id = item.id
        const clone = templateCard.cloneNode(true)
        fragment.appendChild(clone)
    })
    cards.appendChild(fragment)
}

// Agregar al carrito
const addCarrito = e => {
    if (e.target.classList.contains('btn-dark')) {
        // console.log(e.target.dataset.id)
        // console.log(e.target.parentElement)
        setCarrito(e.target.parentElement)
    }
    e.stopPropagation()
}

const setCarrito = item => {
    // console.log(item)
    const producto = {
        title: item.querySelector('h5').textContent,
        precio: item.querySelector('p').textContent,
        id: item.querySelector('button').dataset.id,
        cantidad: 1
    }
    // console.log(producto)
    if (carrito.hasOwnProperty(producto.id)) {
        producto.cantidad = carrito[producto.id].cantidad + 1
    }

    carrito[producto.id] = { ...producto }
    
    pintarCarrito()
}

const pintarCarrito = () => {
    items.innerHTML = ''

    Object.values(carrito).forEach(producto => {
        templateCarrito.querySelector('th').textContent = producto.id
        templateCarrito.querySelectorAll('td')[0].textContent = producto.title
        templateCarrito.querySelectorAll('td')[1].textContent = producto.cantidad
        templateCarrito.querySelector('span').textContent = producto.precio * producto.cantidad
        
        //botones
        templateCarrito.querySelector('.btn-info').dataset.id = producto.id
        templateCarrito.querySelector('.btn-danger').dataset.id = producto.id

        const clone = templateCarrito.cloneNode(true)
        fragment.appendChild(clone)
    })
    items.appendChild(fragment)

    pintarFooter()
}

const pintarFooter = () => {
    footer.innerHTML = ''
    
    if (Object.keys(carrito).length === 0) {
        footer.innerHTML = `
        <th scope="row" colspan="5">Carrito vacío con innerHTML</th>
        `
        return
    }
    
    // sumar cantidad y sumar totales
    const nCantidad = Object.values(carrito).reduce((acc, { cantidad }) => acc + cantidad, 0)
    const nPrecio = Object.values(carrito).reduce((acc, {cantidad, precio}) => acc + cantidad * precio ,0)
    // console.log(nPrecio)

    templateFooter.querySelectorAll('td')[0].textContent = nCantidad
    templateFooter.querySelector('span').textContent = nPrecio

    const clone = templateFooter.cloneNode(true)
    fragment.appendChild(clone)

    footer.appendChild(fragment)

    const boton = document.querySelector('#vaciar-carrito')
    boton.addEventListener('click', () => {
        carrito = {}
        pintarCarrito()
    })

}

const btnAumentarDisminuir = e => {
    // console.log(e.target.classList.contains('btn-info'))
    if (e.target.classList.contains('btn-info')) {
        const producto = carrito[e.target.dataset.id]
        producto.cantidad++
        carrito[e.target.dataset.id] = { ...producto }
        pintarCarrito()
    }

    if (e.target.classList.contains('btn-danger')) {
        const producto = carrito[e.target.dataset.id]
        producto.cantidad--
        if (producto.cantidad === 0) {
            delete carrito[e.target.dataset.id]
        } else {
            carrito[e.target.dataset.id] = {...producto}
        }
        pintarCarrito()
    }
    e.stopPropagation()
}

