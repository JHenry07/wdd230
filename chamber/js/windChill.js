/** f = 35.74 + 0.6215t - 35.75s^0.16 + 0.4275ts^0.16 **/

const temperature = document.getElementById(temp);
const windSpeed = document.getElementById(speed);

const windChill = 35.74 + 0.6215 * Number(temperature) - 35.75 * Number(windSpeed) ** 0.16 + 0.4275 * Number(temperature) * Number(windSpeed) ** 0.16;

const chill = document.getElementById("chill");

chill.innerHTML = windChill;