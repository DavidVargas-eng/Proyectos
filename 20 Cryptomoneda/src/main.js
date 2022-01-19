import {datosConsulta} from './datosApi.js';
import {llenarTabla} from './llenarTabla.js';

let coinsData;
console.log(`${datosConsulta.proxyUrl}${datosConsulta.baseUrl}`);
fetch (`${datosConsulta.proxyUrl}${datosConsulta.baseUrl}`,{
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': `${datosConsulta.apiKey}`,
      'Access-Control-Allow-Origin': '*'
    }
}).then((response) => {
    if (response.ok) {
        response.json().then(json => {
        coinsData = json.data.coins;
        console.log("datos desde API");  console.log(coinsData);
        localStorage.setItem("datos",JSON.stringify(coinsData));
        document.getElementById("data").innerHTML = llenarTabla(coinsData);
      });
    }else{
      console.log("datos desde Local Storage");  console.log(coinsData);
      coinsData = JSON.parse(localStorage.getItem("datos"));
      document.getElementById("data").innerHTML = llenarTabla(coinsData);
    }
}).catch((error) => {
    console.log(error);
});