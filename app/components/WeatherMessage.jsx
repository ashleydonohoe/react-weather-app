let React = require("react");

// Destructured from props
let WeatherMessage = ({temp, wind, humidity, description, location}) => {
    return (
        <div className="row">
            <div className="columns medium-12">
                <div className="card">
                    <div className="card-divider">
                        <h4 className="text-center">Current Weather <br/> {location}</h4>
                    </div>
                    <ul className="weather-info">
                        <li><span className="bold">Temperature:</span> {temp} F</li>
                        <li><span className="bold">Condition:</span> {description}</li>
                        <li><span className="bold">Wind Speed:</span> {wind} mph</li>
                        <li><span className="bold">Humidity:</span> {humidity}%</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

module.exports = WeatherMessage;