import React from "react";
import styled from "styled-components";

const Line = styled.div`
  display: flex;
  flexDirection: row;
  justify-content: space-between;
  padding: 5px;
  margin: 2px;
  border: 1px solid black;
  backgroundColor: red;
`;

const Row = ({children}) => {
  return (
    <Line >
      {children}
      <div>
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </Line>
  );
};

export default Row; 