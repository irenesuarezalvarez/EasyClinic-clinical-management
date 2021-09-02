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
           {/*  <Box bgcolor="rgba( 255, 255, 255, 0.50)" radius="25px">
                <StyledLogo src="../images/EasyClinic.png" alt="Easy Clinic Logo"/>
            </Box> */}
            <Box></Box>
            
            <LoginBox>
                <Login/>
                <Box padding= "20px">
                    <span>I don't have an account </span>
                    <StyledLink to="/signup">Sign up</StyledLink>
                </Box>
            </LoginBox>
        </HeaderStyled>
        <Box>
            <section>
                <h1>Easy management of your Clinic</h1>
                <article>
                    Make your daily work management clear and easier with the clearest app of the market
                </article>

                <div>
                    <Link to="/login">Log in</Link>
                    <Link to="/signup">Create and account for free</Link>
                </div>
            </section>
        </Box>
        <Box>
            
            <SectionBgUrl>
                <IconImg src="images/triangle-hexagon.svg" alt="Triangle Hexagon"/>
                <h2>Bring the best of open source to your company</h2>
                <article>npm is the tool used by over 11,000,000 JavaScript developers around the world. Your developers already use it. Your company depends on it.
                    Create an Org and get more out of the tools your team already knows and loves.
                </article>
            </SectionBgUrl>

        </Box>
        <Box>
            <Box direction="row" bgcolor="rgb(255, 160, 122)" padding="1rem" wrap="no-wrap">
               
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
            <Box>
                <span>Copyright © 2017 revera - Just another demo Sites site. </span>
            </Box>
        </footer>
    </Box>
  );
};


const HeaderStyled = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center; 
    background-image: url("../images/clinic-management.jpg");
    width: 100%; 
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;

const SectionBgUrl = styled.section`
    background-image: url("../images/cool-background.png");
    width: 100%; 
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

`


const StyledLogo = styled.img`
    height: 19rem;
    margin: 1rem;
    padding: 1rem;
`

const LoginBox = styled(StyledBox)`
    background-color: ${props => props.theme.color.transparentWhite};
    padding: 1.5rem;
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