import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";

import Card from '../../components/layouts/Card';
import Button, { NewBtnRight } from '../../components/layouts/Button';
import StyledLink from '../../components/layouts/StyledLink';
import Searcher from '../../components/layouts/Search';
import axiosApi from '../../utils/AxiosApi';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus, faCalendar, faEdit, faTrashAlt} from '@fortawesome/free-solid-svg-icons'
import Container from '../../components/layouts/Container';



const URL = '/patients/all'

const ListAllPatientsPage = () => {
    const [patients, setPatients] = useState([])
   

    useEffect(() => {
        getPatients();
    }, [])

    //Refresh the page after deleting a patient
    useEffect(()=> {
        getPatients();
    }, [patients]);
 
    const getPatients = async () => {
        const response = await axiosApi.get(URL)
        setPatients(response.data)
    }
    
    const deletePatient = async (id) => {
        try {
            console.log('Patient deleted')
            await axiosApi.delete(`${URL}/${id}`)
            const del = patients.filter(patient => id !== patient.id)
            setPatients(del)
        } catch (err) {
            console.error(err)
        }  
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
                    <ButtonBox>
                        <Button  as={Link} radius="5px 0 0 5px" to="/calendar">
                            <FontAwesomeIcon icon={faCalendar}/>
                        </Button>

                        <Button  as={Link} radius="0" bgColor="rgba(82, 189, 201)" hoverColor="rgba(45, 167, 175)" to={`edit/${_id}`}>
                            <FontAwesomeIcon icon={faEdit}/>
                        </Button>

                        <Button radius=" 0 5px 5px 0" bgColor="rgba(255, 127, 80)" hoverColor="rgba(250, 45, 25)" onClick={() => deletePatient(_id)}>
                            <FontAwesomeIcon icon={faTrashAlt}/>
                        </Button>
                    </ButtonBox>
                </tr>
            )
        })
    }

  
    return (
        <Container>
            <Card>
                <StyledTitle>List of Patients</StyledTitle>
               
                <NewBtnRight>
                    <StyledLink to="patient">New<StyledSpan><FontAwesomeIcon icon={faUserPlus} /></StyledSpan></StyledLink>
                </NewBtnRight>
       
                <Searcher deletePatient = {deletePatient}/>

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

//SENDING BACK AN ERROR
const ButtonBox = styled.td`
    background-color: secondary_light;
    padding: 0.9rem;
    text-align: center;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction: row;
    flex-wrap: nowrap;
`
export default ListAllPatientsPage;