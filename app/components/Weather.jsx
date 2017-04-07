let React = require("react");
let WeatherForm = require("WeatherForm");
let WeatherMessage = require("WeatherMessage");
let openWeatherMap = require("openWeatherMap");
let ErrorModal = require("ErrorModal");

let Weather = React.createClass({
    getInitialState: function () {
        return {
           isLoading: false,
            unit: "Imperial"
        }
    },
    componentDidMount: function () {
        let location = this.props.location.query.location;

        if(location && location.length > 0) {
            this.handleSearch(location);
            window.location.hash = "#/";
        }
    },
    componentWillReceiveProps: function (newProps) {
        let location = newProps.location.query.location;

        if(location && location.length > 0) {
            this.handleSearch(location);
            window.location.hash = "#/";
        }
    },
    unitChanged: function(e) {
        const unitSetting = e.target.id;
        console.log(e.target.classList);

        let buttons = document.querySelectorAll(".unit-buttons button");

        buttons.forEach((button) => {
            if(button.classList.contains("unit-selected")) {
                button.classList.remove("unit-selected");
            }
        });

        e.target.classList.add("unit-selected");
        console.log(unitSetting);
        this.setState({
            unit: unitSetting
        });
    },
    handleSearch: function (location) {
        let that = this;

        this.setState({
            isLoading: true,
            errorMessage: undefined,
            location: undefined,
            temp: undefined,
            description: undefined,
            humidity: undefined,
            wind: undefined
        });

        let unit = this.state.unit;

        openWeatherMap.getTemp(location, unit).then(function(weatherData) {
            that.setState({
                location: location,
                temp: weatherData.temp,
                humidity: weatherData.humidity,
                wind: weatherData.wind,
                description: weatherData.description,
                isLoading: false
            });
        }, function (errorMessage) {
           that.setState({
               isLoading: false, errorMessage: errorMessage.message
           });
        });
    },
    render: function () {
        const {isLoading, temp, unit, wind, description, humidity, location, errorMessage} = this.state;

        function renderMessage() {
            if(isLoading) {
                return <h3 className="text-center">Fetching weather info...</h3>;
            } else if (temp && location) {
                return <WeatherMessage wind={wind} description={description} humidity={humidity} location={location} temp={temp} unit={unit}/>;
            }
        }

        function renderError() {
            if(typeof errorMessage === "string") {
                return (
                    <ErrorModal message={errorMessage} />
                );
            }
        }

        return (
          <div>
              <h1 className="text-center page-title">Get Weather</h1>
              <p className="unit-buttons text-center">Unit:<br/>
                  <button id="Imperial" className="button tiny unit-selected" onClick={this.unitChanged}>F</button>
                  <button id="Metric" className="button tiny" onClick={this.unitChanged}>C</button></p>
              <WeatherForm onSearch={this.handleSearch}/>
              {renderMessage()}
              {renderError()}
          </div>
      );
    },
});

module.exports = Weather;