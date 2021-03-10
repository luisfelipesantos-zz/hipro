import React, { useState } from "react";
import {
  Form,
  Title,
  InputContainer,
  Button,
  Input,
  Select,
  Label,
} from "./styles";
import { addJobApplicationAsync } from "../../store/actions";
import { useDispatch, useSelector } from "react-redux";

const initialStateValues: JobApplication = {
  id: 0,
  company: "",
  role: "",
  status: "Applied",
};

export const JobForm: React.FC = () => {
  const [jobFormData, setJobFormData] = useState(initialStateValues);

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(
      addJobApplicationAsync({
        ...jobFormData,
        id: Math.random(),
      })
    );
    setJobFormData(initialStateValues);
  };

  const dispatch = useDispatch();
  const loading = useSelector((state: JobApplicationState) => state.loading);

  return (
    <Form onSubmit={submitForm}>
      <Title>Add a job application</Title>

      <InputContainer>
        <Label>
          <b>Company:</b>
        </Label>
        <Input
          required
          type="text"
          value={jobFormData.company}
          onChange={(e) =>
            setJobFormData({ ...jobFormData, company: e.target.value })
          }
        />
      </InputContainer>

      <InputContainer>
        <Label>
          <b>Role:</b>
        </Label>
        <Input
          required
          type="text"
          value={jobFormData.role}
          onChange={(e) =>
            setJobFormData({ ...jobFormData, role: e.target.value })
          }
        />
      </InputContainer>

      <InputContainer>
        <Label>
          <b>Status:</b>
        </Label>
        <Select
          onChange={(e) =>
            setJobFormData({ ...jobFormData, status: e.target.value })
          }
          value={jobFormData.status}
          name="status"
          id=""
        >
          <option value="Applied">Applied</option>
          <option value="Interview">Interview</option>
          <option value="Practice Interview">Practice Interview</option>
          <option value="Job Offer">Job Offer</option>
          <option value="Hired">Hired</option>
        </Select>
      </InputContainer>
      <Button type="submit">{loading ? "Loading..." : "Add"}</Button>
    </Form>
  );
};
