//create weather class
class Weather {
    constructor(city, country) {
        this.apiKey = '';
        this.city = city;
        this.country = country;
    }

    //fetch weather from API
    async getWeather() {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&appid=${this.apiKey}`);
        const responseData = await response.json();
        return responseData;
    }

    //change weather location
    changeLocation(city, country) {
        this.city = city;
        this.country = country;
    }
}