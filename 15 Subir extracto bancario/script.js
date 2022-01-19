import { bancos } from "./src/bancos.js";

let checkbox = document.querySelector('.check3');
let check_imagen = document.querySelector('.check2');

let selector = Array.from(document.querySelectorAll('.sel'));

//BOTON CHECK AGREGAR O NO ARCHIVO
checkbox.addEventListener('click',()=>{
    check_imagen.classList.toggle('active');
    check_imagen.classList.toggle('inactive');
    selector.map((sel)=>{
        sel.style.display = checkbox.checked == false ? "none" : "block"
    })
})

import { cuentas,monedas } from "./src/cuentas.js";
let select_bancos = document.querySelector('.select_banco');
let select_cuentas = document.querySelector('.select_cuentas');
let select_moneda = document.querySelector('.select_moneda');

//RELLENAR LAS OPCIONES DE BANCOS
    for (let i = 0; i < bancos.length; i++) {
        select_bancos.innerHTML +=`<option value="${i}">${bancos[i]}</option>`;
    }
//RELLENAR LAS OPCIONES DE CUENTAS
    for (let j = 0; j < cuentas.length; j++) {
        select_cuentas.innerHTML +=`<option value="${j}">${cuentas[j]}</option>`;
    }

//RELLENAR DIVISA
    for (let k = 0; k < monedas.length; k++) {
        select_moneda.innerHTML += `<option value="${k}">${monedas[k]}</option>`;
    }
//ACTUALIZAR HORA Y FECHA
let fecha = document.querySelector('.desktop_fecha');
    function fechar() {
        let now = new Date();
        fecha.textContent=`Fecha: ${now.getDate()}/${(now.getMonth() +1)}/${now.getFullYear()}  ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
    }
setInterval(fechar,1000)

let inputs = Array.from(document.querySelectorAll('.val'));
inputs.map((input)=>{
    input.addEventListener('click',()=>{
        if (input.id == 3 || input.id == 4 || input.id == 5) { 
            input.style.border = input.value == 0 ? "2px solid red": "3px solid #999";
        }

        if (input.id == 2) {
            console.log(input.display);
            input.style.border = input.value == "" ? "2px solid red": "3px solid #999";
        }
    }) 
})
 
