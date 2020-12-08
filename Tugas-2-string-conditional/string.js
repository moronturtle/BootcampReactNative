//Soal No. 1 (Membuat kalimat)
var word = "JavaScript";
var second = "is";
var third = "awesome";
var fourth = "and";
var fifth = "I";
var sixth = "love";
var seventh = "it!";

const joinWord = `${word} ${second} ${third} ${fourth} ${fifth} ${sixth} ${seventh}`;
console.log(joinWord);

//Soal No.2 Mengurai kalimat (Akses karakter dalam string
console.log("\n");
var sentence = "I am going to be React Native Developer";
const newSentence = sentence.split(" ");

const firstWord = newSentence[0];
const secondWord = newSentence[1];
const thirdWord = newSentence[2];
const fourthWord = newSentence[3];
const fifthWord = newSentence[4];
const sixthWord = newSentence[5];
const seventhWord = newSentence[6];
const eighthWord = newSentence[7];

console.log("First Word: " + firstWord);
console.log("Second Word: " + secondWord);
console.log("Third Word: " + thirdWord);
console.log("Fourth Word: " + fourthWord);
console.log("Fifth Word: " + fifthWord);
console.log("Sixth Word: " + sixthWord);
console.log("Seventh Word: " + seventhWord);
console.log("Eighth Word: " + eighthWord);

//Soal No. 3 Mengurai Kalimat (Substring)
console.log("\n");
var sentence2 = "wow JavaScript is so cool";

var FirstWord2 = sentence2.substring(0, 3);
var secondWord2 = sentence2.substring(4, 14);
var thirdWord2 = sentence2.substring(15, 17);
var fourthWord2 = sentence2.substring(18, 20);
var fifthWord2 = sentence2.substring(21, 25);

console.log("First Word: " + FirstWord2);
console.log("Second Word: " + secondWord2);
console.log("Third Word: " + thirdWord2);
console.log("Fourth Word: " + fourthWord2);
console.log("Fifth Word: " + fifthWord2);

//Soal No. 4 Mengurai Kalimat dan Menentukan Panjang String
console.log("\n");
var sentence3 = "wow JavaScript is so cool";

var FirstWord3 = sentence3.substring(0, 3);
var secondWord3 = sentence3.substring(4, 14);
var thirdWord3 = sentence3.substring(15, 17);
var fourthWord3 = sentence3.substring(18, 20);
var fifthWord3 = sentence3.substring(21, 25);

var firstWordLength = FirstWord3.length;
var secondWordLength = secondWord3.length;
var thirdWordLength = thirdWord3.length;
var fourthWordLength = fourthWord3.length;
var fifthWordLength = fifthWord3.length;
// lanjutkan buat variable lagi di bawah ini
console.log("First Word: " + FirstWord3 + ", with length: " + firstWordLength);
console.log(
  "Second Word: " + secondWord3 + ", with length: " + secondWordLength
);
console.log("Third Word: " + thirdWord3 + ", with length: " + thirdWordLength);
console.log(
  "Fourth Word: " + fourthWord3 + ", with length: " + fourthWordLength
);
console.log("Fifth Word: " + fifthWord3 + ", with length: " + fifthWordLength);
