
let amountOfArabicaPerMonth = prompt('Ведіть суму продажів арабіки за місяць'); //сума продажів арабіки за місяць
let amountOfRobustaPerMonth = prompt('Ведіть суму продажів рабусти за місяць'); //сума продіжв рабусти за місяць

let storeRevenuePerMonth = (+amountOfArabicaPerMonth) + (+amountOfRobustaPerMonth); //сума виторгу магазину за місяць
let salaryOfOneEmployeeWithoutTaxes = (+storeRevenuePerMonth)/4; //зарплатня одного працівника без налогів. 4- кількість працівників всього.

let salaryOfOneEmployeeWithTaxes  =  (+salaryOfOneEmployeeWithoutTaxes)-2688; //фінальна зарплатня одного працівника.
let FinalResult = "Місячний дохід:" + storeRevenuePerMonth + "\nЗаробітня платня без налогу:" + salaryOfOneEmployeeWithoutTaxes + "\nЗаробітня платня з налогом" + salaryOfOneEmployeeWithTaxes;
alert(FinalResult)
