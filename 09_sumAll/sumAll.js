const sumAll = function (a, b) {
    // Validations
    if (a < 0 || b < 0) {
        return 'ERROR';
    } else if (typeof a != 'number' || typeof b != 'number') {
        return 'ERROR';
    } else if (a % 1 !== 0 || b % 1 !== 0) {
        return 'ERROR';
    }

    let sum = 0;
    const [initial, last] = a < b ? [a, b] : [b, a];
    // let sum = 0;
    // let initial = 0;
    // let last = 0;
    // if (a < b) {
    //     initial = a;
    //     last = b;
    // } else if (a > b) {
    //     initial = b;
    //     last = a;
    // }

    for (let i = initial; i < last + 1; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
