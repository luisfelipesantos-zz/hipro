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
import { addJobApplication } from "../../store/actions";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { HomeButton } from "../Home/styles";

const initialStateValues: JobApplication = {
  id: 0,
  company: "",
  role: "",
  status: "Applied",
};

export const JobForm: React.FC = () => {
  const history = useHistory();

  const [jobFormData, setJobFormData] = useState(initialStateValues);
  const [loading, setLoading] = useState(false);

  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setLoading(true);
      await new Promise((res) => {
        setTimeout(() => {
          res("");
        }, 1000);
      });

      dispatch(
        addJobApplication({
          ...jobFormData,
          id: Math.random(),
        })
      );

      setJobFormData(initialStateValues);
      history.push("/jobs");
    } catch (e) {
      console.log(e);
    }
  };

  const dispatch = useDispatch();

  return (
    <>
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

      <HomeButton style={{ marginTop: "5em" }} onClick={() => history.goBack()}>
        Go Back
      </HomeButton>
    </>
  );
};
