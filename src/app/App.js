import React, { Component } from 'react';

import WeatherInfo from './components/WeatherInfo'
import WeatherForm from './components/WeatherForm';
import CityInfo from './components/CityInfo';
import WeatherInfoTomorrow from './components/WeatherInfoTomorrow';
// import './index.css';

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
      // console.log('data', data)
      const woeID = data[0].woeid;
      const resolve = await fetch('https://www.metaweather.com//api/location/' + woeID);
      const weatherData = await resolve.json();
  
      // const weatherInfo = fetch(API_URL)
      // .then(response => response.json())
      // .then(data => {
      //   const woeID = data[0].woeid;
      //   return fetch('https://www.metaweather.com//api/location/' + woeID)
      // })
      // .then(response => response.json())
      // .then(weatherData => console.log('wheaterdata', weatherData))
      // console.log(weatherData.parent.title)
  
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

    // console.log(this.state.weatherInfo)
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
        {/* <WeatherInfo {...this.state.weatherInfo[1]} />
        <WeatherInfo {...this.state.weatherInfo[2]} /> */}
        <div className="Container__App__WeatherInfoTomorrow">
          <WeatherInfoTomorrow {...this.state.weatherInfo[1]} date={this.state.date} />
          <WeatherInfoTomorrow {...this.state.weatherInfo[2]} date={this.state.date} />
          <WeatherInfoTomorrow {...this.state.weatherInfo[3]} date={this.state.date} />
          <WeatherInfoTomorrow {...this.state.weatherInfo[4]} date={this.state.date} />
        </div>
        
      </div>
    )
  }
}

export default App;