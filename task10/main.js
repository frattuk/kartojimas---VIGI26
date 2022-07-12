// Susikurti folderį modules ir jame sukurti string.js modulį bei object.js modulį.
// string.js faile turi būti išeksportuojama dvi funkcijos: stringUppercase, stringLowerCase
// object.js faile turi būti išeksportuojama funkcijos iš 7 užduoties: showObjectValues, showObjectKeys
// importuoti main.js faile visas funkcijas ir panaudoti

// mano neveikia

// import stringUpperCase from "./modules/string.js";

// stringUpperCase(string);

import { upperCase, lowerCase } from "./modules/string.js";
import { showObjectKeys, showObjectValues } from "./modules/object.js";

console.log(upperCase("rokas"));
console.log(lowerCase("Rokas"));

const movie = {
  title: "Matrix",
  budget: 53000000,
};

console.log(showObjectKeys(movie));
console.log(showObjectValues(movie));
