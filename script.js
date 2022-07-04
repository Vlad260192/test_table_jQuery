// "use strict"
// setTimeout (go, 5000);
// function go() {
//     alert ('Hello world!!!')
// };

// let age = 29;
// let name = 'Vlad';

// if (age > 16) {
//     alert ('You are too old for this')
// } else {
//     ('Welcome to the club')
// }


// let vine = 3; // number type
// let name = 'Pit'; // string type
// let dark = false; // boolean type
// let someVariable; // undefined
// let myFirstName = 'Vlad';

// let FirstName = 'Vlad ';
// let SecondName = 'Kapustianskyi';
// alert (FirstName + SecondName);


// var price = 100;
// var discont = 25;
// var total = price - (price * (discont / 100)); // все що після равно нназивається виразом (виражение)
// console.log(total);

// var name = 'Vlad';
// var secondName = 'Kapustianskyi';
// var myInfo = name + secondName; // операція конкатенації (працює лише зі строковими елементами)
// alert(myInfo);

// var firstNumber = 22;
// var secondNumber = '11';
// var myInfo = firstNumber + secondNumber; // операція конкатенації (працює лише зі строковими елементами)
// alert(myInfo);

// var age = 20;
// alert(age >= 20);

// while, for, for in, forEach

// var number = 50;
// while(number > 0){
//     document.write('Number more than 0 <br>');
//     number = number - 1;
// }
// document.write('Number less than 0');

// var apples = 5;

// while(apples < 10){
//     document.write('Give apple to my friend <br>')
//     apples = apples + 1;
// }
// document.write('<br>Sorry, I don`t have apples');

// let firstName = 'Dmytro';
// alert (`Hi, ${firstName}!`);

// let result = 2 + 1;
// alert(`Total score: ${result}`);

// let age = null;
// alert(age);

// number
// string
// boolean
// undefined
// null
// bigInt
// object
// sumbol

// let name = 'Vlad';

// alert(`hello, ${"name"}`);

// age = prompt('How old are you?', '');
// alert(`You are ${age} years old`);

// let age = confirm('Are you old?');
// alert(age);

// let yourName = prompt('Whats your name?');
// let yourAge = prompt('Whats your age?');
// let yourHobby = prompt('Whats your hobby?');
// alert('You are finish registration?');
// alert(`Your name ${yourName}, your age ${yourAge}, your hobby ${yourHobby}`);

// let value = true;
// alert(typeOf, value);

// value = String(value);
// alert(typeOf, value);

// alert(Number(true));

// let x = '23 ';
// let y = '14';
// alert(+x + +y); // унарний оперант '+' перед значенням перетворює його на число

// Пріоритет операторів:
// + унарний плюс 15;
// - унарний мінус 15;
// ** зведення в ступінь 14;
// * помноження 13;
// / ділення 13;
// + складання 12;
// - віднімання 12;
// = присвоєння 2;

// let n = 2;
// n += 5; // n = n + 5;
// n *= 2; // n = n * 2;
// alert(n);

// let n = 38;
// n++; // n = n + 1;
// alert(n);

// let m = 38;
// m--; // m = m - 1;
// alert(m);

// 1 = 1 //
// 2 = 1 //
// 3 = 1
// 4 = 2
// 5 = 6
// 6 = 10 //
// 7 = 10 //
// 8 = 2;
// 9 = -1; //
// 10 = -4;
// 11 = -14;
// 12 = 1;
// 13 = NaN;
// 14 = NaN; //

// let n = ('-9 ' + 5);
// alert(n);

// let a = prompt ('Your name', 1);
// let b = prompt ('Your name', 2);

// alert(a + b);

// let a = 3;
// let b = 4;

// alert(a < b);

// alert('aabbcc' > 'aabbee');

// alert(null > 0);
// alert(null == 0);
// alert(null !== 0);



// 1 true
// 2 false
// 3 false //
// 4 true
// 5 false
// 6 true //
// 7 true //

// let year = prompt('In witch year started ECMAScript 2015', '');
// if (year == 2015) {
//   alert('You are right');
//   alert('You are realy smart')
// }else{
//   alert('Your answear wrong. Learn harder!')
// };

// let year = prompt('ECMAScript');

// if (year < 2015) {
//   alert('to early');
// }else if (year > 2015) {
//   alert('to late');
// }else{
//   alert('you are right');
// };

// let accessAllowed;
// let age = prompt('How old are you?');

// if (age >= 18) {
//   accessAllowed = true;
// } else {
//   accessAllowed = false;
// }

// alert(accessAllowed);

// let accessAllowed = age >= 18 ? true : false;

// alert(accessAllowed);

// let apple = '3';
// let grape = '2';

// alert(+apple + +grape);

// alert(Number(apple) + Number(grape));

// let comfy = 5;
// alert(comfy++);

// let a = prompt('First question', 1);
// let b = prompt('Second question', 2);

// alert (+a + +b);

// let hour = 12;
// let isWeekend = true;
// if (hour < 10 || hour > 18 || isWeekend) {
//     alert('Office closet');
// }

// let question = prompt('What year?', '');

// if (question <= 0) {
//     alert ('Close but, you don`t get')
// };

// let accessAllowed;
// let age = prompt('How old are you?', '');

// if (age >= 18) {
//     accessAllowed == true;
//     alert('you are welcome');
// }else{
//     accessAllowed == false;
//     alert('see you next time');
// }

// let result = (age >= 18) ? true : false;

// let age = prompt('Який твій вік?', '');
// let message;

// if (age < 3) {
//     message = 'Вітаю, малечо!';
// }else if (age < 18) {
//     message = 'Вітаю, малечо!';
// }else if (age < 100) {
//     message = 'Моя пошана!';
// }else{
//     message = 'Який цікавий вік, ти з якої планети';
// };

// alert(message);

//let company = prompt('Whitch company create JS?', '');

// (company == 'Netscape') ?
// alert('It`s true') : alert('It`s false thinking');

// if (company == 'Netscape') {
//     alert('its true');
// } else {
//     alert('You are wrong');
// }

// let question = prompt('What was the first naming of JS?', '');

// if(question == 'ECMAScript') {
//     alert('you are right');
// }else{
//     alert('you are wrong!');
// };

// let value = prompt('Write ramdon number from -1 to 1', '');
// if(value > '0'){
//     alert('1');
// }else if(value == '0'){
//     alert('0');
// }else if(value < '0'){
//     alert('-1');
// };


// let age = prompt('Вік', 18);

// let message = (age < 3) ? 'Вітаю, малечо!' :
// (age < 18) ? 'c' :
// (age < 100) ? 'Моя пошана!' :
// 'Який цікавий вік, ти з якої планети';

// alert(message);

// ------------

// let a = +prompt('Enter variable A', '');
// let b = +prompt('Enter variable B', '');

// let result = (a + b < 4) ? 'Less': 'More';

// alert(result);


// let message;

// if (login == 'Сотрудник') {
//   message = 'Привет';
// } else if (login == 'Директор') {
//   message = 'Здравствуйте';
// } else if (login == '') {
//   message = 'Нет логина';
// } else {
//   message = '';
// }

// let login = prompt('Enter login', '');

// let message = (login == 'Emploee') ? 'Привет' : 
// (login == 'Директор') ? 'Здравствуйте' : 
// (login == '') ? 'Нет логина' : 
// '';

// alert(message);


// result = a || b;

// alert(true || true); // true
// alert(false || true); // true
// alert(true || false); // true
// alert(false || false); // false


// let hour = 12;
// let isWeekend = false;

// if (hour < 10 || hour > 18 || isWeekend) {
//   alert('Office closed')
// }else{
//   alert('office open')
// };

// alert(1 || 0);
// alert(true || 'no matter what');
// alert(null || 0 || 1);
// alert(null || false || undefined);

// result = a && b;
// alert(true && true); // true
// alert(true && false); // false
// alert(false && true); // false
// alert(false && false); // false

// let hour = 12;
// let minute = 30;

// if (hour == 12 && minute == 30) {
//   alert('The time is 12.30')
// };

// let a = 'Hello';
// let b = undefined;
// let c;

// let submit = a && b && c;
// alert (submit);

// let age;

// if (age >= 14 && age <= 90) {
//     alert(age);
// }

// if (!(age >= 14 && !age <= 90));

// let userName = prompt('Enter login', '');

// if (userName === 'admin' || userName === 'Admin') {
    
//     let password = prompt('Gain password', '');

//     if (password === 'Master' || password === 'master') {
//         alert('You are wellcome');
//     }else if (password === '' || password === null){
//         alert('Action canceled')
//     }else{
//         alert('Wrong password')
//     };
// }else if (userName === '' || userName === null) {
//     alert('Action canceled')
// }else {
//     alert('I dont know you')
// };

// let i = 0;
// while (i < 3) {
//     alert(i);
//     i++;
// }

// let i = 3;
// while (i != 0) {
//     alert(i);
//     --i;
// }

// let i = 5;
// while (i) alert(i--);

// let i = 5;
// do {
//     alert(i);
//     --i;
// } while(i != 0);

// for (let i = 0; i < 5; i++) {
//     alert(i);
// };

// let i = 0;

// for (; i < 3;) {
//     alert(i++);
// };

// for(let i = 0; i < 5; ++i){
//     alert(i);
// };

// let i = 0;
// do {
//     alert(i);
//     i++;
// } while(i < 5);

// let sum = 0;

// while(true) {
//     let value = +prompt('Enter number', '');
//     if (!value) break;
//     sum += value;
// }

// alert('Total cost ' + sum);

// for (let i = 0; i < 10; i++) {
//     if (i % 2) continue;
//     alert (i);
// }

// outer: 
// for (let i = 0; i < 3; i++) {
//     for (let j = 0; j < 3; j++) {
//         let input = prompt(`Enter cordinats (${i},${j})`, '');
//         if (!input) break outer;
//     }
// }
// alert('Ready');


// for (let i = 2; i <= 10; i++) {
//     if (i % 2 == 0){
//         alert(i);
//     }
// }

// for (let i = 0; i < 3; i++) {
//     alert( `number ${i}!` );
//   }

  let i = 0;
  while (i < 3) {
    // alert (`number ${i}`);
    console.log(`number ${i}`);
    i++;
  }

// let value = prompt('Enter number', '');

// for (value = 0; value >= 100; value++){
//     if (value <= 100) {
//         value = prompt('Try one more time')
//     }
// }