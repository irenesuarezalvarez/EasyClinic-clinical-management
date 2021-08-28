import React from "react";
import styled from "styled-components";


const Box = ({ direction, position, margin, padding, align, radius, shadow, children }) => {
  return (
    <StyledBox direction={direction} position= {position} margin= {margin} padding= {padding} align={align} radius={radius} shadow={shadow}>
      {children}
    </StyledBox>
  );
};

export const StyledBox = styled.section`
  display: flex;
  flex-direction:${({direction})=> direction === "row" ?"row" : "column"};
  justify-content:  ${({position})=> position || "center"};
  align-items:  ${({align})=> align || "center"};
  margin:  ${({margin})=> margin};
  padding: ${({padding})=> padding};
  border-radius: ${({radius})=> radius || "5px"};
  box-shadow: ${({shadow})=> shadow};
`;


export default Box;