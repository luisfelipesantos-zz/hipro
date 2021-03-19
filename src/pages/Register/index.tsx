import {
  FormLogin,
  ButtonLogin,
  HeadLogin,
  FormGroupLogin,
} from "../Login/styles";
import { ControlLabel, InputPicker, DatePicker, Input, Alert } from "rsuite";
import { AiOutlineUserAdd } from "react-icons/ai";
import { useState } from "react";
import { Auth } from "aws-amplify";
import { useHistory } from "react-router";

const userData: User = {
  phone: "",
  password: "",
  name: "",
  email: "",
  gender: "0",
  birthDate: "",
};

export const Register: React.FC = () => {
  const history = useHistory();
  const [user, setUser] = useState(userData);
  const [loading, setLoading] = useState(false);

  const validateEmptyFields = () => {
    return (
      user.phone === "" ||
      user.password === "" ||
      user.email === "" ||
      user.name === "" ||
      user.gender === "0" ||
      user.birthDate === ""
    );
  };

  const validatePhoneNumber = () => {
    return user.phone.length > 15 || user.phone.length < 15;
  };

  const validatePassword = () => {
    return user.password.length < 8;
  };

  const validateEmail = () => {
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return !regex.test(user.email.toLowerCase());
  };

  const genderData = [
    {
      label: "Male",
      value: "1",
    },
    {
      label: "Female",
      value: "2",
    },
  ];

  const generateRandomString = (length = 6) =>
    Math.random().toString(20).substr(2, length);

  const submitForm = async () => {
    setLoading(true);

    const username = user.name
      .substr(0, user.name.indexOf(" "))
      .concat(generateRandomString());

    if (validateEmptyFields())
      Alert.error("There are empty fields. Please fill all the fields.", 5000);
    else if (validatePhoneNumber()) Alert.error("Incorrect phone number", 5000);
    else if (validatePassword())
      Alert.error("The password must have 8 characters at least.", 5000);
    else if (validateEmail())
      Alert.error("The email may be wrong, please, try again.", 5000);
    else {
      try {
        const { user: cognitoUser } = await Auth.signUp({
          username,
          password: user.password,
          attributes: {
            email: user.email,
            phone_number: "+55".concat(user.phone.replace(/[^A-Z0-9]/gi, "")),
            birthdate: user.birthDate,
            gender: user.gender,
            name: user.name,
          },
        });

        console.log(cognitoUser);
        setLoading(false);
      } catch (error) {
        console.log("Something went wrong in signing up", error);
      }

      setUser(userData);

      history.push(`/confirmaccount/${username}`);
    }
  };

  const formatDate = (date: Date) => {
    const year = date.getFullYear().toString();
    const month =
      date.getMonth().toString().length === 1
        ? `0${date.getMonth() + 1}`
        : date.getMonth() + 1;
    const day =
      date.getDate().toString().length === 1
        ? `0${date.getDate()}`
        : date.getDate();

    return `${year}-${month}-${day}`;
  };

  return (
    <>
      <FormLogin onSubmit={submitForm} style={{ marginBottom: "5em" }}>
        <HeadLogin>
          <AiOutlineUserAdd size="50px" color="#777" />
        </HeadLogin>

        <FormGroupLogin>
          <ControlLabel>Phone</ControlLabel>
          <Input
            placeholder="(00) 0 0000-0000"
            value={user.phone}
            onChange={(value) =>
              setUser({
                ...user,
                phone: value
                  .slice(0, 15)
                  .replace(/\D/g, "")
                  .replace(/(^\d{2})(\d)/, "($1) $2")
                  .replace(/(\d{4,5})(\d{4}$)/, "$1-$2"),
              })
            }
          ></Input>
        </FormGroupLogin>

        <FormGroupLogin>
          <ControlLabel>Password</ControlLabel>
          <Input
            value={user.password}
            type="password"
            onChange={(value) => setUser({ ...user, password: value })}
          ></Input>
        </FormGroupLogin>

        <FormGroupLogin>
          <ControlLabel>Name</ControlLabel>
          <Input
            value={user.name}
            placeholder="Ex.: Michael Jackson"
            onChange={(value) => setUser({ ...user, name: value })}
          ></Input>
        </FormGroupLogin>

        <FormGroupLogin>
          <ControlLabel>Email</ControlLabel>
          <Input
            value={user.email}
            type="email"
            placeholder="example@example.com"
            onChange={(value) => setUser({ ...user, email: value })}
          ></Input>
        </FormGroupLogin>

        <FormGroupLogin>
          <ControlLabel>Gender</ControlLabel>
          <InputPicker
            value={user.gender}
            style={{ width: "100%" }}
            data={genderData}
            placeholder="Select..."
            onChange={(value) => setUser({ ...user, gender: value })}
          ></InputPicker>
        </FormGroupLogin>

        <FormGroupLogin>
          <ControlLabel>Birth Date</ControlLabel>
          <DatePicker
            style={{ width: "100%" }}
            placement="auto"
            placeholder="Select..."
            format="YYYY-MM-DD"
            onChange={(date) =>
              setUser({
                ...user,
                birthDate: date !== null ? formatDate(date) : "",
              })
            }
          ></DatePicker>
        </FormGroupLogin>

        <ButtonLogin loading={loading} type="submit" color="blue">
          Register
        </ButtonLogin>
      </FormLogin>
    </>
  );
};
