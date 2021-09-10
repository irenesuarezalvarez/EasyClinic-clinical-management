import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Login from "../../components/Login";
import Box, { StyledBox } from "../../components/layouts/Box";
import IconImg from "../../components/layouts/IconImg";
import Title from "../../components/layouts/Title";

const HomePage = () => {
  return (
    <Box>
        <HeaderStyled>
            <Box bgcolor="rgba(255, 255, 255, 0.70)" radius="25px" width="50%" height="25%" margin="1rem 4rem">
                <HeaderTitle>Welcome to</HeaderTitle>
                <LogoText src="../images/EasyClinic.png" alt="Easy Clinic Logo"/>
            </Box> 
          
            <LoginBox>
                <Login/>
                <Box padding= "20px">
                    <span>I don't have an account </span>
                    <StyledLinkRed to="/signup">Sign up</StyledLinkRed>
                </Box>
            </LoginBox>
        </HeaderStyled>
       
        <SectionBgUrl >
            <Box padding="1rem 2rem">
                <LogoImg src="../images/EasyclinicLogo.png" alt="Logo"/>
                <h2>Join us!</h2>
                <article>An easy way to manage your clinic in order to make professional’s work easier and efficient.
                </article>
                <Box direction="row" margin="1rem">
                    <StyledLinkBlack to="/login">Log in -</StyledLinkBlack>
                    <StyledLinkBlack to="/signup">Create an account for free</StyledLinkBlack>
                </Box>
            </Box>

        </SectionBgUrl>
        <Box>
            <Box direction="row" bgcolor="rgba(225, 183, 65)" padding="1rem" wrap="no-wrap">
               
                    <Box padding="0.5rem" width="100%" height="100%" flex="4">
                        <IconImg src="../images/agenda.jpg" alt="Agenda"/>
                        <Title>Zero configuration</Title>
                        <p>Create an org, add your team, and start collaborating. Nothing to configure, set up, or manage.</p>
                    </Box>

                    <Box padding="0.5rem" width="100%" height="100%" flex="4">
                        <IconImg src="../images/professionals.png" alt="Team Management"/>
                        <Title>Team management</Title>
                        <p>Control who has access to what modules within your team namespace using straightforward team management capabilities.</p>
                    </Box>
                    
                    <Box padding="0.5rem" width="100%" height="100%" flex="4">
                        <IconImg src="../images/locker.png" alt="Locker"/>
                        <Title>Secure Routes</Title>
                        <p>Control who has access to what modules within your website.Your data stays protected, not been visible for stranger users.</p>
                    </Box>
               
                    <Box padding="0.5rem" width="100%" height="100%" flex="4">
                        <IconImg src="../images/roles.png" alt="npm Audit"/>
                        <Title>Different Roles Access</Title>
                        <p>Enjoy the security auditing features built into the npm client, a zero-friction way to make open source software safer.</p>
                    </Box>               
            </Box>
        </Box>
        <footer>
            <Box padding="1rem">
                <span>Project created by
                    <StyledLinkBlack to={{ pathname: "https://github.com/irenesuarezalvarez"}} target="_blank" >Irene Suárez</StyledLinkBlack>
                </span>
            </Box>
        </footer> 
    </Box>
  );
};

const HeaderStyled = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start; 
    background-image: url("../images/clinic-management.jpg");
    width: 100%; 
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: "blue";
`;

const HeaderTitle =  styled.h1`
    color: white;
    font-size: 0.8rem;
`;

const LogoText = styled.img`
    height: 5rem;
`;

const SectionBgUrl = styled.section`
    background-image: url("../images/cool-background.png");
    width: 100%; 
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;

const LogoImg = styled.img`
    height: 10rem;
    margin: 1rem;
    padding: 1rem;
`;

const LoginBox = styled(StyledBox)`
    background-color: ${props => props.theme.color.transparentWhite};
    padding: 1.5rem;
    width: 300px;
`;

const StyledLinkRed = styled(Link)`
    padding-left: 10px;
    text-decoration: none;
    color: red;
    &:hover{
        color: black;
    }
`;

const StyledLinkBlack = styled(Link)`
    padding-left: 10px;
    text-decoration: none;
    color: black;
    &:hover{
        color: blue;
    }
`;

export default HomePage;