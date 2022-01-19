//Funcion crear
let crear = function (dato,tipo,nombre){
    let element = document.createElement(dato);
    element.setAttribute(tipo,nombre);
    return element;
}

//Crear elementos
let fondo = crear ("img","class","fondo");
fondo.src="images/bg-desktop.png";
document.body.append(fondo);

let principal = crear ("main","class","principal");
document.body.append(principal);

let izquierdo = crear ("aside","class","izquierdo");
principal.append(izquierdo);

let iconos = crear ("div","class","iconos");
izquierdo.append(iconos);

let logo = crear ("div","class","logo");
iconos.append(logo);

let img_logo = crear ("img","class","img_logo");
img_logo.src="images/logo.svg";
logo.append(img_logo);

let ico_documento = crear ("div","class","ico_documento");
iconos.append(ico_documento);

let img_documento = crear ("img","class","img_documento");
img_documento.src="images/icon-document.svg"
ico_documento.append(img_documento);

let ico_folder = crear ("div","class","ico_folder");
iconos.append(ico_folder);

let img_folder = crear ("img","class","img_folder");
img_folder.src="images/icon-folder.svg";
ico_folder.append(img_folder);

let ico_upload = crear ("div","class","ico_upload");
iconos.append(ico_upload);

let img_upload = crear ("img","class","img_upload");
img_upload.src="images/icon-upload.svg";
ico_upload.append(img_upload);

let derecho = crear ("aside","class","derecho");
principal.append(derecho);

let div_centrar = crear ("div","class","div_centrar");
derecho.append(div_centrar);

let texto1 = crear ("p","class","texto1");
texto1.innerText = "You`ve used";
div_centrar.append(texto1);

let texto2 = crear ("strong","class","texto2");
div_centrar.append(texto2);

let texto3 = crear ("p","class","texto3");
texto3.innerText = "of your storage";
div_centrar.append(texto3);

let barra = crear ("div","class","barra");
div_centrar.append(barra);

let progreso = crear ("div","class","progreso");
barra.append(progreso);

let bolita = crear ("div","class","bolita");
progreso.append(bolita);

let gigas = crear ("div","class","gigas");
div_centrar.append(gigas);

let cero_gb = crear ("strong","class","cero_gb");
cero_gb.innerText = "0 GB";
gigas.append(cero_gb);

let mil_gb = crear ("strong","class","mil_gb");
mil_gb.innerText = "1000 GB";
gigas.append(mil_gb);

//burbuja flotante con numeros
let burbuja = crear ("div","class","burbuja");
principal.append(burbuja);

let txt_burbuja = crear("strong","class","txt_burbuja");
burbuja.append(txt_burbuja);

// animar numeros /////////////////////////////////////////
let tempo = setInterval(aumento, 10);
let progres = 0;
// funcion para aumentar los numeros
function aumento(){
    if(progres <= 815){  
    let consumido = progres;
    let restante = 1000-progres+" GB";
    progres += 1;  
    texto2.innerText = consumido;
    txt_burbuja.innerText = restante;
    }
}