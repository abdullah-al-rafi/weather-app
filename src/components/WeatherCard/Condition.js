import React from "react";
import styled from "@emotion/styled";
import Reel from "react-reel";

const Condition = ({ temp, condition }) => {
  // Returns the conditions
  return (
    <React.Fragment>
      <div style={{ fontSize: "2rem" }}>
        <Reel theme={reelStyle} text={`${temp}°C`} />
      </div>
      <State>{condition}</State>
    </React.Fragment>
  );
};

export default Condition;

// Condition CSS
const reelStyle = {
  group: {
    transitionDelay: "0",
    transitionTimingFunction: "ease-in-out",
    transform: "translate(0, 0)",
    height: "1.5em",
  },

  number: {
    height: "1em",
  },

  reel: {
    height: "1.07em",
    display: "flex",
    alignItems: "flex-end",
    overflowY: "hidden",
    lineHeight: "0.97em",
    justifyContent: "center",
  },
};

const State = styled.h3`
  font-size: 1.2rem;
`;
