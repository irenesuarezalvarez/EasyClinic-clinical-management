import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";


import axiosApi from "../../utils/AxiosApi.js";
import BtnDiv from "../../components/layouts/BtnDiv.js";
import { Title } from "../../components/layouts/Card.js";
import BoxCenter from "../../components/layouts/Box-Center.js";
import BoxRow, { BoxRowContainer } from "../../components/layouts/Box-Row.js";
import StyledLink from "../../components/layouts/StyledLink.js";

import PageWrapper from "../../components/layouts/PageWrapper.js";




function Details() {
    const { id } = useParams();
    const [patient, setPatient] = useState([]);


    //Get data 

    useEffect(() => {
        getPatient()
    }, [])
    
    const getPatient = async () => {
        const response = await axiosApi.get(`/patients/edit/${id}`);
        setPatient(response.data)
    }

    function renderMyBody(){
        const { name, surname, email, phone, address, city, state, postal, contactname, contactsurname, contactemail, contactphone, professional } = patient;
                  
        return(
            <div> 
                {Object.keys(patient).length > 0  && 
                    <section>
                        <StyledSection>
                            
                            <BoxCenter>
                                <Title>Personal Information</Title>
                                <BoxRow>
                                    <img src="../images/person-profile.jpg" alt="Person profile"></img>
                                    <LeftCard>
                                        <Row>
                                            <h3>Name: </h3>
                                            <p>{name}</p>
                                        </Row>
                                        <Row>
                                            <h3>Surname: </h3>
                                            <p>{surname}</p>
                                        </Row>
                                        <Row>
                                            <h3>Email: </h3>
                                            <p>{email}</p>
                                        </Row>
                                        <Row>
                                            <h3>Phone: </h3>
                                            <p>{phone}</p>
                                        </Row>
                                        <Row>
                                            <h3>Address: </h3>
                                            <p>{address}</p>
                                        </Row>
                                        <Row>
                                            <h3>City: </h3>
                                            <p>{city}</p>
                                        </Row>
                                        <Row>
                                            <h3>State: </h3>
                                            <p>{state}</p>
                                        </Row>
                                        <Row>
                                            <h3>Postal code: </h3>
                                            <p>{postal}</p>
                                        </Row>
                                    </LeftCard>
                                </BoxRow>

                            </BoxCenter>

                            <BoxCenter>
                                <BoxCenter>
                                    <Title>Contact Person</Title>
                                    <LeftCard>
                                        <Row>
                                            <h3>Name: </h3>
                                            <p>{contactname}</p>
                                        </Row>
                                        <Row>
                                            <h3>Surname: </h3>
                                            <p>{contactsurname}</p>
                                        </Row>
                                        <Row>
                                            <h3>Email: </h3>
                                            <p>{contactemail}</p>
                                        </Row>
                                        <Row>
                                            <h3>Phone: </h3>
                                            <p>{contactphone}</p>
                                        </Row>
                                    </LeftCard>
                                </BoxCenter>

                                <BoxCenter>
                                        <Title>Professional Assistant</Title>
                                        <LeftCard>
                                            <Row>
                                                <h3>Professional: </h3>
                                                <p>{professional[0].username}</p>
                                            </Row> 
                                        </LeftCard>   
                                </BoxCenter>
                                
                            </BoxCenter>                        
                        </StyledSection>
                        
                        <BtnDiv>
                                <Padding>
                                    <StyledLink to="/mypatients">Back</StyledLink>
                                </Padding>
                                <Padding>
                                    <StyledLink to={`edit/${id}`}>Edit</StyledLink>
                                </Padding>
                               
                                
                        </BtnDiv>
                    </section>
                }
            </div>
        )
    }

    return(
        <PageWrapper>
            <p>{renderMyBody()}</p>    
        </PageWrapper>
    )
  
  }

const StyledSection = styled(BoxRowContainer)`
    padding: 1rem;
    border: 1px solid black;
    border-radius: 5px;
    box-shadow: 0 0 20px rgb(0 0 0 / 15%);
`

const LeftCard = styled.section`
    display:flex;
    justify-content: center;
    align-items: start;
    flex-direction: column;
    padding: 0.5rem 2rem;
    margin: 1rem;
    border-radius: 5px;
    box-shadow: 0 0 20px rgb(0 0 0 / 15%);
`

const Row = styled(BoxRowContainer)`
    justify-content: flex-start;
    margin: 1px;
    padding: 0.4rem;
`
const Padding = styled.div`
    padding: 0.7rem;

`
export default Details;