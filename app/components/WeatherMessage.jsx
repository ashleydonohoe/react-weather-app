let React = require("react");

// Destructured from props
let WeatherMessage = ({temp, wind, humidity, description, location, unit}) => {
    function chooseWeatherIcon(description) {
        let iconName = "";
        let termToSearch = description.toLowerCase();

        if (termToSearch.includes("rain") || termToSearch.includes("drizzle")) {
            iconName = "fa fa-5x fa-umbrella";
        } else if (termToSearch.includes("cloud")) {
            iconName = "fa fa-5x fa-cloud";
        } else {
            // Fallback icon
            iconName = "fa fa-5x fa-sun-o";
        }

        return (
            <p className="text-center">
                <i className={iconName} aria-hidden="true"></i>
            </p>
        );
    }

     return (
        <div className="row">
            <div className="columns medium-12">
                <div className="card">
                    <div className="card-divider">
                        <h4 className="text-center">Current Weather <br/> {location}</h4>
                    </div>
                    <div class="weather-icon">
                        { chooseWeatherIcon(description)}
                    </div>
                    <ul className="weather-info">
                        <li><span className="bold">Temperature:</span> {temp} {unit === "Imperial" ? "F" : "C"}</li>
                        <li><span className="bold">Condition:</span> {description}</li>
                        <li><span className="bold">Wind Speed:</span> {wind} {unit === "Imperial" ? "mph" : "kph"}</li>
                        <li><span className="bold">Humidity:</span> {humidity}%</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

module.exports = WeatherMessage;