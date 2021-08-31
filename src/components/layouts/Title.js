import React from "react"
import styled from "styled-components";

const Title = ({children}) => {
    return(
        <StyledTitle>
            {children}
        </StyledTitle>
    )
}
const StyledTitle = styled.h2`
    display:flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    color: black;
    margin-bottom: 1rem;
`;

export default Title;
