import React from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

import Location from "./Location";
import Icon from "./Icon";
import Condition from "./Condition";

const WeatherCard = ({ temp, condition, city, country, getWeather }) => {
  // Initial state of the variables
  let highColor = 0;
  let lowColor = 0;
  let bg = null;

  // Changes the color according to the temparature
  if (temp > 12) {
    highColor = (1 - (temp - 12) / 28) * 255;
    lowColor = highColor - 200;
    bg = `linear-gradient(
      to top,
      rgb(255, ${highColor}, 0),
      rgb(255, ${Math.abs(lowColor)}, 0)
    );`;
  } else {
    highColor = (1 - (temp + 20) / 32) * 255;
    lowColor = highColor - 200;
    bg = `linear-gradient(
      to top,
      rgb(0, ${Math.abs(lowColor)}, 255),
      rgb(0, ${highColor}, 255)
    );`;
  }

  // Card CSS
  const Card = styled.div`
    margin: 10% auto;
    background: ${bg};
    width: 200px;
    height: 280px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border: 1px solid green;
    border-radius: 15px;
    color: aliceblue;
  `;

  // Structures the component
  return (
    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
      <Card>
        <Location getWeather={getWeather} city={city} country={country} />
        <Icon condition={condition} />
        <Condition temp={temp} condition={condition} />
      </Card>
    </motion.div>
  );
};

export default WeatherCard;
