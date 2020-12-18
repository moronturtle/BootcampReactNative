//Release 0 
class Animal {
    constructor(animalName) {
        this.animalName = animalName;
    }

    get name() {
        return this.animalName;
    }

    get legs() {
        return 4;
    }
    get cold_blooded() {
        return false;
    }
}

var sheep = new Animal("shaun");

console.log(sheep.name);
console.log(sheep.legs);
console.log(sheep.cold_blooded);

console.log(`\n`);
//Release 1
class Frog extends Animal {
    constructor(animalName) {
        super(animalName);
    }
    jump() {
        return `${this.name} hop hop`;
    }
}

class Ape extends Animal {
    constructor(animalName) {
        super(animalName);
    }

    yell() {
        return `${this.name} Auooo`;
    }
}
var sungokong = new Ape("kera sakti");
console.log(sungokong.yell());

var kodok = new Frog("buduk");
console.log(kodok.jump());


console.log(`\n`);
//Release 2


// function Clock({ template }) {

//     var timer;

//     function render() {
//         var date = new Date();

//         var hours = date.getHours();
//         if (hours < 10) hours = '0' + hours;

//         var mins = date.getMinutes();
//         if (mins < 10) mins = '0' + mins;

//         var secs = date.getSeconds();
//         if (secs < 10) secs = '0' + secs;

//         var output = template
//             .replace('h', hours)
//             .replace('m', mins)
//             .replace('s', secs);

//         console.log(output);
//     }

//     this.stop = function () {
//         clearInterval(timer);
//     };

//     this.start = function () {
//         render();
//         timer = setInterval(render, 1000);
//     };



class Clock {
    constructor(template) {
        this.template = template.template;
        this.timer = 0;
    }

    render() {
        let date = new Date();

        let hours = date.getHours();
        if (hours < 10) hours = '0' + hours;

        let mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;

        let secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;

        console.log('apasih', this.template);
        let output = this.template
            .replace('h', hours)
            .replace('m', mins)
            .replace('s', secs);

        console.log(output);
    }

    stop() {
        clearInterval(this.timer);
    }

    start() {
        this.render();
        this.timer = setInterval(this.stop, 1000);
    }

}

var clock = new Clock({ template: 'h:m:s' });
clock.start();  