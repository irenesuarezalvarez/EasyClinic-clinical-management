import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Login from "../authentication/Login"


const Home = () => {
  return (
    <HeaderStyled>
        <LogoDiv>
         <StyledLogo src="../images/EasyClinicLogo.png" alt="Easy Clinic Logo"></StyledLogo>
        </LogoDiv>
        
        <LoginBox>
            <Login/>
            <DivSignUp>
            <span>I don't have an account </span>
            <StyledLink to="/signup">Sign up</StyledLink>
            </DivSignUp>
        </LoginBox>
        
    </HeaderStyled>
  );
};

const HeaderStyled = styled.fieldset`
    display:flex;
    justify-content: center; 
    background-image: url("../images/clinic-management.jpg");
    height: 100vh;
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

const LogoDiv = styled.div`
    display: flex;
    flex:2;
    justify-content: center;
    align-items: center;
    margin: 1rem 2 rem;
    padding: 1rem 2 rem;
    
`

const StyledLogo = styled.img`
    height:50%;
    margin: 1rem 2 rem;
    padding: 1rem 2 rem;
    
`

const LoginBox = styled.div`
    background-color: rgba(255, 255, 255, 0.5);
    padding: 1rem 2rem;
    margin: 1rem 2rem;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    &:not(:last-of-type) {
        margin-bottom: 2rem;
    }
`;

const DivSignUp = styled.div`
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const StyledLink = styled(Link)`
padding-left: 10px;
text-decoration: none;
color:red;
&: hover{
   color: black;
}
`

export default Home;