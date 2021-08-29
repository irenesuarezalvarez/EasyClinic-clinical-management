import React from "react";
import styled from "styled-components";

import Title from "./Title";


const Card = ({ bgColor, title, children }) => {
  return (
    <CardContainer bgColor={bgColor}>
      <Title>{title}</Title>
      {children}
    </CardContainer>
  );
};

const CardContainer = styled.fieldset`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color:${({bgColor})=> bgColor || "white"} ;
  padding: 1rem 2rem;
  border-radius: 4px;
  border: 1px solid black;
  box-shadow: 0 0 20px ${props => props.theme.color.boxshadow};;
  &:not(:last-of-type) {
    margin-bottom: 2rem;
  }
`;

export default Card;