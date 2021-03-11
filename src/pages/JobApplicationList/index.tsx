import React from "react";
import { useSelector } from "react-redux";
import { JobApplication } from "./components/JobApplication";

export const JobApplicationList: React.FC = () => {
  const jobs = useSelector((state: JobApplicationState) => state.jobs);

  return (
    <>
      {jobs.map((job) => (
        <JobApplication key={Math.random()} job={job} />
      ))}
    </>
  );
};
