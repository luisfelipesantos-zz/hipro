import {
  FormLogin,
  ButtonLogin,
  HeadLogin,
  FormGroupLogin,
} from "../Login/styles";
import { ControlLabel, Icon, Input } from "rsuite";
import { AiOutlineUserAdd } from "react-icons/ai";

export const Register: React.FC = () => {
  return (
    <>
      <FormLogin>
        <HeadLogin>
          <AiOutlineUserAdd size="50px" color="#777" />
        </HeadLogin>

        <FormGroupLogin>
          <ControlLabel>Phone</ControlLabel>
          <Input placeholder="(00) 0 0000-0000"></Input>
        </FormGroupLogin>

        <FormGroupLogin>
          <ControlLabel>Password</ControlLabel>
          <Input type="password"></Input>
        </FormGroupLogin>

        <ButtonLogin color="blue">Register</ButtonLogin>
      </FormLogin>
    </>
  );
};
