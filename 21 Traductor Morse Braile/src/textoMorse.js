export const textoMorse = function () {
    let llenadoContenedor = "";
    llenadoContenedor += `
    <div class="scroll">
    <input class="entradaTexto inputTraductor" type="text">
    <button class="btnTraducirTxtMorse contenedorFlotante">Traducir a Morse</button>
    <button class="btnAudioMorse contenedorFlotante">Escuchar Morse</button>
    <input class="salidaMorse inputTraductor" type="text">
    </div>`
    return llenadoContenedor;
}