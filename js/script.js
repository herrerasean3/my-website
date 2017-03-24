/*var myFun;

myFun = function () {
    console.log("Function Expression");
};

myFun();
myOtherFun();

function myOtherFun() {
    console.log("Function Declaration");
}*/

function sayHello() {
    console.log("Hello!");
}

var sayBye = function () {
    console.log("Bye Bye!");
};

sayHello();

var dog = {
    legs: 4,
    goodDog: true,
    color: "brown",
    bark: function (numBarks) {
        for (var x = 0; x < numBarks; x++){
            console.log("Woof Woof");
        }
        
    },
    ears: "Floppy"
};

var cat = {}

dog.bark(9);
console.log(dog.legs);

cat.paws = 4;
cat.furry = true;