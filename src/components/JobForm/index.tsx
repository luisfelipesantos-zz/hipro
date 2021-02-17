import React from 'react';
import { Form, Title, InputContainer, Button, Input, Select, Label } from "./styles";

export const JobForm: React.FC = () => {
    return (
        <Form>
            <Title>Add a job application</Title>

            <InputContainer>
                <Label><b>Company:</b></Label>
                <Input type="text"/>
            </InputContainer>      

            <InputContainer>
                <Label><b>Role:</b></Label>
                <Input type="text"/>
            </InputContainer>   
            
            <InputContainer>
                <Label><b>Status:</b></Label>
                <Select  name="status" id="">
                    <option value="Applied">Applied</option>
                    <option value="Interview">Interview</option>
                    <option value="Practice Interview">Practice Interview</option>
                    <option value="Job Offer">Job Offer</option>
                    <option value="Hired">Hired</option>
                </Select>
            </InputContainer>
            <Button>Add</Button>
        </Form>
    );
}