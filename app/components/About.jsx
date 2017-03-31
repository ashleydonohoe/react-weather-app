let React = require("react");

// Stateless functional component
let About = (props) => {
    return (
        <div>
            <h3>About</h3>
            <p>This website uses the OpenWeatherMap API to allow you to get the current temperature in any given city.</p>
        </div>
    );
};

module.exports = About;