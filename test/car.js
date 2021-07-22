class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    drive() {
        console.log("I am driving");
    }

    stop() {
        console.log("I am stopping");
    }

    turnLeft() {
        console.log("Now I am turning left differently");
    }

    turnRight() {
        console.log("I am turning");
    }
}

export default Car