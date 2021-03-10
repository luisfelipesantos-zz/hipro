import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { Container, ButtonDiv, Button, JobInfo, Label, Status } from "./styles";
import { deleteJobApplication } from "../../store/actions";

export const JobApplication: React.FC<JobApplicationProps> = ({ job }) => {
  const dispatch = useDispatch();
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
            dispatch(deleteJobApplication(job.id));
          }}
        >
          <AiOutlineClose />
        </Button>
      </ButtonDiv>
    </Container>
  );
};
