import React from "react";
import { useSelector } from "react-redux";
import { JobApplication } from "./components/JobApplication";
import { HomeButton } from "../Home/styles";
import { ButtonGroup } from "./styles";
import { useHistory } from "react-router";

export const JobApplicationList: React.FC = () => {
  const jobs = useSelector((state: JobApplicationState) => state.jobs);
  const history = useHistory();

  return (
    <>
      {jobs.map((job) => (
        <JobApplication key={Math.random()} job={job} />
      ))}

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
