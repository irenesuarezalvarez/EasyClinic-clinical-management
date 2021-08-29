import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";

import axiosApi from '../../utils/AxiosApi';
import Container from '../../components/layouts/Container';
import Card from '../../components/layouts/Card';
import StyledLink from '../../components/layouts/StyledLink';
import Button, { NewBtnRight } from '../../components/layouts/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle, faFolder, faFileAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons'



const ListMyPatientsPage = () => {
    const [patients, setPatients] = useState([])

    useEffect(() => {
        getPatients()
    }, [])

    const getPatients = async () => {
        const response = await axiosApi.get(`/patients/mypatients`)
        setPatients(response.data.patients)
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
                   
                        <Button as={Link} radius="5px 0 0 5px" bgcolor=" rgba(225, 183, 65)" hovercolor="rgba(187, 135, 20)" to={`details/${_id}`}>
                            <FontAwesomeIcon icon={faInfoCircle}/>
                        </Button>

                        <Button as={Link} radius="0" bgcolor=" rgba(82, 189, 201)" hovercolor="rgba(45, 167, 175)" to={`sessions/${_id}`}>
                            <FontAwesomeIcon icon={faFolder}/>
                        </Button>

                        <Button  as={Link} radius=" 0 5px 5px 0" bgcolor="rgba(107, 142, 35)" hovercolor=" rgba(85, 107, 47)" to={`sessions/${_id}`}>
                            <FontAwesomeIcon icon={faFileAlt}/>
                        </Button>
                    </Styledtd>
                </tr>
            )
        })
    }

    return (
        <Container>
            <Card>
                <StyledTitle>My Patients</StyledTitle>

                <NewBtnRight>
                    <StyledLink to="/createpatient">New<StyledSpan><FontAwesomeIcon icon={faUserPlus} /></StyledSpan></StyledLink>
                </NewBtnRight>
                
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

const StyledSpan = styled.span`
  padding-left: 15px;
`;

//Table Styles
const StyledTable = styled.table`
    border-collapse: collapse;
    border-radius: 0.5em;
    overflow: hidden;
    margin: 25px 0;
    width: 100%;
    font-size: 0.9em;
    box-shadow: 0 0 20px ${props => props.theme.color.buttonshadow};
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

export default ListMyPatientsPage;