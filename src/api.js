import axios from "axios";

export const weatherData = () => {
  return axios
    .get(
      "https://api.openweathermap.org/data/2.5/weather?q=London&appid=061602ffb426fc9a2f8cb137ac8b452c"
    )
    .then((res) => {
      return res;
    });
};
