let x = 6;
let y, z;

y = 3;
z = 5;

let sum = y + z;

let carName1 = "Volvo XC60";

const myCars = [carName1, "anotherCar"]

let firstCar = myCars[0];
let secondCar = myCars[1]

console.log(firstCar)

function multiOfTwo(p1, p2) {
    return p1 * p2;   // The function returns the product of p1 and p2
}

function printCarNames(firstCarParam, secondCarParam) {
    console.log(firstCarParam);
    console.log(secondCarParam)
}

let result = multiOfTwo(2, 4);

printCarNames(myCars[0], myCars[1]);

console.log(result)
