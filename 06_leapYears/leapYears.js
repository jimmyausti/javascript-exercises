const leapYears = (year) => {
    // is the current year divisible by 4?
    if (!(year % 4)) {
    // if so, is it divisible by 400 and 100?
        if (!!(year % 100) || !(year % 400)) {
            return true
        }
    } return false
}

// Do not edit below this line
module.exports = leapYears;
