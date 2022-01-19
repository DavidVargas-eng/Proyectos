import { datos } from "./src/datos.js";

let crear = function (dato, tipo, nombre) {
    let element = document.createElement(dato);
    element.setAttribute(tipo, nombre);
    return element;
}

let scroll = document.querySelector('.tarjetas');
let imagen_grande = document.querySelector('.imagen_grande');
let nombre_grande = document.querySelector('.nombre_grande');
let correo_grande = document.querySelector('.correo_grande');
let btn_rechazar = document.querySelector('.btn_rechazar');
let e_perfil = document.querySelector('.e_perfil');
let nivel_1 = document.querySelector('.nivel1');
let nivel_2 = document.querySelector('.nivel2');
let nivel_3 = document.querySelector('.nivel3');
let nivel_4 = document.querySelector('.nivel4');
let nivel_5 = document.querySelector('.nivel5');

btn_rechazar.onclick = function () {
    let recha = crear("img","class","recha");
    recha.src="images/RECHAZADO.svg";
    document.body.append(recha);
}

datos.forEach(dato => {
    const imagen = dato.image;
    const nombre = dato.Nombre;
    const correo = dato.correo;
    const perfil = dato.perfil;
    const nivel_html = dato.nivel_html;
    const nivel_css = dato.nivel_css;
    const nivel_javascript = dato.nivel_javascript;
    const nivel_sql = dato.nivel_sql;

    let tarjeta = crear("div", "class", "x");
    scroll.append(tarjeta);

        let e_imagen = crear("img", "class", "icono");
        e_imagen.src = imagen;
        tarjeta.append(e_imagen);

        let e_nombre = crear("p", "class", "nombre_miniatura");
        e_nombre.innerText = nombre;
        tarjeta.append(e_nombre);

    tarjeta.addEventListener('click', () => {
        imagen_grande.src = imagen;
        nombre_grande.textContent = nombre;
        correo_grande.textContent = correo;
        e_perfil.textContent = '"' + perfil + '"';

        function niveles(nivel) {
            if (nivel == 5) {
                console.log('aca esta bien');
                nivel_5.style.display = "block";
                nivel_1.style.display = "block";
                nivel_2.style.display = "block";
                nivel_3.style.display = "block";
                nivel_4.style.display = "block";    
            }
            if (nivel == 4) {
                console.log('aca esta bien');
                nivel_4.style.display = "block";
                nivel_1.style.display = "block";
                nivel_2.style.display = "block";
                nivel_3.style.display = "block";
                nivel_5.style.display = "none";    
            }
            if (nivel == 3) {
                nivel_3.style.display = "block";
                nivel_1.style.display = "block";
                nivel_2.style.display = "block";
                nivel_4.style.display = "none";
                nivel_5.style.display = "none";    
            }
            if (nivel == 2) {
                nivel_2.style.display = "block";
                nivel_1.style.display = "block";
                nivel_3.style.display = "none";
                nivel_4.style.display = "none";
                nivel_5.style.display = "none";    
            }
            if (nivel == 1) {
                nivel_1.style.display = "block";
                nivel_2.style.display = "none";
                nivel_3.style.display = "none";
                nivel_4.style.display = "none";
                nivel_5.style.display = "none";    
             }    
        }

        niveles(nivel_html);

    })
});