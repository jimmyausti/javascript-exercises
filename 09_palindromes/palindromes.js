const palindromes = function (str) {
 // Remove punctuation and convert to lowercase
 const formattedStr = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');

 // Check if the formatted string is equal to its reversed version
 return formattedStr === formattedStr.split('').reverse().join('');
};

// Do not edit below this line
module.exports = palindromes;
