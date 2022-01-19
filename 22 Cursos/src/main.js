const datosCursos = await fetch("./datos/cursos.JSON");
const cursos = await datosCursos.json()

cursos.forEach(curso => {
    document.querySelector('#contenedorCursos').innerHTML+=`
    <div class="tarjetaCurso">
    <img src="${curso.icono}" alt="icono curso">
    <h3>${curso.titulo}</h3>
    </div>`
});