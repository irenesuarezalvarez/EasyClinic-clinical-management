import React, { useState, useEffect } from 'react';
import styled from "styled-components";

import Card from '../../components/layouts/Card';
import {BoxRowContainer} from '../../components/layouts/Box-Row';
import Button, { StyledBtn, BoxButtonLeft, BoxButtonCenter, BoxButtonRight, NewBtnRight } from '../../components/layouts/Button';
import StyledLink from '../../components/layouts/StyledLink';
import Searcher from '../../components/layouts/Search';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus, faCalendar, faEdit, faTrashAlt} from '@fortawesome/free-solid-svg-icons'
/* import { faSearch } from '@fortawesome/free-solid-svg-icons' */
import Container from '../../components/layouts/Container';
import axiosApi from '../../utils/AxiosApi';



const URL = '/patients/all'

const ListAllPatients = () => {
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

    const deletePatient = (id) => {
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

    //REPETIDO
  /*   const [input, setInput] = useState({});
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
    }  */
    //SEARCH
   /*  const [input, setInput] = useState({});
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
    }  */
  
    //
    
/*     const renderSearch = () => {
        return searchPatients && searchPatients.map(({ _id, surname, name }) => {
            return (
                <SearchDiv key={_id}>
                    <Styledtd>{_id}</Styledtd>
                    <Styledtd>{surname}</Styledtd>
                    <Styledtd>{name}</Styledtd>
                    <BoxRow>
                        <StyledLink to="/calendar"><FontAwesomeIcon icon={faCalendar} /></StyledLink>
                        <StyledLink to={`edit/${_id}`}><FontAwesomeIcon icon={faEdit} /></StyledLink>
                        <Button onClick={() => deletePatient(_id)}><FontAwesomeIcon icon={faTrashAlt} /></Button>
                    </BoxRow>
                </SearchDiv>
            )
        })
    } */

    const renderBody = () => {
        return patients && patients.map(({ _id, surname, name }) => {
            return (
                <tr key={_id}>
                    <Styledtd>{_id}</Styledtd>
                    <Styledtd>{surname}</Styledtd>
                    <Styledtd>{name}</Styledtd>
                    <ButtonBox>
                        <BoxButtonLeft to="/calendar"><FontAwesomeIcon icon={faCalendar} /></BoxButtonLeft>
                        <BoxButtonCenter to={`edit/${_id}`}><FontAwesomeIcon icon={faEdit} /></BoxButtonCenter>
                        <BoxButtonRight onClick={() => deletePatient(_id)}><FontAwesomeIcon icon={faTrashAlt} /></BoxButtonRight>
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
                    <StyledLink to="/create">New<StyledSpan><FontAwesomeIcon icon={faUserPlus} /></StyledSpan></StyledLink>
                </NewBtnRight>
                
                
          {/*       <SearchBar onSubmit={searchPatient}>
                    
                        <IconDiv><FontAwesomeIcon icon={faSearch} /></IconDiv>
                        <SearchInput
                            name= "name"
                            required
                            value={input.name} 
                            placeholder= "Name"
                            onChange= {handleChange}
                            type = "text"
                        />
                        <SearchInput
                            name= "surname"
                            required
                            value={input.surname} 
                            placeholder= "Surname"
                            onChange= {handleChange}
                            type = "text"
                        />
                        <BtnSearch type="submit">Seach</BtnSearch>                 

                </SearchBar> */}
                
            
              
               {/*  //NEWWWWWWWWWWWWWWWWWWWWWW */}
            
                <Searcher>
                      
                </Searcher>
                

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


//Search
/* const SearchBar = styled.form`
    width:100%;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction: row;
    border-radius: 5px;
    padding: 1rem;
    box-shadow: 0 0 20px rgb(0 0 0 / 15%);
`

const IconDiv = styled.div`
    padding: 0.7rem;
    border-radius: 5px 0px 0px 5px;
    background-color: lightgrey;
    height: calc(1.5em + 0.75rem + 2px);
`

const SearchInput = styled(StyledInput)`
  border-radius: 0;
` */
const BtnSearch = styled(StyledBtn)`
    border-radius: 0 5px 5px 0;
` 

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

const StyledRow = styled(BoxRowContainer)`
    width: 100%;
    
`
const SearchDiv = styled(BoxRowContainer)`
    width:100%;
    padding: 0.5rem;
    margin-top: 25px;
    width: 100%;
    justify-content:space-around;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
    background-color: lightgrey;
`

export default ListAllPatients;