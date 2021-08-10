import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import axios from 'axios';

import Input from "./../../components/forms/Input.js";
import Select from "./../../components/forms/Select"
import Container from "./../../components/layouts/Container";
import Card from "../../components/layouts/Card";


function Create() {
  const [input, setInput] = useState({});
  const [redirect, setRedirect] = useState(false); 
  const [professionals, setProfessionals] = useState([]);

    useEffect(() => {
    const fetchUsers = async () => {
      const result = await fetch("http://localhost:5000/professionals"); //HELP NEEDED HERE
      const professionals = await result.json();
      setProfessionals([...professionals]);
    };

    fetchUsers();
    }, []);
    
    const handleChange = (event) => {
    const { name, value } = event.target;

    setInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleClick = async event => {
    event.preventDefault()
    const newPatient = {
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
      await axios.post('http://localhost:5000/patients/create', newPatient)
      setRedirect(true) 
      console.log('New patient created', newPatient )
    } catch (err) {
      console.error(err)
    } 
  } 

  if(redirect){
    return <Redirect to='/patients'></Redirect>
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
                    onChange= {handleChange}
                    type = "text"
                />
                <Input
                    label="Surname "
                    name= "surname"
                    required
                    value={input.surname} 
                    placeholder= "Surname"
                    onChange= {handleChange}
                    type = "text"
                />
                <Input
                    label="Email "
                    name= "email"
                    required
                    value={input.email} 
                    placeholder= "Email"
                    onChange= {handleChange}
                    type = "text"
                />
                <Input
                    label="Phone"
                    name= "phone"
                    required
                    value={input.phone} 
                    placeholder= "Phone number"
                    onChange= {handleChange}
                    type = "number"
                />
                <Input
                    label="Address "
                    name= "adress"
                    value={input.adress} 
                    placeholder= "Adress"
                    onChange= {handleChange}
                    type = "text"
                />
                <Input
                    label="City "
                    name= "city"
                    value={input.city} 
                    placeholder= "City"
                    onChange= {handleChange}
                    type = "text"
                />
                <Input
                    label="State "
                    name= "state"
                    value={input.state} 
                    placeholder= "State"
                    onChange= {handleChange}
                    type = "text"
                />
                <Input
                    label="Postal code "
                    name= "postal"
                    required
                    value={input.postal} 
                    placeholder= "Postal code"
                    onChange= {handleChange}
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
                    onChange= {handleChange}
                    type = "text"
                />
                <Input
                    label="Surname "
                    name= "contactsurname"
                    required
                    value={input.contactsurname} 
                    placeholder= "Surname"
                    onChange= {handleChange}
                    type = "text"
                />
                <Input
                    label="Email "
                    name= "contactemail"
                    required
                    value={input.contactemail} 
                    placeholder= "Email"
                    onChange= {handleChange}
                    type = "text"
                />
                <Input
                    label="Phone"
                    name= "contactphone"
                    required
                    value={input.contactphone} 
                    placeholder= "Phone number"
                    onChange= {handleChange}
                    type = "number"
                />
            </Card>
            <Card title="Professional Assistance">
                
                <Select
                    name="professional"
                    required
                    onChange={handleChange}
                    disabled={professionals.length <= 0}
                    >
                        <option>--select professional--</option>
                        {professionals.length > 0 &&
                         professionals.map((professional) => (
                            <option value={professional.id} key={professional._id}>
                            {professional.username}
                            </option>
                         ))}
                </Select> 
                
            </Card>
            <button onClick= {handleClick}>Create new Patient</button>
        </div>

        </form>
    </Container>
  );
}

export default Create;