let numeroSecreto = 0;
let intentos=0;
let listaNumerosSorteados=[];
let numeroMaximo=10;


function asignarTextoElemento(elemto,texto) {
    let elementoHtml = document.querySelector(elemto);
    elementoHtml.innerHTML=texto;
    return;
}

function verificarIntento (){
    let numeroDeUsuario=parseInt(document.getElementById('valorUsuario').value);
    if (numeroDeUsuario===numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos==1) ? 'Vez' : 'Veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        // El usuario mo acertó.
        if (numeroDeUsuario>numeroSecreto) {
            asignarTextoElemento('p','El número secreto es menor');
        } else {
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    return;
    }
}

function limpiarCaja() {
   document.querySelector('#valorUsuario').value='';
}

function generarNumeroSecreto(){
    let numeroGenerado=Math.floor(Math.random()*numeroMaximo)+1;
    /// pregunta si esta en lista 
    if (listaNumerosSorteados.length==numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
    } else
    {
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
         } else {
             listaNumerosSorteados.push(numeroGenerado);
             return numeroGenerado;
         }
    }
}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego de número secreto!');
    asignarTextoElemento('p',`Ingresa un número entre 1 y ${numeroMaximo}`);
    /// reiniciar intentos 
    intentos=1;
    /// generar número aleatorio 
    numeroSecreto = generarNumeroSecreto();
}

function reiniciarJuego(){
    /// limpiar la caja del imput 
    limpiarCaja();
    /// deshabilitar button nuevo juego 
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    /// reinciar textos
    condicionesIniciales();

}

condicionesIniciales();