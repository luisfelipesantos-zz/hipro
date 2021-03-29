import React, { useState } from "react";
import {
  Form,
  Title,
  ButtonForm,
  InputGroupForm,
  InputPickerForm,
} from "./styles";
import { addJobApplication } from "../../store/actions";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { HomeButton } from "../Home/styles";
import { Input, Loader } from "rsuite";
import { AxiosResponse } from "axios";
import api from "../../api";

require("dotenv").config();

const initialStateValues: JobApplication = {
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

      const newJob: AxiosResponse = await api.post(
        `${process.env.REACT_APP__AXIOS_BASEURL}/jobs`,
        jobFormData
      );

      dispatch(addJobApplication(newJob.data));

      setJobFormData(initialStateValues);
      history.push("/jobs");
    } catch (e) {
      console.log(e);
    }
  };

  const dispatch = useDispatch();

  const statusData = [
    {
      label: "Applied",
      value: "Applied",
    },
    {
      label: "Interview",
      value: "Interview",
    },
    {
      label: "Practice Interview",
      value: "Practice Interview",
    },
    {
      label: "Job Offer",
      value: "Job Offer",
    },
    {
      label: "Hired",
      value: "Hired",
    },
  ];

  return (
    <>
      <Form onSubmit={submitForm}>
        <Title>Add a job application</Title>

        <InputGroupForm>
          <Input
            required
            type="text"
            size="sm"
            placeholder="Company"
            onChange={(value) =>
              setJobFormData({ ...jobFormData, company: value })
            }
          />
        </InputGroupForm>

        <InputGroupForm>
          <Input
            required
            type="text"
            size="sm"
            placeholder="Role"
            onChange={(value: string) =>
              setJobFormData({ ...jobFormData, role: value })
            }
          />
        </InputGroupForm>

        <InputPickerForm
          required
          size="sm"
          placeholder="Status"
          data={statusData}
          onSelect={(value: string) =>
            setJobFormData({ ...jobFormData, status: value })
          }
        />

        <ButtonForm color="blue" type="submit">
          {loading ? <Loader size="xs" inverse center /> : "Add"}
        </ButtonForm>
      </Form>

      <HomeButton
        color="blue"
        style={{ marginTop: "3em" }}
        onClick={() => history.goBack()}
      >
        Go Back
      </HomeButton>
    </>
  );
};
