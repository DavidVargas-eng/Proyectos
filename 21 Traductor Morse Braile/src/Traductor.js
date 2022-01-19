const data = await fetch('./datos/datos.JSON');
const morse = await data.json();
export const traductor = function(input,traduccion){
    let arregloMorse = [];
    morse.forEach(e => {
        e.latino.forEach(letra => {arregloMorse.push(letra)});
        e.numeros.forEach(numero => {arregloMorse.push(numero)});
        e.puntuacion.forEach(punto => {arregloMorse.push(punto)
        });    });
let textoTraducido = "";
    switch (traduccion) {
        case 'textoMorse':
                for (let i = 0; i < input.length; i++) {
                    arregloMorse.map((e)=>{
                    if ( (e.letra)  == input[i]) {
                        textoTraducido += e.codigo;
                    }   })
                textoTraducido += "  ";
                }
        return textoTraducido
        case 'morseTexto':
            
        break;
        case 'textoBraile':
                for (let i = 0; i < input.length; i++) {
                    arregloMorse.map((e)=>{
                    if ( (e.letra)  == input[i]) {
                        textoTraducido += `<img style="margin:2px" src="${e.braille}">`;
                    }   })
                if (input[i] === " ") {
                    textoTraducido += `<img src="./imagenes/braille/espacio.svg">`;
                }   }
        return textoTraducido
}   }