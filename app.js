//Init storage
storage = new Storage();

//Init classes
weather = new Weather(storage.city, storage.country);

//Init UI
ui = new UI();

//add event listener
document.addEventListener('DOMContentLoaded', getWeather);

function getWeather(){
    weather.getWeather()
    .then(data => {
       ui.displayWeather(data);
    })
    .catch(err => console.log(err));
}
//add event listener for change location
document.getElementById('change-location').addEventListener('click', (e) => {
    e.preventDefault();
    const city = document.getElementById('modal-city').value;
    const country = document.getElementById('modal-country').value;
    weather.changeLocation(city, country);
    storage.saveLocation(city, country);
    getWeather();
    document.getElementById('modal-city').value = '';
    document.getElementById('modal-country').value = '';
    //close modal
    $('#locationModal').modal('hide');
});
