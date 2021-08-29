import React from "react";
import styled from "styled-components";


const Box = ({ direction, position, align, flex, wrap, margin, padding, width, height, radius, bgColor, shadow, children }) => {
  return (
    <StyledBox 
      direction={direction} 
      position= {position} 
      align={align}
      flex={flex}
      wrap={wrap}
      margin={margin} 
      padding={padding} 
      width={width}
      height={height}
      radius={radius} 
      bgColor={bgColor} 
      shadow={shadow}>

        {children}

    </StyledBox>
  );
};

export const StyledBox = styled.section`
  display: flex;
  color: ${props => props.theme.color.test};;
  background-color: ${({bgColor})=> bgColor};
  flex-direction:${({direction})=> direction === "row" ? "row" : "column"};
  justify-content:  ${({position})=> position || "center"};
  align-items: ${({align})=> align === "start" ? "start" : "center"};
  flex: ${({flex})=> flex};
  flex-wrap: ${({wrap})=> wrap};
  margin: ${({margin})=> margin};
  padding: ${({padding})=> padding};
  width: ${({width})=> width};
  height:  ${({height})=> height};
  border-radius: ${({radius})=> radius || "5px"};
  box-shadow: ${({shadow})=> shadow};
`;


export default Box;