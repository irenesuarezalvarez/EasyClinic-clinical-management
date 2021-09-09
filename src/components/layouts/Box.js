import React from "react";
import styled from "styled-components";

const Box = ({ direction, position, align, flex, wrap, margin, padding, width, height, radius, bgcolor, shadow, children, ...props }) => {
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
      bgcolor={bgcolor} 
      shadow={shadow}
      {...props}>

        {children}

    </StyledBox>
  );
};

export const StyledBox = styled.section`
  display: flex;
  color: ${props => props.theme.color.test};
  background-color: ${({bgcolor})=> bgcolor};
  flex-direction:${({direction})=> direction === "row" ? "row" : "column"};
  justify-content:  ${({position})=> position || "center"};
  align-items: ${({align})=> align || "center"};
  flex: ${({flex})=> flex};
  flex-wrap: ${({wrap})=> wrap};
  margin: ${({margin})=> margin};
  padding: ${({padding})=> padding};
  width: ${({width})=> width || "100%"};
  height: ${({height})=> height};
  border-radius: ${({radius})=> radius || "5px"};
  box-shadow: ${({shadow})=> shadow};
`;

export default Box;