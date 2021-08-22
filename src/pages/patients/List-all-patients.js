import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";

import Card from '../../components/layouts/Card';
import BoxRow from '../../components/layouts/Box-Row';
import Button, {StyledBtn} from '../../components/layouts/Button';
import Input from '../../components/forms/Input';
import StyledLink from '../../components/layouts/StyledLink';
/* import Searcher from '../../components/layouts/Search'; */


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import Container from '../../components/layouts/Container';
import axiosApi from '../../utils/AxiosApi';


const URL = '/patients/all'

const ListAllPatients = () => {
    const [patients, setPatients] = useState([])
    const [searched, setSearched] = useState([])

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        const response = await axiosApi.get(URL)
        setPatients(response.data)
    }

    const removeData = (id) => {
        axiosApi.delete(`${URL}/${id}`).then(res => {
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
    //SEARCH

    const [input, setInput] = useState({});
    const [searchPatients, setsearchPatients] = useState([]);

    const handleChange = (event) => {
        const { name, value } = event.target;
    
        setInput((prevState) => ({
        ...prevState,
        [name]: value,
        }));
    };

    const searchPatient = async event => {
        event.preventDefault()
        console.log('search clicked')
        
        try {
        const response = await axiosApi.post('/patients/search', input)
        const data = await response;
        console.log('New patient was found', data.data)//data.data devuelve un []
        setsearchPatients(data.data)
        } catch (err) {
        console.error(err)
        } 
    } 
  
    //
    
    const renderSearch = () => {
        return searchPatients && searchPatients.map(({ _id, surname, name }) => {
            return (
                <tr key={_id}>
                    <Styledtd>{_id}</Styledtd>
                    <Styledtd>{surname}</Styledtd>
                    <Styledtd>{name}</Styledtd>
                    <ButtonBox>
                        <StyledLink to="/calendar"><FontAwesomeIcon icon={faCalendar} /></StyledLink>
                        <StyledLink to={`edit/${_id}`}><FontAwesomeIcon icon={faEdit} /></StyledLink>
                        <Button onClick={() => removeData(_id)}><FontAwesomeIcon icon={faTrashAlt} /></Button>
                    </ButtonBox>
                </tr>
            )
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
                        <StyledLink to="/calendar"><FontAwesomeIcon icon={faCalendar} /></StyledLink>
                        <StyledLink to={`edit/${_id}`}><FontAwesomeIcon icon={faEdit} /></StyledLink>
                        <Button onClick={() => removeData(_id)}><FontAwesomeIcon icon={faTrashAlt} /></Button>
                    </ButtonBox>
                </tr>
            )
        })
    }


    return (
        <Container>
            <Card>
                <StyledTitle>List of Patients</StyledTitle>
               

                <NewPatientBtn>
                    <MyStyledLink to="/create">New<StyledSpan><FontAwesomeIcon icon={faUserPlus} /></StyledSpan></MyStyledLink>
                </NewPatientBtn>
                
                
                <form onSubmit={searchPatient}>
                    <BoxRow>
                        <FontAwesomeIcon icon={faSearch} />
                        <Input
                            name= "name"
                            required
                            value={input.name} 
                            placeholder= "Name"
                            onChange= {handleChange}
                            type = "text"
                        />
                        <Input
                            name= "surname"
                            required
                            value={input.surname} 
                            placeholder= "Surname"
                            onChange= {handleChange}
                            type = "text"
                        />
                    
                        <Button type="submit">Seach</Button>
                    
                    </BoxRow>

                </form>
            
              

                <StyledTable>
                    <thead>
                        <tr>{renderHeader()}</tr>
                    </thead>
                    <tbody>
                        {renderSearch()}
                    </tbody>
                </StyledTable>

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
  justify-content: space-between;
  text-decoration: none;
  color: white;
`;

const StyledSpan = styled.span`
  padding-left: 15px;
 `;

//NOT WORKING JUSTIFY SELF RIGHT (TO BE CHECKED)
const NewPatientBtn = styled(StyledBtn)`
    justify-self: right;
    background-color:red;
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

//NO WRAP NOT WORKING
const ButtonBox = styled(Styledtd)`
    isplay:flex;
    align-items:center;
    justify-content:center;
    flex-direction: row;
    flex-wrap: nowrap;
`

const SearchBar = styled.section`
    background-color: red;

`
export default ListAllPatients;