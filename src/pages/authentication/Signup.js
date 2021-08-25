import React, { useState, useContext } from "react";
import { Redirect } from "react-router";
import {AuthContext} from "../../utils/AuthContext"

import Input from "./../../components/forms/Input";
import Select from "./../../components/forms/Select";
import Card from "./../../components/layouts/Card";
import Button from "../../components/layouts/Button";
import BtnDiv from "../../components/layouts/BtnDiv";
import PageWrapper from "../../components/layouts/PageWrapper";


function Signup() {
  const { signUp, role } = useContext(AuthContext)
  const [input, setInput] = useState({});
  const [redirect, setRedirect] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const createUser =  event => {
    event.preventDefault()
    const newUser = {
      username: input.username,
      email: input.email,
      role: input.role,
      password: input.password
    } 
     
    signUp(newUser)
    setRedirect(true) 
  } 

  if(redirect && role === "prof"){
    return <Redirect to='/mypatients'/>
  }else if(redirect && role === "admin"){
    return <Redirect to='/patients'/>
  }

  return (
    <PageWrapper>
        <form onSubmit={createUser}>
          <Card title="Sign Up">
            <Input
              label="Username"
              name="username"
              required
              value={input.username} 
              placeholder="Enter your username"
              onChange={handleChange}
              type="text"
            />
            <Input
              label="Email "
              name= "email"
              required
              value={input.email} 
              placeholder= "Enter your email"
              onChange= {handleChange}
              type = "text"
            />
       
            <Select
              label="Role position "
              name= "role"
              required
              value={input.role} 
              placeholder= "Enter your role position"
              onChange= {handleChange}
              type = "text"
            >
                 <option value="">--select professional--</option>
                <option value="admin">Administrative</option>
                <option value="prof">Professional</option>
            </Select>
            

            <Input
              label="Password "
              name= "password"
              required
              value={input.password} 
              placeholder= "Enter your password"
              onChange= {handleChange}
              type = "password"
            />
            <BtnDiv>
              <Button type="submit">Create account</Button>
            </BtnDiv>
           
          </Card>
        </form>
    </PageWrapper>

  );
}

export default Signup;
