import React from "react";
import styled from "styled-components";


const BoxCenter = ({ children }) => {
  return (
    <BoxContainer>
      {children}
    </BoxContainer>
  );
};

export const BoxContainer = styled.fieldset`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 4px;
`;



export default BoxCenter;