const contenedorFiguras = document.querySelector("#contenedor-figuras");
const colores = ["#ADDCCA", "#DCEBC2", "#FED2B7", "#F7A8A4", "#F58A94"];

const CrearFiguras = (numeroDeFiguras) => {
    let colorAsignado = 0;
    for (i = 0; i < numeroDeFiguras; i++){

        let figura = document.createElement("div");
        figura.innerHTML = 1+1;
        figura.style.backgroundColor = colores[colorAsignado];
        colorAsignado += 1;
        colorAsignado = colorAsignado == colores.length ? 0 : colorAsignado;
        figura.classList.add("figura");
            contenedorFiguras.appendChild(figura);
    }
};

let velocidadDrag = 1;
var botonPresionado = false;
let mousePosX = 0;

contenedorFiguras.addEventListener("mousedown", (e) => {
    botonPresionado = true;
    mousePosX = e.pageX;
    velocidadDrag = parseInt(document.querySelector("#slider-velocidad").value);
    document.documentElement.style.cursor = "grab";
});

contenedorFiguras.addEventListener("mouseup", () => {
    botonPresionado = false;
    document.documentElement.style.cursor="default";
});

contenedorFiguras.addEventListener("mouseleave", () => {
    botonPresionado = false;
    document.documentElement.style.cursor ="default";
})

contenedorFiguras.addEventListener("mousemove", (e) => {
    if(!botonPresionado) return;
    let distanciaRecorrida = (mousePosX - e.pageX) * velocidadDrag;
    contenedorFiguras.scrollLeft += distanciaRecorrida;
    mousePosX = e.pageX;
});

CrearFiguras(100);