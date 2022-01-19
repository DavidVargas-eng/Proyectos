export const ModoOscuroClaro = function() {
    let documento = document.querySelector('html');
    if (documento.classList.contains('oscuro')) {
        documento.classList.remove('oscuro');
        documento.style.removeProperty('--botonMenuMovil')
        documento.style.removeProperty('--imagenModoClaro')
        documento.style.removeProperty('--imagenSonido')
        documento.style.removeProperty('--colorLetra')
        documento.style.removeProperty('--colorFondo')
        documento.style.removeProperty('--imagenFondo')
        documento.style.removeProperty('--colorBorde')
        documento.style.removeProperty('--colorSombra')
        documento.style.removeProperty('--colorHoverOpciones')
    } else {
        documento.classList.add('oscuro');
        documento.style.setProperty('--botonMenuMovil','url("../imagenes/menuMobilBlanco.svg")');
        documento.style.setProperty('--imagenModoClaro','url("../imagenes/modoclaro.svg")');
        documento.style.setProperty('--imagenSonido','url("../imagenes/audioBlanco.svg")');
        documento.style.setProperty('--colorLetra','#FFF');
        documento.style.setProperty('--colorFondo','#060049');
        documento.style.setProperty('--imagenFondo','url("../imagenes/fondoOscuro.svg")');
        documento.style.setProperty('--colorBorde','#FFF');
        documento.style.setProperty('--colorSombra','none');
        documento.style.setProperty('--colorHoverOpciones','#0268AD');
    }
}