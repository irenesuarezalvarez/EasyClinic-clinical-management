import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = ({ children, ...props }) => {
  return (
    <LinkIcon {...props}>
      {children}
    </LinkIcon>
  );
};

const LinkIcon = styled(Link)`
  background-color: rgba(102, 205, 170);
  color: white;
  padding: 0.7rem 1rem;
  border: none;
  box-shadow: 0 0 20px ${props => props.theme.color.buttonshadow};
  text-decoration: none;
  cursor: pointer;
  transition: backgroud-color ease-out 0.35s;
  border-radius: 5px;
  &:disabled {
    background-color: #bdbbbb;
    cursor: not-allowed;
    color: #989393;
  }
  &:hover{
    background-color:rgba(28, 130, 112 );
  }
`;

export default StyledLink;