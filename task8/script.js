/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Company" (naudokite ES5), kuri sukuria objektus
su property: name, startYear, founder ir avarageSalary
su metodu: getInfo() - parodo Įmonės pavadinimą, įkurta kuriais metais ir kas įkurėjas pvz. Facebook įkurta 2006, įkurėjas Zuckas
su metodu: getAvarageSalary(sign) - parodo vidutinę algą, sign paduodam ženklą ar žodį pvz. Vidutinė alga 3000$
------------------------------------------------------------------------------------ */
// 18 paskaita

function Company(name, startYear, founder, avarageSalary) {
  this.name = name;
  this.startYear = startYear;
  this.founder = founder;
  this.avarageSalary = avarageSalary;
  this.getInfo = () => {
    return `${this.name} ikurta ${this.startYear}, ikurejas ${this.founder}`;
  };
  this.getAvarageSalary = (sign) => {
    return ` Vidutine alga ${sign}${this.avarageSalary}`;
  };
}

const company = new Company("Facebook", 2006, "Zuck", 25000);
const randomCompany = new Company("Pixweld", 2005, "Macas", 3000);

console.log(company.getInfo());
console.log(company.getAvarageSalary("$"));
