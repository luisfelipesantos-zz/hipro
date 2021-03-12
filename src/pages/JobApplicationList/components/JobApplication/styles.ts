import styled from "styled-components";
import { AiOutlineArrowsAlt } from "react-icons/ai";

interface StatusProps {
  status: string;
}

export const OpenButton = styled(AiOutlineArrowsAlt)`
  font-size: 20px;
`;

export const Container = styled.div`
  display: flex;
  font-family: "Montserrat", sans-serif;
  max-width: 30em;
  width: 85%;
  margin: 20px auto;
  border-radius: 5px;
  background-color: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
  justify-content: space-between;
  font-size: 15px;

  hr {
    margin: 5px;
    width: 100%;
  }
`;

export const JobInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 10px;
`;

export const ButtonDiv = styled.div`
  width: 20%;
  align-items: center;
`;

export const Button = styled.button`
  height: 100%;
  width: 100%;
  border-radius: 0px 5px 5px 0px;
  border: none;
  background: none;

  :hover {
    cursor: pointer;
    background-color: #fbfbfb;
  }

  :active {
    background-color: #f2f2f2;
  }
`;

export const Label = styled.p`
  width: 100%;
  margin: 5px;

  b {
    color: #7286ef;
  }
`;

export const Status = styled.p<StatusProps>`
  width: 100%;
  margin: 5px;
  font-weight: bold;
  color: ${(props) => {
    switch (props.status) {
      case "Applied":
        return "#F89F1B";
      case "Interview":
        return "#F8851B";
      case "Practice Interview":
        return "#F8501B";
      case "Job Offer":
        return "#6676C9";
      case "Hired":
        return "#0EA001";
      default:
        return "#000";
    }
  }};

  b {
    color: #7286ef;
  }
`;
