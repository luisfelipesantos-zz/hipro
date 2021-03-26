import React, { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { HomeButton } from "./styles";
import "rsuite/lib/styles/index.less";
import Auth from "@aws-amplify/auth";
import { useSelector } from "react-redux";
import { Loader } from "rsuite";

export const Home: React.FC = () => {
  const history = useHistory();

  const [loading, setLoading] = useState(false);

  const loadingState = useSelector(
    (state: JobApplicationState) => state.userLoading
  );

  const isLogged = useSelector(
    (state: JobApplicationState) => state.userLogged
  );

  const logOut = async () => {
    setLoading(true);
    try {
      await Auth.signOut();
      setLoading(false);
      history.push("/login");
      console.log("Signed out successfully");
    } catch (error) {
      console.log("Something went wrong in signing out.", error);
    }
  };

  return (
    <>
      {loadingState ? (
        <>
          <Loader size="lg" center />
        </>
      ) : isLogged ? (
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

          <div
            style={{
              display: "block",
              margin: "0 auto",
              width: "100%",
              bottom: "20px",
              textAlign: "center",
              position: "absolute",
            }}
          >
            <HomeButton loading={loading} color="red" onClick={logOut}>
              Log out
            </HomeButton>
          </div>
        </>
      ) : (
        <Redirect to="/login" />
      )}
      {console.log(isLogged)}
    </>
  );
};
