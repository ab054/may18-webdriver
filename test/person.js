export default class Person {

    constructor(first, last, age, gender, interests) {
        this.name = {
            first,
            last
        };
        this.age = age;
        this.gender = gender;
        this.interests = interests;
    }

    greeting() {
        console.log(`Hi! I'm ${this.name.first}`);
    };

    farewell() {
        console.log(`${this.name.first} has left the building. Bye for now!`);
    };
}