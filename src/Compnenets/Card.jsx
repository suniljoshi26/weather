import React, { useEffect } from "react";
import { weatherData } from "../api";
import Input from "./Input";

const Card = () => {
  useEffect(() => {
    weatherData().then((res) => {
      console.log("SDD", res.data.name);
    });
  });
  return (
    <div>
      <div className="container mt-5 ">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <div className="card text-bg-dark">
              <img
                src="https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1965&q=80"
                class="card-img"
                alt="..."
              />
              <div className="card-img-overlay">
                <Input />
                {/* 
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p class="card-text">
                  <small>Last updated 3 mins ago</small>
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
