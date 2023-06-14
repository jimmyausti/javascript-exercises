const removeFromArray = (array, ...nums) => {
    return array.filter((arg) => !nums.includes(arg))
    };

// Do not edit below this line
module.exports = removeFromArray;
