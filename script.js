const iconMapping = {
    "Sunny": "fa-sun",
    "Clear": "fa-moon",
    "Partly cloudy": "fa-cloud-sun",
    "Cloudy": "fa-cloud",
    "Overcast": "fa-cloud",
    "Mist": "fa-smog",
    "Fog": "fa-smog",
    "Haze": "fa-smog",
    "Rain": "fa-cloud-showers-heavy",
    "Light rain": "fa-cloud-showers-heavy",
    "Heavy rain": "fa-cloud-showers-heavy",
    "Snow": "fa-snowflake",
    "Thunderstorm": "fa-cloud-bolt"
};

function getFontAwesomeIcon(conditionText) {
    const text = conditionText.trim();
    if (iconMapping[text]) {
        return `<i class="fa-solid ${iconMapping[text]}" style="font-size: 80px; color: #38bdf8;"></i>`;
    }
    
    if (text.toLowerCase().includes("rain") || text.toLowerCase().includes("drizzle") || text.toLowerCase().includes("shower")) {
        return `<i class="fa-solid fa-cloud-showers-heavy" style="font-size: 80px; color: #38bdf8;"></i>`;
    }
    if (text.toLowerCase().includes("snow") || text.toLowerCase().includes("ice") || text.toLowerCase().includes("sleet")) {
        return `<i class="fa-solid fa-snowflake" style="font-size: 80px; color: #38bdf8;"></i>`;
    }
    if (text.toLowerCase().includes("cloud") || text.toLowerCase().includes("overcast")) {
        return `<i class="fa-solid fa-cloud" style="font-size: 80px; color: #38bdf8;"></i>`;
    }
    if (text.toLowerCase().includes("thunder")) {
        return `<i class="fa-solid fa-cloud-bolt" style="font-size: 80px; color: #38bdf8;"></i>`;
    }
    if (text.toLowerCase().includes("haze") || text.toLowerCase().includes("mist")) {
        return `<i class="fa-solid fa-smog" style="font-size: 80px; color: #38bdf8;"></i>`;
    }

    return `<i class="fa-solid fa-cloud-sun" style="font-size: 80px; color: #38bdf8;"></i>`;
}

async function doSearch() {
    const cityInput = document.getElementById("city-input").value.trim();
    const errEl = document.getElementById("error-msg");
    
    if (!cityInput) return;

    const url = `https://wttr.in/${encodeURIComponent(cityInput)}?format=j1`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("City not found");
        
        const data = await response.json();
        const currentCondition = data.current_condition[0];

        errEl.style.display = "none";
        document.getElementById("degree").textContent = currentCondition.temp_C + "°C";
        document.getElementById("city").textContent = cityInput.charAt(0).toUpperCase() + cityInput.slice(1);
        document.getElementById("condition").textContent = currentCondition.weatherDesc[0].value;
        
        // Mapping fields directly from the verified JSON response
        document.getElementById("feels-like").textContent = currentCondition.FeelsLikeC + "°C";
        document.getElementById("humidity").textContent = currentCondition.humidity + "%";
        document.getElementById("wind-speed").textContent = currentCondition.windspeedKmph + " km/h";
        document.getElementById("uv-index").textContent = currentCondition.uvIndex;
        
        document.getElementById("icon-area").innerHTML = getFontAwesomeIcon(currentCondition.weatherDesc[0].value);

    } catch (error) {
        errEl.style.display = "block";
        document.getElementById("degree").textContent = "—";
        document.getElementById("city").textContent = "City not found";
        document.getElementById("condition").textContent = "try again";
        document.getElementById("feels-like").textContent = "—";
        document.getElementById("humidity").textContent = "—";
        document.getElementById("wind-speed").textContent = "—";
        document.getElementById("uv-index").textContent = "—";
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