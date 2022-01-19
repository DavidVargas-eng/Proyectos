let section_pagar = document.querySelector('.section_pagar');
let section_seleccionar = document.querySelector('.section_seleccionar');
let btn_seleccionar = document.querySelector('.seleccionar');
let btn_pagar = document.querySelector('.pagar');
let pago = document.querySelector('.btn_pagar');
let tarjeta = document.querySelector('#tarjeta');
let txt_nombre = document.querySelector('.txt_nombre');
let txt_numero = document.querySelector('.txt_numero');
let txt_mes = document.querySelector('.txt_mes');
let diagonal = document.querySelector('.diagonal');
let txt_anio = document.querySelector('.txt_anio');
let txt_codigo = document.querySelector('.txt_codigo');
let auxbtn = 0;

section_seleccionar.style.display="none";
section_pagar.style.display="none";

btn_seleccionar.onclick = function(){
    if (section_seleccionar.style.display === "none") {
        section_seleccionar.style.display="flex";
        section_pagar.style.display="none";
    }else{
        section_seleccionar.style.display="none";
    }
}

btn_pagar.onclick = function(){
    if (section_pagar.style.display === "none") {
        section_seleccionar.style.display="none";
        section_pagar.style.display="flex"
    }else{
        section_pagar.style.display="none";
    }
}

let lista_inputs = Array.from(document.querySelectorAll('input'));

    lista_inputs.map((input) => {
        input.addEventListener('keyup',() =>{

let validacion_numeros = new RegExp('([0-9])');
let validacion_nombres = new RegExp('^^([A-ZÑÁÉÍÓÚa-zñáéíóú ]+[\s]*)+$');

            if (input.id == 'nombre') {
                tarjeta.classList.remove('girar');
                txt_nombre.style.opacity="100%";
                txt_numero.style.opacity="100%";
                txt_mes.style.opacity="100%";
                txt_anio.style.opacity="100%";
                txt_codigo.style.opacity="0%";
                diagonal.style.opacity="100%";
                if (input.value == "") {
                    input.classList.remove('error')
                }else{
                    input.classList.add('error');
                    if (validacion_nombres.test(input.value)) {
                        input.classList.remove('error');
                        auxbtn =+ 1;
                        txt_nombre.textContent=input.value;
                    }
                }
            }

            if (input.id == 'mes') {
                tarjeta.classList.remove('girar');
                txt_nombre.style.opacity="100%";
                txt_numero.style.opacity="100%";
                txt_mes.style.opacity="100%";
                txt_anio.style.opacity="100%";
                txt_codigo.style.opacity="0%";
                diagonal.style.opacity="100%";
                if (input.value == "") {
                    input.classList.remove('error')
                }else{
                    input.classList.add('error');
                    if (validacion_numeros.test(input.value) && input.value.length <= 2 && input.value <= 12){
                        input.classList.remove('error');
                        auxbtn =+ 1;
                        txt_mes.textContent=input.value;
                    }
                }
            }

            if (input.id == 'año') {
                tarjeta.classList.remove('girar');
                txt_nombre.style.opacity="100%";
                txt_numero.style.opacity="100%";
                txt_mes.style.opacity="100%";
                txt_anio.style.opacity="100%";
                txt_codigo.style.opacity="0%";
                diagonal.style.opacity="100%";
                if (input.value == "") {
                    input.classList.remove('error')
                }else{
                    input.classList.add('error');
                    if (validacion_numeros.test(input.value) && input.value.length <= 2) {
                        input.classList.remove('error');
                        auxbtn =+ 1;
                        txt_anio.textContent=input.value;
                    }
                }
            }

            if (input.id == 'numero') {
                tarjeta.classList.remove('girar');
                txt_nombre.style.opacity="100%";
                txt_numero.style.opacity="100%";
                txt_mes.style.opacity="100%";
                txt_anio.style.opacity="100%";
                txt_codigo.style.opacity="0%";
                diagonal.style.opacity="100%";
                if (input.value == "") {
                    input.classList.remove('error')
                }else{
                    input.classList.add('error');
                    if (validacion_numeros.test(input.value) && input.value.length <= 16) {
                        input.classList.remove('error');
                        auxbtn =+ 1;
                        txt_numero.textContent=input.value;
                    }
                }
            }

            if (input.id == 'codigo') {
                tarjeta.classList.add('girar');
                txt_nombre.style.opacity="0%";
                txt_numero.style.opacity="0%";
                txt_mes.style.opacity="0%";
                txt_anio.style.opacity="0%";
                txt_codigo.style.opacity="100%";
                diagonal.style.opacity="0%";
                if (input.value == "") {
                    input.classList.remove('error')
                }else{
                    input.classList.add('error');
                    if (validacion_numeros.test(input.value) && input.value.length <= 3) {
                        input.classList.remove('error');
                        auxbtn =+ 1;
                        txt_codigo.textContent=input.value;
                   }
                }
            }
        })
    })

pago.onclick = function(){
    if (auxbtn == 1) {
        lista_inputs.map((input) => {input.value="";})
        tarjeta.classList.add('pago');
        txt_codigo.style.opacity="0%";
    }
}