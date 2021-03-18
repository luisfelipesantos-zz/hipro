import { useParams } from "react-router";
import { Form, Input, Button, Steps } from "rsuite";
import { HomeButton } from "../Home/styles";
import { Auth } from "aws-amplify";

import { Container, ConfInput } from "./styles";
import { useState } from "react";

interface ParamTypes {
  username: string;
}

export const AccountConfirmation: React.FC = () => {
  const { username } = useParams<ParamTypes>();

  const verifyAccount = async () => {
    try {
      await Auth.confirmSignUp(username, code);
    } catch (error) {}
  };

  const [code, setCode] = useState("");

  return (
    <>
      <Container>
        <h5>Almost there!</h5>
        <div style={{ marginTop: "30px" }}>
          <Steps small current={1}>
            <Steps.Item title="Registration" />
            <Steps.Item title="Verify Account" />
          </Steps>
        </div>

        <p>
          We just sent a confirmation code to the phone number you provided.
          Please, enter the code to finish your registration.
        </p>

        <Form onSubmit={verifyAccount}>
          <ConfInput
            onChange={(value: string) => {
              setCode(value);
            }}
          />
          <HomeButton type="submit" appearance="primary">
            Verify Code
          </HomeButton>
        </Form>
      </Container>
    </>
  );
};
