const data = await fetch('./datos/datos.JSON');
const braille = await data.json();
export const sistemaBraille = function () {
    let llenadoContenedor = "";
    llenadoContenedor += `
    <div class="scroll">
    <p>
        <strong>¿QUE ES EL SISTEMA BRAILLE?</strong><br>
        El Braille es un sistema de escritura y lectura táctil para personas ciegas, también conocido como cecografía. Fue diseñado por Louis Braille en la primera mitad del siglo XIX. Braille se quedó ciego debido a un accidente en el taller de su padre que tuvo en su infancia mientras jugaba. A los 13 años, el director de la Escuela para Ciegos y Sordos donde él estudiaba, le propuso que probara un sistema de escritura y lectura táctil inventado por un militar para transmitir órdenes sin permitir delatar la posición. Al cabo de un tiempo Braile descrubrió que el sistema era efectivo y lo reinventó empleando el sistema de 8 puntos, aunque al cabo de unos años lo redujo a 6 puntos, siendo el sistema actualmente reconocido como el Lenguaje Braille Universal.
    </p>
    <br><br>
    <strong>ALFABETO BRAILLE</strong><br><br>
    <div class="tabla">`
    braille.forEach(e => {
        e.latino.forEach(letra => {
            llenadoContenedor += `
            <div>
            <div>${letra.letra}</div>
            <div><img class="imgBraille" src="${letra.braille}" alt=""></div>
            </div>`
        });
        llenadoContenedor += `</div><Strong>Números</Strong><div class="tabla">`
        e.numeros.forEach(numero => {
            llenadoContenedor += `
            <div>
            <div>${numero.letra}</div>
            <div><img class="imgBraille" src="${numero.braille}" alt=""></div>
            </div>`
        });
        llenadoContenedor += `</div><Strong>Puntuación</Strong><div class="tabla">`
        e.puntuacion.forEach(punto => {
            if (punto.braille != null) {
                llenadoContenedor += `
                <div>
                <div>${punto.letra}</div>
                <div><img class="imgBraille" src="${punto.braille}" alt=""></div>
                </div>`    
            }
        });
    });
    llenadoContenedor +=`
    </div>
    <button id="txtBraille" class="btnBraille contenedorFlotante" >Traductor Texto a Braille</button>
    <button id="brailleTxt" class="btnBraille contenedorFlotante" >Traductor Braille a Texto</button>
    </div>`
    return llenadoContenedor;
}