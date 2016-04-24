//фон
document.body.style.background ='#f2f2f2';

// аркуш
var div = document.createElement('div');
div.className = 'container';
// div.style.width ='800px';
// div.style.height ='600px';
// div.style.background =' #ffffff';
var sheet = div.style;
sheet.color = '#000000';
sheet.width = '800px';
sheet.height = '600px';
sheet.background =' #ffffff';
sheet.fontWeight = 'bold'; //чому не працює ?

// заголовок
div.innerHTML = '<h4 class = "text-center">Тест по программированию</h4>';
document.body.appendChild(div);

// вопрос№1

// вопрос№2

// вопрос№3


// кнопка
var div2 = document.createElement('div2');
div2.className = 'button';

var btn = div2.style;
btn.display = 'block';
btn.width = '320px';
btn.height = '50px';
btn.border = '3px solid';
btn.margin = '0 auto';
// btn.padding = '2px';
btn.fontWeight ='bold';//чому не працює ?
btn.background = '#cfe2f3'
div2.innerHTML = '<h4 class = "text-center">Перевірити мої результати</h4>';

document.body.appendChild(div2);
