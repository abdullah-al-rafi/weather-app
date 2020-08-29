import React, { useState } from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

const Location = ({ city, country, getWeather }) => {
  // Initial value of the states
  const [query, setQuery] = useState();
  const [inputMode, setInputMode] = useState(false);

  // Returns the locations
  if (inputMode) {
    return (
      <Container>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              getWeather(query);
            }}
          >
            <br />
            <div className="input-group mb-3">
              <input
                autoFocus
                required
                type="text"
                className="form-control text-capitalize"
                placeholder="City Name"
                aria-describedby="basic-addon2"
                onChange={(e) => setQuery(e.target.value)}
              />
              <div className="input-group-append">
                <button className="btn btn-success btn-sm">Search</button>
              </div>
            </div>
            <span
              style={{ cursor: "pointer" }}
              onClick={() => setInputMode(false)}
            >
              X
            </span>
          </form>
        </motion.div>
      </Container>
    );
  }

  return (
    <React.Fragment>
      <Container>
        <City onClick={() => setInputMode(true)}>{city}</City>
        <Country>{country}</Country>
      </Container>
    </React.Fragment>
  );
};

export default Location;

// Location CSS
const Container = styled.div`
  text-align: center;
`;

const City = styled.div`
  font-size: 1.6em;
  cursor: pointer;
  position: relative;
  &::hover {
    top: -25px;
  }
`;

const Country = styled.div`
  font-family: "Fira Sans", sans-serif;
  font-size: 1.1rem;
`;
