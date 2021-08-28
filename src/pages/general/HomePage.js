import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Login from "../authentication/Login";
import Box, { StyledBox } from "../../components/layouts/Box";

const HomePage = () => {
  return (
    <HeaderStyled>
        <LogoDiv>
         <StyledLogo src="../images/EasyClinicLogo.png" alt="Easy Clinic Logo"/>
        </LogoDiv>
        
        <LoginBox>
            <Login/>
            <Box padding= "20px">
                <span>I don't have an account </span>
                <StyledLink to="/signup">Sign up</StyledLink>
            </Box>
        </LoginBox>
    </HeaderStyled>
  );
};

const HeaderStyled = styled.fieldset`
    display:flex;
    justify-content: center; 
    background-image: url("../images/clinic-management.jpg");
    height: 100%;
    width: 100%; 
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    padding: 1rem 2rem;
    border: 1px solid black;
    &:not(:last-of-type) {
        margin-bottom: 2rem;
    }
`;

const LogoDiv = styled(StyledBox)`
    margin: 1rem;
    padding: 1rem;
    flex:2; 
`

const StyledLogo = styled.img`
    height:50%;
    margin: 1rem;
    padding: 1rem;
`

const LoginBox = styled(StyledBox)`
    background-color: rgba(255, 255, 255, 0.5);
    padding: 1rem 2rem;
    margin: 1rem 2rem;
    border-radius: 4px; 
`;

const StyledLink = styled(Link)`
    padding-left: 10px;
    text-decoration: none;
    color:red;
    &:hover{
        color: black;
}
`

export default HomePage;