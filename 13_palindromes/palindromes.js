const palindromes = function (string) {
cleanedString = string.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");

reversedString = string.split('').reverse().join('');

cleanedRversedString = reversedString.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");

return cleanedString == cleanedRversedString
};

// Do not edit below this line
module.exports = palindromes;
