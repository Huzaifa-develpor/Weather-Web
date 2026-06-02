# Weather Web

## Overview

Weather Web is a simple web application built using HTML, CSS, and JavaScript. This project does not use any external API. Instead, it uses a custom JavaScript object to store weather data and display it based on user selection or input.

The main purpose of this project is to practice JavaScript fundamentals such as objects, DOM manipulation, and conditional logic.

## Features

* Display weather information using custom data
* Search or select city-based weather (object-based)
* Simple and clean user interface
* Fast and lightweight application
* No external API dependency

## Technologies Used

* HTML5
* CSS3
* JavaScript (ES6)

## How It Works

The application uses a predefined JavaScript object that contains weather information. Based on user input, the application retrieves data from the object and displays it dynamically on the UI.

### Example Logic

```js id="weather_obj"
const weatherData = {
  Karachi: {
    temp: "32°C",
    condition: "Sunny",
    humidity: "60%"
  },
  Lahore: {
    temp: "30°C",
    condition: "Cloudy",
    humidity: "55%"
  }
};

function getWeather(city) {
  return weatherData[city];
}
```

## Learning Outcomes

* JavaScript objects and data structures
* DOM manipulation
* Conditional rendering
* Event handling
* Logical thinking and data management

## Future Improvements

* Add more cities
* Improve UI/UX design
* Add animations for weather conditions
* Convert to API-based version in future

## Author

Huzaifa Anwar
