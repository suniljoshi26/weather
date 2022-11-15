import React from "react";

const Weather = ({ data }) => {
  let emoji;
  if (typeof data.main != "undefined") {
    if (data.weather[0].main == "Clouds") {
      console.log("gfghdsadasf");
      emoji = "fa-cloud";
    } else if (data.weather[0].main == "Thunderstorm") {
      emoji = "fa-bolt";
      console.log("gfghdsadasf");
    } else if (data.weather[0].main == "Drizzle") {
      console.log("gfghdsadasf");

      emoji = "fa-cloud-rain";
    } else if (data.weather[0].main == "Rain") {
      console.log("gfghdsadasf");

      emoji = "  fa-cloud-shower-heavy";
    } else if (data.weather[0].main == "Snow") {
      console.log("gfghdsadasf");
      emoji = "fa-snow-flake";
    } else {
      emoji = "fa-smog";
    }
  } else {
    return console.log("cscdsdcds");
  }

  let temp = (data.main.temp - 273.15).toFixed(2);

  let temp_min = (data.main.temp_min - 273.15).toFixed(2);
  let temp_max = (data.main.temp_max - 273.15).toFixed(2);
  return (
    <div>
      {" "}
      <div className=" bg-dark bg-opacity-50 py-3 justify-content-center mt-4">
        <h2 className="card-title">{data.name}</h2>
        <p className="card-text">Tuesday, November 15,2022</p>
        <hr />
        <i className={` fas ${emoji} fa-4x`}></i>
        <h1 className=" fx-border mb-5"> {temp}&deg;C </h1>
        <p className=" fw-bolder mb-0 lead"> {data.weather[0].main} </p>
        <p className="lead mt-2 ">
          {temp_min}&deg;C || {temp_max}&deg;C
        </p>
      </div>
    </div>
  );
};

export default Weather;
