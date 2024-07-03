let listaNumerosSorteados = [];
let numeroSecreto = 0;
let intentos = 1;
let numeroMaximo = 10;


function asignarTexto(elemento,texto){
    let elementoaCambiar = document.querySelector(elemento);
    elementoaCambiar.innerHTML = texto;
}

function generarNumero() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    //si el numero generado esta incluido en al lista
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTexto('p','Ya se sortearon todos los numeros posibles');
    } else {
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumero();
        }else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}


function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(typeof(numeroDeUsuario));
    if(numeroSecreto === numeroDeUsuario){
        asignarTexto('p',`Acertaste el numero en ${intentos} ${(intentos === 1) ? 'ves' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else {
        if(numeroSecreto > numeroDeUsuario){
            asignarTexto('p','El numero secreto es mayor');
        }
        else{
            asignarTexto('p','El numero secreto es menor');
        }
        limpiarValor();
        intentos++;
    }
    return;
}

function limpiarValor(){
    document.querySelector('#valorUsuario').value = '';
}
function condicionesIniciales(){
    asignarTexto('h1','Juego del numero secreto');
    asignarTexto('p',`Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumero();
    intentos = 1;

}

function reiniciarJuego(){
    //limpiar caja
    //indicar mensaje de intervalo de numeros
    //generar numero aleatorio
    //desabilitar boton juego
    //inicializar el numero de intentos
    limpiarValor();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled','true');


}
condicionesIniciales();
