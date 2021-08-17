import { Link } from "react-router-dom";
import styled from "styled-components";

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
  return (
    
    <StyledNavbar>
        <StyledLink to="/signup">Sign up</StyledLink>
        <StyledLink to="/">Log in</StyledLink>
        <StyledLink to="/patients">Patients</StyledLink>
        <StyledLink to="/create">Create</StyledLink>
        <StyledLink to="/mypatients">My Patients</StyledLink>
    </StyledNavbar>
    
  );
}

export default Navbar;

 
