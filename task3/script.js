/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris atvaizduos TODOS korteles.
1. Išgaukite TODOS iš duoto ENDPOINT.
2. Sukurkite kiekvienam todo kortelę
3. Kortelėje atvaizduokite title ir due_on reikšmes (due_on panaudoti su Date object)
4. Kortelės spalva turi atitikti todo statusą. 
   Jeigu status = pending, kortelė orandžinė 
   Jeigu status = completed, kortelė žalia
5. Pastilizikuote kortelę
-------------------------------------------------------------------------- */

const ENDPOINT = "https://gorest.co.in/public/v2/todos";

const renderCard = (todo) => {
  const { title, status, due_on } = todo;
  const card = document.createElement("div");
  const output = document.getElementById("output");
  const titleEl = document.createElement("h3");
  const dueonEl = document.createElement("span");
  const statusEl = document.createElement("h5");

  card.className = "card";

  titleEl.textContent = title;
  dueonEl.textContent = new Date(due_on).toLocaleDateString();
  statusEl.textContent = status;

  card.append(titleEl, dueonEl, statusEl);
  // card.style.padding = "8px";
  if (status === "pending") {
    card.style.backgroundColor = "orange";
  } else {
    card.style.backgroundColor = "green";
  }

  output.append(card);
};

fetch("https://gorest.co.in/public/v2/todos")
  .then((resp) => resp.json())
  .then((response) => {
    response.forEach((todo) => renderCard(todo));
  })
  .catch((error) => {
    console.error(error, ": failed to load");
  });
