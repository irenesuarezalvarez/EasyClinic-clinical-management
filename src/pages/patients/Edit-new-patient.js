import React, { useState, useEffect } from "react";

import {  Redirect, useParams } from "react-router-dom";


import axiosApi from "../../utils/AxiosApi.js";
import Input from "../../components/forms/Input.js";
import Select from "../../components/forms/Select.js";
import Button from "../../components/layouts/Button.js";
import Card from "../../components/layouts/Card.js";
import Container from "../../components/layouts/Container.js";




function Edit() {
    const { id } = useParams();
    const [input, setInput] = useState({});
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
        console.log('Frontend get patients', response.data);
        setPatient(response.data)
    }

    //Get professionals for dropdown
      const getProfessionals = async () =>{
        const result = await axiosApi.get("/professionals"); 
        const professionals = result.data;
        setProfessionals([...professionals]); 
    }

    //Send patient edited
    const handleClick = async event => {
        event.preventDefault()          
   
        try {
            setRedirect(true) 
            await axiosApi.post(`/patients/edit/${id}`, input)
            console.log('The patient was edited', input)
        } catch (err) {
            console.error(err)
        } 
    } 

    //Redirect
    if(redirect){
        return <Redirect to='/patients'></Redirect>
    }

  

    function renderMyBody(){
        const { name, surname, email, phone, adress, city, state, postal, contactname, contactsurname, contactemail, contactphone, professional, history } = patient;
        
        const handleChange = (event) => {
            const { name, value } = event.target;
        
            setInput((prevState) => ({
                ...prevState,
                [name]: value,
            }));

            /* setPatient((prevPatient)=> ({
                ...prevPatient,
               input
            })) */
        };

        console.log('Input and patients', input, patient)
     
                
        return(
            <div> 
                {Object.keys(patient).length > 0  && 
                    <form onSubmit={handleClick}>
                        <Card title="Personal Information">
                            <Input
                                label="Name"
                                name="name"
                                required
                                defaultValue={name}
                                onChange={handleChange}
                                type="text"
                            />
                            <Input
                                label="Surname "
                                name="surname"
                                required
                                defaultValue={surname}
                                onChange={handleChange}
                                type="text"
                            />
                            <Input
                                label="Email "
                                name= "email"
                                required
                                defaultValue={email} 
                                onChange={handleChange}
                                type="text"
                            />
                            <Input
                                label="Phone"
                                name="phone"
                                required
                                defaultValue={phone} 
                                onChange={handleChange}
                                type ="number"
                            />
                            <Input
                                label="Address "
                                name= "adress"
                                defaultValue={adress} 
                                onChange={handleChange}
                                type="text"
                            />
                            <Input
                                label="City "
                                name="city"
                                defaultValue={city} 
                                onChange={handleChange}
                                type="text"
                            />
                            <Input
                                label="State "
                                name="state"
                                defaultValue={state} 
                                onChange={handleChange}
                                type="text"
                            />
                            <Input
                                label="Postal code "
                                name="postal"
                                required
                                defaultValue={postal} 
                                onChange={handleChange}
                                type="number"
                            />
                        </Card>

                        <Card title="Contact Details">
                            <Input
                                label="Name "
                                name="contactname"
                                required
                                defaultValue={contactname} 
                                onChange={handleChange}
                                type="text"
                            />
                            <Input
                                label="Surname "
                                name="contactsurname"
                                required
                                defaultValue={contactsurname} 
                                onChange={handleChange}
                                type="text"
                            />
                            <Input
                                label="Email "
                                name="contactemail"
                                required
                                defaultValue={contactemail} 
                                onChange={handleChange}
                                type="text"
                            />
                            <Input
                                label="Phone"
                                name="contactphone"
                                required
                                defaultValue={contactphone} 
                                onChange={handleChange}
                                type="number"
                            />
                        </Card>

                        <Card title="Professional Assistance">
                    
                            <Select
                                name="professional"
                                label= "Professional"
                                required
                                onChange={handleChange}
                                disabled={professionals.length <= 0}
                            >
                            
                                <option value="">--select professional--</option>
                                    {professionals.length > 0 &&
                                        professionals.map((prof) => (
                                            <option value={prof._id} key={prof._id} selected={prof._id === professional[0]._id}>
                                            {prof.username}
                                            </option>
                                    ))}
                            </Select> 
                
                        </Card>
                        <Button type="submit">Edit</Button>
                    </form>
                }
            </div>
        )
        
    /*     
    return patients && (({  _id, name, surname, email, phone, address, city, state, postal, contactname, contactsurname, contactemail, contactphone, professional, history }) = patients {
        return (
            <div>
                <h1>Hello</h1>
                <p>Id: {_id}</p>
                <p>Name: {name}</p>
                <p>Surname: {surname}</p>
                <p>{email}</p>
                <p>{phone}</p>
            </div>
          
        )
    })
   */
    }

    return(
        <Container>
            <p>{renderMyBody()}</p>    
        </Container>
    )
  
  }

export default Edit;