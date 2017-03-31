let React = require("react");

// Destructured from props
let WeatherMessage = ({temp, location}) => {
    return (
        <div>
            <p>It is {temp} in {location}.</p>
        </div>
    );
};

module.exports = WeatherMessage;