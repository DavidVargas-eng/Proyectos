let divScroll = document.querySelector('.divScroll');
let tabla = document.createElement('table');
let scrollResultados = document.querySelector('.scrollResultados');
let input = document.querySelector('.inputBusqueda');
let btnMarcar = document.querySelector('.marcar');
let btnDesmarcar = document.querySelector('.desmarcar');
let arr = [];

//CARGA DE DATOS AL LOCAL STORAGE
if (localStorage.length == 0) {
    alert("se cargaron los datos")
const res = await fetch("./src/NivelesDeAceso.json");
const data = await res.json();
localStorage.setItem("niveles",JSON.stringify(data));
    const accesoTotal = await fetch("./src/AccesoTotal.json");
    const datosaccesoTotal = await accesoTotal.json();
    localStorage.setItem("acceso",JSON.stringify(datosaccesoTotal));
const otros = await fetch("./src/otros.json");
const datosotros = await otros.json();
localStorage.setItem("otros",JSON.stringify(datosotros));
    const cordinadora = await fetch("./src/CoordinadoraDeCalidad.json");
    const datosCordinadora = await cordinadora.json();
    localStorage.setItem("cordinadora",JSON.stringify(datosCordinadora));
}
//DESCARGA DE DATOS LOCAL STORAGE
let cordinadora1 = JSON.parse(localStorage.getItem("cordinadora"))
let niveles = JSON.parse(localStorage.getItem("niveles"))
let acceso = JSON.parse(localStorage.getItem("acceso"))
let otros1 = JSON.parse(localStorage.getItem("otros"))

//FILTRAR DATOS LADO IZQUIERDO
document.addEventListener('DOMContentLoaded',filtro())
input.addEventListener('keyup',()=>{
    document.removeEventListener('DOMContentLoaded',filtro());
    filtro()
})
function filtro() {
    let divs = Array.from(document.querySelectorAll('.divElemento'));
    divs.map((div)=>div.remove(this))
    if (input.value == "") {
        niveles.forEach(element => {
            llenarindice(element);
        });
    } else {
        niveles.forEach(element => {
            let cuenta = element.Descripcion.substr(0,input.value.length).toLowerCase()
            if (cuenta == input.value.toLowerCase()) {
                llenarindice(element);
            }
        });
    }
}
//FUNCION LLENADO DE INDICE LADO IZQUIERDO
function llenarindice(element) {
    let divElemento = document.createElement('div');
    divElemento.classList.add('divElemento');
    let descripcion = document.createElement('p');
    descripcion.classList.add('descripcion');
    descripcion.textContent=element.Descripcion;
    let cantidad = document.createElement('p');
    cantidad.classList.add('cantidad');
    cantidad.textContent=element.Cantidad;
        divScroll.append(divElemento)
        divElemento.append(descripcion,cantidad);
        divElemento.addEventListener('click',()=>{
            llenar(element.Descripcion == "Coordinadora de Calidad" ? cordinadora1 : element.Descripcion == "Acceso Total - Descripción" ? acceso : otros1)
        })
}
//LLENADO DE TABLA LADO DERECHO
let aux1;
let checks;
function llenar(aux) {
    aux1 = aux;
    let imgfondo = document.querySelector('.imagenFondo');
    let textofondo = document.querySelector('.textoFondo');
    imgfondo.style.display="none";
    textofondo.style.display="none";
    tabla.classList.add('tabla');
    scrollResultados.append(tabla);
    tabla.innerHTML= `
    <tr>
    <th></th>
    <th>Nombre</th>
    <th>Loggin</th>
    <th>Homologación</th>
    </tr>
    <tr><td></td></tr>
    `;
    for (let i = 0; i < aux.length; i++) {
        let homo = aux[i].Homologacion == null ? "" : aux[i].Homologacion == false ? "" : "Pendiente";
        let check = aux[i].Homologacion == null ? "" : aux[i].Homologacion == false ? "" : "checked" ;
        tabla.innerHTML += `
            <tr>
            <td><input type="checkbox" class="check" id="${aux[i].Id}" ${check}></td>
            <td>${aux[i].Nombre}</td>
            <td>${aux[i].Loggin}</td>
            <td style="color: green;">${homo}</td>
            </tr>`;
    }
    checks = Array.from(document.querySelectorAll('.check'));
    checks.map((check)=>{
        check.addEventListener('change',()=>marcarindividual(check))
    });
}
//MARCAR O DESMARCAR INDIVIDUALMENTE
function marcarindividual(v) {
arr = [];
aux1.forEach(element => {
    if (element.Id == v.id) {
        element.Homologacion = element.Homologacion == false ? true : element.Homologacion == true ? false : true;
    }
    let obj ={
        "Id": element.Id,
        "Nombre": element.Nombre,
        "Loggin": element.Loggin,
        "Descripcion": element.Descripcion,
        "Homologacion": element.Homologacion
    }
    arr.push(obj)
});
actualizar(arr);
}
//BOTON MARCAR Y DESMARCAR TODOS
btnMarcar.addEventListener('click',()=>marcar(true))
btnDesmarcar.addEventListener('click',()=>marcar(false))
function marcar(ck) {
    checks.map((check)=>{
        check.checked = ck;
    })
    arr = [];
    aux1.forEach(element => {
        element.Homologacion = ck;
        let obj ={
            "Id": element.Id,
            "Nombre": element.Nombre,
            "Loggin": element.Loggin,
            "Descripcion": element.Descripcion,
            "Homologacion": element.Homologacion
        }
        arr.push(obj)
    });
    actualizar(arr);
}

//ACTUALIZAR DATOS LOCALSTORAGE
function actualizar(arr) {
    let clavetemp = aux1 == cordinadora1 ? "cordinadora" : aux1 == acceso ? "acceso" : "otros";
    localStorage.setItem(clavetemp,JSON.stringify(arr))
    llenar(aux1);
}


////modificar