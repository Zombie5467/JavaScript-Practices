function greet(name = 'Hi there!') {
  console.log(`he yoo ${name}`);
}

function convertToFahrenheit(Celsius) {
  return Celsius * (9 / 5) + 32;
}

function convertToCelsius(Fahrenheit) {
  return (Fahrenheit - 32) * (5 / 9);
}

// eslint-disable-next-line consistent-return
function convertTemperature(degrees, unit) {
  if (unit === 'c') {
    const result = convertToFahrenheit(degrees);
    return `${result} F`;
  }
  if (unit === 'f') {
    const result = convertToCelsius(degrees);
    return `${result} C`;
  }
  // return convertTemperature();
}

greet('Zombie');
greet('Chart');
greet('Miguel');
greet();
console.log(convertToFahrenheit(25));
console.log(convertToCelsius(86));
console.log(convertTemperature(25, 'c'));
console.log(convertTemperature(86, 'f'));
