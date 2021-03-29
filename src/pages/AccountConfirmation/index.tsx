import { useHistory, useParams } from "react-router";
import { Form, Input, Button, Steps, Alert } from "rsuite";
import { HomeButton } from "../Home/styles";
import { Auth } from "aws-amplify";

import { Container, ConfInput } from "./styles";
import { useState } from "react";

interface ParamTypes {
  username: string;
}

export const AccountConfirmation: React.FC = () => {
  const { username } = useParams<ParamTypes>();
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const verifyAccount = async () => {
    setLoading(true);
    try {
      await Auth.confirmSignUp(username, code);
      setLoading(false);
      history.push("/login");
    } catch (error) {
      Alert.error("Something went wrong.");
      console.log(error);
    }
  };

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
          <HomeButton loading={loading} type="submit" appearance="primary">
            Verify Code
          </HomeButton>
        </Form>
      </Container>
    </>
  );
};
