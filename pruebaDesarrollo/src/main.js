const proyectos1 = await fetch("./datos/proyectos.JSON");
const proyectos = await proyectos1.json()

const opcionesMenu = Array.from(document.querySelectorAll('.menu__item')).map((boton)=>{
    boton.addEventListener('click',()=>{
        boton.classList.add('menu__item--activo')
        mostrarResultadosProyectos(boton.id)
    })
})

function mostrarResultadosProyectos(estado) {
    document.querySelector('#resultados__titulo').textContent=estado;
    document.querySelector('#listaResultados').innerHTML=``;
    proyectos.forEach(proyecto => {
        if (proyecto.estado == estado) {
            document.querySelector('#listaResultados').innerHTML+=`
                <div class="listado__item">
                <img class="item__imagenLista" src="imagenes/icono_indice.svg">
                ${proyecto.subproyectos != 0 ? '<button class="item__boton">+</button>' 
                    : '<img class="item__imagenLista" src="imagenes/icono_subindice.svg">'}
                <p class="item__texto">${proyecto.proyecto}</p>
                </div>`;
        }
    });
}