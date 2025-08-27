const celsiusElement = document.getElementById("celsius");
const fahrenheitElement = document.getElementById("fahrenheit");
const kelvinElement = document.getElementById("kelvin");

function calculateTemperature(from) {
  let celsius, fahrenheit, kelvin;

  if (from === "C") {
    celsius = Number(celsiusElement.value);
    fahrenheit = (celsius * 9) / 5 + 32;
    kelvin = celsius + 273.15;

    fahrenheitElement.value = fahrenheit.toFixed(2);
    kelvinElement.value = kelvin.toFixed(2);
  } else if (from === "F") {
    fahrenheit = Number(fahrenheitElement.value);
    celsius = ((fahrenheit - 32) * 5) / 9;
    kelvin = celsius + 273.15;

    celsiusElement.value = celsius.toFixed(2);
    kelvinElement.value = kelvin.toFixed(2);
  } else if (from === "K") {
    kelvin = Number(kelvinElement.value);
    celsius = kelvin - 273.15;
    fahrenheit = (celsius * 9) / 5 + 32;

    celsiusElement.value = celsius.toFixed(2);
    fahrenheitElement.value = fahrenheit.toFixed(2);
  }
}
