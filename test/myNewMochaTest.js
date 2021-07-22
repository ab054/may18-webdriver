import assert from "assert";

describe('my test name', () => {
    it('should return -1 when the value is not present', function () {
        let actualValue = [1, 2, 3].indexOf(4); // -1
        let expectedResult = -1;
        assert.strictEqual(actualValue, expectedResult);
    });
});
