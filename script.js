const apikey = "c7dfd3ce09e9062898ecfacded0919cd";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkweather(city) {
    const response = await fetch(apiurl + city + `&appid=${apikey}`);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else 
    {
        var data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
        if (data.weather[0].main == "Clouds") {
            if(data.weather[0].description == "few clouds"){
                weatherIcon.src = "images1/clouds.png";
            }
            else if(data.weather[0].description == "scattered clouds"){
                weatherIcon.src = "images1/scatteredclouds.png";
            }
            else if(data.weather[0].description == "broken clouds"){
                weatherIcon.src = "images1/brokenclouds.png";
            }
            else{
                weatherIcon.src = "images1/clouds.png";
            }
            
        }
        else if (data.weather[0].main == "Snow") {
            weatherIcon.src = "images1/snow.png";
        }
        else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "images1/clear.png";
        }
        else if (data.weather[0].main == "Rain") {
            if(data.weather[0].description == "shower rain"){
                weatherIcon.src = "images1/showerrain.png";
            }
            else{
                weatherIcon.src = "images1/rain.png";
            }
        }
        else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "images1/showerrain.png";
        }
        else if (data.weather[0].main == "Thunderstorm") {
            weatherIcon.src = "images1/thunderstorm.png";
        }
        else if (data.weather[0].main == "Mist" || data.weather[0].main == "Smoke" || data.weather[0].main == "Haze" || data.weather[0].main == "Dust" || data.weather[0].main == "Fog" || data.weather[0].main == "Sand" || data.weather[0].main == "Dust" || data.weather[0].main == "Ash" || data.weather[0].main == "Squall" || data.weather[0].main == "Tornado"){
            weatherIcon.src = "images1/mist.png";
        }            
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }

}    
searchBtn.addEventListener("click", () => {
    checkweather(searchBox.value);
})