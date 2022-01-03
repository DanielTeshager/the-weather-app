//use local storage
class Storage{
    constructor(){
        this.city = localStorage.getItem('city') || 'Dubai';
        this.country = localStorage.getItem('country') || 'AE';
    }
    saveLocation(city, country){
        localStorage.setItem('city', city);
        localStorage.setItem('country', country);
    }
    getItem(){
        return {
            city: this.city,
            country: this.country
        }
    }
}