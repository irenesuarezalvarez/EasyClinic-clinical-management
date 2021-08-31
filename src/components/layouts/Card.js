import React from "react";
import styled from "styled-components";

import Title from "./Title";


const Card = ({ width, height, bgcolor, margin, title, children }) => {
  return (
    <CardContainer width={width} height={height} bgcolor={bgcolor} margin={margin}>
      <Title>{title}</Title>
      {children}
    </CardContainer>
  );
};

const CardContainer = styled.fieldset`
  width: ${({width})=> width}
  height: ${({height})=> height} 
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${({bgcolor})=> bgcolor || "white"} ;
  padding: 1rem 2rem;
  margin: ${({margin})=> margin};
  border-radius: 4px;
  border: 1px solid black;
  box-shadow: 0 0 20px ${props => props.theme.color.boxshadow};;
  &:not(:last-of-type) {
    margin-bottom: 2rem;
  }
`;

export default Card;