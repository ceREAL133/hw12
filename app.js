let button = document.querySelector('#button')
let blue = document.querySelector('#text');
let input = document.querySelector('#ageCheck');
let chckBtn = document.querySelector('.ageCheck');
let dropdown = document.getElementById("myDropdown");
let dropdowns = document.getElementsByClassName("dropdown-content");

// //Создать произвольный елемент с id = text. Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
// let blue = document.querySelector('#text');
// function changeColor(){
//     if (blue.style.visibility === 'visible') {
//         blue.style.visibility = 'hidden'
//     } else{
//         blue.style.visibility = 'visible'
//     }
// }


// // Создайте кнопку, при клике на которую, она будет скрывать сама себя.
// function hideButton(){
//     button.style.visibility = 'hidden'
// }

// // Створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// // При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
// chckBtn.addEventListener('click', () => {
//     if (input.value >= 18) {
//         alert('you can enter')
//     } else{
//         alert('not old enough')
//     }
// })

// //Создайте меню, которое раскрывается/сворачивается при клике
// function myFunction() {
//     dropdown.classList.toggle("show");
// }
  
// window.onclick = function(event) {
//   if (!event.target.matches('.dropbtn')) {
//     for (elem of dropdowns) {
//       let openDropdown = elem;
//       if (openDropdown.classList.contains('show')) {
//         openDropdown.classList.remove('show');
//       }
//     }
//   }
// }

//Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// let obj = [
//     {
//         title: 'HI',
//         body: 'My name is Dan'
//     }, {
//         title: 'HI',
//         body: 'My name is Cole'
//     }
// ]

// for (const elem of obj) {
//     let objDiv = document.createElement('div');
//     let objBtn = document.createElement('button');
//     objBtn.setAttribute('style', 'width: 100px');
//     objBtn.setAttribute('onclick', 'hide()');

//     objBtn.innerText = 'im button'

//     objDiv.innerHTML = `
//     <p> 
//         title:${elem.title}
//     </p> 
//     <p class="hideE">
//         body:${elem.body} 
//     </p> 
//     `
    
    
//     document.body.appendChild(objDiv)
//     document.body.appendChild(objBtn)
    
// }

// // я хз, як зробити, щоб кнопка і <p> були зв'язані.

// let hideElems = document.getElementsByClassName('hideE')
// for (const elem of hideElems) {
//     objBtn.addEventlistener('click', {
//         elem.style.visibility = 'hidden';
//     })
// }

// // Створити 2 форми  по 2 інпути в кожній. створити кнопку при кліку на яку зчитується та виводиться на консоль інформація з цих 2х форм.
// //     Кнопка повинна лежати за межами форм (Щоб уникнути  перезавантаження сторінки)
// //     Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

// let itsButton = document.getElementById('itsButton');
// let collection = document.forms
// console.log(collection);

// function checkInfo(){
//     for (let i = 0; i < collection.length; i++) {
//         for (let j = 0; j < collection.length; j++) {
//             console.log(collection[i].elements[j].value);
//         }
//     }
// }

//Створити функцію, яка генерує таблицю.
// Перший аргумент визначає кількість строк.
// Другий параметр визначає кількість ячейок в кожній строці.
// Третій параметр визначає елемент в який потрібно таблицю додати.

let div = document.getElementById('forTable');

function tableCreate(rows, cells, elem){
    let table = document.createElement("table");
    table.setAttribute('class', 'table')
    for (let i = 0; i < rows; i++) {
        let tr = table.insertRow();
        tr.innerHTML = '1'
        for (let j = 0; j < cells; j++) {
            let td = tr.insertCell()
            td.innerHTML = '2'
        }
        
    }
elem.appendChild(table)
}
tableCreate(3, 3, div);