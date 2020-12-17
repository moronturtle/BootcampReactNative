var readBooksPromise = require('./promise.js')

var books = [
    { name: 'LOTR', timeSpent: 3000 },
    { name: 'Fidas', timeSpent: 2000 },
    { name: 'Kalkulus', timeSpent: 4000 }
]

function callReadBookPromises(time, data) {
    readBooksPromise(time, data)
        .then(function (result) {
            console.log(result);
        })
        .catch(function (error) {
            console.log(error);
        });
}

for (let i = 0; i < books.length; i++) {
    callReadBookPromises(10000, books[i]);
}
