const currentYearElement = document.getElementById("current-year");
if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear();
}

const lastModifiedElement = document.getElementById("last-modified-date");
if (lastModifiedElement) {
    lastModifiedElement.textContent = document.lastModified;
}

function calculateWindChill(tempCelsius, windKmh) {
    return Math.round((13.12 + 0.6215 * tempCelsius - 11.37 * Math.pow(windKmh, 0.16) + 0.3965 * tempCelsius * Math.pow(windKmh, 0.16)) * 10) / 10;
}

const temp = 5;
const wind = 15;

const windChillElement = document.getElementById("wind-chill");

if (windChillElement) {
    if (temp <= 10 && wind > 4.8) {
        const result = calculateWindChill(temp, wind);
        windChillElement.textContent = `${result} °C`;
    } else {
        windChillElement.textContent = "N/A";
    }
}