import React from "react";
import styled from "styled-components";

import { BoxContainer } from "./Box-Center";


const BoxRow = ({ children }) => {
  return (
    <BoxRowContainer>
      {children}
    </BoxRowContainer>
  );
};

export const BoxRowContainer = styled(BoxContainer)`
  flex-direction: row;
`;



export default BoxRow;