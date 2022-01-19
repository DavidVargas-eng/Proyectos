let checks = Array.from(document.querySelectorAll('.boton'))

checks.map((check)=>{
    check.addEventListener('click',()=>{
        let inputs = Array.from(document.querySelectorAll('.dis'))
        switch (check.id) {

            case "btnCombustible":
                if (localStorage.getItem("combustible") == "no") {
                    localStorage.setItem("combustible","si")
                    check.src =  './imagenes/botonSi.svg';
                } else {
                    check.src =  './imagenes/botonNo.svg';
                    localStorage.setItem("combustible","no")
                }break;

            case "btnNeumaticos":
                if (localStorage.getItem("neumaticos") == "no") {
                    localStorage.setItem("neumaticos","si")
                    check.src =  './imagenes/botonSi.svg';
                } else {
                    check.src =  './imagenes/botonNo.svg';
                    localStorage.setItem("neumaticos","no")
                }break;

            case "btnMedidores":
                inputs.map((input)=>{
                    if (input.disabled) {
                        localStorage.setItem("medidores","si")
                        check.src =  './imagenes/botonSi.svg';
                        input.disabled = false;
                    } else {
                        localStorage.setItem("medidores","no")
                        check.src =  './imagenes/botonNo.svg';
                        input.disabled = true;
                    }
                })
                break;

            case "btnTarifas":
                inputs.map((input)=>{
                    if (input.disabled) {
                        localStorage.setItem("tarifas","si")
                        check.src =  './imagenes/botonSi.svg';
                        input.disabled = false;
                    } else {
                        localStorage.setItem("tarifas","no")
                        check.src =  './imagenes/botonNo.svg';
                        input.disabled = true;
                    }
                })
                break;
          }
    })
})


document.querySelector('.formulario__informacion').innerHTML=`
<img class="informacion__imagen bordes" src="imagenes/maquinaAmarilla.jpg" alt="equipo a gestionar">
<div class="informacion__Datos bordes">
    <h2>TIPO DE MAQUINA: MAQUINARIA AMARILLA</h2>
<H2>PLACA: 0002927</H2>
</div>`