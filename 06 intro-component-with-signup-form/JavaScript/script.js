let crear = function (dato,tipo,nombre){
    let element = document.createElement(dato);
    element.setAttribute(tipo,nombre);
    return element;}

    let img_fondo = crear ("img","class","img_fondo");
img_fondo.src="../images/bg-intro-desktop.png";
    document.body.append(img_fondo);

let img_fondo_mobile = crear("img","class","img_fondo_mobile")
img_fondo_mobile.src="../images/bg-intro-mobile.png"
    document.body.append(img_fondo_mobile);

let principal = crear ("main","class","principal");
    document.body.append(principal);

let aside_izquierdo = crear ("aside","class","aside_izquierdo");
    principal.append(aside_izquierdo);

let div_textos = crear ("div","class","div_textos");
    aside_izquierdo.append(div_textos);

let h1_titulo = crear ("h1","class","h1_titulo");
h1_titulo.innerText="Learn to code by watching others";
    div_textos.append(h1_titulo);

let p_texto = crear ("p","class","p_texto");
p_texto.innerText="See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.";
    div_textos.append(p_texto);

let aside_derecho = crear ("aside","class","aside_derecho");
    principal.append(aside_derecho);

let div_superior = crear ("div","class","div_superior");
    aside_derecho.append(div_superior);

let txt_superior_s = crear ("strong","class","txt_superior_s");
txt_superior_s.innerText="Try it free 7 days ";
    div_superior.append(txt_superior_s);

let txt_superior_p = crear ("p","class","txt_superior_p");
txt_superior_p.innerText="then $20/mo. thereafter";
    div_superior.append(txt_superior_p);

let section_formulario = crear ("section","class","section_formulario");
    aside_derecho.append(section_formulario);

let input_nombre = crear ("input","class","input_nombre");
input_nombre.placeholder="Name";
    section_formulario.append(input_nombre); 

    let p_nombre = crear ("p","class","p_nombre");
    p_nombre.classList.add("alert");
    p_nombre.innerText="First Name cannot be empty";
    section_formulario.append(p_nombre);

let input_apellido = crear ("input","class","input_apellido");
input_apellido.placeholder="Last Name";
    section_formulario.append(input_apellido); 

    let p_apellido = crear ("p","class","p_apellido");
    p_apellido.classList.add("alert");
    p_apellido.innerText="Last Name cannot be empty";
    section_formulario.append(p_apellido);

let input_email = crear ("input","class","input_email");
input_email.placeholder="e-mail";
input_email.type="email";
    section_formulario.append(input_email); 

    let p_email = crear ("p","class","p_email");
    p_email.classList.add("alert");
    section_formulario.append(p_email);

let input_password = crear ("input","class","input_password");
input_password.placeholder="Password";
input_password.type="password";
    section_formulario.append(input_password); 

    let p_password = crear ("p","class","p_password");
    p_password.classList.add("alert");
    p_password.innerText="Password cannot be empty";
    section_formulario.append(p_password);

let input_boton = crear ("button","class","boton");
input_boton.innerText="CLAIM YOUR FREE TRIAL";
    section_formulario.append(input_boton);

let div_texto = crear ("div","class","div_texto");
    section_formulario.append(div_texto);

let txt_inferior = crear ("p","class","txt_inferior");
txt_inferior.innerText="By clicking the button, you are agreeing to our";
    div_texto.append(txt_inferior);

let txt_inferior2 = crear ("strong","class","txt_inferior2");
txt_inferior2.innerText="Terms and Services";
    div_texto.append(txt_inferior2);

p_nombre.style.display="none";
p_apellido.style.display="none";
p_email.style.display="none";
p_password.style.display="none";

let lista_inputs = Array.from(document.querySelectorAll("input"));
    lista_inputs.map((input) => {
        input.addEventListener("keyup", () => {
            switch (input.placeholder != "Password") {
                case true:

                    let validacion_nombres = new RegExp("^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$");
                    let validacion_correo = new RegExp("[a-zA-Z0-9._-]+@[a-zA-Z]+\.+com");

                   if (input.placeholder == "Name") {
                        if (input.value == "") {
                            p_nombre.style.display = "block";
                            input.classList.remove("error_validacion");
                        }                     
                        else {                            
                            input.classList.add("error_validacion");
                            p_nombre.style.display = "none";
                            if(validacion_nombres.test(input.value)){
                                input.classList.remove("error_validacion");
                            }
                        }
                        
                    } else if (input.placeholder == "Last Name") {
                            if (input.value == "") {
                                input.classList.remove("error_validacion");
                                p_apellido.style.display= "block";
                            }
                            else {
                                input.classList.add("error_validacion");
                                p_apellido.style.display = "none";
                            if(validacion_nombres.test(input.value)){
                                input.classList.remove("error_validacion");
                            }
                        }

                    } else if (input.placeholder == "e-mail") {
                        p_email.style.display = "block";
                        if (input.value == "") {
                            input.classList.remove("error_validacion");
                            p_email.innerText="email cannot be empty";
                        }
                        else {
                            input.classList.add("error_validacion");                            
                            p_email.innerText="Looks like this is not an email";
                        if(validacion_correo.test(input.value)){
                            p_email.style.display = "none";
                            input.classList.remove("error_validacion");
                        }
                    }
                    } break;
                    
                case false:
                    let validacion_password = new RegExp("^([A-Z<>ÑÁÉÍÓÚ.0-9a-z/,:;ñáéíóú@_ -]+[\s]*)+$");
                    if (input.value == ""){
                        p_password.style.display = "block";
                        input.classList.remove("error_validacion");
                    }   else {
                        p_password.style.display = "none";
                        input.classList.add("error_validacion");
                            if (input.value.length < 20 & validacion_password.test(input.value)) {
                                input.classList.remove("error_validacion");
                            }                           
                        }                    
            }
        })
    })