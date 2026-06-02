/* -----------------------------
   DOM ELEMENTS
------------------------------*/
const search = document.querySelector(".head input");
const btn = document.querySelector("#search");

const degree = document.querySelector("#degree");
const city = document.querySelector("#city");
const para1 = document.querySelector("#para1");
const para2 = document.querySelector("#para2");
const image = document.querySelector("#image");

/* -----------------------------
   MOCK WEATHER DATABASE
------------------------------*/
const weatherData = {
  karachi: { location: "Karachi", temp: 32, humidity: 70, wind: 18, condition: "Sunny" },
  lahore: { location: "Lahore", temp: 28, humidity: 65, wind: 12, condition: "Partly cloudy" },
  islamabad: { location: "Islamabad", temp: 22, humidity: 55, wind: 10, condition: "Rain" },
  peshawar: { location: "Peshawar", temp: 30, humidity: 60, wind: 14, condition: "Sunny" },
  quetta: { location: "Quetta", temp: 18, humidity: 40, wind: 20, condition: "Snow" },

  multan: { location: "Multan", temp: 34, humidity: 58, wind: 16, condition: "Sunny" },
  faisalabad: { location: "Faisalabad", temp: 31, humidity: 62, wind: 13, condition: "Clear" },
  rawalpindi: { location: "Rawalpindi", temp: 26, humidity: 68, wind: 11, condition: "Rain" },
  sialkot: { location: "Sialkot", temp: 29, humidity: 60, wind: 10, condition: "Cloudy" },
  gujranwala: { location: "Gujranwala", temp: 30, humidity: 63, wind: 12, condition: "Sunny" },

  hyderabad: { location: "Hyderabad", temp: 33, humidity: 72, wind: 17, condition: "Sunny" },
  sukkur: { location: "Sukkur", temp: 36, humidity: 55, wind: 15, condition: "Hot" },
  larkana: { location: "Larkana", temp: 35, humidity: 57, wind: 14, condition: "Sunny" },

  gwadar: { location: "Gwadar", temp: 29, humidity: 80, wind: 25, condition: "Windy" },
  muzaffarabad: { location: "Muzaffarabad", temp: 20, humidity: 75, wind: 9, condition: "Rain" },

  delhi: { location: "Delhi", temp: 34, humidity: 60, wind: 13, condition: "Hot" },
  mumbai: { location: "Mumbai", temp: 31, humidity: 78, wind: 20, condition: "Rain" },
  kolkata: { location: "Kolkata", temp: 33, humidity: 70, wind: 15, condition: "Cloudy" },
  chennai: { location: "Chennai", temp: 32, humidity: 75, wind: 18, condition: "Sunny" },
  bangalore: { location: "Bangalore", temp: 27, humidity: 65, wind: 12, condition: "Pleasant" },

  newyork: { location: "New York", temp: 15, humidity: 55, wind: 22, condition: "Snow" },
  london: { location: "London", temp: 12, humidity: 80, wind: 25, condition: "Rain" },
  paris: { location: "Paris", temp: 18, humidity: 70, wind: 14, condition: "Cloudy" },
  dubai: { location: "Dubai", temp: 38, humidity: 40, wind: 10, condition: "Hot" },
  istanbul: { location: "Istanbul", temp: 20, humidity: 65, wind: 16, condition: "Windy" },

  tokyo: { location: "Tokyo", temp: 24, humidity: 60, wind: 12, condition: "Cloudy" },
  seoul: { location: "Seoul", temp: 22, humidity: 58, wind: 11, condition: "Clear" },
  beijing: { location: "Beijing", temp: 26, humidity: 50, wind: 18, condition: "Sunny" },
  moscow: { location: "Moscow", temp: 5, humidity: 75, wind: 30, condition: "Snow" },

  sydney: { location: "Sydney", temp: 20, humidity: 65, wind: 18, condition: "Sunny" },
  toronto: { location: "Toronto", temp: 10, humidity: 60, wind: 20, condition: "Snow" },

  default: { location: "Unknown", temp: 25, humidity: 50, wind: 8, condition: "Clear" }
};

/* -----------------------------
   UPDATE UI
------------------------------*/
function changeCity(locationName, temp, humidity, wind) {
  city.innerText = locationName;
  degree.innerText = temp + "°C";
  para1.innerText = humidity + "%";
  para2.innerText = wind + " Km/h";
}

/* -----------------------------
   WEATHER ICON LOGIC
------------------------------*/
function changeLogo(weather) {
  if (weather === "Sunny" || weather === "Clear") {
    image.src = "sunny.png";
  } 
  else if (weather === "Partly cloudy" || weather === "Overcast" || weather === "Cloudy") {
    image.src = "Partly_cloudy.png";
  } 
  else if (weather === "Rain" || weather === "Mist") {
    image.src = "rainy.jpeg";
  } 
  else {
    image.src = "snow.png";
  }
}

/* -----------------------------
   SEARCH HANDLER
------------------------------*/
btn.addEventListener("click", () => {
  const input = search.value.toLowerCase().trim();

  const data = weatherData[input] || weatherData.default;

  changeCity(
    data.location,
    data.temp,
    data.humidity,
    data.wind
  );

  changeLogo(data.condition);
});