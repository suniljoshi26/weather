import axios from "axios";
import React, { useEffect, useState } from "react";

import Weather from "./Weather";

const Card = () => {
  const [search, setSearch] = useState("london");
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");
  let a = true;

  console.log(data);

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=061602ffb426fc9a2f8cb137ac8b452c`
      )
      .then((res) => {
        if (a) {
          setData(res.data);
          console.log("ad", res.data.weather.main[0]);
        }
        return () => {
          a = false;
        };
      });
  }, [search]);

  const handlesubmit = (event) => {
    console.log("dsadasds");
    event.preventDefault();
    setSearch(input);
    console.log("dsadasds");
  };

  return (
    <div>
      <div className="container mt-5 ">
        <div className="row justify-content-center">
          <div className="col-md-4 ">
            <div className="card text-bg-dark text-center border-0 ">
              <img
                src="https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1965&q=80"
                className="card-img"
                alt="..."
              />
              <div className="card-img-overlay">
                <form onSubmit={handlesubmit}>
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                    />
                    <div className="input-group-append">
                      <button
                        className="btn btn-outline-secondary"
                        type="submit"
                      >
                        <i className="fa fa-search "></i>
                      </button>
                    </div>
                  </div>
                </form>
                <Weather data={data} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
