import { Button, Form, Input, Icon, FormGroup } from "rsuite";
import styled from "styled-components";

export const FormLogin = styled(Form)`
  display: block;
  background-color: #fdfdfd;
  border-radius: 5px;
  width: 80%;
  margin: auto;
  padding: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
  text-align: center;
`;

export const FormGroupLogin = styled(FormGroup)`
  display: block;
  width: 80%;
  text-align: left;
  margin: auto;
`;

export const HeadLogin = styled.div`
  display: inline-block;
  margin: 10px;
`;

export const ButtonLogin = styled(Button)`
  width: 80%;
  display: block;
  margin: 20px auto;
`;

export const Forgot = styled.p`
  margin-top: 20px;
  text-align: center;

  a {
    text-decoration: underline;
    font-weight: bold;
  }
`;

export const Register = styled.p`
  text-align: center;

  a {
    font-weight: bold;
    text-decoration: underline;
  }
`;
