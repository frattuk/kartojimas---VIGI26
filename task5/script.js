const routes = [
  { name: "A", distance: 2200, danger: true },
  { name: "B", distance: 2404, danger: false },
  { name: "C", distance: 3100, danger: true },
  { name: "D", distance: 1700, danger: false },
  { name: "E", distance: 2500, danger: true },
  { name: "F", distance: 6300, danger: true },
  { name: "G", distance: 1600, danger: true },
  { name: "H", distance: 3000, danger: false },
  { name: "I", distance: 5100, danger: true },
];

/* ------------------------------ TASK 5 -----------------------------------
Turimas "routes" masyvas. 

Parašykite funckijas, kurios atlieka nurodytas užduotis
1. funkcija "filterNonDangerRoutes" - kaip argumentą priims masyvą ir duoto masyvo 
atveju grąžins "routes", kurie yra nepavojingi.
2. funkcija "filterDangerLongRoutes" - kaip argumentą priims masyvą ir duoto masyvo 
atveju grąžins masyvą su "routes", kurie pavojingi ir ilgesni nei 3000.
-------------------------------------------------------------------------- */

// mano atsakymas:

// const safeRoutes = routes.filter((route) => route.danger === false);
// const longDangerousRoutes = routes.filter(
//   (route) => route.danger === true && route.distance >= 3000
// );
// console.log(safeRoutes);
// console.log(longDangerousRoutes);

// Roko atsakymas:

function filterNonDangerRoutes(routeArr) {
  return routeArr.filter((route) => !route.danger);
}
console.log(filterNonDangerRoutes(routes));

function filterDangerLongRoutes(routeArr) {
  return routeArr.filter((route) => route.danger && route.distance >= 3000);
}
const longDangerRoutes = filterDangerLongRoutes(routes);
console.log(longDangerRoutes);
