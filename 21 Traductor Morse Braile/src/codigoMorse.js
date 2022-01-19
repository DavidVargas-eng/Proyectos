const data = await fetch('./datos/datos.JSON');
const codigo = await data.json();
export const codigoMorse = function () {
    let llenadoContenedor = "";
    llenadoContenedor += `
    <div class="scroll">
    <p>
        <strong>¿Qué es el código Morse?</strong><br>
        El código Morse es un sistema de codificación de caracteres que permite que los operadores puedan enviar mensajes utilizando pulsaciones eléctricas que pueden ser representadas como cortas o largas, o dicho de otra forma, como puntos y rallas.
        <br><br>
        <strong>
        ¿Quién y cuándo se inventó el código Morse?</strong><br>
        Samuel F. B. Morse y su asistente, Alfred Vail, son conocidos como los inventores del código Morse. Este sistema se desarrolló alrededor de 1830 y fue evolucionando en la década siguiente.
        <br><br>
        <strong>
        ¿Cuál fue el primer mensaje en código Morse?</strong><br>
        “What hath God wrought” (en Español: “Qué nos ha traído Dios”), fue el primer mensaje oficial enviado por Samuel F.B. Morse, el día 24 de mayo de 1844, para abrir la línea telegráfica Baltimore-Washington.
        <br><br>
        <strong>
        ¿Qué tipo de comunicación es el código Morse?</strong><br>
        En el pasado, el uso del código Morse estaba bastante extendido en el sector militar. Hoy en día, su utilización ha disminuido notablemente, pero todavía se emplea en la aviación, las actividades de radio amateur y la tecnología asistida.
    </p>
    <br><br>
    <strong>ALFABETO MORSE</strong><br><br>
    <Strong>Latino</Strong>
    <div class="tabla">`
    codigo.forEach(e => {
        e.latino.forEach(letra => {
            llenadoContenedor += `
            <div>
            <div>${letra.letra}</div>
            <div>${letra.codigo}</div>
            </div>`
        });
        llenadoContenedor += `</div><Strong>Números</Strong><div class="tabla">`
        e.numeros.forEach(numero => {
            llenadoContenedor += `
            <div>
            <div>${numero.letra}</div>
            <div>${numero.codigo}</div>
            </div>`
        });
        llenadoContenedor += `</div><Strong>Puntuación</Strong><div class="tabla">`
        e.puntuacion.forEach(punto => {
            llenadoContenedor += `
            <div>
            <div>${punto.letra}</div>
            <div>${punto.codigo}</div>
            </div>`
        });
    });
    llenadoContenedor +=`
    </div>
    <button id="txtMorse" class="btnMorse contenedorFlotante" >Traductor Texto a Morse</button>
    <button id="morseTxt" class="btnMorse contenedorFlotante" >Traductor Morse a Texto</button>
    </div>`
    return llenadoContenedor;
}