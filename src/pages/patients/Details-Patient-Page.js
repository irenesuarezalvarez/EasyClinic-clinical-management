import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import axiosApi from "../../utils/AxiosApi.js";
import Box, {StyledBox} from "../../components/layouts/Box.js";
import StyledLink from "../../components/layouts/StyledLink.js";
import StyledImg from "../../components/layouts/StyledImg.js";
import Title from "../../components/layouts/Title.js";

const DetailsPage = () => {
    const { id } = useParams();
    const [patient, setPatient] = useState([]);
 
    //Get data 
    useEffect(() => {
        getPatient()
    }, [])
    
    const getPatient = async () => {
        try{
            const response = await axiosApi.get(`/patients/edit/${id}`);
            setPatient(response.data)
        }
        catch(err){
            console.log(err);
        }
    }

    function renderMyBody(){
        const {
            media,
            name, 
            surname, 
            email, 
            phone, 
            address, 
            city, 
            state, 
            postal, 
            contactname, 
            contactsurname, 
            contactemail, 
            contactphone, 
            professional 
        } = patient;
                  
        return(
            <> 
                {Object.keys(patient).length > 0  && 
                    <Box width="100%"  overflow="auto">
                        <StyledSection>
                            <Box flex="2"  overflow="auto">
                                <Title>Personal Information</Title>
                                <Box direction="row" overflow="auto">
                                    <Box width="80%" padding="1rem">
                                    <StyledImg src={media} alt="Patient Profile" width="100%"/>
                                    </Box>
                                    <Box align="start" padding="0.5rem 2rem" margin="1rem" shadow="0 0 20px rgba(0 0 0 / 15%)">
                                        <Box align="start" margin="1px" padding=" 0.4rem">
                                            <h3>Name: </h3>
                                            <span>{name}</span>
                                        </Box>
                                        <Box align="start" margin="1px" padding=" 0.4rem">
                                            <h3>Surname: </h3>
                                            <span>{surname}</span>
                                        </Box>
                                        <Box align="start" margin="1px" padding=" 0.4rem">
                                            <h3>Email: </h3>
                                            <span>{email}</span>
                                        </Box>
                                        <Box align="start" margin="1px" padding=" 0.4rem">
                                            <h3>Phone: </h3>
                                            <span>{phone}</span>
                                        </Box>
                                        <Box align="start" margin="1px" padding=" 0.4rem">
                                            <h3>Address: </h3>
                                            <span>{address}</span>
                                        </Box>
                                        <Box align="start" margin="1px" padding=" 0.4rem">
                                            <h3>City: </h3>
                                            <span>{city}</span>
                                        </Box>
                                        <Box align="start" margin="1px" padding=" 0.4rem">
                                            <h3>State: </h3>
                                            <span>{state}</span>
                                        </Box>
                                        <Box align="start" margin="1px" padding=" 0.4rem">
                                            <h3>Postal code: </h3>
                                            <span>{postal}</span>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>

                            <Box flex="1">
                                <Box  margin="1rem 0">
                                    <Title>Contact Person</Title>
                                    <Box align="start" padding="0.5rem 2rem" margin="1rem" shadow="0 0 20px rgba(0 0 0 / 15%)">
                                        <Box align="start" margin="1px" padding=" 0.4rem">
                                            <h3>Name: </h3>
                                            <span>{contactname}</span>
                                        </Box>
                                        <Box align="start" margin="1px" padding=" 0.4rem">
                                            <h3>Surname: </h3>
                                            <span>{contactsurname}</span>
                                        </Box>
                                       
                                        <Box align="start" margin="1px" padding=" 0.4rem">
                                            <h3>Email: </h3>
                                            <span>{contactemail}</span>
                                        </Box>
                                        <Box align="start" margin="1px" padding=" 0.4rem">
                                            <h3>Phone: </h3>
                                            <span>{contactphone}</span>
                                        </Box>
                                    </Box>
                                </Box>

                                <Box margin="1rem 0">
                                    <Title>Professional Assistant</Title>
                                    <Box align="start" padding="0.5rem 2rem" margin="1rem" shadow="0 0 20px rgba(0 0 0 / 15%)">
                                        <Box align="start" margin="1px" padding=" 0.4rem">
                                            <h3>Professional: </h3>
                                            <span>{professional[0].username}</span>
                                        </Box> 
                                    </Box>   
                                </Box>
                                
                            </Box>                        
                        </StyledSection>
                        
                        <Box direction ="row" margin="1rem" padding="1rem">
                                <Padding>
                                    <StyledLink to="/mypatients">Back</StyledLink>
                                </Padding>
                                <Padding>
                                    <StyledLink to={`/edit/${id}`} >Edit</StyledLink>
                                </Padding>
                        </Box>
                    </Box>
                }
            </>
        )
    }

    return(
        <Box margin="1rem auto" width="80%">
            {renderMyBody()}   
        </Box>
    )
  }

const StyledSection = styled(StyledBox)`
    width: 100%;
    height: 100%;
    background-color: white;
    flex-direction: row;
    padding: 1.5rem;
    border: 1px solid black;
    border-radius: 5px;
    box-shadow: 0 0 20px rgba(0 0 0 / 15%);
`
const Padding = styled.div`
    padding: 0.7rem;
`
export default DetailsPage;