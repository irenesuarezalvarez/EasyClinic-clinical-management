import React from "react";
import styled from "styled-components";

import { LinkIcon } from '../../components/layouts/StyledLink';


function Button ({type, children, ...props}) {
  return (
    <StyledBtn type={type} {...props}>
     {children}
    </StyledBtn>
  );
};

export const StyledBtn = styled.button`
  background-color: rgb(102, 205, 170);
  color: white;
  padding: 0.7rem 1rem;
  border: none;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  transition: backgroud-color ease-out 0.35s;
  border-radius: 5px;
  &:disabled {
    background-color: #bdbbbb;
    cursor: not-allowed;
    color: #989393;
  }
  &:hover{
    background-color:rgb(28, 130, 112 );
  }
`;

export const BoxButtonLeft = styled(LinkIcon)`
    border-radius: 5px 0 0 5px;
`

export const BoxButtonCenter = styled(LinkIcon)`
    border-radius: 0;
    background-color: rgb(82, 189, 201);
    &:hover{
        background-color: rgb(45, 167, 175);
    }

`
export const BoxButtonRight =styled(StyledBtn)`
    border-radius: 0 5px 5px 0;
    padding: 0.75rem 1rem;
    background-color: rgb(255, 127, 80);
    &:hover{
        background-color: rgb(250, 45, 25);
    }
`
export const NewBtnRight = styled.div`
display: flex;
justify-content: flex-end;
width: 100%;
margin-bottom: 1rem;
`;



export default Button;

