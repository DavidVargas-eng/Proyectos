import { codigoMorse } from './codigoMorse.js'
import { sistemaBraille } from './sistemaBraile.js'
import { traductor } from './Traductor.js'

const principal = document.querySelector('.principal');
const menuLateral = document.querySelector('.menu');

import { textoMorse } from './textoMorse.js'
import { textoBraille } from './textoBraille.js'
import { brailleTexto } from './brailleTexto.js'
import { morseTexto } from './morseTexto.js'

import { ModoOscuroClaro } from './modoOscuroClaro.js'

document.querySelector('.menuMobil').addEventListener('click', () => {    menuLateral.style.display = menuLateral.style.display == 'block' ? 'none' : 'block';  })

Array.from(document.querySelectorAll('.opcionMenu')).map((m) => {
    m.addEventListener('click', () => {
        switch (m.id) {
            case 'morse':
                principal.innerHTML = codigoMorse();
                let botonesMorse = Array.from(document.querySelectorAll('.btnMorse'))
                botonesMorse.map((m) => {
                    m.addEventListener('click', () => {
                        switch (m.id) {
                            case "txtMorse":
                                principal.innerHTML = textoMorse();
                                break;
                            case "morseTxt":
                                principal.innerHTML = morseTexto();
                                break;
                        }
                    })                })
                break;
            case 'textoMorse':
                principal.innerHTML = textoMorse();
                document.querySelector('.btnTraducirTxtMorse').addEventListener('click', () => {
                    document.querySelector('.salidaMorse').value = traductor((document.querySelector('.entradaTexto').value).toUpperCase(), 'textoMorse');
                })
                document.querySelector('.btnAudioMorse').addEventListener('click', () => {
                    console.log("click")//audio del codigo morse
                })
                break;
            case 'morseTexto':
                principal.innerHTML = morseTexto();
                break;
            case 'braile':
                principal.innerHTML = sistemaBraille();
                let botonesBraille = Array.from(document.querySelectorAll('.btnBraille'))
                botonesBraille.map((m) => {
                    m.addEventListener('click', () => {
                        switch (m.id) {
                            case "txtBraille":
                                principal.innerHTML = textoBraille();
                                break;
                            case "brailleTxt":
                                principal.innerHTML = brailleTexto();
                                break;
                        }
                    })                })
                break;
            case 'textoBraile':
                principal.innerHTML = textoBraille();
                document.querySelector('.btnTraducirTxtBraille').addEventListener('click', () => {
                    document.querySelector('.salidaBraille').innerHTML = traductor((document.querySelector('.entradaTexto').value).toUpperCase(), 'textoBraile');
                })
                break;
            case 'braileTexto':
                principal.innerHTML = brailleTexto();
                Array.from(document.querySelectorAll('.imgBraille')).map((b)=>{
                    b.addEventListener('click',()=>{
                        document.querySelector('.entradaTexto').innerHTML += b.id;
                    })
                document.querySelector('.btnEspacio').addEventListener('click',()=>{
                    document.querySelector('.entradaTexto').innerHTML += " ";
                })                })
                break;
            case 'modo':
                ModoOscuroClaro();
                break;
            case 'sonido':
                principal.innerHTML = sonido();
                break;
        }
    })  })