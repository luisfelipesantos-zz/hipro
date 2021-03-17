import React from "react";
import { JobApplication } from "./components/JobApplication";
import { HomeButton } from "../Home/styles";
import { ButtonGroup, ContentDiv } from "./styles";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";
import { Loader } from "rsuite";

export const JobApplicationList: React.FC = () => {
  const history = useHistory();
  const state = useSelector((state: JobApplicationState) => state);

  const jobs = state.jobs;

  return (
    <ContentDiv>
      {state.loading ? (
        <Loader center size="md" />
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
          color="blue"
          onClick={() => {
            history.push("/");
          }}
        >
          Go back to home
        </HomeButton>
        <HomeButton
          color="blue"
          onClick={() => {
            history.push("/form");
          }}
        >
          Add new job application
        </HomeButton>
      </ButtonGroup>
    </ContentDiv>
  );
};
