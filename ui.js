class UI{
    constructor(){
        this.city = document.getElementById('city');
        this.country = document.getElementById('country');
        this.temp = document.getElementById('temp');
        this.wind = document.getElementById('wind-speed');
        this.pressure = document.getElementById('pressure');
        this.humidity = document.getElementById('humidity');
        this.description = document.getElementById('description');
        this.icon = document.getElementById('icon');
    
    }

    displayWeather(data){
        const city = data.name;
        const country = data.sys.country;
        const temp = Math.floor(data.main.temp - 273.15);
        const icon = data.weather[0].icon;
        const iconUrl = `http://openweathermap.org/img/w/${icon}.png`;
        const description = data.weather[0].description;
        const wind = data.wind.speed;
        const humidity = data.main.humidity;
        const pressure = data.main.pressure;
        
        this.city.textContent = city;
        this.country.textContent = country;
        this.temp.textContent = temp;
        this.wind.textContent = wind;
        this.pressure.textContent = pressure;
        this.humidity.textContent = humidity;
        this.description.textContent = description;
        this.icon.src = iconUrl;


    }

}