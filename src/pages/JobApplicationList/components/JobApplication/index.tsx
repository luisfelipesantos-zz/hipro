import React from "react";
import { AiOutlineArrowsAlt } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { Container, ButtonDiv, Button, JobInfo, Label, Status } from "./styles";
import { deleteJobApplication } from "../../../../store/actions";
import { useHistory } from "react-router";

export const JobApplication: React.FC<JobApplicationProps> = ({ job }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <Container>
      <JobInfo>
        <Label>
          <b>Company:</b> {job.company}{" "}
        </Label>
        <Label>
          <b>Role:</b> {job.role}{" "}
        </Label>
        <hr />
        <Status status={job.status}>
          <b>Status:</b> {job.status}{" "}
        </Status>
      </JobInfo>

      <ButtonDiv>
        <Button
          onClick={() => {
            // dispatch(deleteJobApplication(job.id));
            history.push(`/job/${job.id}`);
          }}
        >
          <AiOutlineArrowsAlt size={20} color={"#444"} />
        </Button>
      </ButtonDiv>
    </Container>
  );
};
