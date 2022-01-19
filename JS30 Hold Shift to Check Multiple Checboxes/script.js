const checkboxes = document.querySelectorAll('input[type="checkbox"]');

let ultimoCheck;
function controladorCheck(event) {


    if(event.shiftKey){
        let estaEntre = false;
        checkboxes.forEach(check => {
            if (check === this || check === ultimoCheck) {
                estaEntre = !estaEntre;
            }
            if (estaEntre) {
                check.checked = true;
            }
        })
    } 
    ultimoCheck = this;
}

checkboxes.forEach (check => {
    check.addEventListener('click', controladorCheck);
    });