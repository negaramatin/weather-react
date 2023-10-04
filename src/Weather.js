import React from "react";
// import axios from "axios";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Kerman",
    temperature: 32,
    date: "Thursday 21 September 2023, 10:00",
    description: "Cloudy",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    feelslike: 30,
    humidity: 80,
    wind: 10,
  };

  return (
    <div class="container">
      <div className="row align-items-start">
        <div className="col">
          <h1>{weatherData.city}</h1>
          <h2>last updated:{weatherData.date} </h2>
          <span className="last-updated"></span>
        </div>
        <div className="col city-search">
          <br />
          <form>
            <input
              type="text"
              placeholder="Enter a city"
              className="input-form"
            />
            <button type="submit" className="btn btn-outline-primary">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
            <button type="submit" className="btn btn-outline-primary">
              <i className="fa-solid fa-location-dot"></i>
            </button>
          </form>
        </div>
      </div>

      <br />
      <div className="row current-city">
        <div className="col"></div>

        <div className="col current-icon">
          <img src={weatherData.imgUrl} alt={weatherData.description} />
          <br />
          <span className="justify-content-center">
            {weatherData.description}
          </span>
        </div>
        <div className="col current-deg justify-content-center">
          {" "}
          {weatherData.temperature}
          <span className="current-city-temp"></span>
          <br />
          <span className="convert">
            <a href="/" className="active">
              °C
            </a>
            <a href="/">°F</a>
          </span>
          <br />
          <div className="justify-content-center">
            feels like:{weatherData.feelslike}
          </div>
          <div className="justify-content-center">
            humidity:{weatherData.humidity}
          </div>
          <div className="justify-content-center">
            windspeed:{weatherData.wind}
          </div>
        </div>
        <div className="col"></div>
      </div>

      <br />
      <div className="row forecast">
        <p></p>
      </div>
      <div className="row weather-forecast"></div>
      <div className="row">
        <div className="col">
          <footer className="footer">
            <a
              href="https://github.com/negaramatin/weather-react"
              target="_blank"
              rel="noreferrer"
            >
              Open-source code
            </a>
            by
            <a
              href="https://www.linkedin.com/in/negar-matin-b7a38a261/"
              target="_blank"
              rel="noreferrer"
            >
              Negar Matin
            </a>
          </footer>
        </div>
      </div>
    </div>
  );
}
