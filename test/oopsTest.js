import Person from "./person.js";
import Teacher from "./teacher.js";


describe('My first UI test', () => {

    it('Person test', async () => {
        let alex = new Person("Alex", "Barabash", 35, "male", "javascript");

        alex.greeting();
    });

    it('Teacher test', async () => {
        let alex = new Teacher("Alex", "Barabash", 35, "male", "javascript", "automation", "A");

        alex.greeting();

        console.log(alex.age);
        console.log(alex.lastname)
    });

});