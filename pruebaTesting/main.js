function operacion(numero1,numero2,operacion) {
    if (operacion == "+") { 
        return numero1+numero2;
    }    if (operacion == "-") { 
        return numero1-numero2;
    }    if (operacion == "*") { 
        return numero1*numero2;
    }    if (operacion == "/") { 
        return Math.round(numero1/numero2);
    }
}

module.exports = operacion;