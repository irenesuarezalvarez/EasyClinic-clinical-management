import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

import axiosApi from "../../utils/AxiosApi";
import Box from "../../components/layouts/Box.js";
import Button from "../../components/layouts/Button.js";
import Card from "../../components/layouts/Card";
import Input from "./../../components/forms/Input.js";
import PageWrapper from "../../components/layouts/PageWrapper.js";
import Select from "./../../components/forms/Select"
import StyledImg from "./../../components/layouts/StyledImg.js";

const CreatePatientPage = () => {
    const [input, setInput] = useState({});
    const [redirect, setRedirect] = useState(false); 
    const [professionals, setProfessionals] = useState([]);
    const [image, setImage] = useState("");
    const [mediaPreview, setMediaPreview] = useState("");

    useEffect(() => {
        const fetchUsers = async () => {
            try{
                const result = await axiosApi.get("/professionals"); 
                const professionals = result.data;
                setProfessionals([...professionals]); 
            }
            catch(err){
                console.log(err)
            }
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

    const handleImageUpload = async (event) => {
        const { files } = event.target;
        const image = files[0];
    
        const data = new FormData();
        data.append("file", image);
        data.append("upload_preset", "ii8ohoks");
    
        setMediaPreview(window.URL.createObjectURL(image));
    
        const response = await axios.post(
            "https://api.cloudinary.com/v1_1/dubwqkgru/image/upload"/* process.env.REACT_APP_CLOUDINARY_URL */, 
            data
        );
        const mediaUrl = await response.data.url;
        setImage(mediaUrl);
    };
    
      //NO TRY CATCH BLOCK AQUI (ARRIBA)
    const createPatient = async event => {
        event.preventDefault()
         
        const newPatient = {
            media: image,
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
            const result = await axiosApi.post('/patients/create', newPatient)
            const data = await result;
            setRedirect(data.status === 200)  //CHANGED
            
            console.log('New patient was created', newPatient)
        } catch (err) {
            console.error(err)
        } 
  } 

  if(redirect){
    return <Redirect to='/patients'/>
  }

  return (
    <PageWrapper>
        
        <form onSubmit={createPatient}>

            <Card title="Personal Information">
                <Input
                    placeholder="Profile Picture"
                    name="media"
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                />
                
                {mediaPreview && <StyledImg width="10rem" src={mediaPreview} alt="Media preview" />}
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
                    name= "address"
                    value={input.address} 
                    placeholder= "Address"
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
                    label="Professional"
                    required
                    onChange={handleChange}
                    disabled={professionals.length <= 0}
                    >
                        <option value="">--select professional--</option>
                        {professionals.length > 0 && professionals.map((professional) => (
                            <option value={professional._id} key={professional._id}>
                            {professional.username}
                            </option>
                        ))}
                </Select> 
                
            </Card>
            <Box margin="1rem" padding="1rem">
                <Button type="submit">Create</Button>
            </Box>
            
        </form>
    </PageWrapper>
  );
}



export default CreatePatientPage;