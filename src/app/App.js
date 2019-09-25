import React, { Component } from 'react';

import WeatherInfo from './components/WeatherInfo'
import WeatherForm from './components/WeatherForm';
import CityInfo from './components/CityInfo';
import WeatherInfoTomorrow from './components/WeatherInfoTomorrow';

class App extends Component {

    state = {
      city: '',
      country: '',
      date: '',
      weatherInfo: '',
      error: ''
    }

  getWeather = async (e) => {
    e.preventDefault();
    const {city} = e.target.elements;
    const cityValue = city.value;
    const API_URL = 'https://www.metaweather.com/api/location/search/?query=' + cityValue;

    if(cityValue) {
      const response = await fetch(API_URL);
      const data = await response.json();
      const woeID = data[0].woeid;
      const resolve = await fetch('https://www.metaweather.com//api/location/' + woeID);
      const weatherData = await resolve.json();
  
      this.setState({
        city: weatherData.title,
        country: weatherData.parent.title,
        date: weatherData.time,
        weatherInfo: weatherData.consolidated_weather,
        error: ''
      })

    } else {
      this.setState({
        error: 'Por favor, ingrese el nombre de alguna ciudad.'
      })
    }
  }

  render() {
    return (
      <div className="Container__App">
        <WeatherForm getWeather={this.getWeather} error={this.state.error} />
        <CityInfo
          cityName={this.state.city}
          countryName={this.state.country} 
          date={this.state.date} />
        <WeatherInfo {...this.state.weatherInfo[0]} />
        <div className="Container__App__WeatherInfoTomorrow">
          <WeatherInfoTomorrow {...this.state.weatherInfo[1]} />
          <WeatherInfoTomorrow {...this.state.weatherInfo[2]} />
          <WeatherInfoTomorrow {...this.state.weatherInfo[3]} />
          <WeatherInfoTomorrow {...this.state.weatherInfo[4]} />
        </div>
      </div>
    )
  }
}

export default App;