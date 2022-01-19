const data = await fetch('./datos/datos.JSON');
const braille = await data.json();
export const brailleTexto = function () {
    let llenadoContenedor = "";
    llenadoContenedor += `
    <div class="scroll">
    <div class="tabla">`
    braille.forEach(e => {
        e.latino.forEach(letra => {
            llenadoContenedor += `
            <img id="${letra.letra}" style="margin: 5px;" class="imgBraille" src="${letra.braille}" alt="">
            `
        });
        llenadoContenedor += `</div><hr><div class="tabla">`
        e.numeros.forEach(numero => {
            llenadoContenedor += `
            <img id="${numero.letra}" style="margin: 5px;" class="imgBraille" src="${numero.braille}" alt="">
            `
        });
        llenadoContenedor += `</div><hr><div class="tabla">`
        e.puntuacion.forEach(punto => {
            if (punto.braille != null) {
                llenadoContenedor += `
                <img id="${punto.letra}" style="margin: 5px;" class="imgBraille" src="${punto.braille}" alt="">`
            }
        });
    });
    llenadoContenedor += `
    <button class="btnEspacio contenedorFlotante">Espacio</button></div>
    <div style="border:1px solid;" class="entradaTexto inputTraductor"></div>
    `
    return llenadoContenedor;
}