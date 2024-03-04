// alert('Hello FSW 1 Tercintee akuhh 😘');
console.log(2 + 2); // 4
console.log('2' + 2); // 22
console.log(1 === true); // tipe data & value must be same // false
console.log(1 == true); // value must be same // true

console.log(typeof 2); // number
console.log(typeof '2'); // string
console.log(typeof true); // boolean

let myName = 'Viery';
console.log('my name is ' + myName);
console.log(`my name is ${myName}`);

let random_number = Math.floor(Math.random() * 20) + 1;
console.log(random_number);

let username = prompt('Nama kamuh?');
let nilai = prompt('Berapa nilai SMA mu kawankuhh?');

const cek_nilai = (nilai) => {
	if (nilai >= 91 && nilai <= 100) {
		console.log(`Hi ${username}! Nilaimu:' ${nilai} - Predikat A`);
	} else if (nilai >= 81 && nilai <= 90) {
		console.log(`Hi ${username}! Nilaimu:' ${nilai} - Predikat B`);
	} else if (nilai >= 71 && nilai <= 80) {
		console.log(`Hi ${username}! Nilaimu:' ${nilai} - Predikat C`);
	} else if (nilai >= 61 && nilai <= 70) {
		console.log(`Hi ${username}! Nilaimu:' ${nilai} - Predikat D`);
	} else if (nilai <= 60) {
		console.log(`Hi ${username}! Nilaimu:' ${nilai} - Predikat E`);
	} else {
		console.log(`Hi ${username}! Nilai Ujian ${nilai} - Tch Anda Terlalu Cerdas!`);
	}
};

cek_nilai(nilai);

// fizz buzz
const score = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

const fizzBuzz = (score) => {
	let output = '';

	for (let i = 0; i < score.length; i++) {
		if (score[i] % 3 === 0 && score[i] % 5 === 0) {
			output += 'Fizz_Buzz ';
		} else if (score[i] % 3 === 0) {
			output += 'Fizz ';
		} else if (score[i] % 5 === 0) {
			output += 'Buzz ';
		} else {
			output += `${score[i]} `;
		}
	}

	return output;
};

console.log(fizzBuzz(score));
