let thing = "test";
let thing2 = " TEST2";
console.log(thing + " " + thing2);
console.log(thing.toUpperCase());
console.log(thing2.toLowerCase());
console.log(thing.length);
console.log(thing[0]);

let num1 = 5;
let num2 = 7;
console.log(num1 + num2);
cToF = num1*1.8 + 32;
console.log(cToF);
if (num1%2 == 1) {
    console.log("Odd")}
    else {console.log("Even")};
console.log(Math.max(num1,num2));

let name = "Kamran";
let age = 38;
console.log("Welcome from " + name + " " + age);

let str1 = "38";
let str2 = "48";

resultStr = parseFloat(str1) + parseFloat(str2);
console.log(resultStr.toString())

if (name.length > 100) {
    console.log("String is greater than 100 characters")
} else {
    console.log("The string is smaller than 100 characters")
}

function randCapt(str) {
    let randStr = ''
    for (let i = 0; i < str.length; i++){
        randNum = Math.random() < 0.5; // Random True or False
        if (randNum) {
            randStr += str[i].toUpperCase();
        } else {
            randStr += str[i].toLowerCase();
        }
    }
    return randStr
}

console.log(randCapt(name))
