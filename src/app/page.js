"use client";

import GetWeather from "./components/GetWeather.jsx";

export default function Home() {
  return (
    <>
      <section className="app__background">
        <h1>Weather</h1>

        <section className="weather-info">
          <GetWeather />
        </section>
      </section>

      <footer>
        <p>&copy;2023 Derek Olsen </p>
        <p>
          Powered by{" "}
          <a href="https://www.weatherapi.com/" title="Free Weather API">
            WeatherAPI.com
          </a>
        </p>
      </footer>
    </>
  );
}
