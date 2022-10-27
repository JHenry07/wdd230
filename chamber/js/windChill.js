/** f = 35.74 + 0.6215t - 35.75s^0.16 + 0.4275ts^0.16 **/

const temperature = document.getElementById(temp);
const windSpeed = document.getElementById(speed);

let windChill = 35.74 + 0.6215 * temperature - 35.75 * windSpeed ** 0.16 + 0.4275 * temperature * windSpeed ** 0.16;

document.getElementById("chill").innerHTML = windChill;