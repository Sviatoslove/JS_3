//Task1
"42" == 42 // true;
"0" == 0 // true;
"0" == false // true;
"true" == true // true;
true == (1 == "1") // true;

"42" === 42 // false;
"0" === 0 // false;
"0" === false // false;
"true" === true // false;
true === (1 === "1") // false;

//Task2
var a = 'foo';
var b = 'bar';
var result = a+ ' ' +b; // foo bar;

//Task3
"ананас" > "яблоко" // false;
undefined == null // true;
undefined === null // false;console.log(

//Task4
var a = 1;

if(a > 10 && a < 12) {
  console.log('Тебе пора домой идти "а" больше 10');
}else if(a < 10 && a > 0) {
  console.log('Опана, можно ещё подремать, раньше десяти не буду вставать!');
}else if(a == 10) {
  console.log('Вставать - учить JS - бежать');
}else if(a == 12) {
  console.log('Коснулся, будто вечности я, конца учёбе не видать!!!');
}else{
  console.log('Ничего себе, "а" - это строка???');
}

//Task5

a > 10 && a < 12 ? console.log('Тебе пора домой идти "а" больше 10'):
a < 10 && a > 0 ? console.log('Опана, можно ещё подремать, раньше десяти не буду вставать!'):
a == 10 ? console.log('Вставать - учить JS - бежать'):
a == 12 ? console.log('Коснулся, будто вечности я, конца учёбе не видать!!!'):
console.log('Ничего себе, "а" - это строка???');

//Task6

var question = prompt('Чтобы перейти дальше, угадайте пожалуйста одно из пяти мною загаданных чисел в диапазоне от 1 до 100:');

switch(question) {
  case '19' :
    alert ('Вы угадали число');
    break;
  case '21' :
    alert ('Вы угадали число');
    break;
  case '30' :
    alert ('Вы угадали число');
    break;
  case '31' :
    alert ('Вы угадали число');
    break;
  case '36' :
    alert ('Вы угадали число');
    break;
  default :
    alert ('Вы не угадали. Попробуйте ещё раз!');
}