import React from "react";
import styled from "styled-components";

import Box from "../../components/layouts/Box";

const PageNotFound = () => {
  return (
    <>
       <Box direction="row" width="80%" margin="1rem auto">
        <Box>
          <img width="400rem" src="../images/error.png" alt="Error"/>
        </Box>
        <Box>
          <img src="../images/404.png" alt="404"/>
          <StyledH1>Error.</StyledH1>
          <StyledSpan>Woops! The page requested was not found.</StyledSpan>
        </Box>
       </Box>
    </>
  );
}

const StyledH1 = styled.h1`
color: rgba(57, 81, 101);
`
const StyledSpan = styled.span`
  color: rgba(57, 81, 101);
`
export default PageNotFound;
