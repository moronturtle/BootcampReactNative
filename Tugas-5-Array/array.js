// Soal No. 1(Range)
console.log(`no 1 \n`);
let start = 54;
let finish = 50;

function createArrayRange(startNum, finishNum) {

    let range = [];
    if (startNum < finishNum) {
        for (let i = startNum; i <= finishNum; i++) {
            range.push(i);
        }
    }

    else if (startNum > finishNum) {
        for (let i = finishNum; i <= startNum; i++) {
            range.push(i);
        }
        range = range.sort(function (min, max) { return max - min });
    }
    else if (startNum || finishNum) {
        range = -1;
    }
    else {
        range = -1;
    }


    return range;

}
console.log(createArrayRange(start, finish));

//Soal No. 2 (Range with Step)
console.log(`no 2 \n`);
let start2 = 1;
let finish2 = 10;
let skip2 = 2;

function crangeWithStep(startNum, finishNum, skip) {

    let range = [];
    if (startNum < finishNum) {
        for (let i = startNum; i <= finishNum; i = i + skip) {
            range.push(i);
        }
    }

    else if (startNum > finishNum) {
        for (let i = finishNum; i <= startNum; i = i + skip) {
            range.push(i);
        }
        range = range.sort(function (min, max) { return max - min });
    }

    return range;

}
console.log(crangeWithStep(start2, finish2, skip2));


//Soal No. 3 (Range with Step)
console.log(`no 3 \n`);

let start3 = 5;
let finish3 = 50;
let skip3 = 2;

function sum(startNum, finishNum, skip) {

    let result = 0;
    typeof startNum === 'undefined' && typeof finishNum === 'undefined' && typeof skip === 'undefined'
    if (typeof startNum === 'undefined' && typeof finishNum === 'undefined' && typeof skip === 'undefined') {
        return result = 0;
    }

    if (typeof finishNum === 'undefined' && typeof skip === 'undefined') {
        return result = startNum;
    }

    if (typeof skip === 'undefined') {

        skip = 1;
    }

    let sum = crangeWithStep(startNum, finishNum, skip);
    for (let i = 0; i < sum.length; i++) {
        result += sum[i];
    }
    return result;

}
console.log(sum(start3, finish3, skip3));


// Soal No. 4(Array Multidimensi)
console.log(`no 4 \n`);
let input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]
let string = '';
console.log(input[1][2]);
for (let i = 0; i < input.length; i++) {

    for (let j = 0; j < input[i].length; j++) {

        if (j === 0) {
            string += `Nomor ID:  ${input[i][j]} \n`
        }
        if (j === 1) {
            string += `Nama Lengkap:  ${input[i][j]}\n`
        }
        if (j === 2) {
            string += `TTL:  ${input[i][j]}`
        }
        if (j === 3) {
            string += ` ${input[i][j]} \n`
        }
        if (j === 4) {
            string += `Hobi:  ${input[i][j]} \n`
        }

    }
    string += `\n`;
}
console.log(string);



// Soal No. 5 (Balik Kata)
console.log(`no 5 \n`);
string5 = 'SanberCode';

function balikKata(kata) {
    let string = '';
    for (let i = kata.length - 1; i >= 0; i--) {
        string += kata[i];
    }
    return string;
}

console.log(balikKata(string5));

//Soal No. 6 (Metode Array)
console.log(`no 6 \n`);

let input6 = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(input) {
    let month = '';
    input.splice(1, 4, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro");
    console.log(input);

    let tanggal = input[3].split('/');

    switch (tanggal[1]) {
        case "01":
            month = "Januari";
            break;
        case "02":
            month = "February";
            break;
        case "03":
            month = "Maret";
            break;
        case "04":
            month = "April";
            break;
        case "05":
            month = "Mei";
            break;
        case "06":
            month = "Juni";
            break;
        case "07":
            month = "Juli";
        case "08":
            month = "Agustus";
        case "09":
            month = "September";
        case "10":
            month = "Oktober";
        case "11":
            month = "November";
        case "12":
            month = "Desember";
    }

    console.log(`${month} \n`);
    formatDate = tanggal.sort(function (min, max) { return max - min });
    console.log(`${formatDate} \n`);
    joinDate = tanggal.join("-");
    console.log(`${joinDate} \n`);

    return '';

}

console.log(dataHandling2(input6));
