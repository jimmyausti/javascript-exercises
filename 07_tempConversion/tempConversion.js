const convertToCelsius = (fahrenheitTemp) => {
  let celsius = parseFloat(((fahrenheitTemp - 32) * (5/9)).toFixed(1))
  if (celsius.toString().charAt(celsius.toString().length - 1) === 0) {
    return parseInt(celsius)
  } return celsius
  
}

const convertToFahrenheit = (celsiusTemp) => {
  let fahrenheit = parseFloat((celsiusTemp * (9/5) + 32).toFixed(1))
  if (fahrenheit.toString().charAt(fahrenheit.toString().length - 1) === 0) {
    return parseInt(fahrenheit)
  } return fahrenheit
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
