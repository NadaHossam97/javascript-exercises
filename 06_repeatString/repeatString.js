const repeatString = function (string, freq) {
    let output = '';
    if (freq < 0) {
        return 'ERROR';
    }
    for (let i = 1; i <= freq; i++) {
        output += string;
    }
    return output;
};

// Do not edit below this line
module.exports = repeatString;
