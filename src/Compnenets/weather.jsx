import React, { useState } from "react";

const Weather = ({ data }) => {
  const [ctime, setTime] = useState();
  // date
  const d = new Date();
  console.log("hhsg", d);
  const date = d.getDate();
  const year = d.getFullYear;
  const month = d.toLocaleString("default", { month: "long" });
  const day = d.toLocaleString("default", { weekday: "long" });
  // time
  const time = d.toLocaleString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  const hand = () => {
    setTime(time);
  };
  const h = setInterval(hand, 1000);
  // clearInterval(h);
  // emoji
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
      <div className="  card bg-dark bg-opacity-50 py-3 justify-content-center mt-4   overflow-hidden">
        <h2 className="card-title">{data.name}</h2>
        <p className="card-text">
          {day},{month},{date},{year}
          <br />
          {ctime}
        </p>
        <hr />
        <i className={` fas ${emoji} fa-4x`}></i>
        <h1 className=" fx-border mb-2"> {temp}&deg;C </h1>
        <p className=" fw-bolder mb-0 lead"> {data.weather[0].main} </p>
        <p className="lead mt-2 ">
          {temp_min}&deg;C || {temp_max}&deg;C
        </p>
      </div>
    </div>
  );
};

export default Weather;
