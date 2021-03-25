import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { HomeButton } from "./styles";
import "rsuite/lib/styles/index.less";
import Auth from "@aws-amplify/auth";

export const Home: React.FC = () => {
  const history = useHistory();

  const [loading, setLoading] = useState(false);

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
  );
};
