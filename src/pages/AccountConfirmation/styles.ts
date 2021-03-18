import { Input } from "rsuite";
import styled from "styled-components";

export const Container = styled.div`
  background: #fdfdfd;
  margin: auto;
  border-radius: 5px;
  width: 90%;
  padding: 10%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);

  h5 {
    text-align: center;
  }

  p {
    margin: 10px 10px 30px 10px;
  }
`;

export const ConfInput = styled(Input)`
  width: 80%;
  margin: 10px auto;
`;
