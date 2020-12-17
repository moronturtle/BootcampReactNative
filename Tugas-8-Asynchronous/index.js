var readBooks = require('./callback.js');

var books = [
    { name: 'LOTR', timeSpent: 3000 },
    { name: 'Fidas', timeSpent: 2000 },
    { name: 'Kalkulus', timeSpent: 4000 }
]

for (let i = 0; i < books.length; i++) {
    readBooks(10000, books[i], function (data) {
        console.log(`${data}`);
    });
}
