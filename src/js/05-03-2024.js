let head = document.getElementsByTagName('head')[0];
let lastChild = document.getElementsByTagName('body')[0].lastElementChild;

let title = document.getElementsByTagName('title')[0];
title.textContent = 'Selasa';

let h1 = document.getElementById('selasa');
h1.style.color = 'red';

let checkbox = document.querySelector('input');
checkbox.checked = true;

let lengthLi = document.getElementsByTagName('li').length;
document.getElementsByTagName('li')[2].style.color = 'green';

let wrapper = document.querySelector('#wrapper');
wrapper.innerHTML = `
<h1>Hi ini title</h1>
<p>Hi ini paragraf</p>
`;

let bing = document.querySelector('#bing');
bing.style.fontSize = '50px';

// animation
document.getElementById('boxAnimation').style.animationName = 'newMove';

// toggle

// belum fix
let btn_toggle = document.querySelector('btn-toggle');
btn_toggle.classList.toggle('btn-toggle');

// console.log(btn_toggle);

// error
let inputText = document.getElementById('formInputText');
inputText.setAttribute('disabled', true);
