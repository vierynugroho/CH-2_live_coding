//TODO: Mini Challenge 04 Maret 2024

// 1. jika student mengisi MAU pada student wish, maka prompt lagi pertanyaan, BERAPA KAH NILAI AKHIR SMA/SMK mu ?
// 2. jika nilai akhir dari SMA/SMK mu kurang dari 30, maka alert "tidak mungkin masuk univ"
// 3. jika nilai akhir dari SMA/SMK mu kurang dari 50, maka lakukan perhitungan chanceGetUniv =
//     3a. jika hasil chanceGetUniv dibawah 50 persen, berikan alert "hmm kemungkinan kamu (NAMA) kecil masuk UNIV"
//     3b. jika hasil chanceGetUniv diatas 50 persen, berikan alert "hmm kemungkinan kamu (NAMA) bisa masuk UNIV"
// 4. jika hasil chanceGetUniv diatas 70 persen DAN Nilai SMA nya diatas 60 maka berikan alert "hei (NAMA) pasti masuk UNIV dengan (NILAI SMA) mu yang besar itu"
// 5. jika hasil chanceGetUniv diatas 70 persen ATAU Nilai SMA nya diatas 80 maka berikan alert "hei (NAMA) pasti masuk UNIV dengan (NILAI SMA) mu yang besar itu"

//TODO: happy hacking 🤓

let username = prompt('Siapa Namamu?');
let masukUniv = prompt('Mau masuk univ? (mau / tidak)');
let chanceGetUniv = Math.random() * 100;
chanceGetUniv = Math.floor(chanceGetUniv);

// nomor 1
if (masukUniv == 'mau' || masukUniv == 'MAU') {
	let nilai = prompt('Berapa nilai akhir SMA/SMK mu?');

	console.log('changeGetUniv: ' + chanceGetUniv);

	// nomor 2
	if (nilai < 30) {
		alert('Tidak Mungkin Masuk univ!');
	}
	// nomor 3
	else if (nilai < 50) {
		// 3b
		if (chanceGetUniv > 50) {
			alert(`hmm kemungkinan ${username} bisa masuk UNIV`);
		}
		// 3a
		else if (chanceGetUniv < 50) {
			alert(`hmm kemungkinan ${username} kecil masuk UNIV`);
		}
	}
	// nomor 5
	else if (chanceGetUniv > 70 && nilai > 80) {
		alert(`Hei ${username} pasti masuk UNIV dengan Nilai (${nilai}) yang sangat besar itu`);
	}
	// nomor 4
	else if (chanceGetUniv > 70 || nilai > 60) {
		alert(`Hei ${username} pasti masuk UNIV dengan Nilai (${nilai}) yang besar itu`);
	}
} else {
	alert('yaudah sih, owh aja gueh');
}
