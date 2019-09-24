import React from 'react';
import LightCloud from '../assets/images/Cloud-Sun.svg';

const WeatherInfoTomorrow = (props) => {
  const date = new Date(props.date)
  const dateDay = date.getDate();
  const arrayMonth = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const dateGetMonth = date.getMonth();
  const dateMonth = arrayMonth[dateGetMonth];
  const stateAbbr = props.weather_state_abbr;
  const IMG_URL = 'https://www.metaweather.com/static/img/weather/' + stateAbbr + '.svg';
  const handleWeatherImg = (abbr) => {
    switch (abbr) {
      case 'lc':
        <img src={LightCloud} alt=""/>;
        break;
      // case 'Manzana':
      //   console.log('El kilogramo de Manzanas cuesta $0.32.');
      //   break;
      // case 'Banana':
      //   console.log('El kilogramo de Bananas cuesta $0.48.');
      //   break;
      // case 'Cereza':
      //   console.log('El kilogramo de Cerezas cuesta $3.00.');
      //   break;
      // case 'Mango':
      // case 'Papaya':
      //   console.log('El kilogramo de Mangos y Papayas cuesta $2.79.');
      //   break;
      default:
        console.log('Lo lamentamos, por el momento no disponemos de ' + expr + '.');
    }
  }

  return (
    <>
      {
        props.the_temp&&
        <div className="Container__WeatherInfoTomorrow">
          <p>
            {dateMonth}/{dateDay}
          </p>
          <img
            className="WeatherInfo__tomorrow__img"
            src={IMG_URL}
            alt=''
            onKeyUp={handleWeatherImg(stateAbbr)}
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