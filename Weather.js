import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div class="container">
      <div class="weather-app-wrapper">
        <div class="weather-app">
          <form id="search-form" class="mb-4">
            <div class="row">
              <div class="col-9">
                <input
                  type="search"
                  placeholder="Type your city..."
                  class="form-control"
                  id="city-input"
                  autocomplete="off"
                />
              </div>
              <div class="col-3">
                <input
                  type="submit"
                  value="Search"
                  class="btn btn-warning w-100"
                />
              </div>
            </div>
          </form>
          <div class="overview">
            <h1 id="city">New York City</h1>
            <ul>
              <li>
                Last updated at <span id="date">7:25 pm</span>
              </li>
              <li id="description">Sunny</li>
            </ul>
          </div>
          <div class="row">
            <div class="col-6">
              <div class="clearfix weather-temperature">
                <img
                  src="data:image/png;base64,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"
                  alt="Clear"
                  id="icon"
                  class="float-left"
                />
                <div class="float-left">
                  <strong id="temperature">28</strong>
                  <span class="units">
                    <a href="#" id="celsius-link" class="active">
                      °C
                    </a>{" "}
                    |{" "}
                    <a href="#" id="fahrenheit-link">
                      °F
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div class="col-6">
              <div class="side-bar">
                <ul>
                  <li>
                    Humidity:{" "}
                    <span id="humidity" class="humidity">
                      19
                    </span>
                    %
                  </li>
                  <li>
                    Wind:{" "}
                    <span id="wind" class="wind">
                      3
                    </span>{" "}
                    km/h
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <small>
          <a
            href="https://github.com/alexkuo40929/Vanilla-weather-app"
            target="_blank"
          >
            Open-source code
          </a>
          by Alex Kuo
        </small>
      </div>
    </div>
  );
}