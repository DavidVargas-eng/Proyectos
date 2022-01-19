//LLENADO DE TARJETAS LADO IZQUIERDO
document.querySelector('#scrollTarjetas').innerHTML+=`
    <div class="tarjeta tarjeta--activa">
    <strong>Id:<p>869</p></strong>
    <strong>Radicado:<p>875</p></strong>
    <h2>FACTURA DE SERVICIOS</h2>
    <strong class="textoAncho">Proveedor:<p>Proveedor</p></strong>
    <strong class="textoAncho">Actividad:<p>875</p></strong>
    <strong class="textoAncho">Vencimiento:<p class="rojo">20/01/2020</p></strong>
    </div>`
for (let index = 0; index < 10; index++) {
    document.querySelector('#scrollTarjetas').innerHTML+=`
        <div class="tarjeta tarjeta">
        <strong>Id:<p>87${index}</p></strong>
        <strong>Radicado:<p>875</p></strong>
        <h2>FACTURA DE SERVICIOS</h2>
        <strong class="textoAncho">Proveedor:<p>Proveedor${index}</p></strong>
        <strong class="textoAncho">Actividad:<p>875</p></strong>
        <strong class="textoAncho">Vencimiento:<p>20/01/2021</p></strong>
        </div>`}
//LLENADO DE ARCHIVOS ADJUNTOS
for (let index = 0; index < 5; index++) {
    document.querySelector('.visorAdjuntos').innerHTML+=`
        <div class="Adjunto">
        <p>Archivo Adjunto${index+1}</p>
        <img src="imagenes/iconoBorrar.svg">
        </div>`}
//LLENADO DE FILTROS ACTIVOS
for (let index = 0; index < 5; index++) {
    document.querySelector('.visorFiltros').innerHTML+=`
        <div class="Adjunto">
        <p>Filtro${index+1}</p>
        <img src="imagenes/iconoBorrar.svg">
        </div>`}
//LLENADO DE DATOS DE ACTIVIDAD
document.querySelector('.visorDatosActividad').innerHTML=`
    <strong class="textoInformacion">PASO:<p>1</p></strong>
    <strong class="textoInformacion">CORRESPONDENCIA:<p>896</p></strong>
    <strong class="textoInformacion">RADICADO:<p>FAC00037</p></strong>
    <strong class="textoInformacion">DESCRIPCIÓN:<p>FACTURAS DE SERVICIOS</p></strong>
    <strong class="textoInformacion">ACTIVIDAD:<p>ASOCIAR ACTAS Y ENTRADAS (ADPRO)</p></strong>`
//EVENTOS DE LAS PESTAÑAS
document.querySelector('#Observaciones').addEventListener('click',()=>{
    document.querySelector('.areaTrabajo').innerHTML= `
    <section class="observaciones">
    <aside class="observaciones__formulario">
    <h1>OBSERVACIONES</h1>
    <strong>VER SEGUIMIENTOS<img id="seguimientos" src="imagenes/iconoSeguimientos.svg"></strong>
    <strong>REASIGNAR<img src="imagenes/iconoReasignar"></strong>
    <div>
    <strong>Observaciones:</strong>
    <textarea class="input--bordes" rows="10" placeholder="Máximo 2.500 caracteres."></textarea>
    </div>
    <strong>Actividad:</strong>
    <p>(2) Revisar concepto y valor</p>
    <strong>Usuario:</strong>
    <select class="input--bordes">
    <option>Raul Suarez</option>
    <option>Hellen Umañana</option>
    <option>Monica Rodriguez</option>
    <option>Lorena Cardenas</option>
    <option>Admin Sincosoft</option>
    </select>
    <strong>Acción:</strong>
    <select class="input--bordes">
    <option>Completar</option>
    <option>Cancelar</option>
    <option>Rechazar</option>
    </select>
    <button class="boton boton--ejecutarActividad">Ejecutar actividad</button>
    </aside>    </section>`})
document.querySelector('#Descriptores').addEventListener('click',()=>{
    document.querySelector('.areaTrabajo').innerHTML= `                        
    <aside class="descriptores">
    <h1>DESCRIPTORES</h1>
    <strong>Proveedor<p>*</p></strong>
    <select class="input--bordes"></select>
    <strong>Consecutivo factura de proveedor<p>*</p></strong>
    <select class="input--bordes"></select>
    <strong>Fecha de factura<p>*</p></strong>
    <select class="input--bordes"></select>
    <strong>Valor total del documento<p>*</p></strong>
    <select class="input--bordes"></select>
    <strong>Obras por usuario<p>*</p></strong>
    <select class="input--bordes"></select>
    <strong>Contrato de obra<p>*</p></strong>
    <select class="input--bordes"></select>
    <strong>Acta de obra<p>*</p></strong>
    <select class="input--bordes"></select>
    <strong>Entrada de almacén</strong>
    <select class="input--bordes"></select>
    <button class="boton--descriptores boton">Guardar Descriptores</button>
    <button class="boton--mas boton">+</button>
    </aside> `;})
document.querySelector('#Respuesta').addEventListener('click',()=>{
    document.querySelector('.areaTrabajo').innerHTML= `<iframe src="https://desarrollo.sincoerp.com/SincoPlusDesarrolloASP/V3/SGD/Spa/index.html/correspondenciasSaliente/respuestaEntrante/896"></iframe>`;})
document.querySelector('#Agregar').addEventListener('click',()=>{
    document.querySelector('.areaTrabajo').innerHTML= `<iframe src="https://desarrollo.sincoerp.com/SincoPlusDesarrolloASP/V3/SGD/Spa/index.html/correspondenciasSaliente/respuestaEntrante/896"></iframe>`;})
document.querySelector('#Asociación').addEventListener('click',()=>{
    document.querySelector('.areaTrabajo').innerHTML= ``;})
document.querySelector('#seguimientos').addEventListener('click',()=>{
    console.log("seguimientos");})
document.querySelector('#reasignar').addEventListener('click',()=>{
    console.log("reasignar");})
/*
<aside class="observaciones__informacion">
<table>
<h1>SEGUIMIENTOS</h1>
<tr>
<th>Paso</th>
<th>Actividad del flujo</th>
<th>Estado</th>
<th>Usuarios</th>
<th>Observaciones</th>
</tr>
<tr>
<td>0</td>
<td>Registro de Correspondencia</td>
<td>Registrado</td>
<td>Admin Sincosoft
27/05/2021 11:04:17</td>
<td>FACTURAS DE SERVICIOS</td>
</tr>
<tr>
<td>1</td>
<td>Asociar actos y entradas (ADPRO)</td>
<td>Pendiente</td>
<td>Admin Sincosoft
27/05/2021 11:04:17</td>
<td></td>   </tr>   </table>
<table>
<h1>CORRESPONDENCIA ASOCIADA</h1>
<tr>
<th>Id</th>
<th>Radicado</th>
<th>Tipo Correspondencia</th>
<th>Asunto</th>
</tr>
<tr>
<td colspan="2">No tiene correspondencia asociada</td>
</tr>
</table>
</aside>
*/