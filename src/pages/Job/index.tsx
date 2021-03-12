import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { Container } from "../JobApplicationList/components/JobApplication/styles";

interface ParamTypes {
  id: string;
}

export const Job: React.FC = () => {
  const { id } = useParams<ParamTypes>();
  const jobInfo = useSelector((state: JobApplicationState) =>
    state.jobs.find((job: JobApplication) => job.id === parseFloat(id))
  );

  return (
    <>
      <Container></Container>
    </>
  );
};
