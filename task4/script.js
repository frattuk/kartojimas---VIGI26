/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, kuris nuspaudus mygtuką "Show districts" turi atvaizduoti duomenis
iš districts.json failo.
1. Kreiptis į districts.json failą
2. Kiekvienam rajonui sukurti po atskirą kortelę
3. Viršuje atvaizduoti rajono pavadinimą 
4. Atvaizduoti visus rajono miestus talpinant į <li> tagą
5. Pastilizuoti korteles
6. Extra: kiekvienai kortelei priskirti skirtingą spalvą
-------------------------------------------------------------------------- */

function generateRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

var randomColor = generateRandomColor(); //"#F10531"

const ENDPOINT = "districts.json";

const showButton = document.getElementById("show");

const renderCard = (district) => {
  const card = document.createElement("div");
  const districtNameEl = document.createElement("h2");
  const listEl = document.createElement("ul");

  districtNameEl.textContent = district.district;
  district.cities.forEach((city) => {
    const cityEl = document.createElement("li");
    cityEl.textContent = city;
    listEl.append(cityEl);
  });

  districtNameEl.style.textAlign = "center";
  card.className = "card";
  card.style.backgroundColor = randomColor;
  card.append(districtNameEl, listEl);

  document.getElementById("output").append(card);
};

showButton.addEventListener("click", () => {
  document.getElementById("output").textContent = "";
  fetch(ENDPOINT)
    .then((resp) => resp.json())
    .then((response) => {
      console.log(response);
      response.forEach((district) => renderCard(district));
    })
    .catch((error) => {
      console.error(error);
    });
});
