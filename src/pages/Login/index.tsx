import {
  FormLogin,
  ButtonLogin,
  Forgot,
  Register,
  HeadLogin,
  FormGroupLogin,
} from "./styles";
import { ControlLabel, Icon, Input } from "rsuite";
import { AiOutlineUser } from "react-icons/ai";

export const Login: React.FC = () => {
  return (
    <>
      <FormLogin>
        <HeadLogin>
          <AiOutlineUser size="50px" color="#777" />
        </HeadLogin>

        <FormGroupLogin>
          <ControlLabel>Phone</ControlLabel>
          <Input placeholder="(00) 0 0000-0000"></Input>
        </FormGroupLogin>

        <FormGroupLogin>
          <ControlLabel>Password</ControlLabel>
          <Input type="password"></Input>
        </FormGroupLogin>

        <ButtonLogin color="blue">Login</ButtonLogin>
      </FormLogin>
      <Forgot>
        <a href="#">Forgot password?</a>
      </Forgot>
      <Register>
        Don't have an account? <a href="#">Register!</a>
      </Register>
    </>
  );
};
