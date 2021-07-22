import Car from "./car.js";

describe('my Car test suite', () => {
    it('car should be able to turn and stop', function () {
        let myCar = new Car("Ford", 2004);
        myCar.turnLeft();
        myCar.stop();
        let another = new Car("Toyota", 2005);
        another.turnLeft();
    });
});




