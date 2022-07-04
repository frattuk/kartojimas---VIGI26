// Parašykite JS kodą, kuris nuspaudus mygtuką "Plus one" pridės vieną prie counter skaičiaus
// nuspaudus "Minus one" atims vieną nuo counter skaičiaus

const plusButton = document.getElementById("btn__element_plus");
const minusButton = document.getElementById("btn__element_minus");

let counter = 0;

plusButton.addEventListener("click", (event) => {
  counter++;
  document.getElementById("btn__state").textContent = counter;
});

minusButton.addEventListener("click", (event) => {
  counter--;
  document.getElementById("btn__state").textContent = counter;
});

// const resetButton = document.getElementById("reset");
// resetButton.addEventListener("click", () => {
//   numberEl = 0;
//   document.getElementById("number").textContent = numberEl;
// });
