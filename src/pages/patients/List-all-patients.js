import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from 'axios'

import Card from '../../components/layouts/Card';
import Button from '../../components/layouts/Button';
import PageWrapper from '../../components/layouts/PageWrapper';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import Container from '../../components/layouts/Container';


const URL = 'http://localhost:5000/patients/all'

const ListAllPatients = () => {
    const [patients, setPatients] = useState([])

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        const response = await axios.get(URL)
        setPatients(response.data)
    }

    const removeData = (id) => {
        axios.delete(`${URL}/${id}`).then(res => {
            const del = patients.filter(patient => id !== patient.id)
            setPatients(del)
        })
    }

    const renderHeader = () => {
        let headerElement = ['History number', 'Surname', 'Name', 'Operation']

        return headerElement.map((key, index) => {
            return <Styledth key={index}>{key.toUpperCase()}</Styledth>
        })
    }
    
    const renderBody = () => {
        return patients && patients.map(({ _id, surname, name }) => {
            return (
                <tr key={_id}>
                    <Styledtd>{_id}</Styledtd>
                    <Styledtd>{surname}</Styledtd>
                    <Styledtd>{name}</Styledtd>
                    <Styledtd>
                        <LinkIcon to="/calendar"><FontAwesomeIcon icon={faCalendar} /></LinkIcon>
                        <LinkIcon to={`edit/${_id}`}><FontAwesomeIcon icon={faEdit} /></LinkIcon>
                        <Button onClick={() => removeData(_id)}><FontAwesomeIcon icon={faTrashAlt} /></Button>
                    </Styledtd>
                </tr>
            )
        })
    }

    return (
        <Container>
            <Card>
                <StyledTitle>List of Patients</StyledTitle>

                <StyledBtn>
                    <StyledLink to="/create">New<StyledSpan><FontAwesomeIcon icon={faUserPlus} /></StyledSpan></StyledLink>
                </StyledBtn>
                
                <StyledTable>
                    <thead>
                        <tr>{renderHeader()}</tr>
                    </thead>
                    <tbody>
                        {renderBody()}
                    </tbody>
                </StyledTable>

            </Card>
        </Container>
    )
}

const StyledTitle = styled.h1`
  display: flex;
  justify-content: center;
  width:100%;
  margin: 1rem;
  padding: 0.5rem;
`;

const StyledLink = styled(Link)`
  display: flex;
  justify-content: space-between;
  text-decoration: none;
  color: white;
`;

const LinkIcon = styled(Link)`
  background-color: rgb(102, 205, 170);
  color: white;
  padding: 0.7rem 1rem;
  border-radius: 4px;
  border: none;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  transition: backgroud-color ease-out 0.35s;
  border-radius: 5px;
  &:disabled {
    background-color: #bdbbbb;
    cursor: not-allowed;
    color: #989393;
  }
  &:hover{
    background-color:#DAF7A6;
    color: black;
  }
`;
 const StyledSpan = styled.span`
  padding-left: 15px;
 `;

//NOT WORKING: (TO BE CHECKED)
const StyledBtn = styled(Button)`
    display: flex;
    justify-content: space-between;
    text-decoration: none;
    color: black;
    backgroundColor:red;
 `;


//TABLE STYLES
const StyledTable = styled.table`
    border-collapse: collapse;
    border-radius: 0.5em;
    overflow: hidden;
    margin: 25px 0;
    width: 100%;
    font-size: 0.9em;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
`;


const Styledth = styled.th`
    background-color: #FFC300;
    padding: 0.5rem;
    text-align: center;
`;

const Styledtd = styled.td`
    background-color: secondary_light;
    padding: 0.9rem;
    text-align: center;
`;

export default ListAllPatients;