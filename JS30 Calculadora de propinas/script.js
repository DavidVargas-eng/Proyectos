let crear = function (dato, tipo, nombre) {
    let element = document.createElement(dato);
    element.setAttribute(tipo, nombre);
    return element;
}

let principal = crear("main", "class", "principal");
document.body.append(principal);

    let aside_botones = crear("aside", "class", "aside_botones");
        let section_bill = crear("section", "class", "section_bill");

    aside_botones.append(section_bill);

            let txt_bill = crear("strong", "class", "txt_bill");
            txt_bill.innerText = "Bill";

            let input_bill = crear("input", "class", "input_bill");
            section_bill.append(txt_bill, input_bill);

        let section_botones = crear("section", "class", "section_botones");
        aside_botones.append(section_botones);

            let txt_botones = crear("strong", "class", "txt_botones");
            txt_botones.innerText = "Select Tip %";
            section_botones.append(txt_botones);

            let boton1 = crear("button", "class", "boton1");
            boton1.innerText = "5%";

            let boton2 = crear("button", "class", "boton2");
            boton2.innerText = "10%";

            let boton3 = crear("button", "class", "boton3");
            boton3.innerText = "15%";

            let boton4 = crear("button", "class", "boton4");
            boton4.innerText = "25%";

            let boton5 = crear("button", "class", "boton5");
            boton5.innerText = "50%";

            let custom = crear("input", "class", "custom");
            custom.placeholder = "Custom";
            section_botones.append(boton1, boton2, boton3, boton4, boton5, custom);

        let section_numberPeople = crear("section", "class", "section_numberPeople");
        aside_botones.append(section_numberPeople);

            let txt_numberPeoples = crear("strong", "class", "txt_numberPeoples");
            txt_numberPeoples.innerText = "Number of People";

            let input_numberPeoples = crear("input", "class", "input_numberPeoples");
            section_numberPeople.append(txt_numberPeoples, input_numberPeoples);

    let aside_total = crear("aside", "class", "aside_total");
    principal.append(aside_botones, aside_total);

        let section_numeros = crear("section", "class", "section_numeros");
        aside_total.append(section_numeros);

            let div_tip = crear("div", "class", "div_tip");
            let div_total = div_tip.cloneNode();
            section_numeros.append(div_tip, div_total);

                let div1 = crear("div", "class", "div");
                let div2 = div1.cloneNode();
                div_tip.append(div1);
                div_total.append(div2);

                    let txt_tip = crear("strong", "class", "txt_tip");
                    let txt_total = txt_tip.cloneNode();
                    let txt_person = crear("strong", "class", "txt_person");
                    let txt_person2 = txt_person.cloneNode();

                    txt_tip.innerText = "Tip Amount";
                    txt_total.innerText = "Total";
                    txt_person.innerText = "/  person";
                    txt_person2.innerText = "/  person";

                    div1.append(txt_tip, txt_person);
                    div2.append(txt_total, txt_person2);

                    let num_tip = crear("strong", "class", "num_tip");
                    let num_total = num_tip.cloneNode();
                    num_tip.innerText = "$0.00";
                    num_total.innerText = "$0.00";

            div_tip.append(num_tip);
            div_total.append(num_total);

        let section_boton = crear("section", "class", "section_boton");
        aside_total.append(section_boton);

            let boton_reset = crear("button", "class", "boton_reset");
            boton_reset.innerText = "RESET";
            section_boton.append(boton_reset);

function calcular() {
    v_bill = input_bill.value;
    v_number = input_numberPeoples.value;
    v_porcentaje = v_bill*v_aux;     
    aux = v_porcentaje/v_number;
    num_tip.innerText="$"+aux;
    v_persona = v_bill / v_number;
    v_tot =(parseInt(v_persona)+parseInt(aux));
    num_total.innerText="$"+v_tot;
}

boton1.onclick = function () {   v_aux = 0.05;  calcular();    }
boton2.onclick = function () {   v_aux = 0.1;   calcular();    }
boton3.onclick = function () {   v_aux = 0.15;  calcular();    }
boton4.onclick = function () {   v_aux = 0.25;  calcular();    }
boton5.onclick = function () {   v_aux = 0.5;   calcular();    }

boton_reset.onclick = function () { 
    custom.value="";
    input_bill.value="";
    input_numberPeoples.value="";
    num_tip.innerText = "$0.00";
    num_total.innerText = "$0.00";
}

custom.addEventListener("keyup", () => {
    valor=custom.value;
    v_aux = valor / 100;
    calcular(); })
    