import { datosTabla } from "./src/datos_tabla.js";

//LLENADO DE TITULOS DE LA TABLA---------------------------------
let txtTituloTabla = document.querySelector('.txtTituloTabla');
let infoColumnas = [];
let fila = document.querySelector('.tituloColumnas');
let clave;
let tabla = document.querySelector('.tabla');
let formulario = document.querySelector('.formulario');
let guardar = document.createElement('button');

function rellenar(n) {
    tabla.innerHTML="";////////////////////////////////////////////
    txtTituloTabla.textContent=(datosTabla[n].Titulo);
    botonNuevo.textContent=(datosTabla[n].tipoBoton);
    infoColumnas = datosTabla[n].columnas;
    fila.innerHTML = "";
    infoColumnas.map((columna)=>{
            fila.innerHTML += `<td>${columna}</td>`
            let label = document.createElement('p');
            let input = document.createElement('input');
            label.innerText=columna;
            formulario.append(label,input);
    })
    guardar.classList.add('guardar');
    guardar.textContent="Guardar";
    formulario.append(guardar);
}

//MENU IZQUIERDO BOTONES----------------------------------------
let asidetabla = document.querySelector('.asideTabla');
let botones = Array.from(document.querySelectorAll('.boton'))
for (let i = 0; i < botones.length; i++) {
    botones[i].addEventListener('click',()=>{
        asidetabla.style.display = "block";
        clave = i == 0 ? "imp" : i == 1 ? "pro" : i == 2 ? "tip" : "eva";
        rellenar(i);
        imprimir();
    })
}

function imprimir() {
    for (let i = 0; i < localStorage.length; i++) {
        tabla.innerHTML += `<tr class="impr${i}"></tr>`;
        if (localStorage.getItem(clave+i) != null) {
            let temp = JSON.parse(localStorage.getItem(clave+i))
            for (let j = 0; j < 4; j++) {
                let imp = document.querySelector(`.impr${i}`);
                imp.innerHTML += `<td>${temp[j]}</td>`
            }
        }
    }
}

let botonNuevo = document.querySelector('.botonNuevo');
botonNuevo.addEventListener('click',()=>{
    formulario.style.display = "flex";
    console.clear();
})

guardar.addEventListener('click',()=>{
    formulario.style.display = "none";
})


let arrImprimir1 = ["1","DescripcionImpr0","Valor0","<img src='images/MicrosoftTeams-image.png'><img src='images/hfgjkl.png'>"];
let arrImprimir2 = ["2","DescripcionImpr2","Valor2","<img src='images/MicrosoftTeams-image.png'><img src='images/hfgjkl.png'>"];
let arrImprimir3 = ["3","DescripcionImpr3","Valor3","<img src='images/MicrosoftTeams-image.png'><img src='images/hfgjkl.png'>"];
let arrImprimir4 = ["4","DescripcionPro0","Valor0","<img src='images/MicrosoftTeams-image.png'><img src='images/hfgjkl.png'>"];
let arrImprimir5 = ["5","DescripcionTip0","Valor0","<img src='images/MicrosoftTeams-image.png'><img src='images/hfgjkl.png'>"];
let arrImprimir6 = ["6","DescripcionTip1","Valor0","<img src='images/MicrosoftTeams-image.png'><img src='images/hfgjkl.png'>"];
let arrImprimir7 = ["7","DescripcionEva0","Valor0","<img src='images/MicrosoftTeams-image.png'><img src='images/hfgjkl.png'>"];

localStorage.setItem("imp0",JSON.stringify(arrImprimir1));
localStorage.setItem("imp1",JSON.stringify(arrImprimir2));
localStorage.setItem("imp2",JSON.stringify(arrImprimir3));
localStorage.setItem("pro0",JSON.stringify(arrImprimir4));
localStorage.setItem("tip0",JSON.stringify(arrImprimir5));
localStorage.setItem("tip1",JSON.stringify(arrImprimir6));
localStorage.setItem("eva0",JSON.stringify(arrImprimir7));


function crear() {
}

function actualizar() {
}

function eliminar() {
}