let axios = require("axios");

const OPEN_WEATHER_MAP_URL = "http://api.openweathermap.org/data/2.5/weather?&appid=327d6da12d644fdfcabcfa843950f0ee&units=imperial";

module.exports = {
    getTemp: function(location) {
        let encodedLocation = encodeURIComponent(location);
        let requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

        return axios.get(requestUrl).then(function (res) {
            if(res.data.cod && res.data.message) {
                throw new Error(res.data.message);
            } else {
                return Math.floor(res.data.main.temp);
            }
        }, function () {
            throw new Error("Unable to fetch weather");
        });
    }
};