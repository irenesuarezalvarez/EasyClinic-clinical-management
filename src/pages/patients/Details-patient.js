import React, { useState, useEffect } from "react";
import {  Redirect, useParams } from "react-router-dom";
import styled from "styled-components";


import axiosApi from "../../utils/AxiosApi.js";
import Input from "../../components/forms/Input.js";
import Button from "../../components/layouts/Button.js";
import BtnDiv from "../../components/layouts/BtnDiv.js";
import Card, {Title, CardContainer} from "../../components/layouts/Card.js";

import PageWrapper from "../../components/layouts/PageWrapper.js";




function Details() {
    const { id } = useParams();
    const [patient, setPatient] = useState([]);
    const [redirect, setRedirect] = useState(false); 
    const [professionals, setProfessionals] = useState([]);

    //Get data 

    useEffect(() => {
        getPatient()
        getProfessionals()
    }, [])
    
    const getPatient = async () => {
        const response = await axiosApi.get(`/patients/edit/${id}`);
        setPatient(response.data)
    }

    //Get professionals for dropdown
      const getProfessionals = async () =>{
        const result = await axiosApi.get("/professionals"); 
        const professionals = result.data;
        setProfessionals([...professionals]); 
    }


    //Redirect
    if(redirect){
        return <Redirect to='/patients'></Redirect>
    }

  

    function renderMyBody(){
        const { name, surname, email, phone, address, city, state, postal, contactname, contactsurname, contactemail, contactphone, professional, history } = patient;
                  
        return(
            <div> 
                {Object.keys(patient).length > 0  && 
                    <section >
                        <Card title="Personal Information">
                            <StyledArticle>
                            <div>Photo</div>
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
                            </StyledArticle>
                        </Card>

                        <Card title="Contact Details">
                            <Input
                                label="Name "
                                name="contactname"
                                required
                                defaultValue={contactname} 
                                type="text"
                            />
                            <Input
                                label="Surname "
                                name="contactsurname"
                                required
                                defaultValue={contactsurname} 
                                type="text"
                            />
                            <Input
                                label="Email "
                                name="contactemail"
                                required
                                defaultValue={contactemail} 
                                type="text"
                            />
                            <Input
                                label="Phone"
                                name="contactphone"
                                required
                                defaultValue={contactphone} 
                                type="number"
                            />
                        </Card>

                        <Card title="Professional Assistance">
                            <Input
                                label="Professional"
                                name="professional"
                                required
                                defaultValue={professional[0].username} 
                                type="string"

                            />
                                   
                        </Card>
                        <BtnDiv>
                            <Button type="submit">Edit</Button>
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
const StyledArticle = styled.article`
    display:flex;
    justify-content: center;
    align-items: start;
    flex-direction: row;

`
const LeftCard = styled(CardContainer)`
    display:flex;
    justify-content: center;
    align-items: start;
    flex-direction: column;
    border-radius: 5px;
    background-color: orange;
`

const Row = styled.div`
    display:flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
    margin: 2px;
    padding: 0.7rem;
    border-radius: 5px;
    background-color: red;
`
export default Details;