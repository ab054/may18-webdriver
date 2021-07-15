const car = {
    type: "Fiat",
    model: "500",
    color: "white",
    year: 2005
};

let carColor = car.color;

console.log(carColor);
let carModel = car["model"];

console.log(carModel);

let isEqual = false;

isEqual = 5 === "5";

console.log(isEqual);

if (car.year >= 2005 || car.color === "yellow") console.log("Car is new enough");

const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

let text = "";
for (let i = 0; i < cars.length; i++) {
    text += cars[i] + " ";
}

console.log(text);