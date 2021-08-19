import { Link, Redirect, useHistory } from "react-router-dom";
import React, { useState } from "react";
import styled from "styled-components";

import axiosApi from "../../utils/AxiosApi";


const StyledNavbar = styled.nav`
    display:flex;
    flexDirection: row;
    justify-content: flex-end;
    background: rgb(218, 247, 166);
`
 const StyledLink = styled(Link)`
    color: black;
    text-decoration: none;
    backgroundColor:blue;
    padding:5px;
    margin:5px 25px ;
 `


function Navbar() {
  const [redirect, setRedirect] = useState(false);

  const history = useHistory()

  const handleLogOut = async event => {
    event.preventDefault()
    try {
      console.log('hola')
      history.push('/')
      await axiosApi.post('/auth/logout')
      setRedirect(true)
      
      
    } catch (err) {
      console.error(err)
    } 
  } 

  if(redirect){
    console.log('reeedirect')
    return <Redirect to='/'/> 
  } 
 
  return (
    
    <StyledNavbar>
        <StyledLink to="/signup">Sign up</StyledLink>
        <StyledLink to="/">Log in</StyledLink>
        <StyledLink to="/patients">Patients</StyledLink>
        <StyledLink to="/create">Create</StyledLink>
        <StyledLink to="/mypatients">My Patients</StyledLink>
        <StyledLink to="/edit">Edit</StyledLink>
        
        <form onSubmit={handleLogOut}><button type="submit">Log out</button></form>
        
    </StyledNavbar>
    
  );
}

export default Navbar;

 
