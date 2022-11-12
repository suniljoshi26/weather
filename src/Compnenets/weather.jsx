import React from "react";

const Weather = ({ data }) => {
  console.log("data is a", data);
  let emoji = null;
  if (data.main != "undefined") {
    if (data.weather[0].main == Clouds) {
      emoji = "fa-cloud";
    }
  }

  let temp = (data.main.temp - 273.15).toFixed(2);
  let temp_min = (data.main.temp_min - 273.15).toFixed(2);
  let temp_max = (data.main.temp_max - 273.15).toFixed(2);
  return (
    <div>
      {" "}
      <div className=" bg-dark bg-opacity-50 py-3 justify-content-center mt-4">
        <h2 className="card-title">{data.name}</h2>
        <p className="card-text">thursday, october 14,2022</p>
        <hr />
        <i className="fas ${emoji} fa-4x"></i>
        <h1 className=" fx-border mb-5">{temp}&deg;C</h1>
        <p className=" fw-bolder mb-0 lead">{data.weather[0].main}</p>
        <p className="lead mt-2 ">
          {temp_min}&deg;C || {temp_max}&deg;C{" "}
        </p>
      </div>
    </div>
  );
};

export default Weather;
