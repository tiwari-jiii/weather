const apiKey="5120123a033422eeebbce76f6e1ccfa0";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox= document.querySelector(".search input");
const searchBtn= document.querySelector(".search button");

let weatherIcon = document.querySelector(".weather-icon");

async function checkweather(city)
{
    const response = await fetch(apiUrl + city +`&appid=${apiKey}`);
    let data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+ "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";

    if(data.weather[0].main=="Clouds")
    {
        weatherIcon.src ="IMAGES/clouds.png"
    }
    else if(data.weather[0].main=="Drizzle")
    {
        weatherIcon.src ="IMAGES/drizzle.png"
    }
    else if(data.weather[0].main=="Snow")
    {
        weatherIcon.src ="IMAGES/snow.png"
    }
    else if(data.weather[0].main=="Rain")
        {
            weatherIcon.src ="IMAGES/rain.png"
        }
    else if(data.weather[0].main=="Wind")
            {
                weatherIcon.src ="IMAGES/wind.png"
            }
    else if(data.weather[0].main=="Mist")
                {
                    weatherIcon.src ="IMAGES/mist.png"
                }
    else if(data.weather[0].main=="Clear")
                    {
                        weatherIcon.src ="IMAGES/clear.png"
                    }
    else if(data.weather[0].main=="Humidity")
                        {
                            weatherIcon.src ="IMAGES/humidity.png"
                        }
                        document.querySelector(".weather").style.display = "block";
}

searchBtn.addEventListener("click", ()=>{

    checkweather(searchBox.value);
})