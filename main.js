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



const Clickbutton = document.querySelectorAll('.button')
const tbody = document.querySelector('.tbody')
let carrito = []

Clickbutton.forEach(btn => {
  btn.addEventListener('click', addToCarritoItem)
})


function addToCarritoItem(e){
  const button = e.target
  const item = button.closest('.card')
  const itemTitle = item.querySelector('.card-title').textContent;
  const itemPrice = item.querySelector('.precio').textContent;
  const itemImg = item.querySelector('.card-img-top').src;

  const newItem = {
    title: itemTitle,
    precio: itemPrice,
    img: itemImg,
    cantidad: 1
  }

  addItemCarrito(newItem)
}


function addItemCarrito(newItem){

  const alert = document.querySelector('.alert')

  setTimeout( function(){
    alert.classList.add('hide')
  }, 2000)
    alert.classList.remove('hide')

  const InputElemnto = tbody.getElementsByClassName('input__elemento')
  for(let i =0; i < carrito.length ; i++){
    if(carrito[i].title.trim() === newItem.title.trim()){
      carrito[i].cantidad ++;
      const inputValue = InputElemnto[i]
      inputValue.value++;
      CarritoTotal()
      return null;
    }
  }

  carrito.push(newItem)

  renderCarrito()
} 


function renderCarrito(){
  tbody.innerHTML = ''
  carrito.map(item => {
    const tr = document.createElement('tr')
    tr.classList.add('ItemCarrito')
    const Content = `
    
    <th scope="row">1</th>
            <td class="table__productos">
              <img src=${item.img}  alt="">
              <h6 class="title">${item.title}</h6>
            </td>
            <td class="table__price"><p>${item.precio}</p></td>
            <td class="table__cantidad">
              <input type="number" min="1" value=${item.cantidad} class="input__elemento">
              <button class="delete btn btn-danger">x</button>
            </td>
    
    `
    tr.innerHTML = Content;
    tbody.append(tr)

    tr.querySelector(".delete").addEventListener('click', removeItemCarrito)
    tr.querySelector(".input__elemento").addEventListener('change', sumaCantidad)
  })
  CarritoTotal()
}

function CarritoTotal(){
  let Total = 0;
  const itemCartTotal = document.querySelector('.itemCartTotal')
  carrito.forEach((item) => {
    const precio = Number(item.precio.replace("$", ''))
    Total = Total + precio*item.cantidad
  })

  itemCartTotal.innerHTML = `Total $${Total}`
  addLocalStorage()
}

function removeItemCarrito(e){
  const buttonDelete = e.target
  const tr = buttonDelete.closest(".ItemCarrito")
  const title = tr.querySelector('.title').textContent;
  for(let i=0; i<carrito.length ; i++){

    if(carrito[i].title.trim() === title.trim()){
      carrito.splice(i, 1)
    }
  }

  const alert = document.querySelector('.remove')

  setTimeout( function(){
    alert.classList.add('remove')
  }, 2000)
    alert.classList.remove('remove')

  tr.remove()
  CarritoTotal()
}

function sumaCantidad(e){
  const sumaInput  = e.target
  const tr = sumaInput.closest(".ItemCarrito")
  const title = tr.querySelector('.title').textContent;
  carrito.forEach(item => {
    if(item.title.trim() === title){
      sumaInput.value < 1 ?  (sumaInput.value = 1) : sumaInput.value;
      item.cantidad = sumaInput.value;
      CarritoTotal()
    }
  })
}

function addLocalStorage(){
  localStorage.setItem('carrito', JSON.stringify(carrito))
}

window.onload = function(){
  const storage = JSON.parse(localStorage.getItem('carrito'));
  if(storage){
    carrito = storage;
    renderCarrito()
  }
} 

