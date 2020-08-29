import React, { useState, useEffect } from "react";
import WeatherCard from "./WeatherCard/component";
import PulseLoader from "react-spinners/PulseLoader";

function WeatherEngine({ location }) {
  //Initial state of the variables
  const [query, setQuery] = useState();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [weather, setWeather] = useState({
    temp: null,
    city: null,
    condition: null,
    country: null,
  });

  // Gets weather from the API
  const getWeather = async (q) => {
    setQuery("");
    setLoading(true);
    try {
      const apiRes = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${q}&units=metric&appid=448ee10b28fc02a854cb816ce9f27dde`
      );
      const resJSON = await apiRes.json();
      setWeather({
        temp: resJSON.main.temp,
        city: resJSON.name,
        condition: resJSON.weather[0].main,
        country: resJSON.sys.country,
      });
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  // this hook will run only once when the component is ready
  useEffect(() => {
    getWeather(location);
  }, [location]);

  if (error) {
    return (
      <div style={{ color: "red", marginRight: "1%" }}>
        <br />
        <p>City not FOUND!</p>
        <button className="btn btn-info" onClick={() => setError(false)}>
          Reset
        </button>
      </div>
    );
  } else if (loading) {
    return (
      <div
        style={{
          display: "flex",
          width: "200px",
          height: "240px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <PulseLoader size={15} color="#ff00b3c5" />
      </div>
    );
  } else {
    return (
      <React.Fragment>
        <WeatherCard
          temp={weather.temp}
          condition={weather.condition}
          city={weather.city}
          country={weather.country}
          getWeather={getWeather}
        />
      </React.Fragment>
    );
  }
}

export default WeatherEngine;
