import React from "react";
import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 0.8rem 2rem;
    ${({ horizontalPadding }) => horizontalPadding && horizontalPadding};
`;

const Container = ({
  verticalPadding = "1rem",
  horizontalPadding = "2rem",
  type = "section", //default
  children,
}) => {
  return (
    <Wrapper
      verticalPadding={verticalPadding}
      horizontalPadding={horizontalPadding}
      as={type} // what kind element? Default is 'section'
    >
      {children}
    </Wrapper>
  );
};

export default Container;