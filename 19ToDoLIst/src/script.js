const sectionCompletados = document.querySelector('.sectionCompletados');
const sectionEnProceso = document.querySelector('.sectionEnProceso');
const sectionPendientes = document.querySelector('.sectionPendientes');

import {cargaDatosLocalStorage} from "./cargaDatosLocalStorage.js";
await cargaDatosLocalStorage()
import {llenarListaDeTareas} from './llenarListaDeTareas.js';
import {controlMenuLateral} from './controlMenuLateral.js';
controlMenuLateral(sectionCompletados, sectionEnProceso, sectionPendientes);


llenarListaDeTareas(sectionCompletados, sectionEnProceso, sectionPendientes);
let tempo;
let btnPlay = document.getElementById('play')

btnPlay.addEventListener('click',()=>{
    console.log("aqui todo bien 10")
    tempo = setInterval(settime, 1000);
    console.log("click")
    setInterval(tempo)
    document.getElementById('alarma').pause();
    document.getElementById('alarma').currentTime = 0;
})

document.getElementById('pause').addEventListener('click', () => {
    console.log("aqui todo bien 24")
    clearInterval(tempo);
    document.title ="Temporizador en Pausa";
})
document.getElementById('stop').addEventListener('click', () => {
    console.log("aqui todo bien 30")
stop();
})

function stop() {
    restante = total;
    timer.style.width = `100%`;
    document.getElementById('alarma').pause();
    document.getElementById('alarma').currentTime = 0;
    document.title ="Temporizador Detenido";
    clearInterval(tempo);
    min = total;
    seg = 60;
}

let total = 25 * 60;
let porcentaje;
const timer = document.querySelector('.Timer');
let restante = total;
let min;
let seg = 60;
function settime() {
    porcentaje = 100 / total * restante
    min = restante / 60;
    seg = seg == 0 ? 59 : seg -1;
    document.title ="Tiempo Restante " + Math.round(min) + ":" + seg;
    document.querySelector('.tiempoRestante').textContent="Tiempo Restante " + Math.round(min) + ":" + seg;
    timer.style.backgroundColor = porcentaje > 50 ? "#21c72f" : porcentaje > 25 ? "#fda745" : "#D33030"
    if (porcentaje >= 0) {
        restante = restante - 1;
        timer.style.width = `${porcentaje}%`;
    } else if (porcentaje <= 0) {
        clearInterval(tempo);
        cambiarTarea();
        document.getElementById('alarma').play();
        timer.style.width = `100%`;
        restante = total;
    }
}

function cambiarTarea() {
    sectionEnProceso.innerHTML+=`
    <div class="terminado">
        <button class="btnTerminado">YA TERMINE</button>
        <button class="btnNoTerminado">NECESITO MAS TIEMPO</button>
    <terminado>`
    let auxPendiente = JSON.parse(localStorage.getItem(document.querySelector('.pomodoroPendiente').id))
    let auxProceso = JSON.parse(localStorage.getItem(document.querySelector('.pomodoroProceso').id))
    document.querySelector('.btnTerminado').addEventListener('click',()=>{
        auxPendiente.estado = "Proceso"
        auxProceso.estado = "Completado"
        localStorage.setItem(auxPendiente.id,JSON.stringify(auxPendiente));
        localStorage.setItem(auxProceso.id,JSON.stringify(auxProceso));
        window.location.reload(true);
    })
    document.querySelector('.btnNoTerminado').addEventListener('click',()=>{
        stop();
        auxProceso.pomodoros++;
        localStorage.setItem(auxProceso.id,JSON.stringify(auxProceso))
        window.location.reload(true);
    })
    }





Array.from(document.querySelectorAll('.pomodoroPendiente')).map((pendiente) => {
    pendiente.addEventListener('mouseenter', () => {
        pendiente.querySelector('.oculto').style.display = "flex";
        pendiente.querySelector('.oculto').querySelector('.borrar').addEventListener('click', () => {
            pendiente.remove()
        })
    })
    pendiente.addEventListener('mouseleave', () => {
        pendiente.querySelector('.oculto').style.display = "none";
    })
})
Array.from(document.querySelectorAll('.pomodoroCompletado')).map((completo) => {
    completo.addEventListener('mouseenter', () => {
        completo.querySelector('.oculto').style.display = "flex";
        completo.querySelector('.oculto').querySelector('.borrar').addEventListener('click', () => {
            completo.remove()
        })
    })
    completo.addEventListener('mouseleave', () => {
        completo.querySelector('.oculto').style.display = "none";
    })
})
let agregarSubtareas = document.querySelector('.subtareas');
let tituloSub = document.querySelector('.tituloSub');
document.getElementById('botonSubtareas').addEventListener('click', () => {
    tituloSub.style.display = 'block';
    agregarSubtareas.innerHTML += `
    <div class="agregarSubtareas">
        <input type="checkbox" name="" id="check">
        <input type="text" name="" class="ingSubtarea in" id="tareaNueva">
    </div>`
})
document.getElementById('agregar').addEventListener('click', () => {
    let obj = {};
    let arr = [];
    Array.from(document.querySelectorAll('#tareaNueva')).map((e) => {
        if (e.value == '') {
            alert('Completa los campos')
        } else {
            obj = {
                "id": localStorage.length + 1,
                "tarea": document.querySelector('.AgregarNueva').value,
                "descripcion": document.querySelector('.Agregar').value,
                "estado": "Pendiente",
                "pomodoros": 1,
                "subtareas": []
            }
            arr = [];
            Array.from(document.querySelectorAll('.ingSubtarea')).map((inp) => {
                if (inp.value != "") {
                    let objsub = {
                        "subtareas": inp.value,
                        "estado": "Pendiente"
                    }
                    arr.push(objsub)
                }
            });
        }
    })
    obj.subtareas = arr;
    localStorage.setItem(localStorage.length + 1, JSON.stringify(obj));
    Array.from(document.querySelectorAll('.in')).map((e) => {
        e.value = "";
    })
});

Array.from(document.querySelectorAll('.editar')).map((e) => {
    e.addEventListener('click', () => {
        document.querySelector('#mostrarModificar').style.display = 'block';
        editar(e.id);
    })
})
document.getElementById('cancelarCambios').addEventListener('click', ()=>{
    document.querySelector('#mostrarModificar').style.display = 'none';
})

function editar(f) {
    console.log(f);
    let tarea = JSON.parse(localStorage.getItem(f));
    console.log(tarea);
    document.querySelector('#guardarCambios').addEventListener('click', () => {
        if (document.getElementById('modificar').value != "") {
            tarea.tarea = document.getElementById('modificar').value;
            localStorage.setItem(f, JSON.stringify(tarea));
            window.location.reload(true);
        } else {
            document.getElementById('modificar').style.border = "2px solid red";
            document.querySelector('#camposVacios').innerHTML = 'Complete los campos';
        }
    })
}