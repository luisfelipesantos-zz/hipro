import styled from "styled-components";
import { Link } from "react-router-dom";

export const HomeButton = styled.button`
  margin: auto;
  display: block;
  width: 80%;
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

export const LinkA = styled(Link)`
  text-decoration: none;
`;
