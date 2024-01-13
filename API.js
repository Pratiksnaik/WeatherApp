const apikey = "c7dfd3ce09e9062898ecfacded0919cd";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=chennai";

async function checkweather(){
    const response = await fetch(apiurl + `&appid=${apikey}`);
    var data = await response.json();

    console.log(data);
}

checkweather();