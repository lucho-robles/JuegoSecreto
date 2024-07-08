let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verrificarIntento() {
    // el getElementById nos retorna el id (que esta en html) pero en este caso no queremos el objeto, sino el valor por eso el .value al ultimo
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
   
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento ("p", `Acertaste el número en ${intentos} ${(intentos=== 1) ? "vez" : "veces"}`);
        // en el codigo de abajo lo que hacemos es habilitar el boton de nuevo juego o de reiniciar una vez que el usuario acerto el num secreto
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else{
        if ( numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento("p", "El número secreto es menor");
        } else {
            asignarTextoElemento("p", "El numero secreto es mayor")
        }
        intentos++;
        limpiarCaja();
    }
    // el triple = nos compara que sea igual en valor y en type (number, string, etc)
    return;    
}

function limpiarCaja() {
   let valorCaja = document.querySelector("#valorUsuario").value = "";
}

function generarNumeroSecreto(){
   let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);            
    // si ya sorteamos todos los numeros
    if(listaNumerosSorteados.length == numeroMaximo){
       asignarTextoElemento("p", "Ya se sortearon todos los numeros posibles"); 
    } else{
          // si el numero generado esta incluido en la lista
    if(listaNumerosSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto(); 
     } else{
         listaNumerosSorteados.push(numeroGenerado);
         return numeroGenerado;
     }
    }

    }


function condicionesIniciales() {
    asignarTextoElemento("h1", "Juego del número secreto!");
    asignarTextoElemento("p", `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    // limpiar caja
    limpiarCaja();
    // indicar mensaje de intervalo de números
    // generar el número aleatorio
    // inicializar el número de intentos
    condicionesIniciales();
    // deshabilitar el boton de nuevo juego
    document.querySelector("#reiniciar").setAttribute("disabled", "true");

}

condicionesIniciales();