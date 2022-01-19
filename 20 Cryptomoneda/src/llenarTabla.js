export const llenarTabla = function (coinsData) {
if (coinsData.length > 0) {
    var cryptoCoin = "";
    }
coinsData.forEach(coin => {
    cryptoCoin += `<tr>
        <td><img class="icon" src="${coin.iconUrl}"></td>
        <td> ${coin.name}</td>
        <td> ${coin.uuid} </td>
        <td> ${coin.btcPrice} </td>
        <td> ${coin.rank}</td>
        <td> ${coin.tier} </td>
        <td> $${Math.round(coin.price)} Billion</td>
        <td> ${coin.symbol}</td><tr>`
    });
    return cryptoCoin;
}