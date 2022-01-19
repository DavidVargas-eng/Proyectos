const mone = await fetch("./src/moneda.JSON");
const moneda = await mone.json();
let inmoneda = document.querySelector('#tipoMoneda');
moneda.forEach(e => {
    inmoneda.innerHTML += `<option value="${e.codigo}">${e.descripcion}</option>`
});
//REALIZA LA CONSULTA APLICANDO LOS FILTROS
let fecha;
let btn_consultar = document.querySelector('.btnConsultar');
let otrosFiltros = document.querySelector('.sectionOtrosFiltros');
btn_consultar.addEventListener('click', () => {
    let fechaFinal = document.querySelector('#fechaFinal');
    fecha = fechaFinal.value;
    if (fechaInicio.value > fechaFinal.value) {
        if (fechaFinal.value == "") {
            let now = new Date;
            fecha = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`
            carga();
            setTimeout(() => {
                fondo_carga.remove(this);
                otrosFiltros.style.display = "none";
                btnFiltrar.style.display = "block"
                btnGenerar.style.display = "block"
                btn_consultar.style.display = "none";
                filtrar();
                llenartabla();
            }, 1500);
        } else {
            alert("La fecha inicial no puede ser mayor a la fecha final")
        }
    } else {
        carga();
        setTimeout(() => {
            fondo_carga.remove(this);
            otrosFiltros.style.display = "none";
            btnFiltrar.style.display = "block"
            btnGenerar.style.display = "block"
            btn_consultar.style.display = "none";
            filtrar();
            llenartabla();
        }, 1500);
    }
})
//VOLVER A LA PANTALLA DE FILTROS Y RESETEA LOS INPUTS
let scroll = document.querySelector('.scroll');
let btnFiltrar = document.querySelector('.btnFiltrar');
btnFiltrar.addEventListener('click', () => {
    otrosFiltros.style.display = "flex";
    btnFiltrar.style.display = "none"
    btnGenerar.style.display = "none"
    btn_consultar.style.display = "block";
    scroll.style.display = "none";
    inputOrdenFacturacion.value = "";
    inputCliente.value = "";
    inputModeloNegocio.value = "";
    fechaInicio.value = "";
    fechaFinal.value = "";
})
//IMPRIMIR LOS DATOS DE LA TABLA EMERGENTE
let arr = [];
let tabla2 = document.createElement('table');
tabla2.classList.add('tabla2');
let btnGenerar = document.querySelector('.btnGenerar');
btnGenerar.addEventListener('click', () => {
    if (btnGenerar.classList.contains('inactivo') == false) {
        fondo2.style.display = "block"
        generar.style.display = "block";
        generar.append(tabla2)
        tabla2.innerHTML = `
        <th>Orden de facturación</th>
        <th>Tipo documento</th>
        <th>Factura</th>
        <th>Valor</th>
        <th>Ver</th>`
        arr.forEach(e => {
            tabla2.innerHTML += `
            <td>${e.clienteCodigo}</td>
            <td>${e.clienteIdentificacion}</td>
            <td>${e.codigoOrdenDeFacturacion}</td>
            <td>$${cambioMoneda(e.valorTotalACobrar)}</td>
            <td>
            <div class="ico_documentos">
            <img class="imgFactura" src="imagenes/ico_documentPdfgreen.svg">
            <img class="imgFactura" src="imagenes/ico_documentWordgreen.svg">
            </div>
            </td>`
        });
    }
})
//ANIMACION DE CARGA
let fondo_carga = document.createElement('div');
function carga() {
    fondo_carga.classList.add('fondoCarga');
    document.body.append(fondo_carga);
    let externo = document.createElement('div');
    externo.classList.add('externo');
    let interno = document.createElement('div');
    interno.classList.add('interno');
    fondo_carga.append(externo, interno);
}
//IMPRIMIR LOS DATOS FILTRADOS EN LA TABLA
let tabla = document.createElement('table');
tabla.classList.add('tabla');
scroll.append(tabla);
function llenartabla(cliente) {
    let fact = cliente.asociarAnticipo != "" ? '<img src="imagenes/ico_factura.svg"></img>' : ""
    tabla.innerHTML += `
        <tr id"${cliente.codigoOrdenDeFacturacion}">
        <td>
            <div class="ico_documentos">
                <img class="imgFactura" src="imagenes/ico_documentPdfgreen.svg">
                <img class="imgFactura" src="imagenes/ico_documentWordgreen.svg">
            </div>
        </td>
        <td>${cliente.codigoOrdenDeFacturacion}</td>
        <td class="celdaFecha">${cliente.fechaRegistro.substr(0, 10)}</td>
        <td class="celdaCliente">${cliente.clienteCodigo} - ${cliente.clienteNombre.substr(0, 20)}</td>
        <td class="celdaNegocios">${cliente.modeloNegocio}</td>
        <td class="celdaDescripcion">${cliente.descripcionOrdenFacturacion.substr(0, 58)}</td>
        <td>
            <select id="${cliente.codigoOrdenDeFacturacion}" class="formaPago">
            <option value=0>--- SELECCIONAR ---</option>
            <option value=1>7 dias</option>
            <option value=2>15 dias</option>
            <option value=3>20 dias</option>
            <option value=4>30 dias</option>
            </select>
        </td>
        <td>${cliente.fechaVencimiento}</td>
        <td class="cambio_moneda">$${cambioMoneda(cliente.valorTotalACobrar)}</td>
        <td>$${cliente.valorAnticipo}</td>
        <td>${fact}</td>
        <td><div id="c${cliente.codigoOrdenDeFacturacion}" class="divCheck"></div></td>
        </tr>`
}
//CERRAR LA TABLA EMERGENTE
let ico_cerrar = document.querySelector('.ico_cerrar');
let fondo2 = document.querySelector('.body2');
let generar = document.querySelector('.principal');
ico_cerrar.addEventListener('click', () => {
    fondo2.style.display = "none";
    generar.style.display = "none";
});
//IMPRIMIR TITULOS DE LA TABLA Y FILTRAR INFORMACION A MOSTRAR
let inputOrdenFacturacion = document.querySelector('.ordenFacturacion');
let inputCliente = document.querySelector('.cliente');
let inputModeloNegocio = document.querySelector('.ModeloNegocio');
let fechaInicio = document.querySelector('#fechaInicio');
const clie = await fetch("./src/clientes.JSON");
const clientes = await clie.json();
function filtrar() {
    tabla.innerHTML = '';
    scroll.style.display = "block"
    tabla.innerHTML += `
        <th>Ver</th>
        <th>Orden de Facturación</th>
        <th>Fecha registro</th>
        <th>Cliente</th>
        <th>Modelo de negocio</th>
        <th>Descripción</th>
        <th>Forma de pago</th>
        <th>Fecha de vencimiento</th>
        <th>Valor total a cobrar</th>
        <th>Valor anticipo</th>
        <th>Asociar anticipo</th>
        <th><img src="imagenes/ico_checkInactive.svg"></th>`
    let x = 0;
    clientes.forEach(cliente => {
        if (cliente.fechaRegistro >= fechaInicio.value && cliente.fechaRegistro.substr(0, 10) <= fecha || cliente.codigoOrdenDeFacturacion == inputOrdenFacturacion.value || cliente.clienteCodigo == inputCliente.value || cliente.modeloNegocio.indexOf(inputModeloNegocio.value)) { llenartabla(cliente) }
        else if (fechaInicio.value == "" && fechaFinal.value == "" && inputOrdenFacturacion.value == "" && inputCliente.value == "" && inputModeloNegocio.value == "") {
            llenartabla(cliente)
        } else {
            x++;
        }
    });
    if (x == clientes.length) { alert("No se encontraron resultados") }
    let selects = Array.from(document.querySelectorAll('.formaPago'))
    selects.map((select) => {
        select.addEventListener('change', () => {
            let check = document.getElementById(`c${select.id}`);
            clientes.forEach(e => {
                if (select.id == e.codigoOrdenDeFacturacion) {
                    arr.push(e);
                }
            });
            if (select.value != 0) {
                btnGenerar.classList.remove('inactivo');
                check.classList.add('divChecked');
            } else {
                btnGenerar.classList.add('inactivo');
                check.classList.remove('divChecked');
            }
        })
    })
}
//CAMBIAR EL VALOR DE LAS MONEDAS
function cambioMoneda(e) {
    let TotalMoneda = 
    inmoneda.value == 2 ? Math.round(e*0.00026) + " USD":
    inmoneda.value == 3 ? Math.round(e*0.00023) + " EUR":
    inmoneda.value == 4 ? Math.round(e*0.00027) + " PAB":
    inmoneda.value == 5 ? Math.round(e*0.00019) + " GBP":
    inmoneda.value == 6 ? Math.round(e*0.0054) + " MXN":
    inmoneda.value == 7 ? Math.round(e*0.0010) + " PEN":
    inmoneda.value == 8 ? Math.round(e*0.00110977) + " VEZ":
    inmoneda.value == 9 ? Math.round(e*0.015) + " DOP":
    inmoneda.value == 10 ? Math.round(e*0.0017) + " CNY":
    inmoneda.value == 11 ? Math.round(e*1.82) + " PYG":
    inmoneda.value == 12 ? Math.round(e*0.00024) + " CHF":
    inmoneda.value == 13 ? Math.round(e*0.00033) + " CAD":
    Math.round(e) + " COP";
    return TotalMoneda;
}