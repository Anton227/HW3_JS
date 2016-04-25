//фон
document.body.style.background ='#f2f2f2';

// аркуш
var container = document.createElement('div');
// div.className = 'container';
container.classList.add('container');
document.body.appendChild(container);
container.innerHTML = '<h4 class = "text-center">Тест по програмуванню</h4>';

// container.style.width ='800px';
// container.style.height ='600px';
// container.style.background =' #ffffff';

var sheet = container.style;
sheet.color = '#000000';
sheet.width = '800px';
sheet.height = '600px';
sheet.background =' #ffffff';
sheet.fontWeight = 'bold'; //чому не працює ?
sheet.paddingLeft = '100px';

//список
var list = document.createElement('ol');
list.classList.add('text');
var listAppend = document.querySelector('.container');
listAppend.appendChild(list);

//питання №1
var listCheck = document.createElement('li');
listCheck.classList.add('question1')
var listCheckAppend = document.querySelector('.text');
listCheckAppend.appendChild(listCheck);

var listTitle = document.createElement('h4');
listTitle.innerHTML = '1. Питання № 1';
var listTitleAppend = document.querySelector('.question1');
listTitleAppend.appendChild(listTitle);

//питання №1__вшдповідь №1
var listAnswer = document.createElement('h5');
listAnswer.classList.add('answer1');
var listAnswerAppend = document.querySelector('.question1');
listAnswerAppend.appendChild(listAnswer);

var listInput = document.createElement('input');
var listInputAppend = document.querySelector('.answer1');
listInput.setAttribute('type', 'checkbox');
listInput.insertAdjacentHTML('afterBegin', 'Варіант відповіді №1');
listInputAppend.appendChild(listInput); 

//питання №1__відповідь №2
var listAnswer = document.createElement('h5');
listAnswer.classList.add('answer2');
var listAnswerAppend = document.querySelector('.question1');
listAnswerAppend.appendChild(listAnswer);

var listInput = document.createElement('input');
var listInputAppend = document.querySelector('.answer2');
listInput.setAttribute('type', 'checkbox');
listInput.insertAdjacentHTML('afterBegin', 'Варіант відповіді №2');
listInputAppend.appendChild(listInput); 

//питання №1__відповідь №2
var listAnswer = document.createElement('h5');
listAnswer.classList.add('answer3');
var listAnswerAppend = document.querySelector('.question1');
listAnswerAppend.appendChild(listAnswer);

var listInput = document.createElement('input');
var listInputAppend = document.querySelector('.answer3');
listInput.setAttribute('type', 'checkbox');
listInput.insertAdjacentHTML('afterBegin', 'Варіант відповіді №2');
listInputAppend.appendChild(listInput); 


// питання №2
var listCheck = document.createElement('li');
listCheck.classList.add('question2')
var listCheckAppend = document.querySelector('.text');
listCheckAppend.appendChild(listCheck);

var title = document.createElement('h4');
title.innerHTML = '<h4> 2. Питання № 2 </h4>';
var titleAppend = document.querySelector('.question2');
titleAppend.appendChild(title);


//питання №3
var listCheck = document.createElement('li');
listCheck.classList.add('question3')
var listCheckAppend = document.querySelector('.text');
listCheckAppend.appendChild(listCheck);

var title = document.createElement('h4');
title.innerHTML = '<h4> 3. Питання № 3 </h4>';
var titleAppend = document.querySelector('.question3');
titleAppend.appendChild(title);


// // кнопка
var button = document.createElement('div2');
// div2.className = 'button';
button.classList.add('button');
// button.classList.add('btn','btn-primary','btn-lg')
var buttonAppend = document.querySelector('.container');
buttonAppend.appendChild(button);
button.innerHTML = '<h4 class = "text-center">Перевірити мої результати</h4>';

var btn = button.style;
btn.display = 'block';
btn.width = '320px';
btn.height = '50px';
btn.border = '3px solid';
btn.margin = '0 auto';
btn.padding = '2px';
btn.fontWeight ='bold';//чому не працює ?
btn.background = '#cfe2f3';
btn.borderRadius = '5px';