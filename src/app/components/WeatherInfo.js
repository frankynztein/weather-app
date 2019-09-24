import React from 'react';

const WeatherInfo = (props) => {
  const stateAbbr = props.weather_state_abbr;
  const IMG_URL = 'https://www.metaweather.com/static/img/weather/' + stateAbbr + '.svg';


  return (
    <>
      {
        props.error &&
        <div className="alert alert-danger">
          {props.error}
        </div>
      }
      {
        props.weather_state_name &&
          <div className="Container__weatherInfo">
            <div className="WeatherInfo__today-one">
              <img className="WeatherInfo__today-one__img" src={IMG_URL} alt='' />
              <p>
                Temp: {props.the_temp.toFixed()}°C
              </p>
              <p>
                {props.weather_state_name}
              </p>
            </div>
            <div className="WeatherInfo__today-two">
              <p>
                {props.wind_speed.toFixed()} mph<br/>
                Wind Speed
              </p>
              <p>
                {props.humidity.toFixed()}%<br/>
                Humidity
              </p>
              <p>
                {props.min_temp.toFixed()}°C<br/>
                Min. Temp
              </p>
              <p>
                {props.max_temp.toFixed()}°C<br/>
                Max. Temp
              </p>
            </div>
            <div className="WeatherInfo__tomorrow">

            </div>
          </div>
      }
    </>
  );
};

export default WeatherInfo;