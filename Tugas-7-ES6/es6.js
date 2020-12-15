// Soal No. 1 (Array to Object)
console.log(`no 1 \n`);

const golden = () => {
    console.log("this is golden!!");
}

golden();

// Sederhanakan menjadi Object literal di ES6
console.log(`no 2 \n`);

const newFunction = (firstName, lastName) => {
    return {
        firstName,
        lastName,
        fullName() {
            console.log(firstName + " " + lastName);
            return;

        }
    }
};

newFunction("William", "Imoh").fullName();


// Destructuring
console.log(`no 3 \n`);

const newObject = {
    firstName: "Harry",
    lastName: "Potter Holt",
    destination: "Hogwarts React Conf",
    occupation: "Deve-wizard Avocado",
    spell: "Vimulus Renderus!!!"
}

const { firstName, lastName, destination, occupation } = newObject;

console.log(firstName, lastName, destination, occupation);

//Array Spreading
console.log(`no 4 \n`);
const west = ["Will", "Chris", "Sam", "Holly"];
const east = ["Gill", "Brian", "Noel", "Maggie"];

let combinedArray = [...west, ...east];
console.log(combinedArray);


// Template Literals
console.log(`no 5 \n`);
const planet = "earth"
const view = "glass"

let before = `Lorem ${view} dolor sit amet,
     consectetur adipiscing elit, ${planet} do eiusmod tempor
     incididunt ut labore et dolore magna aliqua. Ut enim
     ad minim veniam`;

// Driver Code
console.log(before) 
