// Примеры с условиями if  https://learn.javascript.ru/logical-operators

/*let userName = prompt("Кто там?", '');
if (userName == "Admin") {
    alert('Введите пароль');
} else {
    alert ('Отмена');
}   if  (userName != 'Admin') {
    alert('Я вас не знаю');
}

let password = prompt("Пароль?", '');

if(password == "Я главный") {
    alert("Здраствуйте!");
} else {
    alert("Отмена");
}  if(password != "Я главный") {
    alert("Incorrect password");
}



let userName = prompt("Кто там?", '');
if (userName == "Admin") {
    let password = prompt("Пароль?", '');
}

    if (password === "Я главный") {
        alert("Здраствуйте!");
    } else if (password === '' || password === null) {
        alert("Отмена");
    } else {
        alert("Incorrect password");
    }

if (userName === '' || userName === null) {
    alert ('Отмена');
} else {
    alert('Я вас не знаю');
}*/


/*
let nameScript = prompt("Какое официальное название JavaScript?", '');
// вариант 1
 (nameScript === "ECMAScript" ) ?
    alert ("Верно!") : alert("Не знаете ECMAScript");
// вариант 2
if (nameScript === "ECMAScript") {
    alert("Верно!");
} else if (nameScript != "ECMAScript") {
    alert("Не знаете ECMAScript");
}
// вариант 3
if (value == 'ECMAScript') {
    alert('Верно!');
  } else {
    alert('Не знаете? ECMAScript!');
  }*/


  /*
  //Перепишите конструкцию if с использованием условного оператора '?':
  let result;

  if (a + b < 4) {
    result = 'Мало';
  } else {
    result = 'Много';
  }

 result = (a + b < 4) ? 
 'Мало' : 'Много'; */


 



 if (login == 'Сотрудник') {
   message = 'Привет';
 } else if (login == 'Директор') {
   message = 'Здравствуйте';
 } else if (login == '') {
   message = 'Нет логина';
 } else {
   message = '';
 }

 let message = (login == 'Сотрудник') ?  'Привет' : (login == 'Директор') ? 'Здравствуйте' : (login == '') ?  'Нет логина' :  '';










 //  2 lesson
/*knopka = 10;
knopkatwo = 'ten';*/




/*
//leson  4
//Повертає перший елемент вказаного селектора за назвою, а саме це зверненя через тег
knopka = document.querySelector("button");

// Змінює текст в вибраноиу елементі
knopka.innerText = "Other text";

//Змінює властивість елемнат в нащадків - задній фон кнопки в  
knopka.style.background = "blue";

//Змінює колір рамки кнопки 
knopka.style.borderColor = "yellow";

//Змінює курсор при наведенні
knopka.style.cursor = "pointer";

//Змінює розмір тексту 
knopka.style.fontSize = "40px"; 

//Повертає перший елемент вказаного селектора за назвою, а саме це зверненя через Id, що більш уніерсальніше в разі появи інших тегів button та div
kvadrat = document.querySelector("#kvadrat");

// вивід, оголошення елемента
console.dir(knopka);
console.dir(kvadrat);

*/




/*
// leson 5
knopka = document.querySelector("button");

// Змінює текст в вибраноиу елементі
knopka.innerText = "Other text";

//Змінює властивість елемнат в нащадків - задній фон кнопки в  
knopka.style.background = "red";

//Повертає перший елемент вказаного селектора за назвою, а саме це зверненя через Id, що більш уніерсальніше в разі появи інших тегів button та div
kvadrat = document.querySelector("#kvadrat");

//Змінює фон div блока
kvadrat.style.background = "yellow";

if (kvadrat.style.background == "" || kvadrat.style.background == "red") {
    kvadrat.style.background = "green";
} else {
    kvadrat.style.background = "red";
}
*/



//leson 6
knopka = document.querySelector("button");
//Повертає перший елемент вказаного селектора за назвою, а саме це зверненя через Id, що більш уніерсальніше в разі появи інших тегів button та div
kvadrat = document.querySelector("#kvadrat");

console.dir(kvadrat);

knopka.onclick = function() {

    if (kvadrat.style.background == "" || kvadrat.style.background == "red") {
        kvadrat.style.background = "green";
    } else {
        kvadrat.style.background = "red";
    }
}
