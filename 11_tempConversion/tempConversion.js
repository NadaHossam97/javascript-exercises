const convertToCelsius = function (tempF) {
    const celsius = (tempF - 32) * (5 / 9);
    let roundedC = celsius.toFixed(1);
    if (roundedC % 1 == 0) {
        return Math.round(roundedC);
    } else {
        return +roundedC;
    }
};

const convertToFahrenheit = function (tempC) {
    const fahrenheit = tempC * (9 / 5) + 32;
    let roundedF = fahrenheit.toFixed(1);
    if (roundedF % 1 == 0) {
        return Math.round(roundedF);
    } else {
        return +roundedF;
    }
};

// Do not edit below this line
module.exports = {
    convertToCelsius,
    convertToFahrenheit,
};
