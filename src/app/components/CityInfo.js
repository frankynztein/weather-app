import React from 'react';

const CityInfo = (props) => {
  const date = new Date(props.date)
  const dateString = date.toDateString();

  return (
    <>
      {
        props.cityName &&
          <div className="Container__CityInfo">
            <p className="CityInfo__cityName">{props.cityName}, {props.countryName}</p>
            <p className="CityInfo__date">{dateString}</p>
          </div>

      }
    </>
)};

export default CityInfo;