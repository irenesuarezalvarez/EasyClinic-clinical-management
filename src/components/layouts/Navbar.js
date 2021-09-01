import { Link, Redirect } from "react-router-dom"; 
import React, { useContext, useState } from "react"; 
import styled from "styled-components";

import { AuthContext } from "../../utils/AuthContext";
import Box from "./Box";
import Button from "./Button";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

function Navbar() {
  const contextAuth = useContext(AuthContext)
  const { isAuth, logOut, role } = contextAuth;
  const [redirect, setRedirect] = useState(false); 

  const handleLogOut = async event => {
    try{
      const data = await logOut()
      const result = data
      setRedirect(result === 200)
    }
    catch(err){
      console.log(err)
    }
  } 

  if(redirect){
    return <Redirect to="/"/>
  }

  return (
    
    <StyledNavbar>
        <Box margin="1rem">
          <FontAwesomeIcon icon={faBars} />
        </Box>
        <Link to="/"><StyledLogo src="../images/EasyClinicLogo.png" alt="Easy Clinic Logo"></StyledLogo></Link>
        <StyledUl>
          <li><StyledLink to="/">Home</StyledLink></li> 
          <li><StyledLink to="/signup">Sign up</StyledLink></li>
          <li><StyledLink to="/createpatient">Create Patient</StyledLink></li>    
          <li><StyledLink to="/calendar">Calendar</StyledLink></li>
          <li><StyledLink to="/appointment">Appointment</StyledLink></li>
          
          { role === "prof" && <li><StyledLink to="/mypatients">My Patients</StyledLink></li>}
          { role === "admin" && <li><StyledLink to="/patients">Patients</StyledLink></li>}
          { isAuth && <li><Button onClick={handleLogOut}>Log out</Button></li>} 
        
        </StyledUl>     
    </StyledNavbar>
    
  );
}

const StyledLogo = styled.img`
  height: 50px;
  padding: 5px;
  margin: 5px 25px ;
`
const StyledUl = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
`
const StyledNavbar = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: nowrap;
    background:${props => props.theme.color.navbar};
    box-shadow: 0 0 20px black;
`
 const StyledLink = styled(Link)`
    color: black;
    text-decoration: none;
    padding: 5px;
    margin: 5px 10px ;
 `
export default Navbar;

 
