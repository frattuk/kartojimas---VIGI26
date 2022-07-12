// stringUppercase, stringLowerCase

// mano neveikia:

// function stringUpperCase(string) {
//   const renderString = document.createElement("h1");
//   renderString.textContent = "Uzduotis";
//   element.prepend(string);
// }
// export default stringUpperCase(string);

// Roko kodas:

export function upperCase(string) {
  return string.toUpperCase();
}

export function lowerCase(string) {
  return string.toLowerCase();
}
