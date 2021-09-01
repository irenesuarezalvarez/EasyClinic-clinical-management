import React, { useState, useEffect, useContext } from "react";
import { Redirect, useParams } from "react-router-dom";
import axios from "axios";

import { AuthContext } from "../../utils/AuthContext.js";
import axiosApi from "../../utils/AxiosApi.js";
import Button from "../../components/layouts/Button.js";
import Box from "../../components/layouts/Box.js";
import Card from "../../components/layouts/Card.js";
import Input from "../../components/forms/Input.js";
import PageWrapper from "../../components/layouts/PageWrapper.js";
import Select from "../../components/forms/Select.js";
import StyledImg from "../../components/layouts/StyledImg.js";
import StyledLink from "../../components/layouts/StyledLink.js";

const EditPatientPage = () => {
    const { id } = useParams();
    const { role } = useContext(AuthContext);
    const [input, setInput] = useState({});
    const [patient, setPatient] = useState([]);
    const [redirect, setRedirect] = useState(false); 
    const [professionals, setProfessionals] = useState([]);
    const [image, setImage] = useState("");
    const [mediaPreview, setMediaPreview] = useState("");

    //Get data 
    useEffect(() => {
        getPatient()
        getProfessionals()  
    }, [])
    
    //Get Patient
    const getPatient = async () => {
        try{
            const response = await axiosApi.get(`/patients/edit/${id}`);
            setPatient(response.data)
            setImage(response.data.media)
        }
        catch(err){
            console.log(err)
        }
    }
    
    //Get professionals for dropdown
    const getProfessionals = async () =>{
        try{
            const result = await axiosApi.get("/professionals"); 
            const professionals = result.data;
            setProfessionals([...professionals]); 
        }
        catch(err){
            console.log(err)
        }
       
    }

    //Send patient edited
    const editPatient = async event => {
        event.preventDefault()          
        try {
            const response =  await axiosApi.post(`/patients/edit/${id}`, input)
            const status = await response.status 
            setRedirect(status === 200) 
        } catch (err) {
            console.error(err)
        } 
    } 

    //Picture
    const addImageToInput = (mediaUrl) =>{
        console.log('im in', mediaUrl)
        setInput((prevState) => ({
            ...prevState,
            media: mediaUrl,
        }));
    }

    const uploadImage = async (event) => {
        const { files } = event.target;
        const image = files[0];
    
        const data = new FormData();
        data.append("file", image);
        data.append("upload_preset", "ii8ohoks");
    
        setMediaPreview(window.URL.createObjectURL(image));
    
        const response = await axios.post(
            "https://api.cloudinary.com/v1_1/dubwqkgru/image/upload", /// process.env.REACT_APP_CLOUDINARY_URL ///
            data
        );
        const mediaUrl = await response.data.url;
        addImageToInput(mediaUrl)
    };
  
    
    //Redirect
    if(redirect && role === "admin"){
        return <Redirect to='/patients'/>
    }
    if(redirect && role === "prof"){
        return <Redirect to='/mypatients'/>
    }

    function renderPatient(){
        const { name, surname, email, phone, address, city, state, postal, contactname, contactsurname, contactemail, contactphone, professional } = patient;
        
        const handleChange = (event) => {
            const { name, value } = event.target;
        
            setInput((prevState) => ({
                ...prevState,
                [name]: value,
            }));
        };
                 
        return(
            <div> 
                {Object.keys(patient).length > 0  && 
                    <form onSubmit={editPatient}>
                        <Card title="Personal Information">
                            <Box>
                                <StyledImg width="10rem" src={mediaPreview ? mediaPreview : image} alt="Patient Profile"/>
                            </Box>
                           
                            <Input
                                name="media"
                                type="file"
                                accept="image/*"
                                onChange={(uploadImage)}
                            /> 

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
                                name= "address"
                                defaultValue={address} 
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

                        <Card title="Contact Person">
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

                        <Box direction="row" position="space-around" margin="1rem" padding="1rem">
                            { role === "prof" && 
                                <StyledLink to="/mypatients">Back</StyledLink>
                            }

                            { role === "admin" &&
                                <StyledLink to="/patients">Back</StyledLink>
                            }

                            <Button type="submit">Edit</Button>
                        </Box>
                        
                    </form>
                }
            </div>
        )
    }

    return(
        <PageWrapper>
            <div>{renderPatient()}</div>    
        </PageWrapper>
    )
  }

export default EditPatientPage;