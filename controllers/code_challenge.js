let sort = function (arr) {
    let odd = [], even = [], result = [];
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number') {
            if (arr[i] % 2) {
                even.push(arr[i])
            } else {
                odd.push(arr[i])
            }
        } else {
            console.log("Please enter a valid number in the list");
            return false;
        }
    }
    result = [...even, ...odd]
    return result;
}

let usedChars = [], permArr = [], uniqueArray = [];
let permutation = function (input, clearFlag) {
    let i, ch;
    if (!clearFlag) { permArr = []; usedChars = []; uniqueArray = [] }
    for (i = 0; i < input.length; i++) {
        ch = input.splice(i, 1)[0];
        usedChars.push(ch);
        if (input.length == 0) {
            permArr.push(usedChars.slice());
        }
        permutation(input, true);
        input.splice(i, 0, ch);
        usedChars.pop();
    }
    return uniqueArray = Array.from(new Set(permArr.map(JSON.stringify)), JSON.parse);
};

module.exports = {
    sort,
    permutation
};