import React from "react";
import { useHistory } from "react-router-dom";
import { HomeButton } from "./styles";
import "rsuite/lib/styles/index.less";

export const Home: React.FC = () => {
  const history = useHistory();

  return (
    <>
      <HomeButton
        color="blue"
        onClick={() => {
          history.push("/form");
        }}
      >
        Register a new job application
      </HomeButton>
      <HomeButton
        color="blue"
        onClick={() => {
          history.push("/jobs");
        }}
      >
        All job applications
      </HomeButton>
    </>
  );
};
