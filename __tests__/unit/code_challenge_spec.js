const store = require("../../controllers/code_challenge.js");

describe("Odd numbers are sorted before even numbers from a list of numbers", () => {

    it("Accept numbers only in a given input", () => {
        expect(store.sort([1, 2, 3, 4, 5, 6, 7, 8, 9])).toEqual([1, 3, 5, 7, 9, 2, 4, 6, 8]);
    });

    it("Throws error when the given input has any string", () => {
        expect(store.sort([1, 2, 3, 'k', 5, 6, 7, 8, 9])).toEqual(false);
    });

});

describe("Return all unique permutations of a list of numbers", () => {

    it("Assert the length of the output is same, if the inputs are unique", () => {
        let length = store.permutation([1, 2, 3, 4], false).length
        expect(length).toEqual(24);
    });

    it("Assert the length of the output is same, if the input has duplicate numbers", () => {
        let length = store.permutation([1, 2, 3, 3], false).length
        expect(length).toEqual(12);
    });

    it("Assert the length of the output is same, if the input has string", () => {
        let length = store.permutation([1, 2, 'k', 's'], false).length
        expect(length).toEqual(24);
    });

    it("Assert the length of the output is same, if the input has duplicate string", () => {
        let length = store.permutation([1, 'k', 'k', 'k'], false).length
        expect(length).toEqual(4);
    });

});
