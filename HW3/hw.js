{
// String: greeting
// Запитайте у користувача ім'я та привітайте його за допомогою alert.
let firstName= prompt('Введіть ім\'я');
alert ("Привіт," + firstName + "!!!" );
}


{
// String: gopni4ek
// Попросіть користувача ввести рядок через 'prompt'. 
// Використовуючи split та join зробіть що б після будь-якої коми слід було слово блін,.
let sentence = prompt('Ведіть два речення через кому');

let sentenceNew = sentence.split(',')
let result = sentenceNew.join (',блін')
alert (result)
}


{
// String: capitalize
// Перетворіть рядок, введений користувачем, таким чином, щоб перша літера ставала великою, а решта - маленькими:
let str = "cANBerRa"
let result = thirdStr+fourthStr

let firstStr = str[0]
let secondStr = str.slice(1)
let thirdStr = firstStr.toUpperCase()
let fourthStr = secondStr.toLowerCase()

console.log(result) 
}


{
// String: word count
// Порахуйте кількість слів у рядку. Використовуйте розбиття за пробілами. Довжина масиву називається так само, як і довжина рядка.
let inputString = "word count";
let wordsArray = inputString.split(" ");
let wordCount = wordsArray.length;

console.log("Кількість слів у рядку: " + wordCount);
}


{
// String: credentials
let firtName = prompt("Ведіть ім\'я'").trim();
let lastName = prompt ("Введіть фамілію").trim();
let surname = prompt("Введіть по-бітькові").trim();

let firtNameA = firtName.slice(0,1).toUpperCase();
let lastNameA = lastName.slice(0,1).toUpperCase();
let surnameA = surname.slice(0,1).toUpperCase();

let firtNameB = firtName.slice(1).toLowerCase();
let lastNameB = lastName.slice(1).toLowerCase();
let surnameB = surname.slice(1).toLowerCase();

let firtNameC = firtNameA + firtNameB;
let lastNameC = lastNameA + lastNameB;
let surnameC = surnameA + surnameB;

let fullName = lastNameC + firtNameC + surnameC;

console.log(fullName)
}


{
// String: beer
// Не використовуючи .replace замініть слово пиво у рядку на слово чай
let str = "Було жарко. Василь пив пиво вприкуску з креветками"
let result

let splitSentence = str.slice(0,str.indexOf("пиво"));
let splitSentenceA = str.slice(str.indexOf("пиво")+"пиво".length);
result = splitSentence + "чай " + splitSentenceA;
console.log(result) //"Було жарко. Василь пив чай уприкуску з креветками"
}



{
// String: no tag
// Знайдіть у рядку HTML тег. Видаліть, тобто виріжте його - створіть інший рядок, в якому 
// будуть всі символи до тега і після нього Тег може бути будь-яким. split і join не використовуйте, 
// натомість використовуйте indexOf і slice. .replace не використовуйте
    let str = "якийсь текст, в якому є один тег <br /> і всяке інше"
    let result
    let splitStrA = str.slice(0,str.indexOf("<br />"));
    let splitStrB = str.slice(str.indexOf("<br />")+"<br />".length);
    result = splitStrA + "<img>" +  splitStrB
    console.log(result) //якийсь текст, в якому є один тег і всяке інше
}




{
// String: new line
// Попросіть користувача ввести рядок черезprompt. prompt не дозволяє вводити рядкові рядки. 
// Дамо користувачеві таку можливість - Користувач може вводити \n як маркер нового рядка.
// Використовуючи split та join зробіть цей рядок воістину багаторядковим і виведіть в консоль або через alert.
let userString = prompt("Введіть рядок");
let userStringA = userString.split("\\n");
let userStringB = userStringA.join("\n");
alert(userStringB)
}


{
// Нехай користувач введе будь-який текст із посиланням на youtube.
// Використовуючи регулярний вираз вийміть із посилання ідентифікатор видосу і 
// створіть рядок із вбудованим блоком HTML. Додайте блок на сторінку.

// оголосіть константу з регулярним виразом
// використовуйте метод match, який поверне вам масив
// вийміть із масиву елемент із ідентифікатором відео
// вивчіть HTML код вбудовування відео на сторінку на youtube.
// використовуючи інтерполяцію рядків, вклейте ідентифікатор відео в HTML код вбудовування відео
// використовуючи document.write відправте отриманий рядок на сторінку.

let linkYouTube = prompt("Введіть посилання на відео з YouTube:");

const regularExpression = /(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:watch\?(?:[\w-=&]*&)?v=|(?:embed|v)\/))([\w-]+)[\w-=&#]*/;

let found = linkYouTube.match(regularExpression);

const video = found[1];
const lol = `https://www.youtube.com/embed/${video}`;

const width = 600;
const height = 600;

const pi = `<iframe width="${width}" height="${height}"src="${lol}"></iframe>`;

document.write(pi);
}