
function sumAll(init, final) {
    // check if params are positive integers
    if (Number.isInteger(init && final) && (init > 0 && final > 0)) {
        // works when the initial number is less than the final number
        if (final > init) {
            let sum = 0
            for (let i = init; i <= final; ++i) {
                sum += i
            }
            return sum
        // vice versa
        } if (init > final) {
            let sum = 0
            for (let i = final; i <= init; ++i) {
                sum += i
            }
            return sum
        }
    } return 'ERROR'
}


// Do not edit below this line
module.exports = sumAll;
