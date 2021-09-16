export default class Person {

    constructor(name, lastname, age, gender, skills) {
        this.name = name;
        this.lastname = lastname;
        this.age = age;
        this.gender = gender;
        this.skills = skills;
    }

    greeting() {
        console.log("Hi " + this.name)
    }
}