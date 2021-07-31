import React from "react";
import styled from "styled-components";

const Select = ({
  label,
  name,
  required,
  placeholder,
  onChange,
  type = "text",
  disabled,
  children
}) => {
  return (
    <StyledContainer>
      {label && <LabelText>{label}</LabelText>}
      <StyledSelect
        type={type}
        required={required}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        disabled={disabled}
      >
      {children}
      </StyledSelect>
    
    </StyledContainer>
  );
};

const StyledContainer = styled.label`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 0.5rem;
`;

const StyledSelect = styled.select`
  display: block;
  width: 100%;
  height: calc(1.5em + 0.75rem + 2px);
  padding: 0.375rem 0.75rem;

  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
 
  appearance: none;


  background-image:
    linear-gradient(45deg, transparent 50%, gray 50%),
    linear-gradient(135deg, gray 50%, transparent 50%),
    linear-gradient(to right, #ccc, #ccc);
  background-position:
    calc(100% - 20px) calc(1em + 2px),
    calc(100% - 15px) calc(1em + 2px),
    calc(100% - 2.5em) 0.5em;
  background-size:
    5px 5px,
    5px 5px,
    1px 1.5em;
  background-repeat: no-repeat;


  &:focus {
    color: #495057;
    border-color: #80bdff;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgb(0 123 255 / 25%);
  }
  &:disabled {
    cursor: not-allowed;
    background-color: grey;
  }
`;

const LabelText = styled.span`
  cursor: pointer;
  font-size: 1rem;
  color: black;
  padding: 0.8rem 0;
  font-weight: 300;
  display: block;
`;

export default Select;