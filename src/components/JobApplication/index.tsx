import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { Container, ButtonDiv, Button, JobInfo, Label, Status } from "./styles";


export const JobApplication: React.FC<JobApplicationProps> = ({ job }) => {
    return (
        <Container>
            <JobInfo>
                <Label><b>Company:</b> {job.company} </Label> 
                <Label><b>Role:</b> {job.role} </Label> 
                <hr/>
                <Status status={job.status}><b>Status:</b> {job.status} </Status> 
            </JobInfo>
            
            <ButtonDiv>  
                <Button>
                    <AiOutlineClose />
                </Button>
            </ButtonDiv>
        </Container>
    );
}
