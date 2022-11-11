import axios from "axios";
import React, { useEffect, useState } from "react";

import Input from "./Input";

const Card = () => {
  const [search, setSearch] = useState("london");
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");
  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=061602ffb426fc9a2f8cb137ac8b452c`
      )
      .then(
        (res) => {
          setData(res.data);
          console.log("ad", res.data);
        },
        [input]
      );
  });
  return (
    <div>
      <div className="container mt-5 ">
        <div className="row justify-content-center">
          <div className="col-md-4 ">
            <div className="card text-bg-dark text-center border-0 ">
              <img
                src="https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1965&q=80"
                class="card-img"
                alt="..."
              />
              <div className="card-img-overlay">
                <Input />
                <div className=" bg-dark bg-opacity-50 py-3 justify-content-center mt-4">
                  <h2 className="card-title">{data.name}</h2>
                  <p className="card-text">thursday, october 14,2022</p>
                  <hr />
                  <i className="fas fa-cloud fa-4x"></i>
                  <h1 className=" fx-border mb-5">33.06 &deg;C</h1>
                  <p className=" fw-bolder mb-0 lead">Cloud</p>
                  <p className="lead mb-2"> 30.01&deg;C | 35.01&deg;C</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
