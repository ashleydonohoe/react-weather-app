let React = require("react");
let WeatherForm = require("WeatherForm");
let WeatherMessage = require("WeatherMessage");
let openWeatherMap = require("openWeatherMap");
let ErrorModal = require("ErrorModal");

let Weather = React.createClass({
    getInitialState: function () {
        return {
           isLoading: false
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

        openWeatherMap.getTemp(location).then(function(weatherData) {
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
        const {isLoading, temp, wind, description, humidity, location, errorMessage} = this.state;

        function renderMessage() {
            if(isLoading) {
                return <h3 className="text-center">Fetching weather info...</h3>;
            } else if (temp && location) {
                return <WeatherMessage wind={wind} description={description} humidity={humidity} location={location} temp={temp}/>;
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
              <WeatherForm onSearch={this.handleSearch}/>
              {renderMessage()}
              {renderError()}
          </div>
      );
    },
});

module.exports = Weather;