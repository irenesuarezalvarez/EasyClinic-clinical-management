import React from "react";
import styled from "styled-components";


function Table ({
  surname,
  name,
}) {
  return (
    <StyledContainer>
        <table>
            <thead>
                <tr>
                    <th >Surname</th>
                    <th >Name</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>

            <tr>
                <td> Cardenes</td>
                <td> Juana</td>
                <td>
                    <span >calendar</span>
                    <span >edit</span>
                </td>
            </tr>


            </tbody>
        </table>
    </StyledContainer>
  );
};

const StyledContainer = styled.label`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 0.5rem;
`;

const StyledTd = styled.td`
  display: flex;
  flex-direction:row;
  justify-content: end; 
`;


const StyledTable = styled.table`
  
`;


export default Table;
 
 
