import styled from "styled-components";
import { Button, InputGroup, InputPicker } from "rsuite";

export const Form = styled.form`
  font-family: "Montserrat", sans-serif;
  display: flex;
  flex-direction: column;
  max-width: 30em;
  width: 90%;
  margin: 10px auto;
  padding: 2px;
  border-radius: 5px;
  background-color: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
`;

export const Title = styled.p`
  text-align: center;
  margin: 15px;
  font-weight: bold;
`;

export const InputGroupForm = styled(InputGroup)`
  margin: 5px auto;
  width: 80%;
`;

export const InputPickerForm = styled(InputPicker)`
  margin: 5px auto;
  width: 80%;
`;

export const ButtonForm = styled(Button)`
  display: block;
  width: 40%;
  margin: 10px auto;
  border-radius: 5px;
  font-weight: bold;
  height: 2.5em;
`;
