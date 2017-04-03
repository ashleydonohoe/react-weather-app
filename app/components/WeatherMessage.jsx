let React = require("react");

// Destructured from props
let WeatherMessage = ({temp, location}) => {
    return (
        <div>
            <h3 className="text-center">It is {temp} in {location} right now.</h3>
        </div>
    );
};

module.exports = WeatherMessage;