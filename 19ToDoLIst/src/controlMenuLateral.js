// CONTROLADOR MENU LATERAL VERSION DE ESCRITORIO Y MOVIL /////
export const controlMenuLateral = function (sectionCompletados,sectionEnProceso,sectionPendientes) {
    Array.from(document.querySelectorAll('.divItemMenu')).map((boton) => {
        let divHover = document.createElement('div');
        divHover.classList.add('divHover');
        divHover.innerHTML = `<p>${boton.id}</p>`;
        boton.addEventListener('mouseenter', () => {
            boton.classList.toggle('divItemActivo')
            boton.append(divHover);
        })
        boton.addEventListener('mouseleave', () => {
            boton.classList.toggle('divItemActivo')
            divHover.remove(this)
        })
        boton.addEventListener('click', () => {
            const mainAgregar = document.querySelector('.mainAgregar');
            const mainPrincipal = document.querySelector('.mainPrincipal');
            const mainHome = document.querySelector('.mainHome');
            sectionCompletados.style.display = "block";
            sectionEnProceso.style.display = "flex";
            sectionPendientes.style.display = "block";
            mainPrincipal.style.display = "flex";
            mainAgregar.style.display = "flex";
            mainHome.style.display = "none";
            switch (boton.id) {
                case "Agregar Nuevo":
                    mainPrincipal.style.display = "none";
                    break;
                case "Ver Todos":
                    mainAgregar.style.display = "none";
                    break;
                case "Pendientes":
                    mainAgregar.style.display = "none";
                    sectionEnProceso.style.display = "none";
                    sectionCompletados.style.display = "none";
                    break;
                case "Completados":
                    mainAgregar.style.display = "none";
                    sectionEnProceso.style.display = "none";
                    sectionPendientes.style.display = "none";
                    break;
                case "En Proceso":
                    sectionPendientes.style.display = "none";
                    sectionCompletados.style.display = "none";
                    mainAgregar.style.display = "none";
                    break;
                case "Inicio":
                    mainAgregar.style.display = "none";
                    mainPrincipal.style.display = "none";
                    mainHome.style.display = "flex";
                    break;
            }
        })
    })
// VERSION MOVIL /////////////////////////////////////
const menu = document.querySelector('.asideMenu')
const menuMovil = document.querySelector('.divItemMenu1');
const menuWhite = document.querySelector('.divItemMenu2')
menuMovil.addEventListener('click', () => {
    menu.classList.add('mostrar');
    menuWhite.classList.add('mostrar');
})
menuWhite.addEventListener('click', () => {
    menu.classList.remove('mostrar');
    menuWhite.classList.remove('mostrar');
})
}