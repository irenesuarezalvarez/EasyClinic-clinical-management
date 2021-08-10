import React, { useState, useEffect } from "react";

import axios from 'axios';

import Input from "./../../components/forms/Input.js";
import Select from "./../../components/forms/Select"
import Container from "./../../components/layouts/Container";
import Card from "../../components/layouts/Card";

//COPIED FROM CREATE, NEED TO BE CHANGED TO RECEIVE THE PATIENTS DATA

function Details() {
  const [input, setInput] = useState({});
  const [redirect, setRedirect] = useState(false); 
  const [professionals, setProfessionals] = useState([]);

 /*  Possible use for the dropdown
    useEffect(() => {
    const fetchUsers = async () => {
      const result = await fetch("http://localhost:5000/professionals"); //HELP NEEDED HERE
      const professionals = await result.json();
      setProfessionals([...professionals]);
    };

    fetchUsers();
  }, []);
   */


  const handleClick = async event => {
    event.preventDefault()
  
    try {
      await axios.post('http://localhost:5000/patients/create', newPatient)
      setRedirect(true) 
      console.log('New patient created', newPatient )
    } catch (err) {
      console.error(err)
    } 
  } 


  return (
    <Container horizontalPadding="1.5rem">
        <form>

        <div>   
            <Card title="Personal Information">
                <Input
                    label="Name "
                    name= "name"
                    required
                    value={input.name} 
                    placeholder= "Name"
                    type = "text"
                />
                <Input
                    label="Surname "
                    name= "surname"
                    required
                    value={input.surname} 
                    placeholder= "Surname"
                    type = "text"
                />
                <Input
                    label="Email "
                    name= "email"
                    required
                    value={input.email} 
                    placeholder= "Email"
                    type = "text"
                />
                <Input
                    label="Phone"
                    name= "phone"
                    required
                    value={input.phone} 
                    placeholder= "Phone number"
                    type = "number"
                />
                <Input
                    label="Address "
                    name= "adress"
                    value={input.adress} 
                    placeholder= "Adress"
                    type = "text"
                />
                <Input
                    label="City "
                    name= "city"
                    value={input.city} 
                    placeholder= "City"
                    type = "text"
                />
                <Input
                    label="State "
                    name= "state"
                    value={input.state} 
                    placeholder= "State"
                    type = "text"
                />
                <Input
                    label="Postal code "
                    name= "postal"
                    required
                    value={input.postal} 
                    placeholder= "Postal code"
                    type = "number"
                />
            </Card>

            <Card title="Contact Details">
                <Input
                    label="Name "
                    name= "contactname"
                    required
                    value={input.contactname} 
                    placeholder= "Name"
                    type = "text"
                />
                <Input
                    label="Surname "
                    name= "contactsurname"
                    required
                    value={input.contactsurname} 
                    placeholder= "Surname"
                    type = "text"
                />
                <Input
                    label="Email "
                    name= "contactemail"
                    required
                    value={input.contactemail} 
                    placeholder= "Email"
                    type = "text"
                />
                <Input
                    label="Phone"
                    name= "contactphone"
                    required
                    value={input.contactphone} 
                    placeholder= "Phone number"
                    type = "number"
                />
            </Card>
            <Card title="Professional Assistance">
                
               {/*  OLD SELECT (Not working for the dropdown) */}
                <Select 
                    label="Professional"
                    name= "professional"
                    required
                    value={input.professional} 
                    placeholder= "Professional Assigned"
                    type = "text"
                >
                    <option value="prof1">Professional1</option>
                    <option value="prof">Professional</option>
                </Select>

                {/* Possible new select option. Help needed in the dropdown
                <Select
                    name="professional"
                    required
                    disabled={professionals.length <= 0}
                    >
                        <option>--select professional--</option>
                        {professionals.length > 0 &&
                         professionals.map((professional) => (
                            <option value={professional.id} key={professional.id}>
                            {professional.name}
                            </option>
                         ))}
                </Select>  */}
                
            </Card>
            {/* ADD CLINICAL HISTORY */}
        </div>

        </form>
    </Container>
  );
}

export default Details;