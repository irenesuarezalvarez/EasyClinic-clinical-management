import React from "react";
import styled from "styled-components";

const Button = ({type, radius, bgcolor, hovercolor, children, ...props}) => {
  return (
    <StyledBtn type={type} radius={radius} bgcolor={bgcolor} hovercolor={hovercolor} {...props}>
      {children}
    </StyledBtn>
  );
};

export const StyledBtn = styled.button`
  background-color:${({bgcolor})=> bgcolor || "rgba(102, 205, 170)"} ;
  color: white;
  padding: 0.7rem 1rem;
  border: none;
  box-shadow: 0 0 20px ${props => props.theme.color.buttonshadow};
  cursor: pointer;
  transition: ease-out 0.35s;
  border-radius: ${({radius})=> radius || "5px"};
  &:disabled {
    background-color: #bdbbbb;
    cursor: not-allowed;
    color: #989393;
  }
  &:hover{
    background-color: ${({hovercolor})=> hovercolor || "rgba(28, 130, 112 )"};
  }
`;

export const NewBtnRight = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-bottom: 1rem;
`;

export default Button;

