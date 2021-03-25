import {
  FormLogin,
  ButtonLogin,
  Forgot,
  Register,
  HeadLogin,
  FormGroupLogin,
} from "./styles";
import { Alert, ControlLabel, Icon, Input } from "rsuite";
import { AiOutlineUser } from "react-icons/ai";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import Auth from "@aws-amplify/auth";

const loginData: Login = {
  phone: "",
  password: "",
};

export const Login: React.FC = () => {
  const history = useHistory();

  const [signIn, setSignIn] = useState(loginData);
  const [loading, setLoading] = useState(false);

  const validateEmptyFields = () => {
    return signIn.phone === "" || signIn.password === "";
  };

  const validatePhoneNumber = () => {
    return signIn.phone.length > 15 || signIn.phone.length < 15;
  };

  const validatePassword = () => {
    return signIn.password.length < 8;
  };

  const submitLogIn = async () => {
    if (validateEmptyFields())
      Alert.error("There are empty fields. Please fill all the fields.", 5000);
    else if (validatePhoneNumber())
      Alert.error("Incorrect phone number.", 5000);
    else if (validatePassword())
      Alert.error("The password must have 8 characters at least.", 5000);
    else {
      try {
        setLoading(true);
        const user = await Auth.signIn(
          "+55".concat(signIn.phone.replace(/[^A-Z0-9]/gi, "")),
          signIn.password
        );
        console.log("Successful login", user);
        setSignIn(loginData);
        setLoading(false);
        history.push("/");
      } catch (error) {
        Alert.error(error.message);
        setSignIn(loginData);
        setLoading(false);
      }
    }
  };

  return (
    <>
      <FormLogin onSubmit={submitLogIn}>
        <HeadLogin>
          <AiOutlineUser size="50px" color="#777" />
        </HeadLogin>

        <FormGroupLogin>
          <ControlLabel>Phone</ControlLabel>
          <Input
            placeholder="(00) 0 0000-0000"
            value={signIn.phone}
            onChange={(value) => {
              setSignIn({
                ...signIn,
                phone: value
                  .slice(0, 15)
                  .replace(/\D/g, "")
                  .replace(/(^\d{2})(\d)/, "($1) $2")
                  .replace(/(\d{4,5})(\d{4}$)/, "$1-$2"),
              });
            }}
          ></Input>
        </FormGroupLogin>

        <FormGroupLogin>
          <ControlLabel>Password</ControlLabel>
          <Input
            type="password"
            value={signIn.password}
            onChange={(value) => {
              setSignIn({ ...signIn, password: value });
            }}
          ></Input>
        </FormGroupLogin>

        <ButtonLogin loading={loading} type="submit" color="blue">
          Login
        </ButtonLogin>
      </FormLogin>
      <Forgot>
        <a href="#">Forgot password?</a>
      </Forgot>
      <Register>
        Don't have an account? <Link to="/register">Register!</Link>
      </Register>
    </>
  );
};
