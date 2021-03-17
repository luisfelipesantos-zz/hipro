import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import { Modal, Tag, Button } from "rsuite";
import { deleteJobApplication } from "../../store/actions";
import { HomeButton } from "../Home/styles";
import {
  Label,
  Status,
} from "../JobApplicationList/components/JobApplication/styles";

interface ParamTypes {
  id: string;
}

export const Job: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const { id } = useParams<ParamTypes>();
  const jobInfo = useSelector((state: JobApplicationState) =>
    state.jobs.find((job: JobApplication) => job.id === parseFloat(id))
  );

  const deleteAppJob = () => {
    if (jobInfo !== undefined) dispatch(deleteJobApplication(jobInfo.id));
    history.push("/jobs");
  };

  const openModal = () => {
    setShow(true);
  };

  const closeModal = () => {
    setShow(false);
  };

  const statusColor = (status?: string) => {
    switch (status) {
      case "Applied":
        return "yellow";
      case "Interview":
        return "orange";
      case "Practice Interview":
        return "red";
      case "Job Offer":
        return "blue";
      case "Hired":
        return "green";
      default:
        return "";
    }
  };

  return (
    <>
      <div
        style={{
          backgroundColor: "#fff",
          width: "80%",
          borderRadius: "5px",
          color: "#666",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.05)",
          margin: "3em auto",
          padding: "1em",
        }}
      >
        <h5 style={{ textAlign: "center" }}>Job Information</h5>
        <hr style={{ margin: "10px auto" }} />
        <Label>
          <b>Company name: </b>
          {jobInfo?.company}
        </Label>

        <Label>
          <b>Role: </b>
          {jobInfo?.role}
        </Label>

        <Status>
          <b>Status:</b>{" "}
          <Tag color={statusColor(jobInfo?.status)}>{jobInfo?.status}</Tag>
        </Status>
      </div>
      <HomeButton color="red" onClick={openModal}>
        Delete Job Application
      </HomeButton>
      <HomeButton color="blue" onClick={() => history.goBack()}>
        Go Back
      </HomeButton>

      <Modal size="xs" show={show} onHide={closeModal}>
        <Modal.Body>
          <p>Are you shure you want to delete this job application?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button appearance="primary" onClick={deleteAppJob}>
            Yes
          </Button>
          <Button appearance="subtle" onClick={closeModal}>
            No
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
