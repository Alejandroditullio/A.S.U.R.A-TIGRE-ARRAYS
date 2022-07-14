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


