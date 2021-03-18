import { Form, Input, Button, Steps } from "rsuite";
import { HomeButton } from "../Home/styles";

import { Container, ConfInput } from "./styles";

export const AccountConfirmation: React.FC = () => {
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

        <Form>
          <ConfInput />
          <HomeButton appearance="primary">Verify Code</HomeButton>
        </Form>
      </Container>
    </>
  );
};
