let head = document.getElementsByTagName('head')[0];
let lastChild = document.getElementsByTagName('body')[0].lastElementChild;

let title = document.getElementsByTagName('title')[0];
title.textContent = 'Selasa';

let h1 = document.getElementById('selasa');
h1.style.color = 'red';

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
let checkbox = document.querySelector('input');
checkbox.checked = true;
checkbox.addEventListener('change', function () {
	if (checkbox.checked) {
		console.log('Checkbox is checked');
	} else {
		console.log('Checkbox is not checked');
	}
});

const onSubmit = () => {
	alert('Submit!');
};

let inputText = document.getElementById('formInputText');
inputText.setAttribute('disabled', true);
