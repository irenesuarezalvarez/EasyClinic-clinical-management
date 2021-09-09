import React from "react"
import styled from "styled-components"

const IconImg = ({src, alt}) =>{
    return(
        <StyledImg src={src} alt={alt}/>
    )
}

const StyledImg= styled.img`
    width:250px;
    height:250px;
    border-radius:160px;
    border:10px solid #666;
    object-fit: cover;
    margin: 1rem 0.5rem;
`
export default IconImg;