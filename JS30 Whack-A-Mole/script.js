const agujeros = document.querySelector('.agujero');
const tableroPuntos = document.querySelector('#tableroPuntos');
const topos = document.querySelectorAll('.topo');
const dificultad = document.querySelector("#desplegableDificultad");

let ultimoAgujero;
let tiempoFinalizado =false; 
let puntaje;

function CalcularTiempoAletorio(minimo,maximo){
    return Math.random(Math.random) * (maximo,minimo) * minimo;
}

function CalcularAgujeroAletorio(agujeros){
    const ubicacion = Math.floor (Math.random () * agujeros.length);
    const agujeroExtraido = agujeros [ubicacion];

    if(agujeroExtraido === ultimoAgujero){
        return CalcularAgujeroAletorio(agujeros);
    }

    ultimoAgujero = ultimoExtraido;
    return agujeroExtraido;
}

function Ejecutar() {
    let tiempoJuego = CalcularAgujeroAletorio(200, 500);

    switch(dificultad.value){
        case "1":
            tiempoJuego = CalcularTiempoAletorio(1000, 2500);
            break;

            case "2":
                tiempoJuego = CalcularTiempoAletorio(1000, 2500);
            break;

            case "3":
                tiempoJuego = CalcularTiempoAletorio(1000, 2500);
            break;

            case "4":  
            tiempoJuego = CalcularTiempoAletorio(1000, 2500);          
            break;

            case "5":
                tiempoJuego = CalcularTiempoAletorio(1000, 2500);
            break;


    }
    const agujero = CalcularAgujeroAletorio(agujeros);
    agujero.classList.add('up');

    setTimeout(() => {
        agujero.classList.remove('up');
        if(!tiempoFinalizado) Ejecutar();
    },    tiempoJuego)
}

function IniciarJuego() {
    tableroPuntos.textContent = 0;
    puntaje = 0;
    tiempoFinalizado = false;
    Ejecutar();
    setTimeout(() => tiempoFinalizado = true, 10000);
}

function CalcularGolpes(e) {
 if(!e.isTrusted) return;
 puntaje++;
 this.parentNode.classList.remove('up');
 tableroPuntos.textContent = puntaje;


}

topos.forEach(topo => topo.addEventListener('click', CalcularGolpes));