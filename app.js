const people = [
  {
    name: "Carly",
    yearOfBirth: 2018,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
]

const findTheOldest = (array) => {
 array.reduce((oldest, current) => {
  const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath)
  const currentAge = getAge(current.yearOfBirth, current.yearOfDeath)
  return currentAge > oldestAge ? current : oldest
 })

 const getAge = (birth, death) => {
  if (!death) {
    death = new Date().getFullYear();
  }
  return death - birth
 }
};

console.log(findTheOldest(people).name)
