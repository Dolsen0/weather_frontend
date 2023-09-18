import { set } from "mongoose";
import { useState, useEffect } from "react";
export default function GetAstronomy() {
  const [forecastOne, setForecastOne] = useState({});
  const [forecastTwo, setForecastTwo] = useState({});
  const [forecastThree, setForecastThree] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://weather-be-ddb897da1e31.herokuapp.com/forecast/33433")
      .then((res) => res.json())
      .then(
        (result) => {
          setLoading(false);
          setForecastOne(result.forecast.forecastday[0]);
          setForecastTwo(result.forecast.forecastday[1]);
          setForecastThree(result.forecast.forecastday[2]);
          console.log(result);
        },
        (error) => {
          setError(error);
          setLoading(false);
        }
      );
  }, []);

  if (loading) {
    return <p></p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <>
      <section className="forecast">
        <div className="forecast__container">
          <div>
            <p>{forecastOne.date}:</p>
            <p>{forecastOne.day.avgtemp_f}&deg;F</p>
            <p>{forecastOne.day.condition.text}</p>
            <img
              src={`https:${forecastOne.day.condition.icon}`}
              alt="Weather Icon"
            />
            <p>Rain chance: {forecastOne.day.daily_chance_of_rain}%</p>
          </div>

          <div>
            <p>{forecastTwo.date}:</p>
            <p>{forecastTwo.day.avgtemp_f}&deg;F</p>
            <p>{forecastTwo.day.condition.text}</p>
            <img
              src={`https:${forecastTwo.day.condition.icon}`}
              alt="Weather Icon"
            />
            <p>Rain chance: {forecastTwo.day.daily_chance_of_rain}%</p>
          </div>

          <div>
            <p>{forecastThree.date}:</p>
            <p>{forecastThree.day.avgtemp_f}&deg;F</p>
            <p>{forecastThree.day.condition.text}</p>
            <img
              src={`https:${forecastThree.day.condition.icon}`}
              alt="Weather Icon"
            />
            <p>Rain chance: {forecastThree.day.daily_chance_of_rain}%</p>
          </div>
        </div>
      </section>
    </>
  );
}
