export const llenarListaDeTareas = function(sectionCompletados,sectionEnProceso,sectionPendientes) {
    for (let i = 0; i < localStorage.length-1; i++) {
        const p = JSON.parse(localStorage.getItem(i + 1));
        const divPomodoro = document.createElement('div');
        const txtPomodoro = document.createElement('p');
        const txtCantPomodoros = document.createElement('p');
        divPomodoro.classList.add('divPomodoro');
        txtPomodoro.classList.add('txtPomodoro');
        txtCantPomodoros.textContent = p.pomodoros == 1 ? p.pomodoros + " Pomodoro" : p.pomodoros + " Pomodoros";
        txtPomodoro.textContent = p.tarea;
        divPomodoro.append(txtPomodoro);
        divPomodoro.append(txtCantPomodoros);
        const sub = p.subtareas != "" ? "images/CardChecklistOk.svg" : "images/checkno.svg";
        switch (p.estado) {
            case "Pendiente":
                divPomodoro.classList.add('pomodoroPendiente');
                sectionPendientes.append(divPomodoro);
                divPomodoro.id = p.id;
                divPomodoro.innerHTML += `
                    <div id="${p.id}" class="divControles oculto">
                    <img id="borrar${p.id}" class="borrar" src="images/Delete Bin.png">
                    <img class="editar" id="${p.id}" src="images/Edit.png">
                    <img class="subs" id="subtareas${p.id}" src="${sub}">
                    </div>`
                break;
            case "Completado":
                divPomodoro.id = p.id;
                divPomodoro.classList.add('pomodoroCompletado');
                sectionCompletados.append(divPomodoro);
                divPomodoro.innerHTML += `
                    <div id="${p.id}" class="divControles oculto">
                    <img class="borrar" id="borrar${p.id}" class="borrar" src="images/Delete Bin.png">
                    <img class="subs" id="subtareas${p.id}" src="${sub}">
                    </div>`
                break;
            case "Proceso":
                divPomodoro.id = p.id;
                divPomodoro.classList.add('pomodoroProceso');                
                divPomodoro.classList.add('pomodoroProceso');
                divPomodoro.classList.add('e');
                sectionEnProceso.append(divPomodoro);
                divPomodoro.innerHTML += `<img src="${sub}">`
                sectionEnProceso.innerHTML += `
                    <strong class="e tiempoRestante"></strong>
                    <p class="e txtDescripcion">${p.descripcion}</p>
                    <img class="e" id="btnVolume" src="images/volume.svg" alt="volumen">
                    <img class="e" id="btnSubtareas" src="images/flecha.svg" alt="mas">`;
                break
            case "Eliminado":
// INSTERTAR EN LA PAPELERA DE RECICLAJE
                break
        }
    }
}