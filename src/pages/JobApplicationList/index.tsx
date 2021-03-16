import React from "react";
import { JobApplication } from "./components/JobApplication";
import { HomeButton } from "../Home/styles";
import { ButtonGroup } from "./styles";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";

export const JobApplicationList: React.FC = () => {
  const history = useHistory();

  const state = useSelector((state: JobApplicationState) => state);

  const jobs = state.jobs;

  return (
    <>
      {state.loading ? (
        <p
          style={{
            color: "#555",
            textAlign: "center",
          }}
        >
          Loading...
        </p>
      ) : jobs.length === 0 ? (
        <p
          style={{
            color: "#555",
            textAlign: "center",
          }}
        >
          No job applications found
        </p>
      ) : (
        jobs.map((job) => <JobApplication key={Math.random()} job={job} />)
      )}

      <ButtonGroup>
        <HomeButton
          onClick={() => {
            history.push("/");
          }}
        >
          Go back to home
        </HomeButton>
        <HomeButton
          onClick={() => {
            history.push("/form");
          }}
        >
          Add new job application
        </HomeButton>
      </ButtonGroup>
    </>
  );
};
