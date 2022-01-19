// contenedor principal de todos los elementos
let principal = document.createElement('main');
principal.setAttribute("class","principal");
document.body.append(principal);

//la imagen del lado izquierdo
let imagen = document.createElement('img');
imagen.setAttribute("class","imagen");
imagen.src="images/drawersrecortada.jpg";
principal.append(imagen);

//el contenido que se encuentra al lado derecho
let contenido = document.createElement('aside');
contenido.setAttribute("class","contenido");
principal.append(contenido);

//la parte superior del contenido que son textos
let texto = document.createElement('section');
texto.setAttribute("class","texto");
contenido.append(texto);

//El titulo del texto
let titulo = document.createElement('p');
titulo.setAttribute("class","titulo");
titulo.innerText = "Shift the overall look and feel by adding these wonderful touches to furniture in your home";
texto.append(titulo);

//El texto principal
let txt = document.createElement('p');
txt.setAttribute("class","txt");
txt.innerText = "Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I,ve got some simple tips to help you make any room feel complete.";
texto.append(txt);

//la parte inferior que contiene los datos y el boton de compartir
let iconos = document.createElement('section');
iconos.setAttribute("class","iconos");
contenido.append(iconos);

//es un contenedor auxiliar para centrar los elementos inferiores
let div_iconos = document.createElement('div');
div_iconos.setAttribute("class","div_iconos");
iconos.append(div_iconos);

//la informacion y foto de michelle
let info = document.createElement('div');
info.setAttribute("class","info");
div_iconos.append(info);

//imagen de michelle
let img_michelle = document.createElement('img');
img_michelle.setAttribute("class","img_michelle");
img_michelle.src="images/avatar-michelle.jpg";
info.append(img_michelle);

//Div auxiliar para ubicar la fecha y el nombre de michelle
let datos = document.createElement('div');
info.append(datos);

//nombre de michelle
let nombre = document.createElement('p');
nombre.setAttribute("class","nombre");
nombre.innerText="Michelle Appleton";
datos.append(nombre);

//fecha
let fecha = document.createElement('p');
fecha.setAttribute("class","fecha");
fecha.innerText="28 Jun 2020";
datos.append(fecha);

//imagen compartir sin estar activa escritorio
let img_compartir = document.createElement('img');
img_compartir.setAttribute("class","img_compartir");
img_compartir.src="images/Icono_Compartir.svg";
div_iconos.append(img_compartir);