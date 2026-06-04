const iconMapping = {
    "Sunny": "fa-sun",
    "Clear": "fa-moon",
    "Partly cloudy": "fa-cloud-sun",
    "Cloudy": "fa-cloud",
    "Overcast": "fa-cloud",
    "Mist": "fa-smog",
    "Patchy rain possible": "fa-cloud-sun-rain",
    "Light rain": "fa-cloud-showers-heavy",
    "Heavy rain": "fa-cloud-showers-heavy",
    "Moderate rain": "fa-cloud-showers-heavy",
    "Snow": "fa-snowflake",
    "Patchy snow possible": "fa-snowflake",
    "Thundery outbreaks possible": "fa-cloud-bolt"
};

function getFontAwesomeIcon(conditionText) {
    const text = conditionText.trim();
    if (iconMapping[text]) {
        return `<i class="fa-solid ${iconMapping[text]}" style="font-size: 80px; color: #38bdf8;"></i>`;
    }
    
    if (text.toLowerCase().includes("rain") || text.toLowerCase().includes("drizzle")) {
        return `<i class="fa-solid fa-cloud-showers-heavy" style="font-size: 80px; color: #38bdf8;"></i>`;
    }
    if (text.toLowerCase().includes("snow") || text.toLowerCase().includes("ice")) {
        return `<i class="fa-solid fa-snowflake" style="font-size: 80px; color: #38bdf8;"></i>`;
    }
    if (text.toLowerCase().includes("cloud")) {
        return `<i class="fa-solid fa-cloud" style="font-size: 80px; color: #38bdf8;"></i>`;
    }
    if (text.toLowerCase().includes("thunder")) {
        return `<i class="fa-solid fa-cloud-bolt" style="font-size: 80px; color: #38bdf8;"></i>`;
    }

    return `<i class="fa-solid fa-cloud-sun" style="font-size: 80px; color: #38bdf8;"></i>`;
}

async function doSearch() {
    const cityInput = document.getElementById("city-input").value.trim();
    const errEl = document.getElementById("error-msg");
    
    if (!cityInput) return;

    const apiKey = "b1207604f37841db896131341232810"; 
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${encodeURIComponent(cityInput)}&aqi=no`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("City not found");
        
        const data = await response.json();

        errEl.style.display = "none";
        document.getElementById("degree").textContent = Math.round(data.current.temp_c) + "°C";
        document.getElementById("city").textContent = `${data.location.name}, ${data.location.country}`;
        document.getElementById("condition").textContent = data.current.condition.text;
        document.getElementById("humidity").textContent = data.current.humidity + "%";
        document.getElementById("wind-speed").textContent = data.current.wind_kph + " km/h";
        document.getElementById("icon-area").innerHTML = getFontAwesomeIcon(data.current.condition.text);

    } catch (error) {
        errEl.style.display = "block";
        document.getElementById("degree").textContent = "—";
        document.getElementById("city").textContent = "City not found";
        document.getElementById("condition").textContent = "try again";
        document.getElementById("humidity").textContent = "—";
        document.getElementById("wind-speed").textContent = "—";
        document.getElementById("icon-area").innerHTML = `<i class="fa-solid fa-circle-exclamation" style="font-size: 80px; color: #f87171;"></i>`;
    }
}

document.getElementById("search-btn").addEventListener("click", doSearch);
document.getElementById("city-input").addEventListener("keydown", function (e) {
    if (e.key === "Enter") doSearch();
});

window.addEventListener("DOMContentLoaded", () => {
    document.getElementById("icon-area").innerHTML = `<i class="fa-solid fa-cloud-sun" style="font-size: 80px; color: #38bdf8;"></i>`;
});