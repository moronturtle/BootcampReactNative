// Soal No. 1 (Array to Object)
console.log(`no 1 \n`);
let users = [["Bruce", "Banner", "male", 1975], ["Natasha", "Romanoff", "female"]];

const obj = {};
function arrayToObject(data) {

    let now = new Date();
    let thisYear = now.getFullYear();
    let result = {};
    for (let i = 0; i < data.length; i++) {
        let temp = {
            "firstname": data[i][0],
            "lastname": data[i][1],
            "gender": data[i][2],
            "age": `${thisYear - data[i][3]}`
        }
        let key = `${i + 1}. ${data[i][0]} ${data[i][1]}`;
        result[key] = temp;
    }
    return result;
}
console.log(arrayToObject(users));

// Soal No. 2 (Shopping Time)
console.log(`no 2 \n`);

function shoppingTime(memberId, money) {
    const products = {
        "Sepatu brand Stacattu": 1500000,
        "Baju brand Zoro": 500000,
        "Baju brand H&N ": 250000,
        "Sweater brand Uniklooh": 175000,
        "Casing Handphone": 50000
    }


    let totalPrice = [];
    let result = {};
    let changeMoney = money;
    let listPurchased = [];

    for (let key in products) {
        totalPrice.push(products[key]);
    }

    if (memberId === '' || (memberId === undefined && money === undefined)) {
        return 'Mohon maaf, toko X hanya berlaku untuk member saja';
    }
    if (memberId != '' && money <= Math.min.apply(null, totalPrice)) {
        return 'Mohon maaf, uang tidak cukup';
    }

    for (let key in products) {
        if (changeMoney >= products[key]) {
            listPurchased.push(key);
            changeMoney = changeMoney - products[key];
        }
    }

    return result = {
        "memberId": memberId,
        "money": money,
        "listPurchased": listPurchased,
        "changeMoney": changeMoney
    }
}

console.log(shoppingTime('234JdhweRxa53', 700000));


// Soal No. 3 (Naik Angkot)
console.log(`no 3 \n`);

function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];

    let result = [];
    let from = 0;
    let to = 0;

    for (let i = 0; i < arrPenumpang.length; i++) {

        rute.forEach((value, index) => {
            if (value === arrPenumpang[i][1]) {
                from = index;
            }
            if (value === arrPenumpang[i][2]) {
                to = index;
            }
        });

        let bayar = 0;
        for (let j = from; j < to; j++) {
            bayar += 2000;
        }

        let temp = {
            "penumpang": arrPenumpang[i][0],
            "naikDari": arrPenumpang[i][1],
            "tujuan": arrPenumpang[i][2],
            "bayar": bayar
        };

        result[i] = temp;
    }
    return result;
    //your code here
}

console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));