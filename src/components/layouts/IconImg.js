import React from "react"
import styled from "styled-components"

const IconImg = ({src, alt}) =>{
    return(
        <StyledImg src={src} alt={alt}/>
    )
}

const StyledImg= styled.img`
    width:300px;
    height:300px;
    border-radius:160px;
    border:10px solid #666;
    object-fit: cover;
`
export default IconImg;