let React = require("react");
let WeatherForm = require("WeatherForm");
let WeatherMessage = require("WeatherMessage");
let openWeatherMap = require("openWeatherMap");

let Weather = React.createClass({
    getInitialState: function () {
        return {
           isLoading: false
        }
    },
    handleSearch: function (location) {
        let that = this;

        debugger;

        this.setState({isLoading: true});

        openWeatherMap.getTemp(location).then(function(temp) {
            that.setState({
                location: location,
                temp: temp,
                isLoading: false
            });
        }, function (errorMessage) {
           alert(errorMessage);
           that.setState({isLoading: false});
        });
    },
    render: function () {
        const {isLoading, temp, location} = this.state;

        function renderMessage() {
            if(isLoading) {
                return <p>Fetching weather...</p>;
            } else if (temp && location) {
                return <WeatherMessage location={location} temp={temp}/>;
            }
        }

        return (
          <div>
              <h1>Get Weather</h1>
              <WeatherForm onSearch={this.handleSearch}/>
              {renderMessage()}
          </div>
      );
    },
});

module.exports = Weather;