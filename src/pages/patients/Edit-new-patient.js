import React, { useState, useEffect } from "react";

import {  Redirect, useParams } from "react-router-dom";


import axiosApi from "../../utils/AxiosApi.js";
import Input from "../../components/forms/Input.js";
import Select from "../../components/forms/Select.js";
import Button from "../../components/layouts/Button.js";
import Card from "../../components/layouts/Card.js";
import Container from "../../components/layouts/Container.js";




function Edit() {
    let { id } = useParams();
    const [input, setInput] = useState({});
    const [patient, setPatient] = useState([]);
    const [redirect, setRedirect] = useState(false); 
    const [professionals, setProfessionals] = useState([]);

    //Get data 

    useEffect(() => {
        getPatients()
        getProfessionals()
    }, [])
    
    const getPatients = async () => {
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
            
        const editPatient = {
            name: input.name,
            surname: input.surname,
            email: input.email,
            phone: input.phone,
            address: input.address,
            city: input.city, 
            state: input.state,
            postal: input.postal,
            contactname: input.contactname,
            contactsurname: input.contactsurname,
            contactemail: input.contactemail,
            contactphone: input.contactphone,
            professional: input.professional,
            history: input.history 
        }
        try {
            setRedirect(true) 
            await axiosApi.post(`/patients/edit/${id}`, patient)
            console.log('The patient was edited', patient)
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


     
                
        return(
            <div>
                <form onSubmit={handleClick}>
                    <Card title="Personal Information">
                        <Input
                            label="Name "
                            name="name"
                            required
                            value={input.name} 
                            placeholder={name}
                            onChange={handleChange}
                            type="text"
                        />
                        <Input
                            label="Surname "
                            name="surname"
                            required
                            value={input.surname} 
                            placeholder={surname}
                            onChange={handleChange}
                            type="text"
                        />
                        <Input
                            label="Email "
                            name= "email"
                            required
                            value={input.email} 
                            placeholder={email}
                            onChange={handleChange}
                            type="text"
                        />
                        <Input
                            label="Phone"
                            name="phone"
                            required
                            value={input.phone} 
                            placeholder={phone}
                            onChange={handleChange}
                            type ="number"
                        />
                        <Input
                            label="Address "
                            name= "adress"
                            value={input.adress} 
                            placeholder={adress}
                            onChange={handleChange}
                            type="text"
                        />
                        <Input
                            label="City "
                            name="city"
                            value={input.city} 
                            placeholder={city}
                            onChange={handleChange}
                            type="text"
                        />
                        <Input
                            label="State "
                            name="state"
                            value={input.state} 
                            placeholder={state}
                            onChange={handleChange}
                            type="text"
                        />
                        <Input
                            label="Postal code "
                            name="postal"
                            required
                            value={input.postal} 
                            placeholder={postal}
                            onChange={handleChange}
                            type="number"
                        />
                    </Card>

                    <Card title="Contact Details">
                        <Input
                            label="Name "
                            name="contactname"
                            required
                            value={input.contactname} 
                            placeholder={contactname}
                            onChange={handleChange}
                            type="text"
                        />
                        <Input
                            label="Surname "
                            name="contactsurname"
                            required
                            value={input.contactsurname} 
                            placeholder={contactsurname}
                            onChange={handleChange}
                            type="text"
                        />
                        <Input
                            label="Email "
                            name="contactemail"
                            required
                            value={input.contactemail} 
                            placeholder={contactemail}
                            onChange={handleChange}
                            type="text"
                        />
                        <Input
                            label="Phone"
                            name="contactphone"
                            required
                            value={input.contactphone} 
                            placeholder={contactphone}
                            onChange={handleChange}
                            type="number"
                        />
                    </Card>

                    <Card title="Professional Assistance">
                   
                    {/*     <Select
                            name="professional"
                            label={professional[0].username}
                            required
                            onChange={handleChange}
                            disabled={professionals.length <= 0}
                        >
                        
                            <option value="">--select professional--</option>
                                {professionals.length > 0 &&
                                    professionals.map((professional) => (
                                        <option value={professional._id} key={professional._id}>
                                        {professional.username}
                                        </option>
                                ))}
                        </Select>  */}
             
                    </Card>
             
            

                    <Button type="submit">Edit</Button>
                </form>
         
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