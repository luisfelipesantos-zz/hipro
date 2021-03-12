import React from "react";
import { useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import { HomeButton } from "../Home/styles";

interface ParamTypes {
  id: string;
}

export const Job: React.FC = () => {
  const history = useHistory();
  const { id } = useParams<ParamTypes>();
  const jobInfo = useSelector((state: JobApplicationState) =>
    state.jobs.find((job: JobApplication) => job.id === parseFloat(id))
  );

  return (
    <>
      <div style={{}}>
        <p>
          <b>Company name: </b>
          {jobInfo?.company}
        </p>

        <p>
          <b>Role: </b>
          {jobInfo?.role}
        </p>

        <p>
          <b>Status: </b>
          {jobInfo?.status}
        </p>
      </div>

      <HomeButton onClick={() => history.goBack()}>Go Back</HomeButton>
    </>
  );
};
