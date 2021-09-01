import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes, faSignOutAlt, faSignInAlt} from '@fortawesome/free-solid-svg-icons'

import SubMenu from './SidebarSubmenu';
import StyledImg from '../layouts/StyledImg';
import { AuthContext } from "../../utils/AuthContext";
import { SidebarData } from './SidebarData';
import { SidebarProtectedData } from './SidebarProtectedData';
import { SidebarAdminData } from './SidebarAdminData';

const Nav = styled.div`
  background: ${props => props.theme.color.navbar};
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavIcon = styled(Link)`
  margin: 0 2rem;
  font-size: 1.5rem;
  height: 80px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const SidebarNav = styled.nav`
  background: ${props => props.theme.color.navbar};
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const SidebarLabel = styled(Link)`
  display: flex;
  color: #e1e9fc;
  justify-content: flex-start;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 19px;
  &:hover {
    background: #252831;
    border-left: 4px solid #20B2AA;
    cursor: pointer;
  }
`;

const StyledSpan = styled.span`
    margin-left: 0.8rem;
`
const StyledBtn = styled.button`
    margin: 0;
    padding: 0;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background: none;
    border: none;
    color: #e1e9fc;
    list-style: none;
    height: 60px;
    text-decoration: none;
    font-size: 19px;
`

const Sidebar = () => {
    /* const [sidebar, setSidebar] = useState(false); */
    const [redirect, setRedirect] = useState(false);
    const contextAuth = useContext(AuthContext)
    const { role, logOut, sidebar, showSidebar } = contextAuth;

   /*  const showSidebar = () => setSidebar(!sidebar); */

    const handleLogOut = async (event) => {
        try{
            const data = await logOut()
            const result = data
            console.log('navbar log out status', result)
            setRedirect(true)
        }
        catch(err){
            console.log(err)
        }
    } 

    return (
        <>
            <Nav>
                <NavIcon to='#'>
                    <FontAwesomeIcon onClick={showSidebar} icon={faBars}/>
                </NavIcon>
                <NavIcon to='/'>
                    <StyledImg width="3.5rem" src="../images/ECLogoBg.jpg" alt="Logo"/>
                </NavIcon>
            </Nav>
            <SidebarNav sidebar={sidebar}>
                <SidebarWrap>
                    <NavIcon to='#'>
                        <FontAwesomeIcon onClick={showSidebar} icon={faTimes}/>
                    </NavIcon>
                    {SidebarData.map((item, index) => {
                        return <SubMenu item={item} key={index} />;
                    })}
                    {role === "admin" && SidebarAdminData.map((item, index) => {
                        return <SubMenu item={item} key={index} />;
                    })}
                    {role === "prof" && SidebarProtectedData.map((item, index) => {
                        return <SubMenu item={item} key={index} />;
                    })}

                    { !role &&
                        <>
                            <SidebarLabel to='/signup'>
                                <FontAwesomeIcon icon={faSignInAlt}/>
                                <StyledSpan>Sign up</StyledSpan>
                            </SidebarLabel>
                            <SidebarLabel to='/login'>
                                <FontAwesomeIcon  icon={faSignInAlt}/>
                                <StyledSpan>Log in</StyledSpan>
                            </SidebarLabel>
                        </>
                    }


                    { role &&
                        <SidebarLabel to='#'>
                            <StyledBtn onClick={handleLogOut}>
                                <FontAwesomeIcon icon={faSignOutAlt}/>
                                <StyledSpan>Log out</StyledSpan>
                            </StyledBtn>
                        </SidebarLabel>
                    }
                    
                </SidebarWrap>
            </SidebarNav>
        </>
    );
};

export default Sidebar;