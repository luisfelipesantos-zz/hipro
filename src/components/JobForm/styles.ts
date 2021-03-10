import styled from "styled-components";

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

export const Title = styled.h4`
  text-align: center;
`;

export const InputContainer = styled.div`
  margin: 5px;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
`;

export const Input = styled.input`
  width: 60%;
  border-radius: 5px;
  height: 33px;
  border: 1px solid #ddd;
`;

export const Button = styled.button`
  width: 40%;
  margin: 10px auto;
  padding: 10px;
  border-radius: 5px;
  border: none;
  background-color: #6676c9;
  font-weight: bold;
  color: #fff;

  :hover {
    cursor: pointer;
    background-color: #6f7ecf;
  }

  :active {
    background-color: #2a3a8c;
  }
`;

export const Select = styled.select`
  width: 60%;
  border-radius: 5px;
  height: 33px;
  border: 1px solid #ddd;
  background: none;
  -webkit-appearence: none;
  -moz-appearance: none;
`;

export const Option = styled.option`
  background-color: ;
`;

export const Label = styled.label`
  color: #7286ef;
`;
