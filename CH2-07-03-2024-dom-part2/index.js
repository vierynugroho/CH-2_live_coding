//! Declaration Variable
let button_drum_ = document.querySelectorAll('.drum');

//! Declaration Function
function handleClickDrum(e) {
	let id_click = this.textContent;
	let id_keyboard = e.key;

	switch (id_click || id_keyboard) {
		case 'w':
			let audio_w = new Audio('./sounds/tom-1.mp3');
			audio_w.play();
			break;
		case 'a':
			let audio_a = new Audio('./sounds/tom-2.mp3');
			audio_a.play();
			break;
		case 's':
			let audio_s = new Audio('./sounds/tom-3.mp3');
			audio_s.play();
			break;
		case 'd':
			let audio_d = new Audio('./sounds/tom-4.mp3');
			audio_d.play();
			break;
		case 'j':
			let audio_j = new Audio('./sounds/snare.mp3');
			audio_j.play();
			break;
		case 'k':
			let audio_k = new Audio('./sounds/crash.mp3');
			audio_k.play();
			break;
		case 'l':
			let audio_l = new Audio('./sounds/kick-bass.mp3');
			audio_l.play();
			break;
		default:
			if (this.textContent) {
				alert('click: APASIH SOK A6');
			} else {
				alert('keyboard: APASIH SOK A6');
			}
	}

	buttonAnimation(id_click, id_keyboard);
}

function buttonAnimation(click, keyboard) {
	console.log('click: ' + click);
	console.log('keyboard:' + keyboard);

	let id_click_active = document.querySelector(`.${click}`);
	let id_keyboard_active = document.querySelector(`.${keyboard}`);

	id_click_active != undefined ? id_click_active.classList.add('pressed', 'white') : id_keyboard_active.classList.add('pressed', 'white');

	setTimeout(() => {
		id_click_active == undefined ? id_keyboard_active.classList.remove('pressed', 'white') : id_click_active.classList.remove('pressed', 'white');
	}, 100);
}

//! Event Handler
for (let i = 0; i < button_drum_.length; i++) {
	//! click
	button_drum_[i].addEventListener('click', handleClickDrum);

	//! keyboard
	addEventListener('keydown', handleClickDrum);
}

//! -------------- Live Coding --------------
// let drumButtons = document.querySelectorAll('.drum');

// for (let i = 0; i < drumButtons.length; i++) {
// 	drumButtons[i].addEventListener('click', function () {
// 		let btnInnerHTML = this.innerHTML;
// 		makeSound(btnInnerHTML);
// 		buttonAnimation(btnInnerHTML);
// 	});
// }

// addEventListener('keypress', function (e) {
// 	makeSound(e.key);
// 	buttonAnimation(e.key);
// });

// function makeSound(key) {
// 	switch (key) {
// 		case 'w':
// 			let audio_w = new Audio('./sounds/tom-1.mp3');
// 			audio_w.play();
// 			break;
// 		case 'a':
// 			let audio_a = new Audio('./sounds/tom-2.mp3');
// 			audio_a.play();
// 			break;
// 		case 's':
// 			let audio_s = new Audio('./sounds/tom-3.mp3');
// 			audio_s.play();
// 			break;
// 		case 'd':
// 			let audio_d = new Audio('./sounds/tom-4.mp3');
// 			audio_d.play();
// 			break;
// 		case 'j':
// 			let audio_j = new Audio('./sounds/snare.mp3');
// 			audio_j.play();
// 			break;
// 		case 'k':
// 			let audio_k = new Audio('./sounds/crash.mp3');
// 			audio_k.play();
// 			break;
// 		case 'l':
// 			let audio_l = new Audio('./sounds/kick-bass.mp3');
// 			audio_l.play();
// 			break;
// 		default:
// 			alert('gak ada buttonnya');
// 	}
// }

// function buttonAnimation(key) {
// 	let activeBtn = document.querySelector('.' + key);
// 	console.log('.' + key);
// 	activeBtn.classList.add('white');
// 	activeBtn.classList.add('pressed');

// 	setTimeout(function () {
// 		activeBtn.classList.remove('pressed');
// 		activeBtn.classList.remove('white');
// 	}, 100);
// }
