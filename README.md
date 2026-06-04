# Weather Web 🌤️

## Overview

Weather Web is a modern, lightweight, and fully responsive web application built using HTML5, CSS3, and Vanilla JavaScript (ES6). Initially conceived as a static project, it has been upgraded to a fully dynamic web app that fetches real-time global weather data using an open-source, keyless weather API. 

The user interface features a premium dark theme layout with dynamic icons that animate based on current atmospheric conditions.

## Features

* **Real-Time Data:** Fetches live weather information for any city worldwide with zero delay.
* **Open-Source API Integration:** Powered by the keyless `wttr.in` JSON endpoint, ensuring 100% free availability without api-key expiration issues.
* **Detailed Analytics:** Displays critical weather metrics including Actual Temperature, "Feels Like" index, Humidity levels, Wind Speed, and UV Index.
* **Dynamic Condition Mapping:** Replaced heavy inline SVGs with lightweight FontAwesome icons that automatically update and animate depending on the weather status (e.g., Rain, Haze, Sunny, Thunderstorm).
* **Robust Error Handling:** Seamlessly catches incorrect queries and handles deployment-specific network exceptions (like HTTPS mixed content blocks).

## Technologies Used

* **Frontend:** HTML5, CSS3 (CSS Grid, Flexbox, Media Queries)
* **Scripting:** JavaScript (ES6+, Async/Await Fetch API, DOM Manipulation)
* **Icons & Fonts:** FontAwesome v6.7.2, Google Fonts (Space Grotesk, DM Sans)

## How It Works

The application completely bypasses local static hardcoded datasets. When a user inputs a city name and triggers the search event, an asynchronous fetch query is dispatched securely over HTTPS.

### API & Integration Logic

```js
async function doSearch() {
    const cityInput = document.getElementById("city-input").value.trim();
    const url = `https://wttr.in/${encodeURIComponent(cityInput)}?format=j1`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        
        // Extracting live attributes from the JSON response object
        const currentCondition = data.current_condition[0];
        
        document.getElementById("degree").textContent = currentCondition.temp_C + "°C";
        document.getElementById("feels-like").textContent = currentCondition.FeelsLikeC + "°C";
        document.getElementById("humidity").textContent = currentCondition.humidity + "%";
        document.getElementById("wind-speed").textContent = currentCondition.windspeedKmph + " km/h";
    } catch (error) {
        console.error("Failed to fetch real-time data:", error);
    }
}
Learning Outcomes
Implementing Asynchronous JavaScript using async/await and handling network promises via the fetch API.

Parsing complex nested JSON data structures returned from open-source web services.

Designing scalable utility functions to map dynamic textual inputs to standard UI visual components (FontAwesome iconography cascades).

Resolving common deployment issues such as Mixed Content Security Blocks (HTTP vs HTTPS) on cloud platforms like GitHub Pages/Netlify.

Future Improvements
Integrate browser geolocation API to automatically fetch local weather upon initial page mount.

Build a 3-day weather forecasting card interface right below the current grid panel.

Store recently searched cities in localStorage to display a history chip layout for faster query toggles.

Author
Huzaifa Anwar
