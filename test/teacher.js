import Person from "./person.js";

export default class Teacher extends Person {

    constructor(first, last, age, gender, interests, subject, grade) {
        super(first, last, age, gender, interests);

        // subject and grade are specific to Teacher
        this.subject = subject;
        this.grade = grade;
    };

    greeting() {
        console.log(`Hi! I'm ${this.name.first}` + ` ${this.name.last}` + ` your ${this.subject} instructor`);
    };

    greeting(greeting) {
        console.log(greeting + ` I'm ${this.name.first}`);
    };
}