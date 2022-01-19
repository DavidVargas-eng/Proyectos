let crear = function (dato, atributo, nombre) {
    let element = document.createElement(dato);
    element.setAttribute(atributo, nombre);
    return element;}
//////////////////////////////////////////////////////////
let encabezado = crear("header","class","encabezado");
    document.body.append(encabezado);

    let titulo = crear("h1","class","titulo");
    titulo.innerText="TEMPORIZADOR";
        encabezado.append(titulo);

let principal = crear("main","class","principal");
    document.body.append(principal);

    let div_titulos = crear("section","class","div_titulos");
        principal.append(div_titulos);

        let tit_horas = crear("strong","class","tit_horas");
        tit_horas.innerText="HORAS";
            div_titulos.append(tit_horas);

        let tit_minutos = crear("strong","class","tit_minutos");
        tit_minutos.innerText="MINUTOS";
            div_titulos.append(tit_minutos);

        let tit_segundos = crear("strong","class","tit_segundos");
        tit_segundos.innerText="SEGUNDOS";
            div_titulos.append(tit_segundos);
            

    let div_numeros = crear("section","class","div_numeros");
        principal.append(div_numeros);

        let circulo_horas = crear("div","class","circulo_horas");
            div_numeros.append(circulo_horas);

            let txt_horas = crear("strong","class","txt_horas");
            txt_horas.innerText="00";
                circulo_horas.append(txt_horas);

        let circulo_minutos = crear("div","class","circulo_minutos");
            div_numeros.append(circulo_minutos);

            let txt_minutos = crear("strong","class","txt_minutos");
            txt_minutos.innerText="00";
                circulo_minutos.append(txt_minutos);

        let circulo_segundos = crear("div","class","circulo_segundos");
            div_numeros.append(circulo_segundos);

            let txt_segundos = crear("strong","class","txt_segundos");
            txt_segundos.innerText="00";
                circulo_segundos.append(txt_segundos);


let section_botones = crear("section","class","section_botones");
    document.body.append(section_botones);

    let menos_horas = crear("button","class","menos_horas");
    let mas_horas = crear("button","class","mas_horas");    

    let menos_minutos = menos_horas.cloneNode();
    let mas_minutos = mas_horas.cloneNode();
    let menos_segundos = menos_horas.cloneNode();
    let mas_segundos = mas_horas.cloneNode();

        menos_horas.innerText="-";
        mas_horas.innerText="+";
        menos_minutos.innerText="-";
        mas_minutos.innerText="+";
        menos_segundos.innerText="-";
        mas_segundos.innerText="+";

    let comenzar = crear("button","class","comenzar");
    let reiniciar = crear("button","class","reiniciar");

        comenzar.innerText="Comenzar";
        reiniciar.innerText="Reiniciar";

        section_botones.append(menos_horas,mas_horas,menos_minutos,mas_minutos,menos_segundos,mas_segundos);
        section_botones.append(comenzar,reiniciar)
////////////////////////////////////////////////////////////
function setday(){
    const now = new Date();
        const second = now.getSeconds();
            txt_segundos.innerText=second;
        const min = now.getMinutes();
            txt_minutos.innerText=min;
        const hours = now.getHours();
            txt_horas.innerText=hours;
    }
  //setInterval(setday,1000);
///////////////////////////////////////////////////////////
menos_horas.onclick = function() {txt_horas.innerText -=1;}
menos_minutos.onclick = function() {txt_minutos.innerText -=1;}
menos_segundos.onclick = function() {txt_segundos.innerText -=1;}

mas_horas.onclick = function() { 
    let v_horas = parseInt(txt_horas.innerText);
    v_horas +=1;
    txt_horas.innerText = v_horas;
}

mas_minutos.onclick = function() {
  let v_minutos = parseInt(txt_minutos.innerText);
  v_minutos +=1;
  txt_minutos.innerText = v_minutos;
}

mas_segundos.onclick = function() {
    let v_segundos = parseInt(txt_segundos.innerText);
    v_segundos +=1;
    txt_segundos.innerText = v_segundos;
}

reiniciar.onclick = function() {
    txt_horas.innerText="00";
    txt_minutos.innerText="00";
    txt_segundos.innerText="00";}



//////////////////////////////////////////////////////////
let countDownTimer;  
 
functioncoundown (duracion, display) {​​​​​​​​
clearInterval(countDownTimer);
lettimer = duracion, minutos, segundos;  
countDownTimer = setInterval(function () {​​​​​​​​
minutos = parseInt(timer / 60, 10);
segundos = parseInt(timer % 60, 10);
 
minutos = minutos < 10 ? "0" + minutos : minutos;
segundos = segundos < 10 ? "0" + segundos : segundos;
 
display.textContent = minutos + ":" + segundos;
if (--timer < 0) {​​​​​​​​
timer = duracion;
        }​​​​​​​​
    }​​​​​​​​, 1000);
}​​​​​​​​
 
boton1.onclick = function () {​​​​​​​​
letminutos = 60 * 5, display = tiempo;
coundown (minutos, display);
}​​​​​​​​;
 
boton2.onclick = function () {​​​​​​​​
letminutos = 60 * 15, display = tiempo;
coundown (minutos, display);
}​​​​​​​​;
 
boton3.onclick = function () {​​​​​​​​
letminutos = 60 * 30, display = tiempo;
coundown (minutos, display);
}​​​​​​​​;
 
boton4.onclick = function () {​​​​​​​​
letminutos = 60 * 60, display = tiempo;
coundown (minutos, display);
}​​​​​​​​;
 
input_per.addEventListener("keydown", () => {​​​​​​​​
letminutos = 60 * (input_per.value), display = tiempo;
coundown (minutos, display);
}​​​​​​​​)