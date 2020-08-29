import React from "react";

import Cloudy from "./img/Mostly Cloudy-2x.png";
import Clear from "./img/Mostly Sunny-2x.png";
import Hazy from "./img/Haze-2x.png";
import Haily from "./img/Hail-2x.png";
import Foggy from "./img/Fog-2x.png";
import Tornado from "./img/Tornado-2x.png";
import Dusty from "./img/Dust-2x.png";
import Misty from "./img/Fog-2x.png";
import Snowy from "./img/Snow-2x.png";
import Rainy from "./img/Rain-2x.png";
import Drizzly from "./img/Drizzle.png";
import Thunderstorm from "./img/Severe Thunderstorm-2x.png";

// Picks the correct image (Not the best way)
const Icon = (props) => {
  let icon = "";
  switch (props.condition) {
    case "Clouds":
      icon = Cloudy;
      break;
    case "Clear":
      icon = Clear;
      break;
    case "Haze":
      icon = Hazy;
      break;
    case "Hail":
      icon = Haily;
      break;
    case "Fog":
      icon = Foggy;
      break;
    case "Tornado":
      icon = Tornado;
      break;
    case "Dust":
      icon = Dusty;
      break;
    case "Mist":
      icon = Misty;
      break;
    case "Snow":
      icon = Snowy;
      break;
    case "Rain":
      icon = Rainy;
      break;
    case "Drizzle":
      icon = Drizzly;
      break;
    case "Thunderstorm":
      icon = Thunderstorm;
      break;
    default:
      icon = Foggy;
      break;
  }

  // Returns the picked image
  return <img src={icon} alt="Weather Icon" />;
};

export default Icon;
