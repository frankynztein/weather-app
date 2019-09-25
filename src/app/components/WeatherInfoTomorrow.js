import React from 'react';

const WeatherInfoTomorrow = (props) => {
  console.log(props)
  
  const stateAbbr = props.weather_state_abbr;
  const IMG_URL = 'https://www.metaweather.com/static/img/weather/' + stateAbbr + '.svg';

  return (
    <>
      {
        props.the_temp&&
        <div className="Container__WeatherInfoTomorrow">
          <p>
            {props.applicable_date}
          </p>
          <img
            className="WeatherInfo__tomorrow__img"
            src={IMG_URL}
            alt=''
          />
          <p>
            {props.the_temp.toFixed()}°C
          </p>
        </div>
      }
    </>
  )
}

export default WeatherInfoTomorrow;