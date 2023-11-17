
//Дослідіть код, знайдіть вирази у ньому. Розставте дужки так, щоб код не змінив своєї поведінки 
//(працював так само як і зараз). Поясніть, як і в якому порядку обчислюються вирази та вирази.
var a = 5;  
var b, c;

b = (a * 5);  
b = (c = b/2); // оригінал

var a = 5;  
var b, c;

b = (a * 5);  
b = (c = (b/2)); // перший варіант 

var a = 5;  
var b, c;

b = (a * 5);  
b = c = (b/2); //другий варіани


//Number: age
//За допомогою prompt запитати у користувача його вік та підрахувати рік народження. Рік народження вивести за допомогою alert.
// str = prompt('enter your age')
// let age = +str
// let year = 2023 - age
// alert(year)


// Number: temperature
// За допомогою prompt запитати у користувача температуру в градусах Цельсія та перевести їх у Фаренгейти та/або навпаки.
let degreesCelsius = prompt('Введіть градус у Цельсіях');
let celsiusInFahrenheit = ((+degreesCelsius)*(9/5)) + 32;
alert(celsiusInFahrenheit);
let degreesFahrenheit = prompt ('Ведіть градус у Фаренгейтах');
let fahrenheitInCelsius = ((+degreesFahrenheit)-32)/(9/5);
let resault = "Цельсій у Фаренгейт" + celsiusInFahrenheit + "\nФаренгейт у Цельсій" + fahrenheitInCelsius;
alert (resault);

// Number: divide
// Зробіть калькулятор для розрахунку поділу націло двох чисел. Використовуйте Math.floor або альтернативи.

let number = prompt('Введіть число');
let enterDivisor =prompt ('Введіть дільник');

let resaultt = Math.floor((+number)/(+enterDivisor));
alert(resaultt )


// Number: currency
// Напишіть код, який обчислює обмін валют за курсом, заданим за допомогою константи
// const rate = КУРС ВАЛЮТИ Вважайте значення в одній валюті за допомогою 'prompt', після чого помножіть/поділіть 
// це число на 'rate'. Виведіть результат, використовуючи alert. Обмежте кількість знаків після коми двома 
// (нас не хвилюють дрібні частини центів/копійок)

const rate = 36.15
let amountInHryvnias = prompt('Введіть сумму в гривнях');
let amountInDollars =  ((+amountInHryvnias)/(+rate)).toFixed(2)
alert(amountInDollars)

// Number: RGB
// За допомогою prompt організуйте введення трьох констант red, green, blue у 
// десятковій системі. Створіть із них CSS-колір у форматі #RRGGBB використовуючи шістнадцяткову 
// систему числення. Значення менше 16ти поки що можна не враховувати.

let red = prompt('Введіть значення RED від 0 до 255');
let green = prompt('Введіть значення GREEN від 0 до 255');
let blue = prompt('Введіть значення BLUE від 0 до 255');

let redHex = (+red).toString(16);
let greenHex = (+green).toString(16);
let blueHex = (+blue).toString(16);

if (redHex.length === 1) {
    redHex = "0" + redHex;
  }
  if (greenHex.length === 1) {
    greenHex = "0" + greenHex;
  }
  if (blueHex.length === 1) {
    blueHex = "0" + blueHex;
  }

var colorHex  = "#" + redHex + greenHex + blueHex;
alert(colorHex)



// Number: flats
// Зробіть калькулятор, який дозволить вам виходячи з інформації про кількість поверхів 
// у будинку та кількість квартир на поверсі знаходити під'їзд та поверх певної квартири 
// за її номером. Наприклад для 9поверхового будинку по 4 квартири на поверх 81 квартира 
// знаходиться на 3-му поверсі третього під'їзду. Користувач повинен вводити за допомогою 
// prompt кiлькiсть поверхiв, кiлькiсть квартир на поверсi та номер квартири. Код повинен 
// видавати пiд'їзд та поверх по номеру квартири

let numberOfFloors = prompt('Введіть кількість поверхів');
let numberOfApartmentsPerFloor = prompt('Введіть кількість квартир на поверсі');
let apartmentNumber = prompt('Введіть номер квартири');

let entrance = Math.ceil((+apartmentNumber)/((+numberOfFloors)*(+numberOfApartmentsPerFloor)));                    
let floor =  Math.ceil ((+apartmentNumber)%(+numberOfFloors))
alert ("Номер підїзду" + entrance + "\nПоверх" + floor)




