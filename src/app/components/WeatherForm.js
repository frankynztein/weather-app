import React from 'react';

const WeatherForm = (props) => (
  <>
    <div className="card card-body">
      <form onSubmit={props.getWeather}>
        <div className="form-group">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            name="city"
            autoFocus
          />
        </div>
        <button className="btn btn-success btn-block">
          Get Weather
        </button>
      </form>
    </div>
    {/* {
      props.error &&
        <div className="alert alert-danger">
          {props.error}
        </div>
    } */}
  </>
);

export default WeatherForm;