import React, { useState } from 'react';
import { Form, Title, InputContainer, Button, Input, Select, Label } from "./styles";

export const JobForm: React.FC = ({}) => {

    const [company, setCompany] = useState("");
    const [role, setRole] = useState("");
    const [status, setStatus] = useState("Applied");

    return (
        <Form>
            <Title>Add a job application</Title>

            <InputContainer>
                <Label><b>Company:</b></Label>
                <Input type="text" value={company} onChange={e => setCompany(e.target.value)}/>
            </InputContainer>      

            <InputContainer>
                <Label><b>Role:</b></Label>
                <Input type="text" value={role} onChange={e => setRole(e.target.value)}/>
            </InputContainer>   
            
            <InputContainer>
                <Label><b>Status:</b></Label>
                <Select onChange={e => setStatus(e.target.value)} name="status" id="">
                    <option value="Applied" selected>Applied</option>
                    <option value="Interview">Interview</option>
                    <option value="Practice Interview">Practice Interview</option>
                    <option value="Job Offer">Job Offer</option>
                    <option value="Hired">Hired</option>
                </Select>
            </InputContainer>
            <Button type='submit' 
                    onClick={e => {
                        e.preventDefault();
                        // addJobApplication({
                        //     company,
                        //     role,
                        //     status
                        // });
                        setCompany("");
                        setRole("");
                        setStatus("");
                     }    
                    }
            >Add</Button>
        </Form>
    );
}