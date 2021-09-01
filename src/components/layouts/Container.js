import React from "react";
import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 0.8rem 2rem;
    ${({ horizontalPadding }) => horizontalPadding && horizontalPadding};
`;

const Container = ({
    verticalPadding = "1rem",
    horizontalPadding = "2rem",
    type = "section",
    children,
  }) => {
 
  return (
    <Wrapper
      verticalPadding={verticalPadding}
      horizontalPadding={horizontalPadding}
      as={type}
    >
      {children}
    </Wrapper>
  );
};

export default Container;