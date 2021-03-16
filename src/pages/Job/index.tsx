import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import { deleteJobApplication } from "../../store/actions";
import { HomeButton } from "../Home/styles";

interface ParamTypes {
  id: string;
}

export const Job: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const { id } = useParams<ParamTypes>();
  const jobInfo = useSelector((state: JobApplicationState) =>
    state.jobs.find((job: JobApplication) => job.id === parseFloat(id))
  );

  const deleteAppJob = () => {
    if (jobInfo !== undefined) dispatch(deleteJobApplication(jobInfo.id));
    history.push("/jobs");
  };

  return (
    <>
      <div
        style={{
          backgroundColor: "#fff",
          width: "75%",
          borderRadius: "5px",
          color: "#444",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.05)",
          margin: "auto",
          marginBottom: "3em",
          padding: "0.5em 1em 0.5em 1em",
        }}
      >
        <h3 style={{ textAlign: "center" }}>Job Information</h3>
        <hr />
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
      <HomeButton style={{ backgroundColor: "#e23636" }} onClick={deleteAppJob}>
        Delete Job Application
      </HomeButton>
      <HomeButton onClick={() => history.goBack()}>Go Back</HomeButton>
    </>
  );
};
