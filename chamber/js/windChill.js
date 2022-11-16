/** f = 35.74 + 0.6215t - 35.75s^0.16 + 0.4275ts^0.16 **/

var temperature = document.getElementById(temp);
var windSpeed = document.getElementById(speed);

var windChill = 35.74 + 0.6215 * Number(temperature) - 35.75 * Number(windSpeed) ** 0.16 + 0.4275 * Number(temperature) * Number(windSpeed) ** 0.16;

document.getElementById("chill").innerHTML = windChill;