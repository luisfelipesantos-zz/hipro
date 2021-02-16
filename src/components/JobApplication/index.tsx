import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { Container, ButtonDiv, Button, JobInfo, Label } from "./styles";

export const JobApplication: React.FC<JobApplicationProps> = ({ job }) => {
    return (
        <Container>
            <JobInfo>
                <Label>Company: </Label> {job.company} 
                <Label>Role: </Label> {job.role} 
                <Label>Status: </Label> {job.status} 
            </JobInfo>
            
            <ButtonDiv>  
                <Button>
                    <AiOutlineClose />
                </Button>
            </ButtonDiv>
        </Container>
    );
}
