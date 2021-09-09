/* IN CONSTRUCTION */
/* IN CONSTRUCTION */
/* IN CONSTRUCTION */
import React, { useState, useEffect, useContext } from "react";
import { Redirect, useParams } from "react-router-dom";
import axios from "axios";

import { AuthContext } from "../../utils/AuthContext.js";
import axiosApi from "../../utils/AxiosApi";
import Box from "../../components/layouts/Box.js";
import Button from "../../components/layouts/Button.js";
import Card from "../../components/layouts/Card";
import Input from "./../../components/forms/Input.js";
import PageWrapper from "../../components/layouts/PageWrapper.js";
import StyledImg from "./../../components/layouts/StyledImg.js";

const DocumentPage = () => {
    const { id } = useParams();
    const [doc, setDoc] = useState({});
    const { role } = useContext(AuthContext);
    const [redirect, setRedirect] = useState(false); 
    const [mediaPreview, setMediaPreview] = useState("");

    useEffect(() => {
        const getDocs = async () => {
            try{
                const result = await axiosApi.get("/doc"); 
                const professionals = result.data;
                setDoc([...doc]); 
            }
            catch(err){
                console.log(err)
            }
        }
    }); 

    const handleDocUpload = async (event) => {
        const { files } = event.target;
        const doc = files[0];
    
        const data = new FormData();
        data.append("file", doc);
        data.append("upload_preset", "ii8ohoks");
    
        setMediaPreview(window.URL.createObjectURL(doc));
    
        const response = await axios.post(
            "https://api.cloudinary.com/v1_1/dubwqkgru/image/upload"/*  "https://api.cloudinary.com/v1_1/dubwqkgru/image/upload"*/, 
            data
        );
        const mediaUrl = await response.data.url;
        setDoc(mediaUrl);
    };
    

    const uploadDoc = async event => {
        event.preventDefault()
         
        const newDoc = {
            media: doc
        }
     
        try {
            const result = await axiosApi.post('/patients/doc', newDoc)
            const data = await result;
            setRedirect(data.status === 200) 
            console.log('New doc was uploaded', newDoc)
        } catch (err) {
            console.error(err)
        } 
  } 

  //Redirect
    if(redirect && role === "admin"){
        return <Redirect to='/patients'/>
    }
    if(redirect && role === "prof"){
        return <Redirect to='/mypatients'/>
    }

  return (
    <PageWrapper>
        <form onSubmit={uploadDoc}>
            <Card title="Personal Information">
                <Input
                    placeholder="Document"
                    name="doc"
                    type="file"
                    accept="*/*"
                    onChange={handleDocUpload}
                />
                
                {mediaPreview && <StyledImg width="10rem" src={mediaPreview} alt="Media preview" />}
            </Card>
            <Box margin="1rem" padding="1rem">
                <Button type="submit">Create</Button>
            </Box>
        </form>
    </PageWrapper>
  );
};

export default DocumentPage