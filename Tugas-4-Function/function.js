// No. 1 
// Tulislah sebuah function dengan nama teriak() 
// yang mengembalikan nilai “Halo Sanbers!” yang kemudian dapat ditampilkan di console.

console.log(`nomer 1 \n`);
function teriak() {
    return "Halo Sanbers!";
}
console.log(teriak());

console.log(`nomer 2 \n`);

// No. 2
// Tulislah sebuah function dengan nama kalikan() yang mengembalikan hasil perkalian dua parameter yang di kirim.

let num1 = 12
let num2 = 4

function kalikan(num1, num2) {
    return num1 * num2;
}

let hasilKali = kalikan(num1, num2);
console.log(hasilKali);

console.log(`nomer 3 \n`);
// No. 3
// Tulislah sebuah function dengan nama introduce() yang memproses paramater yang dikirim 
// menjadi sebuah kalimat perkenalan seperti berikut: “Nama saya [name], 
// umur saya [age] tahun, alamat saya di [address], dan saya punya hobby yaitu [hobby]!”

let name = "Agus"
let age = 30
let address = "Jln. Malioboro, Yogyakarta"
let hobby = "Gaming"

function introduce(name, age, address, hoby) {
    return `Nama saya ${name}, umur saya ${age} tahun, alamat saya
    di ${address}, dan saya punya hobby yaitu ${hobby}`;
}

let perkenalan = introduce(name, age, address, hobby)
console.log(perkenalan) 
