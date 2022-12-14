import axios from "axios";
import React, { useEffect, useState } from "react";
import Weather from "./Compnenets/weather";

const App = () => {
  const [search, setSearch] = useState("Lohaghat");
  const [data, setData] = useState();
  const [input, setInput] = useState("");
  console.log("vgghsdhsdh");
  useEffect(() => {
    console.log("vgghsdhsdh");
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=061602ffb426fc9a2f8cb137ac8b452c`
      )
      .then((res) => {
        setData(res.data);
        console.log("ad", res.data);
      })
      .catch((error) => {
        console.log(error.res.data.message);
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
        <div className="row justify-content-center overflow-hidden">
          <div className="col-md-4 ">
            <div className="card text-bg-dark text-center border-0 ">
              <img
                src="https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1965&q=80"
                className="card-img"
                alt="..."
              />
              <div className="card-img-overlay">
                <form onSubmit={handlesubmit}>
                  <div className="input-group sm:mb-3">
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
                {data && <Weather data={data} />}
                {!data && <div> loading...</div>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
