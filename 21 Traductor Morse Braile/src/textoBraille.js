export const textoBraille = function () {
    let llenadoContenedor = "";
    llenadoContenedor += `
    <div class="scroll">
    <input class="entradaTexto inputTraductor" type="text">
    <button class="btnTraducirTxtBraille contenedorFlotante">Traducir a Braille</button>
    <div class="salidaBraille inputTraductor">
    </div>`
    return llenadoContenedor;
}