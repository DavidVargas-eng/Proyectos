let lista_inputs = Array.from(document.querySelectorAll('input'));
let boton = document.querySelector('.boton');
let validacion_correo = new RegExp("[a-zA-Z0-9._-]+@[a-zA-Z]+\.+com");
let validacion_numeros = new RegExp('([0-9])');
let validacion_texto = new RegExp('^^([A-ZÑÁÉÍÓÚa-zñáéíóú ]+[\s]*)+$');
let check = document.querySelector('.check');

boton.addEventListener("click", () => {
    lista_inputs.map((input) => {
        if (input.id == 1 || input.id == 2 || input.id == 3) {
            if (input.value == ""){
                input.classList.remove("error");
                input.classList.add("vacio");
            }else{
                input.classList.add("error");
                input.classList.remove("vacio");
                    if (validacion_texto.test(input.value)) {
                        input.classList.remove("error");
                        input.classList.remove("vacio");
                    }
            }        
        }
        if (input.id == 4) {
            if (input.value == ""){
                input.classList.remove("error");
                input.classList.add("vacio");
            }else{
                input.classList.add("error");
                input.classList.remove("vacio");
                    if (validacion_numeros.test(input.value)) {
                        input.classList.remove("error");
                        input.classList.remove("vacio");
                    }
            }        
        }
        if (input.id == 5) {
            if (input.value == ""){
                input.classList.remove("error");
                input.classList.add("vacio");
            }else{
                input.classList.add("error");
                input.classList.remove("vacio");
                    if (validacion_correo.test(input.value)) {
                        input.classList.remove("error");
                        input.classList.remove("vacio");
                    }
            }        
        }
    })
    if (check.checked == false) {
        alert("Debes aceptar los terminos y condiciones")
    }
})