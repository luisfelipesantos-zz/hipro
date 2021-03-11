import React from "react";
import { Link, useHistory } from "react-router-dom";
import { HomeButton, LinkA } from "./styles";

export const Home: React.FC = () => {
  const history = useHistory();

  return (
    <>
      <HomeButton
        onClick={() => {
          history.push("/form");
        }}
      >
        Register a new job application
      </HomeButton>
      <HomeButton
        onClick={() => {
          history.push("/jobs");
        }}
      >
        All job applications
      </HomeButton>
    </>
  );
};
