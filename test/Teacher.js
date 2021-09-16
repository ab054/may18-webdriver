import Person from "./person.js";

export default class Teacher extends Person {

    constructor(name, lastname, age, gender, skills, subject, grade) {
        super(name, lastname, age, gender, skills);

        this.subject = subject;
        this.grade = grade;
        this._lastname = lastname;
        this._age = age;
    }

    get lastname() {
        return this._lastname;
    }

    set lastname(value) {
        this._lastname = value;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        this._age = value;
    }

    greeting() {
        console.log("Hi " + this.name + " " + this.lastname + "!")
    }
}