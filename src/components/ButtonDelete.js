import React from "react";
import styled from "styled-components";

const Btn = styled.button`
    background-color: red;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: flex;
    font-size: 16px;
`;

const ButtonDelete = () => {
  return (
    <Btn>{/* <i class="bi bi-trash"></i> */}
    Delete
    </Btn>
  );
};

export default ButtonDelete;