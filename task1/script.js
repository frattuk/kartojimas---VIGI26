/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti temperatūra celsijum ir
pamatyti jo pateikto temperatūros kovertavimą į:
1. Farenheitus (°F) | Formulė: °F = °C * 1.8 + 32;
2. Kalvinus (K) | Formulė: K = °C + 273.15;

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
const converterForm = document.querySelector("form");

converterForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const celsius = document.getElementById("search");
  const farenheits = celsiusToFahrenheits(celsius.value);
  const kalvins = celsiusToKalvins(celsius.value);

  const output = document.getElementById("output");
  output.textContent = `Farenheits:  ${farenheits}, Kalvin: ${kalvins}`;
});

function celsiusToFahrenheits(celsius) {
  return celsius * 1.8 + 32;
}

function celsiusToKalvins(celsius) {
  return Number(celsius) + 273.15;
}
