import { useEffect, useState } from "react";
import "./weather.style.css";

export function WeatherComponent() {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const weatherKey = "24f842938f574b9ea0f74414232508";

    //"load" saved city to fetch data
    const savedUserCity = localStorage.getItem("userCity");

    fetch(
      `https://api.weatherapi.com/v1/current.json?key=${weatherKey}&q=${savedUserCity}`
    )
      .then((resp) => resp.json())
      .then((resp) => {
        const resultWeather = (
          <>
            <img
              id="weatherIcon"
              src={resp.current.condition.icon}
              alt="weather-icon"
            />
            {resp.current.temp_c}°C, {resp.current.condition.text.toLowerCase()}
          </>
        ); //put fragment here to handle error for retrieving data too when for example city name not correct
        setWeatherData(resultWeather);
      })
      .catch((error) => {
        console.log("Error fetching data: ", error.message);
      });
  }, []);

  return (
    <div className="weather-container">
      {weatherData ? (
        <h5 className="weather-display">{weatherData}</h5>
      ) : (
        <h5 className="weather-display-error">No weather data found</h5>
      )}
    </div>
  );
}
