import React from "react"
import styled from "styled-components"

const StyledImg = ({src, alt, width, height }) =>{
    return(
        <RoundImg src={src} alt={alt} width={width} height={height}/>
    )
}

const RoundImg = styled.img`
    width: ${({width})=> width};
    height: ${({height})=> height};
    border-radius: 50%;
`
export default StyledImg;