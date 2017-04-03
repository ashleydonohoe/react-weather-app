let React = require("react");

// Stateless functional component
let About = (props) => {
    return (
        <div>
            <h1 className="text-center">About</h1>
            <p>This website uses the OpenWeatherMap API to allow you to get the current temperature in any given city.</p>
            <p>Check out OpenWeatherMap's website and this app's code on GitHub:</p>
            <div className="button-group">
                <a target="_blank" href="http://openweathermap.org/" className="button columns small-6">OpenWeatherMap</a>
                <a target="_blank" href="https://github.com/ashleydonohoe/react-weather-app" className="button columns small-6">App Code</a>
            </div>
        </div>
    );
};

module.exports = About;