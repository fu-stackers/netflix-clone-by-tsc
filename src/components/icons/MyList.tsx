import React from "react";
import styled from "styled-components";
import { CircleAlert } from "lucide-react";

const MyList = () => {
  return (
    <StyledWrapper>
      <button className="flex">
        <CircleAlert /> Button
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  button {
    font-size: 17px;
    font-weight: bold;
    padding: 0.5em 2em;
    border: transparent;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
    background: white;
    color: black;
    border-radius: 4px;
    cursor: pointer;
  }

  button:hover {
    background: rgb(2, 0, 36);
    background: linear-gradient(
      90deg,
      rgba(30, 144, 255, 1) 0%,
      rgba(0, 212, 255, 1) 100%
    );
  }

  button:active {
    transform: translate(0em, 0.2em);
  }
`;

export default MyList;
