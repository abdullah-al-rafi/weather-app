import React from "react";
import "./App.css";

import WeatherEngine from "./components/WeatherEngine";

// Main
function App() {
  return (
    <div className="App">
      <WeatherEngine location="Dhaka" />
      <WeatherEngine location="Alberta, ca" />
      <WeatherEngine location="London" />
      <WeatherEngine location="Alaska" />
    </div>
  );
}

export default App;
