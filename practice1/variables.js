let iString = "It's a string";
let iX = 45;
let iY = 23.12;
let iActive = true;
let iUnderfined;
let iNull = null;
let iObject = {};

let newX = iX + 5;
let nweX2 = newX + 5.5;
let newX3 = newX + "5.5";

let iArray = new Array();
console.log(typeof iArray);
let iArrayToo = [];
console.log(typeof iArrayToo);

let iArray3 = [1, 2, 3, "one", "two", "three"]
console.log(iArray3);
console.log(iArray3[0]);

iArray3[4] = 4
console.log(iArray3[4]);

let iMatrix = [[1, 2, 3],[4, 5, 6]];

console.log(iMatrix);

let people = [
    ["Вася", 25, false],
    ["петя", 23, false],
    ["Таня", 24, true],
];

console.log(people);

let User = {
name: "Василий",
lastname: "Теркин",
age: 18
};

console.log(User);
console.log(User.name);
console.log(User.age);

delete User.age;
console.log(User);

let User2 = {
    name: "Василий",
    lastname: "Теркин",
    age: 18,
    interests:["Спорт", "Музыка", "Кино"],
    skills:["JavaScript", "Web programming", "HTML", "CSS"],
    pet:{
        name: "Мурзик",
        type: "Кот",
        color: "Черный",
    },
    };

    console.log(User2);

    let Dog = {
        name: "Шарик",
        color: "Белый",
    };

    Dog.voice = function(){
        console.log("Гав!");
    }

    Dog.voice();

    let Cat = {
        name: "Барсик",
        voice: function() {console.log("Мяу!");}
    }
    Cat.voice();

    let User3 = {
        name: "Василий",
        lastname: "Теркин",
        whoami : function(){
            console.log("Меня зовут " + this.name + " " + this.lastname + "!");
        }
    };
User3.whoami();

let propertyName = "firstname";

let User4 = {
    [propertyName]: "Василий",
};
    
console.log("User4.firstname = ", User4.firstname);

let User5 = {
    name: "Василий",
};

let Speciality = {
    type: "Программист"
}

let Qualification = {
    qualification: "Junior"
}

Object.assign(User5, Speciality, Qualification);