import React from "react";
import styled from "styled-components";


function BtnDiv ({children}) {
  return (
    <StyledDiv>
     {children}
    </StyledDiv>
  );
};

const StyledDiv= styled.div`
    margin: 1rem;
    padding: 1rem;
    display:flex;
    justify-content: center;
    align-items: center;
`

export default BtnDiv;

