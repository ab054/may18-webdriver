import assert from 'assert';

describe("comparison operator", () => {

    it("should compare value", () => {
        let x = 5;
        let y = 6;

        let actual = x > y;

        let expected = true;

        assert.strictEqual(actual, expected, "comparison operator > failed");

        console.log("should compare value succeeded")
    });


})