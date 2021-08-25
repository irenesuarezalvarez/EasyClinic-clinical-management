import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";

import Container from '../../components/layouts/Container';
import Card from '../../components/layouts/Card';
import StyledLink from '../../components/layouts/StyledLink';
import Button, { StyledBtn, BoxButtonLeft, BoxButtonCenter, BoxButtonRight, NewBtnRight } from '../../components/layouts/Button';



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
/* import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import { faNotesMedical } from '@fortawesome/free-solid-svg-icons'
import { faStickyNote } from '@fortawesome/free-solid-svg-icons' */
import { faFolder } from '@fortawesome/free-solid-svg-icons'
import { faFileAlt } from '@fortawesome/free-solid-svg-icons'

import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
/* import { faTrashAlt } from '@fortawesome/free-solid-svg-icons' */

import axiosApi from '../../utils/AxiosApi';


const ListMyPatients = () => {
    const [patients, setPatients] = useState([])

    useEffect(() => {
        getPatients()
    }, [])

    const getPatients = async () => {
        const response = await axiosApi.get(`/patients/mypatients`)
        setPatients(response.data.patients)
    }

   /*  const removeData = (id) => {
        axios.delete(`${URL}/${id}`).then(res => {
            const del = patients.filter(patient => id !== patient.id)
            setPatients(del)
        })
    }
 */
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
                   
                        <InfoBtn to={`details/${_id}`}><FontAwesomeIcon icon={faInfoCircle}/></InfoBtn>
                       {/*  <LinkIcon to={`sessions/${_id}`}><FontAwesomeIcon icon={faNotesMedical}/></LinkIcon> */}
                      {/*   <LinkIcon to={`sessions/${_id}`}><FontAwesomeIcon icon={faStickyNote}/></LinkIcon> */}
                        <BoxButtonCenter to={`sessions/${_id}`}><FontAwesomeIcon icon={faFolder}/></BoxButtonCenter>
                        <HistoryBtn to={`sessions/${_id}`}><FontAwesomeIcon icon={faFileAlt}/></HistoryBtn>
                        {/* <Button onClick={() => removeData(_id)}><FontAwesomeIcon icon={faTrashAlt}/></Button> */}
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
                    <StyledLink to="/create">New<StyledSpan><FontAwesomeIcon icon={faUserPlus} /></StyledSpan></StyledLink>
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

const MyStyledLink = styled(Link)`
  display: flex;
  justify-content: flex-end;
  text-decoration: none;
  color: white;
 `;

/* //NOT WORKING: (TO BE CHECKED)
const StyledBtn = styled(Button)`
    display: flex;
    justify-content: flex-end;
    text-decoration: none;
    color: black;
    backgroundColor:red;
 `;
 */
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

const InfoBtn = styled(BoxButtonLeft)`
    background-color: rgba(225, 183, 65);
    &:hover{
        background-color: rgb(187, 135, 20 );
    }
`

const HistoryBtn = styled(BoxButtonLeft)`
    border-radius: 0 5px 5px 0;
    background-color: rgb(107, 142, 35);
    &:hover{
        background-color: rgb(85, 107, 47);
    }
`
export default ListMyPatients;