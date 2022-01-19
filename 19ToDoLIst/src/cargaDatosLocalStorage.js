// CARGA DE DATOS AL LOCAL STORAGE DESDE EL ARCHIVO datos.json
export const cargaDatosLocalStorage = async function() {
    if (localStorage.length == 0) {
        const data = await fetch("././datos/datos.json");
        const pomodorosdata = await data.json();
        pomodorosdata.forEach(temp => localStorage.setItem(localStorage.length + 1, JSON.stringify(temp)));
        localStorage.setItem("Aldamo","AldamoGroup")
        window.location.reload(true);
    }else{
        if (localStorage.getItem("Aldamo") != "AldamoGroup") {
            localStorage.clear();
            window.location.reload(true);
        }
    }
}