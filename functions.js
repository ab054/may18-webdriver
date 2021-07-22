function greet(name, lastName) {
    let result = "Hello " + name + " " + lastName;
    console.log(result);
}

function addOfTwo(numberOne, numberTwo) {
    let result = numberOne + numberTwo;
    return result;
}

addOfTwo(2, 4)

greet("John", "Doe");

let summary = addOfTwo(2, 4);

console.log(summary);

const people = ["John", "Ivan", "Alex"];

people.pop();

console.log(people);

people.push("Alex 2");

console.log(people);

people.shift();

console.log(people);

people.unshift("New Person");

console.log(people);
