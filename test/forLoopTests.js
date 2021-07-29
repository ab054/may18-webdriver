describe("For loop", () => {

    it("should go over array values", () => {
        const myCars = ["firstCar", "anotherCar", "and Another one"]

        for (let i = 0; i < myCars.length; i++) {
            console.log(myCars[i]);
        }

    });

    it("should log even undefined values", () => {
        const myCars = ["firstCar", "anotherCar", "and Another one"]

        for (let i = 0; i <= myCars.length; i++) {
            console.log(myCars[i]);
        }
    });

})