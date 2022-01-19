export const morseTexto = function () {
    let llenadoContenedor = "";
    llenadoContenedor += `
    <div class="scroll">
    <input class="entradaTexto inputTraductor" type="text">
    <button class="btnTraducirMorseTexto contenedorFlotante">Traducir a Texto</button>
    <div style="border:1px solid;" class="salidaTexto inputTraductor">
    </div>`
    return llenadoContenedor;
}