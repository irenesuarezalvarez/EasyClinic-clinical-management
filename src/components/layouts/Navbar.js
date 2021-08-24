import { Link, Redirect, useHistory } from "react-router-dom";
import React, { useState, useContext } from "react";
import styled from "styled-components";

import axiosApi from "../../utils/AxiosApi";
import {AuthContext} from "../../utils/AuthContext"


function Navbar() {
  const contextAuth = useContext(AuthContext)
  const [redirect, setRedirect] = useState(false);
  const { isAuth, logOut, role, setRole } = contextAuth;

  /* const history = useHistory() */
 
  const handleLogOut = async event => {

    try{
      setRole(undefined)
      //why redirect here render the component but not the navbar
      await logOut()
      //WHy redirect here does not work?
     
    }
   catch(err){
     console.log(err)
   }
   
    
  }  
/*   const handleLogOut = async event => {
    event.preventDefault()
    await logOut()
    history.push('/') 
    setRedirect(true) 
  }   */
  console.log('Cambio??', role)

  return (
    
    <StyledNavbar>
        <StyledLogo  src="../images/EasyClinicLogo.png" alt="Easy Clinic Logo"></StyledLogo>
        <StyledUl>
          <li><StyledLink to="/signup">Sign up</StyledLink></li>
          <li><StyledLink to="/create">Create</StyledLink></li>
          <li><StyledLink to="/patients">Patients</StyledLink></li>
          <li><StyledLink to="/mypatients">My Patients</StyledLink></li>
          <li><StyledLink to="/">Home</StyledLink></li>
          <li><StyledLink to="/calendar">Calendar</StyledLink></li>
          <li><StyledLink to="/test">Test</StyledLink></li>
          <li><StyledLink to="/sample">Sample</StyledLink></li>
         
        {/*  { isAuth && <li><form onSubmit={handleLogOut}><button type="submit">Log out</button></form></li>} */}
        <li><button onClick={handleLogOut}>Log out</button></li>

        </StyledUl>
       <div>{isAuth}</div>
     
        
    </StyledNavbar>
    
  );
}
const StyledLogo = styled.img`
  height: 50px;
  padding:5px;
  margin:5px 25px ;
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
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: nowrap;
    background: rgb(218, 247, 166);
`
 const StyledLink = styled(Link)`
    color: black;
    text-decoration: none;
    padding:5px;
    margin:5px 10px ;
 `


export default Navbar;

 
