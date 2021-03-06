import React, { useState, useContext } from "react";
import { Redirect } from "react-router";

import { AuthContext } from "../../utils/AuthContext";
import Box from "../../components/layouts/Box";
import Button from "../../components/layouts/Button";
import Card from "../../components/layouts/Card";
import Input from "../../components/forms/Input";
import PageWrapper from "../../components/layouts/PageWrapper";
import Select from "../../components/forms/Select";

const SignupPage = () => {
  const { signUp, role } = useContext(AuthContext);
  const [input, setInput] = useState({});
  const [redirect, setRedirect] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const createUser = async (event) => {
    event.preventDefault()
    const newUser = {
      username: input.username,
      email: input.email,
      role: input.role,
      color: input.color,
      password: input.password
    } 
    
    try{
      const data = await signUp(newUser);
      setRedirect(data.status === 200);
    }
    catch(error){
      console.log(error);
    }
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
              name="email"
              required
              value={input.email} 
              placeholder="Enter your email"
              onChange={handleChange}
              type="text"
            />
       
            <Select
              label="Role position "
              name="role"
              required
              value={input.role} 
              placeholder= "Enter your role position"
              onChange={handleChange}
              type="text"
            >
              <option value="">--select professional--</option>
              <option value="admin">Administrative</option>
              <option value="prof">Professional</option>
            </Select>
            
            <Input
              label="Color "
              name="color"
              required
              value={input.color} 
              placeholder="Enter your color"
              onChange={handleChange}
              type="text"
            />

            <Input
              label="Password "
              name="password"
              required
              value={input.password} 
              placeholder="Enter your password"
              onChange={handleChange}
              type="password"
            />
            <Box margin="1rem" padding="1rem">
              <Button type="submit">Create account</Button>
            </Box>
           
          </Card>
        </form>
    </PageWrapper>

  );
}

export default SignupPage;
