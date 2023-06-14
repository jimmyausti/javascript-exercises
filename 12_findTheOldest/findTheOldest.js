const findTheOldest = (array) => {
    return array.reduce((oldest, current) => {
     const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath)
     const currentAge = getAge(current.yearOfBirth, current.yearOfDeath)
     return currentAge > oldestAge ? current : oldest
    })
   
};
const getAge = (birth, death) => {
 if (!death) {
   death = new Date().getFullYear();
 }
 return death - birth
}
// Do not edit below this line
module.exports = findTheOldest;
