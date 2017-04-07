let axios = require("axios");

const OPEN_WEATHER_MAP_URL = "http://api.openweathermap.org/data/2.5/weather?&appid=327d6da12d644fdfcabcfa843950f0ee";

module.exports = {
    getTemp: function(location, unit) {
        let encodedLocation = encodeURIComponent(location);
        let requestUrl = `${OPEN_WEATHER_MAP_URL}&units=${unit}&q=${encodedLocation}`;

        return axios.get(requestUrl).then(function (res) {
            if(res.data.cod && res.data.message) {
                throw new Error(res.data.message);
            } else {
                let weatherData = {
                    temp: Math.floor(res.data.main.temp),
                    description: res.data.weather[0].description,
                    wind: res.data.wind.speed,
                    humidity: Math.floor(res.data.main.humidity)
                };
                return weatherData;
            }
        }, function () {
            throw new Error("City not found");
        });
    }
};