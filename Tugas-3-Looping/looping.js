//No. 1 Looping While 
let i = 2;

console.log(`looping pertama \n`);

while (i <= 20) {
  if (i % 2 === 0) {
    console.log(`${i} - I love coding \n`)
  }

  i++;
}

let j = 20;
console.log(`looping Kedua \n`);

while (j >= 2) {
  if (j % 2 === 0) {
    console.log(`${j} - I will become a mobile developer \n`)
  }
  j--;
}

// No. 2 Looping menggunakan for
console.log(`Soal Looping Kedua \n`);
let iNo2;
for (iNo2 = 1; iNo2 <= 20; iNo2++) {

  if (iNo2 % 2 !== 0) {
    if (iNo2 % 2 !== 0 && iNo2 % 3 === 0) {
      console.log(`${iNo2} - I Love Coding \n`)
    }
    else {
      console.log(`${iNo2} - Santai \n`)
    }
  }

  if (iNo2 % 2 === 0) {

    console.log(`${iNo2} - Berkualitas \n`)
  }
}


// No. 3 Membuat Persegi Panjang #
console.log(`Soal Persegi Panjang Nomer 3 \n`);
let iNo3;
let jNo3;
for (iNo3 = 0; iNo3 <= 3; iNo3++) {
  let persegiPanjang = '';
  for (jNo3 = 0; jNo3 <= 7; jNo3++) {
    persegiPanjang += '#';
  }
  console.log(persegiPanjang);
}

// No. 4 Membuat Tangga  #
console.log(`Soal Membuat Tangga 4 \n`)
let iNo4;
let jNo4;
let segitiga = '';
for (iNo4 = 0; iNo4 <= 6; iNo4++) {
  segitiga += '#';
  for (jNo4 = 0; jNo4 <= 6; jNo4++) {
    segitiga += '';
  }
  console.log(segitiga);
}

// No. 5 Membuat Papan Catur
console.log(`Soal Membuat Papan Catur 5 \n`)
let iNo5;
let jNo5;

for (iNo5 = 1; iNo5 <= 8; iNo5++) {
  let catur = '';
  for (jNo5 = 1; jNo5 <= 8; jNo5++) {
    if (iNo5 % 2 != 0) {
      if (jNo5 % 2 === 0) {
        catur += '#';
      }
      else {
        catur += ' ';
      }
    }

    if (iNo5 % 2 === 0) {
      if (jNo5 % 2 != 0) {
        catur += '#';
      }
      else {
        catur += ' ';
      }
    }

  }
  console.log(catur);
}

