import React from "react";

const Weather = ({ data }) => {
  let temp = (data.main.temp - 273.15).toFixed(2);
  return (
    <div>
      {" "}
      <div className=" bg-dark bg-opacity-50 py-3 justify-content-center mt-4">
        <h2 className="card-title">{data.name}</h2>
        <p className="card-text">thursday, october 14,2022</p>
        <hr />
        <i className="fas fa-cloud fa-4x"></i>
        <h1 className=" fx-border mb-5">{temp}&deg;C</h1>
        <p className=" fw-bolder mb-0 lead">{data.weather[0].main}</p>
        <p className="lead mt-2 "> </p>
      </div>
    </div>
  );
};

export default Weather;
