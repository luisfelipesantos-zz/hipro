import React from "react";
import { Container, ButtonDiv, Button, JobInfo, Label, Status } from "./styles";
import { useHistory } from "react-router";
import { Icon, Tag } from "rsuite";

export const JobApplication: React.FC<JobApplicationProps> = ({ job }) => {
  const history = useHistory();

  const statusColor = (status: string) => {
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
    <Container>
      <JobInfo>
        <Label>
          <b>Company:</b> {job.company}
        </Label>
        <Label>
          <b>Role:</b> {job.role}{" "}
        </Label>
        <hr />
        <Status>
          <b>Status:</b> <Tag color={statusColor(job.status)}>{job.status}</Tag>
        </Status>
      </JobInfo>

      <ButtonDiv>
        <Button
          onClick={() => {
            history.push(`/job/${job.id}`);
          }}
        >
          <Icon icon="arrows-alt" />
        </Button>
      </ButtonDiv>
    </Container>
  );
};
