    function numerosRomanos(numero) {
        let miles = parseInt((numero / 1000)%10);
        let centenas = parseInt((numero / 100)%10);
        let decenas = parseInt((numero / 10) % 10);
        let unidades = numero % 10;
        let Romano = primerCifra(miles,"M","V","X");
        Romano += primerCifra(centenas,"C","D","M");
        Romano += primerCifra(decenas,"X","L","C");
        Romano += primerCifra(unidades,"I","V","X");
        return Romano;
    }
    function primerCifra(primercifra,uno,cinco,diez) {
        let numeroRomano = "";
        if (primercifra >= 1 & primercifra <= 3) {
            for (let index = 1; index <= primercifra; index++) {
                numeroRomano += uno;
            }
        }
        if (primercifra >= 5 & primercifra <= 8) {
            numeroRomano += cinco
            for (let index = 1; index <= primercifra-5; index++) {
                numeroRomano += uno;
            }
        }
        if (primercifra == 4) {
            numeroRomano += uno+cinco;
        }
        if (primercifra == 9) {
            numeroRomano += uno+diez;
        }
        return numeroRomano;
    }
module.exports = numerosRomanos;